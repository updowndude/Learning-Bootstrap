/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _classCallCheck2 = __webpack_require__(54);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(55);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _bootstrap = __webpack_require__(59);

	var _bootstrap2 = _interopRequireDefault(_bootstrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// by correy winke
	// 10/17/16
	// a gobal varible
	var Master = {
		intProgressValue: 0,
		// number of clicks
		intClickNumber: 0,
		aryElementSlected: []
	};

	// testing out classes

	var FormTest = function () {
		// build a this class
		function FormTest(element, intProgressValue) {
			(0, _classCallCheck3.default)(this, FormTest);

			// to check to out
			this.currentElement = element;
			// the progress bar value
			this.intProgressValue = intProgressValue;
		}
		// form mover


		(0, _createClass3.default)(FormTest, [{
			key: 'blurMover',
			value: function blurMover() {
				// get the progress bar
				var progress = document.getElementsByClassName('progress-bar')[0];
				// see a checkbox was checked
				var blnFlag = checks(this.currentElement.classList.item(0));
				// in the last of names added the progress bar
				var strFoundNewElement = '';
				// remvoe that item in the list
				var intRemoveAt = 0;
				// copy of gobal list to remove an element
				var aryCopy = [];

				// see if its in the lsit
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = (0, _getIterator3.default)(Master.aryElementSlected), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var val = _step.value;

						intRemoveAt++;
						if (val === this.currentElement.classList.item(0)) {
							strFoundNewElement = val;
							break;
						}
					}

					// chek the input to see the progress bar can incresss
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				if (strFoundNewElement === '' && this.currentElement.value !== '') {
					// incresss the progress bar
					Master.aryElementSlected.push(this.currentElement.classList.item(0));
					this.intProgressValue += 17;
				} else if (strFoundNewElement !== '') {
					// remove part the progress bar
					if (this.currentElement.value === '' || blnFlag === true) {
						aryCopy = Master.aryElementSlected;
						aryCopy = aryCopy.filter(function (value) {
							return value !== strFoundNewElement;
						});
						Master.aryElementSlected = aryCopy;
						this.intProgressValue -= 17;
					}
				}

				progress.style.width = this.intProgressValue + '%';
				return this.intProgressValue;
			}
		}]);
		return FormTest;
	}();

	function checks(strValue) {
		// see there a check in the chekcboxs
		if (strValue === 'checkboxInput' || strValue === 'radioInput') {
			var anyAllChecks = document.getElementsByClassName(strValue);
			for (var lcv = 0; lcv < anyAllChecks.length; lcv++) {
				if (anyAllChecks[lcv].checked === true) {
					// found one a check
					return false;
				}
			}
		}
		return true;
	}

	// base funcaton that handles the input for other functions
	function mover(element) {
		element.value = element.value.trim();

		var doSomeThing = new FormTest(element, Master.intProgressValue);
		Master.intProgressValue = doSomeThing.blurMover();
	}

	// helper function for nav clikcer
	function navClickerHelper(element, sectionArts) {

		var intCurrentSpot = 0;

		for (var lcv = 0; lcv < sectionArts.length; lcv++) {
			intCurrentSpot = lcv + 2;

			if (element.classList.length === 2 && element.classList.item(0) === 'myClass' + lcv) {
				// set the background of page
				document.body.style.backgroundImage = 'url("../../public/images/dkBG' + intCurrentSpot + '.png")';
				// display the correct the cotent
				sectionArts[lcv].style.display = 'block';
			} else if (element.classList.length === 1) {
				// set the background of page
				document.body.style.backgroundImage = 'url("../../public/images/dkBG2.png")';
				// display the correct the cotent
				sectionArts[0].style.display = 'block';
			}
		}
	}

	function imgHover(element) {
		// gets the image eleemnt
		var img = document.querySelector('.media-body img');
		// start to the file path
		var strFilePath = '../../public/images/';

		// see what image is curretly active
		switch (element.classList.item(0)) {
			case "Bootstrap":
				// changes image
				img.src = strFilePath + 'Boostrap_logo.svg';
				img.alt = 'Bootstrap logo';
				break;
			case "React":
				img.src = strFilePath + 'reactLogo.png';
				img.alt = 'React logo';
				break;
			case "Me":
				img.src = strFilePath + 'me.jpg';
				img.alt = 'Me';
				break;
		}
	}

	function btnClikHelper(medBodyImg, strNewClass) {
		// check what image is pressed
		if (medBodyImg.classList.contains('img-rounded') == true) {
			// remove that class
			medBodyImg.classList.remove('img-rounded');
			// addes the new one
			medBodyImg.classList.add(strNewClass);
		} else if (medBodyImg.classList.contains('img-circle') == true) {
			medBodyImg.classList.remove('img-circle');
			medBodyImg.classList.add(strNewClass);
		} else {
			medBodyImg.classList.remove('img-thumbnail');
			medBodyImg.classList.add(strNewClass);
		}
	}

	function btnClik(element) {
		// get the iamge
		var medBodyImg = document.querySelector('.media-body img');

		// remove the active
		document.querySelector('.panel-footer .active').classList.remove('active');
		// adds to the curretl element
		element.classList.add('active');

		// see button was press
		switch (element.innerHTML) {
			case 'Rounded':
				// changes the image
				btnClikHelper(medBodyImg, 'img-rounded');
				break;
			case 'Circle':
				btnClikHelper(medBodyImg, 'img-circle');
				break;
			case 'Thumbnail':
				btnClikHelper(medBodyImg, 'img-thumbnail');
				break;
		}
	}

	// funcation taggered when a tab is clicked
	function navClicker(element) {
		// gets the badge
		var badNum = document.querySelector('.badge');
		// gets the active tab
		var tabActive = document.querySelector('.active');
		// get all of the article that make up the body after nav
		var sectionArts = document.querySelectorAll('section > article');
		// get the figure for the animation
		var myTarget = document.getElementsByClassName('target');

		// add one to counter of clicks
		Master.intClickNumber++;
		// change that number in HTML
		badNum.innerHTML = '' + Master.intClickNumber;
		// remove the active tab
		tabActive.classList.remove('active');
		// add the ative class to the new element
		element.classList.add('active');

		// walks thought articles after nav
		for (var lcv = 0; lcv < sectionArts.length; lcv++) {
			// dosn't show them
			sectionArts[lcv].style.display = 'none';
		}

		navClickerHelper(element, sectionArts);

		// adds the animation class
		myTarget[0].classList.add('myAnim');
		// after the animation is finished playing
		setTimeout(function () {
			// remove that class
			myTarget[0].classList.remove('myAnim');
			// number of milesec that the animation takes
		}, 700);
	}

	// set the funcations gobal
	window.navClicker = navClicker;
	window.mover = mover;
	window.imgHover = imgHover;
	window.btnClik = btnClik;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(49);
	module.exports = __webpack_require__(51);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	var global        = __webpack_require__(15)
	  , hide          = __webpack_require__(19)
	  , Iterators     = __webpack_require__(7)
	  , TO_STRING_TAG = __webpack_require__(46)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(5)
	  , step             = __webpack_require__(6)
	  , Iterators        = __webpack_require__(7)
	  , toIObject        = __webpack_require__(8);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(12)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(9)
	  , defined = __webpack_require__(11);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(10);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(13)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(29)
	  , hide           = __webpack_require__(19)
	  , has            = __webpack_require__(30)
	  , Iterators      = __webpack_require__(7)
	  , $iterCreate    = __webpack_require__(31)
	  , setToStringTag = __webpack_require__(45)
	  , getPrototypeOf = __webpack_require__(47)
	  , ITERATOR       = __webpack_require__(46)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(15)
	  , core      = __webpack_require__(16)
	  , ctx       = __webpack_require__(17)
	  , hide      = __webpack_require__(19)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 15 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(18);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(20)
	  , createDesc = __webpack_require__(28);
	module.exports = __webpack_require__(24) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(21)
	  , IE8_DOM_DEFINE = __webpack_require__(23)
	  , toPrimitive    = __webpack_require__(27)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(24) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(24) && !__webpack_require__(25)(function(){
	  return Object.defineProperty(__webpack_require__(26)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(25)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22)
	  , document = __webpack_require__(15).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(22);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19);

/***/ },
/* 30 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(32)
	  , descriptor     = __webpack_require__(28)
	  , setToStringTag = __webpack_require__(45)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(19)(IteratorPrototype, __webpack_require__(46)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(21)
	  , dPs         = __webpack_require__(33)
	  , enumBugKeys = __webpack_require__(43)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(26)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(44).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(20)
	  , anObject = __webpack_require__(21)
	  , getKeys  = __webpack_require__(34);

	module.exports = __webpack_require__(24) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(35)
	  , enumBugKeys = __webpack_require__(43);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(30)
	  , toIObject    = __webpack_require__(8)
	  , arrayIndexOf = __webpack_require__(36)(false)
	  , IE_PROTO     = __webpack_require__(40)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(8)
	  , toLength  = __webpack_require__(37)
	  , toIndex   = __webpack_require__(39);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(41)('keys')
	  , uid    = __webpack_require__(42);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(15)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15).document && document.documentElement;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(20).f
	  , has = __webpack_require__(30)
	  , TAG = __webpack_require__(46)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(41)('wks')
	  , uid        = __webpack_require__(42)
	  , Symbol     = __webpack_require__(15).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(30)
	  , toObject    = __webpack_require__(48)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(11);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(50)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(12)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(11);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(21)
	  , get      = __webpack_require__(52);
	module.exports = __webpack_require__(16).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(53)
	  , ITERATOR  = __webpack_require__(46)('iterator')
	  , Iterators = __webpack_require__(7);
	module.exports = __webpack_require__(16).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(10)
	  , TAG = __webpack_require__(46)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(56);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(58);
	var $Object = __webpack_require__(16).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(24), 'Object', {defineProperty: __webpack_require__(20).f});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// Native Javascript for Bootstrap 3 | Bulk require
	// by dnp_theme
	// Require/npm/Bower by Ingwie Phoenix

	/**
	    @file This file bulk-requires all the native components and
	          gives it back as the exports.

	          Due to the NodeJS-y environment, each entry is a factory
	          function. Once called, it expects a global `window` and
	          `document` object to be present.

	          I.e.:
	          ```javascript
	          global.window = require("web-like-environment");
	          global.document = window.document;
	          // Now, window and document are available.
	          var modal = require("bootstrap.native").modal();
	          ```
	*/

	// Collection of all the bootstrap.native modules.
	var bsn = {
	    affix:      __webpack_require__(60),
	    alert:      __webpack_require__(61),
	    button:     __webpack_require__(62),
	    carousel:   __webpack_require__(63),
	    collapse:   __webpack_require__(64),
	    dropdown:   __webpack_require__(65),
	    modal:      __webpack_require__(66),
	    popover:    __webpack_require__(67),
	    scrollspy:  __webpack_require__(68),
	    tab:        __webpack_require__(69),
	    tooltip:    __webpack_require__(70)
	};

	/**
	 * Turn the first character into an uppercase character.
	 * 
	 * @param {String} str      Input string
	 * @returns {String}        String with uppercase starting letter.
	 */
	function ucfirst(str) {
	    var cap = str.charAt(0).toUpperCase();
	    return cap+str.substr(1);
	}

	/**
	 * This self-executing function takes all the key names from the Bootstrap Native modules
	 * and assigns the original and uppercased key.
	 * 
	 * This allows scripts used to the Uppercase module names to function with CommonJS.
	 * 
	 * @fixes #33
	 * @returns Object
	 */
	module.exports = (function BSNExporter(){
	    var _exports = {};
	    for(var component in bsn) {
	        var key1 = component;
	        var key2 = ucfirst(component);
	        _exports[key1] = _exports[key2] = bsn[component];
	    }
	    return _exports;
	})();


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// Native Javascript for Bootstrap 3 | Affix
	// by dnp_theme

	(function(factory){

	  // CommonJS/RequireJS and "native" compatibility
	  if(true) {
	    // A commonJS/RequireJS environment
	    if(typeof window != "undefined") {
	      // Window and document exist, so return the factory's return value.
	      module.exports = factory();
	    } else {
	      // Let the user give the factory a Window and Document.
	      module.exports = factory;
	    }
	  } else {
	    // Assume a traditional browser.
	    window.Affix = factory();
	  }

	})(function(){

	  var isIE = (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) ? parseFloat( RegExp.$1 ) : false;

	  //AFFIX DEFINITION
	  var Affix = function(element,options) {
	    options = options || {};
	    
	    this.element = typeof element === 'object' ? element : document.querySelector(element);
	    this.options = {};
	    this.options.target = options.target ? ((typeof(options.target) === 'object') ? options.target : document.querySelector(options.target)) : null; // target is an object
	    this.options.offsetTop = options.offsetTop && options.offsetTop ? ( options.offsetTop === 'function' ? options.offsetTop() : parseInt(options.offsetTop,0) ) : 0; // offset option is an integer number or function to determine that number
	    this.options.offsetBottom = options.offsetBottom && options.offsetBottom ? ( options.offsetBottom === 'function' ? options.offsetBottom() : parseInt(options.offsetBottom,0) ) : null;

	    if (!this.element && !(this.options.target || this.options.offsetTop || this.options.offsetBottom ) ) { return; }

	    var self = this;

	    this.processOffsetTop = function () {
	      if ( this.options.target !== null ) {
	        return this.options.target.getBoundingClientRect().top + this.scrollOffset();
	      } else if ( this.options.offsetTop !== null ) {
	        return this.options.offsetTop
	      }
	    }
	    this.processOffsetBottom = function () {
	      if ( this.options.offsetBottom !== null ) {
	        var maxScroll = this.getMaxScroll();
	        return maxScroll - this.element.offsetHeight - this.options.offsetBottom
	      }
	    }
	    this.checkPosition = function () {
	      this.getPinOffsetTop = this.processOffsetTop
	      this.getPinOffsetBottom = this.processOffsetBottom
	    }
	    this.scrollOffset = function () {
	      return window.pageYOffset || document.documentElement.scrollTop
	    }
	    this.pinTop = function () {
	      if ( !/\baffix/.test(this.element.className) ) {
	        this.element.className += ' affix';
	        this.affixed = true
	      }
	    }
	    this.unPinTop = function () {
	      if ( /\baffix/.test(this.element.className) ) {
	        this.element.className = this.element.className.replace(' affix','');
	        this.affixed = false
	      }
	    }
	    this.pinBottom = function () {
	      if ( !/\baffix-bottom/.test(this.element.className) ) {
	        this.element.className += ' affix-bottom';
	        this.affixedBottom = true
	      }
	    }
	    this.unPinBottom = function () {
	      if ( /\baffix-bottom/.test(this.element.className) ) { 
	        this.element.className = this.element.className.replace(' affix-bottom','');
	        this.affixedBottom = false
	      }
	    }
	    this.updatePin = function () {
	      if (this.affixed === false && (parseInt(this.processOffsetTop(),0) - parseInt(this.scrollOffset(),0) < 0)) {
	        this.pinTop();
	      } else if (this.affixed === true && (parseInt(this.scrollOffset(),0) <= parseInt(this.getPinOffsetTop(),0) )) {
	        this.unPinTop()
	      }

	      if (this.affixedBottom === false && (parseInt(this.processOffsetBottom(),0) - parseInt(this.scrollOffset(),0) < 0)) {
	        this.pinBottom();
	      } else if (this.affixedBottom === true && (parseInt(this.scrollOffset(),0) <= parseInt(this.getPinOffsetBottom(),0) )) {
	        this.unPinBottom()
	      }
	    }
	    this.updateAffix = function () { // Unpin and check position again
	      this.unPinTop();
	      this.unPinBottom();
	      this.checkPosition()

	      this.updatePin() // If any case update values again
	    }
	    this.getMaxScroll = function(){
	      return Math.max( document.body.scrollHeight, document.body.offsetHeight, 
	        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight )
	    }
	    this.scrollEvent = function(){
	      window.addEventListener('scroll', function() {
	        self.updatePin()
	      }, false);

	    }
	    this.resizeEvent = function(){
	      var dl = (isIE && isIE < 10) ? 500 : 50;
	      window.addEventListener('resize', function () {
	        setTimeout(function(){
	          self.updateAffix()
	        },dl);
	      }, false);
	    }
	    // init
	    this.affixed = false;
	    this.affixedBottom = false;
	    this.getPinOffsetTop = 0;
	    this.getPinOffsetBottom = null;

	    //actions
	    this.checkPosition();
	    this.updateAffix();
	    this.scrollEvent();
	    this.resizeEvent()    
	  };

	  // AFFIX DATA API
	  // =================
	  var Affixes = document.querySelectorAll('[data-spy="affix"]'), i = 0, afl = Affixes.length;
	  for (i;i<afl;i++) {
	    var item = Affixes[i], options = {};
	      options.offsetTop     = item.getAttribute('data-offset-top');
	      options.offsetBottom  = item.getAttribute('data-offset-bottom');
	      options.target        = item.getAttribute('data-target');

	    if ( item && (options.offsetTop !== null || options.offsetBottom !== null || options.target !== null) ) { //don't do anything unless we have something valid to pin
	      new Affix(item, options);
	    }
	  }

	  return Affix;

	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// Native Javascript for Bootstrap 3 | Alert
	// by dnp_theme

	(function(factory){

	  // CommonJS/RequireJS and "native" compatibility
	  if(true) {
	    // A commonJS/RequireJS environment
	    if(typeof window != "undefined") {
	      // Window and document exist, so return the factory's return value.
	      module.exports = factory();
	    } else {
	      // Let the user give the factory a Window and Document.
	      module.exports = factory;
	    }
	  } else {
	    // Assume a traditional browser.
	    window.Alert = factory();
	  }

	})(function(root){

	  // ALERT DEFINITION
	  // ===================
	  var Alert = function( element ) {
	    this.btn = typeof element === 'object' ? element : document.querySelector(element);
	    this.alert = null;
	    this.duration = 150; // default alert transition duration

	    var self = this;

	    this.close = function(e) {
	      var target = e.target;
	      self.btn = target.getAttribute('data-dismiss') === 'alert' && target.className === 'close' ? target : target.parentNode;
	      self.alert = self.btn.parentNode;

	      if ( self.alert !== null && self.btn.getAttribute('data-dismiss') === 'alert' && /\bin/.test(self.alert.className) ) {
	        self.alert.className = self.alert.className.replace(' in','');
	        setTimeout(function() {
	          self.alert && self.alert.parentNode.removeChild(self.alert);
	        }, self.duration);
	      }
	    }
	    document.addEventListener('click', this.close, false); //delegate to all alerts, including those inserted later into the DOM
	  };
	  // ALERT DATA API
	  // =================
	  var Alerts = document.querySelectorAll('[data-dismiss="alert"]'), i = 0, all = Alerts.length;
	  for (i;i<all;i++) {
	    new Alert(Alerts[i]);
	  }

	  return Alert;

	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// Native Javascript for Bootstrap 3 | Button
	// by dnp_theme

	(function(factory){

	  // CommonJS/RequireJS and "native" compatibility
	  if(true) {
	    // A commonJS/RequireJS environment
	    if(typeof window != "undefined") {
	      // Window and document exist, so return the factory's return value.
	      module.exports = factory();
	    } else {
	      // Let the user give the factory a Window and Document.
	      module.exports = factory;
	    }
	  } else {
	    // Assume a traditional browser.
	    window.Button = factory();
	  }

	})(function(){

	  var addClass = function(el,c) { // where modern browsers fail, use classList  
	      if (el.classList) { el.classList.add(c); } else { el.className += ' '+c; el.offsetWidth; }
	    },
	    removeClass = function(el,c) {
	      if (el.classList) { el.classList.remove(c); } else { el.className = el.className.replace(c,'').replace(/^\s+|\s+$/g,''); }
	    };

	  // BUTTON DEFINITION
	  // ===================
	  var Button = function( element, option ) {
	    this.btn = typeof element === 'object' ? element : document.querySelector(element);
	    this.option = typeof option === 'string' ? option : null;

	    var self = this,
	      changeEvent = (('CustomEvent' in window) && window.dispatchEvent) 
	        ? new CustomEvent('bs.button.change') : null; // The custom event that will be triggered on demand

	    // assign event to a trigger function
	    function triggerChange(t) { if (changeEvent) { t.dispatchEvent(changeEvent); } }

	    this.setState = function() {
	      if ( this.option === 'loading' ) {
	        addClass(this.btn,'disabled');          
	        this.btn.setAttribute('disabled','disabled');
	      }
	      this.btn.innerHTML = this.state;
	    }

	    this.reset = function() {
	      if ( /\bdisabled/.test(this.btn.className) || this.btn.getAttribute('disabled') === 'disabled' ) {
	        removeClass(this.btn,'disabled');  
	        this.btn.removeAttribute('disabled');
	      }
	      this.btn.innerHTML = this.btn.getAttribute('data-original-text');
	    }

	    this.toggle = function(e) {
	      var parent = e.target.parentNode,
	        label = e.target.tagName === 'LABEL' ? e.target : parent.tagName === 'LABEL' ? parent : null; // the .btn label
	      
	      if ( !label ) return; //react if a label or its immediate child is clicked
	      
	      var target = this, //e.currentTarget || e.srcElement; // the button group, the target of the handler function
	        labels = target.querySelectorAll('.btn'), ll = labels.length, i = 0, // all the button group buttons
	        input = label.getElementsByTagName('INPUT')[0];
	        
	      if ( !input ) return; //return if no input found

	      //manage the dom manipulation
	      if ( input.type === 'checkbox' ) { //checkboxes          
	        if ( !input.checked ) {
	          addClass(label,'active');
	          input.getAttribute('checked');          
	          input.setAttribute('checked','checked');
	          input.checked = true;
	        } else {
	          removeClass(label,'active');
	          input.getAttribute('checked');            
	          input.removeAttribute('checked');
	          input.checked = false;
	        }
	        triggerChange(input); //trigger the change for the input
	        triggerChange(self.btn); //trigger the change for the btn-group
	      }

	      if ( input.type === 'radio' ) { // radio buttons
	        if ( !input.checked ) { // don't trigger if already active
	          addClass(label,'active');
	          input.setAttribute('checked','checked');
	          input.checked = true;
	          triggerChange(self.btn);     
	          triggerChange(input); //trigger the change
	          
	          for (i;i<ll;i++) {
	            var l = labels[i];
	            if ( l !== label && /\bactive/.test(l.className) )  {
	              var inp = l.getElementsByTagName('INPUT')[0];
	              removeClass(l,'active');
	              inp.removeAttribute('checked');
	              inp.checked = false;
	              triggerChange(inp); // trigger the change                
	            }        
	          }
	        }                
	      }
	    }
	    // init
	    if ( /\bbtn/.test(this.btn.className) ) {
	      if ( this.option && this.option !== 'reset' ) {

	        this.state = this.btn.getAttribute('data-'+this.option+'-text') || null;

	        !this.btn.getAttribute('data-original-text') && this.btn.setAttribute('data-original-text',self.btn.innerHTML.replace(/^\s+|\s+$/g, ''));
	        this.setState();

	      } else if ( this.option === 'reset' ) {
	        this.reset();
	      }
	    }
	    if ( /\bbtn-group/.test(this.btn.className) ) {
	      this.btn.addEventListener('click', this.toggle, false);
	    }
	  };
	  // BUTTON DATA API
	  // =================
	  var Buttons = document.querySelectorAll('[data-toggle=button]'), i = 0, btl = Buttons.length;
	  for (i;i<btl;i++) {
	    new Button(Buttons[i]);
	  }
	  
	  var ButtonGroups = document.querySelectorAll('[data-toggle=buttons]'), j = 0, bgl = ButtonGroups.length;
	  for (j;j<bgl;j++) {
	    new Button(ButtonGroups[j]);
	  }

	  return Button;

	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// Native Javascript for Bootstrap 3 | Carousel
	// by dnp_theme

	(function(factory){

	  // CommonJS/RequireJS and "native" compatibility
	  if(true) {
	    // A commonJS/RequireJS environment
	    if(typeof window != "undefined") {
	      // Window and document exist, so return the factory's return value.
	      module.exports = factory();
	    } else {
	      // Let the user give the factory a Window and Document.
	      module.exports = factory;
	    }
	  } else {
	    // Assume a traditional browser.
	    window.Carousel = factory();
	  }

	})(function(){

	  var isIE = (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) ? parseFloat( RegExp.$1 ) : false;

	  // CAROUSEL DEFINITION
	  // ===================
	  var Carousel = function( element, options ) {
	    options = options || {};

	    this.carousel = (typeof element === 'object') ? element : document.querySelector( element );
	    this.options = {}; //replace extend
	    this.options.keyboard = options.keyboard === 'true' ? true : false;
	    this.options.pause = options.pause ? options.pause : 'hover'; // false / hover

	    // bootstrap carousel default transition duration / option
	    this.duration = 600;
	    this.options.duration = (isIE && isIE < 10) ? 0 : (options.duration || this.duration);

	    var items = this.carousel.querySelectorAll('.item'), il=items.length; //this is an object
	    this.controls = this.carousel.querySelectorAll('.carousel-control');
	    this.prev = this.controls[0];
	    this.next = this.controls[1];
	    this.slides = []; for (var i = 0; i < il; i++) { this.slides.push(items[i]); } // this is an array
	    this.indicator = this.carousel.querySelector( ".carousel-indicators" ); // object
	    this.indicators = this.carousel.querySelectorAll( ".carousel-indicators li" ); // object
	    this.total    = this.slides.length;
	    this.timer    = null;
	    this.direction  = null;
	    this.index    = 0;

	    var self = this;

	    if (options.interval === 'false' ) {
	      this.options.interval = false;
	    } else {
	      this.options.interval = parseInt(options.interval) || 5000;
	    }

	    this.cycle = function(e) {

	      this.direction = 'left';
	      this.timer = setInterval(function() {
	        self.index++;
	        if( self.index == self.slides.length ) {
	          self.index = 0;
	        }
	        self._slideTo( self.index, e );

	      }, this.options.interval);
	    }
	    this.pause = function() {
	      var pauseHandler = function () {
	        if ( self.options.interval !==false && !/\bpaused/.test(self.carousel.className) ) {
	          self.carousel.className += ' paused';
	          clearInterval( self.timer );
	          self.timer = null;
	        }
	      };
	      var resumeHandler = function() {
	        if ( self.options.interval !==false && /\bpaused/.test(self.carousel.className) ) {
	          self.cycle();
	          self.carousel.className = self.carousel.className.replace(/\bpaused/,'');
	        }
	      };
	      self.carousel.addEventListener( "mouseenter", pauseHandler, false);
	      self.carousel.addEventListener( "mouseleave", resumeHandler, false);
	      self.carousel.addEventListener( "touchstart", pauseHandler, false);
	      self.carousel.addEventListener( "touchend", resumeHandler, false);
	    }
	    this._slideTo = function( next, e ) {
	      var active = this._getActiveIndex(); // the current active
	      //determine type
	      var direction = this.direction;
	      var dr = direction === 'left' ? 'next' : 'prev';
	      var slid = null, slide = null;

	      //register events
	      if (('CustomEvent' in window) && window.dispatchEvent) {
	        slid =  new CustomEvent("slid.bs.carousel");
	        slide = new CustomEvent("slide.bs.carousel");
	      }
	      if (slide) { this.carousel.dispatchEvent(slide); } //here we go with the slide

	      this._removeEventListeners();
	      clearInterval(this.timer);
	      this.timer = null;
	      this._curentPage( this.indicators[next] );

	      if ( /\bslide/.test(this.carousel.className) && !(isIE && isIE < 10) ) {
	        this.slides[next].className += (' '+dr);
	        this.slides[next].offsetWidth;
	        this.slides[next].className += (' '+direction);
	        this.slides[active].className += (' '+direction);

	        setTimeout(function() { //we're gonna fake waiting for the animation to finish, cleaner and better
	          self._addEventListeners();

	          self.slides[next].className += ' active';
	          self.slides[active].className = self.slides[active].className.replace(' active','');

	          self.slides[next].className = self.slides[next].className.replace(' '+dr,'');
	          self.slides[next].className = self.slides[next].className.replace(' '+direction,'');
	          self.slides[active].className = self.slides[active].className.replace(' '+direction,'');

	          if ( self.options.interval !== false && !/\bpaused/.test(self.carousel.className) ){
	            clearInterval(self.timer); self.cycle();
	          }
	          if (slid) { self.carousel.dispatchEvent(slid); } //here we go with the slid
	        }, this.options.duration + 100 );
	      } else {
	        this.slides[next].className += ' active';
	        this.slides[next].offsetWidth;
	        this.slides[active].className = this.slides[active].className.replace(' active','');
	        setTimeout(function() {
	          self._addEventListeners();
	          if ( self.options.interval !== false && !/\bpaused/.test(self.carousel.className) ){
	            clearInterval(self.timer); self.cycle();
	          }
	          if (slid) { self.carousel.dispatchEvent(slid); } //here we go with the slid
	        }, this.options.duration + 100 );
	      }
	    }
	    this._addEventListeners = function () {
	      this.next && this.next.addEventListener( "click", this.controlsHandler, false);
	      this.prev && this.prev.addEventListener( "click", this.controlsHandler, false);

	      this.indicator && this.indicator.addEventListener( "click", this.indicatorHandler, false);

	      this.options.keyboard === true && window.addEventListener('keydown', this.keyHandler, false);
	    }
	    this._removeEventListeners = function () { // prevent mouse bubbles while animating
	      this.next && this.next.removeEventListener( "click", this.controlsHandler, false);
	      this.prev && this.prev.removeEventListener( "click", this.controlsHandler, false);

	      this.indicator && this.indicator.removeEventListener( "click", this.indicatorHandler, false);

	      this.options.keyboard === true && window.removeEventListener('keydown', this.keyHandler, false);
	    }
	    this._getActiveIndex = function () {
	      return this.slides.indexOf(this.carousel.querySelector('.item.active'));
	    }
	    this._curentPage = function( p ) {
	      for( var i = 0; i < this.indicators.length; ++i ) {
	        var a = this.indicators[i];
	        a.className = "";
	      }
	      if (p) p.className = "active";
	    }
	    this.indicatorHandler = function(e) {
	      e.preventDefault();
	      var target = e.target;
	      var active = self._getActiveIndex(); // the current active

	      if ( target && !/\bactive/.test(target.className) && target.getAttribute('data-slide-to') ) {
	        var n = parseInt( target.getAttribute('data-slide-to'), 10 );

	        self.index = n;

	        if( self.index == 0 ) {
	          self.index = 0;
	        } else if ( self.index == self.total - 1 ) {
	          self.index = self.total - 1;
	        }

	          //determine direction first
	        if  ( (active < self.index ) || (active === self.total - 1 && self.index === 0 ) ) {
	          self.direction = 'left'; // next
	        } else if  ( (active > self.index) || (active === 0 && self.index === self.total -1 ) ) {
	          self.direction = 'right'; // prev
	        }
	      } else { return false; }

	      self._slideTo( self.index, e ); //Do the slide
	    }
	    this.controlsHandler = function (e) {
	      var target = e.currentTarget || e.srcElement;

	      if ( target === self.next ) {
	        self.index++;
	        self.direction = 'left'; //set direction first

	        if( self.index == self.total - 1 ) {
	          self.index = self.total - 1;
	        } else if ( self.index == self.total ){
	          self.index = 0;
	        }
	      } else if ( target === self.prev ) {
	        self.index--;
	        self.direction = 'right'; //set direction first

	        if( self.index == 0 ) {
	          self.index = 0;
	        } else if ( self.index < 0 ){
	          self.index = self.total - 1
	        }
	      }

	      self._slideTo( self.index, e ); //Do the slide
	    }
	    this.keyHandler = function (e) {
	      switch (e.which) {
	        case 39:
	          e.preventDefault();
	          self.index++;
	          self.direction = 'left';
	          if( self.index == self.total - 1 ) { self.index = self.total - 1; } else
	          if ( self.index == self.total ){ self.index = 0 }
	          break;
	        case 37:
	          e.preventDefault();
	          self.index--;
	          self.direction = 'right';
	          if( self.index == 0 ) { self.index = 0; } else
	          if ( self.index < 0 ){ self.index = self.total - 1 }
	          break;
	        default: return;
	      }
	      self._slideTo( self.index, e ); //Do the slide
	    }

	    // init
	    if ( this.options.interval !== false ){
	      this.cycle();
	    }

	    if ( this.options && this.options.pause === 'hover' && this.options.interval !== false ) {
	      this.pause();
	    }
	    this._addEventListeners();
	    this.next && this.next.addEventListener( "click", function(e){e.preventDefault()}, false);
	    this.prev && this.prev.addEventListener( "click", function(e){e.preventDefault()}, false);
	  };

	  // CAROUSEL DATA API
	  // =================
	  var Carousels = document.querySelectorAll('[data-ride="carousel"]'), i = 0, crl = Carousels.length;
	  for (i;i<crl;i++) {
	    var c = Carousels[i], options = {};
	    options.interval = c.getAttribute('data-interval') && c.getAttribute('data-interval');
	    options.pause = c.getAttribute('data-pause') && c.getAttribute('data-pause') || 'hover';
	    options.keyboard = c.getAttribute('data-keyboard') && c.getAttribute('data-keyboard') || false;
	    options.duration = c.getAttribute('data-duration') && c.getAttribute('data-duration') || false;
	    new Carousel(c, options)
	  }

	  return Carousel;

	});


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// Native Javascript for Bootstrap 3 | Collapse
	// by dnp_theme

	(function(factory){

	  // CommonJS/RequireJS and "native" compatibility
	  if(true) {
	    // A commonJS/RequireJS environment
	    if(typeof window != "undefined") {
	      // Window and document exist, so return the factory's return value.
	      module.exports = factory();
	    } else {
	      // Let the user give the factory a Window and Document.
	      module.exports = factory;
	    }
	  } else {
	    // Assume a traditional browser.
	    window.Collapse = factory();
	  }

	})(function(){

	  var isIE = (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) ? parseFloat( RegExp.$1 ) : false,
	    getClosest = function (el, s) { //el is the element and s the selector of the closest item to find
	      // source http://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
	      var f = s.charAt(0);
	      for ( ; el && el !== document; el = el.parentNode ) {// Get closest match
	        if ( f === '.' ) {// If selector is a class
	          if ( document.querySelector(s) !== undefined ) { return el; }
	        }
	        if ( f === '#' ) { // If selector is an ID
	          if ( el.id === s.substr(1) ) { return el; }
	        }
	      }
	      return false;
	    },
	    addClass = function(el,c) { // where modern browsers fail, use classList  
	      if (el.classList) { el.classList.add(c); } else { el.className += ' '+c; el.offsetWidth; }
	    },
	    removeClass = function(el,c) {
	      if (el.classList) { el.classList.remove(c); } else { el.className = el.className.replace(c,'').replace(/^\s+|\s+$/g,''); }
	    };

	  // COLLAPSE DEFINITION
	  // ===================
	  var Collapse = function( element, options ) {
	    options = options || {};
	    
	    this.btn = typeof element === 'object' ? element : document.querySelector(element);
	    this.accordion = null;
	    this.collapse = null;
	    this.duration = 300; // default collapse transition duration
	    this.options = {};
	    this.options.duration = (isIE && isIE < 10) ? 0 : (options.duration || this.duration);
	    var self = this;
	    var getOuterHeight = function (el) {
	      var s = el && (el.currentStyle || window.getComputedStyle(el)), // the getComputedStyle polyfill would do this for us, but we want to make sure it does
	        btp = /px/.test(s.borderTopWidth) ? Math.round(s.borderTopWidth.replace('px','')) : 0,
	        mtp = /px/.test(s.marginTop)  ? Math.round(s.marginTop.replace('px',''))    : 0,
	        mbp = /px/.test(s.marginBottom)  ? Math.round(s.marginBottom.replace('px',''))  : 0,
	        mte = /em/.test(s.marginTop)  ? Math.round(s.marginTop.replace('em','')    * parseInt(s.fontSize)) : 0,
	        mbe = /em/.test(s.marginBottom)  ? Math.round(s.marginBottom.replace('em','')  * parseInt(s.fontSize)) : 0;
	      return el.clientHeight + parseInt( btp ) + parseInt( mtp ) + parseInt( mbp ) + parseInt( mte ) + parseInt( mbe ); //we need an accurate margin value
	    };

	    this.toggle = function(e) {
	      e.preventDefault();

	      if (!/\bin/.test(self.collapse.className)) {
	        self.open();
	      } else {
	        self.close();
	      }
	    },
	    this.close = function() {
	      this._close(this.collapse);
	      addClass(this.btn,'collapsed');
	    },
	    this.open = function() {
	      this._open(this.collapse);
	      removeClass(this.btn,'collapsed');

	      if ( this.accordion !== null ) {
	        var active = this.accordion.querySelectorAll('.collapse.in'), al = active.length, i = 0;
	        for (i;i<al;i++) {
	          if ( active[i] !== this.collapse) this._close(active[i]);
	        }
	      }
	    }
	    this._open = function(c) {
	      this.removeEvent();
	      addClass(c,'in');
	      c.setAttribute('aria-expanded','true');
	      addClass(c,'collapsing');
	      setTimeout(function() {
	        c.style.height = self.getMaxHeight(c) + 'px'
	        c.style.overflowY = 'hidden';
	      }, 0);  
	      setTimeout(function() {
	        c.style.height = ''; 
	        c.style.overflowY = '';
	        removeClass(c,'collapsing');
	        self.addEvent();
	      }, this.options.duration);
	    }
	    this._close = function(c) {
	      this.removeEvent();
	      c.setAttribute('aria-expanded','false');
	      c.style.height = this.getMaxHeight(c) + 'px'
	      setTimeout(function() {
	        c.style.height = '0px';    
	        c.style.overflowY = 'hidden';
	        addClass(c,'collapsing');
	      }, 0);
	      
	      setTimeout(function() {
	        removeClass(c,'collapsing');
	        removeClass(c,'in'); 
	        c.style.overflowY = '';
	        c.style.height = '';          
	        self.addEvent();
	      }, this.options.duration);
	    }
	    this.getMaxHeight = function(l) { // get collapse trueHeight and border
	      var h = 0;
	      for (var k = 0, ll = l.children.length; k < ll; k++) {
	        h += getOuterHeight(l.children[k]);
	      }
	      return h;
	    }
	    this.removeEvent = function() {
	      this.btn.removeEventListener('click', this.toggle, false);
	    }
	    this.addEvent = function() {
	      this.btn.addEventListener('click', this.toggle, false);
	    }
	    this.getTarget = function() {
	      var t = this.btn,
	        h = t.href && t.getAttribute('href').replace('#',''),
	        d = t.getAttribute('data-target') && ( t.getAttribute('data-target') ),
	        id = h || ( d && /#/.test(d)) && d.replace('#',''),
	        cl = (d && d.charAt(0) === '.') && d, //the navbar collapse trigger targets a class
	        c = id && document.getElementById(id) || cl && document.querySelector(cl);
	      return c;
	    }

	    // init
	    this.addEvent();
	    this.collapse = this.getTarget();
	    this.accordion = this.btn.getAttribute('data-parent') 
	      && getClosest(this.btn, this.btn.getAttribute('data-parent'));
	  };

	  // COLLAPSE DATA API
	  // =================
	  var Collapses = document.querySelectorAll('[data-toggle="collapse"]'), i = 0, cll = Collapses.length;
	  for (i;i<cll;i++) {
	    var item = Collapses[i], options = {};
	    options.duration = item.getAttribute('data-duration');
	    new Collapse(item,options);
	  }

	  return Collapse;

	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// Native Javascript for Bootstrap 3 | Dropdown
	// by dnp_theme

	(function(factory){

	  // CommonJS/RequireJS and "native" compatibility
	  if(true) {
	    // A commonJS/RequireJS environment
	    if(typeof window != "undefined") {
	      // Window and document exist, so return the factory's return value.
	      module.exports = factory();
	    } else {
	      // Let the user give the factory a Window and Document.
	      module.exports = factory;
	    }
	  } else {
	    // Assume a traditional browser.
	    window.Dropdown = factory();
	  }

	})(function(root){

	  // DROPDOWN DEFINITION
	  // ===================
	  var Dropdown = function( element) {
	    this.menu = typeof element === 'object' ? element : document.querySelector(element);
	    var self = this;
	    
	    this.handle = function(e) { // fix some Safari bug with <button>
	      var target = e.target || e.currentTarget,
	          children = [], c = self.menu.parentNode.getElementsByTagName('*');
	      /\#$/g.test(target.href) && e.preventDefault();

	      for ( var i=0, l = c.length||0; i<l; i++) { l && children.push(c[i]); }
	      if ( target === self.menu || target.parentNode === self.menu || target.parentNode.parentNode === self.menu ) { 
	        self.toggle(e); 
	      }  else if ( children && children.indexOf(target) > -1  ) {
	        return;
	      } else { self.close(); }
	    }
	    this.toggle = function(e) {
	      if (/\bopen/.test(this.menu.parentNode.className)) {
	        this.close();
	        document.removeEventListener('keydown', this.key, false);
	      } else {
	        this.menu.parentNode.className += ' open';
	        this.menu.setAttribute('aria-expanded',true);
	        document.addEventListener('keydown', this.key, false);
	      }
	    }
	    this.key = function(e) {
	      if (e.which == 27) {self.close();}
	    }
	    this.close = function() {
	      self.menu.parentNode.className = self.menu.parentNode.className.replace(/\bopen/,'');
	      self.menu.setAttribute('aria-expanded',false);
	    }
	    this.menu.setAttribute('tabindex', '0'); // Fix onblur on Chrome | Safari
	    document.addEventListener('click', this.handle, false);
	  }

	  // DROPDOWN DATA API
	  // =================
	  var Dropdowns = document.querySelectorAll('[data-toggle=dropdown]'), i = 0, ddl = Dropdowns.length;
	  for (i;i<ddl;i++) {
	    new Dropdown(Dropdowns[i]);
	  }

	  return Dropdown;

	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// Native Javascript for Bootstrap 3 | Modal
	// by dnp_theme

	(function(factory){

	  // CommonJS/RequireJS and "native" compatibility
	  if(true) {
	    // A commonJS/RequireJS environment
	    if(typeof window != "undefined") {
	      // Window and document exist, so return the factory's return value.
	      module.exports = factory();
	    } else {
	      // Let the user give the factory a Window and Document.
	      module.exports = factory;
	    }
	  } else {
	    // Assume a traditional browser.
	    window.Modal = factory();
	  }

	})(function(){

	  var isIE = (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) ? parseFloat( RegExp.$1 ) : false,
	    addClass = function(el,c) { // where modern browsers fail, use classList  
	      if (el.classList) { el.classList.add(c); } else { el.className += ' '+c; el.offsetWidth; }
	    },
	    removeClass = function(el,c) {
	      if (el.classList) { el.classList.remove(c); } else { el.className = el.className.replace(c,'').replace(/^\s+|\s+$/g,''); }
	    };

	  //MODAL DEFINITION
	  // ===============
	  var Modal = function(element, options) { // element is the trigger button / options.target is the modal
	    options = options || {};
	    this.modal = typeof element === 'object' ? element : document.querySelector(element);
	    this.options = {};
	    this.options.backdrop = options.backdrop === 'false' ? false : true;
	    this.options.keyboard = options.keyboard === 'false' ? false : true;
	    this.options.content = options.content;
	    this.duration = options.duration || 300; // the default modal fade duration option
	    this.options.duration = (isIE && isIE < 10) ? 0 : this.duration;
	    this.scrollbarWidth = 0;
	    this.dialog = this.modal.querySelector('.modal-dialog');
	    this.timer = 0;

	    var self = this, 
	      getWindowWidth = function() {
	        var htmlRect = document.documentElement.getBoundingClientRect(), 
	          fullWindowWidth = window.innerWidth || (htmlRect.right - Math.abs(htmlRect.left));
	        return fullWindowWidth;
	      },
	      setScrollbar = function () {
	        var bodyStyle = window.getComputedStyle(document.body), bodyPad = parseInt((bodyStyle.paddingRight), 10);
	        if (self.bodyIsOverflowing) { document.body.style.paddingRight = (bodyPad + self.scrollbarWidth) + 'px'; }
	      },
	      resetScrollbar = function () {
	        document.body.style.paddingRight = '';
	      },
	      measureScrollbar = function () { // thx walsh
	        var scrollDiv = document.createElement('div');
	        scrollDiv.className = 'modal-scrollbar-measure';
	        document.body.appendChild(scrollDiv);
	        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	        document.body.removeChild(scrollDiv);
	        return scrollbarWidth;
	      },
	      checkScrollbar = function () {
	        self.bodyIsOverflowing = document.body.clientWidth < getWindowWidth();
	        self.modalIsOverflowing = self.modal.scrollHeight > document.documentElement.clientHeight;
	        self.scrollbarWidth = measureScrollbar();
	      };

	    this.open = function() {
	      var currentOpen = document.querySelector('.modal.in');
	      if (currentOpen){
	        clearTimeout(currentOpen.getAttribute('data-timer'));
	        removeClass(currentOpen,'in');
	        setTimeout( function() {
	          currentOpen.setAttribute('aria-hidden', true);
	          currentOpen.style.display = '';
	        }, this.options.duration/2);
	      }

	      if ( this.options.backdrop ) {
	        this.createOverlay();
	      } else { this.overlay = null }
	      
	      if ( this.overlay ) {
	        setTimeout( function() {                                
	          addClass(self.overlay,'in');
	        }, 0);            
	      }
	              
	      clearTimeout(self.modal.getAttribute('data-timer'));
	      this.timer = setTimeout( function() {
	        self.modal.style.display = 'block';
	        
	        checkScrollbar();
	        self.adjustDialog();
	        setScrollbar();
	        
	        self.resize();
	        self.dismiss();
	        self.keydown();      
	        
	        addClass(document.body,'modal-open');
	        addClass(self.modal,'in');
	        self.modal.setAttribute('aria-hidden', false);
	      }, this.options.duration/2);
	      this.modal.setAttribute('data-timer',this.timer);
	    }
	    this.close = function() {

	      if ( this.overlay ) {          
	        removeClass(this.overlay,'in');
	      }      
	      removeClass(this.modal,'in');
	      this.modal.setAttribute('aria-hidden', true);
	              
	      clearTimeout(this.modal.getAttribute('data-timer'));
	      this.timer = setTimeout( function() {
	        removeClass(document.body,'modal-open');
	        self.resize();
	        self.resetAdjustments();
	        resetScrollbar();
	        
	        self.dismiss();
	        self.keydown();
	        self.modal.style.display = '';
	      }, this.options.duration/2);
	      this.modal.setAttribute('data-timer',this.timer);
	      
	      setTimeout( function() {
	        if (!document.querySelector('.modal.in')) {  self.removeOverlay(); }
	      }, this.options.duration);
	    }
	    this.content = function( content ) {
	      return this.modal.querySelector('.modal-content').innerHTML = content;
	    }
	    this.createOverlay = function() {
	      var backdrop = document.createElement('div'), overlay = document.querySelector('.modal-backdrop');
	      backdrop.setAttribute('class','modal-backdrop fade');
	  
	      if ( overlay ) {
	        this.overlay = overlay;
	      } else {
	        this.overlay = backdrop;
	        document.body.appendChild(backdrop);
	      }
	    }
	    this.removeOverlay = function() {
	      var overlay = document.querySelector('.modal-backdrop');
	      if ( overlay !== null && overlay !== undefined ) {
	        document.body.removeChild(overlay)
	      }
	    }
	    this.keydown = function() {
	      function keyHandler(e) {
	        if (self.options.keyboard && e.which == 27) {
	          self.close();
	        }          
	      }
	      if (!/\bin/.test(this.modal.className)) {
	        document.addEventListener('keydown', keyHandler, false);
	      } else {
	        document.removeEventListener('keydown', keyHandler, false);
	      }  
	    }
	    this.trigger = function() {
	      var triggers = document.querySelectorAll('[data-toggle="modal"]'), tgl = triggers.length, i = 0;
	      for ( i;i<tgl;i++ ) {
	        triggers[i].addEventListener('click', function(e) {
	          e.preventDefault();
	          var b = e.target,
	          s = b.getAttribute('data-target') && b.getAttribute('data-target').replace('#','')
	          || b.getAttribute('href') && b.getAttribute('href').replace('#','');
	          if ( document.getElementById( s ) === self.modal ) {
	            self.open()
	          }
	        })
	      }
	    }
	    this._resize = function() {
	      var overlay = this.overlay||document.querySelector('.modal-backdrop'),
	        dim = { w: document.documentElement.clientWidth + 'px', h: document.documentElement.clientHeight + 'px' };
	      if ( overlay !== null && /\bin/.test(overlay.className) ) {
	        overlay.style.height = dim.h; overlay.style.width = dim.w;
	      }
	    }
	    this.oneResize = function() {
	      function oneResize() {
	        self._resize();
	        self.handleUpdate();
	        window.removeEventListener('resize', oneResize, false);
	      }
	      window.addEventListener('resize', oneResize, false);      
	    }
	    this.resize = function() {
	      function resizeHandler() {
	        self._resize();
	        self.handleUpdate();
	      }      

	      if (!/\bin/.test(this.modal.className)) {
	        window.addEventListener('resize', this.oneResize, false);
	      } else {
	        window.removeEventListener('resize', this.oneResize, false);
	      }
	    }
	    this.dismiss = function() {
	      function dismissHandler(e) {
	        if ( e.target.parentNode.getAttribute('data-dismiss') === 'modal' || e.target.getAttribute('data-dismiss') === 'modal' || e.target === self.modal ) {
	          e.preventDefault(); self.close()
	        }
	      }          
	      if (!/\bin/.test(this.modal.className)) {
	        this.modal.addEventListener('click', dismissHandler, false);
	      } else {
	        this.modal.removeEventListener('click', dismissHandler, false);
	      }  
	    }
	    // these following methods are used to handle overflowing modals
	    this.handleUpdate = function () {
	      this.adjustDialog(); 
	    }
	    this.adjustDialog = function () {
	      this.modal.style.paddingLeft = !this.bodyIsOverflowing && this.modalIsOverflowing ? this.scrollbarWidth + 'px' : '';
	      this.modal.style.paddingRight = this.bodyIsOverflowing && !this.modalIsOverflowing ? this.scrollbarWidth + 'px' : '';
	    }
	    this.resetAdjustments = function () {
	      this.modal.style.paddingLeft = '';
	      this.modal.style.paddingRight = '';
	    }
	    //init
	    this.trigger();  
	    if ( this.options.content && this.options.content !== undefined ) {        
	      this.content( this.options.content );
	    }
	  };
	  
	  // DATA API
	  var Modals = document.querySelectorAll('.modal'), mdl = Modals.length, i = 0;
	  for ( i;i<mdl;i++ ) {
	    var modal = Modals[i], options = {};
	    options.keyboard = modal.getAttribute('data-keyboard');
	    options.backdrop = modal.getAttribute('data-backdrop');
	    options.duration = modal.getAttribute('data-duration');
	    new Modal(modal,options)
	  }

	  return Modal;

	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// Native Javascript for Bootstrap 3 | Popover
	// by dnp_theme

	(function(factory){

	  // CommonJS/RequireJS and "native" compatibility
	  if(true) {
	    // A commonJS/RequireJS environment
	    if(typeof window != "undefined") {
	      // Window and document exist, so return the factory's return value.
	      module.exports = factory();
	    } else {
	      // Let the user give the factory a Window and Document.
	      module.exports = factory;
	    }
	  } else {
	    // Assume a traditional browser.
	    window.Popover = factory();
	  }

	})(function(){

	  var isIE = (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) ? parseFloat( RegExp.$1 ) : false,
	    isElementInViewport = function(t) { // check if this.tooltip is in viewport
	      var r = t.getBoundingClientRect();
	      return (
	        r.top >= 0 &&
	        r.left >= 0 &&
	        r.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	        r.right <= (window.innerWidth || document.documentElement.clientWidth)
	      )
	    };

	  // POPOVER DEFINITION
	  // ===================
	  var Popover = function( element,options ) {
	    options = options || {};
	    this.link = typeof element === 'object' ? element : document.querySelector(element);
	    this.title = this.link.getAttribute('data-title') || null;
	    this.content = this.link.getAttribute('data-content') || null;
	    this.popover = null;
	    this.options = {};
	    this.options.template = options.template ? options.template : null;
	    this.options.trigger = options.trigger ? options.trigger : 'hover';
	    this.options.animation = options.animation && options.animation !== 'true' ? options.animation : 'true';
	    this.options.placement = options.placement ? options.placement : 'top';
	    this.options.delay = parseInt(options.delay) || 100;
	    this.options.dismiss = options.dismiss && options.dismiss === 'true' ? true : false;    
	    this.duration = 150;
	    this.options.duration = (isIE && isIE < 10) ? 0 : (options.duration || this.duration);
	    this.options.container = document.body;
	    if ( !this.content && !this.options.template ) return;
	    this.timer = 0 // the link own event timer

	    var self = this, events = ('onmouseleave' in this.link) ? [ 'mouseenter', 'mouseleave'] : [ 'mouseover', 'mouseout' ];

	    this.toggle = function(e) {
	      if (self.popover === null) {
	        self.open()
	      } else {
	        self.close()
	      }
	    }
	    this.open = function(e) {
	      clearTimeout(self.link.getAttribute('data-timer'));
	      self.timer = setTimeout( function() {
	        if (self.popover === null) {
	          self.createPopover();
	          self.stylePopover();
	          self.updatePopover()
	        }
	      }, self.options.duration );
	      self.link.setAttribute('data-timer',self.timer);
	    }
	    this.dismiss = function(e) {
	      if (self.popover && e.target === self.popover.querySelector('.close')) {          
	        self.close();
	      }
	    }
	    this.close = function(e) {
	      clearTimeout(self.link.getAttribute('data-timer'));
	      self.timer = setTimeout( function() {
	        if (self.popover && self.popover !== null && /\bin/.test(self.popover.className)) {
	          self.popover.className = self.popover.className.replace(' in','');
	          setTimeout(function() {
	            self.removePopover(); // for performance/testing reasons we can keep the popovers if we want
	          }, self.options.duration);
	        }

	      }, self.options.delay + self.options.duration);
	      self.link.setAttribute('data-timer',self.timer);
	    }
	    //remove the popover
	    this.removePopover = function() {
	      this.popover && this.options.container.removeChild(this.popover);
	      this.popover = null;
	      this.timer = null
	    }
	    this.createPopover = function() {
	      this.popover = document.createElement('div');

	      if ( this.content !== null && this.options.template === null ) { //create the popover from data attributes

	        this.popover.setAttribute('role','tooltip');

	        var popoverArrow = document.createElement('div');
	        popoverArrow.setAttribute('class','arrow');

	        if (this.title !== null) {
	          var popoverTitle = document.createElement('h3');
	          popoverTitle.setAttribute('class','popover-title');
	          
	          if (this.options.dismiss) {
	            popoverTitle.innerHTML = this.title + '<button type="button" class="close">×</button>';
	          } else {
	            popoverTitle.innerHTML = this.title;
	          }
	          this.popover.appendChild(popoverTitle);
	        }

	        var popoverContent = document.createElement('div');
	        popoverContent.setAttribute('class','popover-content');

	        this.popover.appendChild(popoverArrow);
	        this.popover.appendChild(popoverContent);

	        //set popover content
	        if (this.options.dismiss && this.title === null) {
	          popoverContent.innerHTML = this.content + '<button type="button" class="close">×</button>';
	        } else {
	          popoverContent.innerHTML = this.content;
	        }

	      } else {  // or create the popover from template
	        var template = document.createElement('div');
	        template.innerHTML = this.options.template;
	        this.popover.innerHTML = template.firstChild.innerHTML;
	      }

	      //append to the container
	      this.options.container.appendChild(this.popover);
	      this.popover.style.display = 'block';
	    }
	    this.stylePopover = function(pos) {
	      var rect = this.link.getBoundingClientRect(),
	          placement = pos || this.options.placement,
	          animation = this.options.animation === 'true' ? 'fade' : '';

	      this.popover.setAttribute('class','popover '+placement+' '+animation);

	      var ld = { w: rect.right - rect.left, h: rect.bottom - rect.top }, //link real dimensions
	          pd = { w : this.popover.offsetWidth, h: this.popover.offsetHeight }, //popover real dimensions
	          sYo = this.getScroll().y, sXo = this.getScroll().x; //window vertical and horizontal scroll

	      //apply styling
	      if ( /top/.test(placement) ) { //TOP
	        this.popover.style.top = rect.top + sYo - pd.h + 'px';
	        this.popover.style.left = rect.left + sXo - pd.w/2 + ld.w/2 + 'px'

	      } else if ( /bottom/.test(placement) ) { //BOTTOM
	        this.popover.style.top = rect.top + sYo + ld.h + 'px';
	        this.popover.style.left = rect.left + sXo - pd.w/2 + ld.w/2 + 'px';

	      } else if ( /left/.test(placement) ) { //LEFT
	        this.popover.style.top = rect.top + sYo - pd.h/2 + ld.h/2 + 'px';
	        this.popover.style.left = rect.left + sXo - pd.w + 'px';

	      } else if ( /right/.test(placement) ) { //RIGHT
	        this.popover.style.top = rect.top + sYo - pd.h/2 + ld.h/2 + 'px';
	        this.popover.style.left = rect.left + sXo + ld.w + 'px';
	      }
	    }
	    this.updatePopover = function() {
	      var placement = null;
	      if ( !isElementInViewport(this.popover) ) {
	        placement = this.updatePlacement();
	      } else {
	        placement = this.options.placement;
	      }

	      this.stylePopover(placement);
	      this.popover.className += ' in';
	    }
	    this.updatePlacement = function() {
	      var pos = this.options.placement;
	      if ( /top/.test(pos) ) { //TOP
	        return 'bottom';
	      } else if ( /bottom/.test(pos) ) { //BOTTOM
	        return 'top';
	      } else if ( /left/.test(pos) ) { //LEFT
	        return 'right';
	      } else if ( /right/.test(pos) ) { //RIGHT
	        return 'left';
	      }
	    }
	    this.getScroll = function() {
	      return {
	        y : window.pageYOffset || document.documentElement.scrollTop,
	        x : window.pageXOffset || document.documentElement.scrollLeft
	      }
	    }
	    // init
	    if (this.options.trigger === 'hover') {
	      this.link.addEventListener(events[0], this.open, false);
	      if (!this.options.dismiss) { this.link.addEventListener(events[1], this.close, false); }
	    } else if (this.options.trigger === 'click') {
	      this.link.addEventListener('click', this.toggle, false);
	      if (!this.options.dismiss) { this.link.addEventListener('blur', this.close, false); }
	    } else if (this.options.trigger === 'focus') {
	      this.link.addEventListener('focus', this.toggle, false);
	      if (!this.options.dismiss) { this.link.addEventListener('blur', this.close, false);  }
	    }
	    
	    if (this.options.dismiss) {  document.addEventListener('click', this.dismiss, false); }
	      
	    if (!(isIE && isIE < 9) ) { // dismiss on window resize 
	      window.addEventListener('resize', this.close, false ); 
	    }
	  }

	  // POPOVER DATA API
	  // =================
	  var Popovers = document.querySelectorAll('[data-toggle=popover]'), i = 0, ppl = Popovers.length;
	  for (i;i<ppl;i++){  
	    var item = Popovers[i], options = {};
	    options.trigger = item.getAttribute('data-trigger'); // click / hover / focus
	    options.animation = item.getAttribute('data-animation'); // true / false
	    options.duration = item.getAttribute('data-duration');
	    options.placement = item.getAttribute('data-placement');
	    options.dismiss = item.getAttribute('data-dismiss');
	    options.delay = item.getAttribute('data-delay');
	    new Popover(item,options);
	  }

	  return Popover;

	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// Native Javascript for Bootstrap 3 | ScrollSpy
	// by dnp_theme

	(function(factory){

	  // CommonJS/RequireJS and "native" compatibility
	  if(true) {
	    // A commonJS/RequireJS environment
	    if(typeof window != "undefined") {
	      // Window and document exist, so return the factory's return value.
	      module.exports = factory();
	    } else {
	      // Let the user give the factory a Window and Document.
	      module.exports = factory;
	    }
	  } else {
	    // Assume a traditional browser.
	    window.ScrollSpy = factory();
	  }

	})(function(){

	  var isIE = (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) ? parseFloat( RegExp.$1 ) : false,
	    addClass = function(el,c) { // where modern browsers fail, use classList  
	      if (el.classList) { el.classList.add(c); } else { el.className += ' '+c; el.offsetWidth; }
	    },
	    removeClass = function(el,c) {
	      if (el.classList) { el.classList.remove(c); } else { el.className = el.className.replace(c,'').replace(/^\s+|\s+$/g,''); }
	    };

	  //SCROLLSPY DEFINITION
	  var ScrollSpy = function(element,item,options) {
	    options = options || {};
	    
	    //this is the container element we spy it's elements on
	    this.element = typeof element === 'object' ? element : document.querySelector(element);

	    this.options = {};
	    // this is the UL menu component our scrollSpy object will target, configure and required by the container element
	    this.options.target = options.target ? (typeof options.target === 'object' ? options.target : document.querySelector(options.target)) : null;

	    //we need to determine the index of each menu item
	    this.items = this.options.target && this.options.target.getElementsByTagName('A');

	    this.item = item;
	    // the parent LI element
	    this.parent = this.item.parentNode;

	    // the upper level LI ^ UL ^ LI, this is required for dropdown menus
	    this.parentParent = this.parent.parentNode.parentNode;

	    this.tg = this.item.href && document.getElementById(this.item.getAttribute('href').replace('#',''));
	    this.active = false;
	    this.topEdge = 0;
	    this.bottomEdge = 0;
	    var self = this;

	    //determine which is the real scrollTarget
	    if ( this.element.offsetHeight < this.element.scrollHeight ) { // or this.scrollHeight()
	      this.scrollTarget = this.element;
	    } else {
	      this.scrollTarget = window;
	    }

	    if ( !this.options.target ) { return; }

	    this.topLimit = function () { // the target offset
	      if ( this.scrollTarget === window ) {
	        return this.tg.getBoundingClientRect().top + this.scrollOffset() - 5
	      } else {
	        return this.tg.offsetTop;
	      }
	    }
	    this.bottomLimit = function () {
	      return this.topLimit() + this.tg.clientHeight
	    }
	    this.checkEdges = function () {
	      this.topEdge = this.topLimit();
	      this.bottomEdge = this.bottomLimit()
	    }
	    this.scrollOffset = function () {
	      if ( this.scrollTarget === window ) {
	        return window.pageYOffset || document.documentElement.scrollTop
	      } else {
	        return this.element.scrollTop
	      }
	    }
	    this.activate = function () {
	      if ( this.parent && this.parent.tagName === 'LI' && !/\bactive/.test(this.parent.className) ) {
	        addClass(this.parent,'active');
	        if ( this.parentParent && this.parentParent.tagName === 'LI' // activate the dropdown as well
	          && /\bdropdown/.test(this.parentParent.className)
	          && !/\bactive/.test(this.parentParent.className) ) { addClass(this.parentParent,'active'); }
	        this.active = true
	      }
	    }
	    this.deactivate = function () {
	      if ( this.parent && this.parent.tagName === 'LI' && /\bactive/.test(this.parent.className) ) {
	        removeClass(this.parent,'active');
	        if ( this.parentParent && this.parentParent.tagName === 'LI' // deactivate the dropdown as well
	          && /\bdropdown/.test(this.parentParent.className)
	          && /\bactive/.test(this.parentParent.className) ) { removeClass(this.parentParent,'active'); }
	        this.active = false
	      }
	    }
	    this.toggle = function () {
	      if ( this.active === false
	        && ( this.bottomEdge > this.scrollOffset() && this.scrollOffset() >= this.topEdge )) { //regular use, scroll just entered the element's topLimit or bottomLimit
	          this.activate();
	      } else if (this.active === true && (this.bottomEdge <= this.scrollOffset() && this.scrollOffset() < this.topEdge )) {
	        this.deactivate()
	      }
	    }
	    this.refresh = function () { // check edges again
	      this.deactivate();
	      this.checkEdges();

	      this.toggle() // If any case update values again
	    }
	    this.scrollEvent = function(){
	      function onSpyScroll() {
	        self.refresh();
	      }
	      this.scrollTarget.addEventListener('scroll', onSpyScroll, false);
	    }
	    this.resizeEvent = function(){
	      function onSpyResize() {
	        self.refresh()
	      }
	      window.addEventListener('resize', onSpyResize, false);
	    }
	    this.scrollHeight = function() {
	      if ( this.scrollTarget === window ) {
	        return Math.max( document.body.scrollHeight, document.body.offsetHeight, 
	          document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
	      } else {
	        return this.element.scrollHeight
	      }
	    }

	    // init
	    if ( this.item.getAttribute('href') && this.item.getAttribute('href').indexOf('#') > -1 ) {
	      //actions
	      this.checkEdges();
	      this.refresh()
	      this.scrollEvent();
	      if (!(isIE && isIE < 9)) { this.resizeEvent(); }
	    }
	  };


	  //SCROLLSPY API
	  //=============
	  var scrollSpyes = document.querySelectorAll('[data-spy="scroll"]'), i = 0, ssl = scrollSpyes.length; // mostly is the document.body or a large container with many elements having id="not-null-id"
	  for (i;i<ssl;i++) {
	    var spy = scrollSpyes[i], options = {};
	    options.target = spy.getAttribute('data-target') || null;  // this must be a .nav component with id="not-null"  
	    if ( options.target !== null ) {
	      var menu = options.target === 'object' ?  options.target : document.querySelector(options.target),
	        items = menu.querySelectorAll('a'), j = 0, il = items.length;
	      for (j;j<il;j++) {
	        var item = items[j];
	        if ( item.href && item.getAttribute('href') !== '#' )
	        new ScrollSpy(spy, item, options);
	      }
	    }
	  }

	  return ScrollSpy;

	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// Native Javascript for Bootstrap 3 | Tab
	// by dnp_theme

	(function(factory){

	  // CommonJS/RequireJS and "native" compatibility
	  if(true) {
	    // A commonJS/RequireJS environment
	    if(typeof window != "undefined") {
	      // Window and document exist, so return the factory's return value.
	      module.exports = factory();
	    } else {
	      // Let the user give the factory a Window and Document.
	      module.exports = factory;
	    }
	  } else {
	    // Assume a traditional browser.
	    window.Tab = factory();
	  }

	})(function(){

	  var isIE = (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) ? parseFloat( RegExp.$1 ) : false,
	    addClass = function(el,c) { // where modern browsers fail, use classList  
	      if (el.classList) { el.classList.add(c); } else { el.className += ' '+c; el.offsetWidth; }
	    },
	    removeClass = function(el,c) {
	      if (el.classList) { el.classList.remove(c); } else { el.className = el.className.replace(c,'').replace(/^\s+|\s+$/g,''); }
	    };

	  // TAB DEFINITION
	  // ===================
	  var Tab = function( element,options ) {
	    options = options || {};
	    this.tab = typeof element === 'object' ? element : document.querySelector(element);
	    this.tabs = this.tab.parentNode.parentNode;
	    this.dropdown = this.tabs.querySelector('.dropdown');
	    if ( /\bdropdown-menu/.test(this.tabs.className) ) {
	      this.dropdown = this.tabs.parentNode;
	      this.tabs = this.tabs.parentNode.parentNode;
	    }
	    this.options = options;

	    // default tab transition duration
	    this.duration = 150;
	    this.options.duration = (isIE && isIE < 10)  ? 0 : (options.duration || this.duration);

	    var self = this;

	    this.handle = function(e) {
	      e = e || window.e; e.preventDefault();
	      var next = e.target; //the tab we clicked is now the next tab
	      var nextContent = document.getElementById(next.getAttribute('href').replace('#','')); //this is the actual object, the next tab content to activate
	      
	      // get current active tab and content
	      var activeTab = self.getActiveTab();
	      var activeContent = self.getActiveContent();

	      if ( !/\bactive/.test(next.parentNode.className) ) {
	        // toggle "active" class name
	        removeClass(activeTab,'active');
	        addClass(next.parentNode,'active');    

	        // handle dropdown menu "active" class name    
	        if ( self.dropdown ) {
	          if ( !(/\bdropdown-menu/.test(self.tab.parentNode.parentNode.className)) ) {
	            if (/\bactive/.test(self.dropdown.className)) removeClass(self.dropdown,'active');
	          } else {
	            if (!/\bactive/.test(self.dropdown.className)) addClass(self.dropdown,'active');
	          }
	        }

	        //1. hide current active content first
	        removeClass(activeContent,'in');
	        
	        setTimeout(function() {
	          //2. toggle current active content from view
	          removeClass(activeContent,'active');
	          addClass(nextContent,'active');
	        }, self.options.duration);
	        setTimeout(function() {
	          //3. show next active content
	          addClass(nextContent,'in');
	        }, self.options.duration*2);
	      }
	    }
	    this.getActiveTab = function() {
	      var activeTabs = this.tabs.querySelectorAll('.active');
	      if ( activeTabs.length === 1 && !/\bdropdown/.test(activeTabs[0].className) ) {
	        return activeTabs[0]
	      } else if ( activeTabs.length > 1 ) {
	        return activeTabs[activeTabs.length-1]
	      }
	    }
	    this.getActiveContent = function() {
	      var a = this.getActiveTab().getElementsByTagName('A')[0].getAttribute('href').replace('#','');
	      return a && document.getElementById(a)
	    }

	    // init
	    this.tab.addEventListener('click', this.handle, false);
	  }

	  // TAB DATA API
	  // =================
	  var Tabs = document.querySelectorAll("[data-toggle='tab'], [data-toggle='pill']"), tbl = Tabs.length, i=0;
	  for ( i;i<tbl;i++ ) {
	    var tab = Tabs[i], options = {};
	    options.duration = tab.getAttribute('data-duration') && tab.getAttribute('data-duration') || false;
	    new Tab(tab,options);
	  }

	  return Tab;

	});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// Native Javascript for Bootstrap 3 | Tooltip
	// by dnp_theme

	(function(factory){

	  // CommonJS/RequireJS and "native" compatibility
	  if(true) {
	    // A commonJS/RequireJS environment
	    if(typeof window != "undefined") {
	      // Window and document exist, so return the factory's return value.
	      module.exports = factory();
	    } else {
	      // Let the user give the factory a Window and Document.
	      module.exports = factory;
	    }
	  } else {
	    // Assume a traditional browser.
	    window.Tooltip = factory();
	  }

	})(function(root){

	  var isIE = (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) ? parseFloat( RegExp.$1 ) : false,
	    isElementInViewport = function(t) { // check if this.tooltip is in viewport
	      var r = t.getBoundingClientRect();
	      return (
	        r.top >= 0 &&
	        r.left >= 0 &&
	        r.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	        r.right <= (window.innerWidth || document.documentElement.clientWidth)
	      )
	    };

	  // TOOLTIP DEFINITION
	  // ===================
	  var Tooltip = function( element,options ) {
	    options = options || {};
	    
	    this.link = typeof element === 'object' ? element : document.querySelector(element);
	    this.title = this.link.getAttribute('title') || this.link.getAttribute('data-original-title');
	    this.tooltip = null;
	    this.options = {};
	    this.options.animation = options.animation && options.animation !== 'fade' ? options.animation : 'fade';
	    this.options.placement = options.placement ? options.placement : 'top';
	    this.options.delay = parseInt(options.delay) || 100;
	    this.duration = 150;
	    this.options.duration = isIE && isIE < 10 ? 0 : (options.duration || this.duration);
	    this.options.container = options.container || document.body;
	    if ( !this.title ) return;
	    this.timer = 0 // the link own event timer

	    var self = this, events = ('onmouseleave' in this.link) ? [ 'mouseenter', 'mouseleave'] : [ 'mouseover', 'mouseout' ];

	    this.open = function(e) {
	      clearTimeout(self.link.getAttribute('data-timer'));
	      self.timer = setTimeout( function() {
	        if (self.tooltip === null) {
	          self.createToolTip();
	          self.styleTooltip();
	          self.updateTooltip()
	        }
	      }, self.options.duration );
	      self.link.setAttribute('data-timer',self.timer);
	    }
	    this.close = function(e) {
	      clearTimeout(self.link.getAttribute('data-timer'));
	      self.timer = setTimeout( function() {
	        if (self.tooltip && self.tooltip !== null) {
	          self.tooltip.className = self.tooltip.className.replace(' in','');
	          setTimeout(function() {
	            self.removeToolTip(); // for performance/testing reasons we can keep the tooltips if we want
	          }, self.options.duration);
	        }
	      }, self.options.delay + self.options.duration);
	      self.link.setAttribute('data-timer',self.timer);
	    }
	    //remove the tooltip
	    this.removeToolTip = function() {
	      this.tooltip && this.options.container.removeChild(this.tooltip);
	      this.tooltip = null;
	    }
	    //create the tooltip structure
	    this.createToolTip = function() {
	      this.tooltip = document.createElement('div');
	      this.tooltip.setAttribute('role','tooltip');

	      var tooltipArrow = document.createElement('div');
	      tooltipArrow.setAttribute('class','tooltip-arrow');
	      var tooltipInner = document.createElement('div');
	      tooltipInner.setAttribute('class','tooltip-inner');

	      this.tooltip.appendChild(tooltipArrow);
	      this.tooltip.appendChild(tooltipInner);

	      //set tooltip content
	      tooltipInner.innerHTML = this.title;

	      //append to the container
	      this.options.container.appendChild(this.tooltip);
	    }
	    this.styleTooltip = function(pos) {
	      var rect = this.link.getBoundingClientRect(),
	          placement = pos || this.options.placement;
	          
	      this.tooltip.setAttribute('class','tooltip '+placement+' '+this.options.animation);

	      var ld = { w: rect.right - rect.left, h: rect.bottom - rect.top }, //link real dimensions
	          td = { w : this.tooltip.offsetWidth, h: this.tooltip.offsetHeight }, //tooltip real dimensions
	          sYo = this.getScroll().y, sXo = this.getScroll().x; //window vertical and horizontal scroll

	      //apply styling
	      if ( /top/.test(placement) ) { //TOP
	        this.tooltip.style.top = rect.top + sYo - td.h + 'px';
	        this.tooltip.style.left = rect.left + sXo - td.w/2 + ld.w/2 + 'px'

	      } else if ( /bottom/.test(placement) ) { //BOTTOM
	        this.tooltip.style.top = rect.top + sYo + ld.h + 'px';
	        this.tooltip.style.left = rect.left + sXo - td.w/2 + ld.w/2 + 'px';

	      } else if ( /left/.test(placement) ) { //LEFT
	        this.tooltip.style.top = rect.top + sYo - td.h/2 + ld.h/2 + 'px';
	        this.tooltip.style.left = rect.left + sXo - td.w + 'px';

	      } else if ( /right/.test(placement) ) { //RIGHT
	        this.tooltip.style.top = rect.top + sYo - td.h/2 + ld.h/2 + 'px';
	        this.tooltip.style.left = rect.left + sXo + ld.w + 'px';
	      }
	    }
	    this.updateTooltip = function() {
	      var placement = null;
	      if ( !isElementInViewport(this.tooltip) ) {
	        placement = this.updatePlacement();
	      } else {
	        placement = this.options.placement;
	      }
	      this.styleTooltip(placement);
	      this.tooltip.className += ' in';
	    }
	    this.updatePlacement = function() {
	      var pos = this.options.placement;
	      if ( /top/.test(pos) ) { //TOP
	        return 'bottom';
	      } else if ( /bottom/.test(pos) ) { //BOTTOM
	        return 'top';
	      } else if ( /left/.test(pos) ) { //LEFT
	        return 'right';
	      } else if ( /right/.test(pos) ) { //RIGHT
	        return 'left';
	      }
	    }
	    this.getScroll = function() {
	      return {
	        y : window.pageYOffset || document.documentElement.scrollTop,
	        x : window.pageXOffset || document.documentElement.scrollLeft
	      }
	    }
	    // init
	    this.link.addEventListener(events[0], this.open, false);
	    this.link.addEventListener(events[1], this.close, false);
	    //remove title from link
	    this.link.setAttribute('data-original-title',this.title);
	    this.link.removeAttribute('title');
	  }

	  // TOOLTIP DATA API
	  // =================
	  var Tooltips = document.querySelectorAll('[data-toggle=tooltip]'), i = 0, tpl = Tooltips.length;
	  for (i;i<tpl;i++){  
	    var item = Tooltips[i], options = {};
	    options.animation = item.getAttribute('data-animation');
	    options.placement = item.getAttribute('data-placement');
	    options.duration = item.getAttribute('data-duration');
	    options.delay = item.getAttribute('data-delay');
	    new Tooltip(item,options);
	  }

	  return Tooltip;

	});

/***/ }
/******/ ]);