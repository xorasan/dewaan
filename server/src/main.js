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
