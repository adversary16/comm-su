webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/GenericHeader/GenericHeader.jsx":
/*!********************************************************!*\
  !*** ./src/components/GenericHeader/GenericHeader.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Navbar/Navbar */ \"./src/components/Navbar/Navbar.jsx\");\n/* harmony import */ var _GenericHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GenericHeader.module.scss */ \"./src/components/GenericHeader/GenericHeader.module.scss\");\n/* harmony import */ var _GenericHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_GenericHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-translate/useTranslation */ \"./node_modules/next-translate/lib/esm/useTranslation.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _jsxFileName = \"/home/nikita/comm-su/src/components/GenericHeader/GenericHeader.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Logo = function Logo(_ref) {\n  var locale = _ref.locale,\n      layout = _ref.layout;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: '/',\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      src: \"/comm_logo_ru.png\",\n      height: \"64\",\n      width: \"256\",\n      className: _GenericHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.logo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Logo;\n\nvar MenuButton = function MenuButton(_ref2) {\n  var onClick = _ref2.onClick;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _GenericHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.menuButton,\n    onClick: onClick\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 10\n  }, _this);\n};\n\n_c2 = MenuButton;\n\nvar GenericHeader = function GenericHeader() {\n  _s();\n\n  var _useRouter = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])(),\n      asPath = _useRouter.asPath,\n      locale = _useRouter.locale;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isMenuOpen = _useState[0],\n      setIsMenuOpen = _useState[1];\n\n  var toggleMenu = function toggleMenu() {\n    return setIsMenuOpen(function (prevState) {\n      return !prevState;\n    });\n  };\n\n  var _useTranslation = Object(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_8__[\"default\"])('common'),\n      t = _useTranslation.t;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: t(\"header.\".concat(asPath))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _GenericHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.root,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Logo, _objectSpread({}, {\n        locale: locale\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _objectSpread({}, {\n        isMenuOpen: isMenuOpen\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuButton, {\n        onClick: toggleMenu\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(GenericHeader, \"BwellrMS4kGbnav+jb49f1Dsw4s=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"], next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_8__[\"default\"]];\n});\n\n_c3 = GenericHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GenericHeader);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Logo\");\n$RefreshReg$(_c2, \"MenuButton\");\n$RefreshReg$(_c3, \"GenericHeader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2VuZXJpY0hlYWRlci9HZW5lcmljSGVhZGVyLmpzeD85MGRhIl0sIm5hbWVzIjpbIkxvZ28iLCJsb2NhbGUiLCJsYXlvdXQiLCJzdHlsZXMiLCJsb2dvIiwiTWVudUJ1dHRvbiIsIm9uQ2xpY2siLCJtZW51QnV0dG9uIiwiR2VuZXJpY0hlYWRlciIsInVzZVJvdXRlciIsImFzUGF0aCIsInVzZVN0YXRlIiwiaXNNZW51T3BlbiIsInNldElzTWVudU9wZW4iLCJ0b2dnbGVNZW51IiwicHJldlN0YXRlIiwidXNlVHJhbnNsYXRpb24iLCJ0Iiwicm9vdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFzQjtBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7QUFDakMsc0JBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxRQUFJLEVBQUUsR0FEUjtBQUFBLDJCQUdFLHFFQUFDLGlEQUFEO0FBQ0UsU0FBRyxFQUFDLG1CQUROO0FBRUUsWUFBTSxFQUFDLElBRlQ7QUFHRSxXQUFLLEVBQUMsS0FIUjtBQUlFLGVBQVMsRUFBRUMsaUVBQU0sQ0FBQ0M7QUFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBWkQ7O0tBQU1KLEk7O0FBY04sSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsUUFBZTtBQUFBLE1BQWJDLE9BQWEsU0FBYkEsT0FBYTtBQUNoQyxzQkFBTztBQUFLLGFBQVMsRUFBRUgsaUVBQU0sQ0FBQ0ksVUFBdkI7QUFBbUMsV0FBTyxFQUFFRDtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztNQUFNRCxVOztBQUlOLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLG1CQUNEQyx5RUFBUyxFQURSO0FBQUEsTUFDbkJDLE1BRG1CLGNBQ25CQSxNQURtQjtBQUFBLE1BQ1hULE1BRFcsY0FDWEEsTUFEVzs7QUFBQSxrQkFFVVUsc0RBQVEsQ0FBQyxLQUFELENBRmxCO0FBQUEsTUFFbkJDLFVBRm1CO0FBQUEsTUFFUEMsYUFGTzs7QUFHMUIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixXQUFPRCxhQUFhLENBQUMsVUFBQ0UsU0FBRDtBQUFBLGFBQWUsQ0FBQ0EsU0FBaEI7QUFBQSxLQUFELENBQXBCO0FBQ0QsR0FGRDs7QUFIMEIsd0JBT2RDLDZFQUFjLENBQUMsUUFBRCxDQVBBO0FBQUEsTUFPbkJDLENBUG1CLG1CQU9uQkEsQ0FQbUI7O0FBUTFCLHNCQUFPO0FBQUEsNEJBQ0wscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFRQSxDQUFDLGtCQUFXUCxNQUFYO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBTSxZQUFJLEVBQUMsbUZBQVg7QUFBK0YsV0FBRyxFQUFDO0FBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESyxlQU1MO0FBQUssZUFBUyxFQUFFUCxpRUFBTSxDQUFDZSxJQUF2QjtBQUFBLDhCQUNFLHFFQUFDLElBQUQsb0JBQ007QUFBQ2pCLGNBQU0sRUFBTkE7QUFBRCxPQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLHFFQUFDLHNEQUFELG9CQUFZO0FBQUNXLGtCQUFVLEVBQVZBO0FBQUQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRSxxRUFBQyxVQUFEO0FBQVksZUFBTyxFQUFFRTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTks7QUFBQSxrQkFBUDtBQWNELENBdEJEOztHQUFNTixhO1VBQ3FCQyxpRSxFQU1iTyxxRTs7O01BUFJSLGE7QUF1QlNBLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvR2VuZXJpY0hlYWRlci9HZW5lcmljSGVhZGVyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vTmF2YmFyL05hdmJhcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vR2VuZXJpY0hlYWRlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcblxuY29uc3QgTG9nbyA9ICh7bG9jYWxlLCBsYXlvdXR9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIGhyZWY9eycvJ31cbiAgICA+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPVwiL2NvbW1fbG9nb19ydS5wbmdcIlxuICAgICAgICBoZWlnaHQ9XCI2NFwiXG4gICAgICAgIHdpZHRoPVwiMjU2XCJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9nb31cbiAgICAgIC8+XG4gICAgPC9MaW5rPik7XG59O1xuXG5jb25zdCBNZW51QnV0dG9uID0gKHtvbkNsaWNrfSkgPT4ge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51QnV0dG9ufSBvbkNsaWNrPXtvbkNsaWNrfS8+O1xufTtcblxuY29uc3QgR2VuZXJpY0hlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qge2FzUGF0aCwgbG9jYWxlfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNldElzTWVudU9wZW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH07XG5cbiAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpO1xuICByZXR1cm4gPD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dChgaGVhZGVyLiR7YXNQYXRofWApfTwvdGl0bGU+XG4gICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIi8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICA8L0hlYWQ+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cbiAgICAgIDxMb2dvXG4gICAgICAgIHsuLi57bG9jYWxlfX1cbiAgICAgIC8+XG4gICAgICA8TmF2YmFyIHsuLi57aXNNZW51T3Blbn19Lz5cbiAgICAgIDxNZW51QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9Lz5cbiAgICA8L2Rpdj5cbiAgPC8+O1xufTtcbmV4cG9ydCBkZWZhdWx0IEdlbmVyaWNIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/GenericHeader/GenericHeader.jsx\n");

/***/ })

})