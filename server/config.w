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
name      server
appname   Glatteis
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
	network
	network.server
	sessions.server
	accounts.server
//	accounts.server.access TODO
	manifest.server
	profile.server
	databases
	databases.mongodb
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
	chokidar
	node-tar
kind      server
port      3060
database
	name	dewaan
