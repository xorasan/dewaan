var Config={"name":"client","appname":"Dewaan","sub":"Forum Software","desc":"Tiny modern forum software for small companies","repo":"https://github.com/xorasan/dewaan","port":"3060","bg":"#000000"};

function updatetheme(o) {
return 'body {'
+'\n	color:'+o.text+';'
+'\n}'
+'\nbody {'
+'\n	background-color:'+o.primary+';'
+'\n}'
+'\nbody[data-transparency] {'
+'\n	background-color:'+o.primaryt+';'
+'\n}'
+'\nhr {'
+'\n	border-top:2px dashed '+o.secondary+';'
+'\n}'
+'\ns {'
+'\n	text-decoration-color:'+o.text+';'
+'\n}'
+'\na {'
+'\n	text-decoration:underline '+o.accent+';'
+'\n}'
+'\na:active {'
+'\n	color:'+o.tertiary+';'
+'\n	text-decoration:underline '+o.accentd+';'
+'\n}'
+'\nbutton {'
+'\n	background:'+o.primary+';'
+'\n	border:2px solid '+o.secondary+';'
+'\n}'
+'\nbutton:active {'
+'\n	border-color:'+o.accentl+';'
+'\n	color:'+o.accent+';'
+'\n	fill:'+o.accent+';'
+'\n	box-shadow:0 0 0 0 '+o.textl+';'
+'\n}'
+'\nbutton:active svg {'
+'\n	fill:'+o.accent+';'
+'\n}'
+'\nbutton:active span {'
+'\n	color:'+o.accent+';'
+'\n}'
+'\nbutton:focus {'
+'\n	border-color:'+o.accentl+';'
+'\n}'
+'\nbutton svg {'
+'\n	fill:'+o.textl+';'
+'\n}'
+'\nbutton[data-selected] {'
+'\n	background:'+o.accent+' !important;'
+'\n}'
+'\nbutton[data-selected] svg {'
+'\n	fill:'+o.primary+' !important;'
+'\n}'
+'\ninput, textarea, select, .input {'
+'\n	border-bottom:2px solid '+o.secondary+';'
+'\n	color:'+o.textd+';'
+'\n}'
+'\ninput:active, input:focus, .input:active, .input:focus {'
+'\n	color:'+o.textl+';'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\ninput[data-error], .input[data-error] {'
+'\n	border-color:'+o.red+';'
+'\n}'
+'\nselect {'
+'\n	border:1px solid '+o.tertiaryd+';'
+'\n}'
+'\nselect, select:focus {'
+'\n	background-image:linear-gradient(45deg, transparent 40%, '+o.text+' 50%), linear-gradient(135deg, '+o.text+' 50%, transparent 60%);'
+'\n}'
+'\noption {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.text+';'
+'\n}'
+'\n.tahweem {'
+'\n	background:'+o.accentt+';'
+'\n}'
+'\n.above {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n[data-sticky].headerui {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n.tag {'
+'\n	border:1px solid '+o.secondaryd+';'
+'\n}'
+'\n.icon svg, .icon img {'
+'\n	fill:'+o.textl+';'
+'\n}'
+'\n.accent {'
+'\n	color:'+o.accent+';'
+'\n}'
+'\n.accent svg {'
+'\n	fill:'+o.accent+';'
+'\n}'
+'\n.red {'
+'\n	color:'+o.redl+';'
+'\n}'
+'\n.redbg {'
+'\n	background:'+o.redd+';'
+'\n}'
+'\nbutton.xaas {'
+'\n	background:'+o.secondaryd+';'
+'\n	border:4px solid '+o.secondaryl+';'
+'\n}'
+'\nbutton.xaas:focus {'
+'\n	background:'+o.accentl+';'
+'\n	border-color:'+o.accent+';'
+'\n	color:'+o.primary+';'
+'\n}'
+'\nbutton.xaas:active {'
+'\n	background:'+o.accent+';'
+'\n	border-color:'+o.accentd+';'
+'\n}'
+'\n#dimmer {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n#dimmertext {'
+'\n	color:'+o.textd+';'
+'\n	border:1px solid '+o.tertiary+';'
+'\n	background:'+o.secondaryd+';'
+'\n}'
+'\n.header {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.accent+';'
+'\n}'
+'\n#itlaa3 .text {'
+'\n	box-shadow:0 0 10px 0 '+o.tertiary+';'
+'\n	border:1px solid '+o.tertiaryl+';'
+'\n}'
+'\n#taht3nsar .text {'
+'\n	border:1px solid '+o.tertiaryd+';'
+'\n}'
+'\n#itlaa3 .text, #taht3nsar .text {'
+'\n	background:'+o.secondaryd+';'
+'\n}'
+'\n[data-transparency] #itlaa3 .text, [data-transparency] #taht3nsar .text {'
+'\n	background:'+o.primaryt+';'
+'\n	border-color:'+o.secondaryt+';'
+'\n}'
+'\n@media (min-width:320px) {'
+'\n	#softkeysui .row2 button .tooltip {'
+'\n		border:1px solid '+o.secondaryd+';'
+'\n		background:'+o.primaryl+';'
+'\n	}'
+'\n	#softkeysui button .key {'
+'\n		background:'+o.secondaryd+';'
+'\n	}'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	::-webkit-scrollbar {'
+'\n		background:'+o.primary+';'
+'\n	}'
+'\n	::-webkit-scrollbar-thumb {'
+'\n		background:'+o.textd+';'
+'\n	}'
+'\n	::-webkit-scrollbar-thumb:active {'
+'\n		background:'+o.text+';'
+'\n	}'
+'\n}'
+'\n#sidebarui {'
+'\n	background:'+o.secondaryd+';'
+'\n	border-right:1px solid '+o.tertiaryd+';'
+'\n	border-bottom:1px solid '+o.tertiaryd+';'
+'\n}'
+'\n.sidebar_item {'
+'\n	background:'+o.primaryl+';'
+'\n}'
+'\n.sidebar_item:hover {'
+'\n	background:'+o.secondaryl+';'
+'\n}'
+'\n[data-selected].sidebar_item {'
+'\n	color:'+o.textl+';'
+'\n	background:'+o.tertiaryl+';'
+'\n	border-right:4px solid '+o.accentd+';'
+'\n}'
+'\n[data-focussed] [data-selected].sidebar_item {'
+'\n	color:'+o.textl+';'
+'\n	background:'+o.accentd+';'
+'\n}'
+'\n.list .a3laa {'
+'\n	background:'+o.secondaryt+';'
+'\n	color:'+o.textd+';'
+'\n	text-shadow:0px 1px '+o.secondary+';'
+'\n}'
+'\n[dir=rtl] .list .a3laa {'
+'\n	background:linear-gradient(45deg, transparent 50%, '+o.secondaryt+' 90%);'
+'\n}'
+'\n.list .item, .list .listitem {'
+'\n	border-bottom:1px solid '+o.secondary+';'
+'\n}'
+'\n.list .item:hover, .list .listitem:hover {'
+'\n	background:'+o.secondaryd+';'
+'\n}'
+'\n.list .item[data-baidaa], .list .listitem[data-baidaa] {'
+'\n	box-shadow:0 0 5px 2px '+o.accentl+', 0 0 5px 2px '+o.accentd+' inset;'
+'\n	border-color:'+o.accentd+';'
+'\n}'
+'\n.list .item[data-selected], .list .listitem[data-selected] {'
+'\n	border-color:'+o.textxd+';'
+'\n}'
+'\n[data-focussed].list .item[data-selected], [data-focussed].list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.primaryl+' -110%, '+o.secondaryd+' 220%);'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\n[dir=rtl] .list .item[data-selected], [dir=rtl] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.tertiary+' -200%, '+o.secondary+' 110%);'
+'\n}'
+'\n[data-transparency] .list .item[data-selected], [data-transparency] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.secondary+' 0%, transparent 220%);'
+'\n	border-bottom:1px solid '+o.accent+';'
+'\n}'
+'\n[dir=rtl][data-transparency] .list .item[data-selected], [dir=rtl][data-transparency] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, transparent -220%, '+o.secondary+' 110%);'
+'\n}'
+'\n.list .body {'
+'\n	color:'+o.textd+';'
+'\n}'
+'\n.list .item .icon {'
+'\n	background:linear-gradient(200deg, '+o.primary+', transparent);'
+'\n}'
+'\n.list .item[data-selected] .icon {'
+'\n	background:linear-gradient(200deg, '+o.accent+', transparent);'
+'\n}'
+'\n.list .days {'
+'\n	color:'+o.textd+';'
+'\n}'
+'\n.list .item[data-selected] .days {'
+'\n	color:'+o.primaryl+';'
+'\n}'
+'\n[data-selected] [data-past] {'
+'\n	color:'+o.redd+' !important;'
+'\n}'
+'\n[data-past] {'
+'\n	color:'+o.redl+' !important;'
+'\n}'
+'\n.list [data-mufarraq] {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n[data-transparency] .list [data-mufarraq] {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n.list .item .tawassa3, .list .listitem .tawassa3 {'
+'\n	color:'+o.textl+';'
+'\n	background:'+o.tertiaryt+';'
+'\n	box-shadow:0 0 12px 0px '+o.primaryl+';'
+'\n}'
+'\n.settingsitem[data-selected] {'
+'\n	border:1px solid '+o.accent+' !important;'
+'\n}'
+'\n#softkeysui {'
+'\n	background:linear-gradient(0deg, '+o.primary+' 5%, '+o.primaryt+' 15%, transparent);'
+'\n}'
+'\n#softkeysui[data-hidden] {'
+'\n	background:linear-gradient(0deg, '+o.primaryt+' 0%, transparent);'
+'\n}'
+'\n#softkeys_backstack .dot {'
+'\n	border:1px solid '+o.primaryt+';'
+'\n	background:'+o.secondary+';'
+'\n}'
+'\n#softkeysui button {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.textl+';'
+'\n}'
+'\n#softkeysui button label {'
+'\n	border:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row1 button {'
+'\n	border-top:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row1 button:hover {'
+'\n	box-shadow:0 0 25px 2px '+o.secondary+';'
+'\n}'
+'\n#softkeysui .row1 button:focus {'
+'\n	box-shadow:0 0 25px 2px '+o.accentd+';'
+'\n}'
+'\n#softkeysui .row2 button {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row2 button:hover {'
+'\n	box-shadow:-20px 0 15px 0px '+o.secondary+' inset;'
+'\n}'
+'\n#softkeysui .row2 button:focus {'
+'\n	box-shadow:-20px 0 15px 0px '+o.accentd+' inset;'
+'\n}'
+'\n#softkeysui .left {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .center {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n	border-left:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .right {'
+'\n	border-left:1px solid '+o.secondaryd+';'
+'\n}'
+'\ninput[data-over], textarea[data-over], input[data-under], textarea[data-under] {'
+'\n	border-color:'+o.red+';'
+'\n}'
+'\n#sheetui {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	#sheetui {'
+'\n		box-shadow:0 0 20px 5px '+o.tertiaryd+';'
+'\n	}'
+'\n}'
+'\n#dialogui {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	#dialogui {'
+'\n		box-shadow:0 0 20px 5px '+o.tertiaryd+';'
+'\n	}'
+'\n}'
+'\n@media (min-width:321px) {'
+'\n	#softkeysui button {'
+'\n		background:'+o.primary+';'
+'\n		color:'+o.textl+';'
+'\n	}'
+'\n	#softkeysui .row1 button {'
+'\n		background:'+o.primaryt+';'
+'\n	}'
+'\n	#softkeysui button:active, #softkeysui button[data-lamsah] {'
+'\n		background:'+o.secondary+';'
+'\n		box-shadow:0 0 30px 6px '+o.tertiaryd+';'
+'\n	}'
+'\n	#softkeysui .row2, #skdots {'
+'\n		box-shadow:0 0 10px 0 '+o.tertiary+';'
+'\n	}'
+'\n	#skdots {'
+'\n		background:'+o.primaryt+';'
+'\n		border:1px solid '+o.tertiary+';'
+'\n	}'
+'\n}'
+'\n@media (min-width:321px) {'
+'\n	#softkeysui .row2 [data-hawm="1"] span {'
+'\n		background:'+o.secondary+';'
+'\n		border:1px solid '+o.tertiary+';'
+'\n	}'
+'\n	#softkeysui .row2 {'
+'\n		background:'+o.primary+';'
+'\n		border-top:1px solid '+o.tertiary+';'
+'\n		border-left:1px solid '+o.tertiary+';'
+'\n		border-bottom:1px solid '+o.tertiary+';'
+'\n	}'
+'\n}'
+'\n.profile .shakl {'
+'\n	background:'+o.secondaryt+';'
+'\n}'
+'\n.profileshakl .floating .listitem {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n.profileshakl {'
+'\n	border-bottom:1px solid '+o.secondary+';'
+'\n}'
+'\n.profileshakl[data-selected] {'
+'\n	background:'+o.secondary+';'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\n.profileitem {'
+'\n	border:2px solid '+o.secondary+';'
+'\n}'
+'\n[data-focussed] [data-selected].profileitem {'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\n[data-selected].profileitem {'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\n.profileitem .details {'
+'\n	background:linear-gradient(transparent 0%, '+o.primary+' 100%);'
+'\n}'
+'\n.profileitem .photo {'
+'\n	background-color:'+o.secondaryd+';'
+'\n}'
+'\n.account_sheet .bio {'
+'\n	color:'+o.text+';'
+'\n}'
+'\n.account_sheet .photo {'
+'\n	background-color:'+o.secondaryd+';'
+'\n}'
+'\n.account_sheet .extendedinfo {'
+'\n	color:'+o.textl+';'
+'\n	background:linear-gradient('+o.primaryt+' 0%, '+o.primary+' 100%);'
+'\n}'
+'\n#profilephotosui .item .image {'
+'\n	background-color:'+o.secondaryd+';'
+'\n}'
+'\n.roomitem .shape .names {'
+'\n	text-shadow:1px 1px 4px '+o.primary+';'
+'\n}'
+'\n.roomitem {'
+'\n	border-bottom:1px solid '+o.secondary+';'
+'\n}'
+'\n.roomitem[data-selected] {'
+'\n	background:'+o.secondaryl+';'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\n.roomitem .hayy {'
+'\n	background:'+o.red+';'
+'\n	border:1px solid '+o.primary+';'
+'\n}'
+'\n.roomitem .photo, .members_item .photo {'
+'\n	background-color:'+o.secondaryt+';'
+'\n}'
+'\n.durationitem[data-selected] {'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\n.durationitem .box {'
+'\n	background:'+o.primaryl+';'
+'\n	border:1px solid '+o.secondary+';'
+'\n}'
+'\n#messagesui .taxeer {'
+'\n	background:'+o.primaryt+';'
+'\n	border:2px solid '+o.secondary+';'
+'\n}'
+'\n.baaq {'
+'\n	background:'+o.primary+';'
+'\n	box-shadow:0 10px 10px -8px '+o.secondary+';'
+'\n}'
+'\n#messagesui .irtiqaa {'
+'\n	background:linear-gradient(270deg, '+o.accent+', '+o.primary+' 20px);'
+'\n	border-bottom:2px solid '+o.accentd+';'
+'\n}'
+'\n.katabmessage {'
+'\n	border:1px solid '+o.tertiary+';'
+'\n	background:'+o.primary+';'
+'\n	box-shadow:0 0 25px 20px '+o.secondaryd+';'
+'\n}'
+'\n[data-mahvoof].messageitem .text {'
+'\n	color:'+o.tertiary+';'
+'\n}'
+'\n[data-la3ib].messageitem .text {'
+'\n	border-left:6px solid '+o.accent+';'
+'\n}'
+'\n[data-focussed].list [data-selected].messageitem .tag {'
+'\n	border-color:'+o.textxd+';'
+'\n	color:'+o.textl+';'
+'\n	box-shadow:0 0 35px 10px '+o.secondary+';'
+'\n}'
+'\n.messageitem .photo, #messagesui .photo {'
+'\n	background:'+o.secondaryt+';'
+'\n}'
+'\n#visualizer {'
+'\n	border:1px solid '+o.secondary+';'
+'\n}'
+'\n#visualizer .path {'
+'\n	background:'+o.tertiary+';'
+'\n}'
+'\n#whiteboardui {'
+'\n	border:2px dashed '+o.tertiary+';'
+'\n}'
+'\n.call_list_item .icon svg {'
+'\n	background:'+o.secondary+';'
+'\n}'
+'\n.call_list_item .color_tag {'
+'\n	background:'+o.textd+';'
+'\n}';
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
		if (typeof fn === 'function') { 
			if (mod) { 
				fn(mod);
			} else {
				if (glatteis._paths[name]) { 
					glatteis.require(glatteis._paths[name], function(mod) {
						glatteis._mods[name] = mod;
						fn(mod);
					});
				}
			}
			return null; 
		} else { 
			return (mod || false);
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
$._r();
$.b = 2;
'use strict';
var taraajim = {"en":{"call_screen":"Call Screen","rasaail":"Messages","norasaail":"No Messages","deleting":"Deleting...","willdelete":"Will delete","offlinesince":"Offline since","pagerasmaa":"Tab Names","profile":"Profile","name":"User Name","displayname":"Display Name","shape":"Appearance, Accessories, Clothes...","lifestory":"Life Story","birthday":"Birthday","kind":"Type, Rank","possession":"Possessions, Real estate, Pets...","gender":"Gender","family":"Family","relatives":"Relatives","blocks":"Blocks","friends":"Friends","jobs":"Jobs, Hobbies, Interests...","wants":"Wants","phone":"Phone","status":"Status","connected":"Connected When","joined":"Joined When (after invitation)","latitude":"Latitude","longitude":"Longitude","created":"Created When","updated":"Updated When","taptoremove":"Tap to Remove","taptoadd":"Tap to Add","taptochange":"Tap to Change","taptoselect":"Tap to Select","chosen":"Chosen","moneymorein":"Get More in the Profile Tab","mowdoo3":"topic, theme, title...","autodeleteold":"Will auto-delete old messages","notimelimit":"No time limit","xulwah":"Privacy","najwaa":"Private","a3daa":"Members","adaafa3daa":"Add members","muddah":"Duration","maxmembershit":"Maximum members added","mklmhda3aw":"Invite %1 to the conversation","mklmhtad3oot":"You've invited %1 to the conversation","mklmhyad3aak":"%1 has invited you","mklmhmas3oob":"%1 has blocked the conversation","mklmhtas3oob":"You've blocked the conversation","mklmhmatrood":"%1 has rejected your invitation","mklmhtatrood":"You've rejected %1's invitation","asa3ab":"Do you want to block this conversation?","sessions":"Sessions","signin":"Sign In","signup":"Join","signout":"Log Out","signoutconfirm":"Do you want to log out?","username":"Username","password":"Password","captcha":"Human Validation","fetchingcaptcha":"Fetching Human Validation Question...","answer":"Answer","usernamedetails":"Your username will be:","usernametip":"Keep it between 3 and 24 characters, alphabets & numbers are allowed","passwordtip":"Keep it between 8 and 64 characters, hard to guess yet easy to remember","checkingusername":"Verifying Username...","usernameover":"Too long, pick a shorter one","usernameunder":"Too short, add a few characters","usernametaken":"Already exists, pick a different username","usernameavailable":"Username Available!","passwordover":"Too long, pick a shorter one","passwordunder":"Too short, add a few characters","passwordwrong":"Wrong, try again","answerblank":"Answer is blank","answerwrong":"Your answer was wrong, try again","loggingin":"Signing In...","loggedin":"Signed In","loggingout":"Logging Out...","loggedout":"Logged Out","settings":"Settings","requestfeat":"Request Feature","reportbug":"Report Bug","author":"Author","build":"Build","openad":"Ad","quality":"Quality","largetext":"Large Text","transparency":"Transparency","calendar":"Calendar","hijri":"Hijri","gregorian":"Gregorian","builton":"Built On","skhelp":"Press # for actions","softkeystouchdpad":"Touch D-Pad","theme":"Theme","black":"Black","white":"White","contrast":"Contrast","high":"High","low":"Low","infuture":"in","justnow":"just now","sseconds":"s","secondsago":"secs","aminuteago":"a min","minute":"min","sminutes":"m","minutes":"mins","minutesago":"mins","anhourago":"an hr","hourago":"hr","hoursago":"hrs","yesterday":"yesterday","tomorrow":"tomorrow","adayago":"a day","dayago":"d","daysago":"d","lastmonth":"last month","monthago":"mo","monthsago":"mo","lastyear":"last year","yearago":"y","yearsago":"y","alongtime":"a long time","sunday":"sunday","monday":"monday","tuesday":"tuesday","wednesday":"wednesday","thursday":"thursday","friday":"friday","saturday":"saturday",",":",","am":"am","pm":"pm","st":"st","nd":"nd","rd":"rd","th":"th","timeformat":"Time Format","hours24":"24 hour","hours12":"12 hour","language":"Language","en":"English","ar":"Arabic","ur":"Urdu","ru":"Russian","de":"German","es":"Spanish","loading":"Loading...","exiting":"Exiting...","newversionfound":"New version found","appcachefailed":"Failed to cache app, you can still use it but it will be slow to start","unsupported":"Your device can't run this app","swunsupported":"Your browser doesn't support Service Workers","appcachedoffline":"App cached offline, it will load faster next time!","off":"Off","on":"On","animations":"Animations","webapptouchdir":"Touch affects direction"}};
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
var
select_content = function (e, start, end) {
	if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) {
		if (isnum(start)) {
			e.selectionStart = start || 0;
			e.selectionEnd = end || start || 0;
		} else if (isfun(e.select)) {
			e.select();
		}
	} else {
		function getTextNodesIn(node) {
			var textNodes = [];
			if (node.nodeType == 3) {
				textNodes.push(node);
			} else {
				var children = node.childNodes;
				for (var i = 0, len = children.length; i < len; ++i) {
					textNodes.push.apply(textNodes, getTextNodesIn(children[i]));
				}
			}
			return textNodes;
		}
		if (document.createRange && window.getSelection) {
			var range = document.createRange();
			range.selectNodeContents(e);
			var textNodes = getTextNodesIn(e);
			var foundStart = false;
			var charCount = 0, endCharCount;
			for (var i = 0, textNode; textNode = textNodes[i++]; ) {
				endCharCount = charCount + textNode.length;
				if (!foundStart && start >= charCount
						&& (start < endCharCount ||
						(start == endCharCount && i <= textNodes.length))) {
					range.setStart(textNode, start - charCount);
					foundStart = true;
				}
				if (foundStart && end <= endCharCount) {
					range.setEnd(textNode, end - charCount);
					break;
				}
				charCount = endCharCount;
			}
			var sel = window.getSelection();
			sel.removeAllRanges();
			sel.addRange(range);
		} else if (document.selection && document.body.createTextRange) {
			var textRange = document.body.createTextRange();
			textRange.moveToElementText(e);
			textRange.collapse(true);
			textRange.moveEnd("character", end);
			textRange.moveStart("character", start);
			textRange.select();
		}
	}
},
get_caret_position = function (e) {
	if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) {
		return [e.selectionStart, e.selectionEnd];
	}
var start = 0;
var end = 0;
var doc = e.ownerDocument || e.document;
var win = doc.defaultView || doc.parentWindow;
var sel;
if (typeof win.getSelection != "undefined") {
sel = win.getSelection();
if (sel.rangeCount > 0) {
var range = win.getSelection().getRangeAt(0);
var preCaretRange = range.cloneRange();
preCaretRange.selectNodeContents(e);
preCaretRange.setEnd(range.startContainer, range.startOffset);
start = preCaretRange.toString().length;
preCaretRange.setEnd(range.endContainer, range.endOffset);
end = preCaretRange.toString().length;
}
} else if ( (sel = doc.selection) && sel.type != "Control") {
var textRange = sel.createRange();
var preCaretTextRange = doc.body.createTextRange();
preCaretTextRange.moveToElementText(e);
preCaretTextRange.setEndPoint("EndToStart", textRange);
start = preCaretTextRange.text.length;
preCaretTextRange.setEndPoint("EndToEnd", textRange);
end = preCaretTextRange.text.length;
}
return [start, end];
},
enc = function (v) {
	return encodeURIComponent(v);
},
dec = function (v) {
	return decodeURIComponent(v);
},
encp = function (v) {
	return encodeURI(v);
},
decp = function (v) {
	return decodeURI(v);
},
innerhtml = function (obj, v) {
	obj.innerHTML = v;
},
setvalue = function (obj, v) {
	obj.value = v;
},
scrollintoview = function (obj) {
	obj && obj.scrollIntoView(1);
},
prevsibling = function (obj) {
	return obj.previousElementSibling;
},
nextsibling = function (obj) {
	return obj.nextElementSibling;
},
getattribute = function (obj, k) {
	return obj.getAttribute(k);
},
attribute = function (obj, k, v) {
	v == '' ? obj.removeAttribute(k) : obj.setAttribute(k, v);
},
setcss = function (obj, k, v) {
	if (v === undefined)
		obj.style[k] = '';
	else
		obj.style[k] = v;
},
popdata = function (obj, k, v) {
	if (obj) delete obj.dataset[k];
},
setdata = function (obj, k, v) {
	if (obj) obj.dataset[k] = v;
},
getdata = function (obj, k) {
	return obj.dataset[k];
},
innertext = function (obj, v) {
	if (isundef(v)) return obj.innerText;
	else obj.innerText = v;
},
innerwidth = function (v) { 
	return innerWidth + (v||0);
},
innerheight = function (v) {
	return innerHeight + (v||0);
},
hasownprop = function (obj, i) {
	if (obj && obj.hasOwnProperty)
		return obj.hasOwnProperty(i);
},
izhar = function (v) {
	v.hidden = 0;
},
ixtaf = function (v) {
	v.hidden = 1;
},
isixtaf = function (v) {
	return v.hidden || getattribute(v, 'type') == 'hidden';
},
markooz = function () {
	return document.activeElement;
},
preventdefault = function (obj) {
	obj && obj.cancelable && obj.preventDefault && obj.preventDefault();
},
raycast = function (x, y) {
	return document.elementsFromPoint(x, y);
},
elementbyid = function (id) {
	return document.getElementById(id);
},
listener = function (obj, name, fn, o) {
	if (typeof obj === 'string' || obj instanceof Array)
		o = fn,
		fn = name,
		name = obj,
		obj = window;
	if (name instanceof Array) {
		name.forEach(function (item) {
			obj.addEventListener(item, fn, o);
		});
	} else obj.addEventListener(name, fn, o);
},
createelement = function (name, classes, id) {
	var e = document.createElement(name||'div');
	if (classes) e.className = classes;
	if (id) e.id = id;
	return e;
},
tahmeel = function (filename, text, mimetype) { 
	var e = createelement('a');
	attribute(e, 'href', (mimetype||'data:text/plain;charset=utf-8,') + encodeURIComponent(text));
	attribute(e, 'download', filename);
	setcss(e, 'display', 'none');
	document.body.appendChild(e);
	e.click();
	document.body.removeChild(e);
},
iswithinelement = function (arr, element) {
	var a = arr[0],
		b = arr[1],
		x = element.offsetLeft,
		y = element.offsetTop,
		w = x+element.offsetWidth,
		h = y+element.offsetHeight;
	return (a >= x && a <= w && b >= y && b <= h);
},
getposition = function (el) {
	var xPos = 0;
	var yPos = 0;
	var dir = document.body.dir;
	if ( dir === 'rtl' )
		xPos = xPos + el.clientWidth;
	while (el) {
		if (el.tagName == 'BODY') {
			var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
			var yScroll = el.scrollTop || document.documentElement.scrollTop;
			xPos += (el.offsetLeft - xScroll + el.clientLeft);
			yPos += (el.offsetTop - yScroll + el.clientTop);
		} else {
			xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
			yPos += (el.offsetTop - el.scrollTop + el.clientTop);
		}
		el = el.offsetParent;
	}
	return [xPos, yPos];
},
replacewith = function (el, el2) {
	el.replaceWith(el2);
};
;(function(){
	var replacewithpolyfill = function () {
	'use-strict'; 
	var parent = this.parentNode, i = arguments.length, currentNode;
	if (!parent) return;
	if (!i) 
		parent.removeChild(this);
	while (i--) { 
		currentNode = arguments[i];
		if (typeof currentNode !== 'object'){
		currentNode = this.ownerDocument.createTextNode(currentNode);
		} else if (currentNode.parentNode){
		currentNode.parentNode.removeChild(currentNode);
		}
		if (!i) 
		parent.replaceChild(currentNode, this);
		else 
		parent.insertBefore(currentNode, this.nextSibling);
	}
	}
	if (!Element.prototype.replaceWith)
		Element.prototype.replaceWith = replacewithpolyfill;
	if (!CharacterData.prototype.replaceWith)
		CharacterData.prototype.replaceWith = replacewithpolyfill;
	if (!DocumentType.prototype.replaceWith)
		DocumentType.prototype.replaceWith = replacewithpolyfill;
})();
var Webapp, webapp, appname = 'Dewaan' || '',
	Offline = Offline || 0,
	pager = pager || 0,
	Pager = Pager || 0,
	checkbox = checkbox || 0,
	preferences = preferences || 0,
	translate = translate || 0,
	rakkazawwal, focus_first_element, focusprev, focusnext, navigables, is_navigable,
	LAYERTOPMOST = 3000;
;(function(){
	var doc = document, bod = doc.body, wakelockstatus, isalbixraaj;
	navigables = ['input', 'textarea', 'button', 'a', 'select'];
	is_navigable = function (e) {
		return navigables.includes(e.tagName.toLowerCase()) || e.contentEditable == 'true';
	};
	focus_first_element = rakkazawwal = function (e, scroll) {
		if (e) {
			var s = e.querySelector('input, textarea, button, a, select, [contenteditable]');
			if (s) {
				s.focus();
				if (scroll) webapp.scrollto(s);
				return s;
			}
		}
	};
	 
	focusprev = function (element, thisone, num) {
		var orig = element, out, LV;
		num = num || 0; if (num > 100) return;
		while ( element.previousElementSibling && num < 100 ) {
			++num;
			element = thisone ? element : element.previousElementSibling;
			if (isixtaf(element)) {
			} else if ( element.dataset.focus == 'list' ) {
				LV = element.listobject;
				if (LV.length()) {
					webapp.blur();
					element.focus();
					LV.last();
					LV.rakkaz(1, 1);
					out = element;
					break;
				}
			} else if ( element.dataset.focus && element.lastElementChild ) {
				out = focusprev(element.lastElementChild, 1, ++num);
				break;
			}
			else if ( is_navigable( element ) ) {
				element.focus();
				out = element;
				break;
			}
			if (thisone) thisone = 0; 
		}
		if ( out ) {}
		else if ( element.dataset.focus == 1 ) {
			return focusprev( element.parentElement, 0, ++num );
		}
		else if ( element.parentElement.dataset.focus ) {
			return focusprev( element.parentElement, 0, ++num );
		} else {
			 
		}
		if (markooz() === element) {
			element.onprev && element.onprev(element);
		}
		if (out) {
			if (orig && orig.listobject) {
				orig.listobject.deselect();
			}   
			return out;
		}
	};
	focusnext = function (element, thisone, num) {
		var orig = element, out, LV;
		num = num || 0; if (num > 100) return;
		while ( element.nextElementSibling && num < 100 ) {
			++num;
			element = thisone ? element : element.nextElementSibling;
			if (isixtaf(element)) {
			} else if ( element.dataset.focus == 'list' ) {
				LV = element.listobject;
				if (LV.length()) {
					webapp.blur();
					element.focus();
					LV.first();
					LV.rakkaz(1, 1);
					out = element;
					break;
				}
			} else if ( element.dataset.focus && element.firstElementChild ) {
				out = focusnext(element.firstElementChild, 1, ++num);
				break;
			}
			else if ( is_navigable( element ) ) {
				element.focus();
				out = element;
				break;
			}
			if (thisone) thisone = 0; 
		}
		if ( out ) {}
		else if ( element.dataset.focus == 1 ) {
			return focusnext( element.parentElement, 0, ++num );
		}
		else if ( element.parentElement.dataset.focus ) {
			return focusnext( element.parentElement, 0, ++num );
		}
		 
		orig.onnext && orig.onnext(orig);
		if (out) {
			if (orig && orig.listobject) {
				orig.listobject.deselect();
			}   
			return out;
		}
	};
	var viewsindex = {}, header_keys,
		getform = function (element) {
			if (!(element instanceof HTMLElement)) return;
			var payload = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					if (otherviews[i].getvalue)
						payload[ otherviews[i].dataset.id ] = otherviews[i].getvalue();
					else
						payload[ otherviews[i].dataset.id ] = otherviews[i].value;
 
				}
			}
			return payload;
		},
		getformkeys = function (element) {
			if (!(element instanceof HTMLElement)) return;
			var keys = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					keys[ otherviews[i].dataset.id ] = otherviews[i];
				}
			}
			return keys;
		},
		 
		sendform = function (element, button) {
			var payload, keys;
			if (element) {
				payload = getform(element);
				keys = getformkeys(element);
			} else {
				element = {
					id: button.dataset.form,
				};
			}
			Hooks.run('domformdata', {
				form: element,
				button: button,
				payload: payload,
				keys: keys,
			});
		},
		setupforms = function () {
			var sendbuttons = doc.querySelectorAll('.form .send');
			for (var i in sendbuttons) {
				if ( sendbuttons.hasOwnProperty(i) ) {
					sendbuttons[i].onclick = function () {
						sendform( doc.querySelector( '#'+this.dataset.form ), this );
					};
				}
			}
			var counts = doc.querySelectorAll('.form label.count');
			for (var i in counts) {
				var countlabel = counts[i];
				if ( counts.hasOwnProperty(i) ) {
					var field = countlabel.parentNode.nextElementSibling;
					field.oninput = function () {
						this.previousElementSibling.lastElementChild.innerText = (this.value || '').length;
					};
					field.oninput();
				}
			}
		};
	 
	Webapp = webapp = {
		visible: 1,
		isdimmed: 0,
		 
		lavaazim: function (inwindow) {
			inwindow = inwindow || [];
			var err;
			for (var i in inwindow) {
				var feature = inwindow[i];
				if ( feature in window
					|| feature in navigator
					|| feature in Navigator ) {
				} else {
					err = 1;
					break;
				}
			}
			if (err) {
				webapp.header( translate && translate('unsupported') );
				return 0;
			} else {
				webapp.header();
				return 1;
			}
		},
		blur: function () {
			var ae = markooz();
			ae && ae.blur();
			blur();
			return ae;
		},
		header: function (text, align, original_keys) {
			var header_icon, header_title = text, header_subtitle = '';
			if (isarr(text) && text.length >= 2) {
				header_title = text[0];
				header_subtitle = text[1];
				header_icon = text[2];
			}
			var keys = original_keys || header_keys;
			var title = keys.title;
			var subtitle = keys.subtitle;
			var header = keys.header;
			var icon = keys.icon;
			if (align == 1) header.dataset.align = '1';
			else if (align == 2) header.dataset.align = '2';
			else delete header.dataset.align;
			if (backstack.darajah <= 1) {
				if (text) {
					if (header_title instanceof Array && header_title[0]) {
						title.dataset.i18n = header_title[0];
					} else {
						delete title.dataset.i18n,
						innertext(title, header_title || '');
					}
					if (header_subtitle instanceof Array && header_subtitle[0]) {
						subtitle.dataset.i18n = header_subtitle[0];
					} else {
						delete subtitle.dataset.i18n,
						innertext(subtitle, header_subtitle || '');
					}
					header.hidden = 0;
				} else {
					delete title.dataset.i18n;
					title.innerText = '';
					header.hidden = 1;
				}
				if (isstr(header_icon) && header_icon.length) {
					if (header_icon.startsWith('/')) {
						innerhtml(icon, '<img src="'+header_icon+'" />');
					} else {
						var e = icons.querySelector('#'+header_icon);
						if (e) {
							innerhtml(icon, '<svg viewBox="0 0 48 48">'+e.cloneNode(1).innerHTML+'</svg>');
						}
					}
				} else {
					innerhtml(icon, '');
				}
				if (!original_keys) this.header(text, align, tall_header_keys);
			} else if (backstack.darajah === 2) {
				sheet.header(text);
			}
			translate.update();
		},
		sahhar: function (what) { 
			if (navigator && navigator.requestWakeLock) {
				webapp.nawwam();
				wakelockstatus = navigator.requestWakeLock(what||'screen');
			}
		},
		nawwam: function () { 
			if (wakelockstatus && wakelockstatus.unlock) {
				try { wakelockstatus.unlock(); } catch (e) { $.log( e ); }
				wakelockstatus = 0;
			}
		},
		scrollx: function (v) {
			var se = scrollingelement();
			se.scrollTop += v;
		},
		scrolly: function (v) {
			var se = scrollingelement();
			se.scrollLeft += v;
		},
		dimmer: function (zindex, text) {
			zindex && (dimmer.style.zIndex = zindex);
			dimmer.hidden = zindex ? 0 : 1;
			webapp.isdimmed = zindex ? 1 : 0;
			if (text)
				dimmertext.hidden = 0,
				dimmertext.dataset.i18n = text;
			else
				dimmertext.hidden = 1,
				delete dimmertext.dataset.i18n,
				innerhtml(dimmertext, '');
			doc.scrollingElement.style.overflow = zindex ? 'hidden' : '';
			translate.update(dimmer);
		},
		statusbarpadding: function (yes) { 
			if (yes) {
				statusbarpadding.hidden = 0;
				statusbarshadow.hidden = 0;
			} else {
				statusbarpadding.hidden = 1;
				statusbarshadow.hidden = 1;
			}
		},
		status_bar_padding: function (yes) {
			this.statusbarpadding(yes);
		},
		transparency: function (yes) {
			yes = yes === undefined ? preferences && preferences.get(23, 1) : yes;
			if (yes ) {
				doc.body.dataset.transparency = 1;
			} else {
				delete doc.body.dataset.transparency;
			}
		},
		textsize: function (yes) {
			yes = yes === undefined ? preferences && preferences.get(9, 1) : yes;
			if (yes ) {
				doc.body.dataset.largetext = 1;
			} else {
				delete doc.body.dataset.largetext;
			}
		},
		bixraaj: function (isal) { 
			if (isal) isalbixraaj = 1;
			else isalbixraaj = 0;
		},
		exit: function () {
			if (isalbixraaj) {
				if ( confirm(xlate('sure')) ) close();
			} else close();
		},
		icons: function () {
			var elements = doc.body.querySelectorAll('[data-icon]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.icon ) {
					var e = icons.querySelector('#'+elements[i].dataset.icon);
					if (e)
						elements[i].innerHTML = '<svg viewBox="0 0 48 48">'+e.cloneNode(1).innerHTML+'</svg>';
				}
			}
		},
		uponresize: function () {
			$.taxeer('webappresize', function () {
				if (innerwidth() <= 320) {
					setdata(bod, 'aqil', 1);
				} else {
					popdata(bod, 'aqil');
				}
				if (innerwidth() > 320 && innerwidth() <= 640) {
					setdata(bod, 'qaleel', 1);
				} else {
					popdata(bod, 'qaleel');
				}
				if (innerwidth() > 320) {
					setdata(bod, 'qaleelah', 1);
				} else {
					popdata(bod, 'qaleelah');
				}
				if (innerwidth() > 640 && innerwidth() <= 800) {
					setdata(bod, 'wast', 1);
				} else {
					popdata(bod, 'wast');
				}
				if (innerwidth() > 640) {
					setdata(bod, 'wastah', 1);
				} else {
					popdata(bod, 'wastah');
				}
			}, 100);
			if (innerheight() <= 480) doc.body.dataset.keyboardopen = 1;
			else delete doc.body.dataset.keyboardopen;
		},
	};
	function on_scroll() {
		var height = tallscreenpadding.offsetHeight * .75;
		var percent = doc.scrollingElement.scrollTop / height;
		if (percent > 1 || Webapp.is_minimal()) {
			percent = 1;
			ixtaf(tallheaderui);
		} else {
			izhar(tallheaderui);
		}
		headerui.style.opacity = percent;
		tallheaderui.style.opacity = 1 - percent;
		tallheaderui.style.paddingTop = (12 * (1-percent))+'vh';
	}
	Webapp.header_sticky = function (yes) {
		if (yes) setdata(headerui, 'sticky', 1);
		else popdata(headerui, 'sticky');
	};
	var home_views = ['main'];
	Webapp.get_home_views = function () {
		return home_views.concat([]);
	};
	Webapp.add_home_view = function (name) {
		if (isarr(name)) {
			name.forEach(function (o) {
				Webapp.add_home_view(o)
			});
		} else if (!home_views.includes(name)) {
			home_views.push(name);
		}
	};
	Webapp.remove_home_view = function (name) {
		home_views.splice( home_views.indexOf(name), 1 );
	};
	Webapp.is_at_home = function () {
		return backstack.darajah === 0 && view.is_active( home_views );
	};
	Webapp.ask_on_exit = webapp.bixraaj;
	Webapp.itlaa3 = function (text, time) {
		var element = itlaa3.firstElementChild;
		if (text) {
			if (text instanceof Array) {
				element.dataset.i18n = text[0];
				translate.update(itlaa3);
			} else {
				delete element.dataset.i18n,
				element.innerText = text;
			}
			itlaa3.hidden = 0;
			$.taxeer('itlaa3', function () {
				webapp.itlaa3();
			}, time||3000);
		} else {
			delete element.dataset.i18n,
			element.innerText = '',
			itlaa3.hidden = 1;
		}
	};
	Webapp.status = webapp.itlaa3;
	var minimal_views = [];
	Webapp.get_minimal_views = function () {
		return minimal_views.concat([]);
	};
	Webapp.add_minimal_view = function (name) {
		if (isarr(name)) {
			name.forEach(function (o) {
				Webapp.add_minimal_view(o)
			});
		} else if (!minimal_views.includes(name)) {
			minimal_views.push(name);
		}
	};
	Webapp.remove_minimal_view = function (name) {
		minimal_views.splice( minimal_views.indexOf(name), 1 );
	};
	Webapp.is_minimal = function () {
		return view.is_active( minimal_views );
	};
	Hooks.set('viewready', function (args) {
		if (Webapp.is_minimal()) {
			setdata(bod, 'minimal', 1);
		} else {
			popdata(bod, 'minimal', 1);
		}
		on_scroll();
	});
	listener('dragover', function (e) {
		setdata(bod, 'tahweem', 1);
		preventdefault(e);
		return false;
	});
	listener('dragleave', function (e) {
		$.taxeer('dragleave', function () {
			popdata(bod, 'tahweem');
		}, 3000);
		preventdefault(e);
		return false;
	});
	listener('drop', function (e) {
		popdata(bod, 'tahweem');
		preventdefault(e);
		var f = e.dataTransfer.files;
		if (f && f.length) {
			Hooks.run('huboot', f);
		}
		Hooks.run('dropped', e.dataTransfer);
		return false;
	});
	listener('resize', function () {
		webapp.uponresize();
	});
	listener('contextmenu', function (e) {
		var yes = Hooks.rununtilconsumed('contextmenu', e);
		if (yes && e) preventdefault(e);
	});
	listener('scroll', function (e) {
		Hooks.run('scroll', doc.scrollingElement.scrollTop);
		on_scroll();
	});
	listener('scrollend', function (e) {
		Hooks.run('scrollend', doc.scrollingElement.scrollTop);
		return;
		var offset_height = tallscreenpadding.offsetHeight;
		var height = offset_height * .75;
		var percent = doc.scrollingElement.scrollTop / height;
		if (percent >= 0.4 && percent < 1.6) {
			doc.scrollingElement.scrollTop = 1 * offset_height;
		} else if (percent > 0.1 && percent < 0.4) {
			doc.scrollingElement.scrollTop = 0;
		}
	});
	listener('keyup', function (e) {
		Hooks.rununtilconsumed('keyup', e);
	});
	listener('keydown', function (e) {
		Hooks.rununtilconsumed('keydown', e);
	});
	listener('load', function (e) {
		header_keys = templates.keys(headerui);
		tall_header_keys = templates.keys(tallheaderui);
		webapp.header( xlate(appname) );
		xlate.update();
		time && time.start();
		webapp.icons();
		webapp.uponresize();
		view.fahras();
		setupforms();
		doc.title = 'Dewaan';
		if (Offline && Offline.init) {
			Offline.init(function () {
				Hooks.run('ready', 1);
				backstack.main();
				loadingbox.hidden = 1;
			});
		}
		else {
			Hooks.run('ready', 1);
			$.taxeer('loadingbox', function () {
				loadingbox.hidden = 1;
			});
			backstack.main();
		}
		$.taxeer('on_scroll', function () {
			on_scroll();
		}, 10);
		doc.addEventListener('visibilitychange', function () {
			if (doc.visibilityState === 'visible') {
				webapp.visible = 1;
				Hooks.run('visible');
			} else {
				webapp.visible = 0;
				Hooks.run('hidden');
			}
		});
		Hooks.run('visible');
	});
})();
var scrollingelement = function () {
	var darajah = backstack.darajah;
	if ([0, 1].includes(darajah)) {
		return document.scrollingElement;
	}
	if (darajah === 2) {
		return sheetui;
	}
	if (darajah === 3) {
		return dialogui;
	}
};
var datepicker = datepicker || 0;
;(function(){
	Webapp.taht3nsar = function (text, time, taht) { 
		taht = document.activeElement || taht;
		var element = taht3nsar.firstElementChild;
		if (text) {
			if (text instanceof Array) {
				element.dataset.i18n = text[0];
				translate.update(taht3nsar);
			} else {
				delete element.dataset.i18n,
				element.innerText = text;
			}
			taht3nsar.hidden = 0;
			if (taht) {
				var pos = getposition(taht);
				setcss(taht3nsar, 'top', (pos[1]-20)+'px');
				if (taht.dir == 'rtl') {
					setcss(taht3nsar, 'right');
					setcss(taht3nsar, 'left', pos[0]+'px');
				} else {
					setcss(taht3nsar, 'left');
					setcss(taht3nsar, 'right', innerwidth()-pos[0]-taht.offsetWidth+'px');
				}
			}
			$.taxeer('taht3nsar', function () {
				webapp.taht3nsar();
			}, time||3000);
		} else {
			delete element.dataset.i18n,
			element.innerText = '',
			taht3nsar.hidden = 1;
		}
	};
	Webapp.scrollto = function (element) {
		var se = scrollingelement();
		se.scrollTop = 0 + (element ? element.offsetTop - (se.clientHeight / 4) : 0);
	};
	Webapp.scrolltotop = function () {
		var se = scrollingelement();
		se.scrollTop = 0;
	};
	Webapp.scrolltobottom = function () {
		var se = scrollingelement();
		se.scrollTop = se.scrollHeight - se.clientHeight;
		return se.scrollTop;
	};
	Webapp.isatop = function () {
		var se = scrollingelement();
		return Math.floor(se.scrollTop) === 0;
	};
	Webapp.isatbottom = function () {
		var se = scrollingelement();
		return Math.floor(se.scrollTop) === se.scrollHeight - se.clientHeight;
	};
	Hooks.set('closeall', function (level) {
		if (level === 3) {
			datepicker && datepicker.hide();
			dialog.hide();
			Webapp.blur();
		}
		if (level === 2) sheet.hide(), Webapp.blur();
		if (level === 1) view.get('main'), Webapp.blur();
		if (level === 0)
			Webapp.status( translate('exiting') ),
			$.taxeer('exit', function () {
				Webapp.exit();
			});
	});
	Hooks.set('restore', function (level) {
		if (level === 3) Webapp.dimmer(600);
		if (level === 2) Webapp.dimmer(400);
		if (level === 1) Webapp.dimmer();
		if (level === 0) Webapp.header(), Webapp.dimmer();
	});
	Hooks.set('backstackdialog', function (args) {
		var date = 0;
		if (datepicker && args instanceof HTMLElement) date = 1;
		webapp.dimmer(600);
		Softkeys.clear();
		Softkeys.add({ k: K.sl,
			i: 'icondone',
			c: function () {
				if (date) datepicker.okay && datepicker.okay(args);
				else dialog.okay && dialog.okay();
			}
		});
		Softkeys.add({ k: K.sr,
			i: 'iconclose',
			c: function () {
				if (date) datepicker.cancel && datepicker.cancel();
				else dialog.cancel && dialog.cancel();
			}
		});
		if (date) datepicker.show(args);
		else dialog.show(args);
	});
	Hooks.set('backstacksheet', function (args) {
		webapp.dimmer(400);
		softkeys.clear();
		if (args.callback || args.c) {
			softkeys.set(K.sl, function () {
				sheet.okay && sheet.okay();
			}, 0, 'icondone');
		}
		softkeys.set(K.sr, function () {
			sheet.cancel && sheet.cancel();
		}, 0, 'iconarrowback');
		sheet.show(args);
		softkeys.showhints();
	});
	Hooks.set('backstackview', function (name) {
		Webapp.dimmer();
		Softkeys.clear();
		Softkeys.P.empty();
		Softkeys.set(K.sr, function () {
			Hooks.run('back');
		}, 0, 'iconarrowback');
		View.run(name);
		Softkeys.showhints();
		return 1; 
	});
	Hooks.set('backstackmain', function (name) {
		Softkeys.clear();
		Softkeys.P.empty();
		View.run('main');
	});
	Hooks.set('ready', function () {
		settings.adaaf('animations', function () {
			var animationsoff = preferences.get(15, 1);
			if (animationsoff) {
				delete document.body.dataset.animations;
				setcss(document.firstElementChild, 'scrollBehavior');
			}
			else {
				document.body.dataset.animations = 1;
				setcss(document.firstElementChild, 'scrollBehavior', 'smooth');
			}
			return [animationsoff ? 'off' : 'on'];
		}, function () {
			if (preferences.get(15, 1)) {
				preferences.set(15, 0);
			}
			else {
				preferences.set(15, 1);
			}
		}, 'iconplayarrow');
	});
})();
;(function(){
	dimmer.onclick = function () {
		if (dimmertext.innerText == '') {
			Backstack.back();
		}
	};
	 
	 
})();
function url_content_to_data_uri(url){
	return fetch(url)
			.then( response => response.blob() )
			.then( blob => new Promise( callback =>{
				let reader = new FileReader() ;
				reader.onload = function(){ callback(this.result) } ;
				reader.readAsDataURL(blob) ;
			}) ) ;
}
;(function(){
	var notify_softkey = { n: 'Enable Notifications',
		k: 'n',
		first: 1, 
		alt: 1,
		ctrl: 1,
		i: 'iconnotifications',
		c: function (k, e) {
			Webapp.notify({
				tag: 'test',
				title: 'Test Notification',
				body: 'If you can see this, then notifications work!',
				badge: '/e.png',
				icon: '/e.png',
				renotify: 1,
				requireInteraction: 1,
			});
			e && e.preventDefault();
		}
	};
	listener('notificationclick', function (e) {
		$.log( e );
	});
	function send_notification(options) {
		var notification = new Notification(options.title, options);
		$.log( notification );
	};
	Webapp.notify = function (options) { 
		if (!('Notification' in window)) {
			Webapp.status( 'This browser does not support notifications' );
		} else if (Notification.permission == 'granted') {
			send_notification( options );
		} else if (Notification.permission != 'denied') {
			Notification.requestPermission().then((permission) => {
				if (permission == 'granted') {
					send_notification( options );
				}
			});
		}
	};
	Hooks.set('viewready', function () {
		if (backstack.darajah == 0) {
			softkeys.add(notify_softkey);
		}
	});
})();
var Sidebar;
;(function(){
	var sidebar_list, debug_sidebar = 1;
	Sidebar = {
		set: function (options) { if (sidebar_list) {
			if (debug_sidebar) $.log.w( 'Sidebar.set', options.uid );
			sidebar_list.set(options);
		} },
		get: function (theme, key) {
		},
		remove: function (uid) {
			sidebar_list.pop(uid);
		},
		open: function () {
			if (innerwidth() > 1024) {
			} else {
				open_list_sheet('Menu', function (l) {
					l.uponclick = function (o) {
						backstack.back();
						$.taxeer('after_sidebar_sheet', function () {
							sidebar_list.uponclick(o);
						}, 20);
					};
					sidebar_list.adapter.each(function (o) {
						o = shallowcopy(o);
						delete o.id_dom;
						o.value = o.count;
						l.set(o);
					});
				});
			}
		},
		choose: function (uid) { 
			sidebar_list.select_by_uid( uid, 1, 1, 1 );
		},
	};
	var sidebar_softkey = { n: 'Sidebar',
		k: 'contextmenu',
		last: 1,
		ctrl: 1,
		i: 'iconmenu',
		c: function (k, e) {
			Sidebar.open();
			e && e.preventDefault();
		}
	};
	function set_sidebar_softkey() {
		softkeys.add( sidebar_softkey );
	}
	listener('resize', function () {
		$.taxeer('sidebar-softkey', function () {
			if (innerwidth() > 1024) {
				if (sidebar_softkey.uid)
					softkeys.remove( sidebar_softkey.uid );
			} else {
				softkeys.add( sidebar_softkey );
			}
		});
	});
	Hooks.set('ready', function () {
		sidebar_list = List( templates.keys(sidebarui).list ).idprefix('sdbr')
						.listitem('sidebar_item');
		sidebar_list.after_set = function (o, c, k) {
			if (o.count) izhar(k.count_tag); else ixtaf(k.count_tag);
		};
		sidebar_list.onpress = function (o) {
			sidebar_list.uponclick( o );
		};
		sidebar_list.uponclick = function (o) {
			sidebar_list.select_by_uid( o.uid, 1, 1, 1 );
			var name = o.uid;
			Hooks.run('view', name);
			if (get_global_object().Pager) Pager.choose(name);
		};
	});
	Hooks.set('viewready', function (args) {
		if (Backstack.darajah <= 1 && innerwidth() <= 1024) {
			set_sidebar_softkey();
		}
	});
	Hooks.set('restore', function (args) {
		if (Backstack.darajah <= 1 && innerwidth() <= 1024) {
			set_sidebar_softkey();
		}
	});
})();
 
