async function IDBHandler (db_name, version = 8) {
	if (isundef(db_name)) throw Error('db name required');
	
	let handler = {};
	
	handler.db_name = db_name;
	handler.store_name = db_name;
	handler.version = version;
	handler.db = null;

	async function init() {
		return new Promise(function (resolve, reject) {
			const request = indexedDB.open(handler.db_name, handler.version);
			request.onupgradeneeded = function (e) {
				const db = e.target.result;
				if (db.objectStoreNames.contains(handler.store_name)) {
					db.deleteObjectStore(handler.store_name);
				}
				db.createObjectStore(handler.store_name, { keyPath: 'uid' });
			};
			request.onsuccess = function (e) {
				handler.db = e.target.result;
				resolve();
			};
			request.onerror = function (e) { reject(`Error: ${e.target.error}`) };
		});
	}
	async function set(data) {
		return handler._operate('put', data);
	}
	async function get(uid) {
		return handler._operate('get', uid);
	}
	async function get_all() {
		return handler._operate('getAll');
	}
	async function remove(uid) {
		return handler._operate('delete', uid);
	}
	async function _operate(operation, value) {
		return new Promise(function (resolve, reject) {
			const tx = handler.db.transaction([handler.store_name], 'readwrite');
			const store = tx.objectStore(handler.store_name);
			const request = store[operation](value);
			request.onsuccess = function () { resolve(request.result) };
			request.onerror = function (e) { reject(e.target.error) };
		});
	}
	async function destroy () {
		handler.db.close();
	}
	
	Object.assign(handler, { init, set, get, get_all, remove, _operate });
	await init();
	
	return handler;
}

