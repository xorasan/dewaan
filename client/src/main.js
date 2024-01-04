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
	
	function restore_view_by_context() {
		if (sessions.signedin()) {
			view.run('rooms');
		} else {
			view.run('intro');
		}
		if (get_global_object().Sidebar) Sidebar.choose(module_name);
		webapp.header([Config.appname, Config.desc, '/e.png']);
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

		Webapp.add_home_view(['rooms', 'intro']);
		Webapp.header_sticky(1);
		Webapp.status_bar_padding();
		Webapp.ask_on_exit(1);
		main.update(); // setup pager
		
		main_dom_keys = view.dom_keys(module_name);
		
//		$.taxeer('goto-view', function () {
//			Hooks.run('view', 'call_screen');
//		}, 100);
	});
	Hooks.set('viewready', function (args) {
		if (view.is_active(module_name)) {
			restore_view_by_context();
		}
	});
	Hooks.set('restore', function () {
		if (backstack.darajah === 0 && view.is_active([module_name, 'rooms'])) {
			restore_view_by_context();
		}
	});

})();
