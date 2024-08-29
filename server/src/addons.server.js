Addons = {};
;(function(){
	'use strict';

	let active_addons = {};
	Addons.get_active_addons = function () { return active_addons; };
	Addons.get_global = function (name) {
		return get_global_object()[name];
	};
	function add_global_to_addon_context ({ name, object, addon_name, context }) {
		let maybe_proxy_object = object;
		
		if (isfun(object)) {
			maybe_proxy_object = new Proxy(object, {
				apply: (target, this_arg, args) => {
					let result = target(...args);
					Hooks.run('addons-function-call', { name, module_name: addon_name, result, args: args });
					return result;
				}
			});
		}

		context[ name ] = maybe_proxy_object;
	};
	Addons.add_global = function (name, object, source_addon) {
		if (isfun(name)) { // if you wanna provide a function as the 1st & only arg
			object = name; // name is fn
			name = object.name; // anonymouse fns are '' so they'll be ignored
		}
		if (name) {
			get_global_object()[name] = object;
			Hooks.run('addons-global-added', { source_addon, object_name: name });

			// add to all active addons contexts
			for ( let addon_name in active_addons ) {
				let addon = active_addons[ addon_name ];
				if (addon && addon.context) {
					add_global_to_addon_context({
						name,
						object,
						addon_name,
						context: addon.context
					});
				}
			}
		}
	};
	Addons.remove_global = function (name, source_addon) {
		if (name) {
			delete get_global_object()[name];
			Hooks.run('addons-global-removed', { source_addon, object_name: name });

			// add to all active addons contexts
			for ( let addon_name in active_addons ) {
				let addon = active_addons[ addon_name ];
				if (addon && addon.context) {
					delete addon.context[ name ];
				}
			}
		}
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
	// TODO exclude /data
	// TODO for client changes, broadcast changes to client
	watcher = chokidar.watch('./addons', {
		persistent: true,
		awaitWriteFinish: true,
	});

	async function delayed_reload_addon(uid) {
		$.taxeer('reload-addon-'+uid, async function () {
			await reactivate_addon ( uid );
		}, 2500);
	}
	async function delayed_deactivate_addon(uid) {
		$.taxeer('reload-deactivate-'+uid, async function () {
			await deactivate_addon ( uid );
		}, 2500);
	}
	
	watcher.on('all', async (event, path) => {
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
		
		if (path.endsWith('build.w')) { // since this is written in this function, avoid infinite loop
			return;
		}
		
		let reload, ignore;

		if (crumbs[2] == 'data') {
			Cli.echo(uid, 'ignored /data/');
			ignore = 1;
		}

		if (event == 'unlinkDir') {
			if (crumbs.length == 2) { // addons / <uid>
				delayed_deactivate_addon( uid );
			} else if (crumbs.length >= 2) {
				reload = 1;
			}
		}

		if (event == 'change') {
			if (crumbs.length >= 2) { // addons / <uid> / ..
				reload = 1;
			}
		}
		
		if (reload && !ignore) {
			await increment_build( uid );
			delayed_reload_addon( uid );
		}
	});

	async function get_dependents_tree(uid, tree = []) {
		for (let name in active_addons) {
			let addon = active_addons[name];
			if (addon.manifest.needs) {
				if (addon.manifest.needs.includes(uid)) {
					push_if_unique(tree, name);
					await get_dependents_tree(name, tree);
				}
			}
		}

		return tree;
	}

	async function increment_build (uid) {
		let { exists, addon_path } = await does_addon_exist( uid );
		if (!exists) return 0;

		let build = 1;
		try {
			build = Files.get.file(addon_path+'build.w').toString();
		} catch (e) {}

		try {
			Files.set.file(addon_path+'build.w', ''+(++build));
		} catch (e) {}
		
		Cli.echo( ' ^bright^Addons > '+uid+'~~ incremented build...', build );
	}

	async function does_addon_exist(uid) {
		let addon_path = './addons/'+uid+'/', exists, is_directory;

		try {
			let stats = await Files.get_stats(addon_path);
			is_directory = stats.isDirectory();
		} catch (e) {}

		if (is_directory) {
			try {
				exists = Files.get.folder(addon_path);
			} catch (e) {}
		}

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
	async function get_manifest(uid) { // assumes addon exists (is installed)
		let manifest = '', build = 1;
		try {
			// TODO needs promisification
			manifest = Files.get.file('./addons/'+uid+'/manifest.w').toString();
			build = Files.get.file('./addons/'+uid+'/build.w').toString();
		} catch (e) {}

		manifest = Weld.decode_config( manifest || '' );
		manifest.build = to_num(build);
		manifest.needs = to_arr_or_undef(manifest.needs);
		manifest.enabled = to_bool(manifest.enabled); // enabled by default
		manifest.client_needs = to_arr_or_undef(manifest.client_needs);
		manifest.server_needs = to_arr_or_undef(manifest.server_needs);
		// only devs with perms can change this, these addons cannot be removed or disabled
		manifest.system = to_bool(manifest.system);
		// these addons are only allowed in dev instances, can't be pushed to production
		// this helps generate packages witholding certain addons
		manifest.private = to_bool(manifest.private);
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

		let icons_folder;
		try {
			icons_folder = Files.get.folder(addon_path+'icons/');
		} catch (e) {}

		if (icons_folder) {
			client.icons = {};
			icons_folder.forEach(function (o) {
				try {
					if (o.endsWith('.svg')) {
						client.icons[ o.slice(0, -4) ] = Files.get.file(addon_path+'icons/'+o).toString();
					}
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

	Object.assign(Addons, {
		does_addon_exist,
		get_icon,
		get_manifest,
		get_addon_client,
		get_addon_server,
		get_dependents_tree,
	});

	// TODO these changes should mark themselves in an object with timestamps & deliver through Polling
	async function activate_addon(uid) {
		if (active_addons[uid]) {
			// addon is already active
			return;
		}

		let addon = active_addons[uid] = {
			hooks: [],
			globals: [],
			context: {},
		};
		
		let manifest = await get_manifest( uid );
		addon.manifest = manifest;

		let is_active = await MongoDB.get( Config.database.name, module_name, {
			uid,
			active: 1,
		});
		
		if (!is_active) {
			if (manifest.enabled)
				is_active = 1;
		}

		if (!is_active) {
			Cli.echo( ' ^bright^Addons > '+uid+'~~ was modified but is disabled, leaving it be!' );
			return;
		}

		if (manifest.needs) {
			for await (let need of manifest.needs) {
				if (need !== uid)
					await activate_addon( need );
			}
		}

		if (manifest.server_needs) {
			for await (let need of manifest.server_needs) {
				if (need !== uid)
					await activate_addon( need );
			}
		}

		Cli.echo( ' ^bright^Addons > '+uid+'~~ activating...' );
		let server = await get_addon_server( uid );
		if (server.main) {
			try {
				let pre_script =
`let addon_path = $.path+'/addons/${uid}';
let echo = function () {
	return Cli.echo.apply($, [' ^bright^Addons > ${uid}~~', ...arguments]);
};
let warn = function () {
	return Cli.warn.apply($, [' ^bright^Addons > ${uid}~~', ...arguments]);
};
let Addons = shallowcopy(get_global_object().Addons);
Addons.add_global = function (name, object) {
	if (isfun(name)) { // if you wanna provide a function as the 1st & only arg
		object = name; // name is fn
		name = object.name; // anonymouse fns are '' so they'll be ignored
	}

	let original = get_global_object().Addons;
	let result = original.add_global(name, object, '${uid}');
	Addons.get_active_addons()[ '${uid}' ].globals.push( name );
	return result;
};
Addons.remove_global = function (name) {
	let original = get_global_object().Addons;

	let result = original.remove_global(name, '${uid}');

	let globals = Addons.get_active_addons()[ '${uid}' ].globals;
	let index = globals.indexOf( name );
	if (index > -1) globals.splice( index, 1 );

	return result;
};
let Hooks = shallowcopy(get_global_object().Hooks);
Hooks.set = function () {
	let original = get_global_object().Hooks;
	let result = original.set.apply(original, arguments);
	Addons.get_active_addons()[ '${uid}' ].hooks.push( result );
	return result;
};
function collect_hook ( hook ) {
	Addons.get_active_addons()[ '${uid}' ].hooks.push( hook );
}
`;
				let modified_script =
`;(function(){
${pre_script}
${server.main}
})();`
;
				const script = new vm.Script(modified_script, {
					filename: uid,
					lineOffset: -pre_script.match(/\n/g).length-2,
				});
				addon.context = { ...global, require };
				for (let i of Object.getOwnPropertyNames(global)) {
					addon.context[i] = global[i];
					add_global_to_addon_context({
						name: i,
						object: global[i],
						addon_name: uid,
						context: addon.context
					});
				}
				script.runInNewContext(addon.context);
//				strict_eval(modified_script);
			} catch (e) {
				$.log.e( 'Addons error in', e );
			}
		}
		await Hooks.until( 'addon-activate', { uid } );
		Cli.echo( ' ^bright^Addons > '+uid+'~~ activated!' );
	}
	async function deactivate_addon(uid) {
		if (active_addons[uid]) {
			let addon = active_addons[uid];

			Cli.echo( ' ^bright^Addons > '+uid+'~~ deactivating...' );
			await Hooks.until( 'addon-deactivate', { uid } );
			// for reloads, keep track of any deps that were active and reactivate them afterwards
			// also deactivate addons that need this addon
			for (let name in active_addons) {
				let addon = active_addons[name];
				if (addon.manifest.needs) {
					if (addon.manifest.needs.includes(uid)) {
						await deactivate_addon(name);
					}
				}
			}

			if (addon.hooks) {
				addon.hooks.forEach(function (hook) {
					if (hook.remove) hook.remove();
				});
			}
			if (addon.globals) {
				addon.globals.forEach(function (name) {
					Addons.remove_global(name, uid);
				});
			}

			Cli.echo( ' ^bright^Addons > '+uid+'~~ deactivated!' );
			delete active_addons[uid];
		}
	}
	async function reactivate_addon(uid) {
		Cli.echo( ' ^bright^Addons > '+uid+'~~ reactivating...' );
		let dependents = await get_dependents_tree( uid )
		await deactivate_addon		( uid );
		await activate_addon		( uid );
		for await (let dep of dependents) {
			await activate_addon( dep );
		}
	}
	async function enable_addon(uid) {
		Cli.echo( ' ^bright^Addons > '+uid+'~~ enabling...' );
		await Hooks.until( 'addon-enable', { uid } );
		Cli.echo( ' ^bright^Addons > '+uid+'~~ enabled!' );
	}
	async function disable_addon(uid) {
		Cli.echo( ' ^bright^Addons > '+uid+'~~ disabling...' );
		await Hooks.until( 'addon-disable', { uid } );
		Cli.echo( ' ^bright^Addons > '+uid+'~~ disabled!' );
	}

	;(async function(){
		// check db for enabled addons
		// load their server side code
		// whenever their dirs change, update the server code
		// if disabled/deleted, unload the server code, remove db entry

		let available = [], enabled = [];
		try {
			available = Files.get.folder('./addons');
		} catch (e) {}
		
		for await (let uid of available) {
			let manifest = await get_manifest( uid );
			if (manifest && manifest.enabled) {
				enabled.push( uid );
			}
		}

		let active_addons = await MongoDB.query( Config.database.name, module_name, {
			active: 1,
		});
		for await (let addon of active_addons.rows) {
			push_if_unique( enabled, addon.uid );
		}
		
		Cli.echo( ' ^bright^Addons~~ '+enabled.length+' enabled' );
		
		for await (let uid of enabled) {
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
					await enable_addon( uid );
					await activate_addon( uid );
					client = await get_addon_client( uid );
				} else {
					await deactivate_addon( uid );
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
			let { exists, addon_path } = await does_addon_exist( uid );

			if (exists) { // only true for existing directories
				let addon = await get_manifest( uid );
				addon.icon = await get_icon( uid );

				let is_active = await MongoDB.get( Config.database.name, module_name, { uid, active: 1 } );
				
				if (!is_active) { // if it hasn't been explicitly disabled
					if (addon.enabled) is_active = 1;
				}
				
				if (is_active) {
					addon.active = 1;
				}

				out.push( addon );
			}
		}
		
		response.get( out ).finish();
	});
	
})();
