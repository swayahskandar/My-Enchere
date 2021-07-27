module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/_app": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@redq/reuse-modal/lib/index.css":
/*!*****************************************************************************************************************************************************************************!*\
  !*** C:/Users/parnasse/Downloads/pickbazarreact-502/pickbazarreact-502/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/@redq/reuse-modal/lib/index.css ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/overlayscrollbars/css/OverlayScrollbars.css":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** C:/Users/parnasse/Downloads/pickbazarreact-502/pickbazarreact-502/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/overlayscrollbars/css/OverlayScrollbars.css ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/rc-collapse/assets/index.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** C:/Users/parnasse/Downloads/pickbazarreact-502/pickbazarreact-502/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/rc-collapse/assets/index.css ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/rc-drawer/assets/index.css":
/*!************************************************************************************************************************************************************************!*\
  !*** C:/Users/parnasse/Downloads/pickbazarreact-502/pickbazarreact-502/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/rc-drawer/assets/index.css ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/rc-table/assets/index.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** C:/Users/parnasse/Downloads/pickbazarreact-502/pickbazarreact-502/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/rc-table/assets/index.css ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/styles.css":
/*!*********************************************************************************************************************************************************************************!*\
  !*** C:/Users/parnasse/Downloads/pickbazarreact-502/pickbazarreact-502/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/react-multi-carousel/lib/styles.css ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/react-spring-modal/dist/index.css":
/*!*******************************************************************************************************************************************************************************!*\
  !*** C:/Users/parnasse/Downloads/pickbazarreact-502/pickbazarreact-502/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/react-spring-modal/dist/index.css ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/swiper/swiper-bundle.min.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** C:/Users/parnasse/Downloads/pickbazarreact-502/pickbazarreact-502/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/swiper/swiper-bundle.min.css ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/typeface-lato/index.css":
/*!*********************************************************************************************************************************************************************!*\
  !*** C:/Users/parnasse/Downloads/pickbazarreact-502/pickbazarreact-502/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/typeface-lato/index.css ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/typeface-poppins/index.css":
/*!************************************************************************************************************************************************************************!*\
  !*** C:/Users/parnasse/Downloads/pickbazarreact-502/pickbazarreact-502/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/typeface-poppins/index.css ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

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

/***/ "./src/components/multi-carousel/multi-carousel.style.css":
/*!****************************************************************!*\
  !*** ./src/components/multi-carousel/multi-carousel.style.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/scrollbar/scrollbar.css":
/*!************************************************!*\
  !*** ./src/components/scrollbar/scrollbar.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./src/contexts/auth/auth.context.tsx":
/*!********************************************!*\
  !*** ./src/contexts/auth/auth.context.tsx ***!
  \********************************************/
/*! exports provided: AuthContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "./src/contexts/auth/auth.provider.tsx":
/*!*********************************************!*\
  !*** ./src/contexts/auth/auth.provider.tsx ***!
  \*********************************************/
/*! exports provided: AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.context */ "./src/contexts/auth/auth.context.tsx");

var _jsxFileName = "C:\\Users\\parnasse\\Downloads\\pickbazarreact-502\\pickbazarreact-502\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\src\\contexts\\auth\\auth.provider.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const isBrowser = false;
const INITIAL_STATE = {
  isAuthenticated: isBrowser && !!localStorage.getItem('access_token'),
  currentForm: 'signIn'
};

function reducer(state, action) {
  console.log(state, 'auth');

  switch (action.type) {
    case 'SIGNIN':
      return _objectSpread(_objectSpread({}, state), {}, {
        currentForm: 'signIn'
      });

    case 'SIGNIN_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        isAuthenticated: true
      });

    case 'SIGN_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isAuthenticated: false
      });

    case 'SIGNUP':
      return _objectSpread(_objectSpread({}, state), {}, {
        currentForm: 'signUp'
      });

    case 'FORGOTPASS':
      return _objectSpread(_objectSpread({}, state), {}, {
        currentForm: 'forgotPass'
      });

    default:
      return state;
  }
}

const AuthProvider = ({
  children
}) => {
  const {
    0: authState,
    1: authDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, INITIAL_STATE);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_auth_context__WEBPACK_IMPORTED_MODULE_2__["AuthContext"].Provider, {
    value: {
      authState,
      authDispatch
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/contexts/cart/cart.reducer.tsx":
/*!********************************************!*\
  !*** ./src/contexts/cart/cart.reducer.tsx ***!
  \********************************************/
/*! exports provided: cartItemsTotalPrice, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartItemsTotalPrice", function() { return cartItemsTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// export const cartItemsTotalPrice = (items, { discountInPercent = 0 } = {}) => {
const cartItemsTotalPrice = (items, coupon = null) => {
  if (items === null || items.length === 0) return 0;
  const itemCost = items.reduce((total, item) => {
    if (item.salePrice) {
      return total + item.salePrice * item.quantity;
    }

    return total + item.price * item.quantity;
  }, 0); // const discountRate = 1 - discountInPercent;

  const discount = coupon ? itemCost * Number(coupon.discountInPercent) / 100 : 0; // itemCost * discountRate * TAX_RATE + shipping;
  // return itemCost * discountRate;

  return itemCost - discount;
}; // cartItems, cartItemToAdd

const addItemToCart = (state, action) => {
  const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id);

  if (existingCartItemIndex > -1) {
    const newState = [...state.items];
    newState[existingCartItemIndex].quantity += action.payload.quantity;
    return newState;
  }

  return [...state.items, action.payload];
}; // cartItems, cartItemToRemove


const removeItemFromCart = (state, action) => {
  return state.items.reduce((acc, item) => {
    if (item.id === action.payload.id) {
      const newQuantity = item.quantity - action.payload.quantity;
      return newQuantity > 0 ? [...acc, _objectSpread(_objectSpread({}, item), {}, {
        quantity: newQuantity
      })] : [...acc];
    }

    return [...acc, item];
  }, []);
};

const clearItemFromCart = (state, action) => {
  return state.items.filter(item => item.id !== action.payload.id);
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'REHYDRATE':
      return _objectSpread(_objectSpread({}, state), action.payload);

    case 'TOGGLE_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });

    case 'ADD_ITEM':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: addItemToCart(state, action)
      });

    case 'REMOVE_ITEM':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: removeItemFromCart(state, action)
      });

    case 'CLEAR_ITEM_FROM_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: clearItemFromCart(state, action)
      });

    case 'CLEAR_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: []
      });

    case 'APPLY_COUPON':
      return _objectSpread(_objectSpread({}, state), {}, {
        coupon: action.payload
      });

    case 'REMOVE_COUPON':
      return _objectSpread(_objectSpread({}, state), {}, {
        coupon: null
      });

    case 'TOGGLE_RESTAURANT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isRestaurant: !state.isRestaurant
      });

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

/***/ }),

/***/ "./src/contexts/cart/use-cart.tsx":
/*!****************************************!*\
  !*** ./src/contexts/cart/use-cart.tsx ***!
  \****************************************/
/*! exports provided: CartProvider, useCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProvider", function() { return CartProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCart", function() { return useCart; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cart_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.reducer */ "./src/contexts/cart/cart.reducer.tsx");
/* harmony import */ var utils_use_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/use-storage */ "./src/utils/use-storage.ts");

var _jsxFileName = "C:\\Users\\parnasse\\Downloads\\pickbazarreact-502\\pickbazarreact-502\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\src\\contexts\\cart\\use-cart.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
const INITIAL_STATE = {
  isOpen: false,
  items: [],
  isRestaurant: false,
  coupon: null
};

const useCartActions = (initialCart = INITIAL_STATE) => {
  var _state$items3;

  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_cart_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"], initialCart);

  const addItemHandler = (item, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: _objectSpread(_objectSpread({}, item), {}, {
        quantity
      })
    });
  };

  const removeItemHandler = (item, quantity = 1) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: _objectSpread(_objectSpread({}, item), {}, {
        quantity
      })
    });
  };

  const clearItemFromCartHandler = item => {
    dispatch({
      type: 'CLEAR_ITEM_FROM_CART',
      payload: item
    });
  };

  const clearCartHandler = () => {
    dispatch({
      type: 'CLEAR_CART'
    });
  };

  const toggleCartHandler = () => {
    dispatch({
      type: 'TOGGLE_CART'
    });
  };

  const couponHandler = coupon => {
    dispatch({
      type: 'APPLY_COUPON',
      payload: coupon
    });
  };

  const removeCouponHandler = () => {
    dispatch({
      type: 'REMOVE_COUPON'
    });
  };

  const rehydrateLocalState = payload => {
    dispatch({
      type: 'REHYDRATE',
      payload
    });
  };

  const toggleRestaurant = () => {
    dispatch({
      type: 'TOGGLE_RESTAURANT'
    });
  };

  const isInCartHandler = id => {
    var _state$items;

    return (_state$items = state.items) === null || _state$items === void 0 ? void 0 : _state$items.some(item => item.id === id);
  };

  const getItemHandler = id => {
    var _state$items2;

    return (_state$items2 = state.items) === null || _state$items2 === void 0 ? void 0 : _state$items2.find(item => item.id === id);
  };

  const getCartItemsPrice = () => Object(_cart_reducer__WEBPACK_IMPORTED_MODULE_2__["cartItemsTotalPrice"])(state.items).toFixed(2);

  const getCartItemsTotalPrice = () => Object(_cart_reducer__WEBPACK_IMPORTED_MODULE_2__["cartItemsTotalPrice"])(state.items, state.coupon).toFixed(2);

  const getDiscount = () => {
    var _state$coupon;

    const total = Object(_cart_reducer__WEBPACK_IMPORTED_MODULE_2__["cartItemsTotalPrice"])(state.items);
    const discount = state.coupon ? total * Number((_state$coupon = state.coupon) === null || _state$coupon === void 0 ? void 0 : _state$coupon.discountInPercent) / 100 : 0;
    return discount.toFixed(2);
  };

  const getItemsCount = (_state$items3 = state.items) === null || _state$items3 === void 0 ? void 0 : _state$items3.reduce((acc, item) => acc + item.quantity, 0);
  return {
    state,
    getItemsCount,
    rehydrateLocalState,
    addItemHandler,
    removeItemHandler,
    clearItemFromCartHandler,
    clearCartHandler,
    isInCartHandler,
    getItemHandler,
    toggleCartHandler,
    getCartItemsTotalPrice,
    getCartItemsPrice,
    couponHandler,
    removeCouponHandler,
    getDiscount,
    toggleRestaurant
  };
};

const CartProvider = ({
  children
}) => {
  var _state$items4;

  const {
    state,
    rehydrateLocalState,
    getItemsCount,
    addItemHandler,
    removeItemHandler,
    clearItemFromCartHandler,
    clearCartHandler,
    isInCartHandler,
    getItemHandler,
    toggleCartHandler,
    getCartItemsTotalPrice,
    couponHandler,
    removeCouponHandler,
    getCartItemsPrice,
    getDiscount,
    toggleRestaurant
  } = useCartActions();
  const {
    rehydrated,
    error
  } = Object(utils_use_storage__WEBPACK_IMPORTED_MODULE_3__["useStorage"])(state, rehydrateLocalState);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CartContext.Provider, {
    value: {
      isOpen: state.isOpen,
      items: state.items,
      coupon: state.coupon,
      isRestaurant: state.isRestaurant,
      cartItemsCount: (_state$items4 = state.items) === null || _state$items4 === void 0 ? void 0 : _state$items4.length,
      itemsCount: getItemsCount,
      addItem: addItemHandler,
      removeItem: removeItemHandler,
      removeItemFromCart: clearItemFromCartHandler,
      clearCart: clearCartHandler,
      isInCart: isInCartHandler,
      getItem: getItemHandler,
      toggleCart: toggleCartHandler,
      calculatePrice: getCartItemsTotalPrice,
      calculateSubTotalPrice: getCartItemsPrice,
      applyCoupon: couponHandler,
      removeCoupon: removeCouponHandler,
      calculateDiscount: getDiscount,
      toggleRestaurant
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 5
  }, undefined);
};
const useCart = () => Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(CartContext);

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

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExtendedApp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var site_settings_site_theme_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! site-settings/site-theme/default */ "./src/site-settings/site-theme/default.ts");
/* harmony import */ var contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! contexts/app/app.provider */ "./src/contexts/app/app.provider.ts");
/* harmony import */ var contexts_auth_auth_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! contexts/auth/auth.provider */ "./src/contexts/auth/auth.provider.tsx");
/* harmony import */ var contexts_language_language_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! contexts/language/language.provider */ "./src/contexts/language/language.provider.tsx");
/* harmony import */ var contexts_cart_use_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! contexts/cart/use-cart */ "./src/contexts/cart/use-cart.tsx");
/* harmony import */ var utils_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/apollo */ "./src/utils/apollo.tsx");
/* harmony import */ var utils_use_media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/use-media */ "./src/utils/use-media.ts");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-drawer/assets/index.css */ "../../node_modules/rc-drawer/assets/index.css");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rc_table_assets_index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-table/assets/index.css */ "../../node_modules/rc-table/assets/index.css");
/* harmony import */ var rc_table_assets_index_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rc_table_assets_index_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var rc_collapse_assets_index_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rc-collapse/assets/index.css */ "../../node_modules/rc-collapse/assets/index.css");
/* harmony import */ var rc_collapse_assets_index_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rc_collapse_assets_index_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "../../node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var components_multi_carousel_multi_carousel_style_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/multi-carousel/multi-carousel.style.css */ "./src/components/multi-carousel/multi-carousel.style.css");
/* harmony import */ var components_multi_carousel_multi_carousel_style_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(components_multi_carousel_multi_carousel_style_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_spring_modal_dist_index_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-spring-modal/dist/index.css */ "../../node_modules/react-spring-modal/dist/index.css");
/* harmony import */ var react_spring_modal_dist_index_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_spring_modal_dist_index_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var overlayscrollbars_css_OverlayScrollbars_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! overlayscrollbars/css/OverlayScrollbars.css */ "../../node_modules/overlayscrollbars/css/OverlayScrollbars.css");
/* harmony import */ var overlayscrollbars_css_OverlayScrollbars_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(overlayscrollbars_css_OverlayScrollbars_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var components_scrollbar_scrollbar_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/scrollbar/scrollbar.css */ "./src/components/scrollbar/scrollbar.css");
/* harmony import */ var components_scrollbar_scrollbar_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(components_scrollbar_scrollbar_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _redq_reuse_modal_lib_index_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @redq/reuse-modal/lib/index.css */ "../../node_modules/@redq/reuse-modal/lib/index.css");
/* harmony import */ var _redq_reuse_modal_lib_index_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal_lib_index_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! swiper/swiper-bundle.min.css */ "../../node_modules/swiper/swiper-bundle.min.css");
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var assets_styles_global_style__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/styles/global.style */ "./src/assets/styles/global.style.tsx");
/* harmony import */ var site_settings_site_translation_messages__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! site-settings/site-translation/messages */ "./src/site-settings/site-translation/messages.ts");
/* harmony import */ var typeface_lato__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! typeface-lato */ "../../node_modules/typeface-lato/index.css");
/* harmony import */ var typeface_lato__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(typeface_lato__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var typeface_poppins__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! typeface-poppins */ "../../node_modules/typeface-poppins/index.css");
/* harmony import */ var typeface_poppins__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(typeface_poppins__WEBPACK_IMPORTED_MODULE_24__);

var _jsxFileName = "C:\\Users\\parnasse\\Downloads\\pickbazarreact-502\\pickbazarreact-502\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // External CSS import here











 // Language translation messages



 // need to provide types