var Network, network, sessions = sessions || 0;
;(function(){
	'use strict';
	var
		address = location.protocol + '//' + location.host + location.pathname,
		buildexpired = false, offlinetime,
		networkkeys, debug_network = 1;
	var error_log = function (v) { $.log( v ); };
	var has_disconnected = function (res) {
		if (!res.err)
			setnetwork(1);
		else if (res.err === -300 || res.err > 300)
			setnetwork();
	};
	var setnetwork = function (on) {
		if (on) {
			if (offlinetime !== false) {
				offlinetime = false;
				preferences.pop('@0');
				Hooks.run('connection', true); 
				$.taxeercancel('networkconnection');
			}
			setnotifybar();
		} else {
			if (offlinetime === false) {
				offlinetime = new Date().getTime();
				preferences.set('@0', offlinetime);
				Hooks.run('connection', offlinetime); 
				$.taxeer('networkconnection', function () {
					if (sessions) Network.get('network', 'connection');
				}, 15*1000);
			}
			setnotifybar( 'offlinesince' , offlinetime || '');
		}
	};
	var setnotifybar = function (v, t) {
		if (v) {
			$.taxeer('setnotifybar', function () {
				setdata(networkkeys.topic, 'i18n', v);
				setdata(networkkeys.time, 'time', t);
				time(networkui);
				xlate.update(networkui);
			}, t);
			networkui.hidden = 0;
		} else {
			networkui.hidden = 1;
		}
	};
	var sizeunits = function (num) {
		if (isnum( num )) {
			if (num >= (1024 * 1024 * 1024 * 1024))
				return (num / (1024 * 1024 * 1024 * 1024)).toFixed(1) + 'TB';
			if (num >= (1024 * 1024 * 1024))
				return (num / (1024 * 1024 * 1024)).toFixed(1) + 'GB';
			if (num >= (1024 * 1024))
				return (num / (1024 * 1024)).toFixed(1) + 'MB';
			if (num >= 1024)
				return (num / 1024).toFixed() + 'KB';
		}
		return '0';
	}
	var progressfn = function (loaded, total) {
		if (total > 4 * 1024) {
			var percentage = sizeunits(loaded) +' / '+ sizeunits(total) +', '
							+ (((loaded / total) * 100).toFixed() || 0) + '%';
			webapp.status( percentage );
		}
	};
	var has_build_expired = function (response) {
		if (response.e$) {
			buildexpired = 1;
			window.caches.delete('def').then(function(del) {
				webapp.dimmer(LAYERTOPMOST, xlate('appneedsreload'));
			});
			broadcast_finish();
			$.fetchcancel( 'get' );
			$.fetchcancel( 'sync' );
		}
	};
	var handle_response = function (response) {
		if (response.upload)
		for (var name in response.upload) {
			if (network.channels.upload[name]) {
				var needs = response.upload[name];
				for (var need in needs) {
					if (isfun( network.channels.upload[name][need] )) {
						network.channels.upload[name][need](
							needs[need]
						);
					}
				}
			}
		}
		if (response.intercession)
		for (var name in response.intercession) {
			if (network.channels.intercession[name]) {
				var needs = response.intercession[name];
				for (var need in needs) {
					if (isfun( network.channels.intercession[name][need] )) {
						network.channels.intercession[name][need](
							needs[need]
						);
					}
				}
			}
		}
		if (response.get) {
			for (var name in response.get) {
				if (network.channels.get[name]) {
					var needs = response.get[name];
					for (var need in needs) {
						if (typeof network.channels.get[name][need] == 'function') {
							network.channels.get[name][need](
								needs[need]
							);
						}
					}
				}
			}
			Hooks.run('responseget', response.sync);
		}
		if (response.sync) {
			for (var name in response.sync) {
				if (network.channels.sync[name]) {
					var needs = response.sync[name];
					for (var need in needs) {
						if (typeof network.channels.sync[name][need] == 'function') {
							network.channels.sync[name][need](
								needs[need]
							);
						}
					}
				}
			}
			Hooks.run('responsesync', response.sync);
		}
	};
	var cachedkey, broadcast_state = 0, broadcast_delay = 500;
	var broadcast_process = function (payload, intercession) {
		if (!cachedkey || !broadcast_state) return;
		if ($.fetchchannels.broadcast
		&& $.fetchchannels.broadcast.active) return;
		payload = payload || {};
		payload = Object.assign(payload, {
			broadcast : 1 , 
			e$ : 1108 , 
		});
		if (intercession) payload = Object.assign(payload, intercession);
		error_log(payload);
		$.fetch( address, 'json='+enc( JSON.stringify(payload) ), 'broadcast', progressfn, 3*60*1000 )
		.then(function (res) {
			if (res.err) {
				broadcast_delay = 4 * 15 * 1000; 
			} else {
				has_disconnected(res);
				var response = {};
				try {
					response = JSON.parse( (res||{}).body );
				} catch (e) {
					response.broadcast = 1;
					response.error = 1;
				}
				if (!response.error) broadcast_delay = 500;
				if (has_build_expired(response)) return;
				handle_response(response);
			}
			$.taxeer('networkbroadcast', function () {
				intercession_process(function (objects) {
					broadcast_process({}, objects);
				}, 'broadcast');
			}, broadcast_delay);
		});
	};
	var broadcast_start = function () {
		$.taxeer('broadcast_start', function () {
			broadcast_state = 1;
			intercession_process(function (objects) {
				broadcast_process({}, objects);
			}, 'broadcast');
		}, 1000);
	};
	var broadcast_finish = function () {
		broadcast_state = 0;
		$.fetchcancel('broadcast');
	};
	var pending_gets = {}; 
	var fulfill_gets = function (payload, intercession) { 
		if (Object.keys(pending_gets).length === 0) return;
		payload = payload || {};
		payload = Object.assign(payload, {
			e$ : 1108 , 
		});
		if (intercession) payload = Object.assign(payload, intercession);
		payload.get = payload.get || {};
		for (var i in pending_gets) {
			var m = pending_gets[i] ,
				name = m[0] ,
				need = m[1] ,
				value = m[2] ;
			payload.get[name] = payload.get[name] || {};
			payload.get[name][need] = value;
		}
		error_log(payload);
		$.fetch( address, 'json='+enc( JSON.stringify(payload) ), 'get', progressfn, 30*1000 )
		.then(function (res) {
			has_disconnected(res);
			var response = {};
			try {
				response = JSON.parse( (res||{}).body );
			} catch (e) {
				response.get = 1;
				response.error = 1;
			}
			if (has_build_expired(response)) return;
			handle_response(response);
		});
		pending_gets = {};
	};
	var intercession = {}; 
	var intercession_process = function (callback, channel) {
		var j = 0, arr = Object.keys(intercession);
		if (arr.length === 0) {
			callback();
			return;
		}
		var q = $.queue(), objects = { intercession: {} };
		for (var i in intercession) {
			q.set(function (done) {
				var o = intercession[ arr[j] ];
				o[2](function (object) {
					if (object !== undefined) {
						objects.intercession[ o[0] ] = objects.intercession[ o[0] ] || {};
						objects.intercession[ o[0] ][ o[1] ] = object;
					}
					j++;
					done(q);
				}, channel);
			});
		}
		q.run(function () {
			callback && callback(objects);
		});
	};
	var synced = {};
	var sync_process = function (payload, intercession) {
		if (Object.keys(synced).length === 0) return;
		payload = payload || {};
		payload = Object.assign(payload, {
			e$ : 1108 , 
		});
		if (intercession) payload = Object.assign(payload, intercession);
		payload.sync = payload.sync || {};
		for (var i in synced) {
			var m = synced[i] ,
				name = m[0] ,
				need = m[1] ,
				value = m[2] ;
			payload.sync[name] = payload.sync[name] || {};
			payload.sync[name][need] = value;
		}
		error_log(payload);
		$.fetch( address, 'json='+enc( JSON.stringify(payload) ), 'sync', progressfn, 30*1000 )
		.then(function (res) {
			has_disconnected(res);
			var response = {};
			try {
				response = JSON.parse( (res||{}).body );
			} catch (e) {
				response.sync = 1;
				response.error = 1;
			}
			if (has_build_expired(response)) return;
			handle_response(response);
		});
		synced = {};
	};
	var upload = function (name, need, value, payload_raw, intercession) {
		var payload = {};
		payload = Object.assign(payload, {
			e$ : 1108 , 
		});
		if (intercession) payload = Object.assign(payload, intercession);
		payload.upload = {};
		payload.upload[name] = {};
		payload.upload[name][need] = value;
		var fd = new FormData();
		fd.append('json', JSON.stringify(payload) );
		fd.append('upload', payload_raw);
		fetch(address, { method: 'post', body: fd }).then(function (res) {
			has_disconnected(res);
			res.json().then(function (response) {
				if (has_build_expired(response)) return;
				handle_response(response);
			});
		});
	};
	Network = network = {
		address: address,
		channels: {
			get: {},
			sync: {},
			intercession: {},
			upload: {},
		},
		upload: function (name, need, value, payload) {
			if (!name) return;
			if (!payload) return;
			need = need || 'default' ; 
			value = value || 0 ;
			intercession_process(function (objects) {
				upload(name, need, value, payload, objects);
			}, 'upload');
		},
		broadcast: function () {
			if (cachedkey) {
				broadcast_start();
			} else {
				broadcast_finish();
			}
		},
		sync: function (name, need, value) {
			if (debug_network) $.log.w('Network.sync', name, need, value);
			name = name || 'sync' ;
			need = need || 'default' ; 
			value = value || 0 ;
			synced[ name+'.'+need ] = [name, need, value];
			$.taxeer('networksync', function () {
				intercession_process(function (objects) {
					sync_process({}, objects);
				}, 'sync');
			}, 100);
		},
		get: function (name, need, value) { 
			if (!name) return;
			if (arguments.length === 2) value = need, need = 0;
			need = need || 'default' ; 
			value = value || 0 ;
			pending_gets[ name+'.'+need ] = [name, need, value];
			$.taxeer('networkfulfill', function () {
				intercession_process(function (objects) {
					fulfill_gets({}, objects);
				}, 'get');
			}, 100);
		},
		response: {
			get: function (name, need, cb) {
				if (typeof need == 'function') cb = need, need = 0;
				need = need || 'default';
				network.channels.get[ name ] = network.channels.get[ name ] || {};
				network.channels.get[ name ][ need ] = cb;
			},
			sync: function (name, need, cb) {
				if (typeof need == 'function') cb = need, need = 0;
				need = need || 'default';
				network.channels.sync[ name ] = network.channels.sync[ name ] || {};
				network.channels.sync[ name ][ need ] = cb;
			},
			intercept: function (name, need, cb) {
				if (typeof need == 'function') cb = need, need = 0;
				need = need || 'default';
				network.channels.intercession[ name ] = network.channels.intercession[ name ] || {};
				network.channels.intercession[ name ][ need ] = cb;
			},
			upload: function (name, need, cb) {
				if (typeof need == 'function') cb = need, need = 0;
				need = need || 'default';
				network.channels.upload[ name ] = network.channels.upload[ name ] || {};
				network.channels.upload[ name ][ need ] = cb;
			},
		},
		intercept: function (name, need, cb) { 
			if (typeof need == 'function') cb = need, need = 0;
			need = need || 'default' ; 
			intercession[ name+'.'+need ] = [name, need, cb];
		},
	};
	 
	Hooks.set('sessionchange', function (key) {
		cachedkey = key || 0;
		if (cachedkey) {
			network.broadcast();
			network.sync('network');
		}
	});
	Hooks.set('ready', function () {
		networkkeys = templates.keys(networkui);
		network.intercept('network', 'time', function (finish, channel) {
			finish( preferences.get('@') );
		});
		network.response.intercept('network', 'time', function (response) {
			if (response && cachedkey) preferences.set('@', response);
		});
		offlinetime = preferences.get('@0', 1) || false; 
		listener('online', function (e) {
			setnetwork(1);
		});
		listener('offline', function (e) {
			setnetwork();
		});
		if (sessions) {
			cachedkey = sessions.signedin() || 0;
			if (cachedkey) {
				network.broadcast();
				network.sync('network');
			}
		}
	});
})();
;(function(){
	var manifest_list;
	var sheet_name = 'Manifest';
	var fields = {
		name: 'App Name',
		short_name: 'Short Name',
		description: 'Description',
	};
	Hooks.set('ready', function () {
		Settings.adaaf(sheet_name, 0, function () {
			open_list_sheet(sheet_name, function (l) {
				manifest_list = l;
				softkeys.list.basic(l);
				l.before_set = function (o) {
					o.title = fields[o.name];
					return o;
				};
				l.onpress = function (o) {
					Hooks.run('dialog', {
						x: 2048,
						c: function (new_value) {
							o.value = new_value;
							l.set(o);
						},
						m: fields[o.name],
						a: o.value,
						q: fields[o.name]
					});
				};
				for (var i in fields) {
					manifest_list.set({
						uid: i,
						name: i,
					});
				}
				Network.get('manifest', 'read', 1);
			}, function (l) {
				l.adapter.each(function (o) {
					$.log( o.name, o.value );
				});
			});
		}, 'iconsettings');
	});
	Network.response.get('manifest', 'read', function (response) {
		if (manifest_list && response && sheet.get_active_title() == sheet_name) {
			for (var i in response) {
				manifest_list.set({
					uid: i,
					name: i,
					value: response[i],
				});
			}
			manifest_list.select(0);
		}
	});
})();
 
