webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Navbar/Navbar.jsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-translate/useTranslation */ \"./node_modules/next-translate/lib/esm/useTranslation.js\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navbar.module.scss */ \"./src/components/Navbar/Navbar.module.scss\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../const/routes */ \"./src/const/routes.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _jsxFileName = \"/home/nikita/comm-su/src/components/Navbar/Navbar.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar SecondaryMenu = function SecondaryMenu(_ref) {\n  var secondaryRoutes = _ref.secondaryRoutes;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.secondaryMenu,\n    children: Object.entries(secondaryRoutes).map(function (_ref2) {\n      var _ref3 = Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref2, 2),\n          alias = _ref3[0],\n          properties = _ref3[1];\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: alias,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.link, route === alias && _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.current),\n          children: t(\"header.\".concat(alias))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 10\n        }, _this)\n      }, alias, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 10\n  }, _this);\n};\n\n_c = SecondaryMenu;\n\nvar LocaleToggler = function LocaleToggler() {\n  _s();\n\n  var _useRouter = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])(),\n      push = _useRouter.push,\n      locales = _useRouter.locales,\n      pathname = _useRouter.pathname,\n      currentLocale = _useRouter.locale;\n\n  var switchLocale = function switchLocale(_ref4) {\n    var target = _ref4.target;\n    var locale = target.attributes.locale.value;\n    return push(pathname, pathname, {\n      locale: locale\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.locales,\n    children: locales.map(function (locale) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.link, currentLocale === locale && _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.current),\n        locale: locale,\n        onClick: switchLocale,\n        children: locale.toUpperCase()\n      }, locale, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(LocaleToggler, \"OSDlDdsV1A92resxJyVsrIHXfQw=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"]];\n});\n\n_c2 = LocaleToggler;\n\nvar Navbar = function Navbar() {\n  _s2();\n\n  var _useRouter2 = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])(),\n      route = _useRouter2.route;\n\n  var _useTranslation = Object(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('common'),\n      t = _useTranslation.t;\n\n  var _Object$entries$reduc = Object.entries(_const_routes__WEBPACK_IMPORTED_MODULE_8__[\"ROUTES\"]).reduce(function (acc, _ref5) {\n    var _ref6 = Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref5, 2),\n        alias = _ref6[0],\n        route = _ref6[1];\n\n    var mainRoutes = acc.mainRoutes,\n        secondaryRoutes = acc.secondaryRoutes;\n\n    if (route.navBar) {\n      return {\n        mainRoutes: _objectSpread(_objectSpread({}, mainRoutes), {}, Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, alias, route)),\n        secondaryRoutes: secondaryRoutes\n      };\n    }\n\n    ;\n    return {\n      mainRoutes: mainRoutes,\n      secondaryRoutes: _objectSpread(_objectSpread({}, secondaryRoutes), {}, Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, alias, route))\n    };\n  }, {\n    mainRoutes: {},\n    secondaryRoutes: {}\n  }),\n      mainRoutes = _Object$entries$reduc.mainRoutes,\n      secondaryRoutes = _Object$entries$reduc.secondaryRoutes;\n\n  var navBarRoutes = Object.entries(_const_routes__WEBPACK_IMPORTED_MODULE_8__[\"ROUTES\"]).filter(function (_ref7) {\n    var _ref8 = Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref7, 2),\n        _ = _ref8[0],\n        navBar = _ref8[1].navBar;\n\n    return navBar;\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.root,\n    children: [Object.entries(mainRoutes).map(function (_ref9) {\n      var _ref10 = Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref9, 2),\n          alias = _ref10[0],\n          properties = _ref10[1];\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: alias,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.link, route === alias && _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.current),\n          children: t(\"header.\".concat(alias))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 10\n        }, _this)\n      }, alias, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this);\n    }), secondaryRoutes.size && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SecondaryMenu, _objectSpread({}, {\n      secondaryRoutes: secondaryRoutes\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 31\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LocaleToggler, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Navbar, \"8qjYgowSSDbbwGnk+0DMLDL0WtI=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"], next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c3 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"SecondaryMenu\");\n$RefreshReg$(_c2, \"LocaleToggler\");\n$RefreshReg$(_c3, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qc3g/MTlmYiJdLCJuYW1lcyI6WyJTZWNvbmRhcnlNZW51Iiwic2Vjb25kYXJ5Um91dGVzIiwic3R5bGVzIiwic2Vjb25kYXJ5TWVudSIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJhbGlhcyIsInByb3BlcnRpZXMiLCJjbGFzc05hbWVzIiwibGluayIsInJvdXRlIiwiY3VycmVudCIsInQiLCJMb2NhbGVUb2dnbGVyIiwidXNlUm91dGVyIiwicHVzaCIsImxvY2FsZXMiLCJwYXRobmFtZSIsImN1cnJlbnRMb2NhbGUiLCJsb2NhbGUiLCJzd2l0Y2hMb2NhbGUiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSIsIk5hdmJhciIsInVzZVRyYW5zbGF0aW9uIiwiUk9VVEVTIiwicmVkdWNlIiwiYWNjIiwibWFpblJvdXRlcyIsIm5hdkJhciIsIm5hdkJhclJvdXRlcyIsImZpbHRlciIsIl8iLCJyb290Iiwic2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUF1QjtBQUFBLE1BQXJCQyxlQUFxQixRQUFyQkEsZUFBcUI7QUFDM0Msc0JBQU87QUFBSyxhQUFTLEVBQUVDLDBEQUFNLENBQUNDLGFBQXZCO0FBQUEsY0FFSEMsTUFBTSxDQUFDQyxPQUFQLENBQWVKLGVBQWYsRUFBZ0NLLEdBQWhDLENBQW9DO0FBQUE7QUFBQSxVQUFFQyxLQUFGO0FBQUEsVUFBU0MsVUFBVDs7QUFBQSwwQkFDbEMscUVBQUMsZ0RBQUQ7QUFDRSxZQUFJLEVBQUVELEtBRFI7QUFBQSwrQkFHQztBQUNHLG1CQUFTLEVBQ1BFLGlEQUFVLENBQUNQLDBEQUFNLENBQUNRLElBQVIsRUFBZUMsS0FBSyxLQUFL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QUNUO0FBQUE7QUFBQSxRQUFFQyxDQUFGO0FBQUEsUUFBTUgsTUFBTixZQUFNQSxNQUFOOztBQUFBLFdBQW1CQSxNQUFuQjtBQUFBLEdBRFMsQ0FBckI7QUFFQSxzQkFBTztBQUFLLGFBQVMsRUFBRTlCLDBEQUFNLENBQUNrQyxJQUF2QjtBQUFBLGVBRUhoQyxNQUFNLENBQUNDLE9BQVAsQ0FBZTBCLFVBQWYsRUFBMkJ6QixHQUEzQixDQUErQjtBQUFBO0FBQUEsVUFBRUMsS0FBRjtBQUFBLFVBQVNDLFVBQVQ7O0FBQUEsMEJBQzdCLHFFQUFDLGdEQUFEO0FBQ0UsWUFBSSxFQUFFRCxLQURSO0FBQUEsK0JBR0M7QUFDRyxtQkFBUyxFQUNQRSxpREFBVSxDQUFDUCwwREFBTSxDQUFDUSxJQUFSLEVBQWVDLEtBQUssS0FBS0osS0FBWCxJQUFxQkwsMERBQU0sQ0FBQ1UsT0FBMUMsQ0FGZjtBQUFBLG9CQUlJQyxDQUFDLGtCQUFXTixLQUFYO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhELFNBRU9BLEtBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUQ2QjtBQUFBLEtBQS9CLENBRkcsRUFnQkhOLGVBQWUsQ0FBQ29DLElBQWhCLGlCQUF3QixxRUFBQyxhQUFELG9CQUFvQjtBQUFDcEMscUJBQWUsRUFBZkE7QUFBRCxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJyQixlQWtCTCxxRUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFvQkQsQ0E3Q0Q7O0lBQU15QixNO1VBQ1lYLGlFLEVBQ0pZLHFFOzs7TUFGUkQsTTtBQThDU0EscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmJhci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge1JPVVRFU30gZnJvbSAnLi4vLi4vY29uc3Qvcm91dGVzJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XG5jb25zdCBTZWNvbmRhcnlNZW51ID0gKHtzZWNvbmRhcnlSb3V0ZXN9KSA9PiB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZGFyeU1lbnV9PlxuICAgIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHNlY29uZGFyeVJvdXRlcykubWFwKChbYWxpYXMsIHByb3BlcnRpZXNdKSA9PlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9e2FsaWFzfVxuICAgICAgICAgIGtleT17YWxpYXN9XG4gICAgICAgID48YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lcyhzdHlsZXMubGluaywgKHJvdXRlID09PSBhbGlhcykgJiYgc3R5bGVzLmN1cnJlbnQpXG4gICAgICAgICAgICB9PlxuICAgICAgICAgICAge3QoYGhlYWRlci4ke2FsaWFzfWApfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPixcbiAgICAgIClcbiAgICB9XG4gIDwvZGl2Pjtcbn07XG5cbmNvbnN0IExvY2FsZVRvZ2dsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwdXNoLFxuICAgIGxvY2FsZXMsXG4gICAgcGF0aG5hbWUsXG4gICAgbG9jYWxlOiBjdXJyZW50TG9jYWxlLFxuICB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHN3aXRjaExvY2FsZSA9ICh7dGFyZ2V0fSkgPT4ge1xuICAgIGNvbnN0IHt2YWx1ZTogbG9jYWxlfSA9IHRhcmdldC5hdHRyaWJ1dGVzLmxvY2FsZTtcbiAgICByZXR1cm4gcHVzaChwYXRobmFtZSwgcGF0aG5hbWUsIHtsb2NhbGV9KTtcbiAgfTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9jYWxlc30+XG4gICAge2xvY2FsZXMubWFwKCAobG9jYWxlKSA9PlxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICBjbGFzc05hbWVzKHN0eWxlcy5saW5rLFxuICAgICAgICAgICAgICAoY3VycmVudExvY2FsZSA9PT0gbG9jYWxlKSAmJiBzdHlsZXMuY3VycmVudClcbiAgICAgICAgfVxuICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAga2V5PXtsb2NhbGV9XG4gICAgICAgIG9uQ2xpY2s9e3N3aXRjaExvY2FsZX1cbiAgICAgID5cbiAgICAgICAge2xvY2FsZS50b1VwcGVyQ2FzZSgpfVxuICAgICAgPC9hPilcbiAgICB9XG4gIDwvZGl2Pjtcbn07XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3Qge3JvdXRlfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyk7XG4gIGNvbnN0IHttYWluUm91dGVzLCBzZWNvbmRhcnlSb3V0ZXN9ID0gT2JqZWN0LmVudHJpZXMoUk9VVEVTKVxuICAgICAgLnJlZHVjZSggKGFjYywgW2FsaWFzLCByb3V0ZV0pID0+IHtcbiAgICAgICAgY29uc3Qge21haW5Sb3V0ZXMsIHNlY29uZGFyeVJvdXRlc30gPSBhY2M7XG4gICAgICAgIGlmIChyb3V0ZS5uYXZCYXIpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWFpblJvdXRlczogey4uLm1haW5Sb3V0ZXMsIFthbGlhc106IHJvdXRlfSxcbiAgICAgICAgICAgIHNlY29uZGFyeVJvdXRlcyxcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge21haW5Sb3V0ZXMsXG4gICAgICAgICAgc2Vjb25kYXJ5Um91dGVzOlxuICAgICAgICB7XG4gICAgICAgICAgLi4uc2Vjb25kYXJ5Um91dGVzLFxuICAgICAgICAgIFthbGlhc106IHJvdXRlLFxuICAgICAgICB9fTtcbiAgICAgIH0sIHtcbiAgICAgICAgbWFpblJvdXRlczoge30sXG4gICAgICAgIHNlY29uZGFyeVJvdXRlczoge30sXG4gICAgICB9KTtcblxuICBjb25zdCBuYXZCYXJSb3V0ZXMgPSBPYmplY3QuZW50cmllcyhST1VURVMpXG4gICAgICAuZmlsdGVyKChbXywge25hdkJhcn1dKSA9PiBuYXZCYXIpO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cbiAgICB7XG4gICAgICBPYmplY3QuZW50cmllcyhtYWluUm91dGVzKS5tYXAoKFthbGlhcywgcHJvcGVydGllc10pID0+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj17YWxpYXN9XG4gICAgICAgICAga2V5PXthbGlhc31cbiAgICAgICAgPjxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBjbGFzc05hbWVzKHN0eWxlcy5saW5rLCAocm91dGUgPT09IGFsaWFzKSAmJiBzdHlsZXMuY3VycmVudClcbiAgICAgICAgICAgIH0+XG4gICAgICAgICAgICB7dChgaGVhZGVyLiR7YWxpYXN9YCl9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+LFxuICAgICAgKVxuICAgIH1cbiAgICB7XG4gICAgICBzZWNvbmRhcnlSb3V0ZXMuc2l6ZSAmJiA8U2Vjb25kYXJ5TWVudSB7IC4uLntzZWNvbmRhcnlSb3V0ZXN9fS8+XG4gICAgfVxuICAgIDxMb2NhbGVUb2dnbGVyLz5cbiAgPC9kaXY+O1xufTtcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar/Navbar.jsx\n");

/***/ })

})