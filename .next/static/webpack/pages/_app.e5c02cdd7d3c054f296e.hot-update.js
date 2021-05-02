webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Navbar/Navbar.jsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ \"./node_modules/next-translate/lib/esm/useTranslation.js\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar.module.scss */ \"./src/components/Navbar/Navbar.module.scss\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../const/routes */ \"./src/const/routes.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/home/nikita/comm-su/src/components/Navbar/Navbar.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar secondaryMenu = function secondaryMenu() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 10\n  }, _this);\n};\n\nvar LocaleToggler = function LocaleToggler() {\n  _s();\n\n  var _useRouter = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])(),\n      push = _useRouter.push,\n      locales = _useRouter.locales,\n      asPath = _useRouter.asPath;\n\n  var switchLocale = function switchLocale(_ref) {\n    var locale = _ref.locale;\n    push(asPath, {\n      locale: locale\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.locales,\n    children: locales.map(function (locale) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.link)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(LocaleToggler, \"SZfySh6Cd6SEDhaCdJ+VnigM42Q=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"]];\n});\n\n_c = LocaleToggler;\n\nvar Navbar = function Navbar() {\n  _s2();\n\n  var _useRouter2 = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])(),\n      asPath = _useRouter2.asPath;\n\n  var _useTranslation = Object(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('common'),\n      t = _useTranslation.t;\n\n  var navBarRoutes = Object.entries(_const_routes__WEBPACK_IMPORTED_MODULE_6__[\"ROUTES\"]).filter(function (_ref2) {\n    var _ref3 = Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, 2),\n        _ = _ref3[0],\n        navBar = _ref3[1].navBar;\n\n    return navBar;\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n    children: navBarRoutes.map(function (_ref4) {\n      var _ref5 = Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref4, 2),\n          alias = _ref5[0],\n          properties = _ref5[1];\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        href: alias,\n        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.link, asPath === alias && _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.current),\n        children: t(\"header.\".concat(alias))\n      }, alias, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Navbar, \"n7/s+NySFnBCL71yVyGiKdvA/ts=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"], next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c2 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"LocaleToggler\");\n$RefreshReg$(_c2, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qc3g/MTlmYiJdLCJuYW1lcyI6WyJzZWNvbmRhcnlNZW51IiwiTG9jYWxlVG9nZ2xlciIsInVzZVJvdXRlciIsInB1c2giLCJsb2NhbGVzIiwiYXNQYXRoIiwic3dpdGNoTG9jYWxlIiwibG9jYWxlIiwic3R5bGVzIiwibWFwIiwiY2xhc3NOYW1lcyIsImxpbmsiLCJOYXZiYXIiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJuYXZCYXJSb3V0ZXMiLCJPYmplY3QiLCJlbnRyaWVzIiwiUk9VVEVTIiwiZmlsdGVyIiwiXyIsIm5hdkJhciIsInJvb3QiLCJhbGlhcyIsInByb3BlcnRpZXMiLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztBQUlBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLG1CQUNNQyx5RUFBUyxFQURmO0FBQUEsTUFDbkJDLElBRG1CLGNBQ25CQSxJQURtQjtBQUFBLE1BQ2JDLE9BRGEsY0FDYkEsT0FEYTtBQUFBLE1BQ0pDLE1BREksY0FDSkEsTUFESTs7QUFFMUIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBYztBQUFBLFFBQVpDLE1BQVksUUFBWkEsTUFBWTtBQUNqQ0osUUFBSSxDQUFDRSxNQUFELEVBQVM7QUFBQ0UsWUFBTSxFQUFOQTtBQUFELEtBQVQsQ0FBSjtBQUNELEdBRkQ7O0FBR0Esc0JBQU87QUFBSyxhQUFTLEVBQUVDLDBEQUFNLENBQUNKLE9BQXZCO0FBQUEsY0FDSkEsT0FBTyxDQUFDSyxHQUFSLENBQWEsVUFBQ0YsTUFBRDtBQUFBLDBCQUNaO0FBQUcsaUJBQVMsRUFBRUcsaURBQVUsQ0FBQ0YsMERBQU0sQ0FBQ0csSUFBUjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFk7QUFBQSxLQUFiO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBT0QsQ0FaRDs7R0FBTVYsYTtVQUM0QkMsaUU7OztLQUQ1QkQsYTs7QUFjTixJQUFNVyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsb0JBQ0ZWLHlFQUFTLEVBRFA7QUFBQSxNQUNaRyxNQURZLGVBQ1pBLE1BRFk7O0FBQUEsd0JBRVBRLDZFQUFjLENBQUMsUUFBRCxDQUZQO0FBQUEsTUFFWkMsQ0FGWSxtQkFFWkEsQ0FGWTs7QUFHbkIsTUFBTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsb0RBQWYsRUFDaEJDLE1BRGdCLENBQ1Q7QUFBQTtBQUFBLFFBQUVDLENBQUY7QUFBQSxRQUFNQyxNQUFOLFlBQU1BLE1BQU47O0FBQUEsV0FBbUJBLE1BQW5CO0FBQUEsR0FEUyxDQUFyQjtBQUVBLHNCQUFPO0FBQUssYUFBUyxFQUFFYiwwREFBTSxDQUFDYyxJQUF2QjtBQUFBLGNBRUhQLFlBQVksQ0FBQ04sR0FBYixDQUFpQjtBQUFBO0FBQUEsVUFBRWMsS0FBRjtBQUFBLFVBQVNDLFVBQVQ7O0FBQUEsMEJBQ2Y7QUFDRSxZQUFJLEVBQUVELEtBRFI7QUFHRSxpQkFBUyxFQUNQYixpREFBVSxDQUFDRiwwREFBTSxDQUFDRyxJQUFSLEVBQWVOLE1BQU0sS0FBS2tCLEtBQVosSUFBc0JmLDBEQUFNLENBQUNpQixPQUEzQyxDQUpkO0FBQUEsa0JBT0dYLENBQUMsa0JBQVdTLEtBQVg7QUFQSixTQUVPQSxLQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEZTtBQUFBLEtBQWpCO0FBRkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBZUQsQ0FwQkQ7O0lBQU1YLE07VUFDYVYsaUUsRUFDTFcscUU7OztNQUZSRCxNO0FBcUJTQSxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2YmFyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtST1VURVN9IGZyb20gJy4uLy4uL2NvbnN0L3JvdXRlcyc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xuY29uc3Qgc2Vjb25kYXJ5TWVudSA9ICgpID0+IHtcbiAgcmV0dXJuIDxkaXY+PC9kaXY+O1xufTtcblxuY29uc3QgTG9jYWxlVG9nZ2xlciA9ICgpID0+IHtcbiAgY29uc3Qge3B1c2gsIGxvY2FsZXMsIGFzUGF0aH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgc3dpdGNoTG9jYWxlID0gKHtsb2NhbGV9KSA9PiB7XG4gICAgcHVzaChhc1BhdGgsIHtsb2NhbGV9KTtcbiAgfTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9jYWxlc30+XG4gICAge2xvY2FsZXMubWFwKCAobG9jYWxlKSA9PlxuICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5saW5rKX0+XG5cbiAgICAgIDwvYT4pXG4gICAgfVxuICA8L2Rpdj47XG59O1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHthc1BhdGh9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHt0fSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKTtcbiAgY29uc3QgbmF2QmFyUm91dGVzID0gT2JqZWN0LmVudHJpZXMoUk9VVEVTKVxuICAgICAgLmZpbHRlcigoW18sIHtuYXZCYXJ9XSkgPT4gbmF2QmFyKTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0+XG4gICAge1xuICAgICAgbmF2QmFyUm91dGVzLm1hcCgoW2FsaWFzLCBwcm9wZXJ0aWVzXSkgPT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXthbGlhc31cbiAgICAgICAgICBrZXk9e2FsaWFzfVxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBjbGFzc05hbWVzKHN0eWxlcy5saW5rLCAoYXNQYXRoID09PSBhbGlhcykgJiYgc3R5bGVzLmN1cnJlbnQpXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAge3QoYGhlYWRlci4ke2FsaWFzfWApfVxuICAgICAgICA8L2E+LFxuICAgICAgKVxuICAgIH1cbiAgPC9kaXY+O1xufTtcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar/Navbar.jsx\n");

/***/ })

})