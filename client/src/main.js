;(function(){
	'use strict';

	var main = {
		set_header: function () {
			webapp.header([Config.appname, Config.desc, '/e.png']);
		}
	};
	
	Hooks.set('XPO.ready', function () {
		webapp.statusbarpadding();
		webapp.ask_on_exit(1);
		main.set_header();
		
		var main_dom_keys = view.dom_keys('XPO.main');
		var main_list = list( main_dom_keys.XPO.list ).idprefix( 'XPO.mainlist' );
		for (var i = 0; i < 50; ++i) {
			main_list.set({
				title: i+' item'
			});
		}
	});

	Hooks.set('XPO.restore', function () {
		if (view.is_active('XPO.main')) {
			main.set_header();
		}
	});

})();
