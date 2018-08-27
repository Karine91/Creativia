/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/vendor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (window, factory) {
	var lazySizes = factory(window, window.document);
	window.lazySizes = lazySizes;
	if (( false ? undefined : _typeof(module)) == 'object' && module.exports) {
		module.exports = lazySizes;
	}
})(window, function l(window, document) {
	'use strict';
	/*jshint eqnull:true */

	if (!document.getElementsByClassName) {
		return;
	}

	var lazysizes, lazySizesConfig;

	var docElem = document.documentElement;

	var Date = window.Date;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	var addEventListener = window[_addEventListener];

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function hasClass(ele, cls) {
		if (!regClassCache[cls]) {
			regClassCache[cls] = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function addClass(ele, cls) {
		if (!hasClass(ele, cls)) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function removeClass(ele, cls) {
		var reg;
		if (reg = hasClass(ele, cls)) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function addRemoveLoadEvents(dom, fn, add) {
		var action = add ? _addEventListener : 'removeEventListener';
		if (add) {
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function (evt) {
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function triggerEvent(elem, name, detail, noBubbles, noCancelable) {
		var event = document.createEvent('CustomEvent');

		if (!detail) {
			detail = {};
		}

		detail.instance = lazysizes;

		event.initCustomEvent(name, !noBubbles, !noCancelable, detail);

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function updatePolyfill(el, full) {
		var polyfill;
		if (!supportPicture && (polyfill = window.picturefill || lazySizesConfig.pf)) {
			if (full && full.src && !el[_getAttribute]('srcset')) {
				el.setAttribute('srcset', full.src);
			}
			polyfill({ reevaluate: true, elements: [el] });
		} else if (full && full.src) {
			el.src = full.src;
		}
	};

	var getCSS = function getCSS(elem, style) {
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function getWidth(elem, parent, width) {
		width = width || elem.offsetWidth;

		while (width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth) {
			width = parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = function () {
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function run() {
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while (runFns.length) {
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function rafBatch(fn, queue) {
			if (running && !queue) {
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if (!waiting) {
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	}();

	var rAFIt = function rAFIt(fn, simple) {
		return simple ? function () {
			rAF(fn);
		} : function () {
			var that = this;
			var args = arguments;
			rAF(function () {
				fn.apply(that, args);
			});
		};
	};

	var throttle = function throttle(fn) {
		var running;
		var lastTime = 0;
		var gDelay = lazySizesConfig.throttleDelay;
		var rICTimeout = lazySizesConfig.ricTimeout;
		var run = function run() {
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ? function () {
			requestIdleCallback(run, { timeout: rICTimeout });

			if (rICTimeout !== lazySizesConfig.ricTimeout) {
				rICTimeout = lazySizesConfig.ricTimeout;
			}
		} : rAFIt(function () {
			setTimeout(run);
		}, true);

		return function (isPriority) {
			var delay;

			if (isPriority = isPriority === true) {
				rICTimeout = 33;
			}

			if (running) {
				return;
			}

			running = true;

			delay = gDelay - (Date.now() - lastTime);

			if (delay < 0) {
				delay = 0;
			}

			if (isPriority || delay < 9) {
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function debounce(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function run() {
			timeout = null;
			func();
		};
		var later = function later() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function () {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	(function () {
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125
		};

		lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

		for (prop in lazySizesDefaults) {
			if (!(prop in lazySizesConfig)) {
				lazySizesConfig[prop] = lazySizesDefaults[prop];
			}
		}

		window.lazySizesConfig = lazySizesConfig;

		setTimeout(function () {
			if (lazySizesConfig.init) {
				init();
			}
		});
	})();

	var loader = function () {
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom;

		var defaultExpand, preloadExpand, hFac;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = 'onscroll' in window && !/(gle|ing)bot/.test(navigator.userAgent);

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function resetPreloading(e) {
			isLoading--;
			if (e && e.target) {
				addRemoveLoadEvents(e.target, resetPreloading);
			}

			if (!e || isLoading < 0 || !e.target) {
				isLoading = 0;
			}
		};

		var isNestedVisible = function isNestedVisible(elem, elemExpand) {
			var outerRect;
			var parent = elem;
			var visible = getCSS(document.body, 'visibility') == 'hidden' || getCSS(elem.parentNode, 'visibility') != 'hidden' && getCSS(elem, 'visibility') != 'hidden';

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
				visible = (getCSS(parent, 'opacity') || 1) > 0;

				if (visible && getCSS(parent, 'overflow') != 'visible') {
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
				}
			}

			return visible;
		};

		var checkElements = function checkElements() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal;

			var lazyloadElems = lazysizes.elements;

			if ((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {

				i = 0;

				lowRuns++;

				if (preloadExpand == null) {
					if (!('expand' in lazySizesConfig)) {
						lazySizesConfig.expand = docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370;
					}

					defaultExpand = lazySizesConfig.expand;
					preloadExpand = defaultExpand * lazySizesConfig.expFactor;
				}

				if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
					currentExpand = preloadExpand;
					lowRuns = 0;
				} else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
					currentExpand = defaultExpand;
				} else {
					currentExpand = shrinkExpand;
				}

				for (; i < eLlen; i++) {

					if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
						continue;
					}

					if (!supportScroll) {
						unveilElement(lazyloadElems[i]);continue;
					}

					if (!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)) {
						elemExpand = currentExpand;
					}

					if (beforeExpandVal !== elemExpand) {
						eLvW = innerWidth + elemExpand * hFac;
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesConfig.loadHidden || getCSS(lazyloadElems[i], 'visibility') != 'hidden') && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if (isLoading > 9) {
							break;
						}
					} else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesConfig.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto'))) {
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if (autoLoadElem && !loadedSomething) {
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function switchLoadingClass(e) {
			addClass(e.target, lazySizesConfig.loadedClass);
			removeClass(e.target, lazySizesConfig.loadingClass);
			addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
			triggerEvent(e.target, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function rafSwitchLoadingClass(e) {
			rafedSwitchLoadingClass({ target: e.target });
		};

		var changeIframeSrc = function changeIframeSrc(elem, src) {
			try {
				elem.contentWindow.location.replace(src);
			} catch (e) {
				elem.src = src;
			}
		};

		var handleSources = function handleSources(source) {
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

			if (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) {
				source.setAttribute('media', customMedia);
			}

			if (sourceSrcset) {
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg) {
			var src, srcset, parent, isPicture, event, firesLoad;

			if (!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented) {

				if (sizes) {
					if (isAuto) {
						addClass(elem, lazySizesConfig.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
				src = elem[_getAttribute](lazySizesConfig.srcAttr);

				if (isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || 'src' in elem && (srcset || src || isPicture);

				event = { target: elem };

				if (firesLoad) {
					addRemoveLoadEvents(elem, resetPreloading, true);
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);

					addClass(elem, lazySizesConfig.loadingClass);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if (isPicture) {
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if (srcset) {
					elem.setAttribute('srcset', srcset);
				} else if (src && !isPicture) {
					if (regIframe.test(elem.nodeName)) {
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if (isImg && (srcset || isPicture)) {
					updatePolyfill(elem, { src: src });
				}
			}

			if (elem._lazyRace) {
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesConfig.lazyClass);

			rAF(function () {
				if (!firesLoad || elem.complete && elem.naturalWidth > 1) {
					if (firesLoad) {
						resetPreloading(event);
					} else {
						isLoading--;
					}
					switchLoadingClass(event);
				}
			}, true);
		});

		var unveilElement = function unveilElement(elem) {
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass) && hasClass(elem, lazySizesConfig.lazyClass)) {
				return;
			}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if (isAuto) {
				autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var onload = function onload() {
			if (isCompleted) {
				return;
			}
			if (Date.now() - started < 999) {
				setTimeout(onload, 999);
				return;
			}
			var afterScroll = debounce(function () {
				lazySizesConfig.loadMode = 3;
				throttledCheckElements();
			});

			isCompleted = true;

			lazySizesConfig.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', function () {
				if (lazySizesConfig.loadMode == 3) {
					lazySizesConfig.loadMode = 2;
				}
				afterScroll();
			}, true);
		};

		return {
			_: function _() {
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesConfig.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);
				hFac = lazySizesConfig.hFac;

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				if (window.MutationObserver) {
					new MutationObserver(throttledCheckElements).observe(docElem, { childList: true, subtree: true, attributes: true });
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function (name) {
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if (/d$|^c/.test(document.readyState)) {
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if (lazysizes.elements.length) {
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement
		};
	}();

	var autoSizer = function () {
		var autosizesElems;

		var sizeElement = rAFIt(function (elem, parent, event, width) {
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if (regPicture.test(parent.nodeName || '')) {
				sources = parent.getElementsByTagName('source');
				for (i = 0, len = sources.length; i < len; i++) {
					sources[i].setAttribute('sizes', width);
				}
			}

			if (!event.detail.dataAttr) {
				updatePolyfill(elem, event.detail);
			}
		});
		var getSizeElement = function getSizeElement(elem, dataAttr, width) {
			var event;
			var parent = elem.parentNode;

			if (parent) {
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', { width: width, dataAttr: !!dataAttr });

				if (!event.defaultPrevented) {
					width = event.detail.width;

					if (width && width !== elem._lazysizesWidth) {
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function updateElementsSizes() {
			var i;
			var len = autosizesElems.length;
			if (len) {
				i = 0;

				for (; i < len; i++) {
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function _() {
				autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	}();

	var init = function init() {
		if (!init.i) {
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	lazysizes = {
		cfg: lazySizesConfig,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF
	};

	return lazysizes;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/picturefill/dist/picturefill.js":
/*!******************************************************!*\
  !*** ./node_modules/picturefill/dist/picturefill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
(function (window) {
	/*jshint eqnull:true */
	var ua = navigator.userAgent;

	if (window.HTMLPictureElement && /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) {
		addEventListener("resize", function () {
			var timer;

			var dummySrc = document.createElement("source");

			var fixRespimg = function fixRespimg(img) {
				var source, sizes;
				var picture = img.parentNode;

				if (picture.nodeName.toUpperCase() === "PICTURE") {
					source = dummySrc.cloneNode();

					picture.insertBefore(source, picture.firstElementChild);
					setTimeout(function () {
						picture.removeChild(source);
					});
				} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
					img._pfLastSize = img.offsetWidth;
					sizes = img.sizes;
					img.sizes += ",100vw";
					setTimeout(function () {
						img.sizes = sizes;
					});
				}
			};

			var findPictureImgs = function findPictureImgs() {
				var i;
				var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
				for (i = 0; i < imgs.length; i++) {
					fixRespimg(imgs[i]);
				}
			};
			var onResize = function onResize() {
				clearTimeout(timer);
				timer = setTimeout(findPictureImgs, 99);
			};
			var mq = window.matchMedia && matchMedia("(orientation: landscape)");
			var init = function init() {
				onResize();

				if (mq && mq.addListener) {
					mq.addListener(onResize);
				}
			};

			dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

			if (/^[c|i]|d$/.test(document.readyState || "")) {
				init();
			} else {
				document.addEventListener("DOMContentLoaded", init);
			}

			return onResize;
		}());
	}
})(window);

/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */

(function (window, document, undefined) {
	// Enable strict mode
	"use strict";

	// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)

	document.createElement("picture");

	var warn, eminpx, alwaysCheckWDescriptor, evalId;
	// local object for method references and testing exposure
	var pf = {};
	var isSupportTestReady = false;
	var noop = function noop() {};
	var image = document.createElement("img");
	var getImgAttr = image.getAttribute;
	var setImgAttr = image.setAttribute;
	var removeImgAttr = image.removeAttribute;
	var docElem = document.documentElement;
	var types = {};
	var cfg = {
		//resource selection:
		algorithm: ""
	};
	var srcAttr = "data-pfsrc";
	var srcsetAttr = srcAttr + "set";
	// ua sniffing is done for undetectable img loading features,
	// to do some non crucial perf optimizations
	var ua = navigator.userAgent;
	var supportAbort = /rident/.test(ua) || /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35;
	var curSrcProp = "currentSrc";
	var regWDesc = /\s+\+?\d+(e\d+)?w/;
	var regSize = /(\([^)]+\))?\s*(.+)/;
	var setOptions = window.picturefillCFG;
	/**
  * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
  */
	// baseStyle also used by getEmValue (i.e.: width: 1em is important)
	var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
	var fsCss = "font-size:100%!important;";
	var isVwDirty = true;

	var cssCache = {};
	var sizeLengthCache = {};
	var DPR = window.devicePixelRatio;
	var units = {
		px: 1,
		"in": 96
	};
	var anchor = document.createElement("a");
	/**
  * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
  * @type {boolean}
  */
	var alreadyRun = false;

	// Reusable, non-"g" Regexes

	// (Don't use \s, to avoid matching non-breaking space.)
	var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
	    regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
	    regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
	    regexTrailingCommas = /[,]+$/,
	    regexNonNegativeInteger = /^\d+$/,


	// ( Positive or negative or unsigned integers or decimals, without or without exponents.
	// Must include at least one digit.
	// According to spec tests any decimal point must be followed by a digit.
	// No leading plus sign is allowed.)
	// https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
	regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

	var on = function on(obj, evt, fn, capture) {
		if (obj.addEventListener) {
			obj.addEventListener(evt, fn, capture || false);
		} else if (obj.attachEvent) {
			obj.attachEvent("on" + evt, fn);
		}
	};

	/**
  * simple memoize function:
  */

	var memoize = function memoize(fn) {
		var cache = {};
		return function (input) {
			if (!(input in cache)) {
				cache[input] = fn(input);
			}
			return cache[input];
		};
	};

	// UTILITY FUNCTIONS

	// Manual is faster than RegEx
	// http://jsperf.com/whitespace-character/5
	function isSpace(c) {
		return c === " " || // space
		c === "\t" || // horizontal tab
		c === "\n" || // new line
		c === "\f" || // form feed
		c === "\r"; // carriage return
	}

	/**
  * gets a mediaquery and returns a boolean or gets a css length and returns a number
  * @param css mediaqueries or css length
  * @returns {boolean|number}
  *
  * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
  */
	var evalCSS = function () {

		var regLength = /^([\d\.]+)(em|vw|px)$/;
		var replace = function replace() {
			var args = arguments,
			    index = 0,
			    string = args[0];
			while (++index in args) {
				string = string.replace(args[index], args[++index]);
			}
			return string;
		};

		var buildStr = memoize(function (css) {

			return "return " + replace((css || "").toLowerCase(),
			// interpret `and`
			/\band\b/g, "&&",

			// interpret `,`
			/,/g, "||",

			// interpret `min-` as >=
			/min-([a-z-\s]+):/g, "e.$1>=",

			// interpret `max-` as <=
			/max-([a-z-\s]+):/g, "e.$1<=",

			//calc value
			/calc([^)]+)/g, "($1)",

			// interpret css values
			/(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
			//make eval less evil
			/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, "") + ";";
		});

		return function (css, length) {
			var parsedLength;
			if (!(css in cssCache)) {
				cssCache[css] = false;
				if (length && (parsedLength = css.match(regLength))) {
					cssCache[css] = parsedLength[1] * units[parsedLength[2]];
				} else {
					/*jshint evil:true */
					try {
						cssCache[css] = new Function("e", buildStr(css))(units);
					} catch (e) {}
					/*jshint evil:false */
				}
			}
			return cssCache[css];
		};
	}();

	var setResolution = function setResolution(candidate, sizesattr) {
		if (candidate.w) {
			// h = means height: || descriptor.type === 'h' do not handle yet...
			candidate.cWidth = pf.calcListLength(sizesattr || "100vw");
			candidate.res = candidate.w / candidate.cWidth;
		} else {
			candidate.res = candidate.d;
		}
		return candidate;
	};

	/**
  *
  * @param opt
  */
	var picturefill = function picturefill(opt) {

		if (!isSupportTestReady) {
			return;
		}

		var elements, i, plen;

		var options = opt || {};

		if (options.elements && options.elements.nodeType === 1) {
			if (options.elements.nodeName.toUpperCase() === "IMG") {
				options.elements = [options.elements];
			} else {
				options.context = options.elements;
				options.elements = null;
			}
		}

		elements = options.elements || pf.qsa(options.context || document, options.reevaluate || options.reselect ? pf.sel : pf.selShort);

		if (plen = elements.length) {

			pf.setupRun(options);
			alreadyRun = true;

			// Loop through all elements
			for (i = 0; i < plen; i++) {
				pf.fillImg(elements[i], options);
			}

			pf.teardownRun(options);
		}
	};

	/**
  * outputs a warning for the developer
  * @param {message}
  * @type {Function}
  */
	warn = window.console && console.warn ? function (message) {
		console.warn(message);
	} : noop;

	if (!(curSrcProp in image)) {
		curSrcProp = "src";
	}

	// Add support for standard mime types.
	types["image/jpeg"] = true;
	types["image/gif"] = true;
	types["image/png"] = true;

	function detectTypeSupport(type, typeUri) {
		// based on Modernizr's lossless img-webp test
		// note: asynchronous
		var image = new window.Image();
		image.onerror = function () {
			types[type] = false;
			picturefill();
		};
		image.onload = function () {
			types[type] = image.width === 1;
			picturefill();
		};
		image.src = typeUri;
		return "pending";
	}

	// test svg support
	types["image/svg+xml"] = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");

	/**
  * updates the internal vW property with the current viewport width in px
  */
	function updateMetrics() {

		isVwDirty = false;
		DPR = window.devicePixelRatio;
		cssCache = {};
		sizeLengthCache = {};

		pf.DPR = DPR || 1;

		units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
		units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);

		units.vw = units.width / 100;
		units.vh = units.height / 100;

		evalId = [units.height, units.width, DPR].join("-");

		units.em = pf.getEmValue();
		units.rem = units.em;
	}

	function chooseLowRes(lowerValue, higherValue, dprValue, isCached) {
		var bonusFactor, tooMuch, bonus, meanDensity;

		//experimental
		if (cfg.algorithm === "saveData") {
			if (lowerValue > 2.7) {
				meanDensity = dprValue + 1;
			} else {
				tooMuch = higherValue - dprValue;
				bonusFactor = Math.pow(lowerValue - 0.6, 1.5);

				bonus = tooMuch * bonusFactor;

				if (isCached) {
					bonus += 0.1 * bonusFactor;
				}

				meanDensity = lowerValue + bonus;
			}
		} else {
			meanDensity = dprValue > 1 ? Math.sqrt(lowerValue * higherValue) : lowerValue;
		}

		return meanDensity > dprValue;
	}

	function applyBestCandidate(img) {
		var srcSetCandidates;
		var matchingSet = pf.getSet(img);
		var evaluated = false;
		if (matchingSet !== "pending") {
			evaluated = evalId;
			if (matchingSet) {
				srcSetCandidates = pf.setRes(matchingSet);
				pf.applySetCandidate(srcSetCandidates, img);
			}
		}
		img[pf.ns].evaled = evaluated;
	}

	function ascendingSort(a, b) {
		return a.res - b.res;
	}

	function setSrcToCur(img, src, set) {
		var candidate;
		if (!set && src) {
			set = img[pf.ns].sets;
			set = set && set[set.length - 1];
		}

		candidate = getCandidateForSrc(src, set);

		if (candidate) {
			src = pf.makeUrl(src);
			img[pf.ns].curSrc = src;
			img[pf.ns].curCan = candidate;

			if (!candidate.res) {
				setResolution(candidate, candidate.set.sizes);
			}
		}
		return candidate;
	}

	function getCandidateForSrc(src, set) {
		var i, candidate, candidates;
		if (src && set) {
			candidates = pf.parseSet(set);
			src = pf.makeUrl(src);
			for (i = 0; i < candidates.length; i++) {
				if (src === pf.makeUrl(candidates[i].url)) {
					candidate = candidates[i];
					break;
				}
			}
		}
		return candidate;
	}

	function getAllSourceElements(picture, candidates) {
		var i, len, source, srcset;

		// SPEC mismatch intended for size and perf:
		// actually only source elements preceding the img should be used
		// also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
		var sources = picture.getElementsByTagName("source");

		for (i = 0, len = sources.length; i < len; i++) {
			source = sources[i];
			source[pf.ns] = true;
			srcset = source.getAttribute("srcset");

			// if source does not have a srcset attribute, skip
			if (srcset) {
				candidates.push({
					srcset: srcset,
					media: source.getAttribute("media"),
					type: source.getAttribute("type"),
					sizes: source.getAttribute("sizes")
				});
			}
		}
	}

	/**
  * Srcset Parser
  * By Alex Bell |  MIT License
  *
  * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
  *
  * Based super duper closely on the reference algorithm at:
  * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
  */

	// 1. Let input be the value passed to this algorithm.
	// (TO-DO : Explain what "set" argument is here. Maybe choose a more
	// descriptive & more searchable name.  Since passing the "set" in really has
	// nothing to do with parsing proper, I would prefer this assignment eventually
	// go in an external fn.)
	function parseSrcset(input, set) {

		function collectCharacters(regEx) {
			var chars,
			    match = regEx.exec(input.substring(pos));
			if (match) {
				chars = match[0];
				pos += chars.length;
				return chars;
			}
		}

		var inputLength = input.length,
		    url,
		    descriptors,
		    currentDescriptor,
		    state,
		    c,


		// 2. Let position be a pointer into input, initially pointing at the start
		//    of the string.
		pos = 0,


		// 3. Let candidates be an initially empty source set.
		candidates = [];

		/**
  * Adds descriptor properties to a candidate, pushes to the candidates array
  * @return undefined
  */
		// (Declared outside of the while loop so that it's only created once.
		// (This fn is defined before it is used, in order to pass JSHINT.
		// Unfortunately this breaks the sequencing of the spec comments. :/ )
		function parseDescriptors() {

			// 9. Descriptor parser: Let error be no.
			var pError = false,


			// 10. Let width be absent.
			// 11. Let density be absent.
			// 12. Let future-compat-h be absent. (We're implementing it now as h)
			w,
			    d,
			    h,
			    i,
			    candidate = {},
			    desc,
			    lastChar,
			    value,
			    intVal,
			    floatVal;

			// 13. For each descriptor in descriptors, run the appropriate set of steps
			// from the following list:
			for (i = 0; i < descriptors.length; i++) {
				desc = descriptors[i];

				lastChar = desc[desc.length - 1];
				value = desc.substring(0, desc.length - 1);
				intVal = parseInt(value, 10);
				floatVal = parseFloat(value);

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0077 LATIN SMALL LETTER W character
				if (regexNonNegativeInteger.test(value) && lastChar === "w") {

					// If width and density are not both absent, then let error be yes.
					if (w || d) {
						pError = true;
					}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes.
					// Otherwise, let width be the result.
					if (intVal === 0) {
						pError = true;
					} else {
						w = intVal;
					}

					// If the descriptor consists of a valid floating-point number followed by
					// a U+0078 LATIN SMALL LETTER X character
				} else if (regexFloatingPoint.test(value) && lastChar === "x") {

					// If width, density and future-compat-h are not all absent, then let error
					// be yes.
					if (w || d || h) {
						pError = true;
					}

					// Apply the rules for parsing floating-point number values to the descriptor.
					// If the result is less than zero, let error be yes. Otherwise, let density
					// be the result.
					if (floatVal < 0) {
						pError = true;
					} else {
						d = floatVal;
					}

					// If the descriptor consists of a valid non-negative integer followed by
					// a U+0068 LATIN SMALL LETTER H character
				} else if (regexNonNegativeInteger.test(value) && lastChar === "h") {

					// If height and density are not both absent, then let error be yes.
					if (h || d) {
						pError = true;
					}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes. Otherwise, let future-compat-h
					// be the result.
					if (intVal === 0) {
						pError = true;
					} else {
						h = intVal;
					}

					// Anything else, Let error be yes.
				} else {
					pError = true;
				}
			} // (close step 13 for loop)

			// 15. If error is still no, then append a new image source to candidates whose
			// URL is url, associated with a width width if not absent and a pixel
			// density density if not absent. Otherwise, there is a parse error.
			if (!pError) {
				candidate.url = url;

				if (w) {
					candidate.w = w;
				}
				if (d) {
					candidate.d = d;
				}
				if (h) {
					candidate.h = h;
				}
				if (!h && !d && !w) {
					candidate.d = 1;
				}
				if (candidate.d === 1) {
					set.has1x = true;
				}
				candidate.set = set;

				candidates.push(candidate);
			}
		} // (close parseDescriptors fn)

		/**
  * Tokenizes descriptor properties prior to parsing
  * Returns undefined.
  * (Again, this fn is defined before it is used, in order to pass JSHINT.
  * Unfortunately this breaks the logical sequencing of the spec comments. :/ )
  */
		function tokenize() {

			// 8.1. Descriptor tokeniser: Skip whitespace
			collectCharacters(regexLeadingSpaces);

			// 8.2. Let current descriptor be the empty string.
			currentDescriptor = "";

			// 8.3. Let state be in descriptor.
			state = "in descriptor";

			while (true) {

				// 8.4. Let c be the character at position.
				c = input.charAt(pos);

				//  Do the following depending on the value of state.
				//  For the purpose of this step, "EOF" is a special character representing
				//  that position is past the end of input.

				// In descriptor
				if (state === "in descriptor") {
					// Do the following, depending on the value of c:

					// Space character
					// If current descriptor is not empty, append current descriptor to
					// descriptors and let current descriptor be the empty string.
					// Set state to after descriptor.
					if (isSpace(c)) {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
							currentDescriptor = "";
							state = "after descriptor";
						}

						// U+002C COMMA (,)
						// Advance position to the next character in input. If current descriptor
						// is not empty, append current descriptor to descriptors. Jump to the step
						// labeled descriptor parser.
					} else if (c === ",") {
						pos += 1;
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

						// U+0028 LEFT PARENTHESIS (()
						// Append c to current descriptor. Set state to in parens.
					} else if (c === "(") {
						currentDescriptor = currentDescriptor + c;
						state = "in parens";

						// EOF
						// If current descriptor is not empty, append current descriptor to
						// descriptors. Jump to the step labeled descriptor parser.
					} else if (c === "") {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

						// Anything else
						// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}
					// (end "in descriptor"

					// In parens
				} else if (state === "in parens") {

					// U+0029 RIGHT PARENTHESIS ())
					// Append c to current descriptor. Set state to in descriptor.
					if (c === ")") {
						currentDescriptor = currentDescriptor + c;
						state = "in descriptor";

						// EOF
						// Append current descriptor to descriptors. Jump to the step labeled
						// descriptor parser.
					} else if (c === "") {
						descriptors.push(currentDescriptor);
						parseDescriptors();
						return;

						// Anything else
						// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}

					// After descriptor
				} else if (state === "after descriptor") {

					// Do the following, depending on the value of c:
					// Space character: Stay in this state.
					if (isSpace(c)) {

						// EOF: Jump to the step labeled descriptor parser.
					} else if (c === "") {
						parseDescriptors();
						return;

						// Anything else
						// Set state to in descriptor. Set position to the previous character in input.
					} else {
						state = "in descriptor";
						pos -= 1;
					}
				}

				// Advance position to the next character in input.
				pos += 1;

				// Repeat this step.
			} // (close while true loop)
		}

		// 4. Splitting loop: Collect a sequence of characters that are space
		//    characters or U+002C COMMA characters. If any U+002C COMMA characters
		//    were collected, that is a parse error.
		while (true) {
			collectCharacters(regexLeadingCommasOrSpaces);

			// 5. If position is past the end of input, return candidates and abort these steps.
			if (pos >= inputLength) {
				return candidates; // (we're done, this is the sole return path)
			}

			// 6. Collect a sequence of characters that are not space characters,
			//    and let that be url.
			url = collectCharacters(regexLeadingNotSpaces);

			// 7. Let descriptors be a new empty list.
			descriptors = [];

			// 8. If url ends with a U+002C COMMA character (,), follow these substeps:
			//		(1). Remove all trailing U+002C COMMA characters from url. If this removed
			//         more than one character, that is a parse error.
			if (url.slice(-1) === ",") {
				url = url.replace(regexTrailingCommas, "");
				// (Jump ahead to step 9 to skip tokenization and just push the candidate).
				parseDescriptors();

				//	Otherwise, follow these substeps:
			} else {
				tokenize();
			} // (close else of step 8)

			// 16. Return to the step labeled splitting loop.
		} // (Close of big while loop.)
	}

	/*
  * Sizes Parser
  *
  * By Alex Bell |  MIT License
  *
  * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
  *
  * Reference algorithm at:
  * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
  *
  * Most comments are copied in directly from the spec
  * (except for comments in parens).
  *
  * Grammar is:
  * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
  * <source-size> = <media-condition> <source-size-value>
  * <source-size-value> = <length>
  * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
  *
  * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
  * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
  *
  * Returns the first valid <css-length> with a media condition that evaluates to true,
  * or "100vw" if all valid media conditions evaluate to false.
  *
  */

	function parseSizes(strValue) {

		// (Percentage CSS lengths are not allowed in this case, to avoid confusion:
		// https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
		// CSS allows a single optional plus or minus sign:
		// http://www.w3.org/TR/CSS2/syndata.html#numbers
		// CSS is ASCII case-insensitive:
		// http://www.w3.org/TR/CSS2/syndata.html#characters )
		// Spec allows exponential notation for <number> type:
		// http://dev.w3.org/csswg/css-values/#numbers
		var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;

		// (This is a quick and lenient test. Because of optional unlimited-depth internal
		// grouping parens and strict spacing rules, this could get very complicated.)
		var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

		var i;
		var unparsedSizesList;
		var unparsedSizesListLength;
		var unparsedSize;
		var lastComponentValue;
		var size;

		// UTILITY FUNCTIONS

		//  (Toy CSS parser. The goals here are:
		//  1) expansive test coverage without the weight of a full CSS parser.
		//  2) Avoiding regex wherever convenient.
		//  Quick tests: http://jsfiddle.net/gtntL4gr/3/
		//  Returns an array of arrays.)
		function parseComponentValues(str) {
			var chrctr;
			var component = "";
			var componentArray = [];
			var listArray = [];
			var parenDepth = 0;
			var pos = 0;
			var inComment = false;

			function pushComponent() {
				if (component) {
					componentArray.push(component);
					component = "";
				}
			}

			function pushComponentArray() {
				if (componentArray[0]) {
					listArray.push(componentArray);
					componentArray = [];
				}
			}

			// (Loop forwards from the beginning of the string.)
			while (true) {
				chrctr = str.charAt(pos);

				if (chrctr === "") {
					// ( End of string reached.)
					pushComponent();
					pushComponentArray();
					return listArray;
				} else if (inComment) {
					if (chrctr === "*" && str[pos + 1] === "/") {
						// (At end of a comment.)
						inComment = false;
						pos += 2;
						pushComponent();
						continue;
					} else {
						pos += 1; // (Skip all characters inside comments.)
						continue;
					}
				} else if (isSpace(chrctr)) {
					// (If previous character in loop was also a space, or if
					// at the beginning of the string, do not add space char to
					// component.)
					if (str.charAt(pos - 1) && isSpace(str.charAt(pos - 1)) || !component) {
						pos += 1;
						continue;
					} else if (parenDepth === 0) {
						pushComponent();
						pos += 1;
						continue;
					} else {
						// (Replace any space character with a plain space for legibility.)
						chrctr = " ";
					}
				} else if (chrctr === "(") {
					parenDepth += 1;
				} else if (chrctr === ")") {
					parenDepth -= 1;
				} else if (chrctr === ",") {
					pushComponent();
					pushComponentArray();
					pos += 1;
					continue;
				} else if (chrctr === "/" && str.charAt(pos + 1) === "*") {
					inComment = true;
					pos += 2;
					continue;
				}

				component = component + chrctr;
				pos += 1;
			}
		}

		function isValidNonNegativeSourceSizeValue(s) {
			if (regexCssLengthWithUnits.test(s) && parseFloat(s) >= 0) {
				return true;
			}
			if (regexCssCalc.test(s)) {
				return true;
			}
			// ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
			// "-0 is equivalent to 0 and is not a negative number." which means that
			// unitless zero and unitless negative zero must be accepted as special cases.)
			if (s === "0" || s === "-0" || s === "+0") {
				return true;
			}
			return false;
		}

		// When asked to parse a sizes attribute from an element, parse a
		// comma-separated list of component values from the value of the element's
		// sizes attribute (or the empty string, if the attribute is absent), and let
		// unparsed sizes list be the result.
		// http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values

		unparsedSizesList = parseComponentValues(strValue);
		unparsedSizesListLength = unparsedSizesList.length;

		// For each unparsed size in unparsed sizes list:
		for (i = 0; i < unparsedSizesListLength; i++) {
			unparsedSize = unparsedSizesList[i];

			// 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
			// ( parseComponentValues() already omits spaces outside of parens. )

			// If unparsed size is now empty, that is a parse error; continue to the next
			// iteration of this algorithm.
			// ( parseComponentValues() won't push an empty array. )

			// 2. If the last component value in unparsed size is a valid non-negative
			// <source-size-value>, let size be its value and remove the component value
			// from unparsed size. Any CSS function other than the calc() function is
			// invalid. Otherwise, there is a parse error; continue to the next iteration
			// of this algorithm.
			// http://dev.w3.org/csswg/css-syntax/#parse-component-value
			lastComponentValue = unparsedSize[unparsedSize.length - 1];

			if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
				size = lastComponentValue;
				unparsedSize.pop();
			} else {
				continue;
			}

			// 3. Remove all consecutive <whitespace-token>s from the end of unparsed
			// size. If unparsed size is now empty, return size and exit this algorithm.
			// If this was not the last item in unparsed sizes list, that is a parse error.
			if (unparsedSize.length === 0) {
				return size;
			}

			// 4. Parse the remaining component values in unparsed size as a
			// <media-condition>. If it does not parse correctly, or it does parse
			// correctly but the <media-condition> evaluates to false, continue to the
			// next iteration of this algorithm.
			// (Parsing all possible compound media conditions in JS is heavy, complicated,
			// and the payoff is unclear. Is there ever an situation where the
			// media condition parses incorrectly but still somehow evaluates to true?
			// Can we just rely on the browser/polyfill to do it?)
			unparsedSize = unparsedSize.join(" ");
			if (!pf.matchesMedia(unparsedSize)) {
				continue;
			}

			// 5. Return size and exit this algorithm.
			return size;
		}

		// If the above algorithm exhausts unparsed sizes list without returning a
		// size value, return 100vw.
		return "100vw";
	}

	// namespace
	pf.ns = ("pf" + new Date().getTime()).substr(0, 9);

	// srcset support test
	pf.supSrcset = "srcset" in image;
	pf.supSizes = "sizes" in image;
	pf.supPicture = !!window.HTMLPictureElement;

	// UC browser does claim to support srcset and picture, but not sizes,
	// this extended test reveals the browser does support nothing
	if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
		(function (image2) {
			image.srcset = "data:,a";
			image2.src = "data:,a";
			pf.supSrcset = image.complete === image2.complete;
			pf.supPicture = pf.supSrcset && pf.supPicture;
		})(document.createElement("img"));
	}

	// Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
	if (pf.supSrcset && !pf.supSizes) {

		(function () {
			var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
			var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
			var img = document.createElement("img");
			var test = function test() {
				var width = img.width;

				if (width === 2) {
					pf.supSizes = true;
				}

				alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;

				isSupportTestReady = true;
				// force async
				setTimeout(picturefill);
			};

			img.onload = test;
			img.onerror = test;
			img.setAttribute("sizes", "9px");

			img.srcset = width1 + " 1w," + width2 + " 9w";
			img.src = width1;
		})();
	} else {
		isSupportTestReady = true;
	}

	// using pf.qsa instead of dom traversing does scale much better,
	// especially on sites mixing responsive and non-responsive images
	pf.selShort = "picture>img,img[srcset]";
	pf.sel = pf.selShort;
	pf.cfg = cfg;

	/**
  * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
  */
	pf.DPR = DPR || 1;
	pf.u = units;

	// container of supported mime types that one might need to qualify before using
	pf.types = types;

	pf.setSize = noop;

	/**
  * Gets a string and returns the absolute URL
  * @param src
  * @returns {String} absolute URL
  */

	pf.makeUrl = memoize(function (src) {
		anchor.href = src;
		return anchor.href;
	});

	/**
  * Gets a DOM element or document and a selctor and returns the found matches
  * Can be extended with jQuery/Sizzle for IE7 support
  * @param context
  * @param sel
  * @returns {NodeList|Array}
  */
	pf.qsa = function (context, sel) {
		return "querySelector" in context ? context.querySelectorAll(sel) : [];
	};

	/**
  * Shortcut method for matchMedia ( for easy overriding in tests )
  * wether native or pf.mMQ is used will be decided lazy on first call
  * @returns {boolean}
  */
	pf.matchesMedia = function () {
		if (window.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches) {
			pf.matchesMedia = function (media) {
				return !media || matchMedia(media).matches;
			};
		} else {
			pf.matchesMedia = pf.mMQ;
		}

		return pf.matchesMedia.apply(this, arguments);
	};

	/**
  * A simplified matchMedia implementation for IE8 and IE9
  * handles only min-width/max-width with px or em values
  * @param media
  * @returns {boolean}
  */
	pf.mMQ = function (media) {
		return media ? evalCSS(media) : true;
	};

	/**
  * Returns the calculated length in css pixel from the given sourceSizeValue
  * http://dev.w3.org/csswg/css-values-3/#length-value
  * intended Spec mismatches:
  * * Does not check for invalid use of CSS functions
  * * Does handle a computed length of 0 the same as a negative and therefore invalid value
  * @param sourceSizeValue
  * @returns {Number}
  */
	pf.calcLength = function (sourceSizeValue) {

		var value = evalCSS(sourceSizeValue, true) || false;
		if (value < 0) {
			value = false;
		}

		return value;
	};

	/**
  * Takes a type string and checks if its supported
  */

	pf.supportsType = function (type) {
		return type ? types[type] : true;
	};

	/**
  * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
  * @param sourceSizeStr
  * @returns {*}
  */
	pf.parseSize = memoize(function (sourceSizeStr) {
		var match = (sourceSizeStr || "").match(regSize);
		return {
			media: match && match[1],
			length: match && match[2]
		};
	});

	pf.parseSet = function (set) {
		if (!set.cands) {
			set.cands = parseSrcset(set.srcset, set);
		}
		return set.cands;
	};

	/**
  * returns 1em in css px for html/body default size
  * function taken from respondjs
  * @returns {*|number}
  */
	pf.getEmValue = function () {
		var body;
		if (!eminpx && (body = document.body)) {
			var div = document.createElement("div"),
			    originalHTMLCSS = docElem.style.cssText,
			    originalBodyCSS = body.style.cssText;

			div.style.cssText = baseStyle;

			// 1em in a media query is the value of the default font size of the browser
			// reset docElem and body to ensure the correct value is returned
			docElem.style.cssText = fsCss;
			body.style.cssText = fsCss;

			body.appendChild(div);
			eminpx = div.offsetWidth;
			body.removeChild(div);

			//also update eminpx before returning
			eminpx = parseFloat(eminpx, 10);

			// restore the original values
			docElem.style.cssText = originalHTMLCSS;
			body.style.cssText = originalBodyCSS;
		}
		return eminpx || 16;
	};

	/**
  * Takes a string of sizes and returns the width in pixels as a number
  */
	pf.calcListLength = function (sourceSizeListStr) {
		// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
		//
		//                           or (min-width:30em) calc(30% - 15px)
		if (!(sourceSizeListStr in sizeLengthCache) || cfg.uT) {
			var winningLength = pf.calcLength(parseSizes(sourceSizeListStr));

			sizeLengthCache[sourceSizeListStr] = !winningLength ? units.width : winningLength;
		}

		return sizeLengthCache[sourceSizeListStr];
	};

	/**
  * Takes a candidate object with a srcset property in the form of url/
  * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
  *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
  *     "images/pic-small.png"
  * Get an array of image candidates in the form of
  *      {url: "/foo/bar.png", resolution: 1}
  * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
  * If sizes is specified, res is calculated
  */
	pf.setRes = function (set) {
		var candidates;
		if (set) {

			candidates = pf.parseSet(set);

			for (var i = 0, len = candidates.length; i < len; i++) {
				setResolution(candidates[i], set.sizes);
			}
		}
		return candidates;
	};

	pf.setRes.res = setResolution;

	pf.applySetCandidate = function (candidates, img) {
		if (!candidates.length) {
			return;
		}
		var candidate, i, j, length, bestCandidate, curSrc, curCan, candidateSrc, abortCurSrc;

		var imageData = img[pf.ns];
		var dpr = pf.DPR;

		curSrc = imageData.curSrc || img[curSrcProp];

		curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

		// if we have a current source, we might either become lazy or give this source some advantage
		if (curCan && curCan.set === candidates[0].set) {

			// if browser can abort image request and the image has a higher pixel density than needed
			// and this image isn't downloaded yet, we skip next part and try to save bandwidth
			abortCurSrc = supportAbort && !img.complete && curCan.res - 0.1 > dpr;

			if (!abortCurSrc) {
				curCan.cached = true;

				// if current candidate is "best", "better" or "okay",
				// set it to bestCandidate
				if (curCan.res >= dpr) {
					bestCandidate = curCan;
				}
			}
		}

		if (!bestCandidate) {

			candidates.sort(ascendingSort);

			length = candidates.length;
			bestCandidate = candidates[length - 1];

			for (i = 0; i < length; i++) {
				candidate = candidates[i];
				if (candidate.res >= dpr) {
					j = i - 1;

					// we have found the perfect candidate,
					// but let's improve this a little bit with some assumptions ;-)
					if (candidates[j] && (abortCurSrc || curSrc !== pf.makeUrl(candidate.url)) && chooseLowRes(candidates[j].res, candidate.res, dpr, candidates[j].cached)) {

						bestCandidate = candidates[j];
					} else {
						bestCandidate = candidate;
					}
					break;
				}
			}
		}

		if (bestCandidate) {

			candidateSrc = pf.makeUrl(bestCandidate.url);

			imageData.curSrc = candidateSrc;
			imageData.curCan = bestCandidate;

			if (candidateSrc !== curSrc) {
				pf.setSrc(img, bestCandidate);
			}
			pf.setSize(img);
		}
	};

	pf.setSrc = function (img, bestCandidate) {
		var origWidth;
		img.src = bestCandidate.url;

		// although this is a specific Safari issue, we don't want to take too much different code paths
		if (bestCandidate.set.type === "image/svg+xml") {
			origWidth = img.style.width;
			img.style.width = img.offsetWidth + 1 + "px";

			// next line only should trigger a repaint
			// if... is only done to trick dead code removal
			if (img.offsetWidth + 1) {
				img.style.width = origWidth;
			}
		}
	};

	pf.getSet = function (img) {
		var i, set, supportsType;
		var match = false;
		var sets = img[pf.ns].sets;

		for (i = 0; i < sets.length && !match; i++) {
			set = sets[i];

			if (!set.srcset || !pf.matchesMedia(set.media) || !(supportsType = pf.supportsType(set.type))) {
				continue;
			}

			if (supportsType === "pending") {
				set = supportsType;
			}

			match = set;
			break;
		}

		return match;
	};

	pf.parseSets = function (element, parent, options) {
		var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

		var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
		var imageData = element[pf.ns];

		if (imageData.src === undefined || options.src) {
			imageData.src = getImgAttr.call(element, "src");
			if (imageData.src) {
				setImgAttr.call(element, srcAttr, imageData.src);
			} else {
				removeImgAttr.call(element, srcAttr);
			}
		}

		if (imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset) {
			srcsetAttribute = getImgAttr.call(element, "srcset");
			imageData.srcset = srcsetAttribute;
			srcsetParsed = true;
		}

		imageData.sets = [];

		if (hasPicture) {
			imageData.pic = true;
			getAllSourceElements(parent, imageData.sets);
		}

		if (imageData.srcset) {
			imageSet = {
				srcset: imageData.srcset,
				sizes: getImgAttr.call(element, "sizes")
			};

			imageData.sets.push(imageSet);

			isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

			// add normal src as candidate, if source has no w descriptor
			if (!isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x) {
				imageSet.srcset += ", " + imageData.src;
				imageSet.cands.push({
					url: imageData.src,
					d: 1,
					set: imageSet
				});
			}
		} else if (imageData.src) {
			imageData.sets.push({
				srcset: imageData.src,
				sizes: null
			});
		}

		imageData.curCan = null;
		imageData.curSrc = undefined;

		// if img has picture or the srcset was removed or has a srcset and does not support srcset at all
		// or has a w descriptor (and does not support sizes) set support to false to evaluate
		imageData.supported = !(hasPicture || imageSet && !pf.supSrcset || isWDescripor && !pf.supSizes);

		if (srcsetParsed && pf.supSrcset && !imageData.supported) {
			if (srcsetAttribute) {
				setImgAttr.call(element, srcsetAttr, srcsetAttribute);
				element.srcset = "";
			} else {
				removeImgAttr.call(element, srcsetAttr);
			}
		}

		if (imageData.supported && !imageData.srcset && (!imageData.src && element.src || element.src !== pf.makeUrl(imageData.src))) {
			if (imageData.src === null) {
				element.removeAttribute("src");
			} else {
				element.src = imageData.src;
			}
		}

		imageData.parsed = true;
	};

	pf.fillImg = function (element, options) {
		var imageData;
		var extreme = options.reselect || options.reevaluate;

		// expando for caching data on the img
		if (!element[pf.ns]) {
			element[pf.ns] = {};
		}

		imageData = element[pf.ns];

		// if the element has already been evaluated, skip it
		// unless `options.reevaluate` is set to true ( this, for example,
		// is set to true when running `picturefill` on `resize` ).
		if (!extreme && imageData.evaled === evalId) {
			return;
		}

		if (!imageData.parsed || options.reevaluate) {
			pf.parseSets(element, element.parentNode, options);
		}

		if (!imageData.supported) {
			applyBestCandidate(element);
		} else {
			imageData.evaled = evalId;
		}
	};

	pf.setupRun = function () {
		if (!alreadyRun || isVwDirty || DPR !== window.devicePixelRatio) {
			updateMetrics();
		}
	};

	// If picture is supported, well, that's awesome.
	if (pf.supPicture) {
		picturefill = noop;
		pf.fillImg = noop;
	} else {

		// Set up picture polyfill by polling the document
		(function () {
			var isDomReady;
			var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

			var run = function run() {
				var readyState = document.readyState || "";

				timerId = setTimeout(run, readyState === "loading" ? 200 : 999);
				if (document.body) {
					pf.fillImgs();
					isDomReady = isDomReady || regReady.test(readyState);
					if (isDomReady) {
						clearTimeout(timerId);
					}
				}
			};

			var timerId = setTimeout(run, document.body ? 9 : 99);

			// Also attach picturefill on resize and readystatechange
			// http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
			var debounce = function debounce(func, wait) {
				var timeout, timestamp;
				var later = function later() {
					var last = new Date() - timestamp;

					if (last < wait) {
						timeout = setTimeout(later, wait - last);
					} else {
						timeout = null;
						func();
					}
				};

				return function () {
					timestamp = new Date();

					if (!timeout) {
						timeout = setTimeout(later, wait);
					}
				};
			};
			var lastClientWidth = docElem.clientHeight;
			var onResize = function onResize() {
				isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
				lastClientWidth = docElem.clientHeight;
				if (isVwDirty) {
					pf.fillImgs();
				}
			};

			on(window, "resize", debounce(onResize, 99));
			on(document, "readystatechange", run);
		})();
	}

	pf.picturefill = picturefill;
	//use this internally for easy monkey patching/performance testing
	pf.fillImgs = picturefill;
	pf.teardownRun = noop;

	/* expose methods for testing */
	picturefill._ = pf;

	window.picturefillCFG = {
		pf: pf,
		push: function push(args) {
			var name = args.shift();
			if (typeof pf[name] === "function") {
				pf[name].apply(pf, args);
			} else {
				cfg[name] = args[0];
				if (alreadyRun) {
					pf.fillImgs({ reselect: true });
				}
			}
		}
	};

	while (setOptions && setOptions.length) {
		window.picturefillCFG.push(setOptions.shift());
	}

	/* expose picturefill */
	window.picturefill = picturefill;

	/* expose picturefill */
	if (( false ? undefined : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
		// CommonJS, just export
		module.exports = picturefill;
	} else if (true) {
		// AMD support
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return picturefill;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	// IE8 evals this sync, so it must be the last thing we do
	if (!pf.supPicture) {
		types["image/webp"] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==");
	}
})(window, document);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/svgxuse/svgxuse.js":
/*!*****************************************!*\
  !*** ./node_modules/svgxuse/svgxuse.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
/*jslint browser: true */
/*global XDomainRequest, MutationObserver, window */
(function () {
    "use strict";

    if (typeof window !== "undefined" && window.addEventListener) {
        var cache = Object.create(null); // holds xhr objects to prevent multiple requests
        var checkUseElems;
        var tid; // timeout id
        var debouncedCheck = function debouncedCheck() {
            clearTimeout(tid);
            tid = setTimeout(checkUseElems, 100);
        };
        var unobserveChanges = function unobserveChanges() {
            return;
        };
        var observeChanges = function observeChanges() {
            var observer;
            window.addEventListener("resize", debouncedCheck, false);
            window.addEventListener("orientationchange", debouncedCheck, false);
            if (window.MutationObserver) {
                observer = new MutationObserver(debouncedCheck);
                observer.observe(document.documentElement, {
                    childList: true,
                    subtree: true,
                    attributes: true
                });
                unobserveChanges = function unobserveChanges() {
                    try {
                        observer.disconnect();
                        window.removeEventListener("resize", debouncedCheck, false);
                        window.removeEventListener("orientationchange", debouncedCheck, false);
                    } catch (ignore) {}
                };
            } else {
                document.documentElement.addEventListener("DOMSubtreeModified", debouncedCheck, false);
                unobserveChanges = function unobserveChanges() {
                    document.documentElement.removeEventListener("DOMSubtreeModified", debouncedCheck, false);
                    window.removeEventListener("resize", debouncedCheck, false);
                    window.removeEventListener("orientationchange", debouncedCheck, false);
                };
            }
        };
        var createRequest = function createRequest(url) {
            // In IE 9, cross origin requests can only be sent using XDomainRequest.
            // XDomainRequest would fail if CORS headers are not set.
            // Therefore, XDomainRequest should only be used with cross origin requests.
            function getOrigin(loc) {
                var a;
                if (loc.protocol !== undefined) {
                    a = loc;
                } else {
                    a = document.createElement("a");
                    a.href = loc;
                }
                return a.protocol.replace(/:/g, "") + a.host;
            }
            var Request;
            var origin;
            var origin2;
            if (window.XMLHttpRequest) {
                Request = new XMLHttpRequest();
                origin = getOrigin(location);
                origin2 = getOrigin(url);
                if (Request.withCredentials === undefined && origin2 !== "" && origin2 !== origin) {
                    Request = XDomainRequest || undefined;
                } else {
                    Request = XMLHttpRequest;
                }
            }
            return Request;
        };
        var xlinkNS = "http://www.w3.org/1999/xlink";
        checkUseElems = function checkUseElems() {
            var base;
            var bcr;
            var fallback = ""; // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.
            var hash;
            var href;
            var i;
            var inProgressCount = 0;
            var isHidden;
            var Request;
            var url;
            var uses;
            var xhr;
            function observeIfDone() {
                // If done with making changes, start watching for chagnes in DOM again
                inProgressCount -= 1;
                if (inProgressCount === 0) {
                    // if all xhrs were resolved
                    unobserveChanges(); // make sure to remove old handlers
                    observeChanges(); // watch for changes to DOM
                }
            }
            function attrUpdateFunc(spec) {
                return function () {
                    if (cache[spec.base] !== true) {
                        spec.useEl.setAttributeNS(xlinkNS, "xlink:href", "#" + spec.hash);
                        if (spec.useEl.hasAttribute("href")) {
                            spec.useEl.setAttribute("href", "#" + spec.hash);
                        }
                    }
                };
            }
            function onloadFunc(xhr) {
                return function () {
                    var body = document.body;
                    var x = document.createElement("x");
                    var svg;
                    xhr.onload = null;
                    x.innerHTML = xhr.responseText;
                    svg = x.getElementsByTagName("svg")[0];
                    if (svg) {
                        svg.setAttribute("aria-hidden", "true");
                        svg.style.position = "absolute";
                        svg.style.width = 0;
                        svg.style.height = 0;
                        svg.style.overflow = "hidden";
                        body.insertBefore(svg, body.firstChild);
                    }
                    observeIfDone();
                };
            }
            function onErrorTimeout(xhr) {
                return function () {
                    xhr.onerror = null;
                    xhr.ontimeout = null;
                    observeIfDone();
                };
            }
            unobserveChanges(); // stop watching for changes to DOM
            // find all use elements
            uses = document.getElementsByTagName("use");
            for (i = 0; i < uses.length; i += 1) {
                try {
                    bcr = uses[i].getBoundingClientRect();
                } catch (ignore) {
                    // failed to get bounding rectangle of the use element
                    bcr = false;
                }
                href = uses[i].getAttribute("href") || uses[i].getAttributeNS(xlinkNS, "href") || uses[i].getAttribute("xlink:href");
                if (href && href.split) {
                    url = href.split("#");
                } else {
                    url = ["", ""];
                }
                base = url[0];
                hash = url[1];
                isHidden = bcr && bcr.left === 0 && bcr.right === 0 && bcr.top === 0 && bcr.bottom === 0;
                if (bcr && bcr.width === 0 && bcr.height === 0 && !isHidden) {
                    // the use element is empty
                    // if there is a reference to an external SVG, try to fetch it
                    // use the optional fallback URL if there is no reference to an external SVG
                    if (fallback && !base.length && hash && !document.getElementById(hash)) {
                        base = fallback;
                    }
                    if (uses[i].hasAttribute("href")) {
                        uses[i].setAttributeNS(xlinkNS, "xlink:href", href);
                    }
                    if (base.length) {
                        // schedule updating xlink:href
                        xhr = cache[base];
                        if (xhr !== true) {
                            // true signifies that prepending the SVG was not required
                            setTimeout(attrUpdateFunc({
                                useEl: uses[i],
                                base: base,
                                hash: hash
                            }), 0);
                        }
                        if (xhr === undefined) {
                            Request = createRequest(base);
                            if (Request !== undefined) {
                                xhr = new Request();
                                cache[base] = xhr;
                                xhr.onload = onloadFunc(xhr);
                                xhr.onerror = onErrorTimeout(xhr);
                                xhr.ontimeout = onErrorTimeout(xhr);
                                xhr.open("GET", base);
                                xhr.send();
                                inProgressCount += 1;
                            }
                        }
                    }
                } else {
                    if (!isHidden) {
                        if (cache[base] === undefined) {
                            // remember this URL if the use element was not empty and no request was sent
                            cache[base] = true;
                        } else if (cache[base].onload) {
                            // if it turns out that prepending the SVG is not necessary,
                            // abort the in-progress xhr.
                            cache[base].abort();
                            delete cache[base].onload;
                            cache[base] = true;
                        }
                    } else if (base.length && cache[base]) {
                        setTimeout(attrUpdateFunc({
                            useEl: uses[i],
                            base: base,
                            hash: hash
                        }), 0);
                    }
                }
            }
            uses = "";
            inProgressCount += 1;
            observeIfDone();
        };
        var _winLoad;
        _winLoad = function winLoad() {
            window.removeEventListener("load", _winLoad, false); // to prevent memory leaks
            tid = setTimeout(checkUseElems, 0);
        };
        if (document.readyState !== "complete") {
            // The load event fires when all resources have finished loading, which allows detecting whether SVG use elements are empty.
            window.addEventListener("load", _winLoad, false);
        } else {
            // No need to add a listener if the document is already loaded, initialize immediately.
            _winLoad();
        }
    }
})();

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
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

/***/ "./src/scripts/vendor.js":
/*!*******************************!*\
  !*** ./src/scripts/vendor.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! picturefill */ "./node_modules/picturefill/dist/picturefill.js");

__webpack_require__(/*! svgxuse */ "./node_modules/svgxuse/svgxuse.js");

__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhenlzaXplcy9sYXp5c2l6ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BpY3R1cmVmaWxsL2Rpc3QvcGljdHVyZWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Z3h1c2Uvc3ZneHVzZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZlbmRvci5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJmYWN0b3J5IiwibGF6eVNpemVzIiwiZG9jdW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwibCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsYXp5c2l6ZXMiLCJsYXp5U2l6ZXNDb25maWciLCJkb2NFbGVtIiwiZG9jdW1lbnRFbGVtZW50IiwiRGF0ZSIsInN1cHBvcnRQaWN0dXJlIiwiSFRNTFBpY3R1cmVFbGVtZW50IiwiX2FkZEV2ZW50TGlzdGVuZXIiLCJfZ2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwicmVnUGljdHVyZSIsImxvYWRFdmVudHMiLCJyZWdDbGFzc0NhY2hlIiwiZm9yRWFjaCIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzQ2xhc3MiLCJlbGUiLCJjbHMiLCJSZWdFeHAiLCJ0ZXN0IiwiYWRkQ2xhc3MiLCJzZXRBdHRyaWJ1dGUiLCJ0cmltIiwicmVtb3ZlQ2xhc3MiLCJyZWciLCJyZXBsYWNlIiwiYWRkUmVtb3ZlTG9hZEV2ZW50cyIsImRvbSIsImZuIiwiYWRkIiwiYWN0aW9uIiwiZXZ0IiwidHJpZ2dlckV2ZW50IiwiZWxlbSIsIm5hbWUiLCJkZXRhaWwiLCJub0J1YmJsZXMiLCJub0NhbmNlbGFibGUiLCJldmVudCIsImNyZWF0ZUV2ZW50IiwiaW5zdGFuY2UiLCJpbml0Q3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwidXBkYXRlUG9seWZpbGwiLCJlbCIsImZ1bGwiLCJwb2x5ZmlsbCIsInBpY3R1cmVmaWxsIiwicGYiLCJzcmMiLCJyZWV2YWx1YXRlIiwiZWxlbWVudHMiLCJnZXRDU1MiLCJzdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRXaWR0aCIsInBhcmVudCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJtaW5TaXplIiwiX2xhenlzaXplc1dpZHRoIiwicGFyZW50Tm9kZSIsInJBRiIsInJ1bm5pbmciLCJ3YWl0aW5nIiwiZmlyc3RGbnMiLCJzZWNvbmRGbnMiLCJmbnMiLCJydW4iLCJydW5GbnMiLCJsZW5ndGgiLCJzaGlmdCIsInJhZkJhdGNoIiwicXVldWUiLCJhcHBseSIsImFyZ3VtZW50cyIsInB1c2giLCJoaWRkZW4iLCJfbHNGbHVzaCIsInJBRkl0Iiwic2ltcGxlIiwidGhhdCIsImFyZ3MiLCJ0aHJvdHRsZSIsImxhc3RUaW1lIiwiZ0RlbGF5IiwidGhyb3R0bGVEZWxheSIsInJJQ1RpbWVvdXQiLCJyaWNUaW1lb3V0Iiwibm93IiwiaWRsZUNhbGxiYWNrIiwidGltZW91dCIsImlzUHJpb3JpdHkiLCJkZWxheSIsImRlYm91bmNlIiwiZnVuYyIsInRpbWVzdGFtcCIsIndhaXQiLCJsYXRlciIsImxhc3QiLCJwcm9wIiwibGF6eVNpemVzRGVmYXVsdHMiLCJsYXp5Q2xhc3MiLCJsb2FkZWRDbGFzcyIsImxvYWRpbmdDbGFzcyIsInByZWxvYWRDbGFzcyIsImVycm9yQ2xhc3MiLCJhdXRvc2l6ZXNDbGFzcyIsInNyY0F0dHIiLCJzcmNzZXRBdHRyIiwic2l6ZXNBdHRyIiwiY3VzdG9tTWVkaWEiLCJpbml0IiwiZXhwRmFjdG9yIiwiaEZhYyIsImxvYWRNb2RlIiwibG9hZEhpZGRlbiIsImxhenlzaXplc0NvbmZpZyIsImxvYWRlciIsInByZWxvYWRFbGVtcyIsImlzQ29tcGxldGVkIiwicmVzZXRQcmVsb2FkaW5nVGltZXIiLCJzdGFydGVkIiwiZUx2VyIsImVsdkgiLCJlTHRvcCIsImVMbGVmdCIsImVMcmlnaHQiLCJlTGJvdHRvbSIsImRlZmF1bHRFeHBhbmQiLCJwcmVsb2FkRXhwYW5kIiwicmVnSW1nIiwicmVnSWZyYW1lIiwic3VwcG9ydFNjcm9sbCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInNocmlua0V4cGFuZCIsImN1cnJlbnRFeHBhbmQiLCJpc0xvYWRpbmciLCJsb3dSdW5zIiwicmVzZXRQcmVsb2FkaW5nIiwiZSIsInRhcmdldCIsImlzTmVzdGVkVmlzaWJsZSIsImVsZW1FeHBhbmQiLCJvdXRlclJlY3QiLCJ2aXNpYmxlIiwiYm9keSIsIm9mZnNldFBhcmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImNoZWNrRWxlbWVudHMiLCJlTGxlbiIsImkiLCJyZWN0IiwiYXV0b0xvYWRFbGVtIiwibG9hZGVkU29tZXRoaW5nIiwiZWxlbU5lZ2F0aXZlRXhwYW5kIiwiZWxlbUV4cGFuZFZhbCIsImJlZm9yZUV4cGFuZFZhbCIsImxhenlsb2FkRWxlbXMiLCJleHBhbmQiLCJjbGllbnRIZWlnaHQiLCJjbGllbnRXaWR0aCIsIl9sYXp5UmFjZSIsInVudmVpbEVsZW1lbnQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwcmVsb2FkQWZ0ZXJMb2FkIiwidGhyb3R0bGVkQ2hlY2tFbGVtZW50cyIsInN3aXRjaExvYWRpbmdDbGFzcyIsInJhZlN3aXRjaExvYWRpbmdDbGFzcyIsInJhZmVkU3dpdGNoTG9hZGluZ0NsYXNzIiwiY2hhbmdlSWZyYW1lU3JjIiwiY29udGVudFdpbmRvdyIsImxvY2F0aW9uIiwiaGFuZGxlU291cmNlcyIsInNvdXJjZSIsInNvdXJjZVNyY3NldCIsImxhenlVbnZlaWwiLCJpc0F1dG8iLCJzaXplcyIsImlzSW1nIiwic3Jjc2V0IiwiaXNQaWN0dXJlIiwiZmlyZXNMb2FkIiwiZGVmYXVsdFByZXZlbnRlZCIsIm5vZGVOYW1lIiwiY2xlYXJUaW1lb3V0IiwiY2FsbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY29tcGxldGUiLCJuYXR1cmFsV2lkdGgiLCJhdXRvU2l6ZXIiLCJ1cGRhdGVFbGVtIiwib25sb2FkIiwiYWZ0ZXJTY3JvbGwiLCJfIiwiTXV0YXRpb25PYnNlcnZlciIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiYXR0cmlidXRlcyIsInNldEludGVydmFsIiwicmVhZHlTdGF0ZSIsImNoZWNrRWxlbXMiLCJ1bnZlaWwiLCJhdXRvc2l6ZXNFbGVtcyIsInNpemVFbGVtZW50Iiwic291cmNlcyIsImxlbiIsImRhdGFBdHRyIiwiZ2V0U2l6ZUVsZW1lbnQiLCJ1cGRhdGVFbGVtZW50c1NpemVzIiwiZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyIsImNmZyIsInVQIiwiYUMiLCJyQyIsImhDIiwiZmlyZSIsImdXIiwidWEiLCJtYXRjaCIsIiQxIiwidGltZXIiLCJkdW1teVNyYyIsImNyZWF0ZUVsZW1lbnQiLCJmaXhSZXNwaW1nIiwiaW1nIiwicGljdHVyZSIsInRvVXBwZXJDYXNlIiwiY2xvbmVOb2RlIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJyZW1vdmVDaGlsZCIsIl9wZkxhc3RTaXplIiwiZmluZFBpY3R1cmVJbWdzIiwiaW1ncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvblJlc2l6ZSIsIm1xIiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwidW5kZWZpbmVkIiwid2FybiIsImVtaW5weCIsImFsd2F5c0NoZWNrV0Rlc2NyaXB0b3IiLCJldmFsSWQiLCJpc1N1cHBvcnRUZXN0UmVhZHkiLCJub29wIiwiaW1hZ2UiLCJnZXRJbWdBdHRyIiwiZ2V0QXR0cmlidXRlIiwic2V0SW1nQXR0ciIsInJlbW92ZUltZ0F0dHIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0eXBlcyIsImFsZ29yaXRobSIsInN1cHBvcnRBYm9ydCIsImN1clNyY1Byb3AiLCJyZWdXRGVzYyIsInJlZ1NpemUiLCJzZXRPcHRpb25zIiwicGljdHVyZWZpbGxDRkciLCJiYXNlU3R5bGUiLCJmc0NzcyIsImlzVndEaXJ0eSIsImNzc0NhY2hlIiwic2l6ZUxlbmd0aENhY2hlIiwiRFBSIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInVuaXRzIiwicHgiLCJhbmNob3IiLCJhbHJlYWR5UnVuIiwicmVnZXhMZWFkaW5nU3BhY2VzIiwicmVnZXhMZWFkaW5nQ29tbWFzT3JTcGFjZXMiLCJyZWdleExlYWRpbmdOb3RTcGFjZXMiLCJyZWdleFRyYWlsaW5nQ29tbWFzIiwicmVnZXhOb25OZWdhdGl2ZUludGVnZXIiLCJyZWdleEZsb2F0aW5nUG9pbnQiLCJvbiIsIm9iaiIsImNhcHR1cmUiLCJhdHRhY2hFdmVudCIsIm1lbW9pemUiLCJjYWNoZSIsImlucHV0IiwiaXNTcGFjZSIsImMiLCJldmFsQ1NTIiwicmVnTGVuZ3RoIiwiaW5kZXgiLCJzdHJpbmciLCJidWlsZFN0ciIsImNzcyIsInRvTG93ZXJDYXNlIiwicGFyc2VkTGVuZ3RoIiwiRnVuY3Rpb24iLCJzZXRSZXNvbHV0aW9uIiwiY2FuZGlkYXRlIiwic2l6ZXNhdHRyIiwidyIsImNXaWR0aCIsImNhbGNMaXN0TGVuZ3RoIiwicmVzIiwiZCIsIm9wdCIsInBsZW4iLCJvcHRpb25zIiwibm9kZVR5cGUiLCJjb250ZXh0IiwicXNhIiwicmVzZWxlY3QiLCJzZWwiLCJzZWxTaG9ydCIsInNldHVwUnVuIiwiZmlsbEltZyIsInRlYXJkb3duUnVuIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJkZXRlY3RUeXBlU3VwcG9ydCIsInR5cGUiLCJ0eXBlVXJpIiwiSW1hZ2UiLCJvbmVycm9yIiwiaW1wbGVtZW50YXRpb24iLCJoYXNGZWF0dXJlIiwidXBkYXRlTWV0cmljcyIsIk1hdGgiLCJtYXgiLCJoZWlnaHQiLCJ2dyIsInZoIiwiam9pbiIsImVtIiwiZ2V0RW1WYWx1ZSIsInJlbSIsImNob29zZUxvd1JlcyIsImxvd2VyVmFsdWUiLCJoaWdoZXJWYWx1ZSIsImRwclZhbHVlIiwiaXNDYWNoZWQiLCJib251c0ZhY3RvciIsInRvb011Y2giLCJib251cyIsIm1lYW5EZW5zaXR5IiwicG93Iiwic3FydCIsImFwcGx5QmVzdENhbmRpZGF0ZSIsInNyY1NldENhbmRpZGF0ZXMiLCJtYXRjaGluZ1NldCIsImdldFNldCIsImV2YWx1YXRlZCIsInNldFJlcyIsImFwcGx5U2V0Q2FuZGlkYXRlIiwibnMiLCJldmFsZWQiLCJhc2NlbmRpbmdTb3J0IiwiYSIsImIiLCJzZXRTcmNUb0N1ciIsInNldCIsInNldHMiLCJnZXRDYW5kaWRhdGVGb3JTcmMiLCJtYWtlVXJsIiwiY3VyU3JjIiwiY3VyQ2FuIiwiY2FuZGlkYXRlcyIsInBhcnNlU2V0IiwidXJsIiwiZ2V0QWxsU291cmNlRWxlbWVudHMiLCJtZWRpYSIsInBhcnNlU3Jjc2V0IiwiY29sbGVjdENoYXJhY3RlcnMiLCJyZWdFeCIsImNoYXJzIiwiZXhlYyIsInN1YnN0cmluZyIsInBvcyIsImlucHV0TGVuZ3RoIiwiZGVzY3JpcHRvcnMiLCJjdXJyZW50RGVzY3JpcHRvciIsInN0YXRlIiwicGFyc2VEZXNjcmlwdG9ycyIsInBFcnJvciIsImgiLCJkZXNjIiwibGFzdENoYXIiLCJ2YWx1ZSIsImludFZhbCIsImZsb2F0VmFsIiwicGFyc2VJbnQiLCJwYXJzZUZsb2F0IiwiaGFzMXgiLCJ0b2tlbml6ZSIsImNoYXJBdCIsInNsaWNlIiwicGFyc2VTaXplcyIsInN0clZhbHVlIiwicmVnZXhDc3NMZW5ndGhXaXRoVW5pdHMiLCJyZWdleENzc0NhbGMiLCJ1bnBhcnNlZFNpemVzTGlzdCIsInVucGFyc2VkU2l6ZXNMaXN0TGVuZ3RoIiwidW5wYXJzZWRTaXplIiwibGFzdENvbXBvbmVudFZhbHVlIiwic2l6ZSIsInBhcnNlQ29tcG9uZW50VmFsdWVzIiwic3RyIiwiY2hyY3RyIiwiY29tcG9uZW50IiwiY29tcG9uZW50QXJyYXkiLCJsaXN0QXJyYXkiLCJwYXJlbkRlcHRoIiwiaW5Db21tZW50IiwicHVzaENvbXBvbmVudCIsInB1c2hDb21wb25lbnRBcnJheSIsImlzVmFsaWROb25OZWdhdGl2ZVNvdXJjZVNpemVWYWx1ZSIsInMiLCJwb3AiLCJtYXRjaGVzTWVkaWEiLCJnZXRUaW1lIiwic3Vic3RyIiwic3VwU3Jjc2V0Iiwic3VwU2l6ZXMiLCJzdXBQaWN0dXJlIiwiaW1hZ2UyIiwid2lkdGgyIiwid2lkdGgxIiwidSIsInNldFNpemUiLCJocmVmIiwibWF0Y2hlcyIsIm1NUSIsImNhbGNMZW5ndGgiLCJzb3VyY2VTaXplVmFsdWUiLCJzdXBwb3J0c1R5cGUiLCJwYXJzZVNpemUiLCJzb3VyY2VTaXplU3RyIiwiY2FuZHMiLCJkaXYiLCJvcmlnaW5hbEhUTUxDU1MiLCJjc3NUZXh0Iiwib3JpZ2luYWxCb2R5Q1NTIiwiYXBwZW5kQ2hpbGQiLCJzb3VyY2VTaXplTGlzdFN0ciIsInVUIiwid2lubmluZ0xlbmd0aCIsImoiLCJiZXN0Q2FuZGlkYXRlIiwiY2FuZGlkYXRlU3JjIiwiYWJvcnRDdXJTcmMiLCJpbWFnZURhdGEiLCJkcHIiLCJjYWNoZWQiLCJzb3J0Iiwic2V0U3JjIiwib3JpZ1dpZHRoIiwicGFyc2VTZXRzIiwiZWxlbWVudCIsInNyY3NldEF0dHJpYnV0ZSIsImltYWdlU2V0IiwiaXNXRGVzY3JpcG9yIiwic3Jjc2V0UGFyc2VkIiwiaGFzUGljdHVyZSIsInBpYyIsInN1cHBvcnRlZCIsInBhcnNlZCIsImV4dHJlbWUiLCJpc0RvbVJlYWR5IiwicmVnUmVhZHkiLCJ0aW1lcklkIiwiZmlsbEltZ3MiLCJsYXN0Q2xpZW50V2lkdGgiLCJkZWZpbmUiLCJPYmplY3QiLCJjcmVhdGUiLCJjaGVja1VzZUVsZW1zIiwidGlkIiwiZGVib3VuY2VkQ2hlY2siLCJ1bm9ic2VydmVDaGFuZ2VzIiwib2JzZXJ2ZUNoYW5nZXMiLCJvYnNlcnZlciIsImRpc2Nvbm5lY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaWdub3JlIiwiY3JlYXRlUmVxdWVzdCIsImdldE9yaWdpbiIsImxvYyIsInByb3RvY29sIiwiaG9zdCIsIlJlcXVlc3QiLCJvcmlnaW4iLCJvcmlnaW4yIiwiWE1MSHR0cFJlcXVlc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJYRG9tYWluUmVxdWVzdCIsInhsaW5rTlMiLCJiYXNlIiwiYmNyIiwiZmFsbGJhY2siLCJoYXNoIiwiaW5Qcm9ncmVzc0NvdW50IiwiaXNIaWRkZW4iLCJ1c2VzIiwieGhyIiwib2JzZXJ2ZUlmRG9uZSIsImF0dHJVcGRhdGVGdW5jIiwic3BlYyIsInVzZUVsIiwic2V0QXR0cmlidXRlTlMiLCJoYXNBdHRyaWJ1dGUiLCJvbmxvYWRGdW5jIiwieCIsInN2ZyIsImlubmVySFRNTCIsInJlc3BvbnNlVGV4dCIsInBvc2l0aW9uIiwib3ZlcmZsb3ciLCJmaXJzdENoaWxkIiwib25FcnJvclRpbWVvdXQiLCJvbnRpbWVvdXQiLCJnZXRBdHRyaWJ1dGVOUyIsInNwbGl0IiwiZ2V0RWxlbWVudEJ5SWQiLCJvcGVuIiwic2VuZCIsImFib3J0Iiwid2luTG9hZCIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7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QUFDdEJ6RCxTQUFPMEQsY0FBUCxDQUFzQmppQixNQUF0QixFQUE4QixRQUE5QixFQUF3QztBQUN2Q2tpQixlQUFZLElBRDJCO0FBRXZDQyxRQUFLLGVBQVc7QUFDZixXQUFPbmlCLE9BQU9FLENBQWQ7QUFDQTtBQUpzQyxHQUF4QztBQU1BcWUsU0FBTzBELGNBQVAsQ0FBc0JqaUIsTUFBdEIsRUFBOEIsSUFBOUIsRUFBb0M7QUFDbkNraUIsZUFBWSxJQUR1QjtBQUVuQ0MsUUFBSyxlQUFXO0FBQ2YsV0FBT25pQixPQUFPb0ssQ0FBZDtBQUNBO0FBSmtDLEdBQXBDO0FBTUFwSyxTQUFPNmhCLGVBQVAsR0FBeUIsQ0FBekI7QUFDQTtBQUNELFFBQU83aEIsTUFBUDtBQUNBLENBckJELEM7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBQ0E7O0FBQ0EsOEUiLCJmaWxlIjoidmVuZG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy92ZW5kb3IuanNcIik7XG4iLCIoZnVuY3Rpb24od2luZG93LCBmYWN0b3J5KSB7XG5cdHZhciBsYXp5U2l6ZXMgPSBmYWN0b3J5KHdpbmRvdywgd2luZG93LmRvY3VtZW50KTtcblx0d2luZG93LmxhenlTaXplcyA9IGxhenlTaXplcztcblx0aWYodHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyl7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBsYXp5U2l6ZXM7XG5cdH1cbn0od2luZG93LCBmdW5jdGlvbiBsKHdpbmRvdywgZG9jdW1lbnQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHQvKmpzaGludCBlcW51bGw6dHJ1ZSAqL1xuXHRpZighZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSl7cmV0dXJuO31cblxuXHR2YXIgbGF6eXNpemVzLCBsYXp5U2l6ZXNDb25maWc7XG5cblx0dmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblx0dmFyIERhdGUgPSB3aW5kb3cuRGF0ZTtcblxuXHR2YXIgc3VwcG9ydFBpY3R1cmUgPSB3aW5kb3cuSFRNTFBpY3R1cmVFbGVtZW50O1xuXG5cdHZhciBfYWRkRXZlbnRMaXN0ZW5lciA9ICdhZGRFdmVudExpc3RlbmVyJztcblxuXHR2YXIgX2dldEF0dHJpYnV0ZSA9ICdnZXRBdHRyaWJ1dGUnO1xuXG5cdHZhciBhZGRFdmVudExpc3RlbmVyID0gd2luZG93W19hZGRFdmVudExpc3RlbmVyXTtcblxuXHR2YXIgc2V0VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0O1xuXG5cdHZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQ7XG5cblx0dmFyIHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjaztcblxuXHR2YXIgcmVnUGljdHVyZSA9IC9ecGljdHVyZSQvaTtcblxuXHR2YXIgbG9hZEV2ZW50cyA9IFsnbG9hZCcsICdlcnJvcicsICdsYXp5aW5jbHVkZWQnLCAnX2xhenlsb2FkZWQnXTtcblxuXHR2YXIgcmVnQ2xhc3NDYWNoZSA9IHt9O1xuXG5cdHZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG5cblx0dmFyIGhhc0NsYXNzID0gZnVuY3Rpb24oZWxlLCBjbHMpIHtcblx0XHRpZighcmVnQ2xhc3NDYWNoZVtjbHNdKXtcblx0XHRcdHJlZ0NsYXNzQ2FjaGVbY2xzXSA9IG5ldyBSZWdFeHAoJyhcXFxcc3xeKScrY2xzKycoXFxcXHN8JCknKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlZ0NsYXNzQ2FjaGVbY2xzXS50ZXN0KGVsZVtfZ2V0QXR0cmlidXRlXSgnY2xhc3MnKSB8fCAnJykgJiYgcmVnQ2xhc3NDYWNoZVtjbHNdO1xuXHR9O1xuXG5cdHZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZSwgY2xzKSB7XG5cdFx0aWYgKCFoYXNDbGFzcyhlbGUsIGNscykpe1xuXHRcdFx0ZWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlW19nZXRBdHRyaWJ1dGVdKCdjbGFzcycpIHx8ICcnKS50cmltKCkgKyAnICcgKyBjbHMpO1xuXHRcdH1cblx0fTtcblxuXHR2YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbGUsIGNscykge1xuXHRcdHZhciByZWc7XG5cdFx0aWYgKChyZWcgPSBoYXNDbGFzcyhlbGUsY2xzKSkpIHtcblx0XHRcdGVsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGVsZVtfZ2V0QXR0cmlidXRlXSgnY2xhc3MnKSB8fCAnJykucmVwbGFjZShyZWcsICcgJykpO1xuXHRcdH1cblx0fTtcblxuXHR2YXIgYWRkUmVtb3ZlTG9hZEV2ZW50cyA9IGZ1bmN0aW9uKGRvbSwgZm4sIGFkZCl7XG5cdFx0dmFyIGFjdGlvbiA9IGFkZCA/IF9hZGRFdmVudExpc3RlbmVyIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuXHRcdGlmKGFkZCl7XG5cdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGRvbSwgZm4pO1xuXHRcdH1cblx0XHRsb2FkRXZlbnRzLmZvckVhY2goZnVuY3Rpb24oZXZ0KXtcblx0XHRcdGRvbVthY3Rpb25dKGV2dCwgZm4pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHZhciB0cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbihlbGVtLCBuYW1lLCBkZXRhaWwsIG5vQnViYmxlcywgbm9DYW5jZWxhYmxlKXtcblx0XHR2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcblxuXHRcdGlmKCFkZXRhaWwpe1xuXHRcdFx0ZGV0YWlsID0ge307XG5cdFx0fVxuXG5cdFx0ZGV0YWlsLmluc3RhbmNlID0gbGF6eXNpemVzO1xuXG5cdFx0ZXZlbnQuaW5pdEN1c3RvbUV2ZW50KG5hbWUsICFub0J1YmJsZXMsICFub0NhbmNlbGFibGUsIGRldGFpbCk7XG5cblx0XHRlbGVtLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHRcdHJldHVybiBldmVudDtcblx0fTtcblxuXHR2YXIgdXBkYXRlUG9seWZpbGwgPSBmdW5jdGlvbiAoZWwsIGZ1bGwpe1xuXHRcdHZhciBwb2x5ZmlsbDtcblx0XHRpZiggIXN1cHBvcnRQaWN0dXJlICYmICggcG9seWZpbGwgPSAod2luZG93LnBpY3R1cmVmaWxsIHx8IGxhenlTaXplc0NvbmZpZy5wZikgKSApe1xuXHRcdFx0aWYoZnVsbCAmJiBmdWxsLnNyYyAmJiAhZWxbX2dldEF0dHJpYnV0ZV0oJ3NyY3NldCcpKXtcblx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBmdWxsLnNyYyk7XG5cdFx0XHR9XG5cdFx0XHRwb2x5ZmlsbCh7cmVldmFsdWF0ZTogdHJ1ZSwgZWxlbWVudHM6IFtlbF19KTtcblx0XHR9IGVsc2UgaWYoZnVsbCAmJiBmdWxsLnNyYyl7XG5cdFx0XHRlbC5zcmMgPSBmdWxsLnNyYztcblx0XHR9XG5cdH07XG5cblx0dmFyIGdldENTUyA9IGZ1bmN0aW9uIChlbGVtLCBzdHlsZSl7XG5cdFx0cmV0dXJuIChnZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpIHx8IHt9KVtzdHlsZV07XG5cdH07XG5cblx0dmFyIGdldFdpZHRoID0gZnVuY3Rpb24oZWxlbSwgcGFyZW50LCB3aWR0aCl7XG5cdFx0d2lkdGggPSB3aWR0aCB8fCBlbGVtLm9mZnNldFdpZHRoO1xuXG5cdFx0d2hpbGUod2lkdGggPCBsYXp5U2l6ZXNDb25maWcubWluU2l6ZSAmJiBwYXJlbnQgJiYgIWVsZW0uX2xhenlzaXplc1dpZHRoKXtcblx0XHRcdHdpZHRoID0gIHBhcmVudC5vZmZzZXRXaWR0aDtcblx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuXHRcdH1cblxuXHRcdHJldHVybiB3aWR0aDtcblx0fTtcblxuXHR2YXIgckFGID0gKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHJ1bm5pbmcsIHdhaXRpbmc7XG5cdFx0dmFyIGZpcnN0Rm5zID0gW107XG5cdFx0dmFyIHNlY29uZEZucyA9IFtdO1xuXHRcdHZhciBmbnMgPSBmaXJzdEZucztcblxuXHRcdHZhciBydW4gPSBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHJ1bkZucyA9IGZucztcblxuXHRcdFx0Zm5zID0gZmlyc3RGbnMubGVuZ3RoID8gc2Vjb25kRm5zIDogZmlyc3RGbnM7XG5cblx0XHRcdHJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0d2FpdGluZyA9IGZhbHNlO1xuXG5cdFx0XHR3aGlsZShydW5GbnMubGVuZ3RoKXtcblx0XHRcdFx0cnVuRm5zLnNoaWZ0KCkoKTtcblx0XHRcdH1cblxuXHRcdFx0cnVubmluZyA9IGZhbHNlO1xuXHRcdH07XG5cblx0XHR2YXIgcmFmQmF0Y2ggPSBmdW5jdGlvbihmbiwgcXVldWUpe1xuXHRcdFx0aWYocnVubmluZyAmJiAhcXVldWUpe1xuXHRcdFx0XHRmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm5zLnB1c2goZm4pO1xuXG5cdFx0XHRcdGlmKCF3YWl0aW5nKXtcblx0XHRcdFx0XHR3YWl0aW5nID0gdHJ1ZTtcblx0XHRcdFx0XHQoZG9jdW1lbnQuaGlkZGVuID8gc2V0VGltZW91dCA6IHJlcXVlc3RBbmltYXRpb25GcmFtZSkocnVuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyYWZCYXRjaC5fbHNGbHVzaCA9IHJ1bjtcblxuXHRcdHJldHVybiByYWZCYXRjaDtcblx0fSkoKTtcblxuXHR2YXIgckFGSXQgPSBmdW5jdGlvbihmbiwgc2ltcGxlKXtcblx0XHRyZXR1cm4gc2ltcGxlID9cblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyQUYoZm4pO1xuXHRcdFx0fSA6XG5cdFx0XHRmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0XHRcdHZhciBhcmdzID0gYXJndW1lbnRzO1xuXHRcdFx0XHRyQUYoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRmbi5hcHBseSh0aGF0LCBhcmdzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0O1xuXHR9O1xuXG5cdHZhciB0aHJvdHRsZSA9IGZ1bmN0aW9uKGZuKXtcblx0XHR2YXIgcnVubmluZztcblx0XHR2YXIgbGFzdFRpbWUgPSAwO1xuXHRcdHZhciBnRGVsYXkgPSBsYXp5U2l6ZXNDb25maWcudGhyb3R0bGVEZWxheTtcblx0XHR2YXIgcklDVGltZW91dCA9IGxhenlTaXplc0NvbmZpZy5yaWNUaW1lb3V0O1xuXHRcdHZhciBydW4gPSBmdW5jdGlvbigpe1xuXHRcdFx0cnVubmluZyA9IGZhbHNlO1xuXHRcdFx0bGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdFx0Zm4oKTtcblx0XHR9O1xuXHRcdHZhciBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHJJQ1RpbWVvdXQgPiA0OSA/XG5cdFx0XHRmdW5jdGlvbigpe1xuXHRcdFx0XHRyZXF1ZXN0SWRsZUNhbGxiYWNrKHJ1biwge3RpbWVvdXQ6IHJJQ1RpbWVvdXR9KTtcblxuXHRcdFx0XHRpZihySUNUaW1lb3V0ICE9PSBsYXp5U2l6ZXNDb25maWcucmljVGltZW91dCl7XG5cdFx0XHRcdFx0cklDVGltZW91dCA9IGxhenlTaXplc0NvbmZpZy5yaWNUaW1lb3V0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IDpcblx0XHRcdHJBRkl0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHNldFRpbWVvdXQocnVuKTtcblx0XHRcdH0sIHRydWUpXG5cdFx0O1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGlzUHJpb3JpdHkpe1xuXHRcdFx0dmFyIGRlbGF5O1xuXG5cdFx0XHRpZigoaXNQcmlvcml0eSA9IGlzUHJpb3JpdHkgPT09IHRydWUpKXtcblx0XHRcdFx0cklDVGltZW91dCA9IDMzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihydW5uaW5nKXtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRydW5uaW5nID0gIHRydWU7XG5cblx0XHRcdGRlbGF5ID0gZ0RlbGF5IC0gKERhdGUubm93KCkgLSBsYXN0VGltZSk7XG5cblx0XHRcdGlmKGRlbGF5IDwgMCl7XG5cdFx0XHRcdGRlbGF5ID0gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYoaXNQcmlvcml0eSB8fCBkZWxheSA8IDkpe1xuXHRcdFx0XHRpZGxlQ2FsbGJhY2soKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoaWRsZUNhbGxiYWNrLCBkZWxheSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblxuXHQvL2Jhc2VkIG9uIGh0dHA6Ly9tb2Rlcm5qYXZhc2NyaXB0LmJsb2dzcG90LmRlLzIwMTMvMDgvYnVpbGRpbmctYmV0dGVyLWRlYm91bmNlLmh0bWxcblx0dmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZnVuYykge1xuXHRcdHZhciB0aW1lb3V0LCB0aW1lc3RhbXA7XG5cdFx0dmFyIHdhaXQgPSA5OTtcblx0XHR2YXIgcnVuID0gZnVuY3Rpb24oKXtcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0ZnVuYygpO1xuXHRcdH07XG5cdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbGFzdCA9IERhdGUubm93KCkgLSB0aW1lc3RhbXA7XG5cblx0XHRcdGlmIChsYXN0IDwgd2FpdCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQocmVxdWVzdElkbGVDYWxsYmFjayB8fCBydW4pKHJ1bik7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cblx0XHRcdGlmICghdGltZW91dCkge1xuXHRcdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblxuXHQoZnVuY3Rpb24oKXtcblx0XHR2YXIgcHJvcDtcblxuXHRcdHZhciBsYXp5U2l6ZXNEZWZhdWx0cyA9IHtcblx0XHRcdGxhenlDbGFzczogJ2xhenlsb2FkJyxcblx0XHRcdGxvYWRlZENsYXNzOiAnbGF6eWxvYWRlZCcsXG5cdFx0XHRsb2FkaW5nQ2xhc3M6ICdsYXp5bG9hZGluZycsXG5cdFx0XHRwcmVsb2FkQ2xhc3M6ICdsYXp5cHJlbG9hZCcsXG5cdFx0XHRlcnJvckNsYXNzOiAnbGF6eWVycm9yJyxcblx0XHRcdC8vc3RyaWN0Q2xhc3M6ICdsYXp5c3RyaWN0Jyxcblx0XHRcdGF1dG9zaXplc0NsYXNzOiAnbGF6eWF1dG9zaXplcycsXG5cdFx0XHRzcmNBdHRyOiAnZGF0YS1zcmMnLFxuXHRcdFx0c3Jjc2V0QXR0cjogJ2RhdGEtc3Jjc2V0Jyxcblx0XHRcdHNpemVzQXR0cjogJ2RhdGEtc2l6ZXMnLFxuXHRcdFx0Ly9wcmVsb2FkQWZ0ZXJMb2FkOiBmYWxzZSxcblx0XHRcdG1pblNpemU6IDQwLFxuXHRcdFx0Y3VzdG9tTWVkaWE6IHt9LFxuXHRcdFx0aW5pdDogdHJ1ZSxcblx0XHRcdGV4cEZhY3RvcjogMS41LFxuXHRcdFx0aEZhYzogMC44LFxuXHRcdFx0bG9hZE1vZGU6IDIsXG5cdFx0XHRsb2FkSGlkZGVuOiB0cnVlLFxuXHRcdFx0cmljVGltZW91dDogMCxcblx0XHRcdHRocm90dGxlRGVsYXk6IDEyNSxcblx0XHR9O1xuXG5cdFx0bGF6eVNpemVzQ29uZmlnID0gd2luZG93LmxhenlTaXplc0NvbmZpZyB8fCB3aW5kb3cubGF6eXNpemVzQ29uZmlnIHx8IHt9O1xuXG5cdFx0Zm9yKHByb3AgaW4gbGF6eVNpemVzRGVmYXVsdHMpe1xuXHRcdFx0aWYoIShwcm9wIGluIGxhenlTaXplc0NvbmZpZykpe1xuXHRcdFx0XHRsYXp5U2l6ZXNDb25maWdbcHJvcF0gPSBsYXp5U2l6ZXNEZWZhdWx0c1twcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR3aW5kb3cubGF6eVNpemVzQ29uZmlnID0gbGF6eVNpemVzQ29uZmlnO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0aWYobGF6eVNpemVzQ29uZmlnLmluaXQpe1xuXHRcdFx0XHRpbml0KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pKCk7XG5cblx0dmFyIGxvYWRlciA9IChmdW5jdGlvbigpe1xuXHRcdHZhciBwcmVsb2FkRWxlbXMsIGlzQ29tcGxldGVkLCByZXNldFByZWxvYWRpbmdUaW1lciwgbG9hZE1vZGUsIHN0YXJ0ZWQ7XG5cblx0XHR2YXIgZUx2VywgZWx2SCwgZUx0b3AsIGVMbGVmdCwgZUxyaWdodCwgZUxib3R0b207XG5cblx0XHR2YXIgZGVmYXVsdEV4cGFuZCwgcHJlbG9hZEV4cGFuZCwgaEZhYztcblxuXHRcdHZhciByZWdJbWcgPSAvXmltZyQvaTtcblx0XHR2YXIgcmVnSWZyYW1lID0gL15pZnJhbWUkL2k7XG5cblx0XHR2YXIgc3VwcG9ydFNjcm9sbCA9ICgnb25zY3JvbGwnIGluIHdpbmRvdykgJiYgISgvKGdsZXxpbmcpYm90Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKTtcblxuXHRcdHZhciBzaHJpbmtFeHBhbmQgPSAwO1xuXHRcdHZhciBjdXJyZW50RXhwYW5kID0gMDtcblxuXHRcdHZhciBpc0xvYWRpbmcgPSAwO1xuXHRcdHZhciBsb3dSdW5zID0gLTE7XG5cblx0XHR2YXIgcmVzZXRQcmVsb2FkaW5nID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRpc0xvYWRpbmctLTtcblx0XHRcdGlmKGUgJiYgZS50YXJnZXQpe1xuXHRcdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGUudGFyZ2V0LCByZXNldFByZWxvYWRpbmcpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighZSB8fCBpc0xvYWRpbmcgPCAwIHx8ICFlLnRhcmdldCl7XG5cdFx0XHRcdGlzTG9hZGluZyA9IDA7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBpc05lc3RlZFZpc2libGUgPSBmdW5jdGlvbihlbGVtLCBlbGVtRXhwYW5kKXtcblx0XHRcdHZhciBvdXRlclJlY3Q7XG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbTtcblx0XHRcdHZhciB2aXNpYmxlID0gZ2V0Q1NTKGRvY3VtZW50LmJvZHksICd2aXNpYmlsaXR5JykgPT0gJ2hpZGRlbicgfHwgKGdldENTUyhlbGVtLnBhcmVudE5vZGUsICd2aXNpYmlsaXR5JykgIT0gJ2hpZGRlbicgJiYgZ2V0Q1NTKGVsZW0sICd2aXNpYmlsaXR5JykgIT0gJ2hpZGRlbicpO1xuXG5cdFx0XHRlTHRvcCAtPSBlbGVtRXhwYW5kO1xuXHRcdFx0ZUxib3R0b20gKz0gZWxlbUV4cGFuZDtcblx0XHRcdGVMbGVmdCAtPSBlbGVtRXhwYW5kO1xuXHRcdFx0ZUxyaWdodCArPSBlbGVtRXhwYW5kO1xuXG5cdFx0XHR3aGlsZSh2aXNpYmxlICYmIChwYXJlbnQgPSBwYXJlbnQub2Zmc2V0UGFyZW50KSAmJiBwYXJlbnQgIT0gZG9jdW1lbnQuYm9keSAmJiBwYXJlbnQgIT0gZG9jRWxlbSl7XG5cdFx0XHRcdHZpc2libGUgPSAoKGdldENTUyhwYXJlbnQsICdvcGFjaXR5JykgfHwgMSkgPiAwKTtcblxuXHRcdFx0XHRpZih2aXNpYmxlICYmIGdldENTUyhwYXJlbnQsICdvdmVyZmxvdycpICE9ICd2aXNpYmxlJyl7XG5cdFx0XHRcdFx0b3V0ZXJSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRcdHZpc2libGUgPSBlTHJpZ2h0ID4gb3V0ZXJSZWN0LmxlZnQgJiZcblx0XHRcdFx0XHRcdGVMbGVmdCA8IG91dGVyUmVjdC5yaWdodCAmJlxuXHRcdFx0XHRcdFx0ZUxib3R0b20gPiBvdXRlclJlY3QudG9wIC0gMSAmJlxuXHRcdFx0XHRcdFx0ZUx0b3AgPCBvdXRlclJlY3QuYm90dG9tICsgMVxuXHRcdFx0XHRcdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdmlzaWJsZTtcblx0XHR9O1xuXG5cdFx0dmFyIGNoZWNrRWxlbWVudHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlTGxlbiwgaSwgcmVjdCwgYXV0b0xvYWRFbGVtLCBsb2FkZWRTb21ldGhpbmcsIGVsZW1FeHBhbmQsIGVsZW1OZWdhdGl2ZUV4cGFuZCwgZWxlbUV4cGFuZFZhbCwgYmVmb3JlRXhwYW5kVmFsO1xuXG5cdFx0XHR2YXIgbGF6eWxvYWRFbGVtcyA9IGxhenlzaXplcy5lbGVtZW50cztcblxuXHRcdFx0aWYoKGxvYWRNb2RlID0gbGF6eVNpemVzQ29uZmlnLmxvYWRNb2RlKSAmJiBpc0xvYWRpbmcgPCA4ICYmIChlTGxlbiA9IGxhenlsb2FkRWxlbXMubGVuZ3RoKSl7XG5cblx0XHRcdFx0aSA9IDA7XG5cblx0XHRcdFx0bG93UnVucysrO1xuXG5cdFx0XHRcdGlmKHByZWxvYWRFeHBhbmQgPT0gbnVsbCl7XG5cdFx0XHRcdFx0aWYoISgnZXhwYW5kJyBpbiBsYXp5U2l6ZXNDb25maWcpKXtcblx0XHRcdFx0XHRcdGxhenlTaXplc0NvbmZpZy5leHBhbmQgPSBkb2NFbGVtLmNsaWVudEhlaWdodCA+IDUwMCAmJiBkb2NFbGVtLmNsaWVudFdpZHRoID4gNTAwID8gNTAwIDogMzcwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGRlZmF1bHRFeHBhbmQgPSBsYXp5U2l6ZXNDb25maWcuZXhwYW5kO1xuXHRcdFx0XHRcdHByZWxvYWRFeHBhbmQgPSBkZWZhdWx0RXhwYW5kICogbGF6eVNpemVzQ29uZmlnLmV4cEZhY3Rvcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGN1cnJlbnRFeHBhbmQgPCBwcmVsb2FkRXhwYW5kICYmIGlzTG9hZGluZyA8IDEgJiYgbG93UnVucyA+IDIgJiYgbG9hZE1vZGUgPiAyICYmICFkb2N1bWVudC5oaWRkZW4pe1xuXHRcdFx0XHRcdGN1cnJlbnRFeHBhbmQgPSBwcmVsb2FkRXhwYW5kO1xuXHRcdFx0XHRcdGxvd1J1bnMgPSAwO1xuXHRcdFx0XHR9IGVsc2UgaWYobG9hZE1vZGUgPiAxICYmIGxvd1J1bnMgPiAxICYmIGlzTG9hZGluZyA8IDYpe1xuXHRcdFx0XHRcdGN1cnJlbnRFeHBhbmQgPSBkZWZhdWx0RXhwYW5kO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN1cnJlbnRFeHBhbmQgPSBzaHJpbmtFeHBhbmQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IoOyBpIDwgZUxsZW47IGkrKyl7XG5cblx0XHRcdFx0XHRpZighbGF6eWxvYWRFbGVtc1tpXSB8fCBsYXp5bG9hZEVsZW1zW2ldLl9sYXp5UmFjZSl7Y29udGludWU7fVxuXG5cdFx0XHRcdFx0aWYoIXN1cHBvcnRTY3JvbGwpe3VudmVpbEVsZW1lbnQobGF6eWxvYWRFbGVtc1tpXSk7Y29udGludWU7fVxuXG5cdFx0XHRcdFx0aWYoIShlbGVtRXhwYW5kVmFsID0gbGF6eWxvYWRFbGVtc1tpXVtfZ2V0QXR0cmlidXRlXSgnZGF0YS1leHBhbmQnKSkgfHwgIShlbGVtRXhwYW5kID0gZWxlbUV4cGFuZFZhbCAqIDEpKXtcblx0XHRcdFx0XHRcdGVsZW1FeHBhbmQgPSBjdXJyZW50RXhwYW5kO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKGJlZm9yZUV4cGFuZFZhbCAhPT0gZWxlbUV4cGFuZCl7XG5cdFx0XHRcdFx0XHRlTHZXID0gaW5uZXJXaWR0aCArIChlbGVtRXhwYW5kICogaEZhYyk7XG5cdFx0XHRcdFx0XHRlbHZIID0gaW5uZXJIZWlnaHQgKyBlbGVtRXhwYW5kO1xuXHRcdFx0XHRcdFx0ZWxlbU5lZ2F0aXZlRXhwYW5kID0gZWxlbUV4cGFuZCAqIC0xO1xuXHRcdFx0XHRcdFx0YmVmb3JlRXhwYW5kVmFsID0gZWxlbUV4cGFuZDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZWN0ID0gbGF6eWxvYWRFbGVtc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdFx0XHRcdGlmICgoZUxib3R0b20gPSByZWN0LmJvdHRvbSkgPj0gZWxlbU5lZ2F0aXZlRXhwYW5kICYmXG5cdFx0XHRcdFx0XHQoZUx0b3AgPSByZWN0LnRvcCkgPD0gZWx2SCAmJlxuXHRcdFx0XHRcdFx0KGVMcmlnaHQgPSByZWN0LnJpZ2h0KSA+PSBlbGVtTmVnYXRpdmVFeHBhbmQgKiBoRmFjICYmXG5cdFx0XHRcdFx0XHQoZUxsZWZ0ID0gcmVjdC5sZWZ0KSA8PSBlTHZXICYmXG5cdFx0XHRcdFx0XHQoZUxib3R0b20gfHwgZUxyaWdodCB8fCBlTGxlZnQgfHwgZUx0b3ApICYmXG5cdFx0XHRcdFx0XHQobGF6eVNpemVzQ29uZmlnLmxvYWRIaWRkZW4gfHwgZ2V0Q1NTKGxhenlsb2FkRWxlbXNbaV0sICd2aXNpYmlsaXR5JykgIT0gJ2hpZGRlbicpICYmXG5cdFx0XHRcdFx0XHQoKGlzQ29tcGxldGVkICYmIGlzTG9hZGluZyA8IDMgJiYgIWVsZW1FeHBhbmRWYWwgJiYgKGxvYWRNb2RlIDwgMyB8fCBsb3dSdW5zIDwgNCkpIHx8IGlzTmVzdGVkVmlzaWJsZShsYXp5bG9hZEVsZW1zW2ldLCBlbGVtRXhwYW5kKSkpe1xuXHRcdFx0XHRcdFx0dW52ZWlsRWxlbWVudChsYXp5bG9hZEVsZW1zW2ldKTtcblx0XHRcdFx0XHRcdGxvYWRlZFNvbWV0aGluZyA9IHRydWU7XG5cdFx0XHRcdFx0XHRpZihpc0xvYWRpbmcgPiA5KXticmVhazt9XG5cdFx0XHRcdFx0fSBlbHNlIGlmKCFsb2FkZWRTb21ldGhpbmcgJiYgaXNDb21wbGV0ZWQgJiYgIWF1dG9Mb2FkRWxlbSAmJlxuXHRcdFx0XHRcdFx0aXNMb2FkaW5nIDwgNCAmJiBsb3dSdW5zIDwgNCAmJiBsb2FkTW9kZSA+IDIgJiZcblx0XHRcdFx0XHRcdChwcmVsb2FkRWxlbXNbMF0gfHwgbGF6eVNpemVzQ29uZmlnLnByZWxvYWRBZnRlckxvYWQpICYmXG5cdFx0XHRcdFx0XHQocHJlbG9hZEVsZW1zWzBdIHx8ICghZWxlbUV4cGFuZFZhbCAmJiAoKGVMYm90dG9tIHx8IGVMcmlnaHQgfHwgZUxsZWZ0IHx8IGVMdG9wKSB8fCBsYXp5bG9hZEVsZW1zW2ldW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NvbmZpZy5zaXplc0F0dHIpICE9ICdhdXRvJykpKSl7XG5cdFx0XHRcdFx0XHRhdXRvTG9hZEVsZW0gPSBwcmVsb2FkRWxlbXNbMF0gfHwgbGF6eWxvYWRFbGVtc1tpXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihhdXRvTG9hZEVsZW0gJiYgIWxvYWRlZFNvbWV0aGluZyl7XG5cdFx0XHRcdFx0dW52ZWlsRWxlbWVudChhdXRvTG9hZEVsZW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciB0aHJvdHRsZWRDaGVja0VsZW1lbnRzID0gdGhyb3R0bGUoY2hlY2tFbGVtZW50cyk7XG5cblx0XHR2YXIgc3dpdGNoTG9hZGluZ0NsYXNzID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRhZGRDbGFzcyhlLnRhcmdldCwgbGF6eVNpemVzQ29uZmlnLmxvYWRlZENsYXNzKTtcblx0XHRcdHJlbW92ZUNsYXNzKGUudGFyZ2V0LCBsYXp5U2l6ZXNDb25maWcubG9hZGluZ0NsYXNzKTtcblx0XHRcdGFkZFJlbW92ZUxvYWRFdmVudHMoZS50YXJnZXQsIHJhZlN3aXRjaExvYWRpbmdDbGFzcyk7XG5cdFx0XHR0cmlnZ2VyRXZlbnQoZS50YXJnZXQsICdsYXp5bG9hZGVkJyk7XG5cdFx0fTtcblx0XHR2YXIgcmFmZWRTd2l0Y2hMb2FkaW5nQ2xhc3MgPSByQUZJdChzd2l0Y2hMb2FkaW5nQ2xhc3MpO1xuXHRcdHZhciByYWZTd2l0Y2hMb2FkaW5nQ2xhc3MgPSBmdW5jdGlvbihlKXtcblx0XHRcdHJhZmVkU3dpdGNoTG9hZGluZ0NsYXNzKHt0YXJnZXQ6IGUudGFyZ2V0fSk7XG5cdFx0fTtcblxuXHRcdHZhciBjaGFuZ2VJZnJhbWVTcmMgPSBmdW5jdGlvbihlbGVtLCBzcmMpe1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZWxlbS5jb250ZW50V2luZG93LmxvY2F0aW9uLnJlcGxhY2Uoc3JjKTtcblx0XHRcdH0gY2F0Y2goZSl7XG5cdFx0XHRcdGVsZW0uc3JjID0gc3JjO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgaGFuZGxlU291cmNlcyA9IGZ1bmN0aW9uKHNvdXJjZSl7XG5cdFx0XHR2YXIgY3VzdG9tTWVkaWE7XG5cblx0XHRcdHZhciBzb3VyY2VTcmNzZXQgPSBzb3VyY2VbX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ29uZmlnLnNyY3NldEF0dHIpO1xuXG5cdFx0XHRpZiggKGN1c3RvbU1lZGlhID0gbGF6eVNpemVzQ29uZmlnLmN1c3RvbU1lZGlhW3NvdXJjZVtfZ2V0QXR0cmlidXRlXSgnZGF0YS1tZWRpYScpIHx8IHNvdXJjZVtfZ2V0QXR0cmlidXRlXSgnbWVkaWEnKV0pICl7XG5cdFx0XHRcdHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgY3VzdG9tTWVkaWEpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihzb3VyY2VTcmNzZXQpe1xuXHRcdFx0XHRzb3VyY2Uuc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBzb3VyY2VTcmNzZXQpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgbGF6eVVudmVpbCA9IHJBRkl0KGZ1bmN0aW9uIChlbGVtLCBkZXRhaWwsIGlzQXV0bywgc2l6ZXMsIGlzSW1nKXtcblx0XHRcdHZhciBzcmMsIHNyY3NldCwgcGFyZW50LCBpc1BpY3R1cmUsIGV2ZW50LCBmaXJlc0xvYWQ7XG5cblx0XHRcdGlmKCEoZXZlbnQgPSB0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenliZWZvcmV1bnZlaWwnLCBkZXRhaWwpKS5kZWZhdWx0UHJldmVudGVkKXtcblxuXHRcdFx0XHRpZihzaXplcyl7XG5cdFx0XHRcdFx0aWYoaXNBdXRvKXtcblx0XHRcdFx0XHRcdGFkZENsYXNzKGVsZW0sIGxhenlTaXplc0NvbmZpZy5hdXRvc2l6ZXNDbGFzcyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCdzaXplcycsIHNpemVzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzcmNzZXQgPSBlbGVtW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NvbmZpZy5zcmNzZXRBdHRyKTtcblx0XHRcdFx0c3JjID0gZWxlbVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDb25maWcuc3JjQXR0cik7XG5cblx0XHRcdFx0aWYoaXNJbWcpIHtcblx0XHRcdFx0XHRwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRcdFx0aXNQaWN0dXJlID0gcGFyZW50ICYmIHJlZ1BpY3R1cmUudGVzdChwYXJlbnQubm9kZU5hbWUgfHwgJycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZmlyZXNMb2FkID0gZGV0YWlsLmZpcmVzTG9hZCB8fCAoKCdzcmMnIGluIGVsZW0pICYmIChzcmNzZXQgfHwgc3JjIHx8IGlzUGljdHVyZSkpO1xuXG5cdFx0XHRcdGV2ZW50ID0ge3RhcmdldDogZWxlbX07XG5cblx0XHRcdFx0aWYoZmlyZXNMb2FkKXtcblx0XHRcdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGVsZW0sIHJlc2V0UHJlbG9hZGluZywgdHJ1ZSk7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHJlc2V0UHJlbG9hZGluZ1RpbWVyKTtcblx0XHRcdFx0XHRyZXNldFByZWxvYWRpbmdUaW1lciA9IHNldFRpbWVvdXQocmVzZXRQcmVsb2FkaW5nLCAyNTAwKTtcblxuXHRcdFx0XHRcdGFkZENsYXNzKGVsZW0sIGxhenlTaXplc0NvbmZpZy5sb2FkaW5nQ2xhc3MpO1xuXHRcdFx0XHRcdGFkZFJlbW92ZUxvYWRFdmVudHMoZWxlbSwgcmFmU3dpdGNoTG9hZGluZ0NsYXNzLCB0cnVlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGlzUGljdHVyZSl7XG5cdFx0XHRcdFx0Zm9yRWFjaC5jYWxsKHBhcmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyksIGhhbmRsZVNvdXJjZXMpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoc3Jjc2V0KXtcblx0XHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSgnc3Jjc2V0Jywgc3Jjc2V0KTtcblx0XHRcdFx0fSBlbHNlIGlmKHNyYyAmJiAhaXNQaWN0dXJlKXtcblx0XHRcdFx0XHRpZihyZWdJZnJhbWUudGVzdChlbGVtLm5vZGVOYW1lKSl7XG5cdFx0XHRcdFx0XHRjaGFuZ2VJZnJhbWVTcmMoZWxlbSwgc3JjKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZWxlbS5zcmMgPSBzcmM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoaXNJbWcgJiYgKHNyY3NldCB8fCBpc1BpY3R1cmUpKXtcblx0XHRcdFx0XHR1cGRhdGVQb2x5ZmlsbChlbGVtLCB7c3JjOiBzcmN9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihlbGVtLl9sYXp5UmFjZSl7XG5cdFx0XHRcdGRlbGV0ZSBlbGVtLl9sYXp5UmFjZTtcblx0XHRcdH1cblx0XHRcdHJlbW92ZUNsYXNzKGVsZW0sIGxhenlTaXplc0NvbmZpZy5sYXp5Q2xhc3MpO1xuXG5cdFx0XHRyQUYoZnVuY3Rpb24oKXtcblx0XHRcdFx0aWYoICFmaXJlc0xvYWQgfHwgKGVsZW0uY29tcGxldGUgJiYgZWxlbS5uYXR1cmFsV2lkdGggPiAxKSl7XG5cdFx0XHRcdFx0aWYoZmlyZXNMb2FkKXtcblx0XHRcdFx0XHRcdHJlc2V0UHJlbG9hZGluZyhldmVudCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlzTG9hZGluZy0tO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzd2l0Y2hMb2FkaW5nQ2xhc3MoZXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0cnVlKTtcblx0XHR9KTtcblxuXHRcdHZhciB1bnZlaWxFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW0pe1xuXHRcdFx0dmFyIGRldGFpbDtcblxuXHRcdFx0dmFyIGlzSW1nID0gcmVnSW1nLnRlc3QoZWxlbS5ub2RlTmFtZSk7XG5cblx0XHRcdC8vYWxsb3cgdXNpbmcgc2l6ZXM9XCJhdXRvXCIsIGJ1dCBkb24ndCB1c2UuIGl0J3MgaW52YWxpZC4gVXNlIGRhdGEtc2l6ZXM9XCJhdXRvXCIgb3IgYSB2YWxpZCB2YWx1ZSBmb3Igc2l6ZXMgaW5zdGVhZCAoaS5lLjogc2l6ZXM9XCI4MHZ3XCIpXG5cdFx0XHR2YXIgc2l6ZXMgPSBpc0ltZyAmJiAoZWxlbVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDb25maWcuc2l6ZXNBdHRyKSB8fCBlbGVtW19nZXRBdHRyaWJ1dGVdKCdzaXplcycpKTtcblx0XHRcdHZhciBpc0F1dG8gPSBzaXplcyA9PSAnYXV0byc7XG5cblx0XHRcdGlmKCAoaXNBdXRvIHx8ICFpc0NvbXBsZXRlZCkgJiYgaXNJbWcgJiYgKGVsZW1bX2dldEF0dHJpYnV0ZV0oJ3NyYycpIHx8IGVsZW0uc3Jjc2V0KSAmJiAhZWxlbS5jb21wbGV0ZSAmJiAhaGFzQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ29uZmlnLmVycm9yQ2xhc3MpICYmIGhhc0NsYXNzKGVsZW0sIGxhenlTaXplc0NvbmZpZy5sYXp5Q2xhc3MpKXtyZXR1cm47fVxuXG5cdFx0XHRkZXRhaWwgPSB0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenl1bnZlaWxyZWFkJykuZGV0YWlsO1xuXG5cdFx0XHRpZihpc0F1dG8pe1xuXHRcdFx0XHQgYXV0b1NpemVyLnVwZGF0ZUVsZW0oZWxlbSwgdHJ1ZSwgZWxlbS5vZmZzZXRXaWR0aCk7XG5cdFx0XHR9XG5cblx0XHRcdGVsZW0uX2xhenlSYWNlID0gdHJ1ZTtcblx0XHRcdGlzTG9hZGluZysrO1xuXG5cdFx0XHRsYXp5VW52ZWlsKGVsZW0sIGRldGFpbCwgaXNBdXRvLCBzaXplcywgaXNJbWcpO1xuXHRcdH07XG5cblx0XHR2YXIgb25sb2FkID0gZnVuY3Rpb24oKXtcblx0XHRcdGlmKGlzQ29tcGxldGVkKXtyZXR1cm47fVxuXHRcdFx0aWYoRGF0ZS5ub3coKSAtIHN0YXJ0ZWQgPCA5OTkpe1xuXHRcdFx0XHRzZXRUaW1lb3V0KG9ubG9hZCwgOTk5KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGFmdGVyU2Nyb2xsID0gZGVib3VuY2UoZnVuY3Rpb24oKXtcblx0XHRcdFx0bGF6eVNpemVzQ29uZmlnLmxvYWRNb2RlID0gMztcblx0XHRcdFx0dGhyb3R0bGVkQ2hlY2tFbGVtZW50cygpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlzQ29tcGxldGVkID0gdHJ1ZTtcblxuXHRcdFx0bGF6eVNpemVzQ29uZmlnLmxvYWRNb2RlID0gMztcblxuXHRcdFx0dGhyb3R0bGVkQ2hlY2tFbGVtZW50cygpO1xuXG5cdFx0XHRhZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRpZihsYXp5U2l6ZXNDb25maWcubG9hZE1vZGUgPT0gMyl7XG5cdFx0XHRcdFx0bGF6eVNpemVzQ29uZmlnLmxvYWRNb2RlID0gMjtcblx0XHRcdFx0fVxuXHRcdFx0XHRhZnRlclNjcm9sbCgpO1xuXHRcdFx0fSwgdHJ1ZSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRfOiBmdW5jdGlvbigpe1xuXHRcdFx0XHRzdGFydGVkID0gRGF0ZS5ub3coKTtcblxuXHRcdFx0XHRsYXp5c2l6ZXMuZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxhenlTaXplc0NvbmZpZy5sYXp5Q2xhc3MpO1xuXHRcdFx0XHRwcmVsb2FkRWxlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxhenlTaXplc0NvbmZpZy5sYXp5Q2xhc3MgKyAnICcgKyBsYXp5U2l6ZXNDb25maWcucHJlbG9hZENsYXNzKTtcblx0XHRcdFx0aEZhYyA9IGxhenlTaXplc0NvbmZpZy5oRmFjO1xuXG5cdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXG5cdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXG5cdFx0XHRcdGlmKHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKXtcblx0XHRcdFx0XHRuZXcgTXV0YXRpb25PYnNlcnZlciggdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyApLm9ic2VydmUoIGRvY0VsZW0sIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUsIGF0dHJpYnV0ZXM6IHRydWV9ICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZG9jRWxlbVtfYWRkRXZlbnRMaXN0ZW5lcl0oJ0RPTU5vZGVJbnNlcnRlZCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXHRcdFx0XHRcdGRvY0VsZW1bX2FkZEV2ZW50TGlzdGVuZXJdKCdET01BdHRyTW9kaWZpZWQnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcblx0XHRcdFx0XHRzZXRJbnRlcnZhbCh0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCA5OTkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXG5cdFx0XHRcdC8vLCAnZnVsbHNjcmVlbmNoYW5nZSdcblx0XHRcdFx0Wydmb2N1cycsICdtb3VzZW92ZXInLCAnY2xpY2snLCAnbG9hZCcsICd0cmFuc2l0aW9uZW5kJywgJ2FuaW1hdGlvbmVuZCcsICd3ZWJraXRBbmltYXRpb25FbmQnXS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpe1xuXHRcdFx0XHRcdGRvY3VtZW50W19hZGRFdmVudExpc3RlbmVyXShuYW1lLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYoKC9kJHxeYy8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSkpe1xuXHRcdFx0XHRcdG9ubG9hZCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbmxvYWQpO1xuXHRcdFx0XHRcdGRvY3VtZW50W19hZGRFdmVudExpc3RlbmVyXSgnRE9NQ29udGVudExvYWRlZCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMpO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQob25sb2FkLCAyMDAwMCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihsYXp5c2l6ZXMuZWxlbWVudHMubGVuZ3RoKXtcblx0XHRcdFx0XHRjaGVja0VsZW1lbnRzKCk7XG5cdFx0XHRcdFx0ckFGLl9sc0ZsdXNoKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3R0bGVkQ2hlY2tFbGVtZW50cygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y2hlY2tFbGVtczogdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyxcblx0XHRcdHVudmVpbDogdW52ZWlsRWxlbWVudFxuXHRcdH07XG5cdH0pKCk7XG5cblxuXHR2YXIgYXV0b1NpemVyID0gKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGF1dG9zaXplc0VsZW1zO1xuXG5cdFx0dmFyIHNpemVFbGVtZW50ID0gckFGSXQoZnVuY3Rpb24oZWxlbSwgcGFyZW50LCBldmVudCwgd2lkdGgpe1xuXHRcdFx0dmFyIHNvdXJjZXMsIGksIGxlbjtcblx0XHRcdGVsZW0uX2xhenlzaXplc1dpZHRoID0gd2lkdGg7XG5cdFx0XHR3aWR0aCArPSAncHgnO1xuXG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSgnc2l6ZXMnLCB3aWR0aCk7XG5cblx0XHRcdGlmKHJlZ1BpY3R1cmUudGVzdChwYXJlbnQubm9kZU5hbWUgfHwgJycpKXtcblx0XHRcdFx0c291cmNlcyA9IHBhcmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyk7XG5cdFx0XHRcdGZvcihpID0gMCwgbGVuID0gc291cmNlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyl7XG5cdFx0XHRcdFx0c291cmNlc1tpXS5zZXRBdHRyaWJ1dGUoJ3NpemVzJywgd2lkdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFldmVudC5kZXRhaWwuZGF0YUF0dHIpe1xuXHRcdFx0XHR1cGRhdGVQb2x5ZmlsbChlbGVtLCBldmVudC5kZXRhaWwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHZhciBnZXRTaXplRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtLCBkYXRhQXR0ciwgd2lkdGgpe1xuXHRcdFx0dmFyIGV2ZW50O1xuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblxuXHRcdFx0aWYocGFyZW50KXtcblx0XHRcdFx0d2lkdGggPSBnZXRXaWR0aChlbGVtLCBwYXJlbnQsIHdpZHRoKTtcblx0XHRcdFx0ZXZlbnQgPSB0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenliZWZvcmVzaXplcycsIHt3aWR0aDogd2lkdGgsIGRhdGFBdHRyOiAhIWRhdGFBdHRyfSk7XG5cblx0XHRcdFx0aWYoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpe1xuXHRcdFx0XHRcdHdpZHRoID0gZXZlbnQuZGV0YWlsLndpZHRoO1xuXG5cdFx0XHRcdFx0aWYod2lkdGggJiYgd2lkdGggIT09IGVsZW0uX2xhenlzaXplc1dpZHRoKXtcblx0XHRcdFx0XHRcdHNpemVFbGVtZW50KGVsZW0sIHBhcmVudCwgZXZlbnQsIHdpZHRoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIHVwZGF0ZUVsZW1lbnRzU2l6ZXMgPSBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGk7XG5cdFx0XHR2YXIgbGVuID0gYXV0b3NpemVzRWxlbXMubGVuZ3RoO1xuXHRcdFx0aWYobGVuKXtcblx0XHRcdFx0aSA9IDA7XG5cblx0XHRcdFx0Zm9yKDsgaSA8IGxlbjsgaSsrKXtcblx0XHRcdFx0XHRnZXRTaXplRWxlbWVudChhdXRvc2l6ZXNFbGVtc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGRlYm91bmNlZFVwZGF0ZUVsZW1lbnRzU2l6ZXMgPSBkZWJvdW5jZSh1cGRhdGVFbGVtZW50c1NpemVzKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRfOiBmdW5jdGlvbigpe1xuXHRcdFx0XHRhdXRvc2l6ZXNFbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobGF6eVNpemVzQ29uZmlnLmF1dG9zaXplc0NsYXNzKTtcblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyk7XG5cdFx0XHR9LFxuXHRcdFx0Y2hlY2tFbGVtczogZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyxcblx0XHRcdHVwZGF0ZUVsZW06IGdldFNpemVFbGVtZW50XG5cdFx0fTtcblx0fSkoKTtcblxuXHR2YXIgaW5pdCA9IGZ1bmN0aW9uKCl7XG5cdFx0aWYoIWluaXQuaSl7XG5cdFx0XHRpbml0LmkgPSB0cnVlO1xuXHRcdFx0YXV0b1NpemVyLl8oKTtcblx0XHRcdGxvYWRlci5fKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGxhenlzaXplcyA9IHtcblx0XHRjZmc6IGxhenlTaXplc0NvbmZpZyxcblx0XHRhdXRvU2l6ZXI6IGF1dG9TaXplcixcblx0XHRsb2FkZXI6IGxvYWRlcixcblx0XHRpbml0OiBpbml0LFxuXHRcdHVQOiB1cGRhdGVQb2x5ZmlsbCxcblx0XHRhQzogYWRkQ2xhc3MsXG5cdFx0ckM6IHJlbW92ZUNsYXNzLFxuXHRcdGhDOiBoYXNDbGFzcyxcblx0XHRmaXJlOiB0cmlnZ2VyRXZlbnQsXG5cdFx0Z1c6IGdldFdpZHRoLFxuXHRcdHJBRjogckFGLFxuXHR9O1xuXG5cdHJldHVybiBsYXp5c2l6ZXM7XG59XG4pKTtcbiIsIi8qISBwaWN0dXJlZmlsbCAtIHYzLjAuMiAtIDIwMTYtMDItMTJcbiAqIGh0dHBzOi8vc2NvdHRqZWhsLmdpdGh1Yi5pby9waWN0dXJlZmlsbC9cbiAqIENvcHlyaWdodCAoYykgMjAxNiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRqZWhsL3BpY3R1cmVmaWxsL2Jsb2IvbWFzdGVyL0F1dGhvcnMudHh0OyBMaWNlbnNlZCBNSVRcbiAqL1xuLyohIEdlY2tvLVBpY3R1cmUgLSB2MS4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRqZWhsL3BpY3R1cmVmaWxsL3RyZWUvMy4wL3NyYy9wbHVnaW5zL2dlY2tvLXBpY3R1cmVcbiAqIEZpcmVmb3gncyBlYXJseSBwaWN0dXJlIGltcGxlbWVudGF0aW9uIChwcmlvciB0byBGRjQxKSBpcyBzdGF0aWMgYW5kIGRvZXNcbiAqIG5vdCByZWFjdCB0byB2aWV3cG9ydCBjaGFuZ2VzLiBUaGlzIHRpbnkgbW9kdWxlIGZpeGVzIHRoaXMuXG4gKi9cbihmdW5jdGlvbih3aW5kb3cpIHtcblx0Lypqc2hpbnQgZXFudWxsOnRydWUgKi9cblx0dmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuXHRpZiAoIHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQgJiYgKCgvZWNrby8pLnRlc3QodWEpICYmIHVhLm1hdGNoKC9ydlxcOihcXGQrKS8pICYmIFJlZ0V4cC4kMSA8IDQ1KSApIHtcblx0XHRhZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0aW1lcjtcblxuXHRcdFx0dmFyIGR1bW15U3JjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcblxuXHRcdFx0dmFyIGZpeFJlc3BpbWcgPSBmdW5jdGlvbihpbWcpIHtcblx0XHRcdFx0dmFyIHNvdXJjZSwgc2l6ZXM7XG5cdFx0XHRcdHZhciBwaWN0dXJlID0gaW1nLnBhcmVudE5vZGU7XG5cblx0XHRcdFx0aWYgKHBpY3R1cmUubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PT0gXCJQSUNUVVJFXCIpIHtcblx0XHRcdFx0XHRzb3VyY2UgPSBkdW1teVNyYy5jbG9uZU5vZGUoKTtcblxuXHRcdFx0XHRcdHBpY3R1cmUuaW5zZXJ0QmVmb3JlKHNvdXJjZSwgcGljdHVyZS5maXJzdEVsZW1lbnRDaGlsZCk7XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHBpY3R1cmUucmVtb3ZlQ2hpbGQoc291cmNlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIGlmICghaW1nLl9wZkxhc3RTaXplIHx8IGltZy5vZmZzZXRXaWR0aCA+IGltZy5fcGZMYXN0U2l6ZSkge1xuXHRcdFx0XHRcdGltZy5fcGZMYXN0U2l6ZSA9IGltZy5vZmZzZXRXaWR0aDtcblx0XHRcdFx0XHRzaXplcyA9IGltZy5zaXplcztcblx0XHRcdFx0XHRpbWcuc2l6ZXMgKz0gXCIsMTAwdndcIjtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aW1nLnNpemVzID0gc2l6ZXM7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHZhciBmaW5kUGljdHVyZUltZ3MgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGk7XG5cdFx0XHRcdHZhciBpbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInBpY3R1cmUgPiBpbWcsIGltZ1tzcmNzZXRdW3NpemVzXVwiKTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRmaXhSZXNwaW1nKGltZ3NbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0dmFyIG9uUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0XHRcdHRpbWVyID0gc2V0VGltZW91dChmaW5kUGljdHVyZUltZ3MsIDk5KTtcblx0XHRcdH07XG5cdFx0XHR2YXIgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYSAmJiBtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpO1xuXHRcdFx0dmFyIGluaXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0b25SZXNpemUoKTtcblxuXHRcdFx0XHRpZiAobXEgJiYgbXEuYWRkTGlzdGVuZXIpIHtcblx0XHRcdFx0XHRtcS5hZGRMaXN0ZW5lcihvblJlc2l6ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGR1bW15U3JjLnNyY3NldCA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFBQUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIjtcblxuXHRcdFx0aWYgKC9eW2N8aV18ZCQvLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSB8fCBcIlwiKSkge1xuXHRcdFx0XHRpbml0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG9uUmVzaXplO1xuXHRcdH0pKCkpO1xuXHR9XG59KSh3aW5kb3cpO1xuXG4vKiEgUGljdHVyZWZpbGwgLSB2My4wLjJcbiAqIGh0dHA6Ly9zY290dGplaGwuZ2l0aHViLmlvL3BpY3R1cmVmaWxsXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0amVobC9waWN0dXJlZmlsbC9ibG9iL21hc3Rlci9BdXRob3JzLnR4dDtcbiAqICBMaWNlbnNlOiBNSVRcbiAqL1xuXG4oZnVuY3Rpb24oIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCApIHtcblx0Ly8gRW5hYmxlIHN0cmljdCBtb2RlXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdC8vIEhUTUwgc2hpbXx2IGl0IGZvciBvbGQgSUUgKElFOSB3aWxsIHN0aWxsIG5lZWQgdGhlIEhUTUwgdmlkZW8gdGFnIHdvcmthcm91bmQpXG5cdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwicGljdHVyZVwiICk7XG5cblx0dmFyIHdhcm4sIGVtaW5weCwgYWx3YXlzQ2hlY2tXRGVzY3JpcHRvciwgZXZhbElkO1xuXHQvLyBsb2NhbCBvYmplY3QgZm9yIG1ldGhvZCByZWZlcmVuY2VzIGFuZCB0ZXN0aW5nIGV4cG9zdXJlXG5cdHZhciBwZiA9IHt9O1xuXHR2YXIgaXNTdXBwb3J0VGVzdFJlYWR5ID0gZmFsc2U7XG5cdHZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblx0dmFyIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbWdcIiApO1xuXHR2YXIgZ2V0SW1nQXR0ciA9IGltYWdlLmdldEF0dHJpYnV0ZTtcblx0dmFyIHNldEltZ0F0dHIgPSBpbWFnZS5zZXRBdHRyaWJ1dGU7XG5cdHZhciByZW1vdmVJbWdBdHRyID0gaW1hZ2UucmVtb3ZlQXR0cmlidXRlO1xuXHR2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0dmFyIHR5cGVzID0ge307XG5cdHZhciBjZmcgPSB7XG5cdFx0Ly9yZXNvdXJjZSBzZWxlY3Rpb246XG5cdFx0YWxnb3JpdGhtOiBcIlwiXG5cdH07XG5cdHZhciBzcmNBdHRyID0gXCJkYXRhLXBmc3JjXCI7XG5cdHZhciBzcmNzZXRBdHRyID0gc3JjQXR0ciArIFwic2V0XCI7XG5cdC8vIHVhIHNuaWZmaW5nIGlzIGRvbmUgZm9yIHVuZGV0ZWN0YWJsZSBpbWcgbG9hZGluZyBmZWF0dXJlcyxcblx0Ly8gdG8gZG8gc29tZSBub24gY3J1Y2lhbCBwZXJmIG9wdGltaXphdGlvbnNcblx0dmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0dmFyIHN1cHBvcnRBYm9ydCA9ICgvcmlkZW50LykudGVzdCh1YSkgfHwgKCgvZWNrby8pLnRlc3QodWEpICYmIHVhLm1hdGNoKC9ydlxcOihcXGQrKS8pICYmIFJlZ0V4cC4kMSA+IDM1ICk7XG5cdHZhciBjdXJTcmNQcm9wID0gXCJjdXJyZW50U3JjXCI7XG5cdHZhciByZWdXRGVzYyA9IC9cXHMrXFwrP1xcZCsoZVxcZCspP3cvO1xuXHR2YXIgcmVnU2l6ZSA9IC8oXFwoW14pXStcXCkpP1xccyooLispLztcblx0dmFyIHNldE9wdGlvbnMgPSB3aW5kb3cucGljdHVyZWZpbGxDRkc7XG5cdC8qKlxuXHQgKiBTaG9ydGN1dCBwcm9wZXJ0eSBmb3IgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmFwcHNlYy9zcGVjcy9taXhlZGNvbnRlbnQvI3Jlc3RyaWN0cy1taXhlZC1jb250ZW50ICggZm9yIGVhc3kgb3ZlcnJpZGluZyBpbiB0ZXN0cyApXG5cdCAqL1xuXHQvLyBiYXNlU3R5bGUgYWxzbyB1c2VkIGJ5IGdldEVtVmFsdWUgKGkuZS46IHdpZHRoOiAxZW0gaXMgaW1wb3J0YW50KVxuXHR2YXIgYmFzZVN0eWxlID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dmlzaWJpbGl0eTpoaWRkZW47ZGlzcGxheTpibG9jaztwYWRkaW5nOjA7Ym9yZGVyOm5vbmU7Zm9udC1zaXplOjFlbTt3aWR0aDoxZW07b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwcHgsIDBweCwgMHB4LCAwcHgpXCI7XG5cdHZhciBmc0NzcyA9IFwiZm9udC1zaXplOjEwMCUhaW1wb3J0YW50O1wiO1xuXHR2YXIgaXNWd0RpcnR5ID0gdHJ1ZTtcblxuXHR2YXIgY3NzQ2FjaGUgPSB7fTtcblx0dmFyIHNpemVMZW5ndGhDYWNoZSA9IHt9O1xuXHR2YXIgRFBSID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cdHZhciB1bml0cyA9IHtcblx0XHRweDogMSxcblx0XHRcImluXCI6IDk2XG5cdH07XG5cdHZhciBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXHQvKipcblx0ICogYWxyZWFkeVJ1biBmbGFnIHVzZWQgZm9yIHNldE9wdGlvbnMuIGlzIGl0IHRydWUgc2V0T3B0aW9ucyB3aWxsIHJlZXZhbHVhdGVcblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHR2YXIgYWxyZWFkeVJ1biA9IGZhbHNlO1xuXG5cdC8vIFJldXNhYmxlLCBub24tXCJnXCIgUmVnZXhlc1xuXG5cdC8vIChEb24ndCB1c2UgXFxzLCB0byBhdm9pZCBtYXRjaGluZyBub24tYnJlYWtpbmcgc3BhY2UuKVxuXHR2YXIgcmVnZXhMZWFkaW5nU3BhY2VzID0gL15bIFxcdFxcblxcclxcdTAwMGNdKy8sXG5cdCAgICByZWdleExlYWRpbmdDb21tYXNPclNwYWNlcyA9IC9eWywgXFx0XFxuXFxyXFx1MDAwY10rLyxcblx0ICAgIHJlZ2V4TGVhZGluZ05vdFNwYWNlcyA9IC9eW14gXFx0XFxuXFxyXFx1MDAwY10rLyxcblx0ICAgIHJlZ2V4VHJhaWxpbmdDb21tYXMgPSAvWyxdKyQvLFxuXHQgICAgcmVnZXhOb25OZWdhdGl2ZUludGVnZXIgPSAvXlxcZCskLyxcblxuXHQgICAgLy8gKCBQb3NpdGl2ZSBvciBuZWdhdGl2ZSBvciB1bnNpZ25lZCBpbnRlZ2VycyBvciBkZWNpbWFscywgd2l0aG91dCBvciB3aXRob3V0IGV4cG9uZW50cy5cblx0ICAgIC8vIE11c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgZGlnaXQuXG5cdCAgICAvLyBBY2NvcmRpbmcgdG8gc3BlYyB0ZXN0cyBhbnkgZGVjaW1hbCBwb2ludCBtdXN0IGJlIGZvbGxvd2VkIGJ5IGEgZGlnaXQuXG5cdCAgICAvLyBObyBsZWFkaW5nIHBsdXMgc2lnbiBpcyBhbGxvd2VkLilcblx0ICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZnJhc3RydWN0dXJlLmh0bWwjdmFsaWQtZmxvYXRpbmctcG9pbnQtbnVtYmVyXG5cdCAgICByZWdleEZsb2F0aW5nUG9pbnQgPSAvXi0/KD86WzAtOV0rfFswLTldKlxcLlswLTldKykoPzpbZUVdWystXT9bMC05XSspPyQvO1xuXG5cdHZhciBvbiA9IGZ1bmN0aW9uKG9iaiwgZXZ0LCBmbiwgY2FwdHVyZSkge1xuXHRcdGlmICggb2JqLmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0XHRvYmouYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZuLCBjYXB0dXJlIHx8IGZhbHNlKTtcblx0XHR9IGVsc2UgaWYgKCBvYmouYXR0YWNoRXZlbnQgKSB7XG5cdFx0XHRvYmouYXR0YWNoRXZlbnQoIFwib25cIiArIGV2dCwgZm4pO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogc2ltcGxlIG1lbW9pemUgZnVuY3Rpb246XG5cdCAqL1xuXG5cdHZhciBtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgY2FjaGUgPSB7fTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oaW5wdXQpIHtcblx0XHRcdGlmICggIShpbnB1dCBpbiBjYWNoZSkgKSB7XG5cdFx0XHRcdGNhY2hlWyBpbnB1dCBdID0gZm4oaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNhY2hlWyBpbnB1dCBdO1xuXHRcdH07XG5cdH07XG5cblx0Ly8gVVRJTElUWSBGVU5DVElPTlNcblxuXHQvLyBNYW51YWwgaXMgZmFzdGVyIHRoYW4gUmVnRXhcblx0Ly8gaHR0cDovL2pzcGVyZi5jb20vd2hpdGVzcGFjZS1jaGFyYWN0ZXIvNVxuXHRmdW5jdGlvbiBpc1NwYWNlKGMpIHtcblx0XHRyZXR1cm4gKGMgPT09IFwiXFx1MDAyMFwiIHx8IC8vIHNwYWNlXG5cdFx0ICAgICAgICBjID09PSBcIlxcdTAwMDlcIiB8fCAvLyBob3Jpem9udGFsIHRhYlxuXHRcdCAgICAgICAgYyA9PT0gXCJcXHUwMDBBXCIgfHwgLy8gbmV3IGxpbmVcblx0XHQgICAgICAgIGMgPT09IFwiXFx1MDAwQ1wiIHx8IC8vIGZvcm0gZmVlZFxuXHRcdCAgICAgICAgYyA9PT0gXCJcXHUwMDBEXCIpOyAgLy8gY2FycmlhZ2UgcmV0dXJuXG5cdH1cblxuXHQvKipcblx0ICogZ2V0cyBhIG1lZGlhcXVlcnkgYW5kIHJldHVybnMgYSBib29sZWFuIG9yIGdldHMgYSBjc3MgbGVuZ3RoIGFuZCByZXR1cm5zIGEgbnVtYmVyXG5cdCAqIEBwYXJhbSBjc3MgbWVkaWFxdWVyaWVzIG9yIGNzcyBsZW5ndGhcblx0ICogQHJldHVybnMge2Jvb2xlYW58bnVtYmVyfVxuXHQgKlxuXHQgKiBiYXNlZCBvbjogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vam9uYXRoYW50bmVhbC9kYjRmNzcwMDliMTU1ZjA4MzczOFxuXHQgKi9cblx0dmFyIGV2YWxDU1MgPSAoZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgcmVnTGVuZ3RoID0gL14oW1xcZFxcLl0rKShlbXx2d3xweCkkLztcblx0XHR2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHMsIGluZGV4ID0gMCwgc3RyaW5nID0gYXJnc1swXTtcblx0XHRcdHdoaWxlICgrK2luZGV4IGluIGFyZ3MpIHtcblx0XHRcdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoYXJnc1tpbmRleF0sIGFyZ3NbKytpbmRleF0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0cmluZztcblx0XHR9O1xuXG5cdFx0dmFyIGJ1aWxkU3RyID0gbWVtb2l6ZShmdW5jdGlvbihjc3MpIHtcblxuXHRcdFx0cmV0dXJuIFwicmV0dXJuIFwiICsgcmVwbGFjZSgoY3NzIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdC8vIGludGVycHJldCBgYW5kYFxuXHRcdFx0XHQvXFxiYW5kXFxiL2csIFwiJiZcIixcblxuXHRcdFx0XHQvLyBpbnRlcnByZXQgYCxgXG5cdFx0XHRcdC8sL2csIFwifHxcIixcblxuXHRcdFx0XHQvLyBpbnRlcnByZXQgYG1pbi1gIGFzID49XG5cdFx0XHRcdC9taW4tKFthLXotXFxzXSspOi9nLCBcImUuJDE+PVwiLFxuXG5cdFx0XHRcdC8vIGludGVycHJldCBgbWF4LWAgYXMgPD1cblx0XHRcdFx0L21heC0oW2Etei1cXHNdKyk6L2csIFwiZS4kMTw9XCIsXG5cblx0XHRcdFx0Ly9jYWxjIHZhbHVlXG5cdFx0XHRcdC9jYWxjKFteKV0rKS9nLCBcIigkMSlcIixcblxuXHRcdFx0XHQvLyBpbnRlcnByZXQgY3NzIHZhbHVlc1xuXHRcdFx0XHQvKFxcZCtbXFwuXSpbXFxkXSopKFthLXpdKykvZywgXCIoJDEgKiBlLiQyKVwiLFxuXHRcdFx0XHQvL21ha2UgZXZhbCBsZXNzIGV2aWxcblx0XHRcdFx0L14oPyEoZS5bYS16XXxbMC05XFwuJj18PjxcXCtcXC1cXCpcXChcXClcXC9dKSkuKi9pZywgXCJcIlxuXHRcdFx0KSArIFwiO1wiO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGNzcywgbGVuZ3RoKSB7XG5cdFx0XHR2YXIgcGFyc2VkTGVuZ3RoO1xuXHRcdFx0aWYgKCEoY3NzIGluIGNzc0NhY2hlKSkge1xuXHRcdFx0XHRjc3NDYWNoZVtjc3NdID0gZmFsc2U7XG5cdFx0XHRcdGlmIChsZW5ndGggJiYgKHBhcnNlZExlbmd0aCA9IGNzcy5tYXRjaCggcmVnTGVuZ3RoICkpKSB7XG5cdFx0XHRcdFx0Y3NzQ2FjaGVbY3NzXSA9IHBhcnNlZExlbmd0aFsgMSBdICogdW5pdHNbcGFyc2VkTGVuZ3RoWyAyIF1dO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8qanNoaW50IGV2aWw6dHJ1ZSAqL1xuXHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdGNzc0NhY2hlW2Nzc10gPSBuZXcgRnVuY3Rpb24oXCJlXCIsIGJ1aWxkU3RyKGNzcykpKHVuaXRzKTtcblx0XHRcdFx0XHR9IGNhdGNoKGUpIHt9XG5cdFx0XHRcdFx0Lypqc2hpbnQgZXZpbDpmYWxzZSAqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY3NzQ2FjaGVbY3NzXTtcblx0XHR9O1xuXHR9KSgpO1xuXG5cdHZhciBzZXRSZXNvbHV0aW9uID0gZnVuY3Rpb24oIGNhbmRpZGF0ZSwgc2l6ZXNhdHRyICkge1xuXHRcdGlmICggY2FuZGlkYXRlLncgKSB7IC8vIGggPSBtZWFucyBoZWlnaHQ6IHx8IGRlc2NyaXB0b3IudHlwZSA9PT0gJ2gnIGRvIG5vdCBoYW5kbGUgeWV0Li4uXG5cdFx0XHRjYW5kaWRhdGUuY1dpZHRoID0gcGYuY2FsY0xpc3RMZW5ndGgoIHNpemVzYXR0ciB8fCBcIjEwMHZ3XCIgKTtcblx0XHRcdGNhbmRpZGF0ZS5yZXMgPSBjYW5kaWRhdGUudyAvIGNhbmRpZGF0ZS5jV2lkdGggO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYW5kaWRhdGUucmVzID0gY2FuZGlkYXRlLmQ7XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH07XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSBvcHRcblx0ICovXG5cdHZhciBwaWN0dXJlZmlsbCA9IGZ1bmN0aW9uKCBvcHQgKSB7XG5cblx0XHRpZiAoIWlzU3VwcG9ydFRlc3RSZWFkeSkge3JldHVybjt9XG5cblx0XHR2YXIgZWxlbWVudHMsIGksIHBsZW47XG5cblx0XHR2YXIgb3B0aW9ucyA9IG9wdCB8fCB7fTtcblxuXHRcdGlmICggb3B0aW9ucy5lbGVtZW50cyAmJiBvcHRpb25zLmVsZW1lbnRzLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0aWYgKCBvcHRpb25zLmVsZW1lbnRzLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiSU1HXCIgKSB7XG5cdFx0XHRcdG9wdGlvbnMuZWxlbWVudHMgPSAgWyBvcHRpb25zLmVsZW1lbnRzIF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvcHRpb25zLmNvbnRleHQgPSBvcHRpb25zLmVsZW1lbnRzO1xuXHRcdFx0XHRvcHRpb25zLmVsZW1lbnRzID0gIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZWxlbWVudHMgPSBvcHRpb25zLmVsZW1lbnRzIHx8IHBmLnFzYSggKG9wdGlvbnMuY29udGV4dCB8fCBkb2N1bWVudCksICggb3B0aW9ucy5yZWV2YWx1YXRlIHx8IG9wdGlvbnMucmVzZWxlY3QgKSA/IHBmLnNlbCA6IHBmLnNlbFNob3J0ICk7XG5cblx0XHRpZiAoIChwbGVuID0gZWxlbWVudHMubGVuZ3RoKSApIHtcblxuXHRcdFx0cGYuc2V0dXBSdW4oIG9wdGlvbnMgKTtcblx0XHRcdGFscmVhZHlSdW4gPSB0cnVlO1xuXG5cdFx0XHQvLyBMb29wIHRocm91Z2ggYWxsIGVsZW1lbnRzXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IHBsZW47IGkrKyApIHtcblx0XHRcdFx0cGYuZmlsbEltZyhlbGVtZW50c1sgaSBdLCBvcHRpb25zKTtcblx0XHRcdH1cblxuXHRcdFx0cGYudGVhcmRvd25SdW4oIG9wdGlvbnMgKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIG91dHB1dHMgYSB3YXJuaW5nIGZvciB0aGUgZGV2ZWxvcGVyXG5cdCAqIEBwYXJhbSB7bWVzc2FnZX1cblx0ICogQHR5cGUge0Z1bmN0aW9ufVxuXHQgKi9cblx0d2FybiA9ICggd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuICkgP1xuXHRcdGZ1bmN0aW9uKCBtZXNzYWdlICkge1xuXHRcdFx0Y29uc29sZS53YXJuKCBtZXNzYWdlICk7XG5cdFx0fSA6XG5cdFx0bm9vcFxuXHQ7XG5cblx0aWYgKCAhKGN1clNyY1Byb3AgaW4gaW1hZ2UpICkge1xuXHRcdGN1clNyY1Byb3AgPSBcInNyY1wiO1xuXHR9XG5cblx0Ly8gQWRkIHN1cHBvcnQgZm9yIHN0YW5kYXJkIG1pbWUgdHlwZXMuXG5cdHR5cGVzWyBcImltYWdlL2pwZWdcIiBdID0gdHJ1ZTtcblx0dHlwZXNbIFwiaW1hZ2UvZ2lmXCIgXSA9IHRydWU7XG5cdHR5cGVzWyBcImltYWdlL3BuZ1wiIF0gPSB0cnVlO1xuXG5cdGZ1bmN0aW9uIGRldGVjdFR5cGVTdXBwb3J0KCB0eXBlLCB0eXBlVXJpICkge1xuXHRcdC8vIGJhc2VkIG9uIE1vZGVybml6cidzIGxvc3NsZXNzIGltZy13ZWJwIHRlc3Rcblx0XHQvLyBub3RlOiBhc3luY2hyb25vdXNcblx0XHR2YXIgaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKCk7XG5cdFx0aW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHlwZXNbIHR5cGUgXSA9IGZhbHNlO1xuXHRcdFx0cGljdHVyZWZpbGwoKTtcblx0XHR9O1xuXHRcdGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHlwZXNbIHR5cGUgXSA9IGltYWdlLndpZHRoID09PSAxO1xuXHRcdFx0cGljdHVyZWZpbGwoKTtcblx0XHR9O1xuXHRcdGltYWdlLnNyYyA9IHR5cGVVcmk7XG5cdFx0cmV0dXJuIFwicGVuZGluZ1wiO1xuXHR9XG5cblx0Ly8gdGVzdCBzdmcgc3VwcG9ydFxuXHR0eXBlc1sgXCJpbWFnZS9zdmcreG1sXCIgXSA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoIFwiaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNJbWFnZVwiLCBcIjEuMVwiICk7XG5cblx0LyoqXG5cdCAqIHVwZGF0ZXMgdGhlIGludGVybmFsIHZXIHByb3BlcnR5IHdpdGggdGhlIGN1cnJlbnQgdmlld3BvcnQgd2lkdGggaW4gcHhcblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZU1ldHJpY3MoKSB7XG5cblx0XHRpc1Z3RGlydHkgPSBmYWxzZTtcblx0XHREUFIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblx0XHRjc3NDYWNoZSA9IHt9O1xuXHRcdHNpemVMZW5ndGhDYWNoZSA9IHt9O1xuXG5cdFx0cGYuRFBSID0gRFBSIHx8IDE7XG5cblx0XHR1bml0cy53aWR0aCA9IE1hdGgubWF4KHdpbmRvdy5pbm5lcldpZHRoIHx8IDAsIGRvY0VsZW0uY2xpZW50V2lkdGgpO1xuXHRcdHVuaXRzLmhlaWdodCA9IE1hdGgubWF4KHdpbmRvdy5pbm5lckhlaWdodCB8fCAwLCBkb2NFbGVtLmNsaWVudEhlaWdodCk7XG5cblx0XHR1bml0cy52dyA9IHVuaXRzLndpZHRoIC8gMTAwO1xuXHRcdHVuaXRzLnZoID0gdW5pdHMuaGVpZ2h0IC8gMTAwO1xuXG5cdFx0ZXZhbElkID0gWyB1bml0cy5oZWlnaHQsIHVuaXRzLndpZHRoLCBEUFIgXS5qb2luKFwiLVwiKTtcblxuXHRcdHVuaXRzLmVtID0gcGYuZ2V0RW1WYWx1ZSgpO1xuXHRcdHVuaXRzLnJlbSA9IHVuaXRzLmVtO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2hvb3NlTG93UmVzKCBsb3dlclZhbHVlLCBoaWdoZXJWYWx1ZSwgZHByVmFsdWUsIGlzQ2FjaGVkICkge1xuXHRcdHZhciBib251c0ZhY3RvciwgdG9vTXVjaCwgYm9udXMsIG1lYW5EZW5zaXR5O1xuXG5cdFx0Ly9leHBlcmltZW50YWxcblx0XHRpZiAoY2ZnLmFsZ29yaXRobSA9PT0gXCJzYXZlRGF0YVwiICl7XG5cdFx0XHRpZiAoIGxvd2VyVmFsdWUgPiAyLjcgKSB7XG5cdFx0XHRcdG1lYW5EZW5zaXR5ID0gZHByVmFsdWUgKyAxO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9vTXVjaCA9IGhpZ2hlclZhbHVlIC0gZHByVmFsdWU7XG5cdFx0XHRcdGJvbnVzRmFjdG9yID0gTWF0aC5wb3cobG93ZXJWYWx1ZSAtIDAuNiwgMS41KTtcblxuXHRcdFx0XHRib251cyA9IHRvb011Y2ggKiBib251c0ZhY3RvcjtcblxuXHRcdFx0XHRpZiAoaXNDYWNoZWQpIHtcblx0XHRcdFx0XHRib251cyArPSAwLjEgKiBib251c0ZhY3Rvcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1lYW5EZW5zaXR5ID0gbG93ZXJWYWx1ZSArIGJvbnVzO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZWFuRGVuc2l0eSA9IChkcHJWYWx1ZSA+IDEpID9cblx0XHRcdFx0TWF0aC5zcXJ0KGxvd2VyVmFsdWUgKiBoaWdoZXJWYWx1ZSkgOlxuXHRcdFx0XHRsb3dlclZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZWFuRGVuc2l0eSA+IGRwclZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXBwbHlCZXN0Q2FuZGlkYXRlKCBpbWcgKSB7XG5cdFx0dmFyIHNyY1NldENhbmRpZGF0ZXM7XG5cdFx0dmFyIG1hdGNoaW5nU2V0ID0gcGYuZ2V0U2V0KCBpbWcgKTtcblx0XHR2YXIgZXZhbHVhdGVkID0gZmFsc2U7XG5cdFx0aWYgKCBtYXRjaGluZ1NldCAhPT0gXCJwZW5kaW5nXCIgKSB7XG5cdFx0XHRldmFsdWF0ZWQgPSBldmFsSWQ7XG5cdFx0XHRpZiAoIG1hdGNoaW5nU2V0ICkge1xuXHRcdFx0XHRzcmNTZXRDYW5kaWRhdGVzID0gcGYuc2V0UmVzKCBtYXRjaGluZ1NldCApO1xuXHRcdFx0XHRwZi5hcHBseVNldENhbmRpZGF0ZSggc3JjU2V0Q2FuZGlkYXRlcywgaW1nICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGltZ1sgcGYubnMgXS5ldmFsZWQgPSBldmFsdWF0ZWQ7XG5cdH1cblxuXHRmdW5jdGlvbiBhc2NlbmRpbmdTb3J0KCBhLCBiICkge1xuXHRcdHJldHVybiBhLnJlcyAtIGIucmVzO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0U3JjVG9DdXIoIGltZywgc3JjLCBzZXQgKSB7XG5cdFx0dmFyIGNhbmRpZGF0ZTtcblx0XHRpZiAoICFzZXQgJiYgc3JjICkge1xuXHRcdFx0c2V0ID0gaW1nWyBwZi5ucyBdLnNldHM7XG5cdFx0XHRzZXQgPSBzZXQgJiYgc2V0W3NldC5sZW5ndGggLSAxXTtcblx0XHR9XG5cblx0XHRjYW5kaWRhdGUgPSBnZXRDYW5kaWRhdGVGb3JTcmMoc3JjLCBzZXQpO1xuXG5cdFx0aWYgKCBjYW5kaWRhdGUgKSB7XG5cdFx0XHRzcmMgPSBwZi5tYWtlVXJsKHNyYyk7XG5cdFx0XHRpbWdbIHBmLm5zIF0uY3VyU3JjID0gc3JjO1xuXHRcdFx0aW1nWyBwZi5ucyBdLmN1ckNhbiA9IGNhbmRpZGF0ZTtcblxuXHRcdFx0aWYgKCAhY2FuZGlkYXRlLnJlcyApIHtcblx0XHRcdFx0c2V0UmVzb2x1dGlvbiggY2FuZGlkYXRlLCBjYW5kaWRhdGUuc2V0LnNpemVzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDYW5kaWRhdGVGb3JTcmMoIHNyYywgc2V0ICkge1xuXHRcdHZhciBpLCBjYW5kaWRhdGUsIGNhbmRpZGF0ZXM7XG5cdFx0aWYgKCBzcmMgJiYgc2V0ICkge1xuXHRcdFx0Y2FuZGlkYXRlcyA9IHBmLnBhcnNlU2V0KCBzZXQgKTtcblx0XHRcdHNyYyA9IHBmLm1ha2VVcmwoc3JjKTtcblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBzcmMgPT09IHBmLm1ha2VVcmwoY2FuZGlkYXRlc1sgaSBdLnVybCkgKSB7XG5cdFx0XHRcdFx0Y2FuZGlkYXRlID0gY2FuZGlkYXRlc1sgaSBdO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRBbGxTb3VyY2VFbGVtZW50cyggcGljdHVyZSwgY2FuZGlkYXRlcyApIHtcblx0XHR2YXIgaSwgbGVuLCBzb3VyY2UsIHNyY3NldDtcblxuXHRcdC8vIFNQRUMgbWlzbWF0Y2ggaW50ZW5kZWQgZm9yIHNpemUgYW5kIHBlcmY6XG5cdFx0Ly8gYWN0dWFsbHkgb25seSBzb3VyY2UgZWxlbWVudHMgcHJlY2VkaW5nIHRoZSBpbWcgc2hvdWxkIGJlIHVzZWRcblx0XHQvLyBhbHNvIG5vdGU6IGRvbid0IHVzZSBxc2EgaGVyZSwgYmVjYXVzZSBJRTggc29tZXRpbWVzIGRvZXNuJ3QgbGlrZSBzb3VyY2UgYXMgdGhlIGtleSBwYXJ0IGluIGEgc2VsZWN0b3Jcblx0XHR2YXIgc291cmNlcyA9IHBpY3R1cmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwic291cmNlXCIgKTtcblxuXHRcdGZvciAoIGkgPSAwLCBsZW4gPSBzb3VyY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0c291cmNlID0gc291cmNlc1sgaSBdO1xuXHRcdFx0c291cmNlWyBwZi5ucyBdID0gdHJ1ZTtcblx0XHRcdHNyY3NldCA9IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwic3Jjc2V0XCIgKTtcblxuXHRcdFx0Ly8gaWYgc291cmNlIGRvZXMgbm90IGhhdmUgYSBzcmNzZXQgYXR0cmlidXRlLCBza2lwXG5cdFx0XHRpZiAoIHNyY3NldCApIHtcblx0XHRcdFx0Y2FuZGlkYXRlcy5wdXNoKCB7XG5cdFx0XHRcdFx0c3Jjc2V0OiBzcmNzZXQsXG5cdFx0XHRcdFx0bWVkaWE6IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwibWVkaWFcIiApLFxuXHRcdFx0XHRcdHR5cGU6IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwidHlwZVwiICksXG5cdFx0XHRcdFx0c2l6ZXM6IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwic2l6ZXNcIiApXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU3Jjc2V0IFBhcnNlclxuXHQgKiBCeSBBbGV4IEJlbGwgfCAgTUlUIExpY2Vuc2Vcblx0ICpcblx0ICogQHJldHVybnMgQXJyYXkgW3t1cmw6IF8sIGQ6IF8sIHc6IF8sIGg6Xywgc2V0Ol8oPz8/Pyl9LCAuLi5dXG5cdCAqXG5cdCAqIEJhc2VkIHN1cGVyIGR1cGVyIGNsb3NlbHkgb24gdGhlIHJlZmVyZW5jZSBhbGdvcml0aG0gYXQ6XG5cdCAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2VtYmVkZGVkLWNvbnRlbnQuaHRtbCNwYXJzZS1hLXNyY3NldC1hdHRyaWJ1dGVcblx0ICovXG5cblx0Ly8gMS4gTGV0IGlucHV0IGJlIHRoZSB2YWx1ZSBwYXNzZWQgdG8gdGhpcyBhbGdvcml0aG0uXG5cdC8vIChUTy1ETyA6IEV4cGxhaW4gd2hhdCBcInNldFwiIGFyZ3VtZW50IGlzIGhlcmUuIE1heWJlIGNob29zZSBhIG1vcmVcblx0Ly8gZGVzY3JpcHRpdmUgJiBtb3JlIHNlYXJjaGFibGUgbmFtZS4gIFNpbmNlIHBhc3NpbmcgdGhlIFwic2V0XCIgaW4gcmVhbGx5IGhhc1xuXHQvLyBub3RoaW5nIHRvIGRvIHdpdGggcGFyc2luZyBwcm9wZXIsIEkgd291bGQgcHJlZmVyIHRoaXMgYXNzaWdubWVudCBldmVudHVhbGx5XG5cdC8vIGdvIGluIGFuIGV4dGVybmFsIGZuLilcblx0ZnVuY3Rpb24gcGFyc2VTcmNzZXQoaW5wdXQsIHNldCkge1xuXG5cdFx0ZnVuY3Rpb24gY29sbGVjdENoYXJhY3RlcnMocmVnRXgpIHtcblx0XHRcdHZhciBjaGFycyxcblx0XHRcdCAgICBtYXRjaCA9IHJlZ0V4LmV4ZWMoaW5wdXQuc3Vic3RyaW5nKHBvcykpO1xuXHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdGNoYXJzID0gbWF0Y2hbIDAgXTtcblx0XHRcdFx0cG9zICs9IGNoYXJzLmxlbmd0aDtcblx0XHRcdFx0cmV0dXJuIGNoYXJzO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aCxcblx0XHQgICAgdXJsLFxuXHRcdCAgICBkZXNjcmlwdG9ycyxcblx0XHQgICAgY3VycmVudERlc2NyaXB0b3IsXG5cdFx0ICAgIHN0YXRlLFxuXHRcdCAgICBjLFxuXG5cdFx0ICAgIC8vIDIuIExldCBwb3NpdGlvbiBiZSBhIHBvaW50ZXIgaW50byBpbnB1dCwgaW5pdGlhbGx5IHBvaW50aW5nIGF0IHRoZSBzdGFydFxuXHRcdCAgICAvLyAgICBvZiB0aGUgc3RyaW5nLlxuXHRcdCAgICBwb3MgPSAwLFxuXG5cdFx0ICAgIC8vIDMuIExldCBjYW5kaWRhdGVzIGJlIGFuIGluaXRpYWxseSBlbXB0eSBzb3VyY2Ugc2V0LlxuXHRcdCAgICBjYW5kaWRhdGVzID0gW107XG5cblx0XHQvKipcblx0XHQqIEFkZHMgZGVzY3JpcHRvciBwcm9wZXJ0aWVzIHRvIGEgY2FuZGlkYXRlLCBwdXNoZXMgdG8gdGhlIGNhbmRpZGF0ZXMgYXJyYXlcblx0XHQqIEByZXR1cm4gdW5kZWZpbmVkXG5cdFx0Ki9cblx0XHQvLyAoRGVjbGFyZWQgb3V0c2lkZSBvZiB0aGUgd2hpbGUgbG9vcCBzbyB0aGF0IGl0J3Mgb25seSBjcmVhdGVkIG9uY2UuXG5cdFx0Ly8gKFRoaXMgZm4gaXMgZGVmaW5lZCBiZWZvcmUgaXQgaXMgdXNlZCwgaW4gb3JkZXIgdG8gcGFzcyBKU0hJTlQuXG5cdFx0Ly8gVW5mb3J0dW5hdGVseSB0aGlzIGJyZWFrcyB0aGUgc2VxdWVuY2luZyBvZiB0aGUgc3BlYyBjb21tZW50cy4gOi8gKVxuXHRcdGZ1bmN0aW9uIHBhcnNlRGVzY3JpcHRvcnMoKSB7XG5cblx0XHRcdC8vIDkuIERlc2NyaXB0b3IgcGFyc2VyOiBMZXQgZXJyb3IgYmUgbm8uXG5cdFx0XHR2YXIgcEVycm9yID0gZmFsc2UsXG5cblx0XHRcdC8vIDEwLiBMZXQgd2lkdGggYmUgYWJzZW50LlxuXHRcdFx0Ly8gMTEuIExldCBkZW5zaXR5IGJlIGFic2VudC5cblx0XHRcdC8vIDEyLiBMZXQgZnV0dXJlLWNvbXBhdC1oIGJlIGFic2VudC4gKFdlJ3JlIGltcGxlbWVudGluZyBpdCBub3cgYXMgaClcblx0XHRcdCAgICB3LCBkLCBoLCBpLFxuXHRcdFx0ICAgIGNhbmRpZGF0ZSA9IHt9LFxuXHRcdFx0ICAgIGRlc2MsIGxhc3RDaGFyLCB2YWx1ZSwgaW50VmFsLCBmbG9hdFZhbDtcblxuXHRcdFx0Ly8gMTMuIEZvciBlYWNoIGRlc2NyaXB0b3IgaW4gZGVzY3JpcHRvcnMsIHJ1biB0aGUgYXBwcm9wcmlhdGUgc2V0IG9mIHN0ZXBzXG5cdFx0XHQvLyBmcm9tIHRoZSBmb2xsb3dpbmcgbGlzdDpcblx0XHRcdGZvciAoaSA9IDAgOyBpIDwgZGVzY3JpcHRvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0ZGVzYyA9IGRlc2NyaXB0b3JzWyBpIF07XG5cblx0XHRcdFx0bGFzdENoYXIgPSBkZXNjWyBkZXNjLmxlbmd0aCAtIDEgXTtcblx0XHRcdFx0dmFsdWUgPSBkZXNjLnN1YnN0cmluZygwLCBkZXNjLmxlbmd0aCAtIDEpO1xuXHRcdFx0XHRpbnRWYWwgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuXHRcdFx0XHRmbG9hdFZhbCA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG5cdFx0XHRcdC8vIElmIHRoZSBkZXNjcmlwdG9yIGNvbnNpc3RzIG9mIGEgdmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXIgZm9sbG93ZWQgYnlcblx0XHRcdFx0Ly8gYSBVKzAwNzcgTEFUSU4gU01BTEwgTEVUVEVSIFcgY2hhcmFjdGVyXG5cdFx0XHRcdGlmIChyZWdleE5vbk5lZ2F0aXZlSW50ZWdlci50ZXN0KHZhbHVlKSAmJiAobGFzdENoYXIgPT09IFwid1wiKSkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2lkdGggYW5kIGRlbnNpdHkgYXJlIG5vdCBib3RoIGFic2VudCwgdGhlbiBsZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHRcdGlmICh3IHx8IGQpIHtwRXJyb3IgPSB0cnVlO31cblxuXHRcdFx0XHRcdC8vIEFwcGx5IHRoZSBydWxlcyBmb3IgcGFyc2luZyBub24tbmVnYXRpdmUgaW50ZWdlcnMgdG8gdGhlIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHJlc3VsdCBpcyB6ZXJvLCBsZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHRcdC8vIE90aGVyd2lzZSwgbGV0IHdpZHRoIGJlIHRoZSByZXN1bHQuXG5cdFx0XHRcdFx0aWYgKGludFZhbCA9PT0gMCkge3BFcnJvciA9IHRydWU7fSBlbHNlIHt3ID0gaW50VmFsO31cblxuXHRcdFx0XHQvLyBJZiB0aGUgZGVzY3JpcHRvciBjb25zaXN0cyBvZiBhIHZhbGlkIGZsb2F0aW5nLXBvaW50IG51bWJlciBmb2xsb3dlZCBieVxuXHRcdFx0XHQvLyBhIFUrMDA3OCBMQVRJTiBTTUFMTCBMRVRURVIgWCBjaGFyYWN0ZXJcblx0XHRcdFx0fSBlbHNlIGlmIChyZWdleEZsb2F0aW5nUG9pbnQudGVzdCh2YWx1ZSkgJiYgKGxhc3RDaGFyID09PSBcInhcIikpIHtcblxuXHRcdFx0XHRcdC8vIElmIHdpZHRoLCBkZW5zaXR5IGFuZCBmdXR1cmUtY29tcGF0LWggYXJlIG5vdCBhbGwgYWJzZW50LCB0aGVuIGxldCBlcnJvclxuXHRcdFx0XHRcdC8vIGJlIHllcy5cblx0XHRcdFx0XHRpZiAodyB8fCBkIHx8IGgpIHtwRXJyb3IgPSB0cnVlO31cblxuXHRcdFx0XHRcdC8vIEFwcGx5IHRoZSBydWxlcyBmb3IgcGFyc2luZyBmbG9hdGluZy1wb2ludCBudW1iZXIgdmFsdWVzIHRvIHRoZSBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdC8vIElmIHRoZSByZXN1bHQgaXMgbGVzcyB0aGFuIHplcm8sIGxldCBlcnJvciBiZSB5ZXMuIE90aGVyd2lzZSwgbGV0IGRlbnNpdHlcblx0XHRcdFx0XHQvLyBiZSB0aGUgcmVzdWx0LlxuXHRcdFx0XHRcdGlmIChmbG9hdFZhbCA8IDApIHtwRXJyb3IgPSB0cnVlO30gZWxzZSB7ZCA9IGZsb2F0VmFsO31cblxuXHRcdFx0XHQvLyBJZiB0aGUgZGVzY3JpcHRvciBjb25zaXN0cyBvZiBhIHZhbGlkIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyIGZvbGxvd2VkIGJ5XG5cdFx0XHRcdC8vIGEgVSswMDY4IExBVElOIFNNQUxMIExFVFRFUiBIIGNoYXJhY3RlclxuXHRcdFx0XHR9IGVsc2UgaWYgKHJlZ2V4Tm9uTmVnYXRpdmVJbnRlZ2VyLnRlc3QodmFsdWUpICYmIChsYXN0Q2hhciA9PT0gXCJoXCIpKSB7XG5cblx0XHRcdFx0XHQvLyBJZiBoZWlnaHQgYW5kIGRlbnNpdHkgYXJlIG5vdCBib3RoIGFic2VudCwgdGhlbiBsZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHRcdGlmIChoIHx8IGQpIHtwRXJyb3IgPSB0cnVlO31cblxuXHRcdFx0XHRcdC8vIEFwcGx5IHRoZSBydWxlcyBmb3IgcGFyc2luZyBub24tbmVnYXRpdmUgaW50ZWdlcnMgdG8gdGhlIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHJlc3VsdCBpcyB6ZXJvLCBsZXQgZXJyb3IgYmUgeWVzLiBPdGhlcndpc2UsIGxldCBmdXR1cmUtY29tcGF0LWhcblx0XHRcdFx0XHQvLyBiZSB0aGUgcmVzdWx0LlxuXHRcdFx0XHRcdGlmIChpbnRWYWwgPT09IDApIHtwRXJyb3IgPSB0cnVlO30gZWxzZSB7aCA9IGludFZhbDt9XG5cblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSwgTGV0IGVycm9yIGJlIHllcy5cblx0XHRcdFx0fSBlbHNlIHtwRXJyb3IgPSB0cnVlO31cblx0XHRcdH0gLy8gKGNsb3NlIHN0ZXAgMTMgZm9yIGxvb3ApXG5cblx0XHRcdC8vIDE1LiBJZiBlcnJvciBpcyBzdGlsbCBubywgdGhlbiBhcHBlbmQgYSBuZXcgaW1hZ2Ugc291cmNlIHRvIGNhbmRpZGF0ZXMgd2hvc2Vcblx0XHRcdC8vIFVSTCBpcyB1cmwsIGFzc29jaWF0ZWQgd2l0aCBhIHdpZHRoIHdpZHRoIGlmIG5vdCBhYnNlbnQgYW5kIGEgcGl4ZWxcblx0XHRcdC8vIGRlbnNpdHkgZGVuc2l0eSBpZiBub3QgYWJzZW50LiBPdGhlcndpc2UsIHRoZXJlIGlzIGEgcGFyc2UgZXJyb3IuXG5cdFx0XHRpZiAoIXBFcnJvcikge1xuXHRcdFx0XHRjYW5kaWRhdGUudXJsID0gdXJsO1xuXG5cdFx0XHRcdGlmICh3KSB7IGNhbmRpZGF0ZS53ID0gdzt9XG5cdFx0XHRcdGlmIChkKSB7IGNhbmRpZGF0ZS5kID0gZDt9XG5cdFx0XHRcdGlmIChoKSB7IGNhbmRpZGF0ZS5oID0gaDt9XG5cdFx0XHRcdGlmICghaCAmJiAhZCAmJiAhdykge2NhbmRpZGF0ZS5kID0gMTt9XG5cdFx0XHRcdGlmIChjYW5kaWRhdGUuZCA9PT0gMSkge3NldC5oYXMxeCA9IHRydWU7fVxuXHRcdFx0XHRjYW5kaWRhdGUuc2V0ID0gc2V0O1xuXG5cdFx0XHRcdGNhbmRpZGF0ZXMucHVzaChjYW5kaWRhdGUpO1xuXHRcdFx0fVxuXHRcdH0gLy8gKGNsb3NlIHBhcnNlRGVzY3JpcHRvcnMgZm4pXG5cblx0XHQvKipcblx0XHQqIFRva2VuaXplcyBkZXNjcmlwdG9yIHByb3BlcnRpZXMgcHJpb3IgdG8gcGFyc2luZ1xuXHRcdCogUmV0dXJucyB1bmRlZmluZWQuXG5cdFx0KiAoQWdhaW4sIHRoaXMgZm4gaXMgZGVmaW5lZCBiZWZvcmUgaXQgaXMgdXNlZCwgaW4gb3JkZXIgdG8gcGFzcyBKU0hJTlQuXG5cdFx0KiBVbmZvcnR1bmF0ZWx5IHRoaXMgYnJlYWtzIHRoZSBsb2dpY2FsIHNlcXVlbmNpbmcgb2YgdGhlIHNwZWMgY29tbWVudHMuIDovIClcblx0XHQqL1xuXHRcdGZ1bmN0aW9uIHRva2VuaXplKCkge1xuXG5cdFx0XHQvLyA4LjEuIERlc2NyaXB0b3IgdG9rZW5pc2VyOiBTa2lwIHdoaXRlc3BhY2Vcblx0XHRcdGNvbGxlY3RDaGFyYWN0ZXJzKHJlZ2V4TGVhZGluZ1NwYWNlcyk7XG5cblx0XHRcdC8vIDguMi4gTGV0IGN1cnJlbnQgZGVzY3JpcHRvciBiZSB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBcIlwiO1xuXG5cdFx0XHQvLyA4LjMuIExldCBzdGF0ZSBiZSBpbiBkZXNjcmlwdG9yLlxuXHRcdFx0c3RhdGUgPSBcImluIGRlc2NyaXB0b3JcIjtcblxuXHRcdFx0d2hpbGUgKHRydWUpIHtcblxuXHRcdFx0XHQvLyA4LjQuIExldCBjIGJlIHRoZSBjaGFyYWN0ZXIgYXQgcG9zaXRpb24uXG5cdFx0XHRcdGMgPSBpbnB1dC5jaGFyQXQocG9zKTtcblxuXHRcdFx0XHQvLyAgRG8gdGhlIGZvbGxvd2luZyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIHN0YXRlLlxuXHRcdFx0XHQvLyAgRm9yIHRoZSBwdXJwb3NlIG9mIHRoaXMgc3RlcCwgXCJFT0ZcIiBpcyBhIHNwZWNpYWwgY2hhcmFjdGVyIHJlcHJlc2VudGluZ1xuXHRcdFx0XHQvLyAgdGhhdCBwb3NpdGlvbiBpcyBwYXN0IHRoZSBlbmQgb2YgaW5wdXQuXG5cblx0XHRcdFx0Ly8gSW4gZGVzY3JpcHRvclxuXHRcdFx0XHRpZiAoc3RhdGUgPT09IFwiaW4gZGVzY3JpcHRvclwiKSB7XG5cdFx0XHRcdFx0Ly8gRG8gdGhlIGZvbGxvd2luZywgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBjOlxuXG5cdFx0XHRcdCAgLy8gU3BhY2UgY2hhcmFjdGVyXG5cdFx0XHRcdCAgLy8gSWYgY3VycmVudCBkZXNjcmlwdG9yIGlzIG5vdCBlbXB0eSwgYXBwZW5kIGN1cnJlbnQgZGVzY3JpcHRvciB0b1xuXHRcdFx0XHQgIC8vIGRlc2NyaXB0b3JzIGFuZCBsZXQgY3VycmVudCBkZXNjcmlwdG9yIGJlIHRoZSBlbXB0eSBzdHJpbmcuXG5cdFx0XHRcdCAgLy8gU2V0IHN0YXRlIHRvIGFmdGVyIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0aWYgKGlzU3BhY2UoYykpIHtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50RGVzY3JpcHRvcikge1xuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdG9ycy5wdXNoKGN1cnJlbnREZXNjcmlwdG9yKTtcblx0XHRcdFx0XHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBcIlwiO1xuXHRcdFx0XHRcdFx0XHRzdGF0ZSA9IFwiYWZ0ZXIgZGVzY3JpcHRvclwiO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gVSswMDJDIENPTU1BICgsKVxuXHRcdFx0XHRcdC8vIEFkdmFuY2UgcG9zaXRpb24gdG8gdGhlIG5leHQgY2hhcmFjdGVyIGluIGlucHV0LiBJZiBjdXJyZW50IGRlc2NyaXB0b3Jcblx0XHRcdFx0XHQvLyBpcyBub3QgZW1wdHksIGFwcGVuZCBjdXJyZW50IGRlc2NyaXB0b3IgdG8gZGVzY3JpcHRvcnMuIEp1bXAgdG8gdGhlIHN0ZXBcblx0XHRcdFx0XHQvLyBsYWJlbGVkIGRlc2NyaXB0b3IgcGFyc2VyLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gXCIsXCIpIHtcblx0XHRcdFx0XHRcdHBvcyArPSAxO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnREZXNjcmlwdG9yKSB7XG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0b3JzLnB1c2goY3VycmVudERlc2NyaXB0b3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cGFyc2VEZXNjcmlwdG9ycygpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gVSswMDI4IExFRlQgUEFSRU5USEVTSVMgKCgpXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGMgdG8gY3VycmVudCBkZXNjcmlwdG9yLiBTZXQgc3RhdGUgdG8gaW4gcGFyZW5zLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gXCJcXHUwMDI4XCIpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnREZXNjcmlwdG9yID0gY3VycmVudERlc2NyaXB0b3IgKyBjO1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBcImluIHBhcmVuc1wiO1xuXG5cdFx0XHRcdFx0Ly8gRU9GXG5cdFx0XHRcdFx0Ly8gSWYgY3VycmVudCBkZXNjcmlwdG9yIGlzIG5vdCBlbXB0eSwgYXBwZW5kIGN1cnJlbnQgZGVzY3JpcHRvciB0b1xuXHRcdFx0XHRcdC8vIGRlc2NyaXB0b3JzLiBKdW1wIHRvIHRoZSBzdGVwIGxhYmVsZWQgZGVzY3JpcHRvciBwYXJzZXIuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudERlc2NyaXB0b3IpIHtcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRvcnMucHVzaChjdXJyZW50RGVzY3JpcHRvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGMgdG8gY3VycmVudCBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IGN1cnJlbnREZXNjcmlwdG9yICsgYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdC8vIChlbmQgXCJpbiBkZXNjcmlwdG9yXCJcblxuXHRcdFx0XHQvLyBJbiBwYXJlbnNcblx0XHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJpbiBwYXJlbnNcIikge1xuXG5cdFx0XHRcdFx0Ly8gVSswMDI5IFJJR0hUIFBBUkVOVEhFU0lTICgpKVxuXHRcdFx0XHRcdC8vIEFwcGVuZCBjIHRvIGN1cnJlbnQgZGVzY3JpcHRvci4gU2V0IHN0YXRlIHRvIGluIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0aWYgKGMgPT09IFwiKVwiKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IGN1cnJlbnREZXNjcmlwdG9yICsgYztcblx0XHRcdFx0XHRcdHN0YXRlID0gXCJpbiBkZXNjcmlwdG9yXCI7XG5cblx0XHRcdFx0XHQvLyBFT0Zcblx0XHRcdFx0XHQvLyBBcHBlbmQgY3VycmVudCBkZXNjcmlwdG9yIHRvIGRlc2NyaXB0b3JzLiBKdW1wIHRvIHRoZSBzdGVwIGxhYmVsZWRcblx0XHRcdFx0XHQvLyBkZXNjcmlwdG9yIHBhcnNlci5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09IFwiXCIpIHtcblx0XHRcdFx0XHRcdGRlc2NyaXB0b3JzLnB1c2goY3VycmVudERlc2NyaXB0b3IpO1xuXHRcdFx0XHRcdFx0cGFyc2VEZXNjcmlwdG9ycygpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZVxuXHRcdFx0XHRcdC8vIEFwcGVuZCBjIHRvIGN1cnJlbnQgZGVzY3JpcHRvci5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBjdXJyZW50RGVzY3JpcHRvciArIGM7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFmdGVyIGRlc2NyaXB0b3Jcblx0XHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJhZnRlciBkZXNjcmlwdG9yXCIpIHtcblxuXHRcdFx0XHRcdC8vIERvIHRoZSBmb2xsb3dpbmcsIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgYzpcblx0XHRcdFx0XHQvLyBTcGFjZSBjaGFyYWN0ZXI6IFN0YXkgaW4gdGhpcyBzdGF0ZS5cblx0XHRcdFx0XHRpZiAoaXNTcGFjZShjKSkge1xuXG5cdFx0XHRcdFx0Ly8gRU9GOiBKdW1wIHRvIHRoZSBzdGVwIGxhYmVsZWQgZGVzY3JpcHRvciBwYXJzZXIuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlXG5cdFx0XHRcdFx0Ly8gU2V0IHN0YXRlIHRvIGluIGRlc2NyaXB0b3IuIFNldCBwb3NpdGlvbiB0byB0aGUgcHJldmlvdXMgY2hhcmFjdGVyIGluIGlucHV0LlxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFwiaW4gZGVzY3JpcHRvclwiO1xuXHRcdFx0XHRcdFx0cG9zIC09IDE7XG5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBZHZhbmNlIHBvc2l0aW9uIHRvIHRoZSBuZXh0IGNoYXJhY3RlciBpbiBpbnB1dC5cblx0XHRcdFx0cG9zICs9IDE7XG5cblx0XHRcdC8vIFJlcGVhdCB0aGlzIHN0ZXAuXG5cdFx0XHR9IC8vIChjbG9zZSB3aGlsZSB0cnVlIGxvb3ApXG5cdFx0fVxuXG5cdFx0Ly8gNC4gU3BsaXR0aW5nIGxvb3A6IENvbGxlY3QgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIHNwYWNlXG5cdFx0Ly8gICAgY2hhcmFjdGVycyBvciBVKzAwMkMgQ09NTUEgY2hhcmFjdGVycy4gSWYgYW55IFUrMDAyQyBDT01NQSBjaGFyYWN0ZXJzXG5cdFx0Ly8gICAgd2VyZSBjb2xsZWN0ZWQsIHRoYXQgaXMgYSBwYXJzZSBlcnJvci5cblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0Y29sbGVjdENoYXJhY3RlcnMocmVnZXhMZWFkaW5nQ29tbWFzT3JTcGFjZXMpO1xuXG5cdFx0XHQvLyA1LiBJZiBwb3NpdGlvbiBpcyBwYXN0IHRoZSBlbmQgb2YgaW5wdXQsIHJldHVybiBjYW5kaWRhdGVzIGFuZCBhYm9ydCB0aGVzZSBzdGVwcy5cblx0XHRcdGlmIChwb3MgPj0gaW5wdXRMZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGNhbmRpZGF0ZXM7IC8vICh3ZSdyZSBkb25lLCB0aGlzIGlzIHRoZSBzb2xlIHJldHVybiBwYXRoKVxuXHRcdFx0fVxuXG5cdFx0XHQvLyA2LiBDb2xsZWN0IGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyB0aGF0IGFyZSBub3Qgc3BhY2UgY2hhcmFjdGVycyxcblx0XHRcdC8vICAgIGFuZCBsZXQgdGhhdCBiZSB1cmwuXG5cdFx0XHR1cmwgPSBjb2xsZWN0Q2hhcmFjdGVycyhyZWdleExlYWRpbmdOb3RTcGFjZXMpO1xuXG5cdFx0XHQvLyA3LiBMZXQgZGVzY3JpcHRvcnMgYmUgYSBuZXcgZW1wdHkgbGlzdC5cblx0XHRcdGRlc2NyaXB0b3JzID0gW107XG5cblx0XHRcdC8vIDguIElmIHVybCBlbmRzIHdpdGggYSBVKzAwMkMgQ09NTUEgY2hhcmFjdGVyICgsKSwgZm9sbG93IHRoZXNlIHN1YnN0ZXBzOlxuXHRcdFx0Ly9cdFx0KDEpLiBSZW1vdmUgYWxsIHRyYWlsaW5nIFUrMDAyQyBDT01NQSBjaGFyYWN0ZXJzIGZyb20gdXJsLiBJZiB0aGlzIHJlbW92ZWRcblx0XHRcdC8vICAgICAgICAgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoYXQgaXMgYSBwYXJzZSBlcnJvci5cblx0XHRcdGlmICh1cmwuc2xpY2UoLTEpID09PSBcIixcIikge1xuXHRcdFx0XHR1cmwgPSB1cmwucmVwbGFjZShyZWdleFRyYWlsaW5nQ29tbWFzLCBcIlwiKTtcblx0XHRcdFx0Ly8gKEp1bXAgYWhlYWQgdG8gc3RlcCA5IHRvIHNraXAgdG9rZW5pemF0aW9uIGFuZCBqdXN0IHB1c2ggdGhlIGNhbmRpZGF0ZSkuXG5cdFx0XHRcdHBhcnNlRGVzY3JpcHRvcnMoKTtcblxuXHRcdFx0Ly9cdE90aGVyd2lzZSwgZm9sbG93IHRoZXNlIHN1YnN0ZXBzOlxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9rZW5pemUoKTtcblx0XHRcdH0gLy8gKGNsb3NlIGVsc2Ugb2Ygc3RlcCA4KVxuXG5cdFx0Ly8gMTYuIFJldHVybiB0byB0aGUgc3RlcCBsYWJlbGVkIHNwbGl0dGluZyBsb29wLlxuXHRcdH0gLy8gKENsb3NlIG9mIGJpZyB3aGlsZSBsb29wLilcblx0fVxuXG5cdC8qXG5cdCAqIFNpemVzIFBhcnNlclxuXHQgKlxuXHQgKiBCeSBBbGV4IEJlbGwgfCAgTUlUIExpY2Vuc2Vcblx0ICpcblx0ICogTm9uLXN0cmljdCBidXQgYWNjdXJhdGUgYW5kIGxpZ2h0d2VpZ2h0IEpTIFBhcnNlciBmb3IgdGhlIHN0cmluZyB2YWx1ZSA8aW1nIHNpemVzPVwiaGVyZVwiPlxuXHQgKlxuXHQgKiBSZWZlcmVuY2UgYWxnb3JpdGhtIGF0OlxuXHQgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9lbWJlZGRlZC1jb250ZW50Lmh0bWwjcGFyc2UtYS1zaXplcy1hdHRyaWJ1dGVcblx0ICpcblx0ICogTW9zdCBjb21tZW50cyBhcmUgY29waWVkIGluIGRpcmVjdGx5IGZyb20gdGhlIHNwZWNcblx0ICogKGV4Y2VwdCBmb3IgY29tbWVudHMgaW4gcGFyZW5zKS5cblx0ICpcblx0ICogR3JhbW1hciBpczpcblx0ICogPHNvdXJjZS1zaXplLWxpc3Q+ID0gPHNvdXJjZS1zaXplPiMgWyAsIDxzb3VyY2Utc2l6ZS12YWx1ZT4gXT8gfCA8c291cmNlLXNpemUtdmFsdWU+XG5cdCAqIDxzb3VyY2Utc2l6ZT4gPSA8bWVkaWEtY29uZGl0aW9uPiA8c291cmNlLXNpemUtdmFsdWU+XG5cdCAqIDxzb3VyY2Utc2l6ZS12YWx1ZT4gPSA8bGVuZ3RoPlxuXHQgKiBodHRwOi8vd3d3LnczLm9yZy9odG1sL3dnL2RyYWZ0cy9odG1sL21hc3Rlci9lbWJlZGRlZC1jb250ZW50Lmh0bWwjYXR0ci1pbWctc2l6ZXNcblx0ICpcblx0ICogRS5nLiBcIihtYXgtd2lkdGg6IDMwZW0pIDEwMHZ3LCAobWF4LXdpZHRoOiA1MGVtKSA3MHZ3LCAxMDB2d1wiXG5cdCAqIG9yIFwiKG1pbi13aWR0aDogMzBlbSksIGNhbGMoMzB2dyAtIDE1cHgpXCIgb3IganVzdCBcIjMwdndcIlxuXHQgKlxuXHQgKiBSZXR1cm5zIHRoZSBmaXJzdCB2YWxpZCA8Y3NzLWxlbmd0aD4gd2l0aCBhIG1lZGlhIGNvbmRpdGlvbiB0aGF0IGV2YWx1YXRlcyB0byB0cnVlLFxuXHQgKiBvciBcIjEwMHZ3XCIgaWYgYWxsIHZhbGlkIG1lZGlhIGNvbmRpdGlvbnMgZXZhbHVhdGUgdG8gZmFsc2UuXG5cdCAqXG5cdCAqL1xuXG5cdGZ1bmN0aW9uIHBhcnNlU2l6ZXMoc3RyVmFsdWUpIHtcblxuXHRcdC8vIChQZXJjZW50YWdlIENTUyBsZW5ndGhzIGFyZSBub3QgYWxsb3dlZCBpbiB0aGlzIGNhc2UsIHRvIGF2b2lkIGNvbmZ1c2lvbjpcblx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9lbWJlZGRlZC1jb250ZW50Lmh0bWwjdmFsaWQtc291cmNlLXNpemUtbGlzdFxuXHRcdC8vIENTUyBhbGxvd3MgYSBzaW5nbGUgb3B0aW9uYWwgcGx1cyBvciBtaW51cyBzaWduOlxuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIvc3luZGF0YS5odG1sI251bWJlcnNcblx0XHQvLyBDU1MgaXMgQVNDSUkgY2FzZS1pbnNlbnNpdGl2ZTpcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyL3N5bmRhdGEuaHRtbCNjaGFyYWN0ZXJzIClcblx0XHQvLyBTcGVjIGFsbG93cyBleHBvbmVudGlhbCBub3RhdGlvbiBmb3IgPG51bWJlcj4gdHlwZTpcblx0XHQvLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtdmFsdWVzLyNudW1iZXJzXG5cdFx0dmFyIHJlZ2V4Q3NzTGVuZ3RoV2l0aFVuaXRzID0gL14oPzpbKy1dP1swLTldK3xbMC05XSpcXC5bMC05XSspKD86W2VFXVsrLV0/WzAtOV0rKT8oPzpjaHxjbXxlbXxleHxpbnxtbXxwY3xwdHxweHxyZW18dmh8dm1pbnx2bWF4fHZ3KSQvaTtcblxuXHRcdC8vIChUaGlzIGlzIGEgcXVpY2sgYW5kIGxlbmllbnQgdGVzdC4gQmVjYXVzZSBvZiBvcHRpb25hbCB1bmxpbWl0ZWQtZGVwdGggaW50ZXJuYWxcblx0XHQvLyBncm91cGluZyBwYXJlbnMgYW5kIHN0cmljdCBzcGFjaW5nIHJ1bGVzLCB0aGlzIGNvdWxkIGdldCB2ZXJ5IGNvbXBsaWNhdGVkLilcblx0XHR2YXIgcmVnZXhDc3NDYWxjID0gL15jYWxjXFwoKD86WzAtOWEteiBcXC5cXCtcXC1cXCpcXC9cXChcXCldKylcXCkkL2k7XG5cblx0XHR2YXIgaTtcblx0XHR2YXIgdW5wYXJzZWRTaXplc0xpc3Q7XG5cdFx0dmFyIHVucGFyc2VkU2l6ZXNMaXN0TGVuZ3RoO1xuXHRcdHZhciB1bnBhcnNlZFNpemU7XG5cdFx0dmFyIGxhc3RDb21wb25lbnRWYWx1ZTtcblx0XHR2YXIgc2l6ZTtcblxuXHRcdC8vIFVUSUxJVFkgRlVOQ1RJT05TXG5cblx0XHQvLyAgKFRveSBDU1MgcGFyc2VyLiBUaGUgZ29hbHMgaGVyZSBhcmU6XG5cdFx0Ly8gIDEpIGV4cGFuc2l2ZSB0ZXN0IGNvdmVyYWdlIHdpdGhvdXQgdGhlIHdlaWdodCBvZiBhIGZ1bGwgQ1NTIHBhcnNlci5cblx0XHQvLyAgMikgQXZvaWRpbmcgcmVnZXggd2hlcmV2ZXIgY29udmVuaWVudC5cblx0XHQvLyAgUXVpY2sgdGVzdHM6IGh0dHA6Ly9qc2ZpZGRsZS5uZXQvZ3RudEw0Z3IvMy9cblx0XHQvLyAgUmV0dXJucyBhbiBhcnJheSBvZiBhcnJheXMuKVxuXHRcdGZ1bmN0aW9uIHBhcnNlQ29tcG9uZW50VmFsdWVzKHN0cikge1xuXHRcdFx0dmFyIGNocmN0cjtcblx0XHRcdHZhciBjb21wb25lbnQgPSBcIlwiO1xuXHRcdFx0dmFyIGNvbXBvbmVudEFycmF5ID0gW107XG5cdFx0XHR2YXIgbGlzdEFycmF5ID0gW107XG5cdFx0XHR2YXIgcGFyZW5EZXB0aCA9IDA7XG5cdFx0XHR2YXIgcG9zID0gMDtcblx0XHRcdHZhciBpbkNvbW1lbnQgPSBmYWxzZTtcblxuXHRcdFx0ZnVuY3Rpb24gcHVzaENvbXBvbmVudCgpIHtcblx0XHRcdFx0aWYgKGNvbXBvbmVudCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudEFycmF5LnB1c2goY29tcG9uZW50KTtcblx0XHRcdFx0XHRjb21wb25lbnQgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIHB1c2hDb21wb25lbnRBcnJheSgpIHtcblx0XHRcdFx0aWYgKGNvbXBvbmVudEFycmF5WzBdKSB7XG5cdFx0XHRcdFx0bGlzdEFycmF5LnB1c2goY29tcG9uZW50QXJyYXkpO1xuXHRcdFx0XHRcdGNvbXBvbmVudEFycmF5ID0gW107XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gKExvb3AgZm9yd2FyZHMgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmcuKVxuXHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0Y2hyY3RyID0gc3RyLmNoYXJBdChwb3MpO1xuXG5cdFx0XHRcdGlmIChjaHJjdHIgPT09IFwiXCIpIHsgLy8gKCBFbmQgb2Ygc3RyaW5nIHJlYWNoZWQuKVxuXHRcdFx0XHRcdHB1c2hDb21wb25lbnQoKTtcblx0XHRcdFx0XHRwdXNoQ29tcG9uZW50QXJyYXkoKTtcblx0XHRcdFx0XHRyZXR1cm4gbGlzdEFycmF5O1xuXHRcdFx0XHR9IGVsc2UgaWYgKGluQ29tbWVudCkge1xuXHRcdFx0XHRcdGlmICgoY2hyY3RyID09PSBcIipcIikgJiYgKHN0cltwb3MgKyAxXSA9PT0gXCIvXCIpKSB7IC8vIChBdCBlbmQgb2YgYSBjb21tZW50Lilcblx0XHRcdFx0XHRcdGluQ29tbWVudCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0cG9zICs9IDI7XG5cdFx0XHRcdFx0XHRwdXNoQ29tcG9uZW50KCk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cG9zICs9IDE7IC8vIChTa2lwIGFsbCBjaGFyYWN0ZXJzIGluc2lkZSBjb21tZW50cy4pXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNTcGFjZShjaHJjdHIpKSB7XG5cdFx0XHRcdFx0Ly8gKElmIHByZXZpb3VzIGNoYXJhY3RlciBpbiBsb29wIHdhcyBhbHNvIGEgc3BhY2UsIG9yIGlmXG5cdFx0XHRcdFx0Ly8gYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgc3RyaW5nLCBkbyBub3QgYWRkIHNwYWNlIGNoYXIgdG9cblx0XHRcdFx0XHQvLyBjb21wb25lbnQuKVxuXHRcdFx0XHRcdGlmICggKHN0ci5jaGFyQXQocG9zIC0gMSkgJiYgaXNTcGFjZSggc3RyLmNoYXJBdChwb3MgLSAxKSApICkgfHwgIWNvbXBvbmVudCApIHtcblx0XHRcdFx0XHRcdHBvcyArPSAxO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwYXJlbkRlcHRoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRwdXNoQ29tcG9uZW50KCk7XG5cdFx0XHRcdFx0XHRwb3MgKz0xO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIChSZXBsYWNlIGFueSBzcGFjZSBjaGFyYWN0ZXIgd2l0aCBhIHBsYWluIHNwYWNlIGZvciBsZWdpYmlsaXR5Lilcblx0XHRcdFx0XHRcdGNocmN0ciA9IFwiIFwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChjaHJjdHIgPT09IFwiKFwiKSB7XG5cdFx0XHRcdFx0cGFyZW5EZXB0aCArPSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNocmN0ciA9PT0gXCIpXCIpIHtcblx0XHRcdFx0XHRwYXJlbkRlcHRoIC09IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hyY3RyID09PSBcIixcIikge1xuXHRcdFx0XHRcdHB1c2hDb21wb25lbnQoKTtcblx0XHRcdFx0XHRwdXNoQ29tcG9uZW50QXJyYXkoKTtcblx0XHRcdFx0XHRwb3MgKz0gMTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fSBlbHNlIGlmICggKGNocmN0ciA9PT0gXCIvXCIpICYmIChzdHIuY2hhckF0KHBvcyArIDEpID09PSBcIipcIikgKSB7XG5cdFx0XHRcdFx0aW5Db21tZW50ID0gdHJ1ZTtcblx0XHRcdFx0XHRwb3MgKz0gMjtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbXBvbmVudCA9IGNvbXBvbmVudCArIGNocmN0cjtcblx0XHRcdFx0cG9zICs9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaXNWYWxpZE5vbk5lZ2F0aXZlU291cmNlU2l6ZVZhbHVlKHMpIHtcblx0XHRcdGlmIChyZWdleENzc0xlbmd0aFdpdGhVbml0cy50ZXN0KHMpICYmIChwYXJzZUZsb2F0KHMpID49IDApKSB7cmV0dXJuIHRydWU7fVxuXHRcdFx0aWYgKHJlZ2V4Q3NzQ2FsYy50ZXN0KHMpKSB7cmV0dXJuIHRydWU7fVxuXHRcdFx0Ly8gKCBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyL3N5bmRhdGEuaHRtbCNudW1iZXJzIHNheXM6XG5cdFx0XHQvLyBcIi0wIGlzIGVxdWl2YWxlbnQgdG8gMCBhbmQgaXMgbm90IGEgbmVnYXRpdmUgbnVtYmVyLlwiIHdoaWNoIG1lYW5zIHRoYXRcblx0XHRcdC8vIHVuaXRsZXNzIHplcm8gYW5kIHVuaXRsZXNzIG5lZ2F0aXZlIHplcm8gbXVzdCBiZSBhY2NlcHRlZCBhcyBzcGVjaWFsIGNhc2VzLilcblx0XHRcdGlmICgocyA9PT0gXCIwXCIpIHx8IChzID09PSBcIi0wXCIpIHx8IChzID09PSBcIiswXCIpKSB7cmV0dXJuIHRydWU7fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIFdoZW4gYXNrZWQgdG8gcGFyc2UgYSBzaXplcyBhdHRyaWJ1dGUgZnJvbSBhbiBlbGVtZW50LCBwYXJzZSBhXG5cdFx0Ly8gY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgY29tcG9uZW50IHZhbHVlcyBmcm9tIHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCdzXG5cdFx0Ly8gc2l6ZXMgYXR0cmlidXRlIChvciB0aGUgZW1wdHkgc3RyaW5nLCBpZiB0aGUgYXR0cmlidXRlIGlzIGFic2VudCksIGFuZCBsZXRcblx0XHQvLyB1bnBhcnNlZCBzaXplcyBsaXN0IGJlIHRoZSByZXN1bHQuXG5cdFx0Ly8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLXN5bnRheC8jcGFyc2UtY29tbWEtc2VwYXJhdGVkLWxpc3Qtb2YtY29tcG9uZW50LXZhbHVlc1xuXG5cdFx0dW5wYXJzZWRTaXplc0xpc3QgPSBwYXJzZUNvbXBvbmVudFZhbHVlcyhzdHJWYWx1ZSk7XG5cdFx0dW5wYXJzZWRTaXplc0xpc3RMZW5ndGggPSB1bnBhcnNlZFNpemVzTGlzdC5sZW5ndGg7XG5cblx0XHQvLyBGb3IgZWFjaCB1bnBhcnNlZCBzaXplIGluIHVucGFyc2VkIHNpemVzIGxpc3Q6XG5cdFx0Zm9yIChpID0gMDsgaSA8IHVucGFyc2VkU2l6ZXNMaXN0TGVuZ3RoOyBpKyspIHtcblx0XHRcdHVucGFyc2VkU2l6ZSA9IHVucGFyc2VkU2l6ZXNMaXN0W2ldO1xuXG5cdFx0XHQvLyAxLiBSZW1vdmUgYWxsIGNvbnNlY3V0aXZlIDx3aGl0ZXNwYWNlLXRva2VuPnMgZnJvbSB0aGUgZW5kIG9mIHVucGFyc2VkIHNpemUuXG5cdFx0XHQvLyAoIHBhcnNlQ29tcG9uZW50VmFsdWVzKCkgYWxyZWFkeSBvbWl0cyBzcGFjZXMgb3V0c2lkZSBvZiBwYXJlbnMuIClcblxuXHRcdFx0Ly8gSWYgdW5wYXJzZWQgc2l6ZSBpcyBub3cgZW1wdHksIHRoYXQgaXMgYSBwYXJzZSBlcnJvcjsgY29udGludWUgdG8gdGhlIG5leHRcblx0XHRcdC8vIGl0ZXJhdGlvbiBvZiB0aGlzIGFsZ29yaXRobS5cblx0XHRcdC8vICggcGFyc2VDb21wb25lbnRWYWx1ZXMoKSB3b24ndCBwdXNoIGFuIGVtcHR5IGFycmF5LiApXG5cblx0XHRcdC8vIDIuIElmIHRoZSBsYXN0IGNvbXBvbmVudCB2YWx1ZSBpbiB1bnBhcnNlZCBzaXplIGlzIGEgdmFsaWQgbm9uLW5lZ2F0aXZlXG5cdFx0XHQvLyA8c291cmNlLXNpemUtdmFsdWU+LCBsZXQgc2l6ZSBiZSBpdHMgdmFsdWUgYW5kIHJlbW92ZSB0aGUgY29tcG9uZW50IHZhbHVlXG5cdFx0XHQvLyBmcm9tIHVucGFyc2VkIHNpemUuIEFueSBDU1MgZnVuY3Rpb24gb3RoZXIgdGhhbiB0aGUgY2FsYygpIGZ1bmN0aW9uIGlzXG5cdFx0XHQvLyBpbnZhbGlkLiBPdGhlcndpc2UsIHRoZXJlIGlzIGEgcGFyc2UgZXJyb3I7IGNvbnRpbnVlIHRvIHRoZSBuZXh0IGl0ZXJhdGlvblxuXHRcdFx0Ly8gb2YgdGhpcyBhbGdvcml0aG0uXG5cdFx0XHQvLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3Mtc3ludGF4LyNwYXJzZS1jb21wb25lbnQtdmFsdWVcblx0XHRcdGxhc3RDb21wb25lbnRWYWx1ZSA9IHVucGFyc2VkU2l6ZVt1bnBhcnNlZFNpemUubGVuZ3RoIC0gMV07XG5cblx0XHRcdGlmIChpc1ZhbGlkTm9uTmVnYXRpdmVTb3VyY2VTaXplVmFsdWUobGFzdENvbXBvbmVudFZhbHVlKSkge1xuXHRcdFx0XHRzaXplID0gbGFzdENvbXBvbmVudFZhbHVlO1xuXHRcdFx0XHR1bnBhcnNlZFNpemUucG9wKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gMy4gUmVtb3ZlIGFsbCBjb25zZWN1dGl2ZSA8d2hpdGVzcGFjZS10b2tlbj5zIGZyb20gdGhlIGVuZCBvZiB1bnBhcnNlZFxuXHRcdFx0Ly8gc2l6ZS4gSWYgdW5wYXJzZWQgc2l6ZSBpcyBub3cgZW1wdHksIHJldHVybiBzaXplIGFuZCBleGl0IHRoaXMgYWxnb3JpdGhtLlxuXHRcdFx0Ly8gSWYgdGhpcyB3YXMgbm90IHRoZSBsYXN0IGl0ZW0gaW4gdW5wYXJzZWQgc2l6ZXMgbGlzdCwgdGhhdCBpcyBhIHBhcnNlIGVycm9yLlxuXHRcdFx0aWYgKHVucGFyc2VkU2l6ZS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHNpemU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIDQuIFBhcnNlIHRoZSByZW1haW5pbmcgY29tcG9uZW50IHZhbHVlcyBpbiB1bnBhcnNlZCBzaXplIGFzIGFcblx0XHRcdC8vIDxtZWRpYS1jb25kaXRpb24+LiBJZiBpdCBkb2VzIG5vdCBwYXJzZSBjb3JyZWN0bHksIG9yIGl0IGRvZXMgcGFyc2Vcblx0XHRcdC8vIGNvcnJlY3RseSBidXQgdGhlIDxtZWRpYS1jb25kaXRpb24+IGV2YWx1YXRlcyB0byBmYWxzZSwgY29udGludWUgdG8gdGhlXG5cdFx0XHQvLyBuZXh0IGl0ZXJhdGlvbiBvZiB0aGlzIGFsZ29yaXRobS5cblx0XHRcdC8vIChQYXJzaW5nIGFsbCBwb3NzaWJsZSBjb21wb3VuZCBtZWRpYSBjb25kaXRpb25zIGluIEpTIGlzIGhlYXZ5LCBjb21wbGljYXRlZCxcblx0XHRcdC8vIGFuZCB0aGUgcGF5b2ZmIGlzIHVuY2xlYXIuIElzIHRoZXJlIGV2ZXIgYW4gc2l0dWF0aW9uIHdoZXJlIHRoZVxuXHRcdFx0Ly8gbWVkaWEgY29uZGl0aW9uIHBhcnNlcyBpbmNvcnJlY3RseSBidXQgc3RpbGwgc29tZWhvdyBldmFsdWF0ZXMgdG8gdHJ1ZT9cblx0XHRcdC8vIENhbiB3ZSBqdXN0IHJlbHkgb24gdGhlIGJyb3dzZXIvcG9seWZpbGwgdG8gZG8gaXQ/KVxuXHRcdFx0dW5wYXJzZWRTaXplID0gdW5wYXJzZWRTaXplLmpvaW4oXCIgXCIpO1xuXHRcdFx0aWYgKCEocGYubWF0Y2hlc01lZGlhKCB1bnBhcnNlZFNpemUgKSApICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gNS4gUmV0dXJuIHNpemUgYW5kIGV4aXQgdGhpcyBhbGdvcml0aG0uXG5cdFx0XHRyZXR1cm4gc2l6ZTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgYWJvdmUgYWxnb3JpdGhtIGV4aGF1c3RzIHVucGFyc2VkIHNpemVzIGxpc3Qgd2l0aG91dCByZXR1cm5pbmcgYVxuXHRcdC8vIHNpemUgdmFsdWUsIHJldHVybiAxMDB2dy5cblx0XHRyZXR1cm4gXCIxMDB2d1wiO1xuXHR9XG5cblx0Ly8gbmFtZXNwYWNlXG5cdHBmLm5zID0gKFwicGZcIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKS5zdWJzdHIoMCwgOSk7XG5cblx0Ly8gc3Jjc2V0IHN1cHBvcnQgdGVzdFxuXHRwZi5zdXBTcmNzZXQgPSBcInNyY3NldFwiIGluIGltYWdlO1xuXHRwZi5zdXBTaXplcyA9IFwic2l6ZXNcIiBpbiBpbWFnZTtcblx0cGYuc3VwUGljdHVyZSA9ICEhd2luZG93LkhUTUxQaWN0dXJlRWxlbWVudDtcblxuXHQvLyBVQyBicm93c2VyIGRvZXMgY2xhaW0gdG8gc3VwcG9ydCBzcmNzZXQgYW5kIHBpY3R1cmUsIGJ1dCBub3Qgc2l6ZXMsXG5cdC8vIHRoaXMgZXh0ZW5kZWQgdGVzdCByZXZlYWxzIHRoZSBicm93c2VyIGRvZXMgc3VwcG9ydCBub3RoaW5nXG5cdGlmIChwZi5zdXBTcmNzZXQgJiYgcGYuc3VwUGljdHVyZSAmJiAhcGYuc3VwU2l6ZXMpIHtcblx0XHQoZnVuY3Rpb24oaW1hZ2UyKSB7XG5cdFx0XHRpbWFnZS5zcmNzZXQgPSBcImRhdGE6LGFcIjtcblx0XHRcdGltYWdlMi5zcmMgPSBcImRhdGE6LGFcIjtcblx0XHRcdHBmLnN1cFNyY3NldCA9IGltYWdlLmNvbXBsZXRlID09PSBpbWFnZTIuY29tcGxldGU7XG5cdFx0XHRwZi5zdXBQaWN0dXJlID0gcGYuc3VwU3Jjc2V0ICYmIHBmLnN1cFBpY3R1cmU7XG5cdFx0fSkoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSk7XG5cdH1cblxuXHQvLyBTYWZhcmk5IGhhcyBiYXNpYyBzdXBwb3J0IGZvciBzaXplcywgYnV0IGRvZXMndCBleHBvc2UgdGhlIGBzaXplc2AgaWRsIGF0dHJpYnV0ZVxuXHRpZiAocGYuc3VwU3Jjc2V0ICYmICFwZi5zdXBTaXplcykge1xuXG5cdFx0KGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHdpZHRoMiA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQWdBQkFQQUFBUC8vL3dBQUFDSDVCQUFBQUFBQUxBQUFBQUFDQUFFQUFBSUNCQW9BT3c9PVwiO1xuXHRcdFx0dmFyIHdpZHRoMSA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFBQUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIjtcblx0XHRcdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRcdFx0dmFyIHRlc3QgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHdpZHRoID0gaW1nLndpZHRoO1xuXG5cdFx0XHRcdGlmICh3aWR0aCA9PT0gMikge1xuXHRcdFx0XHRcdHBmLnN1cFNpemVzID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFsd2F5c0NoZWNrV0Rlc2NyaXB0b3IgPSBwZi5zdXBTcmNzZXQgJiYgIXBmLnN1cFNpemVzO1xuXG5cdFx0XHRcdGlzU3VwcG9ydFRlc3RSZWFkeSA9IHRydWU7XG5cdFx0XHRcdC8vIGZvcmNlIGFzeW5jXG5cdFx0XHRcdHNldFRpbWVvdXQocGljdHVyZWZpbGwpO1xuXHRcdFx0fTtcblxuXHRcdFx0aW1nLm9ubG9hZCA9IHRlc3Q7XG5cdFx0XHRpbWcub25lcnJvciA9IHRlc3Q7XG5cdFx0XHRpbWcuc2V0QXR0cmlidXRlKFwic2l6ZXNcIiwgXCI5cHhcIik7XG5cblx0XHRcdGltZy5zcmNzZXQgPSB3aWR0aDEgKyBcIiAxdyxcIiArIHdpZHRoMiArIFwiIDl3XCI7XG5cdFx0XHRpbWcuc3JjID0gd2lkdGgxO1xuXHRcdH0pKCk7XG5cblx0fSBlbHNlIHtcblx0XHRpc1N1cHBvcnRUZXN0UmVhZHkgPSB0cnVlO1xuXHR9XG5cblx0Ly8gdXNpbmcgcGYucXNhIGluc3RlYWQgb2YgZG9tIHRyYXZlcnNpbmcgZG9lcyBzY2FsZSBtdWNoIGJldHRlcixcblx0Ly8gZXNwZWNpYWxseSBvbiBzaXRlcyBtaXhpbmcgcmVzcG9uc2l2ZSBhbmQgbm9uLXJlc3BvbnNpdmUgaW1hZ2VzXG5cdHBmLnNlbFNob3J0ID0gXCJwaWN0dXJlPmltZyxpbWdbc3Jjc2V0XVwiO1xuXHRwZi5zZWwgPSBwZi5zZWxTaG9ydDtcblx0cGYuY2ZnID0gY2ZnO1xuXG5cdC8qKlxuXHQgKiBTaG9ydGN1dCBwcm9wZXJ0eSBmb3IgYGRldmljZVBpeGVsUmF0aW9gICggZm9yIGVhc3kgb3ZlcnJpZGluZyBpbiB0ZXN0cyApXG5cdCAqL1xuXHRwZi5EUFIgPSAoRFBSICB8fCAxICk7XG5cdHBmLnUgPSB1bml0cztcblxuXHQvLyBjb250YWluZXIgb2Ygc3VwcG9ydGVkIG1pbWUgdHlwZXMgdGhhdCBvbmUgbWlnaHQgbmVlZCB0byBxdWFsaWZ5IGJlZm9yZSB1c2luZ1xuXHRwZi50eXBlcyA9ICB0eXBlcztcblxuXHRwZi5zZXRTaXplID0gbm9vcDtcblxuXHQvKipcblx0ICogR2V0cyBhIHN0cmluZyBhbmQgcmV0dXJucyB0aGUgYWJzb2x1dGUgVVJMXG5cdCAqIEBwYXJhbSBzcmNcblx0ICogQHJldHVybnMge1N0cmluZ30gYWJzb2x1dGUgVVJMXG5cdCAqL1xuXG5cdHBmLm1ha2VVcmwgPSBtZW1vaXplKGZ1bmN0aW9uKHNyYykge1xuXHRcdGFuY2hvci5ocmVmID0gc3JjO1xuXHRcdHJldHVybiBhbmNob3IuaHJlZjtcblx0fSk7XG5cblx0LyoqXG5cdCAqIEdldHMgYSBET00gZWxlbWVudCBvciBkb2N1bWVudCBhbmQgYSBzZWxjdG9yIGFuZCByZXR1cm5zIHRoZSBmb3VuZCBtYXRjaGVzXG5cdCAqIENhbiBiZSBleHRlbmRlZCB3aXRoIGpRdWVyeS9TaXp6bGUgZm9yIElFNyBzdXBwb3J0XG5cdCAqIEBwYXJhbSBjb250ZXh0XG5cdCAqIEBwYXJhbSBzZWxcblx0ICogQHJldHVybnMge05vZGVMaXN0fEFycmF5fVxuXHQgKi9cblx0cGYucXNhID0gZnVuY3Rpb24oY29udGV4dCwgc2VsKSB7XG5cdFx0cmV0dXJuICggXCJxdWVyeVNlbGVjdG9yXCIgaW4gY29udGV4dCApID8gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbCkgOiBbXTtcblx0fTtcblxuXHQvKipcblx0ICogU2hvcnRjdXQgbWV0aG9kIGZvciBtYXRjaE1lZGlhICggZm9yIGVhc3kgb3ZlcnJpZGluZyBpbiB0ZXN0cyApXG5cdCAqIHdldGhlciBuYXRpdmUgb3IgcGYubU1RIGlzIHVzZWQgd2lsbCBiZSBkZWNpZGVkIGxhenkgb24gZmlyc3QgY2FsbFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHBmLm1hdGNoZXNNZWRpYSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggd2luZG93Lm1hdGNoTWVkaWEgJiYgKG1hdGNoTWVkaWEoIFwiKG1pbi13aWR0aDogMC4xZW0pXCIgKSB8fCB7fSkubWF0Y2hlcyApIHtcblx0XHRcdHBmLm1hdGNoZXNNZWRpYSA9IGZ1bmN0aW9uKCBtZWRpYSApIHtcblx0XHRcdFx0cmV0dXJuICFtZWRpYSB8fCAoIG1hdGNoTWVkaWEoIG1lZGlhICkubWF0Y2hlcyApO1xuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGYubWF0Y2hlc01lZGlhID0gcGYubU1RO1xuXHRcdH1cblxuXHRcdHJldHVybiBwZi5tYXRjaGVzTWVkaWEuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBIHNpbXBsaWZpZWQgbWF0Y2hNZWRpYSBpbXBsZW1lbnRhdGlvbiBmb3IgSUU4IGFuZCBJRTlcblx0ICogaGFuZGxlcyBvbmx5IG1pbi13aWR0aC9tYXgtd2lkdGggd2l0aCBweCBvciBlbSB2YWx1ZXNcblx0ICogQHBhcmFtIG1lZGlhXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0cGYubU1RID0gZnVuY3Rpb24oIG1lZGlhICkge1xuXHRcdHJldHVybiBtZWRpYSA/IGV2YWxDU1MobWVkaWEpIDogdHJ1ZTtcblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgY2FsY3VsYXRlZCBsZW5ndGggaW4gY3NzIHBpeGVsIGZyb20gdGhlIGdpdmVuIHNvdXJjZVNpemVWYWx1ZVxuXHQgKiBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtdmFsdWVzLTMvI2xlbmd0aC12YWx1ZVxuXHQgKiBpbnRlbmRlZCBTcGVjIG1pc21hdGNoZXM6XG5cdCAqICogRG9lcyBub3QgY2hlY2sgZm9yIGludmFsaWQgdXNlIG9mIENTUyBmdW5jdGlvbnNcblx0ICogKiBEb2VzIGhhbmRsZSBhIGNvbXB1dGVkIGxlbmd0aCBvZiAwIHRoZSBzYW1lIGFzIGEgbmVnYXRpdmUgYW5kIHRoZXJlZm9yZSBpbnZhbGlkIHZhbHVlXG5cdCAqIEBwYXJhbSBzb3VyY2VTaXplVmFsdWVcblx0ICogQHJldHVybnMge051bWJlcn1cblx0ICovXG5cdHBmLmNhbGNMZW5ndGggPSBmdW5jdGlvbiggc291cmNlU2l6ZVZhbHVlICkge1xuXG5cdFx0dmFyIHZhbHVlID0gZXZhbENTUyhzb3VyY2VTaXplVmFsdWUsIHRydWUpIHx8IGZhbHNlO1xuXHRcdGlmICh2YWx1ZSA8IDApIHtcblx0XHRcdHZhbHVlID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUYWtlcyBhIHR5cGUgc3RyaW5nIGFuZCBjaGVja3MgaWYgaXRzIHN1cHBvcnRlZFxuXHQgKi9cblxuXHRwZi5zdXBwb3J0c1R5cGUgPSBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRyZXR1cm4gKCB0eXBlICkgPyB0eXBlc1sgdHlwZSBdIDogdHJ1ZTtcblx0fTtcblxuXHQvKipcblx0ICogUGFyc2VzIGEgc291cmNlU2l6ZSBpbnRvIG1lZGlhQ29uZGl0aW9uIChtZWRpYSkgYW5kIHNvdXJjZVNpemVWYWx1ZSAobGVuZ3RoKVxuXHQgKiBAcGFyYW0gc291cmNlU2l6ZVN0clxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHBmLnBhcnNlU2l6ZSA9IG1lbW9pemUoZnVuY3Rpb24oIHNvdXJjZVNpemVTdHIgKSB7XG5cdFx0dmFyIG1hdGNoID0gKCBzb3VyY2VTaXplU3RyIHx8IFwiXCIgKS5tYXRjaChyZWdTaXplKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bWVkaWE6IG1hdGNoICYmIG1hdGNoWzFdLFxuXHRcdFx0bGVuZ3RoOiBtYXRjaCAmJiBtYXRjaFsyXVxuXHRcdH07XG5cdH0pO1xuXG5cdHBmLnBhcnNlU2V0ID0gZnVuY3Rpb24oIHNldCApIHtcblx0XHRpZiAoICFzZXQuY2FuZHMgKSB7XG5cdFx0XHRzZXQuY2FuZHMgPSBwYXJzZVNyY3NldChzZXQuc3Jjc2V0LCBzZXQpO1xuXHRcdH1cblx0XHRyZXR1cm4gc2V0LmNhbmRzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm5zIDFlbSBpbiBjc3MgcHggZm9yIGh0bWwvYm9keSBkZWZhdWx0IHNpemVcblx0ICogZnVuY3Rpb24gdGFrZW4gZnJvbSByZXNwb25kanNcblx0ICogQHJldHVybnMgeyp8bnVtYmVyfVxuXHQgKi9cblx0cGYuZ2V0RW1WYWx1ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBib2R5O1xuXHRcdGlmICggIWVtaW5weCAmJiAoYm9keSA9IGRvY3VtZW50LmJvZHkpICkge1xuXHRcdFx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSxcblx0XHRcdFx0b3JpZ2luYWxIVE1MQ1NTID0gZG9jRWxlbS5zdHlsZS5jc3NUZXh0LFxuXHRcdFx0XHRvcmlnaW5hbEJvZHlDU1MgPSBib2R5LnN0eWxlLmNzc1RleHQ7XG5cblx0XHRcdGRpdi5zdHlsZS5jc3NUZXh0ID0gYmFzZVN0eWxlO1xuXG5cdFx0XHQvLyAxZW0gaW4gYSBtZWRpYSBxdWVyeSBpcyB0aGUgdmFsdWUgb2YgdGhlIGRlZmF1bHQgZm9udCBzaXplIG9mIHRoZSBicm93c2VyXG5cdFx0XHQvLyByZXNldCBkb2NFbGVtIGFuZCBib2R5IHRvIGVuc3VyZSB0aGUgY29ycmVjdCB2YWx1ZSBpcyByZXR1cm5lZFxuXHRcdFx0ZG9jRWxlbS5zdHlsZS5jc3NUZXh0ID0gZnNDc3M7XG5cdFx0XHRib2R5LnN0eWxlLmNzc1RleHQgPSBmc0NzcztcblxuXHRcdFx0Ym9keS5hcHBlbmRDaGlsZCggZGl2ICk7XG5cdFx0XHRlbWlucHggPSBkaXYub2Zmc2V0V2lkdGg7XG5cdFx0XHRib2R5LnJlbW92ZUNoaWxkKCBkaXYgKTtcblxuXHRcdFx0Ly9hbHNvIHVwZGF0ZSBlbWlucHggYmVmb3JlIHJldHVybmluZ1xuXHRcdFx0ZW1pbnB4ID0gcGFyc2VGbG9hdCggZW1pbnB4LCAxMCApO1xuXG5cdFx0XHQvLyByZXN0b3JlIHRoZSBvcmlnaW5hbCB2YWx1ZXNcblx0XHRcdGRvY0VsZW0uc3R5bGUuY3NzVGV4dCA9IG9yaWdpbmFsSFRNTENTUztcblx0XHRcdGJvZHkuc3R5bGUuY3NzVGV4dCA9IG9yaWdpbmFsQm9keUNTUztcblxuXHRcdH1cblx0XHRyZXR1cm4gZW1pbnB4IHx8IDE2O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUYWtlcyBhIHN0cmluZyBvZiBzaXplcyBhbmQgcmV0dXJucyB0aGUgd2lkdGggaW4gcGl4ZWxzIGFzIGEgbnVtYmVyXG5cdCAqL1xuXHRwZi5jYWxjTGlzdExlbmd0aCA9IGZ1bmN0aW9uKCBzb3VyY2VTaXplTGlzdFN0ciApIHtcblx0XHQvLyBTcGxpdCB1cCBzb3VyY2Ugc2l6ZSBsaXN0LCBpZSAoIG1heC13aWR0aDogMzBlbSApIDEwMCUsICggbWF4LXdpZHRoOiA1MGVtICkgNTAlLCAzMyVcblx0XHQvL1xuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgKG1pbi13aWR0aDozMGVtKSBjYWxjKDMwJSAtIDE1cHgpXG5cdFx0aWYgKCAhKHNvdXJjZVNpemVMaXN0U3RyIGluIHNpemVMZW5ndGhDYWNoZSkgfHwgY2ZnLnVUICkge1xuXHRcdFx0dmFyIHdpbm5pbmdMZW5ndGggPSBwZi5jYWxjTGVuZ3RoKCBwYXJzZVNpemVzKCBzb3VyY2VTaXplTGlzdFN0ciApICk7XG5cblx0XHRcdHNpemVMZW5ndGhDYWNoZVsgc291cmNlU2l6ZUxpc3RTdHIgXSA9ICF3aW5uaW5nTGVuZ3RoID8gdW5pdHMud2lkdGggOiB3aW5uaW5nTGVuZ3RoO1xuXHRcdH1cblxuXHRcdHJldHVybiBzaXplTGVuZ3RoQ2FjaGVbIHNvdXJjZVNpemVMaXN0U3RyIF07XG5cdH07XG5cblx0LyoqXG5cdCAqIFRha2VzIGEgY2FuZGlkYXRlIG9iamVjdCB3aXRoIGEgc3Jjc2V0IHByb3BlcnR5IGluIHRoZSBmb3JtIG9mIHVybC9cblx0ICogZXguIFwiaW1hZ2VzL3BpYy1tZWRpdW0ucG5nIDF4LCBpbWFnZXMvcGljLW1lZGl1bS0yeC5wbmcgMnhcIiBvclxuXHQgKiAgICAgXCJpbWFnZXMvcGljLW1lZGl1bS5wbmcgNDAwdywgaW1hZ2VzL3BpYy1tZWRpdW0tMngucG5nIDgwMHdcIiBvclxuXHQgKiAgICAgXCJpbWFnZXMvcGljLXNtYWxsLnBuZ1wiXG5cdCAqIEdldCBhbiBhcnJheSBvZiBpbWFnZSBjYW5kaWRhdGVzIGluIHRoZSBmb3JtIG9mXG5cdCAqICAgICAge3VybDogXCIvZm9vL2Jhci5wbmdcIiwgcmVzb2x1dGlvbjogMX1cblx0ICogd2hlcmUgcmVzb2x1dGlvbiBpcyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtdmFsdWVzLTMvI3Jlc29sdXRpb24tdmFsdWVcblx0ICogSWYgc2l6ZXMgaXMgc3BlY2lmaWVkLCByZXMgaXMgY2FsY3VsYXRlZFxuXHQgKi9cblx0cGYuc2V0UmVzID0gZnVuY3Rpb24oIHNldCApIHtcblx0XHR2YXIgY2FuZGlkYXRlcztcblx0XHRpZiAoIHNldCApIHtcblxuXHRcdFx0Y2FuZGlkYXRlcyA9IHBmLnBhcnNlU2V0KCBzZXQgKTtcblxuXHRcdFx0Zm9yICggdmFyIGkgPSAwLCBsZW4gPSBjYW5kaWRhdGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRzZXRSZXNvbHV0aW9uKCBjYW5kaWRhdGVzWyBpIF0sIHNldC5zaXplcyApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY2FuZGlkYXRlcztcblx0fTtcblxuXHRwZi5zZXRSZXMucmVzID0gc2V0UmVzb2x1dGlvbjtcblxuXHRwZi5hcHBseVNldENhbmRpZGF0ZSA9IGZ1bmN0aW9uKCBjYW5kaWRhdGVzLCBpbWcgKSB7XG5cdFx0aWYgKCAhY2FuZGlkYXRlcy5sZW5ndGggKSB7cmV0dXJuO31cblx0XHR2YXIgY2FuZGlkYXRlLFxuXHRcdFx0aSxcblx0XHRcdGosXG5cdFx0XHRsZW5ndGgsXG5cdFx0XHRiZXN0Q2FuZGlkYXRlLFxuXHRcdFx0Y3VyU3JjLFxuXHRcdFx0Y3VyQ2FuLFxuXHRcdFx0Y2FuZGlkYXRlU3JjLFxuXHRcdFx0YWJvcnRDdXJTcmM7XG5cblx0XHR2YXIgaW1hZ2VEYXRhID0gaW1nWyBwZi5ucyBdO1xuXHRcdHZhciBkcHIgPSBwZi5EUFI7XG5cblx0XHRjdXJTcmMgPSBpbWFnZURhdGEuY3VyU3JjIHx8IGltZ1tjdXJTcmNQcm9wXTtcblxuXHRcdGN1ckNhbiA9IGltYWdlRGF0YS5jdXJDYW4gfHwgc2V0U3JjVG9DdXIoaW1nLCBjdXJTcmMsIGNhbmRpZGF0ZXNbMF0uc2V0KTtcblxuXHRcdC8vIGlmIHdlIGhhdmUgYSBjdXJyZW50IHNvdXJjZSwgd2UgbWlnaHQgZWl0aGVyIGJlY29tZSBsYXp5IG9yIGdpdmUgdGhpcyBzb3VyY2Ugc29tZSBhZHZhbnRhZ2Vcblx0XHRpZiAoIGN1ckNhbiAmJiBjdXJDYW4uc2V0ID09PSBjYW5kaWRhdGVzWyAwIF0uc2V0ICkge1xuXG5cdFx0XHQvLyBpZiBicm93c2VyIGNhbiBhYm9ydCBpbWFnZSByZXF1ZXN0IGFuZCB0aGUgaW1hZ2UgaGFzIGEgaGlnaGVyIHBpeGVsIGRlbnNpdHkgdGhhbiBuZWVkZWRcblx0XHRcdC8vIGFuZCB0aGlzIGltYWdlIGlzbid0IGRvd25sb2FkZWQgeWV0LCB3ZSBza2lwIG5leHQgcGFydCBhbmQgdHJ5IHRvIHNhdmUgYmFuZHdpZHRoXG5cdFx0XHRhYm9ydEN1clNyYyA9IChzdXBwb3J0QWJvcnQgJiYgIWltZy5jb21wbGV0ZSAmJiBjdXJDYW4ucmVzIC0gMC4xID4gZHByKTtcblxuXHRcdFx0aWYgKCAhYWJvcnRDdXJTcmMgKSB7XG5cdFx0XHRcdGN1ckNhbi5jYWNoZWQgPSB0cnVlO1xuXG5cdFx0XHRcdC8vIGlmIGN1cnJlbnQgY2FuZGlkYXRlIGlzIFwiYmVzdFwiLCBcImJldHRlclwiIG9yIFwib2theVwiLFxuXHRcdFx0XHQvLyBzZXQgaXQgdG8gYmVzdENhbmRpZGF0ZVxuXHRcdFx0XHRpZiAoIGN1ckNhbi5yZXMgPj0gZHByICkge1xuXHRcdFx0XHRcdGJlc3RDYW5kaWRhdGUgPSBjdXJDYW47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICFiZXN0Q2FuZGlkYXRlICkge1xuXG5cdFx0XHRjYW5kaWRhdGVzLnNvcnQoIGFzY2VuZGluZ1NvcnQgKTtcblxuXHRcdFx0bGVuZ3RoID0gY2FuZGlkYXRlcy5sZW5ndGg7XG5cdFx0XHRiZXN0Q2FuZGlkYXRlID0gY2FuZGlkYXRlc1sgbGVuZ3RoIC0gMSBdO1xuXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRjYW5kaWRhdGUgPSBjYW5kaWRhdGVzWyBpIF07XG5cdFx0XHRcdGlmICggY2FuZGlkYXRlLnJlcyA+PSBkcHIgKSB7XG5cdFx0XHRcdFx0aiA9IGkgLSAxO1xuXG5cdFx0XHRcdFx0Ly8gd2UgaGF2ZSBmb3VuZCB0aGUgcGVyZmVjdCBjYW5kaWRhdGUsXG5cdFx0XHRcdFx0Ly8gYnV0IGxldCdzIGltcHJvdmUgdGhpcyBhIGxpdHRsZSBiaXQgd2l0aCBzb21lIGFzc3VtcHRpb25zIDstKVxuXHRcdFx0XHRcdGlmIChjYW5kaWRhdGVzWyBqIF0gJiZcblx0XHRcdFx0XHRcdChhYm9ydEN1clNyYyB8fCBjdXJTcmMgIT09IHBmLm1ha2VVcmwoIGNhbmRpZGF0ZS51cmwgKSkgJiZcblx0XHRcdFx0XHRcdGNob29zZUxvd1JlcyhjYW5kaWRhdGVzWyBqIF0ucmVzLCBjYW5kaWRhdGUucmVzLCBkcHIsIGNhbmRpZGF0ZXNbIGogXS5jYWNoZWQpKSB7XG5cblx0XHRcdFx0XHRcdGJlc3RDYW5kaWRhdGUgPSBjYW5kaWRhdGVzWyBqIF07XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YmVzdENhbmRpZGF0ZSA9IGNhbmRpZGF0ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIGJlc3RDYW5kaWRhdGUgKSB7XG5cblx0XHRcdGNhbmRpZGF0ZVNyYyA9IHBmLm1ha2VVcmwoIGJlc3RDYW5kaWRhdGUudXJsICk7XG5cblx0XHRcdGltYWdlRGF0YS5jdXJTcmMgPSBjYW5kaWRhdGVTcmM7XG5cdFx0XHRpbWFnZURhdGEuY3VyQ2FuID0gYmVzdENhbmRpZGF0ZTtcblxuXHRcdFx0aWYgKCBjYW5kaWRhdGVTcmMgIT09IGN1clNyYyApIHtcblx0XHRcdFx0cGYuc2V0U3JjKCBpbWcsIGJlc3RDYW5kaWRhdGUgKTtcblx0XHRcdH1cblx0XHRcdHBmLnNldFNpemUoIGltZyApO1xuXHRcdH1cblx0fTtcblxuXHRwZi5zZXRTcmMgPSBmdW5jdGlvbiggaW1nLCBiZXN0Q2FuZGlkYXRlICkge1xuXHRcdHZhciBvcmlnV2lkdGg7XG5cdFx0aW1nLnNyYyA9IGJlc3RDYW5kaWRhdGUudXJsO1xuXG5cdFx0Ly8gYWx0aG91Z2ggdGhpcyBpcyBhIHNwZWNpZmljIFNhZmFyaSBpc3N1ZSwgd2UgZG9uJ3Qgd2FudCB0byB0YWtlIHRvbyBtdWNoIGRpZmZlcmVudCBjb2RlIHBhdGhzXG5cdFx0aWYgKCBiZXN0Q2FuZGlkYXRlLnNldC50eXBlID09PSBcImltYWdlL3N2Zyt4bWxcIiApIHtcblx0XHRcdG9yaWdXaWR0aCA9IGltZy5zdHlsZS53aWR0aDtcblx0XHRcdGltZy5zdHlsZS53aWR0aCA9IChpbWcub2Zmc2V0V2lkdGggKyAxKSArIFwicHhcIjtcblxuXHRcdFx0Ly8gbmV4dCBsaW5lIG9ubHkgc2hvdWxkIHRyaWdnZXIgYSByZXBhaW50XG5cdFx0XHQvLyBpZi4uLiBpcyBvbmx5IGRvbmUgdG8gdHJpY2sgZGVhZCBjb2RlIHJlbW92YWxcblx0XHRcdGlmICggaW1nLm9mZnNldFdpZHRoICsgMSApIHtcblx0XHRcdFx0aW1nLnN0eWxlLndpZHRoID0gb3JpZ1dpZHRoO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRwZi5nZXRTZXQgPSBmdW5jdGlvbiggaW1nICkge1xuXHRcdHZhciBpLCBzZXQsIHN1cHBvcnRzVHlwZTtcblx0XHR2YXIgbWF0Y2ggPSBmYWxzZTtcblx0XHR2YXIgc2V0cyA9IGltZyBbIHBmLm5zIF0uc2V0cztcblxuXHRcdGZvciAoIGkgPSAwOyBpIDwgc2V0cy5sZW5ndGggJiYgIW1hdGNoOyBpKysgKSB7XG5cdFx0XHRzZXQgPSBzZXRzW2ldO1xuXG5cdFx0XHRpZiAoICFzZXQuc3Jjc2V0IHx8ICFwZi5tYXRjaGVzTWVkaWEoIHNldC5tZWRpYSApIHx8ICEoc3VwcG9ydHNUeXBlID0gcGYuc3VwcG9ydHNUeXBlKCBzZXQudHlwZSApKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3VwcG9ydHNUeXBlID09PSBcInBlbmRpbmdcIiApIHtcblx0XHRcdFx0c2V0ID0gc3VwcG9ydHNUeXBlO1xuXHRcdFx0fVxuXG5cdFx0XHRtYXRjaCA9IHNldDtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXRjaDtcblx0fTtcblxuXHRwZi5wYXJzZVNldHMgPSBmdW5jdGlvbiggZWxlbWVudCwgcGFyZW50LCBvcHRpb25zICkge1xuXHRcdHZhciBzcmNzZXRBdHRyaWJ1dGUsIGltYWdlU2V0LCBpc1dEZXNjcmlwb3IsIHNyY3NldFBhcnNlZDtcblxuXHRcdHZhciBoYXNQaWN0dXJlID0gcGFyZW50ICYmIHBhcmVudC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIlBJQ1RVUkVcIjtcblx0XHR2YXIgaW1hZ2VEYXRhID0gZWxlbWVudFsgcGYubnMgXTtcblxuXHRcdGlmICggaW1hZ2VEYXRhLnNyYyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc3JjICkge1xuXHRcdFx0aW1hZ2VEYXRhLnNyYyA9IGdldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgXCJzcmNcIiApO1xuXHRcdFx0aWYgKCBpbWFnZURhdGEuc3JjICkge1xuXHRcdFx0XHRzZXRJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIHNyY0F0dHIsIGltYWdlRGF0YS5zcmMgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlbW92ZUltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3JjQXR0ciApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggaW1hZ2VEYXRhLnNyY3NldCA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc3Jjc2V0IHx8ICFwZi5zdXBTcmNzZXQgfHwgZWxlbWVudC5zcmNzZXQgKSB7XG5cdFx0XHRzcmNzZXRBdHRyaWJ1dGUgPSBnZXRJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIFwic3Jjc2V0XCIgKTtcblx0XHRcdGltYWdlRGF0YS5zcmNzZXQgPSBzcmNzZXRBdHRyaWJ1dGU7XG5cdFx0XHRzcmNzZXRQYXJzZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGltYWdlRGF0YS5zZXRzID0gW107XG5cblx0XHRpZiAoIGhhc1BpY3R1cmUgKSB7XG5cdFx0XHRpbWFnZURhdGEucGljID0gdHJ1ZTtcblx0XHRcdGdldEFsbFNvdXJjZUVsZW1lbnRzKCBwYXJlbnQsIGltYWdlRGF0YS5zZXRzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBpbWFnZURhdGEuc3Jjc2V0ICkge1xuXHRcdFx0aW1hZ2VTZXQgPSB7XG5cdFx0XHRcdHNyY3NldDogaW1hZ2VEYXRhLnNyY3NldCxcblx0XHRcdFx0c2l6ZXM6IGdldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgXCJzaXplc1wiIClcblx0XHRcdH07XG5cblx0XHRcdGltYWdlRGF0YS5zZXRzLnB1c2goIGltYWdlU2V0ICk7XG5cblx0XHRcdGlzV0Rlc2NyaXBvciA9IChhbHdheXNDaGVja1dEZXNjcmlwdG9yIHx8IGltYWdlRGF0YS5zcmMpICYmIHJlZ1dEZXNjLnRlc3QoaW1hZ2VEYXRhLnNyY3NldCB8fCBcIlwiKTtcblxuXHRcdFx0Ly8gYWRkIG5vcm1hbCBzcmMgYXMgY2FuZGlkYXRlLCBpZiBzb3VyY2UgaGFzIG5vIHcgZGVzY3JpcHRvclxuXHRcdFx0aWYgKCAhaXNXRGVzY3JpcG9yICYmIGltYWdlRGF0YS5zcmMgJiYgIWdldENhbmRpZGF0ZUZvclNyYyhpbWFnZURhdGEuc3JjLCBpbWFnZVNldCkgJiYgIWltYWdlU2V0LmhhczF4ICkge1xuXHRcdFx0XHRpbWFnZVNldC5zcmNzZXQgKz0gXCIsIFwiICsgaW1hZ2VEYXRhLnNyYztcblx0XHRcdFx0aW1hZ2VTZXQuY2FuZHMucHVzaCh7XG5cdFx0XHRcdFx0dXJsOiBpbWFnZURhdGEuc3JjLFxuXHRcdFx0XHRcdGQ6IDEsXG5cdFx0XHRcdFx0c2V0OiBpbWFnZVNldFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdH0gZWxzZSBpZiAoIGltYWdlRGF0YS5zcmMgKSB7XG5cdFx0XHRpbWFnZURhdGEuc2V0cy5wdXNoKCB7XG5cdFx0XHRcdHNyY3NldDogaW1hZ2VEYXRhLnNyYyxcblx0XHRcdFx0c2l6ZXM6IG51bGxcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpbWFnZURhdGEuY3VyQ2FuID0gbnVsbDtcblx0XHRpbWFnZURhdGEuY3VyU3JjID0gdW5kZWZpbmVkO1xuXG5cdFx0Ly8gaWYgaW1nIGhhcyBwaWN0dXJlIG9yIHRoZSBzcmNzZXQgd2FzIHJlbW92ZWQgb3IgaGFzIGEgc3Jjc2V0IGFuZCBkb2VzIG5vdCBzdXBwb3J0IHNyY3NldCBhdCBhbGxcblx0XHQvLyBvciBoYXMgYSB3IGRlc2NyaXB0b3IgKGFuZCBkb2VzIG5vdCBzdXBwb3J0IHNpemVzKSBzZXQgc3VwcG9ydCB0byBmYWxzZSB0byBldmFsdWF0ZVxuXHRcdGltYWdlRGF0YS5zdXBwb3J0ZWQgPSAhKCBoYXNQaWN0dXJlIHx8ICggaW1hZ2VTZXQgJiYgIXBmLnN1cFNyY3NldCApIHx8IChpc1dEZXNjcmlwb3IgJiYgIXBmLnN1cFNpemVzKSApO1xuXG5cdFx0aWYgKCBzcmNzZXRQYXJzZWQgJiYgcGYuc3VwU3Jjc2V0ICYmICFpbWFnZURhdGEuc3VwcG9ydGVkICkge1xuXHRcdFx0aWYgKCBzcmNzZXRBdHRyaWJ1dGUgKSB7XG5cdFx0XHRcdHNldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3Jjc2V0QXR0ciwgc3Jjc2V0QXR0cmlidXRlICk7XG5cdFx0XHRcdGVsZW1lbnQuc3Jjc2V0ID0gXCJcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlbW92ZUltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3Jjc2V0QXR0ciApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChpbWFnZURhdGEuc3VwcG9ydGVkICYmICFpbWFnZURhdGEuc3Jjc2V0ICYmICgoIWltYWdlRGF0YS5zcmMgJiYgZWxlbWVudC5zcmMpIHx8ICBlbGVtZW50LnNyYyAhPT0gcGYubWFrZVVybChpbWFnZURhdGEuc3JjKSkpIHtcblx0XHRcdGlmIChpbWFnZURhdGEuc3JjID09PSBudWxsKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwic3JjXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5zcmMgPSBpbWFnZURhdGEuc3JjO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGltYWdlRGF0YS5wYXJzZWQgPSB0cnVlO1xuXHR9O1xuXG5cdHBmLmZpbGxJbWcgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKSB7XG5cdFx0dmFyIGltYWdlRGF0YTtcblx0XHR2YXIgZXh0cmVtZSA9IG9wdGlvbnMucmVzZWxlY3QgfHwgb3B0aW9ucy5yZWV2YWx1YXRlO1xuXG5cdFx0Ly8gZXhwYW5kbyBmb3IgY2FjaGluZyBkYXRhIG9uIHRoZSBpbWdcblx0XHRpZiAoICFlbGVtZW50WyBwZi5ucyBdICkge1xuXHRcdFx0ZWxlbWVudFsgcGYubnMgXSA9IHt9O1xuXHRcdH1cblxuXHRcdGltYWdlRGF0YSA9IGVsZW1lbnRbIHBmLm5zIF07XG5cblx0XHQvLyBpZiB0aGUgZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGV2YWx1YXRlZCwgc2tpcCBpdFxuXHRcdC8vIHVubGVzcyBgb3B0aW9ucy5yZWV2YWx1YXRlYCBpcyBzZXQgdG8gdHJ1ZSAoIHRoaXMsIGZvciBleGFtcGxlLFxuXHRcdC8vIGlzIHNldCB0byB0cnVlIHdoZW4gcnVubmluZyBgcGljdHVyZWZpbGxgIG9uIGByZXNpemVgICkuXG5cdFx0aWYgKCAhZXh0cmVtZSAmJiBpbWFnZURhdGEuZXZhbGVkID09PSBldmFsSWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCAhaW1hZ2VEYXRhLnBhcnNlZCB8fCBvcHRpb25zLnJlZXZhbHVhdGUgKSB7XG5cdFx0XHRwZi5wYXJzZVNldHMoIGVsZW1lbnQsIGVsZW1lbnQucGFyZW50Tm9kZSwgb3B0aW9ucyApO1xuXHRcdH1cblxuXHRcdGlmICggIWltYWdlRGF0YS5zdXBwb3J0ZWQgKSB7XG5cdFx0XHRhcHBseUJlc3RDYW5kaWRhdGUoIGVsZW1lbnQgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW1hZ2VEYXRhLmV2YWxlZCA9IGV2YWxJZDtcblx0XHR9XG5cdH07XG5cblx0cGYuc2V0dXBSdW4gPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoICFhbHJlYWR5UnVuIHx8IGlzVndEaXJ0eSB8fCAoRFBSICE9PSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbykgKSB7XG5cdFx0XHR1cGRhdGVNZXRyaWNzKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIElmIHBpY3R1cmUgaXMgc3VwcG9ydGVkLCB3ZWxsLCB0aGF0J3MgYXdlc29tZS5cblx0aWYgKCBwZi5zdXBQaWN0dXJlICkge1xuXHRcdHBpY3R1cmVmaWxsID0gbm9vcDtcblx0XHRwZi5maWxsSW1nID0gbm9vcDtcblx0fSBlbHNlIHtcblxuXHRcdCAvLyBTZXQgdXAgcGljdHVyZSBwb2x5ZmlsbCBieSBwb2xsaW5nIHRoZSBkb2N1bWVudFxuXHRcdChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpc0RvbVJlYWR5O1xuXHRcdFx0dmFyIHJlZ1JlYWR5ID0gd2luZG93LmF0dGFjaEV2ZW50ID8gL2QkfF5jLyA6IC9kJHxeY3xeaS87XG5cblx0XHRcdHZhciBydW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlIHx8IFwiXCI7XG5cblx0XHRcdFx0dGltZXJJZCA9IHNldFRpbWVvdXQocnVuLCByZWFkeVN0YXRlID09PSBcImxvYWRpbmdcIiA/IDIwMCA6ICA5OTkpO1xuXHRcdFx0XHRpZiAoIGRvY3VtZW50LmJvZHkgKSB7XG5cdFx0XHRcdFx0cGYuZmlsbEltZ3MoKTtcblx0XHRcdFx0XHRpc0RvbVJlYWR5ID0gaXNEb21SZWFkeSB8fCByZWdSZWFkeS50ZXN0KHJlYWR5U3RhdGUpO1xuXHRcdFx0XHRcdGlmICggaXNEb21SZWFkeSApIHtcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCggdGltZXJJZCApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgdGltZXJJZCA9IHNldFRpbWVvdXQocnVuLCBkb2N1bWVudC5ib2R5ID8gOSA6IDk5KTtcblxuXHRcdFx0Ly8gQWxzbyBhdHRhY2ggcGljdHVyZWZpbGwgb24gcmVzaXplIGFuZCByZWFkeXN0YXRlY2hhbmdlXG5cdFx0XHQvLyBodHRwOi8vbW9kZXJuamF2YXNjcmlwdC5ibG9nc3BvdC5jb20vMjAxMy8wOC9idWlsZGluZy1iZXR0ZXItZGVib3VuY2UuaHRtbFxuXHRcdFx0dmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCkge1xuXHRcdFx0XHR2YXIgdGltZW91dCwgdGltZXN0YW1wO1xuXHRcdFx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgbGFzdCA9IChuZXcgRGF0ZSgpKSAtIHRpbWVzdGFtcDtcblxuXHRcdFx0XHRcdGlmIChsYXN0IDwgd2FpdCkge1xuXHRcdFx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRcdFx0XHRmdW5jKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpO1xuXG5cdFx0XHRcdFx0aWYgKCF0aW1lb3V0KSB7XG5cdFx0XHRcdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblx0XHRcdHZhciBsYXN0Q2xpZW50V2lkdGggPSBkb2NFbGVtLmNsaWVudEhlaWdodDtcblx0XHRcdHZhciBvblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpc1Z3RGlydHkgPSBNYXRoLm1heCh3aW5kb3cuaW5uZXJXaWR0aCB8fCAwLCBkb2NFbGVtLmNsaWVudFdpZHRoKSAhPT0gdW5pdHMud2lkdGggfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQgIT09IGxhc3RDbGllbnRXaWR0aDtcblx0XHRcdFx0bGFzdENsaWVudFdpZHRoID0gZG9jRWxlbS5jbGllbnRIZWlnaHQ7XG5cdFx0XHRcdGlmICggaXNWd0RpcnR5ICkge1xuXHRcdFx0XHRcdHBmLmZpbGxJbWdzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdG9uKCB3aW5kb3csIFwicmVzaXplXCIsIGRlYm91bmNlKG9uUmVzaXplLCA5OSApICk7XG5cdFx0XHRvbiggZG9jdW1lbnQsIFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBydW4gKTtcblx0XHR9KSgpO1xuXHR9XG5cblx0cGYucGljdHVyZWZpbGwgPSBwaWN0dXJlZmlsbDtcblx0Ly91c2UgdGhpcyBpbnRlcm5hbGx5IGZvciBlYXN5IG1vbmtleSBwYXRjaGluZy9wZXJmb3JtYW5jZSB0ZXN0aW5nXG5cdHBmLmZpbGxJbWdzID0gcGljdHVyZWZpbGw7XG5cdHBmLnRlYXJkb3duUnVuID0gbm9vcDtcblxuXHQvKiBleHBvc2UgbWV0aG9kcyBmb3IgdGVzdGluZyAqL1xuXHRwaWN0dXJlZmlsbC5fID0gcGY7XG5cblx0d2luZG93LnBpY3R1cmVmaWxsQ0ZHID0ge1xuXHRcdHBmOiBwZixcblx0XHRwdXNoOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHR2YXIgbmFtZSA9IGFyZ3Muc2hpZnQoKTtcblx0XHRcdGlmICh0eXBlb2YgcGZbbmFtZV0gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRwZltuYW1lXS5hcHBseShwZiwgYXJncyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjZmdbbmFtZV0gPSBhcmdzWzBdO1xuXHRcdFx0XHRpZiAoYWxyZWFkeVJ1bikge1xuXHRcdFx0XHRcdHBmLmZpbGxJbWdzKCB7IHJlc2VsZWN0OiB0cnVlIH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHR3aGlsZSAoc2V0T3B0aW9ucyAmJiBzZXRPcHRpb25zLmxlbmd0aCkge1xuXHRcdHdpbmRvdy5waWN0dXJlZmlsbENGRy5wdXNoKHNldE9wdGlvbnMuc2hpZnQoKSk7XG5cdH1cblxuXHQvKiBleHBvc2UgcGljdHVyZWZpbGwgKi9cblx0d2luZG93LnBpY3R1cmVmaWxsID0gcGljdHVyZWZpbGw7XG5cblx0LyogZXhwb3NlIHBpY3R1cmVmaWxsICovXG5cdGlmICggdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0Ly8gQ29tbW9uSlMsIGp1c3QgZXhwb3J0XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBwaWN0dXJlZmlsbDtcblx0fSBlbHNlIGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cdFx0Ly8gQU1EIHN1cHBvcnRcblx0XHRkZWZpbmUoIFwicGljdHVyZWZpbGxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBwaWN0dXJlZmlsbDsgfSApO1xuXHR9XG5cblx0Ly8gSUU4IGV2YWxzIHRoaXMgc3luYywgc28gaXQgbXVzdCBiZSB0aGUgbGFzdCB0aGluZyB3ZSBkb1xuXHRpZiAoICFwZi5zdXBQaWN0dXJlICkge1xuXHRcdHR5cGVzWyBcImltYWdlL3dlYnBcIiBdID0gZGV0ZWN0VHlwZVN1cHBvcnQoXCJpbWFnZS93ZWJwXCIsIFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmtvQUFBQlhSVUpRVmxBNFdBb0FBQUFRQUFBQUFBQUFBQUFBUVV4UVNBd0FBQUFCQnhBUi9ROUVSUDhEQUFCV1VEZ2dHQUFBQURBQkFKMEJLZ0VBQVFBREFEUWxwQUFEY0FEKysvMVFBQT09XCIgKTtcblx0fVxuXG59ICkoIHdpbmRvdywgZG9jdW1lbnQgKTtcbiIsIi8qIVxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTcgSWNvTW9vbi5pb1xuICogQGxpY2Vuc2UgICBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZVxuICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0tleWFtb29uL3N2Z3h1c2VcbiAqIEB2ZXJzaW9uICAgMS4yLjZcbiAqL1xuLypqc2xpbnQgYnJvd3NlcjogdHJ1ZSAqL1xuLypnbG9iYWwgWERvbWFpblJlcXVlc3QsIE11dGF0aW9uT2JzZXJ2ZXIsIHdpbmRvdyAqL1xuKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAvLyBob2xkcyB4aHIgb2JqZWN0cyB0byBwcmV2ZW50IG11bHRpcGxlIHJlcXVlc3RzXG4gICAgICAgIHZhciBjaGVja1VzZUVsZW1zO1xuICAgICAgICB2YXIgdGlkOyAvLyB0aW1lb3V0IGlkXG4gICAgICAgIHZhciBkZWJvdW5jZWRDaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aWQpO1xuICAgICAgICAgICAgdGlkID0gc2V0VGltZW91dChjaGVja1VzZUVsZW1zLCAxMDApO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgdW5vYnNlcnZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmVyO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZGVib3VuY2VkQ2hlY2spO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01TdWJ0cmVlTW9kaWZpZWRcIiwgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB1bm9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTVN1YnRyZWVNb2RpZmllZFwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNyZWF0ZVJlcXVlc3QgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgICAgICAvLyBJbiBJRSA5LCBjcm9zcyBvcmlnaW4gcmVxdWVzdHMgY2FuIG9ubHkgYmUgc2VudCB1c2luZyBYRG9tYWluUmVxdWVzdC5cbiAgICAgICAgICAgIC8vIFhEb21haW5SZXF1ZXN0IHdvdWxkIGZhaWwgaWYgQ09SUyBoZWFkZXJzIGFyZSBub3Qgc2V0LlxuICAgICAgICAgICAgLy8gVGhlcmVmb3JlLCBYRG9tYWluUmVxdWVzdCBzaG91bGQgb25seSBiZSB1c2VkIHdpdGggY3Jvc3Mgb3JpZ2luIHJlcXVlc3RzLlxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0T3JpZ2luKGxvYykge1xuICAgICAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgICAgIGlmIChsb2MucHJvdG9jb2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhID0gbG9jO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYS5ocmVmID0gbG9jO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYS5wcm90b2NvbC5yZXBsYWNlKC86L2csIFwiXCIpICsgYS5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIFJlcXVlc3Q7XG4gICAgICAgICAgICB2YXIgb3JpZ2luO1xuICAgICAgICAgICAgdmFyIG9yaWdpbjI7XG4gICAgICAgICAgICBpZiAod2luZG93LlhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIG9yaWdpbiA9IGdldE9yaWdpbihsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgb3JpZ2luMiA9IGdldE9yaWdpbih1cmwpO1xuICAgICAgICAgICAgICAgIGlmIChSZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9PT0gdW5kZWZpbmVkICYmIG9yaWdpbjIgIT09IFwiXCIgJiYgb3JpZ2luMiAhPT0gb3JpZ2luKSB7XG4gICAgICAgICAgICAgICAgICAgIFJlcXVlc3QgPSBYRG9tYWluUmVxdWVzdCB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgUmVxdWVzdCA9IFhNTEh0dHBSZXF1ZXN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZXF1ZXN0O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgeGxpbmtOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xuICAgICAgICBjaGVja1VzZUVsZW1zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGJhc2U7XG4gICAgICAgICAgICB2YXIgYmNyO1xuICAgICAgICAgICAgdmFyIGZhbGxiYWNrID0gXCJcIjsgLy8gb3B0aW9uYWwgZmFsbGJhY2sgVVJMIGluIGNhc2Ugbm8gYmFzZSBwYXRoIHRvIFNWRyBmaWxlIHdhcyBnaXZlbiBhbmQgbm8gc3ltYm9sIGRlZmluaXRpb24gd2FzIGZvdW5kLlxuICAgICAgICAgICAgdmFyIGhhc2g7XG4gICAgICAgICAgICB2YXIgaHJlZjtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIGluUHJvZ3Jlc3NDb3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgaXNIaWRkZW47XG4gICAgICAgICAgICB2YXIgUmVxdWVzdDtcbiAgICAgICAgICAgIHZhciB1cmw7XG4gICAgICAgICAgICB2YXIgdXNlcztcbiAgICAgICAgICAgIHZhciB4aHI7XG4gICAgICAgICAgICBmdW5jdGlvbiBvYnNlcnZlSWZEb25lKCkge1xuICAgICAgICAgICAgICAgIC8vIElmIGRvbmUgd2l0aCBtYWtpbmcgY2hhbmdlcywgc3RhcnQgd2F0Y2hpbmcgZm9yIGNoYWduZXMgaW4gRE9NIGFnYWluXG4gICAgICAgICAgICAgICAgaW5Qcm9ncmVzc0NvdW50IC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKGluUHJvZ3Jlc3NDb3VudCA9PT0gMCkgeyAvLyBpZiBhbGwgeGhycyB3ZXJlIHJlc29sdmVkXG4gICAgICAgICAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMoKTsgLy8gbWFrZSBzdXJlIHRvIHJlbW92ZSBvbGQgaGFuZGxlcnNcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZUNoYW5nZXMoKTsgLy8gd2F0Y2ggZm9yIGNoYW5nZXMgdG8gRE9NXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gYXR0clVwZGF0ZUZ1bmMoc3BlYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZVtzcGVjLmJhc2VdICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjLnVzZUVsLnNldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIFwieGxpbms6aHJlZlwiLCBcIiNcIiArIHNwZWMuaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BlYy51c2VFbC5oYXNBdHRyaWJ1dGUoXCJocmVmXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYy51c2VFbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiICsgc3BlYy5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBvbmxvYWRGdW5jKHhocikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwieFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN2ZztcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHguaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgc3ZnID0geC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN2Z1wiKVswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN2Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS53aWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUuaGVpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5Lmluc2VydEJlZm9yZShzdmcsIGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZUlmRG9uZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBvbkVycm9yVGltZW91dCh4aHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlSWZEb25lKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMoKTsgLy8gc3RvcCB3YXRjaGluZyBmb3IgY2hhbmdlcyB0byBET01cbiAgICAgICAgICAgIC8vIGZpbmQgYWxsIHVzZSBlbGVtZW50c1xuICAgICAgICAgICAgdXNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXNlXCIpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHVzZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBiY3IgPSB1c2VzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWlsZWQgdG8gZ2V0IGJvdW5kaW5nIHJlY3RhbmdsZSBvZiB0aGUgdXNlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgYmNyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhyZWYgPSB1c2VzW2ldLmdldEF0dHJpYnV0ZShcImhyZWZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IHVzZXNbaV0uZ2V0QXR0cmlidXRlTlMoeGxpbmtOUywgXCJocmVmXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCB1c2VzW2ldLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKGhyZWYgJiYgaHJlZi5zcGxpdCkge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBocmVmLnNwbGl0KFwiI1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBbXCJcIiwgXCJcIl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJhc2UgPSB1cmxbMF07XG4gICAgICAgICAgICAgICAgaGFzaCA9IHVybFsxXTtcbiAgICAgICAgICAgICAgICBpc0hpZGRlbiA9IGJjciAmJiBiY3IubGVmdCA9PT0gMCAmJiBiY3IucmlnaHQgPT09IDAgJiYgYmNyLnRvcCA9PT0gMCAmJiBiY3IuYm90dG9tID09PSAwO1xuICAgICAgICAgICAgICAgIGlmIChiY3IgJiYgYmNyLndpZHRoID09PSAwICYmIGJjci5oZWlnaHQgPT09IDAgJiYgIWlzSGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB1c2UgZWxlbWVudCBpcyBlbXB0eVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHJlZmVyZW5jZSB0byBhbiBleHRlcm5hbCBTVkcsIHRyeSB0byBmZXRjaCBpdFxuICAgICAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIG9wdGlvbmFsIGZhbGxiYWNrIFVSTCBpZiB0aGVyZSBpcyBubyByZWZlcmVuY2UgdG8gYW4gZXh0ZXJuYWwgU1ZHXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWxsYmFjayAmJiAhYmFzZS5sZW5ndGggJiYgaGFzaCAmJiAhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UgPSBmYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlc1tpXS5oYXNBdHRyaWJ1dGUoXCJocmVmXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VzW2ldLnNldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIFwieGxpbms6aHJlZlwiLCBocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNjaGVkdWxlIHVwZGF0aW5nIHhsaW5rOmhyZWZcbiAgICAgICAgICAgICAgICAgICAgICAgIHhociA9IGNhY2hlW2Jhc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhociAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRydWUgc2lnbmlmaWVzIHRoYXQgcHJlcGVuZGluZyB0aGUgU1ZHIHdhcyBub3QgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGF0dHJVcGRhdGVGdW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlRWw6IHVzZXNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IGhhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0ID0gY3JlYXRlUmVxdWVzdChiYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoUmVxdWVzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociA9IG5ldyBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2Jhc2VdID0geGhyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gb25sb2FkRnVuYyh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IG9uRXJyb3JUaW1lb3V0KHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBvbkVycm9yVGltZW91dCh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBiYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzc0NvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0hpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlW2Jhc2VdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1lbWJlciB0aGlzIFVSTCBpZiB0aGUgdXNlIGVsZW1lbnQgd2FzIG5vdCBlbXB0eSBhbmQgbm8gcmVxdWVzdCB3YXMgc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2Jhc2VdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FjaGVbYmFzZV0ub25sb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaXQgdHVybnMgb3V0IHRoYXQgcHJlcGVuZGluZyB0aGUgU1ZHIGlzIG5vdCBuZWNlc3NhcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWJvcnQgdGhlIGluLXByb2dyZXNzIHhoci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVtiYXNlXS5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWNoZVtiYXNlXS5vbmxvYWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVbYmFzZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJhc2UubGVuZ3RoICYmIGNhY2hlW2Jhc2VdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGF0dHJVcGRhdGVGdW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VFbDogdXNlc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IGhhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVzZXMgPSBcIlwiO1xuICAgICAgICAgICAgaW5Qcm9ncmVzc0NvdW50ICs9IDE7XG4gICAgICAgICAgICBvYnNlcnZlSWZEb25lKCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB3aW5Mb2FkO1xuICAgICAgICB3aW5Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHdpbkxvYWQsIGZhbHNlKTsgLy8gdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICAgICAgICAgIHRpZCA9IHNldFRpbWVvdXQoY2hlY2tVc2VFbGVtcywgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIC8vIFRoZSBsb2FkIGV2ZW50IGZpcmVzIHdoZW4gYWxsIHJlc291cmNlcyBoYXZlIGZpbmlzaGVkIGxvYWRpbmcsIHdoaWNoIGFsbG93cyBkZXRlY3Rpbmcgd2hldGhlciBTVkcgdXNlIGVsZW1lbnRzIGFyZSBlbXB0eS5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB3aW5Mb2FkLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBObyBuZWVkIHRvIGFkZCBhIGxpc3RlbmVyIGlmIHRoZSBkb2N1bWVudCBpcyBhbHJlYWR5IGxvYWRlZCwgaW5pdGlhbGl6ZSBpbW1lZGlhdGVseS5cbiAgICAgICAgICAgIHdpbkxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcbiIsImltcG9ydCBcInBpY3R1cmVmaWxsXCI7XHJcbmltcG9ydCBcInN2Z3h1c2VcIjtcclxuaW1wb3J0IFwibGF6eXNpemVzXCI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=