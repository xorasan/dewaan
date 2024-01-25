// TODO animate pointer release; requires framed animation support
// TODO clicking outside or pointer leaving WB should hide pointer
// TODO add signed in check on view ready
// TODO list.retain_props to keep previous props and only apply new values
var SocketIO = io({
	autoConnect: false,
}), call_list, Whiteboard, pointer_data;
var media_stream, init_recorder, recorder_options;
var is_room_creator, opus_recorder, remote_stream;
;(function(){
	var module_name = 'call_screen', connection_status, connection_status_string,
		is_in_call,
		is_mic_on = Preferences.get('mic', 1),
		is_listening = Preferences.get('listen', 1);

	var permissions = {};
	var pen_colors = [ // TODO dark/bright extend support to colors
		'text',
		'red',
		'green',
		'yellow',
		'cyan',
	];
	var pointer_held = 0;

	pointer_data = {};
	function redraw_whiteboard_if_needed() { if (!Whiteboard) return;
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
			var o = {
				uid: module_name,
				title: translate( module_name ),
				count: 0,
				subtitle: '',
				icon: 'iconcall',
			};
			if (is_in_call) {
				o.count = call_list.length();
				o.subtitle = get_connection_string();
			}
			Sidebar.set(o);
		} else {
			Sidebar.remove(module_name);
		}
	} }
	function setup_analyzer (caller, audioStream) {
		var max = 0, color_str;

		$.log( 'setup_analyzer', caller );
		var keys = call_list.get_item_keys(caller.uid);
		var aud_ctx = caller.audio_context;
		var analyser = aud_ctx.createAnalyser();
		analyser.connect( aud_ctx.destination );
		if (audioStream) audioStream.connect(analyser);

		analyser.fftSize = 1024;
		aud_ctx.resume();

		var frequencyArray = new Uint8Array(analyser.frequencyBinCount);
	  
		// Though the frequencyArray has a length longer than 255, there seems to be no
		// significant data after this point. Not worth visualizing.
		var doDraw = function () {
			if (is_in_call/* && is_listening*/) {
				analyser.getByteFrequencyData(frequencyArray);
				var current_max = 0;
				frequencyArray.slice(0, 255).forEach(function (o) {
					max = Math.max(o, max);
					current_max = Math.max(o, current_max);
				});

				if (caller.audio_context) {
					var pct = parsefloat(current_max/max, 2)*2;
					keys.icon.style.boxShadow = '0 0 0 '+pct+'px green';

					setTimeout(function () {
						requestAnimationFrame(doDraw);
					}, 35);
				}
			} else {
				keys.icon.style.boxShadow = '';
			}
		}
		doDraw();
	}

	async function new_decoder(caller) { if (caller) {
		const min_sample_duration = .1; // sec
		const sample_rate = 48000; // Hz
		// how much data is needed to play for at least min_sample_duration
		const min_sample_size = min_sample_duration * sample_rate;
		// you'll probably want this much bigger
		let chunk_size = 4096; // bytes
		var fetched_data = new Float32Array(0);
		var is_reading, buffer_source, gain;

		var decoder;
		if (caller.decoder) caller.decoder.terminate();
//		decoder = caller.decoder = new Worker('/libs/decoderWorker.min.js');
		decoder = caller.decoder = new OpusToPCM({
			channels: 1,
			fallback: true,
			libopusPath: 'libs/libopus.js' /* a pre-built libopus file is available in dist directory */
		});

		if (caller.audio_context) await caller.decoder.close();
		var audio_context = new AudioContext();
		caller.audio_context = audio_context;

		var keys = call_list.get_item_keys(caller.uid);
		var analyser = audio_context.createAnalyser();
		analyser.connect( audio_context.destination );
		analyser.fftSize = 1024;
		var frequencyArray = new Uint8Array(analyser.frequencyBinCount);

		// to control output volume
		gain = audio_context.createGain();
		gain.gain.value = 1;
		gain.connect( audio_context.destination );

		function readingLoop() {
			if ( fetched_data.length < min_sample_size ) {
				is_reading = false;
				return;
			}
//			$.log( 'readingLoop' );
			// let the world know we are actively reading
			is_reading = true;
			// create a new AudioBuffer
			const aud_buf = audio_context.createBuffer( 1, fetched_data.length, sample_rate );
			// copy our fetched data to its first channel
			aud_buf.copyToChannel( fetched_data, 0 );
		
			// clear the buffered data
			fetched_data = new Float32Array( 0 );
			
			// the actual player
			buffer_source = caller.buffer_source = audio_context.createBufferSource();
			buffer_source.buffer = aud_buf;

			buffer_source.onended = readingLoop; // in case we buffered enough while playing

			buffer_source.connect( gain );
			buffer_source.connect(analyser);

			buffer_source.start( 0 );
		}

		var max = 0, draw_timeout;
		function do_draw () {
			if (is_in_call/* && is_listening*/) {
//				$.log( 'do_draw' );
				analyser.getByteFrequencyData(frequencyArray);
				var current_max = 0;
				frequencyArray.slice(0, 255).forEach(function (o) {
					max = Math.max(o, max);
					current_max = Math.max(o, current_max);
				});

				if (audio_context && audio_context.state == 'running') {
					var pct = parsefloat(current_max/max, 2)*2;
					keys.icon.style.boxShadow = '0 0 0 '+pct+'px green';

					clearTimeout(draw_timeout);
					draw_timeout = setTimeout(function () {
						requestAnimationFrame(do_draw);
					}, 55);
				}
			} else {
				keys.icon.style.boxShadow = '';
			}
		}
		do_draw();

//		decoder.postMessage({
//			command:'init',
////			decoderSampleRate: desiredSampleRate,
////			outputBufferSampleRate: desiredSampleRate
//		});

		decoder.on('decode', function(pcmData) {
			if (pcmData)
				fetched_data = concatFloat32Arrays( fetched_data, pcmData );

			if ( !is_reading && fetched_data.length > min_sample_size ) {
				readingLoop(); // start reading
			}
		});
//		decoder.onmessage = function (e) {
//			if (e.data) {
////				$.log( 'decoded', fetched_data.length );
//				fetched_data = concatFloat32Arrays( fetched_data, e.data[0] );
//			}
//			if ( !is_reading && fetched_data.length > min_sample_size ) {
//				readingLoop(); // start reading
//			}
//		};
	} }
	function apply_recorder_state() {
		// there should be at least 1 listener other than self and two callers
		var listeners = 0, session_uid = Sessions.get_session_uid();
		call_list.adapter.each(function (o) {
			if (o.uid != session_uid && o.listen) {
				listeners++;
			}
		});
		
		if (is_in_call && is_mic_on && listeners >= 1) {
			if (opus_recorder.state == 'paused') {
				opus_recorder.resume();
			} else if (opus_recorder.state == 'inactive') {
				opus_recorder.start();
			}
		} else {
			opus_recorder.pause();
		}
	}

	function concatFloat32Arrays( arr1, arr2 ) {
		if( !arr1 || !arr1.length ) {
			return arr2 && arr2.slice();
		}
		if( !arr2 || !arr2.length ) {
			return arr1 && arr1.slice();
		}
		const out = new Float32Array( arr1.length + arr2.length );
		out.set( arr1 );
		out.set( arr2, arr1.length );
		return out;
	}
	init_recorder = function () {
		if (!OpusRecorder.isRecordingSupported()) {
			Webapp.status("Recording features are not supported in your browser.");
			$.log.w("Recording features are not supported in your browser.");
		} else {
			recorder_options = {
				mediaTrackConstraints: {
					audio: true, noiseSuppression: true, echoCancellation: true,
					autoGainControl: false,
				},
//				monitorGain: 1,
//				recordingGain: 1,
				numberOfChannels: 1,
				encoderFrameSize: 40,
				encoderBitRate: 5500,
				encoderSampleRate: 48000,
				encoderPath: "/libs/encoderWorker.min.js",
				streamPages: true,
				rawOpus: true,
//				sourceNode: sourceNode,
			};

			var recorder;
			opus_recorder = recorder = new OpusRecorder(recorder_options);
			var audio_context = opus_recorder.audioContext;

			var analyser = audio_context.createAnalyser();
//			analyser.connect( audio_context.destination );

			analyser.fftSize = 1024;
			var frequencyArray = new Uint8Array(analyser.frequencyBinCount);

			var caller, keys;

			var max = 0, pct, draw_timeout;
			function do_draw () {
				if (is_in_call && is_mic_on && opus_recorder.state == 'recording') {
					analyser.getByteFrequencyData(frequencyArray);
					var current_max = 0;
					frequencyArray.slice(0, 255).forEach(function (o) {
						max = Math.max(o, max);
						current_max = Math.max(o, current_max);
					});
	
					if (audio_context && audio_context.state == 'running') {
						pct = parsefloat(current_max/max, 2);
						keys.icon.style.boxShadow = '0 0 0 '+(pct*2)+'px '+(pct > .45 ? 'green' : 'gray');
	
						clearTimeout(draw_timeout);
						draw_timeout = setTimeout(function () {
							requestAnimationFrame(do_draw);
						}, 55);
					}
				} else {
					keys.icon.style.boxShadow = '';
				}
			}
			
			function get_caller_and_keys() {
				caller = call_list.adapter.get(Sessions.get_session_uid());
				keys = call_list.get_item_keys(Sessions.get_session_uid());
				opus_recorder.sourceNode.connect(analyser);
			}

			recorder.onstart = function(e) {
				$.log.w('recorder started');
				get_caller_and_keys();
				do_draw();
			};
			recorder.onstop = function(e) {
				$.log.w('Recorder is stopped');
			};
			recorder.onpause = function(e){
				$.log.w('Recorder is paused');
			};
			recorder.onresume = function(e){
				$.log.w('Recorder is resuming');
				get_caller_and_keys();
				do_draw();
			};
			recorder.ondataavailable = function( typedArray ){
				if (pct > .45) {
					if (caller && keys) {
						caller.downloaded = (caller.downloaded||0) + typedArray.byteLength;
						caller.down_str = parseint(caller.downloaded / 1_000) + 'KB';
						innertext(keys.down_str, caller.down_str)
					}
					SocketIO.emit('audio', typedArray);
				}
			};
		}
	}
	function recorder_softkeys() {
//		Softkeys.add({ n: 'Init',
//			k: 'i',
//			alt: 1,
//			i: 'iconsettings',
//			c: function () {
//				init_recorder();
//			}
//		});
//		Softkeys.add({ n: 'Start',
//			k: 's',
//			alt: 1,
//			i: 'iconsettings',
//			c: function () {
//				opus_recorder.start().catch(function(e){
//					$.log.e('Error encountered:', e.message );
//				});
//				try { fake_audio.play(); } catch (e) { }
//			}
//		});
//		Softkeys.add({ n: 'Pause',
//			k: 'd',
//			alt: 1,
//			i: 'iconsettings',
//			c: function () {
//				opus_recorder.pause();
//			}
//		});
//		Softkeys.add({ n: 'Resume',
//			k: 'r',
//			alt: 1,
//			i: 'iconsettings',
//			c: function () {
//				opus_recorder.resume();
//			}
//		});
//		Softkeys.add({ n: 'Stop',
//			k: 'f',
//			alt: 1,
//			i: 'iconsettings',
//			c: function () {
//				opus_recorder.stop();
//			}
//		});
//		Softkeys.add({ n: 'Close',
//			k: 'g',
//			alt: 1,
//			i: 'iconsettings',
//			c: function () {
//				opus_recorder.close();
//			}
//		});
	}

	SocketIO.on('error', function (error) {
		$.log.e('socket_io error', error);
		connection_status = 0;
		set_sidebar_and_header();
	});
	SocketIO.on('connect', function () {
		$.log.w('socket_io connect');
		connection_status = 1;
		if (is_in_call) {
			join_room();
		}
		set_sidebar_and_header();
	});
	SocketIO.on('reconnect', function (attempt) { // only fired upon successful reconnect
		$.log.w('socket_io reconnect', attempt);
		connection_status = 1;
		set_sidebar_and_header();
		update_sidebar();
	});
	SocketIO.on('disconnect', function (reason) {
		$.log.w('socket_io disconnect', reason);
		connection_status = 0;
		apply_recorder_state();
		set_sidebar_and_header();
	});
	SocketIO.on('join', on_join);
	SocketIO.on('leave', after_leaving);
	SocketIO.on('pointer', on_pointer);
	SocketIO.on('pointer_contact', on_pointer_contact);
	SocketIO.on('undo', on_undo);
	SocketIO.on('mic', on_mic);
	SocketIO.on('listen', on_listen);
	SocketIO.on('audio', on_audio);
	SocketIO.on('latency', function (t) {
		var caller = call_list.adapter.get( Sessions.get_session_uid() );
		if (caller) {
			caller.latency = Time.now() - t;
			caller.latency_str = caller.latency + 'ms';
			var keys = call_list.get_item_keys( caller.uid );
			innertext(keys.latency_str, caller.latency_str);
		}
	});

	var iceServers = {
		iceServers: [
			{ urls: 'stun:stun.l.google.com:19302' },
			{ urls: "stun:stun.relay.metered.ca:80", },
			{
				urls: "turn:standard.relay.metered.ca:80",
				username: "9e801c2ab408d832411f6a7d",
				credential: "iBXHtN9VPVPJ7YIW",
			},
			{
				urls: "turn:standard.relay.metered.ca:80?transport=tcp",
				username: "9e801c2ab408d832411f6a7d",
				credential: "iBXHtN9VPVPJ7YIW",
			},
			{
				urls: "turn:standard.relay.metered.ca:443",
				username: "9e801c2ab408d832411f6a7d",
				credential: "iBXHtN9VPVPJ7YIW",
			},
			{
				urls: "turns:standard.relay.metered.ca:443?transport=tcp",
				username: "9e801c2ab408d832411f6a7d",
				credential: "iBXHtN9VPVPJ7YIW",
			},
		],
	};
	async function new_rpc(caller) {
		if (caller.rpc) {
			caller.rpc.close();
			delete caller.rpc;
		}

		var rpc = caller.rpc = new RTCPeerConnection(iceServers);
		var aud_ctx = caller.audio_context = new AudioContext();
		aud_ctx.onstatechange = function () {
			// TODO show deafened icon per caller
		};
		var analyzer_source;

		rpc.onicecandidateerror = function (e) {
			$.log.e( 'onicecandidateerror', e );
		};
		rpc.onsignalingstatechange = function () {
			if (rpc.signalingState == 'closed') {
				rpc.onconnectionstatechange = null;
				rpc.onicecandidateerror = null;
			}
			caller.signal = rpc.signalingState;
			if (call_list.adapter.get( caller.uid )) {
				call_list.set( caller );
			}
		};
		rpc.onconnectionstatechange = function () {
			caller.state = rpc.connectionState;
			if (call_list.adapter.get( caller.uid )) {
				call_list.set( caller );
			}
		};
		// only fired in stable state
		rpc.onnegotiationneeded = async () => {
			try {
				caller.making_offer = 1;
				await rpc.setLocalDescription();
				SocketIO.emit('signal', {
					key: Sessions.signedin(),
					sdp: rpc.localDescription,
				});
			} catch (err) {
				$.log.e(err);
			} finally {
				caller.making_offer = 0;
			}
		};
		rpc.onicecandidate = function (event) {
			if (event.candidate) {
				SocketIO.emit('webrtc_ice_candidate', {
					key: Sessions.signedin(),
					label: event.candidate.sdpMLineIndex,
					candidate: event.candidate.candidate,
				});
			}
		};
		// it will also add the new local stream to all rpcs
		await get_local_stream();
		rpc.onaddstream = function (event) {
			$.log( caller.name, 'added stream', event.stream );
			
			var keys = call_list.get_item_keys( caller.uid );
			if (keys && keys.audio) {
//				keys.audio.srcObject = event.stream;
//				keys.audio.play();

				analyzer_source = aud_ctx.createMediaStreamSource( event.stream );
				analyzer_source.connect( aud_ctx.destination );
				aud_ctx.resume();
				// Chrome Bug, doesn't visualize remote WebRTC streams!
				setup_analyzer( caller, analyzer_source );
			}
		};
		rpc.ontrack = ({ track, streams }) => {
			track.onunmute = () => {
				$.log( caller.name, 'unmuted', track.id );
				var keys = call_list.get_item_keys( caller.uid );
				if (keys && keys.audio) {
					if (keys.audio.srcObject) {
						return;
					}
					keys.audio.srcObject = streams[0];
				}
			};
		};

		caller.state = rpc.connectionState;
		call_list.set( caller );

		return rpc;
	}

	SocketIO.on('signal', async (connection) => {
		var caller = call_list.adapter.get(connection.uid) || {};
		$.log(connection.sdp.type, 'signal by', caller.name, caller.polite ? 'polite' : '');

		if (caller.rpc) {
//			if (caller.rpc) {
//				caller.rpc.close();
//				delete caller.rpc;
//			}
			

//			var rpc = new_rpc(caller); 
			var offer_collision = connection.sdp.type == 'offer' &&
					(caller.making_offer || caller.rpc.signalingState !== 'stable');

			caller.ignore_offer = !caller.polite && offer_collision;
			if (caller.ignore_offer) {
				return;
			}

			await caller.rpc.setRemoteDescription( connection.sdp );
			if ( connection.sdp.type == 'offer' ) {
				await caller.rpc.setLocalDescription();
				SocketIO.emit('signal', {
					key: Sessions.signedin(),
					sdp: caller.rpc.localDescription,
				});
			}
		}
	});
	SocketIO.on('ice_candidate', (connection) => {
		var caller = call_list.adapter.get(connection.uid);
		$.log('ice_candidate by', (caller||{}).name);

		if (caller && caller.rpc) {
			// ICE candidate configuration.
			const candidate = new RTCIceCandidate({
				sdpMLineIndex: connection.label,
				candidate: connection.candidate,
			});
			try {
				caller.rpc.addIceCandidate(candidate);
			} catch (e) {
				if (!caller.ignore_offer)
					$.log.e( 'addIceCandidate', e );
			}
		}
	});

	async function setLocalStream(mediaConstraints) {
		try {
			localStream = await navigator.mediaDevices.getUserMedia(mediaConstraints)
			localVideoComponent.srcObject = localStream
		} catch (error) {
			$.log.e('Could not get user media', error);
		}
	}
	async function addLocalTracks(rpc) {
		if (media_stream) {
			$.log.w( 'addLocalTracks' );
			media_stream.getTracks().forEach((track) => {
				rpc.addTrack(track, media_stream);
			});
		}
	}
	async function removeLocalTracks(rpc) {
		var streams = rpc.getLocalStreams();
		if (streams) {
			streams.forEach(function (s) {
				var tracks = s.getTracks();
				tracks.forEach(function (t) {
					t.stop();
				});
				rpc.removeStream(s);
			});
		}
	}
	async function createOffer(caller) {
		var rpc = caller.rpc;
		try {
			const sessionDescription = await rpc.createOffer({ offerToReceiveVideo: true, offerToReceiveAudio: true });
			rpc.setLocalDescription(sessionDescription);
			
			SocketIO.emit('webrtc_offer', {
				key: Sessions.signedin(),
				sdp: sessionDescription,
			});
		} catch (error) {
			$.log.e(error);
		}
	}
	async function createAnswer(rpc) {
		try {
			const sessionDescription = await rpc.createAnswer();
			rpc.setLocalDescription(sessionDescription);
			
			SocketIO.emit('webrtc_answer', {
				key: Sessions.signedin(),
				sdp: sessionDescription,
			})
		} catch (error) {
			$.log.e(error);
		}
	}
	function sendIceCandidate(event) {
		if (event.candidate) {
			SocketIO.emit('ice_candidate', {
				key: Sessions.signedin(),
				label: event.candidate.sdpMLineIndex,
				candidate: event.candidate.candidate,
			});
		}
	}

	async function get_local_stream() {
		var caller = call_list.adapter.get( Sessions.get_session_uid() );
		if (!media_stream && !is_mic_stream_starting && caller) {
			$.log( 'get_local_stream' );
			is_mic_stream_starting = 1;
			var stream;
			try {
				// TODO create UI to customize this
				stream = await navigator.mediaDevices.getUserMedia({
					audio: true, noiseSuppression: true, echoCancellation: true,
					autoGainControl: false,
				});
			} catch (e) {
				$.log( 'get_local_stream', e );
			}
			media_stream = stream;
			apply_mic_state();
			is_mic_stream_starting = 0;
			
//			var keys = call_list.get_item_keys( caller.uid );
//			if (keys && keys.audio) {
//				keys.audio.srcObject = stream;
//				keys.audio.volume = 0;
//				keys.audio.play();

				var aud_ctx = caller.audio_context = new AudioContext( { sinkId: { type: 'none' } } );
				aud_ctx.onstatechange = function () {
					// TODO show deafened icon per caller
				};

				analyzer_source = aud_ctx.createMediaStreamSource( stream );
				analyzer_source.connect( aud_ctx.destination );
				aud_ctx.resume();
				
//				var gain_node = aud_ctx.createGain();
//				gain_node.connect( aud_ctx.destination );
//				analyzer_source.connect( gain_node );

				// Chrome Bug, doesn't visualize remote WebRTC streams!
				setup_analyzer( caller, analyzer_source );
//			}
		}
		if (media_stream)
		call_list.adapter.each(function (o) {
			if (o.rpc) {
				var streams = o.rpc.getLocalStreams();
				if (streams.length) {
					$.log( o.name+' has '+streams.length+' local streams' );
					var rtpSenders = o.rpc.getSenders();
					$.log( o.name+' has '+rtpSenders.length+' senders' );
					if (rtpSenders.length)
					for (const track of media_stream.getTracks()) {
						rtpSenders.replaceTrack(track);
					}
				} else {
					$.log( o.name+' has no local streams' );
					for (const track of media_stream.getTracks()) {
						o.rpc.addTrack(track, media_stream);
					}
				}
			}
		});
	}

	function join_room() {
		SocketIO.emit(
			'join',
			get_session_details(),
			function (data) {
				on_join(data, 1);
			}
		);
	}
	function leave_room() {
		SocketIO.emit(
			'leave',
			get_session_details()
		);
		is_room_creator = 0;
		stop_mic_stream();
//		disconnect_speaker();

		var session_uid = Sessions.get_session_uid();
		call_list.adapter.each(function (o) {
			if (o.uid != session_uid) {
				if (o.rpc) o.rpc.close();
				if (o.decoder) {
					if (o.decoder.destroy)
						o.decoder.destroy();
					if (o.decoder.terminate)
						o.decoder.terminate();
				}
				if (o.audio_context) o.audio_context.close();
			}
		});
		if (opus_recorder) opus_recorder.stop();

		clear_all_callers();
	}

	function on_join(result, is_recap) {
		$.log.w('join', result);
		set_sidebar_and_header();
		
		if (is_recap) is_room_creator = 0;
		
		if (isarr(result)) {
			result.forEach(function (o) {
				var caller = call_list.adapter.get( o.uid );
				
				var details_str = '';
				if (o.mobile) details_str += 'Mobile';
				if (o.browser) details_str += ' '+o.browser;
				if (o.browser_version) details_str += ' '+o.browser_version;
				if (o.platform) details_str += ' on '+o.platform;
				var obj = {
					icon    : 'iconperson',
					uid     : o.uid,
					color   : o.color,
					created : o.created,
					listen  : o.listen,
					mobile  : o.mobile,
					browser : o.browser,
					browser_version : o.browser_version,
					platform: o.platform,
					mic     : o.mic,
					name    : '@'+o.name,
					details : details_str.trim(),
					time    : o.created,
					displayname: o.displayname,
				};
				if (o.mic) {
					obj.mic_tag = 'ixtaf';
				} else {
					obj.mic_tag$icon = 'iconmoff';
				}
				if (o.listen) {
					obj.listen_tag = 'ixtaf';
				} else {
					obj.listen_tag$icon = 'iconheadsetoff';
				}
				call_list.set(obj);
				var keys = call_list.get_item_keys( o.uid );
				// TODO add support for changing this color on theme change
				keys.color_tag.style.background = Themes.get(pen_colors[o.color] || 'text');

				var this_session = call_list.adapter.get( Sessions.get_session_uid() );
				var caller = call_list.adapter.get(o.uid);
				if (caller && this_session) {
					if (caller.uid == Sessions.get_session_uid()) {
//						get_local_stream();
					} else {
						// whoever joined sooner wins and gets to be rude, determined in browser
//						caller.polite = this_session.created < caller.created ? 'polite' : undefined;
						
						if (!caller.decoder)
							new_decoder(caller);
						// CHECK only add new RPC if ones not already there?
//						if (!caller.rpc)
//							new_rpc(caller);
					}
				}
			});
		}
		apply_speaker_state();
		apply_recorder_state();
//		if (call_list.length() >= 2 && is_recap) {
//			SocketIO.emit('start_call', {
//				key: Sessions.signedin(),
//			});
//		}
		update_sidebar();
	}
	function after_leaving(result) {
		$.log.w('leave', result);
		
		var caller = call_list.adapter.get( result );
		if (caller) {
			if (caller.rpc) {
				$.log( 'closing rpc for', caller.name );
				caller.rpc.close();
				delete caller.rpc;
			}
			if (caller.decoder) {
				$.log( 'terminating decoder for', caller.name );
				if (caller.decoder.destroy)
					caller.decoder.destroy();
				if (caller.decoder.terminate)
					caller.decoder.terminate();
				delete caller.decoder;
			}
			if (caller.audio_context) {
				$.log( 'closing decoder for', caller.name );
				caller.audio_context.close();
				delete caller.audio_context;
			}
		}
		
		call_list.remove_by_uid( result );
		delete pointer_data[ result ];
		apply_recorder_state();
		redraw_whiteboard_if_needed();
		update_sidebar();
		if (result == Sessions.get_session_uid()) {
			$.log( 'stopping mic stream..' );
			stop_mic_stream();
		}
	}

	function get_pointer_data (session_uid) {
		var p_data;
		if (!pointer_data[ session_uid ]) {
			p_data = pointer_data[ session_uid ] = {
				uid: session_uid,
			};
		} else {
			p_data = pointer_data[ session_uid ];
		}
		return p_data;
	}

	function on_pointer (data) {
		var session_uid = data[0];
		var converted = percentage_to_pixels(data[1], data[2]);
		data[1] = converted[0];
		data[2] = converted[1];
		var p_data = get_pointer_data(session_uid);
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
		var session_uid = data[0];
		var p_data = get_pointer_data(session_uid);
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
		var p_data = get_pointer_data(session_uid);
		if (p_data) {
			var lines = p_data.lines;
			if (lines && lines.length > 1) {
				var shape = lines[ lines.length-1 ];
				if (shape.length === 0) {
					lines.splice( lines.length-2, 1 );
					redraw_whiteboard_if_needed();
				}
			}
		}
	}
	function on_mic (data) {
		$.log.w( 'mic', data );
		var session_uid = data[0];
		var caller = call_list.adapter.get(session_uid)
		var p_data = get_pointer_data(session_uid);
		p_data.mic = data[1];
		caller.mic = data[1];
		if (p_data.mic) {
			delete caller.mic_tag$icon;
			caller.mic_tag = 'ixtaf';
		} else {
			delete caller.mic_tag;
			caller.mic_tag$icon = 'iconmoff';
		}
		call_list.set(caller);
		apply_recorder_state();
	}
	function on_listen (data) {
		$.log.w( 'listen', data );
		var session_uid = data[0];
		var caller = call_list.adapter.get(session_uid)
		var p_data = get_pointer_data(session_uid);
		p_data.listen = data[1];
		caller.listen = data[1];
		if (p_data.listen) {
			delete caller.mic_tag$icon;
			caller.listen_tag = 'ixtaf';
		} else {
			delete caller.listen_tag;
			caller.listen_tag$icon = 'iconheadsetoff';
		}
		call_list.set(caller);
		apply_recorder_state();
	}
	function on_audio(data) {
		var caller = call_list.adapter.get(data[0]);
		if (caller && caller.decoder && is_listening) {
//			$.log( data[1] );
			caller.downloaded = (caller.downloaded||0) + data[1].byteLength;
			caller.down_str = parseint(caller.downloaded / 1_000) + 'KB';
			var keys = call_list.get_item_keys( caller.uid );
			innertext(keys.down_str, caller.down_str)
			var typedArray = new Uint8Array(data[1]);
			// single opus packet and it is a typedArray
			caller.decoder.decode(typedArray); 
//			caller.decoder.postMessage({
//				command: 'decode',
//				pages: typedArray,
//			}, [ typedArray.buffer ] );
		}
	}

	function get_session_details() {
		var details = {
			key: Sessions.signedin(),
			listen: is_listening,
			mic: is_mic_on,
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

	function get_connection_string() {
		if (connection_status ===  0) return 'Disconnected';
		if (connection_status ===  1) return 'Connected';
		if (connection_status ===  2) return 'Reconnected'
		if (connection_status === -1) return 'Error';
	}

	function set_sidebar_and_header(subtitle) {
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

	var listen_softkey_object = { k: 'l',
		alt: 1,
		c: function (k, e) {
			is_listening = !is_listening;
			Preferences.set('listen', is_listening);

			apply_speaker_state();

			SocketIO.emit( 'listen', is_listening );
			on_listen([Sessions.get_session_uid(), is_listening]);

			set_listen_softkey();

			e && e.preventDefault();
		}
	};
	function apply_speaker_state() {
		call_list.adapter.each(function (caller) {
			if (caller && caller.rpc) {
				caller.rpc.getRemoteStreams().forEach(function (stream) {
					stream.getTracks().forEach(function (track) {
						track.enabled = is_listening;
					});
				});
			}
		});
	}
	function set_listen_softkey() {
		listen_softkey_object.n = is_listening ? 'Listening' : 'Defeaned';
		listen_softkey_object.i = is_listening ? 'iconheadset' : 'iconheadsetoff';
		
		if (listen_softkey_object.uid && !is_in_call) Softkeys.remove(listen_softkey_object.uid);
		if (is_in_call) Softkeys.add(listen_softkey_object);
	}

	var is_mic_stream_starting;
	function stop_mic_stream() {
		if (media_stream) {
			$.log.w( 'stop_mic_stream' );
			media_stream.getTracks().forEach(track => track.stop());
			media_stream = 0;
			var session_uid = Sessions.get_session_uid();
			call_list.adapter.each(function (o) {
				if (o.uid != session_uid && o.rpc) {
					removeLocalTracks	(o.rpc);
					createOffer			(o);
//					connect_speaker();
				}
			});
		}
	}
	function start_mic_stream() {
		if (!media_stream && !is_mic_stream_starting) {
			$.log.w( 'start_mic_stream' );
			stop_mic_stream();
			is_mic_stream_starting = 1;
			navigator.mediaDevices.getUserMedia({
				audio: true, noiseSuppression: true, echoCancellation: true,
			}).then((stream) => {
				is_mic_stream_starting = 0;
				media_stream = stream;
				var session_uid = Sessions.get_session_uid();
				call_list.adapter.each(function (o) {
					if (o.uid != session_uid && o.rpc) {
						addLocalTracks	(o.rpc);
						createOffer		(o);
//						connect_speaker();
					}
				});
			}).catch((err) => {
				is_mic_stream_starting = 0;
				$.log.e(err);
			});
		}
	}
	var mic_softkey_object = { k: 'm',
		alt: 1,
		c: function (k, e) {
			if (permissions.mic) {
				if (is_mic_on) {
//					stop_mic_stream();
				} else {
//					start_mic_stream()
				}
				
				is_mic_on = !is_mic_on;
				Preferences.set('mic', is_mic_on);

				apply_mic_state();

				SocketIO.emit( 'mic', is_mic_on );
				on_mic([Sessions.get_session_uid(), is_mic_on]);
				
				set_mic_softkey();
			} else {
				navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
					// UGLY WORKAROUND for FF and SAFARI etc, no support for Permissions API
					update_permissions('mic', 'granted');
					stream.getTracks().forEach(track => track.stop());
				}).catch((err) => {
					$.log.e(err);
				});
			}

			e && e.preventDefault();
		}
	};
	function apply_mic_state() {
		if (media_stream) {
			var tracks = media_stream.getTracks();
			tracks.forEach(function (track) {
				track.enabled = is_mic_on;
			});
		}
		apply_recorder_state();
	}
	function set_mic_softkey() {
		if (!permissions.mic) {
			is_mic_on = 0;
		}
//		if (!is_mic_on) {
//			stop_mic_stream();
//		}
		
		mic_softkey_object.n = permissions.mic ? (is_mic_on ? 'Mic On' : 'Mic Off') : 'Needs Mic Permission';
		mic_softkey_object.i = permissions.mic ? (is_mic_on ? 'iconm' : 'iconmoff') : 'iconmnone';
		
		if (mic_softkey_object.uid && !is_in_call) Softkeys.remove(mic_softkey_object.uid);
		if (is_in_call) Softkeys.add(mic_softkey_object);
	}

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
				update_softkeys();
				e && e.preventDefault();
			}
		});

		if (undo_softkey_object.uid && !is_in_call) Softkeys.remove(undo_softkey_object.uid);
		if (is_in_call) Softkeys.add(undo_softkey_object);
	}

	function update_softkeys() {
		set_call_softkey();
		set_mic_softkey();
		set_listen_softkey();
		recorder_softkeys();
	}

	function update_permissions(name, state) {
		permissions[name] = state == 'granted';
		if (name == 'mic') {
			set_mic_softkey();
		}
	}
	function setup_permissions() {
		if ('permissions' in navigator) {
			navigator.permissions.query({ name: 'microphone' }).then(function (perm) {
				update_permissions('mic', perm.state);
				perm.onchange = function () {
					update_permissions('mic', perm.state);
				};
			}).catch(function (e) {
				$.log.w( 'mic permission check not supported' );
			});
		}
	}

	function resize_whiteboard() {
		$.taxeer('resize_whiteboard', function () {
			var w = headerui.clientWidth-64;
			whiteboardui.width = w;
			whiteboardui.height = w;
			if (Whiteboard) {
				Whiteboard.o.font = '14px sans-serif';
				Whiteboard.linewidth(3);
				Whiteboard.linecap('round');
				Whiteboard.linejoin('round');
			}
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

	Hooks.set('sessionchange', function (signedin) {
		update_sidebar();
	});
	Hooks.set('ready', function (args) {
		Webapp.add_minimal_view( module_name );
		setup_permissions();

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
		call_list.before_set = function (o) { // this helps retain old props
			var old = call_list.adapter.get(o.uid);
			if (old) {
				o = Object.assign(old, o);
			}
			delete o.form_tag$icon;
			delete o.form_tag;
			delete o.os_tag$icon;
			delete o.os_tag;
			
			var os_tag;
			if (o.platform == 'Linux') {
				os_tag = 'linux';
			} else if (o.platform == 'Windows') {
				os_tag = 'windows';
			}
			if (os_tag) o.os_tag$icon = 'icon'+os_tag; else o.os_tag = 'ixtaf';
			
			var form_tag;
			if (o.mobile) form_tag = 'phoneandroid';
			if (form_tag) o.form_tag$icon = 'icon'+form_tag; else o.form_tag = 'ixtaf';

			return o;
		};
		call_list.after_set = function (o, e, k) {
		};

		init_recorder();
	});
	listener('resize', function () {
		resize_whiteboard();
		$.taxeer('redraw-whiteboard', redraw_whiteboard_if_needed, 60);
	});

	Hooks.set('viewready', function (args) {
		if (view.is_active(module_name)) {
			set_sidebar_and_header();
			update_softkeys();
//			Network.get(module_name, 'active', 1);
		}
	});
	Hooks.set('restore', function () {
		if (backstack.darajah === 1 && view.is_active(module_name)) {
			set_sidebar_and_header();
		}
	});

})();