const DemoSwitcher = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! components/demo-switcher/switcher-btn */ "./src/components/demo-switcher/switcher-btn.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! components/demo-switcher/switcher-btn */ "./src/components/demo-switcher/switcher-btn.tsx")],
    modules: ["components/demo-switcher/switcher-btn"]
  }
});
const AppLayout = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! layouts/app-layout */ "./src/layouts/app-layout.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! layouts/app-layout */ "./src/layouts/app-layout.tsx")],
    modules: ["layouts/app-layout"]
  }
});
function ExtendedApp({
  Component,
  pageProps
}) {
  const mobile = Object(utils_use_media__WEBPACK_IMPORTED_MODULE_10__["useMedia"])("(max-width: 580px)");
  const tablet = Object(utils_use_media__WEBPACK_IMPORTED_MODULE_10__["useMedia"])("(max-width: 991px)");
  const desktop = Object(utils_use_media__WEBPACK_IMPORTED_MODULE_10__["useMedia"])("(min-width: 992px)");
  const apolloClient = Object(utils_apollo__WEBPACK_IMPORTED_MODULE_9__["useApollo"])(pageProps.initialApolloState);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
    client: apolloClient,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: site_settings_site_theme_default__WEBPACK_IMPORTED_MODULE_4__["defaultTheme"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_styles_global_style__WEBPACK_IMPORTED_MODULE_21__["GlobalStyle"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(contexts_language_language_provider__WEBPACK_IMPORTED_MODULE_7__["LanguageProvider"], {
        messages: site_settings_site_translation_messages__WEBPACK_IMPORTED_MODULE_22__["messages"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(contexts_cart_use_cart__WEBPACK_IMPORTED_MODULE_8__["CartProvider"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_5__["AppProvider"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(contexts_auth_auth_provider__WEBPACK_IMPORTED_MODULE_6__["AuthProvider"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppLayout, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
                  deviceType: {
                    mobile,
                    tablet,
                    desktop
                  }
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DemoSwitcher, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/site-settings/site-theme/default.ts":
/*!*************************************************!*\
  !*** ./src/site-settings/site-theme/default.ts ***!
  \*************************************************/
/*! exports provided: defaultTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return defaultTheme; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const baseColor = {
  white: '#ffffff',
  black: '#000000',
  gray: {
    100: '#f9f9f9',
    200: '#F7F7F7',
    300: '#f4f4f4',
    400: '#F3F3F3',
    500: '#f1f1f1',
    // border alt color
    600: '#EdEdEd',
    700: '#E6E6E6',
    // border color
    800: '#C2C3CC',
    900: '#bdbdbd'
  },
  text: {
    bold: '#0D1136',
    // heading color
    medium: '#424561',
    regular: '#77798C',
    // regular text color
    light: '#909090',
    label: '#767676'
  },
  transparent: 'transparent',
  primary: {
    regular: '#009E7F',
    // primary color
    hover: '#019376',
    alternate: '#028489',
    light: '#b7dbdd'
  },
  secondary: {
    regular: '#ff5b60',
    hover: '#FF282F',
    alternate: '#fc5c63'
  },
  yellow: {
    regular: '#FFAD5E',
    hover: '#FFB369',
    alternate: '#f4c243'
  },
  blue: {
    regular: '#2e70fa',
    dark: '#161F6A',
    light: '#666D92',
    link: '#4285f4'
  },
  red: '#ea4d4a',
  success: '',
  warning: '',
  muted: '',
  highlight: ''
};
const defaultTheme = {
  colors: _objectSpread(_objectSpread({}, baseColor), {}, {
    body: {
      bg: '',
      text: ''
    },
    borderColor: 'gray.500',
    headingsColor: 'text.bold',
    subheadingsColor: '',
    textColor: 'text.regular',
    buttonColor: 'white',
    buttonBgColor: 'primary.regular',
    buttonBgHoverColor: 'primary.hover',
    buttonBorderColor: 'primary.regular',
    linkColor: 'primary.regular',
    input: {
      text: '',
      bg: '',
      border: '',
      focus: '',
      placeholder: ''
    }
  }),
  // btnBorderRadius: '',
  breakpoints: ['767px', '991px', '1025px', '1300px'],
  // space: [0, 4, 8, 10, 15, 20, 25, 30, 40, 56],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // export const space = [0, 0.25, 0.5, 1, 1.5, 3].map(n => n + 'rem')
  // fontSizes: [10, 13, 15, 19, 21, 30, 45],
  // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontSizes: {
    xs: 12,
    sm: 13,
    base: 15,
    md: 19,
    lg: 21,
    xl: 24,
    '2xl': 30,
    '3xl': 36,
    '4xl': 42,
    '5xl': 48
  },
  // fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fontWeights: {
    body: 400,
    heading: 700,
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    bolder: 900
  },
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Poppins, sans-serif',
    monospace: 'Menlo, monospace'
  },
  // Custom Theme keys
  customs: {
    // transitions: {
    //   base: '.3s ease-out',
    // },
    transition: '0.35s ease'
  },
  // lineHeights: {
  //   solid: 1,
  //   title: 1.25,
  //   copy: 1.5,
  // },
  lineHeights: {
    body: 1.5,
    // body: 1.625,
    heading: 1.125 // heading: 1.25,

  },
  boxSizing: 'border-box',
  radii: {
    base: '6px',
    small: '3px',
    medium: '12px',
    big: '18px'
  },
  shadows: {
    base: '0 3px 6px rgba(0, 0, 0, 0.16)',
    medium: '0 6px 12px rgba(0, 0, 0, 0.16)',
    big: '0 21px 36px rgba(0, 0, 0, 0.16)',
    header: '0 1px 2px rgba(0, 0, 0, 0.06)'
  },
  // letterSpacings: {
  //   normal: 'normal',
  //   tracked: '0.1em',
  //   tight: '-0.05em',
  //   mega: '0.25em',
  // },
  // borders: {
  //   0,
  //   sm:'1px solid',
  //   medium:'2px solid',
  //   large:'3px solid',
  //   '4px solid',
  //   '5px solid',
  //   '6px solid',
  // },
  // radius: [3, 4, 5, 6, '50%'],
  // widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  // heights: [36, 40, 44, 48, 50, 54, 70, 81, 128],
  // maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  globals: {// body: {
    //   backgroundColor: 'red',
    //   fontFamily: 'body',
    //   lineHeight: 'body',
    //   fontWeight: 'body',
    // },
  }
}; // xs: 0,
// sm: 576px,
// md: 768px,
// lg: 992px,
// xl: 1200px,
// xxl: 1400px

/***/ }),

/***/ "./src/site-settings/site-translation/lang/ar.json":
/*!*********************************************************!*\
  !*** ./src/site-settings/site-translation/lang/ar.json ***!
  \*********************************************************/
/*! exports provided: nav.home, nav.grocery, nav.makeup, nav.bags, nav.clothing, nav.furniture, nav.book, nav.medicine, nav.foods, nav.terms_and_services, nav.privacy_policy, nav.offer, nav.help, nav.profile, nav.checkout, nav.order_received, nav.logout, nav.login, nav.order, groceriesTitle, groceriesSubTitle, bakeryTitle, bakerySubTitle, makeupTitle, makeupSubTitle, bagsTitle, bagsSubTitle, womenClothsTitle, womenClothsSubTitle, furnitureTitle, furnitureSubTitle, booksTitle, booksSubTitle, medicineTitle, medicineSubTitle, foodsTitle, foodsSubTitle, alternativeCheckout, termAndConditionHelper, termAndCondition, reqMedicine, submitRequest, noteHead, noteDescription, rmMedicineName, rmMedicineQuantity, rmPrescripttionUpload, rmUploadText, cartTitle, discountText, vatText, searchPlaceholder, searchButtonText, mobileSignInButtonText, navlinkAccountSettings, cartItems, cartItem, addCartButton, addToCartButton, backBtn, noProductFound, specialCode, couponApplied, couponPlaceholder, sidebarYourOrder, profilePageTitle, profileNameField, profileEmailField, profileSaveBtn, contactNumberTItle, addContactBtn, deliveryAddresTitle, addAddressBtn, addNew, addCardBtn, savedCardsId, savedContactId, savedAddressId, paymentCardTitle, siteFooter, subTotal, itemsText, shippinFeeText, voucherText, voucherApply, couponError, totalText, deliverySchedule, checkoutDeliveryAddress, contactNumberText, selectPaymentText, proceesCheckout, backHomeBtn, orderReceivedText, orderReceivedSuccess, orderNumberText, orderDateText, paymenMethodText, paymentMethodName, orderDetailsText, totalItemText, orderTimeText, deliveryTimeText, deliveryLocationText, totalAmountText, loadMoreBtn, welcomeBack, loginText, emailAddressPlaceholder, passwordPlaceholder, continueBtn, orText, continueFacebookBtn, continueGoogleBtn, dontHaveAccount, signUpBtnText, forgotPasswordText, resetText, signUpText, termsConditionText, alreadyHaveAccount, backToSign, loginBtnText, forgotPassText, sendResetPassText, resetPasswordBtn, intlCopyBtnId, intlCopySuccessId, locationModalheading, locationModalSubHeading, locationModalFooter, saleText, offText, faqNo1Title, faqNo1Desc, faqNo2Title, faqNo2Desc, faqNo3Title, faqNo3Desc, faqNo4Title, faqNo4Desc, intlOrderDetailsDiscount, intlOrderDetailsDelivery, intlOrderPageTitle, intlNoOrderFound, intlOrderPageDetails, intlTableColTitle2, intlTableColTitle3, intlOrderCardTitleText, intlOrderCardDateText, intlOrderCardTotalText, joinButton, ar, zh, en, de, he, es, intlTextBy, intlReletedItems, readFreeSampleButton, bookSectionTitle, authorSectionTitle, defaultIntlId, noResultFound, deliveryText, cuisineText, minOrderText, fromText, loadMoreButton, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"الصفحة الرئيسية\",\"nav.grocery\":\"بقالة\",\"nav.makeup\":\"ميك أب\",\"nav.bags\":\"أكياس\",\"nav.clothing\":\"ملابس\",\"nav.furniture\":\"أثاث المنزل\",\"nav.book\":\"كتاب\",\"nav.medicine\":\"الدواء\",\"nav.foods\":\"الأطعمة\",\"nav.terms_and_services\":\"الشروط والخدمات\",\"nav.privacy_policy\":\"سياسة خاصة\",\"nav.offer\":\"عرض\",\"nav.help\":\"تحتاج مساعدة\",\"nav.profile\":\"الملف الشخصي\",\"nav.checkout\":\"الدفع\",\"nav.order_received\":\"طلب الفاتورة\",\"nav.logout\":\"الخروج\",\"nav.login\":\"تسجيل الدخول\",\"nav.order\":\"طلبك\",\"groceriesTitle\":\"تسليم البقالة في {minute} دقيقة\",\"groceriesSubTitle\":\"احصل على الأطعمة الصحية والوجبات الخفيفة التي تقدمها على عتبة دارك طوال اليوم\",\"bakeryTitle\":\"احصل على مخبوزاتك جاهزة\",\"bakerySubTitle\":\"احصل على مخابزك المفضلة وتوصيلها إلى عتبة داركم في أي وقت\",\"makeupTitle\":\"مكياج ذو العلامات التجارية والمستوردة\",\"makeupSubTitle\":\"أسهل وأرخص وسيلة للحصول على الماكياج الخاص بك المستوردة والمستوردة\",\"bagsTitle\":\"الحقائب ذات العلامات التجارية الحصرية\",\"bagsSubTitle\":\"احصل على حقائبك الحصرية والعلامة التجارية التي تم تسليمها إليك في أي وقت من الأوقات\",\"womenClothsTitle\":\"تسوق مصمم الفساتين الخاصة بك\",\"womenClothsSubTitle\":\"على استعداد لارتداء الفساتين المخصصة لك من الانترنت. عجلوا في حين يستمر المخزون.\",\"furnitureTitle\":\"الأثاث الحصري بأسعار رخيصة\",\"furnitureSubTitle\":\"اجعل منزلك منزلاً من خلال مجموعتنا الواسعة من الأثاث الجميل\",\"booksTitle\":\"متجر الكتب الخاصة بك\",\"booksSubTitle\":\"احصل على كتبك المفضلة من مجموعة واسعة من الكتب.\",\"medicineTitle\":\"سلم الدواء الخاص بك\",\"medicineSubTitle\":\"قل وداعا لجميع همومك الصحية معنا\",\"foodsTitle\":\"أنت تأمر نحن تسليم\",\"foodsSubTitle\":\"احصل على طعامك المفضل في أقل من ساعة\",\"alternativeCheckout\":\"بديل الخروج\",\"termAndConditionHelper\":\"من خلال إجراء هذا الشراء فإنك توافق على موقعنا\",\"termAndCondition\":\"الأحكام والشروط.\",\"reqMedicine\":\"طلب الطب\",\"submitRequest\":\"تقديم الطلب\",\"noteHead\":\"ملحوظة\",\"noteDescription\":\"سيتأكد توفر المنتج والسعر عبر الهاتف. رسوم التوصيل داخل المدينة 5 دولارات وخارج المدينة 10 دولارات.\",\"rmMedicineName\":\"اسم الدواء\",\"rmMedicineQuantity\":\"كمية\",\"rmPrescripttionUpload\":\"حمل الوصفة الطبية الخاصة بك\",\"rmUploadText\":\"اسحب / حمل ملفك هنا.\",\"cartTitle\":\"طلبك\",\"discountText\":\"خصم\",\"vatText\":\"مدفوع. ضريبة القيمة المضافة\",\"searchPlaceholder\":\"ابحث عن منتجاتك من هنا\",\"searchButtonText\":\"بحث\",\"mobileSignInButtonText\":\"إنضم إلى\",\"navlinkAccountSettings\":\"إعدادات حسابك\",\"cartItems\":\"العناصر\",\"cartItem\":\"بند\",\"addCartButton\":\"عربة التسوق\",\"addToCartButton\":\"أضف إلى السلة\",\"backBtn\":\"عودة\",\"noProductFound\":\"لا توجد منتجات\",\"specialCode\":\"هل لديك قسيمة؟\",\"couponApplied\":\"القسيمة المطبقة\",\"couponPlaceholder\":\"أدخل رمز القسيمة هنا\",\"sidebarYourOrder\":\"طلب\",\"profilePageTitle\":\"ملفك الشخصي\",\"profileNameField\":\"اسم\",\"profileEmailField\":\"البريد الإلكتروني\",\"profileSaveBtn\":\"حفظ\",\"contactNumberTItle\":\"رقم الاتصال\",\"addContactBtn\":\"إضافة جهة اتصال\",\"deliveryAddresTitle\":\"عنوان التسليم\",\"addAddressBtn\":\"اضف عنوان\",\"addNew\":\"اضف جديد\",\"addCardBtn\":\"إضافة بطاقة\",\"savedCardsId\":\"البطاقات المحفوظة\",\"savedContactId\":\"حفظ جهة الاتصال\",\"savedAddressId\":\"حفظ العنوان\",\"paymentCardTitle\":\"بطاقة المدفوعات\",\"siteFooter\":\"Pickbazar هو منتج من قبل\",\"subTotal\":\"المجموع الفرعي\",\"itemsText\":\"العناصر\",\"shippinFeeText\":\"رسوم الشحن\",\"voucherText\":\"إيصال\",\"voucherApply\":\"تطبيق\",\"couponError\":\"قسيمة غير صالحة\",\"totalText\":\"مجموع\",\"deliverySchedule\":\"جدول التسليم\",\"checkoutDeliveryAddress\":\"عنوان التسليم\",\"contactNumberText\":\"رقم الاتصال\",\"selectPaymentText\":\"خيار الدفع\",\"proceesCheckout\":\"باشرالخروج من الفندق\",\"backHomeBtn\":\"العودة إلى المنزل\",\"orderReceivedText\":\"طلب وارد\",\"orderReceivedSuccess\":\"شكرا لكم. تم استلام طلبك\",\"orderNumberText\":\"رقم الطلب\",\"orderDateText\":\"تاريخ\",\"paymenMethodText\":\"طريقة الدفع او السداد\",\"paymentMethodName\":\"الدفع عن الاستلام\",\"orderDetailsText\":\"تفاصيل الطلب\",\"totalItemText\":\"مجموع البند\",\"orderTimeText\":\"وقت الطلب\",\"deliveryTimeText\":\"موعد التسليم\",\"deliveryLocationText\":\"موقع التسليم\",\"totalAmountText\":\"المبلغ الإجمالي\",\"loadMoreBtn\":\"تحميل المزيد\",\"welcomeBack\":\"مرحبا بعودتك\",\"loginText\":\"تسجيل الدخول باستخدام البريد الإلكتروني وكلمة المرور الخاصة بك\",\"emailAddressPlaceholder\":\"عنوان البريد الإلكتروني أو رقم الاتصال\",\"passwordPlaceholder\":\"كلمة المرور (بحد أدنى {minCharacter} أحرف)\",\"continueBtn\":\"استمر\",\"orText\":\"أو\",\"continueFacebookBtn\":\"تواصل مع Facebook\",\"continueGoogleBtn\":\"تواصل مع جوجل\",\"dontHaveAccount\":\"ليس لديك أي حساب؟\",\"signUpBtnText\":\"سجل\",\"forgotPasswordText\":\"نسيت رقمك السري؟\",\"resetText\":\"إعادة تعيينها\",\"signUpText\":\"بالتسجيل ، أنت توافق على Pickbazar\",\"termsConditionText\":\"الشروط والأحكام\",\"alreadyHaveAccount\":\"هل لديك حساب؟\",\"backToSign\":\"ارجع الى\",\"loginBtnText\":\"تسجيل الدخول\",\"forgotPassText\":\"هل نسيت كلمة المرور\",\"sendResetPassText\":\"سنرسل لك رابطًا لإعادة تعيين كلمة المرور الخاصة بك\",\"resetPasswordBtn\":\"إعادة تعيين كلمات المرور\",\"intlCopyBtnId\":\"نسخ\",\"intlCopySuccessId\":\"نسخ\",\"locationModalheading\":\"حدد موقعك\",\"locationModalSubHeading\":\"يجب عليك تحديد موقعك لغرض تقديم الخدمة\",\"locationModalFooter\":\"توصيل مجاني للطلب الأول\",\"saleText\":\"تخفيض السعر\",\"offText\":\"إيقاف\",\"faqNo1Title\":\"كيف تتصل بخدمة العملاء؟\",\"faqNo1Desc\":\"يتوفر فريق تجربة العملاء لدينا {number1} أيام في الأسبوع ، ونقدم طريقتين للاتصال. البريد الإلكتروني والدردشة. نحن نحاول الرد بسرعة ، لذلك لا تحتاج إلى الانتظار طويلًا للحصول على رد!\",\"faqNo2Title\":\"فشل تثبيت التطبيق ، وكيفية تحديث معلومات النظام؟\",\"faqNo2Desc\":\"يرجى قراءة الوثائق بعناية. لدينا أيضًا بعض برامج الفيديو التعليمية عبر الإنترنت فيما يتعلق بهذه المشكلة. في حالة استمرار المشكلة ، يرجى فتح تذكرة في منتدى الدعم\",\"faqNo3Title\":\"استجابة الموقع يستغرق بعض الوقت ، وكيفية تحسين؟\",\"faqNo3Desc\":\"في البداية ، يرجى التحقق من اتصالك بالإنترنت. لدينا أيضًا بعض برامج الفيديو التعليمية عبر الإنترنت فيما يتعلق بهذه المشكلة. في حالة استمرار المشكلة ، يرجى فتح تذكرة في منتدى الدعم.\",\"faqNo4Title\":\"كيف يمكنني إنشاء حساب؟\",\"faqNo4Desc\":\"إذا كنت تريد فتح حساب للاستخدام الشخصي ، يمكنك القيام بذلك عبر الهاتف أو عبر الإنترنت. يجب أن يستغرق فتح الحساب عبر الإنترنت بضع دقائق فقط.\",\"intlOrderDetailsDiscount\":\"خصم\",\"intlOrderDetailsDelivery\":\"رسوم التوصيل\",\"intlOrderPageTitle\":\"طلبي\",\"intlNoOrderFound\":\"لم يتم العثور على أي طلب\",\"intlOrderPageDetails\":\"تفاصيل الطلب\",\"intlTableColTitle2\":\"كمية\",\"intlTableColTitle3\":\"السعر\",\"intlOrderCardTitleText\":\"طلب\",\"intlOrderCardDateText\":\"تاريخ الطلب\",\"intlOrderCardTotalText\":\"السعر الكلي\",\"joinButton\":\"انضم\",\"ar\":\"عربى\",\"zh\":\"صينى\",\"en\":\"الإنجليزية\",\"de\":\"ألمانية\",\"he\":\"اللغة العبرية\",\"es\":\"الأسبانية\",\"intlTextBy\":\"بواسطة\",\"intlReletedItems\":\"الأصناف ذات الصلة\",\"readFreeSampleButton\":\"قراءة عينة مجانية\",\"bookSectionTitle\":\"عن الكتاب\",\"authorSectionTitle\":\"عن المؤلف\",\"defaultIntlId\":\"يرجى إضافة عنصر نائب من ملف اللغة\",\"noResultFound\":\"عذرا ، لم يتم العثور على نتيجة :(\",\"deliveryText\":\"توصيل\",\"cuisineText\":\"أطباق\",\"minOrderText\":\"لمين\",\"fromText\":\"من عند\",\"loadMoreButton\":\"تحميل المزيد\"}");

/***/ }),

/***/ "./src/site-settings/site-translation/lang/de.json":
/*!*********************************************************!*\
  !*** ./src/site-settings/site-translation/lang/de.json ***!
  \*********************************************************/
/*! exports provided: nav.home, nav.grocery, nav.makeup, nav.bags, nav.clothing, nav.furniture, nav.book, nav.medicine, nav.foods, nav.terms_and_services, nav.privacy_policy, nav.offer, nav.help, nav.profile, nav.checkout, nav.order_received, nav.logout, nav.login, nav.order, groceriesTitle, groceriesSubTitle, bakeryTitle, bakerySubTitle, makeupTitle, makeupSubTitle, bagsTitle, bagsSubTitle, womenClothsTitle, womenClothsSubTitle, furnitureTitle, furnitureSubTitle, booksTitle, booksSubTitle, medicineTitle, medicineSubTitle, foodsTitle, foodsSubTitle, alternativeCheckout, termAndConditionHelper, termAndCondition, reqMedicine, submitRequest, noteHead, noteDescription, rmMedicineName, rmMedicineQuantity, rmPrescripttionUpload, rmUploadText, cartTitle, discountText, vatText, searchPlaceholder, searchButtonText, mobileSignInButtonText, navlinkAccountSettings, cartItems, cartItem, addCartButton, addToCartButton, backBtn, noProductFound, specialCode, couponApplied, couponPlaceholder, sidebarYourOrder, profilePageTitle, profileNameField, profileEmailField, profileSaveBtn, contactNumberTItle, addContactBtn, deliveryAddresTitle, addAddressBtn, addNew, paymentCardTitle, addCardBtn, savedCardsId, savedContactId, savedAddressId, siteFooter, subTotal, itemsText, shippinFeeText, voucherText, voucherApply, couponError, totalText, deliverySchedule, checkoutDeliveryAddress, contactNumberText, selectPaymentText, proceesCheckout, backHomeBtn, orderReceivedText, orderReceivedSuccess, orderNumberText, orderDateText, paymenMethodText, paymentMethodName, orderDetailsText, totalItemText, orderTimeText, deliveryTimeText, deliveryLocationText, totalAmountText, loadMoreBtn, welcomeBack, loginText, emailAddressPlaceholder, passwordPlaceholder, continueBtn, orText, continueFacebookBtn, continueGoogleBtn, dontHaveAccount, signUpBtnText, forgotPasswordText, resetText, signUpText, termsConditionText, alreadyHaveAccount, backToSign, loginBtnText, forgotPassText, sendResetPassText, resetPasswordBtn, intlCopyBtnId, intlCopySuccessId, locationModalheading, locationModalSubHeading, locationModalFooter, saleText, offText, faqNo1Title, faqNo1Desc, faqNo2Title, faqNo2Desc, faqNo3Title, faqNo3Desc, faqNo4Title, faqNo4Desc, intlOrderDetailsDiscount, intlOrderDetailsDelivery, intlOrderPageTitle, intlNoOrderFound, intlOrderPageDetails, intlTableColTitle2, intlTableColTitle3, intlOrderCardTitleText, intlOrderCardDateText, intlOrderCardTotalText, joinButton, ar, zh, en, de, he, es, intlTextBy, intlReletedItems, readFreeSampleButton, bookSectionTitle, authorSectionTitle, defaultIntlId, noResultFound, deliveryText, cuisineText, minOrderText, fromText, loadMoreButton, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"Zuhause\",\"nav.grocery\":\"Lebensmittelgeschäft\",\"nav.makeup\":\"Bilden\",\"nav.bags\":\"Taschen\",\"nav.clothing\":\"Kleidung\",\"nav.furniture\":\"Möbel\",\"nav.book\":\"Buch\",\"nav.medicine\":\"Medizin\",\"nav.foods\":\"Lebensmittel\",\"nav.terms_and_services\":\"Nutzungsbedingungen\",\"nav.privacy_policy\":\"Datenschutz-Bestimmungen\",\"nav.offer\":\"Angebot\",\"nav.help\":\"Brauchen Sie Hilfe\",\"nav.profile\":\"Profil\",\"nav.checkout\":\"Auschecken\",\"nav.order_received\":\"Rechnung bestellen\",\"nav.logout\":\"Ausloggen\",\"nav.login\":\"Anmeldung\",\"nav.order\":\"Deine Bestellung\",\"groceriesTitle\":\"Lebensmittel in {minute} Minuten geliefert\",\"groceriesSubTitle\":\"Holen Sie sich den ganzen Tag über gesunde Lebensmittel und Snacks vor Ihre Haustür\",\"bakeryTitle\":\"Holen Sie sich Ihre Backwaren geliefert\",\"bakerySubTitle\":\"Lassen Sie Ihre Lieblingsbackwaren jederzeit backen und an Ihre Haustür liefern\",\"makeupTitle\":\"Eingebrannte und importierte Make-ups\",\"makeupSubTitle\":\"Der einfachste und günstigste Weg, um Ihre Marken- und Import-Make-ups zu erhalten\",\"bagsTitle\":\"Exklusive Markentaschen\",\"bagsSubTitle\":\"Erhalten Sie Ihre exklusiven & markenbezogenen Taschen in kürzester Zeit zugestellt\",\"womenClothsTitle\":\"Kaufen Sie Ihre Designer-Kleider\",\"womenClothsSubTitle\":\"Konfektionskleider für Sie aus dem Internet zugeschnitten. Beeilen Sie sich, solange der Vorrat reicht.\",\"furnitureTitle\":\"Exklusive Möbel zum günstigen Preis\",\"furnitureSubTitle\":\"Machen Sie aus Ihrem Haus ein Zuhause mit unserer großen Auswahl an schönen Möbeln\",\"booksTitle\":\"Dein eigener Buchladen\",\"booksSubTitle\":\"Holen Sie sich Ihre Lieblingsbücher aus unserer großen Auswahl an Büchern.\",\"medicineTitle\":\"Ihre Medikamente geliefert\",\"medicineSubTitle\":\"Verabschieden Sie sich mit uns von all Ihren Sorgen im Gesundheitswesen\",\"foodsTitle\":\"Sie bestellen, wir liefern\",\"foodsSubTitle\":\"Holen Sie sich Ihre Lieblingsspeisen in weniger als einer Stunde\",\"alternativeCheckout\":\"Checkout-Alternative\",\"termAndConditionHelper\":\"Mit diesem Kauf stimmen Sie unseren zu\",\"termAndCondition\":\"Geschäftsbedingungen.\",\"reqMedicine\":\"Medizin anfordern\",\"submitRequest\":\"Anfrage einreichen\",\"noteHead\":\"Hinweis\",\"noteDescription\":\"Produktverfügbarkeit und Preis werden telefonisch bestätigt. Versandkosten innerhalb der Stadt ${inside} und außerhalb der Stadt  ${outside}.\",\"rmMedicineName\":\"Name der Medizin\",\"rmMedicineQuantity\":\"Menge\",\"rmPrescripttionUpload\":\"Laden Sie Ihr Rezept hoch\",\"rmUploadText\":\"Ziehen Sie Ihre Datei hierher.\",\"cartTitle\":\"Deine Bestellung\",\"discountText\":\"Rabatt\",\"vatText\":\"Inkl. MwSt\",\"searchPlaceholder\":\"Suchen Sie hier nach Ihren Produkten\",\"searchButtonText\":\"Suche\",\"mobileSignInButtonText\":\"Dazu kommen\",\"navlinkAccountSettings\":\"Ihre Kontoeinstellungen\",\"cartItems\":\"Artikel\",\"cartItem\":\"Artikel\",\"addCartButton\":\"Wagen\",\"addToCartButton\":\"In den Warenkorb legen\",\"backBtn\":\"Zurück\",\"noProductFound\":\"Keine Produkte gefunden\",\"specialCode\":\"Hast du einen Gutschein?\",\"couponApplied\":\"Coupon angewendet\",\"couponPlaceholder\":\"Gutscheincode hier eingeben\",\"sidebarYourOrder\":\"Bestellung\",\"profilePageTitle\":\"Dein Profil\",\"profileNameField\":\"Name\",\"profileEmailField\":\"Email\",\"profileSaveBtn\":\"sparen\",\"contactNumberTItle\":\"Kontakt Nummer\",\"addContactBtn\":\"Kontakt hinzufügen\",\"deliveryAddresTitle\":\"Lieferadresse\",\"addAddressBtn\":\"Adresse hinzufügen\",\"addNew\":\"Neue hinzufügen\",\"paymentCardTitle\":\"Zahlungskarte\",\"addCardBtn\":\"Karte hinzufügen\",\"savedCardsId\":\"Gespeicherte Karten\",\"savedContactId\":\"Kontakt speichern\",\"savedAddressId\":\"Adresse speichern\",\"siteFooter\":\"Pickbazar ist ein Produkt von\",\"subTotal\":\"Zwischensumme\",\"itemsText\":\"Artikel\",\"shippinFeeText\":\"Versandkosten\",\"voucherText\":\"Gutschein\",\"voucherApply\":\"Sich bewerben\",\"couponError\":\"Ungültiger Gutschein\",\"totalText\":\"Gesamt\",\"deliverySchedule\":\"Lieferungsplan\",\"checkoutDeliveryAddress\":\"Lieferadresse\",\"contactNumberText\":\"Kontakt Nummer\",\"selectPaymentText\":\"Bezahlmöglichkeit\",\"proceesCheckout\":\"Zur Kasse\",\"backHomeBtn\":\"Zurück nach Hause\",\"orderReceivedText\":\"Bestellung erhalten\",\"orderReceivedSuccess\":\"Vielen Dank. Ihre Bestellung ist eingegangen\",\"orderNumberText\":\"Bestellnummer\",\"orderDateText\":\"Datum\",\"paymenMethodText\":\"Zahlungsmethode\",\"paymentMethodName\":\"Nachnahme\",\"orderDetailsText\":\"Bestelldetails\",\"totalItemText\":\"Gesamter Artikel\",\"orderTimeText\":\"Bestellzeitpunkt\",\"deliveryTimeText\":\"Lieferzeit\",\"deliveryLocationText\":\"Lieferort\",\"totalAmountText\":\"Gesamtmenge\",\"loadMoreBtn\":\"Mehr laden\",\"welcomeBack\":\"Willkommen zurück\",\"loginText\":\"Melden Sie sich mit Ihrer E-Mail-Adresse und Ihrem Passwort an\",\"emailAddressPlaceholder\":\"E-Mail-Adresse oder Kontaktnummer\",\"passwordPlaceholder\":\"Passwort (mindestens {minCharacter} Zeichen)\",\"continueBtn\":\"Fortsetzen\",\"orText\":\"oder\",\"continueFacebookBtn\":\"Weiter mit Facebook\",\"continueGoogleBtn\":\"Fahren Sie mit Google fort\",\"dontHaveAccount\":\"Noch keinen Account?\",\"signUpBtnText\":\"Anmelden\",\"forgotPasswordText\":\"Haben Sie Ihr Passwort vergessen?\",\"resetText\":\"Setzen Sie es zurück\",\"signUpText\":\"Mit Ihrer Anmeldung stimmen Sie Pickbazar's zu\",\"termsConditionText\":\"Nutzungsbedingungen\",\"alreadyHaveAccount\":\"Hast du schon ein Konto?\",\"backToSign\":\"Zurück zu\",\"loginBtnText\":\"Anmeldung\",\"forgotPassText\":\"Passwort vergessen\",\"sendResetPassText\":\"Wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts\",\"resetPasswordBtn\":\"Passwörter zurücksetzen\",\"intlCopyBtnId\":\"Kopieren\",\"intlCopySuccessId\":\"Kopiert\",\"locationModalheading\":\"Wähle deinen Standort\",\"locationModalSubHeading\":\"Sie müssen Ihren Standort für den Lieferservice auswählen\",\"locationModalFooter\":\"Kostenlose Lieferung für {number}Bestellung\",\"saleText\":\"Verkauf\",\"offText\":\"aus\",\"faqNo1Title\":\"Wie kann ich mit dem Kundenservice Kontakt aufnehmen?\",\"faqNo1Desc\":\"Unser Customer Experience Team ist {number1} Tage die Woche für Sie da und wir bieten zwei Möglichkeiten, um mit Ihnen in Kontakt zu treten. E-Mail und Chat. Wir bemühen uns, schnell zu antworten, damit Sie nicht zu lange auf eine Antwort warten müssen !.\",\"faqNo2Title\":\"App-Installation fehlgeschlagen, wie werden Systeminformationen aktualisiert?\",\"faqNo2Desc\":\"Bitte lesen Sie die Dokumentation sorgfältig durch. Wir haben auch einige Online-Video-Tutorials zu diesem Thema. Wenn das Problem weiterhin besteht, öffnen Sie ein Ticket im Support-Forum\",\"faqNo3Title\":\"Website-Antwort braucht Zeit, wie kann man sie verbessern?\",\"faqNo3Desc\":\"Bitte überprüfen Sie zunächst Ihre Internetverbindung. Wir haben auch einige Online-Video-Tutorials zu diesem Thema. Wenn das Problem weiterhin besteht, öffnen Sie ein Ticket im Support-Forum.\",\"faqNo4Title\":\"Wie erstelle ich ein Konto?\",\"faqNo4Desc\":\"Wenn Sie ein Konto für den persönlichen Gebrauch eröffnen möchten, können Sie dies telefonisch oder online tun. Die Online-Kontoeröffnung sollte nur wenige Minuten dauern.\",\"intlOrderDetailsDiscount\":\"Rabatt\",\"intlOrderDetailsDelivery\":\"Zustellgebühr\",\"intlOrderPageTitle\":\"Meine Bestellung\",\"intlNoOrderFound\":\"Keine Bestellung gefunden\",\"intlOrderPageDetails\":\"Bestelldetails\",\"intlTableColTitle2\":\"Menge\",\"intlTableColTitle3\":\"Preis\",\"intlOrderCardTitleText\":\"Bestellung\",\"intlOrderCardDateText\":\"Bestelldatum\",\"intlOrderCardTotalText\":\"Gesamtpreis\",\"joinButton\":\"Beitreten\",\"ar\":\"Arabisch\",\"zh\":\"Chinesisch\",\"en\":\"Englisch\",\"de\":\"Deutsche\",\"he\":\"Hebräisch\",\"es\":\"Spanisch\",\"intlTextBy\":\"durch\",\"intlReletedItems\":\"ähnliche Artikel\",\"readFreeSampleButton\":\"Kostenlose Probe lesen\",\"bookSectionTitle\":\"Über das Buch\",\"authorSectionTitle\":\"Über den Autor\",\"defaultIntlId\":\"Bitte fügen Sie einen Platzhalter aus der Sprachdatei hinzu\",\"noResultFound\":\"Entschuldigung, kein Ergebnis gefunden :(\",\"deliveryText\":\"Lieferung\",\"cuisineText\":\"Küche\",\"minOrderText\":\"Mindestbestellmenge\",\"fromText\":\"Von\",\"loadMoreButton\":\"Mehr laden\"}");

/***/ }),

/***/ "./src/site-settings/site-translation/lang/en.json":
/*!*********************************************************!*\
  !*** ./src/site-settings/site-translation/lang/en.json ***!
  \*********************************************************/
/*! exports provided: nav.home, nav.grocery, nav.grocery-two, nav.bakery, nav.makeup, nav.bags, nav.clothing, nav.furniture, nav.book, nav.medicine, nav.foods, nav.terms_and_services, nav.privacy_policy, nav.offer, nav.help, nav.profile, nav.checkout, nav.order_received, nav.logout, nav.login, nav.order, groceriesTitle, groceriesSubTitle, bakeryTitle, bakerySubTitle, makeupTitle, makeupSubTitle, bagsTitle, bagsSubTitle, womenClothsTitle, womenClothsSubTitle, furnitureTitle, furnitureSubTitle, booksTitle, booksSubTitle, medicineTitle, medicineSubTitle, foodsTitle, foodsSubTitle, alternativeCheckout, termAndConditionHelper, termAndCondition, removeCoupon, reqMedicine, submitRequest, noteHead, noteDescription, rmMedicineName, rmMedicineQuantity, rmPrescripttionUpload, rmUploadText, cartTitle, discountText, vatText, searchPlaceholder, searchButtonText, mobileSignInButtonText, navlinkAccountSettings, cartItems, cartItem, addCartButton, addToCartButton, backBtn, noProductFound, specialCode, couponApplied, couponPlaceholder, sidebarYourOrder, profilePageTitle, profileNameField, profileEmailField, profileSaveBtn, contactNumberTItle, addContactBtn, deliveryAddresTitle, addAddressBtn, addNew, paymentCardTitle, addCardBtn, savedCardsId, savedContactId, savedAddressId, siteFooter, subTotal, itemsText, shippinFeeText, voucherText, voucherApply, couponError, totalText, deliverySchedule, checkoutDeliveryAddress, contactNumberText, selectPaymentText, proceesCheckout, backHomeBtn, orderReceivedText, orderReceivedSuccess, orderNumberText, orderDateText, paymenMethodText, paymentMethodName, orderDetailsText, totalItemText, orderTimeText, deliveryTimeText, deliveryLocationText, totalAmountText, loadMoreBtn, welcomeBack, loginText, emailAddressPlaceholder, passwordPlaceholder, continueBtn, orText, continueFacebookBtn, continueGoogleBtn, dontHaveAccount, signUpBtnText, forgotPasswordText, resetText, signUpText, termsConditionText, alreadyHaveAccount, backToSign, loginBtnText, forgotPassText, sendResetPassText, resetPasswordBtn, intlCopyBtnId, intlCopySuccessId, locationModalheading, locationModalSubHeading, locationModalFooter, saleText, offText, faqNo1Title, faqNo1Desc, faqNo2Title, faqNo2Desc, faqNo3Title, faqNo3Desc, faqNo4Title, faqNo4Desc, intlOrderDetailsDiscount, intlOrderDetailsDelivery, intlOrderPageTitle, intlNoOrderFound, intlOrderPageDetails, intlTableColTitle2, intlTableColTitle3, intlOrderCardTitleText, intlOrderCardDateText, intlOrderCardTotalText, joinButton, ar, zh, en, de, he, es, intlTextBy, intlReletedItems, readFreeSampleButton, bookSectionTitle, authorSectionTitle, defaultIntlId, noResultFound, deliveryText, cuisineText, minOrderText, fromText, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"Home\",\"nav.grocery\":\"Grocery\",\"nav.grocery-two\":\"Grocery Two\",\"nav.bakery\":\"Bakery\",\"nav.makeup\":\"Makeup\",\"nav.bags\":\"Bags\",\"nav.clothing\":\"Clothing\",\"nav.furniture\":\"Furniture\",\"nav.book\":\"Book\",\"nav.medicine\":\"Medicine\",\"nav.foods\":\"Foods\",\"nav.terms_and_services\":\"Terms and Services\",\"nav.privacy_policy\":\"Privacy Policy\",\"nav.offer\":\"Offer\",\"nav.help\":\"Need Help\",\"nav.profile\":\"Profile\",\"nav.checkout\":\"Checkout\",\"nav.order_received\":\"Order Invoice\",\"nav.logout\":\"Logout\",\"nav.login\":\"Login\",\"nav.order\":\"Your Order\",\"groceriesTitle\":\"Groceries Delivered in {minute} Minute\",\"groceriesSubTitle\":\"Get your healthy foods & snacks delivered at your doorsteps all day everyday\",\"bakeryTitle\":\"Get Your Bakery Items Delivered\",\"bakerySubTitle\":\"Get your favorite bakery items baked and delivered to your doorsteps at any time\",\"makeupTitle\":\"Branded & imported makeups\",\"makeupSubTitle\":\"Easiest and cheapest way to get your branded & imported makeups\",\"bagsTitle\":\"Exclusive Branded bags\",\"bagsSubTitle\":\"Get your exclusive & branded bags delivered to you in no time\",\"womenClothsTitle\":\"Shop your designer dresses\",\"womenClothsSubTitle\":\"Ready to wear dresses tailored for you from online. Hurry up while stock lasts.\",\"furnitureTitle\":\"Exclusive furniture on cheap price\",\"furnitureSubTitle\":\"Make your house a home with our wide collection of beautiful furniture\",\"booksTitle\":\"Your own books store\",\"booksSubTitle\":\"Get your favorite books from our wide range of books.\",\"medicineTitle\":\"Your medication, delivered\",\"medicineSubTitle\":\"Say goodbye to all your healthcare worries with  us\",\"foodsTitle\":\"You order we deliver\",\"foodsSubTitle\":\"Get your favorite foods in less than an hour\",\"alternativeCheckout\":\"Checkout Alternative\",\"termAndConditionHelper\":\"By making this purchase you agree to our\",\"termAndCondition\":\"terms and conditions.\",\"removeCoupon\":\"(Remove)\",\"reqMedicine\":\"Request Medicine\",\"submitRequest\":\"Submit Request\",\"noteHead\":\"Note\",\"noteDescription\":\"Product availability & price will confirm over phone. Delivery Charge inside the city ${inside} & outside the city ${outside}.\",\"rmMedicineName\":\"Medicine Name\",\"rmMedicineQuantity\":\"Quantity\",\"rmPrescripttionUpload\":\"Upload your prescription\",\"rmUploadText\":\"Drag/Upload your file here.\",\"cartTitle\":\"Your Order\",\"discountText\":\"Discount\",\"vatText\":\"Incl. VAT\",\"searchPlaceholder\":\"Search your products from here\",\"searchButtonText\":\"Search\",\"mobileSignInButtonText\":\"Join In\",\"navlinkAccountSettings\":\"Your Account Settings\",\"cartItems\":\"Items\",\"cartItem\":\"Item\",\"addCartButton\":\"Cart\",\"addToCartButton\":\"Add to cart\",\"backBtn\":\"Back\",\"noProductFound\":\"No products found\",\"specialCode\":\"Do you have a voucher?\",\"couponApplied\":\"Coupon Applied\",\"couponPlaceholder\":\"Enter voucher code here\",\"sidebarYourOrder\":\"Order\",\"profilePageTitle\":\"Your Profile\",\"profileNameField\":\"Name\",\"profileEmailField\":\"Email\",\"profileSaveBtn\":\"Save\",\"contactNumberTItle\":\"Contact Number\",\"addContactBtn\":\"Add Contact\",\"deliveryAddresTitle\":\"Delivery Address\",\"addAddressBtn\":\"Add Address\",\"addNew\":\"Add New\",\"paymentCardTitle\":\"Payments Card\",\"addCardBtn\":\"Add Card\",\"savedCardsId\":\"Saved Cards\",\"savedContactId\":\"Save Contact\",\"savedAddressId\":\"Save Address\",\"siteFooter\":\"Pickbazar is a product by\",\"subTotal\":\"Sub Total\",\"itemsText\":\"items\",\"shippinFeeText\":\"Shipping Fee\",\"voucherText\":\"Voucher\",\"voucherApply\":\"Apply\",\"couponError\":\"Invalid Coupon\",\"totalText\":\"Total\",\"deliverySchedule\":\"Delivery Schedule\",\"checkoutDeliveryAddress\":\"Delivery Address\",\"contactNumberText\":\"Contact Number\",\"selectPaymentText\":\"Payment Option\",\"proceesCheckout\":\"Proceed to Checkout\",\"backHomeBtn\":\"Back to Home\",\"orderReceivedText\":\"Order Received\",\"orderReceivedSuccess\":\"Thank you. Your order has been received\",\"orderNumberText\":\"Order Number\",\"orderDateText\":\"Date\",\"paymenMethodText\":\"Payment Method\",\"paymentMethodName\":\"Cash on delivery\",\"orderDetailsText\":\"Order Details\",\"totalItemText\":\"Total Item\",\"orderTimeText\":\"Order Time\",\"deliveryTimeText\":\"Delivery Time\",\"deliveryLocationText\":\"Delivery Location\",\"totalAmountText\":\"Total Amount\",\"loadMoreBtn\":\"Load More\",\"welcomeBack\":\"Welcome Back\",\"loginText\":\"Login with your email & password\",\"emailAddressPlaceholder\":\"demo@demo.com\",\"passwordPlaceholder\":\"demo\",\"continueBtn\":\"Continue\",\"orText\":\"or\",\"continueFacebookBtn\":\"Continue with Facebook\",\"continueGoogleBtn\":\"Continue with Google\",\"dontHaveAccount\":\"Don't have any account?\",\"signUpBtnText\":\"Sign Up\",\"forgotPasswordText\":\"Forgot your password?\",\"resetText\":\"Reset It\",\"signUpText\":\"By signing up, you agree to Pickbazar's\",\"termsConditionText\":\"Terms & Condtion\",\"alreadyHaveAccount\":\"Already have an account?\",\"backToSign\":\"Back to\",\"loginBtnText\":\"Login\",\"forgotPassText\":\"Forgot Password\",\"sendResetPassText\":\"We'll send you a link to reset your password\",\"resetPasswordBtn\":\"Reset Password\",\"intlCopyBtnId\":\"Copy\",\"intlCopySuccessId\":\"Copied\",\"locationModalheading\":\"Select Your Location\",\"locationModalSubHeading\":\"You have to select your location for deliver service perpous\",\"locationModalFooter\":\"Free Delivery For 1st Order\",\"saleText\":\"Sale\",\"offText\":\"Off\",\"faqNo1Title\":\"How to contact with Customer Service?\",\"faqNo1Desc\":\"Our Customer Experience Team is available {number1} days a week and we offer {number2} ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.\",\"faqNo2Title\":\"App installation failed, how to update system information?\",\"faqNo2Desc\":\"Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum\",\"faqNo3Title\":\"Website reponse taking time, how to improve?\",\"faqNo3Desc\":\"At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .\",\"faqNo4Title\":\"How do I create a account?\",\"faqNo4Desc\":\"If you want to open an account for personal use you can do it over the phone or online. Opening an account online should only take a few minutes.\",\"intlOrderDetailsDiscount\":\"Discount\",\"intlOrderDetailsDelivery\":\"Delivery Fee\",\"intlOrderPageTitle\":\"My Order\",\"intlNoOrderFound\":\"No order found\",\"intlOrderPageDetails\":\"Order Details\",\"intlTableColTitle2\":\"Quantity\",\"intlTableColTitle3\":\"Price\",\"intlOrderCardTitleText\":\"Order\",\"intlOrderCardDateText\":\"Order Date\",\"intlOrderCardTotalText\":\"Total Price\",\"joinButton\":\"Join\",\"ar\":\"Arabic\",\"zh\":\"Chinese\",\"en\":\"English\",\"de\":\"German\",\"he\":\"Hebrew\",\"es\":\"Spanish\",\"intlTextBy\":\"by\",\"intlReletedItems\":\"Related Items\",\"readFreeSampleButton\":\"Read Free Sample\",\"bookSectionTitle\":\"About The Book\",\"authorSectionTitle\":\"About The Author\",\"defaultIntlId\":\"Please add a Placeholder from language file\",\"noResultFound\":\"Sorry, No result found :(\",\"deliveryText\":\"Delivery\",\"cuisineText\":\"Cuisine\",\"minOrderText\":\"Min Order\",\"fromText\":\"From\"}");

/***/ }),

/***/ "./src/site-settings/site-translation/lang/es.json":
/*!*********************************************************!*\
  !*** ./src/site-settings/site-translation/lang/es.json ***!
  \*********************************************************/
/*! exports provided: nav.home, nav.grocery, nav.makeup, nav.bags, nav.clothing, nav.furniture, nav.book, nav.medicine, nav.foods, nav.terms_and_services, nav.privacy_policy, nav.offer, nav.help, nav.profile, nav.checkout, nav.order_received, nav.logout, nav.login, nav.order, groceriesTitle, groceriesSubTitle, bakeryTitle, bakerySubTitle, makeupTitle, makeupSubTitle, bagsTitle, bagsSubTitle, womenClothsTitle, womenClothsSubTitle, furnitureTitle, furnitureSubTitle, booksTitle, booksSubTitle, medicineTitle, medicineSubTitle, foodsTitle, foodsSubTitle, alternativeCheckout, termAndConditionHelper, termAndCondition, reqMedicine, submitRequest, noteHead, noteDescription, rmMedicineName, rmMedicineQuantity, rmPrescripttionUpload, rmUploadText, cartTitle, discountText, vatText, searchPlaceholder, searchButtonText, mobileSignInButtonText, navlinkAccountSettings, cartItems, cartItem, addCartButton, addToCartButton, backBtn, noProductFound, specialCode, couponApplied, couponPlaceholder, sidebarYourOrder, profilePageTitle, profileNameField, profileEmailField, profileSaveBtn, contactNumberTItle, addContactBtn, deliveryAddresTitle, addAddressBtn, addNew, paymentCardTitle, addCardBtn, savedCardsId, savedContactId, savedAddressId, siteFooter, itemsText, shippinFeeText, voucherText, voucherApply, couponError, deliverySchedule, checkoutDeliveryAddress, contactNumberText, selectPaymentText, proceesCheckout, backHomeBtn, orderReceivedText, orderReceivedSuccess, orderNumberText, orderDateText, paymenMethodText, paymentMethodName, orderDetailsText, totalItemText, orderTimeText, deliveryTimeText, deliveryLocationText, totalAmountText, loadMoreBtn, welcomeBack, loginText, emailAddressPlaceholder, passwordPlaceholder, continueBtn, orText, continueFacebookBtn, continueGoogleBtn, dontHaveAccount, signUpBtnText, forgotPasswordText, resetText, signUpText, termsConditionText, alreadyHaveAccount, backToSign, loginBtnText, forgotPassText, sendResetPassText, resetPasswordBtn, intlCopyBtnId, intlCopySuccessId, locationModalheading, locationModalSubHeading, locationModalFooter, saleText, offText, faqNo1Title, faqNo1Desc, faqNo2Title, faqNo2Desc, faqNo3Title, faqNo3Desc, faqNo4Title, faqNo4Desc, totalText, subTotal, intlOrderDetailsDiscount, intlOrderDetailsDelivery, intlOrderPageTitle, intlNoOrderFound, intlOrderPageDetails, intlTableColTitle2, intlTableColTitle3, intlOrderCardTitleText, intlOrderCardDateText, intlOrderCardTotalText, joinButton, ar, zh, en, de, he, es, intlTextBy, intlReletedItems, readFreeSampleButton, bookSectionTitle, authorSectionTitle, defaultIntlId, noResultFound, deliveryText, cuisineText, minOrderText, fromText, loadMoreButton, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"Hogar\",\"nav.grocery\":\"Tienda de comestibles\",\"nav.makeup\":\"Maquillaje\",\"nav.bags\":\"Pantalones\",\"nav.clothing\":\"Ropa\",\"nav.furniture\":\"Mueble\",\"nav.book\":\"Libro\",\"nav.medicine\":\"Medicamento\",\"nav.foods\":\"Alimentos\",\"nav.terms_and_services\":\"Términos y servicios\",\"nav.privacy_policy\":\"Política de privacidad\",\"nav.offer\":\"Oferta\",\"nav.help\":\"Necesitas ayuda\",\"nav.profile\":\"Perfil\",\"nav.checkout\":\"Revisa\",\"nav.order_received\":\"Factura de pedido\",\"nav.logout\":\"Cerrar sesión\",\"nav.login\":\"Iniciar sesión\",\"nav.order\":\"Su pedido\",\"groceriesTitle\":\"Abarrotes entregados en {minute} minutos\",\"groceriesSubTitle\":\"Obtenga sus alimentos y refrigerios saludables entregados en su puerta todo el día todos los días\",\"bakeryTitle\":\"Reciba sus artículos de panadería\",\"bakerySubTitle\":\"Obtenga sus artículos de panadería favoritos horneados y entregados en su puerta en cualquier momento\",\"makeupTitle\":\"Maquillajes de marca e importados\",\"makeupSubTitle\":\"La forma más fácil y económica de obtener sus maquillajes de marca e importados\",\"bagsTitle\":\"Bolsos exclusivos de marca\",\"bagsSubTitle\":\"Obtenga sus bolsos exclusivos y de marca entregados en poco tiempo\",\"womenClothsTitle\":\"Compra tus vestidos de diseñador\",\"womenClothsSubTitle\":\"Listo para usar vestidos a medida para usted en línea. Date prisa mientras duren las existencias.\",\"furnitureTitle\":\"Muebles exclusivos a precio económico\",\"furnitureSubTitle\":\"Haga de su casa un hogar con nuestra amplia colección de hermosos muebles.\",\"booksTitle\":\"Tu propia tienda de libros\",\"booksSubTitle\":\"Obtenga sus libros favoritos de nuestra amplia gama de libros.\",\"medicineTitle\":\"Su medicamento, entregado\",\"medicineSubTitle\":\"Diga adiós a todas sus preocupaciones de atención médica con nosotros.\",\"foodsTitle\":\"Tu orden lo entregamos\",\"foodsSubTitle\":\"Obtenga sus comidas favoritas en menos de una hora\",\"alternativeCheckout\":\"Alternativa de pago\",\"termAndConditionHelper\":\"Al realizar esta compra, usted acepta nuestro\",\"termAndCondition\":\"términos y Condiciones.\",\"reqMedicine\":\"Solicitar medicina\",\"submitRequest\":\"Enviar peticion\",\"noteHead\":\"Nota\",\"noteDescription\":\"La disponibilidad del producto y el precio se confirmarán por teléfono. Cargo por entrega dentro de la ciudad $ 5 y fuera de la ciudad $ 10.\",\"rmMedicineName\":\"Nombre de medicina\",\"rmMedicineQuantity\":\"Cantidad\",\"rmPrescripttionUpload\":\"Sube tu receta\",\"rmUploadText\":\"Arrastra / sube tu archivo aquí.\",\"cartTitle\":\"Su pedido\",\"discountText\":\"Descuento\",\"vatText\":\"Incl. IVA\",\"searchPlaceholder\":\"Busque sus productos desde aquí\",\"searchButtonText\":\"Buscar\",\"mobileSignInButtonText\":\"Participar\",\"navlinkAccountSettings\":\"La configuración de su cuenta\",\"cartItems\":\"artículos\",\"cartItem\":\"articulo\",\"addCartButton\":\"Carro\",\"addToCartButton\":\"Añadir al carrito\",\"backBtn\":\"atrás\",\"noProductFound\":\"No se encontraron productos.\",\"specialCode\":\"¿Tienes un cupón?\",\"couponApplied\":\"Cupón Aplicado\",\"couponPlaceholder\":\"Ingrese el código de cupón aquí\",\"sidebarYourOrder\":\"Orden\",\"profilePageTitle\":\"Tu perfil\",\"profileNameField\":\"Nombre\",\"profileEmailField\":\"Email\",\"profileSaveBtn\":\"Salvar\",\"contactNumberTItle\":\"Número de contacto\",\"addContactBtn\":\"Agregar contacto\",\"deliveryAddresTitle\":\"Dirección de entrega\",\"addAddressBtn\":\"Añadir dirección\",\"addNew\":\"Agregar nuevo\",\"paymentCardTitle\":\"Tarjeta de pagos\",\"addCardBtn\":\"Agregar tarjeta\",\"savedCardsId\":\"Tarjetas guardadas\",\"savedContactId\":\"Guardar contacto\",\"savedAddressId\":\"Guardar dirección\",\"siteFooter\":\"Pickbazar es un producto de\",\"itemsText\":\"artículos\",\"shippinFeeText\":\"Gastos de envío\",\"voucherText\":\"Vale\",\"voucherApply\":\"Aplicar\",\"couponError\":\"Cupón Inválido\",\"deliverySchedule\":\"Calendario de entregas\",\"checkoutDeliveryAddress\":\"Dirección de entrega\",\"contactNumberText\":\"Número de contacto\",\"selectPaymentText\":\"Opcion de pago\",\"proceesCheckout\":\"Pasar por la caja\",\"backHomeBtn\":\"De vuelta a casa\",\"orderReceivedText\":\"orden recibida\",\"orderReceivedSuccess\":\"Gracias. Tu orden ha sido recibida\",\"orderNumberText\":\"Número de orden\",\"orderDateText\":\"Fecha\",\"paymenMethodText\":\"Método de pago\",\"paymentMethodName\":\"Contra reembolso\",\"orderDetailsText\":\"Detalles del pedido\",\"totalItemText\":\"Artículo total\",\"orderTimeText\":\"Tiempo de la orden\",\"deliveryTimeText\":\"El tiempo de entrega\",\"deliveryLocationText\":\"Lugar de entrega\",\"totalAmountText\":\"Cantidad total\",\"loadMoreBtn\":\"Carga más\",\"welcomeBack\":\"Dar una buena acogida\",\"loginText\":\"Inicie sesión con su correo electrónico y contraseña\",\"emailAddressPlaceholder\":\"Dirección de correo electrónico o número de contacto\",\"passwordPlaceholder\":\"Contraseña (mínimo {minCharacter} caracteres)\",\"continueBtn\":\"Continuar\",\"orText\":\"o\",\"continueFacebookBtn\":\"Continuar con Facebook\",\"continueGoogleBtn\":\"Continuar con Google\",\"dontHaveAccount\":\"¿No tienes cuenta?\",\"signUpBtnText\":\"Regístrate\",\"forgotPasswordText\":\"¿Olvidaste tu contraseña?\",\"resetText\":\"Reinicialo\",\"signUpText\":\"Al registrarte, aceptas Pickbazar's\",\"termsConditionText\":\"Términos y condiciones\",\"alreadyHaveAccount\":\"¿Ya tienes una cuenta?\",\"backToSign\":\"De regreso\",\"loginBtnText\":\"Iniciar sesión\",\"forgotPassText\":\"Se te olvidó tu contraseña\",\"sendResetPassText\":\"Le enviaremos un enlace para restablecer su contraseña\",\"resetPasswordBtn\":\"Restablecer contraseñas\",\"intlCopyBtnId\":\"Copiar\",\"intlCopySuccessId\":\"Copiado\",\"locationModalheading\":\"Selecciona tu ubicación\",\"locationModalSubHeading\":\"Debe seleccionar su ubicación para el servicio de entrega\",\"locationModalFooter\":\"Entrega gratuita para el primer pedido\",\"saleText\":\"Rebaja\",\"offText\":\"Apagada\",\"faqNo1Title\":\"¿Cómo contactar con el Servicio al Cliente?\",\"faqNo1Desc\":\"Nuestro equipo de experiencia del cliente está disponible los {number1} días de la semana y ofrecemos {number2} formas de ponerse en contacto: correo electrónico y chat. Intentamos responder rápidamente, por lo que no debe esperar demasiado para recibir una respuesta.\",\"faqNo2Title\":\"La instalación de la aplicación falló, ¿cómo actualizar la información del sistema?\",\"faqNo2Desc\":\"Por favor lea la documentación cuidadosamente. También tenemos algunos videos tutoriales en línea sobre este tema. Si el problema persiste, abra un ticket en el foro de soporte\",\"faqNo3Title\":\"Respuesta del sitio web tomando tiempo, ¿cómo mejorar?\",\"faqNo3Desc\":\"Al principio, verifique su conexión a internet. También tenemos algunos videos tutoriales en línea sobre este tema. Si el problema persiste, abra un ticket en el foro de soporte.\",\"faqNo4Title\":\"¿Cómo creo una cuenta?\",\"faqNo4Desc\":\"Si desea abrir una cuenta para uso personal, puede hacerlo por teléfono o en línea. Abrir una cuenta en línea solo debería tomar unos minutos.\",\"totalText\":\"Total\",\"subTotal\":\"Subtotal\",\"intlOrderDetailsDiscount\":\"Descuento\",\"intlOrderDetailsDelivery\":\"Gastos de envío\",\"intlOrderPageTitle\":\"Mi pedido\",\"intlNoOrderFound\":\"No se ha encontrado ningún pedido.\",\"intlOrderPageDetails\":\"Detalles del pedido\",\"intlTableColTitle2\":\"Cantidad\",\"intlTableColTitle3\":\"Precio\",\"intlOrderCardTitleText\":\"Orden\",\"intlOrderCardDateText\":\"Fecha de orden\",\"intlOrderCardTotalText\":\"Precio total\",\"joinButton\":\"Unirse\",\"ar\":\"Arábica\",\"zh\":\"Chino\",\"en\":\"Inglés\",\"de\":\"Alemán\",\"he\":\"Hebreo\",\"es\":\"Español\",\"intlTextBy\":\"por\",\"intlReletedItems\":\"Artículos relacionados\",\"readFreeSampleButton\":\"Leer muestra gratis\",\"bookSectionTitle\":\"Acerca del libro\",\"authorSectionTitle\":\"Sobre el autor\",\"defaultIntlId\":\"Agregue un marcador de posición del archivo de idioma\",\"noResultFound\":\"Lo sentimos, no se encontraron resultados :(\",\"deliveryText\":\"Entrega\",\"cuisineText\":\"Cocina\",\"minOrderText\":\"La orden mínima\",\"fromText\":\"Desde\",\"loadMoreButton\":\"Carga más\"}");

/***/ }),

/***/ "./src/site-settings/site-translation/lang/he.json":
/*!*********************************************************!*\
  !*** ./src/site-settings/site-translation/lang/he.json ***!
  \*********************************************************/
/*! exports provided: nav.home, nav.grocery, nav.makeup, nav.bags, nav.clothing, nav.furniture, nav.book, nav.medicine, nav.foods, nav.terms_and_services, nav.privacy_policy, nav.offer, nav.help, nav.profile, nav.checkout, nav.order_received, nav.logout, nav.login, nav.order, groceriesTitle, groceriesSubTitle, bakeryTitle, bakerySubTitle, makeupTitle, makeupSubTitle, bagsTitle, bagsSubTitle, womenClothsTitle, womenClothsSubTitle, furnitureTitle, furnitureSubTitle, booksTitle, booksSubTitle, medicineTitle, medicineSubTitle, foodsTitle, foodsSubTitle, alternativeCheckout, termAndConditionHelper, termAndCondition, reqMedicine, submitRequest, noteHead, noteDescription, rmMedicineName, rmMedicineQuantity, rmPrescripttionUpload, rmUploadText, cartTitle, discountText, vatText, searchPlaceholder, searchButtonText, mobileSignInButtonText, navlinkAccountSettings, cartItems, cartItem, addCartButton, addToCartButton, backBtn, noProductFound, specialCode, couponApplied, couponPlaceholder, sidebarYourOrder, profilePageTitle, profileNameField, profileEmailField, profileSaveBtn, contactNumberTItle, addContactBtn, deliveryAddresTitle, addAddressBtn, addNew, addCardBtn, savedCardsId, savedContactId, savedAddressId, paymentCardTitle, siteFooter, subTotal, itemsText, shippinFeeText, voucherText, voucherApply, couponError, deliverySchedule, checkoutDeliveryAddress, contactNumberText, selectPaymentText, proceesCheckout, backHomeBtn, orderReceivedText, orderReceivedSuccess, orderNumberText, orderDateText, paymenMethodText, paymentMethodName, orderDetailsText, totalItemText, orderTimeText, deliveryTimeText, deliveryLocationText, totalAmountText, loadMoreBtn, welcomeBack, loginText, emailAddressPlaceholder, passwordPlaceholder, continueBtn, orText, continueFacebookBtn, continueGoogleBtn, dontHaveAccount, signUpBtnText, forgotPasswordText, resetText, signUpText, termsConditionText, alreadyHaveAccount, backToSign, loginBtnText, forgotPassText, sendResetPassText, resetPasswordBtn, intlCopyBtnId, intlCopySuccessId, locationModalheading, locationModalSubHeading, locationModalFooter, saleText, offText, faqNo1Title, faqNo1Desc, faqNo2Title, faqNo2Desc, faqNo3Title, faqNo3Desc, faqNo4Title, faqNo4Desc, totalText, intlOrderDetailsDiscount, intlOrderDetailsDelivery, intlOrderPageTitle, intlNoOrderFound, intlOrderPageDetails, intlTableColTitle2, intlTableColTitle3, intlOrderCardTitleText, intlOrderCardDateText, intlOrderCardTotalText, joinButton, ar, zh, en, de, he, es, intlTextBy, intlReletedItems, readFreeSampleButton, bookSectionTitle, authorSectionTitle, defaultIntlId, noResultFound, deliveryText, cuisineText, minOrderText, fromText, loadMoreButton, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"בית\",\"nav.grocery\":\"מכולת\",\"nav.makeup\":\"להשלים\",\"nav.bags\":\"תיקים\",\"nav.clothing\":\"ביגוד\",\"nav.furniture\":\"ריהוט\",\"nav.book\":\"ספר\",\"nav.medicine\":\"תרופה\",\"nav.foods\":\"אוכלים\",\"nav.terms_and_services\":\"תנאים ושירותים\",\"nav.privacy_policy\":\"מדיניות פרטיות\",\"nav.offer\":\"הצעה\",\"nav.help\":\"זקוק לעזרה\",\"nav.profile\":\"פרופיל\",\"nav.checkout\":\"לבדוק\",\"nav.order_received\":\"הזמנת חשבונית\",\"nav.logout\":\"להתנתק\",\"nav.login\":\"התחברות\",\"nav.order\":\"ההזמנה שלך\",\"groceriesTitle\":\"מצרכים הובאו תוך {minute} דקות\",\"groceriesSubTitle\":\"קבל את האוכל והחטיפים הבריאים שלך המובאים בפתח שלך כל היום בכל יום\",\"bakeryTitle\":\"קבל את פריטי המאפייה שלך\",\"bakerySubTitle\":\"קבלו את פריטי המאפייה האהובים עליכם ונשלחו עד סף ביתכם בכל עת\",\"makeupTitle\":\"איפור ממותג ומיובא\",\"makeupSubTitle\":\"הדרך הקלה והזולה ביותר להשיג איפור ממותג ומיובא שלך\",\"bagsTitle\":\"תיקים ממותגים בלעדיים\",\"bagsSubTitle\":\"קבל את התיקים הבלעדיים והמותגיים שלך שנשלחו אליך תוך זמן קצר\",\"womenClothsTitle\":\"קנו את שמלות המעצבים שלך\",\"womenClothsSubTitle\":\"מוכנים ללבוש שמלות המותאמות עבורך מהאינטרנט. מהרו כשמלאי נמשך.\",\"furnitureTitle\":\"ריהוט בלעדי במחיר זול\",\"furnitureSubTitle\":\"הפוך את ביתך לבית עם אוסף הרהיטים היפה שלנו\",\"booksTitle\":\"חנות ספרים משלך\",\"booksSubTitle\":\"השג את הספרים המועדפים עליך ממגוון הספרים הרחב שלנו.\",\"medicineTitle\":\"התרופות שלך, מועברות\",\"medicineSubTitle\":\"להיפרד מכל הדאגות שלך בתחום הבריאות איתנו\",\"foodsTitle\":\"אתה מזמין שאנו מספקים\",\"foodsSubTitle\":\"השג את המזונות האהובים עליך תוך פחות משעה\",\"alternativeCheckout\":\"אלטרנטיבה לקופה\",\"termAndConditionHelper\":\"על ידי ביצוע רכישה זו אתה מסכים לשלנו\",\"termAndCondition\":\"תנאים.\",\"reqMedicine\":\"בקש רפואה\",\"submitRequest\":\"שלח בקשה\",\"noteHead\":\"פתק\",\"noteDescription\":\"זמינות המוצר ומחירם יאשרו בטלפון. תשלום משלוח בתוך העיר 5 $ ומחוצה לה 10 $.\",\"rmMedicineName\":\"שם הרפואה\",\"rmMedicineQuantity\":\"כמות\",\"rmPrescripttionUpload\":\"העלה את המרשם שלך\",\"rmUploadText\":\"גרור / העלה את הקובץ שלך לכאן.\",\"cartTitle\":\"ההזמנה שלך\",\"discountText\":\"הנחה\",\"vatText\":\"כולל מע\\\"מ\",\"searchPlaceholder\":\"חפש במוצרים שלך מכאן\",\"searchButtonText\":\"לחפש\",\"mobileSignInButtonText\":\"להצטרף\",\"navlinkAccountSettings\":\"הגדרות החשבון שלך\",\"cartItems\":\"פריטים\",\"cartItem\":\"פריט\",\"addCartButton\":\"עגלה\",\"addToCartButton\":\"הוסף לעגלה\",\"backBtn\":\"חזור\",\"noProductFound\":\"לא נמצאו מוצרים\",\"specialCode\":\"יש לך שובר?\",\"couponApplied\":\"קופון מיושם\",\"couponPlaceholder\":\"הזן כאן קוד שובר\",\"sidebarYourOrder\":\"להזמין\",\"profilePageTitle\":\"הפרופיל שלך\",\"profileNameField\":\"שם\",\"profileEmailField\":\"דוא\\\"ל\",\"profileSaveBtn\":\"לשמור\",\"contactNumberTItle\":\"מספר איש קשר\",\"addContactBtn\":\"הוסף איש קשר\",\"deliveryAddresTitle\":\"כתובת למשלוח\",\"addAddressBtn\":\"הוסף כתובת\",\"addNew\":\"הוסף חדש\",\"addCardBtn\":\"הוסף כרטיס\",\"savedCardsId\":\"כרטיסים שמורים\",\"savedContactId\":\"שמור איש קשר\",\"savedAddressId\":\"שמור כתובת\",\"paymentCardTitle\":\"כרטיס תשלומים\",\"siteFooter\":\"Pickbazar הוא מוצר מאת\",\"subTotal\":\"תת סה\\\"כ\",\"itemsText\":\"פריטים\",\"shippinFeeText\":\"דמי משלוח\",\"voucherText\":\"שובר\",\"voucherApply\":\"להגיש מועמדות\",\"couponError\":\"קופון לא חוקי\",\"deliverySchedule\":\"לוח הזמנים של המשלוח\",\"checkoutDeliveryAddress\":\"כתובת למשלוח\",\"contactNumberText\":\"מספר איש קשר\",\"selectPaymentText\":\"אפשרות תשלום\",\"proceesCheckout\":\"התקדם לנקודת הביקורת\",\"backHomeBtn\":\"בחזרה לבית\",\"orderReceivedText\":\"ההזמנה התקבלה\",\"orderReceivedSuccess\":\"תודה. ההזמנה שלך התקבלה\",\"orderNumberText\":\"מספר הזמנה\",\"orderDateText\":\"תאריך\",\"paymenMethodText\":\"אמצעי תשלום\",\"paymentMethodName\":\"מזומן במשלוח\",\"orderDetailsText\":\"פרטי הזמנה\",\"totalItemText\":\"סה\\\"כ פריט\",\"orderTimeText\":\"הזמן הזמן\",\"deliveryTimeText\":\"זמן משלוח\",\"deliveryLocationText\":\"מיקום המשלוח\",\"totalAmountText\":\"הכמות הכוללת\",\"loadMoreBtn\":\"טען עוד\",\"welcomeBack\":\"ברוך שובך\",\"loginText\":\"התחבר באמצעות הדוא\\\"ל והסיסמה שלך\",\"emailAddressPlaceholder\":\"כתובת דוא\\\"ל או מספר איש קשר\",\"passwordPlaceholder\":\"סיסמא (מינימום {minCharacter} תווים)\",\"continueBtn\":\"המשך\",\"orText\":\"או\",\"continueFacebookBtn\":\"המשך עם פייסבוק\",\"continueGoogleBtn\":\"המשך עם גוגל\",\"dontHaveAccount\":\"אין לך חשבון?\",\"signUpBtnText\":\"הירשם\",\"forgotPasswordText\":\"שכחת ססמה?\",\"resetText\":\"אפס אותו\",\"signUpText\":\"על ידי ההרשמה, אתה מסכים לפיקבזר\",\"termsConditionText\":\"תנאים והגבלות\",\"alreadyHaveAccount\":\"כבר יש לך חשבון?\",\"backToSign\":\"בחזרה ל\",\"loginBtnText\":\"התחברות\",\"forgotPassText\":\"שכחת את הסיסמא\",\"sendResetPassText\":\"אנו נשלח לך קישור לאיפוס הסיסמה שלך\",\"resetPasswordBtn\":\"אפס סיסמאות\",\"intlCopyBtnId\":\"עותק\",\"intlCopySuccessId\":\"הועתק\",\"locationModalheading\":\"בחר את המיקום שלךSelecciona tu ubicación\",\"locationModalSubHeading\":\"עליכם לבחור את המיקום שלכם לצורך שירות משלוחים\",\"locationModalFooter\":\"משלוח חינם להזמנה ראשונה\",\"saleText\":\"מכירה\",\"offText\":\"כבוי\",\"faqNo1Title\":\"כיצד ליצור קשר עם שירות לקוחות?\",\"faqNo1Desc\":\"צוות חוויית הלקוחות שלנו זמין {number1} ימים בשבוע ואנחנו מציעים {number2} דרכים ליצור קשר. דואר אלקטרוני וצ'אט. אנו מנסים לענות במהירות, כך שאתה לא צריך לחכות יותר מדי לתגובה !.\",\"faqNo2Title\":\"התקנת האפליקציה נכשלה, כיצד לעדכן את פרטי המערכת?\",\"faqNo2Desc\":\"אנא קרא את התיעוד בעיון. יש לנו גם כמה הדרכות וידאו מקוונות בנושא זה. אם הבעיה נותרה, אנא פתח כרטיס בפורום התמיכה\",\"faqNo3Title\":\"תגובת אתר לוקח זמן, כיצד לשפר?\",\"faqNo3Desc\":\"בהתחלה, אנא בדוק את חיבור האינטרנט שלך. יש לנו גם כמה הדרכות וידאו מקוונות בנושא זה. אם הבעיה נותרה, אנא פתח כרטיס בפורום התמיכה.\",\"faqNo4Title\":\"כיצד אוכל ליצור חשבון?\",\"faqNo4Desc\":\"אם אתה רוצה לפתוח חשבון לשימוש אישי אתה יכול לעשות זאת בטלפון או באינטרנט. פתיחת חשבון באופן מקוון אמורה לארוך מספר דקות בלבד.\",\"totalText\":\"סך הכל\",\"intlOrderDetailsDiscount\":\"הנחה\",\"intlOrderDetailsDelivery\":\"דמי משלוח\",\"intlOrderPageTitle\":\"ההזמנה שלי\",\"intlNoOrderFound\":\"לא נמצאה הזמנה\",\"intlOrderPageDetails\":\"פרטי הזמנה\",\"intlTableColTitle2\":\"כמות\",\"intlTableColTitle3\":\"מחיר\",\"intlOrderCardTitleText\":\"להזמין\",\"intlOrderCardDateText\":\"תאריך הזמנה\",\"intlOrderCardTotalText\":\"מחיר סופי\",\"joinButton\":\"הצטרף\",\"ar\":\"ערבית\",\"zh\":\"סינית\",\"en\":\"אנגלית\",\"de\":\"גרמנית\",\"he\":\"עברית\",\"es\":\"ספרדית\",\"intlTextBy\":\"על ידי\",\"intlReletedItems\":\"חפצים קשורים\",\"readFreeSampleButton\":\"קרא דוגמא בחינם\",\"bookSectionTitle\":\"לגבי הספר\",\"authorSectionTitle\":\"על הסופר\",\"defaultIntlId\":\"בבקשה הוסף מציין מיקום מקובץ השפה\",\"noResultFound\":\"מצטערים, לא נמצאה תוצאה :(\",\"deliveryText\":\"מסירה\",\"cuisineText\":\"מטבח\",\"minOrderText\":\"הזמנה מינמלית\",\"fromText\":\"מ\",\"loadMoreButton\":\"טען עוד\"}");

/***/ }),

