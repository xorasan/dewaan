kernel
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
name      server
connected y
include
	files
	reset.server
	weld
	config
	hooks
	server
	server.web
	polling
	network.server
deps
	express
	express-fileupload
	body-parser
kind      server
port      3060
public    ../client/releases/