var List, list;
;(function(){
	'use strict';
	var direction = function () { return document.body.dir; };
	var proto = {
		_muntahaabox: 0,
		_muntahaa: -1,
		murakkaz: 0,
		adapter: 0,
		 
		beforeset: 0,
		before_set: 0,
		beforepop: 0,
		uponpastend: function () {
			var yes = focusnext(this.element);
			if (yes && yes.listobject) softkeys.list.basic(yes.listobject);
			return yes;
		},
		uponpaststart: function () {
			var yes = focusprev(this.element);
			if (yes && yes.listobject) softkeys.list.basic(yes.listobject);
			return yes;
		},
		uponend: 0, 
		uponstart: 0,
		bintixaab: 0, 
		uponintaxab: 0, 
		on_selection: 0, 
		uponnavi: 0, 
		_scroll_on_focus: 1,
		scroll_on_focus: function (yes) {
			this._scroll_on_focus = yes;
			return this;
		},
		moveup: function (uid) {
			uid = uid || (this.axavmuntaxab()||{}).uid;
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				var prev = clone.previousElementSibling;
				if (prev) {
					var prevuid = prev.dataset.uid;
					var obj = this.adapter.get(uid);
					var prevobj = this.adapter.get(prevuid);
					if (obj && prevobj) {
						this.adapter.eawwad(prevuid, uid);
						this.keys.items.insertBefore(clone, prev);
						if (this.gridnum > 1) this.left();
						else this.up();
					}
				}
			}
		},
		movedown: function (uid) {
			uid = uid || (this.axavmuntaxab()||{}).uid;
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				var next = clone.nextElementSibling;
				if (next) {
					var nextuid = next.dataset.uid;
					var obj = this.adapter.get(uid);
					var nextobj = this.adapter.get(nextuid);
					if (obj && nextobj) {
						this.adapter.eawwad(nextuid, uid);
						this.keys.items.insertBefore(next, clone);
						if (this.gridnum > 1) this.right();
						else this.down();
					}
				}
			}
		},
		ixtaf: function () {
			this.element.hidden = 1;
			this.element.parentElement.hidden = 1;
		},
		izhar: function () {
			this.element.hidden = 0;
			this.element.parentElement.hidden = 0;
		},
		uponrakkaz: function (v, active) { 
			if (v && active) softkeys.list.basic(this);
		},
		rakkaz: function (v, active) { 
			if (this._prevent_focus) return;
			var yes;
			this.murakkaz = !!v;
			if (v && !this.element.dataset.focussed) this.element.dataset.focussed = 1, yes = 1;
			else if (!v && this.element.dataset.focussed) delete this.element.dataset.focussed, yes = 1;
			(yes || active) && this.uponrakkaz && this.uponrakkaz(v, active);
		},
		 
		first: function (select) {
			this.selected = select === undefined ? -1 : select;
			var item = this.get(++this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected)
				}
			}
			this.intaxabscroll( this.intaxabsaamitan() );
			return this;
		},
		last: function () {
			this.selected = this.length();
			var item = this.get(--this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(--this.selected)
				}
			}
			this.intaxabscroll( this.intaxabsaamitan() );
			return this;
		},
		message: function (msg) {
			if (msg) {
				this.keys.message.dataset.i18n = msg;
				this.keys.message.parentElement.hidden = 0;
				this.keys.items.hidden = 1;
			} else {
				delete this.keys.message.dataset.i18n;
				this.keys.message.innerText = '';
				this.keys.message.parentElement.hidden = 1;
				this.keys.items.hidden = 0;
			}
			translate.update();
		},
		left: function (e, fake) {
			if (!fake && direction() === 'rtl') return this.right(e, 1);
			var delta = this.gridnum ? 1 : 10;
			this.selected -= delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected);
				}
			}
			if (this.selected < 0)
				this.first();
			else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		up: function (e) {
			this.selectedold = this.selected;
			var delta = this.gridnum ? this.gridnum : 1;
			this.selected -= delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(--this.selected)
				}
			}
			if (this.selected < 0) {
				var yes;
				if (this.uponpaststart)
					yes = this.uponpaststart(this.selectedold);
				if (yes) {
					this.selected = 0;
					this.intaxabscroll( this.intaxabsaamitan() );
				}
				else this.last();
			} else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		length: function () {
			if (isfun(this.uponlength)) 
				return this.uponlength();
			return this.keys.items.children.length;
		},
		down: function (e) {
			this.selectedold = this.selected;
			var delta = this.gridnum ? this.gridnum : 1;
			this.selected += delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected)
				}
			}
			if (this.selected > this.length()-1) {
				this.selected = this.length()-1;
				var yes;
				if (this.uponpastend)
					yes = this.uponpastend(this.selectedold);
				if (yes) {
					this.selected = this.length()-1;
					this.intaxabscroll( this.intaxabsaamitan() );
				}
				else this.first(this.gridnum ? this.selected - this.length()-1 : -1);
			} else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		right: function (e, fake) {
			if (!fake && direction() === 'rtl') return this.left(e, 1);
			var delta = this.gridnum ? 1 : 10;
			this.selected += delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected);
				}
			}
			if (this.selected > this.length()-1)
				this.last();
			else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		baidaa: function (id, multiple) { 
			id = id === undefined ? this.selected : id;
			var items = this.keys.items.children, item;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (i == id) {
						if (multiple) {
							if (item.dataset.baidaa) delete item.dataset.baidaa;
						} else item.dataset.baidaa = 1;
					}
					else if (!multiple)
						delete item.dataset.baidaa;
				}
			}
			return item;
		},
		 
		select: function (id, noscroll, silent, nofocus) {
			id = id === undefined ? this.selected : id;
			var selected = this.intaxabsaamitan(id);
			if (!noscroll) this.intaxabscroll(selected);
			if (selected && !nofocus) {
				markooz() && markooz().blur();
				selected.focus();
				this.rakkaz(1, 1);
			}
			this.selected = id;
			if (this.uponselect && !silent) {
				selected = this.get(this.selected);
				if (selected) {
					selected = this.adapter.get( selected.dataset.uid );
					if (selected) this.uponselect(selected);
				}
			}
			return this;
		},
		select_by_uid: function (id, noscroll, silent, nofocus) {
			return this.select(this.id2num(id), noscroll, silent, nofocus);
		},
		intaxabscroll: function (selected) { 
			if (!this._scroll_on_focus) return;
			if (isundef(selected)) {
				selected = this.get( this.selected );
			}
			if (this.filmakaan) {
				if (selected) scrollintoview(selected);
			} else {
				if (this.selected === 0) webapp.scrollto();
				else if (selected) webapp.scrollto(selected);
			}
		},
		intaxabsaamitan: function (id) { 
			id = id === undefined ? this.selected : id;
			var items = this.keys.items.children, item, selected;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (i == id)
						item.dataset.selected = 1, selected = item;
					else
						delete item.dataset.selected;
				}
			}
			if (isfun(this.on_selection) && selected) {
				var a = this.adapter.get( selected.dataset.uid );
				if (a) this.on_selection(a);
			}
			return selected;
		},
		deselect: function () {
			var old = this.selected;
			this.selected = -1;
			this.intaxabsaamitan();
			this.selected = old;
			this.rakkaz();
			return this;
		},
		 
		mufarraq: function (pixels) {
		},
		eawwad: function (o, uid) { 
			var oldclone = this.get( this.id2num(uid) );
			if (oldclone) {
				var newclone = this.set(o);
				replacewith(oldclone, newclone);
				this.adapter.eawwad(uid, o.uid)
				this.adapter.pop(uid);
			}
		},
		set: function (o, id) { 
			 
			if (id) $.log('List.set, stop using id, use o.uid instead');
			o = o || {};
			var clone, LV = this, listitem = o._listitem || LV._listitem,
				parent = LV.keys.items,
				available_height = innerheight() - LV.element.offsetTop,
				actual_height = parent.offsetHeight;
			if (isnum(LV._muntahaa) && LV._muntahaa > -1 && LV.length() >= LV._muntahaa)
				return; 
			if (id === undefined)
				if (o.uid === undefined) {
					var newuid = LV.length();
					LV.adapter.each(function (c, e) {
						if (newuid <= c.uid) newuid = c.uid+1;
					});
					o.uid = id = newuid;
				}
				else id = o.uid;
			if (LV.idprefix_raw && o.uid !== undefined)
				o.id_dom = LV.idprefix_raw + o.uid;
			if (o.uid) {
				clone = elementbyid( o.id_dom || o.uid );
			}
			if (LV.idprefix_raw && o.ruid) {
				clone = elementbyid( LV.idprefix_raw + o.ruid );
				if (clone) {
					clone.id = o.id_dom;
					setdata(clone, 'uid', o.uid)
				}
			}
			if (LV.beforeset) o = LV.beforeset(o, o.uid); 
			if (LV.before_set) o = LV.before_set(o, o.uid); 
			if (o.ruid) {
				LV.adapter.pop(o.ruid);
				delete o.ruid;
			}
			LV.adapter.set(o.uid, o);
			if (LV._recycle) return; 
			if (!clone) {
				 
				var o2 = Object.assign({
					id: o.id_dom, 
					data: {
						uid: o.uid,
					},
				}, o);
				clone = templates.get(listitem, parent, o.before || o.awwal, o.id_dom || o.uid)(o2);
				delete o.before;
				delete o.awwal;
				clone.dataset.listitem = 1;
				if (o.mufarraq) clone.dataset.mufarraq = o.mufarraq;
			}
			else {
				var selected = clone.dataset.selected;
				var baidaa = clone.dataset.baidaa;
				templates.set( clone, o, listitem );
				if (selected) clone.dataset.selected = 1;
				if (baidaa) clone.dataset.baidaa = 1;
			}
			if (clone) {
				if (o.mu3allaq) setdata(clone, 'mu3allaq', 1);
				else popdata(clone, 'mu3allaq');
				clone.onclick = function (e) {
					var item = LV.adapter.get( o.uid );
					if (item) {
						LV.uponclick &&
						LV.uponclick( item, e, LV.id2num(o.uid) );
					}
				};
			}
			LV._katabmowdoo3();
			LV.afterset && LV.afterset( o, clone, templates.keys(clone) ); 
			LV.ba3dihi && LV.ba3dihi( o, clone, templates.keys(clone) ); 
			LV.after_set && LV.after_set( o, clone, templates.keys(clone) );
			LV.uponadaaf && LV.uponadaaf( LV.length() );
			return clone;
		},
		namoovaj: function (eansarism) { 
			this._listitem = eansarism || 'listitem';
			return this;
		},
		listitem: function (elementname) { 
			return this.namoovaj(elementname);
		},
		axavmfateeh: function (uid) { 
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				return templates.mfateeh(clone);
			}
		},
		get_item_keys: function (uid) { 
			return this.axavmfateeh(uid);
		},
		axavmuntaxab: function (uid) { 
			return this.axadmuntaxab(uid);
		},
		axadmuntaxab: function (uid) {
			uid = this.num2id( uid || this.selected || 0 );
			if (!isundef(uid)) {
				return this.adapter.get( uid );
			}
			return false;
		},
		axav: function () {
			return this.axad();
		},
		axad: function () { 
			var items = this.keys.items.children, item, baidaa;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (item.dataset.baidaa) {
						baidaa = item.dataset.uid;
						break;
					}
				}
			}
			if (!isundef(baidaa)) {
				return this.adapter.get( baidaa );
			}
			return false;
		},
		get_item_element: function (uid) {
			return this.get( isundef(uid) ? this.selected : uid );
		},
		get: function (id) {
			return this.keys.items.children[id];
		},
		pop: function (id) { 
			var element, LV = this, uid;
			if (isundef(id)) {
				element = LV.get(LV.selected);
			} else {
				if (LV.idprefix_raw) id = LV.idprefix_raw + id;
				element = elementbyid(id);
			}
			if (element) {
				uid = element.dataset.uid;
				LV.adapter.pop( uid );
				element.remove();
				if (LV.selected) {
					if (LV.selected == LV.length())
					LV.selected = LV.length()-1;
					else
					LV.selected = LV.selected-1;
				}
				LV.intaxabsaamitan();
				LV._katabmowdoo3();
				LV.uponhavaf && LV.uponhavaf( LV.length() );
			}
		},
		remove_by_uid: function (uid) { 
			return this.pop(uid);
		},
		popall: function () {
			this.adapter = $.array();
			innertext(this.keys.items, '');
			innertext(this._muntahaabox, '');
			this._katabmowdoo3();
		},
		remove_all: function () { 
			return this.popall();
		},
		press: function (key, force) {
			var element = this.get(this.selected);
			if (element) {
				var item = this.adapter.get( element.dataset.uid );
				if (item) {
					(this.element.dataset.focussed || force) &&
					this.onpress && this.onpress( item, key, this.selected );
				}
			}
			return this;
		},
		num2id: function (id) {
			var clone = this.get(id || this.selected);
			if (clone) return clone.dataset.uid;
			return false;
		},
		id2num: function (uid) { 
			var cn = this.keys.items.children;
			for (var i in cn) {
				if (cn.hasOwnProperty(i)) {
					if (cn[i].dataset.uid == uid) return i;
				}
			}
			return false;
		},
		grid: function (num) {
			this.gridnum = num;
			if (num) this.element.dataset.grid = num;
			else delete this.element.dataset.grid;
			return this;
		},
		zumrah: function (zumraat) {
			this.element.className = 'list '+zumraat;
			return this;
		},
		freeflow: function (v) {
			if (v) this.grid(), this.element.dataset.freeflow = 1;
			else delete this.element.dataset.freeflow;
			return this;
		},
		hidetext: function (num) {
			if (num) this.element.dataset.hidetext = num;
			else delete this.element.dataset.hidetext;
			return this;
		},
		muntahaa: function (max, muntahaabox) { 
			this._muntahaa = max || -1;
			this._muntahaabox = this.keys.miqyaas || this._muntahaabox;
			if (this._muntahaabox && max > -1) this.keys.miqyaas.hidden = 0;
			return this;
		},
		_katabmowdoo3: function () {
			var LV = this, len = LV.length();
			if (isnum(LV._muntahaa) && LV._muntahaa > -1) {
				innertext(LV._muntahaabox, len+' / '+ LV._muntahaa);
			}
			this.keys.raees.hidden = len ? 0 : 1;
			if (!this._mowdoo3) this.keys.raees.hidden = 1;
		},
		mowdoo3: function (m, i18n) { 
			this._mowdoo3 = m || 0;
			if (i18n)
				attribute(this.keys.mowdoo3list, 'data-i18n', m),
				xlate.update(this.element);
			else if (m)
				innertext(this.keys.mowdoo3list, m);
			this._katabmowdoo3();
			return this;
		},
		title: function (m, i18n) { 
			return this.mowdoo3(m, i18n);
		},
		set_scrolling_element: function () {
		},
		destroy: function () {
		},
		idprefix: function (id) {
			this.idprefix_raw = id;
			return this;
		},
		bahac: function (bahacbox) {
			var LV = this;
			 
			if (bahacbox instanceof HTMLInputElement) {
				LV.uponpaststart = function () {
					bahacbox.focus();
					return 1;
				};
				bahacbox.oninput = function () {
					$.taxeer('listbahac', function () {
						LV.uponbahac && LV.uponbahac( bahacbox.value.trim() )
					}, 250);
				};
				bahacbox.onfocus = function () {
					LV.rakkaz();
				};
			}
			return LV;
		},
	};
	proto.set_focus = proto.rakkaz;
	proto.highlight = proto.baidaa;
	proto.prevent_focus = function (yes) {
		this._prevent_focus = yes;
		return this;
	};
	List = list = function (element) { 
		var LV = Object.create(proto);
		element.dataset.focus = 'list';
		element.listobject = LV;
		LV.filmakaan = element.dataset.filmakaan;
		LV.element = templates.get( 'list', element )();
		LV.listitem();
		LV.adapter = $.array();
		LV.keys = templates.keys( LV.element );
		LV.selected = 0;
		LV.muntahaa();
		LV.title();
		 
		LV.uponclick = function (i, e, uid) {
			 
			LV.beforepress && LV.beforepress(i, e, uid);
			LV.intaxabsaamitan( uid ); 
			var yes = LV.selected == uid && LV.element.dataset.focussed == 1;
			LV.selected = uid;
			LV.rakkaz(1, 1);
			if (yes) LV.press(K.en);
		};
		return LV;
	};
})();
 
var Backstack, backstack;
;(function(){
	var s,
	storage = {
		3 : {}, 
		2 : {}, 
		1 : {}, 
		0 : {}, 
	},
	do_level = function () {
		var level = 0;
		if (s.dialog) level = 3;
		else if (s.sheet) level = 2;
		else if (s.view) level = 1;
		else level = 0;
		backstack.darajah = level;
		return level;
	},
	savefocus = function () { 
		backstack.set('backstackfocus', document.activeElement);
	},
	restorefocus = function () {
		var active = backstack.get('backstackfocus');
		active && active.focus && active.focus();
	};
	 
	Backstack = backstack = {
		darajah: 0,
		states: {
			dialog : 0, 
			sheet : 0, 
			view : 0, 
			main : 0, 
		},
		set: function (key, value) {
			storage[backstack.darajah][key] = value;
		},
		get: function (key) {
			if (key) return storage[backstack.darajah][key] ;
			else return storage[backstack.darajah] ;
		},
		dialog: function (args) {
			savefocus();
			s.dialog = args || 1;
			do_level();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstackdialog', args);
			Hooks.run('backstack', backstack.darajah);
		},
		sheet: function (args) {
			savefocus();
			s.sheet = args || 1;
			do_level();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstacksheet', args);
			Hooks.run('backstack', backstack.darajah);
		},
		view: function (args) {
			if (args == 'main') {
				s.view = 0;
				this.main(args);
				return;
			}
			savefocus();
			s.view = args;
			do_level();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstackview', args);
			Hooks.run('backstack', backstack.darajah);
		},
		main: function (args) {
			savefocus();
			s.main = args || 1;
			do_level();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstackmain', args);
			Hooks.run('backstack', backstack.darajah);
		},
		back: function () {
			 
			if (s.dialog)
				s.dialog = 0, do_level(), Hooks.run('closeall', 3);
			else if (s.sheet)
				s.sheet = 0, do_level(), Hooks.run('closeall', 2);
			else if (s.view)
				s.view = 0, s.main = 1, do_level(), Hooks.run('closeall', 1);
			else
				s.main = 0, do_level(), Hooks.run('closeall', 0);
			 
			Hooks.run('restore', backstack.darajah);
			Hooks.run('backstack', backstack.darajah);
			restorefocus();
		},
	};
	Hooks.set('back', function () {
		backstack.back();
	});
	Hooks.set('dialog', function (args) {
		backstack.dialog(args);
	});
	Hooks.set('sheet', function (args) {
		backstack.sheet(args);
	});
	Hooks.set('view', function (args) {
		backstack.view(args);
	});
	Hooks.set('main', function (args) {
		backstack.main(args);
	});
	s = backstack.states;
})();
var preferences;
;(function(){
	'use strict';
	 
	preferences = {
		popall: function () {
			return localStorage.clear();
		},
		set: function (name, value) {
			return localStorage.setItem(name, value);
		},
		get: function (name, json) {
			if (json) {
				try {
					return JSON.parse( localStorage.getItem(name) );
				} catch (ignore) {
				}
				return {};
			} else
				return localStorage.getItem(name);
		},
		pop: function (name) {
			return localStorage.removeItem(name);
		},
		 
		change: function (name, callback) {
			if (typeof callback === 'function') {
				var data;
				try {
					data = preferences.get(name);
					data = JSON.parse( data );
				} catch (ignore) {
				}
				if (!(data instanceof Object))
					data = {};
				data = callback(data);
				preferences.set(name, JSON.stringify( data ) );
			}
		},
	};
	var buildnum = preferences.get('#', 1);
	if ( buildnum != 1108 ) {
		preferences.pop(3); 
		preferences.pop('@'); 
		preferences.pop(4); 
		preferences.pop(6); 
	}
	preferences.set('#', 1108);
	Hooks.set('ready', function () {
		if ( buildnum != 1108 ) {
			$.taxeer('seeghahjadeedah', function () {
				Hooks.run('seeghahjadeedah', buildnum);
			}, 2000);
		}
	});
	$.log.s( 1108 );
})();
var activity;
;(function(){
	activity = {
		jaame3: function (name, type, key, value) { 
			if ('MozActivity' in window) {
				var data = {
					type: type,
				};
				data[key] = value;
				new MozActivity({
					name: name,
					data: data,
				});
			}
		},
		ittasal: function (num) { 
			if (num) activity.jaame3('dial', 'webtelephony/number', 'number', num);
		},
		arsal: function (num) { 
			if (num) activity.jaame3('new', 'websms/sms', 'number', num);
		},
		abrad: function (address) { 
			if (address) activity.jaame3('new', 'mail', 'url', 'mailto:'+address);
		},
	};
})();
var View, view;
;(function(){
	var index = {};
	View = view = {
		zaahir: function (name) { 
			return view.axav() === name;
		},
		is_active: function (name) {
			if (isarr(name)) {
				for (var i = 0; i < name.length; ++i) {
					if (this.zaahir(name[i])) return true;
				}
				return false;
			} else {
				return this.zaahir(name);
			}
		},
		mfateeh: function (name) { 
			var element = index[name];
			if (element) return templates.keys(element);
			return false;
		},
		ishtaghal: function (name) { 
			var level = backstack.level ,
				exists = view.get_element(name) ;
			if (isundef(exists)) {
				$.log.w('View not found: "'+name+'"');
			} else {
				var element = view.get(name) ,
					keys = templates.keys(element) ;
				Hooks.run('viewready', {
					name: name,
					element: element,
					keys: keys,
					level: level,
				});
			}
		},
		get_element: function (name) { 
			return this.get(name, 1);
		},
		axav: function (name, onlyelement) { 
			if (!name) {
				for (var i in index) {
					if (!index[i].hidden) {
						return i;
					}
				}
				return;
			}
			var view;
			for (var i in index) {
				if (i == name)
					view = index[i];
				else if (!onlyelement)
					index[i].hidden = 1;
			}
			if (view) {
				if (!onlyelement) view.hidden = 0;
				return view;
			}
		},
		axad: function (name, onlyelement) { 
			return view.axav(name, onlyelement);
		},
		fahras: function () { 
			var elements = document.body.querySelectorAll('[data-view]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.view ) {
					if (elements[i].dataset.view !== 'main')
						elements[i].hidden = 1;
					index[ elements[i].dataset.view ] = elements[i];
				}
			}
			return index;
		},
	};
	view.get = view.axav;
	view.run = view.ishtaghal;
	view.dom_keys = view.mfateeh;
})();
var Time, time;
;(function(){
	var val = {}, timeout, started,
		monthnames = ('january february march april may june july '
					+ 'august september october november december').split(' '),
		weekdays = 'sunday monday tuesday wednesday thursday friday saturday'.split(' ');
	Time = time = function (parent) {
		var items = (parent||document).querySelectorAll('[data-time]'),
			is24 = preferences.get(24, 1);
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dataset = e.dataset;
					var datetime = dataset.time;
					var by = dataset.by;
					datetime = parseInt(datetime);
					if (e.dataset.deadline) {
						if (time.now() < datetime)
							delete e.dataset.past, e.dataset.future = 1;
						else
							delete e.dataset.future, e.dataset.past = 1;
					} else
						delete e.dataset.future, delete e.dataset.past;
					if (by) {
						time.relativetime(0, items[i]);
					}
					else if (datetime !== '') {
						if (datetime !== 'false') {
							e.setAttribute('title',
								time.formatdate(
									new Date(datetime),
									'Do MMM YYYY, ' + (is24 ? 'HH:mm' : 'hh:mma')
								)
							);
						}
						e.innerHTML = time.relativetime(datetime, 0, e.dataset);
					}
				}
			}
		}
	};
	time.monthname = function (value) { 
		return monthnames[value];
	};
	time.miqdaar = function (delta, secondary) { 
		var fuzzy = '',
			minute = 60,
			hour = minute * 60,
			day = hour * 24,
			week = day * 7,
			month = day * 30,
			year = month * 12;
		if (delta < minute) {
			fuzzy = delta + ' ' + xlate('secondsago');
		}
		else if (delta < 2 * minute) {
			fuzzy = parsefloat(delta / minute, 1) + xlate('minute');
		}
		else if (delta < hour) {
			fuzzy = parsefloat(delta / minute, 1) + xlate('minutesago');
		}
		else if (Math.floor(delta / hour) == 1) {
			fuzzy = 1 + xlate('hourago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + parsefloat(mins, 1) + xlate('minutesago');
		}
		else if (delta < day) {
			fuzzy = Math.floor(delta / hour) + ' ' + xlate('hoursago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + mins + xlate('minutesago');
		}
		else if (delta >= day && delta < month) {
			var days = Math.floor(delta / day);
			fuzzy = days === 1 ? 1 + xlate('dayago') : days + xlate('daysago');
			var hours = Math.floor( (delta % day) / hour );
			if (hours)
				fuzzy += ' ' + (hours === 1 ?
								hours + xlate('hourago')
								: hours + xlate('hoursago'));
		}
		else if (delta > month && delta < year) {
			var months = Math.floor(delta / month);
			fuzzy = months === 1 ? months + xlate('monthago')
					: months + xlate('monthsago');
			var days = Math.floor( (delta % month) / day );
			if (days) fuzzy += ' ' + (days === 1 ? days + xlate('dayago')
									: days + xlate('daysago'));
		}
		else if (delta > year) {
			var years = Math.floor(delta / year);
			fuzzy = years === 1 ? years + xlate('yearago')
					: years + xlate('yearsago');
			var months = Math.floor( (delta % year) / month );
			if (months) fuzzy += ' ' + (months === 1 ? months + xlate('monthago')
					: months + xlate('monthsago'));
		}
		return fuzzy;
	};
	time.days = function (days) {
		days = new Date().getTime() - new Date(days).getTime();
		days = days / time.day;
		return days;
	};
	time.fuzzytime = function (date, muxtasar) {
		date = date || +new Date;
		var delta = Math.round( (+new Date - date) / 1000),
			future;
		if (delta < 0) {
			future = 1;
			delta *= -1;
		}
		var minute = 60,
			hour = minute * 60,
			day = hour * 24,
			week = day * 7,
			month = day * 30,
			year = month * 12;
		var fuzzy;
		if (!future && delta < 15) {
			if (muxtasar)
			fuzzy = delta + translate('sseconds');
			else
			fuzzy = translate('justnow');
		}
		else if (delta < minute) {
			if (muxtasar)
			fuzzy = delta + translate('sseconds');
			else
			fuzzy = delta + ' ' + translate('secondsago');
		}
		else if (delta < 2 * minute) {
			if (muxtasar)
			fuzzy = 1 + translate('sminutes');
			else
			fuzzy = translate('aminuteago');
		}
		else if (delta < hour) {
			if (muxtasar)
			fuzzy = Math.floor(delta / minute) + translate('sminutes');
			else
			fuzzy = Math.floor(delta / minute) + ' ' + translate('minutesago');
		}
		else if (Math.floor(delta / hour) == 1) {
			fuzzy = 1 + translate('hourago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) {
				if (muxtasar)
				fuzzy = ' ' + mins + translate('sminutes');
				else
				fuzzy += ' ' + mins + translate('minutesago');
			}
		}
		else if (delta < day) {
			fuzzy = Math.floor(delta / hour) + translate('hoursago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + mins + translate('minutesago');
		}
		else if (delta >= day && delta < month) {
			var days = Math.floor(delta / day);
			fuzzy = days === 1 ? 1 + translate('dayago') : days + translate('daysago');
			var hours = Math.floor( (delta % day) / hour );
			if (hours)
				fuzzy += ' ' + (hours === 1 ?
								hours + translate('hourago')
								: hours + translate('hoursago'));
		}
		else if (delta > month && delta < year) {
			var months = Math.floor(delta / month);
			fuzzy = months === 1 ? months + translate('monthago')
					: months + translate('monthsago');
			var days = Math.floor( (delta % month) / day );
			if (days) fuzzy += ' ' + (days === 1 ? days + translate('dayago')
									: days + translate('daysago'));
		}
		else if (delta > year) {
			var years = Math.floor(delta / year);
			fuzzy = years === 1 ? years + translate('yearago')
					: years + translate('yearsago');
			var months = Math.floor( (delta % year) / month );
			if (months) fuzzy += ' ' + (months === 1 ? months + translate('monthago')
					: months + translate('monthsago'));
		}
		if (future) fuzzy = translate('infuture') +' '+ fuzzy;
		return translate.a3daad(fuzzy);
	};
	time.relativetime = function (datetime, e, dataset) {
		if (datetime === 'false') return translate('alongtime');
		var today = time.striptime().getTime(),
			yesterday = time.traversebydays(today, -1),
			tomorrow = time.traversebydays(today, 1),
			text = '',
			is24 = preferences.get(24, 1);
		if (e) {
			dataset = e.dataset;
			var datetime = parseInt(dataset.time),
				minus = dataset.minus,
				by = dataset.by;
			delete dataset.i18n;
			if (minus !== undefined) datetime = time.now() - datetime;
			if (by === 'age') {
				innerhtml(e, time.fuzzytime(datetime));
			} else
			if (by === 'days') {
				var days = time.days(datetime);
				if (days < 0.1) days = days.toFixed(2);
				else if (days < 1) days = days.toFixed(1);
				else days = Math.floor(days);
				innerhtml(e, days + ' ' + translate('daysago'));
			} else
			if (by === 'hourly') {
				innerhtml(e, time.formatdate( new Date(datetime), (is24 ? 'HH:mm' : 'hh:mma') ));
			} else
			if (by === 'yearly') {
				innerhtml(e, time.formatdate( new Date(datetime), 'YYYY' ));
			} else
			if (by === 'monthly') {
				innerhtml(e, time.formatdate( new Date(datetime), 'MMMM YYYY' ));
			} else
			if (by === 'daily') {
				innerhtml(e, time.formatdate( new Date(datetime), 'Do MMMM YYYY' ));
			} else
			if (by === 'minute') {
				innerhtml(e, time.formatdate( new Date(datetime), is24 ? 'HH:mm' : 'hh:mma' ));
			} else {
				if (datetime === today)
					dataset.i18n = 'today';
				else if (datetime === yesterday)
					dataset.i18n = 'yesterday';
				else if (datetime === tomorrow)
					dataset.i18n = 'tomorrow';
				else
					innerhtml(e, time.formatdate( new Date(datetime), 'Do MMM YYYY' ));
			}
		} else {
			var at = translate('@');
			var c = translate(','); 
			var months = ( ( time.now() - datetime ) / time.month );
			var days = ( ( time.now() - datetime ) / time.day );
			if (days <= 1) {
				if (dataset && dataset.muxtasar == '3')
					text += time.fuzzytime( datetime, 1 );
				else if (dataset && dataset.muxtasar == '2')
					text += time.fuzzytime( datetime );
				else {
					if (dataset && !dataset.muxtasar)
						text += time.fuzzytime( datetime ) + ' '+at+' ';
					text += time.formatdate( new Date(datetime), (is24 ? 'HH:mm' : 'hh:mma') );
				}
			} else if (days > 1 && days <= 4) {
				text = time.formatdate( new Date(datetime), 'dddd'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			} else if (months < 2) {
				text = time.formatdate( new Date(datetime), 'Do MMM'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			} else {
				text = time.formatdate( new Date(datetime), 'Do MMM YYYY'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			}
			if (e) innerhtml(e, text);
		}
		return text;
	};
	time._calcs = {};
	time._replacements = [];
	time._uid = 0;
	time.now = function () { return new Date().getTime(); };
	time.zero = function (s) { return s < 10 ? '0'+s : s };
	time.year = 31557600000 ;
	time.month = 2629800000 ;
	time.day = 87660000 ;
	time.hour = 3652500 ;
	time.minute = 60875 ;
	time.second = 1000 ;
	time.milli = 1 ;
	time.striptime = function (_time) {
		var parsed = new Date(_time||new Date().getTime());
		parsed = (parsed.getDate()) + ' ' + monthnames[parsed.getMonth()] + ' ' + parsed.getFullYear() + ' GMT';
		parsed = new Date(parsed);
		if (parsed.toString() === 'Invalid Date') parsed = false;
		return parsed;
	};
	 
	time.traversebydays = function (intdate, num) {
		intdate = new Date( intdate );
		intdate.setDate( intdate.getDate() + num );
		return intdate.getTime();
	};
	time.realdatereplace = function (s) {
		if ( s === ('YYYY') ) { return val._year }
		if ( s === ('YY') ) { return val._shortyear < 10 ? '0'+val._shortyear: val._shortyear }
		if ( s === ('Y') ) { return val._shortyear }
		if ( s === ('HH') ) { return val._hours < 10 ? '0'+val._hours: val._hours }
		if ( s === ('H') ) { return val._hours }
		if ( s === ('hh') ) { return val._hours12 < 10 ? '0'+val._hours12: val._hours12 }
		if ( s === ('h') ) { return val._hours12 }
		if ( s === ('mm') ) { return val._minutes < 10 ? '0'+val._minutes: val._minutes }
		if ( s === ('m') ) { return val._minutes }
		if ( s === ('ss') ) { return val._seconds < 10 ? '0'+val._seconds: val._seconds }
		if ( s === ('s') ) { return val._seconds }
		if ( s === ('a') ) { return val._ampm }
		if ( s === ('MMMM') ) { return val._monthname }
		if ( s === ('MMM') ) { return (val._monthname||'').substr(0, 3) }
		if ( s === ('MM') ) { return val._month < 10 ? '0'+val._month: val._month }
		if ( s === ('M') ) { return val._month }
		if ( s === ('dddd') ) { return val._dayname }
		if ( s === ('ddd') ) { return (val._dayname||'').substr(0, 3) }
		if ( s === ('DD') ) { return val._day < 10 ? '0'+val._day: val._day }
		if ( s === ('Do') ) { return val._day+val._o }
		if ( s === ('D') ) { return val._day }
	};
	time.replacewithuid = function () {
		time._replacements[time._uid] = time.realdatereplace(arguments[0]);
		++time._uid;
		return '%{'+time._uid+'}';
	};
	time.formatdate = function (date, format) {
		format = format || 'MM/DD/YYYY h:mma';
		time._uid = 0;
		time._replacements = [];
		val._year = date.getFullYear()+'' ,
		val._shortyear = parseInt(val._year.substr(-2)) ,
		val._month = date.getMonth()+1 ,
		val._monthname = monthnames[val._month-1] ,
		val._day = date.getDate() ,
		val._dayname = weekdays[date.getDay()] ,
		val._hours = date.getHours() ,
		val._hours12 = val._hours % 12 ,
		val._hours12 = val._hours12 < 1 ? 12 : val._hours12 , 
		val._minutes = date.getMinutes() ,
		val._seconds = date.getSeconds() ,
		val._ampm = val._hours >= 12 ? translate('pm') : translate('am') ;
		val._monthname = translate(val._monthname);
		val._dayname = translate(val._dayname);
		val._o = translate('th');
		if (val._day === 1 || val._day === 21 || val._day === 31) val._o = translate('st');
		if (val._day === 2 || val._day === 22) val._o = translate('nd');
		if (val._day === 3 || val._day === 23) val._o = translate('rd');
		var datetimestring = format;
			datetimestring = datetimestring
				.replace(/YYYY/g, time.replacewithuid)
				.replace(/YY/g , time.replacewithuid)
				.replace(/Y/g , time.replacewithuid)
				.replace(/HH/g , time.replacewithuid)
				.replace(/H/g , time.replacewithuid)
				.replace(/hh/g , time.replacewithuid)
				.replace(/h/g , time.replacewithuid)
				.replace(/mm/g , time.replacewithuid)
				.replace(/m/g , time.replacewithuid)
				.replace(/ss/g , time.replacewithuid)
				.replace(/s/g , time.replacewithuid)
				.replace(/a/g , time.replacewithuid)
				.replace(/MMMM/g, time.replacewithuid)
				.replace(/MMM/g , time.replacewithuid)
				.replace(/MM/g , time.replacewithuid)
				.replace(/M/g , time.replacewithuid)
				.replace(/dddd/g, time.replacewithuid)
				.replace(/ddd/g , time.replacewithuid)
				.replace(/DD/g , time.replacewithuid)
				.replace(/Do/g , time.replacewithuid)
				.replace(/D/g , time.replacewithuid)
				;
		var matches;
		datetimestring = datetimestring.replace(/\%\{(\d)*\}/gm, function () {
			return time._replacements[ arguments[1]-1 ];
		});
		return datetimestring;
	};
	time.start = function (parent) {
		started = 1;
		clearTimeout(timeout);
		timeout = setTimeout(function () {
			time(parent);
			if (started) time.start();
		}, 10*1000);
	};
	time.stop = function () {
		clearTimeout(timeout);
		started = 0;
	};
	Hooks.set('visible', function () {
		time.start();
	});
	Hooks.set('hidden', function () {
		time.stop();
	});
	Hooks.set('widgets', function (parent) {
		if (parent) time(parent);
	});
	Hooks.set('ready', function () {
	});
})();
var Settings, settings, currentad;
;(function(){
	var settingsitems = [], module_name = 'settings';
	function add(a) { settingsitems.push(a); }
	 
	add(['Mudeer '+$.b, function () {
		return 'Web Framework';
	}, function () {
		open('https://github.com/xorasan/mudeer', '_blank');
	}, 'iconmudeer']);
	if (Config.repo) {
		add([Config.appname+' '+1108, function () {
			return Config.sub;
		}, function () {
			open(Config.repo, '_blank');
		}, '/e.png']);
	}
	add(['timeformat', function () {
		var is24 = preferences.get(24, 1);
		return [is24 ? 'hours24' : 'hours12'];
	}, function () {
		var is24 = preferences.get(24, 1);
		if (is24) preferences.set(24, 0);
		else preferences.set(24, 1);
	}, 'icontimer']);
	add(['calendar', function () {
		var isgregorian = preferences.get(26, 1);
		return [isgregorian ? 'gregorian' : 'hijri'];
	}, function () {
		var isgregorian = preferences.get(26, 1);
		if (isgregorian) preferences.set(26, 0);
		else preferences.set(26, 1);
	}, 'icondaterange']);
	add(['largetext', function () {
		var largetext = preferences.get(9, 1);
		webapp.textsize();
		return [largetext ? 'on' : 'off'];
	}, function () {
		preferences.set(9, preferences.get(9, 1) ? 0 : 1);
	}, 'iconformatsize']);
	var settingslist, keys;
	Settings = settings = {
		get_dom_keys: function () {
			return keys;
		},
		adaaf: function (name, getvalue, onpress, icon) { 
			settingsitems.push([name, getvalue, onpress, icon]);
			settings.jaddad(settingsitems.length-1);
			return settingsitems.length-1;
		},
		axad: function (uid) { 
			return settingsitems[uid];
		},
		jaddad: function (uid) { 
			var item = settings.axad(uid);
			if (item) {
				var body = typeof item[1] === 'function' ? item[1]() : undefined;
				var obj = {
					uid: uid,
				};
				obj.index = uid;
				obj.title$t = item[0];
				obj.icon = item[3];
				if (body instanceof Array) obj.body$t = body[0];
				else obj.body = body;
				if (settingslist) {
					settingslist.set(obj);
					if (backstack.states.view === module_name)
						settingslist.select();
				}
			}
		},
	};
	Hooks.set('ready', function () {
		if (get_global_object().Sidebar) { Sidebar.set({
			uid: module_name,
			title: translate( module_name ),
			icon: 'iconsettings',
		}); }
		keys = view.mfateeh(module_name);
		settingslist = list( keys.list ).idprefix(module_name)
						.listitem('settingsitem')
						.grid(3);
		settingslist.beforeset = function (item, id) {
			return item;
		};
		settingsitems.forEach(function (item, i) {
			settings.jaddad(i);
		});
		settingslist.onpress = function (item, key, uid) {
			if (item) {
				settings.axad(item.index)[2]();
				settings.jaddad(item.index);
			}
		};
	});
	Hooks.set('viewready', function (args) {
		if (Webapp.is_at_home()) {
			softkeys.add({ n: 'Settings',
				ctrl: 1,
				alt: 1,
				k: 'p',
				i: 'iconsettings', 
				c: function () {
					Hooks.run('view', module_name);
				}
			});
		}
		if (args.name == module_name) {
			if (get_global_object().Sidebar) Sidebar.choose(module_name);
				webapp.header([[module_name], 0, 'iconsettings']);
			softkeys.list.basic(settingslist);
			softkeys.set(K.en, function () {
				settingslist.press(K.en);
			});
			softkeys.set(K.bs, function () {
				backstack.back();
			});
			 
			settingslist.select(undefined, 0);
			settingslist.set_focus(1, 1);
		}
	});
})();
var translate, taraajim = taraajim || {}, xlate;
;(function(){
	'use strict';
	var
	languages = Object.keys(taraajim),
	uglynames = {
		en: 'en',
		ar: 'ar',
		ur: 'ur',
	},
	defaultlang = 'en',
	donumbers = function (translation) {
		var language = translate.get();
		if (['ur', 'ar'].includes(language)) {
			return translation .replace(/0/g, '٠')
								.replace(/1/g, '١')
								.replace(/2/g, '٢')
								.replace(/3/g, '٣')
								.replace(/4/g, '٤')
								.replace(/5/g, '٥')
								.replace(/6/g, '٦')
								.replace(/7/g, '٧')
								.replace(/8/g, '٨')
								.replace(/9/g, '٩')
								.replace(/%/g, '٪');
		} else {
			return translation;
		}
	},
	dodirection = function (parent, selector) {
		if (selector === undefined) selector = '[data-dir]';
		var items = (parent||document).querySelectorAll(selector);
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dir;
					if (e instanceof HTMLInputElement
					|| e instanceof HTMLTextAreaElement) {
						dir = translate.direction(e.value);
						e.dir = dir === 1 ? 'rtl' : 'ltr';
						listener(e, ['focus', 'input'], function () {
							dir = translate.direction(this.value);
							this.dir = dir === 1 ? 'rtl' : 'ltr';
						});
					} else {
						if (e.dataset.dir === 'rtl') { 
							dir = 'rtl';
						} else if (e.dataset.dir === 'ltr') { 
							dir = 'ltr';
						} else {
							dir = translate.direction(e.innerText);
						}
						if (e.dataset.dir == 'parent') { 
							e.parentElement.dir = dir === 1 ? 'rtl' : 'ltr';
						} else {
							e.dir = dir === 1 ? 'rtl' : 'ltr';
						}
					}
				}
			}
		}
	};
	translate = function (alias) {
		var str = '';
		var language = translate.get();
		if (language && taraajim[language]) {
			if (taraajim[language][alias])
				str = taraajim[language][alias];
		}
		if (str === '') {
			if (taraajim['en'] && taraajim['en'][alias])
				str = taraajim['en'][alias];
		}
		var args = arguments;
		if (args.length > 1) {
			for (var i = 0; i < args.length; ++i) {
				str = str.replace( new RegExp('\%'+(i+1), 'g'), args[i+1] );
			}
		}
		if (str === '') str = alias || '';
		str = donumbers(str);
		return '' + str;
	};
	translate.get = function () {
		return preferences.get(translate.saveto) || defaultlang;
	};
	translate.set = function (language) {
		preferences.set(translate.saveto, language);
	};
	translate.saveto = 25;
	translate.change = function (language) {
		language = language || defaultlang;
		if (['ur', 'ar'].includes(language)) {
			document.body.dir = 'rtl';
		} else {
			document.body.dir = 'ltr';
		}
		Hooks && Hooks.run('translateupdate');
		translate.set(language);
		translate.update();
	};
	translate.a3daad = function (str) {
		return donumbers(str);
	};
	translate.update = function (parent) {
		var items = (parent||document).querySelectorAll('[data-i18n]');
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dataset = e.dataset;
					var i18n = dataset.i18n;
					if (i18n !== '') {
						var translation = translate(i18n);
						translation = donumbers(translation);
						if (e instanceof HTMLInputElement
						|| e instanceof HTMLSelectElement
						|| e instanceof HTMLTextAreaElement) {
							e.placeholder = translation;
						} else {
							e.innerText = translation;
						}
					}
				}
			}
		}
		dodirection(parent);
		dodirection(parent, 'input');
		dodirection(parent, 'textarea');
	};
	 
	translate.direction = function (text) {
		text = text || '';
		var ltr = text.match(/[a-zA-Z]+/),
			rtl = text.match(/[ا-ےا-ي]+/);
		if (rtl) return 1;
		if (ltr) return 0;
		return 2;
	};
	Hooks.set('ready', function () {
		translate.change( translate.get() );
		settings.adaaf('language', function () {
			var language = translate.get();
			if (language) return translate( uglynames[language]||'' );
		}, function () {
			var language = translate.get();
			var index = languages.indexOf( language );
			if (index < languages.length-1)
				++index;
			else
				index = 0;
			translate.change(languages[index]);
		}, 'icontranslate');
	});
	xlate = translate;
})();
 
