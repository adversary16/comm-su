webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Catalogue/Catalogue.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Catalogue/Catalogue.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Catalogue_root__3mF5x {\\n  display: grid;\\n  width: 100%;\\n  grid-template-columns: repeat(5, 1fr);\\n  position: relative;\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3 {\\n  cursor: pointer;\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  position: relative;\\n  width: 100%;\\n  height: 100%;\\n  min-height: 10rem;\\n  justify-items: center;\\n  justify-content: center;\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3 > div {\\n  margin: 1rem !important;\\n  position: relative i !important;\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3:hover {\\n  background-color: var(--secondary) !important;\\n  color: var(--white);\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3:nth-of-type(odd) .Catalogue_caption_overlay__yjxZS {\\n  grid-column-start: 2;\\n  color: var(--primary);\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3:nth-of-type(odd) div:not(.Catalogue_caption_overlay__yjxZS) {\\n  grid-column-start: 1;\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3:nth-of-type(even) {\\n  background-color: var(--primary);\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3:nth-of-type(even) .Catalogue_caption_overlay__yjxZS {\\n  grid-column-start: 1;\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3:nth-of-type(even) div:not(.Catalogue_caption_overlay__yjxZS) {\\n  grid-column-start: 2;\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3 .Catalogue_caption_overlay__yjxZS {\\n  display: flex;\\n  margin: auto 0;\\n  width: 100%;\\n  justify-content: center;\\n  align-content: center;\\n  text-align: center;\\n  font-weight: bold;\\n  color: var(--white);\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3 .Catalogue_caption_overlay__yjxZS a {\\n  margin: auto 1rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Catalogue.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAA;EACA,WAAA;EACA,qCAAA;EACA,kBAAA;AACF;AAAE;EACE,eAAA;EACA,aAAA;EACA,qCAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,qBAAA;EACA,uBAAA;AAEJ;AADI;EACE,uBAAA;EACA,+BAAA;AAGN;AAAI;EACE,6CAAA;EACA,mBAAA;AAEN;AACM;EACE,oBAAA;EACA,qBAAA;AACR;AACM;EACE,oBAAA;AACR;AAEI;EACE,gCAAA;AAAN;AACM;EACE,oBAAA;AACR;AACM;EACE,oBAAA;AACR;AAEI;EACE,aAAA;EACA,cAAA;EACA,WAAA;EACA,uBAAA;EACA,qBAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;AAAN;AACM;EACE,iBAAA;AACR\",\"sourcesContent\":[\".root{\\n  display: grid;\\n  width: 100%;\\n  grid-template-columns: repeat(5, 1fr);\\n  position: relative;\\n  .catalogue_item{\\n    cursor: pointer;\\n    display: grid;\\n    grid-template-columns: repeat((2,1fr));\\n    position: relative;\\n    width: 100%;\\n    height: 100%;\\n    min-height: 10rem;\\n    justify-items: center;\\n    justify-content: center;\\n    & > div{\\n      margin: 1rem !important;\\n      position: relative i !important;\\n      \\n    }\\n    &:hover{\\n      background-color: var(--secondary) !important;\\n      color: var(--white);\\n    }\\n    &:nth-of-type(odd){\\n      .caption_overlay{\\n        grid-column-start: 2;\\n        color: var(--primary);\\n      }\\n      div:not(.caption_overlay){\\n        grid-column-start: 1;\\n      }\\n    }\\n    &:nth-of-type(even){\\n      background-color: var(--primary);\\n      .caption_overlay{\\n        grid-column-start: 1;\\n      }\\n      div:not(.caption_overlay){\\n        grid-column-start: 2;\\n      }\\n    }\\n    .caption_overlay {\\n      display: flex;\\n      margin: auto 0;\\n      width: 100%;\\n      justify-content: center;\\n      align-content: center;\\n      text-align: center;\\n      font-weight: bold;\\n      color: var(--white);\\n      a{\\n        margin: auto 1rem;\\n      }\\n    }\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"root\": \"Catalogue_root__3mF5x\",\n\t\"catalogue_item\": \"Catalogue_catalogue_item__lQSa3\",\n\t\"caption_overlay\": \"Catalogue_caption_overlay__yjxZS\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZ3VlL0NhdGFsb2d1ZS5tb2R1bGUuc2Nzcz9kOWY5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywyQkFBMkIsa0JBQWtCLGdCQUFnQiwwQ0FBMEMsdUJBQXVCLEdBQUcsMkRBQTJELG9CQUFvQixrQkFBa0IsMENBQTBDLHVCQUF1QixnQkFBZ0IsaUJBQWlCLHNCQUFzQiwwQkFBMEIsNEJBQTRCLEdBQUcsaUVBQWlFLDRCQUE0QixvQ0FBb0MsR0FBRyxpRUFBaUUsa0RBQWtELHdCQUF3QixHQUFHLDhHQUE4Ryx5QkFBeUIsMEJBQTBCLEdBQUcsdUhBQXVILHlCQUF5QixHQUFHLDZFQUE2RSxxQ0FBcUMsR0FBRywrR0FBK0cseUJBQXlCLEdBQUcsd0hBQXdILHlCQUF5QixHQUFHLDZGQUE2RixrQkFBa0IsbUJBQW1CLGdCQUFnQiw0QkFBNEIsMEJBQTBCLHVCQUF1QixzQkFBc0Isd0JBQXdCLEdBQUcsK0ZBQStGLHNCQUFzQixHQUFHLE9BQU8sc0ZBQXNGLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsK0JBQStCLGtCQUFrQixnQkFBZ0IsMENBQTBDLHVCQUF1QixvQkFBb0Isc0JBQXNCLG9CQUFvQiw2Q0FBNkMseUJBQXlCLGtCQUFrQixtQkFBbUIsd0JBQXdCLDRCQUE0Qiw4QkFBOEIsY0FBYyxnQ0FBZ0Msd0NBQXdDLGVBQWUsY0FBYyxzREFBc0QsNEJBQTRCLE9BQU8seUJBQXlCLHlCQUF5QiwrQkFBK0IsZ0NBQWdDLFNBQVMsa0NBQWtDLCtCQUErQixTQUFTLE9BQU8sMEJBQTBCLHlDQUF5Qyx5QkFBeUIsK0JBQStCLFNBQVMsa0NBQWtDLCtCQUErQixTQUFTLE9BQU8sd0JBQXdCLHNCQUFzQix1QkFBdUIsb0JBQW9CLGdDQUFnQyw4QkFBOEIsMkJBQTJCLDBCQUEwQiw0QkFBNEIsVUFBVSw0QkFBNEIsU0FBUyxPQUFPLEtBQUssR0FBRyxtQkFBbUI7QUFDemxIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9zcmMvY29tcG9uZW50cy9DYXRhbG9ndWUvQ2F0YWxvZ3VlLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkNhdGFsb2d1ZV9yb290X18zbUY1eCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uQ2F0YWxvZ3VlX3Jvb3RfXzNtRjV4IC5DYXRhbG9ndWVfY2F0YWxvZ3VlX2l0ZW1fX2xRU2EzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMHJlbTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uQ2F0YWxvZ3VlX3Jvb3RfXzNtRjV4IC5DYXRhbG9ndWVfY2F0YWxvZ3VlX2l0ZW1fX2xRU2EzID4gZGl2IHtcXG4gIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlIGkgIWltcG9ydGFudDtcXG59XFxuLkNhdGFsb2d1ZV9yb290X18zbUY1eCAuQ2F0YWxvZ3VlX2NhdGFsb2d1ZV9pdGVtX19sUVNhMzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG4uQ2F0YWxvZ3VlX3Jvb3RfXzNtRjV4IC5DYXRhbG9ndWVfY2F0YWxvZ3VlX2l0ZW1fX2xRU2EzOm50aC1vZi10eXBlKG9kZCkgLkNhdGFsb2d1ZV9jYXB0aW9uX292ZXJsYXlfX3lqeFpTIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG4uQ2F0YWxvZ3VlX3Jvb3RfXzNtRjV4IC5DYXRhbG9ndWVfY2F0YWxvZ3VlX2l0ZW1fX2xRU2EzOm50aC1vZi10eXBlKG9kZCkgZGl2Om5vdCguQ2F0YWxvZ3VlX2NhcHRpb25fb3ZlcmxheV9feWp4WlMpIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbn1cXG4uQ2F0YWxvZ3VlX3Jvb3RfXzNtRjV4IC5DYXRhbG9ndWVfY2F0YWxvZ3VlX2l0ZW1fX2xRU2EzOm50aC1vZi10eXBlKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG4uQ2F0YWxvZ3VlX3Jvb3RfXzNtRjV4IC5DYXRhbG9ndWVfY2F0YWxvZ3VlX2l0ZW1fX2xRU2EzOm50aC1vZi10eXBlKGV2ZW4pIC5DYXRhbG9ndWVfY2FwdGlvbl9vdmVybGF5X195anhaUyB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG59XFxuLkNhdGFsb2d1ZV9yb290X18zbUY1eCAuQ2F0YWxvZ3VlX2NhdGFsb2d1ZV9pdGVtX19sUVNhMzpudGgtb2YtdHlwZShldmVuKSBkaXY6bm90KC5DYXRhbG9ndWVfY2FwdGlvbl9vdmVybGF5X195anhaUykge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxufVxcbi5DYXRhbG9ndWVfcm9vdF9fM21GNXggLkNhdGFsb2d1ZV9jYXRhbG9ndWVfaXRlbV9fbFFTYTMgLkNhdGFsb2d1ZV9jYXB0aW9uX292ZXJsYXlfX3lqeFpTIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IGF1dG8gMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcbi5DYXRhbG9ndWVfcm9vdF9fM21GNXggLkNhdGFsb2d1ZV9jYXRhbG9ndWVfaXRlbV9fbFFTYTMgLkNhdGFsb2d1ZV9jYXB0aW9uX292ZXJsYXlfX3lqeFpTIGEge1xcbiAgbWFyZ2luOiBhdXRvIDFyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9DYXRhbG9ndWUubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFFSjtBQURJO0VBQ0UsdUJBQUE7RUFDQSwrQkFBQTtBQUdOO0FBQUk7RUFDRSw2Q0FBQTtFQUNBLG1CQUFBO0FBRU47QUFDTTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUFDUjtBQUNNO0VBQ0Usb0JBQUE7QUFDUjtBQUVJO0VBQ0UsZ0NBQUE7QUFBTjtBQUNNO0VBQ0Usb0JBQUE7QUFDUjtBQUNNO0VBQ0Usb0JBQUE7QUFDUjtBQUVJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUFOO0FBQ007RUFDRSxpQkFBQTtBQUNSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC5jYXRhbG9ndWVfaXRlbXtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgoMiwxZnIpKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMHJlbTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgJiA+IGRpdntcXG4gICAgICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmUgaSAhaW1wb3J0YW50O1xcbiAgICAgIFxcbiAgICB9XFxuICAgICY6aG92ZXJ7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIH1cXG4gICAgJjpudGgtb2YtdHlwZShvZGQpe1xcbiAgICAgIC5jYXB0aW9uX292ZXJsYXl7XFxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICB9XFxuICAgICAgZGl2Om5vdCguY2FwdGlvbl9vdmVybGF5KXtcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAmOm50aC1vZi10eXBlKGV2ZW4pe1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgIC5jYXB0aW9uX292ZXJsYXl7XFxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgICB9XFxuICAgICAgZGl2Om5vdCguY2FwdGlvbl9vdmVybGF5KXtcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuY2FwdGlvbl9vdmVybGF5IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIG1hcmdpbjogYXV0byAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICBhe1xcbiAgICAgICAgbWFyZ2luOiBhdXRvIDFyZW07XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJDYXRhbG9ndWVfcm9vdF9fM21GNXhcIixcblx0XCJjYXRhbG9ndWVfaXRlbVwiOiBcIkNhdGFsb2d1ZV9jYXRhbG9ndWVfaXRlbV9fbFFTYTNcIixcblx0XCJjYXB0aW9uX292ZXJsYXlcIjogXCJDYXRhbG9ndWVfY2FwdGlvbl9vdmVybGF5X195anhaU1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Catalogue/Catalogue.module.scss\n");

/***/ })

})