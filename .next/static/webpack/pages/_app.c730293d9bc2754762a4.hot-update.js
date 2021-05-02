webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Navbar/Navbar.jsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ \"./node_modules/next-translate/lib/esm/useTranslation.js\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar.module.scss */ \"./src/components/Navbar/Navbar.module.scss\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../const/routes */ \"./src/const/routes.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _jsxFileName = \"/home/nikita/comm-su/src/components/Navbar/Navbar.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar secondaryMenu = function secondaryMenu() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 10\n  }, _this);\n};\n\nvar LocaleToggler = function LocaleToggler(_ref) {\n  var locales = _ref.locales;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: locales.map(function (locale) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.link)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false);\n};\n\n_c = LocaleToggler;\n\nvar Navbar = function Navbar() {\n  _s();\n\n  var _useRouter = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])(),\n      asPath = _useRouter.asPath,\n      locales = _useRouter.locales;\n\n  var _useTranslation = Object(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('common'),\n      t = _useTranslation.t;\n\n  var navBarRoutes = Object.entries(_const_routes__WEBPACK_IMPORTED_MODULE_6__[\"ROUTES\"]).filter(function (_ref2) {\n    var _ref3 = Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, 2),\n        _ = _ref3[0],\n        navBar = _ref3[1].navBar;\n\n    return navBar;\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n    children: navBarRoutes.map(function (_ref4) {\n      var _ref5 = Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref4, 2),\n          alias = _ref5[0],\n          properties = _ref5[1];\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        href: alias,\n        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.link, asPath === alias && _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.current),\n        children: t(\"header.\".concat(alias))\n      }, alias, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Navbar, \"SYlW+iLz9ea6hJ0q6sH6z/PRWQI=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"], next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c2 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"LocaleToggler\");\n$RefreshReg$(_c2, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qc3g/MTlmYiJdLCJuYW1lcyI6WyJzZWNvbmRhcnlNZW51IiwiTG9jYWxlVG9nZ2xlciIsImxvY2FsZXMiLCJtYXAiLCJsb2NhbGUiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwibGluayIsIk5hdmJhciIsInVzZVJvdXRlciIsImFzUGF0aCIsInVzZVRyYW5zbGF0aW9uIiwidCIsIm5hdkJhclJvdXRlcyIsIk9iamVjdCIsImVudHJpZXMiLCJST1VURVMiLCJmaWx0ZXIiLCJfIiwibmF2QmFyIiwicm9vdCIsImFsaWFzIiwicHJvcGVydGllcyIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFlO0FBQUEsTUFBYkMsT0FBYSxRQUFiQSxPQUFhO0FBQ25DLHNCQUFPO0FBQUEsY0FDSkEsT0FBTyxDQUFDQyxHQUFSLENBQWEsVUFBQ0MsTUFBRDtBQUFBLDBCQUNaO0FBQUcsaUJBQVMsRUFBRUMsaURBQVUsQ0FBQ0MsMERBQU0sQ0FBQ0MsSUFBUjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFk7QUFBQSxLQUFiO0FBREksbUJBQVA7QUFPRCxDQVJEOztLQUFNTixhOztBQVVOLElBQU1PLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxtQkFDT0MseUVBQVMsRUFEaEI7QUFBQSxNQUNaQyxNQURZLGNBQ1pBLE1BRFk7QUFBQSxNQUNKUixPQURJLGNBQ0pBLE9BREk7O0FBQUEsd0JBRVBTLDZFQUFjLENBQUMsUUFBRCxDQUZQO0FBQUEsTUFFWkMsQ0FGWSxtQkFFWkEsQ0FGWTs7QUFHbkIsTUFBTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsb0RBQWYsRUFDaEJDLE1BRGdCLENBQ1Q7QUFBQTtBQUFBLFFBQUVDLENBQUY7QUFBQSxRQUFNQyxNQUFOLFlBQU1BLE1BQU47O0FBQUEsV0FBbUJBLE1BQW5CO0FBQUEsR0FEUyxDQUFyQjtBQUVBLHNCQUFPO0FBQUssYUFBUyxFQUFFYiwwREFBTSxDQUFDYyxJQUF2QjtBQUFBLGNBRUhQLFlBQVksQ0FBQ1YsR0FBYixDQUFpQjtBQUFBO0FBQUEsVUFBRWtCLEtBQUY7QUFBQSxVQUFTQyxVQUFUOztBQUFBLDBCQUNmO0FBQ0UsWUFBSSxFQUFFRCxLQURSO0FBR0UsaUJBQVMsRUFDUGhCLGlEQUFVLENBQUNDLDBEQUFNLENBQUNDLElBQVIsRUFBZUcsTUFBTSxLQUFLVyxLQUFaLElBQXNCZiwwREFBTSxDQUFDaUIsT0FBM0MsQ0FKZDtBQUFBLGtCQU9HWCxDQUFDLGtCQUFXUyxLQUFYO0FBUEosU0FFT0EsS0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGU7QUFBQSxLQUFqQjtBQUZHO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQWVELENBcEJEOztHQUFNYixNO1VBQ3NCQyxpRSxFQUNkRSxxRTs7O01BRlJILE07QUFxQlNBLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZiYXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge1JPVVRFU30gZnJvbSAnLi4vLi4vY29uc3Qvcm91dGVzJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XG5jb25zdCBzZWNvbmRhcnlNZW51ID0gKCkgPT4ge1xuICByZXR1cm4gPGRpdj48L2Rpdj47XG59O1xuXG5jb25zdCBMb2NhbGVUb2dnbGVyID0gKHtsb2NhbGVzfSkgPT4ge1xuICByZXR1cm4gPD5cbiAgICB7bG9jYWxlcy5tYXAoIChsb2NhbGUpID0+XG4gICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmxpbmspfT5cblxuICAgICAgPC9hPilcbiAgICB9XG4gIDwvPjtcbn07XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3Qge2FzUGF0aCwgbG9jYWxlc30gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpO1xuICBjb25zdCBuYXZCYXJSb3V0ZXMgPSBPYmplY3QuZW50cmllcyhST1VURVMpXG4gICAgICAuZmlsdGVyKChbXywge25hdkJhcn1dKSA9PiBuYXZCYXIpO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cbiAgICB7XG4gICAgICBuYXZCYXJSb3V0ZXMubWFwKChbYWxpYXMsIHByb3BlcnRpZXNdKSA9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9e2FsaWFzfVxuICAgICAgICAgIGtleT17YWxpYXN9XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMoc3R5bGVzLmxpbmssIChhc1BhdGggPT09IGFsaWFzKSAmJiBzdHlsZXMuY3VycmVudClcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICB7dChgaGVhZGVyLiR7YWxpYXN9YCl9XG4gICAgICAgIDwvYT4sXG4gICAgICApXG4gICAgfVxuICA8L2Rpdj47XG59O1xuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar/Navbar.jsx\n");

/***/ })

})