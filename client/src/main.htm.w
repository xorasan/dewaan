+htm
body
	+include managed.htm.w

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
		[id=icon] .icon .center .pad .large
		.flex .vertical .pad .grow
			.flex .headline
				[id=name] .name
				[id=build] .build .dim .pad
				[id=new_build] .build .dim .pad .small .vcenter
			[id=description] .description
			[id=needs_group] .needs_group .flex .dim .small
				"needs " .padr .bold
				[id=needs] .needs
		[id=state] .state .center .pad .upper .bold
	





