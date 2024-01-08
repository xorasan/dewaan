// TODO animate pointer release; requires framed animation support
// TODO clicking outside or pointer leaving WB should hide pointer
var SocketIO = io({
	autoConnect: false,
}), call_list, Whiteboard, pointer_data;
;(function(){
	var module_name = 'call_screen', connection_status, connection_status_string,
		is_in_call;
	
	var pen_colors = [ // TODO dark/bright extend support to colors
		'text',
		'red',
		'green',
		'yellow',
		'cyan',
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
				var color_str = Themes.get(pen_colors[color] || 'text');
				Whiteboard.circle(x, y, 10, 0, 360, color_str);
				
				var contact_str = data.contact ? 'pressed' : '';
				Whiteboard.text(x+14, y+4, caller.name+' '+contact_str, -1, color_str);
				var lines = data.lines;
				if (isarr(lines)) {
					lines.forEach(function (p) {
						if (p.length === 1) {
							Whiteboard.circle(p[0].x, p[0].y, 2, 0, 360, color_str);
						} else if (p.length > 1) {
							Whiteboard.line(p, color_str, -1);
						}
					});
				}
			}
		}
	}
	function update_sidebar() { if (get_global_object().Sidebar) {
		if (Sessions.signedin()) {
			Sidebar.set({
				uid: module_name,
				title: translate( module_name ),
				icon: 'iconcall',
			});
		} else {
			Sidebar.remove(module_name);
		}
	} }
	
	SocketIO.on('error', function (error) {
		$.log.e('socket_io error', error);
		connection_status = 0;
		on_view_ready();
	});
	SocketIO.on('connect', function () {
		$.log.w('socket_io connect');
		connection_status = 1;
		if (is_in_call) {
			join_room();
		}
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
	SocketIO.on('pointer', on_pointer);
	SocketIO.on('pointer_contact', on_pointer_contact);
	SocketIO.on('undo', on_undo);

	function join_room() {
		SocketIO.emit(
			'join',
			get_session_details(),
			after_others_join
		);
	}
	function leave_room() {
		SocketIO.emit(
			'leave',
			get_session_details(),
			after_leaving
		);
		if (!is_in_call) {
			clear_all_callers();
		}
	}

	function on_pointer (data) {
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
		lines = p_data.lines = p_data.lines || []; // [ [{x, y}, {x, y}, ...], [], ... ]
		if (p_data.contact) {
			// get latest line/dot/shape object or create one
			var shape = lines[ lines.length-1 ];
			var should_add;
			if (!shape) {
				should_add = 1;
				lines.push([]);
				shape = lines[ lines.length-1 ];
			} else {
				var lp = shape[ shape.length-1 ]; // last point
				if (lp) {
					if (lp.x != data[1] || lp.y != data[2]) {
						should_add = 1;
					}
				} else {
					should_add = 1;
				}
			}
			if ( should_add ) {
				shape.push( { x: data[1], y: data[2] } );
				var caller = call_list.adapter.get(p_data.uid);
				if (caller) {
					caller.points = lines.length;
					call_list.set(caller);
				}
			}
		}
		redraw_whiteboard_if_needed();
	}
	function on_pointer_contact (data) {
		$.log.w('pointer_contact', data);
		var p_data;
		p_data = pointer_data[ data[0] ] = pointer_data[ data[0] ] || {};
		p_data.contact = data[1];
		var lines;
		lines = p_data.lines = p_data.lines || [];
		if (lines.length && data[1] === 0) {
			// get latest line/dot/shape object or create one
			var shape = lines[ lines.length-1 ];
			if (shape) {
				shape = lines[ lines.length-1 ] = simplify_line(shape, 1.2);
			}

			if (shape && shape.length) // if the previous shape isn't empty
				lines.push([]); // insert next shape

			var caller = call_list.adapter.get(p_data.uid);
			if (caller) {
				caller.points = lines.length;
				call_list.set(caller);
			}
		}
		redraw_whiteboard_if_needed();
	}
	function on_undo (data) {
		var session_uid = data[0];
		var p_data = pointer_data[ session_uid ];
		if (p_data) {
			var lines = p_data.lines;
			if (lines.length > 1) {
				var shape = lines[ lines.length-1 ];
				if (shape.length === 0) {
					lines.splice( lines.length-2, 1 );
					redraw_whiteboard_if_needed();
				}
			}
		}
	}

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
		on_view_ready();
		if (isarr(result)) {
			result.forEach(function (o) {
				var details_str = '';
				if (o.mobile) details_str += 'Mobile';
				if (o.browser) details_str += ' '+o.browser;
				if (o.browser_version) details_str += ' '+o.browser_version;
				if (o.platform) details_str += ' on '+o.platform;
				call_list.set({
					icon  : 'iconperson',
					uid   : o.uid,
					color : o.color,
					name  : '@'+o.name,
					displayname: o.displayname,
					details: details_str.trim(),
				});
				var keys = call_list.get_item_keys( o.uid );
				// TODO add support for changing this color on theme change
				keys.color_tag.style.background = Themes.get(pen_colors[o.color] || 'text');
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

	function on_view_ready(subtitle) { // TODO rename to set_sidebar_and_header
		if (view.is_active(module_name)) {
			if (get_global_object().Sidebar) Sidebar.choose(module_name);
			webapp.header([[module_name], subtitle || get_connection_string() || '', 'iconcall']);
		}
	}
	var undo_softkey_object = { n: 'Undo',
		k: 'u',
		alt: 1,
		i: 'iconundo',
		c: function (k, e) {
			SocketIO.emit( 'undo', 0 );
			on_undo([Sessions.get_session_uid()]);

			e && e.preventDefault();
		}
	};
	function set_call_softkey() {
		Softkeys.add({ n: is_in_call ? 'Leave' : 'Join',
			k: K.en,
			i: is_in_call ? 'iconcallend' : 'iconcall',
			c: function (k, e) {
				if (is_in_call) {
					leave_room();
				} else {
					join_room();
				}
				is_in_call = !is_in_call;
				set_call_softkey();
				e && e.preventDefault();
			}
		});

		if (undo_softkey_object.uid && !is_in_call) Softkeys.remove(undo_softkey_object.uid);
		if (is_in_call) Softkeys.add(undo_softkey_object);
	}

	function resize_whiteboard() {
		$.taxeer('resize_whiteboard', function () {
			var w = headerui.clientWidth-64;
			whiteboardui.width = w;
			whiteboardui.height = w;
			Whiteboard.o.font = '14px sans-serif';
			Whiteboard.linewidth(3);
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
	Hooks.set('sessionchange', function (signedin) {
		update_sidebar();
	});
	Hooks.set('ready', function (args) {
		Webapp.add_minimal_view( module_name );

		Whiteboard = Canvas(whiteboardui);
		whiteboardui.onpointerdown = function () {
			if (!pointer_held) {
				pointer_held = 1;
				if (is_in_call) {
					SocketIO.emit( 'pointer_contact', 1 );
					on_pointer_contact([Sessions.get_session_uid(), 1]);
				}
			}
		};
		function up_or_cancel() { if (pointer_held) {
			pointer_held = 0;
			if (is_in_call) {
				SocketIO.emit( 'pointer_contact', 0 );
				on_pointer_contact([Sessions.get_session_uid(), 0]);
			}
		} }
		listener('pointerup', up_or_cancel);
		listener('pointercancel', up_or_cancel);
		whiteboardui.onpointermove =
//		whiteboardui.onmousemove =
		(e) => {
			if (connection_status > 0 && is_in_call) {
				var pcts = pixels_to_percentage( e.offsetX, e.offsetY );
				SocketIO.emit( 'pointer', pcts );
				on_pointer([Sessions.get_session_uid(), pcts[0], pcts[1]]);
			}
		};
		resize_whiteboard();

//		Network.response.get(module_name, 'active', function (result) {
//			call_list.title(result+' active');
//		});
		SocketIO.connect();

		var dom_keys = view.dom_keys( module_name );
		call_list = List( dom_keys.list ).idprefix( module_name ).listitem( 'call_list_item' ).freeflow(1)
					.prevent_focus(1);

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
		$.taxeer('redraw-whiteboard', redraw_whiteboard_if_needed, 60);
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







