var Addons = {};
global.Addons = Addons;
;(function(){
	'use strict';

	let active_addons = {};
	Addons.get_active_addons = function () { return active_addons; };
	Addons.add_global = function (name, o) {
		if (name)
			get_global_object()[name] = o;
	};
	Addons.remove_global = function (name) {
		if (name)
			delete get_global_object()[name]
	};
	
	const child_process = require('child_process');
	const util = require('util');
	const chokidar = require('./deps/chokidar');
	const exec = util.promisify(child_process.exec);
	const vm = require('vm');

	function strict_eval(str) {
		return eval('"use strict";'+str);
	};

	let module_name = 'addons', watcher;
	
	Files.set.folder('./addons');

	// watch the addons folder recursively
	// when an addon changes, it should be reloaded with a timeout
	// when an addon is created, it should be added but kept disabled
	// TODO when removed, its database entry should also get removed
	watcher = chokidar.watch('./addons', {
		persistent: true,
		awaitWriteFinish: true,
	});

	async function delayed_reload_addon(uid) {
		$.taxeer('reload-addon-'+uid, async function () {
			await disable_addon ( uid );
			await activate_addon( uid );
		}, 2500);
	}
	async function delayed_disable_addon(uid) {
		$.taxeer('reload-disable-'+uid, async function () {
			await disable_addon ( uid );
		}, 2500);
	}
	
	watcher.on('all', (event, path) => {
		// TODO react to more events
//		$.log(event, path);
		
		// normally events have paths like addons/...
		// but some unlink events have paths like /dewaan/addons/..., lets remove the /dewaan/ part
		// since we're only watching addons/...
		if (path.startsWith('/dewaan/'))
			path = path.slice('/dewaan/'.length);
		
		let crumbs = path.split('/'),
			uid = crumbs[1];

		// TODO only reload on the server if .../server/... is modified

		if (event == 'unlinkDir') {
			if (crumbs.length == 2) { // addons / <uid>
				delayed_disable_addon( uid );
			} else if (crumbs.length >= 2) {
				delayed_reload_addon( uid );
			}
		}

		if (event == 'change') {
			if (crumbs.length >= 2) { // addons / <uid> / ..
				delayed_reload_addon( uid );
			}
		}
	});

	async function does_addon_exist(uid) {
		let addon_path = './addons/'+uid+'/', exists;
		try {
			exists = Files.get.folder(addon_path);
		} catch (e) {}

		return { exists, addon_path };
	}
	async function get_icon(uid) {
		// FAILED i tried to import the icon dynamically using `mudeer-utils get-icons <icon>`
		// but it failed since Dewaan is supposed to work without Mudeer, it's not installed inside Docker
		// so i went with this static solution
		let icon_file;
		try {
			icon_file = Files.get.file('./addons/'+uid+'/'+'icon.svg').toString();
		} catch (e) {}
		
		return icon_file;
	}
	async function get_manifest(uid) {
		let manifest = '';
		try {
			// TODO needs promisification
			manifest = Files.get.file('./addons/'+uid+'/manifest.w').toString();
		} catch (e) {}

		manifest = Weld.decode_config( manifest || '' );
		manifest.needs = to_arr_or_undef(manifest.needs);
		manifest.client_needs = to_arr_or_undef(manifest.client_needs);
		manifest.uid = uid;
		
		return manifest;
	}
	async function get_addon_client(uid) { // assumes addon exists (is installed)
		let addon_path = './addons/'+uid+'/', client = {};
		
		// if client is requesting client-side code
		// TODO create a Dev mode on client side and allow subscribing for live addon updates
		try {
			client.main = Files.get.file(addon_path+'client.js').toString();
		} catch (e) {}

		let client_folder;
		try {
			client_folder = Files.get.folder(addon_path+'client/');
		} catch (e) {}

		if (client_folder) {
			client.files = {};
			client_folder.forEach(function (o) {
				try {
					client.files[ o ] = Files.get.file(addon_path+'client/'+o).toString();
				} catch (e) {}
			});
		}

		return client;
	}
	async function get_addon_server(uid) { // assumes addon exists (is installed)
		let addon_path = './addons/'+uid+'/', server = {};
		
		try {
			server.main = Files.get.file(addon_path+'server.js').toString();
		} catch (e) {}

		let server_folder;
		try {
			server_folder = Files.get.folder(addon_path+'server/');
		} catch (e) {}

		if (server_folder) {
			server.files = {};
			server_folder.forEach(function (o) {
				try {
					server.files[ o ] = Files.get.file(addon_path+'server/'+o).toString();
				} catch (e) {}
			});
		}

		return server;
	}

	// TODO these changes should mark themselves in an object with timestamps & deliver through Polling
	async function activate_addon(uid) {
		if (active_addons[uid]) {
			// addon is already active
			return;
		}

		let addon = active_addons[uid] = {
			hooks: [],
			globals: [],
		};
		let is_active = await MongoDB.get( Config.database.name, module_name, {
			uid,
			active: 1,
		});

		if (!is_active) {
			Cli.echo( ' ^bright^Addons > '+uid+'~~ was modified but is disabled, leaving it be!' );
			return;
		}

		Cli.echo( ' ^bright^Addons > '+uid+'~~ activating...' );
		let server = await get_addon_server( uid );
		if (server.main) {
			// TODO we can improve the isolation here ;)
			// vm.runInNewContext(server.main, { Hooks, and other fns }, uid)
			try {
				let modified_script =
`
;(function(){
let Addons = shallowcopy(get_global_object().Addons);
Addons.add_global = function () {
	let original = get_global_object().Addons;
	let name = original.add_global.apply(original, arguments);
	Addons.get_active_addons()[ "${uid}" ].globals.push( name );
	return name;
};
let Hooks = shallowcopy(get_global_object().Hooks);
Hooks.set = function () {
	let original = get_global_object().Hooks;
	let result = original.set.apply(original, arguments);
	Addons.get_active_addons()[ "${uid}" ].hooks.push( result );
	return result;
};
${server.main}
})();`
;
				strict_eval(modified_script);
			} catch (e) {
				$.log.e( e );
			}
		}
		await Hooks.until( 'addon-activate', { uid } );
		Cli.echo( ' ^bright^Addons > '+uid+'~~ activated!' );
	}
	async function disable_addon(uid) {
		if (active_addons[uid]) {
			let addon = active_addons[uid];

			Cli.echo( ' ^bright^Addons > '+uid+'~~ disabling...' );
			await Hooks.until( 'addon-disable', { uid } );

			if (addon.hooks) {
				addon.hooks.forEach(function (hook) {
					if (hook.remove) hook.remove();
				});
			}
			if (addon.globals) {
				addon.globals.forEach(function (name) {
					Addons.remove_global(name);
				});
			}

			Cli.echo( ' ^bright^Addons > '+uid+'~~ disabled!' );
			delete active_addons[uid];
		}
	}

	;(async function(){
		// check db for enabled addons
		// load their server side code
		// whenever their dirs change, update the server code
		// if disabled/deleted, unload the server code, remove db entry
		let active_addons = await MongoDB.query( Config.database.name, module_name, {
			active: 1,
		});
		
		Cli.echo( ' ^bright^Addons~~ '+active_addons.rows.length+' active' );
		
		for await (let addon of active_addons.rows) {
			let uid = addon.uid;
			let { exists, addon_path } = await does_addon_exist( uid );
			if (exists) {
				await activate_addon(uid);
			} else {
				Cli.echo( ' ^bright^Addons > '+uid+'~~ not found!' );
				await MongoDB.purge( Config.database.name, module_name, { uid } );
				Cli.echo( ' ^bright^Addons > '+uid+'~~ has been removed :)' );
			}
		}

	})();

	// TODO intercept & deliver updates on addon states
	
	Network.get(module_name, 'client', async function (response) {
		let uid = generate_alias( parsestring(response.value.uid) ),
			{ exists } = await does_addon_exist(uid),
			client,
			icon,
			manifest;

		if (exists) {
			client = await get_addon_client( uid );
			icon = await get_icon(uid);
			manifest = await get_manifest(uid);
		}

		response.get( {
			client,
			icon,
			manifest,
		} ).finish();
	});
	Network.get(module_name, 'state', async function (response) {
		let uid = generate_alias( parsestring(response.value.uid) );
		let new_state = response.value.state ? 1 : 0;
		let active = 0, client,
			{ exists } = await does_addon_exist(uid);

		if (exists) {
			let added = await MongoDB.set( Config.database.name, module_name, [{
				uid,
				active: new_state,
			}]);

			if (added.rows.length) {
				active = new_state;
				if (new_state) {
					await activate_addon( uid );
					client = await get_addon_client( uid );
				} else {
					await disable_addon( uid );
				}
			}
		}

		response.get( {
			active,
			client,
		} ).finish();
	});
	Network.get(module_name, 'all', async function (response) {
		let available = [], out = [];
		try {
			available = Files.get.folder('./addons');
//			$.log( available );
		} catch (e) {}
		
		for await (let uid of available) {
			let addon = await get_manifest( uid );
			addon.icon = await get_icon( uid );

			let is_active = await MongoDB.get( Config.database.name, module_name, { uid, active: 1 } );
			
			if (is_active) {
				addon.active = 1;
			}

			out.push( addon );
		}
		
		response.get( out ).finish();
	});
	
})();