/***/ "./src/site-settings/site-translation/lang/zh.json":
/*!*********************************************************!*\
  !*** ./src/site-settings/site-translation/lang/zh.json ***!
  \*********************************************************/
/*! exports provided: nav.home, nav.grocery, nav.makeup, nav.bags, nav.clothing, nav.furniture, nav.book, nav.medicine, nav.foods, nav.terms_and_services, nav.privacy_policy, nav.offer, nav.help, nav.profile, nav.checkout, nav.order_received, nav.logout, nav.login, nav.order, groceriesTitle, groceriesSubTitle, bakeryTitle, bakerySubTitle, makeupTitle, makeupSubTitle, bagsTitle, bagsSubTitle, womenClothsTitle, womenClothsSubTitle, furnitureTitle, furnitureSubTitle, booksTitle, booksSubTitle, medicineTitle, medicineSubTitle, foodsTitle, foodsSubTitle, alternativeCheckout, termAndConditionHelper, termAndCondition, reqMedicine, submitRequest, noteHead, noteDescription, rmMedicineName, rmMedicineQuantity, rmPrescripttionUpload, rmUploadText, cartTitle, discountText, vatText, searchPlaceholder, searchButtonText, mobileSignInButtonText, navlinkAccountSettings, cartItems, cartItem, addCartButton, addToCartButton, backBtn, noProductFound, specialCode, couponApplied, couponPlaceholder, sidebarYourOrder, profilePageTitle, profileNameField, profileEmailField, profileSaveBtn, contactNumberTItle, addContactBtn, deliveryAddresTitle, addAddressBtn, addNew, paymentCardTitle, addCardBtn, savedCardsId, savedContactId, savedAddressId, siteFooter, subTotal, itemsText, shippinFeeText, voucherText, voucherApply, couponError, totalText, deliverySchedule, checkoutDeliveryAddress, contactNumberText, selectPaymentText, proceesCheckout, backHomeBtn, orderReceivedText, orderReceivedSuccess, orderNumberText, orderDateText, paymenMethodText, paymentMethodName, orderDetailsText, totalItemText, orderTimeText, deliveryTimeText, deliveryLocationText, totalAmountText, loadMoreBtn, welcomeBack, loginText, emailAddressPlaceholder, passwordPlaceholder, continueBtn, orText, continueFacebookBtn, continueGoogleBtn, dontHaveAccount, signUpBtnText, forgotPasswordText, resetText, signUpText, termsConditionText, alreadyHaveAccount, backToSign, loginBtnText, forgotPassText, sendResetPassText, resetPasswordBtn, intlCopyBtnId, intlCopySuccessId, locationModalheading, locationModalSubHeading, locationModalFooter, saleText, offText, faqNo1Title, faqNo1Desc, faqNo2Title, faqNo2Desc, faqNo3Title, faqNo3Desc, faqNo4Title, faqNo4Desc, intlOrderDetailsDiscount, intlOrderDetailsDelivery, intlOrderPageTitle, intlNoOrderFound, intlOrderPageDetails, intlTableColTitle2, intlTableColTitle3, intlOrderCardTitleText, intlOrderCardDateText, intlOrderCardTotalText, joinButton, ar, zh, en, de, he, es, intlTextBy, intlReletedItems, readFreeSampleButton, bookSectionTitle, authorSectionTitle, defaultIntlId, noResultFound, deliveryText, cuisineText, minOrderText, fromText, loadMoreButton, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"家\",\"nav.grocery\":\"杂货店\",\"nav.makeup\":\"补偿\",\"nav.bags\":\"包袋\",\"nav.clothing\":\"服装\",\"nav.furniture\":\"家具类\",\"nav.book\":\"书\",\"nav.medicine\":\"药物\",\"nav.foods\":\"食品类\",\"nav.terms_and_services\":\"条款及服务\",\"nav.privacy_policy\":\"隐私政策\",\"nav.offer\":\"提供\",\"nav.help\":\"需要帮忙\",\"nav.profile\":\"輪廓\",\"nav.checkout\":\"查看\",\"nav.order_received\":\"订单发票\",\"nav.logout\":\"登出\",\"nav.login\":\"登錄\",\"nav.order\":\"你的订单\",\"groceriesTitle\":\"{minute}分钟内送达的杂货\",\"groceriesSubTitle\":\"每天一整天都在您家门口提供健康食品和小吃\",\"bakeryTitle\":\"交付您的面包店物品\",\"bakerySubTitle\":\"随时将您喜欢的烘焙食品烘烤并送到您家门口\",\"makeupTitle\":\"品牌和进口化妆品\",\"makeupSubTitle\":\"最简单，最便宜的获得品牌和进口化妆品的方法\",\"bagsTitle\":\"独家品牌包\",\"bagsSubTitle\":\"立即获得您专属的品牌包包\",\"womenClothsTitle\":\"选购设计师礼服\",\"womenClothsSubTitle\":\"从网上即可为您量身定制礼服。 存货充足时快点。\",\"furnitureTitle\":\"廉价的独家家具\",\"furnitureSubTitle\":\"我们种类繁多的精美家具让您的房子成为家\",\"booksTitle\":\"你自己的书店\",\"booksSubTitle\":\"从我们广泛的书籍中获取您喜欢的书籍。\",\"medicineTitle\":\"您的药物已交付\",\"medicineSubTitle\":\"与您的所有医疗保健问题说再见\",\"foodsTitle\":\"您订购我们送货\",\"foodsSubTitle\":\"在不到一个小时的时间内得到您喜欢的食物\",\"alternativeCheckout\":\"结帐替代\",\"termAndConditionHelper\":\"购买后，即表示您同意我们的\",\"termAndCondition\":\"条款和条件。\",\"reqMedicine\":\"要求药\",\"submitRequest\":\"提交要求\",\"noteHead\":\"注意\",\"noteDescription\":\"产品可用性和价格将通过电话确认。 市区内送货费$ 5，市区外送货费$ 10。\",\"rmMedicineName\":\"药品名称\",\"rmMedicineQuantity\":\"数量\",\"rmPrescripttionUpload\":\"上传您的处方\",\"rmUploadText\":\"在此处拖动/上传文件。\",\"cartTitle\":\"你的订单\",\"discountText\":\"折扣\",\"vatText\":\"含税 增值税\",\"searchPlaceholder\":\"從這裡搜索您的產品\",\"searchButtonText\":\"搜索\",\"mobileSignInButtonText\":\"加入\",\"navlinkAccountSettings\":\"您的帳戶設置\",\"cartItems\":\"項目\",\"cartItem\":\"项目\",\"addCartButton\":\"大车\",\"addToCartButton\":\"添加到购物车\",\"backBtn\":\"背部\",\"noProductFound\":\"沒有找到產品\",\"specialCode\":\"你有优惠券吗？\",\"couponApplied\":\"優惠券已申請\",\"couponPlaceholder\":\"在此输入优惠券代码\",\"sidebarYourOrder\":\"订购\",\"profilePageTitle\":\"你的個人資料\",\"profileNameField\":\"名稱\",\"profileEmailField\":\"電子郵件\",\"profileSaveBtn\":\"保存\",\"contactNumberTItle\":\"聯繫電話\",\"addContactBtn\":\"增加聯繫人\",\"deliveryAddresTitle\":\"郵寄地址\",\"addAddressBtn\":\"添加地址\",\"addNew\":\"添新\",\"paymentCardTitle\":\"付款卡\",\"addCardBtn\":\"新增卡\",\"savedCardsId\":\"保存的卡\",\"savedContactId\":\"储存联络人\",\"savedAddressId\":\"保存地址\",\"siteFooter\":\"Pickbazar是一個產品\",\"subTotal\":\"小計\",\"itemsText\":\"項目\",\"shippinFeeText\":\"運輸費用\",\"voucherText\":\"憑證\",\"voucherApply\":\"應用\",\"couponError\":\"優惠券無效\",\"totalText\":\"總\",\"deliverySchedule\":\"交货时间表\",\"checkoutDeliveryAddress\":\"邮寄地址\",\"contactNumberText\":\"联系电话\",\"selectPaymentText\":\"付款方式\",\"proceesCheckout\":\"進行結算\",\"backHomeBtn\":\"回到家\",\"orderReceivedText\":\"訂單已經收到\",\"orderReceivedSuccess\":\"謝謝。 您的訂單已收到\",\"orderNumberText\":\"訂單號\",\"orderDateText\":\"日期\",\"paymenMethodText\":\"付款方法\",\"paymentMethodName\":\"貨到付款\",\"orderDetailsText\":\"訂單詳細信息\",\"totalItemText\":\"總項目\",\"orderTimeText\":\"訂單時間\",\"deliveryTimeText\":\"交貨時間\",\"deliveryLocationText\":\"交貨地點\",\"totalAmountText\":\"總金額\",\"loadMoreBtn\":\"装载更多\",\"welcomeBack\":\"歡迎回來\",\"loginText\":\"使用您的電子郵件和密碼登錄\",\"emailAddressPlaceholder\":\"電郵地址或聯絡號碼\",\"passwordPlaceholder\":\"密碼（最少{minCharacter}個字符）\",\"continueBtn\":\"繼續\",\"orText\":\"要么\",\"continueFacebookBtn\":\"繼續使用Facebook\",\"continueGoogleBtn\":\"繼續使用Google\",\"dontHaveAccount\":\"沒有帳戶？\",\"signUpBtnText\":\"註冊\",\"forgotPasswordText\":\"忘記密碼了嗎？\",\"resetText\":\"重置它\",\"signUpText\":\"通過註冊，您同意Pickbazar的\",\"termsConditionText\":\"條款和條件\",\"alreadyHaveAccount\":\"已經有賬號？\",\"backToSign\":\"回到\",\"loginBtnText\":\"登錄\",\"forgotPassText\":\"忘記密碼\",\"sendResetPassText\":\"我們會向您發送重置密碼的鏈接\",\"resetPasswordBtn\":\"重置密碼\",\"intlCopyBtnId\":\"复制\",\"intlCopySuccessId\":\"复制的\",\"locationModalheading\":\"选择你的位置\",\"locationModalSubHeading\":\"您必须选择位置以进行送货服务\",\"locationModalFooter\":\"免费送货第一订单\",\"saleText\":\"特卖\",\"offText\":\"关\",\"faqNo1Title\":\"如何与客户服务联系？\",\"faqNo1Desc\":\"我们的客户体验团队每周工作{number1}天，我们提供两种联系方式。电子邮件和聊天。 我们会尽快回复您，因此您无需等待太久就可以回复！\",\"faqNo2Title\":\"应用安装失败，如何更新系统信息？\",\"faqNo2Desc\":\"请仔细阅读文档。 我们也有一些有关此问题的在线视频教程。 如果问题仍然存在，请在支持论坛中打开故障单\",\"faqNo3Title\":\"网站响应耗时，如何改善？\",\"faqNo3Desc\":\"首先，请检查您的互联网连接。 我们也有一些有关此问题的在线视频教程。 如果问题仍然存在，请在支持论坛中打开故障单。\",\"faqNo4Title\":\"如何创建一个帐户？\",\"faqNo4Desc\":\"如果您想开设一个个人帐户，可以通过电话或在线进行。 在线开户仅需几分钟。\",\"intlOrderDetailsDiscount\":\"折扣\",\"intlOrderDetailsDelivery\":\"送货费\",\"intlOrderPageTitle\":\"我的订单\",\"intlNoOrderFound\":\"找不到订单\",\"intlOrderPageDetails\":\"订单详细信息\",\"intlTableColTitle2\":\"数量\",\"intlTableColTitle3\":\"价钱\",\"intlOrderCardTitleText\":\"订购\",\"intlOrderCardDateText\":\"订购日期\",\"intlOrderCardTotalText\":\"总价\",\"joinButton\":\"加入\",\"ar\":\"阿拉伯\",\"zh\":\"中文\",\"en\":\"英语\",\"de\":\"德语\",\"he\":\"希伯来语\",\"es\":\"西班牙文\",\"intlTextBy\":\"通过\",\"intlReletedItems\":\"相关项目\",\"readFreeSampleButton\":\"阅读免费样本\",\"bookSectionTitle\":\"关于这本书\",\"authorSectionTitle\":\"关于作者\",\"defaultIntlId\":\"请从语言文件添加占位符\",\"noResultFound\":\"对不起，没有找到结果:(\",\"deliveryText\":\"交货\",\"cuisineText\":\"美食\",\"minOrderText\":\"最低订购\",\"fromText\":\"从\",\"loadMoreButton\":\"装载更多\"}");

/***/ }),

