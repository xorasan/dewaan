let Addons = {
	active: {},
	get_icon: function (name) {
		if (this.active[name]) return this.active[name].icon;
	},
	add_global: function (name, o) {
		get_global_object()[name] = o;
	},
	remove_global: function (name) {
		delete get_global_object()[name]
	},
}, addons_list, debug_addons = 1;
;(function(){
	'use strict';
	
	let module_name = 'addons', module_title = 'Addons', module_icon = 'iconextension',
		dom_keys;
	
	async function activate_addons() {
		if (debug_addons) $.log.w('Addons activate_addons');

		var addons = await get_all_addons();
		for await (let addon of addons) {
			if (addon.active) {
				if (debug_addons) $.log.w('Addons activating', addon.name);

				var report = {
					uid:		module_name,
					title:		module_title,
					info:		'Activating '+addon.name+'...',
					progress:	'0%',
				};

				Webapp.report_progress( report );

				await activate( addon, 1 );

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
					name: o.name,
					build: o.build,
					description: o.description,
					active: o.active,
				};
				if (o.icon) {
					addon.icon$h = o.icon;
				} else {
					addon.icon = Templates.get_icon_as_svg( module_icon );
				}
				addons_list.set(addon);
			});
			if (View.is_active_fully(module_name)) {
				addons_list.select();
			}
		} else {
			addons_list.message('No addons found');
		}
	}

	async function activate_addon(uid) {
		addons_list.get_item_object( uid )
		activate(  );
	}
	async function disable_addon(uid) {
		
	}
	
	async function activate(o, activate_only = 0) {
		if (o) {
			let state;
			if (activate_only) state = 1;
			else state = o.active ? 0 : 1;

			var result = await Network.fetch(module_name, 'state', {
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

					let addon = Addons.active[ o.uid ] = {
						icon: o.icon$h || o.icon || default_icon
					};
					// TODO satisfy deps first if any
					
					
					if (client.main) { // client.js
						let addons_scripts = elementbyid('addons-scripts');
						let element = createelement('script', 0, 'addon-script-'+o.uid);
						
						addon.script_element = element;

						innerhtml(element, client.main);
						addons_scripts.append( element );
					}

					let files = client.files;
					if (files) {
						var main_htm_w = files['client.htm.w'];
						if (main_htm_w) {
							let addons_dom = elementbyid('addons-dom');
							let element = createelement('div', 0, 'addon-dom-'+o.uid);
							main_htm_w = Weld.decode_htm( main_htm_w ).parsed;
							
							addon.dom_element = element;
							
							innerhtml(element, main_htm_w);
							
							View.index( element );
							Sheet.index( element );
							Templates.index( element );
							
							addons_dom.append( element );
						}

						var main_css_w = files['client.css.w'];
						if (main_css_w) {
							let addons_styles = elementbyid('addons-styles');
							let element = createelement('div', 0, 'addon-css-'+o.uid);
							let dynamic_element = createelement('style', 0, 'addon-css-dynamic-'+o.uid);
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
					}
				}
				
				o.active = result.active;
				if (addons_list) {
					addons_list.set(o);
				}
				update_softkeys();
				
				// Fire Hooks to all Addons
				if (state === 0) {
					await Hooks.until( 'addon-disable', { uid: o.uid } );
					let addon = Addons.active[ o.uid ];
					
					// remove scripts, dom and styles
					let addons_script = elementbyid('addon-script-'+o.uid);
					if (addons_script) addons_script.remove();
					
					if (addon) {
						if (addon.script_element) addon.script_element.remove();

						if (addon.dom_element) {
							View.expunge( addon.dom_element );
							Sheet.expunge( addon.dom_element );
							Templates.expunge( addon.dom_element );
							addon.dom_element.remove();
						}

						if (addon.dynamic_style_element) addon.dynamic_style_element.remove();
						if (addon.theme_hook) addon.theme_hook.remove();
					}

					delete Addons.active[ o.uid ];
				}
				if (state === 1) {
					await Hooks.until( 'addon-activate', { uid: o.uid } );
				}
			}
		}
	}
	
	var activate_sk = { n: 'Activate',
		k: 'a',
		alt: 1,
		c: function () {
			activate( addons_list.get_item_object() );
		},
	};
	
	function update_softkeys() { if (View.is_active_fully(module_name)) {
		var o = addons_list.get_item_object();
		if (o) {
			if (o.active) {
				activate_sk.n = 'Disable';
				activate_sk.i = 'iconremovecircleoutline';
			} else {
				activate_sk.n = 'Activate';
				activate_sk.i = 'iconaddcircleoutline';
			}
			Softkeys.add(activate_sk);
		}
	} }
	
	Hooks.set('webapp-init', async function () {
		await activate_addons();
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
			o.state = o.active ? 'Active' : 'Disabled';
			return o;
		};
		
		// TODO get a list of installed addons and then activate them
		// This will need support from Webapp ready hook, it will need to support async pre functions
	});
	
	Hooks.set('view-ready', async function () { if (View.is_active_fully(module_name)) {
		Webapp.header([module_title, '', 'iconextension']);
		if (get_global_object().Sidebar) Sidebar.choose(module_name);
		addons_list.select();
		update_softkeys();

		await list_all_addons();
	} });
})();