+htm
body
	+include managed.htm.w
	script @src(/libs/simplify.line.js)
	script @src(/libs/socket.io.min.js)
	script @src(/libs/recorder.min.js)
	script @src(/libs/opus_to_pcm.js)
	script @src(/libs/fixwebm.js)
	script @src(/libs/pica.js)

	[view=main]
		[id=list]

	[view=intro]
		b 'intro'
		[id=list]
	
	[view=call_screen] #call_screen_ui
//		#visualizer .flex
		canvas [id=whiteboard] #whiteboardui
		[id=list]
	
	[template=call_list_item] .inlineflex .listitem .call_list_item .pad .padv
		.shrink .pad
			.profile_icon
				[id=icon] .profile_tag .icon
				[id=color_tag] .color_tag
				[id=listen_tag] .listen_tag .icon .status_icon [icon=iconheadsetoff]
				[id=mic_tag] .mic_tag .icon .status_icon [icon=iconm]
				[id=form_tag] .form_tag .icon .status_icon [icon=iconphoneandroid]
				[id=os_tag] .os_tag .icon .status_icon [icon=iconlinux]
		.grow .pad
			[id=displayname] .bold
			[id=name] .dim
			.dim .small
				[id=time]
				[id=details]
				.flex
					[id=down_str]
					[id=latency_str] .pad
				[id=state]
				[id=signal]
				[id=points]
			audio [id=audio] @hidden