var Addons = {}, AddonsCache, addons_list, debug_addons = 1;
;(function(){
	'use strict';
	
	let module_name = 'addons', module_title = 'Addons', module_icon = 'iconextension',
		dom_keys, active_addons = {};

	let addon_globals_registry = {};
	Addons.addon_globals_registry = addon_globals_registry;

	Addons.get_active_addons = function () { return active_addons; };
	Addons.get_list = function () {
		return addons_list;
	};
	Addons.get_icon = function (name, icon) {
		let addon = active_addons[name];
		if (addon) {
			if (icon) {
				if (addon.client.icons)
					return addon.client.icons[ icon ];
			} else {
				return addon.icon;
			}
		}
	};
	Addons.get_global = function (name) {
		return get_global_object()[name];
	};
	function add_global_to_addon_context ( name, addon_name ) {
		let object = addon_globals_registry[name];
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

		return maybe_proxy_object;
	};
	Addons.add_global_to_addon_context = add_global_to_addon_context;
	Addons.add_global = function (name, object, source_addon) {
		if (isfun(name)) { // if you wanna provide a function as the 1st & only arg
			object = name; // name is fn
			name = object.name; // anonymouse fns are '' so they'll be ignored
		}

		if (name) {
			addon_globals_registry[name] = object;
			get_global_object()[name] = object;
			Hooks.run('addons-global-added', { source_addon, object_name: name });

			// add to all active addons contexts
			for ( let addon_name in active_addons ) {
				let addon = active_addons[ addon_name ];
				if (addon && addon.context) {
					addon.context[ name ] = add_global_to_addon_context({
						name,
						object,
						addon_name,
						context: addon.context
					});
				}
			}
		}
		return name;
	};
	Addons.remove_global = function (name, source_addon) {
		if (name) {
			delete addon_globals_registry[name];
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
	
	async function sleep (time = 200) { return await new Promise((r) => { setTimeout(() => { r() }, time); }) }
	
	async function activate_all_addons() {
		if (debug_addons) $.log.w('Addons activate_all_addons');

		let addons, tracker, got_from_cache, cached_index = {};
		
		tracker = measure_performance('AddonsCache creation');
		AddonsCache = await IDBHandler('addons-cache');
		tracker.end();

		tracker = measure_performance('get cached addons');
		addons = await AddonsCache.get_all();
		if (addons && addons.length) {
			addons = addons.filter(( addon ) => addon.active);
		}
		tracker.end();

		if (!addons.length) {
			tracker = measure_performance('fetch available addons');
			addons = await get_all_addons();
			tracker.end();
		} else {
			addons = addons.map((addon) => {
				cached_index[ addon.uid ] = addon.data;
				return addon;
			});
			got_from_cache = 1;
		}
		
		// sort system addons first
		addons.sort(function (a, b) {
			return b.system - a.system;
		});

		if (!got_from_cache) {
			tracker = measure_performance('get addons from cache');
			let cached = await AddonsCache.get_all();
			cached.forEach(function ({ uid, data }) {
				cached_index[ uid ] = data;
			});
			tracker.end();
		}

		let activations_tracker = measure_performance('all addons activations');
		for await (let addon of addons) {
			if ( active_addons[addon.uid] ) continue;
			
			if (addon.active) {
				let report = {
					uid:		module_name,
					title:		addon.name || addon.uid,
					info:		'Activating...',
					progress:	'0%',
				};
				Webapp.report_progress( report );
				
				let addon_data = cached_index[addon.uid];
				
				if (!got_from_cache && addon_data && addon_data.manifest) {
					if (addon.build > addon_data.manifest.build) { // if Server build is newer
						addon_data = 0; // invalidate local data
						Webapp.report_progress({ ...report, info: 'Needs update...' });
					}
				}
				
				if (!addon_data) {
					Webapp.report_progress({ ...report, info: 'Fetching update...' });
					tracker = measure_performance('fetch + cache addon '+addon.uid);
					addon_data = await fetch_addon_data( addon.uid, { addon } );
					tracker.end();
				}

				Webapp.report_progress({ ...report, info: 'Activating...', progress: '90%' });
				await activate_addon( addon.uid, { addon_data } );

				report.progress = '100%';
				Webapp.report_progress( report );
			}
		}
		
		activations_tracker.end();

		if (got_from_cache) { // if we got addons from offline storage
			get_all_addons(); // this gets available addons list & updates addons in cache
		}
	}
	
	async function get_all_addons () {
		// if online, fetch the latest and compare & update old cached ones
		let addons = await Network.fetch(module_name, 'all', 1);
		
		if (addons) {
			let cached_index = {};
			let cached = await AddonsCache.get_all();
			cached.forEach(function ({ uid, data }) {
				cached_index[ uid ] = data;
			});
			
			for ( let addon of addons ) {
				// this updates it in the cache 
				let addon_data = cached_index[ addon.uid ];
				if (addon_data && addon_data.manifest) {
					if (addon.build > addon_data.manifest.build) { // if Server build is newer
						addon_data = 0; // invalidate local data
					}
				}
				
				if (!addon_data) {
					addon_data = await Network.fetch( module_name, 'client', { uid: addon.uid } );

					if (addon_data && AddonsCache) {
						await AddonsCache.set({ uid: addon.uid, data: addon_data, ...addon });
					}
				}
			}
		}
		
		return addons;
	}
	async function fetch_addon_data ( uid, { addon } = {} ) {
		let addon_data = await AddonsCache.get( uid ), got_from_cache, outdated;
		if (addon_data) {
			got_from_cache = 1;
			outdated = addon_data.outdated;
			addon_data = addon_data.data;
		}
		
		if (!addon_data || outdated) {
			try {
				addon_data = await Network.fetch( module_name, 'client', { uid } );
			} catch (e) {
				$.log.w(
					'couldnt fetch '+(outdated ? 'outdated ' : '' )+'addon', uid,
					(outdated ? 'using local version instead' : '' )
				);
			}
		}

		if (addon_data && AddonsCache && !got_from_cache) {
			let tracker = measure_performance('cache addon '+uid);
			await AddonsCache.set({ uid, data: addon_data, ...addon });
			tracker.end();
		}

		return addon_data;
	}
	async function list_all_addons () {
		var addons = await get_all_addons();
		if (isarr(addons)) {
			addons_list.message();
			addons.forEach(function (o, i) {
				var addon = { ...o,
					name: o.name || o.uid,
					icon$h: o.icon || Templates.get_icon_as_svg( module_icon ),
				};
				addons_list.set(addon);
			});
			if (View.is_active_fully(module_name)) {
				addons_list.select();
			}
		} else {
			addons_list.message('No addons found');
		}
	}

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
	Addons.get_dependents_tree = get_dependents_tree;

	function update_addon_state(uid, state) {
		if (addons_list) {
			let addon = addons_list.get_item_object_by_uid( uid );
			if (addon) {
				addon.active = state;
				addons_list.set( addon );
			}
		}
	}

	function append_script({ addon, content = '', name = Time.now() }) {
		let uid = addon.manifest.uid;
		let addons_scripts = elementbyid('addons-scripts');
		let element = createelement('script', 0, 'addon-script-'+uid+( name ? '-'+name : '' ));

		let dynamic_functions = '';

		addon.context = {};
		for (let i in addon_globals_registry) {
			if (isfun(addon_globals_registry[i])) {
				dynamic_functions += `${i}=Addons.add_global_to_addon_context('${i}','${uid}');`;
			}
		}
		
		let addon_name = addon.manifest.name || uid;

		// IMPORTANT any changes made to shallow copied objects wont be reflected inside the addon after this
		// better use get_* accessors :)
		let modified_script =
`;(async function(){
let echo = function () {
	return Cli.echo.apply($, [' ^bright^Addons > ${addon_name}~~', ...arguments]);
};
let warn = function () {
	return Cli.warn.apply($, [' ^bright^Addons > ${addon_name}~~', ...arguments]);
};
let listener = function () {
	let original = get_global_object().listener;
	let result = original.apply(original, arguments); // returns { remove };
	Addons.get_active_addons()[ "${uid}" ].listeners.push( result );
	return result;
};
let Recycler = function () {
	let original = get_global_object().Recycler;
	let recycler = original.apply(original, arguments);
	Addons.get_active_addons()[ "${uid}" ].recyclers.push( recycler );
	return recycler;
};
let List = function () {
	let original = get_global_object().List;
	let list = original.apply(original, arguments);
	Addons.get_active_addons()[ "${uid}" ].lists.push( list );
	return list;
};
function get_addon_context () {
	return Addons.get_active_addons()[ "${uid}" ].context;
};
let Addons = shallowcopy( get_global_object().Addons );
Addons.add_global = function (name, object) {
	if (isfun(name)) { // if you wanna provide a function as the 1st & only arg
		object = name; // name is fn
		name = object.name; // anonymouse fns are '' so they'll be ignored
	}

	let original = get_global_object().Addons;
	name = original.add_global(name, object);
	Addons.get_active_addons()[ "${uid}" ].globals.push( name );
	return name;
};
function get_icon ( icon_name ) {
	return Addons.get_icon( '${uid}', icon_name );
}
let Hooks = shallowcopy(get_global_object().Hooks);
Hooks.set = function () {
	let original = get_global_object().Hooks;
	let result = original.set.apply(original, arguments);
	Addons.get_active_addons()[ "${uid}" ].hooks.push( result );
	return result;
};
function collect_hook ( hook ) {
	Addons.get_active_addons()[ "${uid}" ].hooks.push( hook );
}
function uncollect_hook ( hook ) {
	let hooks = Addons.get_active_addons()[ "${uid}" ].hooks;
	
	let index = hooks.indexOf( hook );
	if (index > -1) {
		hooks.splice( index, 1 );
	}
}
function uncollect_list ( list ) {
	let lists = Addons.get_active_addons()[ "${uid}" ].lists;
	
	let index = lists.indexOf( list );
	if (index > -1) {
		lists.splice( index, 1 );
	}
}
let Sidebar = shallowcopy(get_global_object().Sidebar);
Sidebar.set = function () {
	let original = get_global_object().Sidebar;

	let uid = (arguments[0] || {}).uid;
	let old_object = Sidebar.get(uid); // has to come first

	let result = original.set.apply(original, arguments);

	if (!old_object) // only remember new objects
		Addons.get_active_addons()[ "${uid}" ].sidebar.push( uid );

	return result;
};
${dynamic_functions}
${content}
}).call( Addons.get_active_addons()[ '${uid}' ].context );`
;

		innerhtml(element, modified_script);
		addon.script_elements.push( element );
		addons_scripts.append( element );
	}

	async function activate_addon(uid, { addon_data } = {}) { // loads into memory & runs the addon
		// if already active, break
		// get the client
		// satisfy deps first if any
		// load the css, htm, js, icons
		// fire on hooks
		
		if ( active_addons[uid] ) return;
		
		if (!addon_data) {
			addon_data = await fetch_addon_data( uid );
			// TODO error handling
		}

		let { client, icon, manifest } = addon_data;
		
		client = client || {};
		manifest = manifest || { uid };
		
		if (!icon) { icon = Templates.get_icon_as_svg( module_icon ); }

		let addon = active_addons[ uid ] = { client, icon, manifest };
		
		if (!addon.client.icons) addon.client.icons = {};

		// TODO server_needs & client_needs
		if (manifest.needs) {
			for await (let need of manifest.needs) {
				if (need !== uid)
					await activate_addon( need );
			}
		}

		if (manifest.client_needs) {
			for await (let need of manifest.client_needs) {
				if (need !== uid)
					await activate_addon( need );
			}
		}

		if (debug_addons) $.log.w('Addons activating', manifest.name || uid);
		
		addon.script_elements = [];
		addon.hooks = [];
		addon.globals = [];
		addon.sidebar = [];
		addon.recyclers = [];
		addon.lists = [];
		addon.listeners = [];
		
		if (client.main) { // client.js
			append_script({ addon, content: client.main });
		}

		let files = client.files;
		if (files) {
			let main_htm_w = files['client.htm.w'];
			if (main_htm_w) {
				let addons_dom = elementbyid('addons-dom');
				let element = createelement('div', 0, 'addon-dom-'+uid);
				main_htm_w = Weld.decode_htm( main_htm_w ).parsed;
				
				addon.dom_element = element;
				
				innerhtml(element, main_htm_w);
				
				addon.views_found  = Views.index( element );
				addon.sheets_found = Sheet.index( element );
				Templates.index( element );
				Webapp.icons( element, { addon } );
				
				addons_dom.append( element );
			}

			let main_css_w = files['client.css.w'];
			if (main_css_w) {
				let addons_styles = elementbyid('addons-styles');
				let element = createelement('div', 0, 'addon-css-'+uid);
				let dynamic_element = createelement('style', 0, 'addon-css-dynamic-'+uid);
				main_css_w = Weld.decode_css( main_css_w );
				
				addon.style_element = element;

				addon.dynamic_style_element = dynamic_element;
				addon.dynamic_style_fn = new Function ('o', main_css_w.script);
				addon.theme_hook = Hooks.set('themes-set', function (current_theme) {
					innerhtml(addon.dynamic_style_element, addon.dynamic_style_fn( current_theme ));
				});
				innerhtml(addon.dynamic_style_element, addon.dynamic_style_fn( Themes.get_current_theme() ));
				
				innerhtml(element, main_css_w.style);
				
				addons_styles.append( element );
				addons_styles.append( dynamic_element );
			}
		
			for (var name in files) {
				if (name.endsWith('.js')) {
					append_script({ addon, content: files[name], name });
				}
			}
		}

		await Hooks.until( 'addon-activate', { uid, addon } );

		update_addon_state(uid, 2);
	}
	async function deactivate_addon(uid) {
		if (debug_addons) $.log.w('Addons deactivating', uid);

		let addon = active_addons[ uid ];

		await Hooks.until( 'addon-deactivate', { uid, addon } );
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
		
		if (addon) {
			// remove scripts, dom and styles
			for (let script of addon.script_elements) {
				if (script && script.remove) script.remove();
			}
			addon.script_elements = [];

			if (addon.hooks) {
				addon.hooks.forEach(function (hook) {
					if (hook.remove) hook.remove();
				});
			}
			if (addon.sidebar) {
				addon.sidebar.forEach(function (uid) {
					Sidebar.remove(uid);
				});
			}
			if (addon.globals) {
				addon.globals.forEach(function (name) {
					Addons.remove_global(name);
				});
			}
			if (addon.recyclers) {
				for await (let recycler of addon.recyclers) {
					await recycler.destroy();
				}
			}
			if (addon.lists) {
				for await (let list of addon.lists) {
					await list.destroy();
				}
			}
			if (addon.listeners) {
				for await (let listener of addon.listeners) {
					listener.remove();
				}
			}

			if (addon.dom_element) {
				Views.expunge( addon.dom_element );
				Sheet.expunge( addon.dom_element );
				Templates.expunge( addon.dom_element );
				addon.dom_element.remove();
			}

			if (addon.style_element) addon.style_element.remove();
			if (addon.dynamic_style_element) addon.dynamic_style_element.remove();
			if (addon.theme_hook) addon.theme_hook.remove();
		}

		delete active_addons[ uid ];

		update_addon_state(uid, 1);
	}
	async function reactivate_addon(uid) {
		await Hooks.until( 'addons-reactivate', { uid } );
		
		if (AddonsCache) {
			let cached_addon = await AddonsCache.get(uid);
			if (cached_addon) { // if cached
				cached_addon.outdated = 1; // save hint for possible fetching
				await AddonsCache.set(cached_addon); // will be used in fetch_addon_data
			}
		}
		
		let old_view_name = Views.get();
		let old_view_uid  = Views.get_uid();

		let old_sheet_name = Sheets.get_active();
		let old_sheet_uid = Sheets.get_active_uid();

		let dependents = await get_dependents_tree( uid )
		await deactivate_addon		( uid );
		await activate_addon		( uid );
		for await (let dep of dependents) {
			await activate_addon( dep );
		}
		
		// TEST MORE run the view hook again to restore previous view if we're still there
		Hooks.run('view', { name: old_view_name, uid: old_view_uid });
		// TEST should we await the view load? (prlm. testing apparently not)
		if (old_sheet_name) {
			Hooks.run('sheet', { name: old_sheet_name, uid: old_sheet_uid });
		}
	}
	async function disable_addon(uid) {
		$.log.w( 'Addons disabling...', uid );
		await Hooks.until( 'addon-disable', { uid } );

		if (AddonsCache) { // mark enabled offline
			let cached_addon = await AddonsCache.get(uid);
			if (cached_addon) { // if cached
				cached_addon.active = 0;
				await AddonsCache.set(cached_addon);
			}
		}

		let result = await Network.fetch(module_name, 'state', {
			uid,
			state: 0,
		});

		// also disable addons that need this addon
		for (let name in active_addons) {
			let addon = active_addons[name];
			if (addon.manifest.needs) {
				if (addon.manifest.needs.includes(uid)) {
					await disable_addon(name);
				}
			}
		}

		update_addon_state(uid, 0);

		return result;
	}
	async function enable_addon(uid) {
		$.log.w( 'Addons enabling...', uid );

		if (AddonsCache) { // mark enabled offline
			let cached_addon = await AddonsCache.get(uid);
			if (cached_addon) { // if cached
				cached_addon.active = 1;
				await AddonsCache.set(cached_addon);
			}
		}

		let result = await Network.fetch(module_name, 'state', {
			uid,
			state: 1,
		});

		update_addon_state(uid, 1);

		return result;
	}
	
	Object.assign(Addons, {
		enable		:	enable_addon		,
		activate	:	activate_addon		,
		reactivate	:	reactivate_addon	,
		deactivate	:	deactivate_addon	,
		disable		:	disable_addon		,
		get_all		:	get_all_addons		,
	});
	
	let activate_sk = { n: 'Activate',
		k: 'a',
		alt: 1,
		c: async function () {
			let addon = addons_list.get_item_object();
			if (addon) {
				if (addon.active == 2 || active_addons[addon.uid]) {
					await deactivate_addon( addon.uid );
				} else {
					await activate_addon( addon.uid );
				}
			}

			update_softkeys();
		},
	};
	let enable_sk = { n: 'Enable',
		k: 'e',
		alt: 1,
		c: async function () {
			let addon = addons_list.get_item_object();
			if (addon) {
				if (addon.active || active_addons[addon.uid]) {
					await deactivate_addon( addon.uid );
					await disable_addon( addon.uid );
				} else {
					await enable_addon( addon.uid );
					await activate_addon( addon.uid );
				}
			}

			update_softkeys();
		},
	};
	let reactivate_sk = { n: 'Reactivate Addon',
		sh: 'Reactiv. Addon',
		k: 'r',
		i: 'iconrefresh',
		alt: 1,
		shift: 1,
	};
	
	async function add_reactivate_softkey(addon_uid) {
		reactivate_sk.h = 0;
		reactivate_sk.c = async function () {
			if (View.is_active_fully(module_name)) {
				addon_uid = ( addons_list.get_item_object() || {} ).uid;
			}

			if (addon_uid) {
				await reactivate_addon( addon_uid );
			}
		};
		if (await has_access(module_name, 'activate')) Softkeys.add(reactivate_sk);
	}
	
	async function update_softkeys() { if (View.is_active_fully(module_name)) {
		var o = addons_list.get_item_object();
		if (o) {
			reactivate_sk.h = 0;
			if (o.active || active_addons[o.uid]) {
			} else {
				reactivate_sk.h = 1;
			}

			activate_sk.h = 0;
			if (o.active == 2 || active_addons[o.uid]) {
				activate_sk.n = 'Deactivate';
				activate_sk.i = 'iconpause';
			} else if (o.active) {
				activate_sk.n = 'Activate';
				activate_sk.i = 'iconplayarrow';
			} else {
				activate_sk.h = 1;
			}

			if (o.active || active_addons[o.uid]) {
				enable_sk.n = 'Disable';
				enable_sk.i = 'iconremovecircleoutline';
			} else {
				enable_sk.n = 'Enable';
				enable_sk.i = 'iconaddcircleoutline';
			}

			add_reactivate_softkey(o.uid);
			if (await has_access(module_name, 'activate')) Softkeys.add(activate_sk);
			if (await has_access(module_name, 'enable')) Softkeys.add(enable_sk);
		}
	} }
	
	Hooks.set('webapp-init', async function () {
		// get a list of installed addons before the webapp-ready hook and then activate them
		await activate_all_addons();
	});
	Hooks.set('webapp-ready', async function () {
		if (get_global_object().Sidebar) Sidebar.set({
			uid: module_name,
			title: module_title,
			icon: module_icon,
		});
		
		dom_keys = View.dom_keys(module_name);
		
		addons_list = List(dom_keys.list).id_prefix('addon').list_item('addon_item');
		addons_list.on_selection = function (o) {
			update_softkeys();
		};
		addons_list.before_set = function (o) {
				 if (o.active == 2 || active_addons[o.uid]) o.state = 'Active';
			else if (o.active == 1) o.state = 'Enabled';
			else 					o.state = 'Disabled';
			
			o.is_system  = o.system  ? 'izhar' : 'ixtaf';
			o.is_private = o.private ? 'izhar' : 'ixtaf';
			
			return o;
		};
		addons_list.after_set = function (o, c, k) {
			if (isarr(o.needs) && o.needs.length) {
				izhar(k.needs_group);
				innertext(k.needs, o.needs.join(', '));
			} else {
				ixtaf(k.needs_group);
			}
		};
		
		let accessors = [ // feature, description
			[ 'enable', 'Enable/Disable Addon'			 ]	,
			[ 'activate', 'Activate/Deactivate Addon'			 ]	,
		];
		accessors.forEach(function ([ feature, description ]) {
			create_access( module_name, feature, description );
		});
	});
	Hooks.set('view-ready', async function () {
		if (View.is_active_fully(module_name)) {
			Webapp.header([module_title, '', 'iconextension']);
			if (get_global_object().Sidebar) Sidebar.choose(module_name);
			addons_list.select();
			update_softkeys();
	
			await list_all_addons();
		}
		let view_name = Views.get();
		if (view_name) {
			if ( view_name == module_name ) {
				add_reactivate_softkey();
			} else
			for (var i in active_addons) {
				let addon = active_addons[i];
				if ( addon.views_found && addon.views_found.includes( view_name ) ) {
					add_reactivate_softkey(addon.manifest.uid);
					break;
				}
			}
		}
	});
	Hooks.set('sheet-ready', async function () {
		let sheet_name = Sheets.get_active();
		if (sheet_name) {
			for (var i in active_addons) {
				let addon = active_addons[i];
				if ( addon.sheets_found && addon.sheets_found.includes( sheet_name ) ) {
					add_reactivate_softkey(addon.manifest.uid);
					break;
				}
			}
		}
	});
})();