var templates, namaavij;
;(function(){
	var index = {};
	templates = {
		mfateeh: function (element) {
			return templates.keys(element);
		},
		keys: function (element) {
			if (!(element instanceof HTMLElement)) return;
			var keys = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					if (otherviews[i].dataset)
						keys[ otherviews[i].dataset.id ] = otherviews[i];
				}
			}
			return keys;
		},
		set: function (clone, o, template) {
			var keys = templates.keys(clone);
			o = o || {};
			if (o.hidden) clone.hidden = 1;
			if (o.id) clone.id = o.id;
			if (o.classes) clone.className = o.classes;
			if (o.status == 1) clone.dataset.selected = 1, clone.disabled = 0;
			else if (o.status == 2) clone.disabled = 1, delete clone.dataset.selected;
			else clone.disabled = 0, delete clone.dataset.selected;
			if (o.data)
			for (var i in o.data) {
				if (o.data[i] !== undefined)
					clone.dataset[i] = o.data[i];
				else
					delete clone.dataset[i];
			}
			if (o.onclick) clone.onclick = o.onclick;
			for (var i in keys) {
				 
				if (isundef(o[i+'$t'])) {
					if (keys[i].dataset.i18n) {
						innertext(keys[i], '');
						delete keys[i].dataset.i18n;
					}
				}
				var has_time = i+'$time';
				if (!isundef( o[has_time] )) {
					if (isundef( o[has_time] )) {
						popdata(keys[i], 'time');
						innertext(keys[i], '');
					} else
						setdata(keys[i], 'time', o[has_time]);
				}
				if ( !isundef(o[i]) || !isundef(o[i+'$h']) || !isundef(o[i+'$t']) ) {
					if (o[i] == 'ixtaf') {
						keys[i].hidden = 1;
					} else
					if (o[i] == 'izhar') {
						keys[i].hidden = 0;
					} else
					if (keys[i] instanceof HTMLInputElement) {
						keys[i].value = o[i];
					} else
					if (keys[i] instanceof HTMLImageElement) {
						if (typeof o[i] === 'string' && o[i].length) {
							if (o[i].startsWith('app://'))
								keys[i].src = o[i];
							else
								keys[i].src = o[i];
							keys[i].hidden = 0;
						} else {
							keys[i].hidden = 1;
						}
					} else
					if ( ['titlehours', 'titledays', 'titletime',
							'time', 'timeshow', 'days', 'waqt']
						.includes(i) ) { 
						if (o[i] !== undefined) {
							keys[i].dataset.time = o[i];
						}
						if (o.deadline)
							keys[i].dataset.deadline = 1;
						else
							delete keys[i].dataset.deadline;
					} else 
					if (['titlei18n', 'bodyi18n'].includes(i)) {
						if (o[i]) {
							keys[i].hidden = 0;
							keys[i].dataset.i18n = o[i];
						} else {
							keys[i].hidden = 1;
							delete keys[i].dataset.i18n;
							keys[i].innerHTML = '';
						}
					} else 
					if (['titlehtml', 'bodyhtml', 'bodyshowhtml']
						.includes(i)) { 
						if (o[i]) {
							keys[i].hidden = 0;
							keys[i].innerHTML = o[i];
						} else {
							keys[i].hidden = 1;
							keys[i].innerHTML = '';
						}
					} else
					if (['icon', 'eqonah'].includes(i)) { 
						if (typeof o[i] === 'string' && o[i].length) {
							keys[i].hidden = 0;
							if (o[i].startsWith('/')) {
								innerhtml(keys[i], '<img src="'+o[i]+'" />');
							} else {
								var e = icons.querySelector('#'+o[i]);
								if (e)
									keys[i].innerHTML = '<svg viewBox="0 0 48 48">'+e.cloneNode(1).innerHTML+'</svg>';
							}
						} else {
							keys[i].hidden = 1;
							keys[i].innerHTML = '';
						}
					} else {
						if (keys[i].hidden) keys[i].hidden = 0;
						var html = o[i+'$h'], trjm = o[i+'$t'];
						if (!isundef(html)) {
							innerhtml(keys[i], html);
						} else if (!isundef(trjm)) {
							keys[i].dataset.i18n = trjm;
						} else {
							innertext(keys[i], o[i]);
						}
					}
				}
			}
			Hooks.rununtilconsumed('templateset', [clone, o, keys, template]);
			translate && translate.update(clone.parentElement);
			time && time(clone.parentElement);
			datepicker && datepicker.fahras(clone.parentElement);
			return clone;
		},
		 
		get: function (element, parent, before, id) {
			if (isstr(element)) element = index[element];
			if (!(element instanceof HTMLElement)) {
				$.log.e( 'templates.get element not found', arguments );
				return false;
			}
			var clone, template;
			if (id) {
				clone = document.getElementById(id);
				if (clone) before = clone.nextElementSibling;
			}
			if (!clone)
				clone = element.cloneNode(true),
				template = clone.dataset.template,
				delete clone.dataset.template,
				clone.hidden = 0;
			if (parent) {
				if (before instanceof HTMLElement) {
					parent.insertBefore(clone, before);
				} else if (before) {
					parent.insertBefore(clone, parent.firstElementChild);
				} else
					parent.appendChild(clone);
				Hooks.rununtilconsumed('widgets', parent);
				return function (o) {
					return templates.set(clone, o, template);
				};
			}
			return clone;
		},
		 
		replace_with: function (element, replacement) {
			if (isstr(replacement)) replacement = index[ replacement ];
			if (!(element instanceof HTMLElement)) return false;
			if (!(replacement instanceof HTMLElement)) return false;
			var clone, template;
			clone = replacement.cloneNode(true),
			template = clone.dataset.template,
			delete clone.dataset.template,
			clone.hidden = 0;
			element.replaceWith(clone);
			return function (o) {
				return templates.set(clone, o, template);
			};
		},
		 
		index: function (parent) {
			var elements = (parent||document.body).querySelectorAll('[data-template]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.template ) {
					elements[i].hidden = 1;
					index[ elements[i].dataset.template ] = elements[i];
				}
			}
			return index;
		},
	};
	templates.index();
	namaavij = templates;
	namaavij.axav = namaavij.get;
})();
var musajjal, recorder, Recorder,
MSJLXATAM = 10 , 
MSJLBADAA = 30 , 
MSJLTASJEEL = 60 , 
MSJLINTAHAA = 90 ; 
;(function(){
	'use strict';
	var sawt, medrec, waqtibtidaa, mfateeh, audctx, cnvctx,
	kbps = 12*1000, livesize = 0,
	mimetype = 'audio/webm;codecs="opus"',
	audanlzr, dataarr, buflen,
	bigx = 0, drawto, portion,
	draw = function () {
		if (musajjal.mulhaq) {
			var w = mfateeh.hafr.width;
			var h = mfateeh.hafr.height;
			if (musajjal.sajil) {
				clearTimeout(drawto);
				drawto = setTimeout(draw, 200);
			}
			if (waqtibtidaa) {
				var t = Math.round((time.now()-waqtibtidaa)/1000);
				innertext(mfateeh.awqaat, '() '+t+'s --- '+parsefloat(livesize/1024, 1)+'kB');
				if (t >= 60) musajjal.itlaqsawt();
			}
			audanlzr.getByteTimeDomainData(dataarr);
			cnvctx.lineWidth = 2;
			cnvctx.strokeStyle = 'white';
			cnvctx.beginPath();
			var slicewidth = portion / buflen;
			var x = 0;
			for (var i = 0; i < buflen; i++) {
				var v = dataarr[i] / 128;
				var y = v * h/2;
				if (i === 0) {
					cnvctx.moveTo(bigx+x, y);
				} else {
					cnvctx.lineTo(bigx+x, y);
				}
				x += slicewidth;
			}
			bigx += portion;
			if (bigx > w) {
				bigx = 0;
				cnvctx.fillRect(0, 0, w, h);
			}
			cnvctx.stroke();
		}
	},
	visualize = function (stream) {
		if (!audctx) audctx = new AudioContext();
		bigx = 0;
		attribute(mfateeh.hafr, 'width', (mfateeh.hafr.parentElement.offsetWidth-5)+'px');
		var w = mfateeh.hafr.width;
		var h = mfateeh.hafr.height;
		portion = Math.round( w / (60*5) );
		cnvctx = mfateeh.hafr.getContext('2d');
		cnvctx.fillStyle = 'black';
		cnvctx.fillRect(0, 0, w, h);
		var src = audctx.createMediaStreamSource(stream);
		audanlzr = audctx.createAnalyser();
		audanlzr.fftSize = 128;
		buflen = audanlzr.frequencyBinCount;
		dataarr = new Uint8Array(buflen);
		src.connect(audanlzr);
		draw();
	},
	jaddadsawt = function () {
		musajjal.muddah = 0;
		musajjal.hajam = 0;
		if (sawt) {
			if (!sawt.paused) sawt.pause();
			sawt.remove();
		}
		if (musajjal.mulhaq) {
			setcss(mfateeh.irtiqaa, 'width');
			innertext(mfateeh.awqaat, '');
		}
		sawt = new Audio();
		sawt.ontimeupdate = function () {
			waqtissawt();
		};
		sawt.onended = function () {
			musajjal.intahaa();
		};
		sawt.onplay = function () {
		};
		sawt.onpause = function () {
		};
	},
	waqtissawt = function () {
		if (musajjal.mulhaq) {
			var t = musajjal.muddah || sawt.duration;
			var hajam = musajjal.tasjeel ? musajjal.tasjeel.size : musajjal.hajam;
			if (musajjal.sajil) {
			} else
			if (isnum(t)) {
				var str = (sawt.paused ? '||' : '>>')
						+' '+Math.round(sawt.currentTime)+' / '+Math.round(t)+'s';
				if (hajam) str += ' --- '+Math.round(hajam/1024)+'kB';
				innertext(mfateeh.awqaat, str);
				var w = sawt.currentTime/t *100;
				if (w < 101) setcss(mfateeh.irtiqaa, 'width', w+'%');
			}
		}
	},
	pausebtn = function () {
		softkeys.set('5', function () {
			musajjal.inqata3();
		}, '5', 'iconpause');
	},
	stopbtn = function () {
		softkeys.set('8', function () {
			musajjal.intahaa();
		}, '8', 'iconstop');
	},
	rewindbtn = function () {
		softkeys.set('4', function () {
			musajjal.irja3();
		}, '4', 'iconfastrewind');
	},
	forwardbtn = function () {
		softkeys.set('6', function () {
			musajjal.id3am();
		}, '6', 'iconfastforward');
	},
	rawaa = function (nabaa) { 
		Hooks.run('musajjal', nabaa);
		Hooks.run('recorder', nabaa);
	};
	recorder = Recorder = musajjal = {
		muddah: 0, 
		hajam: 0, 
		mulhaq: 0, 
		la3ib: 0, 
		sajil: 0, 
		tasjeel: 0, 
		mashghool: function () {
			return  musajjal.sajil || musajjal.tasjeel;
		},
		il3ab: function (xitaab) { 
			if (musajjal.sajil) {
				webapp.itlaa3('cannot play this while recording...');
			} else
			if (musajjal.mulhaq) {
				if (xitaab) {
					rawaa(MSJLXATAM);
					sawt.src = xitaab;
					sawthafr.axavmuddah(xitaab, function (muddah, hajam) {
						musajjal.muddah = muddah;
						musajjal.hajam = hajam;
						sawt.currentTime = 0;
						sawt.play();
					});
				} else {
					sawt.play();
				}
				pausebtn();
				stopbtn();
				musajjal.la3ib = 1;
				rawaa();
			}
		},
		inqata3: function (lysil3ab) { 
			if (musajjal.sajil) {
				musajjal.itlaqsawt(2);
			}
			if (musajjal.mulhaq && sawt) {
				if (sawt.ended) sawt.currentTime = 0;
				if (sawt.paused) {
					if (!lysil3ab) musajjal.il3ab();
				}
				else {
					sawt.pause();
					musajjal.la3ib = 0;
					rawaa();
				}
			}
		},
		intahaa: function () { 
			if (musajjal.mulhaq && sawt) {
				sawt.currentTime = 0;
				if (sawt.paused) {
					if (!musajjal.tasjeel) {
						jaddadsawt();
						softkeys.havaf('5');
						softkeys.havaf('8');
						rawaa(MSJLXATAM);
					}
				}
			}
			musajjal.inqata3(1);
			rawaa();
		},
		iltahaq: function (m) { 
			if (m) {
				mfateeh = m;
				ixtaf(mfateeh.hafr);
				musajjal.mulhaq = 1;
				rawaa();
			}
		},
		infasal: function () { 
			if (musajjal.mulhaq) {
				mfateeh = 0;
				cnvctx = 0;
				musajjal.mulhaq = 0;
				musajjal.intahaa();
				jaddadsawt();
				rawaa();
			}
		},
		itlaqsawt: function (sinf) {
			if (medrec) {
				waqtibtidaa = (time.now()-waqtibtidaa)/1000;
				medrec.stop();
				medrec = 0;
				musajjal.sajil = 0;
				if (musajjal.mulhaq) {
					waqtissawt();
					stopbtn();
					pausebtn();
				}
			}
			if (sinf === 2) {
				waqtibtidaa = 0;
				if (musajjal.mulhaq) {
					softkeys.havaf('5');
					softkeys.havaf('8');
					mfateeh.matn && izhar(mfateeh.matn);
				}
				jaddadsawt();
				if (musajjal.tasjeel) {
					ixtaf(mfateeh.hafr);
					musajjal.tasjeel = 0;
					rawaa(MSJLINTAHAA);
				}
			}
			rawaa();
		},
		isjal: function (haalah) {
			markooz && markooz().blur();
			if (musajjal.mulhaq) {
				izhar(mfateeh.sawt);
				mfateeh.matn && ixtaf(mfateeh.matn);
			}
			if (!('require' in window) && haalah) {
				if (haalah === -2) setdata(mfateeh.haalah, 'sawtmas3oob');
				else if (haalah === -1) setdata(mfateeh.haalah, 'sawtmasool');
				else
				navigator.permissions.query({name:'microphone'}).then(function(result) {
					var react = function (s) {
						if (s == 'granted') musajjal.isjal();
						else if (s == 'denied') musajjal.isjal(-2);
						else if (s == 'prompt') musajjal.isjal(-1);
					};
					 
					react(result.state);
				});
			}
			else {
				jaddadsawt();
				navigator.mediaDevices.getUserMedia({
					audio: {
						channelCount: 1,
					},
					video: false,
				}).then(function (stream) {
					medrec = new MediaRecorder(stream, {
						mimeType: mimetype,
						bitsPerSecond: kbps,
					});
					visualize(stream);
					var ajzaa = [];
					listener(medrec, 'dataavailable', function(e) {
						if (e.data.size > 0) {
							ajzaa.push(e.data);
							livesize += e.data.size;
						}
					});
					listener(medrec, 'stop', function () {
						if (musajjal.mulhaq) {
							musajjal.tasjeel = new Blob(ajzaa, { type: mimetype });
							fixwebm(musajjal.tasjeel, waqtibtidaa, function (fixedblob) {
								musajjal.sajil = 0;
								musajjal.tasjeel = fixedblob;
								musajjal.il3ab( URL.createObjectURL(musajjal.tasjeel) );
								rawaa(MSJLTASJEEL);
							}, { logger: 0 });
						}
						audctx.close();
						audctx = 0;
					});
					waqtissawt();
					waqtibtidaa = time.now();
					izhar(mfateeh.hafr);
					livesize = 0;
					medrec.start(2000);
					musajjal.sajil = 1;
					draw();
					rawaa(MSJLBADAA);
				});
			}
		},
	};
	recorder.play = recorder.il3ab;
	recorder.pause = recorder.inqata3;
	recorder.stop = recorder.intahaa;
	recorder.attach = recorder.iltahaq;
	recorder.detach = recorder.infasal;
	recorder.remove = recorder.itlaqsawt; 
	recorder.record = recorder.isjal;
	Hooks.set('restore', function () { 
		musajjal.itlaqsawt(2);
	});
})();
var raafi3, uploader, Uploader,
RF3BADAA = 10 , 
RF3XATAM = 30 , 
RF3TASJEEL = 60 , 
RF3INTAHAA = 90 ; 
;(function(){
	'use strict';
	var mfateeh, quality = 0.25, oldsize,
	sizeinkb = function (v) {
		return parsefloat(v/1024, 1)+'kB';
	},
	scalewithaspect = function (sw, sh, tw, th, onlydown) {
		var rw = tw / sw,
			rh = th / sh,
			r = rw < rh ? rw : rh;
		if (r >= 1 && onlydown) return [sw, sh, r];
		return [Math.round(sw*r), Math.round(sh*r), r];
	},
	oninput = function (file) { if (file) {
		mfateeh.matn && ixtaf(mfateeh.matn);
		izhar(mfateeh.photo);
		rawaa(RF3BADAA);
		innertext(mfateeh.tafseel, 'loading...');
		mfateeh.preview.onload = function () {
			var sw = mfateeh.preview.naturalWidth ,
				sh = mfateeh.preview.naturalHeight ,
				cnvs = new OffscreenCanvas(sw, sh) ,
				ctx = cnvs.getContext('2d') ,
				r = scalewithaspect(sw, sh, 1920, 1080, 1),
				cnvs2 = new OffscreenCanvas(r[0], r[1]) ;
			var oldsize = '<i>'+sizeinkb(file.size)+'</i> <b>'+sw+'x'+sh+'</b>';
			innerhtml(mfateeh.tafseel, 'converting... from '+oldsize);
			ctx.drawImage(mfateeh.preview, 0, 0);
			pica().resize(cnvs, cnvs2, {}, function (err) { $.log( err ); })
			.then(function (c) {
				c.convertToBlob({ type: 'image/jpeg', quality: 0.25 })
				.then(function (b) {
					URL.revokeObjectURL(mfateeh.preview.src);
					raafi3.marfoo3 = b;
					var url = URL.createObjectURL(b);
					mfateeh.preview.onload = function () {
						innerhtml(mfateeh.tafseel, oldsize+' to <i>'+sizeinkb(b.size)+'</i> <b>'+r[0]+'x'+r[1]+'</b>');
						rawaa(RF3XATAM);
						URL.revokeObjectURL(url);
					};
					mfateeh.preview.src = url;
				});
			});
		};
		mfateeh.preview.src = URL.createObjectURL(file);
	}},
	rawaa = function (nabaa) { 
		Hooks.run('raafi3', nabaa);
		Hooks.run('uploader', nabaa);
	};
	uploader = Uploader = raafi3 = {
		hajam: 0, 
		naqal: 0, 
		mulhaq: 0, 
		marfoo3: 0, 
		mashghool: function () {
			return raafi3.naqal || raafi3.marfoo3;
		},
		intahaa: function () { 
			raafi3.marfoo3 = 0;
			if (raafi3.mulhaq) {
			}
			rawaa(RF3INTAHAA);
		},
		iltahaq: function (m) { 
			if (m) {
				mfateeh = m;
				mfateeh.rafa3soorah.oninput = function () {
					raafi3.intaxab( mfateeh.rafa3soorah.files[0] );
				};
				raafi3.mulhaq = 1;
				rawaa();
			}
		},
		infasal: function () { 
			if (raafi3.mulhaq) {
				mfateeh = 0;
				raafi3.mulhaq = 0;
				raafi3.intahaa();
				rawaa();
			}
		},
		intaxab: function (file) { 
			markooz && markooz().blur();
			if (raafi3.mulhaq) oninput(file);
		},
	};
	Uploader.stop = Uploader.intahaa ;
	Uploader.attach = Uploader.iltahaq ;
	Uploader.detach = Uploader.infasal ;
	Uploader.pick = Uploader.intaxab ;
	Hooks.set('restore', function () { 
	});
})();
var Canvas, canvas;
var calcdistance = function (x1, y1, x2, y2) {
	var dx = x2 - x1; dx *= dx;
	var dy = y2 - y1; dy *= dy;
	return Math.sqrt( dx + dy );
};
;(function(){
	var toradians = function (degs) {
		return degs * Math.PI / 180;
	};
	var todegrees = function (angle) {
		return angle * (180 / Math.PI);
	};
	var coordtoangle = function (x0, y0, x1, y1) {
		var dx = x1 - x0;
		var dy = y1 - y0;
		var ang = todegrees( Math.atan2(dy, dx) );
		return (ang < 0 ? ang + 360 : ang);
	};
	Canvas = canvas = function (element) {
		var c = {
			f: '#fff',
			s: -1,
			o: element.getContext('2d')
		};
		c.linedash = function (v) {
			c.o.setLineDash(v || [])
		};
		c.linecap = function (v) {
			c.o.lineCap = v;
		};
		c.linejoin = function (v) {
			c.o.lineJoin = v;
		};
		c.linewidth = function (v) {
			c.o.lineWidth = v;
		};
		c.fillcolor = function (v) {
			c.f = v;
			if (typeof v == 'object') {
				var grd = c.o.createLinearGradient(
							0, 0, v.length, v.angle
						);
				v.stops.forEach(function (item, i) {
					if (item instanceof Array) {
						grd.addColorStop(item[0], item[1]);
					} else {
						var stop = 0;
						if (i) stop = (i+1)/v.length;
						grd.addColorStop(stop, item);
					}
				});
				c.o.fillStyle = grd;
			} else c.o.fillStyle = v;
		};
		c.strokecolor = function (v) {
			c.s = v;
			c.o.strokeStyle = v;
		};
		c.matn = function (x, y, m, s, f, mw) {
			c.fillcolor(f);
			c.strokecolor(s);
			if (c.f !== -1) c.o.fillText(m, x, y, mw);
			if (c.s !== -1) c.o.strokeText(m, x, y, mw);
		};
		c.rect = function (x, y, w, h, s, f) {
			c.fillcolor(f);
			c.strokecolor(s);
			if (c.f !== -1) c.o.fillRect (x, y, w, h);
			if (c.s !== -1) c.o.strokeRect (x, y, w, h);
		};
		c.line = function (points, s, f) {
			c.fillcolor(f);
			c.strokecolor(s);
			var lw = c.o.lineWidth;
			points.forEach(function (p, i) {
				if (i === 0) {
					c.o.beginPath();
					c.o.moveTo(p.x, p.y);
				}
				if (p.c) {
					c.o.quadraticCurveTo(p.cx, p.cy, p.x, p.y);
				}
				else {
					c.o.lineTo(p.x, p.y);
				}
				if (i === points.length-1) {
					if (s != -1) c.o.stroke();
					if (f != -1) c.o.fill();
				}
			});
			c.o.lineWidth = lw;
		};
		c.circle = function (x, y, r, sa, ea, s, f) {
			c.fillcolor(f);
			c.strokecolor(s);
			c.o.beginPath(); 
			c.o.arc(x, y, r, toradians(sa || 0), toradians(ea || 360), 0);
			if (f) c.o.fill();
			if (s) c.o.stroke();
		};
		c.clear = function (x, y, w, h) {
			c.o.clearRect(x, y, w, h);
		};
		c.text = c.matn;
		return c;
	};
	Canvas.coordtoangle = coordtoangle;
	Canvas.todegrees = todegrees;
	Canvas.toradians = toradians;
})();
 
 
var Softkeys, softkeys, K, P;
;(function(){
	K = { 
		mt: 'microphonetoggle',
		sr: 'softright',
		sl: 'softleft',
		en: 'enter',
		pu: 'pageup',
		pd: 'pagedown',
		up: 'arrowup',
		dn: 'arrowdown',
		rt: 'arrowright',
		lf: 'arrowleft',
		cl: 'call',
		bs: 'backspace',
	},
	P = {
		empty: {},
		sheet: {},
		dialog: {},
		list: {},
	};
	var global_keys = ['f1', 'f2', 'f5', 'escape', K.sl, K.sr], debug_softkeys = 1;
	var hfizM = {}, M = {}, 
	current,
	inlongpress, lastkey, lastkeytime, repeatmode,
	index = {},
	removableparent = function (element) {
		var parent = element.parentElement;
		if (parent.dataset.focus) {
			if (parent.dataset.removable)
				return parent;
			else 
				return removableparent(parent);
		}
	},
	updatekey = function (uid) {
		var parent, o = {}, classes = '', args = M[uid];
		if (!args) return;
		if (args.length === 1 || args.hidden || args.h) o.hidden = 1;
		var callback = args[0] || args.callback;
		var k = args.key || uid;
		if (callback) o.onclick = function (e) {
			var key = e ? e.key : undefined;
			callback(key, e);
		};
		o.name = args.name || args.n || '';
		o.label = args[1] || args.label || args.l || '';
		o.icon = args[2] || args.icon || args.i;
		o.status = args[3] || args.status || args.s;
		if (o.icon === false) {
			o.name = k;
		}
		if (!isarr(args)) { 
			o.key = (args.ctrl ? 'ctrl ' : '')
						+ (args.alt ? 'alt ' : '')
						+ (args.shift ? 'shift ' : '')
						+ (args.key || uid)
						;
		}
		if ( k == K.sl ) classes = 'left' ;
		if ( k == K.en ) classes = 'center';
		if ( k == K.sr ) classes = 'right' ;
		if ( k == '*' ) classes = 'star' ;
		if ( k == '#' ) classes = 'hash' ;
		if ([K.sr, K.sl, K.en].includes(k)) {
			parent = skmain;
		} else {
			parent = skhints;
		}
		o.id = 'sk'+k;
		o.classes = classes;
		var before = 0;
		if (args.first) {
			before = parent.firstElementChild;
		}
		if (args.last) {
			before = parent.lastElementChild;
		}
		index[k] = templates.get('skbutton', parent, before, o.id)(o);
		skdots.hidden = totalvisible() ? 0 : 1;
		resize();
	},
	adaaf = function (name, callback, label, icon, status) {
		var action = [];
		M[name] = M[name] || action;
		action[0] = callback === undefined ? M[name][0] : callback;
		action[1] = label === undefined ? M[name][1] : label;
		action[2] = icon === undefined ? M[name][2] : icon;
		action[3] = status === undefined ? M[name][3] : status;
		M[name] = action;
	},
	talaf = function (name) {
		M[name] = undefined;
	};
	totalvisible = function () {
		var total = 0;
		for (var i in skhints.childNodes) {
			if (skhints.childNodes.hasOwnProperty(i))
				if (!skhints.childNodes[i].hidden) total++;
		}
		return total;
	};
	 
	P.empty = function () {
		if (debug_softkeys) $.log.w('Softkeys.P.empty');
		M[K.sr] = [function () {
			Hooks.run('back');
			return 1;
		}, 0, 'iconclose'];
		M[K.bs] = [function () {
			Hooks.run('minimize');
		}];
		M['#'] = [function () {
			Softkeys.showhints();
			return 1;
		} ];
		Softkeys.update();
	},
	Softkeys = softkeys = {
		P: P,
		K: K,
		saveto: 7,
		 
		clear: function () {
			M = {};
			softkeys.update();
			backstack.set('softkeys', M);
			return softkeys;
		},
		havaf: function (name) {
			return softkeys.talaf(name);
		},
		baidaa: function (name, yes) { if (M[name]) {
			M[name][3] = yes ? 1 : undefined;
			softkeys.update();
		} },
		talaf: function (name) { 
			if (name) {
				if (name instanceof Array) {
					name.forEach(function (n) {
						talaf(n);
					});
				} else {
					talaf(name);
				}
				softkeys.update();
				backstack.set('softkeys', M);
			}
			return softkeys;
		},
		update: function () {
			skhints.innerHTML = '';
			skmain.innerHTML = '';
			if (M) for (var k in M) updatekey(k);
		},
		showhints: function () {
			delete softkeysui.dataset.hidden;
			setdata(softkeysui, 'shown', 1);
			if (!skhelp.hidden) {
				skhelp.hidden = 1;
				preferences.set(7, 1);
			}
			$.taxeer('softkeyshints', function () {
				popdata(softkeysui, 'shown');
				softkeysui.dataset.hidden = 1;
			}, 2500);
		},
		 
		hfiz: function (name) { 
			if (name) {
				if (name instanceof Array) {
					name.forEach(function (n) {
						softkeys.hfiz(n);
					});
				} else {
					hfizM[name] = M[name];
				}
			}
			return softkeys;
		},
		fasax: function () { 
			for (var i in hfizM) {
				M[i] = hfizM[i];
			}
			softkeys.update();
			return softkeys;
		},
		nsee: function () { 
			hfizM = {};
			return softkeys;
		},
		 
		set: function (name, callback, label, icon, status) { 
			if (name) {
				if (isarr(name)) {
					name.forEach(function (n, i) {
						var labeli = label;
						if (isarr(label)) labeli = label[i];
						var iconi = icon;
						if (isarr(icon)) iconi = icon[i];
						if (i)
						adaaf(n, callback, name[0], iconi, status);
						else
						adaaf(n, callback);
					});
				} else {
					adaaf(name, callback, label, icon, status);
				}
				softkeys.update(name);
				backstack.set('softkeys', M);
			}
			return this;
		},
		add: function (o) { 
			 
			o.callback = o.callback || o.c || o.cb;
			o.key = tolower(o.key || o.k);
			if ( isfun(o.callback) && isstr(o.key) ) {
				o.uid = (o.ctrl ? 1 : 0) +'-'+
						(o.alt ? 1 : 0) +'-'+
						(o.shift ? 1 : 0) +'-'+
						o.key;
				M[ o.uid ] = o;
				updatekey(o.uid);
				backstack.set('softkeys', M);
			}
			return this;
		},
		remove: function (uid) { 
			this.talaf(uid);
		},
		 
		map: function (preset, callbacks) {
			M = Object.assign({}, M, preset);
			if (M && callbacks) {
				for (var i in callbacks) {
					M[i] = M[i] || [];
					M[i][0] = callbacks[i];
				}
			}
			softkeys.update();
			backstack.set('softkeys', M);
		},
		actualpress: function (k, e, longpress) {
			var pd = function () { e && e.preventDefault() };
			k = k.toLowerCase();
			if (k == 'sl') k = K.sl, pd();
			if (k == 'up') k = K.up, pd();
			if (k == 'sr') k = K.sr, pd();
			if (k == 'lf') k = K.lf, pd();
			if (k == 'en') k = K.en, pd();
			if (k == 'rt') k = K.rt, pd();
			if (k == 'cl') k = K.cl, pd();
			if (k == 'dn') k = K.dn, pd();
			if (k == 'bs') k = K.bs, pd();
			if (M && M[k] && typeof M[k][0] == 'function')
				M[k][0](k, e, e && e.type, longpress) && pd(); 
		},
		press: function (k, e, longpress) {
			var caught, pd = function () { preventdefault(e); };
			kraw = k;
			k = k.toLowerCase();
			if (e && e.type && e.type == 'mousewheel') {
				if (e.y <= -1) k = K.up;
				if (e.y >= 1) k = K.dn;
			}
			if (k == 'f1') k = K.sl, pd();
			if (k == 'f2') k = K.sr, pd();
			if (k == 'f5' ||
					(e && e.ctrlKey && ['r', 'ر'].includes(k))
				) {
				history.go();
			}
			if ('escape' == k && !document.fullscreenElement)
				k = K.sr, pd();
			if (k == K.mt) pd();
			var editmode = 0, a = document.activeElement, dir;
			var left_key = K.lf,
				right_key = K.rt;
			if ((a instanceof HTMLTextAreaElement) || a.contentEditable == 'true') {
				if (e && e.altKey || [K.sl, K.sr].includes(k)) {
				} else {
				}
			}
			if ((a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement || a.contentEditable == 'true')
			&& a.type != 'range') {
				editmode = 1;
				if (a.contentEditable == 'true') {
					dir = translate.direction(a.innerText);
				} else {
					dir = translate.direction(a.value);
				}
				a.dir = dir === 1 ? 'rtl' : 'ltr';
			}
			if (a instanceof HTMLButtonElement) {
				if (a.dataset.remover && k == K.en) {
					var parent = removableparent(a);
					if (!focusprev(parent))
						caught = focusnext(parent);
					if (parent) parent.remove();
					pd();
				}
				if ( isfun(a.on_focus_prev) && (k == K.up || k == left_key) ) {
					caught = 1;
					pd();
					a.on_focus_prev();
					return;
				}
				if ( isfun(a.on_focus_next) && (k == K.dn || k == right_key) ) {
					caught = 1;
					pd();
					a.on_focus_next();
					return;
				}
			}
			var length = 0, selectionStart = 0;
			 
			if (editmode) {
				if (a.contentEditable == 'true') {
					length = a.textContent.length;
					selectionStart = getSelection().baseOffset;
				} else {
					length = a.value.length;
					selectionStart = a.selectionStart;
				}
				var atend = (length === selectionStart),
					atstart = (0 === selectionStart);
				if ( atstart && (k == K.up || (k == left_key && dir !== 1) ) && !e.altKey && !e.ctrlKey && !e.shiftKey ) { 
					if ( isfun(a.on_focus_prev) ) { caught = 1; pd(); a.on_focus_prev(); return; }
					caught = focusprev(a), pd();
				}
				if ( atend && (k == K.dn || (k == right_key && dir !== 1) ) && !e.altKey && !e.ctrlKey && !e.shiftKey ) { 
					if ( isfun(a.on_focus_next) ) { caught = 1; pd(); a.on_focus_next(); return; }
					caught = focusnext(a), pd();
				}
				else
				if (k == K.en && e.shiftKey && a.uponshiftenter) a.uponshiftenter(atstart, atend), pd();
				else if (k == K.en && !e.shiftKey && a.uponenter ) a.uponenter (atstart, atend), pd();
			}
			else if (a) {
				if ( is_navigable( a )
					|| a.parentElement.dataset.focus ) {
					if (k == K.up || k == left_key) caught = focusprev(a), pd();
					if (k == K.dn || k == right_key) caught = focusnext(a), pd();
					if (k == K.en && a.onclick) a.onclick(), pd();
				}
			}
			 
			if (editmode && !length) {
				if (k == K.bs) {
					if (a.dataset.removable)
						caught = focusprev(a), a.remove(), pd();
					else
						 pd();
				}
			}
			caught = caught || Hooks.rununtilconsumed('softkey', [k, e || {}, e && e.type, longpress]);
			if (caught) return;
			var mmm = M[kraw] || M[k];
			 
			var let_through, callback = mmm ? mmm[0] : 0;
			var event = e || {};
			var uid = (event.ctrlKey?1:0) +'-'+ (event.altKey?1:0) +'-'+ (event.shiftKey?1:0) +'-'+ k;
			if (M[uid]) {
				mmm = M[uid];
				callback = mmm.callback;
				let_through = 1;
			}
			if ( (!editmode || e.altKey || let_through || global_keys.includes(k)) && mmm && isfun(callback)
			) {
				caught = callback(k, e, e && e.type, longpress);
				if ( caught ) pd(); 
			} else {
				 
			}
			if (isundef(caught) || caught == 1) { 
				var softkey_element = elementbyid( 'sk'+k );
				if (softkey_element) {
					setdata(softkey_element, 'hawm', 1);
					$.taxeer('sk'+k, function () {
						popdata(softkey_element, 'hawm');
					}, 400);
				}
			}
		},
	};
	softkeys.showhints();
	softkeys.M = function () {
		return M;
	};
	var autoheight = function (a) {
		if (a instanceof HTMLTextAreaElement) {
			setcss(a, 'height', 0);
			if (a.scrollHeight > a.offsetHeight)
				setcss(a, 'height', a.scrollHeight+3+'px');
		}
	};
	softkeys.autoheight = autoheight;
	var resize = function () {
		var w = innerwidth(), sl = index[K.sl], sr = index[K.sr];
		if (w > 720) {
			var ww = ((innerwidth()-590)/2);
			if (sl) setcss(sl, 'width', ww+'px');
			if (sr) setcss(sr, 'width', ww+'px');
		} else {
			if (sl) setcss(sl, 'width');
			if (sr) setcss(sr, 'width');
		}
	};
	listener('resize', function () {
		$.taxeer('resizesoftkeys', function () { resize(); }, 100);
	});
	resize();
	Hooks.set('contextmenu', function (e) {
		var a = document.activeElement;
		if (a && (a instanceof HTMLInputElement
		|| a.contentEditable == 'true'
		|| a instanceof HTMLTextAreaElement) && a.type != 'range') {
			softkeys.showhints();
		} else {
			softkeys.showhints();
			return 1;
		}
	});
	Hooks.set('ready', function () {
		skhints.onclick =
		skdots.onclick = function () {
			softkeys.showhints();
		};
	});
	Hooks.set('mousewheel', function (e) {
		e && softkeys.press('', e, e.type);
	});
	Hooks.set('keyup', function (e) {
		var a = document.activeElement;
		if ((a instanceof HTMLInputElement
		|| a instanceof HTMLTextAreaElement) && a.type != 'range') {
			var len = a.value.trim().length, yes;
			if (len) {
				var min = parseint(getattribute(a, 'min') || 0);
				var max = parseint(getattribute(a, 'max') || 0);
				if (min && len < min) a.dataset.under = 1, yes = 1;
				else delete a.dataset.under;
				if (max && len > max) a.dataset.over = 1, yes = 2;
				else delete a.dataset.over;
			} else {
				delete a.dataset.under;
				delete a.dataset.over;
			}
			$.taxeer('softkeysminmax', function () {
				if (yes === 1) webapp.taht3nsar('-'+(min-len));
				else if (yes === 2) webapp.taht3nsar(len+' / '+max+' +'+(len-max));
				else webapp.taht3nsar(len);
			}, 50);
			$.taxeer('softkeysautoheight', function () {
				autoheight(a);
			}, 100);
		} else {
		}
		Hooks.rununtilconsumed('softkey', [e.key.toLowerCase(), e || {}, e && e.type, 0]);
		preventdefault(e);
	});
	Hooks.set('keydown', function (e) {
		if (time.now() - lastkeytime > 60 || lastkeytime === undefined || !0) {
			e && softkeys.press(e.key, e, e.type, 0);
			lastkeytime = time.now();
		} else {
			preventdefault(e);
		}
	});
	Hooks.set('templateset', function (args) {
		var c = args[0],
			o = args[1],
			k = args[2],
			t = args[3];
		if (t === 'skbutton') {
			if (k.icon && !o.icon)
				k.icon.remove();
			if (!o.label && !o.icon)
				c.hidden = 1;
		}
	});
	Hooks.set('restore', function (args) {
		var oldM = backstack.get('softkeys');
		if (oldM) {
			M = Object.assign({}, oldM);
			softkeys.update();
		}
	});
	Hooks.set('backstack', function (level) {
		softkeys_backstack.querySelectorAll('span').forEach(function (o, i) {
			o.hidden = i > level;
		});
	});
	if (preferences.get(softkeys.saveto, 1)) skhelp.hidden = 1;
})();
;(function(){
	var softkeys_list_debug = 0;
	softkeys.list = {
		 
		basic: function (LV) {
			if (softkeys_list_debug) $.log.w('softkeys.list.basic', LV);
			if (LV) {
				softkeys.set(K.en, function (k, e) {
					if (LV.element.dataset.focussed) {
						LV.press(K.en);
						e && e.preventDefault();
					}
				});
				softkeys.set(K.up, function (k, e) {
					if (LV.element.dataset.focussed) {
						LV.up();
						e && e.preventDefault();
					}
				});
				softkeys.set(K.dn, function (k, e) {
					if (LV.element.dataset.focussed) {
						LV.down();
						e && e.preventDefault();
					}
				});
				softkeys.set(K.rt, function (k, e) {
					if (LV.element.dataset.focussed) {
						LV.right();
						e && e.preventDefault();
					}
				});
				softkeys.set(K.lf, function (k, e) {
					if (LV.element.dataset.focussed) {
						LV.left();
						e && e.preventDefault();
					}
				});
			} else {
				softkeys.talaf([K.en, K.up, K.dn, K.rt, K.lf]);
			}
		},
	};
})();
var sheet;
;(function(){
	var index = {}, header, container, active_sheet_name, ae, murakkaz;
	sheet = {
		okay: 0,
		cancel: 0,
		onshow: 0,
		zaahir: function (name) { 
			return active_sheet_name === name;
		},
		is_active: function (name) {
			return active_sheet_name === name;
		},
		get_active: function () {
			return active_sheet_name;
		},
		get_active_title: function () {
			return header.innerText;
		},
		bardaa: function (v) {
			if (!container.firstElementChild) return;
			var children = Object.values(container.firstElementChild.children);
			if (v) {
				children.forEach(function (item) {
					if (getdata(item, 'focus') === 'list') {
						var l = item.listobject;
						if (l.murakkaz) {
							murakkaz = l;
							l.rakkaz();
						}
					}
				});
				setdata(container, 'bardaa', 1);
				softkeys.set(K.sl, function (e) {
					webapp.itlaa3('pleasewait');
				}, 0, 'iconhourglassempty');
				ae = webapp.blur();
			}
			else {
				softkeys.set(K.sl, function (e) {
					sheet.okay();
				}, 0, 'icondone');
				popdata(container, 'bardaa');
				if (ae) ae.focus();
				if (murakkaz) murakkaz.rakkaz(1);
			}
		},
		header: function (text) {
			if (text) {
				if (text instanceof Array) {
					header.dataset.i18n = text[0];
				} else {
					header.innerText = text;
				}
				header.hidden = 0;
			} else
				delete headerui.dataset.i18n,
				header.innerText = '',
				header.hidden = 1;
		},
		hide: function () {
			sheetui.hidden = 1;
			sheet.okay = 0;
			sheet.cancel = 0;
			active_sheet_name = 0;
		},
		show: function (args) {
			ae = murakkaz = 0;
			container.innerHTML = '';
			sheetui.hidden = 0;
			if (typeof args === 'string')
				args = {
					name: args,
				};
			var name = args.name || args.n,
				title = args.title || args.t || '',
				minqabl = args.minqabl || args.b,
				callback = args.callback || args.c,
				oncancel = args.oncancel || args.x,
				ayyihaal = args.ayyihaal|| args.a,
				init = args.init || args.i,
				keys;
			header.innerText = title;
			sheet.onshow && sheet.onshow(name);
			var ui = index[name];
			if (ui) {
				active_sheet_name = name;
				var node = ui.cloneNode(true);
				if (node) {
					delete node.dataset.sheet;
					node.dataset.visiblesheet = 1;
					node.hidden = 0;
					container.appendChild(node);
					sheetui.focus();
					translate && translate.update( sheetui );
					Hooks.rununtilconsumed('widgets', sheetui);
					keys = templates.keys(container);
					init && init( keys );
					Hooks.rununtilconsumed('widgets', sheetui);
				}
			}
			if (callback)
			sheet.okay = function (args) {
				callback && callback( args || keys );
				ayyihaal && ayyihaal( args || keys );
				webapp.blur();
				Hooks.run('back');
			};
			else
			sheet.okay = 0;
			sheet.bardaa();
			if (isfun(minqabl)) {
				var oldokay = sheet.okay;
				sheet.okay = function (args) {
					sheet.bardaa(1);
					minqabl(args || keys, function (args) {
						oldokay(args || keys);
					});
				};
			}
			sheet.cancel = function (args) {
				oncancel && oncancel( args || keys );
				ayyihaal && ayyihaal( args || keys );
				webapp.blur();
				Hooks.run('back');
			};
		},
		get: function (name) {
			if (!name) return container.firstElementChild;
			else return index[name];
		},
		index: function (parent) {
			var elements = (parent||document.body).querySelectorAll('[data-sheet]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.sheet ) {
					elements[i].hidden = 1;
					index[ elements[i].dataset.sheet ] = elements[i];
				}
			}
			return index;
		},
	};
	Hooks.set('ready', function () {
		sheet.index();
		var mfateeh = templates.keys(sheetui);
		header = mfateeh.header;
		container = mfateeh.container;
	});
})();
function open_list_sheet(name, init, callback) { 
	var new_list;
	backstack.sheet({
		n: 'list_sheet', 
		t: name,
		i: function (k) {
			new_list = list( k.list ).listitem( 'list_sheet_item' ).idprefix( 'list_sheet_item' );
			if (isfun(init)) init(new_list);
		},
		c: function () {
			if (isfun(callback)) callback(new_list);
		}
	});
}
var themes;
;(function(){
	var K, P, settingsuid, current = 0, contrast = 0;
	var store = {
		0: {
			status: 'rgba(0,0,0,0.6)',
			statusm: 'rgba(0,0,0,0.2)',
			textl: '#fff',
			text: '#ddd',
			textd: '#aaa',
			textdt: '#aaaaaa55',
			textxd: '#777',
			textxdt: '#77777755',
			primaryl: '#050505',
			primary: 'black',
			primaryd: 'black',
			primaryt: 'rgba(0,0,0,0.8)', 
			primaryxt: 'rgba(0,0,0,0.4)',
			secondaryl: '#353535',
			secondary: '#333',
			secondaryd: '#252525',
			secondaryt: 'rgba(40,40,40,0.8)',
			tertiaryl: '#454545',
			tertiary: '#444',
			tertiaryd: '#353535',
			tertiaryt: 'rgba(53,53,53,0.8)',
			accentl: '#4ccbfc',
			accent: '#04baf5',
			accentt: 'rgba(4, 186, 245, 0.7)',
			accentxt: 'rgba(4, 186, 245, 0.4)',
			accentd: '#0284c0',
			accentdt: 'rgba(4, 126, 205, 0.7)',
			green: '#0c0',
			yellow: '#ca0',
			redl: '#f99',
			red: '#c00',
			redd: '#900',
},
		1: {
			status: 'rgba(0,0,0,0.6)',
			statusm: 'rgba(0,0,0,0.2)',
			textl: '#111',
			text: '#333',
			textd: '#666',
			textdt: '#66666655',
			textxd: '#888',
			textxdt: '#88888855',
			primaryl: '#e6e6e6',
			primary: '#fff',
			primaryd: '#d6d6d6',
			primaryt: 'rgba(255,255,255,0.8)', 
			primaryxt: 'rgba(255,255,255,0.4)',
			secondaryl: '#e6e6e6',
			secondary: '#d6d6d6',
			secondaryd: '#c6c6c6',
			secondaryt: 'rgba(180,180,180,0.8)',
			tertiaryl: '#eee',
			tertiary: '#ddd',
			tertiaryd: '#ccc',
			tertiaryt: 'rgba(204,204,204,0.8)',
			accentl: '#0bb8cb',
			accent: '#00609a',
			accentt: 'rgba(0, 67, 113, 0.7)',
			accentxt: 'rgba(0, 67, 113, 0.4)',
			accentd: '#004371',
			accentdt: 'rgba(0, 37, 93, 0.7)',
			green: '#0c0',
			yellow: '#ca0',
			redl: '#900',
			red: '#c00',
			redd: '#faa',
		},
		2: {
			status: 'rgba(0,0,0,0.7)',
			statusm: 'rgba(0,0,0,0.35)',
			textl: '#fff',
			text: '#ddd',
			textd: '#aaa',
			textdt: '#aaaaaa55',
			textxd: '#777',
			textxdt: '#77777755',
			primaryl: '#050505',
			primary: 'black',
			primaryd: 'black',
			primaryt: 'rgba(0,0,0,0.8)', 
			primaryxt: 'rgba(0,0,0,0.4)',
			secondaryl: '#555',
			secondary: '#444',
			secondaryd: '#333',
			secondaryt: 'rgba(60,60,60,0.8)',
			tertiaryl: '#777',
			tertiary: '#666',
			tertiaryd: '#555',
			tertiaryt: 'rgba(83,83,83,0.8)',
			accentl: '#4ccbfc',
			accent: '#04baf5',
			accentt: 'rgba(4, 186, 245, 0.7)',
			accentxt: 'rgba(4, 186, 245, 0.4)',
			accentd: '#0284c0',
			accentdt: 'rgba(4, 126, 205, 0.7)',
			green: '#0c0',
			yellow: '#ca0',
			redl: '#f99',
			red: '#c00',
			redd: '#900',
},
		3: {
			status: 'rgba(0,0,0,0.6)',
			statusm: 'rgba(0,0,0,0.2)',
			textl: '#111',
			text: '#333',
			textd: '#666',
			textdt: '#66666655',
			textxd: '#888',
			textxdt: '#88888855',
			primaryl: '#e6e6e6',
			primary: '#fff',
			primaryd: '#d6d6d6',
			primaryt: 'rgba(255,255,255,0.8)', 
			primaryxt: 'rgba(255,255,255,0.4)',
			secondaryl: '#e6e6e6',
			secondary: '#d6d6d6',
			secondaryd: '#c6c6c6',
			secondaryt: 'rgba(180,180,180,0.8)',
			tertiaryl: '#eee',
			tertiary: '#ddd',
			tertiaryd: '#ccc',
			tertiaryt: 'rgba(204,204,204,0.8)',
			accentl: '#0bb8cb',
			accent: '#00609a',
			accentt: 'rgba(0, 67, 113, 0.7)',
			accentxt: 'rgba(0, 67, 113, 0.4)',
			accentd: '#004371',
			accentdt: 'rgba(0, 37, 93, 0.7)',
			green: '#0c0',
			yellow: '#ca0',
			redl: '#900',
			red: '#c00',
			redd: '#faa',
		},
	};
	function set_theme_with_contrast(theme) {
		if (contrast) { 
			if ( theme ) { 
				themes.set(3);
			} else { 
				themes.set(2);
			}
		} else { 
			if ( theme ) { 
				themes.set(1);
			} else { 
				themes.set(0);
			}
		}
	}
	themes = {
		 
		saveto: 19,
		saveto_contrast: '19c',
		 
		set: function (theme, key, value) {
			var arglen = arguments.length;
			if (arglen === 0) {
				themes.set(current);
			}
			if (arglen === 1) {
				if (store[theme]) {
					dynamicstyle.innerHTML = updatetheme(store[theme]);
					themecolor && themecolor.setAttribute('content', themes.get('status'));
				}
			}
			if (arglen === 2) {
				store[theme] = key;
			}
			if (arglen === 3) {
				store[theme] = store[theme] || {};
				store[theme][key] = value;
			}
			return themes;
		},
		 
		get: function (theme, key) {
			var arglen = arguments.length;
			if (arglen === 0 && current !== undefined)
				return current;
			if (arglen === 1 && current !== undefined)
				return store[current][theme];
			if (arglen === 2)
				return store[theme][key];
			return false;
		},
		toggle: function () {
			current = current ? 0 : 1;
			set_theme_with_contrast(current);
			settings.jaddad(settingsuid);
		},
	};
	Hooks.set('ready', function () {
		if (preferences) {
			current = preferences.get(themes.saveto, 1) || 0;
			contrast = preferences.get(themes.saveto_contrast, 1) || 0;
		}
		set_theme_with_contrast(current);
		settingsuid = settings.adaaf('theme', function () {
			var iswhite = preferences.get(themes.saveto, 1);
			current = iswhite ? 1 : 0;
			set_theme_with_contrast(current);
			return [ iswhite ? 'white' : 'black' ];
		}, function () {
			preferences.set(themes.saveto, preferences.get(themes.saveto, 1) ? 0 : 1);
		}, 'icontheme');
		settingsuid = settings.adaaf('contrast', function () {
			var ishigh = preferences.get(themes.saveto_contrast, 1);
			contrast = ishigh ? 1 : 0;
			set_theme_with_contrast(current);
			return [ ishigh ? 'high' : 'low' ];
		}, function () {
			preferences.set(themes.saveto_contrast, preferences.get(themes.saveto_contrast, 1) ? 0 : 1);
		}, 'iconbrightness7');
	});
	Hooks.set('viewready', function (args) {
		K = softkeys.K, 
		P = softkeys.P; 
		if (Webapp.is_at_home()) {
			softkeys.add({ n: 'Theme',
				k: 'i',
				ctrl: 1,
				alt: 1,
				i: 'icontheme',
				c: function (k, e) {
					themes.toggle();
					e && e.preventDefault();
				}
			});
		}
	});
})();
var dialog;
;(function(){
	dialog = {
		okay: 0,
		cancel: 0,
		onshow: 0,
		hide: function () {
			dialogui.hidden = 1;
			dialog.okay = 0;
			dialog.cancel = 0;
		},
		show: function (args) {
			args = args || {};
			markooz() && markooz().blur();
			dialogui.hidden = 0;
			var k = templates.keys(dialogui) ,
				max = args.max || args.x ,
				callback = args.callback || args.c ,
				message = args.message || args.m ,
				answer = args.answer || args.a ,
				question = args.question || args.q ,
				multiline = args.multiline,
				input_element;
			k.input.value = '';
			k.textarea.value = '';
			if (multiline) {
				ixtaf(k.input);
				izhar(k.textarea);
				input_element = k.textarea;
			} else {
				ixtaf(k.textarea);
				izhar(k.input);
				input_element = k.input;
			}
			dialog.onshow && dialog.onshow(name);
			dialog.okay = function () {
				var answer = input_element.value;
				if (max) answer = answer.slice(0, max);
				callback && callback(answer);
				document.activeElement && document.activeElement.blur();
				Hooks.run('back');
			};
			dialog.cancel = function () {
				document.activeElement && document.activeElement.blur();
				Hooks.run('back');
			};
			input_element.value = answer || '';
			attribute(input_element, 'max', max || 0);
			if (question) {
				input_element.hidden = 0;
				input_element.focus();
			} else {
				input_element.hidden = 1;
			}
			innertext(k.message, '');
			k.message.dataset.i18n = message || '';
			translate.update(dialogui);
		},
	};
})();
 