/***/ "./src/site-settings/site-translation/messages.ts":
/*!********************************************************!*\
  !*** ./src/site-settings/site-translation/messages.ts ***!
  \********************************************************/
/*! exports provided: messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
/* harmony import */ var _lang_en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang/en.json */ "./src/site-settings/site-translation/lang/en.json");
var _lang_en_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/en.json */ "./src/site-settings/site-translation/lang/en.json", 1);
/* harmony import */ var _lang_ar_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang/ar.json */ "./src/site-settings/site-translation/lang/ar.json");
var _lang_ar_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/ar.json */ "./src/site-settings/site-translation/lang/ar.json", 1);
/* harmony import */ var _lang_es_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang/es.json */ "./src/site-settings/site-translation/lang/es.json");
var _lang_es_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/es.json */ "./src/site-settings/site-translation/lang/es.json", 1);
/* harmony import */ var _lang_de_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang/de.json */ "./src/site-settings/site-translation/lang/de.json");
var _lang_de_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/de.json */ "./src/site-settings/site-translation/lang/de.json", 1);
/* harmony import */ var _lang_zh_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lang/zh.json */ "./src/site-settings/site-translation/lang/zh.json");
var _lang_zh_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/zh.json */ "./src/site-settings/site-translation/lang/zh.json", 1);
/* harmony import */ var _lang_he_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lang/he.json */ "./src/site-settings/site-translation/lang/he.json");
var _lang_he_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/he.json */ "./src/site-settings/site-translation/lang/he.json", 1);






const messages = {
  en: _lang_en_json__WEBPACK_IMPORTED_MODULE_0__,
  ar: _lang_ar_json__WEBPACK_IMPORTED_MODULE_1__,
  es: _lang_es_json__WEBPACK_IMPORTED_MODULE_2__,
  de: _lang_de_json__WEBPACK_IMPORTED_MODULE_3__,
  zh: _lang_zh_json__WEBPACK_IMPORTED_MODULE_4__,
  he: _lang_he_json__WEBPACK_IMPORTED_MODULE_5__
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

/***/ "./src/utils/use-storage.ts":
/*!**********************************!*\
  !*** ./src/utils/use-storage.ts ***!
  \**********************************/
/*! exports provided: useStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStorage", function() { return useStorage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage */ "localforage");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const isObjectLiked = value => value.constructor.name === 'Array' || value.constructor.name === 'Object';

const rehydrate = (value, defaultValue) => {
  if (!value) return defaultValue; // if (value === 'false') str = false;
  // if (value === 'true') str = true;
  // if (!isObjectLiked(value)) {
  //   return value;
  // }

  try {
    const parse = JSON.parse(value);
    return parse;
  } catch (err) {
    return defaultValue;
  }
};

const hydrate = value => {
  if (!isObjectLiked(value)) {
    return value;
  }

  return JSON.stringify(value);
};

const createMigration = (opts, data) => {
  return new Promise((resolve, reject) => {
    const key = `${opts.key}-version`;
    localforage__WEBPACK_IMPORTED_MODULE_1___default.a.getItem(key, (err, version) => {
      if (version !== opts.version) {
        data = opts.migrate(data);
        localforage__WEBPACK_IMPORTED_MODULE_1___default.a.setItem(opts.key, rehydrate(data), err => {
          if (err) return reject(err);
          localforage__WEBPACK_IMPORTED_MODULE_1___default.a.setItem(key, opts.version, err => {
            if (err) return reject(err);
            return resolve(data);
          });
        });
      } else {
        resolve(data);
      }
    });
  });
};

