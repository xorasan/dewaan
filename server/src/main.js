Callscreen = {};
;(function(){
	'use strict';

	var main = {
	};
	
	// public libs
	Web.during_init(function (done, queue) {
		Server.get('/libs/*', function (req, res) {
			var path = Web.get_public_path();
			var filename = req.path.slice('/libs/'.length);

			var options = {
				root: __dirname+'/libs',
				dotfiles: 'deny',
				headers: {
					'x-timestamp': get_time_now(),
					'x-sent': true
				}
			};
			
			if (filename.length)
				res.sendFile(filename, options, function (err) {
					if (err) {
//						$.log( err );
						req.next();
//					} else {
//						console.log('Sent:', filename);
					}
				});
			else
				req.next();
		});
		
		done(queue);
	});
	Web.init(() => {
//		MongoDB.query('dewaan', 'sessions', {}, function (o) { $.log(' sessions ', o) });
//		MongoDB.query('dewaan', 'accounts', {}, function (o) { $.log(' accounts ', o) });
	});
	
	var default_room = 'default_room';
	var connections = {}; // indexed by session hash key, unique to each session
	function add_connection(socket_id, session_key, value, data, socket) {
		var o = connections[ session_key ] = Object.assign(connections[ session_key ] || {}, value || {});
		// { session, account, ... }
		o.socket_id = socket_id;
		o.created = get_time_now();
		o.socket = socket;
		o.room = data.room || default_room;
		o.listen = data.listen;
		o.mic = data.mic;
		o.mobile = data.mobile;
		o.platform = data.platform;
		o.browser = data.browser;
		o.browser_version = data.browser_version;
		if (isundef(o.color)) {
			o.color = count_connections()-1;
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
		$.log('trying to remove connection', socket_id);
		var key = get_connection(socket_id);
		if (key) {
			delete connections[ key ];
			$.log('removed connection', socket_id, '->', key.slice(0, 8)+'...');
		} else {
			$.log('un-authenticated user disconnected');
		}
	}
	function export_connection(o) {
		return {
			uid: o.session.uid,
			color: o.color,
			created: o.created,
			room: o.room || default_room,
			name: o.account.name,
			listen: o.listen,
			mic: o.mic,
			order: o.order,
			mobile: o.mobile,
			platform: o.platform,
			browser: o.browser,
			browser_version: o.browser_version,
		};
	}
	function count_connections() {
		return Object.keys(connections).length;
	}
	function get_socket_rooms(socket_id) {
		return SocketIO.sockets.manager.roomClients[socket_id];
	}
	function get_room_size(room) {
		if (!room) return 0;
		var o = SocketIO.sockets.adapter.rooms.get( room );
		if (o) return o.size;
		else return 0;
	}
	function is_socket_in_room(socket, room) {
		return Object.keys(socket.rooms).includes(room);
	}
	function redo_colors_in_room(room) {
		var socketsInRoom = SocketIO.sockets.adapter.rooms.get( room );
		var color = 0;
		socketsInRoom.forEach(function (socket_id) {
			var c = get_connection(socket_id);
			if (c) {
				connections[c].color = color++;
			}
		});
	}
	
	Callscreen.get_room_size = get_room_size;
	Callscreen.export_connection = export_connection;
	Callscreen.get_room_connections = function (room) {
		var arr = [];
		
		if (!room) return arr;
		
		var socketsInRoom = SocketIO.sockets.adapter.rooms.get( room );

		if (socketsInRoom)
		socketsInRoom.forEach(function (socket_id, color) {
			var c = get_connection(socket_id);
			if (c) {
				arr.push( export_connection( connections[c] ) );
			}
		});
		return arr;
	};

	// FIX BUG listen on session logout hook and remove related connections

	setInterval(function () { // TODO get all sockets that are at least in one room
		if (SocketIO) { // in case there's any delays in Server + Web init
			var socketsInRoom = SocketIO.sockets.adapter.rooms.get( default_room );
			if (socketsInRoom)
			socketsInRoom.forEach(function (socket_id) {
				var c = get_connection(socket_id);
				if (c) {
					connections[c].socket.emit( 'latency', get_time_now() );
				}
			});
		}
	}, 5000);
	
	Hooks.set('socket', (socket) => {
		$.log( 'a user connected', socket.id );
		socket.on('join', (data, callback) => {
			if (isstr(data.key) && data.key.length) {
				Sessions.get_session_account(data.key, (result) => {
					if (result) {
						var result_object = add_connection( socket.id, data.key, result, data, socket );
						
						// leave from all other rooms
						var room = [...socket.rooms].slice(1, 2)[0];
						if (room) {
							SocketIO.to( room ).emit( 'leave', result.session.uid );
							socket.leave( room );
							Rooms.update_room_by_uid( room, result.account.uid );
							$.log('user left', result.account.name);
							$.log(room+' room size', get_room_size( room ) );
						}

						room = data.room || default_room;

						// join new room
						socket.join( room );
						Rooms.update_room_by_uid( room, result.account.uid );
						
						// also redo colors for all in the room, before emission and exports
						redo_colors_in_room( room );

						result_object.order = get_room_size( room );
						result_object = export_connection( result_object );
						
						// socket.to excludes this socket from receiving join
						// you can use SocketIO to include it :)
						// this adds the new user to others lists
						SocketIO.to( room ).emit( 'join', [ result_object ] );

						// this resends the entire room to the new comer
						var arr = Callscreen.get_room_connections( room );
						if (isfun(callback)) { // returns all connections to the new caller
							callback(arr);
						}
						$.log('user joined', result.account.name);
						$.log(room+' room size', get_room_size( room ) );
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
						var room = [...socket.rooms].slice(1, 2)[0];
						if (room) {
							SocketIO.to( room ).emit( 'leave', result.session.uid );
							socket.leave( room );
							Rooms.update_room_by_uid( room, result.account.uid );
							$.log('user left', result.account.name);
							$.log(room+' room size', get_room_size( room ) );
						}
						if (isfun(callback)) { callback( result.session.uid ); }
						remove_connection(socket.id);
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
						var room = [...socket.rooms].slice(1, 2)[0] || default_room;
						if (room) {
							// only send to others
							// client draws self pointer without a server trip
							socket.to( room ).emit( 'pointer', [result.session.uid, data[0], data[1]] );
						}
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
						var room = [...socket.rooms].slice(1, 2)[0] || default_room;
						if (room) {
							socket.to( room ).emit( 'pointer_contact', [result.session.uid, data] );
						}
					}
				}
			}
		});
		socket.on('undo', (data, callback) => {
			var conn = get_connection(socket.id);
			if (conn) {
				var result = connections[conn];
				if (result) {
					var room = [...socket.rooms].slice(1, 2)[0] || default_room;
					if (room) {
						socket.to( room ).emit( 'undo', [result.session.uid] );
					}
				}
			}
		});
		socket.on('mic', (data, callback) => {
			var conn = get_connection(socket.id);
			if (conn) {
				var result = connections[conn];
				if (result && result.session && result.session.uid) {
					var room = [...socket.rooms].slice(1, 2)[0];
					if (room) {
						result.mic = data ? 1 : 0;
						$.log( 'mic', result.account.name, data );
						socket.to( room ).emit( 'mic', [result.session.uid, result.mic] );
					}
				}
			}
		});
		socket.on('audio', (data, callback) => {
			var conn = get_connection(socket.id);
			if (conn) { // TODO verify it's allowed, is this validation enough? can socket ids be replicated
				var result = connections[conn];
				if (result && result.session && result.session.uid) {
					var room = [...socket.rooms].slice(1, 2)[0];
					if (room) {
						var socketsInRoom = SocketIO.sockets.adapter.rooms.get( room );
						socketsInRoom.forEach(function (socket_id) {
							var c = get_connection(socket_id);
							if (c) {
								if (connections[c].listen)
									connections[c].socket.emit( 'audio', [ result.session.uid, data ] );
							}
						});
					}
				}
			}
		});
		socket.on('listen', (data, callback) => {
			var conn = get_connection(socket.id);
			if (conn) { // TODO verify it's allowed, is this validation enough? can socket ids be replicated
				var result = connections[conn];
				if (result && result.session && result.session.uid) {
					var room = [...socket.rooms].slice(1, 2)[0];
					if (room) {
						result.listen = data ? 1 : 0;
						$.log( 'listen', result.account.name, data );
						socket.to( room ).emit( 'listen', [ result.session.uid, data ] );
					}
				}
			}
		});
		socket.on('disconnect', () => {
			var conn = get_connection(socket.id);
			if (conn) {
				var result = connections[conn];
				var room = [...socket.rooms].slice(1, 2)[0];
				if (room) {
					socket.to( room ).emit( 'leave', result.session.uid );
					socket.leave( room );
					$.log('user left', result.account.name);
					$.log(room+' room size', get_room_size( room ) );
				}
				remove_connection(socket.id);
			}
		});

		// emitted to all the sockets connected to the same room except the sender.
		socket.on('signal', (data) => {
			if (data && isstr(data.key) && data.key.length) {
				Sessions.get_session_account(data.key, (result) => {
					if (result) {
						var connection = connections[data.key];
						
						socket.to( default_room ).emit( 'signal', {
							uid: connection.session.uid,
							sdp: data.sdp,
						} );

						$.log(connection.account.name, 'emitted session description offer');
					} else {
						$.log('user failed to auth for session description offer', data, result);
					}
				});
			}
		});
		socket.on('ice_candidate', (data) => {
			if (data && isstr(data.key) && data.key.length) {
				Sessions.get_session_account(data.key, (result) => {
					if (result) {
						var connection = connections[data.key];
						
						socket.to(default_room).emit('ice_candidate', {
							uid: connection.session.uid,
							label: data.label,
							candidate: data.candidate,
						});

						$.log(connection.account.name, 'emitted candidate');
					} else {
						$.log('user failed to auth for candidate', data, result);
					}
				});
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
		}, 1500);
	});
	// better to crash in unknown app state
	process.on('unhandledRejection', (err) => { 
		$.log.e( 'unhandledRejection', err );
		process.exit(1);
	});

})();
