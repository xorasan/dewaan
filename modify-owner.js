#!/usr/bin/env node
;(async function(){

const fs = require('fs');
const { MongoClient, ObjectId } = require('./released/deps/mongodb');
const log = console.log;
const args = process.argv.slice(2);

var env = fs.readFileSync('.env'), environment = {};
if (env) {
	env = env.toString();
	env.split('\n').forEach(l => {
		l = l.split('=');
		environment[l[0]] = l[1];
	});
}

//log( environment );

if (args.length < 2) {
	log(' please pass two arguments: username ownership');
	process.exit();
} else {
	const client = new MongoClient( 'mongodb://'+environment.DEWAAN_MONGO_USER+':'+environment.DEWAAN_MONGO_PASS+'@127.0.0.1:27017/' );
	const db = client.db( environment.DEWAAN_MONGO_DB || 'dewaan' );
	var value = parseInt( args[1] );
	if ([0, 1].includes(value)) {
		var accounts = await db.collection('accounts').find({ name: args[0] }).limit(1).toArray();
		var account = accounts[0];

		if (account) {
			const result = await db.collection('accounts').updateOne(
				{ _id: account._id }, // filter, find previous doc
				{
					$set: {
						owner: value,
						updated: new Date().getTime(),
					}, // update props whether doc is found or not
				},
				{ upsert: true },
			);

			if (result.modifiedCount > 0) {
				log( ' updated', account.name );
			}
		} else {
			log( ' account not found ' );
		}
	}

	process.exit();
}

})();


