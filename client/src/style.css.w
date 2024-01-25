+include managed.css.w

#visualizer
	width		100%
	height		60px
	display		block
	border		1px solid @secondary
	position	relative

#visualizer .path
	position	absolute
	bottom		0
	display		inline-block
	width		1%
	background	@tertiary
	font-size	80%

#whiteboardui
	border			2px dashed @tertiary
//	width			100%
//	height			50vh
	touch-action	pinch-zoom
	cursor			crosshair
	border-radius	15px

.call_list_item .profile_icon
	position		relative
.call_list_item .profile_tag
	background		@secondary
	border-radius	30%
.call_list_item .profile_tag, .call_list_item .profile_tag svg
	width			64px
	height			64px

.call_list_item .color_tag
	position		absolute
	left			0
	top				0
	padding			6px
	border-radius	10px
	background		@textd

.call_list_item .status_icon svg
	width			18px
	height			18px
	padding			1px
	border-radius	20px
	background		@tertiaryt
	position		absolute

.call_list_item .mic_tag svg
	left			-8px
	top				22px

.call_list_item .form_tag svg
	right			-4px
	top				-2px

.call_list_item .listen_tag svg
	left			-4px
	bottom			-2px

.call_list_item .os_tag svg
	right			-4px
	bottom			-2px





