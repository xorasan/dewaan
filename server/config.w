kernel
	math
	frontend-srv
src
	reset
	weld
	hooks
	server
	files
	polling
	network
	config
	captcha
	cli
	sessions
	profile
	accounts
	databases
	manifest
	notifications
//	rooms
//	messages
name      server
appname   Dewaan
connected y
include
	reset
	reset.server
	files
	cli
	weld
	config
	hooks
	captcha
	server
	server.web
	network.server
	sessions.server
	accounts.server
//	accounts.server.access TODO
	manifest.server
	profile.server
//	rooms.server
//	messages.server
	databases
	databases.mongodb
	notifications.server
	polling
deps
	express
	express-fileupload
	body-parser
	mongodb
	Base64
	easy-pbkdf2
	svg-captcha
	music-metadata
	socket.io
	chokidar
kind      server
port      3060
database
	name	dewaan
