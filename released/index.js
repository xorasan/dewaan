
function updatetheme(o) {
return '';
};

/* 01 Jan 2017
* these are on demand
* included in the custom engine build process
* standard ECMA/JS shims
* don't include shims for non-standard JS features
* or vendor specific features here
* index engine/shims.js
* shims/node.js
* shims/dom-removenode.js
* shims/object-create.js
* shims/object-assign.js
* shims/string-trim.js
*/
if (typeof module !== 'object') { module = {}; }
if (typeof module.exports !== 'object') { module.exports = {}; }
if (typeof window !== 'object') { window = global||{}; }
if (typeof document !== 'object') {
	document = {
		body: {},
	};
}
var glatteis = {
};
/*
* a move to .then(cb) would be awesome or nuh?
* @todo indeed.
*/
var glatteisfn = function (name, fn) {
	if (name) {
		var mod = (glatteis._mods[name] || glatteis[name]);
		if (mod) {
			if (typeof fn === 'function') {
				fn(mod);
				return null;
			} else {
				return (mod || false);
			}
		} else {
			var path = glatteis._paths[name] || ( $.path + '/masdar/' + name + '.js' );
			if (typeof fn === 'function') { // defer execution
				glatteis.require(path, function(mod) {
					glatteis._mods[name] = mod;
					fn(mod);
				});
			} else {
				glatteis._mods[name] = glatteis.require( path );
				return glatteis._mods[name];
			}
		}
	}
	return false;
};
var $ = $$ = glatteis = Object.assign(glatteisfn, glatteis);
if (typeof module === 'object') {
	module.exports = glatteis;
}
$.log = function () {
	console.log.apply(console, arguments);
};
;(function(){
	var proto = {
		s: function () {
			var a = '', str = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
				str += ' '+ arguments[b];
			}
			eval('console.log('+a+');');
		},
		e: function () {
			var a = '', str = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
				str += ' '+ arguments[b];
			}
			eval('console.error('+a+');');
		},
		i: function () {
			var a = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
			}
			eval('console.info('+a+');');
		}
	};
	$.log = Object.assign($.log, proto);
})();
;(function (){
	/*
	* takes a function with a unique name, if a function with this name is
	* provided again, it delays the exec of that function by a few ms
	*
	* calling without fn will just clear the timeout on that id
	* */
	var taxeeraat = {};
	$.taxeercancel = function (id) {
		clearTimeout(taxeeraat[id]);
	};
	$.taxeer = function (id, fn, customdelay, nofurtherdelay) {
		customdelay = customdelay || 300;
		if ( nofurtherdelay && taxeeraat[id] ) return;
		if ( taxeeraat[id] ) {
			clearTimeout( taxeeraat[id] );
			taxeeraat[id] = undefined;
		}
		if ( typeof fn === 'function' ) {
			taxeeraat[id] = setTimeout( function () {
				fn(function () {
					$.taxeer(id, fn, customdelay, nofurtherdelay);
				});
				taxeeraat[id] = undefined;
			}, customdelay );
		}
	};
})();
$.re = function (string, automaton, flags) { // automaton, flags
	var object = (new RegExp(automaton||'', flags||'')).exec(string||'') || {};
	object.re = function (automaton, flags) {
		return $.re(object[0]||'', automaton, flags);
	};
	return object;
};
$.regex = $.re;
/*
* this restores the initial module.exports = {} from
* = glatteis by ._c
* inclusion in other parent scripts after concatenation &
* uglification
*/
$._r = function () {
	module.exports = glatteis;
};
/*
* used only when mods are concat'd
* if no ._name property is present in mod, use the name argument
* if no name argument, return false
*/
$._c = function (name) {
	var mod = module.exports;
	module.exports = {};
	if (mod instanceof Object
		&& (typeof(name) === 'string' || typeof(mod._name) === 'string')
	) {
		if (typeof(mod._name) === 'string') {
			glatteis._mods[mod._name] = mod;
		} else {
			glatteis._mods[name] = mod;
		}
		return true;
	}
	return false;
};
$._paths = {
};
$._mods = {
};
$.cache = function (name, path) { // cache a module's path
	$._paths[name] = path;
};
$.unload = function (mods, fn) {
	/*
	* @TODO: delete/unload mods from memory
	* run ._unload per mod for a graceful exit
	* once all mods are unloaded in a chain/order -> call fn
	*/
};
;(function (){
	var _arrayPrototype = {
		set: function (id, object) {
			if (this._keys[id] !== undefined) { // update
				if (typeof object === 'function') {
					this._array[this._keys[id]] = object(this._array[this._keys[id]]);
				} else {
					this._array[this._keys[id]] = object;
				}
				typeof this.onset === 'function' && this.onset(object, id);
			} else { // add
				if (typeof object === 'function') {
					this._keys[id] = this._array.push(
												object(this._array[this._keys[id]])
											) - 1;
				} else {
					this._keys[id] = this._array.push(object) - 1;
				}
				typeof this.onadd === 'function' && this.onadd(object, id);
				++this.length;
			}
			return this;
		},
		alter: function (id, object) {
			var item = this.get(id);
			if (item) {
				this.set( id , Object.assign( item, object ) );
			}
			return this;
		},
		pop: function (id) {
			if (this._keys[id] !== undefined) {
				typeof this.onpop === 'function' && this.onpop(id);
				this._array[this._keys[id]] = undefined;
				delete this._keys[id];
				--this.length;
			}
			return this;
		},
		popall: function (array) {
			if (typeof array.toNative === 'function') array = array.toNative();
			for (var i in array) {
				this.pop( array[i] );
			}
		},
		get: function (id) {
			if (this._keys[id] > -1) {
				return this._array[ this._keys[id] ];
			} else {
				return undefined;
			}
		},
		each: function (fn) {
			if (typeof fn === 'function') {
				for (var i in this._array) {
					if (this._array[i] !== undefined) {
						var val = fn(this._array[i], i);
						if (val !== undefined) {
							this._array[i] = val;
						}
					}
				}
			}
		},
		/*
		* this supports both native and Ge arrays
		* id is the prop name in array that you want to be the id
		* */
		setall: function (id, array) {
			this._id = id;
			if (typeof array.toNative === 'function') array = array.toNative();
			for (var i in array) {
				this.set( array[i][id], array[i] );
			}
		},
		unique: function () {
			var uniquearray = [];
			this._array.forEach(function (item) {
				if (uniquearray.indexOf(item) === -1)
					uniquearray.push(item);
			});
			return uniquearray;
		},
		order: function (order) {
			var ordered = [];
			for (var i in order) {
				var val = order[i];
				var index = this._array.indexOf(val);
				if (index > -1) {
					ordered.push( this._array[index] );
					this._array.splice(index, 1);
				}
			}
			return ordered.concat(this._array);
		},
		slice: function (from, to) {
			var nativearr = $.array();
			this.each(function (item, i) {
				if (i >= from && i <= to)
					nativearr.set(item.uid, item);
			});
			return nativearr;
		},
		/*
		* id is the prop name in array that you want to be the id
		* key is the prop you want to compare for order
		* */
		sort: function (reverse, key, id) {
			var temparray = this.toNative();
			if (typeof reverse === 'function') {
				temparray.sort(reverse);
			} else {
				temparray.sort(function (a, b) {
					if (reverse) {
						if (key) {
							return b[key]-a[key];
						} else {
							return b-a;
						}
					} else {
						if (key) {
							return a[key]-b[key];
						} else {
							return a-b;
						}
					}
				});
			}
			if (id || this._id) {
				this._array = [];
				this.length = 0;
				this._keys = {};
				this.setall(id || this._id, temparray);
			}
			return this;
		},
		/*reverse: function (id, order) {
			this._array.reverse();
			this.setall(id, this._array);
			return this;
		},*/
		/*
		* the new non-camelcase format in effect since 29nov2018
		* returns all keys that are not 'undefined'
		* returns native array
		* */
		tokeys: function () {
			var arr = [], keys = Object.keys(this._keys);
			for (var i in keys) {
				if (keys[i] !== undefined)
					arr.push( keys[i] );
			}
			return arr;
		},
		saabiq: function (uid) {
			var index = this._keys[uid];
			if (!isundef(index) && index > -1) {
				for (var i = index-1; i >= 0; --i) {
					if (!isundef(this._array[i])) {
						return this._array[i];
					}
				}
			}
		},
		qaadim: function (uid) {
			var index = this._keys[uid];
			if (!isundef(index) && index > -1) {
				for (var i = index+1; i < this._array.length; ++i) {
					if (!isundef(this._array[i])) {
						return this._array[i];
					}
				}
			}
		},
		eawwad: function (uid, uid2) { // swap objects in array to change order
			var index = this._keys[uid];
			var index2 = this._keys[uid2];
			if (index > -1 && index2 > -1) {
				this._keys[uid] = index2;
				this._keys[uid2] = index;
				var temp = this._array[index];
				this._array[index] = this._array[index2];
				this._array[index2] = temp;
			}
		},
		toNative: function () {
			var arr = [];
			for (var i in this._array) {
				if (this._array[i] !== undefined) {
					arr.push(this._array[i]);
				}
			}
			return arr;
		}
	};
	$.array = function (prearray, id) {
		var newqueue = Object.create(_arrayPrototype);
		prearray = prearray || [];
		if (typeof prearray.toNative === 'function') prearray = prearray.toNative();
		newqueue._array = prearray;
		newqueue._keys = {};
		newqueue._id = id;
		if (id)
			prearray.forEach(function (item, i) {
				newqueue._keys[ item[id] ] = i;
			});
		newqueue.length = newqueue._array.length;
		return newqueue;
	};
	$.array.clean = function (arr) {
		var arr2 = [];
		if (arr) arr.forEach(function (item, i) {
			arr2.push(item);
		});
		return arr2;
	};
})();
;(function (){
	var _queuePrototype = {
		_init: function () {
			if (!this._didinit) {
				this._didinit = true;
				this._didrun = false;
				this.queuearray = [];
				this.active = false;
				this.count = 0;
				this.uid = false;
				this._onnext = false;
				this._onfinish = false;
			}
		},
		_next: function (queue, extra) {
			++queue.count;
			queue._process(queue, extra);
			queue.active = false;
			return queue.count;
		},
		_process: function (queue, extra) {
			if (queue.muntahaa) return;
			if (typeof queue._onnext === 'function') {
				if (queue.queuearray.length > 0) {
					queue.uid = queue.queuearray.length;
					queue.active = true;
					var worker = queue.queuearray.pop();
					var done = function (queue, extra) {
						queue._onnext(queue._next, queue, extra);
					};
					worker(done, queue, extra);
					return false;
				} else {
					queue.active = false;
					--queue.count;
					if (typeof queue._onfinish === 'function') {
						queue._onfinish(queue, extra);
					}
					return false;
				}
			}
		},
		intahaa: function () {
			this.muntahaa = 1
		},
		set: function (worker) {
			this._init();
			if (typeof worker === 'function') {
				this.queuearray.unshift(worker);
			}
			return this;
		},
		run: function (_onfinish) {
			this.onfinish(_onfinish);
			var queue = this;
			queue._init();
			if (typeof queue._onnext !== 'function') {
				queue.onnext(function (done, _queue, extra) {
					done(_queue, extra);
				});
			}
			if (!queue._didrun
			&& typeof queue._onnext === 'function') {
				queue._didrun = true;
				queue._process(queue);
			}
		},
		onnext: function (cb) {
			if (typeof cb === 'function') {
				this._onnext = cb;
			}
		},
		onfinish: function (cb) {
			if (typeof cb === 'function') {
				this._onfinish = cb;
			}
		}
	};
	$.queue = function (onnext, onfinish) {
		var newqueue = Object.create(_queuePrototype);
		newqueue._init();
		if (typeof onnext === 'function') {
			newqueue._onnext = onnext;
		}
		if (typeof onfinish === 'function') {
			newqueue._onfinish = onfinish;
		}
		return newqueue;
	};
})();
;(function (){
	$.queuerequest = function () {
		var queuerequest = {
			name: 1,
			active: false,
			cnt: 0,
			id: false,
			_array: [],
			cur: false,
			queue: function (options) {
				this._array.unshift(options);
				this.id = this._array.length;
				if (this.active === true)
					return this.cnt;
				else
					return this.process(this);
			},
			/* TODO
			* when requests are queued too fast, it gets stuck on the last
			* request and never processes it unless queue is called again
			* or process is called manually
			*
			* fix this asap, it's an ugly prob
			* */
			process: function (carriedthis) {
				carriedthis = carriedthis || this;
				if (carriedthis._array.length && !carriedthis.active) {
					carriedthis.id = carriedthis._array.length;
					carriedthis.active = true;
					var options = carriedthis._array.pop();
					{
						if (options.uri.match(/http.*\:\/\//) === null) {
							if (typeof nw === 'object') {
								options.uri = 'file://'+options.uri;
							}
						}
						var request;
						var shorty = options.uri;
						if (window.XMLHttpRequest) {
							request = new XMLHttpRequest();
						}
						else if (typeof require === 'function') {
							request = require(options.uri);
							typeof options.callback === 'function' && options.callback(request);
							carriedthis.cnt++; carriedthis.process(carriedthis); carriedthis.active = false; return carriedthis.cnt;
						}
						request.timeout = carriedthis.fetchtimeout || $.fetchtimeout;
						carriedthis.cur = request;
						if (options.type == 'get') {
							request.open('GET', options.uri, true);
						} else {
							request.open('POST', options.uri, true);
							if (!options.headers)
								request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset = UTF-8");
						}
						if (options.headers instanceof Object) {
							Object.keys(options.headers).forEach(function (key) {
								request.setRequestHeader(key, options.headers[key]);
							});
						}
						(request.upload ? request.upload: request).onprogress = function (event) {
							if (event.lengthComputable && typeof carriedthis.progressfn === 'function') {
								carriedthis.progressfn(event.loaded, event.total);
							}
						};
						var onend = function (errtype) {
							typeof options.callback === 'function' && options.callback('', errtype || request.status);
							carriedthis.cnt++;
							carriedthis.process(carriedthis);
							carriedthis.active = false;
							return carriedthis.cnt;
						};
						request.onreadystatechange = function() {
							if (request.readyState == 4) {
								if (request.status === 200) {
									typeof options.callback === 'function' && options.callback(request.responseText);
									carriedthis.cnt++;
									carriedthis.process(carriedthis);
									carriedthis.active = false;
									return carriedthis.cnt;
								} else {
									onend(request.status);
								}
							}
						}
						request.onabort = function () {
							onend(-100);
						};
						request.ontimeout = function () {
							onend(-200);
						};
						request.onerror = function () {
							onend(-300);
						};
						request.send( options.type == 'get' ? null : options.payload );
					}
					return false;
				} else {
					carriedthis.active = false; carriedthis.cnt = 0;
					return false;
				}
			},
		};
		var newobject = Object.create(queuerequest);
		return newobject;
	};
	/*
	* (s)cript location is required, (c)allback function is passed the
	* responseText as the first argument
	* (e)xecute the script before the callback function
	* this is fetch 2.0 now
	* it tries to implement a very basic form of ES6 fetch + then
	* it uses a barebones promise without depending on JS base Promise or
	* Response class
	*
	* channels: strings that identify separate independent queues of requests
	* for example in web apps, one for regular sync requests and another for
	* listening for events from the server
	*/
	$.fetchtimeout = 30 * 1000;
	$.fetchcancel = function (channel) {
		channel = $.fetchchannels[channel || 1];
		if ( channel ) {
			channel._array = [];
			if (channel.cur)
				channel.cur.abort();
			channel.active = false;
			channel.cnt = 0;
			channel.cur = 0;
		}
	};
	$.fetchchannels = {};
	$.fetchprocess = function (channel) {
		channel = channel || 1;
		if ( $.fetchchannels[channel] )
			$.fetchchannels[channel].process();
	};
	$.fetch = function (uri, data, channel, progressfn, fetchtimeout, headers) {
		channel = channel || 1;
		var response = false,
			thencb = false,
			thenfn = function (callback) {
				if (response) {
					if (typeof callback === 'function') callback(response);
				} else {
					thencb = callback;
				}
			};
		if ( !$.fetchchannels[channel] ) {
			$.fetchchannels[channel] = /*Object.create(queuerequest)*/ $.queuerequest();
			$.fetchchannels[channel].name = channel;
			$.fetchchannels[channel].fetchtimeout = fetchtimeout || $.fetchtimeout;
		}
		if (typeof progressfn === 'function')
			$.fetchchannels[channel].progressfn = progressfn;
		$.fetchchannels[channel].queue({
			uri: uri,
			payload: (data || null),
			headers: headers || 0,
			type: (data ? 'post' : 'get'),
			callback: function (body, err) {
				try {
					if (typeof thencb === 'function') {
						thencb({
							body: body,
							err: err
						});
					}
				} catch (e) {
					glatteis.log.e(e);
				}
			}
		});
		return {
			then: thenfn
		};
	};
})();
$._r();
'use strict';
$.path = __dirname;
/*
	Files - 02 Aug 2016
		- 11 Nov 2016
		- 22 May 2018 add sync retrieval support
*/
var Files;
;(function () {
	'use strict';
	Files = {
		data: {},
		cache: {},
		fs: false,
		path: false,
		basepath: false,
		s: false,
		init: function () {
			if (Files.fs === false) {
				if (typeof require === 'function') { // use node fs
					try { Files.fs = require('fs-extra'); }
					catch (e) { Files.fs = require('fs'); }
					Files.path = require('path');
					Files.s = Files.path.sep;
					var __dirname = '';
						if (typeof process === 'object') {
							__dirname = process.execPath.match(/(.*)\/.*$/)[1];
						}
					Files.basepath = __dirname;
				} else { // use h5 file api
				}
			}
		},
		exists: {
			file: function (path) {
				var yes = 1;
				try {
					Files.get.file(path);
				} catch (e) {
					if (e.code !== 'EISDIR') yes = 0;
				}
				return yes;
			},
			folder: function () {
				var yes = 1;
				try {
					Files.get.folder(path);
				} catch (e) {
					yes = 0;
				}
				return yes;
			},
		},
		stats: function (path, cb) {
			if (typeof cb === 'function') {
				Files.fs.lstat(path, cb);
				return true;
			} else {
				return Files.fs.lstatSync(path);
			}
		},
		realpath: function (path, cache, cb) {
			if (typeof cache === 'function') {
				cb = cache;
				cache = {};
			}
			if (typeof cb === 'function') {
				Files.fs.realpath(path, cache, cb);
				return true;
			} else {
				return Files.fs.realpathSync(path, cache);
			}
		},
		/*
		* if cb is not a func, uses sync methods
		*/
		get: {
			file: function (path, cb, options) {
				if (typeof cb === 'function') {
					var innercb = function (err, data) {
						cb(data, err); // data, err
					}
					Files.fs.readFile(path, innercb);
					return true;
				} else {
					return Files.fs.readFileSync(path);
				}
				return false;
			},
			folder: function (path, cb, options) {
				if (typeof cb === 'function') {
					var innercb = function (err, data) {
						cb(data);
						if (err) throw err;
					}
					Files.fs.readdir(path, innercb);
					return true;
				} else {
					return Files.fs.readdirSync(path);
				}
				return false;
			}
		},
		set: {
			symlink: function (srcpath, dstpath, cb) {
				if (typeof cb === 'function') {
					var innercb = function (b, c) {
						cb(c);
						if (b) throw b;
					}
					Files.fs.symlink(srcpath, dstpath, innercb);
					return true;
				} else {
					try {
						Files.fs.symlinkSync(srcpath, dstpath);
					} catch (e) {
					}
					return true;
				}
			},
			file: function (path, cb, data) {
				if (typeof cb === 'function') {
					var innercb = function (b, c) {
						cb(c);
						if (b) throw b;
					}
					if (data === undefined) {
						Files.get.file(path, function (data, err) {
							if (err) {
								Files.fs.writeFile(path, '', innercb);
							} else {
								innercb(null);
							}
						});
					} else {
						Files.fs.writeFile(path, data, innercb);
					}
					return true;
				} else {
					return Files.fs.writeFileSync(path, cb);
				}
				return false;
			},
			folder: function (path, mask, cb) {
				if (typeof mask === 'function') {
					cb = mask;
					mask = '0777';
				}
				if (typeof cb === 'function') {
					Files.fs.mkdir(path, mask, function(err) {
						if (err) {
							if (err.code == 'EEXIST') cb(null);
							else cb(err);
						} else cb(null);
					});
				} else {
					mask = mask || '0777';
					try {
						Files.fs.mkdirSync(path, mask)
					} catch (e) {
					}
					return true;
				}
			}
		},
		move: function (oldPath, newPath, callback) {
			function copyunlink () {
				var readStream = Files.fs.createReadStream(oldPath);
				var writeStream = Files.fs.createWriteStream(newPath);
				readStream.on('error', callback);
				writeStream.on('error', callback);
				readStream.on('close', function () {
					Files.fs.unlink(oldPath, callback);
				});
				readStream.pipe(writeStream);
			}
			Files.fs.rename(oldPath, newPath, function (err) {
				if (err) {
					if (err.code === 'EXDEV') {
						copyunlink();
					} else {
						callback(err);
					}
					return;
				}
				callback();
			});
		},
		copy: function (oldPath, newPath, callback) {
			if (typeof callback === 'function') {
				Files.fs.copyFile(oldPath, newPath, function (err) {
					if (err) {
						callback(err);
						return;
					}
					callback();
				});
			} else {
				Files.fs.copyFileSync(oldPath, newPath);
			}
		},
		copy_recursive: function (oldPath, newPath, callback) {
			if (typeof callback === 'function') {
				Files.fs.cp(oldPath, newPath, {recursive: true}, function (err) {
					if (err) {
						callback(err);
						return;
					}
					callback();
				});
			} else {
				Files.fs.cpSync(oldPath, newPath, {recursive: true});
			}
		},
		pop: {
			file: function (path, cb) {
				if (typeof cb === 'function') {
					Files.fs.unlink(path, cb);
				} else {
					Files.fs.unlinkSync(path);
				}
				return true;
			},
			folder: function (path, cb, rf) {
				if (typeof cb === 'function') {
					Files.fs.rmdir(path, {
						recursive: !!rf,
					}, cb);
				} else {
					Files.fs.rmdirSync(path, {
						recursive: !!rf,
					}, cb);
				}
				return true;
			}
		}
	};
	Files.init();
	module.exports = Files;
})();
var parsestring = function (v, m) { // forces v to be a string, maximum
	if (typeof v == 'string') {}
	else if (typeof v == 'number') v = String(v);
	else v = '';
	if (isnum(m)) v = v.substr(0, m);
	return v;
};
/* 04 Jun 2018
* events-code: 3129*
* common command line interface for linux terminals
* basic building blocks, ansi codes, colors, basic formatting
* emits using hooks
* cli-resize { rows, cols }
* cli-close sync function
* cli-command { raw, args{} }
* cli-hint { line }
* cli-answer { line }
* gets you the -* & --* & commands & everything in raw
* cli-init { raw (args), one, two, commands }
* listens using hooks
* cli-ask { question, options } returns answer
*/
var Cli = Cli || {};
;(function () {
	'use strict';
	var Hooks = hooks;
	var _ = {
		events: {
			cli: 3129,
			resize: 3129010,
			close: 3129020,
			command: 3129030,
			hint: 3129040,
			answer: 3129050,
			init: 3129060,
			ask: 3129500,
		},
		code: {
			Reset : "\x1b[0m" ,
			_bright : "\x1b[1m" ,
			_dim : "\x1b[2m" ,
			_underscore : "\x1b[4m" ,
			_blink : "\x1b[5m" ,
			_reverse : "\x1b[7m" ,
			_hidden : "\x1b[8m" ,
			Fgblack : "\x1b[30m" ,
			Fgred : "\x1b[31m" ,
			Fggreen : "\x1b[32m" ,
			Fgyellow : "\x1b[33m" ,
			Fgblue : "\x1b[34m" ,
			Fgmagenta : "\x1b[35m" ,
			Fgcyan : "\x1b[36m" ,
			Fgwhite : "\x1b[37m" ,
			Bgblack : "\x1b[40m" ,
			Bgred : "\x1b[41m" ,
			Bggreen : "\x1b[42m" ,
			Bgyellow : "\x1b[43m" ,
			Bgblue : "\x1b[44m" ,
			Bgmagenta : "\x1b[45m" ,
			Bgcyan : "\x1b[46m" ,
			Bgwhite : "\x1b[47m"
		},
		/*
		* ^cmd^ = command: blink, bright, underscore...
		* `color` = fg color
		* ~color~ = bg color
		* `` = reset
		* ~~ = reset
		*/
		ansi: function (str) {
			var rs = /\`\`/,
				r2 = /\~\~/,
				cm = /\^([\w]+)\^/,
				fg = /\`([\w]+)\`/,
				bg = /\~([\w]+)\~/;
			while (fg.test(str)) {
				str = str.replace(fg, function () {
					return _.code[ 'Fg'+arguments[1] ];
				});
			}
			while (bg.test(str)) {
				str = str.replace(bg, function () {
					return _.code[ 'Bg'+arguments[1] ];
				});
			}
			while (cm.test(str)) {
				str = str.replace(cm, function () {
					return _.code['_'+arguments[1]];
				});
			}
			while (rs.test(str)) {
				str = str.replace(rs, function () {
					return _.code.Reset;
				});
			}
			while (r2.test(str)) {
				str = str.replace(r2, function () {
					return _.code.Reset;
				});
			}
			return str;
		},
		echo: function () {
			var str = '';
			for (var i in arguments) {
				str += _.ansi( arguments[i] );
			}
			console.log(str);
		},
		write: function () {
			var str = '';
			for (var i in arguments) {
				str += _.ansi( arguments[i] );
			}
			process.stdout.write(str);
		},
		rl: false,
		rli: false,
		width: 80,
		height: 24,
		/* my format, if this is defined, commands send parsed arguments
		* install: {
		* -- - details type default
		* overwrite: ['o', 'overwrite existing files', 'true', false ],
		* public: ['p', 'create /public folder', 'true', false ],
		* public: ['p', 'create /public folder', 'true', false ],
		* },
		* */
		define: function () {
		},
		sizes: function () {
			_.width = process.stdout.columns,
			_.height = process.stdout.rows;
		},
		clear: function () {
			if (!_.rl || !_.rli) {
				_.setonresize();
				_.sizes();
				process.stdout.cursorTo(0, 0);
				var str = '';
				for (var i = 0; i < _.width; ++i) {
					for (var j = 0; j < _.height; ++j) {
						str += ' ';
					}
					str += '\n';
				}
				_.write(str);
			} else {
				_.rl.cursorTo(process.stdout, 0, 0);
				_.rl.clearScreenDown(process.stdout);
			}
		},
		commands: 'exit '.split(' '),
		completer: function (line, callback) {
			Hooks.run( _.events.hint, {
				line: line,
				callback: callback
			});
		},
		_prompt: '~magenta~ > ~~ ',
		_autoprompt: false,
		setautoprompt: function (auto) {
			_._autoprompt = !!auto;
		},
		/*
		* off by setting text to false
		* on by specifying the actual text
		*/
		prompt: function (text) {
			if (!_.rl || !_.rli) _.cli();
			if (text === false) {
				_.rli.prompt(false);
			} else if (text === true) {
				_.setprompt( _.ansi( _._prompt ) );
				_.rli.prompt(true);
			} else {
				_.setprompt( text );
				_.rli.setPrompt( _.ansi(_._prompt) );
				_.rli.prompt(true);
			}
		},
		setprompt: function (text) {
			_._prompt = text === undefined ? _._prompt : text;
		},
		/*
		* **as-is:** What you enter, is what you get
		* - 'string', 1, true
		* - **int:** Is converted to an Integer wrapped in a Number Object
		* - 'int', 'number', 'num',
		* - 'time', 'seconds', 'secs', 'minutes', 'mins'
		* - 'x', 'n'
		* - **date:** Is converted to a Date Object
		* - 'date', 'datetime', 'date_time'
		* **float:** Is converted to a Float wrapped in a Number Object
		* - 'float', 'decimal'
		* **file:** Is converted to a String Object if it is a valid path
		* - 'path', 'file', 'directory', 'dir'
		* **email:** Converted to a String Object if it is a valid email format
		* - 'email'
		* **url:** Converted to a String Object if it is a valid URL format
		* - 'url', 'uri', 'domain', 'host'
		* - **ip:** Converted to a String Object if it is a valid IP Address format
		* - 'ip'
		* - **true:** Converted to true if argument is present on command line
		* - 'bool', 'boolean', 'on'
		* **false:** Converted to false if argument is present on command line
		* - 'false', 'off', false, 0
		*/
		gettype: function (type) {
			if (typeof type !== 'string') return 's';
			if (type.startsWith('fl')) {
				return 'f';
			} else
			if (type.startsWith('int') || type.startsWith('num')) {
				return 'n';
			} else
			if (type.startsWith('bool')) {
				return 'b';
			} else {
				return 's';
			}
		},
		parsetype: function (type, value) {
			type = _.gettype(type);
			if (type == 'f') {
				var result = parseFloat(value);
				if (result !== NaN) return result;
			} else
			if (type == 'n') {
				var result = parseInt(value);
				if (result !== NaN) return result;
			} else
			if (type == 'b') {
				var no = ['no', 'false', 'n', '0', 'nope', 'off', 'f'],
					yes = ['yes', 'true', 'y', '1', 'yep', 'on', 't'];
				if (no.includes(value)) return false;
				if (yes.includes(value)) return true;
			}
			return value;
		},
		answerlogic: function (ans, def, type) {
			type = _.gettype(type);
			if (['f', 'n'].includes(type)) {
				return ans || def;
			} else
			if (type == 'b') {
				return ans === '' ? def : ans;
			} else
			if (type == 's') {
				return ans === '' ? def : ans;
			}
			return value;
		},
		/*
		* finds the biggest string in an [], returns a function that fills any
		* string provided with spaces to make it as big as the biggest string
		*/
		getfiller: function (obj) {
			var biggest = 0;
			if (obj instanceof Array) {
				for (var i in obj) {
					var len = (obj[i] || '').length;
					if ( len > biggest ) {
						biggest = len;
					}
				}
			} else
			if (obj instanceof Object) {
				for (var i in obj) {
					if ( obj.hasOwnProperty(i) ) {
						var len = (i || '').length;
						if ( len > biggest ) {
							biggest = len;
						}
					}
				}
			} else
			if (obj instanceof String) {
				biggest = obj.length;
			}
			return function (str) {
				if (str.length < biggest) {
					str = str+( ' '.repeat( biggest-str.length ) );
				}
				return str;
			};
		},
		_inquestion: false,
		/*
		* callback Function || Object, treated as args if not function
		*
		* */
		question: function (query, callback, key, def, type) {
			if (!_.rl || !_.rli) _.cli();
			_._inquestion = true;
			var defstr = def === undefined || def === null ? '' : '~black~^dim^('+def+')~~ ';
			if ([0, '', '?', 'null', undefined, null].includes(query)) {
				query = _._prompt;
			}
			_.rli.question(_.ansi( query + defstr ), function () {
				_._inquestion = false;
				var ans = _.parsetype(type, arguments[0]);
				def = _.parsetype(type, def);
				if (ans === '^C') {
					if (_.iscli) process.exit();
					return false;
				}
				if (typeof callback === 'function') {
					callback( ans );
				} else {
					callback = callback || {};
					callback.answer = _.answerlogic(ans, def, type);
					callback.question = query;
					if (key !== undefined) {
						callback.keys[key] = _.answerlogic(ans, def, type);
					}
					Hooks.run( _.events.answer, callback);
				}
			});
		},
		_onresize: false,
		setonresize: function () {
			if (!_._onresize) {
				_._onresize = true;
				process.stdout.on('resize', function () {
					_.sizes();
					Hooks.run(_.events.resize, {
						rows: _.height,
						cols: _.width
					});
				});
			}
		},
		cli: function () {
			var readline = require('readline'),
				rl = readline.createInterface(
									process.stdin,
									process.stdout,
									_.completer
							);
			/* @todo
			* If terminal is true for this instance then the output stream will
			* get the best compatibility if it defines an output.columns property,
			* and fires a "resize" event on the output if/when the columns ever
			* change (process.stdout does this automatically when it is a TTY).
			* */
			_.rl = readline;
			_.rli = rl;
			rl.on('line', function(line) {
				line = line.trim();
				switch(line) {
					case 'quit':
					case 'exit':
						process.exit(0);
						break;
				}
				Hooks.run( _.events.command, _.processargs(line.split(' ')) );
				if (_._autoprompt) {
					_.prompt(true);
				}
			}).on('SIGINT', function() {
				Hooks.set(_.events.close, _.events.cli, function () {
					if (_._inquestion) {
						_._inquestion = false;
						_.echo('^C'); // @todo better way to cancel a question
						process.exit(0);
					} else {
						_.echo('exit');
						process.exit(0);
					}
				});
				Hooks.rununtilconsumed(_.events.close);
			});
			_.setonresize();
		},
		processargs: function (raw) {
			var args = {
					raw: [],
					one: [],
					two: [],
					cmd: [],
					keys: [],
				},
				lastkey = false;
			args.raw = raw;
			for (var i in raw) {
				var arg = raw[i];
				if ( arg.startsWith('--') || arg.match(/^-\w.*/) ) {
					lastkey = arg.startsWith('--') ? arg.substr(2) : arg.substr(1);
					args.keys[lastkey] = args.keys[lastkey] || true;
				} else {
					if (lastkey) {
						if ( args.keys[lastkey] === true ) {
							args.keys[lastkey] = [];
						}
						args.keys[lastkey].push(arg);
					} else {
						args.cmd.push(arg);
					}
				}
				if (arg.startsWith('--')) {
					args.two.push(arg);
				} else
				if (arg.match(/^-\w.*/)) {
					args.one.push(arg);
				}
			}
			for (var i in args.keys) {
				if (args.keys[i].length === 1) {
					args.keys[i] = args.keys[i][0];
				}
			}
			args = _.parseargs(args);
			return args;
		},
		parseargs: function (args) {
			for (var i in args.keys) {
				args.keys[i] = _.parsetype( null, args.keys[i] );
			}
			return args;
		},
		/*
		* takes options object
		* prompt: defautl '>'
		* autoprompt: false
		* cli: boolean, default false, enters cli and waits for input
		* this will start generating hooks events
		*/
		init: function (options) {
			var options = options || {},
				raw = process.argv.slice(2),
				iscli = process.stdout.isTTY;
			var args = _.processargs(raw);
			args.iscli = iscli;
			_.iscli = iscli;
			_.setautoprompt(options.autoprompt);
			_.sizes();
			if (iscli && options.cli) {
				_.cli();
				_.prompt(options.prompt);
			}
			Hooks.run(_.events.init, args);
		}
	};
	module.exports = Cli = _;
})();
/*
* Weld is a preprocessor
* it's full version currently lives in the root folder
* it's planned to be moved here once mudeer src modules can handle nesting under folder
*
* the proposed structure for future src module:
* src/
* weld.js
* weld/
* htm.js
* js.js
* config.js
* ...
*
*
* this file is a dirty hack to allow Mudeer apps to parse config.w files -_- :D :( :/
*/
var Weld;
;(function(){
function parse_weld( text ) {
	if (typeof text !== 'string') $.log('text needs to be string');
	text = (text || '')/*.split('---')[0]*/;
	var levels = [],
		lastlevel = 0,
		lastelement = false,
		parsedlines = [];
	text = ( text || '' ).split('\n');
	for (var i in text) {
		var line = text[i];
		var tabs = line.match(/^(\t*).*/i);
		var level = tabs[1].length;
		line = line.replace(/^(\t*)(.*)/i, '$2');
		line = line.replace(/([\t ]+)/gi, ' ');
		var line = line.trim();
		if (line.length > 0
		&& !line.startsWith('//')) {
			if (level > lastlevel) levels.push(lastelement);
			if (level < lastlevel) levels = levels.slice(0, level);
			lastelement = parseInt(i);
			var parent = levels[level-1 ] === undefined ? -1 : levels[level-1 ];
			parsedlines.push({
				uid: parseInt(i) ,
				line : line ,
				level : level ,
				root : levels[0 ] || -1 ,
				parent : parent
			});
			lastlevel = level;
		}
	}
	return parsedlines;
};
var _mod = {
	/*
		* returns all kids as strings in an array
		* or returns '' if there are no kids
		* */
	childrentoarray: function (children) {
		var array = [];
		for (var i in children) {
			array.push(children[i].line);
		}
		if (array.length === 0) return '';
		return array;
	},
	/*
		* returns true if
		* all kids don't have children
		* and they also don't have values
		* */
	allchildrenterminal: function (children) {
		for (var i in children) {
			if (children[i].children.length > 0 || children[i].value.length > 0) {
				return false;
			}
		}
		return true;
	},
	parseparenttag: function (tag, parent) {
		if (tag.value.length > 0) {
			parent.obj[tag.line] = tag.value;
		} else if (tag.children.length > 0) {
			if ( _mod.allchildrenterminal( tag.children ) ) {
				parent.obj[tag.line] = _mod.childrentoarray( tag.children );
			} else {
				parent.obj[tag.line] = tag.obj;
			}
		} else if (tag.children.length === 1) {
			if ( _mod.allchildrenterminal( tag.children ) ) {
				parent.obj[tag.line] = _mod.childrentoarray( tag.children );
			} else {
				parent.obj[tag.line] = tag.obj;
			}
		} else {
			if ( _mod.allchildrenterminal( tag.children ) ) {
				parent.obj[tag.line] = _mod.childrentoarray( tag.children );
			} else {
				parent.obj[tag.line] = tag.line;
			}
		}
	},
	_parsevalue: function (value) {
		if (value === 'true') return true;
		if (value === 'false') return false;
		return value;
	},
	parseroottag: function (tag, tree) {
		if (tag.children.length > 0) {
			if ( _mod.allchildrenterminal( tag.children ) ) {
				tree[tag.line] = _mod.childrentoarray( tag.children );
			} else {
				tree[tag.line] = tag.obj;
			}
		} else {
			if (tag.value.length > 0) {
				tree[tag.line] = _mod._parsevalue(tag.value);
			} else {
				tree[tag.line] = true;
			}
		}
	},
	parse: function (parsedslang, options) {
		var dictionary = {};
		var tree = {};
		for (var i in parsedslang) {
			var command = parsedslang[i];
			var tag = {
				uid: parseInt(command.uid),
				line: command.line,
				level: command.level,
				parent: command.parent,
				children: [],
				obj: {}
			};
			var splat = tag.line.split(' ');
			tag.line = splat[0];
			tag.value = splat.slice(1).join(' ');
			dictionary[tag.uid] = tag;
			if (command.parent > -1) {
				dictionary[command.parent].children.push( tag );
			}
		}
		for (var i in parsedslang) {
			tag = dictionary[ parsedslang[i].uid ];
			if (tag.parent > -1) {
				var parent = dictionary[tag.parent];
				_mod.parseparenttag(tag, parent);
			} else {
				_mod.parseroottag(tag, tree, dictionary);
			}
		}
		return tree;
	}
};
Weld = {
	parse_config: function ( text ) {
		return _mod.parse( parse_weld( text ) );
	},
};
})();
var Config = {};
;(function(){
	var configw;
	try {
		configw = Files.get.file('config.w').toString();
		Config = Weld.parse_config( configw );
	} catch (e) {
		$.log( e );
		$.log(' '+process.cwd()+' ');
		$.log(' config.w not found, try mudeer-create ');
		return;
	}
})();
var Hooks, hooks;
;(function (){
	'use strict';
	Hooks = {
		_registry: {},
		_map: {},
		_uid: 0,
		set: function (hook, id, fn) {
			if (hook instanceof Array) {
				hook.forEach(function (item) {
					Hooks.set(item, id, fn);
				});
				return;
			}
			if (typeof id === 'function')
				fn = id, id = new Date().getTime();
			if (typeof fn === 'function') {
				if (Hooks._registry[hook] === undefined) {
					Hooks._registry[hook] = [];
				}
				++Hooks._uid;
				Hooks._registry[hook][Hooks._uid] = fn;
				Hooks._map[hook+'_'+id] = Hooks._uid;
				return true;
			}
			return false;
		},
		run: function (hook, extras) {
			var handlers = Hooks._registry[hook];
			if (handlers instanceof Array) {
				for (var i in handlers) {
					if (typeof handlers[i] === 'function') {
						handlers[i](extras);
					}
				}
				return true;
			}
			return false;
		},
		rununtilconsumed: function (hook, extras) {
			var handlers = Hooks._registry[hook];
			if (handlers instanceof Array) {
				for (var i in handlers) {
					if (typeof handlers[i] === 'function') {
						var returnedvalue = handlers[i](extras);
						if (returnedvalue) {
							return returnedvalue;
						}
					}
				}
			}
			return false;
		},
		pop: function (hook, id) {
			if (Hooks._registry[hook]) {
				delete Hooks._registry[hook][ Hooks._map[hook+'_'+id] ];
				return true;
			}
			return false;
		},
		hook: function (hook) {
			Hooks._registry[hook] = [];
		},
		unhook: function (hook) {
			delete Hooks._registry[hook];
		}
	};
	module.exports = Hooks;
	hooks = Hooks;
})();
/*
* listen on conf.port, serve-static from /public, both accepted as args
* watch for changes to /src and restart automatically after a few secs
* optionally accept a db handle that is passed as extra.db
* this allows multiple dbs to be queried easily
* emits hooks: request
* listens on hooks: response, session, ...
* session handling convention:
* a request comes in, server emits request
* ge-accounts uses the .db, .name, .pass and emits result
* session on success, server emits
* response on failure, server _out's it.
*
*
*
*
* */
var Server;
;(function(){
	'use strict';
	var routes = [];
	var types = {
		post: 100,
		get: 200,
	};
	var node_path = require('path');
	var public_path = node_path.resolve( Config.public || $.path )+'/';
	Server = {
		post: function (url, fn) {
			routes.push({
				type: types.post,
				url: url,
				fn: fn
			});
			return Server;
		},
		get: function (url, fn) {
			routes.push({
				type: types.get,
				url: url,
				fn: fn
			});
			return Server;
		},
		init: function (options) {
			options = options || {};
			options.port = options.port || 3000;
			process.title = options.name || 'server';
			var express = require('./deps/express'); // web framework external module
			var fileupload = require('./deps/express-fileupload');
			var app = express();
			app.use(fileupload());
			app.disable('x-powered-by');
			var bodyParser = require('./deps/body-parser');
			app.use( bodyParser.json() );
			app.use( bodyParser.urlencoded({ extended: true }) );
			app.options('*', function (req, res) {
				if (req.headers['access-control-request-method']) {
					res.setHeader('Access-Control-Allow-Origin', '*');
					res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
					res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
					res.setHeader('Access-Control-Max-Age', 86400 );
					res.end();
				}
			});
			routes.forEach(function (route) {
				if (route.type === types.get) {
					app.get(route.url, function (req, res) {
						route.fn(req, res);
					});
				}
				if (route.type === types.post) {
					app.post(route.url, function (req, res) {
						route.fn(req, res);
					});
				}
			});
			app.use(express.static(public_path));
			app.get('*', function (req, res) {
				res.sendFile( public_path+'index.html' );
			});
			app.listen(options.port);
		}
	};
	module.exports = Server;
})();
var Web;
;(function(){
	'use strict';
	var loadedmodules = [], Cache = {};
	var node_path = require('path');
	var public_path = node_path.resolve( Config.public || $.path )+'/';
	var echo = Cli.echo;
	function print_prop(a, b) {
		echo( ' ^bright^'+a+'~~ '+b+' ' )
	}
	Web = {
		_out: function (req, res, obj, extra) {
			obj = obj || {};
			/*
			* only the perm and nashar channels are allowed to send waqt
			* and they handle it elsewhere :p
			* this was for the on-demand channel and that one doesn't send waqt
			* anymore
			* */
			try {
				res.json(obj);
			} catch (e) {
				$.log.s(e);
			}
		},
		adaaf: function (callback) { // add
			loadedmodules.push(callback);
		},
		api: function (req, res) {
			res.setHeader('Access-Control-Allow-Origin', '*');
			var host = req.headers.host.split(':'),
				extra = {
					payload: {} ,
					obj: {} ,
					boxdatabase: "",
					database: "",
					host: host[0] ,
					port: host[1] ,
					req: req ,
					res: res ,
					Cache: Cache ,
				};
			var q = $.queue();
			q.set(function (done, queue) {
				if ( (req.body || {}).json ) {
					try {
						extra.payload = JSON.parse( req.body.json );
						extra.files = req.files;
						if (req.headers) {
							if (req.headers.kaleed)
								extra.payload.kaleed = req.headers.kaleed;
							if (req.headers.rafa3)
								extra.payload.rafa3 = req.headers.rafa3;
							if (req.headers.e$)
								extra.payload.e$ = req.headers.e$;
						}
						/*
						* if the client is running a different build than this
						* send an expiredbuild (e$) hint to force them out and onto
						* the current build
						* */
					} catch (e) {
						$.log( e, 'invalid json payload' );
					}
				}
				done(queue, extra);
			});
			try {
				loadedmodules.forEach(function (mod) {
					q.set(mod);
				});
			} catch (e) {
				$.log.s( 'q.set*', e );
			}
			q.run(function (queue, obj) {
				Web._out(req, res, extra.obj, extra.payload);
			});
		},
		init: function (mods, options) {
			options = options || {};
			var q = $.queue();
			if (mods instanceof Array)
				q.set(function (done, queue) {
					$.log.s( 'loading modules' );
					$.preload(mods, function () {
						mods.forEach(function (mod) {
							loadedmodules.push( $(mod) );
						});
						done(queue);
					});
				});
			if (0)
				q.set(function (done, queue) {
					$.log.s( 'connecting to database' );
					wuqu3aat.init({
						host: 'localhost',
						multiple: true,
						u: "",
						p: "",
						charset: 'utf8mb4',
						errcb: function (e) {
							if (e && e.code === 'ER_NOT_SUPPORTED_AUTH_MODE') {
								$.log.s( 'mysql server connection not supported' );
								$.log.s( 'maybe you forgot to add your user:pass to mysql?' );
								process.exit();
							}
							else if (e && e.code === 'ER_ACCESS_DENIED_ERROR') {
								$.log.s( 'mysql server username password incorrect' );
								$.log.s( e.sqlMessage );
								process.exit();
							}
							else if (e && e.code === 'ECONNREFUSED') {
								$.log.s( 'mysql server is down' );
								process.exit();
							}
							else if (e && e.fatal) {
								$.log.s( 'mysql server unknown error dying' );
								process.exit();
							}
							else {
								$.log.s( 'mysql connected' );
							}
							done(queue);
						}
					});
				});
			q.set(function (done, queue) {
				var intercept = function (req, res) {
					var path = public_path,
						file = path+'index.html';
					if (req.url.startsWith('/m3') || req.url.startsWith('/qss')) {
						var file = process.cwd()+req.url;
						/*
						* make uploads get cached
						* for an avg of 30 days or something
						*
						* chrome doesn't cache content from bad certs
						* */
						res.setHeader('Cache-Control', 'private, max-age=2592000, must-revalidate');
						var ifmodsince = req.headers['if-modified-since'];
						if (ifmodsince) {
							Files.stats(file, function (err, stats) {
								if (err)
									res.sendStatus(404);
								else if (stats.mtime) {
									res.setHeader('Last-Modified', stats.mtime.toUTCString() );
									if (stats.mtime.toUTCString() === new Date(ifmodsince).toUTCString()) {
										res.sendStatus(304);
									} else {
										res.sendFile(file);
									}
								}
							});
							return;
						} // otherwise check the very last else clause
					} else {
						if ( ['/qr.js'].includes( req.url ) ) {
							req.next();
							return;
						} else {
							file = false;
						}
					}
					if (/*isallowed && */file === false) {
						file = path+'index.html';
					}
					if (typeof file === 'number') {
						res.sendStatus(file);
					} else {
						if ( [ 'robots.txt', '/_.js', '/20.js', '/a.js', '/e.png',
								'/mb.css', '/mb.js', '/mbdr.css', '/mbdr.js',
								'/manifest.webapp', '/insaan.shakl', '/pallete.js',
								'/kmr.otf', '/kmb.otf', '/kml.otf'].includes( req.url ) ) {
							req.next();
						}
						else if ( '/favicon.ico' === req.url) {
							res.sendStatus(404);
						}
						else if ( '/manifest.json' === req.url) {
							Files.get.file(path+'manifest.json', function (data, err) {
								if (err) {
									res.sendStatus(404);
								} else if (data) {
									data = data.toString();
									res.setHeader('Last-Modified', new Date().toUTCString() );
									try {
										data = JSON.parse(data);
										data.name = "server";
										data.short_name = "server";
										res.json(data);
									} catch (ignore) {
										$.log.e( ignore );
										res.sendStatus(500);
									}
								}
							});
						}
						else {
							res.sendFile(file, null, function (err) {
								if (err) {
									if (!res.headersSent)
										res.sendStatus(404);
								}
							});
						}
					}
				};
				Server.get('*', intercept);
				done(queue);
			});
			q.set(function (done, queue) {
				Server.post('*', Web.api);
				done(queue);
			});
			q.run(function () {
				Server.init({
					port: XAADIMPORT,
					name: "server"
				});
				print_prop( 'public path', public_path );
				print_prop( 'build', 127 );
				print_prop( 'server port', XAADIMPORT );
			});
		}
	};
	Web.add = Web.adaaf;
	module.exports = Web;
})();
/*
* polling.worker is queued at the very end
* if no module returns (extra.munfaq = true) (handled)
* only then the worker should index this request
*
* modules know if this is a live request, so when they actually
* have stuff to return they can mark the request as handled
* and that'll tell the polling.worker to not get queued
* */
var Polling;
;(function(){
	'use strict';
	var connections = {};
	/* theory
	* these connections are not to be used for syncing
	* syncing is done using regular requests that clients can trigger regularly
	* like when getting online, once a client is fully synced, only then it
	* should start polling
	*
	* connections is account uids as index
	* and objects of requests indexed using waqtstamps
	* whenever the server wants to send an 'obj' to an account
	* it will call .intahaa(accountuid, obj)
	* this will send that obj to all pending requests under that account
	* and then that account will get popped from connections
	* */
	Polling = {
		worker: function (done, queue, extra) {
			var payload = extra.payload,
				obj = extra.obj,
				queue2 = $.queue();
			queue2.set(function (done2, queue2) { // listen
				if ( extra.munfaq ) { // handled consumed
					/*
					* this means there already was new data that some module
					* has included in the extra.obj
					*
					* EXPERIMENTAL override
					* since this is the waqt the request is being sent out
					* this waqt should be added to extra.obj
					* -50ms compensates for any lag caused by the chained
					* module queue
					*
					* THIS is now being handled in shabakah using diff logic
					* */
					done2(queue2, extra);
				} else
				if ( extra.hisaab && payload.nashar && extra.hisaab.sid ) {
					connections[ extra.hisaab.sid ] = {
						uid: extra.hisaab.uid,
						sid: extra.hisaab.sid,
						res: extra.res,
						waqt: new Date().getTime(),
					};
				} else done2(queue2, extra);
			});
			queue2.run( function () {
				done(queue, extra);
			} );
		},
		/*
		* use this function somwhere
		* and the next step is to make this pass through all the Main mods
		* each main mod should have a poll or recap like function that takes
		* from and to waqtstamps
		* when this function is called
		* it goes through all the mods' poll or recap function
		* piles up an object, and then sends it out
		* and do pragmatically think big, this in the near future should be
		* used for collab in the pages+articles editor so build it solid
		* */
		intahaa: function (obj) {
			for (var i in connections) {
				try {
					connections[i].res.json(obj || 1);
					delete connections[i];
				} catch (e) {
					$.log.s('Polling.intahaa err', e);
				}
			}
		},
		/*
		* accounts is an array, only requests for these account uids should end
		* if accounts is undefined, then just end all
		* */
		intahaakul: function (accounts) {
			for (var i in connections) {
				var yes;
				if (accounts && accounts.includes(connections[i].uid)) yes = 1;
				if (!accounts) yes = 1;
				if (yes) {
					try {
						connections[i].res.end('1');
						delete connections[i];
					} catch (e) {
						$.log('Polling.intahaakul err', e);
					}
				}
			}
		},
	};
	var poptimer = setInterval(function () {
		var currentwaqt = new Date().getTime();
		for (var i in connections) {
			if ( currentwaqt - connections[i].waqt >= 30 * 1000 ) {
				delete connections[i];
			}
		}
	}, 10 * 60 * 1000);
	module.exports = Polling;
	Web.adaaf(Polling.worker);
})();
/*
* Web.adaaf
* network.get( name, need, cb )
* network.sync( ... )
*
* json.get.name.need = value
* json.sync.name.need = value
*
* broadcast is very lightweight
*
* mirror this on client side
* you are able to listen for specific responses for your own juzw
* you can add batch commands to be executed every 24h
* */
var network_favors = {}, PRIMARY = 100, SECONDARY = 500, TERTIARY = 1000,
	network_batches = {};
[PRIMARY, SECONDARY, TERTIARY].forEach(function (favor) {
	network_favors[favor] = {
		intercession: {},
		get: {},
		sync: {},
		upload: {},
	};
});
var Network = network = {
	intercept: function (name, need, cb) {
		if (typeof need == 'function') cb = need, need = 0;
		need = need || 'default';
		var favor = network_favors[this._favor || SECONDARY];
		favor.intercession[ name ] = favor.intercession[ name ] || {};
		favor.intercession[ name ][ need ] = cb;
	},
	get: function (name, need, cb) {
		if (typeof need == 'function') cb = need, need = 0;
		need = need || 'default';
		var favor = network_favors[this._favor || SECONDARY];
		favor.get[ name ] = favor.get[ name ] || {};
		favor.get[ name ][ need ] = cb;
	},
	sync: function (name, need, cb) {
		if (typeof need == 'function') cb = need, need = 0;
		need = need || 'default';
		var favor = network_favors[this._favor || SECONDARY];
		favor.sync[ name ] = favor.sync[ name ] || {};
		favor.sync[ name ][ need ] = cb;
	},
	upload: function (name, need, cb) {
		if (typeof need == 'function') cb = need, need = 0;
		need = need || 'default';
		var favor = network_favors[this._favor || SECONDARY];
		favor.upload[ name ] = favor.upload[ name ] || {};
		favor.upload[ name ][ need ] = cb;
	},
	favor: function (favor) {
		var s = Object.assign({}, network);
		s._favor = favor;
		return s;
	},
	batch: function (name, need, cb) {
		if (typeof need == 'function') cb = need, need = 0;
		need = need || 'default';
		network_batches[ name ] = network_batches[ name ] || {};
		network_batches[ name ][ need ] = cb;
	},
	batch_process: function () {
		setTimeout(function () {
			var d = network_batches;
			for (var i in d) {
				if (d[i]) for (var h in d[i]) {
					isfun(d[i][h]) && d[i][h]();
				}
			}
			network.batch_process();
		}, 1 * 15 * 60 * 1000); // 15m for now, 24h later
	},
};
network.favor(PRIMARY).intercept('network', 'time', function (respond) {
	/*
	* time is set only for perm and broadcast channels
	* on-demand doesn't send time at all
	*
	* setting time here helps because while the response for this request
	* is being processed, if new items are added by someone else, this
	* time will be before the creation dates of those new items and
	* they'll get synced on the next request
	* */
	if (respond.value) respond.extra.time = respond.value || 0;
	else respond.extra.time = 0;
	/*
	* only return time if client says that it doesn't have time
	* so that only broadcast qanaat can send out time in all other cases
	* */
	if (!respond.value || respond.broadcast)
		respond.intercept( new Date().getTime() );
	respond.finish();
});
Web.adaaf(function (done, queue, extra) {
	var payload = extra.payload ;
	var obj = extra.obj ;
	var queuesub = $.queue() ;
	var respond = function (donesub, name, need, value_from_client) {
		var rsp = {
			finish: function () {
				donesub(queuesub, extra);
			},
			consumed: function () {
				extra.consumed = 1; // handled consumed
				donesub(queuesub, extra);
			},
			get: function (valuex, value2, need2) {
				var h = need2 || need || 'default';
				obj.get = obj.get || {};
				obj.get[ name ] = obj.get[ name ] || {};
				if (value2 !== undefined) {
					obj.get[ name ][ h ] = obj.get[ name ][ h ] || {};
					obj.get[ name ][ h ][ valuex ] = obj.get[ name ][ h ][ valuex ] || {};
					obj.get[ name ][ h ][ valuex ] = value2;
				} else {
					obj.get[ name ][ h ] = valuex;
				}
				return rsp;
			},
			sync: function (valuex, value2, need2) {
				var h = need2 || need || 'default';
				obj.sync = obj.sync || {};
				obj.sync[ name ] = obj.sync[ name ] || {};
				if (value2 !== undefined) {
					obj.sync[ name ][ h ] = obj.sync[ name ][ h ] || {};
					obj.sync[ name ][ h ][ valuex ] = obj.sync[ name ][ h ][ valuex ] || {};
					obj.sync[ name ][ h ][ valuex ] = value2;
				} else {
					obj.sync[ name ][ h ] = valuex;
				}
				return rsp;
			},
			intercept: function (valuex, value2, need2) {
				var h = need2 || need || 'default';
				obj.intercession = obj.intercession || {};
				obj.intercession[ name ] = obj.intercession[ name ] || {};
				if (value2 !== undefined) {
					obj.intercession[ name ][ h ] = obj.intercession[ name ][ h ] || {};
					obj.intercession[ name ][ h ][ valuex ] = obj.intercession[ name ][ h ][ valuex ] || {};
					obj.intercession[ name ][ h ][ valuex ] = value2;
				} else {
					obj.intercession[ name ][ h ] = valuex;
				}
				return rsp;
			},
			upload: function (valuex, value2, need2) {
				var h = need2 || need || 'default';
				obj.upload = obj.upload || {};
				obj.upload[ name ] = obj.upload[ name ] || {};
				if (value2 !== undefined) {
					obj.upload[ name ][ h ] = obj.upload[ name ][ h ] || {};
					obj.upload[ name ][ h ][ valuex ] = obj.upload[ name ][ h ][ valuex ] || {};
					obj.upload[ name ][ h ][ valuex ] = value2;
				} else {
					obj.upload[ name ][ h ] = valuex;
				}
				return rsp;
			},
			need: function (name) {
				var rsp2 = Object.assign({}, rsp);
				rsp2.get = function (valuex, value2) {
					rsp.get(valuex, value2, name);
					return rsp2;
				};
				rsp2.sync = function (valuex, value2) {
					rsp.sync(valuex, value2, name);
					return rsp2;
				};
				rsp2.intercept = function (valuex, value2) {
					rsp.intercept(valuex, value2, name);
					return rsp2;
				};
				rsp2.upload = function (valuex, value2) {
					rsp.upload(valuex, value2, name);
					return rsp2;
				};
				return rsp2;
			},
			account: extra.account,
			time: extra.time,
			value: value_from_client,
			extra: extra,
			broadcast: !!payload.broadcast,
		};
		if (extra.files && extra.files.upload) {
			rsp.payload = extra.files.upload;
		}
		return rsp;
	};
	var arr = [], count = 0;
	var schedule = function (item, favor) { // priority
		for (var name in payload[item]) {
			if (favor[item][name]) {
				var needs = payload[item][name];
				for (var need in needs) {
					arr.push({
						name: name,
						need: need,
						value: needs[need],
					});
					queuesub.set(function (donesub) {
						var o = arr[count];
						count++;
						if (typeof favor[item][o.name][o.need] == 'function') {
							favor[item][o.name][o.need](
								respond(donesub, o.name, o.need, o.value)
							);
						} else donesub(queuesub);
					});
				}
			}
		}
	};
	['intercession', 'get', 'sync', 'upload'].forEach(function (item) {
		if (payload[item]) {
			[PRIMARY, SECONDARY, TERTIARY].forEach(function (favor) {
				schedule( item, network_favors[favor] );
			});
		}
	});
	queuesub.run(function () {
		done(queue, extra);
	});
});
network.batch_process();
;(function(){
	'use strict';
	var main = {
	};
	Web.init();
})();

