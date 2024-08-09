var Addons = {}, addons_list, debug_addons = 1;
;(function(){
	'use strict';
	
	let module_name = 'addons', module_title = 'Addons', module_icon = 'iconextension',
		dom_keys, active_addons = {};

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
	Addons.add_global = function (name, o) {
		get_global_object()[name] = o;
		return name;
	};
	Addons.remove_global = function (name) {
		delete get_global_object()[name]
	};
	
	async function activate_all_addons() {
		if (debug_addons) $.log.w('Addons activate_all_addons');

		let addons = await get_all_addons();
		for await (let addon of addons) {
			if (addon.active) {
				let report = {
					uid:		module_name,
					title:		module_title,
					info:		'Activating '+addon.name+'...',
					progress:	'0%',
				};

				Webapp.report_progress( report );

				await activate_addon( addon.uid );

				report.progress = '100%';
				Webapp.report_progress( report );
			}
		}
	}
	
	async function get_all_addons() {
		return await Network.fetch(module_name, 'all', 1);
	}

	async function list_all_addons() {
		var addons = await get_all_addons();
		if (isarr(addons)) {
			addons_list.message();
			addons.forEach(function (o, i) {
				var addon = {
					uid: o.uid,
					name: o.name || o.uid,
					build: o.build,
					description: o.description,
					needs: o.needs,
					active: o.active,
				};
				addon.icon$h = o.icon || Templates.get_icon_as_svg( module_icon );
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

		// IMPORTANT any changes made to shallow copied objects wont be reflected inside the addon after this
		// better use get_* accessors :)
		let modified_script =
`;(function(){
let echo = function () {
	return Cli.echo.apply($, [' ^bright^Addons > ${uid}~~', ...arguments]);
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
let Addons = shallowcopy( get_global_object().Addons );
Addons.add_global = function (name, object) {
	let original = get_global_object().Addons;
	let new_object = object;
	if (isfun(object)) {
		new_object = new Proxy(object, {
			apply: (target, this_arg, args) => {
				let result = target(...args);
				Hooks.run('addons-function-call', { name, module_name: '${uid}', result, args: args });
				return result;
			}
		});
	}
	name = original.add_global(name, new_object);
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
${content}
})();`
;

		innerhtml(element, modified_script);
		addon.script_elements.push( element );
		addons_scripts.append( element );
	}

	async function activate_addon(uid) { // loads into memory & runs the addon
		// if already active, break
		// get the client
		// satisfy deps first if any
		// load the css, htm, js, icons
		// fire on hooks
		
		if ( active_addons[uid] ) return;
		
		let { client, icon, manifest } = await Network.fetch( module_name, 'client', { uid } );
		
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

		await Hooks.until( 'addon-activate', { uid } );

		update_addon_state(uid, 2);
	}
	async function deactivate_addon(uid) {
		if (debug_addons) $.log.w('Addons deactivating', uid);

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

		let addon = active_addons[ uid ];
		
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
		let old_view_name = Views.get();
		let old_view_uid  = Views.get_uid();
		let dependents = await get_dependents_tree( uid )
		await deactivate_addon		( uid );
		await activate_addon		( uid );
		for await (let dep of dependents) {
			await activate_addon( dep );
		}
		
		// TEST MORE run the view hook again to restore previous view if we're still there
		Hooks.run('view', { name: old_view_name, uid: old_view_uid });
	}
	async function disable_addon(uid) {
		$.log.w( 'Addons disabling...', uid );
		await Hooks.until( 'addon-disable', { uid } );

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
		let result = await Network.fetch(module_name, 'state', {
			uid,
			state: 1,
		});

		update_addon_state(uid, 1);

		return result;
	}
	
	async function activate(o, activate_only = 0) {
		if (o) {
			let state;
			if (activate_only) state = 1;
			else state = o.active ? 0 : 1;

			if (state === 1 && active_addons[uid]) {
				$.log.w( uid, 'is already active' );
				return;
			}

			// TODO this should only fetch the addon's client
			// 
			var result = await Network.fetch(module_name, 'client', {
				uid: o.uid,
				state
			});
			if (result) {
				let client = result.client;
				if (state === 1 && client) { // client
					let default_icon;
					if (!o.icon$h && !o.icon) {
						default_icon = Templates.get_icon_as_svg( module_icon );
					}

				}
				
				
				// Fire Hooks to all Addons
				if (state === 0) {
				}
			}
		}
	}

	Addons.enable		= enable_addon		;
	Addons.activate		= activate_addon	;
	Addons.reactivate	= reactivate_addon	;
	Addons.deactivate	= deactivate_addon	;
	Addons.disable		= disable_addon		;
	
	var activate_sk = { n: 'Activate',
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
	var enable_sk = { n: 'Enable',
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
	var reactivate_sk = { n: 'Reactivate Addon',
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
		$.log.w( 'addons list created' );
		addons_list.on_selection = function (o) {
			update_softkeys();
		};
		addons_list.before_set = function (o) {
				 if (o.active == 2 || active_addons[o.uid]) o.state = 'Active';
			else if (o.active == 1) o.state = 'Enabled';
			else 					o.state = 'Disabled';
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
})();