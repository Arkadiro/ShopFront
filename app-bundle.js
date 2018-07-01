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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _products = __webpack_require__(/*! ./products.json */ \"./products.json\");\n\nvar _products2 = _interopRequireDefault(_products);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar body = document.querySelector('body');\nvar app = document.getElementById('app');\nvar app1 = document.getElementById('app1');\nvar h1 = document.createElement('h1');\n\nbody.style = '\\n    width: 100%;\\n';\n\napp.style = '\\n    margin: 0;\\n    padding: 0;\\n    background-color: #ccc;\\n    height:300px;\\n    position: relative;\\n    boz-sizing: border-box;\\n';\n\nh1.style = '\\n    margin: 0;\\n    padding: 0;\\n    background-color: #3c3c3c;\\n    color: #fff;\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n\\n    display: block;\\n    min-width:200px;\\n    transform: translateY(-50%) translateX(-50%);\\n';\n\napp.appendChild(h1).innerHTML = 'Hello world';\n\nvar prod = JSON.stringify(_products2.default);\nconsole.log(prod);\n\nfor (var key in prod) {\n    app1.innerHTML += prod;\n}\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./products.json":
/*!***********************!*\
  !*** ./products.json ***!
  \***********************/
/*! exports provided: data, default */
/***/ (function(module) {

eval("module.exports = {\"data\":[{\"name\":\"Smartphone Samsung Galaxy S9 PLUS (Ultraviolet)\",\"shop_name\":\"NAME SUPERSHOP\",\"rating\":\"\",\"price\":\"$299.50\",\"special_price\":\"$299.50\",\"image\":\"/assets/products/ph_apple.png\",\"tag\":\"apple\"},{\"name\":\"Smartphone Samsung Galaxy S9 PLUS (Ultraviolet)\",\"shop_name\":\"NAME SUPERSHOP\",\"rating\":\"\",\"price\":\"$299.50\",\"special_price\":\"$299.50\",\"image\":\"/assets/products/ph_britva.png\",\"tag\":\"britva\"},{\"name\":\"Smartphone Samsung Galaxy S9 PLUS (Ultraviolet)\",\"shop_name\":\"NAME SUPERSHOP\",\"rating\":\"\",\"price\":\"$299.50\",\"special_price\":\"$299.50\",\"image\":\"/assets/products/ph_britva_2.phg\",\"tag\":\"britva2\"},{\"name\":\"Smartphone Samsung Galaxy S9 PLUS (Ultraviolet)\",\"shop_name\":\"NAME SUPERSHOP\",\"rating\":\"\",\"price\":\"$299.50\",\"special_price\":\"$299.50\",\"image\":\"/assets/products/ph_deppa.png\",\"tag\":\"deppa\"},{\"name\":\"Smartphone Samsung Galaxy S9 PLUS (Ultraviolet)\",\"shop_name\":\"NAME SUPERSHOP\",\"rating\":\"\",\"price\":\"$299.50\",\"special_price\":\"$299.50\",\"image\":\"/assets/products/ph_homepod.png\",\"tag\":\"homepod\"},{\"name\":\"Smartphone Samsung Galaxy S9 PLUS (Ultraviolet)\",\"shop_name\":\"NAME SUPERSHOP\",\"rating\":\"\",\"price\":\"$299.50\",\"special_price\":\"$299.50\",\"image\":\"/assets/products/ph_iPhone8.png\",\"tag\":\"iphone8\"},{\"name\":\"Smartphone Samsung Galaxy S9 PLUS (Ultraviolet)\",\"shop_name\":\"NAME SUPERSHOP\",\"rating\":\"\",\"price\":\"$299.50\",\"special_price\":\"$299.50\",\"image\":\"/assets/products/ph_macbook.png\",\"tag\":\"macbook\"},{\"name\":\"Smartphone Samsung Galaxy S9 PLUS (Ultraviolet)\",\"shop_name\":\"NAME SUPERSHOP\",\"rating\":\"\",\"price\":\"$299.50\",\"special_price\":\"$299.50\",\"image\":\"/assets/products/ph_macbook_2.png\",\"tag\":\"macbook2\"},{\"name\":\"Smartphone Samsung Galaxy S9 PLUS (Ultraviolet)\",\"shop_name\":\"NAME SUPERSHOP\",\"rating\":\"\",\"price\":\"$299.50\",\"special_price\":\"$299.50\",\"image\":\"/assets/products/ph_samsung.png\",\"tag\":\"samsung\"},{\"name\":\"Smartphone Samsung Galaxy S9 PLUS (Ultraviolet)\",\"shop_name\":\"NAME SUPERSHOP\",\"rating\":\"\",\"price\":\"$299.50\",\"special_price\":\"$299.50\",\"image\":\"/assets/products/ph_sound.png\",\"tag\":\"sound\"},{\"name\":\"Smartphone Samsung Galaxy S9 PLUS (Ultraviolet)\",\"shop_name\":\"NAME SUPERSHOP\",\"rating\":\"\",\"price\":\"$299.50\",\"special_price\":\"$299.50\",\"image\":\"/assets/products/ph_sound_2 copy.png\",\"tag\":\"sound2\"}]};\n\n//# sourceURL=webpack:///./products.json?");

/***/ })

/******/ });