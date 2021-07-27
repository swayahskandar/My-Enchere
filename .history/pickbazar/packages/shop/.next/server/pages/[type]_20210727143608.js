module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/[type]": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/[type].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./src/assets/icons/ArrowNext.tsx":
/*!****************************************!*\
  !*** ./src/assets/icons/ArrowNext.tsx ***!
  \****************************************/
/*! exports provided: ArrowNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowNext", function() { return ArrowNext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\parnasse\\Downloads\\pickbazarreact-502\\pickbazarreact-502\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\src\\assets\\icons\\ArrowNext.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ArrowNext = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z",
      fill: "currentColor",
      stroke: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/assets/icons/ArrowPrev.tsx":
/*!****************************************!*\
  !*** ./src/assets/icons/ArrowPrev.tsx ***!
  \****************************************/
/*! exports provided: ArrowPrev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowPrev", function() { return ArrowPrev; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\parnasse\\Downloads\\pickbazarreact-502\\pickbazarreact-502\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\src\\assets\\icons\\ArrowPrev.tsx";

const ArrowPrev = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z",
      fill: "currentColor",
      stroke: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/assets/icons/SearchIcon.tsx":
/*!*****************************************!*\
  !*** ./src/assets/icons/SearchIcon.tsx ***!
  \*****************************************/
/*! exports provided: SearchIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return SearchIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\parnasse\\Downloads\\pickbazarreact-502\\pickbazarreact-502\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\src\\assets\\icons\\SearchIcon.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const SearchIcon = (_ref) => {
  let {
    color = 'currentColor',
    width = '17px',
    height = '18px'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["color", "width", "height"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 17.048 18"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      id: "Path_142",
      "data-name": "Path 142",
      d: "M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z",
      transform: "translate(-367.297 -371.285)",
      fill: color
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/assets/images/banner/bags.png":
/*!*******************************************!*\
  !*** ./src/assets/images/banner/bags.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bags-09960cef3eae571bec3505865a1f5135.png";

/***/ }),

/***/ "./src/assets/images/banner/bakery.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/banner/bakery.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bakery-917783c34208892ffeafe55fec2422c4.jpg";

/***/ }),

/***/ "./src/assets/images/banner/books.png":
/*!********************************************!*\
  !*** ./src/assets/images/banner/books.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/books-362f0365da5d769fe78cba20f6f0d468.png";

/***/ }),

/***/ "./src/assets/images/banner/cloths.png":
/*!*********************************************!*\
  !*** ./src/assets/images/banner/cloths.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cloths-ec8f9995002087f7dc878761f3828a9d.png";

/***/ }),

/***/ "./src/assets/images/banner/furniture.png":
/*!************************************************!*\
  !*** ./src/assets/images/banner/furniture.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/furniture-ec772428c4d3a8ba4ad2802caac2b90c.png";

/***/ }),

/***/ "./src/assets/images/banner/grocery.png":
/*!**********************************************!*\
  !*** ./src/assets/images/banner/grocery.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/grocery-c5497ec04053d4118bd7693e7818454c.png";

/***/ }),

/***/ "./src/assets/images/banner/makeup.png":
/*!*********************************************!*\
  !*** ./src/assets/images/banner/makeup.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/makeup-1634bc114e280edc6ca375ca88708eaf.png";

/***/ }),

/***/ "./src/assets/images/banner/medicine.png":
/*!***********************************************!*\
  !*** ./src/assets/images/banner/medicine.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/medicine-6e8ebb087020b94d3aeae59c5c51744f.png";

/***/ }),

/***/ "./src/assets/images/promotion/offer-1.png":
/*!*************************************************!*\
  !*** ./src/assets/images/promotion/offer-1.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// module.exports = "/_next/static/images/offer-1-438a486cc235e612084dc7f2f5dc22a1.png";

/***/ }),

/***/ "./src/assets/images/promotion/offer-2.png":
/*!*************************************************!*\
  !*** ./src/assets/images/promotion/offer-2.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// module.exports = "/_next/static/images/offer-2-f7499f31bb5ad7bd8b091b7afd135268.png";

/***/ }),

/***/ "./src/assets/images/promotion/offer-3.png":
/*!*************************************************!*\
  !*** ./src/assets/images/promotion/offer-3.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// module.exports = "/_next/static/images/offer-3-551eec59bcd1318217d5ecaed46dcd10.png";

/***/ }),

/***/ "./src/assets/styles/global.style.tsx":
/*!********************************************!*\
  !*** ./src/assets/styles/global.style.tsx ***!
  \********************************************/
/*! exports provided: InjectRTL, GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectRTL", function() { return InjectRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const InjectRTL = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "globalstyle__InjectRTL",
  componentId: "sc-1iprpk7-0"
})(["", ""], ({
  lang
}) => (lang === 'ar' || lang === 'he') && `
    font-family: 'Cairo', sans-serif;
    `);
const GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(({
  theme
}) => _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread({
  '*, *::before, *::after': {
    boxSizing: 'border-box'
  },
  body: {
    margin: 0,
    fontFamily: 'body',
    fontWeight: 'regular',
    fontSize: 'base',
    lineHeight: '1.5',
    backgroundColor: 'white',
    transition: Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["get"])(theme, 'customs.transition'),
    WebkitTextSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.004)'
  },
  h1: {
    fontFamily: 'heading',
    fontSize: '5xl',
    fontWeight: 'semiBold',
    margin: 0
  },
  h2: {
    fontFamily: 'heading',
    fontSize: '3xl',
    fontWeight: 'semiBold',
    margin: 0
  },
  h3: {
    fontFamily: 'heading',
    fontSize: '2xl',
    fontWeight: 'semiBold',
    margin: 0
  },
  h4: {
    fontFamily: 'heading',
    fontSize: 'xl',
    fontWeight: 'semiBold',
    margin: 0
  },
  h5: {
    fontFamily: 'heading',
    fontSize: 'md',
    fontWeight: 'semiBold',
    margin: 0
  },
  h6: {
    fontFamily: 'heading',
    fontSize: 'base',
    fontWeight: 'bold',
    margin: 0
  },
  'p,span,button,li,div': {
    fontFamily: 'body',
    margin: 0
  },
  a: {
    fontFamily: 'body',
    textDecoration: 'none'
  },
  ul: {
    margin: 0,
    padding: 0
  },
  li: {
    listStyle: 'none'
  },
  pre: {
    fontFamily: 'monospace',
    overflowX: 'auto',
    code: {
      color: 'inherit'
    }
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 'inherit'
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0
  },
  th: {
    textAlign: 'left',
    borderBottomStyle: 'solid'
  },
  td: {
    textAlign: 'left',
    borderBottomStyle: 'solid'
  },
  img: {
    maxWidth: '100%'
  },
  '.quick-view-overlay': {
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  '.add-address-modal,.add-contact-modal': {
    boxShadow: '0 10px 40px rgba(0,0,0,0.16)',
    borderRadius: '3px !important',
    '.innerRndComponent': {
      width: '100%',
      padding: '30px',
      height: 'auto',
      backgroundColor: '#f7f8f9',
      border: 0,
      boxSizing: 'border-box'
    }
  },
  '.search-modal-mobile': {
    transform: 'none!important',
    maxWidth: 'none!important',
    maxHeight: 'none!important',
    top: '0!important',
    left: '0!important',
    background: 'transparent!important',
    borderRadius: '0!important'
  },
  '.reuseModalCloseBtn': {
    right: '10px!important',
    backgroundColor: '#ffffff!important',
    color: '#222222!important',
    borderRadius: '15px!important',
    padding: '0 9px!important',
    boxShadow: '0 2px 8px rgba(0,0,0,0.4)'
  },
  '.image-item': {
    padding: '0 15px'
  },
  '@media (max-width: 1199px) and (min-width: 991px)': {
    '.image-item': {
      paddingLeft: '10px',
      paddingRight: '10px'
    }
  },
  '@media (max-width: 768px)': {
    '.image-item': {
      paddingLeft: '7.5px',
      paddingRight: '7.5px'
    }
  },
  '.rc-table-fixed-header .rc-table-scroll .rc-table-header': {
    marginBottom: '0 !important',
    paddingBottom: '0 !important',
    th: {
      padding: '8px 20px'
    }
  },
  '.drawer-content-wrapper': {
    '*:focus': {
      outline: 'none'
    }
  },
  '.rc-table-content': {
    border: 0
  },
  '#modal-root': {
    zIndex: 999999,
    position: 'relative'
  },
  '.drawer': {
    outline: 0,
    boxShadow: 'none'
  },
  '.srOnly': {
    border: '0 !important',
    clip: 'rect(1px, 1px, 1px, 1px) !important',
    clipPath: 'inset(50%) !important',
    height: '1px !important',
    margin: '-1px !important',
    overflow: 'hidden !important',
    padding: '0 !important',
    position: 'absolute !important',
    width: '1px !important',
    whiteSpace: 'nowrap !important'
  }
}, theme.globals)));

/***/ }),

/***/ "./src/assets/styles/pages.style.tsx":
/*!*******************************************!*\
  !*** ./src/assets/styles/pages.style.tsx ***!
  \*******************************************/
/*! exports provided: MobileCarouselDropdown, ProductsRow, OfferPageWrapper, HeaderSection, MainContentArea, SidebarSection, ContentSection, OfferSection, Heading, ProductsCol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileCarouselDropdown", function() { return MobileCarouselDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRow", function() { return ProductsRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferPageWrapper", function() { return OfferPageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSection", function() { return HeaderSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentArea", function() { return MainContentArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarSection", function() { return SidebarSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSection", function() { return ContentSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferSection", function() { return OfferSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsCol", function() { return ProductsCol; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const MobileCarouselDropdown = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pagesstyle__MobileCarouselDropdown",
  componentId: "sc-1pjed90-0"
})(["@media (min-width:990px){display:none;}"]);
const OfferPageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pagesstyle__OfferPageWrapper",
  componentId: "sc-1pjed90-1"
})(["width:100%;height:auto;min-height:100vh;display:flex;flex-direction:column;background-color:", ";position:relative;padding:100px 60px 60px;justify-content:space-between;@media (max-width:768px){padding:100px 30px 60px;}@media (max-width:1199px){padding:100px 30px 60px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#f7f7f7'));
const HeaderSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pagesstyle__HeaderSection",
  componentId: "sc-1pjed90-2"
})(["display:flex;flex-wrap:wrap;width:100%;min-height:400px;background-color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.300', '#f4f4f4'));
const MainContentArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({
  displayName: "pagesstyle__MainContentArea",
  componentId: "sc-1pjed90-3"
})(["width:100%;display:flex;flex-wrap:wrap;background-color:", ";padding-right:0;transition:padding-right 0.35s ease-in-out;@media (max-width:990px){background-color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#f7f7f7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
const SidebarSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pagesstyle__SidebarSection",
  componentId: "sc-1pjed90-4"
})(["background-color:", ";width:280px;@media (max-width:990px){display:none;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
const ContentSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pagesstyle__ContentSection",
  componentId: "sc-1pjed90-5"
})(["width:calc(100% - 280px);height:auto;min-height:100vh;padding:30px 30px 50px;@media (max-width:1199px) and (min-width:991px){padding:15px 30px 50px;}@media (max-width:1367px) and (min-width:1200px){padding:15px 30px 50px;}@media (max-width:990px){width:100%;padding:0px 0px 100px;}@media (max-width:768px){min-height:auto;}.offer-slider{padding:0 0 30px 30px;}"]);
const OfferSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pagesstyle__OfferSection",
  componentId: "sc-1pjed90-6"
})(["width:100%;display:block;padding:60px;background-color:", ";position:relative;border-bottom:1px solid ", ";@media (max-width:1199px) and (min-width:991px){padding:20px 15px;.prevButton{left:0;}.nextButton{right:0;}}@media (max-width:990px){padding:15px;border-bottom:0;.prevButton{left:5px;}.nextButton{right:5px;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1'));
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "pagesstyle__Heading",
  componentId: "sc-1pjed90-7"
})(["font-size:", "px;font-weight:", ";color:", ";padding:0px 20px 20px;margin:50px 10px 20px;border-bottom:2px solid ", ";width:auto;display:inline-block;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.xl', '24'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const ProductsRow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pagesstyle__ProductsRow",
  componentId: "sc-1pjed90-8"
})(["display:flex;flex-wrap:wrap;margin-top:30px;background-color:", ";@media (max-width:768px){margin-left:-7.5px;margin-right:-7.5px;margin-top:15px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#f7f7f7'));
const ProductsCol = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pagesstyle__ProductsCol",
  componentId: "sc-1pjed90-9"
})(["flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;@media (max-width:1650px){flex:0 0 25%;max-width:25%;}@media (max-width:1300px){flex:0 0 33.3333333%;max-width:33.3333333%;}@media (max-width:1199px) and (min-width:900px){padding-left:10px;padding-right:10px;margin-bottom:20px;}@media (max-width:899px) and (min-width:769px){flex:0 0 50%;max-width:50%;}@media (max-width:768px){padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;flex:0 0 50%;max-width:50%;}@media (max-width:490px){flex:0 0 100%;max-width:100%;}"]);


/***/ }),

/***/ "./src/components/banner/banner.style.tsx":
/*!************************************************!*\
  !*** ./src/components/banner/banner.style.tsx ***!
  \************************************************/
/*! exports provided: Box, Image, Content, Title, Description, ContentRow, SearchWrapper, SliderNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRow", function() { return ContentRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWrapper", function() { return SearchWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderNav", function() { return SliderNav; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__);



const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "bannerstyle__Box",
  componentId: "sc-1wl29p7-0"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()({
  height: ['auto', 'auto', '600px', '100vh']
}), {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
  // backgroundColor: #f7f7f7;
  '@media (max-width: 990px)': {
    padding: '80px 0 25px'
  }
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_1__["border"]));
const Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "bannerstyle__Image",
  componentId: "sc-1wl29p7-1"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()({
  backgroundSize: ['cover']
}), {
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: 0,
  left: 0,
  '@media (max-width: 990px) and (min-width: 768px)': {
    backgroundPosition: 'inherit'
  }
}, styled_system__WEBPACK_IMPORTED_MODULE_1__["background"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "bannerstyle__Content",
  componentId: "sc-1wl29p7-2"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()({
  px: ['20px', '20px', '15px'],
  pt: [0]
}), {
  position: 'relative',
  zIndex: 2,
  width: '100%'
});
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "bannerstyle__Title",
  componentId: "sc-1wl29p7-3"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()({
  fontSize: [17, '2xl', 45],
  color: 'text.bold',
  fontWeight: 'bold'
}), {
  marginBottom: 15,
  textAlign: 'center'
});
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "bannerstyle__Description",
  componentId: "sc-1wl29p7-4"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()({
  fontSize: ['base', 'md'],
  color: 'text.regular',
  marginBottom: [null, null, 60],
  display: ['block'],
  fontWeight: 'regular',
  lineHeight: 'body',
  textAlign: ['left', 'left', 'center'],
  '@media (max-width: 990px)': {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingRight: '15px'
  }
}));
const ContentRow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "bannerstyle__ContentRow",
  componentId: "sc-1wl29p7-5"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 20,
  button: {
    padding: 0,
    ':before': {
      content: '""',
      width: 5,
      height: 5,
      display: 'block',
      borderRadius: '50%',
      backgroundColor: 'yellow.regular',
      marginRight: '7px'
    }
  }
}));
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "bannerstyle__SearchWrapper",
  componentId: "sc-1wl29p7-6"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()({
  display: 'flex',
  justifyContent: 'center'
}));
const SliderNav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "bannerstyle__SliderNav",
  componentId: "sc-1wl29p7-7"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()({
  width: 30,
  height: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'text.bold',
  backgroundColor: 'white',
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)',
  outline: 0,
  padding: 0,
  border: 0,
  borderRadius: '50%',
  position: 'absolute',
  top: '50%',
  marginTop: '-15px',
  zIndex: 1,
  cursor: 'pointer',
  svg: {
    width: 18,
    maxHeight: 18
  },
  '&.banner-slider-prev': {
    left: 20
  },
  '&.banner-slider-next': {
    right: 20
  }
}));

/***/ }),

/***/ "./src/components/banner/banner.tsx":
/*!******************************************!*\
  !*** ./src/components/banner/banner.tsx ***!
  \******************************************/
/*! exports provided: Banner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _banner_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner.style */ "./src/components/banner/banner.style.tsx");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-waypoint */ "react-waypoint");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_waypoint__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! contexts/app/app.provider */ "./src/contexts/app/app.provider.ts");
/* harmony import */ var features_search_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! features/search/search */ "./src/features/search/search.tsx");

var _jsxFileName = "C:\\Users\\parnasse\\Downloads\\pickbazarreact-502\\pickbazarreact-502\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\src\\components\\banner\\banner.tsx";






