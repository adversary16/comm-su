webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Navbar/Navbar.jsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-translate/useTranslation */ \"./node_modules/next-translate/lib/esm/useTranslation.js\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navbar.module.scss */ \"./src/components/Navbar/Navbar.module.scss\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../const/routes */ \"./src/const/routes.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _jsxFileName = \"/home/nikita/comm-su/src/components/Navbar/Navbar.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar secondaryMenu = function secondaryMenu() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 10\n  }, _this);\n};\n\nvar LocaleToggler = function LocaleToggler() {\n  _s();\n\n  var _useRouter = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])(),\n      push = _useRouter.push,\n      locales = _useRouter.locales,\n      pathname = _useRouter.pathname,\n      currentLocale = _useRouter.locale,\n      rest = Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useRouter, [\"push\", \"locales\", \"pathname\", \"locale\"]);\n\n  console.log(currentLocale);\n\n  var switchLocale = function switchLocale(_ref) {\n    var target = _ref.target;\n    var locale = target.attributes.locale.value;\n    return push(pathname, pathname, {\n      locale: locale\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.locales,\n    children: locales.map(function (locale) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.link, currentLocale === locale && _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.current),\n        locale: locale,\n        onClick: switchLocale,\n        children: locale.toUpperCase()\n      }, locale, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(LocaleToggler, \"dkiodgOglqhTU+ifXiJD5egEPQk=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"]];\n});\n\n_c = LocaleToggler;\n\nvar Navbar = function Navbar() {\n  _s2();\n\n  var _useRouter2 = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])(),\n      asPath = _useRouter2.asPath;\n\n  var _useTranslation = Object(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('common'),\n      t = _useTranslation.t;\n\n  var navBarRoutes = Object.entries(_const_routes__WEBPACK_IMPORTED_MODULE_8__[\"ROUTES\"]).filter(function (_ref2) {\n    var _ref3 = Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, 2),\n        _ = _ref3[0],\n        navBar = _ref3[1].navBar;\n\n    return navBar;\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.root,\n    children: [navBarRoutes.map(function (_ref4) {\n      var _ref5 = Object(_home_nikita_comm_su_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref4, 2),\n          alias = _ref5[0],\n          properties = _ref5[1];\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: alias,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.link, asPath === alias && _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.current),\n          children: t(\"header.\".concat(alias))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 10\n        }, _this)\n      }, alias, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(LocaleToggler, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Navbar, \"n7/s+NySFnBCL71yVyGiKdvA/ts=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"], next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c2 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"LocaleToggler\");\n$RefreshReg$(_c2, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qc3g/MTlmYiJdLCJuYW1lcyI6WyJzZWNvbmRhcnlNZW51IiwiTG9jYWxlVG9nZ2xlciIsInVzZVJvdXRlciIsInB1c2giLCJsb2NhbGVzIiwicGF0aG5hbWUiLCJjdXJyZW50TG9jYWxlIiwibG9jYWxlIiwicmVzdCIsImNvbnNvbGUiLCJsb2ciLCJzd2l0Y2hMb2NhbGUiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJzdHlsZXMiLCJtYXAiLCJjbGFzc05hbWVzIiwibGluayIsImN1cnJlbnQiLCJ0b1VwcGVyQ2FzZSIsIk5hdmJhciIsImFzUGF0aCIsInVzZVRyYW5zbGF0aW9uIiwidCIsIm5hdkJhclJvdXRlcyIsIk9iamVjdCIsImVudHJpZXMiLCJST1VURVMiLCJmaWx0ZXIiLCJfIiwibmF2QmFyIiwicm9vdCIsImFsaWFzIiwicHJvcGVydGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxtQkFDd0NDLHlFQUFTLEVBRGpEO0FBQUEsTUFDbkJDLElBRG1CLGNBQ25CQSxJQURtQjtBQUFBLE1BQ2JDLE9BRGEsY0FDYkEsT0FEYTtBQUFBLE1BQ0pDLFFBREksY0FDSkEsUUFESTtBQUFBLE1BQ2NDLGFBRGQsY0FDTUMsTUFETjtBQUFBLE1BQ2dDQyxJQURoQzs7QUFFMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixhQUFaOztBQUNBLE1BQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWM7QUFBQSxRQUFaQyxNQUFZLFFBQVpBLE1BQVk7QUFBQSxRQUNuQkwsTUFEbUIsR0FDVEssTUFBTSxDQUFDQyxVQUFQLENBQWtCTixNQURULENBQzFCTyxLQUQwQjtBQUVqQyxXQUFPWCxJQUFJLENBQUNFLFFBQUQsRUFBV0EsUUFBWCxFQUFxQjtBQUFDRSxZQUFNLEVBQU5BO0FBQUQsS0FBckIsQ0FBWDtBQUNELEdBSEQ7O0FBSUEsc0JBQU87QUFBSyxhQUFTLEVBQUVRLDBEQUFNLENBQUNYLE9BQXZCO0FBQUEsY0FDSkEsT0FBTyxDQUFDWSxHQUFSLENBQWEsVUFBQ1QsTUFBRDtBQUFBLDBCQUNaO0FBQ0UsaUJBQVMsRUFDUFUsaURBQVUsQ0FBQ0YsMERBQU0sQ0FBQ0csSUFBUixFQUNMWixhQUFhLEtBQUtDLE1BQW5CLElBQThCUSwwREFBTSxDQUFDSSxPQUQvQixDQUZkO0FBS0UsY0FBTSxFQUFFWixNQUxWO0FBT0UsZUFBTyxFQUFFSSxZQVBYO0FBQUEsa0JBU0dKLE1BQU0sQ0FBQ2EsV0FBUDtBQVRILFNBTU9iLE1BTlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBYjtBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQWVELENBdEJEOztHQUFNTixhO1VBQzhEQyxpRTs7O0tBRDlERCxhOztBQXdCTixJQUFNb0IsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLG9CQUNGbkIseUVBQVMsRUFEUDtBQUFBLE1BQ1pvQixNQURZLGVBQ1pBLE1BRFk7O0FBQUEsd0JBRVBDLDZFQUFjLENBQUMsUUFBRCxDQUZQO0FBQUEsTUFFWkMsQ0FGWSxtQkFFWkEsQ0FGWTs7QUFHbkIsTUFBTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsb0RBQWYsRUFDaEJDLE1BRGdCLENBQ1Q7QUFBQTtBQUFBLFFBQUVDLENBQUY7QUFBQSxRQUFNQyxNQUFOLFlBQU1BLE1BQU47O0FBQUEsV0FBbUJBLE1BQW5CO0FBQUEsR0FEUyxDQUFyQjtBQUVBLHNCQUFPO0FBQUssYUFBUyxFQUFFaEIsMERBQU0sQ0FBQ2lCLElBQXZCO0FBQUEsZUFFSFAsWUFBWSxDQUFDVCxHQUFiLENBQWlCO0FBQUE7QUFBQSxVQUFFaUIsS0FBRjtBQUFBLFVBQVNDLFVBQVQ7O0FBQUEsMEJBQ2YscUVBQUMsZ0RBQUQ7QUFDRSxZQUFJLEVBQUVELEtBRFI7QUFBQSwrQkFHQztBQUNHLG1CQUFTLEVBQ1BoQixpREFBVSxDQUFDRiwwREFBTSxDQUFDRyxJQUFSLEVBQWVJLE1BQU0sS0FBS1csS0FBWixJQUFzQmxCLDBEQUFNLENBQUNJLE9BQTNDLENBRmY7QUFBQSxvQkFJSUssQ0FBQyxrQkFBV1MsS0FBWDtBQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRCxTQUVPQSxLQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEZTtBQUFBLEtBQWpCLENBRkcsZUFlTCxxRUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQWlCRCxDQXRCRDs7SUFBTVosTTtVQUNhbkIsaUUsRUFDTHFCLHFFOzs7TUFGUkYsTTtBQXVCU0EscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmJhci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge1JPVVRFU30gZnJvbSAnLi4vLi4vY29uc3Qvcm91dGVzJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XG5jb25zdCBzZWNvbmRhcnlNZW51ID0gKCkgPT4ge1xuICByZXR1cm4gPGRpdj48L2Rpdj47XG59O1xuXG5jb25zdCBMb2NhbGVUb2dnbGVyID0gKCkgPT4ge1xuICBjb25zdCB7cHVzaCwgbG9jYWxlcywgcGF0aG5hbWUsIGxvY2FsZTogY3VycmVudExvY2FsZSwgLi4ucmVzdH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc29sZS5sb2coY3VycmVudExvY2FsZSk7XG4gIGNvbnN0IHN3aXRjaExvY2FsZSA9ICh7dGFyZ2V0fSkgPT4ge1xuICAgIGNvbnN0IHt2YWx1ZTogbG9jYWxlfSA9IHRhcmdldC5hdHRyaWJ1dGVzLmxvY2FsZTtcbiAgICByZXR1cm4gcHVzaChwYXRobmFtZSwgcGF0aG5hbWUsIHtsb2NhbGV9KTtcbiAgfTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9jYWxlc30+XG4gICAge2xvY2FsZXMubWFwKCAobG9jYWxlKSA9PlxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICBjbGFzc05hbWVzKHN0eWxlcy5saW5rLFxuICAgICAgICAgICAgICAoY3VycmVudExvY2FsZSA9PT0gbG9jYWxlKSAmJiBzdHlsZXMuY3VycmVudClcbiAgICAgICAgfVxuICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAga2V5PXtsb2NhbGV9XG4gICAgICAgIG9uQ2xpY2s9e3N3aXRjaExvY2FsZX1cbiAgICAgID5cbiAgICAgICAge2xvY2FsZS50b1VwcGVyQ2FzZSgpfVxuICAgICAgPC9hPilcbiAgICB9XG4gIDwvZGl2Pjtcbn07XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3Qge2FzUGF0aH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpO1xuICBjb25zdCBuYXZCYXJSb3V0ZXMgPSBPYmplY3QuZW50cmllcyhST1VURVMpXG4gICAgICAuZmlsdGVyKChbXywge25hdkJhcn1dKSA9PiBuYXZCYXIpO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cbiAgICB7XG4gICAgICBuYXZCYXJSb3V0ZXMubWFwKChbYWxpYXMsIHByb3BlcnRpZXNdKSA9PlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9e2FsaWFzfVxuICAgICAgICAgIGtleT17YWxpYXN9XG4gICAgICAgID48YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lcyhzdHlsZXMubGluaywgKGFzUGF0aCA9PT0gYWxpYXMpICYmIHN0eWxlcy5jdXJyZW50KVxuICAgICAgICAgICAgfT5cbiAgICAgICAgICAgIHt0KGBoZWFkZXIuJHthbGlhc31gKX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz4sXG4gICAgICApXG4gICAgfVxuICAgIDxMb2NhbGVUb2dnbGVyLz5cbiAgPC9kaXY+O1xufTtcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar/Navbar.jsx\n");

/***/ })

})