webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/classnames/index.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-easy-swipe/lib/index.js":
false,

/***/ "./node_modules/react-easy-swipe/lib/react-swipe.js":
false,

/***/ "./node_modules/react-responsive-carousel/lib/js/CSSTranslate.js":
false,

/***/ "./node_modules/react-responsive-carousel/lib/js/components/Carousel.js":
false,

/***/ "./node_modules/react-responsive-carousel/lib/js/components/Thumbs.js":
false,

/***/ "./node_modules/react-responsive-carousel/lib/js/cssClasses.js":
false,

/***/ "./node_modules/react-responsive-carousel/lib/js/dimensions.js":
false,

/***/ "./node_modules/react-responsive-carousel/lib/js/index.js":
false,

/***/ "./node_modules/react-responsive-carousel/lib/js/shims/document.js":
false,

/***/ "./node_modules/react-responsive-carousel/lib/js/shims/window.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler-tracing.development.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
false,

/***/ "./node_modules/scheduler/index.js":
false,

/***/ "./node_modules/scheduler/tracing.js":
false,

/***/ "./src/components/Banner/Banner.jsx":
/*!******************************************!*\
  !*** ./src/components/Banner/Banner.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Banner_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Banner.module.scss */ \"./src/components/Banner/Banner.module.scss\");\n/* harmony import */ var _Banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Banner_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _const_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../const/content */ \"./src/const/content.js\");\n/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../const/routes */ \"./src/const/routes.js\");\n\n\nvar _jsxFileName = \"/home/nikita/comm-su/src/components/Banner/Banner.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Paginator = function Paginator() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 10\n  }, _this);\n};\n\n_c = Paginator;\n\nvar Banner = function Banner() {\n  _s();\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])(),\n      route = _useRouter.route;\n\n  var bannerList = _const_content__WEBPACK_IMPORTED_MODULE_5__[\"BANNERS\"][route];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n    children: bannerList.map(function (_ref) {\n      var link = _ref.link,\n          file = _ref.file;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        src: \"\".concat(_const_routes__WEBPACK_IMPORTED_MODULE_6__[\"PATHS\"].BANNER).concat(file),\n        width: 1920,\n        height: 404\n      }, file, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Banner, \"k7hjVDAzADvKKNZ7y2oUYyPO5C4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c2 = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Paginator\");\n$RefreshReg$(_c2, \"Banner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmFubmVyL0Jhbm5lci5qc3g/NmM0MiJdLCJuYW1lcyI6WyJQYWdpbmF0b3IiLCJCYW5uZXIiLCJ1c2VSb3V0ZXIiLCJyb3V0ZSIsImJhbm5lckxpc3QiLCJCQU5ORVJTIiwic3R5bGVzIiwicm9vdCIsIm1hcCIsImxpbmsiLCJmaWxlIiwiUEFUSFMiLCJCQU5ORVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztLQUFNQSxTOztBQUlOLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxtQkFDSEMsNkRBQVMsRUFETjtBQUFBLE1BQ1pDLEtBRFksY0FDWkEsS0FEWTs7QUFFbkIsTUFBTUMsVUFBVSxHQUFHQyxzREFBTyxDQUFDRixLQUFELENBQTFCO0FBRUEsc0JBQU87QUFBSyxhQUFTLEVBQUVHLDBEQUFNLENBQUNDLElBQXZCO0FBQUEsY0FFSEgsVUFBVSxDQUFDSSxHQUFYLENBQWU7QUFBQSxVQUFFQyxJQUFGLFFBQUVBLElBQUY7QUFBQSxVQUFRQyxJQUFSLFFBQVFBLElBQVI7QUFBQSwwQkFDYixxRUFBQyxpREFBRDtBQUNFLFdBQUcsWUFBS0MsbURBQUssQ0FBQ0MsTUFBWCxTQUFvQkYsSUFBcEIsQ0FETDtBQUVFLGFBQUssRUFBRSxJQUZUO0FBR0UsY0FBTSxFQUFFO0FBSFYsU0FJT0EsSUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGE7QUFBQSxLQUFmO0FBRkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBV0QsQ0FmRDs7R0FBTVQsTTtVQUNZQyxxRDs7O01BRFpELE07QUFnQlNBLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQmFubmVyL0Jhbm5lci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CYW5uZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHtCQU5ORVJTfSBmcm9tICcuLi8uLi9jb25zdC9jb250ZW50JztcbmltcG9ydCB7UEFUSFN9IGZyb20gJy4uLy4uL2NvbnN0L3JvdXRlcyc7XG5cbmNvbnN0IFBhZ2luYXRvciA9ICgpID0+IHtcbiAgcmV0dXJuIDxkaXY+PC9kaXY+O1xufTtcblxuY29uc3QgQmFubmVyID0gKCkgPT4ge1xuICBjb25zdCB7cm91dGV9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGJhbm5lckxpc3QgPSBCQU5ORVJTW3JvdXRlXTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cbiAgICB7XG4gICAgICBiYW5uZXJMaXN0Lm1hcCgoe2xpbmssIGZpbGV9KSA9PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e2Ake1BBVEhTLkJBTk5FUn0ke2ZpbGV9YH1cbiAgICAgICAgICB3aWR0aD17MTkyMH1cbiAgICAgICAgICBoZWlnaHQ9ezQwNH1cbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgIC8+KVxuICAgIH1cbiAgPC9kaXY+O1xufTtcbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Banner/Banner.jsx\n");

/***/ })

})