;(function(){
	var x = 0, y = 0, curx = 0, cury = 0, horizontal = 0, vertical = 0,
		size = 20, sizew = 15, caught = 0, start = 0;
	var saveto = 18, settingsuid, webapptouchdir = 0;
	Hooks.set('ready', function () {
		 
	});
	Hooks.set('keyup', function (e) {
		var k = e.key.toLowerCase();
		if (k === 'r' && e.ctrlKey)
			location.reload(), preventdefault(e);
		if (['escape', 'f11'].includes(k) && document.fullscreenElement)
			document.exitFullscreen(), preventdefault(e);
		else if (k === 'f11')
			document.firstElementChild.requestFullscreen(), preventdefault(e);
	});
	listener('touchstart', function (e) {
		if (softkeys.touchdpad) preventdefault(e);
		x = e.touches[0].clientX;
		y = e.touches[0].clientY;
		caught = 0;
		start = e.timeStamp;
		if (webapptouchdir) {
			if ( x / innerwidth() < 0.5 ) {
				document.body.dataset.align = 'left';
			} else {
				delete document.body.dataset.align;
			}
		}
		Hooks.run('navigationstart', [x, y]);
	}, { passive: false });
	listener('touchmove', function (e) {
		curx = e.touches[0].clientX,
		cury = e.touches[0].clientY,
		horizontal = curx - x,
		vertical = cury - y;
		if (horizontal < -sizew || horizontal > sizew) {
			if (horizontal > sizew)
				horizontal = 1;
			else if (horizontal < -sizew)
				horizontal = -1;
			if (horizontal !== 0)
				x = curx;
		} else horizontal = 0;
		if (vertical < -size || vertical > size) {
			if (vertical > size)
				vertical = 1;
			else if (vertical < -size)
				vertical = -1;
			if (vertical !== 0)
				y = cury;
		} else vertical = 0;
		if (horizontal !== 0 || vertical !== 0)
			caught = 1,
			Hooks.run('navigation', [horizontal, vertical]);
	});
	listener('touchend', function (e) {
		if (!caught) {
			if ( e.timeStamp - start > 250 ) 
				Hooks.run('navigationlongpress', [x, y, e.path, horizontal, vertical]);
			else
				Hooks.run('navigationpress', [x, y, e.path, horizontal, vertical]);
		} else
			Hooks.run('navigationend', [x, y, e.path, horizontal, vertical]);
	});
})();
;(function(){
	var saveto = 16, settingsuid, locked = 0,
		edgestart = 0, 
		edgeend = 0, lastitem, lamsahbar,
		softkeystouchdpad = 1; 
	Hooks.set('ready', function () {
		if (preferences) softkeystouchdpad = preferences.get(saveto, 1) || 1;
		softkeys.touchdpad = softkeystouchdpad;
		settingsuid = settings.adaaf('softkeystouchdpad', function () {
			softkeystouchdpad = preferences.get(saveto, 1);
			softkeys.touchdpad = softkeystouchdpad;
			return [softkeystouchdpad ? 'on' : 'off' ];
		}, function () {
			preferences.set(saveto, preferences.get(saveto, 1) ? 0 : 1);
		});
	});
	Hooks.set('navigationstart', function (args) {
		locked = 0; 
		if (args[0] > innerwidth(-60)) edgestart = 1;
		else if (args[0] < 60) edgestart = -1;
		else edgestart = 0;
	});
	Hooks.set('navigation', function (args) {
		if (!locked || locked === 2) {
			if (args[0] > 0) { 
				if (softkeystouchdpad && !edgestart) softkeys.press(K.rt);
				locked = 2;
			}
			if (args[0] < 0) { 
				if (softkeystouchdpad && !edgestart) softkeys.press(K.lf);
				locked = 2;
			}
		}
		if (!locked || locked === 1) {
			if (args[1] > 0) { 
				if (softkeystouchdpad && !edgestart) softkeys.press(K.dn);
				locked = 1;
			}
			if (args[1] < 0) { 
				if (softkeystouchdpad && !edgestart) softkeys.press(K.up);
				locked = 1;
			}
		}
	});
	var doclick = function (path) {
		if (path)
		for (var i = 0; i < path.length; ++i) {
			if (path[i].onclick) {
				path[i].onclick();
				path[i].blur();
				break;
			}
			if (path[i] instanceof HTMLButtonElement) {
				path[i].click();
				path[i].blur();
				break;
			}
		}
	};
	Hooks.set('navigationend', function (args) {
		if (!softkeystouchdpad) {
			if (args[3] < 0) {
				pager && pager.yameen();
			}
			if (args[3] > 0) {
				pager && pager.shimaal();
			}
		} else
		if (pager && edgestart) { 
			edgeend = 0;
			if (args[0] > innerwidth(-60)) edgeend = 1;
			else if (args[0] < 60) edgeend = -1;
			else edgeend = 0;
			if (edgestart !== edgeend) { 
				if (edgestart === 1) pager.yameen(); 
				else if (edgestart === -1) pager.shimaal(); 
			}
		}
	});
	Hooks.set('navigationpress', function (args) {
		var isbutton = 0;
		if (isarr(args[2]))
		args[2].forEach(function (item) {
			if (item instanceof HTMLButtonElement
			|| item instanceof HTMLInputElement
			|| item instanceof HTMLTextAreaElement
			) {
				isbutton = 1;
				item.focus();
				if (lastitem) {
					popdata(lastitem, 'lamsah');
					lastitem = 0;
				}
				setdata(item, 'lamsah', 1);
				lastitem = item;
				$.taxeer('sklamsah', function () {
					if (lastitem) {
						popdata(lastitem, 'lamsah');
						lastitem = 0;
					}
				}, 300);
			}
		});
		if (args[1] > innerheight(-60)) {
			if (softkeystouchdpad) doclick(args[2]);
		} else
		if (iswithinelement(args, skhints) || isbutton) {
			if (softkeystouchdpad) doclick(args[2]);
			softkeys.showhints();
		}
		else if (softkeystouchdpad) {
			if (!skhints.hidden) softkeys.showhints();
			softkeys.press(K.en);
		}
	});
	Hooks.set('navigationlongpress', function (args) {
		softkeys.showhints();
	});
	 
	var lamsahbarimtahan = function () {
	};
	listener(skhints, ['touchstart' ], function (e) {
		preventdefault(e);
		lamsahbar = [e.touches[0].pageX, e.touches[0].pageY-scrollingelement().scrollTop];
	});
	listener(skhints, ['touchmove' ], function (e) {
		if (lamsahbar) {
			lamsahbar = [e.touches[0].pageX, e.touches[0].pageY-scrollingelement().scrollTop];
			var ch = skhints.children, el,
				path;
			if (e.type == 'touchmove') {
				path = raycast(lamsahbar[0], lamsahbar[1]);
			}
			for (var i in ch) {
				if ( ch.hasOwnProperty(i) ) {
					for (j in path) {
						if (path[j] == ch[i]) el = ch[i];
					}
				}
			}
			if (el) {
				for (var i in ch) {
					if ( ch.hasOwnProperty(i) ) {
						if (path[j] != el) popdata(ch[i], 'hawm');
					}
				}
				setdata(el, 'hawm', 1);
				softkeys.showhints();
			}
		}
	});
	listener(skhints, ['touchend', 'touchcancel' ], function (e) {
		var ch = skhints.children, path;
		if (e.type == 'touchend' && lamsahbar) {
			path = raycast(lamsahbar[0], lamsahbar[1]);
		}
		for (var i in ch) {
			if ( ch.hasOwnProperty(i) ) {
				for (j in path) {
					if (path[j] == ch[i]) {
						if (ch[i] && e.type == 'touchend') {
							ch[i].click();
						}
					}
				}
			}
		}
		for (var i in ch) {
			if ( ch.hasOwnProperty(i) ) {
				popdata(ch[i], 'hawm');
			}
		}
		lamsahbar = 0;
	});
	 
})();
var Sessions, sessions,
	USERNAMEMIN = 3,
	USERNAMEMAX = 24,
	PASSWORDMIN = 8,
	PASSWORDMAX = 2048;
;(function(){
	'use strict';
	var cache = {}, lastsearch, mfateeh, usnmavlble = {};
	var jaddadkeys = function (parent) {
		var current = parseint(parent.dataset.currentqadam || 0);
		if (current === 0) {
			softkeys.set(K.sr, function () {
				Hooks.run('back');
			}, 0, 'iconarrowback');
		} else {
			softkeys.set(K.sr, function () {
				sessions.shimaal(parent);
				return 1;
			}, 0, 'iconarrowback');
		}
		softkeys.set(K.sl, function () {
			sessions.yameen(parent);
			return 1;
		}, 0, 'icondone');
	};
	var setcaptcha = function () {
		if (cache && mfateeh) {
			setvalue(mfateeh.hash, cache.hash);
			innerhtml(mfateeh.captcha, cache.captcha);
		}
	};
	var smartfocus = function (parent) {
		var current = parseint(parent.dataset.currentqadam || 0);
		if (mfateeh) {
			if (backstack.states.view === 'signup') {
				if (current === 0) {
					mfateeh.username.focus();
				}
				if (current === 1) {
					mfateeh.password.focus();
				}
				if (current === 2) {
					mfateeh.answer.focus();
				}
			}
			if (backstack.states.view === 'signin') {
				if (current === 0) {
					mfateeh.username.focus();
				}
				if (current === 1) {
					mfateeh.answer.focus();
				}
			}
		}
	};
	var usernamevalid = function (user) {
		if (user.length >= USERNAMEMIN && user.length <= USERNAMEMAX) {
			innertext(mfateeh.aliasstatus, '');
			return 1;
		} else {
			if (user.length === 0) innertext(mfateeh.aliasstatus, '');
			else innertext(mfateeh.aliasstatus, xlate(
				user.length < USERNAMEMIN ? 'usernameunder' : 'usernameover'
			));
			return 0;
		}
	};
	var usernamexataa = function (xataa, username, proceed) {
		if (backstack.states.view === 'signup') {
			var m = view.mfateeh('signup');
			if (username) {
				innertext(m.usernamerefined, username);
			}
			innertext(m.aliasstatus, xlate(xataa));
			if (proceed) {
				m.aqdaam.dataset.currentqadam =
								xataa === 'usernameavailable' ? 1 : 0;
				sessions.jaddad(m.aqdaam);
			}
			smartfocus(m.aqdaam);
		}
	};
	var passwordxataa = function (xataa) {
		if (backstack.states.view === 'signin') {
			var m = view.mfateeh('signin');
			m.aqdaam.dataset.currentqadam = 0;
			sessions.jaddad( m.aqdaam );
			m.password.focus();
			innertext(m.passstatus, xlate(xataa))
		}
	};
	var answerxataa = function (xataa) {
		if (['signin', 'signup'].includes(backstack.states.view)) {
			var m = view.mfateeh(backstack.states.view);
			sessions.jaddad( m.aqdaam );
			sessions.getcaptcha();
			m.answer.focus();
			innertext(m.answerstatus, xlate(xataa));
			if (backstack.states.view == 'signin') {
				m.aqdaam.dataset.currentqadam = 1;
			} else {
				m.aqdaam.dataset.currentqadam = 2;
			}
		}
	};
	function password_visibility(yes) {
		softkeys.add({ n: yes ? 'Hide Password' : 'Show Password',
			shift: 1,
			alt: 1,
			k: 's',
			i: yes ? 'iconvisibilityoff' : 'iconvisibility',
			c: function () {
				attribute(mfateeh.password, 'type', yes ? 'password' : 'text');
				password_visibility(!yes);
			}
		});
	}
	function update_sidebar() {
		if (get_global_object().Sidebar) {
			if (Sessions.signedin()) {
				Sidebar.remove('signin');
				Sidebar.remove('signup');
			} else {
				Sidebar.set({
					uid: 'signin',
					title: xlate('signin'),
					icon: 'iconperson',
				});
				Sidebar.set({
					uid: 'signup',
					title: xlate('signup'),
					icon: 'iconpersonadd',
				});
			}
		}
	}
	Sessions = sessions = {
		jaddad: function (parent) {
			jaddadkeys(parent);
			var current = parseint(parent.dataset.currentqadam || 0);
			var cn = parent.children, element = false;
			for (var i = 0; i < cn.length; ++i) {
				var e = cn[i];
				if (i === current) {
					element = e;
					e.hidden = 0
				} else {
					e.hidden = 1;
				}
			}
			return element;
		},
		yameen: function (parent) {
			var current = parseint(parent.dataset.currentqadam || 0), yes;
			if (mfateeh) {
				var user = generate_alias(mfateeh.username.value);
				var pass = mfateeh.password.value.trim();
				var answer = mfateeh.answer.value;
				var hash = mfateeh.hash.value;
				if (backstack.states.view === 'signup') {
					yes = 1;
					if (current == 0) {
						if (usernamevalid(user)) sessions.usernameexists(user);
						yes = 0;
					}
					if (current == 1) {
						if (pass.length >= PASSWORDMIN && pass.length <= PASSWORDMAX)
							innertext(mfateeh.passstatus, '');
						else
							innertext(mfateeh.passstatus, xlate(
								pass.length < PASSWORDMIN ? 'passwordunder' : 'passwordover'
							)),
							yes = 0;
					}
					if (current == 2) {
						if (answer.length)
							innertext(mfateeh.answerstatus, '');
						else
							innertext(mfateeh.answerstatus, xlate('answerblank')),
							yes = 0;
						if (yes) {
							sessions.login(user, pass, hash, answer, 1);
						}
					}
				}
				if (backstack.states.view === 'signin') {
					yes = 1;
					if (current == 0) {
						if (user.length >= USERNAMEMIN && user.length <= USERNAMEMAX)
							innertext(mfateeh.aliasstatus, '');
						else
							innertext(mfateeh.aliasstatus, xlate(
								user.length < USERNAMEMIN ? 'usernameunder' : 'usernameover'
							)),
							yes = 0;
						if (pass.length >= PASSWORDMIN && pass.length <= PASSWORDMAX)
							innertext(mfateeh.passstatus, '');
						else
							innertext(mfateeh.passstatus, xlate(
								pass.length < PASSWORDMIN ? 'passwordunder' : 'passwordover'
							)),
							yes = 0;
					}
					if (current == 1) {
						if (answer.length)
							innertext(mfateeh.answerstatus, '');
						else
							innertext(mfateeh.answerstatus, xlate('answerblank')),
							yes = 0;
						if (yes) {
							sessions.login(user, pass, hash, answer);
						}
					}
				}
			}
			if (yes && current < parent.childElementCount-1) {
				parent.dataset.currentqadam = ++current;
				sessions.jaddad(parent);
				smartfocus(parent);
			}
		},
		shimaal: function (parent) {
			var current = parseint(parent.dataset.currentqadam || 0);
			if (current > 0) {
				parent.dataset.currentqadam = --current;
				sessions.jaddad(parent);
				smartfocus(parent);
			}
		},
		getqadam: function (v) {
			return templates.keys( mfateeh.aqdaam.childNodes[v] );
		},
		setqadam: function (v) {
			currentqadam = v;
			return templates.keys( sessions.jaddad() );
		},
		signedin: function () { 
			return preferences.get(1);
		},
		uid: function () { 
			return preferences.get(2);
		},
		get: function (uri, dry) {
			if (backstack.locked)
				return;
			uri = appui.cleanupuri( uri );
			if ( appui.lasturi === uri ) {
				appui.closeall();
				return;
			}
			var crumbs = appui.crumbify(uri);
			if (!dry) {
					backstack.pushstate('/'+uri);
					appui.setchanges( crumbs );
			} else
				appui.setchanges( crumbs );
			appui.lasturi = uri;
		},
		 
		setsession: function () {
			var statuschanged = false;
			var key = preferences.get(1);
			var uid = '';
			var username = '';
			var displayname = '';
			var permissions = '';
			if (key && appui.signedin !== true)
				statuschanged = true;
			else if (!key && appui.signedin === false)
				statuschanged = true;
			appui.signedin = false;
			if (key) {
				appui.signedin = true;
				uid = preferences.get( 2 );
				username = preferences.get( 20 );
				displayname = preferences.get( 21 );
				permissions = preferences.get( 11 );
			}
			if (appui.signedin) {
				sessionformaway.hidden = false;
				sessionform.hidden = true;
				document.body.className = permissions;
			} else {
				sessionformaway.hidden = true;
				sessionform.hidden = false;
				document.body.className = '';
				networki.stoplistening();
			}
			if (statuschanged) {
				dom.applysession( appui.signedin );
				menu.setupdynamicparts();
				appui.resetloginform();
				Hooks.run('appuisessionchange', appui.signedin);
			}
		},
		getcaptcha: function () {
			var key = preferences.get(1);
			if (!key) {
				if (!cache.hash) {
					webapp.dimmer(LAYERTOPMOST, xlate('fetchingcaptcha'));
					Network.get('sessions', 'captcha', 1);
				} else {
					setcaptcha();
				}
			}
		},
		resetloginform: function () {
			var keys = dom.getformkeys( sessionform );
			keys.alias.value = '';
			delete keys.alias.dataset.error;
			keys.pass.value = '';
			delete keys.pass.dataset.error;
			keys.answer.value = '';
			delete keys.answer.dataset.error;
			keys.hash.value = '';
			delete document.body.dataset.listitem;
		},
		setloginform: function (data) {
			data = data || {};
			var keys = dom.getformkeys( sessionform );
			var captcha = keys.captcha;
			var hash = keys.hash;
			if (data.key) {
				preferences.set( 1 , data.key ); 
				preferences.set( 81 , data.latitude ); 
				preferences.set( 82 , data.longitude ); 
				preferences.set( 2 , data.uid );
				preferences.set( 20 , data.username ); 
				preferences.set( 21 , data.displayname ); 
				preferences.set( 22 , data.type );
			} else {
				if (data.username === 'taken') {
					keys.aliasstatus.innerText = translate('aliasunique');
					keys.alias.dataset.error = 1;
				} else {
					keys.aliasstatus.innerText = '';
					delete keys.alias.dataset.error;
				}
				if (data.password === 'wrong') {
					keys.passstatus.innerText = translate('passwrong');
					keys.pass.dataset.error = 1;
				} else {
					keys.passstatus.innerText = '';
					delete keys.pass.dataset.error;
				}
				if (data.answer === 'wrong') {
					keys.answerstatus.innerText = translate('answerwrong');
					keys.answer.dataset.error = 1;
				} else {
					keys.answerstatus.innerText = '';
					delete keys.answer.dataset.error;
				}
				if (data.captcha) {
					captcha.hidden = false;
					captcha.innerHTML = data.captcha;
					hash.value = data.hash;
				} else {
					captcha.hidden = true;
				}
			}
		},
		signout: function () {
			Webapp.status( xlate('loggingout') );
			Offline.recreate(function () {
				preferences.pop( '@'); 
				preferences.pop( 1 );
				preferences.pop( 2 );
				preferences.pop( 4 );
				preferences.pop( 6 );
				preferences.pop( 11 );
				preferences.pop( 20 );
				preferences.pop( 21 );
				cache = {};
				Webapp.status( xlate('loggedout') );
				update_sidebar();
				Hooks.run('sessionchange', 0);
				Hooks.run('view', 'main');
			});
		},
		usernameexists: function (user, temp) {
			var cached = usnmavlble['_'+user];
			if (user.length >= USERNAMEMIN && user.length <= USERNAMEMAX) {
				if (cached && temp) {
					usernamexataa(cached, user);
				} else {
					var payload = {
						username : user ,
						join : 1 ,
						exists : 1 ,
						proceed : !temp ,
					};
					if (!temp)
						webapp.dimmer(LAYERTOPMOST, xlate('checkingusername'));
					Network.get('sessions', 'username_exists', payload);
				}
			}
		},
		login: function (user, pass, hash, answer, join) {
			if (user.length > 2 && user.length < 25 && pass.length > 7 && answer.length) {
				var payload2 = {
					username : user ,
					password : pass ,
					hash : hash ,
					answer : answer ,
				};
				if (join) payload2.join = 1;
				webapp.dimmer( true, translate('loggingin') );
				Network.get('sessions', 'sign_in', payload2);
			}
		},
	};
	Hooks.set('ready', function (args) {
		Network.intercept('sessions', 'key', function (finish) {
			finish(sessions.signedin() || undefined);
		});
		Network.response.intercept('sessions', 'key', function (response) {
			if (response === false) {
				sessions.signout();
			}
		});
		Network.response.get('sessions', 'username_exists', function (response) {
			if (response.join) {
				usnmavlble['_'+response.username] = response.exists;
				usernamexataa(response.exists, response.username, response.proceed);
				webapp.dimmer();
			}
		});
		Network.response.get('sessions', 'captcha', function (response) {
			webapp.dimmer();
			if (mfateeh) {
				cache.hash = response.hash;
				cache.captcha = response.captcha;
				setcaptcha();
			}
		});
		Network.response.get('sessions', 'key', function (response) {
		});
		Network.response.get('sessions', 'sign_in', function (response) {
			webapp.dimmer();
			if (response.password) {
				passwordxataa(response.password);
			}
			if (response.answer) {
				answerxataa(response.answer);
			}
			if (response.key) {
				var signedin = sessions.signedin();
				preferences.set( 1 , response.key );
				preferences.set( 81 , response.latitude );
				preferences.set( 82 , response.longitude );
				preferences.set( 2 , response.uid );
				preferences.set( 20 , response.username );
				preferences.set( 21 , response.displayname );
				preferences.set( 22 , response.type );
				if (!signedin) { 
					Hooks.run('sessionchange', response.key);
					update_sidebar();
					Webapp.status( xlate('loggedin') );
					Hooks.run('view', 'main');
				}
			}
		});
		var active_sessions_list;
		Settings.adaaf('Sessions', 0, function () {
			open_list_sheet('Sessions', function (l) {
				active_sessions_list = l;
				Network.get('sessions', 'active', 1);
			});
		}, 'iconsettings');
		Network.response.get('sessions', 'active', function (response) {
			if (active_sessions_list && response && response.names) {
				active_sessions_list.title(response.names.length+' active sessions');
				response.names.forEach(function (o) {
					active_sessions_list.set({
						title: o
					});
				});
			}
		});
		Settings.adaaf('signout', 0, function () {
			Hooks.run('dialog', {
				m: 'signoutconfirm',
				c: function () {
					sessions.signout();
				},
			});
		});
		var m = view.mfateeh('signup');
		var usnmfld = m.username;
		usnmfld.onkeyup = function () {
			var user = generate_alias(usnmfld.value);
			if (usernamevalid(user)) {
				var cached = usnmavlble['_'+user];
				if (cached === undefined)
				$.taxeer('usernametempcheck', function () {
					if (m.aqdaam.dataset.currentqadam == '0') {
						sessions.usernameexists( user, 1 );
					}
				}, 1000);
				else usernamexataa(cached, user);
			}
		};
	});
	Hooks.set('viewready', function (args) {
		if (args.name == 'sessions') {
		}
		if (args.name == 'signin') {
			webapp.header(xlate('signin'));
			mfateeh = view.mfateeh('signin');
			if (mfateeh.aqdaam.dataset.currentqadam === undefined)
				mfateeh.aqdaam.dataset.currentqadam = 0;
			sessions.jaddad( mfateeh.aqdaam );
			sessions.getcaptcha();
			smartfocus( mfateeh.aqdaam );
			password_visibility( getattribute(mfateeh.password, 'type') == 'text' );
		}
		if (args.name == 'signup') {
			webapp.header(xlate('signup'));
			mfateeh = view.mfateeh('signup');
			if (mfateeh.aqdaam.dataset.currentqadam === undefined)
				mfateeh.aqdaam.dataset.currentqadam = 0;
			sessions.jaddad( mfateeh.aqdaam );
			sessions.getcaptcha();
			smartfocus( mfateeh.aqdaam );
			password_visibility( getattribute(mfateeh.password, 'type') == 'text' );
		}
	});
})();
 
