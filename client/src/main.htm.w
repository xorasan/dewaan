+htm
body
	+include managed.htm.w
	
	[view=main]
		[id=list]

	[view=intro]
		b 'intro'
		[id=list]
	
	[view=call_screen] #call_screen_ui
//		#visualizer .flex
		[id=list]
		canvas [id=whiteboard] #whiteboardui
	
	[template=call_list_item] .flex .listitem .call_list_item .pad .padv
		.shrink .pad
			.icon [id=icon]
		.grow .pad
			[id=displayname] .bold
			[id=name] .dim
			[id=details] .dim .small
			[id=key] .dim .small
			[id=points] .dim .small
			[id=color_tag] .color_tag





