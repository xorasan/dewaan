
function updatetheme(o) {
return '';
};

 
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
			if (typeof fn === 'function') { 
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
		w: function () {
			var a = '', str = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
				str += ' '+ arguments[b];
			}
			eval('console.warn('+a+');');
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
$.re = function (string, automaton, flags) { 
	var object = (new RegExp(automaton||'', flags||'')).exec(string||'') || {};
	object.re = function (automaton, flags) {
		return $.re(object[0]||'', automaton, flags);
	};
	return object;
};
$.regex = $.re;
 
$._r = function () {
	module.exports = glatteis;
};
 
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
$.cache = function (name, path) { 
	$._paths[name] = path;
};
$.unload = function (mods, fn) {
	 
};
;(function (){
	var _arrayPrototype = {
		set: function (id, object) {
			if (this._keys[id] !== undefined) { 
				if (typeof object === 'function') {
					this._array[this._keys[id]] = object(this._array[this._keys[id]]);
				} else {
					this._array[this._keys[id]] = object;
				}
				typeof this.onset === 'function' && this.onset(object, id);
			} else { 
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
		eawwad: function (uid, uid2) { 
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
						(request.upload ? request.upload : request).onprogress = function (event) {
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
			$.fetchchannels[channel] =   $.queuerequest();
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
;(function (){
	var DEG2RAD = Math.PI/180,
		RAD2DEG = 180/Math.PI;
	$.convert = {
		toRad: function (v) {
			return v*DEG2RAD;
		},
		toDeg: function (v) {
			return v*RAD2DEG;
		}
	};
	$.random = function (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
})();
$._r();
$.b = 2;
'use strict';
$.path = __dirname;
var
get_global_object = function () { 
	return window || {}; 
},
generate_alias = function (o, l) { 
	o = o || '';
	if (o.length === 0) return '';
	l = l || 255;
	o = o.substr(0, l)
		.replace(/\%/g, ' pct' )
		.replace(/\@/g, ' at ' )
		.replace(/\&/g, ' and ' )
		.replace(/[$-\-/:-?\{\}-~!"^_`\[\]@#]/g, '-' ) 
		.replace(/[^.\d\wa-zA-Z0-9ا-ےÄäÜüÖößЀ-ҁҊ-ӿÇçĞğŞşIıÜüﻙ]+/g, '-' ) 
		.replace(/\s[\s]+/g, '-' )
		.replace(/[\s]+/g, '-' )
		.replace(/^[\-]+/g, '' )
		.replace(/[\-]+$/g, '' )
		.replace(/\-\-/g, '-' )
		.replace(/\.\-/g, '.' )
		.replace(/\-\./g, '.' )
		.replace(/^\./g, '' )
		.replace(/\.$/g, '' )
		.trim()
		.toLowerCase();
	return o;
},
stringify = function (o) {
	return JSON.stringify(o);
},
parsejson = function (o) {
	return JSON.parse(o);
},
mubaaraat = function (str, re) {
	return (str.match(re)||[])[0];
},
tabdeel = function (str, arr) {
	if (isstr(str) && isarr(arr)) {
		for (var i = 0; i < arr.length; i += 2) {
			str = str.replace(arr[i], arr[i+1]);
		}
	}
	return str;
},
deepcopy = function (v) {
},
isundef = function (v) {
	return v === undefined;
},
isstr = function (v) {
	return typeof v == 'string';
},
isfinite = function (v) {
	return Number.isFinite(v);
},
isnan = function (v) {
	return Number.isNaN(v);
},
isnum = function (v) {
	return typeof v == 'number' && !isnan(v) && isfinite(v);
},
isfun = function (v) {
	return typeof v == 'function';
},
isarr = function (v) {
	return v instanceof Array;
},
areobjectsequal = function (a, b) { 
	var same = 1;
	if (a && b && Object.keys(a).length === Object.keys(b).length)
	for (var i in a) {
		if (a[i] !== b[i]) {
			same = 0;
			break;
		}
	}
	else same = 0;
	return same;
},
zero = function (num) {
	return num < 10 ? '0'+num : num;
},
collapsearray = function (arr) {
	var arr2 = [];
	arr.forEach(function (e) {
		if (!isundef(e)) arr2.push(e);
	});
	return arr2;
},
array2string = function (arr) { 
	return ' '+arr.join(' ');
},
intersect = function (arr, superset) { 
	var arr2 = [];
	arr.forEach(function (item) {
		if (!isundef(superset[ item ])) arr2.push(item);
	});
	return arr2;
},
shallowcopy = function (v) { 
	if (isnum(v) || isstr(v)) {
		return v;
	} else
	if (v instanceof Array) {
		var v2 = [];
		v.forEach(function (item) {
			v2.push( Object.assign({}, item) );
		});
		return v2;
	}
	else {
		return Object.assign({}, v);
	}
},
parseint = function (v, r) {
	return parseInt(v, r);
},
parsefloat = function (v, n) {
	if (n) v = parseFloat(v).toFixed(n);
	return parseFloat(v);
},
intify = function (arr) {
	for (var i = 0; i < arr.length; ++i) {
		arr[i] = parseint(arr[i]);
	}
	return arr;
},
tolower = function (s) {
	return (s||'').toLowerCase();
},
toupper = function (s) {
	return (s||'').toUpperCase();
};
var parsestring = function (v, m) { 
	if (typeof v == 'string') {}
	else if (typeof v == 'number') v = String(v);
	else v = '';
	if (isnum(m)) v = v.substr(0, m);
	return v;
},
get_time_now = function () {
	return new Date().getTime();
};
 
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
				if (typeof require === 'function') { 
					try { Files.fs = require('fs-extra'); }
					catch (e) { Files.fs = require('fs'); }
					Files.path = require('path');
					Files.s = Files.path.sep;
					var __dirname = '';
						if (typeof process === 'object') {
							__dirname = process.execPath.match(/(.*)\/.*$/)[1];
						}
					Files.basepath = __dirname;
				} else { 
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
		 
		get: {
			file: function (path, cb, options) {
				if (typeof cb === 'function') {
					var innercb = function (err, data) {
						cb(data, err); 
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
					Hooks.run('cli-resize', {
						rows: _.height,
						cols: _.width
					});
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
						_.echo('^C'); 
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
 
var Weld;
;(function(){
function parse_weld( text ) {
	if (typeof text !== 'string') $.log('text needs to be string');
	text = (text || '') ;
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
	 
	childrentoarray: function (children) {
		var array = [];
		for (var i in children) {
			array.push(children[i].line);
		}
		if (array.length === 0) return '';
		return array;
	},
	 
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
	 
	encode_config: function (obj, tabs) {
		var weld = '',
			tabs = tabs || 0,
			filler = Cli.getfiller(obj);
		for (var i in obj) {
			var sub = obj[i];
			if (typeof sub === 'object') {
				if (!(isarr(sub) && sub.length === 0)) { 
					weld += '\t'.repeat(tabs) + i + '\n';
					weld += ( Weld.encode_config( sub, tabs+1 ) );
				}
			} else {
				if (isarr(obj)) {
					weld += '\t'.repeat(tabs) + sub + '\n';
				} else if (obj instanceof Object) {
					weld += '\t'.repeat(tabs) + filler(i) + ' ' + sub + '\n';
				} else {
					weld += '\t'.repeat(tabs) + filler(i) + ' ' + sub + '\n';
				}
			}
		}
		return weld;
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
 
var Captcha, captcha;
;(function () {
	'use strict';
	Captcha = captcha = {
		svgc: false,
		btoa: false,
		atob: false,
		get: function (boxdatabase, cb) {
			if (typeof cb !== 'function') return;
			var c = captcha.svgc.createMathExpr({
				color: 1,
				noise: 5,
				width: 220,
				height: 120,
				fontSize: 128,
			});
			MongoDB.set(boxdatabase, 'temporary', [{
				hash: Sessions.weakhash(),
				value: c.text,
				updated: new Date().getTime(),
			}], function (result) {
				if (result.rows.length) {
					cb({
						raw: c.data,
						data: captcha.btoa(c.data),
						text: c.text,
						hash: result.rows[0].hash
					});
				}
				else cb(false);
			});
		}
	};
	var base64 = require('./deps/Base64');
	captcha.atob = base64.atob;
	captcha.btoa = base64.btoa;
	captcha.svgc = require('./deps/svg-captcha');
	module.exports = captcha;
})();
 
var Server, SocketIO;
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
			var express = require('./deps/express'); 
			var fileupload = require('./deps/express-fileupload');
			var socketIo = require('./deps/socket.io'); 
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
			var http = require('http');
			var server = http.createServer(app);
			SocketIO = new socketIo.Server(server);
			SocketIO.on('connection', function (socket) {
				Hooks.run('socket', socket);
			});
			server.listen(options.port);
		}
	};
	module.exports = Server;
})();
 
var Web;
;(function(){
	'use strict';
	var loadedmodules = [], init_modules = [], Cache = {};
	var node_path = require('path');
	var public_path = node_path.resolve( Config.public || $.path )+'/';
	var echo = Cli.echo;
	function print_prop(a, b) {
		echo( ' ^bright^'+a+'~~ '+b+' ' )
	}
	Web = {
		get_public_path: function () {
			return public_path;
		},
		_out: function (req, res, obj, extra) {
			obj = obj || {};
			 
			try {
				res.json(obj);
			} catch (e) {
				$.log.s(e);
			}
		},
		add: function (callback) { 
			loadedmodules.push(callback);
		},
		during_init: function (callback) {
			init_modules.push(callback);
		},
		api: function (req, res) {
			res.setHeader('Access-Control-Allow-Origin', '*');
			var host = req.headers.host.split(':'),
				extra = {
					payload: {} ,
					obj: {} ,
					boxdatabase: Config.database.name,
					database: Config.database.name,
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
							if (req.headers.upload)
								extra.payload.upload = req.headers.upload;
							if (req.headers.e$)
								extra.payload.e$ = req.headers.e$;
						}
						 
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
		init: function (callback) {
			var q = $.queue();
			if (isarr(callback)) {
				$.log.e( ' Web.init( mods.. ) is deprecated ' );
				$.log.s( ' Use Web.add( fn ) instead ' );
			}
			try {
				init_modules.forEach(function (mod) {
					q.set(mod);
				});
			} catch (e) {
				$.log.s( 'q.set*', e );
			}
			q.set(function (done, queue) {
				var intercept = function (req, res) {
					var path = public_path,
						file = path+'index.html';
					if (req.url.startsWith('/m3') || req.url.startsWith('/qss')) {
						var file = process.cwd()+req.url;
						 
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
						} 
					} else {
						if ( ['/qr.js'].includes( req.url ) ) {
							req.next();
							return;
						} else {
							file = false;
						}
					}
					if ( file === false) {
						file = path+'index.html';
					}
					if (typeof file === 'number') {
						res.sendStatus(file);
					} else {
						if ( [ 'robots.txt', '/_.js', '/20.js', '/a.js', '/e.png', '/0.png', '/1.png',
								'/mb.css', '/mb.js', '/mbdr.css', '/mbdr.js',
								'/manifest.webapp', '/insaan.shakl', '/pallete.js',
								'/kmr.otf', '/kmb.otf', '/kml.otf'].includes( req.url ) ) {
							req.next();
						}
						else if ( '/favicon.ico' === req.url) {
							res.sendStatus(404);
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
					port: Config.port,
					name: "Dewaan"
				});
				print_prop( 'Public Path', public_path );
				print_prop( 'Build', 1188 );
				print_prop( 'Server Port', Config.port );
				if (isfun(callback)) callback();
			});
		}
	};
	module.exports = Web;
})();
 
var network_favors = {}, PRIMARY = 100, SECONDARY = 500, TERTIARY = 1000,
	network_batches = {};
[PRIMARY, SECONDARY, TERTIARY].forEach(function (favor) {
	network_favors[favor] = {
		intercession : {},
		get : {},
		sync : {},
		upload : {},
	};
});
var debug_network = 0;
var Network = network = {
	intercept: function (name, need, cb) {
		if (typeof need == 'function') cb = need, need = 0;
		need = need || 'default';
		if (debug_network) Cli.echo(' ^bright^Network~~ '+name+' intercept ^dim^'+need+'~~ ');
		var favor = network_favors[this._favor || SECONDARY];
		favor.intercession[ name ] = favor.intercession[ name ] || {};
		favor.intercession[ name ][ need ] = cb;
	},
	get: function (name, need, cb) {
		if (typeof need == 'function') cb = need, need = 0;
		need = need || 'default';
		if (debug_network) Cli.echo(' ^bright^Network~~ '+name+' get ^dim^'+need+'~~ ');
		var favor = network_favors[this._favor || SECONDARY];
		favor.get[ name ] = favor.get[ name ] || {};
		favor.get[ name ][ need ] = cb;
	},
	sync: function (name, need, cb) {
		if (typeof need == 'function') cb = need, need = 0;
		need = need || 'default';
		if (debug_network) Cli.echo(' ^bright^Network~~ '+name+' sync ^dim^'+need+'~~ ');
		var favor = network_favors[this._favor || SECONDARY];
		favor.sync[ name ] = favor.sync[ name ] || {};
		favor.sync[ name ][ need ] = cb;
	},
	upload: function (name, need, cb) {
		if (typeof need == 'function') cb = need, need = 0;
		need = need || 'default';
		if (debug_network) Cli.echo(' ^bright^Network~~ '+name+' upload ^dim^'+need+'~~ ');
		var favor = network_favors[this._favor || SECONDARY];
		favor.upload[ name ] = favor.upload[ name ] || {};
		favor.upload[ name ][ need ] = cb;
	},
	favor: function (favor) {
		var s = Object.assign({}, Network);
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
		}, 1 * 15 * 60 * 1000); 
	},
};
Network.favor(PRIMARY).intercept('network', 'time', function (response) {
	 
	if (response.value) response.extra.time = response.value || 0;
	else response.extra.time = 0;
	 
	if (!response.value || response.broadcast)
		response.intercept( new Date().getTime() );
	response.finish();
});
Web.add(function (done, queue, extra) {
	var payload = extra.payload ;
	var obj = extra.obj ;
	var queuesub = $.queue() ;
	var response = function (donesub, name, need, value_from_client) {
		var rsp = {
			finish: function () {
				donesub(queuesub, extra);
			},
			consumed: function () {
				extra.consumed = 1; 
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
	var schedule = function (item, favor) { 
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
								response(donesub, o.name, o.need, o.value)
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
Network.batch_process();
 
var Sessions, sessions,
	tbl_adwr = 'sessions'
	tbl_hsbt = 'accounts',
	tbl_wqti = 'temporary',
	hashalgo = new require('./deps/easy-pbkdf2').EasyPbkdf2();
Sessions = sessions = {
	usernameisvalid: function (username) {
		var result = {
			code: false
		};
		result.username = username = generate_alias(username);
		if (result.username.length >= 3) {
			if (result.username.length <= 24) {
				result.code = false;
			} else {
				result.code = 'usernameover';
			}
		} else {
			result.code = 'usernameunder';
		}
		return result;
	},
	usernameexists: function (username, cb) {
		if (!isstr(username)) { $.log.e(' usernameexists expects username as string '); return; }
		if (!isfun(cb)) { $.log.e(' usernameexists needs a callback '); return; }
		MongoDB.query(response.extra.database, tbl_hsbt, { name: username }, function (rows) {
			cb((rows && rows.length === 1));
		});
	},
	passwordisvalid: function (password) {
		var result = {
			code: false
		};
		if (password.length >= 8) {
			if (password.length <= 2048) {
				result.code = false;
			} else {
				result.code = 'passwordover';
			}
		} else {
			result.code = 'passwordunder';
		}
		return result;
	},
	hashpassword: function (password, callback) {
		if (typeof callback === 'function') {
			hashalgo.hash(password, function (err, hash, salt) {
				if (err) throw err;
				callback({
					err: err,
					salt: salt,
					hash: hash
				});
			});
		}
	},
	verifypassword: function (salt, hash, password, cb) {
		if (typeof cb !== 'function') return;
		hashalgo.verify(salt, hash, password, function (err, matched) {
			if (err) throw err;
			cb(matched);
		});
	},
	weakhash: function (value) {
		return hashalgo.weakHash(
			value
			||
			(
				$.random(0, 99999) +""+ get_time_now()
			)
		);
	},
	get_session_account: function (key, callback) {
		if (!isfun(callback)) {
			$.log.e(' get_session_account needs a callback ');
			return false;
		}
		if (!isstr(key)) {
			callback(false);
			return false;
		}
		MongoDB.get(Config.database.name, tbl_adwr, {
			hash: parsestring(key),
		}, function (sessionrow) {
			if (sessionrow) {
				MongoDB.set(Config.database.name, tbl_adwr, [{
					uid: sessionrow.uid,
					updated: get_time_now(),
				}], function () {
					MongoDB.get(Config.database.name, tbl_hsbt, {
						uid: sessionrow.account,
					}, function (accountrow) {
						if (accountrow) {
							var out_result = {
								session: sessionrow,
								account: accountrow
							};
							callback(out_result);
							return out_result;
						} else {
							callback(false);
							return false;
						}
					});
				});
			} else {
				callback(false);
				return false;
			}
		});
	},
	sendcaptcha: function (response) {
		captcha.get(response.extra.boxdatabase, function (svg) {
			response.need('captcha')
				.get('captcha', svg.raw)
				.get('hash', svg.hash)
				.finish();
		});
	},
	format: function (sessionrow, accountrow, response) {
		response.get({
			key : sessionrow.hash ,
			uid: accountrow.uid ,
			name : accountrow.name ,
			displayname : accountrow.displayname,
			latitude : accountrow.latitude ,
			longitude : accountrow.longitude ,
			kind : accountrow.kind ,
		});
		sessions.account2extra(sessionrow, accountrow, response);
	},
	account2extra: function (sessionrow, accountrow, response) {
		response.extra.account = {
			sid : sessionrow.uid , 
			key : sessionrow.hash , 
			uid: accountrow.uid , 
			name : accountrow.name , 
			displayname : accountrow.displayname , 
			shape : accountrow.shape , 
			shape_m : accountrow.shape_m , 
			features : accountrow.features , 
			features_m : accountrow.features_m , 
			radius : accountrow.radius , 
			lifestory : accountrow.lifestory , 
			kind : accountrow.kind , 
			possessions : accountrow.possessions , 
			possessions_m: accountrow.possessions_m , 
			birthday : accountrow.birthday , 
			gender : accountrow.gender , 
			family : accountrow.family , 
			relatives : accountrow.relatives , 
			blocks : accountrow.blocks , 
			friends : accountrow.friends , 
			jobs : accountrow.jobs , 
			jobs_m : accountrow.jobs_m , 
			money : accountrow.money , 
			nafaqah : accountrow.nafaqah , 
			talab : accountrow.talab , 
			phone : accountrow.phone , 
			status : accountrow.status , 
			connected : accountrow.connected , 
			joined : accountrow.joined , 
			latitude : accountrow.latitude , 
			longitude : accountrow.longitude , 
			created : accountrow.created , 
			updated : accountrow.updated , 
		};
	},
	set: function (database, accountrow, response, callback) {
		var key = Sessions.weakhash()+Sessions.weakhash();
		MongoDB.set(database, tbl_adwr, [{
			hash: key,
			account: accountrow.uid,
			updated: get_time_now(),
		}], function (outcome) {
			sessions.format(outcome.rows[0], accountrow, response);
			typeof callback === 'function' && callback(response);
		}, {
			checkname: false
		});
	},
	getall: function (options, cb) {
		if (typeof cb !== 'function') return;
		var sql = 'SELECT * FROM '+tbl_adwr+' ORDER BY `updated` DESC;';
		data.query(sql, function (rows) {
			cb(rows);
		});
	},
	pop: function (options, cb) {
		if (typeof cb !== 'function') return;
		if (options.uid < 1) return;
		var sql = [
			'DELETE FROM '+tbl_adwr+' WHERE `uid` = ?',
			[options.uid]
		];
		data.query(sql, function (result) {
			cb(result);
		});
	},
	popbytime: function (options, cb) {
		if (typeof cb !== 'function') return;
		if (options.updated < 1) return;
		var comparisonstring = '<=';
		if (options.after === true || options.before === false) comparisonstring = '>=';
		var sql = [
			'DELETE FROM '+tbl_adwr+' WHERE `updated` '+comparisonstring+' ?',
			[options.updated]
		];
		data.query(sql, function (result) {
			cb(result);
		});
	},
	 
	schedpop: function (time, every) {
		var ftime = time || (60 * 60 * 24 * 30);
		ftime = ftime * 1000;
		var fevery = every || 360;
		fevery = fevery * 1000;
		clearTimeout(sessions._schedpopto);
		sessions._schedpopto = setTimeout(function () {
			var fromtime = (get_time_now()) - ftime;
			$.log('popping session entries');
			sessions.popbytime({updated: fromtime}, function () {
			});
			sessions.schedpop(time, every);
		}, fevery);
	},
	stopschedpop: function () {
		clearTimeout(sessions._schedpopto);
	}
};
Network.favor(PRIMARY).intercept('sessions', 'key', function (response) {
	Sessions.get_session_account(response.value, function (result) {
		if (result) {
			response.intercept(result.session.uid);
			Sessions.account2extra(result.session, result.account, response);
			response.finish();
		} else {
			response.intercept(false).finish();
		}
	});
});
Network.get('sessions', 'captcha', function (response) {
	$.log( 'sessions', 'captcha' );
	sessions.sendcaptcha(response);
});
Network.get('sessions', 'sign_in', function (response) {
	var creds = response.value;
	var boxdatabase = response.extra.boxdatabase;
	var database = response.extra.database;
	if (typeof creds.answer === 'string') {
		MongoDB.get(boxdatabase, tbl_wqti, {
			hash: parsestring(creds.hash),
			value: creds.answer.trim(),
		}, function (result) {
			if (result) {
				MongoDB.pop(boxdatabase, tbl_wqti, result.uid);
				var username = Sessions.usernameisvalid( creds.username );
				var password = Sessions.passwordisvalid( creds.password );
				if (username.code && password.code) {
					response.get('username', username.code)
						.get('password', password.code)
						.finish();
				} else {
					MongoDB.get(database, tbl_hsbt, {
						name: username.username,
					}, function (accountrow) {
						if ( creds.join ) {
							if (accountrow) {
								response.get('username', 'usernametaken');
								sessions.sendcaptcha(response);
							} else {
								Sessions.hashpassword( creds.password, function (cryptpassword) {
									MongoDB.set(database, tbl_hsbt, [{
										name: username.username,
										hash: cryptpassword.hash,
										salt: cryptpassword.salt, 
										updated: get_time_now(),
										status: 0,
									}], function (outcome) {
										accountrow = outcome.rows[0];
										sessions.set(database, accountrow, response, function () {
											response.finish();
										});
									});
								});
							}
						}
						else { 
							if (accountrow && creds.password ) {
								if (accountrow.salt === '' && accountrow.hash === '' && accountrow.uid) {
									Sessions.hashpassword( creds.password, function (cryptpassword) {
										MongoDB.set(database, tbl_hsbt, [{
											uid: accountrow.uid,
											hash: cryptpassword.hash,
											salt: cryptpassword.salt,
											updated: get_time_now(),
										}], function (outcome) {
											$.log( outcome );
											accountrow = outcome.rows[0];
											sessions.set(database, accountrow, response, function () {
												response.finish();
											});
										}, {
											checkname: false
										});
									});
								} else {
									Sessions.verifypassword(accountrow.salt,
														accountrow.hash,
														creds.password, function (matched) {
										if (matched) {
											sessions.set(database, accountrow, response, function () {
												response.finish();
											});
										} else {
											response.get('password', 'passwordwrong');
											sessions.sendcaptcha(response);
										}
									});
								}
							} else {
								response.get('password', 'passwordwrong');
								sessions.sendcaptcha(response);
							}
						}
					});
				}
			}
			else {
				response.get('answer', 'answerwrong');
				sessions.sendcaptcha(response);
			}
		});
	} else response.get(false).finish();
});
Network.get('sessions', 'sign_out', function (response) {
	response.get(true).finish();
});
Network.get('sessions', 'username_exists', function (response) {
	var creds = response.value,
		database = response.extra.database;
	if (creds.exists && creds.join) {
		var username = Sessions.usernameisvalid( creds.username );
		response.get('proceed', creds.proceed)
			.get('join', 1)
			.get('username', username.username);
		if (username.code) {
			response.get('exists', username.code)
				.finish();
		} else {
			MongoDB.get(database, tbl_hsbt, {
				name: username.username,
			}, function (accountrow) {
				response.get('exists', accountrow ? 'usernametaken' : 'usernameavailable')
					.finish();
			});
		}
	} else response.finish();
});
Network.get('sessions', 'active', function (response) {
	var database = response.extra.database;
	MongoDB.query(database, tbl_adwr, {}, function (result) {
		var names = [];
		result.rows.forEach(function (o) {
			names.push(o.uid+' '+o.account);
		});
		response.get('names', names)
				.finish();
	});
});
Web.add(function (done, queue, extra) {
	done(queue, extra);
	return;
	var payload = extra.payload,
		obj = extra.obj,
		boxdatabase = extra.boxdatabase,
		database = extra.database,
		account = {};
	if (payload.key) {
	}
	else if ( payload.get && payload.get.sessions ) {
		var creds = payload.get.sessions;
		obj.sessions = account;
	}
	else
		done(queue, extra);
});
var Accounts;
;(function(){
	'use strict';
	Accounts = {
	};
})();
Network.get('accounts', 'all', function (response) {
	MongoDB.query(Config.database.name, tbl_hsbt, {}, function (result) {
		var refined = [];
		result.rows.forEach(function (o, i) {
			refined.push({
				uid: o.uid,
				name: o.name,
				displayname: o.displayname,
				created: o.created,
				updated: o.updated,
				status: o.status,
			});
		});
		response.get(refined)
				.finish();
	});
});
Network.sync('accounts', 'nearby', function (response) {
	$.log( 'accounts', 'nearby', response.value );
	response.value[0].remove = 1;
	response.sync(response.value)
		.finish();
});
;(function(){
function get_manifest_as_json(cb) {
	var path = Web.get_public_path();
	Files.get.file(path+'manifest.w', function (data, err) {
		var manifest;
		if (err) {
			if (err.code == 'ENOENT') {
				Cli.echo(' creating manifest.w ');
				manifest = {
					name: "Dewaan",
				};
				Files.set.file(path+'manifest.w', Weld.encode_config(manifest) );
			} else {
				$.log.s( err );
			}
		} else if (data) {
			manifest = Weld.parse_config( data.toString() );
		}
		if (isfun(cb)) cb(manifest);
	});
}
Network.get('manifest', 'read', function (response) {
	get_manifest_as_json(function (manifest) {
		if (manifest) response.get(manifest);
		response.finish();
	});
});
Web.during_init(function (done, queue) {
	Server.get('/manifest.json', function (req, res) {
		var path = Web.get_public_path();
		get_manifest_as_json(function (manifest) {
			var name = "Dewaan";
			if (manifest && manifest.name) {
				name = manifest.name;
			}
			Files.get.file(path+'manifest.json', function (data, err) {
				if (err) {
					$.log.s( err );
					res.sendStatus(404);
				} else if (data) {
					data = data.toString();
					res.setHeader('Last-Modified', new Date().toUTCString() );
					try {
						data = JSON.parse(data);
						data.name = name;
						data.short_name = name;
						res.json(data);
					} catch (ignore) {
						$.log.e( ignore );
						res.sendStatus(500);
					}
				}
			});
		});
	});
	done(queue);
});
})();
var profile,
	TAGMAX = 15,
	ISMMUBEENMAX = 48,
	HIKAAYAHMAX = 480;
;(function(){
	profile = {
		value: function (u, v) {
			return { uid: u, value: v };
		},
		nazzaf: function (str, max) {
			if (!isstr(str)) str = parsestring(str);
			return str.trim().slice(0, max);
		},
	};
})();
Network.intercept('profile', function (response) {
	if (response.account) { 
		var arr = [];
		if (response.time < response.account.updated) {
			arr.push( profile.value('name', response.account.name ) );
			arr.push( profile.value('displayname', response.account.displayname ) );
			arr.push( profile.value('lifestory', response.account.lifestory ) );
		}
		if (arr.length) response.get(arr).consumed();
		else response.finish();
	} else response.finish();
});
Network.sync('profile', function (response) {
	var value = response.value;
	if (!response.account) { response.finish(); return; } 
	if (!value) { response.finish(); return; } 
	var tabdeel = 0, things = { uid: response.account.uid }, arr = [];
	 
	if (isstr(value.displayname)) {
		arr.push(
			profile.value('displayname',
				things.displayname = profile.nazzaf(value.displayname, ISMMUBEENMAX)
			)
		);
	}
	if (isstr(value.lifestory)) {
		arr.push(
			profile.value('lifestory',
				things.lifestory = profile.nazzaf(value.lifestory, HIKAAYAHMAX)
			)
		);
		tabdeel = 1;
	}
	if (isnum(value.birthday)) {
		response.sync('birthday', things.birthday = value.birthday );
		tabdeel = 1;
	}
	if (isnum(value.gender)) {
		if (value.gender < 0 || value.gender > 3) value.gender = 0;
		response.sync('gender', things.gender = value.gender);
		tabdeel = 1;
	}
	if (arr.length) {
		things.updated = get_time_now();
		MongoDB.set(Config.database.name, tbl_hsbt, [things], function (j) {
			Polling.finish_all([response.account.uid]);
			response.sync(arr).finish();
		});
	}
	else response.finish();
});
var Rooms, rooms,
	tbl_mklmt = 'rooms';
;(function(){
	'use strict';
	var maxba = {}; 
	Rooms = rooms = {
		raakib: function (members) { 
			if (isarr(members))
			for (var i = 0; i < members.length; ++i) {
				var v = members[i];
				if (v[1] !== 1) return v;
			}
		},
		is_other: function (members, suid) { 
			if (isarr(members))
			for (var i = 0; i < members.length; ++i) {
				var v = members[i];
				if (v[0] !== suid) return v;
			}
		},
		is_you: function (members, suid) { 
			if (isarr(members))
			for (var i = 0; i < members.length; ++i) {
				var v = members[i];
				if (v[0] === suid) return v;
			}
		},
		maxba: function (uid, k, v) {
			if (arguments.length === 0) return maxba;
			var m = maxba[uid];
			if (k && v && !m) m = maxba[uid] = {};
			if (m) {
				if (isundef(k)) { 
					delete maxba[uid];
				} else
				if (isundef(v)) {
					return m[k];
				} else {
					m[k] = v;
				}
			}
		},
		slow_mode: function (uid, caaniyaat) {
			var v = rooms.maxba(uid, 'slow_mode');
			var c = new Date().getTime();
			if (isundef(v) || v < c) v = c;
			v += caaniyaat*1000;
			rooms.maxba(uid, 'slow_mode', v);
			rooms.maxba(uid, 'updated', c);
			rooms.finish_all(uid);
			return v;
		},
		members: function (uid, members) {
			var v = rooms.maxba(uid, 'members');
			if (!areobjectsequal(v, members) && members) {
				rooms.maxba(uid, 'members', members);
				rooms.maxba(uid, 'updated', new Date().getTime());
				rooms.finish_all(uid);
			}
		},
		members_to_string: function (arr) {
			var str = '';
			arr.forEach(function (o) {
				str += ' '+o[0]+':'+o[1];
			});
			return str;
		},
		to_members: function (str) {
			var members = [];
			str.trim().split(' ').forEach(function (v) {
				v = intify(v.split(':'));
				members.push( [v[0], v[1]] );
			});
			return members;
		},
		is_member: function (room, uid, type) { 
			if (room) {
				if (isstr(room.members)) {
					if (room.members.match(' '+uid+':'+(type||'')))
						return 1;
				} else if (room.members) {
					if (room.members[uid]) {
						if (type) return room.members[uid] === type;
						else return 1;
					}
				}
			}
		},
		are_both_members: function (room, uid) { 
			if (room) {
				if (isstr(room.members)) {
					if (room.members.match(' '+uid+':1')
					&& room.members.match(/\:1/g).length >= 2)
						return 1;
				} else if (room.members) {
					var v = Object.values(room.members);
					if (room.members[uid] === 1 && v[0] === 1 && v[1] === 1) {
						return 1;
					}
				}
			}
		},
		finish_all: function (uid) {
			$.slow_mode('mlkmtinahaa'+uid, function () {
				var v = rooms.maxba(uid, 'members');
				if (v) {
					v = Object.keys(v);
					if (v.length) {
						v = intify( v ); 
						Polling.finish_all(v);
					}
				}
			}, 50);
		},
	};
})();
Network.intercept('rooms', function (response) {
	if (response.account) {
		var arr = [], objs = [], limit = 100, maxba = rooms.maxba(), yes;
		for (var i in maxba) {
			if (maxba[i].updated > response.time
			&& rooms.is_member(maxba[i], response.account.uid)) {
				objs[i] = {
					uid: parseint(i),
					slow_mode: maxba[i].slow_mode,
				};
				yes = 1;
			}
		}
		arr = Object.values(objs);
		MongoDB.query(Config.database.name, tbl_mklmt, {
			members: new RegExp(' '+response.account.uid+':'),
			updated: { $gt: response.time },
		}, function (outcome) {
			outcome.rows.forEach(function (o, i) {
				var x = objs[o.uid] || {}, members = [], membersobj = {};
				o.members.split(' ').forEach(function (v) {
					v = v.split(':');
					var a = parseint(v[0]),
						b = parseint(v[1]);
					if (isnum(a) && isnum(b)) {
						membersobj[ a ] = b;
						members.push([ a, b ]);
					}
				});
				rooms.members(o.uid, membersobj);
				x.uid = o.uid;
				x.members = members;
				x.created = o.created;
				x.updated = o.updated;
				objs[o.uid] = x;
			});
			arr = Object.values(objs);
			if (arr.length) response.sync(arr), yes = 1;
			if (yes) response.consumed(); else response.finish();
		});
	} else if (yes) response.consumed(); else response.finish();
});
Network.sync('rooms', function (response) {
	var value = response.value;
	if (!response.account) { response.finish(); return; } 
	if (!value) { response.finish(); return; } 
	if (isarr(value)) {
		var arr = [];
		value.forEach(function (item) {
			if (isnum(item.uid)) arr.push({ uid: item.uid });
		});
		MongoDB.query(Config.database.name, tbl_mklmt, {
			uid: { $in: arr }
		}, function (rows) {
			var suid = response.account.uid, ct = get_time_now(),
				riddah = [], mklmt = [], lihifz = [];
			value.forEach(function (item) {
				var m = parseint(item.uid), room = rows.get(m), members2 = item.members;
				if (isarr(members2) && room && rooms.is_member(room, suid)) {
					var members = rooms.to_members(room.members), yes = 1,
						is_other = rooms.is_other(members, suid),
						is_you = rooms.is_you(members, suid),
						is_other2 = rooms.is_other(members2, suid),
						is_you2 = rooms.is_you(members2, suid),
						o = {
							uid: m,
							created: room.created,
							updated: room.updated,
						},
						shayy = { uid: m, updated: ct };
					if (isarr(is_other) && isarr(is_you)) {
						if (is_other[1] === -3) {
							yes = 0;
						} else
						if (is_you[1] === -3) {
							if (is_you2[1] === 0) is_you[1] = 0;
							if (is_you2[1] === 1) {
								is_you[1] = 1;
								if (is_other[1] !== -2) {
									is_other[1] = -1;
									shayy.remove = ct;
								}
							}
						} else
						if ([-2, 0].includes(is_you[1])) {
							if (is_you2[1] === 1) {
								is_you[1] = 1;
								if (is_other[1] === 0) {
									is_other[1] = -1;
									shayy.remove = ct;
								}
							}
						} else
						if (is_you[1] === 0 && is_other[1] === 1) {
							if (is_you2[1] === 1) {
								is_you[1] = 1;
							}
						} else
						if (is_you[1] === -1 && is_other[1] === 1) {
							if (is_you2[1] === 1) {
								is_you[1] = 1;
							}
							if (is_you2[1] === -2) {
								is_you[1] = -2;
								shayy.remove = ct;
							}
							if (is_you2[1] === -3) {
								is_you[1] = -3;
							}
						}
						if (is_other[1] !== -3 && is_you2[1] === -3) {
							is_you[1] = -3;
							if (is_other[1] === -1) is_other[1] = 0;
						}
						if (yes) {
							var membersstr = rooms.members_to_string([is_you, is_other]);
							o.members = [is_you, is_other];
							shayy.members = membersstr;
							o.havaf = shayy.remove;
							mklmt.push(o);
							lihifz.push(shayy);
						}
					} else riddah.push(o);
				} else riddah.push({ uid: m, havaf: -1 });
			});
			MongoDB.set(Config.database.name, tbl_mklmt, lihifz, function (outcome) {
				response.sync(mklmt.concat(riddah)).finish();
			});
		});
	} else response.finish();
});
Network.get('rooms', 'invite', function (response) {
	var prof1 = response.value, prof0 = response.account.uid;
	if (!response.account) { response.finish(); return; } 
	if (!isnum(prof1) || prof1 <= 0 || prof1 === prof0) {
		response.finish(); return;
	} 
	helpers.get(Config.database.name, tbl_hsbt, { uid: prof1 }, function (hsb) {
	if (hsb)
	wuqu3aat.query('select * from `'+Config.database.name+'`.`'+tbl_mklmt+'` '+
				'where (members like ? or members like ?) '+
				'order by updated asc limit 0,'+1,
	[ '% '+prof1+':% '+prof0+':%', ' '+prof0+':% '+prof1+':%' ]).then(function (outcome) {
		var haalah = 0, uid, row = outcome.rows[0], out = {},
			members, membersobj = {}, membersstr = '';
		if (row) {
			uid = row.uid; members = row.members;
			out.uid = uid;
			out.created = row.created;
			out.updated = row.updated;
			out.members = [[prof0, 1], [prof1, -1]];
			members.split(' ').forEach(function (v) {
				v = v.split(':');
				var a = parseint(v[0]), b = parseint(v[1]);
				if (isnum(a) && isnum(b)) {
					membersobj[ a ] = b;
					membersstr += ' '+a+':';
					if (a === prof0) {
						membersstr += 1;
					} else {
						membersstr += -1;
					}
				}
			});
		} else {
			out.members = [[prof0, 1], [prof1, -1]];
			membersobj[ prof0 ] = 1;
			membersobj[ prof1 ] = -1;
			membersstr = ' '+prof0+':1 '+prof1+':-1';
		}
		if (haalah === 0) { 
			var created = new Date().getTime();
			helpers.set(Config.database.name, tbl_mklmt, [{
				uid: uid,
				members: membersstr,
				updated: created,
			}], function (outcome) {
				var row = outcome.rows[0];
				out.uid = row.uid;
				out.created = row.created;
				out.updated = row.updated;
				rooms.members(row.uid, membersobj);
				rooms.finish_all(row.uid); 
				response.get(out).finish();
			}, { checkism: false });
		}
		else response.get(out).finish();
	});
	else response.get().finish();
	});
});
Network.batch('rooms', function () {
	MongoDB.query(Config.database.name, tbl_mklmt, {
		members: new RegExp(':-2'),
	}, function (outcome) {
		var modify = [], ct = new Date().getTime();
		outcome.rows.forEach(function (o) {
			if (ct-o.remove < 5 * 60 * 1000) modify.push({
				uid: o.uid,
				members: o.members.replace(':-2', ':0'),
				remove: ct,
			});
			MongoDB.set(Config.database.name, tbl_mklmt, modify, function (outcome) {
			});
		});
	});
});
var Messages, messages,
	tbl_rsl = 'messages',
	musicmetadata = require('./deps/music-metadata');
;(function(){
	'use strict';
	Messages = messages = {
		text2seconds: function (text) { 
			var c = text.length;
			return Math.ceil( c / 6 ) || 1;
		},
	};
})();
Network.intercept('messages', function (response) {
	if (response.account && response.time > 0) {
		var arr = [], limit = 100;
		MongoDB.query(Config.database.name, tbl_mklmt, {
			members: new RegExp(' '+response.account.uid+':'),
		}, function (mklmt) {
			if (mklmt.rows.length) {
				var mstr = [];
				mklmt.rows.forEach(function (m) {
					mstr.push(m.uid);
				});
				MongoDB.query(Config.database.name, tbl_rsl, {
					room: { $in: mstr },
					updated: { $gt: response.time },
				}, function (outcome) {
					outcome.rows.forEach(function (o, i) {
						var x = {};
						x.uid = o.uid;
						x.room = o.room;
						x.owner = o.owner;
						x.kind = o.kind;
						if (x.kind === 0) x.text = o.text;
						if ([1, 2].includes(x.kind)) x.address = o.text;
						x.remove = o.remove;
						x.condition = o.condition;
						x.created = o.created;
						x.updated = o.updated;
						arr.push( x );
					});
					if (arr.length) response.get(arr).consumed();
					else response.finish();
				});
			} else response.finish();
		});
	} else response.finish();
});
Network.get('messages', function (response) {
	if (response.account) {
		var arr = [],
			limit = 100;
		MongoDB.query(Config.database.name, tbl_rsl, {
			room: response.value.filter.room,
		}, function (outcome) {
			outcome.rows.forEach(function (o, i) {
				var x = {};
				x.uid = o.uid;
				x.room = o.room;
				x.owner = o.owner;
				x.kind = o.kind;
				if (x.kind === 0) x.text = o.text;
				if ([1, 2].includes(x.kind)) x.address = o.text;
				x.remove = o.remove;
				x.condition = o.condition;
				x.created = o.created;
				x.updated = o.updated;
				arr.push( x );
			});
			response.get(arr).consumed();
		});
	} else response.finish();
});
Network.upload('messages', 'photo', function (response) {
	var value = response.value, marfoo3 = response.marfoo3, duration = 3;
	if (!response.account) { response.finish(); return; } 
	if (!isnum(value) || value < 1 || !marfoo3) { response.finish(); return; } 
	var filesize = Math.ceil(marfoo3.size/1024); 
	if (filesize > 150) { response.upload(0).finish(); return; } 
	duration = filesize;
	MongoDB.query(Config.database.name, tbl_mklmt, {
		uid: { $in: [value] }
	}, function (rows) {
		if (rows.length) {
			var mklmh = rows.get(value);
			var ct = get_time_now(), yr = new Date().getFullYear();
			var zaad = [], txrt = {};
			if (mklmh) {
				if (Rooms.are_both_members(mklmh, response.account.uid)) {
					var o = {
						room: value,
						kind: 2,
						owner: response.account.uid,
						updated: ct,
					};
					Files.set.folder('m3/'+yr);
					Files.set.folder('m3/'+yr+'/'+value);
					o.text = 'm3/'+yr+'/'+value+'/'+ct+'.jpg';
					marfoo3.mv(o.text, function (a) {
						$.log('photo move result', a);
					});
					zaad.push(o);
				}
			}
			if (zaad.length)
			MongoDB.set(Config.database.name, tbl_rsl, zaad, function (outcome) {
				var nataaij = [];
				outcome.rows.forEach(function (item) {
					var m = item.room;
					if (!item.remove)
					var txr = Rooms.slow_mode(m, duration);
					txrt[ m ] = {
						uid: m,
						delay: txr,
					};
					var o = {
						uid: item.uid,
						ruid: item.ruid,
						room: m,
						kind: 2,
						address: item.text,
						remove: item.remove,
						owner: item.owner,
						created: item.created,
						updated: item.updated,
					};
					if (item.remove) {
					}
					nataaij.push(o);
				});
				response.need('delay').get(Object.values(txrt));
				response.need('default').sync(nataaij);
				response.upload(1).consumed();
			});
			else
			response.upload(0).consumed();
		} else response.upload(0).consumed();
	});
});
Network.upload('messages', 'sawt', function (response) {
	var value = response.value, marfoo3 = response.marfoo3;
	if (!response.account) { response.finish(); return; } 
	if (!isnum(value) || value < 1 || !marfoo3) { response.finish(); return; } 
	var filesize = Math.ceil(marfoo3.size/1024); 
	if (filesize > 80) { response.upload(0).finish(); return; } 
	musicmetadata.parseBuffer(response.marfoo3.data, 0, {
		duration: true,
	}).then(function (d) {
		var duration = d.format.duration; 
		duration = Math.max(duration, filesize);
		if (!isnum(duration)) duration = filesize;
		MongoDB.query(Config.database.name, tbl_mklmt, {
			uid: { $in: [value] }
		}, function (rows) {
			if (rows.length) {
				var mklmh = rows.get(value);
				var ct = get_time_now(), yr = new Date().getFullYear();
				var zaad = [], txrt = {};
				if (mklmh) {
					if (Rooms.are_both_members(mklmh, response.account.uid)) {
						var o = {
							room: value,
							kind: 1,
							owner: response.account.uid,
							updated: ct,
						};
						Files.set.folder('m3');
						Files.set.folder('m3/'+yr);
						Files.set.folder('m3/'+yr+'/'+value);
						o.text = 'm3/'+yr+'/'+value+'/'+ct+'.webm';
						marfoo3.mv(o.text, function (a) {
						});
						zaad.push(o);
					}
				}
				if (zaad.length)
				MongoDB.set(Config.database.name, tbl_rsl, zaad, function (outcome) {
					var nataaij = [];
					outcome.rows.forEach(function (item) {
						var m = item.room;
						if (!item.remove)
						var txr = Rooms.slow_mode(m, duration);
						txrt[ m ] = {
							uid: m,
							delay: txr,
						};
						var o = {
							uid: item.uid,
							ruid: item.ruid,
							room: m,
							kind: 1,
							address: item.text,
							remove: item.remove,
							owner: item.owner,
							created: item.created,
							updated: item.updated,
						};
						if (item.remove) {
						}
						nataaij.push(o);
					});
					response.need('delay').get(Object.values(txrt));
					response.need('default').sync(nataaij);
					response.upload(1).consumed();
				});
				else
				response.upload(0).consumed();
			} else response.upload(0).consumed();
		});
	});
});
Network.sync('messages', function (response) {
	var value = response.value;
	if (!response.account) { response.finish(); return; } 
	if (!value) { response.finish(); return; } 
	var mklmt = [];
	value.forEach(function (item) {
		if (item.uid && item.room)
			mklmt.push({
				uid: item.room,
			});
	});
	MongoDB.query(Config.database.name, tbl_mklmt, {
		uid: { $in: mklmt },
	}, function (rows) {
		if (rows.length) {
			var zaad = [], pops = [], txrt = {};
			var ct = get_time_now();
			value.forEach(function (item) {
				var m = item.room, mklmh = rows.get(m);
				if (item.uid && mklmh) {
					if (Rooms.are_both_members(mklmh, response.account.uid)) {
						var o = {
							uid: item.uid,
							room: item.room,
							updated: ct,
						};
						if (item.remove) {
							o.remove = ct;
						} else {
							o.text = parsestring(item.text, 480);
							o.owner = response.account.uid;
						}
						zaad.push(o);
					} else
					pops.push({
						uid: item.uid,
						remove: -1,
					});
				}
			});
			if (zaad.length)
			helpers.set(Config.database.name, tbl_rsl, zaad, function (outcome) {
				var nataaij = [];
				outcome.rows.forEach(function (item) {
					var m = item.room;
					if (!item.remove)
					var txr = Rooms.slow_mode(m, messages.text2seconds(item.text));
					txrt[ m ] = {
						uid: m,
						delay: txr,
					};
					var o = {
						uid: item.uid,
						ruid: item.ruid,
						room: m,
						text: item.text,
						remove: item.remove,
						owner: item.owner,
						created: item.created,
						updated: item.updated,
					};
					if (item.remove) {
					}
					nataaij.push(o);
				});
				response.need('delay').get(Object.values(txrt));
				response.sync(nataaij.concat(pops)).finish();
			});
			else
			response.sync(pops).finish();
		} else {
			var zaad = [];
			value.forEach(function (item) {
				if (item.uid)
				zaad.push({
					uid: item.uid,
					remove: -1,
				});
			});
			response.sync(zaad).finish();
		}
	});
});
 
var Databases;
;(function () {
	'use strict';
	Databases = {
	};
	module.exports = Databases;
})();
 
var MongoDB;
;(function () {
	'use strict';
	const { MongoClient, ObjectId } = require('./deps/mongodb');
	const uri = process.env.DEWAAN_MONGO_URI || 'mongodb://localhost/';
	const client = new MongoClient( uri );
	var db, tbl_pops = 'pops', debug_mongodb = 0;
	function generate_uid() { return new ObjectId().toString(); }
	async function connect() {
		Cli.echo(' ^bright^MongoDB~~ Connecting... ^dim^', uri, '~~');
		try {
			await client.connect();
			Cli.echo(' ^bright^MongoDB~~ Connected ');
		} catch (error) {
			Cli.echo(' ^bright^MongoDB~~ Error connecting ');
			$.log.e( error );
			process.exit(1);
		} finally {
		}
	}
	function use_db(name) {
		return client.db(name);
	}
	 
	async function upsert(db, collection_name, doc, cb) {
		if (debug_mongodb) $.log( ' upsert... ', collection_name );
		var out_error;
		try {
			const collection = use_db( db ).collection( collection_name );
			var created = get_time_now(), uid = doc.uid || generate_uid();
			delete doc.created; 
			const update = {
				$set: doc, 
				$setOnInsert: { _id: uid, created: created },
			};
			const result = await collection.updateOne(
				{ _id: uid }, 
				update,
				{ upsert: true },
			);
			if (result.upsertedCount > 0) {
				doc.uid = result.upsertedId;
				doc.created = created;
			} else {
				doc.uid = doc._id;
				delete doc._id;
			}
		} catch (error) {
			$.log.e(' Error during upsert:', error);
		} finally {
			if (isfun(cb)) cb( out_error, doc );
		}
	}
	async function upsert_one_or_many(db, collection_name, doc_or_docs, cb) {
		var out_docs = [], out_error;
		if (!isarr( doc_or_docs )) doc_or_docs = [ doc_or_docs ];
		for (const o of doc_or_docs) {
			await upsert(db, collection_name, o, function (err, doc) {
				if (err) {
					if (!isarr(out_error)) out_error = [];
					out_error.push(err);
				}
				out_docs.push( doc );
			});
		}
		if (isfun(cb)) {
			var out = { rows: out_docs };
			if (out_error) out.err = out_error;
			cb( out );
		}
	}
	async function find_many_as_array(db, collection_name, filter, cb) {
		if (debug_mongodb) $.log( ' find_many_as_array... ', collection_name );
		if (isfun(cb)) {
			var out_docs, out_error;
			filter = filter || {};
			if (filter.uid) {
				filter._id = filter.uid;
				delete filter.uid;
			}
			try {
				const collection = use_db( db ).collection( collection_name );
				out_docs = await collection.find( filter ).toArray();
				out_docs = out_docs.map(function (o) {
					o.uid = o._id;
					delete o._id;
					return o;
				});
			} catch (error) {
				$.log.e(' Error during find_many_as_array:', error);
			} finally {
				var out = { rows: out_docs };
				if (out_error) out.err = out_error;
				cb( out );
			}
		} else {
			Cli.echo( ' ^bright^find_many_as_array~~ needs a callback ' );
		}
	}
	async function find_one(db, collection_name, filter, cb) {
		if (debug_mongodb) $.log( ' find_one... ', collection_name );
		if (isfun(cb)) {
			var out_docs, out_error;
			filter = filter || {};
			if (filter.uid) {
				filter._id = filter.uid;
				delete filter.uid;
			}
			try {
				const collection = use_db( db ).collection( collection_name );
				out_docs = await collection.find( filter ).limit(1).toArray();
				out_docs = out_docs.map(function (o) {
					o.uid = o._id;
					delete o._id;
					return o;
				});
			} catch (error) {
				$.log.e(' Error during find_one:', error);
			} finally {
				if (out_docs[0]) {
					cb( out_docs[0] );
				} else {
					cb( false );
				}
			}
		} else {
			Cli.echo( ' ^bright^find_one~~ needs a callback ' );
		}
	}
	async function delete_one(db, collection_name, uid, cb, alt_collection_name) {
		$.log( ' delete_one... ', collection_name );
		var result, out_error;
		try {
			const collection = use_db( db ).collection( collection_name );
			result = await collection.deleteOne({ _id: uid })
			if (result.deletedCount) {
				await upsert(db, tbl_pops, {
					luid: uid,
					ltable: alt_collection_name || collection_name,
					updated: get_time_now(),
				}, function (err, doc) {
					out_error = err;
				});
			}
		} catch (error) {
			out_error = error;
			$.log.e(' Error during delete_one:', error);
		} finally {
			if (isfun(cb)) cb( out_error, result );
		}
	}
	async function delete_many(db, collection_name, filter, cb, alt_collection_name) {
		var uids = [];
		if (isstr(filter) || isnum(filter) || isarr(filter)) {
			uids = isarr(filter) ? filter : [ filter ];
		} else {
			await find_many_as_array(db, collection_name, filter, function (out) {
				if (out.rows.length) {
					out.rows.forEach(function (o) {
						uids.push( o.uid );
					});
				}
			});
		}
		if (debug_mongodb) $.log( ' delete_many... ', collection_name );
		var out_uids = [], out_error;
		for (const o of uids) {
			await delete_one(db, collection_name, o, function (err, doc) {
				if (err) {
					if (!isarr(out_error)) out_error = [];
					out_error.push(err);
				}
				out_uids.push( o );
			});
		}
		var old_time = get_time_now() - (40*1000*60*60*24); 
		var pops_result;
		try {
			const collection = use_db( db ).collection( tbl_pops );
			pops_result = await collection.deleteMany({
				updated: {
					$lte: old_time
				}
			});
		} catch (error) {
			Cli.echo( ' delete_many error while deleting old pops ' );
			$.log.e( error );
		} finally {
			if (pops_result && pops_result.deletedCount) {
				Cli.echo( ' delete_many deleted '+pops_result.deletedCount+' old pops ' );
			}
		}
		if (isfun(cb)) {
			if (out_uids.length && debug_mongodb) Cli.echo( ' delete_many deleted '+out_uids.length+' docs ' );
			cb( out_uids, out_error );
		}
	}
	module.exports = Databases.mongodb = MongoDB = {
		connect : connect,
		db : use_db,
		set : upsert_one_or_many,
		query : find_many_as_array,
		get : find_one,
		pop : delete_many,
		uid: generate_uid,
	};
})();
Web.during_init(function (done, queue) {
	MongoDB.connect().finally(function () {
		done(queue);
	});
});
 
var Polling;
;(function(){
	'use strict';
	var connections = {};
	 
	Polling = {
		worker: function (done, queue, extra) {
			var payload = extra.payload,
				obj = extra.obj,
				queue2 = $.queue();
			queue2.set(function (done2, queue2) { 
				if ( extra.consumed ) { 
					 
					done2(queue2, extra);
				} else
				if ( extra.account && payload.broadcast && extra.account.sid ) {
					connections[ extra.account.sid ] = {
						uid: extra.account.uid,
						sid: extra.account.sid,
						name: extra.account.name,
						res: extra.res,
						time: new Date().getTime(),
					};
				} else done2(queue2, extra);
			});
			queue2.run( function () {
				done(queue, extra);
			} );
		},
		 
		finish: function (obj) {
			for (var i in connections) {
				try {
					connections[i].res.json(obj || 1);
					delete connections[i];
				} catch (e) {
					$.log.s('Polling.finish err', e);
				}
			}
		},
		 
		finish_all: function (accounts) {
			for (var i in connections) {
				var yes;
				if (accounts && accounts.includes(connections[i].uid)) yes = 1;
				if (!accounts) yes = 1;
				if (yes) {
					try {
						connections[i].res.end('1');
						delete connections[i];
					} catch (e) {
						$.log('Polling.finish_all err', e);
					}
				}
			}
		},
	};
	var poptimer = setInterval(function () {
		var current_time = new Date().getTime();
		for (var i in connections) {
			if ( current_time - connections[i].time >= 30 * 1000 ) {
				delete connections[i];
			}
		}
	}, 10 * 60 * 1000);
	module.exports = Polling;
	Network.get('polling', 'connections', function (response) {
		var names = [];
		for (var i in connections) { names.push(connections[i].name); }
		response.get('names', names)
				.finish();
	});
	Web.add(Polling.worker);
})();
;(function(){
	'use strict';
	var main = {
	};
	Web.init(() => {
	});
	var default_room = 'default_room';
	var connections = {};
	function add_connection(socket_id, key, value, data) {
		var o = connections[ key ] = Object.assign(connections[ key ] || {}, value || {});
		o.socket_id = socket_id;
		o.mobile = data.mobile;
		o.platform = data.platform;
		o.browser = data.browser;
		o.browser_version = data.browser_version;
		if (isundef(o.color)) {
			o.color = count_connections()-1;
		}
		return o;
	}
	function get_connection(socket_id) {
		for (var i in connections) {
			if (connections[i].socket_id == socket_id) {
				return i;
				break;
			}
		}
	}
	function remove_connection(socket_id) {
		var key = get_connection(socket_id);
		if (key) {
			delete connections[ key ];
			$.log('removed connection', socket_id, '->', key);
		} else {
			$.log('un-authenticated user disconnected');
		}
	}
	function export_connection(o) {
		return {
			uid: o.session.uid,
			color: o.color,
			name: o.account.name,
			mobile: o.mobile,
			platform: o.platform,
			browser: o.browser,
			browser_version: o.browser_version,
		};
	}
	function count_connections() {
		return Object.keys(connections).length;
	}
	function get_room_size(name) {
		var o = SocketIO.sockets.adapter.rooms.get( default_room );
		if (o) return o.size;
		else return 0;
	}
	Hooks.set('socket', (socket) => {
		$.log('a user connected', socket.id);
		socket.on('join', (data, callback) => {
			if (isstr(data.key) && data.key.length) {
				Sessions.get_session_account(data.key, (result) => {
					if (result) {
						var result_object = add_connection( socket.id, data.key, result, data );
						result_object = export_connection( result_object );
						socket.join( default_room );
						SocketIO.to( default_room ).emit( 'join', [ result_object ] );
						if (isfun(callback)) { 
							var arr = [];
							for (var i in connections) {
								arr.push( export_connection(connections[i]) );
							}
							callback(arr);
						}
						$.log('user joined', result.account.name);
						$.log('room size', get_room_size( default_room ) );
					} else {
						$.log('user failed to auth for joining', data, result);
					}
				});
			}
		});
		socket.on('leave', (data, callback) => {
			if (isstr(data.key) && data.key.length) {
				Sessions.get_session_account(data.key, (result) => {
					if (result) {
						SocketIO.to( default_room ).emit( 'leave', result.session.uid );
						socket.leave( default_room );
						if (isfun(callback)) { callback( result.session.uid ); }
						$.log('user left', result.account.name);
						$.log('room size', get_room_size( default_room ) );
					} else {
						$.log('user failed to auth for leaving', data, result);
					}
				});
			}
		});
		socket.on('pointer', (data, callback) => {
			if (isarr(data)) {
				var conn = get_connection(socket.id);
				if (conn) { 
					var result = connections[conn];
					if (result) {
						socket.to( default_room ).emit( 'pointer', [result.session.uid, data[0], data[1]] );
					}
				}
			}
		});
		socket.on('pointer_contact', (data, callback) => {
			if (isnum(data)) {
				var conn = get_connection(socket.id);
				if (conn) { 
					var result = connections[conn];
					if (result) {
						socket.to( default_room ).emit( 'pointer_contact', [result.session.uid, data] );
					}
				}
			}
		});
		socket.on('undo', (data, callback) => {
			var conn = get_connection(socket.id);
			if (conn) { 
				var result = connections[conn];
				if (result) {
					socket.to( default_room ).emit( 'undo', [result.session.uid] );
				}
			}
		});
		socket.on('disconnect', () => {
			var conn = get_connection(socket.id);
			if (conn) {
				var conn_object = connections[conn];
				socket.to( default_room ).emit( 'leave', conn_object.session.uid );
				socket.leave( default_room );
				remove_connection(socket.id);
			}
		});
	});
	Network.get('call_screen', 'active', function (response) {
		response.get( count_connections() ).finish();
	});
	Files.fs.watch('./index.js', (eventtype, filename) => {
		$.taxeer('kill-server', () => {
			Cli.echo( ' ^bright^Updated~~ source code, exiting... ' );
			process.exit();
		}, 500);
	});
	process.on('unhandledRejection', (err) => {
		$.log.e(err);
		process.exit(1);
	});
})();

