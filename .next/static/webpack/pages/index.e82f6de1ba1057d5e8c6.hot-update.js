webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Catalogue/Catalogue.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Catalogue/Catalogue.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Catalogue_root__3mF5x {\\n  display: grid;\\n  width: 100%;\\n  grid-template-columns: repeat(5, 1fr);\\n  position: relative;\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3 {\\n  cursor: pointer;\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  position: relative;\\n  width: 100%;\\n  height: 100%;\\n  min-height: 10rem;\\n  justify-items: center;\\n  justify-content: center;\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3 > div {\\n  margin: 1rem !important;\\n  position: relative i !important;\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3:hover {\\n  background-color: var(--secondary) !important;\\n  color: var(--white);\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3:nth-of-type(odd) {\\n  background-color: var(--white);\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3:nth-of-type(odd) .Catalogue_caption_overlay__yjxZS {\\n  grid-column-start: 2;\\n  color: var(--primary);\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3:nth-of-type(odd) .Catalogue_icon_overlay__e8a3Y {\\n  grid-column-start: 1;\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3:nth-of-type(even) {\\n  background-color: var(--primary);\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3:nth-of-type(even) .Catalogue_caption_overlay__yjxZS {\\n  grid-column-start: 1;\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3:nth-of-type(even) .Catalogue_icon_overlay__e8a3Y {\\n  grid-column-start: 2;\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3 .Catalogue_loudspeaker__3sr3A {\\n  background-image: var(--icon-loudspeaker);\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3 .Catalogue_caption_overlay__yjxZS {\\n  display: flex;\\n  margin: auto 0;\\n  width: 100%;\\n  justify-content: center;\\n  align-content: center;\\n  text-align: center;\\n  font-weight: bold;\\n  color: var(--white);\\n}\\n.Catalogue_root__3mF5x .Catalogue_catalogue_item__lQSa3 .Catalogue_caption_overlay__yjxZS a {\\n  margin: auto 1rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Catalogue.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAA;EACA,WAAA;EACA,qCAAA;EACA,kBAAA;AACF;AAAE;EACE,eAAA;EACA,aAAA;EACA,qCAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,qBAAA;EACA,uBAAA;AAEJ;AADI;EACE,uBAAA;EACA,+BAAA;AAGN;AAAI;EACE,6CAAA;EACA,mBAAA;AAEN;AAAI;EACE,8BAAA;AAEN;AADM;EACE,oBAAA;EACA,qBAAA;AAGR;AADM;EACE,oBAAA;AAGR;AAAI;EACE,gCAAA;AAEN;AADM;EACE,oBAAA;AAGR;AADM;EACE,oBAAA;AAGR;AAAI;EACE,yCAAA;AAEN;AAAI;EACE,aAAA;EACA,cAAA;EACA,WAAA;EACA,uBAAA;EACA,qBAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;AAEN;AADM;EACE,iBAAA;AAGR\",\"sourcesContent\":[\".root{\\n  display: grid;\\n  width: 100%;\\n  grid-template-columns: repeat(5, 1fr);\\n  position: relative;\\n  .catalogue_item{\\n    cursor: pointer;\\n    display: grid;\\n    grid-template-columns: repeat((2,1fr));\\n    position: relative;\\n    width: 100%;\\n    height: 100%;\\n    min-height: 10rem;\\n    justify-items: center;\\n    justify-content: center;\\n    & > div{\\n      margin: 1rem !important;\\n      position: relative i !important;\\n      \\n    }\\n    &:hover{\\n      background-color: var(--secondary) !important;\\n      color: var(--white);\\n    }\\n    &:nth-of-type(odd){\\n      background-color: var(--white);\\n      .caption_overlay{\\n        grid-column-start: 2;\\n        color: var(--primary);\\n      }\\n      .icon_overlay{\\n        grid-column-start: 1;\\n      }\\n    }\\n    &:nth-of-type(even){\\n      background-color: var(--primary);\\n      .caption_overlay{\\n        grid-column-start: 1;\\n      }\\n      .icon_overlay{\\n        grid-column-start: 2;\\n      }\\n    }\\n    .loudspeaker{\\n      background-image: var(--icon-loudspeaker);\\n    }\\n    .caption_overlay {\\n      display: flex;\\n      margin: auto 0;\\n      width: 100%;\\n      justify-content: center;\\n      align-content: center;\\n      text-align: center;\\n      font-weight: bold;\\n      color: var(--white);\\n      a{\\n        margin: auto 1rem;\\n      }\\n    }\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"root\": \"Catalogue_root__3mF5x\",\n\t\"catalogue_item\": \"Catalogue_catalogue_item__lQSa3\",\n\t\"caption_overlay\": \"Catalogue_caption_overlay__yjxZS\",\n\t\"icon_overlay\": \"Catalogue_icon_overlay__e8a3Y\",\n\t\"loudspeaker\": \"Catalogue_loudspeaker__3sr3A\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZ3VlL0NhdGFsb2d1ZS5tb2R1bGUuc2Nzcz9kOWY5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywyQkFBMkIsa0JBQWtCLGdCQUFnQiwwQ0FBMEMsdUJBQXVCLEdBQUcsMkRBQTJELG9CQUFvQixrQkFBa0IsMENBQTBDLHVCQUF1QixnQkFBZ0IsaUJBQWlCLHNCQUFzQiwwQkFBMEIsNEJBQTRCLEdBQUcsaUVBQWlFLDRCQUE0QixvQ0FBb0MsR0FBRyxpRUFBaUUsa0RBQWtELHdCQUF3QixHQUFHLDRFQUE0RSxtQ0FBbUMsR0FBRyw4R0FBOEcseUJBQXlCLDBCQUEwQixHQUFHLDJHQUEyRyx5QkFBeUIsR0FBRyw2RUFBNkUscUNBQXFDLEdBQUcsK0dBQStHLHlCQUF5QixHQUFHLDRHQUE0Ryx5QkFBeUIsR0FBRyx5RkFBeUYsOENBQThDLEdBQUcsNkZBQTZGLGtCQUFrQixtQkFBbUIsZ0JBQWdCLDRCQUE0QiwwQkFBMEIsdUJBQXVCLHNCQUFzQix3QkFBd0IsR0FBRywrRkFBK0Ysc0JBQXNCLEdBQUcsT0FBTyxzRkFBc0YsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVywrQkFBK0Isa0JBQWtCLGdCQUFnQiwwQ0FBMEMsdUJBQXVCLG9CQUFvQixzQkFBc0Isb0JBQW9CLDZDQUE2Qyx5QkFBeUIsa0JBQWtCLG1CQUFtQix3QkFBd0IsNEJBQTRCLDhCQUE4QixjQUFjLGdDQUFnQyx3Q0FBd0MsZUFBZSxjQUFjLHNEQUFzRCw0QkFBNEIsT0FBTyx5QkFBeUIsdUNBQXVDLHlCQUF5QiwrQkFBK0IsZ0NBQWdDLFNBQVMsc0JBQXNCLCtCQUErQixTQUFTLE9BQU8sMEJBQTBCLHlDQUF5Qyx5QkFBeUIsK0JBQStCLFNBQVMsc0JBQXNCLCtCQUErQixTQUFTLE9BQU8sbUJBQW1CLGtEQUFrRCxPQUFPLHdCQUF3QixzQkFBc0IsdUJBQXVCLG9CQUFvQixnQ0FBZ0MsOEJBQThCLDJCQUEyQiwwQkFBMEIsNEJBQTRCLFVBQVUsNEJBQTRCLFNBQVMsT0FBTyxLQUFLLEdBQUcsbUJBQW1CO0FBQ2w4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3NyYy9jb21wb25lbnRzL0NhdGFsb2d1ZS9DYXRhbG9ndWUubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQ2F0YWxvZ3VlX3Jvb3RfXzNtRjV4IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5DYXRhbG9ndWVfcm9vdF9fM21GNXggLkNhdGFsb2d1ZV9jYXRhbG9ndWVfaXRlbV9fbFFTYTMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5DYXRhbG9ndWVfcm9vdF9fM21GNXggLkNhdGFsb2d1ZV9jYXRhbG9ndWVfaXRlbV9fbFFTYTMgPiBkaXYge1xcbiAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmUgaSAhaW1wb3J0YW50O1xcbn1cXG4uQ2F0YWxvZ3VlX3Jvb3RfXzNtRjV4IC5DYXRhbG9ndWVfY2F0YWxvZ3VlX2l0ZW1fX2xRU2EzOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSkgIWltcG9ydGFudDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcbi5DYXRhbG9ndWVfcm9vdF9fM21GNXggLkNhdGFsb2d1ZV9jYXRhbG9ndWVfaXRlbV9fbFFTYTM6bnRoLW9mLXR5cGUob2RkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcbi5DYXRhbG9ndWVfcm9vdF9fM21GNXggLkNhdGFsb2d1ZV9jYXRhbG9ndWVfaXRlbV9fbFFTYTM6bnRoLW9mLXR5cGUob2RkKSAuQ2F0YWxvZ3VlX2NhcHRpb25fb3ZlcmxheV9feWp4WlMge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcbi5DYXRhbG9ndWVfcm9vdF9fM21GNXggLkNhdGFsb2d1ZV9jYXRhbG9ndWVfaXRlbV9fbFFTYTM6bnRoLW9mLXR5cGUob2RkKSAuQ2F0YWxvZ3VlX2ljb25fb3ZlcmxheV9fZThhM1kge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxufVxcbi5DYXRhbG9ndWVfcm9vdF9fM21GNXggLkNhdGFsb2d1ZV9jYXRhbG9ndWVfaXRlbV9fbFFTYTM6bnRoLW9mLXR5cGUoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcbi5DYXRhbG9ndWVfcm9vdF9fM21GNXggLkNhdGFsb2d1ZV9jYXRhbG9ndWVfaXRlbV9fbFFTYTM6bnRoLW9mLXR5cGUoZXZlbikgLkNhdGFsb2d1ZV9jYXB0aW9uX292ZXJsYXlfX3lqeFpTIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbn1cXG4uQ2F0YWxvZ3VlX3Jvb3RfXzNtRjV4IC5DYXRhbG9ndWVfY2F0YWxvZ3VlX2l0ZW1fX2xRU2EzOm50aC1vZi10eXBlKGV2ZW4pIC5DYXRhbG9ndWVfaWNvbl9vdmVybGF5X19lOGEzWSB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG59XFxuLkNhdGFsb2d1ZV9yb290X18zbUY1eCAuQ2F0YWxvZ3VlX2NhdGFsb2d1ZV9pdGVtX19sUVNhMyAuQ2F0YWxvZ3VlX2xvdWRzcGVha2VyX18zc3IzQSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1pY29uLWxvdWRzcGVha2VyKTtcXG59XFxuLkNhdGFsb2d1ZV9yb290X18zbUY1eCAuQ2F0YWxvZ3VlX2NhdGFsb2d1ZV9pdGVtX19sUVNhMyAuQ2F0YWxvZ3VlX2NhcHRpb25fb3ZlcmxheV9feWp4WlMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogYXV0byAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuLkNhdGFsb2d1ZV9yb290X18zbUY1eCAuQ2F0YWxvZ3VlX2NhdGFsb2d1ZV9pdGVtX19sUVNhMyAuQ2F0YWxvZ3VlX2NhcHRpb25fb3ZlcmxheV9feWp4WlMgYSB7XFxuICBtYXJnaW46IGF1dG8gMXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0NhdGFsb2d1ZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQUVKO0FBREk7RUFDRSx1QkFBQTtFQUNBLCtCQUFBO0FBR047QUFBSTtFQUNFLDZDQUFBO0VBQ0EsbUJBQUE7QUFFTjtBQUFJO0VBQ0UsOEJBQUE7QUFFTjtBQURNO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQUdSO0FBRE07RUFDRSxvQkFBQTtBQUdSO0FBQUk7RUFDRSxnQ0FBQTtBQUVOO0FBRE07RUFDRSxvQkFBQTtBQUdSO0FBRE07RUFDRSxvQkFBQTtBQUdSO0FBQUk7RUFDRSx5Q0FBQTtBQUVOO0FBQUk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRU47QUFETTtFQUNFLGlCQUFBO0FBR1JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3R7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLmNhdGFsb2d1ZV9pdGVte1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCgyLDFmcikpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwcmVtO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAmID4gZGl2e1xcbiAgICAgIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSBpICFpbXBvcnRhbnQ7XFxuICAgICAgXFxuICAgIH1cXG4gICAgJjpob3ZlcntcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XFxuICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgfVxcbiAgICAmOm50aC1vZi10eXBlKG9kZCl7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgIC5jYXB0aW9uX292ZXJsYXl7XFxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICB9XFxuICAgICAgLmljb25fb3ZlcmxheXtcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAmOm50aC1vZi10eXBlKGV2ZW4pe1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgIC5jYXB0aW9uX292ZXJsYXl7XFxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgICB9XFxuICAgICAgLmljb25fb3ZlcmxheXtcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAubG91ZHNwZWFrZXJ7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0taWNvbi1sb3Vkc3BlYWtlcik7XFxuICAgIH1cXG4gICAgLmNhcHRpb25fb3ZlcmxheSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBtYXJnaW46IGF1dG8gMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgYXtcXG4gICAgICAgIG1hcmdpbjogYXV0byAxcmVtO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiQ2F0YWxvZ3VlX3Jvb3RfXzNtRjV4XCIsXG5cdFwiY2F0YWxvZ3VlX2l0ZW1cIjogXCJDYXRhbG9ndWVfY2F0YWxvZ3VlX2l0ZW1fX2xRU2EzXCIsXG5cdFwiY2FwdGlvbl9vdmVybGF5XCI6IFwiQ2F0YWxvZ3VlX2NhcHRpb25fb3ZlcmxheV9feWp4WlNcIixcblx0XCJpY29uX292ZXJsYXlcIjogXCJDYXRhbG9ndWVfaWNvbl9vdmVybGF5X19lOGEzWVwiLFxuXHRcImxvdWRzcGVha2VyXCI6IFwiQ2F0YWxvZ3VlX2xvdWRzcGVha2VyX18zc3IzQVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Catalogue/Catalogue.module.scss\n");

/***/ })

})