webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Navbar/Navbar.jsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ \"./node_modules/next-translate/lib/esm/useTranslation.js\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar.module.scss */ \"./src/components/Navbar/Navbar.module.scss\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../const/routes */ \"./src/const/routes.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/home/nikita/comm-su/src/components/Navbar/Navbar.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar secondaryMenu = function secondaryMenu() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 10\n  }, _this);\n};\n\nvar LocaleToggler = function LocaleToggler() {\n  _s();\n\n  var _useRouter = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])(),\n      push = _useRouter.push,\n      locales = _useRouter.locales,\n      asPath = _useRouter.asPath;\n\n  var switchLocale = function switchLocale(_ref) {\n    var target = _ref.target;\n    var locale = target.locale;\n    return push(asPath, {\n      locale: locale\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.locales,\n    children: locales.map(function (locale) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.link),\n        locale: locale,\n        onClick: switchLocale,\n        children: locale.toUpperCase()\n      }, locale, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(LocaleToggler, \"SZfySh6Cd6SEDhaCdJ+VnigM42Q=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"]];\n});\n\n_c = LocaleToggler;\n\nvar Navbar = function Navbar() {\n  _s2();\n\n  var _useRouter2 = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])(),\n      asPath = _useRouter2.asPath;\n\n  var _useTranslation = Object(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('common'),\n      t = _useTranslation.t;\n\n  var navBarRoutes = Object.entries(_const_routes__WEBPACK_IMPORTED_MODULE_6__[\"ROUTES\"]).filter(function (_ref2) {\n    var _ref3 = Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, 2),\n        _ = _ref3[0],\n        navBar = _ref3[1].navBar;\n\n    return navBar;\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n    children: [navBarRoutes.map(function (_ref4) {\n      var _ref5 = Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref4, 2),\n          alias = _ref5[0],\n          properties = _ref5[1];\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        href: alias,\n        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.link, asPath === alias && _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.current),\n        children: t(\"header.\".concat(alias))\n      }, alias, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LocaleToggler, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Navbar, \"n7/s+NySFnBCL71yVyGiKdvA/ts=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"], next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c2 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"LocaleToggler\");\n$RefreshReg$(_c2, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qc3g/MTlmYiJdLCJuYW1lcyI6WyJzZWNvbmRhcnlNZW51IiwiTG9jYWxlVG9nZ2xlciIsInVzZVJvdXRlciIsInB1c2giLCJsb2NhbGVzIiwiYXNQYXRoIiwic3dpdGNoTG9jYWxlIiwidGFyZ2V0IiwibG9jYWxlIiwic3R5bGVzIiwibWFwIiwiY2xhc3NOYW1lcyIsImxpbmsiLCJ0b1VwcGVyQ2FzZSIsIk5hdmJhciIsInVzZVRyYW5zbGF0aW9uIiwidCIsIm5hdkJhclJvdXRlcyIsIk9iamVjdCIsImVudHJpZXMiLCJST1VURVMiLCJmaWx0ZXIiLCJfIiwibmF2QmFyIiwicm9vdCIsImFsaWFzIiwicHJvcGVydGllcyIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsbUJBQ01DLHlFQUFTLEVBRGY7QUFBQSxNQUNuQkMsSUFEbUIsY0FDbkJBLElBRG1CO0FBQUEsTUFDYkMsT0FEYSxjQUNiQSxPQURhO0FBQUEsTUFDSkMsTUFESSxjQUNKQSxNQURJOztBQUUxQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFjO0FBQUEsUUFBWkMsTUFBWSxRQUFaQSxNQUFZO0FBQUEsUUFDMUJDLE1BRDBCLEdBQ2hCRCxNQURnQixDQUMxQkMsTUFEMEI7QUFFakMsV0FBT0wsSUFBSSxDQUFDRSxNQUFELEVBQVM7QUFBQ0csWUFBTSxFQUFOQTtBQUFELEtBQVQsQ0FBWDtBQUNELEdBSEQ7O0FBSUEsc0JBQU87QUFBSyxhQUFTLEVBQUVDLDBEQUFNLENBQUNMLE9BQXZCO0FBQUEsY0FDSkEsT0FBTyxDQUFDTSxHQUFSLENBQWEsVUFBQ0YsTUFBRDtBQUFBLDBCQUNaO0FBQ0UsaUJBQVMsRUFBRUcsaURBQVUsQ0FBQ0YsMERBQU0sQ0FBQ0csSUFBUixDQUR2QjtBQUVFLGNBQU0sRUFBRUosTUFGVjtBQUlFLGVBQU8sRUFBRUYsWUFKWDtBQUFBLGtCQU1HRSxNQUFNLENBQUNLLFdBQVA7QUFOSCxTQUdPTCxNQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWTtBQUFBLEtBQWI7QUFESTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFZRCxDQWxCRDs7R0FBTVAsYTtVQUM0QkMsaUU7OztLQUQ1QkQsYTs7QUFvQk4sSUFBTWEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLG9CQUNGWix5RUFBUyxFQURQO0FBQUEsTUFDWkcsTUFEWSxlQUNaQSxNQURZOztBQUFBLHdCQUVQVSw2RUFBYyxDQUFDLFFBQUQsQ0FGUDtBQUFBLE1BRVpDLENBRlksbUJBRVpBLENBRlk7O0FBR25CLE1BQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxPQUFQLENBQWVDLG9EQUFmLEVBQ2hCQyxNQURnQixDQUNUO0FBQUE7QUFBQSxRQUFFQyxDQUFGO0FBQUEsUUFBTUMsTUFBTixZQUFNQSxNQUFOOztBQUFBLFdBQW1CQSxNQUFuQjtBQUFBLEdBRFMsQ0FBckI7QUFFQSxzQkFBTztBQUFLLGFBQVMsRUFBRWQsMERBQU0sQ0FBQ2UsSUFBdkI7QUFBQSxlQUVIUCxZQUFZLENBQUNQLEdBQWIsQ0FBaUI7QUFBQTtBQUFBLFVBQUVlLEtBQUY7QUFBQSxVQUFTQyxVQUFUOztBQUFBLDBCQUNmO0FBQ0UsWUFBSSxFQUFFRCxLQURSO0FBR0UsaUJBQVMsRUFDUGQsaURBQVUsQ0FBQ0YsMERBQU0sQ0FBQ0csSUFBUixFQUFlUCxNQUFNLEtBQUtvQixLQUFaLElBQXNCaEIsMERBQU0sQ0FBQ2tCLE9BQTNDLENBSmQ7QUFBQSxrQkFPR1gsQ0FBQyxrQkFBV1MsS0FBWDtBQVBKLFNBRU9BLEtBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURlO0FBQUEsS0FBakIsQ0FGRyxlQWNMLHFFQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBZ0JELENBckJEOztJQUFNWCxNO1VBQ2FaLGlFLEVBQ0xhLHFFOzs7TUFGUkQsTTtBQXNCU0EscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmJhci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7Uk9VVEVTfSBmcm9tICcuLi8uLi9jb25zdC9yb3V0ZXMnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcbmNvbnN0IHNlY29uZGFyeU1lbnUgPSAoKSA9PiB7XG4gIHJldHVybiA8ZGl2PjwvZGl2Pjtcbn07XG5cbmNvbnN0IExvY2FsZVRvZ2dsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHtwdXNoLCBsb2NhbGVzLCBhc1BhdGh9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHN3aXRjaExvY2FsZSA9ICh7dGFyZ2V0fSkgPT4ge1xuICAgIGNvbnN0IHtsb2NhbGV9ID0gdGFyZ2V0O1xuICAgIHJldHVybiBwdXNoKGFzUGF0aCwge2xvY2FsZX0pO1xuICB9O1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2NhbGVzfT5cbiAgICB7bG9jYWxlcy5tYXAoIChsb2NhbGUpID0+XG4gICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmxpbmspfVxuICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAga2V5PXtsb2NhbGV9XG4gICAgICAgIG9uQ2xpY2s9e3N3aXRjaExvY2FsZX1cbiAgICAgID5cbiAgICAgICAge2xvY2FsZS50b1VwcGVyQ2FzZSgpfVxuICAgICAgPC9hPilcbiAgICB9XG4gIDwvZGl2Pjtcbn07XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3Qge2FzUGF0aH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpO1xuICBjb25zdCBuYXZCYXJSb3V0ZXMgPSBPYmplY3QuZW50cmllcyhST1VURVMpXG4gICAgICAuZmlsdGVyKChbXywge25hdkJhcn1dKSA9PiBuYXZCYXIpO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cbiAgICB7XG4gICAgICBuYXZCYXJSb3V0ZXMubWFwKChbYWxpYXMsIHByb3BlcnRpZXNdKSA9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9e2FsaWFzfVxuICAgICAgICAgIGtleT17YWxpYXN9XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMoc3R5bGVzLmxpbmssIChhc1BhdGggPT09IGFsaWFzKSAmJiBzdHlsZXMuY3VycmVudClcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICB7dChgaGVhZGVyLiR7YWxpYXN9YCl9XG4gICAgICAgIDwvYT4sXG4gICAgICApXG4gICAgfVxuICAgIDxMb2NhbGVUb2dnbGVyLz5cbiAgPC9kaXY+O1xufTtcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar/Navbar.jsx\n");

/***/ })

})