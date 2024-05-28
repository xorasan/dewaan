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
		em 'this app is currently in ALPHA, which means it might be unstable, missing features and likely crash'
		em 'we are working our way towards the BETA version, stay tuned'
		[id=list]
	
	#addons-scripts
	#addons-styles
	#addons-dom
	
	[view=addons]
		[id=list]

	[template=addon_item] .soft_item .addon_item .flex .padb
		[id=icon] .icon .center .pad
		.flex .vertical .pad .grow
			.flex .big
				[id=name] .name
				[id=build] .build .dim .pad
			[id=description] .description
		[id=state] .state .center .pad .upper .bold
	
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