var Offline, offline;
;(function(){
	'use strict';
	var database = 'db', db = false, maxaazin = {},
		unsavedname = 'unsaved'+'default',
		exclusions = [unsavedname],
		delaydefault = 30*1000,
		gcallback,
		debug_offline = 1;
	var ajraa = function (callback) {
		Offline.getall( Offline.allstores(), {
			filter: {
				pending: 1,
			},
			format: true,
		}, function (kinds) {
			for (var i in kinds) {
				var m = maxaazin[i];
				var things = kinds[i], ixraaj = 0;
				if (m.keyvalue) { 
					ixraaj = {};
					for (var j in things) {
						var uid = things[j].uid;
						delete things[j].uid;
						delete things[j].created;
						delete things[j].updated;
						ixraaj[ uid ] = things[j].value;
					}
				}
				 
				Network.sync(m.name, m.need, ixraaj || things);
			}
		});
	};
	var ijtama3 = function (callback) {
		$.taxeer('offline-ajraa', function () {
			ajraa();
		}, 3000);
	};
	var createstores = function () {
		if (debug_offline) $.log.w('Offline createstores', maxaazin);
		var request = indexedDB.open(database, 1108);
		request.onerror = function(event) {
			if (event.target.error.name === 'VersionError') {
				 
				Offline.recreate();
			} else {
			}
		};
		request.onupgradeneeded = function(event) {
			db = event.target.result;
			Offline.allstores().forEach(function (name) {
				db.deleteObjectStore(name);
			});
			Object.values(maxaazin).forEach(function (store) {
				store.time = 0; 
				var name = store.name+store.need;
				if ( db.objectStoreNames.contains(name) )
					db.deleteObjectStore(name);
				Offline._createstore(name, store.mfateeh);
			});
		};
		request.onsuccess = function(event) {
			db = event.target.result;
			db.onversionchange = Offline.warning;
			Offline.ready = 1;
			if (gcallback) {
				gcallback();
				gcallback = 0;
			} else {
				Hooks.run('offline-ready', 1);
			}
		};
	};
	var fillmissingkeys = function (store, object) {
		store = maxaazin[store];
		store.mfateeh.forEach(function (m) {
			object[m] = object[m] === undefined ? 0 : object[m];
		});
	};
	 
	Offline = offline = {
		ruid: function () {
			var ruid = parseInt( preferences.get(3) || -1 );
			preferences.set(3, ruid - 1);
			return (ruid - 1);
		},
		mundarij: {
			add: {},
			remove: {},
			get: {},
		},
		ready: false,
		response: {
			add: function (name, need, cb) {
				if (typeof need == 'function') cb = need, need = 0;
				need = need || 'default';
				Offline.mundarij.add[ name ] = Offline.mundarij.add[ name ] || {};
				Offline.mundarij.add[ name ][ need ] = cb;
			},
			remove: function (name, need, cb) {
				if (typeof need == 'function') cb = need, need = 0;
				need = need || 'default';
				Offline.mundarij.remove[ name ] = Offline.mundarij.remove[ name ] || {};
				Offline.mundarij.remove[ name ][ need ] = cb;
			},
			get: function (name, need, cb) {
				 
				if (typeof need == 'function') cb = need, need = 0;
				need = need || 'default';
				Offline.mundarij.get[ name ] = Offline.mundarij.get[ name ] || {};
				Offline.mundarij.get[ name ][ need ] = cb;
				Network.response.get(name, need, function (response) {
					cb( shallowcopy(response) );
					var store = maxaazin[name+need];
					if (store) store.time = Time.now();
					Offline.save(name, need, response);
				});
			},
		},
		add: function (name, need, value) { 
			if (debug_offline) $.log.w('Offline.add', name, need);
			if (arguments.length === 2) value = need, need = 0;
			need = need || 'default';
			if (!(value instanceof Array)) value = [value];
			if (value instanceof Array) {
				Offline.set(name+need, value, function (needssync) {
					var m = maxaazin[ name+need ];
					if (m.keyvalue) {
						var kind = Offline.mundarij.get;
						if (kind[name] && typeof kind[name][need] == 'function')
							kind[name][need]( shallowcopy(value) );
					}
					if (needssync) ijtama3();
				});
			}
		},
		remove: function (name, need, value) { 
			if (arguments.length === 2) value = need, need = 0;
			need = need || 'default';
			if (!(value instanceof Array)) value = [value];
			if (value instanceof Array) {
				value.forEach(function (item) {
					item.pending = 1;
					item.remove = 1;
				});
				Offline.set(name+need, value, function (needssync) {
					var m = maxaazin[ name+need ];
					if (m.keyvalue) {
						var kind = Offline.mundarij.get;
						if (kind[name] && typeof kind[name][need] == 'function')
							kind[name][need]( shallowcopy(value) );
					}
					if (needssync) ijtama3();
				});
			}
		},
		create: function (name, need, o) { 
			if (debug_offline) $.log.w('Offline.create', name, need);
			o = o || {};
			o.delay = o.delay || undefined;
			o.nazzaf = o.nazzaf || undefined;
			o.mfateeh = o.mfateeh || [];
			need = need || 'default';
			 
			['uid', 'created', 'updated', 'pending'].forEach(function (v) {
				if (!o.mfateeh.includes(v)) o.mfateeh.push(v);
			});
			maxaazin[ name+need ] = {
				name: name,
				need: need,
				mfateeh: o.mfateeh,
				nazzaf: o.nazzaf,
				delay: o.delay,
				tashkeel: o.tashkeel,
				keyvalue: o.keyvalue,
			};
			$.taxeer('offline-init', function () {
				createstores();
			}, 250);
		},
		get: function (name, need, value, time) {
			if (debug_offline) $.log.w('Offline.get', name, need);
			need = need || 'default';
			 
			var expired = 0;
			if (time !== undefined) {
				var store = maxaazin[name+need];
				if (store) {
					var delay = store.delay || delaydefault;
					if (delay !== -1) {
						store.time = store.time || Time.now() - (delay*2);
						if (time - store.time > delay) expired = 1;
					}
				}
			}
			if (expired) {
				Network.get(name, need, value);
			} else {
				Offline.getall(name+need, value, function (response) {
					var kind = Offline.mundarij.get;
					if (kind[name] && isfun(kind[name][need])) {
						kind[name][need](response.toNative());
					}
				});
			}
		},
		getforun: function (name, need, value, cb) {
			need = need || 'default';
			if (isfun(cb))
			Offline.getall(name+need, value, function (response) {
				cb(response.toNative());
			});
		},
		save: function (name, need, value) { 
			for (var uid in value) {
				var val = value[uid], kind = Offline.mundarij.add;
				val.uid = val.uid || uid;
				val.pending = 0;
				if (val.remove === -1) { 
					kind = Offline.mundarij['remove'];
					Offline.pop(name+need, val.uid);
					val = val.uid;
				} else {
					Offline.set(name+need, [val]);
				}
				if (kind[name] && typeof kind[name][need] == 'function') {
					kind[name][need]( shallowcopy(val) );
				}
			}
		},
		 
		filter: function (filter, rawitems) {
			if (typeof filter === 'object' && Object.keys(filter).length) {
				 
				var filtered = $.array(), keys = Object.keys(filter);
				rawitems.each(function (rawitem) {
					var matchedprops = 0,
						totalprops = keys.length;
					var doadd, count = 0, i, prop;
					while (count < totalprops) {
						i = keys[count], prop = i, doadd = 0;
						if ( i.endsWith('$i') ) { 
							prop = (rawitem[ i.slice(0,-2) ] ) || 0;
							if ( typeof prop === 'string' && prop.toLowerCase().includes( filter[i] ) )
								doadd += 1;
						}
						if ( i.endsWith('$s') ) { 
							prop = i.slice(0,-2);
							if ( (rawitem[ prop ] ).startsWith( filter[i] ) )
								doadd += 1;
						}
						if ( i.endsWith('$e') ) { 
							prop = i.slice(0,-2);
							if ( (rawitem[ prop ] ).endsWith( filter[i] ) )
								doadd += 1;
						}
						if ( i.endsWith('$gt') ) { 
							prop = i.slice(0,-3);
							if ( rawitem[ prop ] > filter[i] )
								doadd += 1;
						}
						if ( i.endsWith('$st') ) { 
							prop = i.slice(0,-3);
							if ( rawitem[ prop ] < filter[i] )
								doadd += 1;
						}
						if ( i.endsWith('$ge') ) { 
							prop = i.slice(0,-3);
							if ( rawitem[ prop ] >= filter[i] )
								doadd += 1;
						}
						if ( i.endsWith('$se') ) { 
							prop = i.slice(0,-3);
							if ( rawitem[ prop ] <= filter[i] )
								doadd += 1;
						}
						if ( i.endsWith('$ne') ) { 
							prop = i.slice(0,-3);
							if ( rawitem[ prop ] != filter[i] )
								doadd += 1;
						}
						if ( i.endsWith('$ma') ) { 
							prop = i.slice(0,-3);
							var tags = (rawitem[ prop ] || '');
							if (filter[i] === '') doadd += 1;
							else if (filter[i] == ',') {
								if (tags === '') doadd += 1;
							} else {
								tags.split(',').forEach(function (tag) {
									if (tag.trim() == filter[i])
										doadd += 1;
								});
							}
						}
						if ( i.endsWith('$ee') ) { 
							prop = i.slice(0,-3);
							if ( rawitem[ prop ] === filter[i] )
								doadd += 1;
						}
						else if ( rawitem[i] == filter[i] ) doadd += 1;
						++count;
						if (doadd) ++matchedprops;
					}
					if (matchedprops === totalprops)
						filtered.set( rawitem.uid, rawitem );
				});
				return filtered;
			} else return rawitems;
		},
		_createstore: function (name, keys) {
			var objectstore = db.createObjectStore(name, { keyPath: 'uid' });
			for (var i in keys) {
				objectstore.createIndex(keys[i], keys[i]);
			}
		},
		_get: function (store, uid, callback) {
			if (db) {
				try {
					db.transaction(store).objectStore(store).get(uid)
						.onsuccess = function(event) {
							typeof callback === 'function' && callback(event.target.result);
						};
				} catch (error) {
					$.log('Offline.get', store, uid);
					$.log.e(error);
				}
			} else {
			}
		},
		count: function (store, callback) {
			var i = 0;
			db.transaction(store).objectStore(store).openCursor().onsuccess = function (event) {
				var cursor = event.target.result;
				if (cursor) {
					++i;
					cursor.continue();
				} else {
					typeof callback === 'function' && callback(i);
				}
			};
		},
		filteredcount: function (store, bound, direction, callback) {
			var i = 0;
			db.transaction(store).objectStore(store).openCursor(bound, direction).onsuccess = function (event) {
				var cursor = event.target.result;
				if (cursor) {
					++i;
					cursor.continue();
				} else {
					typeof callback === 'function' && callback(i);
				}
			};
		},
		parsevalue: function (value) {
			if (value === true) value = 1;
			if (value === false) value = 0;
			if (value instanceof Array) {
				for (var i in value) {
					value[i] = Offline.parsevalue(value[i] );
				}
			}
			return value;
		},
		 
		format: function (obj, store) {
			obj = obj || {};
			var newobj = {};
				delete obj._store;
				delete obj.pending;
				newobj = shallowcopy(obj);
			var m = maxaazin[store];
			if (m && isfun(m.tashkeel)) newobj = m.tashkeel(newobj);
			return newobj;
		},
		 
		_getall: function (store, options, callback) {
			var objectStore = db.transaction(store).objectStore(store),
				unsavedStore = db.transaction(unsavedname).objectStore(unsavedname),
				i = 0,
				filteredcount = 0, 
				objects = $.array(),
				filters = options.filter || {},
				bound = null,
				direction = 'prev',
				extra = {
						pages: false,
						count: false,
						limit: options.limit,
					};
			if (extra.limit === undefined || extra.limit === true) {
				extra.limit = true;
			}
			options.key = [];
			options.only = [];
			if (filters.cache)
				filters.cache = undefined;
			if ( Object.keys(filters).length > 1 ) {
				var keys = Object.keys(filters);
				var only = Object.values(filters);
				for (var i in only) {
					if (only[i] !== undefined) {
						options.key.push( keys[i] );
						options.only.push( only[i] );
					}
				}
			}
			if ( Object.keys(filters).length <= 1
			|| options.key.length <= 1 ) {
				options.key = Object.keys(filters)[0];
				options.only = Object.values(filters)[0];
				if (options.only === undefined)
					options.key = undefined;
			}
			if (options.key) {
				objectStore = objectStore.index( options.key );
				options.only = Offline.parsevalue( options.only );
				bound = IDBKeyRange.only( options.only );
			}
			if (extra.limit !== true) {
				extra.limit = extra.limit || 20;
				var page = options.page || 0;
				if (page) page = page - 1;
				var startat = page * extra.limit;
			}
			objectStore.openCursor(bound, direction).onsuccess = function (event) {
				var cursor = event.target.result;
				if (cursor) {
					var key = cursor.value.uid;
					if (extra.limit === true || options.perm) {
						var item = cursor.value;
						if (options.format)
							item = Offline.format( cursor.value, store );
						objects.set(key, item);
					} else {
						if ( i >= startat && objects.length < extra.limit ) {
							var item = cursor.value;
							if (options.format)
								item = Offline.format( cursor.value, store );
							objects.set(key, item);
						} else {
							if (bound)
								++filteredcount;
						}
					}
					++i;
					cursor.continue();
				} else {
					Offline._getallpending(store, function (unsaved) {
						unsaved.each(function (item) {
							if (options.format)
								item = Offline.format( item, store );
							return item;
						});
						var andfinally = function (objects) {
							 
							if (options.perm) {
								objects.sort(options.reversed || 0, (options.orderby || 'uid'), 'uid');
								if (typeof options.multifilter === 'object' && Object.keys(options.multifilter).length)
									objects = Offline.filter(options.multifilter, objects);
							}
							if (extra.limit === true) {
								extra.count = objects.length;
								extra.pages = false;
								typeof callback === 'function' && callback(objects, extra, unsaved);
							} else {
								Offline.count(store, function (count) {
									if (bound) {
										extra.count = objects.length+filteredcount;
									} else {
										extra.count = count;
									}
									extra.pages = Math.ceil(extra.count / extra.limit);
									 
									if (options.perm) {
										extra.count = objects.length;
										extra.pages = Math.ceil(extra.count / extra.limit);
										extra.filteredcount = objects.length;
										objects = objects.slice(startat, startat+options.limit-1);
									}
									typeof callback === 'function' && callback(objects, extra, unsaved);
								});
							}
						};
						 
						if (typeof options.uponfillin === 'function') {
							options.uponfillin(objects, function (objects) {
								andfinally(objects);
							}, 1);
						} else
							andfinally(objects);
					});
				}
			};
		},
		_getallpending: function (store, callback) {
			var unsavedStore = db.transaction(unsavedname).objectStore(unsavedname),
				bound = IDBKeyRange.only( store ),
				objects = $.array();
			unsavedStore.index( '_store' ).openCursor(bound).onsuccess = function (event) {
				var cursor = event.target.result;
				if (cursor) {
					 
					cursor.value.uid = cursor.value.uid * -1;
					objects.set(cursor.value.uid, cursor.value);
					cursor.continue();
				} else {
					typeof callback === 'function' && callback(objects);
				}
			};
		},
		 
		getpendingitem: function (uid, callback) {
			var unsavedStore = db.transaction(unsavedname).objectStore(unsavedname),
				bound = IDBKeyRange.only( uid * -1 ),
				objects = $.array();
			unsavedStore.index( 'uid' ).openCursor(bound).onsuccess = function (event) {
				var cursor = event.target.result;
				if (cursor) {
					cursor.value.uid = cursor.value.uid * -1;
					objects.set(cursor.value.uid, cursor.value);
					cursor.continue();
				} else {
					typeof callback === 'function' && callback(objects);
				}
			};
		},
		getallpending: function (store, callback) {
			 
			if (store instanceof Array) {
				var types = {},
					i = 0,
					total = 0,
					q = $.queue();
				store.forEach(function () {
					q.set(function (done, queue) {
						Offline._getallpending(store[i], function (objects) {
							if (objects.length) {
								types[ store[i] ] = objects.toNative();
								++total;
							}
							++i;
							done(queue);
						});
					});
				});
				q.run(function () {
					if (total === 0) types = false;
					typeof callback === 'function' && callback(types);
				});
			} else {
				Offline._getallpending(store, callback);
			}
		},
		getall: function (store, options, callback) {
			options = options || {};
			 
			if (store instanceof Array) {
				var types = {},
					i = 0,
					total = 0,
					q = $.queue();
				store.forEach(function () {
					q.set(function (done, queue) {
						Offline._getall(store[i], options, function (objects, ignore, unsaved) {
							if (objects.length || unsaved.length) {
								if (options.filter
								&& options.filter.pending
								&& store[i].endsWith('_archive')) {
									store[i] = store[i].slice(0, -'_archive'.length);
								}
								if (types[ store[i] ]) {
									types[ store[i] ].concat( objects.toNative().concat( unsaved.toNative() ) )
								} else {
									types[ store[i] ] = objects.toNative().concat( unsaved.toNative() );
								}
								++total;
							}
							++i;
							done(queue);
						});
					});
				});
				q.run(function () {
					if (total === 0) types = false;
					typeof callback === 'function' && callback(types);
				});
			} else {
				Offline._getall(store, options, callback);
			}
		},
		 
		set: function (store, arr, callback) {
			if (debug_offline) $.log.w('Offline.set', store);
			if (!db) {
				if (debug_offline) $.log.e('Offline db not created yet', db);
				return;
			}
			 
			if (arr.length === 0) {
				typeof callback === 'function' && callback();
				return;
			}
			var needssync = 0;
			var stores = [store, unsavedname];
			try {
				var transaction = db.transaction(stores, 'readwrite');
			} catch (e) {
				$.log.e(e);
				return;
			}
			transaction.oncomplete = function(event) {
				typeof callback === 'function' && callback(needssync);
			};
			var objectStore = transaction.objectStore(store);
			var unsavedStore = transaction.objectStore(unsavedname);
			arr.forEach(function(obj) {
				 
				if (obj.pending === true) obj.pending = 1;
				if (obj.pending === false) obj.pending = 0;
				if (obj.uid < 0 || obj.pending) needssync = 1;
				 
				if (obj.uid > 0 && obj.ruid < 0) {
					unsavedStore.delete( obj.ruid * -1 ).onsuccess = function () {
						delete obj.ruid;
						delete obj._store;
						fillmissingkeys(store, obj);
						objectStore.put(obj);
					};
				}
				else if (obj.uid < 0 && obj.ruid === undefined) {
					obj.uid = obj.uid * -1;
					obj._store = store;
					unsavedStore.get(obj.uid || 0).onsuccess = function(event) {
						var oldobj = event.target.result;
						if (oldobj) {
							oldobj = Object.assign(oldobj, obj);
							obj = oldobj;
						}
						fillmissingkeys(unsavedname, obj);
						unsavedStore.put(obj);
					};
				} else {
					objectStore.get(obj.uid || 0).onsuccess = function(event) {
						var oldobj = event.target.result;
						if (oldobj) {
							oldobj = Object.assign(oldobj, obj);
							obj = oldobj;
						} else {
							if (obj.pending === false
							|| obj.pending === undefined
							|| obj.pending === null)
								obj.pending = 0;
						}
						fillmissingkeys(store, obj);
						objectStore.put(obj);
					};
				}
			});
		},
		pop: function (store, uid, callback) {
			if (uid < 0) {
				store = unsavedname;
				uid = uid * -1;
			}
			db.transaction(store, 'readwrite').objectStore(store).delete(uid)
				.onsuccess = function(event) {
					typeof callback === 'function' && callback(event.target.result);
				};
		},
		popall: function (store, arr, callback) {
			var stores = [store, unsavedname];
			var transaction = db.transaction(stores, 'readwrite');
			var objectStore = transaction.objectStore(store);
			var unsavedStore = transaction.objectStore(unsavedname);
			transaction.oncomplete = function(event) {
				typeof callback === 'function' && callback();
			};
			var objectStore = transaction.objectStore(store);
			arr.forEach(function(obj) {
				if (obj.uid < 0) unsavedStore.delete(obj.uid * -1);
				else objectStore.delete(obj.uid);
			});
		},
		allstores: function () {
			var oldstores = [];
			 
			for (var i in db.objectStoreNames) {
				if ( db.objectStoreNames.hasOwnProperty(i) ) {
					var name = db.objectStoreNames[i];
					if ( db.objectStoreNames.contains(name) ) {
						if (!exclusions.includes(name))
							oldstores.push(name);
					}
				}
			}
			return oldstores;
		},
		recreate: function (callback) {
			db && db.close && db.close();
			var request = indexedDB.deleteDatabase(database);
			request.onsuccess = function () {
				Offline.init(callback);
			};
			 
		},
		 
		warning: function (event) {
			 
			db.close();
			dom.setloading( 'appneedsreload' );
		},
		init: function (callback) {
			if (debug_offline) $.log.w('Offline.init');
			gcallback = callback;
			Offline.create('unsaved', 'default', {
				mfateeh: ['_store']
			});
		}
	};
	Hooks.set('response-sync', function (payload) {
		for (var name in payload) {
			for (var need in payload[name]) {
				var value = payload[name][need];
				Offline.save(name, need, value);
				var m = maxaazin[ name+need ];
				if (m.keyvalue) {
					var kind = Offline.mundarij.get;
					if (kind[name] && typeof kind[name][need] == 'function')
						kind[name][need]( shallowcopy(value) );
				}
			}
		}
	});
	Hooks.set('network-connection', function (yes) {
		if (yes)
		$.taxeer('offline-sync', function () {
			ijtama3();
		}, 250);
	});
})();
var Profile, profile, ISMMUBEENMAX = 48, TAGMAX = 15, HIKAAYAHMAX = 480;
var profilelist;
;(function(){
	'use strict';
	var open_keys, maxba = {}, module_name = 'profile';
	 
	var text_prop_logic = {
		name: ['username', 'User Name'],
		displayname: [0, 'Display Name'],
		lifestory: [0, 'Life Story', HIKAAYAHMAX, 1],
	};
	var is_text_prop_editable = function (uid) {
		return Object.keys(text_prop_logic).includes(uid);
	};
	var edit_text_prop_dialog = function (item) {
		var details = text_prop_logic[ item.uid ] || [];
		Hooks.run('dialog', {
			x: details[2] || ISMMUBEENMAX,
			multiline: details[3],
			c: function (k) {
				item.tafseel = k;
				Offline.add(module_name, {
					uid: item.uid,
					value: k,
					pending: 1,
				});
			},
			m: details[1],
			a: item.value,
			q: details[0] || item.uid
		});
	};
	Profile = profile = {
		 
		maxba: function (uid, value) { 
			if (arguments.length === 0 ) return maxba;
			maxba[uid] = value;
		},
		update: function () {
			var arr = maxba.profile || Object.keys(text_prop_logic);
			arr.forEach(function (o) {
				if (typeof o == 'string') o = { uid: o, value: '' };
				o.mowdoo3 = xlate(o.uid);
				o.tafseel = o.value;
				if (is_text_prop_editable(o.uid)) o.madad = xlate('taptochange');
				o.hifz = o.pending ? xlate('pending') : 'ixtaf';
				profilelist.set(o);
			});
		},
	};
	Offline.create(module_name, 0, {
		delay: -1, 
		keyvalue: 1
	});
	Hooks.set('ready', function () {
		if (get_global_object().Sidebar) { Sidebar.set({
			uid: module_name,
			title: translate( module_name ),
			icon: 'iconperson',
		}); }
		var dom_keys = view.dom_keys(module_name);
		profilelist = List( dom_keys.list ).idprefix(module_name).listitem('profilekatab');
		profile.update(); 
		profilelist.onpress = function (item, key, uid) {
			if (is_text_prop_editable(item.uid)) {
				edit_text_prop_dialog(item);
			}
		};
		Network.intercept(module_name, function (finish) {
			 
			finish( sessions.signedin() ? 1 : undefined );
		});
		Offline.response.get(module_name, function (response) {
			maxba.profile = response;
			profile.update();
		});
	});
	Hooks.set('viewready', function (args) {
		if (args.name == module_name) {
			Webapp.header( ['Profile', 0, 'iconperson'] );
			softkeys.list.basic(profilelist);
			profilelist.select();
			Offline.get(module_name, 0, 0, Time.now());
		}
	});
	Hooks.set('restore', function (args) {
		if (view.is_active(module_name) && backstack.darajah === 1)
			innertext(tafawwaq, '');
	});
})();
var Accounts;
;(function(){
	'use strict';
	var accounts_list, module_name = 'accounts';
	Accounts = {
		search: function (str, callback) {
			str = tolower(str);
			var arr = [];
			accounts_list.adapter.each(function (o) {
				if ( tolower(o.displayname).includes(str)
				|| tolower(o.name).includes(str) ) {
					arr.push(o);
				}
			});
			isfun(callback) && callback(arr);
		},
		get: function (uids, callback) {
			var arr = [];
			if (isarr(uids) && uids.length)
			accounts_list.adapter.each(function (o) {
				if (uids.includes(o.uid))
					arr.push(o);
			});
			isfun(callback) && callback(arr);
		},
	};
	Offline.create(module_name, 0, {
		delay: -1, 
		keyvalue: 1
	});
	function update_sidebar( count ) {
		if (get_global_object().Sidebar) { Sidebar.set({
			uid: module_name,
			title: 'Accounts',
			icon: 'iconpeople',
			count: count,
		}); }
	}
	Hooks.set('ready', function () {
		update_sidebar();
		var dom_keys = view.dom_keys('accounts');
		accounts_list = List( dom_keys.list ).idprefix(module_name).listitem('account_item');
		accounts_list.onpress = function (item, key, uid) {
		};
		Network.intercept(module_name, function (finish) { 
			finish( sessions.signedin() ? 1 : undefined );
		});
		Offline.response.get(module_name, function (response) {
		});
		Network.response.get(module_name, 'all', function (response) {
			if (accounts_list && isarr(response)) {
				accounts_list.title(response.length+' accounts');
				update_sidebar( response.length );
				response.forEach(function (o) {
					accounts_list.set({
						uid: o.uid,
						name: o.name,
						displayname: o.displayname,
						created$time: o.created,
						updated$time: o.updated,
					});
				});
			}
		});
	});
	Hooks.set('viewready', function (args) {
		if (args.name == module_name) {
			Webapp.header( ['Accounts', 0, 'iconpeople'] );
			softkeys.list.basic(accounts_list);
			accounts_list.select();
			Offline.get(module_name, 0, 0, Time.now());
			Network.get(module_name, 'all', 1);
		}
	});
	Hooks.set('restore', function (args) {
		if (view.is_active(module_name) && backstack.darajah === 1)
			innertext(tafawwaq, '');
	});
})();
 
var Polling;
;(function(){
	'use strict';
	var connections_list;
	Hooks.set('ready', function () {
		Settings.adaaf('Polling Connections', 0, function () {
			open_list_sheet('Polling Connections', function (l) {
				connections_list = l;
				Network.get('polling', 'connections', 1);
			});
		}, 'iconsettings');
	});
	Network.response.get('polling', 'connections', function (response) {
		if (connections_list && response && response.names) {
			connections_list.title(response.names.length+' active connections');
			response.names.forEach(function (o) {
				connections_list.set({
					title: o
				});
			});
		}
	});
})();
 
