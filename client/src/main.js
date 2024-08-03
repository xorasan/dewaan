// TODO update view on session change
;(function(){
	'use strict';

	var main_dom_keys, module_name = 'main';
	var pagermain = function () {
		if (Pager) {
			Pager.safaa();
			Pager.jama3(module_name,	'iconhome',			xlate('Home'));
			Pager.jama3('profile',		'iconperson',		xlate('Profile'));
			Pager.jama3('settings',		'iconsettings',		xlate('Settings'));
			Pager.choose(module_name);
		}
	};
	var pagersessions = function () {
		if (Pager) {
			Pager.safaa();
			Pager.jama3(module_name,	'iconhome',			xlate('Home'));
			Pager.jama3('signin',		'iconperson',		xlate('Sign In'));
			Pager.jama3('signup',		'iconpersonadd',	xlate('Sign Up'));
			Pager.jama3('settings',		'iconsettings',		xlate('Settings'));
			Pager.choose(module_name);
		}
	};

	var main = {
		update: function () {
			if (sessions.signedin()) {
				pagermain();
			} else {
				pagersessions();
			}
		},
	};
	
	async function restore_view_by_context() {
//		if (Sessions.signedin()) {
//			Views.run('rooms');
//		} else {
			Views.run('intro');
//		}
		Sidebar.choose(module_name);
		Webapp.header([0, 0, '/e.png']);

		var o = await Offline.fetch( 'manifest' );
		if (Webapp.is_at_home()) {
			if (o && o.length) {
				var name, description;
				o.forEach(function (o, i) {
					if (o.uid == 'name') name = o.value;
					if (o.uid == 'description') description = o.value;
				});
				Webapp.header([name, description, '/e.png']);
			} else {
				Webapp.header([Config.appname, Config.desc, '/e.png']);
			}
		}
	}
	
	Hooks.set('sessionchange', function (key) {
		if (key) { // logged in
			pagermain();
		} else { // logged out
			pagersessions();
		}
	});
	Hooks.set('ready', function () {
		if (get_global_object().Sidebar) {
			Sidebar.set({
				uid: module_name,
				title: 'Home',
				icon: 'iconhome',
			});
		}

		Webapp.add_home_view([/*'rooms', */'intro']);
		Webapp.header_sticky(1);
		Webapp.status_bar_padding();
		Webapp.ask_on_exit(1);
		main.update(); // setup pager
		
		main_dom_keys = View.dom_keys(module_name);
		
//		$.taxeer('goto-view', function () {
//			Hooks.run('view', 'call_screen');
//		}, 100);
	});
	Hooks.set('viewready', function (args) {
		if (View.is_active(module_name)) {
			restore_view_by_context();
		}
	});
	Hooks.set('restore', function () {
		if (backstack.darajah === 0 && View.is_active([module_name/*, 'rooms'*/])) {
			restore_view_by_context();
		}
	});

})();