const config = {
  key: '@session',
  version: 1,
  migrate: state => {
    return _objectSpread({}, state);
  }
};
const useStorage = (state, setState) => {
  const {
    0: rehydrated,
    1: setRehydrated
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function init() {
      await localforage__WEBPACK_IMPORTED_MODULE_1___default.a.getItem(config.key, (err, value) => {
        if (err) {
          setRehydrated(true);
          return setError(err);
        } // Migrate persisted data


        const restoredValue = rehydrate(value);

        if (typeof config.migrate === 'function') {
          createMigration(config, restoredValue).then(data => setState(data)).then(() => setRehydrated(true));
        } else {
          setState(restoredValue);
          setRehydrated(true);
        }
      });
    }

    init();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // if (isNil(state) || isEmpty(state)) {
    //   localForage.removeItem(config.key);
    // }
    localforage__WEBPACK_IMPORTED_MODULE_1___default.a.setItem(config.key, hydrate(state));
  }, [state]);
  return {
    rehydrated,
    error
  };
};

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


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

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

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

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlcy9nbG9iYWwuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9hcHAvYXBwLnByb3ZpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9hcHAvYXBwLnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2F1dGgvYXV0aC5jb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvYXV0aC9hdXRoLnByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvY2FydC9jYXJ0LnJlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9jYXJ0L3VzZS1jYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvY3JlYXRlLWNvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9sYW5ndWFnZS9sYW5ndWFnZS5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2xhbmd1YWdlL2xhbmd1YWdlLnByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvbGFuZ3VhZ2UvbGFuZ3VhZ2UudXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaXRlLXNldHRpbmdzL3NpdGUtdGhlbWUvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2l0ZS1zZXR0aW5ncy9zaXRlLXRyYW5zbGF0aW9uL21lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9hcG9sbG8udHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy91c2UtbWVkaWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3VzZS1zdG9yYWdlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHEvcmV1c2UtbW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLXN5c3RlbS9jc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2NhbGZvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib3ZlcmxheXNjcm9sbGJhcnMtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYy1kcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWludGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNwcmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNwcmluZy1tb2RhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0aWNreW5vZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsaXMtcGx1Z2luLXJ0bFwiIl0sIm5hbWVzIjpbIkluamVjdFJUTCIsInN0eWxlZCIsImRpdiIsImxhbmciLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGhlbWUiLCJjc3MiLCJib3hTaXppbmciLCJib2R5IiwibWFyZ2luIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2l0aW9uIiwiZ2V0IiwiV2Via2l0VGV4dFNpemVBZGp1c3QiLCJXZWJraXRGb250U21vb3RoaW5nIiwiTW96T3N4Rm9udFNtb290aGluZyIsInRleHRTaGFkb3ciLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJhIiwidGV4dERlY29yYXRpb24iLCJ1bCIsInBhZGRpbmciLCJsaSIsImxpc3RTdHlsZSIsInByZSIsIm92ZXJmbG93WCIsImNvZGUiLCJjb2xvciIsInRhYmxlIiwid2lkdGgiLCJib3JkZXJDb2xsYXBzZSIsImJvcmRlclNwYWNpbmciLCJ0aCIsInRleHRBbGlnbiIsImJvcmRlckJvdHRvbVN0eWxlIiwidGQiLCJpbWciLCJtYXhXaWR0aCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJvcmRlciIsInRyYW5zZm9ybSIsIm1heEhlaWdodCIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kIiwicmlnaHQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdCb3R0b20iLCJvdXRsaW5lIiwiekluZGV4IiwicG9zaXRpb24iLCJjbGlwIiwiY2xpcFBhdGgiLCJvdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJnbG9iYWxzIiwic3RhdGUiLCJkaXNwYXRjaCIsInByb3ZpZGVyIiwidXNlQ3JlYXRlQ29udGV4dCIsImFwcFJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJ1c2VBcHBTdGF0ZSIsInVzZUFwcERpc3BhdGNoIiwiQXBwUHJvdmlkZXIiLCJzZWFyY2hUZXJtIiwiaXNTdGlja3kiLCJpc1NpZGViYXJTdGlja3kiLCJpc0RyYXdlck9wZW4iLCJpc01vZGFsT3BlbiIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiRXJyb3IiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJpc0Jyb3dzZXIiLCJJTklUSUFMX1NUQVRFIiwiaXNBdXRoZW50aWNhdGVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImN1cnJlbnRGb3JtIiwicmVkdWNlciIsImNvbnNvbGUiLCJsb2ciLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImF1dGhTdGF0ZSIsImF1dGhEaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJjYXJ0SXRlbXNUb3RhbFByaWNlIiwiaXRlbXMiLCJjb3Vwb24iLCJsZW5ndGgiLCJpdGVtQ29zdCIsInJlZHVjZSIsInRvdGFsIiwiaXRlbSIsInNhbGVQcmljZSIsInF1YW50aXR5IiwicHJpY2UiLCJkaXNjb3VudCIsIk51bWJlciIsImRpc2NvdW50SW5QZXJjZW50IiwiYWRkSXRlbVRvQ2FydCIsImV4aXN0aW5nQ2FydEl0ZW1JbmRleCIsImZpbmRJbmRleCIsImlkIiwibmV3U3RhdGUiLCJyZW1vdmVJdGVtRnJvbUNhcnQiLCJhY2MiLCJuZXdRdWFudGl0eSIsImNsZWFySXRlbUZyb21DYXJ0IiwiZmlsdGVyIiwiaXNPcGVuIiwiaXNSZXN0YXVyYW50IiwiQ2FydENvbnRleHQiLCJ1c2VDYXJ0QWN0aW9ucyIsImluaXRpYWxDYXJ0IiwiYWRkSXRlbUhhbmRsZXIiLCJyZW1vdmVJdGVtSGFuZGxlciIsImNsZWFySXRlbUZyb21DYXJ0SGFuZGxlciIsImNsZWFyQ2FydEhhbmRsZXIiLCJ0b2dnbGVDYXJ0SGFuZGxlciIsImNvdXBvbkhhbmRsZXIiLCJyZW1vdmVDb3Vwb25IYW5kbGVyIiwicmVoeWRyYXRlTG9jYWxTdGF0ZSIsInRvZ2dsZVJlc3RhdXJhbnQiLCJpc0luQ2FydEhhbmRsZXIiLCJzb21lIiwiZ2V0SXRlbUhhbmRsZXIiLCJmaW5kIiwiZ2V0Q2FydEl0ZW1zUHJpY2UiLCJ0b0ZpeGVkIiwiZ2V0Q2FydEl0ZW1zVG90YWxQcmljZSIsImdldERpc2NvdW50IiwiZ2V0SXRlbXNDb3VudCIsIkNhcnRQcm92aWRlciIsInJlaHlkcmF0ZWQiLCJlcnJvciIsInVzZVN0b3JhZ2UiLCJjYXJ0SXRlbXNDb3VudCIsIml0ZW1zQ291bnQiLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsImNsZWFyQ2FydCIsImlzSW5DYXJ0IiwidG9nZ2xlQ2FydCIsImNhbGN1bGF0ZVByaWNlIiwiY2FsY3VsYXRlU3ViVG90YWxQcmljZSIsImFwcGx5Q291cG9uIiwicmVtb3ZlQ291cG9uIiwiY2FsY3VsYXRlRGlzY291bnQiLCJ1c2VDYXJ0IiwidXNlQ29udGV4dCIsImRlZmF1bHREaXNwYXRjaCIsInN0YXRlQ3R4IiwiZGlzcGF0Y2hDdHgiLCJ1c2VTdGF0ZUN0eCIsInByb3BlcnR5IiwidXNlRGlzcGF0Y2hDdHgiLCJQcm92aWRlciIsInByb3BzIiwiUmVhY3QiLCJkZWZhdWx0TG9jYWxlIiwibG9jYWxlcyIsInJ0bExvY2FsZXMiLCJsYW5ndWFnZU5hbWVzIiwiZW4iLCJmciIsInBsIiwiTGFuZ3VhZ2VDb250ZXh0IiwiTGFuZ3VhZ2VQcm92aWRlciIsIm1lc3NhZ2VzIiwibG9jYWxlIiwic2V0TG9jYWxlIiwidXNlU3RhdGUiLCJjaGFuZ2VMYW5ndWFnZSIsIm5ld0xvY2FsZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiQ29va2llIiwic2V0IiwidXNlRWZmZWN0IiwibG9jYWxTZXR0aW5nIiwiaXNMb2NhbGUiLCJpc1J0bCIsImlzUlRMIiwiUlRMUGx1Z2luIiwidXNlTG9jYWxlIiwidGVzdGVkIiwiZ2V0SW5pdGlhbExvY2FsZSIsIkRlbW9Td2l0Y2hlciIsImR5bmFtaWMiLCJBcHBMYXlvdXQiLCJFeHRlbmRlZEFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1vYmlsZSIsInVzZU1lZGlhIiwidGFibGV0IiwiZGVza3RvcCIsImFwb2xsb0NsaWVudCIsInVzZUFwb2xsbyIsImluaXRpYWxBcG9sbG9TdGF0ZSIsImRlZmF1bHRUaGVtZSIsImJhc2VDb2xvciIsIndoaXRlIiwiYmxhY2siLCJncmF5IiwidGV4dCIsImJvbGQiLCJtZWRpdW0iLCJyZWd1bGFyIiwibGlnaHQiLCJsYWJlbCIsInRyYW5zcGFyZW50IiwicHJpbWFyeSIsImhvdmVyIiwiYWx0ZXJuYXRlIiwic2Vjb25kYXJ5IiwieWVsbG93IiwiYmx1ZSIsImRhcmsiLCJsaW5rIiwicmVkIiwic3VjY2VzcyIsIndhcm5pbmciLCJtdXRlZCIsImhpZ2hsaWdodCIsImNvbG9ycyIsImJnIiwiYm9yZGVyQ29sb3IiLCJoZWFkaW5nc0NvbG9yIiwic3ViaGVhZGluZ3NDb2xvciIsInRleHRDb2xvciIsImJ1dHRvbkNvbG9yIiwiYnV0dG9uQmdDb2xvciIsImJ1dHRvbkJnSG92ZXJDb2xvciIsImJ1dHRvbkJvcmRlckNvbG9yIiwibGlua0NvbG9yIiwiaW5wdXQiLCJmb2N1cyIsInBsYWNlaG9sZGVyIiwiYnJlYWtwb2ludHMiLCJzcGFjZSIsImZvbnRTaXplcyIsInhzIiwic20iLCJiYXNlIiwibWQiLCJsZyIsInhsIiwiZm9udFdlaWdodHMiLCJoZWFkaW5nIiwidGhpbiIsInNlbWlCb2xkIiwiYm9sZGVyIiwiZm9udHMiLCJtb25vc3BhY2UiLCJjdXN0b21zIiwibGluZUhlaWdodHMiLCJyYWRpaSIsInNtYWxsIiwiYmlnIiwic2hhZG93cyIsImhlYWRlciIsImxvY2FsRW4iLCJhciIsImxvY2FsQXIiLCJlcyIsImxvY2FsRXMiLCJkZSIsImxvY2FsRGUiLCJ6aCIsImxvY2FsQ24iLCJoZSIsImxvY2FsSWwiLCJjcmVhdGVJc29tb3JwaExpbmsiLCJIdHRwTGluayIsInVyaSIsInByb2Nlc3MiLCJjcmVkZW50aWFscyIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJ0eXBlUG9saWNpZXMiLCJRdWVyeSIsImZpZWxkcyIsInByb2R1Y3RzIiwia2V5QXJncyIsIm1lcmdlIiwiZXhpc3RpbmciLCJpbmNvbWluZyIsIm5ld0l0ZW1zIiwiaW5pdGlhbGl6ZUFwb2xsbyIsIl9hcG9sbG9DbGllbnQiLCJleGlzdGluZ0NhY2hlIiwiZXh0cmFjdCIsInJlc3RvcmUiLCJzdG9yZSIsInVzZU1lbW8iLCJpc0NsaWVudCIsInF1ZXJ5IiwiZGVmYXVsdFN0YXRlIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsIm1vdW50ZWQiLCJtcWwiLCJvbkNoYW5nZSIsImFkZExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJpc09iamVjdExpa2VkIiwidmFsdWUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJyZWh5ZHJhdGUiLCJkZWZhdWx0VmFsdWUiLCJwYXJzZSIsIkpTT04iLCJlcnIiLCJoeWRyYXRlIiwic3RyaW5naWZ5IiwiY3JlYXRlTWlncmF0aW9uIiwib3B0cyIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImtleSIsImxvY2FsRm9yYWdlIiwidmVyc2lvbiIsIm1pZ3JhdGUiLCJzZXRJdGVtIiwiY29uZmlnIiwic2V0UmVoeWRyYXRlZCIsInNldEVycm9yIiwiaW5pdCIsInJlc3RvcmVkVmFsdWUiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQTtRQUNBLG1DQUFtQztRQUNuQztRQUNBO1FBQ0E7UUFDQTtRQUNBLGtCQUFrQixxQkFBcUI7UUFDdkM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsY0FBYztRQUNkLElBQUk7UUFDSjs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SEEsd0U7Ozs7Ozs7Ozs7O0FDQUEsZ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxhQUNsQixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUNBLENBQUNBLElBQUksS0FBSyxJQUFULElBQWlCQSxJQUFJLEtBQUssSUFBM0IsS0FDQztBQUNMO0FBQ0EsS0FMc0IsQ0FBZjtBQVFBLE1BQU1DLFdBQVcsR0FBR0MsMkVBQWlCLENBQUMsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FDM0NDLHlEQUFHO0FBQ0QsNEJBQTBCO0FBQ3hCQyxhQUFTLEVBQUU7QUFEYSxHQUR6QjtBQUlEQyxNQUFJLEVBQUU7QUFDSkMsVUFBTSxFQUFFLENBREo7QUFFSkMsY0FBVSxFQUFFLE1BRlI7QUFHSkMsY0FBVSxFQUFFLFNBSFI7QUFJSkMsWUFBUSxFQUFFLE1BSk47QUFLSkMsY0FBVSxFQUFFLEtBTFI7QUFNSkMsbUJBQWUsRUFBRSxPQU5iO0FBT0pDLGNBQVUsRUFBRUMseURBQUcsQ0FBQ1gsS0FBRCxFQUFRLG9CQUFSLENBUFg7QUFRSlksd0JBQW9CLEVBQUUsTUFSbEI7QUFTSkMsdUJBQW1CLEVBQUUsYUFUakI7QUFVSkMsdUJBQW1CLEVBQUUsV0FWakI7QUFXSkMsY0FBVSxFQUFFO0FBWFIsR0FKTDtBQWlCREMsSUFBRSxFQUFFO0FBQ0ZYLGNBQVUsRUFBRSxTQURWO0FBRUZFLFlBQVEsRUFBRSxLQUZSO0FBR0ZELGNBQVUsRUFBRSxVQUhWO0FBSUZGLFVBQU0sRUFBRTtBQUpOLEdBakJIO0FBdUJEYSxJQUFFLEVBQUU7QUFDRlosY0FBVSxFQUFFLFNBRFY7QUFFRkUsWUFBUSxFQUFFLEtBRlI7QUFHRkQsY0FBVSxFQUFFLFVBSFY7QUFJRkYsVUFBTSxFQUFFO0FBSk4sR0F2Qkg7QUE2QkRjLElBQUUsRUFBRTtBQUNGYixjQUFVLEVBQUUsU0FEVjtBQUVGRSxZQUFRLEVBQUUsS0FGUjtBQUdGRCxjQUFVLEVBQUUsVUFIVjtBQUlGRixVQUFNLEVBQUU7QUFKTixHQTdCSDtBQW1DRGUsSUFBRSxFQUFFO0FBQ0ZkLGNBQVUsRUFBRSxTQURWO0FBRUZFLFlBQVEsRUFBRSxJQUZSO0FBR0ZELGNBQVUsRUFBRSxVQUhWO0FBSUZGLFVBQU0sRUFBRTtBQUpOLEdBbkNIO0FBeUNEZ0IsSUFBRSxFQUFFO0FBQ0ZmLGNBQVUsRUFBRSxTQURWO0FBRUZFLFlBQVEsRUFBRSxJQUZSO0FBR0ZELGNBQVUsRUFBRSxVQUhWO0FBSUZGLFVBQU0sRUFBRTtBQUpOLEdBekNIO0FBK0NEaUIsSUFBRSxFQUFFO0FBQ0ZoQixjQUFVLEVBQUUsU0FEVjtBQUVGRSxZQUFRLEVBQUUsTUFGUjtBQUdGRCxjQUFVLEVBQUUsTUFIVjtBQUlGRixVQUFNLEVBQUU7QUFKTixHQS9DSDtBQXFERCwwQkFBd0I7QUFDdEJDLGNBQVUsRUFBRSxNQURVO0FBRXRCRCxVQUFNLEVBQUU7QUFGYyxHQXJEdkI7QUF5RERrQixHQUFDLEVBQUU7QUFDRGpCLGNBQVUsRUFBRSxNQURYO0FBRURrQixrQkFBYyxFQUFFO0FBRmYsR0F6REY7QUE2RERDLElBQUUsRUFBRTtBQUNGcEIsVUFBTSxFQUFFLENBRE47QUFFRnFCLFdBQU8sRUFBRTtBQUZQLEdBN0RIO0FBaUVEQyxJQUFFLEVBQUU7QUFDRkMsYUFBUyxFQUFFO0FBRFQsR0FqRUg7QUFvRURDLEtBQUcsRUFBRTtBQUNIdkIsY0FBVSxFQUFFLFdBRFQ7QUFFSHdCLGFBQVMsRUFBRSxNQUZSO0FBR0hDLFFBQUksRUFBRTtBQUNKQyxXQUFLLEVBQUU7QUFESDtBQUhILEdBcEVKO0FBMkVERCxNQUFJLEVBQUU7QUFDSnpCLGNBQVUsRUFBRSxXQURSO0FBRUpFLFlBQVEsRUFBRTtBQUZOLEdBM0VMO0FBK0VEeUIsT0FBSyxFQUFFO0FBQ0xDLFNBQUssRUFBRSxNQURGO0FBRUxDLGtCQUFjLEVBQUUsVUFGWDtBQUdMQyxpQkFBYSxFQUFFO0FBSFYsR0EvRU47QUFvRkRDLElBQUUsRUFBRTtBQUNGQyxhQUFTLEVBQUUsTUFEVDtBQUVGQyxxQkFBaUIsRUFBRTtBQUZqQixHQXBGSDtBQXdGREMsSUFBRSxFQUFFO0FBQ0ZGLGFBQVMsRUFBRSxNQURUO0FBRUZDLHFCQUFpQixFQUFFO0FBRmpCLEdBeEZIO0FBNEZERSxLQUFHLEVBQUU7QUFDSEMsWUFBUSxFQUFFO0FBRFAsR0E1Rko7QUErRkQseUJBQXVCO0FBQ3JCaEMsbUJBQWUsRUFBRTtBQURJLEdBL0Z0QjtBQW1HRCwyQ0FBeUM7QUFDdkNpQyxhQUFTLEVBQUUsOEJBRDRCO0FBRXZDQyxnQkFBWSxFQUFFLGdCQUZ5QjtBQUd2QywwQkFBc0I7QUFDcEJWLFdBQUssRUFBRSxNQURhO0FBRXBCUixhQUFPLEVBQUUsTUFGVztBQUdwQm1CLFlBQU0sRUFBRSxNQUhZO0FBSXBCbkMscUJBQWUsRUFBRSxTQUpHO0FBS3BCb0MsWUFBTSxFQUFFLENBTFk7QUFNcEIzQyxlQUFTLEVBQUU7QUFOUztBQUhpQixHQW5HeEM7QUFnSEQsMEJBQXdCO0FBQ3RCNEMsYUFBUyxFQUFFLGdCQURXO0FBRXRCTCxZQUFRLEVBQUUsZ0JBRlk7QUFHdEJNLGFBQVMsRUFBRSxnQkFIVztBQUl0QkMsT0FBRyxFQUFFLGFBSmlCO0FBS3RCQyxRQUFJLEVBQUUsYUFMZ0I7QUFNdEJDLGNBQVUsRUFBRSx1QkFOVTtBQU90QlAsZ0JBQVksRUFBRTtBQVBRLEdBaEh2QjtBQTBIRCx5QkFBdUI7QUFDckJRLFNBQUssRUFBRSxnQkFEYztBQUVyQjFDLG1CQUFlLEVBQUUsbUJBRkk7QUFHckJzQixTQUFLLEVBQUUsbUJBSGM7QUFJckJZLGdCQUFZLEVBQUUsZ0JBSk87QUFLckJsQixXQUFPLEVBQUUsaUJBTFk7QUFNckJpQixhQUFTLEVBQUU7QUFOVSxHQTFIdEI7QUFtSUQsaUJBQWU7QUFDYmpCLFdBQU8sRUFBRTtBQURJLEdBbklkO0FBdUlELHVEQUFxRDtBQUNuRCxtQkFBZTtBQUNiMkIsaUJBQVcsRUFBRSxNQURBO0FBRWJDLGtCQUFZLEVBQUU7QUFGRDtBQURvQyxHQXZJcEQ7QUE4SUQsK0JBQTZCO0FBQzNCLG1CQUFlO0FBQ2JELGlCQUFXLEVBQUUsT0FEQTtBQUViQyxrQkFBWSxFQUFFO0FBRkQ7QUFEWSxHQTlJNUI7QUFxSkQsOERBQTREO0FBQzFEQyxnQkFBWSxFQUFFLGNBRDRDO0FBRTFEQyxpQkFBYSxFQUFFLGNBRjJDO0FBSTFEbkIsTUFBRSxFQUFFO0FBQ0ZYLGFBQU8sRUFBRTtBQURQO0FBSnNELEdBckozRDtBQThKRCw2QkFBMkI7QUFDekIsZUFBVztBQUNUK0IsYUFBTyxFQUFFO0FBREE7QUFEYyxHQTlKMUI7QUFvS0QsdUJBQXFCO0FBQ25CWCxVQUFNLEVBQUU7QUFEVyxHQXBLcEI7QUF3S0QsaUJBQWU7QUFDYlksVUFBTSxFQUFFLE1BREs7QUFFYkMsWUFBUSxFQUFFO0FBRkcsR0F4S2Q7QUE2S0QsYUFBVztBQUNURixXQUFPLEVBQUUsQ0FEQTtBQUVUZCxhQUFTLEVBQUU7QUFGRixHQTdLVjtBQWlMRCxhQUFXO0FBQ1RHLFVBQU0sRUFBRSxjQURDO0FBRVRjLFFBQUksRUFBRSxxQ0FGRztBQUdUQyxZQUFRLEVBQUUsdUJBSEQ7QUFJVGhCLFVBQU0sRUFBRSxnQkFKQztBQUtUeEMsVUFBTSxFQUFFLGlCQUxDO0FBTVR5RCxZQUFRLEVBQUUsbUJBTkQ7QUFPVHBDLFdBQU8sRUFBRSxjQVBBO0FBUVRpQyxZQUFRLEVBQUUscUJBUkQ7QUFTVHpCLFNBQUssRUFBRSxnQkFURTtBQVVUNkIsY0FBVSxFQUFFO0FBVkg7QUFqTFYsR0E4TEU5RCxLQUFLLENBQUMrRCxPQTlMUixFQUR1QyxDQUFyQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQWtCQyxRQUFsQixJQUE4QkMsd0VBQWdCLENBQUNDLHVEQUFELEVBQWFDLHlEQUFiLENBQXBEO0FBQ08sTUFBTUMsV0FBVyxHQUFHTixLQUFwQjtBQUNBLE1BQU1PLGNBQWMsR0FBR04sUUFBdkI7QUFDQSxNQUFNTyxXQUFXLEdBQUdOLFFBQXBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLE1BQU1HLFlBQVksR0FBRztBQUMxQkksWUFBVSxFQUFFLEVBRGM7QUFFMUJDLFVBQVEsRUFBRSxLQUZnQjtBQUcxQkMsaUJBQWUsRUFBRSxJQUhTO0FBSTFCQyxjQUFZLEVBQUUsS0FKWTtBQUsxQkMsYUFBVyxFQUFFO0FBTGEsQ0FBckI7QUFtQkEsU0FBU1QsVUFBVCxDQUFvQkosS0FBcEIsRUFBc0NjLE1BQXRDLEVBQXFFO0FBQzFFLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssaUJBQUw7QUFDRSw2Q0FDS2YsS0FETDtBQUVFUyxrQkFBVSxFQUFFSyxNQUFNLENBQUNFO0FBRnJCOztBQUlGLFNBQUssWUFBTDtBQUNFLDZDQUNLaEIsS0FETDtBQUVFVSxnQkFBUSxFQUFFO0FBRlo7O0FBSUYsU0FBSyxlQUFMO0FBQ0UsNkNBQ0tWLEtBREw7QUFFRVUsZ0JBQVEsRUFBRTtBQUZaOztBQUlGLFNBQUssb0JBQUw7QUFDRSw2Q0FDS1YsS0FETDtBQUVFVyx1QkFBZSxFQUFFO0FBRm5COztBQUlGLFNBQUssdUJBQUw7QUFDRSw2Q0FDS1gsS0FETDtBQUVFVyx1QkFBZSxFQUFFO0FBRm5COztBQUlGLFNBQUssZUFBTDtBQUNFLDZDQUNLWCxLQURMO0FBRUVZLG9CQUFZLEVBQUUsQ0FBQ1osS0FBSyxDQUFDWTtBQUZ2Qjs7QUFJRixTQUFLLGNBQUw7QUFDRSw2Q0FDS1osS0FETDtBQUVFYSxtQkFBVyxFQUFFLENBQUNiLEtBQUssQ0FBQ2E7QUFGdEI7O0FBSUY7QUFBUztBQUNQLGNBQU0sSUFBSUksS0FBSixDQUFXLHdDQUFYLENBQU47QUFDRDtBQXRDSDtBQXdDRCxDOzs7Ozs7Ozs7Ozs7QUM1REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLE1BQU1DLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFqQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRFA7QUFDQTtBQUNBLE1BQU1DLFNBQVMsUUFBZjtBQUNBLE1BQU1DLGFBQWEsR0FBRztBQUNwQkMsaUJBQWUsRUFBRUYsU0FBUyxJQUFJLENBQUMsQ0FBQ0csWUFBWSxDQUFDQyxPQUFiLENBQXFCLGNBQXJCLENBRFo7QUFFcEJDLGFBQVcsRUFBRTtBQUZPLENBQXRCOztBQUtBLFNBQVNDLE9BQVQsQ0FBaUIxQixLQUFqQixFQUE2QmMsTUFBN0IsRUFBMEM7QUFDeENhLFNBQU8sQ0FBQ0MsR0FBUixDQUFZNUIsS0FBWixFQUFtQixNQUFuQjs7QUFFQSxVQUFRYyxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLFFBQUw7QUFDRSw2Q0FDS2YsS0FETDtBQUVFeUIsbUJBQVcsRUFBRTtBQUZmOztBQUlGLFNBQUssZ0JBQUw7QUFDRSw2Q0FDS3pCLEtBREw7QUFFRXNCLHVCQUFlLEVBQUU7QUFGbkI7O0FBSUYsU0FBSyxVQUFMO0FBQ0UsNkNBQ0t0QixLQURMO0FBRUVzQix1QkFBZSxFQUFFO0FBRm5COztBQUlGLFNBQUssUUFBTDtBQUNFLDZDQUNLdEIsS0FETDtBQUVFeUIsbUJBQVcsRUFBRTtBQUZmOztBQUlGLFNBQUssWUFBTDtBQUNFLDZDQUNLekIsS0FETDtBQUVFeUIsbUJBQVcsRUFBRTtBQUZmOztBQUlGO0FBQ0UsYUFBT3pCLEtBQVA7QUEzQko7QUE2QkQ7O0FBRU0sTUFBTTZCLFlBQXFDLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDckUsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyx3REFBVSxDQUFDUCxPQUFELEVBQVVMLGFBQVYsQ0FBNUM7QUFDQSxzQkFDRSxxRUFBQyx5REFBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVVLGVBQUY7QUFBYUM7QUFBYixLQUE3QjtBQUFBLGNBQ0dGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FQTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ1A7QUFDTyxNQUFNSSxtQkFBbUIsR0FBRyxDQUFDQyxLQUFELEVBQVFDLE1BQU0sR0FBRyxJQUFqQixLQUEwQjtBQUMzRCxNQUFJRCxLQUFLLEtBQUssSUFBVixJQUFrQkEsS0FBSyxDQUFDRSxNQUFOLEtBQWlCLENBQXZDLEVBQTBDLE9BQU8sQ0FBUDtBQUMxQyxRQUFNQyxRQUFRLEdBQUdILEtBQUssQ0FBQ0ksTUFBTixDQUFhLENBQUNDLEtBQUQsRUFBUUMsSUFBUixLQUFpQjtBQUM3QyxRQUFJQSxJQUFJLENBQUNDLFNBQVQsRUFBb0I7QUFDbEIsYUFBT0YsS0FBSyxHQUFHQyxJQUFJLENBQUNDLFNBQUwsR0FBaUJELElBQUksQ0FBQ0UsUUFBckM7QUFDRDs7QUFDRCxXQUFPSCxLQUFLLEdBQUdDLElBQUksQ0FBQ0csS0FBTCxHQUFhSCxJQUFJLENBQUNFLFFBQWpDO0FBQ0QsR0FMZ0IsRUFLZCxDQUxjLENBQWpCLENBRjJELENBUTNEOztBQUNBLFFBQU1FLFFBQVEsR0FBR1QsTUFBTSxHQUNsQkUsUUFBUSxHQUFHUSxNQUFNLENBQUNWLE1BQU0sQ0FBQ1csaUJBQVIsQ0FBbEIsR0FBZ0QsR0FEN0IsR0FFbkIsQ0FGSixDQVQyRCxDQVkzRDtBQUNBOztBQUNBLFNBQU9ULFFBQVEsR0FBR08sUUFBbEI7QUFDRCxDQWZNLEMsQ0FnQlA7O0FBQ0EsTUFBTUcsYUFBYSxHQUFHLENBQUNoRCxLQUFELEVBQVFjLE1BQVIsS0FBbUI7QUFDdkMsUUFBTW1DLHFCQUFxQixHQUFHakQsS0FBSyxDQUFDbUMsS0FBTixDQUFZZSxTQUFaLENBQzNCVCxJQUFELElBQVVBLElBQUksQ0FBQ1UsRUFBTCxLQUFZckMsTUFBTSxDQUFDRSxPQUFQLENBQWVtQyxFQURULENBQTlCOztBQUlBLE1BQUlGLHFCQUFxQixHQUFHLENBQUMsQ0FBN0IsRUFBZ0M7QUFDOUIsVUFBTUcsUUFBUSxHQUFHLENBQUMsR0FBR3BELEtBQUssQ0FBQ21DLEtBQVYsQ0FBakI7QUFDQWlCLFlBQVEsQ0FBQ0gscUJBQUQsQ0FBUixDQUFnQ04sUUFBaEMsSUFBNEM3QixNQUFNLENBQUNFLE9BQVAsQ0FBZTJCLFFBQTNEO0FBQ0EsV0FBT1MsUUFBUDtBQUNEOztBQUNELFNBQU8sQ0FBQyxHQUFHcEQsS0FBSyxDQUFDbUMsS0FBVixFQUFpQnJCLE1BQU0sQ0FBQ0UsT0FBeEIsQ0FBUDtBQUNELENBWEQsQyxDQWFBOzs7QUFDQSxNQUFNcUMsa0JBQWtCLEdBQUcsQ0FBQ3JELEtBQUQsRUFBUWMsTUFBUixLQUFtQjtBQUM1QyxTQUFPZCxLQUFLLENBQUNtQyxLQUFOLENBQVlJLE1BQVosQ0FBbUIsQ0FBQ2UsR0FBRCxFQUFNYixJQUFOLEtBQWU7QUFDdkMsUUFBSUEsSUFBSSxDQUFDVSxFQUFMLEtBQVlyQyxNQUFNLENBQUNFLE9BQVAsQ0FBZW1DLEVBQS9CLEVBQW1DO0FBQ2pDLFlBQU1JLFdBQVcsR0FBR2QsSUFBSSxDQUFDRSxRQUFMLEdBQWdCN0IsTUFBTSxDQUFDRSxPQUFQLENBQWUyQixRQUFuRDtBQUVBLGFBQU9ZLFdBQVcsR0FBRyxDQUFkLEdBQ0gsQ0FBQyxHQUFHRCxHQUFKLGtDQUFjYixJQUFkO0FBQW9CRSxnQkFBUSxFQUFFWTtBQUE5QixTQURHLEdBRUgsQ0FBQyxHQUFHRCxHQUFKLENBRko7QUFHRDs7QUFDRCxXQUFPLENBQUMsR0FBR0EsR0FBSixFQUFTYixJQUFULENBQVA7QUFDRCxHQVRNLEVBU0osRUFUSSxDQUFQO0FBVUQsQ0FYRDs7QUFhQSxNQUFNZSxpQkFBaUIsR0FBRyxDQUFDeEQsS0FBRCxFQUFRYyxNQUFSLEtBQW1CO0FBQzNDLFNBQU9kLEtBQUssQ0FBQ21DLEtBQU4sQ0FBWXNCLE1BQVosQ0FBb0JoQixJQUFELElBQVVBLElBQUksQ0FBQ1UsRUFBTCxLQUFZckMsTUFBTSxDQUFDRSxPQUFQLENBQWVtQyxFQUF4RCxDQUFQO0FBQ0QsQ0FGRDs7QUFJTyxNQUFNekIsT0FBTyxHQUFHLENBQUMxQixLQUFELEVBQVFjLE1BQVIsS0FBbUI7QUFDeEMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxXQUFMO0FBQ0UsNkNBQVlmLEtBQVosR0FBc0JjLE1BQU0sQ0FBQ0UsT0FBN0I7O0FBQ0YsU0FBSyxhQUFMO0FBQ0UsNkNBQVloQixLQUFaO0FBQW1CMEQsY0FBTSxFQUFFLENBQUMxRCxLQUFLLENBQUMwRDtBQUFsQzs7QUFDRixTQUFLLFVBQUw7QUFDRSw2Q0FBWTFELEtBQVo7QUFBbUJtQyxhQUFLLEVBQUVhLGFBQWEsQ0FBQ2hELEtBQUQsRUFBUWMsTUFBUjtBQUF2Qzs7QUFDRixTQUFLLGFBQUw7QUFDRSw2Q0FBWWQsS0FBWjtBQUFtQm1DLGFBQUssRUFBRWtCLGtCQUFrQixDQUFDckQsS0FBRCxFQUFRYyxNQUFSO0FBQTVDOztBQUNGLFNBQUssc0JBQUw7QUFDRSw2Q0FBWWQsS0FBWjtBQUFtQm1DLGFBQUssRUFBRXFCLGlCQUFpQixDQUFDeEQsS0FBRCxFQUFRYyxNQUFSO0FBQTNDOztBQUNGLFNBQUssWUFBTDtBQUNFLDZDQUFZZCxLQUFaO0FBQW1CbUMsYUFBSyxFQUFFO0FBQTFCOztBQUNGLFNBQUssY0FBTDtBQUNFLDZDQUFZbkMsS0FBWjtBQUFtQm9DLGNBQU0sRUFBRXRCLE1BQU0sQ0FBQ0U7QUFBbEM7O0FBQ0YsU0FBSyxlQUFMO0FBQ0UsNkNBQVloQixLQUFaO0FBQW1Cb0MsY0FBTSxFQUFFO0FBQTNCOztBQUNGLFNBQUssbUJBQUw7QUFDRSw2Q0FBWXBDLEtBQVo7QUFBbUIyRCxvQkFBWSxFQUFFLENBQUMzRCxLQUFLLENBQUMyRDtBQUF4Qzs7QUFDRjtBQUNFLFlBQU0sSUFBSTFDLEtBQUosQ0FBVyxtQkFBa0JILE1BQU0sQ0FBQ0MsSUFBSyxFQUF6QyxDQUFOO0FBcEJKO0FBc0JELENBdkJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEUDtBQUNBO0FBQ0E7QUFDQSxNQUFNNkMsV0FBVyxnQkFBR3pDLDJEQUFhLENBQUMsRUFBRCxDQUFqQztBQUNBLE1BQU1FLGFBQWEsR0FBRztBQUNwQnFDLFFBQU0sRUFBRSxLQURZO0FBRXBCdkIsT0FBSyxFQUFFLEVBRmE7QUFHcEJ3QixjQUFZLEVBQUUsS0FITTtBQUlwQnZCLFFBQU0sRUFBRTtBQUpZLENBQXRCOztBQU9BLE1BQU15QixjQUFjLEdBQUcsQ0FBQ0MsV0FBVyxHQUFHekMsYUFBZixLQUFpQztBQUFBOztBQUN0RCxRQUFNO0FBQUEsT0FBQ3JCLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CZ0Msd0RBQVUsQ0FBQ1AscURBQUQsRUFBVW9DLFdBQVYsQ0FBcEM7O0FBRUEsUUFBTUMsY0FBYyxHQUFHLENBQUN0QixJQUFELEVBQU9FLFFBQVEsR0FBRyxDQUFsQixLQUF3QjtBQUM3QzFDLFlBQVEsQ0FBQztBQUFFYyxVQUFJLEVBQUUsVUFBUjtBQUFvQkMsYUFBTyxrQ0FBT3lCLElBQVA7QUFBYUU7QUFBYjtBQUEzQixLQUFELENBQVI7QUFDRCxHQUZEOztBQUlBLFFBQU1xQixpQkFBaUIsR0FBRyxDQUFDdkIsSUFBRCxFQUFPRSxRQUFRLEdBQUcsQ0FBbEIsS0FBd0I7QUFDaEQxQyxZQUFRLENBQUM7QUFBRWMsVUFBSSxFQUFFLGFBQVI7QUFBdUJDLGFBQU8sa0NBQU95QixJQUFQO0FBQWFFO0FBQWI7QUFBOUIsS0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxRQUFNc0Isd0JBQXdCLEdBQUl4QixJQUFELElBQVU7QUFDekN4QyxZQUFRLENBQUM7QUFBRWMsVUFBSSxFQUFFLHNCQUFSO0FBQWdDQyxhQUFPLEVBQUV5QjtBQUF6QyxLQUFELENBQVI7QUFDRCxHQUZEOztBQUlBLFFBQU15QixnQkFBZ0IsR0FBRyxNQUFNO0FBQzdCakUsWUFBUSxDQUFDO0FBQUVjLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBR0EsUUFBTW9ELGlCQUFpQixHQUFHLE1BQU07QUFDOUJsRSxZQUFRLENBQUM7QUFBRWMsVUFBSSxFQUFFO0FBQVIsS0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFHQSxRQUFNcUQsYUFBYSxHQUFJaEMsTUFBRCxJQUFZO0FBQ2hDbkMsWUFBUSxDQUFDO0FBQUVjLFVBQUksRUFBRSxjQUFSO0FBQXdCQyxhQUFPLEVBQUVvQjtBQUFqQyxLQUFELENBQVI7QUFDRCxHQUZEOztBQUdBLFFBQU1pQyxtQkFBbUIsR0FBRyxNQUFNO0FBQ2hDcEUsWUFBUSxDQUFDO0FBQUVjLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBR0EsUUFBTXVELG1CQUFtQixHQUFJdEQsT0FBRCxJQUFhO0FBQ3ZDZixZQUFRLENBQUM7QUFBRWMsVUFBSSxFQUFFLFdBQVI7QUFBcUJDO0FBQXJCLEtBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBR0EsUUFBTXVELGdCQUFnQixHQUFHLE1BQU07QUFDN0J0RSxZQUFRLENBQUM7QUFBRWMsVUFBSSxFQUFFO0FBQVIsS0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFHQSxRQUFNeUQsZUFBZSxHQUFJckIsRUFBRCxJQUFRO0FBQUE7O0FBQzlCLDJCQUFPbkQsS0FBSyxDQUFDbUMsS0FBYixpREFBTyxhQUFhc0MsSUFBYixDQUFtQmhDLElBQUQsSUFBVUEsSUFBSSxDQUFDVSxFQUFMLEtBQVlBLEVBQXhDLENBQVA7QUFDRCxHQUZEOztBQUdBLFFBQU11QixjQUFjLEdBQUl2QixFQUFELElBQVE7QUFBQTs7QUFDN0IsNEJBQU9uRCxLQUFLLENBQUNtQyxLQUFiLGtEQUFPLGNBQWF3QyxJQUFiLENBQW1CbEMsSUFBRCxJQUFVQSxJQUFJLENBQUNVLEVBQUwsS0FBWUEsRUFBeEMsQ0FBUDtBQUNELEdBRkQ7O0FBR0EsUUFBTXlCLGlCQUFpQixHQUFHLE1BQU0xQyx5RUFBbUIsQ0FBQ2xDLEtBQUssQ0FBQ21DLEtBQVAsQ0FBbkIsQ0FBaUMwQyxPQUFqQyxDQUF5QyxDQUF6QyxDQUFoQzs7QUFDQSxRQUFNQyxzQkFBc0IsR0FBRyxNQUM3QjVDLHlFQUFtQixDQUFDbEMsS0FBSyxDQUFDbUMsS0FBUCxFQUFjbkMsS0FBSyxDQUFDb0MsTUFBcEIsQ0FBbkIsQ0FBK0N5QyxPQUEvQyxDQUF1RCxDQUF2RCxDQURGOztBQUdBLFFBQU1FLFdBQVcsR0FBRyxNQUFNO0FBQUE7O0FBQ3hCLFVBQU12QyxLQUFLLEdBQUdOLHlFQUFtQixDQUFDbEMsS0FBSyxDQUFDbUMsS0FBUCxDQUFqQztBQUNBLFVBQU1VLFFBQVEsR0FBRzdDLEtBQUssQ0FBQ29DLE1BQU4sR0FDWkksS0FBSyxHQUFHTSxNQUFNLGtCQUFDOUMsS0FBSyxDQUFDb0MsTUFBUCxrREFBQyxjQUFjVyxpQkFBZixDQUFmLEdBQW9ELEdBRHZDLEdBRWIsQ0FGSjtBQUdBLFdBQU9GLFFBQVEsQ0FBQ2dDLE9BQVQsQ0FBaUIsQ0FBakIsQ0FBUDtBQUNELEdBTkQ7O0FBT0EsUUFBTUcsYUFBYSxvQkFBR2hGLEtBQUssQ0FBQ21DLEtBQVQsa0RBQUcsY0FBYUksTUFBYixDQUNwQixDQUFDZSxHQUFELEVBQU1iLElBQU4sS0FBZWEsR0FBRyxHQUFHYixJQUFJLENBQUNFLFFBRE4sRUFFcEIsQ0FGb0IsQ0FBdEI7QUFJQSxTQUFPO0FBQ0wzQyxTQURLO0FBRUxnRixpQkFGSztBQUdMVix1QkFISztBQUlMUCxrQkFKSztBQUtMQyxxQkFMSztBQU1MQyw0QkFOSztBQU9MQyxvQkFQSztBQVFMTSxtQkFSSztBQVNMRSxrQkFUSztBQVVMUCxxQkFWSztBQVdMVywwQkFYSztBQVlMRixxQkFaSztBQWFMUixpQkFiSztBQWNMQyx1QkFkSztBQWVMVSxlQWZLO0FBZ0JMUjtBQWhCSyxHQUFQO0FBa0JELENBeEVEOztBQTBFTyxNQUFNVSxZQUFZLEdBQUcsQ0FBQztBQUFFbkQ7QUFBRixDQUFELEtBQWtCO0FBQUE7O0FBQzVDLFFBQU07QUFDSjlCLFNBREk7QUFFSnNFLHVCQUZJO0FBR0pVLGlCQUhJO0FBSUpqQixrQkFKSTtBQUtKQyxxQkFMSTtBQU1KQyw0QkFOSTtBQU9KQyxvQkFQSTtBQVFKTSxtQkFSSTtBQVNKRSxrQkFUSTtBQVVKUCxxQkFWSTtBQVdKVywwQkFYSTtBQVlKVixpQkFaSTtBQWFKQyx1QkFiSTtBQWNKTyxxQkFkSTtBQWVKRyxlQWZJO0FBZ0JKUjtBQWhCSSxNQWlCRlYsY0FBYyxFQWpCbEI7QUFrQkEsUUFBTTtBQUFFcUIsY0FBRjtBQUFjQztBQUFkLE1BQXdCQyxvRUFBVSxDQUFDcEYsS0FBRCxFQUFRc0UsbUJBQVIsQ0FBeEM7QUFFQSxzQkFDRSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUNFLFNBQUssRUFBRTtBQUNMWixZQUFNLEVBQUUxRCxLQUFLLENBQUMwRCxNQURUO0FBRUx2QixXQUFLLEVBQUVuQyxLQUFLLENBQUNtQyxLQUZSO0FBR0xDLFlBQU0sRUFBRXBDLEtBQUssQ0FBQ29DLE1BSFQ7QUFJTHVCLGtCQUFZLEVBQUUzRCxLQUFLLENBQUMyRCxZQUpmO0FBS0wwQixvQkFBYyxtQkFBRXJGLEtBQUssQ0FBQ21DLEtBQVIsa0RBQUUsY0FBYUUsTUFMeEI7QUFNTGlELGdCQUFVLEVBQUVOLGFBTlA7QUFPTE8sYUFBTyxFQUFFeEIsY0FQSjtBQVFMeUIsZ0JBQVUsRUFBRXhCLGlCQVJQO0FBU0xYLHdCQUFrQixFQUFFWSx3QkFUZjtBQVVMd0IsZUFBUyxFQUFFdkIsZ0JBVk47QUFXTHdCLGNBQVEsRUFBRWxCLGVBWEw7QUFZTGhELGFBQU8sRUFBRWtELGNBWko7QUFhTGlCLGdCQUFVLEVBQUV4QixpQkFiUDtBQWNMeUIsb0JBQWMsRUFBRWQsc0JBZFg7QUFlTGUsNEJBQXNCLEVBQUVqQixpQkFmbkI7QUFnQkxrQixpQkFBVyxFQUFFMUIsYUFoQlI7QUFpQkwyQixrQkFBWSxFQUFFMUIsbUJBakJUO0FBa0JMMkIsdUJBQWlCLEVBQUVqQixXQWxCZDtBQW1CTFI7QUFuQkssS0FEVDtBQUFBLGNBdUJHekM7QUF2Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBMkJELENBaERNO0FBa0RBLE1BQU1tRSxPQUFPLEdBQUcsTUFBTUMsd0RBQVUsQ0FBQ3RDLFdBQUQsQ0FBaEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SVA7QUFFTyxTQUFTekQsZ0JBQVQsQ0FDTHVCLE9BREssRUFFTHJCLFlBRkssRUFHTDtBQUNBLFFBQU04RixlQUEyQyxHQUFHLE1BQU05RixZQUExRDs7QUFDQSxRQUFNK0YsUUFBUSxnQkFBR2pGLDJEQUFhLENBQUNkLFlBQUQsQ0FBOUI7QUFDQSxRQUFNZ0csV0FBVyxnQkFBR2xGLDJEQUFhLENBQUNnRixlQUFELENBQWpDOztBQUVBLFdBQVNHLFdBQVQsQ0FBZ0RDLFFBQWhELEVBQTZEO0FBQzNELFVBQU12RyxLQUFLLEdBQUdrRyx3REFBVSxDQUFDRSxRQUFELENBQXhCO0FBQ0EsV0FBT3BHLEtBQUssQ0FBQ3VHLFFBQUQsQ0FBWixDQUYyRCxDQUVuQztBQUN6Qjs7QUFFRCxXQUFTQyxjQUFULEdBQTBCO0FBQ3hCLFdBQU9OLHdEQUFVLENBQUNHLFdBQUQsQ0FBakI7QUFDRDs7QUFFRCxXQUFTSSxRQUFULENBQWtCQyxLQUFsQixFQUFzRDtBQUNwRCxVQUFNLENBQUMxRyxLQUFELEVBQVFDLFFBQVIsSUFBb0IwRyw0Q0FBSyxDQUFDMUUsVUFBTixDQUV4QlAsT0FGd0IsRUFFZnJCLFlBRmUsQ0FBMUI7QUFHQSx3QkFDRSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixXQUFLLEVBQUVKLFFBQTdCO0FBQUEsNkJBQ0UscUVBQUMsUUFBRCxDQUFVLFFBQVY7QUFBbUIsYUFBSyxFQUFFRCxLQUExQjtBQUFBLGtCQUFrQzBHLEtBQUssQ0FBQzVFO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRDs7QUFDRCxTQUFPLENBQUN3RSxXQUFELEVBQWNFLGNBQWQsRUFBOEJDLFFBQTlCLENBQVA7QUFDRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1HLGFBQWEsR0FBRyxJQUF0QjtBQUVBLE1BQU1DLE9BQU8sR0FBRyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixFQUErQixJQUEvQixDQUFoQjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxDQUFDLElBQUQsRUFBTyxJQUFQLENBQW5CLEMsQ0FFUDs7QUFDTyxNQUFNQyxhQUFhLEdBQUc7QUFDM0JDLElBQUUsRUFBRSxTQUR1QjtBQUUzQkMsSUFBRSxFQUFFLFVBRnVCO0FBRzNCQyxJQUFFLEVBQUU7QUFIdUIsQ0FBdEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05QO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUMsZUFBZSxnQkFBR1IsNENBQUssQ0FBQ3hGLGFBQU4sQ0FBb0IsRUFBcEIsQ0FBeEI7QUFFTyxNQUFNaUcsZ0JBQWdCLEdBQUcsQ0FBQztBQUFFdEYsVUFBRjtBQUFZdUY7QUFBWixDQUFELEtBQTRCO0FBQzFELFFBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxTQUFULElBQXNCWiw0Q0FBSyxDQUFDYSxRQUFOLENBQWUsSUFBZixDQUE1Qjs7QUFDQSxRQUFNQyxjQUFjLEdBQUlDLFNBQUQsSUFBcUI7QUFDMUNILGFBQVMsQ0FBQ0csU0FBRCxDQUFUO0FBQ0FDLFlBQVEsQ0FBQ0MsZUFBVCxDQUF5Qi9MLElBQXpCLEdBQWdDNkwsU0FBaEM7QUFDQUcsb0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLFFBQVgsRUFBcUJKLFNBQXJCO0FBQ0QsR0FKRDs7QUFLQWYsOENBQUssQ0FBQ29CLFNBQU4sQ0FBZ0IsTUFBTTtBQUNwQixVQUFNQyxZQUFZLEdBQUdILGdEQUFNLENBQUNsTCxHQUFQLENBQVcsUUFBWCxDQUFyQjs7QUFDQSxRQUFJcUwsWUFBWSxJQUFJQyxnRUFBUSxDQUFDRCxZQUFELENBQTVCLEVBQTRDO0FBQzFDTCxjQUFRLENBQUNDLGVBQVQsQ0FBeUIvTCxJQUF6QixHQUFnQ21NLFlBQWhDO0FBQ0FULGVBQVMsQ0FBQ1MsWUFBRCxDQUFUO0FBQ0Q7QUFDRixHQU5ELEVBTUcsQ0FBQ1YsTUFBRCxDQU5IO0FBT0EsTUFBSVksS0FBSyxHQUFHQyw2REFBSyxDQUFDYixNQUFELENBQWpCO0FBRUEsc0JBQ0UscUVBQUMsZUFBRCxDQUFpQixRQUFqQjtBQUEwQixTQUFLLEVBQUU7QUFBRUEsWUFBRjtBQUFVRyxvQkFBVjtBQUEwQlM7QUFBMUIsS0FBakM7QUFBQSwyQkFDRSxxRUFBQyx1REFBRDtBQUFjLFlBQU0sRUFBRVosTUFBdEI7QUFBOEIsY0FBUSxFQUFFRCxRQUFRLENBQUNDLE1BQUQsQ0FBaEQ7QUFBQSw2QkFDRSxxRUFBQyxvRUFBRDtBQUFXLFlBQUksRUFBRUEsTUFBakI7QUFBeUIsV0FBRyxFQUFFWSxLQUFLLEdBQUcsS0FBSCxHQUFXLEtBQTlDO0FBQUEsK0JBQ0UscUVBQUMsbUVBQUQ7QUFBbUIsdUJBQWEsRUFBRUEsS0FBSyxHQUFHLENBQUNFLHdEQUFELENBQUgsR0FBaUIsRUFBeEQ7QUFBQSxvQkFDR3RHO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBV0QsQ0EzQk07QUE2QkEsTUFBTXVHLFNBQVMsR0FBRyxNQUFNMUIsNENBQUssQ0FBQ1QsVUFBTixDQUFpQmlCLGVBQWpCLENBQXhCLEM7Ozs7Ozs7Ozs7OztBQ3hDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVTyxTQUFTYyxRQUFULENBQWtCSyxNQUFsQixFQUFvRDtBQUN6RCxTQUFPekIsd0RBQU8sQ0FBQ3BDLElBQVIsQ0FBYzZDLE1BQUQsSUFBWUEsTUFBTSxLQUFLZ0IsTUFBcEMsQ0FBUDtBQUNEO0FBRU0sU0FBU0gsS0FBVCxDQUFlRyxNQUFmLEVBQWlEO0FBQ3RELFNBQU94QiwyREFBVSxDQUFDckMsSUFBWCxDQUFpQjZDLE1BQUQsSUFBWUEsTUFBTSxLQUFLZ0IsTUFBdkMsQ0FBUDtBQUNEO0FBRU0sU0FBU0MsZ0JBQVQsR0FBb0M7QUFDekM7QUFDQSxRQUFNUCxZQUFZLEdBQUdILGdEQUFNLENBQUNsTCxHQUFQLENBQVcsUUFBWCxDQUFyQjs7QUFDQSxNQUFJcUwsWUFBWSxJQUFJQyxRQUFRLENBQUNELFlBQUQsQ0FBNUIsRUFBNEM7QUFDMUMsV0FBT0EsWUFBUDtBQUNELEdBTHdDLENBT3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQU9wQiw4REFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0NBRUE7O0FBQ0EsTUFBTTRCLFlBQVksR0FBR0MsbURBQU8sQ0FDMUIsTUFBTSw2S0FEb0I7QUFBQTtBQUFBLHdDQUNiLDhGQURhO0FBQUEsY0FDYix1Q0FEYTtBQUFBO0FBQUEsRUFBNUI7QUFHQSxNQUFNQyxTQUFTLEdBQUdELG1EQUFPLENBQUMsTUFBTSx1SUFBUDtBQUFBO0FBQUEsd0NBQWMsd0RBQWQ7QUFBQSxjQUFjLG9CQUFkO0FBQUE7QUFBQSxFQUF6QjtBQUVlLFNBQVNFLFdBQVQsQ0FBcUI7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQXJCLEVBQStDO0FBQzVELFFBQU1DLE1BQU0sR0FBR0MsaUVBQVEsQ0FBQyxvQkFBRCxDQUF2QjtBQUNBLFFBQU1DLE1BQU0sR0FBR0QsaUVBQVEsQ0FBQyxvQkFBRCxDQUF2QjtBQUNBLFFBQU1FLE9BQU8sR0FBR0YsaUVBQVEsQ0FBQyxvQkFBRCxDQUF4QjtBQUNBLFFBQU1HLFlBQVksR0FBR0MsOERBQVMsQ0FBQ04sU0FBUyxDQUFDTyxrQkFBWCxDQUE5QjtBQUVBLHNCQUNFLHFFQUFDLDZEQUFEO0FBQWdCLFVBQU0sRUFBRUYsWUFBeEI7QUFBQSwyQkFDRSxxRUFBQywrREFBRDtBQUFlLFdBQUssRUFBRUcsNkVBQXRCO0FBQUEsOEJBQ0UscUVBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsb0ZBQUQ7QUFBa0IsZ0JBQVEsRUFBRWhDLGlGQUE1QjtBQUFBLCtCQUNFLHFFQUFDLG1FQUFEO0FBQUEsaUNBQ0UscUVBQUMscUVBQUQ7QUFBQSxtQ0FDRSxxRUFBQyx3RUFBRDtBQUFBLHFDQUNFLHFFQUFDLFNBQUQ7QUFBQSx3Q0FDRSxxRUFBQyxTQUFELGtDQUNNd0IsU0FETjtBQUVFLDRCQUFVLEVBQUU7QUFBRUMsMEJBQUY7QUFBVUUsMEJBQVY7QUFBa0JDO0FBQWxCO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUtFLHFFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURELE1BQU1LLFNBQVMsR0FBRztBQUNoQkMsT0FBSyxFQUFFLFNBRFM7QUFFaEJDLE9BQUssRUFBRSxTQUZTO0FBR2hCQyxNQUFJLEVBQUU7QUFDSixTQUFLLFNBREQ7QUFFSixTQUFLLFNBRkQ7QUFHSixTQUFLLFNBSEQ7QUFJSixTQUFLLFNBSkQ7QUFLSixTQUFLLFNBTEQ7QUFLWTtBQUNoQixTQUFLLFNBTkQ7QUFPSixTQUFLLFNBUEQ7QUFPWTtBQUNoQixTQUFLLFNBUkQ7QUFTSixTQUFLO0FBVEQsR0FIVTtBQWNoQkMsTUFBSSxFQUFFO0FBQ0pDLFFBQUksRUFBRSxTQURGO0FBQ2E7QUFDakJDLFVBQU0sRUFBRSxTQUZKO0FBR0pDLFdBQU8sRUFBRSxTQUhMO0FBR2dCO0FBQ3BCQyxTQUFLLEVBQUUsU0FKSDtBQUtKQyxTQUFLLEVBQUU7QUFMSCxHQWRVO0FBcUJoQkMsYUFBVyxFQUFFLGFBckJHO0FBc0JoQkMsU0FBTyxFQUFFO0FBQ1BKLFdBQU8sRUFBRSxTQURGO0FBQ2E7QUFDcEJLLFNBQUssRUFBRSxTQUZBO0FBR1BDLGFBQVMsRUFBRSxTQUhKO0FBSVBMLFNBQUssRUFBRTtBQUpBLEdBdEJPO0FBNEJoQk0sV0FBUyxFQUFFO0FBQ1RQLFdBQU8sRUFBRSxTQURBO0FBRVRLLFNBQUssRUFBRSxTQUZFO0FBR1RDLGFBQVMsRUFBRTtBQUhGLEdBNUJLO0FBaUNoQkUsUUFBTSxFQUFFO0FBQ05SLFdBQU8sRUFBRSxTQURIO0FBRU5LLFNBQUssRUFBRSxTQUZEO0FBR05DLGFBQVMsRUFBRTtBQUhMLEdBakNRO0FBc0NoQkcsTUFBSSxFQUFFO0FBQ0pULFdBQU8sRUFBRSxTQURMO0FBRUpVLFFBQUksRUFBRSxTQUZGO0FBR0pULFNBQUssRUFBRSxTQUhIO0FBSUpVLFFBQUksRUFBRTtBQUpGLEdBdENVO0FBNENoQkMsS0FBRyxFQUFFLFNBNUNXO0FBNkNoQkMsU0FBTyxFQUFFLEVBN0NPO0FBOENoQkMsU0FBTyxFQUFFLEVBOUNPO0FBK0NoQkMsT0FBSyxFQUFFLEVBL0NTO0FBZ0RoQkMsV0FBUyxFQUFFO0FBaERLLENBQWxCO0FBbURPLE1BQU14QixZQUFZLEdBQUc7QUFDMUJ5QixRQUFNLGtDQUNEeEIsU0FEQztBQUVKbk4sUUFBSSxFQUFFO0FBQ0o0TyxRQUFFLEVBQUUsRUFEQTtBQUVKckIsVUFBSSxFQUFFO0FBRkYsS0FGRjtBQU1Kc0IsZUFBVyxFQUFFLFVBTlQ7QUFPSkMsaUJBQWEsRUFBRSxXQVBYO0FBUUpDLG9CQUFnQixFQUFFLEVBUmQ7QUFTSkMsYUFBUyxFQUFFLGNBVFA7QUFVSkMsZUFBVyxFQUFFLE9BVlQ7QUFXSkMsaUJBQWEsRUFBRSxpQkFYWDtBQVlKQyxzQkFBa0IsRUFBRSxlQVpoQjtBQWFKQyxxQkFBaUIsRUFBRSxpQkFiZjtBQWNKQyxhQUFTLEVBQUUsaUJBZFA7QUFlSkMsU0FBSyxFQUFFO0FBQ0wvQixVQUFJLEVBQUUsRUFERDtBQUVMcUIsUUFBRSxFQUFFLEVBRkM7QUFHTGxNLFlBQU0sRUFBRSxFQUhIO0FBSUw2TSxXQUFLLEVBQUUsRUFKRjtBQUtMQyxpQkFBVyxFQUFFO0FBTFI7QUFmSCxJQURvQjtBQXdCMUI7QUFDQUMsYUFBVyxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsUUFBbkIsRUFBNkIsUUFBN0IsQ0F6QmE7QUEwQjFCO0FBQ0FDLE9BQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLEVBQVYsRUFBYyxFQUFkLEVBQWtCLEVBQWxCLEVBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLEVBQWdDLEdBQWhDLENBM0JtQjtBQTRCMUI7QUFFQTtBQUNBO0FBQ0FDLFdBQVMsRUFBRTtBQUNUQyxNQUFFLEVBQUUsRUFESztBQUVUQyxNQUFFLEVBQUUsRUFGSztBQUdUQyxRQUFJLEVBQUUsRUFIRztBQUlUQyxNQUFFLEVBQUUsRUFKSztBQUtUQyxNQUFFLEVBQUUsRUFMSztBQU1UQyxNQUFFLEVBQUUsRUFOSztBQU9ULFdBQU8sRUFQRTtBQVFULFdBQU8sRUFSRTtBQVNULFdBQU8sRUFURTtBQVVULFdBQU87QUFWRSxHQWhDZTtBQTRDMUI7QUFDQUMsYUFBVyxFQUFFO0FBQ1hsUSxRQUFJLEVBQUUsR0FESztBQUVYbVEsV0FBTyxFQUFFLEdBRkU7QUFHWEMsUUFBSSxFQUFFLEdBSEs7QUFJWHpDLFNBQUssRUFBRSxHQUpJO0FBS1hELFdBQU8sRUFBRSxHQUxFO0FBTVhELFVBQU0sRUFBRSxHQU5HO0FBT1g0QyxZQUFRLEVBQUUsR0FQQztBQVFYN0MsUUFBSSxFQUFFLEdBUks7QUFTWDhDLFVBQU0sRUFBRTtBQVRHLEdBN0NhO0FBd0QxQkMsT0FBSyxFQUFFO0FBQ0x2USxRQUFJLEVBQUUsa0JBREQ7QUFFTG1RLFdBQU8sRUFBRSxxQkFGSjtBQUdMSyxhQUFTLEVBQUU7QUFITixHQXhEbUI7QUE4RDFCO0FBQ0FDLFNBQU8sRUFBRTtBQUNQO0FBQ0E7QUFDQTtBQUNBbFEsY0FBVSxFQUFFO0FBSkwsR0EvRGlCO0FBcUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FtUSxhQUFXLEVBQUU7QUFDWDFRLFFBQUksRUFBRSxHQURLO0FBRVg7QUFDQW1RLFdBQU8sRUFBRSxLQUhFLENBSVg7O0FBSlcsR0ExRWE7QUFpRjFCcFEsV0FBUyxFQUFFLFlBakZlO0FBa0YxQjRRLE9BQUssRUFBRTtBQUNMYixRQUFJLEVBQUUsS0FERDtBQUVMYyxTQUFLLEVBQUUsS0FGRjtBQUdMbkQsVUFBTSxFQUFFLE1BSEg7QUFJTG9ELE9BQUcsRUFBRTtBQUpBLEdBbEZtQjtBQXdGMUJDLFNBQU8sRUFBRTtBQUNQaEIsUUFBSSxFQUFFLCtCQURDO0FBRVByQyxVQUFNLEVBQUUsZ0NBRkQ7QUFHUG9ELE9BQUcsRUFBRSxpQ0FIRTtBQUlQRSxVQUFNLEVBQUU7QUFKRCxHQXhGaUI7QUE4RjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FuTixTQUFPLEVBQUUsQ0FDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOTztBQWpIaUIsQ0FBckIsQyxDQTBIUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbExBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNc0gsUUFBUSxHQUFHO0FBQ3RCTCxJQUFFLEVBQUVtRywwQ0FEa0I7QUFFdEJDLElBQUUsRUFBRUMsMENBRmtCO0FBR3RCQyxJQUFFLEVBQUVDLDBDQUhrQjtBQUl0QkMsSUFBRSxFQUFFQywwQ0FKa0I7QUFLdEJDLElBQUUsRUFBRUMsMENBTGtCO0FBTXRCQyxJQUFFLEVBQUVDLDBDQUFPQTtBQU5XLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUDtBQUNBO0FBT0EsSUFBSTNFLFlBQUo7O0FBRUEsU0FBUzRFLGtCQUFULEdBQThCO0FBQzVCLFNBQU8sSUFBSUMsdURBQUosQ0FBYTtBQUNsQkMsT0FBRyxFQUFFQyxvQ0FEYTtBQUNpQztBQUNuREMsZUFBVyxFQUFFLGFBRkssQ0FFVTs7QUFGVixHQUFiLENBQVA7QUFJRDs7QUFFRCxTQUFTQyxrQkFBVCxHQUE4QjtBQUM1QixTQUFPLElBQUlDLDJEQUFKLENBQWlCO0FBQ3RCQyxXQUFPLE1BRGU7QUFFdEI3RCxRQUFJLEVBQUVzRCxrQkFBa0IsRUFGRjtBQUd0QlEsU0FBSyxFQUFFLElBQUlDLDREQUFKLENBQWtCO0FBQ3ZCQyxrQkFBWSxFQUFFO0FBQ1pDLGFBQUssRUFBRTtBQUNMQyxnQkFBTSxFQUFFO0FBQ047QUFDQTtBQUNBQyxvQkFBUSxFQUFFO0FBQ1JDLHFCQUFPLEVBQUUsQ0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixNQUFyQixDQUREOztBQUVSQyxtQkFBSyxDQUFDQyxRQUFELEVBQVdDLFFBQVgsRUFBcUI7QUFDeEIsc0JBQU07QUFBRTVNLHVCQUFLLEVBQUU2TTtBQUFULG9CQUFzQkQsUUFBNUI7QUFDQSx1QkFBT0QsUUFBUSxtQ0FFTkMsUUFGTTtBQUdUNU0sdUJBQUssRUFBRSxDQUFDLEdBQUcyTSxRQUFRLENBQUMzTSxLQUFiLEVBQW9CLEdBQUc2TSxRQUF2QjtBQUhFLHFCQUtYRCxRQUxKO0FBTUQ7O0FBVk87QUFISjtBQURIO0FBREs7QUFEUyxLQUFsQjtBQUhlLEdBQWpCLENBQVA7QUEwQkQ7O0FBRU0sU0FBU0UsZ0JBQVQsQ0FBMEI1TyxZQUFpQixHQUFHLElBQTlDLEVBQW9EO0FBQUE7O0FBQ3pELFFBQU02TyxhQUFhLHFCQUFHaEcsWUFBSCwyREFBbUJpRixrQkFBa0IsRUFBeEQsQ0FEeUQsQ0FHekQ7QUFDQTs7O0FBQ0EsTUFBSTlOLFlBQUosRUFBa0I7QUFDaEI7QUFDQSxVQUFNOE8sYUFBYSxHQUFHRCxhQUFhLENBQUNFLE9BQWQsRUFBdEIsQ0FGZ0IsQ0FHaEI7QUFDQTs7O0FBQ0FGLGlCQUFhLENBQUNaLEtBQWQsQ0FBb0JlLE9BQXBCLGlDQUFpQ0YsYUFBakMsR0FBbUQ5TyxZQUFuRDtBQUNELEdBWHdELENBWXpEOzs7QUFDQSxZQUFtQyxPQUFPNk8sYUFBUCxDQWJzQixDQWN6RDs7QUFDQSxNQUFJLENBQUNoRyxZQUFMLEVBQW1CQSxZQUFZLEdBQUdnRyxhQUFmO0FBRW5CLFNBQU9BLGFBQVA7QUFDRDtBQUVNLFNBQVMvRixTQUFULENBQW1COUksWUFBbkIsRUFBaUM7QUFDdEMsUUFBTWlQLEtBQUssR0FBR0MscURBQU8sQ0FBQyxNQUFNTixnQkFBZ0IsQ0FBQzVPLFlBQUQsQ0FBdkIsRUFBdUMsQ0FBQ0EsWUFBRCxDQUF2QyxDQUFyQjtBQUNBLFNBQU9pUCxLQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDckVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxNQUFNRSxRQUFRLFFBQWQ7QUFFTyxNQUFNekcsUUFBUSxHQUFHLENBQUMwRyxLQUFELEVBQWdCQyxZQUFxQixHQUFHLEtBQXhDLEtBQWtEO0FBQ3hFLFFBQU07QUFBQSxPQUFDMVAsS0FBRDtBQUFBLE9BQVEyUDtBQUFSLE1BQW9Cbkksc0RBQVEsQ0FDaENnSSxRQUFRLEdBQUcsTUFBTUksTUFBTSxDQUFDQyxVQUFQLENBQWtCSixLQUFsQixFQUF5QkssT0FBbEMsR0FBNENKLFlBRHBCLENBQWxDO0FBSUEzSCx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJZ0ksT0FBTyxHQUFHLElBQWQ7QUFDQSxVQUFNQyxHQUFHLEdBQUdKLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQkosS0FBbEIsQ0FBWjs7QUFDQSxVQUFNUSxRQUFRLEdBQUcsTUFBTTtBQUNyQixVQUFJLENBQUNGLE9BQUwsRUFBYztBQUNaO0FBQ0Q7O0FBQ0RKLGNBQVEsQ0FBQyxDQUFDLENBQUNLLEdBQUcsQ0FBQ0YsT0FBUCxDQUFSO0FBQ0QsS0FMRDs7QUFPQUUsT0FBRyxDQUFDRSxXQUFKLENBQWdCRCxRQUFoQjtBQUNBTixZQUFRLENBQUNLLEdBQUcsQ0FBQ0YsT0FBTCxDQUFSO0FBRUEsV0FBTyxNQUFNO0FBQ1hDLGFBQU8sR0FBRyxLQUFWO0FBQ0FDLFNBQUcsQ0FBQ0csY0FBSixDQUFtQkYsUUFBbkI7QUFDRCxLQUhEO0FBSUQsR0FqQlEsRUFpQk4sQ0FBQ1IsS0FBRCxDQWpCTSxDQUFUO0FBbUJBLFNBQU96UCxLQUFQO0FBQ0QsQ0F6Qk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFA7QUFDQTs7QUFDQSxNQUFNb1EsYUFBYSxHQUFJQyxLQUFELElBQ3BCQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JDLElBQWxCLEtBQTJCLE9BQTNCLElBQXNDRixLQUFLLENBQUNDLFdBQU4sQ0FBa0JDLElBQWxCLEtBQTJCLFFBRG5FOztBQUdBLE1BQU1DLFNBQVMsR0FBRyxDQUFDSCxLQUFELEVBQWFJLFlBQWIsS0FBb0M7QUFDcEQsTUFBSSxDQUFDSixLQUFMLEVBQVksT0FBT0ksWUFBUCxDQUR3QyxDQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQUk7QUFDRixVQUFNQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBTCxDQUFXTCxLQUFYLENBQWQ7QUFDQSxXQUFPSyxLQUFQO0FBQ0QsR0FIRCxDQUdFLE9BQU9FLEdBQVAsRUFBWTtBQUNaLFdBQU9ILFlBQVA7QUFDRDtBQUNGLENBYkQ7O0FBZUEsTUFBTUksT0FBTyxHQUFJUixLQUFELElBQVc7QUFDekIsTUFBSSxDQUFDRCxhQUFhLENBQUNDLEtBQUQsQ0FBbEIsRUFBMkI7QUFDekIsV0FBT0EsS0FBUDtBQUNEOztBQUNELFNBQU9NLElBQUksQ0FBQ0csU0FBTCxDQUFlVCxLQUFmLENBQVA7QUFDRCxDQUxEOztBQU1BLE1BQU1VLGVBQWUsR0FBRyxDQUFDQyxJQUFELEVBQU9DLElBQVAsS0FBZ0I7QUFDdEMsU0FBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3RDLFVBQU1DLEdBQUcsR0FBSSxHQUFFTCxJQUFJLENBQUNLLEdBQUksVUFBeEI7QUFDQUMsc0RBQVcsQ0FBQzlQLE9BQVosQ0FBb0I2UCxHQUFwQixFQUF5QixDQUFDVCxHQUFELEVBQU1XLE9BQU4sS0FBa0I7QUFDekMsVUFBSUEsT0FBTyxLQUFLUCxJQUFJLENBQUNPLE9BQXJCLEVBQThCO0FBQzVCTixZQUFJLEdBQUdELElBQUksQ0FBQ1EsT0FBTCxDQUFhUCxJQUFiLENBQVA7QUFDQUssMERBQVcsQ0FBQ0csT0FBWixDQUFvQlQsSUFBSSxDQUFDSyxHQUF6QixFQUE4QmIsU0FBUyxDQUFDUyxJQUFELENBQXZDLEVBQWdETCxHQUFELElBQVM7QUFDdEQsY0FBSUEsR0FBSixFQUFTLE9BQU9RLE1BQU0sQ0FBQ1IsR0FBRCxDQUFiO0FBQ1RVLDREQUFXLENBQUNHLE9BQVosQ0FBb0JKLEdBQXBCLEVBQXlCTCxJQUFJLENBQUNPLE9BQTlCLEVBQXdDWCxHQUFELElBQVM7QUFDOUMsZ0JBQUlBLEdBQUosRUFBUyxPQUFPUSxNQUFNLENBQUNSLEdBQUQsQ0FBYjtBQUNULG1CQUFPTyxPQUFPLENBQUNGLElBQUQsQ0FBZDtBQUNELFdBSEQ7QUFJRCxTQU5EO0FBT0QsT0FURCxNQVNPO0FBQ0xFLGVBQU8sQ0FBQ0YsSUFBRCxDQUFQO0FBQ0Q7QUFDRixLQWJEO0FBY0QsR0FoQk0sQ0FBUDtBQWlCRCxDQWxCRDs7QUFvQkEsTUFBTVMsTUFBTSxHQUFHO0FBQ2JMLEtBQUcsRUFBRSxVQURRO0FBRWJFLFNBQU8sRUFBRSxDQUZJO0FBR2JDLFNBQU8sRUFBR3hSLEtBQUQsSUFBVztBQUNsQiw2QkFBWUEsS0FBWjtBQUNEO0FBTFksQ0FBZjtBQVFPLE1BQU1vRixVQUFVLEdBQUcsQ0FBQ3BGLEtBQUQsRUFBUTJQLFFBQVIsS0FBcUI7QUFDN0MsUUFBTTtBQUFBLE9BQUN6SyxVQUFEO0FBQUEsT0FBYXlNO0FBQWIsTUFBOEJuSyxzREFBUSxDQUFDLEtBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ3JDLEtBQUQ7QUFBQSxPQUFReU07QUFBUixNQUFvQnBLLHNEQUFRLENBQUMsSUFBRCxDQUFsQztBQUVBTyx5REFBUyxDQUFDLE1BQU07QUFDZCxtQkFBZThKLElBQWYsR0FBc0I7QUFDcEIsWUFBTVAsa0RBQVcsQ0FBQzlQLE9BQVosQ0FBb0JrUSxNQUFNLENBQUNMLEdBQTNCLEVBQWdDLENBQUNULEdBQUQsRUFBTVAsS0FBTixLQUFnQjtBQUNwRCxZQUFJTyxHQUFKLEVBQVM7QUFDUGUsdUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDQSxpQkFBT0MsUUFBUSxDQUFDaEIsR0FBRCxDQUFmO0FBQ0QsU0FKbUQsQ0FLcEQ7OztBQUNBLGNBQU1rQixhQUFhLEdBQUd0QixTQUFTLENBQUNILEtBQUQsQ0FBL0I7O0FBQ0EsWUFBSSxPQUFPcUIsTUFBTSxDQUFDRixPQUFkLEtBQTBCLFVBQTlCLEVBQTBDO0FBQ3hDVCx5QkFBZSxDQUFDVyxNQUFELEVBQVNJLGFBQVQsQ0FBZixDQUNHQyxJQURILENBQ1NkLElBQUQsSUFBVXRCLFFBQVEsQ0FBQ3NCLElBQUQsQ0FEMUIsRUFFR2MsSUFGSCxDQUVRLE1BQU1KLGFBQWEsQ0FBQyxJQUFELENBRjNCO0FBR0QsU0FKRCxNQUlPO0FBQ0xoQyxrQkFBUSxDQUFDbUMsYUFBRCxDQUFSO0FBQ0FILHVCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0Q7QUFDRixPQWZLLENBQU47QUFnQkQ7O0FBQ0RFLFFBQUk7QUFDTCxHQXBCUSxFQW9CTixFQXBCTSxDQUFUO0FBc0JBOUoseURBQVMsQ0FBQyxNQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0F1SixzREFBVyxDQUFDRyxPQUFaLENBQW9CQyxNQUFNLENBQUNMLEdBQTNCLEVBQWdDUixPQUFPLENBQUM3USxLQUFELENBQXZDO0FBQ0QsR0FMUSxFQUtOLENBQUNBLEtBQUQsQ0FMTSxDQUFUO0FBT0EsU0FBTztBQUNMa0YsY0FESztBQUVMQztBQUZLLEdBQVA7QUFJRCxDQXJDTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REUCwyQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvX2FwcFwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCBjc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcblxuZXhwb3J0IGNvbnN0IEluamVjdFJUTCA9IHN0eWxlZC5kaXZgXG4gICR7KHsgbGFuZyB9KSA9PlxuICAgIChsYW5nID09PSAnYXInIHx8IGxhbmcgPT09ICdoZScpICYmXG4gICAgYFxuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xuICAgIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZSgoeyB0aGVtZSB9KSA9PlxuICBjc3Moe1xuICAgICcqLCAqOjpiZWZvcmUsICo6OmFmdGVyJzoge1xuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgfSxcbiAgICBib2R5OiB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBmb250V2VpZ2h0OiAncmVndWxhcicsXG4gICAgICBmb250U2l6ZTogJ2Jhc2UnLFxuICAgICAgbGluZUhlaWdodDogJzEuNScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICB0cmFuc2l0aW9uOiBnZXQodGhlbWUsICdjdXN0b21zLnRyYW5zaXRpb24nKSxcbiAgICAgIFdlYmtpdFRleHRTaXplQWRqdXN0OiAnMTAwJScsXG4gICAgICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuICAgICAgTW96T3N4Rm9udFNtb290aGluZzogJ2dyYXlzY2FsZScsXG4gICAgICB0ZXh0U2hhZG93OiAnMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjAwNCknLFxuICAgIH0sXG4gICAgaDE6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiAnNXhsJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdzZW1pQm9sZCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfSxcbiAgICBoMjoge1xuICAgICAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxuICAgICAgZm9udFNpemU6ICczeGwnLFxuICAgICAgZm9udFdlaWdodDogJ3NlbWlCb2xkJyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9LFxuICAgIGgzOiB7XG4gICAgICBmb250RmFtaWx5OiAnaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogJzJ4bCcsXG4gICAgICBmb250V2VpZ2h0OiAnc2VtaUJvbGQnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH0sXG4gICAgaDQ6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiAneGwnLFxuICAgICAgZm9udFdlaWdodDogJ3NlbWlCb2xkJyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9LFxuICAgIGg1OiB7XG4gICAgICBmb250RmFtaWx5OiAnaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogJ21kJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdzZW1pQm9sZCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfSxcbiAgICBoNjoge1xuICAgICAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxuICAgICAgZm9udFNpemU6ICdiYXNlJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9LFxuICAgICdwLHNwYW4sYnV0dG9uLGxpLGRpdic6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9LFxuICAgIGE6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgfSxcbiAgICB1bDoge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgcGFkZGluZzogMCxcbiAgICB9LFxuICAgIGxpOiB7XG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICB9LFxuICAgIHByZToge1xuICAgICAgZm9udEZhbWlseTogJ21vbm9zcGFjZScsXG4gICAgICBvdmVyZmxvd1g6ICdhdXRvJyxcbiAgICAgIGNvZGU6IHtcbiAgICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb2RlOiB7XG4gICAgICBmb250RmFtaWx5OiAnbW9ub3NwYWNlJyxcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJvcmRlckNvbGxhcHNlOiAnc2VwYXJhdGUnLFxuICAgICAgYm9yZGVyU3BhY2luZzogMCxcbiAgICB9LFxuICAgIHRoOiB7XG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQnLFxuICAgIH0sXG4gICAgdGQ6IHtcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCcsXG4gICAgfSxcbiAgICBpbWc6IHtcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICAnLnF1aWNrLXZpZXctb3ZlcmxheSc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsLjUpJyxcbiAgICB9LFxuXG4gICAgJy5hZGQtYWRkcmVzcy1tb2RhbCwuYWRkLWNvbnRhY3QtbW9kYWwnOiB7XG4gICAgICBib3hTaGFkb3c6ICcwIDEwcHggNDBweCByZ2JhKDAsMCwwLDAuMTYpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzNweCAhaW1wb3J0YW50JyxcbiAgICAgICcuaW5uZXJSbmRDb21wb25lbnQnOiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIHBhZGRpbmc6ICczMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmN2Y4ZjknLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgJy5zZWFyY2gtbW9kYWwtbW9iaWxlJzoge1xuICAgICAgdHJhbnNmb3JtOiAnbm9uZSFpbXBvcnRhbnQnLFxuICAgICAgbWF4V2lkdGg6ICdub25lIWltcG9ydGFudCcsXG4gICAgICBtYXhIZWlnaHQ6ICdub25lIWltcG9ydGFudCcsXG4gICAgICB0b3A6ICcwIWltcG9ydGFudCcsXG4gICAgICBsZWZ0OiAnMCFpbXBvcnRhbnQnLFxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50IWltcG9ydGFudCcsXG4gICAgICBib3JkZXJSYWRpdXM6ICcwIWltcG9ydGFudCcsXG4gICAgfSxcblxuICAgICcucmV1c2VNb2RhbENsb3NlQnRuJzoge1xuICAgICAgcmlnaHQ6ICcxMHB4IWltcG9ydGFudCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmIWltcG9ydGFudCcsXG4gICAgICBjb2xvcjogJyMyMjIyMjIhaW1wb3J0YW50JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzE1cHghaW1wb3J0YW50JyxcbiAgICAgIHBhZGRpbmc6ICcwIDlweCFpbXBvcnRhbnQnLFxuICAgICAgYm94U2hhZG93OiAnMCAycHggOHB4IHJnYmEoMCwwLDAsMC40KScsXG4gICAgfSxcblxuICAgICcuaW1hZ2UtaXRlbSc6IHtcbiAgICAgIHBhZGRpbmc6ICcwIDE1cHgnLFxuICAgIH0sXG5cbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkgYW5kIChtaW4td2lkdGg6IDk5MXB4KSc6IHtcbiAgICAgICcuaW1hZ2UtaXRlbSc6IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICcxMHB4JyxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMTBweCcsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgICcuaW1hZ2UtaXRlbSc6IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICc3LjVweCcsXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzcuNXB4JyxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgICcucmMtdGFibGUtZml4ZWQtaGVhZGVyIC5yYy10YWJsZS1zY3JvbGwgLnJjLXRhYmxlLWhlYWRlcic6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogJzAgIWltcG9ydGFudCcsXG4gICAgICBwYWRkaW5nQm90dG9tOiAnMCAhaW1wb3J0YW50JyxcblxuICAgICAgdGg6IHtcbiAgICAgICAgcGFkZGluZzogJzhweCAyMHB4JyxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgICcuZHJhd2VyLWNvbnRlbnQtd3JhcHBlcic6IHtcbiAgICAgICcqOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICAnLnJjLXRhYmxlLWNvbnRlbnQnOiB7XG4gICAgICBib3JkZXI6IDAsXG4gICAgfSxcblxuICAgICcjbW9kYWwtcm9vdCc6IHtcbiAgICAgIHpJbmRleDogOTk5OTk5LFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgfSxcblxuICAgICcuZHJhd2VyJzoge1xuICAgICAgb3V0bGluZTogMCxcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgIH0sXG4gICAgJy5zck9ubHknOiB7XG4gICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50JyxcbiAgICAgIGNsaXBQYXRoOiAnaW5zZXQoNTAlKSAhaW1wb3J0YW50JyxcbiAgICAgIGhlaWdodDogJzFweCAhaW1wb3J0YW50JyxcbiAgICAgIG1hcmdpbjogJy0xcHggIWltcG9ydGFudCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbiAhaW1wb3J0YW50JyxcbiAgICAgIHBhZGRpbmc6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcbiAgICAgIHdpZHRoOiAnMXB4ICFpbXBvcnRhbnQnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCAhaW1wb3J0YW50JyxcbiAgICB9LFxuICAgIC8vQHRzLWlnbm9yZVxuICAgIC4uLnRoZW1lLmdsb2JhbHMsXG4gIH0pXG4pO1xuIiwiaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gJy4uL2NyZWF0ZS1jb250ZXh0JztcbmltcG9ydCB7IGFwcFJlZHVjZXIsIGluaXRpYWxTdGF0ZSB9IGZyb20gJy4vYXBwLnJlZHVjZXInO1xuXG5jb25zdCBbc3RhdGUsIGRpc3BhdGNoLCBwcm92aWRlcl0gPSB1c2VDcmVhdGVDb250ZXh0KGFwcFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5leHBvcnQgY29uc3QgdXNlQXBwU3RhdGUgPSBzdGF0ZTtcbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaCA9IGRpc3BhdGNoO1xuZXhwb3J0IGNvbnN0IEFwcFByb3ZpZGVyID0gcHJvdmlkZXI7XG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzZWFyY2hUZXJtOiAnJyxcbiAgaXNTdGlja3k6IGZhbHNlLFxuICBpc1NpZGViYXJTdGlja3k6IHRydWUsXG4gIGlzRHJhd2VyT3BlbjogZmFsc2UsXG4gIGlzTW9kYWxPcGVuOiBmYWxzZSxcbn07XG5cbnR5cGUgQWN0aW9uVHlwZSA9XG4gIHwgeyB0eXBlOiAnU0VUX1NFQVJDSF9URVJNJzsgcGF5bG9hZDogc3RyaW5nIH1cbiAgfCB7IHR5cGU6ICdTRVRfU1RJQ0tZJyB9XG4gIHwgeyB0eXBlOiAnUkVNT1ZFX1NUSUNLWScgfVxuICB8IHsgdHlwZTogJ1NFVF9TSURFQkFSX1NUSUNLWScgfVxuICB8IHsgdHlwZTogJ1JFTU9WRV9TSURFQkFSX1NUSUNLWScgfVxuICB8IHsgdHlwZTogJ1RPR0dMRV9EUkFXRVInIH1cbiAgfCB7IHR5cGU6ICdUT0dHTEVfTU9EQUwnIH07XG5cbnR5cGUgU3RhdGVUeXBlID0gdHlwZW9mIGluaXRpYWxTdGF0ZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcFJlZHVjZXIoc3RhdGU6IFN0YXRlVHlwZSwgYWN0aW9uOiBBY3Rpb25UeXBlKTogU3RhdGVUeXBlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NFVF9TRUFSQ0hfVEVSTSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VhcmNoVGVybTogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGNhc2UgJ1NFVF9TVElDS1knOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzU3RpY2t5OiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlICdSRU1PVkVfU1RJQ0tZJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1N0aWNreTogZmFsc2UsXG4gICAgICB9O1xuICAgIGNhc2UgJ1NFVF9TSURFQkFSX1NUSUNLWSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNTaWRlYmFyU3RpY2t5OiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlICdSRU1PVkVfU0lERUJBUl9TVElDS1knOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzU2lkZWJhclN0aWNreTogZmFsc2UsXG4gICAgICB9O1xuICAgIGNhc2UgJ1RPR0dMRV9EUkFXRVInOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzRHJhd2VyT3BlbjogIXN0YXRlLmlzRHJhd2VyT3BlbixcbiAgICAgIH07XG4gICAgY2FzZSAnVE9HR0xFX01PREFMJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc01vZGFsT3BlbjogIXN0YXRlLmlzTW9kYWxPcGVuLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGFjdGlvbiB0eXBlIGF0IEFwcCBSZWR1Y2VyYCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi9hdXRoLmNvbnRleHQnO1xuY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBpc0F1dGhlbnRpY2F0ZWQ6IGlzQnJvd3NlciAmJiAhIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKSxcbiAgY3VycmVudEZvcm06ICdzaWduSW4nLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZTogYW55LCBhY3Rpb246IGFueSkge1xuICBjb25zb2xlLmxvZyhzdGF0ZSwgJ2F1dGgnKTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0lHTklOJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyZW50Rm9ybTogJ3NpZ25JbicsXG4gICAgICB9O1xuICAgIGNhc2UgJ1NJR05JTl9TVUNDRVNTJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgJ1NJR05fT1VUJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlICdTSUdOVVAnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnRGb3JtOiAnc2lnblVwJyxcbiAgICAgIH07XG4gICAgY2FzZSAnRk9SR09UUEFTUyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3VycmVudEZvcm06ICdmb3Jnb3RQYXNzJyxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2F1dGhTdGF0ZSwgYXV0aERpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgSU5JVElBTF9TVEFURSk7XG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGF1dGhTdGF0ZSwgYXV0aERpc3BhdGNoIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIiwiLy8gZXhwb3J0IGNvbnN0IGNhcnRJdGVtc1RvdGFsUHJpY2UgPSAoaXRlbXMsIHsgZGlzY291bnRJblBlcmNlbnQgPSAwIH0gPSB7fSkgPT4ge1xuZXhwb3J0IGNvbnN0IGNhcnRJdGVtc1RvdGFsUHJpY2UgPSAoaXRlbXMsIGNvdXBvbiA9IG51bGwpID0+IHtcbiAgaWYgKGl0ZW1zID09PSBudWxsIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XG4gIGNvbnN0IGl0ZW1Db3N0ID0gaXRlbXMucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLnNhbGVQcmljZSkge1xuICAgICAgcmV0dXJuIHRvdGFsICsgaXRlbS5zYWxlUHJpY2UgKiBpdGVtLnF1YW50aXR5O1xuICAgIH1cbiAgICByZXR1cm4gdG90YWwgKyBpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eTtcbiAgfSwgMCk7XG4gIC8vIGNvbnN0IGRpc2NvdW50UmF0ZSA9IDEgLSBkaXNjb3VudEluUGVyY2VudDtcbiAgY29uc3QgZGlzY291bnQgPSBjb3Vwb25cbiAgICA/IChpdGVtQ29zdCAqIE51bWJlcihjb3Vwb24uZGlzY291bnRJblBlcmNlbnQpKSAvIDEwMFxuICAgIDogMDtcbiAgLy8gaXRlbUNvc3QgKiBkaXNjb3VudFJhdGUgKiBUQVhfUkFURSArIHNoaXBwaW5nO1xuICAvLyByZXR1cm4gaXRlbUNvc3QgKiBkaXNjb3VudFJhdGU7XG4gIHJldHVybiBpdGVtQ29zdCAtIGRpc2NvdW50O1xufTtcbi8vIGNhcnRJdGVtcywgY2FydEl0ZW1Ub0FkZFxuY29uc3QgYWRkSXRlbVRvQ2FydCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IGV4aXN0aW5nQ2FydEl0ZW1JbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleChcbiAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcbiAgKTtcblxuICBpZiAoZXhpc3RpbmdDYXJ0SXRlbUluZGV4ID4gLTEpIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZS5pdGVtc107XG4gICAgbmV3U3RhdGVbZXhpc3RpbmdDYXJ0SXRlbUluZGV4XS5xdWFudGl0eSArPSBhY3Rpb24ucGF5bG9hZC5xdWFudGl0eTtcbiAgICByZXR1cm4gbmV3U3RhdGU7XG4gIH1cbiAgcmV0dXJuIFsuLi5zdGF0ZS5pdGVtcywgYWN0aW9uLnBheWxvYWRdO1xufTtcblxuLy8gY2FydEl0ZW1zLCBjYXJ0SXRlbVRvUmVtb3ZlXG5jb25zdCByZW1vdmVJdGVtRnJvbUNhcnQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gc3RhdGUuaXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcbiAgICAgIGNvbnN0IG5ld1F1YW50aXR5ID0gaXRlbS5xdWFudGl0eSAtIGFjdGlvbi5wYXlsb2FkLnF1YW50aXR5O1xuXG4gICAgICByZXR1cm4gbmV3UXVhbnRpdHkgPiAwXG4gICAgICAgID8gWy4uLmFjYywgeyAuLi5pdGVtLCBxdWFudGl0eTogbmV3UXVhbnRpdHkgfV1cbiAgICAgICAgOiBbLi4uYWNjXTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi5hY2MsIGl0ZW1dO1xuICB9LCBbXSk7XG59O1xuXG5jb25zdCBjbGVhckl0ZW1Gcm9tQ2FydCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBzdGF0ZS5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1JFSFlEUkFURSc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlICdUT0dHTEVfQ0FSVCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNPcGVuOiAhc3RhdGUuaXNPcGVuIH07XG4gICAgY2FzZSAnQUREX0lURU0nOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGl0ZW1zOiBhZGRJdGVtVG9DYXJ0KHN0YXRlLCBhY3Rpb24pIH07XG4gICAgY2FzZSAnUkVNT1ZFX0lURU0nOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGl0ZW1zOiByZW1vdmVJdGVtRnJvbUNhcnQoc3RhdGUsIGFjdGlvbikgfTtcbiAgICBjYXNlICdDTEVBUl9JVEVNX0ZST01fQ0FSVCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXRlbXM6IGNsZWFySXRlbUZyb21DYXJ0KHN0YXRlLCBhY3Rpb24pIH07XG4gICAgY2FzZSAnQ0xFQVJfQ0FSVCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXRlbXM6IFtdIH07XG4gICAgY2FzZSAnQVBQTFlfQ09VUE9OJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjb3Vwb246IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSAnUkVNT1ZFX0NPVVBPTic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY291cG9uOiBudWxsIH07XG4gICAgY2FzZSAnVE9HR0xFX1JFU1RBVVJBTlQnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzUmVzdGF1cmFudDogIXN0YXRlLmlzUmVzdGF1cmFudCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gYWN0aW9uOiAke2FjdGlvbi50eXBlfWApO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZWR1Y2VyLCBjYXJ0SXRlbXNUb3RhbFByaWNlIH0gZnJvbSAnLi9jYXJ0LnJlZHVjZXInO1xuaW1wb3J0IHsgdXNlU3RvcmFnZSB9IGZyb20gJ3V0aWxzL3VzZS1zdG9yYWdlJztcbmNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBhbnkpO1xuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgaXNPcGVuOiBmYWxzZSxcbiAgaXRlbXM6IFtdLFxuICBpc1Jlc3RhdXJhbnQ6IGZhbHNlLFxuICBjb3Vwb246IG51bGwsXG59O1xuXG5jb25zdCB1c2VDYXJ0QWN0aW9ucyA9IChpbml0aWFsQ2FydCA9IElOSVRJQUxfU1RBVEUpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxDYXJ0KTtcblxuICBjb25zdCBhZGRJdGVtSGFuZGxlciA9IChpdGVtLCBxdWFudGl0eSA9IDEpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdBRERfSVRFTScsIHBheWxvYWQ6IHsgLi4uaXRlbSwgcXVhbnRpdHkgfSB9KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVJdGVtSGFuZGxlciA9IChpdGVtLCBxdWFudGl0eSA9IDEpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRU1PVkVfSVRFTScsIHBheWxvYWQ6IHsgLi4uaXRlbSwgcXVhbnRpdHkgfSB9KTtcbiAgfTtcblxuICBjb25zdCBjbGVhckl0ZW1Gcm9tQ2FydEhhbmRsZXIgPSAoaXRlbSkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NMRUFSX0lURU1fRlJPTV9DQVJUJywgcGF5bG9hZDogaXRlbSB9KTtcbiAgfTtcblxuICBjb25zdCBjbGVhckNhcnRIYW5kbGVyID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NMRUFSX0NBUlQnIH0pO1xuICB9O1xuICBjb25zdCB0b2dnbGVDYXJ0SGFuZGxlciA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdUT0dHTEVfQ0FSVCcgfSk7XG4gIH07XG4gIGNvbnN0IGNvdXBvbkhhbmRsZXIgPSAoY291cG9uKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQVBQTFlfQ09VUE9OJywgcGF5bG9hZDogY291cG9uIH0pO1xuICB9O1xuICBjb25zdCByZW1vdmVDb3Vwb25IYW5kbGVyID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFTU9WRV9DT1VQT04nIH0pO1xuICB9O1xuICBjb25zdCByZWh5ZHJhdGVMb2NhbFN0YXRlID0gKHBheWxvYWQpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRUhZRFJBVEUnLCBwYXlsb2FkIH0pO1xuICB9O1xuICBjb25zdCB0b2dnbGVSZXN0YXVyYW50ID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1RPR0dMRV9SRVNUQVVSQU5UJyB9KTtcbiAgfTtcbiAgY29uc3QgaXNJbkNhcnRIYW5kbGVyID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLml0ZW1zPy5zb21lKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XG4gIH07XG4gIGNvbnN0IGdldEl0ZW1IYW5kbGVyID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLml0ZW1zPy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XG4gIH07XG4gIGNvbnN0IGdldENhcnRJdGVtc1ByaWNlID0gKCkgPT4gY2FydEl0ZW1zVG90YWxQcmljZShzdGF0ZS5pdGVtcykudG9GaXhlZCgyKTtcbiAgY29uc3QgZ2V0Q2FydEl0ZW1zVG90YWxQcmljZSA9ICgpID0+XG4gICAgY2FydEl0ZW1zVG90YWxQcmljZShzdGF0ZS5pdGVtcywgc3RhdGUuY291cG9uKS50b0ZpeGVkKDIpO1xuXG4gIGNvbnN0IGdldERpc2NvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvdGFsID0gY2FydEl0ZW1zVG90YWxQcmljZShzdGF0ZS5pdGVtcyk7XG4gICAgY29uc3QgZGlzY291bnQgPSBzdGF0ZS5jb3Vwb25cbiAgICAgID8gKHRvdGFsICogTnVtYmVyKHN0YXRlLmNvdXBvbj8uZGlzY291bnRJblBlcmNlbnQpKSAvIDEwMFxuICAgICAgOiAwO1xuICAgIHJldHVybiBkaXNjb3VudC50b0ZpeGVkKDIpO1xuICB9O1xuICBjb25zdCBnZXRJdGVtc0NvdW50ID0gc3RhdGUuaXRlbXM/LnJlZHVjZShcbiAgICAoYWNjLCBpdGVtKSA9PiBhY2MgKyBpdGVtLnF1YW50aXR5LFxuICAgIDBcbiAgKTtcbiAgcmV0dXJuIHtcbiAgICBzdGF0ZSxcbiAgICBnZXRJdGVtc0NvdW50LFxuICAgIHJlaHlkcmF0ZUxvY2FsU3RhdGUsXG4gICAgYWRkSXRlbUhhbmRsZXIsXG4gICAgcmVtb3ZlSXRlbUhhbmRsZXIsXG4gICAgY2xlYXJJdGVtRnJvbUNhcnRIYW5kbGVyLFxuICAgIGNsZWFyQ2FydEhhbmRsZXIsXG4gICAgaXNJbkNhcnRIYW5kbGVyLFxuICAgIGdldEl0ZW1IYW5kbGVyLFxuICAgIHRvZ2dsZUNhcnRIYW5kbGVyLFxuICAgIGdldENhcnRJdGVtc1RvdGFsUHJpY2UsXG4gICAgZ2V0Q2FydEl0ZW1zUHJpY2UsXG4gICAgY291cG9uSGFuZGxlcixcbiAgICByZW1vdmVDb3Vwb25IYW5kbGVyLFxuICAgIGdldERpc2NvdW50LFxuICAgIHRvZ2dsZVJlc3RhdXJhbnQsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7XG4gICAgc3RhdGUsXG4gICAgcmVoeWRyYXRlTG9jYWxTdGF0ZSxcbiAgICBnZXRJdGVtc0NvdW50LFxuICAgIGFkZEl0ZW1IYW5kbGVyLFxuICAgIHJlbW92ZUl0ZW1IYW5kbGVyLFxuICAgIGNsZWFySXRlbUZyb21DYXJ0SGFuZGxlcixcbiAgICBjbGVhckNhcnRIYW5kbGVyLFxuICAgIGlzSW5DYXJ0SGFuZGxlcixcbiAgICBnZXRJdGVtSGFuZGxlcixcbiAgICB0b2dnbGVDYXJ0SGFuZGxlcixcbiAgICBnZXRDYXJ0SXRlbXNUb3RhbFByaWNlLFxuICAgIGNvdXBvbkhhbmRsZXIsXG4gICAgcmVtb3ZlQ291cG9uSGFuZGxlcixcbiAgICBnZXRDYXJ0SXRlbXNQcmljZSxcbiAgICBnZXREaXNjb3VudCxcbiAgICB0b2dnbGVSZXN0YXVyYW50LFxuICB9ID0gdXNlQ2FydEFjdGlvbnMoKTtcbiAgY29uc3QgeyByZWh5ZHJhdGVkLCBlcnJvciB9ID0gdXNlU3RvcmFnZShzdGF0ZSwgcmVoeWRyYXRlTG9jYWxTdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGlzT3Blbjogc3RhdGUuaXNPcGVuLFxuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMsXG4gICAgICAgIGNvdXBvbjogc3RhdGUuY291cG9uLFxuICAgICAgICBpc1Jlc3RhdXJhbnQ6IHN0YXRlLmlzUmVzdGF1cmFudCxcbiAgICAgICAgY2FydEl0ZW1zQ291bnQ6IHN0YXRlLml0ZW1zPy5sZW5ndGgsXG4gICAgICAgIGl0ZW1zQ291bnQ6IGdldEl0ZW1zQ291bnQsXG4gICAgICAgIGFkZEl0ZW06IGFkZEl0ZW1IYW5kbGVyLFxuICAgICAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtSGFuZGxlcixcbiAgICAgICAgcmVtb3ZlSXRlbUZyb21DYXJ0OiBjbGVhckl0ZW1Gcm9tQ2FydEhhbmRsZXIsXG4gICAgICAgIGNsZWFyQ2FydDogY2xlYXJDYXJ0SGFuZGxlcixcbiAgICAgICAgaXNJbkNhcnQ6IGlzSW5DYXJ0SGFuZGxlcixcbiAgICAgICAgZ2V0SXRlbTogZ2V0SXRlbUhhbmRsZXIsXG4gICAgICAgIHRvZ2dsZUNhcnQ6IHRvZ2dsZUNhcnRIYW5kbGVyLFxuICAgICAgICBjYWxjdWxhdGVQcmljZTogZ2V0Q2FydEl0ZW1zVG90YWxQcmljZSxcbiAgICAgICAgY2FsY3VsYXRlU3ViVG90YWxQcmljZTogZ2V0Q2FydEl0ZW1zUHJpY2UsXG4gICAgICAgIGFwcGx5Q291cG9uOiBjb3Vwb25IYW5kbGVyLFxuICAgICAgICByZW1vdmVDb3Vwb246IHJlbW92ZUNvdXBvbkhhbmRsZXIsXG4gICAgICAgIGNhbGN1bGF0ZURpc2NvdW50OiBnZXREaXNjb3VudCxcbiAgICAgICAgdG9nZ2xlUmVzdGF1cmFudCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQ2FydCA9ICgpID0+IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVDb250ZXh0PFN0YXRlVHlwZSwgQWN0aW9uVHlwZT4oXG4gIHJlZHVjZXI6IFJlYWN0LlJlZHVjZXI8U3RhdGVUeXBlLCBBY3Rpb25UeXBlPixcbiAgaW5pdGlhbFN0YXRlOiBTdGF0ZVR5cGVcbikge1xuICBjb25zdCBkZWZhdWx0RGlzcGF0Y2g6IFJlYWN0LkRpc3BhdGNoPEFjdGlvblR5cGU+ID0gKCkgPT4gaW5pdGlhbFN0YXRlO1xuICBjb25zdCBzdGF0ZUN0eCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgZGlzcGF0Y2hDdHggPSBjcmVhdGVDb250ZXh0KGRlZmF1bHREaXNwYXRjaCk7XG5cbiAgZnVuY3Rpb24gdXNlU3RhdGVDdHg8SyBleHRlbmRzIGtleW9mIFN0YXRlVHlwZT4ocHJvcGVydHk6IEspIHtcbiAgICBjb25zdCBzdGF0ZSA9IHVzZUNvbnRleHQoc3RhdGVDdHgpO1xuICAgIHJldHVybiBzdGF0ZVtwcm9wZXJ0eV07IC8vIG9ubHkgb25lIGRlcHRoIHNlbGVjdG9yIGZvciBjb21wYXJpc29uXG4gIH1cblxuICBmdW5jdGlvbiB1c2VEaXNwYXRjaEN0eCgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChkaXNwYXRjaEN0eCk7XG4gIH1cblxuICBmdW5jdGlvbiBQcm92aWRlcihwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e30+KSB7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyPFxuICAgICAgUmVhY3QuUmVkdWNlcjxTdGF0ZVR5cGUsIEFjdGlvblR5cGU+XG4gICAgPihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGlzcGF0Y2hDdHguUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cbiAgICAgICAgPHN0YXRlQ3R4LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+e3Byb3BzLmNoaWxkcmVufTwvc3RhdGVDdHguUHJvdmlkZXI+XG4gICAgICA8L2Rpc3BhdGNoQ3R4LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIFt1c2VTdGF0ZUN0eCwgdXNlRGlzcGF0Y2hDdHgsIFByb3ZpZGVyXSBhcyBjb25zdDtcbn1cblxuLy8gY29uc3QgW3VzZVRleHRTdGF0ZSwgdXNlVGV4dERpc3BhdGNoLCBUZXh0UHJvdmlkZXJdID0gdXNlQ3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUsIHJlZHVjZXIpO1xuLy8gZXhwb3J0IGNvbnN0IFRleHRDb250ZXh0ID0gY3R4O1xuLy8gZXhwb3J0IGZ1bmN0aW9uIEFwcCgpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8VGV4dFByb3ZpZGVyPlxuLy8gICAgICAgPENvbXBvbmVudCAvPlxuLy8gICAgIDwvVGV4dFByb3ZpZGVyPlxuLy8gICApXG4vLyB9XG4vLyBleHBvcnQgZnVuY3Rpb24gQ29tcG9uZW50KCkge1xuLy8gICBjb25zdCBzdGF0ZSA9IHVzZVRleHRTdGF0ZSgnc3RhdGUnKVxuLy8gICBjb25zdCBkaXNwYXRjaCA9IHVzZVRleHREaXNwYXRjaCgpXG4vLyBjb25zdCBpbmNyZW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdpbmNyZW1lbnQnIH0pLCBbZGlzcGF0Y2hdKTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAge3N0YXRlfVxuLy8gICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbmNyZW1lbnR9PlRvZ2dsZTwvYnV0dG9uPlxuLy8gICAgIDwvZGl2PlxuLy8gICApXG4vLyB9XG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZSA9ICdlbicgYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBsb2NhbGVzID0gWydlbicsICdhcicsICdlcycsICdkZScsICd6aCcsICdoZSddIGFzIGNvbnN0O1xuZXhwb3J0IGNvbnN0IHJ0bExvY2FsZXMgPSBbJ2FyJywgJ2hlJ10gYXMgY29uc3Q7XG5cbi8vIG5lZWQgdG8gY3VzdG9taXplIGxhdGVyXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2VOYW1lcyA9IHtcbiAgZW46ICdFbmdsaXNoJyxcbiAgZnI6ICdmcmFuw6dhaXMnLFxuICBwbDogJ3BvbHNraScsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSW50bFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgeyBJbmplY3RSVEwgfSBmcm9tICdhc3NldHMvc3R5bGVzL2dsb2JhbC5zdHlsZSc7XG5pbXBvcnQgQ29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyBpc1JUTCwgaXNMb2NhbGUgfSBmcm9tICcuL2xhbmd1YWdlLnV0aWxzJztcbmltcG9ydCB7IFN0eWxlU2hlZXRNYW5hZ2VyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJUTFBsdWdpbiBmcm9tICdzdHlsaXMtcGx1Z2luLXJ0bCc7XG5cbmNvbnN0IExhbmd1YWdlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30gYXMgYW55KTtcblxuZXhwb3J0IGNvbnN0IExhbmd1YWdlUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgbWVzc2FnZXMgfSkgPT4ge1xuICBjb25zdCBbbG9jYWxlLCBzZXRMb2NhbGVdID0gUmVhY3QudXNlU3RhdGUoJ2VuJyk7XG4gIGNvbnN0IGNoYW5nZUxhbmd1YWdlID0gKG5ld0xvY2FsZSk6IHZvaWQgPT4ge1xuICAgIHNldExvY2FsZShuZXdMb2NhbGUpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gbmV3TG9jYWxlO1xuICAgIENvb2tpZS5zZXQoJ2xvY2FsZScsIG5ld0xvY2FsZSk7XG4gIH07XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9jYWxTZXR0aW5nID0gQ29va2llLmdldCgnbG9jYWxlJyk7XG4gICAgaWYgKGxvY2FsU2V0dGluZyAmJiBpc0xvY2FsZShsb2NhbFNldHRpbmcpKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IGxvY2FsU2V0dGluZztcbiAgICAgIHNldExvY2FsZShsb2NhbFNldHRpbmcpO1xuICAgIH1cbiAgfSwgW2xvY2FsZV0pO1xuICBsZXQgaXNSdGwgPSBpc1JUTChsb2NhbGUpO1xuXG4gIHJldHVybiAoXG4gICAgPExhbmd1YWdlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBsb2NhbGUsIGNoYW5nZUxhbmd1YWdlLCBpc1J0bCB9fT5cbiAgICAgIDxJbnRsUHJvdmlkZXIgbG9jYWxlPXtsb2NhbGV9IG1lc3NhZ2VzPXttZXNzYWdlc1tsb2NhbGVdfT5cbiAgICAgICAgPEluamVjdFJUTCBsYW5nPXtsb2NhbGV9IGRpcj17aXNSdGwgPyAncnRsJyA6ICdsdHInfT5cbiAgICAgICAgICA8U3R5bGVTaGVldE1hbmFnZXIgc3R5bGlzUGx1Z2lucz17aXNSdGwgPyBbUlRMUGx1Z2luXSA6IFtdfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L1N0eWxlU2hlZXRNYW5hZ2VyPlxuICAgICAgICA8L0luamVjdFJUTD5cbiAgICAgIDwvSW50bFByb3ZpZGVyPlxuICAgIDwvTGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUxvY2FsZSA9ICgpID0+IFJlYWN0LnVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KTtcbiIsImltcG9ydCB7IGxvY2FsZXMsIHJ0bExvY2FsZXMsIGRlZmF1bHRMb2NhbGUgfSBmcm9tICcuL2xhbmd1YWdlLmNvbmZpZyc7XG5pbXBvcnQgQ29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmV4cG9ydCB0eXBlIExvY2FsZSA9IHR5cGVvZiBsb2NhbGVzW251bWJlcl07XG5cbmV4cG9ydCB0eXBlIFN0cmluZ3MgPSB7XG4gIFtrZXkgaW4gTG9jYWxlXToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsZSh0ZXN0ZWQ6IHN0cmluZyk6IHRlc3RlZCBpcyBMb2NhbGUge1xuICByZXR1cm4gbG9jYWxlcy5zb21lKChsb2NhbGUpID0+IGxvY2FsZSA9PT0gdGVzdGVkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUlRMKHRlc3RlZDogc3RyaW5nKTogdGVzdGVkIGlzIExvY2FsZSB7XG4gIHJldHVybiBydGxMb2NhbGVzLnNvbWUoKGxvY2FsZSkgPT4gbG9jYWxlID09PSB0ZXN0ZWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdGlhbExvY2FsZSgpOiBMb2NhbGUge1xuICAvLyBwcmVmZXJlbmNlIGZyb20gdGhlIHByZXZpb3VzIHNlc3Npb25cbiAgY29uc3QgbG9jYWxTZXR0aW5nID0gQ29va2llLmdldCgnbG9jYWxlJyk7XG4gIGlmIChsb2NhbFNldHRpbmcgJiYgaXNMb2NhbGUobG9jYWxTZXR0aW5nKSkge1xuICAgIHJldHVybiBsb2NhbFNldHRpbmc7XG4gIH1cblxuICAvLyB0aGUgbGFuZ3VhZ2Ugc2V0dGluZyBvZiB0aGUgYnJvd3NlclxuICAvLyBjb25zdCBbYnJvd3NlclNldHRpbmddID0gbmF2aWdhdG9yLmxhbmd1YWdlLnNwbGl0KCctJyk7XG4gIC8vIGlmIChpc0xvY2FsZShicm93c2VyU2V0dGluZykpIHtcbiAgLy8gICByZXR1cm4gYnJvd3NlclNldHRpbmc7XG4gIC8vIH1cblxuICByZXR1cm4gZGVmYXVsdExvY2FsZTtcbn1cbiIsImltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tIFwic2l0ZS1zZXR0aW5ncy9zaXRlLXRoZW1lL2RlZmF1bHRcIjtcbmltcG9ydCB7IEFwcFByb3ZpZGVyIH0gZnJvbSBcImNvbnRleHRzL2FwcC9hcHAucHJvdmlkZXJcIjtcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCJjb250ZXh0cy9hdXRoL2F1dGgucHJvdmlkZXJcIjtcbmltcG9ydCB7IExhbmd1YWdlUHJvdmlkZXIgfSBmcm9tIFwiY29udGV4dHMvbGFuZ3VhZ2UvbGFuZ3VhZ2UucHJvdmlkZXJcIjtcbmltcG9ydCB7IENhcnRQcm92aWRlciB9IGZyb20gXCJjb250ZXh0cy9jYXJ0L3VzZS1jYXJ0XCI7XG5pbXBvcnQgeyB1c2VBcG9sbG8gfSBmcm9tIFwidXRpbHMvYXBvbGxvXCI7XG5pbXBvcnQgeyB1c2VNZWRpYSB9IGZyb20gXCJ1dGlscy91c2UtbWVkaWFcIjtcblxuLy8gRXh0ZXJuYWwgQ1NTIGltcG9ydCBoZXJlXG5pbXBvcnQgXCJyYy1kcmF3ZXIvYXNzZXRzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwicmMtdGFibGUvYXNzZXRzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwicmMtY29sbGFwc2UvYXNzZXRzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwicmVhY3QtbXVsdGktY2Fyb3VzZWwvbGliL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBcImNvbXBvbmVudHMvbXVsdGktY2Fyb3VzZWwvbXVsdGktY2Fyb3VzZWwuc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCJyZWFjdC1zcHJpbmctbW9kYWwvZGlzdC9pbmRleC5jc3NcIjtcbmltcG9ydCBcIm92ZXJsYXlzY3JvbGxiYXJzL2Nzcy9PdmVybGF5U2Nyb2xsYmFycy5jc3NcIjtcbmltcG9ydCBcImNvbXBvbmVudHMvc2Nyb2xsYmFyL3Njcm9sbGJhci5jc3NcIjtcbmltcG9ydCBcIkByZWRxL3JldXNlLW1vZGFsL2xpYi9pbmRleC5jc3NcIjtcbmltcG9ydCBcInN3aXBlci9zd2lwZXItYnVuZGxlLm1pbi5jc3NcIjtcbmltcG9ydCB7IEdsb2JhbFN0eWxlIH0gZnJvbSBcImFzc2V0cy9zdHlsZXMvZ2xvYmFsLnN0eWxlXCI7XG5cbi8vIExhbmd1YWdlIHRyYW5zbGF0aW9uIG1lc3NhZ2VzXG5pbXBvcnQgeyBtZXNzYWdlcyB9IGZyb20gXCJzaXRlLXNldHRpbmdzL3NpdGUtdHJhbnNsYXRpb24vbWVzc2FnZXNcIjtcbmltcG9ydCBcInR5cGVmYWNlLWxhdG9cIjtcbmltcG9ydCBcInR5cGVmYWNlLXBvcHBpbnNcIjtcbi8vIG5lZWQgdG8gcHJvdmlkZSB0eXBlc1xuY29uc3QgRGVtb1N3aXRjaGVyID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KFwiY29tcG9uZW50cy9kZW1vLXN3aXRjaGVyL3N3aXRjaGVyLWJ0blwiKVxuKTtcbmNvbnN0IEFwcExheW91dCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwibGF5b3V0cy9hcHAtbGF5b3V0XCIpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXh0ZW5kZWRBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IG1vYmlsZSA9IHVzZU1lZGlhKFwiKG1heC13aWR0aDogNTgwcHgpXCIpO1xuICBjb25zdCB0YWJsZXQgPSB1c2VNZWRpYShcIihtYXgtd2lkdGg6IDk5MXB4KVwiKTtcbiAgY29uc3QgZGVza3RvcCA9IHVzZU1lZGlhKFwiKG1pbi13aWR0aDogOTkycHgpXCIpO1xuICBjb25zdCBhcG9sbG9DbGllbnQgPSB1c2VBcG9sbG8ocGFnZVByb3BzLmluaXRpYWxBcG9sbG9TdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG9DbGllbnR9PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e2RlZmF1bHRUaGVtZX0+XG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgICA8TGFuZ3VhZ2VQcm92aWRlciBtZXNzYWdlcz17bWVzc2FnZXN9PlxuICAgICAgICAgIDxDYXJ0UHJvdmlkZXI+XG4gICAgICAgICAgICA8QXBwUHJvdmlkZXI+XG4gICAgICAgICAgICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgZGV2aWNlVHlwZT17eyBtb2JpbGUsIHRhYmxldCwgZGVza3RvcCB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxEZW1vU3dpdGNoZXIgLz5cbiAgICAgICAgICAgICAgICA8L0FwcExheW91dD5cbiAgICAgICAgICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgICAgICAgICA8L0FwcFByb3ZpZGVyPlxuICAgICAgICAgIDwvQ2FydFByb3ZpZGVyPlxuICAgICAgICA8L0xhbmd1YWdlUHJvdmlkZXI+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKTtcbn1cbiIsImNvbnN0IGJhc2VDb2xvciA9IHtcbiAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgYmxhY2s6ICcjMDAwMDAwJyxcbiAgZ3JheToge1xuICAgIDEwMDogJyNmOWY5ZjknLFxuICAgIDIwMDogJyNGN0Y3RjcnLFxuICAgIDMwMDogJyNmNGY0ZjQnLFxuICAgIDQwMDogJyNGM0YzRjMnLFxuICAgIDUwMDogJyNmMWYxZjEnLCAvLyBib3JkZXIgYWx0IGNvbG9yXG4gICAgNjAwOiAnI0VkRWRFZCcsXG4gICAgNzAwOiAnI0U2RTZFNicsIC8vIGJvcmRlciBjb2xvclxuICAgIDgwMDogJyNDMkMzQ0MnLFxuICAgIDkwMDogJyNiZGJkYmQnLFxuICB9LFxuICB0ZXh0OiB7XG4gICAgYm9sZDogJyMwRDExMzYnLCAvLyBoZWFkaW5nIGNvbG9yXG4gICAgbWVkaXVtOiAnIzQyNDU2MScsXG4gICAgcmVndWxhcjogJyM3Nzc5OEMnLCAvLyByZWd1bGFyIHRleHQgY29sb3JcbiAgICBsaWdodDogJyM5MDkwOTAnLFxuICAgIGxhYmVsOiAnIzc2NzY3NicsXG4gIH0sXG4gIHRyYW5zcGFyZW50OiAndHJhbnNwYXJlbnQnLFxuICBwcmltYXJ5OiB7XG4gICAgcmVndWxhcjogJyMwMDlFN0YnLCAvLyBwcmltYXJ5IGNvbG9yXG4gICAgaG92ZXI6ICcjMDE5Mzc2JyxcbiAgICBhbHRlcm5hdGU6ICcjMDI4NDg5JyxcbiAgICBsaWdodDogJyNiN2RiZGQnLFxuICB9LFxuICBzZWNvbmRhcnk6IHtcbiAgICByZWd1bGFyOiAnI2ZmNWI2MCcsXG4gICAgaG92ZXI6ICcjRkYyODJGJyxcbiAgICBhbHRlcm5hdGU6ICcjZmM1YzYzJyxcbiAgfSxcbiAgeWVsbG93OiB7XG4gICAgcmVndWxhcjogJyNGRkFENUUnLFxuICAgIGhvdmVyOiAnI0ZGQjM2OScsXG4gICAgYWx0ZXJuYXRlOiAnI2Y0YzI0MycsXG4gIH0sXG4gIGJsdWU6IHtcbiAgICByZWd1bGFyOiAnIzJlNzBmYScsXG4gICAgZGFyazogJyMxNjFGNkEnLFxuICAgIGxpZ2h0OiAnIzY2NkQ5MicsXG4gICAgbGluazogJyM0Mjg1ZjQnLFxuICB9LFxuICByZWQ6ICcjZWE0ZDRhJyxcbiAgc3VjY2VzczogJycsXG4gIHdhcm5pbmc6ICcnLFxuICBtdXRlZDogJycsXG4gIGhpZ2hsaWdodDogJycsXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFRoZW1lID0ge1xuICBjb2xvcnM6IHtcbiAgICAuLi5iYXNlQ29sb3IsXG4gICAgYm9keToge1xuICAgICAgYmc6ICcnLFxuICAgICAgdGV4dDogJycsXG4gICAgfSxcbiAgICBib3JkZXJDb2xvcjogJ2dyYXkuNTAwJyxcbiAgICBoZWFkaW5nc0NvbG9yOiAndGV4dC5ib2xkJyxcbiAgICBzdWJoZWFkaW5nc0NvbG9yOiAnJyxcbiAgICB0ZXh0Q29sb3I6ICd0ZXh0LnJlZ3VsYXInLFxuICAgIGJ1dHRvbkNvbG9yOiAnd2hpdGUnLFxuICAgIGJ1dHRvbkJnQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgIGJ1dHRvbkJnSG92ZXJDb2xvcjogJ3ByaW1hcnkuaG92ZXInLFxuICAgIGJ1dHRvbkJvcmRlckNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICBsaW5rQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgIGlucHV0OiB7XG4gICAgICB0ZXh0OiAnJyxcbiAgICAgIGJnOiAnJyxcbiAgICAgIGJvcmRlcjogJycsXG4gICAgICBmb2N1czogJycsXG4gICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgfSxcbiAgfSxcbiAgLy8gYnRuQm9yZGVyUmFkaXVzOiAnJyxcbiAgYnJlYWtwb2ludHM6IFsnNzY3cHgnLCAnOTkxcHgnLCAnMTAyNXB4JywgJzEzMDBweCddLFxuICAvLyBzcGFjZTogWzAsIDQsIDgsIDEwLCAxNSwgMjAsIDI1LCAzMCwgNDAsIDU2XSxcbiAgc3BhY2U6IFswLCA0LCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1NiwgNTEyXSxcbiAgLy8gZXhwb3J0IGNvbnN0IHNwYWNlID0gWzAsIDAuMjUsIDAuNSwgMSwgMS41LCAzXS5tYXAobiA9PiBuICsgJ3JlbScpXG5cbiAgLy8gZm9udFNpemVzOiBbMTAsIDEzLCAxNSwgMTksIDIxLCAzMCwgNDVdLFxuICAvLyBmb250U2l6ZXM6IFsxMiwgMTQsIDE2LCAyMCwgMjQsIDMyLCA0OCwgNjQsIDk2XSxcbiAgZm9udFNpemVzOiB7XG4gICAgeHM6IDEyLFxuICAgIHNtOiAxMyxcbiAgICBiYXNlOiAxNSxcbiAgICBtZDogMTksXG4gICAgbGc6IDIxLFxuICAgIHhsOiAyNCxcbiAgICAnMnhsJzogMzAsXG4gICAgJzN4bCc6IDM2LFxuICAgICc0eGwnOiA0MixcbiAgICAnNXhsJzogNDgsXG4gIH0sXG4gIC8vIGZvbnRXZWlnaHRzOiBbMTAwLCAyMDAsIDMwMCwgNDAwLCA1MDAsIDYwMCwgNzAwLCA4MDAsIDkwMF0sXG4gIGZvbnRXZWlnaHRzOiB7XG4gICAgYm9keTogNDAwLFxuICAgIGhlYWRpbmc6IDcwMCxcbiAgICB0aGluOiAxMDAsXG4gICAgbGlnaHQ6IDMwMCxcbiAgICByZWd1bGFyOiA0MDAsXG4gICAgbWVkaXVtOiA1MDAsXG4gICAgc2VtaUJvbGQ6IDYwMCxcbiAgICBib2xkOiA3MDAsXG4gICAgYm9sZGVyOiA5MDAsXG4gIH0sXG4gIGZvbnRzOiB7XG4gICAgYm9keTogJ0xhdG8sIHNhbnMtc2VyaWYnLFxuICAgIGhlYWRpbmc6ICdQb3BwaW5zLCBzYW5zLXNlcmlmJyxcbiAgICBtb25vc3BhY2U6ICdNZW5sbywgbW9ub3NwYWNlJyxcbiAgfSxcblxuICAvLyBDdXN0b20gVGhlbWUga2V5c1xuICBjdXN0b21zOiB7XG4gICAgLy8gdHJhbnNpdGlvbnM6IHtcbiAgICAvLyAgIGJhc2U6ICcuM3MgZWFzZS1vdXQnLFxuICAgIC8vIH0sXG4gICAgdHJhbnNpdGlvbjogJzAuMzVzIGVhc2UnLFxuICB9LFxuICAvLyBsaW5lSGVpZ2h0czoge1xuICAvLyAgIHNvbGlkOiAxLFxuICAvLyAgIHRpdGxlOiAxLjI1LFxuICAvLyAgIGNvcHk6IDEuNSxcbiAgLy8gfSxcbiAgbGluZUhlaWdodHM6IHtcbiAgICBib2R5OiAxLjUsXG4gICAgLy8gYm9keTogMS42MjUsXG4gICAgaGVhZGluZzogMS4xMjUsXG4gICAgLy8gaGVhZGluZzogMS4yNSxcbiAgfSxcblxuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgcmFkaWk6IHtcbiAgICBiYXNlOiAnNnB4JyxcbiAgICBzbWFsbDogJzNweCcsXG4gICAgbWVkaXVtOiAnMTJweCcsXG4gICAgYmlnOiAnMThweCcsXG4gIH0sXG4gIHNoYWRvd3M6IHtcbiAgICBiYXNlOiAnMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiknLFxuICAgIG1lZGl1bTogJzAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE2KScsXG4gICAgYmlnOiAnMCAyMXB4IDM2cHggcmdiYSgwLCAwLCAwLCAwLjE2KScsXG4gICAgaGVhZGVyOiAnMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiknLFxuICB9LFxuICAvLyBsZXR0ZXJTcGFjaW5nczoge1xuICAvLyAgIG5vcm1hbDogJ25vcm1hbCcsXG4gIC8vICAgdHJhY2tlZDogJzAuMWVtJyxcbiAgLy8gICB0aWdodDogJy0wLjA1ZW0nLFxuICAvLyAgIG1lZ2E6ICcwLjI1ZW0nLFxuICAvLyB9LFxuICAvLyBib3JkZXJzOiB7XG4gIC8vICAgMCxcbiAgLy8gICBzbTonMXB4IHNvbGlkJyxcbiAgLy8gICBtZWRpdW06JzJweCBzb2xpZCcsXG4gIC8vICAgbGFyZ2U6JzNweCBzb2xpZCcsXG4gIC8vICAgJzRweCBzb2xpZCcsXG4gIC8vICAgJzVweCBzb2xpZCcsXG4gIC8vICAgJzZweCBzb2xpZCcsXG4gIC8vIH0sXG4gIC8vIHJhZGl1czogWzMsIDQsIDUsIDYsICc1MCUnXSxcbiAgLy8gd2lkdGhzOiBbMzYsIDQwLCA0NCwgNDgsIDU0LCA3MCwgODEsIDEyOCwgMjU2XSxcbiAgLy8gaGVpZ2h0czogWzM2LCA0MCwgNDQsIDQ4LCA1MCwgNTQsIDcwLCA4MSwgMTI4XSxcbiAgLy8gbWF4V2lkdGhzOiBbMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDUxMiwgNzY4LCAxMDI0LCAxNTM2XSxcbiAgZ2xvYmFsczoge1xuICAgIC8vIGJvZHk6IHtcbiAgICAvLyAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG4gICAgLy8gICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgLy8gICBsaW5lSGVpZ2h0OiAnYm9keScsXG4gICAgLy8gICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgLy8gfSxcbiAgfSxcbn07XG4vLyB4czogMCxcbi8vIHNtOiA1NzZweCxcbi8vIG1kOiA3NjhweCxcbi8vIGxnOiA5OTJweCxcbi8vIHhsOiAxMjAwcHgsXG4vLyB4eGw6IDE0MDBweFxuIiwiaW1wb3J0IGxvY2FsRW4gZnJvbSAnLi9sYW5nL2VuLmpzb24nO1xuaW1wb3J0IGxvY2FsQXIgZnJvbSAnLi9sYW5nL2FyLmpzb24nO1xuaW1wb3J0IGxvY2FsRXMgZnJvbSAnLi9sYW5nL2VzLmpzb24nO1xuaW1wb3J0IGxvY2FsRGUgZnJvbSAnLi9sYW5nL2RlLmpzb24nO1xuaW1wb3J0IGxvY2FsQ24gZnJvbSAnLi9sYW5nL3poLmpzb24nO1xuaW1wb3J0IGxvY2FsSWwgZnJvbSAnLi9sYW5nL2hlLmpzb24nO1xuXG5leHBvcnQgY29uc3QgbWVzc2FnZXMgPSB7XG4gIGVuOiBsb2NhbEVuLFxuICBhcjogbG9jYWxBcixcbiAgZXM6IGxvY2FsRXMsXG4gIGRlOiBsb2NhbERlLFxuICB6aDogbG9jYWxDbixcbiAgaGU6IGxvY2FsSWwsXG59O1xuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEFwb2xsb0NsaWVudCxcbiAgSW5NZW1vcnlDYWNoZSxcbiAgSHR0cExpbmssXG4gIE5vcm1hbGl6ZWRDYWNoZU9iamVjdCxcbn0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5sZXQgYXBvbGxvQ2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiB8IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gY3JlYXRlSXNvbW9ycGhMaW5rKCkge1xuICByZXR1cm4gbmV3IEh0dHBMaW5rKHtcbiAgICB1cmk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dSQVBIUUxfQVBJX0VORFBPSU5ULCAvLyBTZXJ2ZXIgVVJMIChtdXN0IGJlIGFic29sdXRlKVxuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLCAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoKSB7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBzc3JNb2RlOiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyxcbiAgICBsaW5rOiBjcmVhdGVJc29tb3JwaExpbmsoKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xuICAgICAgdHlwZVBvbGljaWVzOiB7XG4gICAgICAgIFF1ZXJ5OiB7XG4gICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAvLyBSZXVzYWJsZSBoZWxwZXIgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgYSBmaWVsZFxuICAgICAgICAgICAgLy8gcG9saWN5IGZvciB0aGUgUXVlcnkucHJvZHVjdHMgZmllbGQuXG4gICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICBrZXlBcmdzOiBbJ3R5cGUnLCAnY2F0ZWdvcnknLCAndGV4dCddLFxuICAgICAgICAgICAgICBtZXJnZShleGlzdGluZywgaW5jb21pbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGl0ZW1zOiBuZXdJdGVtcyB9ID0gaW5jb21pbmc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nXG4gICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5pbmNvbWluZyxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtczogWy4uLmV4aXN0aW5nLml0ZW1zLCAuLi5uZXdJdGVtc10sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDogaW5jb21pbmc7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlOiBhbnkgPSBudWxsKSB7XG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KCk7XG5cbiAgLy8gSWYgeW91ciBwYWdlIGhhcyBOZXh0LmpzIGRhdGEgZmV0Y2hpbmcgbWV0aG9kcyB0aGF0IHVzZSBBcG9sbG8gQ2xpZW50LCB0aGUgaW5pdGlhbCBzdGF0ZVxuICAvLyBnZXRzIGh5ZHJhdGVkIGhlcmVcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xuICAgIC8vIEdldCBleGlzdGluZyBjYWNoZSwgbG9hZGVkIGR1cmluZyBjbGllbnQgc2lkZSBkYXRhIGZldGNoaW5nXG4gICAgY29uc3QgZXhpc3RpbmdDYWNoZSA9IF9hcG9sbG9DbGllbnQuZXh0cmFjdCgpO1xuICAgIC8vIFJlc3RvcmUgdGhlIGNhY2hlIHVzaW5nIHRoZSBkYXRhIHBhc3NlZCBmcm9tIGdldFN0YXRpY1Byb3BzL2dldFNlcnZlclNpZGVQcm9wc1xuICAgIC8vIGNvbWJpbmVkIHdpdGggdGhlIGV4aXN0aW5nIGNhY2hlZCBkYXRhXG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKHsgLi4uZXhpc3RpbmdDYWNoZSwgLi4uaW5pdGlhbFN0YXRlIH0pO1xuICB9XG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IEFwb2xsbyBDbGllbnRcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudDtcbiAgLy8gQ3JlYXRlIHRoZSBBcG9sbG8gQ2xpZW50IG9uY2UgaW4gdGhlIGNsaWVudFxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudDtcblxuICByZXR1cm4gX2Fwb2xsb0NsaWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwb2xsbyhpbml0aWFsU3RhdGUpIHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pO1xuICByZXR1cm4gc3RvcmU7XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgaXNDbGllbnQgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JztcblxuZXhwb3J0IGNvbnN0IHVzZU1lZGlhID0gKHF1ZXJ5OiBzdHJpbmcsIGRlZmF1bHRTdGF0ZTogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoXG4gICAgaXNDbGllbnQgPyAoKSA9PiB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcyA6IGRlZmF1bHRTdGF0ZVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG1vdW50ZWQgPSB0cnVlO1xuICAgIGNvbnN0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KTtcbiAgICBjb25zdCBvbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmICghbW91bnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZXRTdGF0ZSghIW1xbC5tYXRjaGVzKTtcbiAgICB9O1xuXG4gICAgbXFsLmFkZExpc3RlbmVyKG9uQ2hhbmdlKTtcbiAgICBzZXRTdGF0ZShtcWwubWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbW91bnRlZCA9IGZhbHNlO1xuICAgICAgbXFsLnJlbW92ZUxpc3RlbmVyKG9uQ2hhbmdlKTtcbiAgICB9O1xuICB9LCBbcXVlcnldKTtcblxuICByZXR1cm4gc3RhdGU7XG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsb2NhbEZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZSc7XG5jb25zdCBpc09iamVjdExpa2VkID0gKHZhbHVlKSA9PlxuICB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnQXJyYXknIHx8IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdPYmplY3QnO1xuXG5jb25zdCByZWh5ZHJhdGUgPSAodmFsdWU6IGFueSwgZGVmYXVsdFZhbHVlPzogYW55KSA9PiB7XG4gIGlmICghdmFsdWUpIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gIC8vIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykgc3RyID0gZmFsc2U7XG4gIC8vIGlmICh2YWx1ZSA9PT0gJ3RydWUnKSBzdHIgPSB0cnVlO1xuICAvLyBpZiAoIWlzT2JqZWN0TGlrZWQodmFsdWUpKSB7XG4gIC8vICAgcmV0dXJuIHZhbHVlO1xuICAvLyB9XG4gIHRyeSB7XG4gICAgY29uc3QgcGFyc2UgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICByZXR1cm4gcGFyc2U7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gIH1cbn07XG5cbmNvbnN0IGh5ZHJhdGUgPSAodmFsdWUpID0+IHtcbiAgaWYgKCFpc09iamVjdExpa2VkKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xufTtcbmNvbnN0IGNyZWF0ZU1pZ3JhdGlvbiA9IChvcHRzLCBkYXRhKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gYCR7b3B0cy5rZXl9LXZlcnNpb25gO1xuICAgIGxvY2FsRm9yYWdlLmdldEl0ZW0oa2V5LCAoZXJyLCB2ZXJzaW9uKSA9PiB7XG4gICAgICBpZiAodmVyc2lvbiAhPT0gb3B0cy52ZXJzaW9uKSB7XG4gICAgICAgIGRhdGEgPSBvcHRzLm1pZ3JhdGUoZGF0YSk7XG4gICAgICAgIGxvY2FsRm9yYWdlLnNldEl0ZW0ob3B0cy5rZXksIHJlaHlkcmF0ZShkYXRhKSwgKGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICBsb2NhbEZvcmFnZS5zZXRJdGVtKGtleSwgb3B0cy52ZXJzaW9uLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAga2V5OiAnQHNlc3Npb24nLFxuICB2ZXJzaW9uOiAxLFxuICBtaWdyYXRlOiAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHVzZVN0b3JhZ2UgPSAoc3RhdGUsIHNldFN0YXRlKSA9PiB7XG4gIGNvbnN0IFtyZWh5ZHJhdGVkLCBzZXRSZWh5ZHJhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICBhd2FpdCBsb2NhbEZvcmFnZS5nZXRJdGVtKGNvbmZpZy5rZXksIChlcnIsIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBzZXRSZWh5ZHJhdGVkKHRydWUpO1xuICAgICAgICAgIHJldHVybiBzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1pZ3JhdGUgcGVyc2lzdGVkIGRhdGFcbiAgICAgICAgY29uc3QgcmVzdG9yZWRWYWx1ZSA9IHJlaHlkcmF0ZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLm1pZ3JhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjcmVhdGVNaWdyYXRpb24oY29uZmlnLCByZXN0b3JlZFZhbHVlKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNldFN0YXRlKGRhdGEpKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2V0UmVoeWRyYXRlZCh0cnVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0U3RhdGUocmVzdG9yZWRWYWx1ZSk7XG4gICAgICAgICAgc2V0UmVoeWRyYXRlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGluaXQoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaWYgKGlzTmlsKHN0YXRlKSB8fCBpc0VtcHR5KHN0YXRlKSkge1xuICAgIC8vICAgbG9jYWxGb3JhZ2UucmVtb3ZlSXRlbShjb25maWcua2V5KTtcbiAgICAvLyB9XG4gICAgbG9jYWxGb3JhZ2Uuc2V0SXRlbShjb25maWcua2V5LCBoeWRyYXRlKHN0YXRlKSk7XG4gIH0sIFtzdGF0ZV0pO1xuXG4gIHJldHVybiB7XG4gICAgcmVoeWRyYXRlZCxcbiAgICBlcnJvcixcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkcS9yZXVzZS1tb2RhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3R5bGVkLXN5c3RlbS9jc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2NhbGZvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3ZlcmxheXNjcm9sbGJhcnMtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmMtZHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3ByaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNwcmluZy1tb2RhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdGlja3lub2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxpcy1wbHVnaW4tcnRsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=