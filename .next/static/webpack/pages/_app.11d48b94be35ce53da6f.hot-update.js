webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Navbar/Navbar.jsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-translate/useTranslation */ \"./node_modules/next-translate/lib/esm/useTranslation.js\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navbar.module.scss */ \"./src/components/Navbar/Navbar.module.scss\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../const/routes */ \"./src/const/routes.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _jsxFileName = \"/home/nikita/comm-su/src/components/Navbar/Navbar.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar secondaryMenu = function secondaryMenu() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 10\n  }, _this);\n};\n\nvar LocaleToggler = function LocaleToggler() {\n  _s();\n\n  var _useRouter = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])(),\n      push = _useRouter.push,\n      locales = _useRouter.locales,\n      pathname = _useRouter.pathname,\n      currentLocale = _useRouter.locale;\n\n  var switchLocale = function switchLocale(_ref) {\n    var target = _ref.target;\n    var locale = target.attributes.locale.value;\n    return push(pathname, pathname, {\n      locale: locale\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.locales,\n    children: locales.map(function (locale) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.link, currentLocale === locale && _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.current),\n        locale: locale,\n        onClick: switchLocale,\n        children: locale.toUpperCase()\n      }, locale, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(LocaleToggler, \"OSDlDdsV1A92resxJyVsrIHXfQw=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"]];\n});\n\n_c = LocaleToggler;\n\nvar Navbar = function Navbar() {\n  _s2();\n\n  var _useRouter2 = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])(),\n      route = _useRouter2.route;\n\n  var _useTranslation = Object(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('common'),\n      t = _useTranslation.t;\n\n  var _Object$entries$reduc = Object.entries(ROUTE).reduce(function (acc, _ref2) {\n    var _ref3 = Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, 2),\n        alias = _ref3[0],\n        route = _ref3[1];\n\n    var mainRoutes = acc.mainRoutes,\n        secondaryRoutes = acc.secondaryRoutes;\n\n    if (route.navBar) {\n      return {\n        mainRoutes: _objectSpread(_objectSpread({}, mainRoutes), {}, Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, alias, route)),\n        secondaryRoutes: secondaryRoutes\n      };\n    }\n\n    ;\n  }, {\n    mainRoutes: {},\n    secondaryRoutes: {}\n  }),\n      mainRoutes = _Object$entries$reduc.mainRoutes,\n      secondaryRoutes = _Object$entries$reduc.secondaryRoutes;\n\n  console.log(secondaryRoutes);\n  var navBarRoutes = Object.entries(_const_routes__WEBPACK_IMPORTED_MODULE_8__[\"ROUTES\"]).filter(function (_ref4) {\n    var _ref5 = Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref4, 2),\n        _ = _ref5[0],\n        navBar = _ref5[1].navBar;\n\n    return navBar;\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.root,\n    children: [navBarRoutes.map(function (_ref6) {\n      var _ref7 = Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref6, 2),\n          alias = _ref7[0],\n          properties = _ref7[1];\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: alias,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.link, route === alias && _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.current),\n          children: t(\"header.\".concat(alias))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 10\n        }, _this)\n      }, alias, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(LocaleToggler, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Navbar, \"8qjYgowSSDbbwGnk+0DMLDL0WtI=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"], next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c2 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"LocaleToggler\");\n$RefreshReg$(_c2, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qc3g/MTlmYiJdLCJuYW1lcyI6WyJzZWNvbmRhcnlNZW51IiwiTG9jYWxlVG9nZ2xlciIsInVzZVJvdXRlciIsInB1c2giLCJsb2NhbGVzIiwicGF0aG5hbWUiLCJjdXJyZW50TG9jYWxlIiwibG9jYWxlIiwic3dpdGNoTG9jYWxlIiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIiwic3R5bGVzIiwibWFwIiwiY2xhc3NOYW1lcyIsImxpbmsiLCJjdXJyZW50IiwidG9VcHBlckNhc2UiLCJOYXZiYXIiLCJyb3V0ZSIsInVzZVRyYW5zbGF0aW9uIiwidCIsIk9iamVjdCIsImVudHJpZXMiLCJST1VURSIsInJlZHVjZSIsImFjYyIsImFsaWFzIiwibWFpblJvdXRlcyIsInNlY29uZGFyeVJvdXRlcyIsIm5hdkJhciIsImNvbnNvbGUiLCJsb2ciLCJuYXZCYXJSb3V0ZXMiLCJST1VURVMiLCJmaWx0ZXIiLCJfIiwicm9vdCIsInByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztBQUlBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLG1CQU10QkMseUVBQVMsRUFOYTtBQUFBLE1BRXhCQyxJQUZ3QixjQUV4QkEsSUFGd0I7QUFBQSxNQUd4QkMsT0FId0IsY0FHeEJBLE9BSHdCO0FBQUEsTUFJeEJDLFFBSndCLGNBSXhCQSxRQUp3QjtBQUFBLE1BS2hCQyxhQUxnQixjQUt4QkMsTUFMd0I7O0FBTzFCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWM7QUFBQSxRQUFa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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBaUJELENBckNEOztJQUFNVCxNO1VBQ1loQixpRSxFQUNKa0IscUU7OztNQUZSRixNO0FBc0NTQSxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2YmFyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7Uk9VVEVTfSBmcm9tICcuLi8uLi9jb25zdC9yb3V0ZXMnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcbmNvbnN0IHNlY29uZGFyeU1lbnUgPSAoKSA9PiB7XG4gIHJldHVybiA8ZGl2PjwvZGl2Pjtcbn07XG5cbmNvbnN0IExvY2FsZVRvZ2dsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwdXNoLFxuICAgIGxvY2FsZXMsXG4gICAgcGF0aG5hbWUsXG4gICAgbG9jYWxlOiBjdXJyZW50TG9jYWxlLFxuICB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHN3aXRjaExvY2FsZSA9ICh7dGFyZ2V0fSkgPT4ge1xuICAgIGNvbnN0IHt2YWx1ZTogbG9jYWxlfSA9IHRhcmdldC5hdHRyaWJ1dGVzLmxvY2FsZTtcbiAgICByZXR1cm4gcHVzaChwYXRobmFtZSwgcGF0aG5hbWUsIHtsb2NhbGV9KTtcbiAgfTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9jYWxlc30+XG4gICAge2xvY2FsZXMubWFwKCAobG9jYWxlKSA9PlxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICBjbGFzc05hbWVzKHN0eWxlcy5saW5rLFxuICAgICAgICAgICAgICAoY3VycmVudExvY2FsZSA9PT0gbG9jYWxlKSAmJiBzdHlsZXMuY3VycmVudClcbiAgICAgICAgfVxuICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAga2V5PXtsb2NhbGV9XG4gICAgICAgIG9uQ2xpY2s9e3N3aXRjaExvY2FsZX1cbiAgICAgID5cbiAgICAgICAge2xvY2FsZS50b1VwcGVyQ2FzZSgpfVxuICAgICAgPC9hPilcbiAgICB9XG4gIDwvZGl2Pjtcbn07XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3Qge3JvdXRlfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyk7XG4gIGNvbnN0IHttYWluUm91dGVzLCBzZWNvbmRhcnlSb3V0ZXN9ID0gT2JqZWN0LmVudHJpZXMoUk9VVEUpXG4gICAgICAucmVkdWNlKCAoYWNjLCBbYWxpYXMsIHJvdXRlXSkgPT4ge1xuICAgICAgICBjb25zdCB7bWFpblJvdXRlcywgc2Vjb25kYXJ5Um91dGVzfSA9IGFjYztcbiAgICAgICAgaWYgKHJvdXRlLm5hdkJhcikge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtYWluUm91dGVzOiB7Li4ubWFpblJvdXRlcywgW2FsaWFzXTogcm91dGV9LFxuICAgICAgICAgICAgc2Vjb25kYXJ5Um91dGVzLFxuICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICB9LCB7XG4gICAgICAgIG1haW5Sb3V0ZXM6IHt9LFxuICAgICAgICBzZWNvbmRhcnlSb3V0ZXM6IHt9LFxuICAgICAgfSk7XG5cbiAgY29uc29sZS5sb2coc2Vjb25kYXJ5Um91dGVzKTtcbiAgY29uc3QgbmF2QmFyUm91dGVzID0gT2JqZWN0LmVudHJpZXMoUk9VVEVTKVxuICAgICAgLmZpbHRlcigoW18sIHtuYXZCYXJ9XSkgPT4gbmF2QmFyKTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0+XG4gICAge1xuICAgICAgbmF2QmFyUm91dGVzLm1hcCgoW2FsaWFzLCBwcm9wZXJ0aWVzXSkgPT5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPXthbGlhc31cbiAgICAgICAgICBrZXk9e2FsaWFzfVxuICAgICAgICA+PGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIGNsYXNzTmFtZXMoc3R5bGVzLmxpbmssIChyb3V0ZSA9PT0gYWxpYXMpICYmIHN0eWxlcy5jdXJyZW50KVxuICAgICAgICAgICAgfT5cbiAgICAgICAgICAgIHt0KGBoZWFkZXIuJHthbGlhc31gKX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz4sXG4gICAgICApXG4gICAgfVxuICAgIDxMb2NhbGVUb2dnbGVyLz5cbiAgPC9kaXY+O1xufTtcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar/Navbar.jsx\n");

/***/ })

})