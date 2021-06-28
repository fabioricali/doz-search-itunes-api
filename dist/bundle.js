// [DozSearchItunesApi]  Build version: 1.0.2  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("doz"));
	else if(typeof define === 'function' && define.amd)
		define("DozSearchItunesApi", ["doz"], factory);
	else if(typeof exports === 'object')
		exports["DozSearchItunesApi"] = factory(require("doz"));
	else
		root["DozSearchItunesApi"] = factory(root["Doz"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _doz = __webpack_require__(0);

var _src = __webpack_require__(2);

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// expose component to global scope
function register() {
    if (typeof window !== 'undefined') {
        (0, _doz.define)('doz-search-itunes-api', _src2.default);
        // Keep in mind to add a prefix like this: 'dwc-' to the name of the component you are going to define, 
        // this to prevent Doz from processing possible Web Components that have the same name as the Doz Components.
        (0, _doz.defineWebComponent)('dwc-doz-search-itunes-api', _src2.default, [/*attributes you want observe*/]);
    }
}

register();

exports.default = _src2.default;


if (false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n            <style> \n                * {\n                    box-sizing: border-box;\n                }\n                \n                .search-container {\n                }\n                \n                .search-results {\n                    display: grid;\n                    grid-template-columns: repeat(auto-fill, minmax(198px, max-content));\n                    /*grid-template-columns: repeat(auto-fill, minmax(182px, max-content));*/\n                    gap: 16px;\n                    overflow: auto;\n                    /*height: 92vh;*/\n                }\n                \n                .search-field input{\n                    padding: 8px;\n                    width: 100%;\n                    font-size: 16px;\n                    margin-bottom: 24px;\n                    border-radius: 4px;\n                    border: 1px solid #ccc;\n                }\n            </style>\n            <div class=\"search-container\">\n                <", " placeholder=\"Search on Itunes\" class=\"search-field\" d:on-search=\"", "\" d:on-clear=\"", "\"/>\n                <div d-show=\"", "\">Loading...</div>\n                <div d-show=\"", "\">No results...</div>\n                <div class=\"search-results\">\n                    ", "\n                </div>\n            </div>\n        "], ["\n            <style> \n                * {\n                    box-sizing: border-box;\n                }\n                \n                .search-container {\n                }\n                \n                .search-results {\n                    display: grid;\n                    grid-template-columns: repeat(auto-fill, minmax(198px, max-content));\n                    /*grid-template-columns: repeat(auto-fill, minmax(182px, max-content));*/\n                    gap: 16px;\n                    overflow: auto;\n                    /*height: 92vh;*/\n                }\n                \n                .search-field input{\n                    padding: 8px;\n                    width: 100%;\n                    font-size: 16px;\n                    margin-bottom: 24px;\n                    border-radius: 4px;\n                    border: 1px solid #ccc;\n                }\n            </style>\n            <div class=\"search-container\">\n                <", " placeholder=\"Search on Itunes\" class=\"search-field\" d:on-search=\"", "\" d:on-clear=\"", "\"/>\n                <div d-show=\"", "\">Loading...</div>\n                <div d-show=\"", "\">No results...</div>\n                <div class=\"search-results\">\n                    ", "\n                </div>\n            </div>\n        "]),
    _templateObject2 = _taggedTemplateLiteral(["\n                                <", " \n                                    artistName=\"", "\"\n                                    trackName=\"", "\"\n                                    album=\"", "\"\n                                    previewUrl=\"", "\"\n                                    genre=\"", "\"\n                                    releaseDate=\"", "\"\n                                    artworkSmall=\"", "\"\n                                    artworkLarge=\"", "\"\n                                    artworkMedium=\"", "\"\n                                />\n                            "], ["\n                                <", " \n                                    artistName=\"", "\"\n                                    trackName=\"", "\"\n                                    album=\"", "\"\n                                    previewUrl=\"", "\"\n                                    genre=\"", "\"\n                                    releaseDate=\"", "\"\n                                    artworkSmall=\"", "\"\n                                    artworkLarge=\"", "\"\n                                    artworkMedium=\"", "\"\n                                />\n                            "]);

var _doz = __webpack_require__(0);

var _dozSearchfield = __webpack_require__(3);

var _dozSearchfield2 = _interopRequireDefault(_dozSearchfield);

var _fetchJsonp = __webpack_require__(5);

var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);

var _trackCard = __webpack_require__(6);

var _trackCard2 = _interopRequireDefault(_trackCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_dozSearchfield2.default.tag = 'search-field';

var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class(o) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, o));

        _this.props = {
            records: [],
            searchMediaType: 'music', //movie, podcast, music, musicVideo, audiobook, shortFilm, tvShow, software, ebook, all,
            searchLimit: 100,
            _isLoading: false,
            _noResults: false
        };
        return _this;
    }

    _createClass(_class, [{
        key: "template",
        value: function template(h) {

            //language=HTML
            return h(_templateObject, _dozSearchfield2.default, this.search, this.clearSearch, this.props._isLoading, this.props._noResults, this.props.records.map(function (item) {
                return (
                    //language=html
                    h(_templateObject2, _trackCard2.default, item.artistName, item.trackName, item.collectionName, item.previewUrl, item.primaryGenreName, item.releaseDate, item.artworkUrl100.replace('100x100', '300x300'), item.artworkUrl100.replace('100x100', '1000x1000'), item.artworkUrl100.replace('100x100', '600x600'))
                );
            }));
        }
    }, {
        key: "search",
        value: function search(value) {
            var _this2 = this;

            this.props.records = [];
            this.props._isLoading = true;
            this.props._noResults = false;
            var url = "https://itunes.apple.com/search?limit=" + this.props.searchLimit + "&media=" + this.props.searchMediaType + "&term=" + value.split(' ').join('+');
            (0, _fetchJsonp2.default)(url, {
                jsonpCallback: 'callback'
            }).then(function (response) {
                return response.json();
            }).then(function (response) {
                _this2.props.records = response.results;
                _this2.props._isLoading = false;
                if (!_this2.props.records.length) _this2.props._noResults = true;
                //console.log(this.props.records)
            }).catch(function (e) {
                _this2.props._isLoading = false;
                console.error(e);
            });
        }
    }, {
        key: "clearSearch",
        value: function clearSearch() {
            this.props.records = [];
        }
    }]);

    return _class;
}(_doz.Component);