var Rooms, rooms;
;(function(){
	var roomslist, keys, oldresults = [], photo,
	waqtsaabiq = 0, mklmttaxeer = 3*60*1000,
	get_rooms_count = function () {
		var l = roomslist.length();
		if (view.is_active('rooms') && backstack.darajah === 1) {
			webapp.header( l ? (l+' '+translate('rooms'))
							: translate('norooms') );
			roomslist.select();
		}
		roomslist.message(l ? undefined : translate('norooms') );
	};
	Rooms = rooms = {
		raakib: function (members) { 
			if (isarr(members))
			for (var i = 0; i < members.length; ++i) {
				var v = members[i];
				if (v[1] !== 1) return v;
			}
		},
		is_you: function (members) { 
			if (isarr(members))
			for (var i = 0; i < members.length; ++i) {
				var v = members[i];
				if (v[0] === sessions.uid()) return v;
			}
		},
		is_other: function (members) { 
			if (isarr(members))
			for (var i = 0; i < members.length; ++i) {
				var v = members[i];
				if (v[0] !== sessions.uid()) return v;
			}
		},
		condition: function (m) { 
			var condition = 0, byyou = 0, msg = '';
			var is_other = rooms.is_other(m.members);
			var is_you = rooms.is_you(m.members);
			if (isarr(is_other) && isarr(is_you)) {
				if (is_other[1] === -3) { 
					condition = -3;
					msg = 'mklmhmas3oob';
				} else
				if (is_you[1] === -3) { 
					condition = -3;
					byyou = 1;
					msg = 'mklmhtas3oob';
				} else
				if ([-2, 0].includes(is_you[1]) && is_other[1] === 1) { 
					condition = is_you[1];
					byyou = 1;
					msg = condition ? 'mklmhtatrood' : 'mklmhda3aw';
				} else
				if (is_you[1] === -1 && is_other[1] === 1) { 
					condition = -1;
					msg = 'mklmhyad3aak';
				} else
				if (is_you[1] === 1 && is_other[1] === -1) { 
					condition = -1;
					byyou = 1;
					msg = 'mklmhtad3oot';
				} else
				if ([-2, 0].includes(is_other[1]) && is_you[1] === 1) { 
					condition = is_other[1];
					msg = condition ? 'mklmhmatrood' : 'mklmhda3aw';
				} else
				if (is_you[1] === 0 && is_other[1] === 0) { 
					condition = 0;
					if (m.uid < 0) byyou = 1;
					msg = 'mklmhda3aw';
				} else
				if (is_you[1] === 1 && is_other[1] === 1) { 
					condition = 1;
				}
			}
			return [condition, byyou, msg]; 
		},
		update: function () {
			if (isnum(waqtsaabiq) && Time.now() - waqtsaabiq < mklmttaxeer) {
			} else {
				waqtsaabiq = Time.now();
				Offline.get('rooms', 0, 0, Time.now());
			}
		},
		fahras: function (results) {
			results = results || oldresults || [];
			results.sort(function (a, b) {
				return b.updated - a.updated;
			});
			roomslist.popall();
			results.forEach(function (item, i) {
				roomslist.set(item);
			});
			get_rooms_count();
			oldresults = results;
		},
		open: function () { 
			var suid = sessions.uid(), out = { }, l;
			Hooks.run('sheet', {
				n: 'room',
				t: 'room',
				i: function (k) {
					k.search_members.focus();
					l = list( k.members ).idprefix('members')
								.listitem('members_item');
					l.onpress = function (o) {
						l.baidaa();
					};
					l.afterset = function (o, clone, k) {
					};
					var add = function (results) {
						l.popall();
						results.forEach(function (o) {
							if (o.uid !== suid)
							l.set({
								uid: o.uid,
								title: o.displayname || ('@'+o.name),
							});
						});
					};
					k.search_members.onkeyup = function () {
						var str = this.value;
						if (str.length)
							Accounts.search(str, function (results) {
								add(results);
							});
						else
							l.popall();
					};
					k.search_members.onkeyup();
				},
				c: function () {
					if (l)
					$.taxeer('roomsopen', function () {
						var o = l.get();
						if (o.uid !== suid) {
							messages.open({
								title: o.displayname || o.name,
								members: [[suid, 1], [o.uid, 0]]
							});
						}
					}, 100);
				},
			});
		},
		invite: function (profile) {
			Network.get('rooms', 'invite', profile);
		},
		search: function (profile, cb) {
			if (isfun(cb) && isnum(profile))
			Offline.getforun('rooms', 0, {
				filter: { kind: 0 }
			}, function (arr) {
				var done = 0;
				for (var i = 0; i < arr.length; ++i) {
					if (done) break;
					var item = arr[i];
					if (isarr(item.members))
					for (var j = 0; j < item.members.length; ++j) {
						if (item.members[j][0] === profile) {
							cb(item);
							done = 1;
							break;
						}
					}
				}
			});
		},
	};
	Offline.create('rooms', 0, {
		delay: -1, 
		mfateeh: ['kind'],
		tashkeel: function (o) {
			return { uid: o.uid, members: o.members };
		},
	});
	Hooks.set('ready', function () {
		Network.intercept('rooms', function (intahaa) {
			intahaa( sessions.signedin() ? 1 : undefined );
		});
		Offline.response.get('rooms', function (response) {
			rooms.fahras( response );
		});
		Network.response.get('rooms', 'invite', function (response) {
			if (response) {
				messages.itlaqcondition(response);
			}
		});
		Offline.response.add('rooms', function (response) {
			if (response) {
				if (response.members) {
					roomslist.pop( response.uid );
					response.awwal = 1;
					roomslist.set( response );
				}
				if (view.is_active('rooms')) {
					roomslist.select( parseint(roomslist.id2num(response.uid)) );
					get_rooms_count();
				}
				messages.itlaqcondition(response);
				messages.itlaqtaxeer(response);
			}
		});
		Offline.response.remove('rooms', function (response) {
			if (isnum(response)) roomslist.pop( response );
		});
		keys = view.mfateeh('rooms');
		roomslist = list( keys.list ).idprefix('rooms')
						.listitem('roomitem');
		roomslist.afterset = function (item, clone, k) {
			var condition = rooms.condition(item);
			if (k) {
				setdata(k.waqtqabl, 'time', item.created);
				innertext(k.message, xlate(condition[2], '') );
			}
			var is_other = rooms.is_other(item.members);
			if (is_other && clone) {
				$.taxeer('members'+item.uid, function () {
					innerhtml(k.photo, '');
					Accounts.get([is_other[0]], function (results) {
						results.forEach(function (o) {
							innertext(k.message, xlate(condition[2], o.displayname||o.name) );
						});
					});
				}, 50);
			}
		};
		roomslist.beforeset = function (item) {
			var ret = rooms.is_other(item.members);
			if (ret) {
				Accounts.get([ret[0]], function (results) {
					results.forEach(function (o) {
						item.title = o.displayname || o.name;
					});
				});
			}
			return item;
		};
		roomslist.onpress = function (item, key, uid) {
			messages.open(item);
		};
	});
	Hooks.set('viewready', function (args) {
		switch (args.name) {
			case 'rooms':
				var m = messages.current();
				if (m) {
					view.ishtaghal('messages');
				} else {
					get_rooms_count();
					rooms.update();
					softkeys.list.basic(roomslist);
					softkeys.add({ n: 'Create Room',
						k: K.sl,
						i: 'iconadd',
						c: function () {
							rooms.open();
							return 1;
						}
					});
					break;
				}
		}
	});
})();
var messages;
;(function(){
	var messageslist, mfateeh, oldresults = [], current, last_message,
	yahtaajuitlaq, haadirsawt,
	text2seconds = function (text) { 
		var c = text.length;
		return Math.ceil( c / 10 ) || 1;
	},
	ixtatamphoto = function () {
		var ismessages = view.is_active('messages');
		if (mfateeh) {
			mfateeh.uploadphoto.value = '';
			mfateeh.preview.src = '';
			izhar(mfateeh.text);
			ixtaf(mfateeh.photo);
			if (ismessages) {
				mfateeh.messagebox.focus();
				isfun(mfateeh.messagebox.oninput) && mfateeh.messagebox.oninput();
			}
		}
		if (ismessages) auxbtn();
	},
	resize = function () {
		if (mfateeh) {
			var iw = innerwidth();
			setcss(mfateeh.katabmessage, 'left', (iw>640?(iw-640)/2:0)+'px');
			setcss(mfateeh.katabmessage, 'right', (iw>640?(iw-640)/2:0)+'px');
			mfateeh.messagebox.oninput && mfateeh.messagebox.oninput();
		}
	},
	nazzaf = function (text) {
		return (text || '').trim().replace(/[\n]{3,}/g, '\n\n');;
	},
	domembers = function () {
		 
	},
	rejectbtn = function () {
		softkeys.set(K.sl, function () {
			var m = {
				uid: current.uid,
				members: current.members,
			};
			current.members.forEach(function (o) {
				if (o[0] === sessions.uid()) {
					o[1] = -2;
					m.pending = 1;
				}
			});
			Offline.add('rooms', m);
			messages.itlaq();
		}, 0, 'iconclose');
	},
	unblockbtn = function () {
		softkeys.set(K.sl, function () {
			var m = {
				uid: current.uid,
				members: current.members,
			};
			current.members.forEach(function (o) {
				if (o[0] === sessions.uid()) {
					o[1] = 0;
					m.pending = 1;
				}
			});
			Offline.add('rooms', m);
			messages.itlaq();
		}, 0, 'iconpersonadd');
	},
	blockbtn = function () {
		softkeys.set('7', function () { Hooks.run('dialog', {
			m: 'asa3ab',
			c: function () {
				var m = {
					uid: current.uid,
					members: current.members,
				};
				current.members.forEach(function (o) {
					if (o[0] === sessions.uid()) {
						o[1] = -3;
						m.pending = 1;
					}
				});
				Offline.add('rooms', m);
				messages.itlaq();
			}
		}); }, '7', 'iconblock');
	},
	invitebtn = function () {
		var uxr = rooms.uxraa(current.members);
		softkeys.set(K.sl, function () {
			rooms.da3wah(uxr[0]);
			softkeys.set(K.sl, function () {
				Webapp.status( xlate('mashghool') );
			}, 0, 'iconhourglassempty');
		}, 0, 'iconpersonadd');
	},
	sendbtn = function (sinf) {
		var icon = 'iconkeyboardvoice';
		if (sinf === -2) icon = 'iconhourglassempty';
		else if (sinf === -1) icon = 'iconpause';
		else if ([1, 2, 3].includes(sinf)) icon = 'iconsend';
		softkeys.set(K.en, function () {
			if (sinf === 1)
				mfateeh.messagebox.uponenter();
			else if (sinf === -2) { 
			} else if (sinf === -1) { 
			} else if (sinf === 2) {
				if (Recorder.tasjeel)
					Network.upload( 'messages', 'sawt', current.uid, Recorder.tasjeel );
			} else if (sinf === 3) {
				if (Uploader.marfoo3)
					Network.upload( 'messages', 'photo', current.uid, Uploader.marfoo3 );
			} else
				Recorder.isjal(1);
		}, 0, icon);
	},
	auxbtn = function (sinf) {
		var icon = 'iconphoto';
		if ([2, 3].includes(sinf)) icon = 'icondeleteforever';
		else if (sinf === 4) icon = 'icondownload';
		else if (sinf) icon = 'iconstop';
		softkeys.set(K.sl, function () {
			if (sinf === 3) {
				Uploader.stop();
			} else if (sinf === 4) {
			} else if (sinf) {
				Recorder.itlaqsawt(sinf);
			} else {
				mfateeh.uploadphoto.click();
			}
		}, 0, icon);
	},
	acceptbtn = function () {
		softkeys.set(K.en, function () {
			var m = {
				uid: current.uid,
				members: current.members,
			};
			current.members.forEach(function (o) {
				if (o[0] === sessions.uid()) {
					o[1] = 1;
					m.pending = 1;
				}
			});
			Offline.add('rooms', m);
			messages.itlaq();
		}, 0, 'icondone');
	};
	messages = {
		iftahphoto: function (item) {
			item && Hooks.run('sheet', {
				n: 'messagephoto',
				t: 'messagephoto',
				c: function () { 
				},
				i: function (k) { 
					k.preview.src = Network.xitaab+item.xitaab;
				},
			});
		},
		current: function (remove) {
			if (remove) {
				current = 0;
				Recorder.infasal();
				Uploader.detach();
				mfateeh.preview.src = '';
				izhar(mfateeh.text);
				ixtaf(mfateeh.photo);
			}
			else return current;
		},
		itlaqhaalah: function (m) {
			if (m && current) {
				var ret = rooms.uxraa(current.members);
				var ret2 = rooms.uxraa(m.members);
				if (ret && ret2 && ret[0] === ret2[0]) { 
					current = m;
					messages.itlaq();
				}
			}
		},
		itlaqtaxeer: function (m) {
			if (current && m && current.uid === m.uid) {
				if (mfateeh && m) {
					var t = m.taxeer;
					current.taxeer = t;
					var yes = 0;
					if (isnum(t)) {
						setdata(mfateeh.taxeer, 'time', t);
						setdata(mfateeh.katabmessage, 'taxeer', 1);
						time(mfateeh.katabmessage); 
						mfateeh.taxeer.hidden = 0;
						t = t - time.now();
						if (t > 0)
						$.taxeer('messagesirsal', function () {
							messages.itlaqtaxeer();
						}, t);
						else yes = 1;
					} else yes = 1;
				} else yes = 1;
			} else yes = 1;
			if (yes) {
				$.taxeercancel('messagesirsal');
				popdata(mfateeh.taxeer, 'time');
				popdata(mfateeh.katabmessage, 'taxeer', 1);
				mfateeh.taxeer.hidden = 1;
			}
		},
		jaddad: function () {
			if (current)
			Offline.get('messages', 0, {
				filter: {
					room: current.uid,
				},
			}, helpers.now());
		},
		fahras: function (results) {
			results = results || oldresults || [];
			results.sort(function (a, b) {
				return a.created - b.created;
			});
			messageslist.message(results.length ? undefined : translate('nomessages') );
			results.forEach(function (item, i) {
				messageslist.set(item);
			});
			oldresults = results;
			messageslist.last();
		},
		iftah: function (item, an3ash) { 
			if (item) {
				if (!current || current.uid !== item.uid) {
					yahtaajuitlaq = 1;
				}
				current = item;
				last_message = 0;
				if (isundef(current.uid)) {
					 
					pager.intaxab('rooms', 1);
					view.ishtaghal('messages');
					messageslist.message( xlate('bahacroom') );
					var ret = rooms.uxraa(current.members);
					if (ret)
					rooms.bahac(ret[0], function (m) {
						if (m) messages.iftah(m, 1);
						else {
							if (view.get() !== 'messages' || an3ash)
								view.ishtaghal('messages');
							messages.itlaq(current);
						}
					});
					else messages.itlaq(item);
				} else {
					if (view.get() !== 'messages' || an3ash)
						view.ishtaghal('messages');
				}
			}
		},
		itlaq: function () {
			if (current) {
				Webapp.header();
				if (yahtaajuitlaq) {
					softkeys.clear();
					softkeys.P.empty();
					softkeys.list.basic(messageslist);
				}
				softkeys.set(K.sr, function () {
					messages.current(1);
					pager.intaxab('rooms', 1);
				}, 0, 'iconarrowback');
				var suid = sessions.uid(),
					rkb = rooms.raakib(current.members),
					uxr = rooms.uxraa(current.members),
					haalah = rooms.haalah(current),
					byyou = haalah[1],
					msg = haalah[2],
					haalah = haalah[0];
				messageslist.message( xlate( msg, '' ) );
				if (yahtaajuitlaq)
				hisaabaat.get([uxr[0]], function (nataaij) {
					nataaij.forEach(function (o) {
						photo = setshakl(o, mfateeh.photo);
						photo.zoomlevel = .25;
						photo.panned.y = 25;
						photo.jaddad();
						var name = o.displayname || o.username;
						innertext( mfateeh.mowdoo3, name );
						messageslist.message( xlate( msg, name ) );
					});
				});
				ixtaf(mfateeh.katabmessage);
				if (byyou) { 
					if (haalah === -3) { 
						unblockbtn();
					}
					if (haalah === -2) { 
						blockbtn();
					}
					if (haalah === -1) { 
						softkeys.talaf(K.en);
						if (current.uid > 0) blockbtn();
					}
					if (haalah === 0) { 
						invitebtn();
					}
				} else {
					if (haalah === -3) { 
					}
					if (haalah === -2) { 
						blockbtn();
					}
					if (haalah === -1) { 
						rejectbtn();
						acceptbtn();
						blockbtn();
					}
					if (haalah === 0) { 
						invitebtn();
						blockbtn();
					}
				}
				if (haalah === 1) { 
					izhar(mfateeh.katabmessage);
					Recorder.itlaqsawt(2);
					blockbtn();
					mfateeh.katabmessage.onclick = function () {
						if (!Recorder.mashghool()) mfateeh.messagebox.focus();
					};
					mfateeh.messagebox.onfocus = function () {
						if (!Recorder.mashghool()) messageslist.deselect();
					};
					mfateeh.messagebox.oninput = function () {
						if (!Recorder.mashghool() && !Uploader.mashghool()) {
							setcss(messagesui, 'paddingBottom',
									(mfateeh.messagebox.offsetHeight+10)+'px');
							sendbtn( nazzaf(mfateeh.messagebox.value).length ? 1 : 0 );
						}
					};
					mfateeh.messagebox.uponenter = function () {
						if (!Recorder.mashghool()) {
							var text = nazzaf(mfateeh.messagebox.value);
							if (text.length) {
								messages.irsal(text);
								mfateeh.messagebox.focus();
							}
							else Recorder.isjal(1);
							scrollintoview(mfateeh.messagebox);
						}
					};
					messages.itlaqtaxeer();
					if (yahtaajuitlaq) {
						mfateeh.messagebox.oninput();
						mfateeh.messagebox.focus();
						messageslist.popall();
						messages.jaddad();
					} else {
						messageslist.intaxabscroll( messageslist.get() );
						messageslist.rakkaz(1, 1);
					}
					sendbtn();
					auxbtn();
					softkeys.set('0', function () {
						messageslist.press('0');
					}, '0', 'icondeleteforever');
				}
			}
			yahtaajuitlaq = 0;
		},
		irsal: function (text) {
			var t = (current.taxeer||0) - time.now();
			if (t < 0 || isundef(current.taxeer)) {
				text = nazzaf(text);
				if (isstr(text) && text.length) {
					messageslist.message();
					var item;
					if (last_message) {
						item = last_message;
						item.text += '\n'+text;
					} else {
						item = {
							uid: Offline.ruid(),
							text: text,
							room: current.uid,
						};
						last_message = shallowcopy(item);
					}
					Offline.add('messages', shallowcopy(last_message));
					item.maalik = sessions.uid();
					item.created = time.now();
					item.mu3allaq = 1;
					messageslist.set(item);
					messageslist.last();
					mfateeh.messagebox.value = '';
				}
			} else {
				messages.itlaqtaxeer(current);
			}
		},
	};
	Offline.create('messages', '', {
		mfateeh: ['room'],
	});
	listener('resize', function () {
		$.taxeer('resizemessages', function () { resize(); }, 100);
	});
	Hooks.set('uploader', function (nabaa) {
		if (view.is_active('messages')) {
			if (nabaa === RF3BADAA) {
				auxbtn(3);
				sendbtn(-2); 
			}
			if (nabaa === RF3XATAM) {
				sendbtn(3);
			}
			if (nabaa === RF3INTAHAA) {
				ixtatamphoto();
			}
		}
	});
	Hooks.set('recorder', function (nabaa) {
		if (view.is_active('messages')) {
			if (nabaa === MSJLXATAM) {
				var e = mfateeh.list.querySelector('[data-la3ib]');
				if (e) {
					popdata(e, 'la3ib');
					var ns = nextsibling(e);
					if (ns) {
						var o = messageslist.adapter.get( getdata(ns, 'uid') );
						if (o && o.sinf === 1) {
							messageslist.select( messageslist.id2num(o.uid) );
							messageslist.press(K.en);
						}
					}
				}
			}
			if (nabaa === MSJLBADAA) {
				sendbtn(-1);
				auxbtn(1);
			}
			if (nabaa === MSJLTASJEEL) {
				sendbtn(2); 
				auxbtn(2);
			}
			if (nabaa === MSJLINTAHAA) {
				auxbtn();
				sendbtn();
				$.taxeer('messagebox', function () {
					if (Recorder.mulhaq) mfateeh.messagebox.focus();
				}, 10); 
			}
		}
	});
	Hooks.set('ready', function () {
		Network.intercept('messages', function (intahaa) {
			intahaa( sessions.signedin() ? 1 : undefined );
		});
		Network.response.upload('messages', 'photo', function (response) {
			if (response) Uploader.stop();
			else {
				Webapp.status('failed to send photo message');
			}
		});
		Network.response.upload('messages', 'sawt', function (response) {
			if (view.is_active('messages')) {
				if (response) {
					Recorder.itlaqsawt(2); 
				} else {
					Webapp.status('failed to send voice message');
				}
			}
		});
		Network.response.get('messages', 'taxeer', function (response) {
			if (isarr(response)) response.forEach(function (item) {
				messages.itlaqtaxeer(item);
			});
		});
		Offline.response.get('messages', function (response) {
			messages.fahras( response );
		});
		Offline.response.add('messages', function (response) {
			if (response && current) {
				if (response.room === current.uid) {
					if (last_message) {
						if (last_message.uid === response.ruid) {
							last_message = 0;
						}
					}
					messageslist.set( response );
				}
			}
		});
		Offline.response.remove('messages', function (response) {
			var o = messageslist.adapter.get(response);
			if (o) {
				o.text = 'this msg was deleted';
				messageslist.set(o);
				$.taxeer('messagesremove'+response, function () {
					messageslist.pop(response);
				}, 3000);
			}
		});
		mfateeh = view.mfateeh('messages');
		resize();
		messageslist = list( mfateeh.list ).idprefix('messages')
						.listitem('messageitem');
		messageslist.uponpaststart = function () { this.first(); return 1; };
		messageslist.beforeset = function (item) {
			var t = item.removetaxeer, s = 'ixtaf';
			if (item.remove || !isundef(t)) s = 'izhar';
			if (item.remove > 1) item.text = 'this msg was deleted';
			item.removestr = s;
			if (item.sinf === 1 && !item.muntahaa) {
				item.text = '...';
			}
			return item;
		};
		messageslist.afterset = function (item, clone, k) {
			var t = item.removetaxeer;
			if (item.remove || isundef(t)) {
				popdata(k.removewaqt, 'time');
				innertext(k.removewaqt, '');
			}
			else if (!isundef(t)) {
				var s = 0;
				if (t === 1) s = 5;
				else if (t === 2) s = 15;
				else if (t === 3) s = 30;
				else if (t === 4) s = 60;
				setdata(k.removewaqt, 'time', time.now()+(s*1000));
				time(clone);
			}
			if (item.remove > 1) {
				setdata(clone, 'mahvoof', 1);
			} else {
				popdata(clone, 'mahvoof');
			}
			if (item.sinf === 1 && !item.muntahaa) {
				var src = Network.xitaab+item.xitaab;
				izhar(k.hafr);
				sawthafr.drawaudio(k.hafr, src, 0, 6).then(function (audbuf, filtered, size) {
					var dur = audbuf.duration;
					if (isnum(dur)) {
						dur = Math.round(dur);
						innerhtml(k.text, '<b>'+dur+'s</b> <small>'+Math.round(size/1024)+'kB'+'</small>');
						item.muntahaa = 2;
					}
				});
				item.text = undefined;
				item.muntahaa = 1;
			}
			if (item.sinf === 2) {
				izhar(k.hafr);
				var img = createelement('img', 'preview2');
				k.hafr.replaceWith( img );
				k.hafr = img;
				setdata(k.hafr, 'id', 'hafr');
				k.hafr.src = Network.xitaab+item.xitaab;
			}
			var ps = prevsibling(clone), yes = 1, margin = 0;
			if (ps) {
				var pskeys = templates.keys(ps);
				var previtem = messageslist.adapter.get( getdata(ps, 'uid') );
				if (previtem) {
					if (item.maalik === previtem.maalik) yes = 0;
					if (!pskeys.padder.hidden) margin = 1;
				}
			}
			setdata(k.waqtqabl, 'time', item.created);
			if (margin && yes) setdata(clone, 'margin', 1);
			else popdata(clone, 'margin');
			if (clone && yes) {
				k.padder.hidden = 0;
				setdata(clone, 'hasphoto', 1);
				$.taxeer('messagesphoto'+item.uid, function () {
					setcss(k.photo, 'opacity', 1);
					setcss(k.photo, 'height');
					hisaabaat.get([item.maalik], function (nataaij) {
						nataaij.forEach(function (o) {
							photo = setshakl(o, k.photo);
							photo.zoomlevel = .25;
							photo.panned.y = 25;
							photo.jaddad();
						});
					});
				}, 50);
			} else {
				k.padder.hidden = 1;
				popdata(clone, 'hasphoto');
				setcss(k.photo, 'height', 0);
				setcss(k.photo, 'opacity', 0);
			}
		};
		messageslist.onpress = function (item, key, uid) {
			if (item && key === K.en) {
				if (item.sinf === 0) {
					haadirsawt && haadirsawt.intahaa();
					haadirsawt = sawtkaatib.minhuroof(item.text);
					var rb = mfateeh.messagebox;
					rb.value = '';
					var str = '';
					haadirsawt.uponsawt = function (v) {
						str += v;
						if (v == ' ') {
							setcss(rb, 'height', 0);
							if (rb.scrollHeight > rb.offsetHeight)
								setcss(rb, 'height', rb.scrollHeight+3+'px');
						}
						rb.value = str;
					};
				}
				if (item.sinf === 1) {
					Recorder.il3ab(Network.xitaab+item.xitaab)
					var clone = messageslist.get( messageslist.id2num( item.uid ) );
					if (clone) setdata(clone, 'la3ib', 1);
				}
				if (item.sinf === 2) {
					messages.iftahphoto(item);
				}
			}
			if (item && !item.remove && key === '0') {
				var t = item.removetaxeer, s;
				if (isundef(t)) t = 1, s = 5; 
				else if (t === 1) t = 2, s = 15; 
				else if (t === 2) t = 3, s = 30; 
				else if (t === 3) t = 4, s = 60; 
				else if (t === 4) t = undefined; 
				item.removetaxeer = t;
				if (t) $.taxeer('removetaxeer'+item.uid, function () {
					Offline.remove('messages', { uid: item.uid });
					item.remove = 1;
					messageslist.set(item);
				}, s*1000);
				else $.taxeercancel('removetaxeer'+item.uid);
				messageslist.set(item);
			}
		};
		messageslist.uponpastend = function () {
			messageslist.deselect();
			mfateeh.messagebox.focus();
			return 1;
		};
	});
	Hooks.set('viewready', function (args) {
		switch (args.name) {
			case 'messages':
				if (current) {
					Recorder.iltahaq(mfateeh);
					Recorder.intahaa();
					Uploader.attach(mfateeh);
					Uploader.stop();
					messages.itlaq();
				}
				break;
			default:
				Recorder.infasal();
				Uploader.detach();
				break;
		}
	});
})();
var simplify_line;
(function () { 'use strict';
function getSqDist(p1, p2) {
var dx = p1.x - p2.x,
dy = p1.y - p2.y;
return dx * dx + dy * dy;
}
function getSqSegDist(p, p1, p2) {
var x = p1.x,
y = p1.y,
dx = p2.x - x,
dy = p2.y - y;
if (dx !== 0 || dy !== 0) {
var t = ((p.x - x) * dx + (p.y - y) * dy) / (dx * dx + dy * dy);
if (t > 1) {
x = p2.x;
y = p2.y;
} else if (t > 0) {
x += dx * t;
y += dy * t;
}
}
dx = p.x - x;
dy = p.y - y;
return dx * dx + dy * dy;
}
function simplifyRadialDist(points, sqTolerance) {
var prevPoint = points[0],
newPoints = [prevPoint],
point;
for (var i = 1, len = points.length; i < len; i++) {
point = points[i];
if (getSqDist(point, prevPoint) > sqTolerance) {
newPoints.push(point);
prevPoint = point;
}
}
if (prevPoint !== point) newPoints.push(point);
return newPoints;
}
function simplifyDPStep(points, first, last, sqTolerance, simplified) {
var maxSqDist = sqTolerance,
index;
for (var i = first + 1; i < last; i++) {
var sqDist = getSqSegDist(points[i], points[first], points[last]);
if (sqDist > maxSqDist) {
index = i;
maxSqDist = sqDist;
}
}
if (maxSqDist > sqTolerance) {
if (index - first > 1) simplifyDPStep(points, first, index, sqTolerance, simplified);
simplified.push(points[index]);
if (last - index > 1) simplifyDPStep(points, index, last, sqTolerance, simplified);
}
}
function simplifyDouglasPeucker(points, sqTolerance) {
var last = points.length - 1;
var simplified = [points[0]];
simplifyDPStep(points, 0, last, sqTolerance, simplified);
simplified.push(points[last]);
return simplified;
}
function simplify(points, tolerance, highestQuality) {
if (points.length <= 2) return points;
var sqTolerance = tolerance !== undefined ? tolerance * tolerance : 1;
points = highestQuality ? points : simplifyRadialDist(points, sqTolerance);
points = simplifyDouglasPeucker(points, sqTolerance);
return points;
}
simplify_line = simplify;
})();
 
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).io=e()}(this,(function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,o=void 0,"symbol"==typeof(o=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"))?o:String(o)),r)}var i,o}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e,n){return c=u()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&a(i,n.prototype),i},c.apply(null,arguments)}function h(t){var e="function"==typeof Map?new Map:void 0;return h=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return c(t,arguments,s(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)},h(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){var e=u();return function(){var n,r=s(t);if(e){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}(this,n)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}},p.apply(this,arguments)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}var v=Object.create(null);v.open="0",v.close="1",v.ping="2",v.pong="3",v.message="4",v.upgrade="5",v.noop="6";var g=Object.create(null);Object.keys(v).forEach((function(t){g[v[t]]=t}));var m,b={type:"error",data:"parser error"},k="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),w="function"==typeof ArrayBuffer,_=function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer},A=function(t,e,n){var r=t.type,i=t.data;return k&&i instanceof Blob?e?n(i):O(i,n):w&&(i instanceof ArrayBuffer||_(i))?e?n(i):O(new Blob([i]),n):n(v[r]+(i||""))},O=function(t,e){var n=new FileReader;return n.onload=function(){var t=n.result.split(",")[1];e("b"+(t||""))},n.readAsDataURL(t)};function E(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}for(var T="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",R="undefined"==typeof Uint8Array?[]:new Uint8Array(256),C=0;C<64;C++)R[T.charCodeAt(C)]=C;var B,S="function"==typeof ArrayBuffer,N=function(t,e){if("string"!=typeof t)return{type:"message",data:x(t,e)};var n=t.charAt(0);return"b"===n?{type:"message",data:L(t.substring(1),e)}:g[n]?t.length>1?{type:g[n],data:t.substring(1)}:{type:g[n]}:b},L=function(t,e){if(S){var n=function(t){var e,n,r,i,o,s=.75*t.length,a=t.length,u=0;"="===t[t.length-1]&&(s--,"="===t[t.length-2]&&s--);var c=new ArrayBuffer(s),h=new Uint8Array(c);for(e=0;e<a;e+=4)n=R[t.charCodeAt(e)],r=R[t.charCodeAt(e+1)],i=R[t.charCodeAt(e+2)],o=R[t.charCodeAt(e+3)],h[u++]=n<<2|r>>4,h[u++]=(15&r)<<4|i>>2,h[u++]=(3&i)<<6|63&o;return c}(t);return x(n,e)}return{base64:!0,data:t}},x=function(t,e){return"blob"===e?t instanceof Blob?t:new Blob([t]):t instanceof ArrayBuffer?t:t.buffer},P=String.fromCharCode(30);function q(){return new TransformStream({transform:function(t,e){!function(t,e){k&&t.data instanceof Blob?t.data.arrayBuffer().then(E).then(e):w&&(t.data instanceof ArrayBuffer||_(t.data))?e(E(t.data)):A(t,!1,(function(t){m||(m=new TextEncoder),e(m.encode(t))}))}(t,(function(n){var r,i=n.length;if(i<126)r=new Uint8Array(1),new DataView(r.buffer).setUint8(0,i);else if(i<65536){r=new Uint8Array(3);var o=new DataView(r.buffer);o.setUint8(0,126),o.setUint16(1,i)}else{r=new Uint8Array(9);var s=new DataView(r.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(i))}t.data&&"string"!=typeof t.data&&(r[0]|=128),e.enqueue(r),e.enqueue(n)}))}})}function j(t){return t.reduce((function(t,e){return t+e.length}),0)}function D(t,e){if(t[0].length===e)return t.shift();for(var n=new Uint8Array(e),r=0,i=0;i<e;i++)n[i]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function U(t){if(t)return function(t){for(var e in U.prototype)t[e]=U.prototype[e];return t}(t)}U.prototype.on=U.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},U.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},U.prototype.off=U.prototype.removeListener=U.prototype.removeAllListeners=U.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var i=0;i<r.length;i++)if((n=r[i])===e||n.fn===e){r.splice(i,1);break}return 0===r.length&&delete this._callbacks["$"+t],this},U.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){r=0;for(var i=(n=n.slice(0)).length;r<i;++r)n[r].apply(this,e)}return this},U.prototype.emitReserved=U.prototype.emit,U.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},U.prototype.hasListeners=function(t){return!!this.listeners(t).length};var I="undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")();function F(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return n.reduce((function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e}),{})}var M=I.setTimeout,V=I.clearTimeout;function H(t,e){e.useNativeTimers?(t.setTimeoutFn=M.bind(I),t.clearTimeoutFn=V.bind(I)):(t.setTimeoutFn=I.setTimeout.bind(I),t.clearTimeoutFn=I.clearTimeout.bind(I))}var K,Y=function(t){o(i,t);var n=l(i);function i(t,r,o){var s;return e(this,i),(s=n.call(this,t)).description=r,s.context=o,s.type="TransportError",s}return r(i)}(h(Error)),W=function(t){o(i,t);var n=l(i);function i(t){var r;return e(this,i),(r=n.call(this)).writable=!1,H(f(r),t),r.opts=t,r.query=t.query,r.socket=t.socket,r}return r(i,[{key:"onError",value:function(t,e,n){return p(s(i.prototype),"emitReserved",this).call(this,"error",new Y(t,e,n)),this}},{key:"open",value:function(){return this.readyState="opening",this.doOpen(),this}},{key:"close",value:function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}},{key:"send",value:function(t){"open"===this.readyState&&this.write(t)}},{key:"onOpen",value:function(){this.readyState="open",this.writable=!0,p(s(i.prototype),"emitReserved",this).call(this,"open")}},{key:"onData",value:function(t){var e=N(t,this.socket.binaryType);this.onPacket(e)}},{key:"onPacket",value:function(t){p(s(i.prototype),"emitReserved",this).call(this,"packet",t)}},{key:"onClose",value:function(t){this.readyState="closed",p(s(i.prototype),"emitReserved",this).call(this,"close",t)}},{key:"pause",value:function(t){}},{key:"createUri",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}},{key:"_hostname",value:function(){var t=this.opts.hostname;return-1===t.indexOf(":")?t:"["+t+"]"}},{key:"_port",value:function(){return this.opts.port&&(this.opts.secure&&Number(443!==this.opts.port)||!this.opts.secure&&80!==Number(this.opts.port))?":"+this.opts.port:""}},{key:"_query",value:function(t){var e=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}(t);return e.length?"?"+e:""}}]),i}(U),z="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),J=64,$={},Q=0,X=0;function G(t){var e="";do{e=z[t%J]+e,t=Math.floor(t/J)}while(t>0);return e}function Z(){var t=G(+new Date);return t!==K?(Q=0,K=t):t+"."+G(Q++)}for(;X<J;X++)$[z[X]]=X;var tt=!1;try{tt="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(t){}var et=tt;function nt(t){var e=t.xdomain;try{if("undefined"!=typeof XMLHttpRequest&&(!e||et))return new XMLHttpRequest}catch(t){}if(!e)try{return new(I[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}function rt(){}var it=null!=new nt({xdomain:!1}).responseType,ot=function(t){o(s,t);var n=l(s);function s(t){var r;if(e(this,s),(r=n.call(this,t)).polling=!1,"undefined"!=typeof location){var i="https:"===location.protocol,o=location.port;o||(o=i?"443":"80"),r.xd="undefined"!=typeof location&&t.hostname!==location.hostname||o!==t.port}var a=t&&t.forceBase64;return r.supportsBinary=it&&!a,r.opts.withCredentials&&(r.cookieJar=void 0),r}return r(s,[{key:"name",get:function(){return"polling"}},{key:"doOpen",value:function(){this.poll()}},{key:"pause",value:function(t){var e=this;this.readyState="pausing";var n=function(){e.readyState="paused",t()};if(this.polling||!this.writable){var r=0;this.polling&&(r++,this.once("pollComplete",(function(){--r||n()}))),this.writable||(r++,this.once("drain",(function(){--r||n()})))}else n()}},{key:"poll",value:function(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}},{key:"onData",value:function(t){var e=this;(function(t,e){for(var n=t.split(P),r=[],i=0;i<n.length;i++){var o=N(n[i],e);if(r.push(o),"error"===o.type)break}return r})(t,this.socket.binaryType).forEach((function(t){if("opening"===e.readyState&&"open"===t.type&&e.onOpen(),"close"===t.type)return e.onClose({description:"transport closed by the server"}),!1;e.onPacket(t)})),"closed"!==this.readyState&&(this.polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this.poll())}},{key:"doClose",value:function(){var t=this,e=function(){t.write([{type:"close"}])};"open"===this.readyState?e():this.once("open",e)}},{key:"write",value:function(t){var e=this;this.writable=!1,function(t,e){var n=t.length,r=new Array(n),i=0;t.forEach((function(t,o){A(t,!1,(function(t){r[o]=t,++i===n&&e(r.join(P))}))}))}(t,(function(t){e.doWrite(t,(function(){e.writable=!0,e.emitReserved("drain")}))}))}},{key:"uri",value:function(){var t=this.opts.secure?"https":"http",e=this.query||{};return!1!==this.opts.timestampRequests&&(e[this.opts.timestampParam]=Z()),this.supportsBinary||e.sid||(e.b64=1),this.createUri(t,e)}},{key:"request",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(t,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new st(this.uri(),t)}},{key:"doWrite",value:function(t,e){var n=this,r=this.request({method:"POST",data:t});r.on("success",e),r.on("error",(function(t,e){n.onError("xhr post error",t,e)}))}},{key:"doPoll",value:function(){var t=this,e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(function(e,n){t.onError("xhr poll error",e,n)})),this.pollXhr=e}}]),s}(W),st=function(t){o(i,t);var n=l(i);function i(t,r){var o;return e(this,i),H(f(o=n.call(this)),r),o.opts=r,o.method=r.method||"GET",o.uri=t,o.data=void 0!==r.data?r.data:null,o.create(),o}return r(i,[{key:"create",value:function(){var t,e=this,n=F(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this.opts.xd;var r=this.xhr=new nt(n);try{r.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders)for(var o in r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0),this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(o)&&r.setRequestHeader(o,this.opts.extraHeaders[o])}catch(t){}if("POST"===this.method)try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{r.setRequestHeader("Accept","*/*")}catch(t){}null===(t=this.opts.cookieJar)||void 0===t||t.addCookies(r),"withCredentials"in r&&(r.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(r.timeout=this.opts.requestTimeout),r.onreadystatechange=function(){var t;3===r.readyState&&(null===(t=e.opts.cookieJar)||void 0===t||t.parseCookies(r)),4===r.readyState&&(200===r.status||1223===r.status?e.onLoad():e.setTimeoutFn((function(){e.onError("number"==typeof r.status?r.status:0)}),0))},r.send(this.data)}catch(t){return void this.setTimeoutFn((function(){e.onError(t)}),0)}"undefined"!=typeof document&&(this.index=i.requestsCount++,i.requests[this.index]=this)}},{key:"onError",value:function(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}},{key:"cleanup",value:function(t){if(void 0!==this.xhr&&null!==this.xhr){if(this.xhr.onreadystatechange=rt,t)try{this.xhr.abort()}catch(t){}"undefined"!=typeof document&&delete i.requests[this.index],this.xhr=null}}},{key:"onLoad",value:function(){var t=this.xhr.responseText;null!==t&&(this.emitReserved("data",t),this.emitReserved("success"),this.cleanup())}},{key:"abort",value:function(){this.cleanup()}}]),i}(U);if(st.requestsCount=0,st.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",at);else if("function"==typeof addEventListener){addEventListener("onpagehide"in I?"pagehide":"unload",at,!1)}function at(){for(var t in st.requests)st.requests.hasOwnProperty(t)&&st.requests[t].abort()}var ut="function"==typeof Promise&&"function"==typeof Promise.resolve?function(t){return Promise.resolve().then(t)}:function(t,e){return e(t,0)},ct=I.WebSocket||I.MozWebSocket,ht="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),ft=function(t){o(i,t);var n=l(i);function i(t){var r;return e(this,i),(r=n.call(this,t)).supportsBinary=!t.forceBase64,r}return r(i,[{key:"name",get:function(){return"websocket"}},{key:"doOpen",value:function(){if(this.check()){var t=this.uri(),e=this.opts.protocols,n=ht?{}:F(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=ht?new ct(t,e,n):e?new ct(t,e):new ct(t)}catch(t){return this.emitReserved("error",t)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}}},{key:"addEventListeners",value:function(){var t=this;this.ws.onopen=function(){t.opts.autoUnref&&t.ws._socket.unref(),t.onOpen()},this.ws.onclose=function(e){return t.onClose({description:"websocket connection closed",context:e})},this.ws.onmessage=function(e){return t.onData(e.data)},this.ws.onerror=function(e){return t.onError("websocket error",e)}}},{key:"write",value:function(t){var e=this;this.writable=!1;for(var n=function(){var n=t[r],i=r===t.length-1;A(n,e.supportsBinary,(function(t){try{e.ws.send(t)}catch(t){}i&&ut((function(){e.writable=!0,e.emitReserved("drain")}),e.setTimeoutFn)}))},r=0;r<t.length;r++)n()}},{key:"doClose",value:function(){void 0!==this.ws&&(this.ws.close(),this.ws=null)}},{key:"uri",value:function(){var t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=Z()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}},{key:"check",value:function(){return!!ct}}]),i}(W),lt=function(t){o(i,t);var n=l(i);function i(){return e(this,i),n.apply(this,arguments)}return r(i,[{key:"name",get:function(){return"webtransport"}},{key:"doOpen",value:function(){var t=this;"function"==typeof WebTransport&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then((function(){t.onClose()})).catch((function(e){t.onError("webtransport error",e)})),this.transport.ready.then((function(){t.transport.createBidirectionalStream().then((function(e){var n=function(t,e){B||(B=new TextDecoder);var n=[],r=0,i=-1,o=!1;return new TransformStream({transform:function(s,a){for(n.push(s);;){if(0===r){if(j(n)<1)break;var u=D(n,1);o=128==(128&u[0]),i=127&u[0],r=i<126?3:126===i?1:2}else if(1===r){if(j(n)<2)break;var c=D(n,2);i=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),r=3}else if(2===r){if(j(n)<8)break;var h=D(n,8),f=new DataView(h.buffer,h.byteOffset,h.length),l=f.getUint32(0);if(l>Math.pow(2,21)-1){a.enqueue(b);break}i=l*Math.pow(2,32)+f.getUint32(4),r=3}else{if(j(n)<i)break;var p=D(n,i);a.enqueue(N(o?p:B.decode(p),e)),r=0}if(0===i||i>t){a.enqueue(b);break}}}})}(Number.MAX_SAFE_INTEGER,t.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),i=q();i.readable.pipeTo(e.writable),t.writer=i.writable.getWriter();!function e(){r.read().then((function(n){var r=n.done,i=n.value;r||(t.onPacket(i),e())})).catch((function(t){}))}();var o={type:"open"};t.query.sid&&(o.data='{"sid":"'.concat(t.query.sid,'"}')),t.writer.write(o).then((function(){return t.onOpen()}))}))})))}},{key:"write",value:function(t){var e=this;this.writable=!1;for(var n=function(){var n=t[r],i=r===t.length-1;e.writer.write(n).then((function(){i&&ut((function(){e.writable=!0,e.emitReserved("drain")}),e.setTimeoutFn)}))},r=0;r<t.length;r++)n()}},{key:"doClose",value:function(){var t;null===(t=this.transport)||void 0===t||t.close()}}]),i}(W),pt={websocket:ft,webtransport:lt,polling:ot},dt=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,yt=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function vt(t){var e=t,n=t.indexOf("["),r=t.indexOf("]");-1!=n&&-1!=r&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));for(var i,o,s=dt.exec(t||""),a={},u=14;u--;)a[yt[u]]=s[u]||"";return-1!=n&&-1!=r&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a.pathNames=function(t,e){var n=/\/{2,9}/g,r=e.replace(n,"/").split("/");"/"!=e.slice(0,1)&&0!==e.length||r.splice(0,1);"/"==e.slice(-1)&&r.splice(r.length-1,1);return r}(0,a.path),a.queryKey=(i=a.query,o={},i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,(function(t,e,n){e&&(o[e]=n)})),o),a}var gt=function(n){o(a,n);var s=l(a);function a(n){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e(this,a),(r=s.call(this)).binaryType="arraybuffer",r.writeBuffer=[],n&&"object"===t(n)&&(o=n,n=null),n?(n=vt(n),o.hostname=n.host,o.secure="https"===n.protocol||"wss"===n.protocol,o.port=n.port,n.query&&(o.query=n.query)):o.host&&(o.hostname=vt(o.host).host),H(f(r),o),r.secure=null!=o.secure?o.secure:"undefined"!=typeof location&&"https:"===location.protocol,o.hostname&&!o.port&&(o.port=r.secure?"443":"80"),r.hostname=o.hostname||("undefined"!=typeof location?location.hostname:"localhost"),r.port=o.port||("undefined"!=typeof location&&location.port?location.port:r.secure?"443":"80"),r.transports=o.transports||["polling","websocket","webtransport"],r.writeBuffer=[],r.prevBufferLen=0,r.opts=i({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},o),r.opts.path=r.opts.path.replace(/\/$/,"")+(r.opts.addTrailingSlash?"/":""),"string"==typeof r.opts.query&&(r.opts.query=function(t){for(var e={},n=t.split("&"),r=0,i=n.length;r<i;r++){var o=n[r].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}(r.opts.query)),r.id=null,r.upgrades=null,r.pingInterval=null,r.pingTimeout=null,r.pingTimeoutTimer=null,"function"==typeof addEventListener&&(r.opts.closeOnBeforeunload&&(r.beforeunloadEventListener=function(){r.transport&&(r.transport.removeAllListeners(),r.transport.close())},addEventListener("beforeunload",r.beforeunloadEventListener,!1)),"localhost"!==r.hostname&&(r.offlineEventListener=function(){r.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",r.offlineEventListener,!1))),r.open(),r}return r(a,[{key:"createTransport",value:function(t){var e=i({},this.opts.query);e.EIO=4,e.transport=t,this.id&&(e.sid=this.id);var n=i({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new pt[t](n)}},{key:"open",value:function(){var t,e=this;if(this.opts.rememberUpgrade&&a.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length)return void this.setTimeoutFn((function(){e.emitReserved("error","No transports available")}),0);t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)}},{key:"setTransport",value:function(t){var e=this;this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",(function(t){return e.onClose("transport close",t)}))}},{key:"probe",value:function(t){var e=this,n=this.createTransport(t),r=!1;a.priorWebsocketSuccess=!1;var i=function(){r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",(function(t){if(!r)if("pong"===t.type&&"probe"===t.data){if(e.upgrading=!0,e.emitReserved("upgrading",n),!n)return;a.priorWebsocketSuccess="websocket"===n.name,e.transport.pause((function(){r||"closed"!==e.readyState&&(f(),e.setTransport(n),n.send([{type:"upgrade"}]),e.emitReserved("upgrade",n),n=null,e.upgrading=!1,e.flush())}))}else{var i=new Error("probe error");i.transport=n.name,e.emitReserved("upgradeError",i)}})))};function o(){r||(r=!0,f(),n.close(),n=null)}var s=function(t){var r=new Error("probe error: "+t);r.transport=n.name,o(),e.emitReserved("upgradeError",r)};function u(){s("transport closed")}function c(){s("socket closed")}function h(t){n&&t.name!==n.name&&o()}var f=function(){n.removeListener("open",i),n.removeListener("error",s),n.removeListener("close",u),e.off("close",c),e.off("upgrading",h)};n.once("open",i),n.once("error",s),n.once("close",u),this.once("close",c),this.once("upgrading",h),-1!==this.upgrades.indexOf("webtransport")&&"webtransport"!==t?this.setTimeoutFn((function(){r||n.open()}),200):n.open()}},{key:"onOpen",value:function(){if(this.readyState="open",a.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade)for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},{key:"onPacket",value:function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),this.resetPingTimeout(),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data)}}},{key:"onHandshake",value:function(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.maxPayload=t.maxPayload,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}},{key:"resetPingTimeout",value:function(){var t=this;this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn((function(){t.onClose("ping timeout")}),this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}},{key:"onDrain",value:function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}},{key:"flush",value:function(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){var t=this.getWritablePackets();this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush")}}},{key:"getWritablePackets",value:function(){if(!(this.maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1))return this.writeBuffer;for(var t,e=1,n=0;n<this.writeBuffer.length;n++){var r=this.writeBuffer[n].data;if(r&&(e+="string"==typeof(t=r)?function(t){for(var e=0,n=0,r=0,i=t.length;r<i;r++)(e=t.charCodeAt(r))<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}(t):Math.ceil(1.33*(t.byteLength||t.size))),n>0&&e>this.maxPayload)return this.writeBuffer.slice(0,n);e+=2}return this.writeBuffer}},{key:"write",value:function(t,e,n){return this.sendPacket("message",t,e,n),this}},{key:"send",value:function(t,e,n){return this.sendPacket("message",t,e,n),this}},{key:"sendPacket",value:function(t,e,n,r){if("function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){(n=n||{}).compress=!1!==n.compress;var i={type:t,data:e,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}}},{key:"close",value:function(){var t=this,e=function(){t.onClose("forced close"),t.transport.close()},n=function n(){t.off("upgrade",n),t.off("upgradeError",n),e()},r=function(){t.once("upgrade",n),t.once("upgradeError",n)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",(function(){t.upgrading?r():e()})):this.upgrading?r():e()),this}},{key:"onError",value:function(t){a.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}},{key:"onClose",value:function(t,e){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"==typeof removeEventListener&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this.prevBufferLen=0)}},{key:"filterUpgrades",value:function(t){for(var e=[],n=0,r=t.length;n<r;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}}]),a}(U);gt.protocol=4,gt.protocol;var mt="function"==typeof ArrayBuffer,bt=function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer},kt=Object.prototype.toString,wt="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===kt.call(Blob),_t="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===kt.call(File);function At(t){return mt&&(t instanceof ArrayBuffer||bt(t))||wt&&t instanceof Blob||_t&&t instanceof File}function Ot(e,n){if(!e||"object"!==t(e))return!1;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)if(Ot(e[r]))return!0;return!1}if(At(e))return!0;if(e.toJSON&&"function"==typeof e.toJSON&&1===arguments.length)return Ot(e.toJSON(),!0);for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)&&Ot(e[o]))return!0;return!1}function Et(t){var e=[],n=t.data,r=t;return r.data=Tt(n,e),r.attachments=e.length,{packet:r,buffers:e}}function Tt(e,n){if(!e)return e;if(At(e)){var r={_placeholder:!0,num:n.length};return n.push(e),r}if(Array.isArray(e)){for(var i=new Array(e.length),o=0;o<e.length;o++)i[o]=Tt(e[o],n);return i}if("object"===t(e)&&!(e instanceof Date)){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(s[a]=Tt(e[a],n));return s}return e}function Rt(t,e){return t.data=Ct(t.data,e),delete t.attachments,t}function Ct(e,n){if(!e)return e;if(e&&!0===e._placeholder){if("number"==typeof e.num&&e.num>=0&&e.num<n.length)return n[e.num];throw new Error("illegal attachments")}if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]=Ct(e[r],n);else if("object"===t(e))for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(e[i]=Ct(e[i],n));return e}var Bt,St=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];!function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"}(Bt||(Bt={}));var Nt=function(){function t(n){e(this,t),this.replacer=n}return r(t,[{key:"encode",value:function(t){return t.type!==Bt.EVENT&&t.type!==Bt.ACK||!Ot(t)?[this.encodeAsString(t)]:this.encodeAsBinary({type:t.type===Bt.EVENT?Bt.BINARY_EVENT:Bt.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id})}},{key:"encodeAsString",value:function(t){var e=""+t.type;return t.type!==Bt.BINARY_EVENT&&t.type!==Bt.BINARY_ACK||(e+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(e+=t.nsp+","),null!=t.id&&(e+=t.id),null!=t.data&&(e+=JSON.stringify(t.data,this.replacer)),e}},{key:"encodeAsBinary",value:function(t){var e=Et(t),n=this.encodeAsString(e.packet),r=e.buffers;return r.unshift(n),r}}]),t}();function Lt(t){return"[object Object]"===Object.prototype.toString.call(t)}var xt=function(t){o(i,t);var n=l(i);function i(t){var r;return e(this,i),(r=n.call(this)).reviver=t,r}return r(i,[{key:"add",value:function(t){var e;if("string"==typeof t){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");var n=(e=this.decodeString(t)).type===Bt.BINARY_EVENT;n||e.type===Bt.BINARY_ACK?(e.type=n?Bt.EVENT:Bt.ACK,this.reconstructor=new Pt(e),0===e.attachments&&p(s(i.prototype),"emitReserved",this).call(this,"decoded",e)):p(s(i.prototype),"emitReserved",this).call(this,"decoded",e)}else{if(!At(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");(e=this.reconstructor.takeBinaryData(t))&&(this.reconstructor=null,p(s(i.prototype),"emitReserved",this).call(this,"decoded",e))}}},{key:"decodeString",value:function(t){var e=0,n={type:Number(t.charAt(0))};if(void 0===Bt[n.type])throw new Error("unknown packet type "+n.type);if(n.type===Bt.BINARY_EVENT||n.type===Bt.BINARY_ACK){for(var r=e+1;"-"!==t.charAt(++e)&&e!=t.length;);var o=t.substring(r,e);if(o!=Number(o)||"-"!==t.charAt(e))throw new Error("Illegal attachments");n.attachments=Number(o)}if("/"===t.charAt(e+1)){for(var s=e+1;++e;){if(","===t.charAt(e))break;if(e===t.length)break}n.nsp=t.substring(s,e)}else n.nsp="/";var a=t.charAt(e+1);if(""!==a&&Number(a)==a){for(var u=e+1;++e;){var c=t.charAt(e);if(null==c||Number(c)!=c){--e;break}if(e===t.length)break}n.id=Number(t.substring(u,e+1))}if(t.charAt(++e)){var h=this.tryParse(t.substr(e));if(!i.isPayloadValid(n.type,h))throw new Error("invalid payload");n.data=h}return n}},{key:"tryParse",value:function(t){try{return JSON.parse(t,this.reviver)}catch(t){return!1}}},{key:"destroy",value:function(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}],[{key:"isPayloadValid",value:function(t,e){switch(t){case Bt.CONNECT:return Lt(e);case Bt.DISCONNECT:return void 0===e;case Bt.CONNECT_ERROR:return"string"==typeof e||Lt(e);case Bt.EVENT:case Bt.BINARY_EVENT:return Array.isArray(e)&&("number"==typeof e[0]||"string"==typeof e[0]&&-1===St.indexOf(e[0]));case Bt.ACK:case Bt.BINARY_ACK:return Array.isArray(e)}}}]),i}(U),Pt=function(){function t(n){e(this,t),this.packet=n,this.buffers=[],this.reconPack=n}return r(t,[{key:"takeBinaryData",value:function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=Rt(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}},{key:"finishedReconstruction",value:function(){this.reconPack=null,this.buffers=[]}}]),t}(),qt=Object.freeze({__proto__:null,protocol:5,get PacketType(){return Bt},Encoder:Nt,Decoder:xt});function jt(t,e,n){return t.on(e,n),function(){t.off(e,n)}}var Dt=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1}),Ut=function(t){o(a,t);var n=l(a);function a(t,r,o){var s;return e(this,a),(s=n.call(this)).connected=!1,s.recovered=!1,s.receiveBuffer=[],s.sendBuffer=[],s._queue=[],s._queueSeq=0,s.ids=0,s.acks={},s.flags={},s.io=t,s.nsp=r,o&&o.auth&&(s.auth=o.auth),s._opts=i({},o),s.io._autoConnect&&s.open(),s}return r(a,[{key:"disconnected",get:function(){return!this.connected}},{key:"subEvents",value:function(){if(!this.subs){var t=this.io;this.subs=[jt(t,"open",this.onopen.bind(this)),jt(t,"packet",this.onpacket.bind(this)),jt(t,"error",this.onerror.bind(this)),jt(t,"close",this.onclose.bind(this))]}}},{key:"active",get:function(){return!!this.subs}},{key:"connect",value:function(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}},{key:"open",value:function(){return this.connect()}},{key:"send",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.unshift("message"),this.emit.apply(this,e),this}},{key:"emit",value:function(t){if(Dt.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(n.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;var i={type:Bt.EVENT,data:n,options:{}};if(i.options.compress=!1!==this.flags.compress,"function"==typeof n[n.length-1]){var o=this.ids++,s=n.pop();this._registerAckCallback(o,s),i.id=o}var a=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!a||!this.connected)||(this.connected?(this.notifyOutgoingListeners(i),this.packet(i)):this.sendBuffer.push(i)),this.flags={},this}},{key:"_registerAckCallback",value:function(t,e){var n,r=this,i=null!==(n=this.flags.timeout)&&void 0!==n?n:this._opts.ackTimeout;if(void 0!==i){var o=this.io.setTimeoutFn((function(){delete r.acks[t];for(var n=0;n<r.sendBuffer.length;n++)r.sendBuffer[n].id===t&&r.sendBuffer.splice(n,1);e.call(r,new Error("operation has timed out"))}),i);this.acks[t]=function(){r.io.clearTimeoutFn(o);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];e.apply(r,[null].concat(n))}}else this.acks[t]=e}},{key:"emitWithAck",value:function(t){for(var e=this,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=void 0!==this.flags.timeout||void 0!==this._opts.ackTimeout;return new Promise((function(n,i){r.push((function(t,e){return o?t?i(t):n(e):n(t)})),e.emit.apply(e,[t].concat(r))}))}},{key:"_addToQueue",value:function(t){var e,n=this;"function"==typeof t[t.length-1]&&(e=t.pop());var r={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:i({fromQueue:!0},this.flags)};t.push((function(t){if(r===n._queue[0]){if(null!==t)r.tryCount>n._opts.retries&&(n._queue.shift(),e&&e(t));else if(n._queue.shift(),e){for(var i=arguments.length,o=new Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];e.apply(void 0,[null].concat(o))}return r.pending=!1,n._drainQueue()}})),this._queue.push(r),this._drainQueue()}},{key:"_drainQueue",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.connected&&0!==this._queue.length){var e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}}},{key:"packet",value:function(t){t.nsp=this.nsp,this.io._packet(t)}},{key:"onopen",value:function(){var t=this;"function"==typeof this.auth?this.auth((function(e){t._sendConnectPacket(e)})):this._sendConnectPacket(this.auth)}},{key:"_sendConnectPacket",value:function(t){this.packet({type:Bt.CONNECT,data:this._pid?i({pid:this._pid,offset:this._lastOffset},t):t})}},{key:"onerror",value:function(t){this.connected||this.emitReserved("connect_error",t)}},{key:"onclose",value:function(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e)}},{key:"onpacket",value:function(t){if(t.nsp===this.nsp)switch(t.type){case Bt.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Bt.EVENT:case Bt.BINARY_EVENT:this.onevent(t);break;case Bt.ACK:case Bt.BINARY_ACK:this.onack(t);break;case Bt.DISCONNECT:this.ondisconnect();break;case Bt.CONNECT_ERROR:this.destroy();var e=new Error(t.data.message);e.data=t.data.data,this.emitReserved("connect_error",e)}}},{key:"onevent",value:function(t){var e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}},{key:"emitEvent",value:function(t){if(this._anyListeners&&this._anyListeners.length){var e,n=y(this._anyListeners.slice());try{for(n.s();!(e=n.n()).done;){e.value.apply(this,t)}}catch(t){n.e(t)}finally{n.f()}}p(s(a.prototype),"emit",this).apply(this,t),this._pid&&t.length&&"string"==typeof t[t.length-1]&&(this._lastOffset=t[t.length-1])}},{key:"ack",value:function(t){var e=this,n=!1;return function(){if(!n){n=!0;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];e.packet({type:Bt.ACK,id:t,data:i})}}}},{key:"onack",value:function(t){var e=this.acks[t.id];"function"==typeof e&&(e.apply(this,t.data),delete this.acks[t.id])}},{key:"onconnect",value:function(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}},{key:"emitBuffered",value:function(){var t=this;this.receiveBuffer.forEach((function(e){return t.emitEvent(e)})),this.receiveBuffer=[],this.sendBuffer.forEach((function(e){t.notifyOutgoingListeners(e),t.packet(e)})),this.sendBuffer=[]}},{key:"ondisconnect",value:function(){this.destroy(),this.onclose("io server disconnect")}},{key:"destroy",value:function(){this.subs&&(this.subs.forEach((function(t){return t()})),this.subs=void 0),this.io._destroy(this)}},{key:"disconnect",value:function(){return this.connected&&this.packet({type:Bt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}},{key:"close",value:function(){return this.disconnect()}},{key:"compress",value:function(t){return this.flags.compress=t,this}},{key:"volatile",get:function(){return this.flags.volatile=!0,this}},{key:"timeout",value:function(t){return this.flags.timeout=t,this}},{key:"onAny",value:function(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}},{key:"prependAny",value:function(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}},{key:"offAny",value:function(t){if(!this._anyListeners)return this;if(t){for(var e=this._anyListeners,n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}},{key:"listenersAny",value:function(){return this._anyListeners||[]}},{key:"onAnyOutgoing",value:function(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}},{key:"prependAnyOutgoing",value:function(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}},{key:"offAnyOutgoing",value:function(t){if(!this._anyOutgoingListeners)return this;if(t){for(var e=this._anyOutgoingListeners,n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}},{key:"listenersAnyOutgoing",value:function(){return this._anyOutgoingListeners||[]}},{key:"notifyOutgoingListeners",value:function(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){var e,n=y(this._anyOutgoingListeners.slice());try{for(n.s();!(e=n.n()).done;){e.value.apply(this,t.data)}}catch(t){n.e(t)}finally{n.f()}}}}]),a}(U);function It(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}It.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},It.prototype.reset=function(){this.attempts=0},It.prototype.setMin=function(t){this.ms=t},It.prototype.setMax=function(t){this.max=t},It.prototype.setJitter=function(t){this.jitter=t};var Ft=function(n){o(s,n);var i=l(s);function s(n,r){var o,a;e(this,s),(o=i.call(this)).nsps={},o.subs=[],n&&"object"===t(n)&&(r=n,n=void 0),(r=r||{}).path=r.path||"/socket.io",o.opts=r,H(f(o),r),o.reconnection(!1!==r.reconnection),o.reconnectionAttempts(r.reconnectionAttempts||1/0),o.reconnectionDelay(r.reconnectionDelay||1e3),o.reconnectionDelayMax(r.reconnectionDelayMax||5e3),o.randomizationFactor(null!==(a=r.randomizationFactor)&&void 0!==a?a:.5),o.backoff=new It({min:o.reconnectionDelay(),max:o.reconnectionDelayMax(),jitter:o.randomizationFactor()}),o.timeout(null==r.timeout?2e4:r.timeout),o._readyState="closed",o.uri=n;var u=r.parser||qt;return o.encoder=new u.Encoder,o.decoder=new u.Decoder,o._autoConnect=!1!==r.autoConnect,o._autoConnect&&o.open(),o}return r(s,[{key:"reconnection",value:function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}},{key:"reconnectionAttempts",value:function(t){return void 0===t?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}},{key:"reconnectionDelay",value:function(t){var e;return void 0===t?this._reconnectionDelay:(this._reconnectionDelay=t,null===(e=this.backoff)||void 0===e||e.setMin(t),this)}},{key:"randomizationFactor",value:function(t){var e;return void 0===t?this._randomizationFactor:(this._randomizationFactor=t,null===(e=this.backoff)||void 0===e||e.setJitter(t),this)}},{key:"reconnectionDelayMax",value:function(t){var e;return void 0===t?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,null===(e=this.backoff)||void 0===e||e.setMax(t),this)}},{key:"timeout",value:function(t){return arguments.length?(this._timeout=t,this):this._timeout}},{key:"maybeReconnectOnOpen",value:function(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}},{key:"open",value:function(t){var e=this;if(~this._readyState.indexOf("open"))return this;this.engine=new gt(this.uri,this.opts);var n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;var i=jt(n,"open",(function(){r.onopen(),t&&t()})),o=function(n){e.cleanup(),e._readyState="closed",e.emitReserved("error",n),t?t(n):e.maybeReconnectOnOpen()},s=jt(n,"error",o);if(!1!==this._timeout){var a=this._timeout,u=this.setTimeoutFn((function(){i(),o(new Error("timeout")),n.close()}),a);this.opts.autoUnref&&u.unref(),this.subs.push((function(){e.clearTimeoutFn(u)}))}return this.subs.push(i),this.subs.push(s),this}},{key:"connect",value:function(t){return this.open(t)}},{key:"onopen",value:function(){this.cleanup(),this._readyState="open",this.emitReserved("open");var t=this.engine;this.subs.push(jt(t,"ping",this.onping.bind(this)),jt(t,"data",this.ondata.bind(this)),jt(t,"error",this.onerror.bind(this)),jt(t,"close",this.onclose.bind(this)),jt(this.decoder,"decoded",this.ondecoded.bind(this)))}},{key:"onping",value:function(){this.emitReserved("ping")}},{key:"ondata",value:function(t){try{this.decoder.add(t)}catch(t){this.onclose("parse error",t)}}},{key:"ondecoded",value:function(t){var e=this;ut((function(){e.emitReserved("packet",t)}),this.setTimeoutFn)}},{key:"onerror",value:function(t){this.emitReserved("error",t)}},{key:"socket",value:function(t,e){var n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new Ut(this,t,e),this.nsps[t]=n),n}},{key:"_destroy",value:function(t){for(var e=0,n=Object.keys(this.nsps);e<n.length;e++){var r=n[e];if(this.nsps[r].active)return}this._close()}},{key:"_packet",value:function(t){for(var e=this.encoder.encode(t),n=0;n<e.length;n++)this.engine.write(e[n],t.options)}},{key:"cleanup",value:function(){this.subs.forEach((function(t){return t()})),this.subs.length=0,this.decoder.destroy()}},{key:"_close",value:function(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}},{key:"disconnect",value:function(){return this._close()}},{key:"onclose",value:function(t,e){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}},{key:"reconnect",value:function(){var t=this;if(this._reconnecting||this.skipReconnect)return this;var e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{var n=this.backoff.duration();this._reconnecting=!0;var r=this.setTimeoutFn((function(){e.skipReconnect||(t.emitReserved("reconnect_attempt",e.backoff.attempts),e.skipReconnect||e.open((function(n){n?(e._reconnecting=!1,e.reconnect(),t.emitReserved("reconnect_error",n)):e.onreconnect()})))}),n);this.opts.autoUnref&&r.unref(),this.subs.push((function(){t.clearTimeoutFn(r)}))}}},{key:"onreconnect",value:function(){var t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}]),s}(U),Mt={};function Vt(e,n){"object"===t(e)&&(n=e,e=void 0);var r,i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=t;n=n||"undefined"!=typeof location&&location,null==t&&(t=n.protocol+"//"+n.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?n.protocol+t:n.host+t),/^(https?|wss?):\/\//.test(t)||(t=void 0!==n?n.protocol+"//"+t:"https://"+t),r=vt(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";var i=-1!==r.host.indexOf(":")?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port+e,r.href=r.protocol+"://"+i+(n&&n.port===r.port?"":":"+r.port),r}(e,(n=n||{}).path||"/socket.io"),o=i.source,s=i.id,a=i.path,u=Mt[s]&&a in Mt[s].nsps;return n.forceNew||n["force new connection"]||!1===n.multiplex||u?r=new Ft(o,n):(Mt[s]||(Mt[s]=new Ft(o,n)),r=Mt[s]),i.query&&!n.query&&(n.query=i.queryKey),r.socket(i.path,n)}return i(Vt,{Manager:Ft,Socket:Ut,io:Vt,connect:Vt}),Vt}));
var SocketIO = io({
	autoConnect: false,
}), call_list, Whiteboard, pointer_data;
;(function(){
	var module_name = 'call_screen', connection_status, connection_status_string,
		should_call;
	var pen_colors = [ 
		'white',
		'#f66', 
		'#6f6', 
		'#ff6', 
		'#69f', 
	];
	var pointer_held = 0;
	pointer_data = {};
	function redraw_whiteboard_if_needed() {
		Whiteboard.clear(0, 0, whiteboardui.width, whiteboardui.height);
		for (var i in pointer_data) {
			var data = pointer_data[i];
			var color = 0;
			var caller = call_list.adapter.get(data.uid);
			var x = data.x, y = data.y;
			if (caller) {
				color = caller.color;
				var color_str = pen_colors[color] || 'white';
				Whiteboard.circle(x, y, 10, 0, 360, color_str);
				Whiteboard.text(x+14, y+4, caller.name+' '+data.contact, -1, color_str);
				var lines = data.lines;
				if (isarr(lines)) {
					var xlp, lp; 
					lines.forEach(function (p) {
						if (lp && p)
							Whiteboard.line([ lp, p ], color_str);
						if (xlp == 0 && lp && p == 0)
							Whiteboard.circle(lp.x, lp.y, 2, 0, 360, color_str);
						xlp = lp;
						lp = p;
					});
				}
			}
		}
	}
	SocketIO.on('error', function (error) {
		$.log.e('socket_io error', error);
		connection_status = 0;
		on_view_ready();
	});
	SocketIO.on('connect', function () {
		$.log.w('socket_io connect');
		connection_status = 1;
		on_view_ready();
	});
	SocketIO.on('reconnect', function (attempt) { 
		$.log.w('socket_io reconnect', attempt);
		connection_status = 1;
		on_view_ready();
	});
	SocketIO.on('disconnect', function (reason) {
		$.log.w('socket_io disconnect', reason);
		connection_status = 0;
		on_view_ready();
	});
	SocketIO.on('join', after_others_join);
	SocketIO.on('leave', after_leaving);
	SocketIO.on('pointer', function (data) {
		var session_uid = data[0];
		var converted = percentage_to_pixels(data[1], data[2]);
		data[1] = converted[0];
		data[2] = converted[1];
		var p_data;
		p_data = pointer_data[ session_uid ] = pointer_data[ session_uid ] || {};
		p_data.uid = session_uid;
		p_data.x = data[1];
		p_data.y = data[2];
		var lines;
		lines = p_data.lines = p_data.lines || [];
		if (p_data.contact) {
			var lp = lines[ lines.length-1 ];
			var should_add;
			if (!lp)
				should_add = 1;
			if (lp) {
				if (lp.x != data[1] || lp.y != data[2]) {
					should_add = 1;
				}
			}
			if ( should_add ) {
				lines.push( { x: data[1], y: data[2] } );
				var caller = call_list.adapter.get(p_data.uid);
				if (caller) {
					caller.points = lines.length;
					call_list.set(caller);
				}
			}
		}
		redraw_whiteboard_if_needed();
	});
	SocketIO.on('pointer_contact', function (data) {
		$.log.w('pointer_contact', data);
		var p_data;
		p_data = pointer_data[ data[0] ] = pointer_data[ data[0] ] || {};
		p_data.contact = data[1];
		var lines;
		lines = p_data.lines = p_data.lines || [];
		if (lines.length && data[1] === 0) {
			lines.push(0);
			lines = p_data.lines = simplify_line(lines, 1);
			var caller = call_list.adapter.get(p_data.uid);
			if (caller) {
				caller.points = lines.length;
				call_list.set(caller);
			}
		}
		redraw_whiteboard_if_needed();
	});
	function get_session_details() {
		var details = {
			key: Sessions.signedin(),
			platform: 0,
			browser: 0,
			browser_version: 0,
			mobile: 0,
		};
		var uad = navigator.userAgentData;
		if (uad) {
			details.platform = uad.platform;
			details.mobile = uad.mobile;
			if (isarr(uad.brands)) {
				uad.brands.forEach(function (o) {
					if (o.brand != 'Not_A Brand') {
						details.browser = o.brand;
						details.browser_version = o.version;
					}
				});
			}
		}
		return details;
	}
	function after_others_join(result) {
		$.log.w('socket_io join', result);
		should_call = 2;
		on_view_ready();
		if (isarr(result)) {
			result.forEach(function (o) {
				var details_str = '';
				if (o.mobile) details_str += 'Mobile';
				if (o.browser) details_str += ' '+o.browser;
				if (o.browser_version) details_str += ' '+o.browser_version;
				if (o.platform) details_str += ' on '+o.platform;
				call_list.set({
					icon: 'iconperson',
					uid: o.uid,
					color : o.color,
					name: '@'+o.name,
					displayname: o.displayname,
					details: details_str.trim(),
				});
				var keys = call_list.get_item_keys( o.uid );
				keys.color_tag.style.background = pen_colors[o.color] || 'white';
			});
		}
	}
	function after_leaving(result) {
		$.log.w('socket_io leave', result);
		call_list.remove_by_uid( result );
		delete pointer_data[ result ];
		redraw_whiteboard_if_needed();
	}
	function get_connection_string() {
		if (connection_status === 0) return 'Disconnected';
		if (connection_status === 1) return 'Connected';
		if (connection_status === 2) return 'Reconnected'
		if (connection_status === -1) return 'Error';
	}
	function on_view_ready(subtitle) {
		if (view.is_active(module_name)) {
			if (get_global_object().Sidebar) Sidebar.choose(module_name);
			webapp.header([[module_name], subtitle || get_connection_string() || '', 'iconequalizer']);
		}
	}
	function set_call_softkey() {
		softkeys.add({ n: should_call ? 'Hangup' : 'Call',
			k: K.en,
			i: should_call ? 'iconcallend' : 'iconcall',
			c: function (k, e) {
				SocketIO.emit(
					should_call ? 'leave' : 'join',
					get_session_details(),
					should_call ? after_leaving : after_others_join
				);
				if (!should_call) {
					clear_all_callers();
				}
				should_call = !should_call;
				set_call_softkey();
				e && e.preventDefault();
			}
		});
	}
	function resize_whiteboard() {
		$.taxeer('resize_whiteboard', function () {
			var w = headerui.clientWidth-64;
			whiteboardui.width = w;
			whiteboardui.height = w;
			Whiteboard.o.font = '14px sans-serif';
		}, 30);
	}
	function clear_all_callers() {
		call_list.remove_all();
	}
	function pixels_to_percentage(x, y) {
		return [
			parsefloat( x / whiteboardui.width, 3 ),
			parsefloat( y / whiteboardui.height, 3 ),
		];
	}
	function percentage_to_pixels(x, y) {
		return [
			x * whiteboardui.width,
			y * whiteboardui.height,
		];
	}
	var soundAllowed, soundNotAllowed;
	Hooks.set('ready', function (args) {
		if (get_global_object().Sidebar) {
			Sidebar.set({
				uid: module_name,
				title: translate('call_screen'),
				icon: 'iconequalizer',
			});
		}
		Webapp.add_minimal_view( module_name );
		Whiteboard = Canvas(whiteboardui);
		whiteboardui.onpointerdown = function () {
			if (!pointer_held) {
				pointer_held = 1;
				SocketIO.emit( 'pointer_contact', 1 );
			}
		};
		function up_or_cancel() {
			if (pointer_held) {
				pointer_held = 0;
				SocketIO.emit( 'pointer_contact', 0 );
			}
		}
		listener('pointerup', up_or_cancel);
		listener('pointercancel', up_or_cancel);
		whiteboardui.onpointermove =
		(e) => {
			if (connection_status > 0) {
				SocketIO.emit( 'pointer', pixels_to_percentage( e.offsetX, e.offsetY ) );
			}
		};
		resize_whiteboard();
		SocketIO.connect();
		var dom_keys = view.dom_keys( module_name );
		call_list = List( dom_keys.list ).idprefix( module_name ).listitem( 'call_list_item' ).grid(4);
		 
	});
	listener('resize', function () {
		resize_whiteboard();
	});
	Hooks.set('viewready', function (args) {
		if (view.is_active(module_name)) {
			on_view_ready();
			set_call_softkey();
		}
	});
	Hooks.set('restore', function () {
		if (backstack.darajah === 1 && view.is_active(module_name)) {
			on_view_ready();
		}
	});
})();
;(function(){
	'use strict';
	var main_dom_keys, module_name = 'main';
	var pagermain = function () {
		if (Pager) {
			Pager.safaa();
			Pager.jama3(module_name, 'iconhome', xlate('Home'));
			Pager.jama3('profile', 'iconperson', xlate('Profile'));
			Pager.jama3('settings', 'iconsettings', xlate('Settings'));
			Pager.choose(module_name);
		}
	};
	var pagersessions = function () {
		if (Pager) {
			Pager.safaa();
			Pager.jama3(module_name, 'iconhome', xlate('Home'));
			Pager.jama3('signin', 'iconperson', xlate('Sign In'));
			Pager.jama3('signup', 'iconpersonadd', xlate('Sign Up'));
			Pager.jama3('settings', 'iconsettings', xlate('Settings'));
			Pager.choose(module_name);
		}
	};
	var main = {
		update: function () {
			if (sessions.signedin()) {
				pagermain();
			} else {
				pagersessions();
			}
		},
	};
	function restore_view_by_context() {
		if (sessions.signedin()) {
			view.run('rooms');
		} else {
			view.run('intro');
		}
		if (get_global_object().Sidebar) Sidebar.choose(module_name);
		webapp.header([Config.appname, Config.desc, '/e.png']);
	}
	Hooks.set('sessionchange', function (key) {
		if (key) { 
			pagermain();
		} else { 
			pagersessions();
		}
	});
	Hooks.set('ready', function () {
		if (get_global_object().Sidebar) {
			Sidebar.set({
				uid: module_name,
				title: 'Home',
				icon: 'iconhome',
			});
		}
		Webapp.add_home_view(['rooms', 'intro']);
		Webapp.header_sticky(1);
		Webapp.status_bar_padding();
		Webapp.ask_on_exit(1);
		main.update(); 
		main_dom_keys = view.dom_keys(module_name);
	});
	Hooks.set('viewready', function (args) {
		if (view.is_active(module_name)) {
			restore_view_by_context();
		}
	});
	Hooks.set('restore', function () {
		if (backstack.darajah === 0 && view.is_active([module_name, 'rooms'])) {
			restore_view_by_context();
		}
	});
})();