const Banner = ({
  style,
  imageUrl,
  intlTitleId,
  intlDescriptionId
}) => {
  const dispatch = Object(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_5__["useAppDispatch"])();
  const setSticky = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => dispatch({
    type: 'SET_STICKY'
  }), [dispatch]);
  const removeSticky = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => dispatch({
    type: 'REMOVE_STICKY'
  }), [dispatch]);

  const onWaypointPositionChange = ({
    currentPosition
  }) => {
    if (!currentPosition || currentPosition === 'above') {
      setSticky();
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_banner_style__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: ['none', 'none', 'flex'],
    style: style,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_banner_style__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      backgroundImage: `url(${imageUrl})`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_banner_style__WEBPACK_IMPORTED_MODULE_3__["Content"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_banner_style__WEBPACK_IMPORTED_MODULE_3__["Title"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: intlTitleId,
          defaultMessage: "Set Your Title Through Language File",
          values: {
            minute: 90
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_banner_style__WEBPACK_IMPORTED_MODULE_3__["Description"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: intlDescriptionId,
          defaultMessage: "Set Your Description Through Language File"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_banner_style__WEBPACK_IMPORTED_MODULE_3__["SearchWrapper"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(features_search_search__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "banner-search",
          shadow: "0 21px 36px rgba(0,0,0,0.05)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_waypoint__WEBPACK_IMPORTED_MODULE_4__["Waypoint"], {
        onEnter: removeSticky,
        onLeave: setSticky,
        onPositionChange: onWaypointPositionChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/banner/mobile-banner.tsx":
/*!*************************************************!*\
  !*** ./src/components/banner/mobile-banner.tsx ***!
  \*************************************************/
/*! exports provided: MobileBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileBanner", function() { return MobileBanner; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _banner_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner.style */ "./src/components/banner/banner.style.tsx");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-waypoint */ "react-waypoint");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_waypoint__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/button/button */ "./src/components/button/button.tsx");
/* harmony import */ var contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! contexts/app/app.provider */ "./src/contexts/app/app.provider.ts");
/* harmony import */ var features_search_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! features/search/search */ "./src/features/search/search.tsx");

var _jsxFileName = "C:\\Users\\parnasse\\Downloads\\pickbazarreact-502\\pickbazarreact-502\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\src\\components\\banner\\mobile-banner.tsx";








const SpringModal = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! components/spring-modal/spring-modal */ "./src/components/spring-modal/spring-modal.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! components/spring-modal/spring-modal */ "./src/components/spring-modal/spring-modal.tsx")],
    modules: ['components/spring-modal/spring-modal']
  }
});
const CategoryIconNav = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! components/type-nav/type-nav */ "./src/components/type-nav/type-nav.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! components/type-nav/type-nav */ "./src/components/type-nav/type-nav.tsx")],
    modules: ['components/type-nav/type-nav']
  }
});
const MobileBanner = ({
  type,
  intlTitleId
}) => {
  const {
    0: isOpen,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const dispatch = Object(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_7__["useAppDispatch"])();
  const setSticky = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => dispatch({
    type: 'SET_STICKY'
  }), [dispatch]);
  const removeSticky = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => dispatch({
    type: 'REMOVE_STICKY'
  }), [dispatch]);

  const onWaypointPositionChange = ({
    currentPosition
  }) => {
    if (!currentPosition || currentPosition === 'above') {
      setSticky();
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_banner_style__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    display: ['flex', 'flex', 'none'],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_banner_style__WEBPACK_IMPORTED_MODULE_4__["Content"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_banner_style__WEBPACK_IMPORTED_MODULE_4__["ContentRow"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_banner_style__WEBPACK_IMPORTED_MODULE_4__["Description"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: intlTitleId,
            defaultMessage: "Set Your Title Through Language File",
            values: {
              minute: 90
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_button_button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          variant: "text",
          onClick: () => setOpen(true),
          style: {
            textTransform: 'capitalize'
          },
          children: type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_banner_style__WEBPACK_IMPORTED_MODULE_4__["SearchWrapper"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(features_search_search__WEBPACK_IMPORTED_MODULE_8__["default"], {
          minimal: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_waypoint__WEBPACK_IMPORTED_MODULE_5__["Waypoint"], {
        onEnter: removeSticky,
        onLeave: setSticky,
        onPositionChange: onWaypointPositionChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpringModal, {
        isOpen: isOpen,
        onRequestClose: () => setOpen(false),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CategoryIconNav, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/button/button.tsx":
/*!******************************************!*\
  !*** ./src/components/button/button.tsx ***!
  \******************************************/
/*! exports provided: StyledButton, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\parnasse\\Downloads\\pickbazarreact-502\\pickbazarreact-502\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\src\\components\\button\\button.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "button__StyledButton",
  componentId: "sc-1mky0hn-0"
})(props => _styled_system_css__WEBPACK_IMPORTED_MODULE_3___default()({
  px: '15px',
  py: 0,
  fontSize: ['base'],
  fontWeight: 'bold',
  cursor: props.disabled ? 'not-allowed' : 'pointer',
  color: props.disabled ? 'text.light' : 'white',
  bg: props.disabled ? 'gray.500' : 'primary.regular',
  transition: 'all 0.3s ease',
  borderRadius: 'base',
  '&:hover': {
    color: props.disabled ? 'text.light' : 'white',
    bg: props.disabled ? 'gray.500' : 'primary.hover'
  }
}), {
  appearance: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  textAlign: 'center',
  height: '38px',
  textDecoration: 'none',
  fontFamily: 'inherit',
  border: 0,
  '&:focus': {
    outline: 'none'
  }
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_4__["variant"])({
  variants: {
    outlined: {
      color: 'primary.regular',
      bg: 'white',
      border: '1px solid',
      borderColor: 'gray.500',
      '&:hover': {
        borderColor: 'primary.regular',
        color: 'primary.regular',
        bg: 'white'
      }
    },
    primary: {
      color: 'white',
      bg: 'primary.regular',
      '&:hover': {
        bg: 'primary.hover'
      }
    },
    secondary: {
      color: 'primary.regular',
      bg: 'white',
      border: '2px solid',
      borderColor: 'gray.500',
      '&:hover': {
        color: 'white',
        bg: 'primary.regular',
        borderColor: 'primary.regular'
      }
    },
    text: {
      color: 'primary.regular',
      bg: 'transparent',
      '&:hover': {
        bg: 'transparent',
        color: 'primary.hover'
      }
    },
    select: {
      width: 26,
      height: 26,
      lineHeight: 1,
      flexShrink: 0,
      border: '1px solid',
      borderColor: 'text.regular',
      borderRadius: 13,
      padding: 0,
      color: 'text.bold',
      bg: 'transparent',
      '&.selected': {
        bg: 'primary.regular',
        color: 'white',
        borderColor: 'primary.regular'
      },
      '&:hover:not(.selected)': {
        bg: 'transparent',
        color: 'primary.regular',
        borderColor: 'primary.regular'
      }
    }
  }
}), Object(styled_system__WEBPACK_IMPORTED_MODULE_4__["variant"])({
  prop: 'size',
  variants: {
    big: {
      height: '48px',
      px: 30
    },
    small: {
      height: '30px',
      fontSize: 14
    }
  }
}), Object(styled_system__WEBPACK_IMPORTED_MODULE_4__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_4__["border"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], styled_system__WEBPACK_IMPORTED_MODULE_4__["layout"]));
const rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const Spinner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "button__Spinner",
  componentId: "sc-1mky0hn-1"
})(props => _styled_system_css__WEBPACK_IMPORTED_MODULE_3___default()({
  width: 18,
  height: 18,
  marginLeft: 10,
  border: '3px solid white',
  borderTop: `3px solid ${props.color ? props.color : 'primary.regular'}`,
  borderRadius: '50%',
  transitionProperty: 'transform'
}), Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["animation:", " 1.2s infinite linear;"], rotate));
const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((_ref, ref) => {
  let {
    children,
    disabled,
    loading = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "disabled", "loading"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledButton, _objectSpread(_objectSpread({
    ref: ref
  }, props), {}, {
    disabled: disabled,
    children: [children, loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 19
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 5
  }, undefined);
});

/***/ }),

/***/ "./src/components/carousel/carousel.tsx":
/*!**********************************************!*\
  !*** ./src/components/carousel/carousel.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomCarousel; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_icons_ArrowNext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/icons/ArrowNext */ "./src/assets/icons/ArrowNext.tsx");
/* harmony import */ var assets_icons_ArrowPrev__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/icons/ArrowPrev */ "./src/assets/icons/ArrowPrev.tsx");
/* harmony import */ var contexts_language_language_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! contexts/language/language.provider */ "./src/contexts/language/language.provider.tsx");


var _jsxFileName = "C:\\Users\\parnasse\\Downloads\\pickbazarreact-502\\pickbazarreact-502\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\src\\components\\carousel\\carousel.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const ButtonPrev = styled_components__WEBPACK_IMPORTED_MODULE_3___default()('button').withConfig({
  displayName: "carousel__ButtonPrev",
  componentId: "sdn1m3-0"
})(["height:40px;width:40px;display:flex;align-items:center;justify-content:center;background-color:", ";color:", ";padding:0;border-radius:20px;box-shadow:", ";border:0;outline:0;cursor:pointer;position:absolute;top:50%;left:40px;margin-top:-20px;z-index:99;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__["themeGet"])('colors.primary.regular', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__["themeGet"])('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)'));
const ButtonNext = styled_components__WEBPACK_IMPORTED_MODULE_3___default()('button').withConfig({
  displayName: "carousel__ButtonNext",
  componentId: "sdn1m3-1"
})(["height:40px;width:40px;display:flex;align-items:center;justify-content:center;background-color:#ffffff;color:", ";padding:0;border-radius:20px;box-shadow:", ";border:0;outline:0;cursor:pointer;position:absolute;top:50%;right:40px;margin-top:-20px;z-index:99;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__["themeGet"])('colors.primary.regular', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__["themeGet"])('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)'));
const ButtonGroupWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()('div').withConfig({
  displayName: "carousel__ButtonGroupWrapper",
  componentId: "sdn1m3-2"
})([""]);

const PrevButton = ({
  onClick,
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonPrev, {
    onClick: e => {
      e.preventDefault();
      onClick();
    },
    className: "prevButton",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined);
};

const NextButton = ({
  onClick,
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonNext, {
    onClick: e => {
      e.preventDefault();
      onClick();
    },
    className: "nextButton",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, undefined);
};

const ButtonGroup = ({
  next,
  previous
}) => {
  const {
    isRtl
  } = Object(contexts_language_language_provider__WEBPACK_IMPORTED_MODULE_7__["useLocale"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonGroupWrapper, {
    children: isRtl ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NextButton, {
        onClick: () => next(),
        className: "rtl",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_ArrowPrev__WEBPACK_IMPORTED_MODULE_6__["ArrowPrev"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PrevButton, {
        onClick: () => previous(),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_ArrowNext__WEBPACK_IMPORTED_MODULE_5__["ArrowNext"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, undefined)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PrevButton, {
        onClick: () => previous(),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_ArrowPrev__WEBPACK_IMPORTED_MODULE_6__["ArrowPrev"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NextButton, {
        onClick: () => next(),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_ArrowNext__WEBPACK_IMPORTED_MODULE_5__["ArrowNext"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, undefined);
};

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  }
};
function CustomCarousel(_ref) {
  let {
    data,
    deviceType: {
      mobile,
      tablet,
      desktop
    },
    component,
    autoPlay = false,
    infinite = true,
    customLeftArrow,
    customRightArrow,
    itemClass,
    isRtl
  } = _ref,
      props = _objectWithoutProperties(_ref, ["data", "deviceType", "component", "autoPlay", "infinite", "customLeftArrow", "customRightArrow", "itemClass", "isRtl"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    dir: "ltr",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
      arrows: false,
      responsive: responsive,
      showDots: false,
      slidesToSlide: 1,
      infinite: infinite,
      containerClass: "container-with-dots",
      itemClass: itemClass,
      autoPlay: autoPlay,
      autoPlaySpeed: 3000,
      renderButtonGroupOutside: true,
      additionalTransfrom: 0,
      customButtonGroup: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonGroup, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 28
      }, this)
    }, props), {}, {
      children: data.map((item, index) => {
        if (component) return component(item);
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            padding: '0 15px',
            overflow: 'hidden'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: item.link,
            style: {
              display: 'flex',
              cursor: 'pointer'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: item.imgSrc,
              alt: item.alt,
              style: {
                width: '100%',
                height: '100%',
                display: 'block',
                position: 'relative'
              }
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 15
          }, this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 13
        }, this);
      })
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 153,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/search-box/search-box.style.tsx":
/*!********************************************************!*\
  !*** ./src/components/search-box/search-box.style.tsx ***!
  \********************************************************/
/*! exports provided: StyledForm, StyledInput, StyledCategoryName, StyledSearchButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledForm", function() { return StyledForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledInput", function() { return StyledInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledCategoryName", function() { return StyledCategoryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledSearchButton", function() { return StyledSearchButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "search-boxstyle__StyledForm",
  componentId: "x0hjfp-0"
})(props => _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  display: 'flex',
  alignItems: 'center',
  borderRadius: 'base',
  overflow: 'hidden',
  width: props.minimal ? '100%' : 700,
  color: 'text.regular',
  backgroundColor: props.minimal ? 'gray.200' : 'white',
  borderWidth: props.minimal ? '1px' : '0',
  borderStyle: 'solid',
  borderColor: props.minimal ? `gray.500` : 'white',
  input: {
    pl: props.minimal ? 0 : 20
  }
}), styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]);
const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "search-boxstyle__StyledInput",
  componentId: "x0hjfp-1"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  flexGrow: 1,
  fontSize: 'base',
  pr: 20,
  height: 48,
  color: 'text.regular',
  backgroundColor: 'inherit',
  appearance: 'none'
}), {
  border: 0,
  '&:focus': {
    outline: 0
  },
  '&::-webkit-input-placeholder, &::-moz-placeholder, &::-moz-placeholder, &::-ms-input-placeholder': {
    fontSize: 'base',
    color: 'text.regular',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
});
const StyledCategoryName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "search-boxstyle__StyledCategoryName",
  componentId: "x0hjfp-2"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  fontSize: 14,
  fontWeight: 'bold',
  lineHeight: '38px',
  px: 15,
  color: 'primary.regular',
  backgroundColor: 'gray.200',
  borderRadius: 'base'
}), {
  margin: '5px',
  whiteSpace: 'nowrap',
  textTransform: 'capitalize'
});
const StyledSearchButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "search-boxstyle__StyledSearchButton",
  componentId: "x0hjfp-3"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  backgroundColor: 'primary.regular',
  color: 'white',
  fontSize: 'base',
  fontWeight: 'bold'
}), {
  display: 'flex',
  height: 48,
  alignItems: 'center',
  border: 0,
  outline: 0,
  paddingLeft: 30,
  paddingRight: 30,
  cursor: 'pointer',
  flexShrink: 0
});

/***/ }),

/***/ "./src/components/search-box/search-box.tsx":
/*!**************************************************!*\
  !*** ./src/components/search-box/search-box.tsx ***!
  \**************************************************/
/*! exports provided: SearchBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return SearchBox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_box_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-box.style */ "./src/components/search-box/search-box.style.tsx");
/* harmony import */ var assets_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/icons/SearchIcon */ "./src/assets/icons/SearchIcon.tsx");


var _jsxFileName = "C:\\Users\\parnasse\\Downloads\\pickbazarreact-502\\pickbazarreact-502\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\src\\components\\search-box\\search-box.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const SearchBox = (_ref) => {
  let {
    onEnter,
    onChange,
    value,
    name,
    minimal,
    categoryType,
    buttonText,
    className,
    showButtonText = true,
    shadow
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["onEnter", "onChange", "value", "name", "minimal", "categoryType", "buttonText", "className", "showButtonText", "shadow"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_search_box_style__WEBPACK_IMPORTED_MODULE_2__["StyledForm"], {
    onSubmit: onEnter,
    className: className,
    boxShadow: shadow,
    minimal: minimal,
    children: minimal ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_3__["SearchIcon"], {
        style: {
          marginLeft: 16,
          marginRight: 16,
          color: '#212121'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_search_box_style__WEBPACK_IMPORTED_MODULE_2__["StyledInput"], _objectSpread({
        type: "search",
        onChange: onChange,
        value: value,
        name: name
      }, rest), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, undefined)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_search_box_style__WEBPACK_IMPORTED_MODULE_2__["StyledCategoryName"], {
        children: categoryType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_search_box_style__WEBPACK_IMPORTED_MODULE_2__["StyledInput"], _objectSpread({
        type: "search",
        onChange: onChange,
        value: value,
        name: name
      }, rest), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_search_box_style__WEBPACK_IMPORTED_MODULE_2__["StyledSearchButton"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_3__["SearchIcon"], {
          style: {
            marginRight: 10
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, undefined), showButtonText && buttonText]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/seo.tsx":
/*!********************************!*\
  !*** ./src/components/seo.tsx ***!
  \********************************/
/*! exports provided: SEO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEO", function() { return SEO; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\parnasse\\Downloads\\pickbazarreact-502\\pickbazarreact-502\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\src\\components\\seo.tsx";


const SEO = ({
  title,
  description,
  canonical,
  css,
  js,
  image
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
    children: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "description",
    content: description
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "viewport",
    content: "width=device-width,maximum-scale=1,initial-scale=1"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    property: "og:type",
    content: "website"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "og:title",
    property: "og:title",
    content: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "og:description",
    property: "og:description",
    content: description
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    property: "og:site_name",
    content: "Proper Noun"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    property: "og:url",
    content: `${canonical}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "twitter:card",
    content: "summary"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "twitter:title",
    content: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "twitter:description",
    content: description
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "twitter:site",
    content: "@propernounco"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "twitter:creator",
    content: "@propernounco"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined), css && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
    rel: "stylesheet",
    href: `${css}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 13
  }, undefined), image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    property: "og:image",
    content: `${image}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 7
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    property: "og:image",
    content: "https://www.propernoun.co/static/images/proper-noun-social.png"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 7
  }, undefined), image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "twitter:image",
    content: `${image}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 15
  }, undefined), canonical && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
    rel: "canonical",
    href: `${canonical}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 19
  }, undefined), js && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
    type: "text/javascript",
    src: `${js}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 12
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 21,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/contexts/app/app.provider.ts":
/*!******************************************!*\
  !*** ./src/contexts/app/app.provider.ts ***!
  \******************************************/
/*! exports provided: useAppState, useAppDispatch, AppProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppState", function() { return useAppState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppDispatch", function() { return useAppDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProvider", function() { return AppProvider; });
/* harmony import */ var _create_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-context */ "./src/contexts/create-context.tsx");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.reducer */ "./src/contexts/app/app.reducer.ts");


const [state, dispatch, provider] = Object(_create_context__WEBPACK_IMPORTED_MODULE_0__["useCreateContext"])(_app_reducer__WEBPACK_IMPORTED_MODULE_1__["appReducer"], _app_reducer__WEBPACK_IMPORTED_MODULE_1__["initialState"]);
const useAppState = state;
const useAppDispatch = dispatch;
const AppProvider = provider;

/***/ }),

/***/ "./src/contexts/app/app.reducer.ts":
/*!*****************************************!*\
  !*** ./src/contexts/app/app.reducer.ts ***!
  \*****************************************/
/*! exports provided: initialState, appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  searchTerm: '',
  isSticky: false,
  isSidebarSticky: true,
  isDrawerOpen: false,
  isModalOpen: false
};
function appReducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return _objectSpread(_objectSpread({}, state), {}, {
        searchTerm: action.payload
      });

    case 'SET_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: true
      });

    case 'REMOVE_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: false
      });

    case 'SET_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: true
      });

    case 'REMOVE_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: false
      });

    case 'TOGGLE_DRAWER':
      return _objectSpread(_objectSpread({}, state), {}, {
        isDrawerOpen: !state.isDrawerOpen
      });

    case 'TOGGLE_MODAL':
      return _objectSpread(_objectSpread({}, state), {}, {
        isModalOpen: !state.isModalOpen
      });

    default:
      {
        throw new Error(`Unsupported action type at App Reducer`);
      }
  }
}

/***/ }),

/***/ "./src/contexts/create-context.tsx":
/*!*****************************************!*\
  !*** ./src/contexts/create-context.tsx ***!
  \*****************************************/
/*! exports provided: useCreateContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateContext", function() { return useCreateContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\parnasse\\Downloads\\pickbazarreact-502\\pickbazarreact-502\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\src\\contexts\\create-context.tsx";

function useCreateContext(reducer, initialState) {
  const defaultDispatch = () => initialState;

  const stateCtx = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(initialState);
  const dispatchCtx = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(defaultDispatch);

  function useStateCtx(property) {
    const state = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(stateCtx);
    return state[property]; // only one depth selector for comparison
  }

  function useDispatchCtx() {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(dispatchCtx);
  }

  function Provider(props) {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useReducer(reducer, initialState);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(dispatchCtx.Provider, {
      value: dispatch,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(stateCtx.Provider, {
        value: state,
        children: props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this);
  }

  return [useStateCtx, useDispatchCtx, Provider];
} // const [useTextState, useTextDispatch, TextProvider] = useCreateContext(initialState, reducer);
// export const TextContext = ctx;
// export function App() {
//   return (
//     <TextProvider>
//       <Component />
//     </TextProvider>
//   )
// }
// export function Component() {
//   const state = useTextState('state')
//   const dispatch = useTextDispatch()
// const increment = useCallback(() => dispatch({ type: 'increment' }), [dispatch]);
//   return (
//     <div>
//       {state}
//       <button onClick={increment}>Toggle</button>
//     </div>
//   )
// }

/***/ }),

/***/ "./src/contexts/language/language.config.ts":
/*!**************************************************!*\
  !*** ./src/contexts/language/language.config.ts ***!
  \**************************************************/
/*! exports provided: defaultLocale, locales, rtlLocales, languageNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocale", function() { return defaultLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtlLocales", function() { return rtlLocales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageNames", function() { return languageNames; });
const defaultLocale = 'en';
const locales = ['en', 'ar', 'es', 'de', 'zh', 'he'];
const rtlLocales = ['ar', 'he']; // need to customize later

const languageNames = {
  en: 'English',
  fr: 'français',
  pl: 'polski'
};

/***/ }),

/***/ "./src/contexts/language/language.provider.tsx":
/*!*****************************************************!*\
  !*** ./src/contexts/language/language.provider.tsx ***!
  \*****************************************************/
/*! exports provided: LanguageProvider, useLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageProvider", function() { return LanguageProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocale", function() { return useLocale; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_styles_global_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/styles/global.style */ "./src/assets/styles/global.style.tsx");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _language_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./language.utils */ "./src/contexts/language/language.utils.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! stylis-plugin-rtl */ "stylis-plugin-rtl");
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\parnasse\\Downloads\\pickbazarreact-502\\pickbazarreact-502\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\src\\contexts\\language\\language.provider.tsx";







const LanguageContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});
const LanguageProvider = ({
  children,
  messages
}) => {
  const [locale, setLocale] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('en');

  const changeLanguage = newLocale => {
    setLocale(newLocale);
    document.documentElement.lang = newLocale;
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('locale', newLocale);
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    const localSetting = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('locale');

    if (localSetting && Object(_language_utils__WEBPACK_IMPORTED_MODULE_5__["isLocale"])(localSetting)) {
      document.documentElement.lang = localSetting;
      setLocale(localSetting);
    }
  }, [locale]);
  let isRtl = Object(_language_utils__WEBPACK_IMPORTED_MODULE_5__["isRTL"])(locale);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LanguageContext.Provider, {
    value: {
      locale,
      changeLanguage,
      isRtl
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_2__["IntlProvider"], {
      locale: locale,
      messages: messages[locale],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_styles_global_style__WEBPACK_IMPORTED_MODULE_3__["InjectRTL"], {
        lang: locale,
        dir: isRtl ? 'rtl' : 'ltr',
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_6__["StyleSheetManager"], {
          stylisPlugins: isRtl ? [stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_7___default.a] : [],
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};
const useLocale = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(LanguageContext);

/***/ }),

/***/ "./src/contexts/language/language.utils.ts":
/*!*************************************************!*\
  !*** ./src/contexts/language/language.utils.ts ***!
  \*************************************************/
/*! exports provided: isLocale, isRTL, getInitialLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLocale", function() { return isLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRTL", function() { return isRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialLocale", function() { return getInitialLocale; });
/* harmony import */ var _language_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language.config */ "./src/contexts/language/language.config.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


function isLocale(tested) {
  return _language_config__WEBPACK_IMPORTED_MODULE_0__["locales"].some(locale => locale === tested);
}
function isRTL(tested) {
  return _language_config__WEBPACK_IMPORTED_MODULE_0__["rtlLocales"].some(locale => locale === tested);
}
function getInitialLocale() {
  // preference from the previous session
  const localSetting = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('locale');

  if (localSetting && isLocale(localSetting)) {
    return localSetting;
  } // the language setting of the browser
  // const [browserSetting] = navigator.language.split('-');
  // if (isLocale(browserSetting)) {
  //   return browserSetting;
  // }


  return _language_config__WEBPACK_IMPORTED_MODULE_0__["defaultLocale"];
}

/***/ }),

/***/ "./src/contexts/modal/modal.context.ts":
/*!*********************************************!*\
  !*** ./src/contexts/modal/modal.context.ts ***!
  \*********************************************/
/*! exports provided: ModalContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContext", function() { return ModalContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // export const ModalContext = createContext({
//   showModal: null,
//   hideModal: null,
//   isOpenedModal: false,
// });

/**
 * Modals are represented as react components
 *
 * This is what gets passed to useModal as the first argument.
 */

/**
 * Throw error when ModalContext is used outside of context provider
 */
const invariantViolation = () => {
  throw new Error('Attempted to call useModal outside of modal context. Make sure your app is rendered inside ModalProvider.');
};
/**
 * Modal Context Object
 */


const ModalContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  showModal: invariantViolation,
  hideModal: invariantViolation
});

/***/ }),

/***/ "./src/contexts/modal/modal.provider.tsx":
/*!***********************************************!*\
  !*** ./src/contexts/modal/modal.provider.tsx ***!
  \***********************************************/
/*! exports provided: ModalProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalProvider", function() { return ModalProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modal_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.context */ "./src/contexts/modal/modal.context.ts");
/* harmony import */ var utils_use_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/use-media */ "./src/utils/use-media.ts");

var _jsxFileName = "C:\\Users\\parnasse\\Downloads\\pickbazarreact-502\\pickbazarreact-502\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\src\\contexts\\modal\\modal.provider.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const SpringModal = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! components/spring-modal/spring-modal */ "./src/components/spring-modal/spring-modal.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! components/spring-modal/spring-modal */ "./src/components/spring-modal/spring-modal.tsx")],
    modules: ['components/spring-modal/spring-modal']
  }
});
const CenterModal = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! components/modal/center-modal */ "./src/components/modal/center-modal.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! components/modal/center-modal */ "./src/components/modal/center-modal.tsx")],
    modules: ['components/modal/center-modal']
  }
});
/**
 * Modal Provider Props
 */

/**
 * Modal Provider
 *
 * Provides modal context and renders ModalRoot.
 */
const ModalProvider = ({
  container,
  rootComponent,
  children
}) => {
  if (container && !(container instanceof HTMLElement)) {
    throw new Error(`Container must specify DOM element to mount modal root into.
    This behavior has changed in 3.0.0. Please use \`rootComponent\` prop instead.
    See: https://github.com/mpontus/react-modal-hook/issues/18`);
  }

  const {
    0: modals,
    1: setModals
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});

  const showModal = (key, modal, options = {}) => setModals(prev => _objectSpread(_objectSpread({}, prev), {}, {
    [key]: _objectSpread({
      component: modal,
      isOpen: true
    }, options)
  }));

  const hideModal = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])((key, onClose) => {
    setModals(prevConfig => _objectSpread(_objectSpread({}, prevConfig), {}, {
      [key]: _objectSpread(_objectSpread({}, prevConfig[key]), {}, {
        isOpen: false
      })
    }));

    if (onClose) {
      onClose();
    }
  }, []);
  const contextValue = {
    showModal,
    hideModal
  };
  const isSmall = Object(utils_use_media__WEBPACK_IMPORTED_MODULE_4__["useMedia"])('(max-width: 767px)');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modal_context__WEBPACK_IMPORTED_MODULE_3__["ModalContext"].Provider, {
    value: contextValue,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      children: [children, Object.keys(modals).map(currentKey => {
        console.log(currentKey, modals[currentKey]);
        const {
          component: Component,
          isOpen,
          onClose
        } = modals[currentKey];
        return isSmall ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpringModal, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, undefined),
          isOpen: isOpen,
          onRequestClose: () => hideModal(currentKey, onClose)
        }, currentKey, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CenterModal, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, undefined),
          isOpen: isOpen,
          onRequestClose: () => hideModal(currentKey, onClose)
        }, currentKey, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, undefined);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/features/search/search.tsx":
/*!****************************************!*\
  !*** ./src/features/search/search.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_search_box_search_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/search-box/search-box */ "./src/components/search-box/search-box.tsx");
