let Addons = {};
;(function(){
	'use strict';
	
	const child_process = require('child_process');
	const util = require('util');
	const exec = util.promisify(child_process.exec);

	let module_name = 'addons';
	
	Files.set.folder('./addons');
	
	async function does_addon_exist(uid) {
		let addon_path = './addons/'+uid+'/', exists;
		try {
			exists = Files.get.folder(addon_path);
		} catch (e) {}

		return { exists, addon_path };
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
	
	Network.get(module_name, 'state', async function (response) {
		let uid = generate_alias( parsestring(response.value.uid) );
		let new_state = response.value.state ? 1 : 0;
		let active = 0, client, exists = await does_addon_exist(uid);
		if (exists) {
			let added = await MongoDB.set( Config.database.name, module_name, [{
				uid,
				active: new_state,
			}]);

			if (added.rows.length) {
				active = new_state;
				if (new_state)
					client = await get_addon_client( uid );
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
			let manifest;

			try {
				// TODO needs promisification
				manifest = Files.get.file('./addons/'+uid+'/manifest.w').toString();
			} catch (e) {}

			let addon = Weld.decode_config( manifest || '' );
			addon.uid = uid;
			
			var addon_path = './addons/'+uid+'/';

			// FAILED i tried to import the icon dynamically using `mudeer-utils get-icons <icon>`
			// but it failed since Dewaan is supposed to work without Mudeer, it's not installed inside Docker
			// so i went with this static solution
			let icon_file;
			try {
				icon_file = Files.get.file(addon_path+'icon.svg').toString();
			} catch (e) {}
			
			if (icon_file) addon.icon = icon_file;

			var is_active = await MongoDB.get( Config.database.name, module_name, { uid, active: 1 } );
			
			if (is_active) {
				addon.active = 1;
			}

			out.push( addon );
		}
		
		response.get( out ).finish();
	});
	
})();