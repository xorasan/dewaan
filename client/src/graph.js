var SocketIO = io({
	autoConnect: false,
}), call_list, Whiteboard, pointer_data;
;(function(){
	var module_name = 'call_screen', connection_status, connection_status_string,
		should_call;
	
	var pen_colors = [ // TODO dark/bright
		'white',
		'#f66', // red
		'#6f6', // green
		'#ff6', // yellow
		'#69f', // cyan
	];
	var pointer_held = 0;
	
	pointer_data = {};
	function redraw_whiteboard_if_needed() {
		Whiteboard.clear(0, 0, whiteboardui.width, whiteboardui.height);
		for (var i in pointer_data) {
			var data = pointer_data[i];
			var color = 0;
			var caller = call_list.adapter.get(data.uid);
			var x = data.x, y = data.y;
			if (caller) {
				color = caller.color;
				var color_str = pen_colors[color] || 'white';
				Whiteboard.circle(x, y, 10, 0, 360, color_str);
				Whiteboard.text(x+14, y+4, caller.name+' '+data.contact, -1, color_str);
				var lines = data.lines;
				if (isarr(lines)) {
					var xlp, lp; // last point
					lines.forEach(function (p) {
						if (lp && p)
							Whiteboard.line([ lp, p ], color_str);
						if (xlp == 0 && lp && p == 0)
							Whiteboard.circle(lp.x, lp.y, 2, 0, 360, color_str);
						xlp = lp;
						lp = p;
					});
				}
			}
		}
	}
	
	SocketIO.on('error', function (error) {
		$.log.e('socket_io error', error);
		connection_status = 0;
		on_view_ready();
	});
	SocketIO.on('connect', function () {
		$.log.w('socket_io connect');
		connection_status = 1;
		on_view_ready();
	});
	SocketIO.on('reconnect', function (attempt) { // only fired upon successful reconnect
		$.log.w('socket_io reconnect', attempt);
		connection_status = 1;
		on_view_ready();
	});
	SocketIO.on('disconnect', function (reason) {
		$.log.w('socket_io disconnect', reason);
		connection_status = 0;
		on_view_ready();
	});
	SocketIO.on('join', after_others_join);
	SocketIO.on('leave', after_leaving);
	SocketIO.on('pointer', function (data) {
		var session_uid = data[0];
		var converted = percentage_to_pixels(data[1], data[2]);
		data[1] = converted[0];
		data[2] = converted[1];
		var p_data;
		p_data = pointer_data[ session_uid ] = pointer_data[ session_uid ] || {};
		p_data.uid = session_uid;
		p_data.x = data[1];
		p_data.y = data[2];
		var lines;
		lines = p_data.lines = p_data.lines || [];
		if (p_data.contact) {
			var lp = lines[ lines.length-1 ];
			var should_add;
			if (!lp)
				should_add = 1;
			if (lp) {
				if (lp.x != data[1] || lp.y != data[2]) {
					should_add = 1;
				}
			}
			if ( should_add ) {
				lines.push( { x: data[1], y: data[2] } );
				var caller = call_list.adapter.get(p_data.uid);
				if (caller) {
					caller.points = lines.length;
					call_list.set(caller);
				}
			}
		}
		redraw_whiteboard_if_needed();
	});
	SocketIO.on('pointer_contact', function (data) {
		$.log.w('pointer_contact', data);
		var p_data;
		p_data = pointer_data[ data[0] ] = pointer_data[ data[0] ] || {};
		p_data.contact = data[1];
		var lines;
		lines = p_data.lines = p_data.lines || [];
		if (lines.length && data[1] === 0) {
			lines.push(0);
			lines = p_data.lines = simplify_line(lines, 1);
			var caller = call_list.adapter.get(p_data.uid);
			if (caller) {
				caller.points = lines.length;
				call_list.set(caller);
			}
		}
		redraw_whiteboard_if_needed();
	});
	
	function get_session_details() {
		var details = {
			key: Sessions.signedin(),
			platform: 0,
			browser: 0,
			browser_version: 0,
			mobile: 0,
		};
		var uad = navigator.userAgentData;
		if (uad) {
			details.platform = uad.platform;
			details.mobile = uad.mobile;
			if (isarr(uad.brands)) {
				uad.brands.forEach(function (o) {
					if (o.brand != 'Not_A Brand') {
						details.browser = o.brand;
						details.browser_version = o.version;
					}
				});
			}
		}
		return details;
	}
	function after_others_join(result) {
		$.log.w('socket_io join', result);
		should_call = 2;
		on_view_ready();
		if (isarr(result)) {
			result.forEach(function (o) {
				var details_str = '';
				if (o.mobile) details_str += 'Mobile';
				if (o.browser) details_str += ' '+o.browser;
				if (o.browser_version) details_str += ' '+o.browser_version;
				if (o.platform) details_str += ' on '+o.platform;
				call_list.set({
					icon: 'iconperson',
					uid : o.uid,
					color : o.color,
					name: '@'+o.name,
					displayname: o.displayname,
					details: details_str.trim(),
				});
				var keys = call_list.get_item_keys( o.uid );
				keys.color_tag.style.background = pen_colors[o.color] || 'white';
			});
		}
	}
	function after_leaving(result) {
		$.log.w('socket_io leave', result);
		call_list.remove_by_uid( result );
		delete pointer_data[ result ];
		redraw_whiteboard_if_needed();
	}
	function get_connection_string() {
		if (connection_status ===  0) return 'Disconnected';
		if (connection_status ===  1) return 'Connected';
		if (connection_status ===  2) return 'Reconnected'
		if (connection_status === -1) return 'Error';
	}
	function on_view_ready(subtitle) {
		if (view.is_active(module_name)) {
			if (get_global_object().Sidebar) Sidebar.choose(module_name);
			webapp.header([[module_name], subtitle || get_connection_string() || '', 'iconequalizer']);
		}
	}
	function set_call_softkey() {
		softkeys.add({ n: should_call ? 'Hangup' : 'Call',
			k: K.en,
			i: should_call ? 'iconcallend' : 'iconcall',
			c: function (k, e) {
				SocketIO.emit(
					should_call ? 'leave' : 'join',
					get_session_details(),
					should_call ? after_leaving : after_others_join
				);
				if (!should_call) {
					clear_all_callers();
				}
				should_call = !should_call;
				set_call_softkey();
				e && e.preventDefault();
			}
		});
	}
	function resize_whiteboard() {
		$.taxeer('resize_whiteboard', function () {
			var w = headerui.clientWidth-64;
			whiteboardui.width = w;
			whiteboardui.height = w;
			Whiteboard.o.font = '14px sans-serif';
		}, 30);
	}
	function clear_all_callers() {
		call_list.remove_all();
	}
	function pixels_to_percentage(x, y) {
		return [
			parsefloat( x / whiteboardui.width, 3 ),
			parsefloat( y / whiteboardui.height, 3 ),
		];
	}
	function percentage_to_pixels(x, y) {
		return [
			x * whiteboardui.width,
			y * whiteboardui.height,
		];
	}
	
	var soundAllowed, soundNotAllowed;
	Hooks.set('ready', function (args) {
		if (get_global_object().Sidebar) {
			Sidebar.set({
				uid: module_name,
				title: translate('call_screen'),
				icon: 'iconequalizer',
			});
		}

		Webapp.add_minimal_view( module_name );

		Whiteboard = Canvas(whiteboardui);
		whiteboardui.onpointerdown = function () {
			if (!pointer_held) {
				pointer_held = 1;
				SocketIO.emit( 'pointer_contact', 1 );
			}
		};
		function up_or_cancel() {
			if (pointer_held) {
				pointer_held = 0;
				SocketIO.emit( 'pointer_contact', 0 );
			}
		}
		listener('pointerup', up_or_cancel);
		listener('pointercancel', up_or_cancel);
		whiteboardui.onpointermove =
//		whiteboardui.onmousemove =
		(e) => {
			if (connection_status > 0) {
				SocketIO.emit( 'pointer', pixels_to_percentage( e.offsetX, e.offsetY ) );
			}
		};
		resize_whiteboard();

//		Network.response.get(module_name, 'active', function (result) {
//			call_list.title(result+' active');
//		});
		SocketIO.connect();

		var dom_keys = view.dom_keys( module_name );
		call_list = List( dom_keys.list ).idprefix( module_name ).listitem( 'call_list_item' ).grid(4);

		/*
		var visualizer = document.getElementById('visualizer');
		var path, total = 100;
		for (var i = 0 ; i < total; i++) {
			path = document.createElement('div');
			path.className = 'path';
			path.style.left = (i*(100/total))+'%';
			visualizer.appendChild(path);
		}
		var report = 0;
		
		soundAllowed = function (stream) {
			//Audio stops listening in FF without // window.persistAudioStream = stream;
			//https://bugzilla.mozilla.org/show_bug.cgi?id=965483
			//https://support.mozilla.org/en-US/questions/984179
			window.persistAudioStream = stream;
			var audioContent = new AudioContext();
			var audioStream = audioContent.createMediaStreamSource( stream );
			var analyser = audioContent.createAnalyser();
			audioStream.connect(analyser);
			analyser.fftSize = 1024;

			var frequencyArray = new Uint8Array(analyser.frequencyBinCount);
		  
			//Though the frequencyArray has a length longer than 255, there seems to be no
			//significant data after this point. Not worth visualizing.
			var max = 0;
			var doDraw = function () {
				requestAnimationFrame(doDraw);
				analyser.getByteFrequencyData(frequencyArray);
				frequencyArray.forEach(function (o) {
					max = Math.max(o, max);
				});

				for (var i = 0 ; i < total; i++) {
					visualizer.children[i].style.top = (100-((frequencyArray[i]/max)*100))+'%';
				}

			}
			doDraw();
		}
		soundNotAllowed = function (error) {
			console.log(error);
		}
		*/
	});
	listener('resize', function () {
		resize_whiteboard();
	});

	Hooks.set('viewready', function (args) {
		if (view.is_active(module_name)) {
			on_view_ready();
//			Softkeys.add({ n: 'Visualize Microphone Audio',
//				k: 'a',
//				alt: 1,
//				i: 'iconequalizer',
//				c: function (k, e) {
//					navigator.mediaDevices.getUserMedia({ audio: true }).then(soundAllowed, soundNotAllowed);
//					e && e.preventDefault();
//				}
//			});
			set_call_softkey();
//			Network.get(module_name, 'active', 1);
		}
	});
	Hooks.set('restore', function () {
		if (backstack.darajah === 1 && view.is_active(module_name)) {
			on_view_ready();
		}
	});

})();