/* harmony import */ var contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! contexts/app/app.provider */ "./src/contexts/app/app.provider.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\parnasse\\Downloads\\pickbazarreact-502\\pickbazarreact-502\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\src\\features\\search\\search.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Search = (_ref) => {
  let {
    onSubmit
  } = _ref,
      props = _objectWithoutProperties(_ref, ["onSubmit"]);

  const searchTerm = Object(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_3__["useAppState"])('searchTerm');
  const dispatch = Object(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_3__["useAppDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["useIntl"])();

  const handleOnChange = e => {
    const {
      value
    } = e.target;
    dispatch({
      type: 'SET_SEARCH_TERM',
      payload: value
    });
  };

  const {
    pathname,
    query
  } = router;

  const onSearch = e => {
    e.preventDefault();

    const {
      type
    } = query,
          rest = _objectWithoutProperties(query, ["type"]);

    if (type) {
      router.push({
        pathname,
        query: _objectSpread(_objectSpread({}, rest), {}, {
          text: searchTerm
        })
      }, {
        pathname: `/${type}`,
        query: _objectSpread(_objectSpread({}, rest), {}, {
          text: searchTerm
        })
      });
    } else {
      router.push({
        pathname,
        query: _objectSpread(_objectSpread({}, rest), {}, {
          text: searchTerm
        })
      });
    }

    dispatch({
      type: 'SET_SEARCH_TERM',
      payload: ''
    });

    if (onSubmit) {
      onSubmit();
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_search_box_search_box__WEBPACK_IMPORTED_MODULE_2__["SearchBox"], _objectSpread({
    onEnter: onSearch,
    onChange: handleOnChange,
    value: searchTerm,
    name: "search",
    placeholder: intl.formatMessage({
      id: 'searchPlaceholder',
      defaultMessage: 'Search your products from here'
    }),
    categoryType: query.type || 'bakery',
    buttonText: intl.formatMessage({
      id: 'searchButtonText',
      defaultMessage: 'Search'
    })
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/graphql/query/category.query.ts":
/*!*********************************************!*\
  !*** ./src/graphql/query/category.query.ts ***!
  \*********************************************/
/*! exports provided: GET_CATEGORIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES", function() { return GET_CATEGORIES; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_CATEGORIES = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query getCategories($type: String!) {
    categories(type: $type) {
      id
      title
      slug
      icon
      children {
        id
        title
        slug
      }
    }
  }
`;

/***/ }),

/***/ "./src/graphql/query/products.query.ts":
/*!*********************************************!*\
  !*** ./src/graphql/query/products.query.ts ***!
  \*********************************************/
/*! exports provided: GET_PRODUCTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS", function() { return GET_PRODUCTS; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_PRODUCTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query getProducts(
    $type: String
    $text: String
    $category: String
    $offset: Int
    $limit: Int
  ) {
    products(
      type: $type
      text: $text
      category: $category
      offset: $offset
      limit: $limit
    ) {
      items {
        id
        title
        slug
        unit
        price
        salePrice
        description
        discountInPercent
        type
        image
        author {
          id
          name
        }
        gallery {
          url
        }
        categories {
          id
          title
          slug
        }
      }
      hasMore
    }
  }
`;

/***/ }),

/***/ "./src/pages/[type].tsx":
/*!******************************!*\
  !*** ./src/pages/[type].tsx ***!
  \******************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_carousel_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/carousel/carousel */ "./src/components/carousel/carousel.tsx");
/* harmony import */ var components_banner_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/banner/banner */ "./src/components/banner/banner.tsx");
/* harmony import */ var components_banner_mobile_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/banner/mobile-banner */ "./src/components/banner/mobile-banner.tsx");
/* harmony import */ var assets_styles_pages_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/styles/pages.style */ "./src/assets/styles/pages.style.tsx");
/* harmony import */ var site_settings_site_offers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! site-settings/site-offers */ "./src/site-settings/site-offers.ts");
/* harmony import */ var site_settings_site_pages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! site-settings/site-pages */ "./src/site-settings/site-pages.ts");
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/seo */ "./src/components/seo.tsx");
/* harmony import */ var utils_use_ref_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/use-ref-scroll */ "./src/utils/use-ref-scroll.ts");
/* harmony import */ var utils_apollo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! utils/apollo */ "./src/utils/apollo.tsx");
/* harmony import */ var graphql_query_products_query__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! graphql/query/products.query */ "./src/graphql/query/products.query.ts");
/* harmony import */ var graphql_query_category_query__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! graphql/query/category.query */ "./src/graphql/query/category.query.ts");
/* harmony import */ var contexts_modal_modal_provider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! contexts/modal/modal.provider */ "./src/contexts/modal/modal.provider.tsx");


var _jsxFileName = "C:\\Users\\parnasse\\Downloads\\pickbazarreact-502\\pickbazarreact-502\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\src\\pages\\[type].tsx";







 // Static Data Import Here









const Sidebar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! layouts/sidebar/sidebar */ "./src/layouts/sidebar/sidebar.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! layouts/sidebar/sidebar */ "./src/layouts/sidebar/sidebar.tsx")],
    modules: ['layouts/sidebar/sidebar']
  }
});
const Products = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! components/product-grid/product-list/product-list */ "./src/components/product-grid/product-list/product-list.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! components/product-grid/product-list/product-list */ "./src/components/product-grid/product-list/product-list.tsx")],
    modules: ['components/product-grid/product-list/product-list']
  }
});
const CartPopUp = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! features/carts/cart-popup */ "./src/features/carts/cart-popup.tsx")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! features/carts/cart-popup */ "./src/features/carts/cart-popup.tsx")],
    modules: ['features/carts/cart-popup']
  }
});

const CategoryPage = ({
  deviceType
}) => {
  const {
    query
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    elRef: targetRef,
    scroll
  } = Object(utils_use_ref_scroll__WEBPACK_IMPORTED_MODULE_12__["useRefScroll"])({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -110
  });
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (query.text || query.category) {
      scroll();
    }
  }, [query.text, query.category]);
  const PAGE_TYPE = query.type;
  const page = site_settings_site_pages__WEBPACK_IMPORTED_MODULE_10__["sitePages"][PAGE_TYPE];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_seo__WEBPACK_IMPORTED_MODULE_11__["SEO"], {
      title: page === null || page === void 0 ? void 0 : page.page_title,
      description: page === null || page === void 0 ? void 0 : page.page_description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(contexts_modal_modal_provider__WEBPACK_IMPORTED_MODULE_16__["ModalProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_banner_mobile_banner__WEBPACK_IMPORTED_MODULE_7__["MobileBanner"], {
          intlTitleId: page === null || page === void 0 ? void 0 : page.banner_title_id,
          type: PAGE_TYPE
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_banner_banner__WEBPACK_IMPORTED_MODULE_6__["Banner"], {
          intlTitleId: page === null || page === void 0 ? void 0 : page.banner_title_id,
          intlDescriptionId: page === null || page === void 0 ? void 0 : page.banner_description_id,
          imageUrl: page === null || page === void 0 ? void 0 : page.banner_image_url
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_styles_pages_style__WEBPACK_IMPORTED_MODULE_8__["OfferSection"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              margin: '0 -10px'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_carousel_carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
              deviceType: deviceType,
              data: site_settings_site_offers__WEBPACK_IMPORTED_MODULE_9__["siteOffers"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_styles_pages_style__WEBPACK_IMPORTED_MODULE_8__["MobileCarouselDropdown"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Sidebar, {
            type: PAGE_TYPE,
            deviceType: deviceType
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_styles_pages_style__WEBPACK_IMPORTED_MODULE_8__["MainContentArea"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_styles_pages_style__WEBPACK_IMPORTED_MODULE_8__["SidebarSection"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Sidebar, {
              type: PAGE_TYPE,
              deviceType: deviceType
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_styles_pages_style__WEBPACK_IMPORTED_MODULE_8__["ContentSection"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              ref: targetRef,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Products, {
                type: PAGE_TYPE,
                deviceType: deviceType,
                fetchLimit: 20
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CartPopUp, {
          deviceType: deviceType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

const getStaticProps = async ({
  params
}) => {
  const apolloClient = Object(utils_apollo__WEBPACK_IMPORTED_MODULE_13__["initializeApollo"])();
  await apolloClient.query({
    query: graphql_query_products_query__WEBPACK_IMPORTED_MODULE_14__["GET_PRODUCTS"],
    variables: {
      type: params.type,
      offset: 0,
      limit: 20
    }
  });
  await apolloClient.query({
    query: graphql_query_category_query__WEBPACK_IMPORTED_MODULE_15__["GET_CATEGORIES"],
    variables: {
      type: params.type
    }
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  };
};
async function getStaticPaths() {
  return {
    paths: [{
      params: {
        type: 'grocery'
      }
    }, {
      params: {
        type: 'makeup'
      }
    }, {
      params: {
        type: 'bags'
      }
    }, {
      params: {
        type: 'book'
      }
    }, {
      params: {
        type: 'medicine'
      }
    }, {
      params: {
        type: 'furniture'
      }
    }, {
      params: {
        type: 'clothing'
      }
    }],
    fallback: false
  };
}
/* harmony default export */ __webpack_exports__["default"] = (CategoryPage);

/***/ }),

/***/ "./src/site-settings/site-offers.ts":
/*!******************************************!*\
  !*** ./src/site-settings/site-offers.ts ***!
  \******************************************/
/*! exports provided: siteOffers */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// __webpack_require__.r(__webpack_exports__);
// /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteOffers", function() { return siteOffers; });
// /* harmony import */ var assets_images_promotion_offer_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/images/promotion/offer-1.png */ "./src/assets/images/promotion/offer-1.png");
// /* harmony import */ var assets_images_promotion_offer_1_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assets_images_promotion_offer_1_png__WEBPACK_IMPORTED_MODULE_0__);
// /* harmony import */ var assets_images_promotion_offer_3_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/images/promotion/offer-3.png */ "./src/assets/images/promotion/offer-3.png");
// /* harmony import */ var assets_images_promotion_offer_3_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_images_promotion_offer_3_png__WEBPACK_IMPORTED_MODULE_1__);
// /* harmony import */ var assets_images_promotion_offer_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/promotion/offer-2.png */ "./src/assets/images/promotion/offer-2.png");
// /* harmony import */ var assets_images_promotion_offer_2_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_images_promotion_offer_2_png__WEBPACK_IMPORTED_MODULE_2__);



const siteOffers = [{
  id: '1',
  imgSrc: assets_images_promotion_offer_1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  alt: 'Offer 1'
}, {
  id: '2',
  imgSrc: assets_images_promotion_offer_2_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  alt: 'Offer 2'
}, {
  id: '3',
  imgSrc: assets_images_promotion_offer_3_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  alt: 'Offer 3'
}];

/***/ }),

/***/ "./src/site-settings/site-pages.ts":
/*!*****************************************!*\
  !*** ./src/site-settings/site-pages.ts ***!
  \*****************************************/
/*! exports provided: sitePages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sitePages", function() { return sitePages; });
/* harmony import */ var assets_images_banner_grocery_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/images/banner/grocery.png */ "./src/assets/images/banner/grocery.png");
/* harmony import */ var assets_images_banner_grocery_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner_grocery_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_images_banner_makeup_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/images/banner/makeup.png */ "./src/assets/images/banner/makeup.png");
/* harmony import */ var assets_images_banner_makeup_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner_makeup_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_images_banner_bags_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/banner/bags.png */ "./src/assets/images/banner/bags.png");
/* harmony import */ var assets_images_banner_bags_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner_bags_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_images_banner_cloths_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/banner/cloths.png */ "./src/assets/images/banner/cloths.png");
/* harmony import */ var assets_images_banner_cloths_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner_cloths_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_images_banner_books_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/banner/books.png */ "./src/assets/images/banner/books.png");
/* harmony import */ var assets_images_banner_books_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner_books_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_images_banner_furniture_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/banner/furniture.png */ "./src/assets/images/banner/furniture.png");
/* harmony import */ var assets_images_banner_furniture_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner_furniture_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_images_banner_medicine_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/banner/medicine.png */ "./src/assets/images/banner/medicine.png");
/* harmony import */ var assets_images_banner_medicine_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner_medicine_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_images_banner_bakery_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/images/banner/bakery.jpg */ "./src/assets/images/banner/bakery.jpg");
/* harmony import */ var assets_images_banner_bakery_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner_bakery_jpg__WEBPACK_IMPORTED_MODULE_7__);








const sitePages = {
  grocery: {
    page_title: 'Grocery - PickBazar',
    page_description: 'Grocery Details',
    banner_title_id: 'groceriesTitle',
    banner_description_id: 'groceriesSubTitle',
    banner_image_url: assets_images_banner_grocery_png__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  bakery: {
    page_title: 'Bakery - PickBazar',
    page_description: 'Bakery Details',
    banner_title_id: 'bakeryTitle',
    banner_description_id: 'bakerySubTitle',
    banner_image_url: assets_images_banner_bakery_jpg__WEBPACK_IMPORTED_MODULE_7___default.a
  },
  makeup: {
    page_title: 'Makeup - PickBazar',
    page_description: 'Makeup Details',
    banner_title_id: 'makeupTitle',
    banner_description_id: 'makeupSubTitle',
    banner_image_url: assets_images_banner_makeup_png__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  bags: {
    page_title: 'Bags - PickBazar',
    page_description: 'Bags Details',
    banner_title_id: 'bagsTitle',
    banner_description_id: 'bagsSubTitle',
    banner_image_url: assets_images_banner_bags_png__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  clothing: {
    page_title: 'Clothing - PickBazar',
    page_description: 'Clothing Details',
    banner_title_id: 'womenClothsTitle',
    banner_description_id: 'womenClothsSubTitle',
    banner_image_url: assets_images_banner_cloths_png__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  furniture: {
    page_title: 'Furniture - PickBazar',
    page_description: 'Furniture Details',
    banner_title_id: 'furnitureTitle',
    banner_description_id: 'furnitureSubTitle',
    banner_image_url: assets_images_banner_furniture_png__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  book: {
    page_title: 'Book - PickBazar',
    page_description: 'Book Details',
    banner_title_id: 'booksTitle',
    banner_description_id: 'booksSubTitle',
    banner_image_url: assets_images_banner_books_png__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  medicine: {
    page_title: 'Medicine - PickBazar',
    page_description: 'Medicine Details',
    banner_title_id: 'medicineTitle',
    banner_description_id: 'medicineSubTitle',
    banner_image_url: assets_images_banner_medicine_png__WEBPACK_IMPORTED_MODULE_6___default.a
  }
};

/***/ }),

/***/ "./src/utils/apollo.tsx":
/*!******************************!*\
  !*** ./src/utils/apollo.tsx ***!
  \******************************/
/*! exports provided: initializeApollo, useApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApollo", function() { return initializeApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApollo", function() { return useApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



let apolloClient;

function createIsomorphLink() {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
    uri: "http://localhost:4000/shop/graphql",
    // Server URL (must be absolute)
    credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`

  });
}

function createApolloClient() {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
    ssrMode: true,
    link: createIsomorphLink(),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]({
      typePolicies: {
        Query: {
          fields: {
            // Reusable helper function to generate a field
            // policy for the Query.products field.
            products: {
              keyArgs: ['type', 'category', 'text'],

              merge(existing, incoming) {
                const {
                  items: newItems
                } = incoming;
                return existing ? _objectSpread(_objectSpread({}, incoming), {}, {
                  items: [...existing.items, ...newItems]
                }) : incoming;
              }

            }
          }
        }
      }
    })
  });
}

function initializeApollo(initialState = null) {
  var _apolloClient2;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here


  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract(); // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data


    _apolloClient.cache.restore(_objectSpread(_objectSpread({}, existingCache), initialState));
  } // For SSG and SSR always create a new Apollo Client


  if (true) return _apolloClient; // Create the Apollo Client once in the client

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function useApollo(initialState) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeApollo(initialState), [initialState]);
  return store;
}

/***/ }),

/***/ "./src/utils/use-is-client.ts":
/*!************************************!*\
  !*** ./src/utils/use-is-client.ts ***!
  \************************************/
/*! exports provided: isClient, useIsClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClient", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsClient", function() { return useIsClient; });
const isClient = !!( false && false);
const useIsClient = () => isClient;

/***/ }),

/***/ "./src/utils/use-media.ts":
/*!********************************!*\
  !*** ./src/utils/use-media.ts ***!
  \********************************/
/*! exports provided: useMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMedia", function() { return useMedia; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const isClient = false;
const useMedia = (query, defaultState = false) => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isClient ? () => window.matchMedia(query).matches : defaultState);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let mounted = true;
    const mql = window.matchMedia(query);

    const onChange = () => {
      if (!mounted) {
        return;
      }

      setState(!!mql.matches);
    };

    mql.addListener(onChange);
    setState(mql.matches);
    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);
  return state;
};

/***/ }),

/***/ "./src/utils/use-ref-scroll.ts":
/*!*************************************!*\
  !*** ./src/utils/use-ref-scroll.ts ***!
  \*************************************/
/*! exports provided: ScrollDirections, useRefScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDirections", function() { return ScrollDirections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRefScroll", function() { return useRefScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_is_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-is-client */ "./src/utils/use-is-client.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



let ScrollDirections;

(function (ScrollDirections) {
  ScrollDirections[ScrollDirections["Horizontal"] = 0] = "Horizontal";
  ScrollDirections[ScrollDirections["Vertical"] = 1] = "Vertical";
})(ScrollDirections || (ScrollDirections = {}));

function scrollToPercent(el, {
  container,
  percentOfElement,
  offsetPX,
  direction,
  percentOfContainer
}) {
  const rect = el.current.getClientRects()[0];
  const isVertical = direction === ScrollDirections.Vertical;
  const refSize = isVertical ? rect.height : rect.width;
  const elemScroll = isVertical ? rect.y : rect.x;
  const scrollSize = container === window ? isVertical ? container.innerHeight : container.innerWidth : isVertical ? container.scrollHeight : container.scrollWidth;
  let addOffset = refSize * percentOfElement / 100;

  if (offsetPX) {
    addOffset += offsetPX;
  }

  const containerScroll = isVertical ? container.scrollY : container.scrollX;
  const newScroll = containerScroll + elemScroll + (scrollSize * percentOfContainer / 100 + addOffset);
  const scrollObj = isVertical ? {
    top: newScroll
  } : {
    left: newScroll
  };
  window.scrollTo(_objectSpread(_objectSpread({}, scrollObj), {}, {
    behavior: 'smooth'
  }));
}

function useRefScroll({
  percentOfElement = 50,
  offsetPX = 0,
  onMount = false,
  container = _use_is_client__WEBPACK_IMPORTED_MODULE_1__["isClient"] ? window : null,
  percentOfContainer = 50,
  direction = ScrollDirections.Vertical
}) {
  const elRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const scroll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (elRef.current) {
      scrollToPercent(elRef, {
        percentOfElement,
        offsetPX,
        container,
        percentOfContainer,
        direction
      });
    }
  }, [elRef.current]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (onMount) {
      scroll();
    }
  }, []);
  return {
    elRef,
    scroll
  };
} // function MyComponent() {
//   // using the hook without arguments will scroll the element to the center of the
//   // window's viewport
//   // alias elRef to myDiv for easier usage if having multiple elements
//   // in the same component
//   const { elRef: myDiv, scroll } = useRefScroller();
//   return (
//     <div>
//       <button onClick={scroll}>Scroll</button>
//       <div ref={myDiv}>
//         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur, massa vitae consectetur egestas, justo magna
//         facilisis arcu, non accumsan lacus ipsum sit amet nisl.`
//       </div>
//     </div>
//   );
// }

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@redq/reuse-modal":
/*!************************************!*\
  !*** external "@redq/reuse-modal" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "@styled-system/css":
/*!*************************************!*\
  !*** external "@styled-system/css" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-system/css");

/***/ }),

