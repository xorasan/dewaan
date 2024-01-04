;(function(){
	'use strict';

	var main = {
	};
	
	Web.init(() => {
//		MongoDB.query('dewaan', 'sessions', {}, function (o) { $.log(' sessions ', o) });
//		MongoDB.query('dewaan', 'accounts', {}, function (o) { $.log(' accounts ', o) });
	});
	
	var default_room = 'default_room';
	var connections = {};
	function add_connection(socket_id, key, value, data) {
		var o = connections[ key ] = Object.assign(connections[ key ] || {}, value || {});
		o.socket_id = socket_id;
		o.mobile = data.mobile;
		o.platform = data.platform;
		o.browser = data.browser;
		o.browser_version = data.browser_version;
		if (isundef(o.color)) {
			o.color = count_connections();
		}
		return o;
	}
	function get_connection(socket_id) {
		for (var i in connections) {
			if (connections[i].socket_id == socket_id) {
				return i;
				break;
			}
		}
	}
	function remove_connection(socket_id) {
		var key = get_connection(socket_id);
		if (key) {
			delete connections[ key ];
			$.log('removed connection', socket_id, '->', key);
		} else {
			$.log('un-authenticated user disconnected');
		}
	}
	function export_connection(o) {
		return {
			uid: o.session.uid,
			color: o.color,
			name: o.account.name,
			mobile: o.mobile,
			platform: o.platform,
			browser: o.browser,
			browser_version: o.browser_version,
		};
	}
	function count_connections() {
		return Object.keys(connections).length;
	}
	
	Hooks.set('socket', (socket) => {
		$.log('a user connected', socket.id);
		socket.on('join', (data, callback) => {
			if (isstr(data.key) && data.key.length) {
				Sessions.get_session_account(data.key, (result) => {
					if (result) {
						var result_object = add_connection( socket.id, data.key, result, data );
						result_object = export_connection( result_object );
						socket.join( default_room );
						// socket.to excludes this socket from receiving join
						// you can use SocketIO to include it :)
						SocketIO.to( default_room ).emit( 'join', [ result_object ] );
						if (isfun(callback)) { // returns all connections to the new caller
							var arr = [];
							for (var i in connections) {
								arr.push( export_connection(connections[i]) );
							}
							callback(arr);
						}
						$.log('user joined', result.account.name);
					} else {
						$.log('user failed to auth for joining', data, result);
					}
				});
			}
		});
		socket.on('leave', (data, callback) => {
			if (isstr(data.key) && data.key.length) {
				Sessions.get_session_account(data.key, (result) => {
					if (result) {
						SocketIO.to( default_room ).emit( 'leave', result.session.uid );
						socket.leave( default_room );
						if (isfun(callback)) { callback( result.session.uid ); }
						$.log('user left', result.account.name);
					} else {
						$.log('user failed to auth for leaving', data, result);
					}
				});
			}
		});
		socket.on('pointer', (data, callback) => {
			if (isarr(data)) {
				var conn = get_connection(socket.id);
				if (conn) { // TODO verify it's allowed to use pointer
					var result = connections[conn];
					if (result) {
						SocketIO.to( default_room ).emit( 'pointer', [result.session.uid, data[0], data[1]] );
					}
				}
			}
		});
		socket.on('pointer_contact', (data, callback) => {
			if (isnum(data)) {
				var conn = get_connection(socket.id);
				if (conn) { // TODO verify it's allowed to use pointer
					var result = connections[conn];
					if (result) {
						SocketIO.to( default_room ).emit( 'pointer_contact', [result.session.uid, data] );
					}
				}
			}
		});
		socket.on('disconnect', () => {
			var conn = get_connection(socket.id);
			if (conn) {
				var conn_object = connections[conn];
				socket.to( default_room ).emit( 'leave', conn_object.session.uid );
				socket.leave( default_room );
				remove_connection(socket.id);
			}
		});
	});
	Network.get('call_screen', 'active', function (response) {
		response.get( count_connections() ).finish();
	});
	// exit if source code is updated
	Files.fs.watch('./index.js', (eventtype, filename) => {
		$.taxeer('kill-server', () => {
			Cli.echo( ' ^bright^Updated~~ source code, exiting... ' );
			process.exit();
		}, 500);
	});
	// better to crash in unknown app state
	process.on('unhandledRejection', (err) => { 
		$.log.e(err);
		process.exit(1);
	});

})();
