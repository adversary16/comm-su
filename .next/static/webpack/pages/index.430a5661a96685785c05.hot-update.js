webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Catalogue/Catalogue.jsx":
/*!************************************************!*\
  !*** ./src/components/Catalogue/Catalogue.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Catalogue_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Catalogue.module.scss */ \"./src/components/Catalogue/Catalogue.module.scss\");\n/* harmony import */ var _Catalogue_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Catalogue_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _const_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../const/content */ \"./src/const/content.js\");\n\n\nvar _jsxFileName = \"/home/nikita/comm-su/src/components/Catalogue/Catalogue.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Catalogue = function Catalogue(_ref) {\n  _s();\n\n  var t = _ref.t;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])(),\n      route = _useRouter.route;\n\n  var currentCat = _const_content__WEBPACK_IMPORTED_MODULE_5__[\"CATALOGUES\"][route];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Catalogue_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.root,\n    children: currentCat && currentCat.map(function (_ref2) {\n      var id = _ref2.id,\n          image = _ref2.image,\n          link = _ref2.link;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _Catalogue_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.catalogue_item,\n        children: [image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          src: image,\n          width: 491 * 0.5,\n          height: 425 * 0.5\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 22\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: link,\n          children: t('catalogue'.concat(\".\", id))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this)]\n      }, id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Catalogue, \"k7hjVDAzADvKKNZ7y2oUYyPO5C4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Catalogue;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Catalogue);\n\nvar _c;\n\n$RefreshReg$(_c, \"Catalogue\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZ3VlL0NhdGFsb2d1ZS5qc3g/YWY5NyJdLCJuYW1lcyI6WyJDYXRhbG9ndWUiLCJ0IiwidXNlUm91dGVyIiwicm91dGUiLCJjdXJyZW50Q2F0IiwiQ0FUQUxPR1VFUyIsInN0eWxlcyIsInJvb3QiLCJtYXAiLCJpZCIsImltYWdlIiwibGluayIsImNhdGFsb2d1ZV9pdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQVM7QUFBQTs7QUFBQSxNQUFQQyxDQUFPLFFBQVBBLENBQU87O0FBQUEsbUJBQ1RDLDZEQUFTLEVBREE7QUFBQSxNQUNsQkMsS0FEa0IsY0FDbEJBLEtBRGtCOztBQUV6QixNQUFNQyxVQUFVLEdBQUdDLHlEQUFVLENBQUNGLEtBQUQsQ0FBN0I7QUFDQSxzQkFBTztBQUFLLGFBQVMsRUFBRUcsNkRBQU0sQ0FBQ0MsSUFBdkI7QUFBQSxjQUVISCxVQUFVLElBQUlBLFVBQVUsQ0FBQ0ksR0FBWCxDQUFlO0FBQUEsVUFBRUMsRUFBRixTQUFFQSxFQUFGO0FBQUEsVUFBTUMsS0FBTixTQUFNQSxLQUFOO0FBQUEsVUFBYUMsSUFBYixTQUFhQSxJQUFiO0FBQUEsMEJBQzNCO0FBQWMsaUJBQVMsRUFBRUwsNkRBQU0sQ0FBQ00sY0FBaEM7QUFBQSxtQkFDSUYsS0FBSyxpQkFBSSxxRUFBQyxpREFBRDtBQUNULGFBQUcsRUFBRUEsS0FESTtBQUVULGVBQUssRUFBRSxNQUFJLEdBRkY7QUFHVCxnQkFBTSxFQUFFLE1BQUk7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURiLGVBTUU7QUFBRyxjQUFJLEVBQUVDLElBQVQ7QUFBQSxvQkFBZ0JWLENBQUMsQ0FBSSxXQUFKLGFBQW1CUSxFQUFuQjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUEsU0FBVUEsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRDJCO0FBQUEsS0FBZjtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQWNELENBakJEOztHQUFNVCxTO1VBQ1lFLHFEOzs7S0FEWkYsUztBQWtCU0Esd0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXRhbG9ndWUvQ2F0YWxvZ3VlLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2F0YWxvZ3VlLm1vZHVsZS5zY3NzJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge0NBVEFMT0dVRVN9IGZyb20gJy4uLy4uL2NvbnN0L2NvbnRlbnQnO1xuXG5jb25zdCBDYXRhbG9ndWUgPSAoe3R9KSA9PiB7XG4gIGNvbnN0IHtyb3V0ZX0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgY3VycmVudENhdCA9IENBVEFMT0dVRVNbcm91dGVdO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cbiAgICB7XG4gICAgICBjdXJyZW50Q2F0ICYmIGN1cnJlbnRDYXQubWFwKCh7aWQsIGltYWdlLCBsaW5rfSkgPT5cbiAgICAgICAgPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9e3N0eWxlcy5jYXRhbG9ndWVfaXRlbX0+XG4gICAgICAgICAgeyBpbWFnZSAmJiA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICB3aWR0aD17NDkxKjAuNX1cbiAgICAgICAgICAgIGhlaWdodD17NDI1KjAuNX1cbiAgICAgICAgICAvPn1cbiAgICAgICAgICA8YSBocmVmPXtsaW5rfT57dChgJHsnY2F0YWxvZ3VlJ30uJHtpZH1gKX08L2E+XG4gICAgICAgIDwvZGl2PixcbiAgICAgIClcbiAgICB9XG4gIDwvZGl2Pjtcbn07XG5leHBvcnQgZGVmYXVsdCBDYXRhbG9ndWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Catalogue/Catalogue.jsx\n");

/***/ })

})