/***/ "@styled-system/theme-get":
/*!*******************************************!*\
  !*** external "@styled-system/theme-get" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "localforage":
/*!******************************!*\
  !*** external "localforage" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "lodash/startCase":
/*!***********************************!*\
  !*** external "lodash/startCase" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/startCase");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "overlayscrollbars-react":
/*!******************************************!*\
  !*** external "overlayscrollbars-react" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-content-loader":
/*!***************************************!*\
  !*** external "react-content-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "react-image":
/*!******************************!*\
  !*** external "react-image" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "react-spring-modal":
/*!*************************************!*\
  !*** external "react-spring-modal" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring-modal");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "react-waypoint":
/*!*********************************!*\
  !*** external "react-waypoint" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "resize-observer-polyfill":
/*!*******************************************!*\
  !*** external "resize-observer-polyfill" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "stylis-plugin-rtl":
/*!************************************!*\
  !*** external "stylis-plugin-rtl" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stylis-plugin-rtl");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL0Fycm93TmV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9BcnJvd1ByZXYudHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvU2VhcmNoSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvYmFubmVyL2JhZ3MucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2Jhbm5lci9iYWtlcnkuanBnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2Jhbm5lci9ib29rcy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvYmFubmVyL2Nsb3Rocy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvYmFubmVyL2Z1cm5pdHVyZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvYmFubmVyL2dyb2NlcnkucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2Jhbm5lci9tYWtldXAucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2Jhbm5lci9tZWRpY2luZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvcHJvbW90aW9uL29mZmVyLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3Byb21vdGlvbi9vZmZlci0yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9wcm9tb3Rpb24vb2ZmZXItMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlcy9wYWdlcy5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmFubmVyL21vYmlsZS1iYW5uZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guc3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvYXBwL2FwcC5wcm92aWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvYXBwL2FwcC5yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9jcmVhdGUtY29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2xhbmd1YWdlL2xhbmd1YWdlLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvbGFuZ3VhZ2UvbGFuZ3VhZ2UucHJvdmlkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9sYW5ndWFnZS9sYW5ndWFnZS51dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvbW9kYWwvbW9kYWwuY29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvbW9kYWwvbW9kYWwucHJvdmlkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9zZWFyY2gvc2VhcmNoLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9xdWVyeS9jYXRlZ29yeS5xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9xdWVyeS9wcm9kdWN0cy5xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvW3R5cGVdLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2l0ZS1zZXR0aW5ncy9zaXRlLW9mZmVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2l0ZS1zZXR0aW5ncy9zaXRlLXBhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9hcG9sbG8udHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy91c2UtaXMtY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy91c2UtbWVkaWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3VzZS1yZWYtc2Nyb2xsLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHEvcmV1c2UtbW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLXN5c3RlbS9jc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2NhbGZvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9zdGFydENhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm92ZXJsYXlzY3JvbGxiYXJzLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb250ZW50LWxvYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWltYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW50bFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZXZlYWwvRmFkZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNwcmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNwcmluZy1tb2RhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0aWNreW5vZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC13YXlwb2ludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxpcy1wbHVnaW4tcnRsXCIiXSwibmFtZXMiOlsiQXJyb3dOZXh0IiwicHJvcHMiLCJBcnJvd1ByZXYiLCJTZWFyY2hJY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsIkluamVjdFJUTCIsInN0eWxlZCIsImRpdiIsImxhbmciLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGhlbWUiLCJjc3MiLCJib3hTaXppbmciLCJib2R5IiwibWFyZ2luIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2l0aW9uIiwiZ2V0IiwiV2Via2l0VGV4dFNpemVBZGp1c3QiLCJXZWJraXRGb250U21vb3RoaW5nIiwiTW96T3N4Rm9udFNtb290aGluZyIsInRleHRTaGFkb3ciLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJhIiwidGV4dERlY29yYXRpb24iLCJ1bCIsInBhZGRpbmciLCJsaSIsImxpc3RTdHlsZSIsInByZSIsIm92ZXJmbG93WCIsImNvZGUiLCJ0YWJsZSIsImJvcmRlckNvbGxhcHNlIiwiYm9yZGVyU3BhY2luZyIsInRoIiwidGV4dEFsaWduIiwiYm9yZGVyQm90dG9tU3R5bGUiLCJ0ZCIsImltZyIsIm1heFdpZHRoIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwidHJhbnNmb3JtIiwibWF4SGVpZ2h0IiwidG9wIiwibGVmdCIsImJhY2tncm91bmQiLCJyaWdodCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibWFyZ2luQm90dG9tIiwicGFkZGluZ0JvdHRvbSIsIm91dGxpbmUiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsImNsaXAiLCJjbGlwUGF0aCIsIm92ZXJmbG93Iiwid2hpdGVTcGFjZSIsImdsb2JhbHMiLCJNb2JpbGVDYXJvdXNlbERyb3Bkb3duIiwiT2ZmZXJQYWdlV3JhcHBlciIsInRoZW1lR2V0IiwiSGVhZGVyU2VjdGlvbiIsIk1haW5Db250ZW50QXJlYSIsIm1haW4iLCJTaWRlYmFyU2VjdGlvbiIsIkNvbnRlbnRTZWN0aW9uIiwiT2ZmZXJTZWN0aW9uIiwiSGVhZGluZyIsIlByb2R1Y3RzUm93IiwiUHJvZHVjdHNDb2wiLCJCb3giLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImNvbXBvc2UiLCJzcGFjZSIsImxheW91dCIsImZsZXhib3giLCJJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsIkNvbnRlbnQiLCJweCIsInB0IiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsInAiLCJ0ZXh0T3ZlcmZsb3ciLCJDb250ZW50Um93IiwiYnV0dG9uIiwiY29udGVudCIsIm1hcmdpblJpZ2h0IiwiU2VhcmNoV3JhcHBlciIsIlNsaWRlck5hdiIsIm1hcmdpblRvcCIsImN1cnNvciIsInN2ZyIsIkJhbm5lciIsInN0eWxlIiwiaW1hZ2VVcmwiLCJpbnRsVGl0bGVJZCIsImludGxEZXNjcmlwdGlvbklkIiwiZGlzcGF0Y2giLCJ1c2VBcHBEaXNwYXRjaCIsInNldFN0aWNreSIsInVzZUNhbGxiYWNrIiwidHlwZSIsInJlbW92ZVN0aWNreSIsIm9uV2F5cG9pbnRQb3NpdGlvbkNoYW5nZSIsImN1cnJlbnRQb3NpdGlvbiIsIm1pbnV0ZSIsIlNwcmluZ01vZGFsIiwiZHluYW1pYyIsIkNhdGVnb3J5SWNvbk5hdiIsIk1vYmlsZUJhbm5lciIsImlzT3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsInRleHRUcmFuc2Zvcm0iLCJTdHlsZWRCdXR0b24iLCJzeXN0ZW1Dc3MiLCJweSIsImRpc2FibGVkIiwiYmciLCJhcHBlYXJhbmNlIiwiZmxleFNocmluayIsInZhcmlhbnQiLCJ2YXJpYW50cyIsIm91dGxpbmVkIiwiYm9yZGVyQ29sb3IiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwidGV4dCIsInNlbGVjdCIsInByb3AiLCJiaWciLCJzbWFsbCIsInJvdGF0ZSIsImtleWZyYW1lcyIsIlNwaW5uZXIiLCJtYXJnaW5MZWZ0IiwiYm9yZGVyVG9wIiwidHJhbnNpdGlvblByb3BlcnR5IiwiQnV0dG9uIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicmVmIiwiY2hpbGRyZW4iLCJsb2FkaW5nIiwiQnV0dG9uUHJldiIsIkJ1dHRvbk5leHQiLCJCdXR0b25Hcm91cFdyYXBwZXIiLCJQcmV2QnV0dG9uIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIk5leHRCdXR0b24iLCJCdXR0b25Hcm91cCIsIm5leHQiLCJwcmV2aW91cyIsImlzUnRsIiwidXNlTG9jYWxlIiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJ0YWJsZXQiLCJtb2JpbGUiLCJDdXN0b21DYXJvdXNlbCIsImRhdGEiLCJkZXZpY2VUeXBlIiwiY29tcG9uZW50IiwiYXV0b1BsYXkiLCJpbmZpbml0ZSIsImN1c3RvbUxlZnRBcnJvdyIsImN1c3RvbVJpZ2h0QXJyb3ciLCJpdGVtQ2xhc3MiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaW5rIiwiaW1nU3JjIiwiYWx0IiwiaWQiLCJTdHlsZWRGb3JtIiwiZm9ybSIsIm1pbmltYWwiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiaW5wdXQiLCJwbCIsInNoYWRvdyIsIlN0eWxlZElucHV0IiwiZmxleEdyb3ciLCJwciIsIlN0eWxlZENhdGVnb3J5TmFtZSIsInNwYW4iLCJTdHlsZWRTZWFyY2hCdXR0b24iLCJTZWFyY2hCb3giLCJvbkVudGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsIm5hbWUiLCJjYXRlZ29yeVR5cGUiLCJidXR0b25UZXh0IiwiY2xhc3NOYW1lIiwic2hvd0J1dHRvblRleHQiLCJyZXN0IiwiU0VPIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhbm9uaWNhbCIsImpzIiwiaW1hZ2UiLCJzdGF0ZSIsInByb3ZpZGVyIiwidXNlQ3JlYXRlQ29udGV4dCIsImFwcFJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJ1c2VBcHBTdGF0ZSIsIkFwcFByb3ZpZGVyIiwic2VhcmNoVGVybSIsImlzU3RpY2t5IiwiaXNTaWRlYmFyU3RpY2t5IiwiaXNEcmF3ZXJPcGVuIiwiaXNNb2RhbE9wZW4iLCJhY3Rpb24iLCJwYXlsb2FkIiwiRXJyb3IiLCJyZWR1Y2VyIiwiZGVmYXVsdERpc3BhdGNoIiwic3RhdGVDdHgiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGF0Y2hDdHgiLCJ1c2VTdGF0ZUN0eCIsInByb3BlcnR5IiwidXNlQ29udGV4dCIsInVzZURpc3BhdGNoQ3R4IiwiUHJvdmlkZXIiLCJ1c2VSZWR1Y2VyIiwiZGVmYXVsdExvY2FsZSIsImxvY2FsZXMiLCJydGxMb2NhbGVzIiwibGFuZ3VhZ2VOYW1lcyIsImVuIiwiZnIiLCJMYW5ndWFnZUNvbnRleHQiLCJMYW5ndWFnZVByb3ZpZGVyIiwibWVzc2FnZXMiLCJsb2NhbGUiLCJzZXRMb2NhbGUiLCJjaGFuZ2VMYW5ndWFnZSIsIm5ld0xvY2FsZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiQ29va2llIiwic2V0IiwidXNlRWZmZWN0IiwibG9jYWxTZXR0aW5nIiwiaXNMb2NhbGUiLCJpc1JUTCIsIlJUTFBsdWdpbiIsInRlc3RlZCIsInNvbWUiLCJnZXRJbml0aWFsTG9jYWxlIiwiaW52YXJpYW50VmlvbGF0aW9uIiwiTW9kYWxDb250ZXh0Iiwic2hvd01vZGFsIiwiaGlkZU1vZGFsIiwiQ2VudGVyTW9kYWwiLCJNb2RhbFByb3ZpZGVyIiwiY29udGFpbmVyIiwicm9vdENvbXBvbmVudCIsIkhUTUxFbGVtZW50IiwibW9kYWxzIiwic2V0TW9kYWxzIiwia2V5IiwibW9kYWwiLCJvcHRpb25zIiwicHJldiIsIm9uQ2xvc2UiLCJwcmV2Q29uZmlnIiwiY29udGV4dFZhbHVlIiwiaXNTbWFsbCIsInVzZU1lZGlhIiwiT2JqZWN0Iiwia2V5cyIsImN1cnJlbnRLZXkiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50IiwiU2VhcmNoIiwib25TdWJtaXQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpbnRsIiwidXNlSW50bCIsImhhbmRsZU9uQ2hhbmdlIiwidGFyZ2V0IiwicGF0aG5hbWUiLCJxdWVyeSIsIm9uU2VhcmNoIiwicHVzaCIsImZvcm1hdE1lc3NhZ2UiLCJkZWZhdWx0TWVzc2FnZSIsIkdFVF9DQVRFR09SSUVTIiwiZ3FsIiwiR0VUX1BST0RVQ1RTIiwiU2lkZWJhciIsIlByb2R1Y3RzIiwiQ2FydFBvcFVwIiwic3NyIiwiQ2F0ZWdvcnlQYWdlIiwiZWxSZWYiLCJ0YXJnZXRSZWYiLCJzY3JvbGwiLCJ1c2VSZWZTY3JvbGwiLCJwZXJjZW50T2ZFbGVtZW50IiwicGVyY2VudE9mQ29udGFpbmVyIiwib2Zmc2V0UFgiLCJjYXRlZ29yeSIsIlBBR0VfVFlQRSIsInBhZ2UiLCJzaXRlUGFnZXMiLCJwYWdlX3RpdGxlIiwicGFnZV9kZXNjcmlwdGlvbiIsImJhbm5lcl90aXRsZV9pZCIsImJhbm5lcl9kZXNjcmlwdGlvbl9pZCIsImJhbm5lcl9pbWFnZV91cmwiLCJzaXRlT2ZmZXJzIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJhcG9sbG9DbGllbnQiLCJpbml0aWFsaXplQXBvbGxvIiwidmFyaWFibGVzIiwib2Zmc2V0IiwibGltaXQiLCJpbml0aWFsQXBvbGxvU3RhdGUiLCJjYWNoZSIsImV4dHJhY3QiLCJyZXZhbGlkYXRlIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsImZhbGxiYWNrIiwiT2ZmZXJPbmUiLCJPZmZlclR3byIsIk9mZmVyVGhyZWUiLCJncm9jZXJ5IiwiZ3JvY2VyeUltYWdlIiwiYmFrZXJ5IiwiYmFrZXJ5SW1hZ2UiLCJtYWtldXAiLCJtYWtldXBJbWFnZSIsImJhZ3MiLCJiYWdzSW1hZ2UiLCJjbG90aGluZyIsImNsb3RoaW5nSW1hZ2UiLCJmdXJuaXR1cmUiLCJmdXJuaXR1cmVJbWFnZSIsImJvb2siLCJib29rc0ltYWdlIiwibWVkaWNpbmUiLCJtZWRpY2luZUltYWdlIiwiY3JlYXRlSXNvbW9ycGhMaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJwcm9jZXNzIiwiY3JlZGVudGlhbHMiLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwiSW5NZW1vcnlDYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwicHJvZHVjdHMiLCJrZXlBcmdzIiwibWVyZ2UiLCJleGlzdGluZyIsImluY29taW5nIiwibmV3SXRlbXMiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsInJlc3RvcmUiLCJ1c2VBcG9sbG8iLCJzdG9yZSIsInVzZU1lbW8iLCJpc0NsaWVudCIsIndpbmRvdyIsInVzZUlzQ2xpZW50IiwiZGVmYXVsdFN0YXRlIiwic2V0U3RhdGUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsIm1vdW50ZWQiLCJtcWwiLCJhZGRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwiU2Nyb2xsRGlyZWN0aW9ucyIsInNjcm9sbFRvUGVyY2VudCIsImVsIiwiZGlyZWN0aW9uIiwicmVjdCIsImN1cnJlbnQiLCJnZXRDbGllbnRSZWN0cyIsImlzVmVydGljYWwiLCJWZXJ0aWNhbCIsInJlZlNpemUiLCJlbGVtU2Nyb2xsIiwieSIsIngiLCJzY3JvbGxTaXplIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwic2Nyb2xsSGVpZ2h0Iiwic2Nyb2xsV2lkdGgiLCJhZGRPZmZzZXQiLCJjb250YWluZXJTY3JvbGwiLCJzY3JvbGxZIiwic2Nyb2xsWCIsIm5ld1Njcm9sbCIsInNjcm9sbE9iaiIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJvbk1vdW50IiwidXNlUmVmIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQTtRQUNBLG1DQUFtQztRQUNuQztRQUNBO1FBQ0E7UUFDQTtRQUNBLGtCQUFrQixxQkFBcUI7UUFDdkM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBD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QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9bdHlwZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9bdHlwZV1cIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4uL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL1t0eXBlXS50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBBcnJvd05leHQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICB2aWV3Qm94PScwIDAgNTEyIDUxMidcbiAgICAgIHdpZHRoPScyMCdcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMjk0LjEgMjU2TDE2NyAxMjljLTkuNC05LjQtOS40LTI0LjYgMC0zMy45czI0LjYtOS4zIDM0IDBMMzQ1IDIzOWM5LjEgOS4xIDkuMyAyMy43LjcgMzMuMUwyMDEuMSA0MTdjLTQuNyA0LjctMTAuOSA3LTE3IDdzLTEyLjMtMi4zLTE3LTdjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDEyNy0xMjcuMXonXG4gICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQXJyb3dQcmV2ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzIwJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00yMTcuOSAyNTZMMzQ1IDEyOWM5LjQtOS40IDkuNC0yNC42IDAtMzMuOS05LjQtOS40LTI0LjYtOS4zLTM0IDBMMTY3IDIzOWMtOS4xIDkuMS05LjMgMjMuNy0uNyAzMy4xTDMxMC45IDQxN2M0LjcgNC43IDEwLjkgNyAxNyA3czEyLjMtMi4zIDE3LTdjOS40LTkuNCA5LjQtMjQuNiAwLTMzLjlMMjE3LjkgMjU2eidcbiAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBTZWFyY2hJY29uID0gKHtcbiAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcbiAgd2lkdGggPSAnMTdweCcsXG4gIGhlaWdodCA9ICcxOHB4JyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHZpZXdCb3g9JzAgMCAxNy4wNDggMTgnXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgaWQ9J1BhdGhfMTQyJ1xuICAgICAgICBkYXRhLW5hbWU9J1BhdGggMTQyJ1xuICAgICAgICBkPSdNMzgwLjMyMSwzODMuOTkybDMuMjI1LDMuMjE4Yy4xNjcuMTY3LjM0MS4zMjkuNS41MDZhLjg5NC44OTQsMCwxLDEtMS4yODYsMS4yMzhjLTEuMDg3LTEuMDY3LTIuMTc5LTIuMTMxLTMuMjI3LTMuMjM2YS45MjQuOTI0LDAsMCwwLTEuMzI1LS4yMjIsNy41MDksNy41MDksMCwxLDEtMy4zLTE0LjIwNyw3LjUzMiw3LjUzMiwwLDAsMSw2LDExLjkzNkMzODAuNzM2LDM4My40NjIsMzgwLjU1MiwzODMuNjg1LDM4MC4zMjEsMzgzLjk5MlptLTUuNTM3LjUyMWE1LjcwNyw1LjcwNywwLDEsMC01LjY3NS01LjcyQTUuNjc1LDUuNjc1LDAsMCwwLDM3NC43ODQsMzg0LjUxM1onXG4gICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zNjcuMjk3IC0zNzEuMjg1KSdcbiAgICAgICAgZmlsbD17Y29sb3J9XG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9iYWdzLTA5OTYwY2VmM2VhZTU3MWJlYzM1MDU4NjVhMWY1MTM1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9iYWtlcnktOTE3NzgzYzM0MjA4ODkyZmZlYWZlNTVmZWMyNDIyYzQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jvb2tzLTM2MmYwMzY1ZGE1ZDc2OWZlNzhjYmEyMGY2ZjBkNDY4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jbG90aHMtZWM4Zjk5OTUwMDIwODdmN2RjODc4NzYxZjM4MjhhOWQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Z1cm5pdHVyZS1lYzc3MjQyOGM0ZDNhOGJhNGFkMjgwMmNhYWMyYjkwYy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ3JvY2VyeS1jNTQ5N2VjMDQwNTNkNDExOGJkNzY5M2U3ODE4NDU0Yy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbWFrZXVwLTE2MzRiYzExNGUyODBlZGM2Y2EzNzVjYTg4NzA4ZWFmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tZWRpY2luZS02ZThlYmIwODcwMjBiOTRkM2FlYWU1OWM1YzUxNzQ0Zi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvb2ZmZXItMS00MzhhNDg2Y2MyMzVlNjEyMDg0ZGM3ZjJmNWRjMjJhMS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvb2ZmZXItMi1mNzQ5OWYzMWJiNWFkN2JkOGIwOTFiN2FmZDEzNTI2OC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvb2ZmZXItMy01NTFlZWM1OWJjZDEzMTgyMTdkNWVjYWVkNDZkY2QxMC5wbmdcIjsiLCJpbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5pbXBvcnQgY3NzIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2Nzcyc7XG5cbmV4cG9ydCBjb25zdCBJbmplY3RSVEwgPSBzdHlsZWQuZGl2YFxuICAkeyh7IGxhbmcgfSkgPT5cbiAgICAobGFuZyA9PT0gJ2FyJyB8fCBsYW5nID09PSAnaGUnKSAmJlxuICAgIGBcbiAgICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcbiAgICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGUoKHsgdGhlbWUgfSkgPT5cbiAgY3NzKHtcbiAgICAnKiwgKjo6YmVmb3JlLCAqOjphZnRlcic6IHtcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIH0sXG4gICAgYm9keToge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgZm9udFdlaWdodDogJ3JlZ3VsYXInLFxuICAgICAgZm9udFNpemU6ICdiYXNlJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgdHJhbnNpdGlvbjogZ2V0KHRoZW1lLCAnY3VzdG9tcy50cmFuc2l0aW9uJyksXG4gICAgICBXZWJraXRUZXh0U2l6ZUFkanVzdDogJzEwMCUnLFxuICAgICAgV2Via2l0Rm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcbiAgICAgIE1vek9zeEZvbnRTbW9vdGhpbmc6ICdncmF5c2NhbGUnLFxuICAgICAgdGV4dFNoYWRvdzogJzFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wMDQpJyxcbiAgICB9LFxuICAgIGgxOiB7XG4gICAgICBmb250RmFtaWx5OiAnaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogJzV4bCcsXG4gICAgICBmb250V2VpZ2h0OiAnc2VtaUJvbGQnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiAnM3hsJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdzZW1pQm9sZCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfSxcbiAgICBoMzoge1xuICAgICAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxuICAgICAgZm9udFNpemU6ICcyeGwnLFxuICAgICAgZm9udFdlaWdodDogJ3NlbWlCb2xkJyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9LFxuICAgIGg0OiB7XG4gICAgICBmb250RmFtaWx5OiAnaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogJ3hsJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdzZW1pQm9sZCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfSxcbiAgICBoNToge1xuICAgICAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxuICAgICAgZm9udFNpemU6ICdtZCcsXG4gICAgICBmb250V2VpZ2h0OiAnc2VtaUJvbGQnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH0sXG4gICAgaDY6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiAnYmFzZScsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfSxcbiAgICAncCxzcGFuLGJ1dHRvbixsaSxkaXYnOiB7XG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfSxcbiAgICBhOiB7XG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIH0sXG4gICAgdWw6IHtcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgfSxcbiAgICBsaToge1xuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgfSxcbiAgICBwcmU6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxuICAgICAgb3ZlcmZsb3dYOiAnYXV0bycsXG4gICAgICBjb2RlOiB7XG4gICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29kZToge1xuICAgICAgZm9udEZhbWlseTogJ21vbm9zcGFjZScsXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3JkZXJDb2xsYXBzZTogJ3NlcGFyYXRlJyxcbiAgICAgIGJvcmRlclNwYWNpbmc6IDAsXG4gICAgfSxcbiAgICB0aDoge1xuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICBib3JkZXJCb3R0b21TdHlsZTogJ3NvbGlkJyxcbiAgICB9LFxuICAgIHRkOiB7XG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQnLFxuICAgIH0sXG4gICAgaW1nOiB7XG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgJy5xdWljay12aWV3LW92ZXJsYXknOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLC41KScsXG4gICAgfSxcblxuICAgICcuYWRkLWFkZHJlc3MtbW9kYWwsLmFkZC1jb250YWN0LW1vZGFsJzoge1xuICAgICAgYm94U2hhZG93OiAnMCAxMHB4IDQwcHggcmdiYSgwLDAsMCwwLjE2KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICczcHggIWltcG9ydGFudCcsXG4gICAgICAnLmlubmVyUm5kQ29tcG9uZW50Jzoge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBwYWRkaW5nOiAnMzBweCcsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjdmOGY5JyxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgICcuc2VhcmNoLW1vZGFsLW1vYmlsZSc6IHtcbiAgICAgIHRyYW5zZm9ybTogJ25vbmUhaW1wb3J0YW50JyxcbiAgICAgIG1heFdpZHRoOiAnbm9uZSFpbXBvcnRhbnQnLFxuICAgICAgbWF4SGVpZ2h0OiAnbm9uZSFpbXBvcnRhbnQnLFxuICAgICAgdG9wOiAnMCFpbXBvcnRhbnQnLFxuICAgICAgbGVmdDogJzAhaW1wb3J0YW50JyxcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCFpbXBvcnRhbnQnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMCFpbXBvcnRhbnQnLFxuICAgIH0sXG5cbiAgICAnLnJldXNlTW9kYWxDbG9zZUJ0bic6IHtcbiAgICAgIHJpZ2h0OiAnMTBweCFpbXBvcnRhbnQnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZiFpbXBvcnRhbnQnLFxuICAgICAgY29sb3I6ICcjMjIyMjIyIWltcG9ydGFudCcsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxNXB4IWltcG9ydGFudCcsXG4gICAgICBwYWRkaW5nOiAnMCA5cHghaW1wb3J0YW50JyxcbiAgICAgIGJveFNoYWRvdzogJzAgMnB4IDhweCByZ2JhKDAsMCwwLDAuNCknLFxuICAgIH0sXG5cbiAgICAnLmltYWdlLWl0ZW0nOiB7XG4gICAgICBwYWRkaW5nOiAnMCAxNXB4JyxcbiAgICB9LFxuXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIGFuZCAobWluLXdpZHRoOiA5OTFweCknOiB7XG4gICAgICAnLmltYWdlLWl0ZW0nOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiAnMTBweCcsXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzEwcHgnLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgICAnLmltYWdlLWl0ZW0nOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiAnNy41cHgnLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6ICc3LjVweCcsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICAnLnJjLXRhYmxlLWZpeGVkLWhlYWRlciAucmMtdGFibGUtc2Nyb2xsIC5yYy10YWJsZS1oZWFkZXInOiB7XG4gICAgICBtYXJnaW5Cb3R0b206ICcwICFpbXBvcnRhbnQnLFxuICAgICAgcGFkZGluZ0JvdHRvbTogJzAgIWltcG9ydGFudCcsXG5cbiAgICAgIHRoOiB7XG4gICAgICAgIHBhZGRpbmc6ICc4cHggMjBweCcsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICAnLmRyYXdlci1jb250ZW50LXdyYXBwZXInOiB7XG4gICAgICAnKjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgJy5yYy10YWJsZS1jb250ZW50Jzoge1xuICAgICAgYm9yZGVyOiAwLFxuICAgIH0sXG5cbiAgICAnI21vZGFsLXJvb3QnOiB7XG4gICAgICB6SW5kZXg6IDk5OTk5OSxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIH0sXG5cbiAgICAnLmRyYXdlcic6IHtcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICB9LFxuICAgICcuc3JPbmx5Jzoge1xuICAgICAgYm9yZGVyOiAnMCAhaW1wb3J0YW50JyxcbiAgICAgIGNsaXA6ICdyZWN0KDFweCwgMXB4LCAxcHgsIDFweCkgIWltcG9ydGFudCcsXG4gICAgICBjbGlwUGF0aDogJ2luc2V0KDUwJSkgIWltcG9ydGFudCcsXG4gICAgICBoZWlnaHQ6ICcxcHggIWltcG9ydGFudCcsXG4gICAgICBtYXJnaW46ICctMXB4ICFpbXBvcnRhbnQnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4gIWltcG9ydGFudCcsXG4gICAgICBwYWRkaW5nOiAnMCAhaW1wb3J0YW50JyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUgIWltcG9ydGFudCcsXG4gICAgICB3aWR0aDogJzFweCAhaW1wb3J0YW50JyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAgIWltcG9ydGFudCcsXG4gICAgfSxcbiAgICAvL0B0cy1pZ25vcmVcbiAgICAuLi50aGVtZS5nbG9iYWxzLFxuICB9KVxuKTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuXG5leHBvcnQgY29uc3QgTW9iaWxlQ2Fyb3VzZWxEcm9wZG93biA9IHN0eWxlZC5kaXZgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTBweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IE9mZmVyUGFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuMjAwJywgJyNmN2Y3ZjcnKX07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTAwcHggNjBweCA2MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMTAwcHggMzBweCA2MHB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIHBhZGRpbmc6IDEwMHB4IDMwcHggNjBweDtcbiAgfVxuYDtcblxuY29uc3QgSGVhZGVyU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS4zMDAnLCAnI2Y0ZjRmNCcpfTtcbmA7XG5cbmNvbnN0IE1haW5Db250ZW50QXJlYSA9IHN0eWxlZC5tYWluYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS4yMDAnLCAnI2Y3ZjdmNycpfTtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgdHJhbnNpdGlvbjogcGFkZGluZy1yaWdodCAwLjM1cyBlYXNlLWluLW91dDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcbiAgfVxuYDtcblxuY29uc3QgU2lkZWJhclNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcbiAgd2lkdGg6IDI4MHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4MHB4KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMzBweCAzMHB4IDUwcHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkgYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XG4gICAgcGFkZGluZzogMTVweCAzMHB4IDUwcHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogMTM2N3B4KSBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgcGFkZGluZzogMTVweCAzMHB4IDUwcHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDEwMHB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5vZmZlci1zbGlkZXIge1xuICAgIHBhZGRpbmc6IDAgMCAzMHB4IDMwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IE9mZmVyU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjUwMCcsICcjZjFmMWYxJyl9O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgICAucHJldkJ1dHRvbiB7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5uZXh0QnV0dG9uIHtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDA7XG5cbiAgICAucHJldkJ1dHRvbiB7XG4gICAgICBsZWZ0OiA1cHg7XG4gICAgfVxuXG4gICAgLm5leHRCdXR0b24ge1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEhlYWRpbmcgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnhsJywgJzI0Jyl9cHg7XG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcbiAgcGFkZGluZzogMHB4IDIwcHggMjBweDtcbiAgbWFyZ2luOiA1MHB4IDEwcHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0c1JvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuMjAwJywgJyNmN2Y3ZjcnKX07XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IC03LjVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC03LjVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG5gO1xuXG5jb25zdCBQcm9kdWN0c0NvbCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDAgMCAyMCU7XG4gIG1heC13aWR0aDogMjAlO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE2NTBweCkge1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgbWF4LXdpZHRoOiAyNSU7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAgIGZsZXg6IDAgMCAzMy4zMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMlO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg5OXB4KSBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmctbGVmdDogNy41cHg7XG4gICAgcGFkZGluZy1yaWdodDogNy41cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ5MHB4KSB7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5leHBvcnQge1xuICBPZmZlclBhZ2VXcmFwcGVyLFxuICBIZWFkZXJTZWN0aW9uLFxuICBNYWluQ29udGVudEFyZWEsXG4gIFNpZGViYXJTZWN0aW9uLFxuICBDb250ZW50U2VjdGlvbixcbiAgT2ZmZXJTZWN0aW9uLFxuICBIZWFkaW5nLFxuICBQcm9kdWN0c0NvbCxcbn07XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7XG4gIGJhY2tncm91bmQsXG4gIGNvbXBvc2UsXG4gIHNwYWNlLFxuICBjb2xvcixcbiAgbGF5b3V0LFxuICBwb3NpdGlvbixcbiAgZmxleGJveCxcbiAgYm9yZGVyLFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCBjc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcblxuZXhwb3J0IGNvbnN0IEJveCA9IHN0eWxlZC5kaXY8YW55PihcbiAgY3NzKHtcbiAgICBoZWlnaHQ6IFsnYXV0bycsICdhdXRvJywgJzYwMHB4JywgJzEwMHZoJ10sXG4gIH0pLFxuICB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIC8vIGJhY2tncm91bmRDb2xvcjogI2Y3ZjdmNztcblxuICAgICdAbWVkaWEgKG1heC13aWR0aDogOTkwcHgpJzoge1xuICAgICAgcGFkZGluZzogJzgwcHggMCAyNXB4JyxcbiAgICB9LFxuICB9LFxuICBjb21wb3NlKHNwYWNlLCBjb2xvciwgbGF5b3V0LCBwb3NpdGlvbiwgZmxleGJveCwgYm9yZGVyKVxuKTtcbmV4cG9ydCBjb25zdCBJbWFnZSA9IHN0eWxlZC5kaXY8YW55PihcbiAgY3NzKHtcbiAgICBiYWNrZ3JvdW5kU2l6ZTogWydjb3ZlciddLFxuICB9KSxcbiAge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDk5MHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpJzoge1xuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnaW5oZXJpdCcsXG4gICAgfSxcbiAgfSxcbiAgYmFja2dyb3VuZFxuKTtcblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2KFxuICBjc3Moe1xuICAgIHB4OiBbJzIwcHgnLCAnMjBweCcsICcxNXB4J10sXG4gICAgcHQ6IFswXSxcbiAgfSksXG4gIHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB6SW5kZXg6IDIsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfVxuKTtcbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMihcbiAgY3NzKHtcbiAgICBmb250U2l6ZTogWzE3LCAnMnhsJywgNDVdLFxuICAgIGNvbG9yOiAndGV4dC5ib2xkJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIH0pLFxuICB7XG4gICAgbWFyZ2luQm90dG9tOiAxNSxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB9XG4pO1xuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLnAoXG4gIGNzcyh7XG4gICAgZm9udFNpemU6IFsnYmFzZScsICdtZCddLFxuICAgIGNvbG9yOiAndGV4dC5yZWd1bGFyJyxcbiAgICBtYXJnaW5Cb3R0b206IFtudWxsLCBudWxsLCA2MF0sXG4gICAgZGlzcGxheTogWydibG9jayddLFxuICAgIGZvbnRXZWlnaHQ6ICdyZWd1bGFyJyxcbiAgICBsaW5lSGVpZ2h0OiAnYm9keScsXG4gICAgdGV4dEFsaWduOiBbJ2xlZnQnLCAnbGVmdCcsICdjZW50ZXInXSxcblxuICAgICdAbWVkaWEgKG1heC13aWR0aDogOTkwcHgpJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgcGFkZGluZ1JpZ2h0OiAnMTVweCcsXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50Um93ID0gc3R5bGVkLmRpdihcbiAgY3NzKHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuXG4gICAgYnV0dG9uOiB7XG4gICAgICBwYWRkaW5nOiAwLFxuXG4gICAgICAnOmJlZm9yZSc6IHtcbiAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICB3aWR0aDogNSxcbiAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cucmVndWxhcicsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnN3B4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hXcmFwcGVyID0gc3R5bGVkLmRpdihcbiAgY3NzKHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IFNsaWRlck5hdiA9IHN0eWxlZC5idXR0b24oXG4gIGNzcyh7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBjb2xvcjogJ3RleHQuYm9sZCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIGJveFNoYWRvdzogJzAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpJyxcbiAgICBvdXRsaW5lOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAwLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICBtYXJnaW5Ub3A6ICctMTVweCcsXG4gICAgekluZGV4OiAxLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuXG4gICAgc3ZnOiB7XG4gICAgICB3aWR0aDogMTgsXG4gICAgICBtYXhIZWlnaHQ6IDE4LFxuICAgIH0sXG5cbiAgICAnJi5iYW5uZXItc2xpZGVyLXByZXYnOiB7XG4gICAgICBsZWZ0OiAyMCxcbiAgICB9LFxuXG4gICAgJyYuYmFubmVyLXNsaWRlci1uZXh0Jzoge1xuICAgICAgcmlnaHQ6IDIwLFxuICAgIH0sXG4gIH0pXG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHtcbiAgQm94LFxuICBJbWFnZSxcbiAgQ29udGVudCxcbiAgVGl0bGUsXG4gIERlc2NyaXB0aW9uLFxuICBTZWFyY2hXcmFwcGVyLFxufSBmcm9tICcuL2Jhbm5lci5zdHlsZSc7XG5cbmltcG9ydCB7IFdheXBvaW50IH0gZnJvbSAncmVhY3Qtd2F5cG9pbnQnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdjb250ZXh0cy9hcHAvYXBwLnByb3ZpZGVyJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnZmVhdHVyZXMvc2VhcmNoL3NlYXJjaCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHN0eWxlPzogYW55O1xuICBpbWFnZVVybDogc3RyaW5nO1xuICBpbnRsVGl0bGVJZDogc3RyaW5nO1xuICBpbnRsRGVzY3JpcHRpb25JZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQmFubmVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBzdHlsZSxcbiAgaW1hZ2VVcmwsXG4gIGludGxUaXRsZUlkLFxuICBpbnRsRGVzY3JpcHRpb25JZCxcbn0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBjb25zdCBzZXRTdGlja3kgPSB1c2VDYWxsYmFjaygoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfU1RJQ0tZJyB9KSwgW1xuICAgIGRpc3BhdGNoLFxuICBdKTtcbiAgY29uc3QgcmVtb3ZlU3RpY2t5ID0gdXNlQ2FsbGJhY2soKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnUkVNT1ZFX1NUSUNLWScgfSksIFtcbiAgICBkaXNwYXRjaCxcbiAgXSk7XG4gIGNvbnN0IG9uV2F5cG9pbnRQb3NpdGlvbkNoYW5nZSA9ICh7IGN1cnJlbnRQb3NpdGlvbiB9KSA9PiB7XG4gICAgaWYgKCFjdXJyZW50UG9zaXRpb24gfHwgY3VycmVudFBvc2l0aW9uID09PSAnYWJvdmUnKSB7XG4gICAgICBzZXRTdGlja3koKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEJveCBkaXNwbGF5PXtbJ25vbmUnLCAnbm9uZScsICdmbGV4J119IHN0eWxlPXtzdHlsZX0+XG4gICAgICA8SW1hZ2UgYmFja2dyb3VuZEltYWdlPXtgdXJsKCR7aW1hZ2VVcmx9KWB9IC8+XG4gICAgICA8Q29udGVudD5cbiAgICAgICAgPFRpdGxlPlxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICBpZD17aW50bFRpdGxlSWR9XG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT1cIlNldCBZb3VyIFRpdGxlIFRocm91Z2ggTGFuZ3VhZ2UgRmlsZVwiXG4gICAgICAgICAgICB2YWx1ZXM9e3sgbWludXRlOiA5MCB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVGl0bGU+XG4gICAgICAgIDxEZXNjcmlwdGlvbj5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgaWQ9e2ludGxEZXNjcmlwdGlvbklkfVxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9XCJTZXQgWW91ciBEZXNjcmlwdGlvbiBUaHJvdWdoIExhbmd1YWdlIEZpbGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRGVzY3JpcHRpb24+XG4gICAgICAgIDxTZWFyY2hXcmFwcGVyPlxuICAgICAgICAgIDxTZWFyY2hcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhbm5lci1zZWFyY2hcIlxuICAgICAgICAgICAgc2hhZG93PVwiMCAyMXB4IDM2cHggcmdiYSgwLDAsMCwwLjA1KVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZWFyY2hXcmFwcGVyPlxuICAgICAgICA8V2F5cG9pbnRcbiAgICAgICAgICBvbkVudGVyPXtyZW1vdmVTdGlja3l9XG4gICAgICAgICAgb25MZWF2ZT17c2V0U3RpY2t5fVxuICAgICAgICAgIG9uUG9zaXRpb25DaGFuZ2U9e29uV2F5cG9pbnRQb3NpdGlvbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGVudD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7XG4gIEJveCxcbiAgQ29udGVudCxcbiAgQ29udGVudFJvdyxcbiAgRGVzY3JpcHRpb24sXG4gIFNlYXJjaFdyYXBwZXIsXG59IGZyb20gJy4vYmFubmVyLnN0eWxlJztcblxuaW1wb3J0IHsgV2F5cG9pbnQgfSBmcm9tICdyZWFjdC13YXlwb2ludCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdjb21wb25lbnRzL2J1dHRvbi9idXR0b24nO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdjb250ZXh0cy9hcHAvYXBwLnByb3ZpZGVyJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnZmVhdHVyZXMvc2VhcmNoL3NlYXJjaCc7XG5jb25zdCBTcHJpbmdNb2RhbCA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgnY29tcG9uZW50cy9zcHJpbmctbW9kYWwvc3ByaW5nLW1vZGFsJylcbik7XG5jb25zdCBDYXRlZ29yeUljb25OYXYgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnY29tcG9uZW50cy90eXBlLW5hdi90eXBlLW5hdicpKTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaW50bFRpdGxlSWQ6IHN0cmluZztcbiAgdHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IE1vYmlsZUJhbm5lcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdHlwZSwgaW50bFRpdGxlSWQgfSkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIGNvbnN0IHNldFN0aWNreSA9IHVzZUNhbGxiYWNrKCgpID0+IGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9TVElDS1knIH0pLCBbXG4gICAgZGlzcGF0Y2gsXG4gIF0pO1xuICBjb25zdCByZW1vdmVTdGlja3kgPSB1c2VDYWxsYmFjaygoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdSRU1PVkVfU1RJQ0tZJyB9KSwgW1xuICAgIGRpc3BhdGNoLFxuICBdKTtcbiAgY29uc3Qgb25XYXlwb2ludFBvc2l0aW9uQ2hhbmdlID0gKHsgY3VycmVudFBvc2l0aW9uIH0pID0+IHtcbiAgICBpZiAoIWN1cnJlbnRQb3NpdGlvbiB8fCBjdXJyZW50UG9zaXRpb24gPT09ICdhYm92ZScpIHtcbiAgICAgIHNldFN0aWNreSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGRpc3BsYXk9e1snZmxleCcsICdmbGV4JywgJ25vbmUnXX0+XG4gICAgICA8Q29udGVudD5cbiAgICAgICAgPENvbnRlbnRSb3c+XG4gICAgICAgICAgPERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgaWQ9e2ludGxUaXRsZUlkfVxuICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT1cIlNldCBZb3VyIFRpdGxlIFRocm91Z2ggTGFuZ3VhZ2UgRmlsZVwiXG4gICAgICAgICAgICAgIHZhbHVlcz17eyBtaW51dGU6IDkwIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRGVzY3JpcHRpb24+XG5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfVxuICAgICAgICAgICAgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3R5cGV9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ29udGVudFJvdz5cblxuICAgICAgICA8U2VhcmNoV3JhcHBlcj5cbiAgICAgICAgICA8U2VhcmNoIG1pbmltYWw9e3RydWV9IC8+XG4gICAgICAgIDwvU2VhcmNoV3JhcHBlcj5cbiAgICAgICAgPFdheXBvaW50XG4gICAgICAgICAgb25FbnRlcj17cmVtb3ZlU3RpY2t5fVxuICAgICAgICAgIG9uTGVhdmU9e3NldFN0aWNreX1cbiAgICAgICAgICBvblBvc2l0aW9uQ2hhbmdlPXtvbldheXBvaW50UG9zaXRpb25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxTcHJpbmdNb2RhbCBpc09wZW49e2lzT3Blbn0gb25SZXF1ZXN0Q2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfT5cbiAgICAgICAgICA8Q2F0ZWdvcnlJY29uTmF2IC8+XG4gICAgICAgIDwvU3ByaW5nTW9kYWw+XG4gICAgICA8L0NvbnRlbnQ+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzLCBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgc3lzdGVtQ3NzIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2Nzcyc7XG5pbXBvcnQgeyBjb21wb3NlLCB2YXJpYW50LCBib3JkZXIsIHNwYWNlLCBsYXlvdXQgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b24oXG4gIChwcm9wcykgPT5cbiAgICBzeXN0ZW1Dc3Moe1xuICAgICAgcHg6ICcxNXB4JyxcbiAgICAgIHB5OiAwLFxuICAgICAgZm9udFNpemU6IFsnYmFzZSddLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgY3Vyc29yOiBwcm9wcy5kaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogcHJvcHMuZGlzYWJsZWQgPyAndGV4dC5saWdodCcgOiAnd2hpdGUnLFxuICAgICAgYmc6IHByb3BzLmRpc2FibGVkID8gJ2dyYXkuNTAwJyA6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnYmFzZScsXG5cbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogcHJvcHMuZGlzYWJsZWQgPyAndGV4dC5saWdodCcgOiAnd2hpdGUnLFxuICAgICAgICBiZzogcHJvcHMuZGlzYWJsZWQgPyAnZ3JheS41MDAnIDogJ3ByaW1hcnkuaG92ZXInLFxuICAgICAgfSxcbiAgICB9KSxcbiAge1xuICAgIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICczOHB4JyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBib3JkZXI6IDAsXG5cbiAgICAnJjpmb2N1cyc6IHtcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICB9LFxuICB9LFxuICB2YXJpYW50KHtcbiAgICB2YXJpYW50czoge1xuICAgICAgb3V0bGluZWQ6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICBiZzogJ3doaXRlJyxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdncmF5LjUwMCcsXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgICAgYmc6ICd3aGl0ZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcHJpbWFyeToge1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYmc6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBiZzogJ3ByaW1hcnkuaG92ZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgIGJnOiAnd2hpdGUnLFxuICAgICAgICBib3JkZXI6ICcycHggc29saWQnLFxuICAgICAgICBib3JkZXJDb2xvcjogJ2dyYXkuNTAwJyxcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYmc6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIGNvbG9yOiAncHJpbWFyeS5ob3ZlcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgc2VsZWN0OiB7XG4gICAgICAgIHdpZHRoOiAyNixcbiAgICAgICAgaGVpZ2h0OiAyNixcbiAgICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICd0ZXh0LnJlZ3VsYXInLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDEzLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBjb2xvcjogJ3RleHQuYm9sZCcsXG4gICAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAnJi5zZWxlY3RlZCc6IHtcbiAgICAgICAgICBiZzogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICB9LFxuICAgICAgICAnJjpob3Zlcjpub3QoLnNlbGVjdGVkKSc6IHtcbiAgICAgICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgdmFyaWFudCh7XG4gICAgcHJvcDogJ3NpemUnLFxuICAgIHZhcmlhbnRzOiB7XG4gICAgICBiaWc6IHtcbiAgICAgICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgICAgIHB4OiAzMCxcbiAgICAgIH0sXG4gICAgICBzbWFsbDoge1xuICAgICAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgY29tcG9zZShib3JkZXIsIHNwYWNlLCBsYXlvdXQpXG4pO1xuY29uc3Qgcm90YXRlID0ga2V5ZnJhbWVzYFxuICBmcm9tIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XG4gIHRvIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cbmA7XG5cbmNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2KFxuICAocHJvcHMpID0+XG4gICAgc3lzdGVtQ3NzKHtcbiAgICAgIHdpZHRoOiAxOCxcbiAgICAgIGhlaWdodDogMTgsXG4gICAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgICAgIGJvcmRlcjogJzNweCBzb2xpZCB3aGl0ZScsXG4gICAgICBib3JkZXJUb3A6IGAzcHggc29saWQgJHtwcm9wcy5jb2xvciA/IHByb3BzLmNvbG9yIDogJ3ByaW1hcnkucmVndWxhcid9YCxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICB0cmFuc2l0aW9uUHJvcGVydHk6ICd0cmFuc2Zvcm0nLFxuICAgIH0pLFxuICBjc3NgXG4gICAgYW5pbWF0aW9uOiAke3JvdGF0ZX0gMS4ycyBpbmZpbml0ZSBsaW5lYXI7XG4gIGBcbik7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGxvYWRpbmc/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHR5cGU6ICdzdWJtaXQnIHwgJ2J1dHRvbic7XG4gIFtrZXk6IHN0cmluZ106IHVua25vd247XG59O1xuZXhwb3J0IHR5cGUgUmVmID0gSFRNTEJ1dHRvbkVsZW1lbnQ7XG5leHBvcnQgY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIFByb3BzPihcbiAgKHsgY2hpbGRyZW4sIGRpc2FibGVkLCBsb2FkaW5nID0gZmFsc2UsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICAgIDxTdHlsZWRCdXR0b24gcmVmPXtyZWZ9IHsuLi5wcm9wc30gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxuICAgIDwvU3R5bGVkQnV0dG9uPlxuICApXG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcbmltcG9ydCB7IEFycm93TmV4dCB9IGZyb20gJ2Fzc2V0cy9pY29ucy9BcnJvd05leHQnO1xuaW1wb3J0IHsgQXJyb3dQcmV2IH0gZnJvbSAnYXNzZXRzL2ljb25zL0Fycm93UHJldic7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICdjb250ZXh0cy9sYW5ndWFnZS9sYW5ndWFnZS5wcm92aWRlcic7XG5cbmNvbnN0IEJ1dHRvblByZXYgPSBzdHlsZWQoJ2J1dHRvbicpYFxuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDlFN0YnKX07XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6ICR7dGhlbWVHZXQoJ3NoYWRvd3MuYmFzZScsICcwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KScpfTtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICB6LWluZGV4OiA5OTtcbmA7XG5cbmNvbnN0IEJ1dHRvbk5leHQgPSBzdHlsZWQoJ2J1dHRvbicpYFxuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogJHt0aGVtZUdldCgnc2hhZG93cy5iYXNlJywgJzAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpJyl9O1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICB6LWluZGV4OiA5OTtcbmA7XG5cbmNvbnN0IEJ1dHRvbkdyb3VwV3JhcHBlciA9IHN0eWxlZCgnZGl2JylgYDtcblxuY29uc3QgUHJldkJ1dHRvbiA9ICh7IG9uQ2xpY2ssIGNoaWxkcmVuIH06IGFueSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCdXR0b25QcmV2XG4gICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9uQ2xpY2soKTtcbiAgICAgIH19XG4gICAgICBjbGFzc05hbWU9XCJwcmV2QnV0dG9uXCJcbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9CdXR0b25QcmV2PlxuICApO1xufTtcbmNvbnN0IE5leHRCdXR0b24gPSAoeyBvbkNsaWNrLCBjaGlsZHJlbiB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uTmV4dFxuICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvbkNsaWNrKCk7XG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPVwibmV4dEJ1dHRvblwiXG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQnV0dG9uTmV4dD5cbiAgKTtcbn07XG5cbmNvbnN0IEJ1dHRvbkdyb3VwID0gKHsgbmV4dCwgcHJldmlvdXMgfTogYW55KSA9PiB7XG4gIGNvbnN0IHsgaXNSdGwgfTogYW55ID0gdXNlTG9jYWxlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uR3JvdXBXcmFwcGVyPlxuICAgICAge2lzUnRsID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxOZXh0QnV0dG9uIG9uQ2xpY2s9eygpID0+IG5leHQoKX0gY2xhc3NOYW1lPVwicnRsXCI+XG4gICAgICAgICAgICA8QXJyb3dQcmV2IC8+XG4gICAgICAgICAgPC9OZXh0QnV0dG9uPlxuICAgICAgICAgIDxQcmV2QnV0dG9uIG9uQ2xpY2s9eygpID0+IHByZXZpb3VzKCl9PlxuICAgICAgICAgICAgPEFycm93TmV4dCAvPlxuICAgICAgICAgIDwvUHJldkJ1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxQcmV2QnV0dG9uIG9uQ2xpY2s9eygpID0+IHByZXZpb3VzKCl9PlxuICAgICAgICAgICAgPEFycm93UHJldiAvPlxuICAgICAgICAgIDwvUHJldkJ1dHRvbj5cbiAgICAgICAgICA8TmV4dEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXh0KCl9PlxuICAgICAgICAgICAgPEFycm93TmV4dCAvPlxuICAgICAgICAgIDwvTmV4dEJ1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICB7LyogaWYgcHJvcCBpc1J0bCB0cnVlIHN3YXAgcHJldiBhbmQgbmV4dCBidG4gKi99XG4gICAgPC9CdXR0b25Hcm91cFdyYXBwZXI+XG4gICk7XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBkYXRhOiBhbnlbXSB8IHVuZGVmaW5lZDtcbiAgZGV2aWNlVHlwZToge1xuICAgIG1vYmlsZTogYm9vbGVhbjtcbiAgICB0YWJsZXQ6IGJvb2xlYW47XG4gICAgZGVza3RvcDogYm9vbGVhbjtcbiAgfTtcbiAgcHJvcHM/OiBhbnk7XG4gIGNvbXBvbmVudD86IGFueTtcbiAgYXV0b1BsYXk/OiBib29sZWFuO1xuICBpbmZpbml0ZT86IGJvb2xlYW47XG4gIGlzUnRsPzogYm9vbGVhbjtcbiAgY3VzdG9tTGVmdEFycm93PzogUmVhY3QuUmVhY3RFbGVtZW50O1xuICBjdXN0b21SaWdodEFycm93PzogUmVhY3QuUmVhY3RFbGVtZW50O1xuICBpdGVtQ2xhc3M/OiBzdHJpbmc7XG59O1xuY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgZGVza3RvcDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcbiAgICBpdGVtczogMyxcbiAgfSxcbiAgdGFibGV0OiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNDY0IH0sXG4gICAgaXRlbXM6IDIsXG4gIH0sXG4gIG1vYmlsZToge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0NjQsIG1pbjogMCB9LFxuICAgIGl0ZW1zOiAxLFxuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbUNhcm91c2VsKHtcbiAgZGF0YSxcbiAgZGV2aWNlVHlwZTogeyBtb2JpbGUsIHRhYmxldCwgZGVza3RvcCB9LFxuICBjb21wb25lbnQsXG4gIGF1dG9QbGF5ID0gZmFsc2UsXG4gIGluZmluaXRlID0gdHJ1ZSxcbiAgY3VzdG9tTGVmdEFycm93LFxuICBjdXN0b21SaWdodEFycm93LFxuICBpdGVtQ2xhc3MsXG4gIGlzUnRsLFxuICAuLi5wcm9wc1xufTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRpcj1cImx0clwiPlxuICAgICAgPENhcm91c2VsXG4gICAgICAgIGFycm93cz17ZmFsc2V9XG4gICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgIHNob3dEb3RzPXtmYWxzZX1cbiAgICAgICAgc2xpZGVzVG9TbGlkZT17MX1cbiAgICAgICAgaW5maW5pdGU9e2luZmluaXRlfVxuICAgICAgICBjb250YWluZXJDbGFzcz1cImNvbnRhaW5lci13aXRoLWRvdHNcIlxuICAgICAgICBpdGVtQ2xhc3M9e2l0ZW1DbGFzc31cbiAgICAgICAgYXV0b1BsYXk9e2F1dG9QbGF5fVxuICAgICAgICBhdXRvUGxheVNwZWVkPXszMDAwfVxuICAgICAgICByZW5kZXJCdXR0b25Hcm91cE91dHNpZGU9e3RydWV9XG4gICAgICAgIGFkZGl0aW9uYWxUcmFuc2Zyb209ezB9XG4gICAgICAgIGN1c3RvbUJ1dHRvbkdyb3VwPXs8QnV0dG9uR3JvdXAgLz59XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLy8gdXNlIGRpciBsdHIgd2hlbiBydGwgdHJ1ZVxuICAgICAgPlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmIChjb21wb25lbnQpIHJldHVybiBjb21wb25lbnQoaXRlbSk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzAgMTVweCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmxpbmt9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ1NyY31cbiAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5hbHR9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGNzcyBmcm9tICdAc3R5bGVkLXN5c3RlbS9jc3MnO1xuaW1wb3J0IHsgc2hhZG93IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5leHBvcnQgY29uc3QgU3R5bGVkRm9ybSA9IHN0eWxlZC5mb3JtPGFueT4oXG4gIChwcm9wcykgPT5cbiAgICBjc3Moe1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICdiYXNlJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHdpZHRoOiBwcm9wcy5taW5pbWFsID8gJzEwMCUnIDogNzAwLFxuICAgICAgY29sb3I6ICd0ZXh0LnJlZ3VsYXInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5taW5pbWFsID8gJ2dyYXkuMjAwJyA6ICd3aGl0ZScsXG4gICAgICBib3JkZXJXaWR0aDogcHJvcHMubWluaW1hbCA/ICcxcHgnIDogJzAnLFxuICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogcHJvcHMubWluaW1hbCA/IGBncmF5LjUwMGAgOiAnd2hpdGUnLFxuXG4gICAgICBpbnB1dDoge1xuICAgICAgICBwbDogcHJvcHMubWluaW1hbCA/IDAgOiAyMCxcbiAgICAgIH0sXG4gICAgfSksXG4gIHNoYWRvd1xuKTtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkLmlucHV0KFxuICBjc3Moe1xuICAgIGZsZXhHcm93OiAxLFxuICAgIGZvbnRTaXplOiAnYmFzZScsXG4gICAgcHI6IDIwLFxuICAgIGhlaWdodDogNDgsXG4gICAgY29sb3I6ICd0ZXh0LnJlZ3VsYXInLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxuICAgIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgfSksXG4gIHtcbiAgICBib3JkZXI6IDAsXG4gICAgJyY6Zm9jdXMnOiB7XG4gICAgICBvdXRsaW5lOiAwLFxuICAgIH0sXG5cbiAgICAnJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgJjo6LW1vei1wbGFjZWhvbGRlciwgJjo6LW1vei1wbGFjZWhvbGRlciwgJjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzoge1xuICAgICAgZm9udFNpemU6ICdiYXNlJyxcbiAgICAgIGNvbG9yOiAndGV4dC5yZWd1bGFyJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIH0sXG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDYXRlZ29yeU5hbWUgPSBzdHlsZWQuc3BhbihcbiAgY3NzKHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGxpbmVIZWlnaHQ6ICczOHB4JyxcbiAgICBweDogMTUsXG4gICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXkuMjAwJyxcbiAgICBib3JkZXJSYWRpdXM6ICdiYXNlJyxcbiAgfSksXG4gIHtcbiAgICBtYXJnaW46ICc1cHgnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFNlYXJjaEJ1dHRvbiA9IHN0eWxlZC5idXR0b24oXG4gIGNzcyh7XG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBmb250U2l6ZTogJ2Jhc2UnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgfSksXG4gIHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgaGVpZ2h0OiA0OCxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBib3JkZXI6IDAsXG4gICAgb3V0bGluZTogMCxcbiAgICBwYWRkaW5nTGVmdDogMzAsXG4gICAgcGFkZGluZ1JpZ2h0OiAzMCxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICB9XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFN0eWxlZEZvcm0sXG4gIFN0eWxlZElucHV0LFxuICBTdHlsZWRDYXRlZ29yeU5hbWUsXG4gIFN0eWxlZFNlYXJjaEJ1dHRvbixcbn0gZnJvbSAnLi9zZWFyY2gtYm94LnN0eWxlJztcbmltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tICdhc3NldHMvaWNvbnMvU2VhcmNoSWNvbic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uRW50ZXI6IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4gdm9pZDtcbiAgb25DaGFuZ2U6IFJlYWN0LkNoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgdmFsdWU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBtaW5pbWFsPzogYm9vbGVhbjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBzaG93QnV0dG9uVGV4dD86IGJvb2xlYW47XG4gIHNoYWRvdz86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbn1cblxuZXhwb3J0IGNvbnN0IFNlYXJjaEJveDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgb25FbnRlcixcbiAgb25DaGFuZ2UsXG4gIHZhbHVlLFxuICBuYW1lLFxuICBtaW5pbWFsLFxuICBjYXRlZ29yeVR5cGUsXG4gIGJ1dHRvblRleHQsXG4gIGNsYXNzTmFtZSxcbiAgc2hvd0J1dHRvblRleHQgPSB0cnVlLFxuICBzaGFkb3csXG4gIC4uLnJlc3Rcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkRm9ybVxuICAgICAgb25TdWJtaXQ9e29uRW50ZXJ9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGJveFNoYWRvdz17c2hhZG93fVxuICAgICAgbWluaW1hbD17bWluaW1hbH1cbiAgICA+XG4gICAgICB7bWluaW1hbCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8U2VhcmNoSWNvblxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTYsIG1hcmdpblJpZ2h0OiAxNiwgY29sb3I6ICcjMjEyMTIxJyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFN0eWxlZElucHV0XG4gICAgICAgICAgICB0eXBlPSdzZWFyY2gnXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxTdHlsZWRDYXRlZ29yeU5hbWU+e2NhdGVnb3J5VHlwZX08L1N0eWxlZENhdGVnb3J5TmFtZT5cbiAgICAgICAgICA8U3R5bGVkSW5wdXRcbiAgICAgICAgICAgIHR5cGU9J3NlYXJjaCdcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTdHlsZWRTZWFyY2hCdXR0b24+XG4gICAgICAgICAgICA8U2VhcmNoSWNvbiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0gLz5cbiAgICAgICAgICAgIHtzaG93QnV0dG9uVGV4dCAmJiBidXR0b25UZXh0fVxuICAgICAgICAgIDwvU3R5bGVkU2VhcmNoQnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9TdHlsZWRGb3JtPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG50eXBlIFNlb1Byb3BzID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjYW5vbmljYWw/OiBzdHJpbmc7XG4gIGNzcz86IHN0cmluZztcbiAganM/OiBzdHJpbmc7XG4gIGltYWdlPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IFNFTzogUmVhY3QuRkM8U2VvUHJvcHM+ID0gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBjYW5vbmljYWwsXG4gIGNzcyxcbiAganMsXG4gIGltYWdlLFxufSkgPT4gKFxuICA8SGVhZD5cbiAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgPG1ldGFcbiAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1heGltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxuICAgIC8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICA8bWV0YVxuICAgICAgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgY29udGVudD17ZGVzY3JpcHRpb259XG4gICAgLz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJQcm9wZXIgTm91blwiIC8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgJHtjYW5vbmljYWx9YH0gLz5cbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBwcm9wZXJub3VuY29cIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQHByb3Blcm5vdW5jb1wiIC8+XG4gICAge2NzcyAmJiA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YCR7Y3NzfWB9IC8+fVxuICAgIHtpbWFnZSA/IChcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtgJHtpbWFnZX1gfSAvPlxuICAgICkgOiAoXG4gICAgICA8bWV0YVxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcbiAgICAgICAgY29udGVudD1cImh0dHBzOi8vd3d3LnByb3Blcm5vdW4uY28vc3RhdGljL2ltYWdlcy9wcm9wZXItbm91bi1zb2NpYWwucG5nXCJcbiAgICAgIC8+XG4gICAgKX1cbiAgICB7aW1hZ2UgJiYgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtgJHtpbWFnZX1gfSAvPn1cbiAgICB7Y2Fub25pY2FsICYmIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Ake2Nhbm9uaWNhbH1gfSAvPn1cbiAgICB7anMgJiYgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPXtgJHtqc31gfT48L3NjcmlwdD59XG4gIDwvSGVhZD5cbik7XG4iLCJpbXBvcnQgeyB1c2VDcmVhdGVDb250ZXh0IH0gZnJvbSAnLi4vY3JlYXRlLWNvbnRleHQnO1xuaW1wb3J0IHsgYXBwUmVkdWNlciwgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9hcHAucmVkdWNlcic7XG5cbmNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2gsIHByb3ZpZGVyXSA9IHVzZUNyZWF0ZUNvbnRleHQoYXBwUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbmV4cG9ydCBjb25zdCB1c2VBcHBTdGF0ZSA9IHN0YXRlO1xuZXhwb3J0IGNvbnN0IHVzZUFwcERpc3BhdGNoID0gZGlzcGF0Y2g7XG5leHBvcnQgY29uc3QgQXBwUHJvdmlkZXIgPSBwcm92aWRlcjtcbiIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNlYXJjaFRlcm06ICcnLFxuICBpc1N0aWNreTogZmFsc2UsXG4gIGlzU2lkZWJhclN0aWNreTogdHJ1ZSxcbiAgaXNEcmF3ZXJPcGVuOiBmYWxzZSxcbiAgaXNNb2RhbE9wZW46IGZhbHNlLFxufTtcblxudHlwZSBBY3Rpb25UeXBlID1cbiAgfCB7IHR5cGU6ICdTRVRfU0VBUkNIX1RFUk0nOyBwYXlsb2FkOiBzdHJpbmcgfVxuICB8IHsgdHlwZTogJ1NFVF9TVElDS1knIH1cbiAgfCB7IHR5cGU6ICdSRU1PVkVfU1RJQ0tZJyB9XG4gIHwgeyB0eXBlOiAnU0VUX1NJREVCQVJfU1RJQ0tZJyB9XG4gIHwgeyB0eXBlOiAnUkVNT1ZFX1NJREVCQVJfU1RJQ0tZJyB9XG4gIHwgeyB0eXBlOiAnVE9HR0xFX0RSQVdFUicgfVxuICB8IHsgdHlwZTogJ1RPR0dMRV9NT0RBTCcgfTtcblxudHlwZSBTdGF0ZVR5cGUgPSB0eXBlb2YgaW5pdGlhbFN0YXRlO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwUmVkdWNlcihzdGF0ZTogU3RhdGVUeXBlLCBhY3Rpb246IEFjdGlvblR5cGUpOiBTdGF0ZVR5cGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0VUX1NFQVJDSF9URVJNJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWFyY2hUZXJtOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSAnU0VUX1NUSUNLWSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNTdGlja3k6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgJ1JFTU9WRV9TVElDS1knOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzU3RpY2t5OiBmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSAnU0VUX1NJREVCQVJfU1RJQ0tZJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1NpZGViYXJTdGlja3k6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgJ1JFTU9WRV9TSURFQkFSX1NUSUNLWSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNTaWRlYmFyU3RpY2t5OiBmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSAnVE9HR0xFX0RSQVdFUic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNEcmF3ZXJPcGVuOiAhc3RhdGUuaXNEcmF3ZXJPcGVuLFxuICAgICAgfTtcbiAgICBjYXNlICdUT0dHTEVfTU9EQUwnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTW9kYWxPcGVuOiAhc3RhdGUuaXNNb2RhbE9wZW4sXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgYWN0aW9uIHR5cGUgYXQgQXBwIFJlZHVjZXJgKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlQ29udGV4dDxTdGF0ZVR5cGUsIEFjdGlvblR5cGU+KFxuICByZWR1Y2VyOiBSZWFjdC5SZWR1Y2VyPFN0YXRlVHlwZSwgQWN0aW9uVHlwZT4sXG4gIGluaXRpYWxTdGF0ZTogU3RhdGVUeXBlXG4pIHtcbiAgY29uc3QgZGVmYXVsdERpc3BhdGNoOiBSZWFjdC5EaXNwYXRjaDxBY3Rpb25UeXBlPiA9ICgpID0+IGluaXRpYWxTdGF0ZTtcbiAgY29uc3Qgc3RhdGVDdHggPSBjcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IGRpc3BhdGNoQ3R4ID0gY3JlYXRlQ29udGV4dChkZWZhdWx0RGlzcGF0Y2gpO1xuXG4gIGZ1bmN0aW9uIHVzZVN0YXRlQ3R4PEsgZXh0ZW5kcyBrZXlvZiBTdGF0ZVR5cGU+KHByb3BlcnR5OiBLKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB1c2VDb250ZXh0KHN0YXRlQ3R4KTtcbiAgICByZXR1cm4gc3RhdGVbcHJvcGVydHldOyAvLyBvbmx5IG9uZSBkZXB0aCBzZWxlY3RvciBmb3IgY29tcGFyaXNvblxuICB9XG5cbiAgZnVuY3Rpb24gdXNlRGlzcGF0Y2hDdHgoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoZGlzcGF0Y2hDdHgpO1xuICB9XG5cbiAgZnVuY3Rpb24gUHJvdmlkZXIocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPHt9Pikge1xuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcjxcbiAgICAgIFJlYWN0LlJlZHVjZXI8U3RhdGVUeXBlLCBBY3Rpb25UeXBlPlxuICAgID4ocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpc3BhdGNoQ3R4LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XG4gICAgICAgIDxzdGF0ZUN0eC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9Pntwcm9wcy5jaGlsZHJlbn08L3N0YXRlQ3R4LlByb3ZpZGVyPlxuICAgICAgPC9kaXNwYXRjaEN0eC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG4gIHJldHVybiBbdXNlU3RhdGVDdHgsIHVzZURpc3BhdGNoQ3R4LCBQcm92aWRlcl0gYXMgY29uc3Q7XG59XG5cbi8vIGNvbnN0IFt1c2VUZXh0U3RhdGUsIHVzZVRleHREaXNwYXRjaCwgVGV4dFByb3ZpZGVyXSA9IHVzZUNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlLCByZWR1Y2VyKTtcbi8vIGV4cG9ydCBjb25zdCBUZXh0Q29udGV4dCA9IGN0eDtcbi8vIGV4cG9ydCBmdW5jdGlvbiBBcHAoKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPFRleHRQcm92aWRlcj5cbi8vICAgICAgIDxDb21wb25lbnQgLz5cbi8vICAgICA8L1RleHRQcm92aWRlcj5cbi8vICAgKVxuLy8gfVxuLy8gZXhwb3J0IGZ1bmN0aW9uIENvbXBvbmVudCgpIHtcbi8vICAgY29uc3Qgc3RhdGUgPSB1c2VUZXh0U3RhdGUoJ3N0YXRlJylcbi8vICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VUZXh0RGlzcGF0Y2goKVxuLy8gY29uc3QgaW5jcmVtZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnaW5jcmVtZW50JyB9KSwgW2Rpc3BhdGNoXSk7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdj5cbi8vICAgICAgIHtzdGF0ZX1cbi8vICAgICAgIDxidXR0b24gb25DbGljaz17aW5jcmVtZW50fT5Ub2dnbGU8L2J1dHRvbj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKVxuLy8gfVxuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGUgPSAnZW4nIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgbG9jYWxlcyA9IFsnZW4nLCAnYXInLCAnZXMnLCAnZGUnLCAnemgnLCAnaGUnXSBhcyBjb25zdDtcbmV4cG9ydCBjb25zdCBydGxMb2NhbGVzID0gWydhcicsICdoZSddIGFzIGNvbnN0O1xuXG4vLyBuZWVkIHRvIGN1c3RvbWl6ZSBsYXRlclxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlTmFtZXMgPSB7XG4gIGVuOiAnRW5nbGlzaCcsXG4gIGZyOiAnZnJhbsOnYWlzJyxcbiAgcGw6ICdwb2xza2knLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEludGxQcm92aWRlciB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHsgSW5qZWN0UlRMIH0gZnJvbSAnYXNzZXRzL3N0eWxlcy9nbG9iYWwuc3R5bGUnO1xuaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgaXNSVEwsIGlzTG9jYWxlIH0gZnJvbSAnLi9sYW5ndWFnZS51dGlscyc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0TWFuYWdlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSVExQbHVnaW4gZnJvbSAnc3R5bGlzLXBsdWdpbi1ydGwnO1xuXG5jb25zdCBMYW5ndWFnZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9IGFzIGFueSk7XG5cbmV4cG9ydCBjb25zdCBMYW5ndWFnZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4sIG1lc3NhZ2VzIH0pID0+IHtcbiAgY29uc3QgW2xvY2FsZSwgc2V0TG9jYWxlXSA9IFJlYWN0LnVzZVN0YXRlKCdlbicpO1xuICBjb25zdCBjaGFuZ2VMYW5ndWFnZSA9IChuZXdMb2NhbGUpOiB2b2lkID0+IHtcbiAgICBzZXRMb2NhbGUobmV3TG9jYWxlKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IG5ld0xvY2FsZTtcbiAgICBDb29raWUuc2V0KCdsb2NhbGUnLCBuZXdMb2NhbGUpO1xuICB9O1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvY2FsU2V0dGluZyA9IENvb2tpZS5nZXQoJ2xvY2FsZScpO1xuICAgIGlmIChsb2NhbFNldHRpbmcgJiYgaXNMb2NhbGUobG9jYWxTZXR0aW5nKSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSBsb2NhbFNldHRpbmc7XG4gICAgICBzZXRMb2NhbGUobG9jYWxTZXR0aW5nKTtcbiAgICB9XG4gIH0sIFtsb2NhbGVdKTtcbiAgbGV0IGlzUnRsID0gaXNSVEwobG9jYWxlKTtcblxuICByZXR1cm4gKFxuICAgIDxMYW5ndWFnZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbG9jYWxlLCBjaGFuZ2VMYW5ndWFnZSwgaXNSdGwgfX0+XG4gICAgICA8SW50bFByb3ZpZGVyIGxvY2FsZT17bG9jYWxlfSBtZXNzYWdlcz17bWVzc2FnZXNbbG9jYWxlXX0+XG4gICAgICAgIDxJbmplY3RSVEwgbGFuZz17bG9jYWxlfSBkaXI9e2lzUnRsID8gJ3J0bCcgOiAnbHRyJ30+XG4gICAgICAgICAgPFN0eWxlU2hlZXRNYW5hZ2VyIHN0eWxpc1BsdWdpbnM9e2lzUnRsID8gW1JUTFBsdWdpbl0gOiBbXX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9TdHlsZVNoZWV0TWFuYWdlcj5cbiAgICAgICAgPC9JbmplY3RSVEw+XG4gICAgICA8L0ludGxQcm92aWRlcj5cbiAgICA8L0xhbmd1YWdlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VMb2NhbGUgPSAoKSA9PiBSZWFjdC51c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7XG4iLCJpbXBvcnQgeyBsb2NhbGVzLCBydGxMb2NhbGVzLCBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnLi9sYW5ndWFnZS5jb25maWcnO1xuaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuXG5leHBvcnQgdHlwZSBMb2NhbGUgPSB0eXBlb2YgbG9jYWxlc1tudW1iZXJdO1xuXG5leHBvcnQgdHlwZSBTdHJpbmdzID0ge1xuICBba2V5IGluIExvY2FsZV06IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbGUodGVzdGVkOiBzdHJpbmcpOiB0ZXN0ZWQgaXMgTG9jYWxlIHtcbiAgcmV0dXJuIGxvY2FsZXMuc29tZSgobG9jYWxlKSA9PiBsb2NhbGUgPT09IHRlc3RlZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JUTCh0ZXN0ZWQ6IHN0cmluZyk6IHRlc3RlZCBpcyBMb2NhbGUge1xuICByZXR1cm4gcnRsTG9jYWxlcy5zb21lKChsb2NhbGUpID0+IGxvY2FsZSA9PT0gdGVzdGVkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxMb2NhbGUoKTogTG9jYWxlIHtcbiAgLy8gcHJlZmVyZW5jZSBmcm9tIHRoZSBwcmV2aW91cyBzZXNzaW9uXG4gIGNvbnN0IGxvY2FsU2V0dGluZyA9IENvb2tpZS5nZXQoJ2xvY2FsZScpO1xuICBpZiAobG9jYWxTZXR0aW5nICYmIGlzTG9jYWxlKGxvY2FsU2V0dGluZykpIHtcbiAgICByZXR1cm4gbG9jYWxTZXR0aW5nO1xuICB9XG5cbiAgLy8gdGhlIGxhbmd1YWdlIHNldHRpbmcgb2YgdGhlIGJyb3dzZXJcbiAgLy8gY29uc3QgW2Jyb3dzZXJTZXR0aW5nXSA9IG5hdmlnYXRvci5sYW5ndWFnZS5zcGxpdCgnLScpO1xuICAvLyBpZiAoaXNMb2NhbGUoYnJvd3NlclNldHRpbmcpKSB7XG4gIC8vICAgcmV0dXJuIGJyb3dzZXJTZXR0aW5nO1xuICAvLyB9XG5cbiAgcmV0dXJuIGRlZmF1bHRMb2NhbGU7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBleHBvcnQgY29uc3QgTW9kYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4vLyAgIHNob3dNb2RhbDogbnVsbCxcbi8vICAgaGlkZU1vZGFsOiBudWxsLFxuLy8gICBpc09wZW5lZE1vZGFsOiBmYWxzZSxcbi8vIH0pO1xuXG4vKipcbiAqIE1vZGFscyBhcmUgcmVwcmVzZW50ZWQgYXMgcmVhY3QgY29tcG9uZW50c1xuICpcbiAqIFRoaXMgaXMgd2hhdCBnZXRzIHBhc3NlZCB0byB1c2VNb2RhbCBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXG4gKi9cbmV4cG9ydCB0eXBlIE1vZGFsVHlwZSA9IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PGFueT47XG5cbi8qKlxuICogVGhlIHNoYXBlIG9mIHRoZSBtb2RhbCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxDb250ZXh0VHlwZSB7XG4gIHNob3dNb2RhbChrZXk6IHN0cmluZywgY29tcG9uZW50OiBNb2RhbFR5cGUsIG9wdGlvbnM6IGFueSk6IHZvaWQ7XG4gIGhpZGVNb2RhbChrZXk6IHN0cmluZyk6IHZvaWQ7XG59XG5cbi8qKlxuICogVGhyb3cgZXJyb3Igd2hlbiBNb2RhbENvbnRleHQgaXMgdXNlZCBvdXRzaWRlIG9mIGNvbnRleHQgcHJvdmlkZXJcbiAqL1xuY29uc3QgaW52YXJpYW50VmlvbGF0aW9uID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ0F0dGVtcHRlZCB0byBjYWxsIHVzZU1vZGFsIG91dHNpZGUgb2YgbW9kYWwgY29udGV4dC4gTWFrZSBzdXJlIHlvdXIgYXBwIGlzIHJlbmRlcmVkIGluc2lkZSBNb2RhbFByb3ZpZGVyLidcbiAgKTtcbn07XG5cbi8qKlxuICogTW9kYWwgQ29udGV4dCBPYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IE1vZGFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8TW9kYWxDb250ZXh0VHlwZT4oe1xuICBzaG93TW9kYWw6IGludmFyaWFudFZpb2xhdGlvbixcbiAgaGlkZU1vZGFsOiBpbnZhcmlhbnRWaW9sYXRpb24sXG59KTtcbiIsImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kYWxUeXBlLCBNb2RhbENvbnRleHQgfSBmcm9tICcuL21vZGFsLmNvbnRleHQnO1xuaW1wb3J0IHsgdXNlTWVkaWEgfSBmcm9tICd1dGlscy91c2UtbWVkaWEnO1xuY29uc3QgU3ByaW5nTW9kYWwgPSBkeW5hbWljKCgpID0+XG4gIGltcG9ydCgnY29tcG9uZW50cy9zcHJpbmctbW9kYWwvc3ByaW5nLW1vZGFsJylcbik7XG5jb25zdCBDZW50ZXJNb2RhbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdjb21wb25lbnRzL21vZGFsL2NlbnRlci1tb2RhbCcpKTtcblxuLyoqXG4gKiBNb2RhbCBQcm92aWRlciBQcm9wc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsUHJvdmlkZXJQcm9wcyB7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHJvb3QgZWxlbWVudCB0byByZW5kZXIgbW9kYWxzIGludG9cbiAgICovXG4gIGNvbnRhaW5lcj86IEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBjb21wb25lbnQgZm9yIG1vZGFsIG5vZGVzXG4gICAqL1xuICByb290Q29tcG9uZW50PzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBTdWJ0cmVlIHRoYXQgd2lsbCByZWNlaXZlIG1vZGFsIGNvbnRleHRcbiAgICovXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbi8qKlxuICogTW9kYWwgUHJvdmlkZXJcbiAqXG4gKiBQcm92aWRlcyBtb2RhbCBjb250ZXh0IGFuZCByZW5kZXJzIE1vZGFsUm9vdC5cbiAqL1xuZXhwb3J0IGNvbnN0IE1vZGFsUHJvdmlkZXIgPSAoe1xuICBjb250YWluZXIsXG4gIHJvb3RDb21wb25lbnQsXG4gIGNoaWxkcmVuLFxufTogTW9kYWxQcm92aWRlclByb3BzKSA9PiB7XG4gIGlmIChjb250YWluZXIgJiYgIShjb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENvbnRhaW5lciBtdXN0IHNwZWNpZnkgRE9NIGVsZW1lbnQgdG8gbW91bnQgbW9kYWwgcm9vdCBpbnRvLlxuICAgIFRoaXMgYmVoYXZpb3IgaGFzIGNoYW5nZWQgaW4gMy4wLjAuIFBsZWFzZSB1c2UgXFxgcm9vdENvbXBvbmVudFxcYCBwcm9wIGluc3RlYWQuXG4gICAgU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbXBvbnR1cy9yZWFjdC1tb2RhbC1ob29rL2lzc3Vlcy8xOGApO1xuICB9XG4gIGNvbnN0IFttb2RhbHMsIHNldE1vZGFsc10gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBhbnk+Pih7fSk7XG4gIGNvbnN0IHNob3dNb2RhbCA9IChrZXk6IHN0cmluZywgbW9kYWw6IE1vZGFsVHlwZSwgb3B0aW9uczogYW55ID0ge30pID0+XG4gICAgc2V0TW9kYWxzKChwcmV2KSA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFtrZXldOiB7IGNvbXBvbmVudDogbW9kYWwsIGlzT3BlbjogdHJ1ZSwgLi4ub3B0aW9ucyB9LFxuICAgIH0pKTtcbiAgY29uc3QgaGlkZU1vZGFsID0gdXNlQ2FsbGJhY2soKGtleTogc3RyaW5nLCBvbkNsb3NlOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgc2V0TW9kYWxzKChwcmV2Q29uZmlnKSA9PiAoe1xuICAgICAgLi4ucHJldkNvbmZpZyxcbiAgICAgIFtrZXldOiB7IC4uLnByZXZDb25maWdba2V5XSwgaXNPcGVuOiBmYWxzZSB9LFxuICAgIH0pKTtcbiAgICBpZiAob25DbG9zZSkge1xuICAgICAgb25DbG9zZSgpO1xuICAgIH1cbiAgfSwgW10pO1xuICBjb25zdCBjb250ZXh0VmFsdWU6IGFueSA9IHsgc2hvd01vZGFsLCBoaWRlTW9kYWwgfTtcbiAgY29uc3QgaXNTbWFsbCA9IHVzZU1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKTtcbiAgcmV0dXJuIChcbiAgICA8TW9kYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtPYmplY3Qua2V5cyhtb2RhbHMpLm1hcCgoY3VycmVudEtleSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRLZXksIG1vZGFsc1tjdXJyZW50S2V5XSk7XG4gICAgICAgICAgY29uc3QgeyBjb21wb25lbnQ6IENvbXBvbmVudCwgaXNPcGVuLCBvbkNsb3NlIH0gPSBtb2RhbHNbY3VycmVudEtleV07XG4gICAgICAgICAgcmV0dXJuIGlzU21hbGwgPyAoXG4gICAgICAgICAgICA8U3ByaW5nTW9kYWxcbiAgICAgICAgICAgICAga2V5PXtjdXJyZW50S2V5fVxuICAgICAgICAgICAgICBjaGlsZHJlbj17PENvbXBvbmVudCAvPn1cbiAgICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiBoaWRlTW9kYWwoY3VycmVudEtleSwgb25DbG9zZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Q2VudGVyTW9kYWxcbiAgICAgICAgICAgICAga2V5PXtjdXJyZW50S2V5fVxuICAgICAgICAgICAgICBjaGlsZHJlbj17PENvbXBvbmVudCAvPn1cbiAgICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiBoaWRlTW9kYWwoY3VycmVudEtleSwgb25DbG9zZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICA8L01vZGFsQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VhcmNoQm94IH0gZnJvbSAnY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3gnO1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUsIHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnY29udGV4dHMvYXBwL2FwcC5wcm92aWRlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG1pbmltYWw/OiBib29sZWFuO1xuICBzaG93QnV0dG9uVGV4dD86IGJvb2xlYW47XG4gIG9uU3VibWl0PzogKCkgPT4gdm9pZDtcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbn1cblxuY29uc3QgU2VhcmNoOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBvblN1Ym1pdCwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBzZWFyY2hUZXJtID0gdXNlQXBwU3RhdGUoJ3NlYXJjaFRlcm0nKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaW50bCA9IHVzZUludGwoKTtcblxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX1NFQVJDSF9URVJNJywgcGF5bG9hZDogdmFsdWUgfSk7XG4gIH07XG4gIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSByb3V0ZXI7XG4gIGNvbnN0IG9uU2VhcmNoID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyB0eXBlLCAuLi5yZXN0IH0gPSBxdWVyeTtcbiAgICBpZiAodHlwZSkge1xuICAgICAgcm91dGVyLnB1c2goXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeTogeyAuLi5yZXN0LCB0ZXh0OiBzZWFyY2hUZXJtIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRobmFtZTogYC8ke3R5cGV9YCxcbiAgICAgICAgICBxdWVyeTogeyAuLi5yZXN0LCB0ZXh0OiBzZWFyY2hUZXJtIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5OiB7IC4uLnJlc3QsIHRleHQ6IHNlYXJjaFRlcm0gfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfU0VBUkNIX1RFUk0nLCBwYXlsb2FkOiAnJyB9KTtcbiAgICBpZiAob25TdWJtaXQpIHtcbiAgICAgIG9uU3VibWl0KCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxTZWFyY2hCb3hcbiAgICAgIG9uRW50ZXI9e29uU2VhcmNofVxuICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICBuYW1lPVwic2VhcmNoXCJcbiAgICAgIHBsYWNlaG9sZGVyPXtpbnRsLmZvcm1hdE1lc3NhZ2Uoe1xuICAgICAgICBpZDogJ3NlYXJjaFBsYWNlaG9sZGVyJyxcbiAgICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdTZWFyY2ggeW91ciBwcm9kdWN0cyBmcm9tIGhlcmUnLFxuICAgICAgfSl9XG4gICAgICBjYXRlZ29yeVR5cGU9e3F1ZXJ5LnR5cGUgfHwgJ2Jha2VyeSd9XG4gICAgICBidXR0b25UZXh0PXtpbnRsLmZvcm1hdE1lc3NhZ2Uoe1xuICAgICAgICBpZDogJ3NlYXJjaEJ1dHRvblRleHQnLFxuICAgICAgICBkZWZhdWx0TWVzc2FnZTogJ1NlYXJjaCcsXG4gICAgICB9KX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5leHBvcnQgY29uc3QgR0VUX0NBVEVHT1JJRVMgPSBncWxgXG4gIHF1ZXJ5IGdldENhdGVnb3JpZXMoJHR5cGU6IFN0cmluZyEpIHtcbiAgICBjYXRlZ29yaWVzKHR5cGU6ICR0eXBlKSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHNsdWdcbiAgICAgIGljb25cbiAgICAgIGNoaWxkcmVuIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgc2x1Z1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUUyA9IGdxbGBcbiAgcXVlcnkgZ2V0UHJvZHVjdHMoXG4gICAgJHR5cGU6IFN0cmluZ1xuICAgICR0ZXh0OiBTdHJpbmdcbiAgICAkY2F0ZWdvcnk6IFN0cmluZ1xuICAgICRvZmZzZXQ6IEludFxuICAgICRsaW1pdDogSW50XG4gICkge1xuICAgIHByb2R1Y3RzKFxuICAgICAgdHlwZTogJHR5cGVcbiAgICAgIHRleHQ6ICR0ZXh0XG4gICAgICBjYXRlZ29yeTogJGNhdGVnb3J5XG4gICAgICBvZmZzZXQ6ICRvZmZzZXRcbiAgICAgIGxpbWl0OiAkbGltaXRcbiAgICApIHtcbiAgICAgIGl0ZW1zIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgc2x1Z1xuICAgICAgICB1bml0XG4gICAgICAgIHByaWNlXG4gICAgICAgIHNhbGVQcmljZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBkaXNjb3VudEluUGVyY2VudFxuICAgICAgICB0eXBlXG4gICAgICAgIGltYWdlXG4gICAgICAgIGF1dGhvciB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBuYW1lXG4gICAgICAgIH1cbiAgICAgICAgZ2FsbGVyeSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIHNsdWdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaGFzTW9yZVxuICAgIH1cbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnQHJlZHEvcmV1c2UtbW9kYWwnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwnO1xuaW1wb3J0IHsgQmFubmVyIH0gZnJvbSAnY29tcG9uZW50cy9iYW5uZXIvYmFubmVyJztcbmltcG9ydCB7IE1vYmlsZUJhbm5lciB9IGZyb20gJ2NvbXBvbmVudHMvYmFubmVyL21vYmlsZS1iYW5uZXInO1xuXG5pbXBvcnQge1xuICBNYWluQ29udGVudEFyZWEsXG4gIFNpZGViYXJTZWN0aW9uLFxuICBDb250ZW50U2VjdGlvbixcbiAgT2ZmZXJTZWN0aW9uLFxuICBNb2JpbGVDYXJvdXNlbERyb3Bkb3duLFxufSBmcm9tICdhc3NldHMvc3R5bGVzL3BhZ2VzLnN0eWxlJztcbi8vIFN0YXRpYyBEYXRhIEltcG9ydCBIZXJlXG5pbXBvcnQgeyBzaXRlT2ZmZXJzIH0gZnJvbSAnc2l0ZS1zZXR0aW5ncy9zaXRlLW9mZmVycyc7XG5pbXBvcnQgeyBzaXRlUGFnZXMgfSBmcm9tICdzaXRlLXNldHRpbmdzL3NpdGUtcGFnZXMnO1xuaW1wb3J0IHsgU0VPIH0gZnJvbSAnY29tcG9uZW50cy9zZW8nO1xuaW1wb3J0IHsgdXNlUmVmU2Nyb2xsIH0gZnJvbSAndXRpbHMvdXNlLXJlZi1zY3JvbGwnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbyB9IGZyb20gJ3V0aWxzL2Fwb2xsbyc7XG5pbXBvcnQgeyBHRVRfUFJPRFVDVFMgfSBmcm9tICdncmFwaHFsL3F1ZXJ5L3Byb2R1Y3RzLnF1ZXJ5JztcbmltcG9ydCB7IEdFVF9DQVRFR09SSUVTIH0gZnJvbSAnZ3JhcGhxbC9xdWVyeS9jYXRlZ29yeS5xdWVyeSc7XG5pbXBvcnQgeyBNb2RhbFByb3ZpZGVyIH0gZnJvbSAnY29udGV4dHMvbW9kYWwvbW9kYWwucHJvdmlkZXInO1xuY29uc3QgU2lkZWJhciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdsYXlvdXRzL3NpZGViYXIvc2lkZWJhcicpKTtcbmNvbnN0IFByb2R1Y3RzID0gZHluYW1pYygoKSA9PlxuICBpbXBvcnQoJ2NvbXBvbmVudHMvcHJvZHVjdC1ncmlkL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QnKVxuKTtcbmNvbnN0IENhcnRQb3BVcCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdmZWF0dXJlcy9jYXJ0cy9jYXJ0LXBvcHVwJyksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBDYXRlZ29yeVBhZ2U6IFJlYWN0LkZDPGFueT4gPSAoeyBkZXZpY2VUeXBlIH0pID0+IHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZWxSZWY6IHRhcmdldFJlZiwgc2Nyb2xsIH0gPSB1c2VSZWZTY3JvbGwoe1xuICAgIHBlcmNlbnRPZkVsZW1lbnQ6IDAsXG4gICAgcGVyY2VudE9mQ29udGFpbmVyOiAwLFxuICAgIG9mZnNldFBYOiAtMTEwLFxuICB9KTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocXVlcnkudGV4dCB8fCBxdWVyeS5jYXRlZ29yeSkge1xuICAgICAgc2Nyb2xsKCk7XG4gICAgfVxuICB9LCBbcXVlcnkudGV4dCwgcXVlcnkuY2F0ZWdvcnldKTtcbiAgY29uc3QgUEFHRV9UWVBFOiBhbnkgPSBxdWVyeS50eXBlO1xuICBjb25zdCBwYWdlID0gc2l0ZVBhZ2VzW1BBR0VfVFlQRV07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNFTyB0aXRsZT17cGFnZT8ucGFnZV90aXRsZX0gZGVzY3JpcHRpb249e3BhZ2U/LnBhZ2VfZGVzY3JpcHRpb259IC8+XG4gICAgICA8TW9kYWxQcm92aWRlcj5cbiAgICAgICAgPE1vZGFsPlxuICAgICAgICAgIDxNb2JpbGVCYW5uZXIgaW50bFRpdGxlSWQ9e3BhZ2U/LmJhbm5lcl90aXRsZV9pZH0gdHlwZT17UEFHRV9UWVBFfSAvPlxuICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgIGludGxUaXRsZUlkPXtwYWdlPy5iYW5uZXJfdGl0bGVfaWR9XG4gICAgICAgICAgICBpbnRsRGVzY3JpcHRpb25JZD17cGFnZT8uYmFubmVyX2Rlc2NyaXB0aW9uX2lkfVxuICAgICAgICAgICAgaW1hZ2VVcmw9e3BhZ2U/LmJhbm5lcl9pbWFnZV91cmx9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8T2ZmZXJTZWN0aW9uPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcwIC0xMHB4JyB9fT5cbiAgICAgICAgICAgICAgPENhcm91c2VsIGRldmljZVR5cGU9e2RldmljZVR5cGV9IGRhdGE9e3NpdGVPZmZlcnN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L09mZmVyU2VjdGlvbj5cbiAgICAgICAgICA8TW9iaWxlQ2Fyb3VzZWxEcm9wZG93bj5cbiAgICAgICAgICAgIDxTaWRlYmFyIHR5cGU9e1BBR0VfVFlQRX0gZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX0gLz5cbiAgICAgICAgICA8L01vYmlsZUNhcm91c2VsRHJvcGRvd24+XG4gICAgICAgICAgPE1haW5Db250ZW50QXJlYT5cbiAgICAgICAgICAgIDxTaWRlYmFyU2VjdGlvbj5cbiAgICAgICAgICAgICAgPFNpZGViYXIgdHlwZT17UEFHRV9UWVBFfSBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfSAvPlxuICAgICAgICAgICAgPC9TaWRlYmFyU2VjdGlvbj5cbiAgICAgICAgICAgIDxDb250ZW50U2VjdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiByZWY9e3RhcmdldFJlZn0+XG4gICAgICAgICAgICAgICAgPFByb2R1Y3RzXG4gICAgICAgICAgICAgICAgICB0eXBlPXtQQUdFX1RZUEV9XG4gICAgICAgICAgICAgICAgICBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfVxuICAgICAgICAgICAgICAgICAgZmV0Y2hMaW1pdD17MjB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRTZWN0aW9uPlxuICAgICAgICAgIDwvTWFpbkNvbnRlbnRBcmVhPlxuICAgICAgICAgIDxDYXJ0UG9wVXAgZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX0gLz5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvTW9kYWxQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xuXG4gIGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IEdFVF9QUk9EVUNUUyxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHR5cGU6IHBhcmFtcy50eXBlLFxuICAgICAgb2Zmc2V0OiAwLFxuICAgICAgbGltaXQ6IDIwLFxuICAgIH0sXG4gIH0pO1xuICBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBHRVRfQ0FURUdPUklFUyxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHR5cGU6IHBhcmFtcy50eXBlLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGluaXRpYWxBcG9sbG9TdGF0ZTogYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH07XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IFtcbiAgICAgIHsgcGFyYW1zOiB7IHR5cGU6ICdncm9jZXJ5JyB9IH0sXG4gICAgICB7IHBhcmFtczogeyB0eXBlOiAnbWFrZXVwJyB9IH0sXG4gICAgICB7IHBhcmFtczogeyB0eXBlOiAnYmFncycgfSB9LFxuICAgICAgeyBwYXJhbXM6IHsgdHlwZTogJ2Jvb2snIH0gfSxcbiAgICAgIHsgcGFyYW1zOiB7IHR5cGU6ICdtZWRpY2luZScgfSB9LFxuICAgICAgeyBwYXJhbXM6IHsgdHlwZTogJ2Z1cm5pdHVyZScgfSB9LFxuICAgICAgeyBwYXJhbXM6IHsgdHlwZTogJ2Nsb3RoaW5nJyB9IH0sXG4gICAgXSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeVBhZ2U7XG4iLCJpbXBvcnQgT2ZmZXJPbmUgZnJvbSAnYXNzZXRzL2ltYWdlcy9wcm9tb3Rpb24vb2ZmZXItMS5wbmcnO1xuaW1wb3J0IE9mZmVyVGhyZWUgZnJvbSAnYXNzZXRzL2ltYWdlcy9wcm9tb3Rpb24vb2ZmZXItMy5wbmcnO1xuaW1wb3J0IE9mZmVyVHdvIGZyb20gJ2Fzc2V0cy9pbWFnZXMvcHJvbW90aW9uL29mZmVyLTIucG5nJztcblxuZXhwb3J0IGNvbnN0IHNpdGVPZmZlcnMgPSBbXG4gIHtcbiAgICBpZDogJzEnLFxuICAgIGltZ1NyYzogT2ZmZXJPbmUsXG4gICAgYWx0OiAnT2ZmZXIgMScsXG4gIH0sXG4gIHtcbiAgICBpZDogJzInLFxuICAgIGltZ1NyYzogT2ZmZXJUd28sXG4gICAgYWx0OiAnT2ZmZXIgMicsXG4gIH0sXG4gIHtcbiAgICBpZDogJzMnLFxuICAgIGltZ1NyYzogT2ZmZXJUaHJlZSxcbiAgICBhbHQ6ICdPZmZlciAzJyxcbiAgfSxcbl07XG4iLCJpbXBvcnQgZ3JvY2VyeUltYWdlIGZyb20gJ2Fzc2V0cy9pbWFnZXMvYmFubmVyL2dyb2NlcnkucG5nJztcbmltcG9ydCBtYWtldXBJbWFnZSBmcm9tICdhc3NldHMvaW1hZ2VzL2Jhbm5lci9tYWtldXAucG5nJztcbmltcG9ydCBiYWdzSW1hZ2UgZnJvbSAnYXNzZXRzL2ltYWdlcy9iYW5uZXIvYmFncy5wbmcnO1xuaW1wb3J0IGNsb3RoaW5nSW1hZ2UgZnJvbSAnYXNzZXRzL2ltYWdlcy9iYW5uZXIvY2xvdGhzLnBuZyc7XG5pbXBvcnQgYm9va3NJbWFnZSBmcm9tICdhc3NldHMvaW1hZ2VzL2Jhbm5lci9ib29rcy5wbmcnO1xuaW1wb3J0IGZ1cm5pdHVyZUltYWdlIGZyb20gJ2Fzc2V0cy9pbWFnZXMvYmFubmVyL2Z1cm5pdHVyZS5wbmcnO1xuaW1wb3J0IG1lZGljaW5lSW1hZ2UgZnJvbSAnYXNzZXRzL2ltYWdlcy9iYW5uZXIvbWVkaWNpbmUucG5nJztcbmltcG9ydCBiYWtlcnlJbWFnZSBmcm9tICdhc3NldHMvaW1hZ2VzL2Jhbm5lci9iYWtlcnkuanBnJztcblxuZXhwb3J0IGNvbnN0IHNpdGVQYWdlcyA9IHtcbiAgZ3JvY2VyeToge1xuICAgIHBhZ2VfdGl0bGU6ICdHcm9jZXJ5IC0gUGlja0JhemFyJyxcbiAgICBwYWdlX2Rlc2NyaXB0aW9uOiAnR3JvY2VyeSBEZXRhaWxzJyxcbiAgICBiYW5uZXJfdGl0bGVfaWQ6ICdncm9jZXJpZXNUaXRsZScsXG4gICAgYmFubmVyX2Rlc2NyaXB0aW9uX2lkOiAnZ3JvY2VyaWVzU3ViVGl0bGUnLFxuICAgIGJhbm5lcl9pbWFnZV91cmw6IGdyb2NlcnlJbWFnZSxcbiAgfSxcbiAgYmFrZXJ5OiB7XG4gICAgcGFnZV90aXRsZTogJ0Jha2VyeSAtIFBpY2tCYXphcicsXG4gICAgcGFnZV9kZXNjcmlwdGlvbjogJ0Jha2VyeSBEZXRhaWxzJyxcbiAgICBiYW5uZXJfdGl0bGVfaWQ6ICdiYWtlcnlUaXRsZScsXG4gICAgYmFubmVyX2Rlc2NyaXB0aW9uX2lkOiAnYmFrZXJ5U3ViVGl0bGUnLFxuICAgIGJhbm5lcl9pbWFnZV91cmw6IGJha2VyeUltYWdlLFxuICB9LFxuICBtYWtldXA6IHtcbiAgICBwYWdlX3RpdGxlOiAnTWFrZXVwIC0gUGlja0JhemFyJyxcbiAgICBwYWdlX2Rlc2NyaXB0aW9uOiAnTWFrZXVwIERldGFpbHMnLFxuICAgIGJhbm5lcl90aXRsZV9pZDogJ21ha2V1cFRpdGxlJyxcbiAgICBiYW5uZXJfZGVzY3JpcHRpb25faWQ6ICdtYWtldXBTdWJUaXRsZScsXG4gICAgYmFubmVyX2ltYWdlX3VybDogbWFrZXVwSW1hZ2UsXG4gIH0sXG4gIGJhZ3M6IHtcbiAgICBwYWdlX3RpdGxlOiAnQmFncyAtIFBpY2tCYXphcicsXG4gICAgcGFnZV9kZXNjcmlwdGlvbjogJ0JhZ3MgRGV0YWlscycsXG4gICAgYmFubmVyX3RpdGxlX2lkOiAnYmFnc1RpdGxlJyxcbiAgICBiYW5uZXJfZGVzY3JpcHRpb25faWQ6ICdiYWdzU3ViVGl0bGUnLFxuICAgIGJhbm5lcl9pbWFnZV91cmw6IGJhZ3NJbWFnZSxcbiAgfSxcbiAgY2xvdGhpbmc6IHtcbiAgICBwYWdlX3RpdGxlOiAnQ2xvdGhpbmcgLSBQaWNrQmF6YXInLFxuICAgIHBhZ2VfZGVzY3JpcHRpb246ICdDbG90aGluZyBEZXRhaWxzJyxcbiAgICBiYW5uZXJfdGl0bGVfaWQ6ICd3b21lbkNsb3Roc1RpdGxlJyxcbiAgICBiYW5uZXJfZGVzY3JpcHRpb25faWQ6ICd3b21lbkNsb3Roc1N1YlRpdGxlJyxcbiAgICBiYW5uZXJfaW1hZ2VfdXJsOiBjbG90aGluZ0ltYWdlLFxuICB9LFxuICBmdXJuaXR1cmU6IHtcbiAgICBwYWdlX3RpdGxlOiAnRnVybml0dXJlIC0gUGlja0JhemFyJyxcbiAgICBwYWdlX2Rlc2NyaXB0aW9uOiAnRnVybml0dXJlIERldGFpbHMnLFxuICAgIGJhbm5lcl90aXRsZV9pZDogJ2Z1cm5pdHVyZVRpdGxlJyxcbiAgICBiYW5uZXJfZGVzY3JpcHRpb25faWQ6ICdmdXJuaXR1cmVTdWJUaXRsZScsXG4gICAgYmFubmVyX2ltYWdlX3VybDogZnVybml0dXJlSW1hZ2UsXG4gIH0sXG4gIGJvb2s6IHtcbiAgICBwYWdlX3RpdGxlOiAnQm9vayAtIFBpY2tCYXphcicsXG4gICAgcGFnZV9kZXNjcmlwdGlvbjogJ0Jvb2sgRGV0YWlscycsXG4gICAgYmFubmVyX3RpdGxlX2lkOiAnYm9va3NUaXRsZScsXG4gICAgYmFubmVyX2Rlc2NyaXB0aW9uX2lkOiAnYm9va3NTdWJUaXRsZScsXG4gICAgYmFubmVyX2ltYWdlX3VybDogYm9va3NJbWFnZSxcbiAgfSxcbiAgbWVkaWNpbmU6IHtcbiAgICBwYWdlX3RpdGxlOiAnTWVkaWNpbmUgLSBQaWNrQmF6YXInLFxuICAgIHBhZ2VfZGVzY3JpcHRpb246ICdNZWRpY2luZSBEZXRhaWxzJyxcbiAgICBiYW5uZXJfdGl0bGVfaWQ6ICdtZWRpY2luZVRpdGxlJyxcbiAgICBiYW5uZXJfZGVzY3JpcHRpb25faWQ6ICdtZWRpY2luZVN1YlRpdGxlJyxcbiAgICBiYW5uZXJfaW1hZ2VfdXJsOiBtZWRpY2luZUltYWdlLFxuICB9LFxufTtcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBBcG9sbG9DbGllbnQsXG4gIEluTWVtb3J5Q2FjaGUsXG4gIEh0dHBMaW5rLFxuICBOb3JtYWxpemVkQ2FjaGVPYmplY3QsXG59IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxubGV0IGFwb2xsb0NsaWVudDogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD4gfCB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGNyZWF0ZUlzb21vcnBoTGluaygpIHtcbiAgcmV0dXJuIG5ldyBIdHRwTGluayh7XG4gICAgdXJpOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HUkFQSFFMX0FQSV9FTkRQT0lOVCwgLy8gU2VydmVyIFVSTCAobXVzdCBiZSBhYnNvbHV0ZSlcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gQWRkaXRpb25hbCBmZXRjaCgpIG9wdGlvbnMgbGlrZSBgY3JlZGVudGlhbHNgIG9yIGBoZWFkZXJzYFxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KCkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgc3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcsXG4gICAgbGluazogY3JlYXRlSXNvbW9ycGhMaW5rKCksXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHtcbiAgICAgIHR5cGVQb2xpY2llczoge1xuICAgICAgICBRdWVyeToge1xuICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgLy8gUmV1c2FibGUgaGVscGVyIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGEgZmllbGRcbiAgICAgICAgICAgIC8vIHBvbGljeSBmb3IgdGhlIFF1ZXJ5LnByb2R1Y3RzIGZpZWxkLlxuICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAga2V5QXJnczogWyd0eXBlJywgJ2NhdGVnb3J5JywgJ3RleHQnXSxcbiAgICAgICAgICAgICAgbWVyZ2UoZXhpc3RpbmcsIGluY29taW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpdGVtczogbmV3SXRlbXMgfSA9IGluY29taW5nO1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1xuICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaW5jb21pbmcsXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFsuLi5leGlzdGluZy5pdGVtcywgLi4ubmV3SXRlbXNdLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IGluY29taW5nO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZTogYW55ID0gbnVsbCkge1xuICBjb25zdCBfYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IGNyZWF0ZUFwb2xsb0NsaWVudCgpO1xuXG4gIC8vIElmIHlvdXIgcGFnZSBoYXMgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgdGhhdCB1c2UgQXBvbGxvIENsaWVudCwgdGhlIGluaXRpYWwgc3RhdGVcbiAgLy8gZ2V0cyBoeWRyYXRlZCBoZXJlXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcbiAgICAvLyBHZXQgZXhpc3RpbmcgY2FjaGUsIGxvYWRlZCBkdXJpbmcgY2xpZW50IHNpZGUgZGF0YSBmZXRjaGluZ1xuICAgIGNvbnN0IGV4aXN0aW5nQ2FjaGUgPSBfYXBvbGxvQ2xpZW50LmV4dHJhY3QoKTtcbiAgICAvLyBSZXN0b3JlIHRoZSBjYWNoZSB1c2luZyB0aGUgZGF0YSBwYXNzZWQgZnJvbSBnZXRTdGF0aWNQcm9wcy9nZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAvLyBjb21iaW5lZCB3aXRoIHRoZSBleGlzdGluZyBjYWNoZWQgZGF0YVxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZSh7IC4uLmV4aXN0aW5nQ2FjaGUsIC4uLmluaXRpYWxTdGF0ZSB9KTtcbiAgfVxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBBcG9sbG8gQ2xpZW50XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XG4gIC8vIENyZWF0ZSB0aGUgQXBvbGxvIENsaWVudCBvbmNlIGluIHRoZSBjbGllbnRcbiAgaWYgKCFhcG9sbG9DbGllbnQpIGFwb2xsb0NsaWVudCA9IF9hcG9sbG9DbGllbnQ7XG5cbiAgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcG9sbG8oaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKTtcbiAgcmV0dXJuIHN0b3JlO1xufVxuIiwiZXhwb3J0IGNvbnN0IGlzQ2xpZW50ID0gISEoXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gIHdpbmRvdy5kb2N1bWVudCAmJlxuICB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuKTtcblxuZXhwb3J0IGNvbnN0IHVzZUlzQ2xpZW50ID0gKCkgPT4gaXNDbGllbnQ7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgaXNDbGllbnQgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JztcblxuZXhwb3J0IGNvbnN0IHVzZU1lZGlhID0gKHF1ZXJ5OiBzdHJpbmcsIGRlZmF1bHRTdGF0ZTogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoXG4gICAgaXNDbGllbnQgPyAoKSA9PiB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcyA6IGRlZmF1bHRTdGF0ZVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG1vdW50ZWQgPSB0cnVlO1xuICAgIGNvbnN0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KTtcbiAgICBjb25zdCBvbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmICghbW91bnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZXRTdGF0ZSghIW1xbC5tYXRjaGVzKTtcbiAgICB9O1xuXG4gICAgbXFsLmFkZExpc3RlbmVyKG9uQ2hhbmdlKTtcbiAgICBzZXRTdGF0ZShtcWwubWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbW91bnRlZCA9IGZhbHNlO1xuICAgICAgbXFsLnJlbW92ZUxpc3RlbmVyKG9uQ2hhbmdlKTtcbiAgICB9O1xuICB9LCBbcXVlcnldKTtcblxuICByZXR1cm4gc3RhdGU7XG59O1xuIiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuL3VzZS1pcy1jbGllbnQnO1xuZXhwb3J0IGVudW0gU2Nyb2xsRGlyZWN0aW9ucyB7XG4gIEhvcml6b250YWwsXG4gIFZlcnRpY2FsXG59XG5cbmZ1bmN0aW9uIHNjcm9sbFRvUGVyY2VudChcbiAgZWwsXG4gIHtcbiAgICBjb250YWluZXIsXG4gICAgcGVyY2VudE9mRWxlbWVudCxcbiAgICBvZmZzZXRQWCxcbiAgICBkaXJlY3Rpb24sXG4gICAgcGVyY2VudE9mQ29udGFpbmVyXG4gIH06IFNjcm9sbE9wdHNcbikge1xuICBjb25zdCByZWN0ID0gZWwuY3VycmVudC5nZXRDbGllbnRSZWN0cygpWzBdO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gZGlyZWN0aW9uID09PSBTY3JvbGxEaXJlY3Rpb25zLlZlcnRpY2FsO1xuICBjb25zdCByZWZTaXplID0gaXNWZXJ0aWNhbCA/IHJlY3QuaGVpZ2h0IDogcmVjdC53aWR0aDtcbiAgY29uc3QgZWxlbVNjcm9sbCA9IGlzVmVydGljYWwgPyByZWN0LnkgOiByZWN0Lng7XG5cbiAgY29uc3Qgc2Nyb2xsU2l6ZSA9XG4gICAgY29udGFpbmVyID09PSB3aW5kb3dcbiAgICAgID8gaXNWZXJ0aWNhbFxuICAgICAgICA/IGNvbnRhaW5lci5pbm5lckhlaWdodFxuICAgICAgICA6IGNvbnRhaW5lci5pbm5lcldpZHRoXG4gICAgICA6IGlzVmVydGljYWxcbiAgICAgID8gY29udGFpbmVyLnNjcm9sbEhlaWdodFxuICAgICAgOiBjb250YWluZXIuc2Nyb2xsV2lkdGg7XG5cbiAgbGV0IGFkZE9mZnNldCA9IChyZWZTaXplICogcGVyY2VudE9mRWxlbWVudCkgLyAxMDA7XG4gIGlmIChvZmZzZXRQWCkge1xuICAgIGFkZE9mZnNldCArPSBvZmZzZXRQWDtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lclNjcm9sbCA9IGlzVmVydGljYWwgPyBjb250YWluZXIuc2Nyb2xsWSA6IGNvbnRhaW5lci5zY3JvbGxYO1xuICBjb25zdCBuZXdTY3JvbGwgPVxuICAgIGNvbnRhaW5lclNjcm9sbCArXG4gICAgZWxlbVNjcm9sbCArXG4gICAgKChzY3JvbGxTaXplICogcGVyY2VudE9mQ29udGFpbmVyKSAvIDEwMCArIGFkZE9mZnNldCk7XG5cbiAgY29uc3Qgc2Nyb2xsT2JqID0gaXNWZXJ0aWNhbCA/IHsgdG9wOiBuZXdTY3JvbGwgfSA6IHsgbGVmdDogbmV3U2Nyb2xsIH07XG5cbiAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAuLi5zY3JvbGxPYmosXG4gICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gIH0pO1xufVxuXG5pbnRlcmZhY2UgU2Nyb2xsT3B0cyB7XG4gIC8qKlxuICAgKiBPZmZzZXQgaW4gcGVyY2VudGFnZSBvZiB0aGUgZWxlbWVudCdzIGNsaWVudCBkaW1lbnRpb25zXG4gICAqIGRlZmF1bHQgaXMgdG8gc2Nyb2xsIHRvIGNlbnRlciB0aGUgZWxlbWVudCBpbiB0aGUgc2Nyb2xsaW5nIHBhbmUsIGhlbmNlIDUwJVxuICAgKi9cbiAgcGVyY2VudE9mRWxlbWVudD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBvZmZzZXQgaW4gcGl4ZWxzLCB3aGNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGVsZW1lbnRcbiAgICovXG4gIG9mZnNldFBYPzogbnVtYmVyO1xuICAvKipcbiAgICogV2hldGhlciB0byBydW4gdGhlIHNjcm9sbCBvbiBtb3VudGluZ1xuICAgKi9cbiAgb25Nb3VudD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUaGUgc2Nyb2xsYWJsZSBjb250YWluZXIgaW4gd2hpY2ggdGhlIHJlZiBlbGVtZW50IGlzIHNjcm9sbGluZ1xuICAgKi9cbiAgY29udGFpbmVyPzogYW55O1xuICAvLyBkZWZhdWx0IGlzIHRoZSBjZW50ZXIgb2YgdGhlIHNjcm9sbGluZyBjb250YWluZXIsIGhlbmNlIDUwJVxuICBwZXJjZW50T2ZDb250YWluZXI/OiBudW1iZXI7XG4gIGRpcmVjdGlvbj86IFNjcm9sbERpcmVjdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWZTY3JvbGwoe1xuICBwZXJjZW50T2ZFbGVtZW50ID0gNTAsXG4gIG9mZnNldFBYID0gMCxcbiAgb25Nb3VudCA9IGZhbHNlLFxuICBjb250YWluZXIgPSBpc0NsaWVudCA/IHdpbmRvdyA6IG51bGwsXG4gIHBlcmNlbnRPZkNvbnRhaW5lciA9IDUwLFxuICBkaXJlY3Rpb24gPSBTY3JvbGxEaXJlY3Rpb25zLlZlcnRpY2FsXG59OiBTY3JvbGxPcHRzKSB7XG4gIGNvbnN0IGVsUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHNjcm9sbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoZWxSZWYuY3VycmVudCkge1xuICAgICAgc2Nyb2xsVG9QZXJjZW50KGVsUmVmLCB7XG4gICAgICAgIHBlcmNlbnRPZkVsZW1lbnQsXG4gICAgICAgIG9mZnNldFBYLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIHBlcmNlbnRPZkNvbnRhaW5lcixcbiAgICAgICAgZGlyZWN0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtlbFJlZi5jdXJyZW50XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAob25Nb3VudCkge1xuICAgICAgc2Nyb2xsKCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHsgZWxSZWYsIHNjcm9sbCB9O1xufVxuXG4vLyBmdW5jdGlvbiBNeUNvbXBvbmVudCgpIHtcbi8vICAgLy8gdXNpbmcgdGhlIGhvb2sgd2l0aG91dCBhcmd1bWVudHMgd2lsbCBzY3JvbGwgdGhlIGVsZW1lbnQgdG8gdGhlIGNlbnRlciBvZiB0aGVcbi8vICAgLy8gd2luZG93J3Mgdmlld3BvcnRcbi8vICAgLy8gYWxpYXMgZWxSZWYgdG8gbXlEaXYgZm9yIGVhc2llciB1c2FnZSBpZiBoYXZpbmcgbXVsdGlwbGUgZWxlbWVudHNcbi8vICAgLy8gaW4gdGhlIHNhbWUgY29tcG9uZW50XG5cbi8vICAgY29uc3QgeyBlbFJlZjogbXlEaXYsIHNjcm9sbCB9ID0gdXNlUmVmU2Nyb2xsZXIoKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Njcm9sbH0+U2Nyb2xsPC9idXR0b24+XG5cbi8vICAgICAgIDxkaXYgcmVmPXtteURpdn0+XG4vLyAgICAgICAgIGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIGVmZmljaXR1ciwgbWFzc2Egdml0YWUgY29uc2VjdGV0dXIgZWdlc3RhcywganVzdG8gbWFnbmFcbi8vICAgICAgICAgZmFjaWxpc2lzIGFyY3UsIG5vbiBhY2N1bXNhbiBsYWN1cyBpcHN1bSBzaXQgYW1ldCBuaXNsLmBcbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHEvcmV1c2UtbW9kYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0eWxlZC1zeXN0ZW0vY3NzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9jYWxmb3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL3N0YXJ0Q2FzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm92ZXJsYXlzY3JvbGxiYXJzLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvbnRlbnQtbG9hZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWltYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmV2ZWFsL0ZhZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3ByaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNwcmluZy1tb2RhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdGlja3lub2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXdheXBvaW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsaXMtcGx1Z2luLXJ0bFwiKTsiXSwic291cmNlUm9vdCI6IiJ9