exports.default = _class;
;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// [DozSearchfield]  Build version: 1.2.0  
(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(0));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(undefined, function (__WEBPACK_EXTERNAL_MODULE__1__) {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // define __esModule on exports
            /******/__webpack_require__.r = function (exports) {
                /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                    /******/
                }
                /******/Object.defineProperty(exports, '__esModule', { value: true });
                /******/
            };
            /******/
            /******/ // create a fake namespace object
            /******/ // mode & 1: value is a module id, require it
            /******/ // mode & 2: merge all properties of value into the ns
            /******/ // mode & 4: return value when already ns object
            /******/ // mode & 8|1: behave like require
            /******/__webpack_require__.t = function (value, mode) {
                /******/if (mode & 1) value = __webpack_require__(value);
                /******/if (mode & 8) return value;
                /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
                /******/var ns = Object.create(null);
                /******/__webpack_require__.r(ns);
                /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
                /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
                    __webpack_require__.d(ns, key, function (key) {
                        return value[key];
                    }.bind(null, key));
                } /******/return ns;
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 2);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _templateObject = _taggedTemplateLiteral(['\n            <input\n                placeholder="', '"\n                class="', '"\n                type="', '"\n                name="', '"\n                oninput="this.$onInput()"\n                onkeyup="this.$onKeyUp()"\n                d-ref="input"\n                d-bind="value"\n                id="', '"\n            >\n            <button \n                class="', '" \n                style="display: ', '" \n                onclick="this.$search()"\n            >', '</button>\n        '], ['\n            <input\n                placeholder="', '"\n                class="', '"\n                type="', '"\n                name="', '"\n                oninput="this.$onInput()"\n                onkeyup="this.$onKeyUp()"\n                d-ref="input"\n                d-bind="value"\n                id="', '"\n            >\n            <button \n                class="', '" \n                style="display: ', '" \n                onclick="this.$search()"\n            >', '</button>\n        ']);

            function _taggedTemplateLiteral(strings, raw) {
                return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
            }

            exports.default = {

                props: {
                    name: '',
                    value: '',
                    showButton: false,
                    buttonLabel: 'Search',
                    placeholder: 'Search here...',
                    buttonClass: '',
                    inputClass: '',
                    inputId: '',
                    showClearButton: true,
                    typeahead: 0,
                    forceSearch: false
                },

                template: function template(h) {
                    return h(_templateObject, this.props.placeholder, this.props.inputClass, this.props.showClearButton ? 'search' : 'text', this.props.name, this.props.inputId, this.props.buttonClass, this.props.showButton ? 'inline' : 'none', this.props.buttonLabel);
                },
                onCreate: function onCreate() {
                    this.$isSearching = false;
                    this.$lastValue = '';
                    this.$overTypehead = false;
                },
                $onInput: function $onInput(e) {
                    if (e.target.value === '') this.$clear();
                    if (this.props.typeahead && this.props.value.length >= this.props.typeahead) this.$overTypehead = true;
                },
                $onKeyUp: function $onKeyUp(e) {
                    if (e.keyCode === 13 || e.keyCode === 8 && this.props.typeahead && this.$overTypehead || this.props.typeahead && this.props.value.length >= this.props.typeahead) {
                        this.$search();
                    }
                },
                $search: function $search(value) {
                    if (typeof value !== 'undefined') {
                        this.$lastValue = null;
                        //this.props.value = value;
                        //workaround
                        /*setTimeout(() => {
                            this.ref.input.value = value;
                        })*/
                    }

                    if (!this.props.forceSearch && this.$lastValue === this.props.value) return;
                    this.$lastValue = this.props.value;
                    this.$isSearching = true;
                    this.emit('search', this.props.value);
                },
                $clear: function $clear() {
                    this.props.value = '';
                    this.$lastValue = '';
                    this.$overTypehead = false;
                    this.$isSearching = false;
                    this.emit('clear');
                }
            };

            /***/
        },
        /* 1 */
        /***/function (module, exports) {

            module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

            /***/
        },
        /* 2 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _doz = __webpack_require__(1);

            var _doz2 = _interopRequireDefault(_doz);

            var _lib = __webpack_require__(0);

            var _lib2 = _interopRequireDefault(_lib);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            // expose component to global scope
            if (typeof window !== 'undefined') {
                _doz2.default.component('doz-searchfield', _lib2.default);
            }

            exports.default = _lib2.default;

            /***/
        }]
        /******/)
    );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(undefined, function (exports, module) {
  'use strict';

  var defaultOptions = {
    timeout: 5000,
    jsonpCallback: 'callback',
    jsonpCallbackFunction: null
  };

  function generateCallbackFunction() {
    return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
  }

  function clearFunction(functionName) {
    // IE8 throws an exception when you try to delete a property on window
    // http://stackoverflow.com/a/1824228/751089
    try {
      delete window[functionName];
    } catch (e) {
      window[functionName] = undefined;
    }
  }

  function removeScript(scriptId) {
    var script = document.getElementById(scriptId);
    if (script) {
      document.getElementsByTagName('head')[0].removeChild(script);
    }
  }

  function fetchJsonp(_url) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    // to avoid param reassign
    var url = _url;
    var timeout = options.timeout || defaultOptions.timeout;
    var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;

    var timeoutId = undefined;

    return new Promise(function (resolve, reject) {
      var callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
      var scriptId = jsonpCallback + '_' + callbackFunction;

      window[callbackFunction] = function (response) {
        resolve({
          ok: true,
          // keep consistent with fetch API
          json: function json() {
            return Promise.resolve(response);
          }
        });

        if (timeoutId) clearTimeout(timeoutId);

        removeScript(scriptId);

        clearFunction(callbackFunction);
      };

      // Check if the user set their own params, and if not add a ? to start a list of params
      url += url.indexOf('?') === -1 ? '?' : '&';

      var jsonpScript = document.createElement('script');
      jsonpScript.setAttribute('src', '' + url + jsonpCallback + '=' + callbackFunction);
      if (options.charset) {
        jsonpScript.setAttribute('charset', options.charset);
      }
      jsonpScript.id = scriptId;
      document.getElementsByTagName('head')[0].appendChild(jsonpScript);

      timeoutId = setTimeout(function () {
        reject(new Error('JSONP request to ' + _url + ' timed out'));

        clearFunction(callbackFunction);
        removeScript(scriptId);
        window[callbackFunction] = function () {
          clearFunction(callbackFunction);
        };
      }, timeout);

      // Caught if got 404/500
      jsonpScript.onerror = function () {
        reject(new Error('JSONP request to ' + _url + ' failed'));

        clearFunction(callbackFunction);
        removeScript(scriptId);
        if (timeoutId) clearTimeout(timeoutId);
      };
    });
  }

  // export as global function
  /*
  let local;
  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }
  local.fetchJsonp = fetchJsonp;
  */

  module.exports = fetchJsonp;
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n            <style>\n                .track-card-container {\n                    padding: 24px;\n                    background: #ccc;\n                    border-radius: 4px;\n                    /*height: 246px;*/\n                    overflow: hidden;\n                    cursor: pointer;\n                }\n                \n                .track-card-container:hover {\n                    background: #ddd;\n                }\n                \n                .track-image {\n                    width: 150px;\n                    height: 150px;\n                    margin-bottom: 16px;\n                    border-radius: 4px;\n                }\n                \n                .track-info {\n                    font-size: 12px;\n                    white-space: nowrap;\n                    overflow: hidden;\n                    text-overflow: ellipsis;\n                }\n                \n                .track-artist {\n                    font-weight: bolder;\n                }\n            </style>\n            <div class=\"track-card-container\" onclick=\"", "\">\n                <img class=\"track-image\" src=\"", "\">\n                <div class=\"track-info\">\n                    <div title=\"", "\" class=\"track-artist\">", "</div>\n                    <div title=\"", "\" class=\"track-title\">", "</div>\n                </div>\n            </div>\n        "], ["\n            <style>\n                .track-card-container {\n                    padding: 24px;\n                    background: #ccc;\n                    border-radius: 4px;\n                    /*height: 246px;*/\n                    overflow: hidden;\n                    cursor: pointer;\n                }\n                \n                .track-card-container:hover {\n                    background: #ddd;\n                }\n                \n                .track-image {\n                    width: 150px;\n                    height: 150px;\n                    margin-bottom: 16px;\n                    border-radius: 4px;\n                }\n                \n                .track-info {\n                    font-size: 12px;\n                    white-space: nowrap;\n                    overflow: hidden;\n                    text-overflow: ellipsis;\n                }\n                \n                .track-artist {\n                    font-weight: bolder;\n                }\n            </style>\n            <div class=\"track-card-container\" onclick=\"", "\">\n                <img class=\"track-image\" src=\"", "\">\n                <div class=\"track-info\">\n                    <div title=\"", "\" class=\"track-artist\">", "</div>\n                    <div title=\"", "\" class=\"track-title\">", "</div>\n                </div>\n            </div>\n        "]),
    _templateObject2 = _taggedTemplateLiteral(["\n            <", "\n                artistName=\"", "\"\n                trackName=\"", "\"\n                album=\"", "\"\n                genre=\"", "\"\n                releaseDate=\"", "\"\n                previewUrl=\"", "\"\n                artworkSmall=\"", "\"\n                artworkMedium=\"", "\"\n                artworkLarge=\"", "\"\n            />\n        "], ["\n            <", "\n                artistName=\"", "\"\n                trackName=\"", "\"\n                album=\"", "\"\n                genre=\"", "\"\n                releaseDate=\"", "\"\n                previewUrl=\"", "\"\n                artworkSmall=\"", "\"\n                artworkMedium=\"", "\"\n                artworkLarge=\"", "\"\n            />\n        "]);

var _doz = __webpack_require__(0);

var _trackDetails = __webpack_require__(7);

var _trackDetails2 = _interopRequireDefault(_trackDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrackCard = function (_Component) {
    _inherits(TrackCard, _Component);

    function TrackCard() {
        _classCallCheck(this, TrackCard);

        return _possibleConstructorReturn(this, (TrackCard.__proto__ || Object.getPrototypeOf(TrackCard)).apply(this, arguments));
    }

    _createClass(TrackCard, [{
        key: "template",
        value: function template(h) {
            //language=html
            return h(_templateObject, this.viewDetails, this.props.artworkSmall, this.props.artistName, this.props.artistName, this.props.trackName, this.props.trackName);
        }
    }, {
        key: "viewDetails",
        value: function viewDetails() {
            this.app.mount(this.h(_templateObject2, _trackDetails2.default, this.props.artistName, this.props.trackName, this.props.album, this.props.genre, this.props.releaseDate, this.props.previewUrl, this.props.artworkSmall, this.props.artworkMedium, this.props.artworkLarge));
        }
    }]);

    return TrackCard;
}(_doz.Component);

exports.default = TrackCard;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n            <style>\n                :component {\n                    padding: 24px;\n                    display: block;\n                    overflow: auto;\n                    position: fixed;\n                    left: 0;\n                    top: 0;\n                    width: 100%;\n                    height: 100%;\n                    z-index: 10000;\n                    background: rgba(0,0,0,.95);\n                    color: #fff;\n                    text-align: left;\n                }\n                \n                .track-info {\n                    text-align: left;\n                    width: 100%;\n                }\n                \n                td, th {\n                    padding: 8px;\n                }\n                \n                th {\n                    width: 20%;\n                }\n                \n                td {\n                    width: 80%;\n                }\n                \n                input[type=text] {\n                    width: 100%;\n                    padding: 4px;\n                }\n            </style>\n            <div class=\"track-details-container\">\n                <div style=\"text-align: right\">\n                    <button onclick=\"", "\">Close</button>\n                </div>\n                <h3>Details:</h3>\n                <img src=\"", "\" style=\"width: 150px; height: 150px; display: block; margin-bottom: 24px; border: 1px solid #ccc\">\n                <table class=\"track-info\">\n                    <tr>\n                        <th>Artist:</th>\n                        <td><input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\"></td>\n                    </tr>\n                    <tr>\n                        <th>Title:</th>\n                        <td><input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\"></td>\n                    </tr>\n                    <tr>\n                        <th>Album:</th>\n                        <td><input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\"></td>\n                    </tr>\n                    <tr>\n                        <th>Genre:</th>\n                        <td><input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\"></td>\n                    </tr>\n                    <tr>\n                        <th>Release Date:</th>\n                        <td><input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\"></td>\n                    </tr>\n                    <tr>\n                        <th>Preview:</th>\n                        <td>\n                            <audio src=\"", "\" controls></audio>\n                            <div><input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\"></div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <th>Artwork Small (300x300):</th>\n                        <td>\n                            <input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <th>Artwork Medium (600x600):</th>\n                        <td><input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\"></td>\n                    </tr>\n                    <tr>\n                        <th>Artwork Large (1000x1000):</th>\n                        <td><input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\"></td>\n                    </tr>\n                </table>\n            </div>\n        "], ["\n            <style>\n                :component {\n                    padding: 24px;\n                    display: block;\n                    overflow: auto;\n                    position: fixed;\n                    left: 0;\n                    top: 0;\n                    width: 100%;\n                    height: 100%;\n                    z-index: 10000;\n                    background: rgba(0,0,0,.95);\n                    color: #fff;\n                    text-align: left;\n                }\n                \n                .track-info {\n                    text-align: left;\n                    width: 100%;\n                }\n                \n                td, th {\n                    padding: 8px;\n                }\n                \n                th {\n                    width: 20%;\n                }\n                \n                td {\n                    width: 80%;\n                }\n                \n                input[type=text] {\n                    width: 100%;\n                    padding: 4px;\n                }\n            </style>\n            <div class=\"track-details-container\">\n                <div style=\"text-align: right\">\n                    <button onclick=\"", "\">Close</button>\n                </div>\n                <h3>Details:</h3>\n                <img src=\"", "\" style=\"width: 150px; height: 150px; display: block; margin-bottom: 24px; border: 1px solid #ccc\">\n                <table class=\"track-info\">\n                    <tr>\n                        <th>Artist:</th>\n                        <td><input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\"></td>\n                    </tr>\n                    <tr>\n                        <th>Title:</th>\n                        <td><input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\"></td>\n                    </tr>\n                    <tr>\n                        <th>Album:</th>\n                        <td><input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\"></td>\n                    </tr>\n                    <tr>\n                        <th>Genre:</th>\n                        <td><input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\"></td>\n                    </tr>\n                    <tr>\n                        <th>Release Date:</th>\n                        <td><input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\"></td>\n                    </tr>\n                    <tr>\n                        <th>Preview:</th>\n                        <td>\n                            <audio src=\"", "\" controls></audio>\n                            <div><input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\"></div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <th>Artwork Small (300x300):</th>\n                        <td>\n                            <input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <th>Artwork Medium (600x600):</th>\n                        <td><input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\"></td>\n                    </tr>\n                    <tr>\n                        <th>Artwork Large (1000x1000):</th>\n                        <td><input type=\"text\" value=\"", "\" readOnly=\"true\" onclick=\"$this.select()\"></td>\n                    </tr>\n                </table>\n            </div>\n        "]);

var _doz = __webpack_require__(0);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrackDetails = function (_Component) {
    _inherits(TrackDetails, _Component);

    function TrackDetails() {
        _classCallCheck(this, TrackDetails);

        return _possibleConstructorReturn(this, (TrackDetails.__proto__ || Object.getPrototypeOf(TrackDetails)).apply(this, arguments));
    }

    _createClass(TrackDetails, [{
        key: "template",
        value: function template(h) {
            var _this2 = this;

            //language=html
            return h(_templateObject, function () {
                return _this2.parent.destroy();
            }, this.props.artworkSmall, this.props.artistName, this.props.trackName, this.props.album, this.props.genre, this.props.releaseDate, this.props.previewUrl, this.props.previewUrl, this.props.artworkSmall, this.props.artworkMedium, this.props.artworkLarge);
        }
    }]);

    return TrackDetails;
}(_doz.Component);

exports.default = TrackDetails;

/***/ })
/******/ ]);
}); 