webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/GalleryStack/GalleryStack.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/GalleryStack/GalleryStack.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".GalleryStack_root__1ITA2 {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh {\\n  display: grid;\\n  grid-template-columns: repeat(5, 1fr);\\n}\\n.GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh .GalleryStack_image__2Vpgm {\\n  grid-column-start: 2;\\n  width: 100%;\\n  height: 100%;\\n}\\n.GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh .GalleryStack_description__19npX {\\n  padding: 1rem;\\n  background-color: var(--white);\\n  color: var(--primary);\\n  grid-column-start: 3;\\n  grid-column-end: 5;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-content: flex-end;\\n  justify-content: center;\\n  position: relative;\\n}\\n.GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh .GalleryStack_description__19npX .GalleryStack_title__2RhCh {\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n  text-indent: 1rem;\\n  margin: 1rem;\\n}\\n.GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh .GalleryStack_description__19npX .GalleryStack_title__2RhCh::before {\\n  content: \\\" \\\";\\n  background-color: var(--secondary);\\n  display: inline-block;\\n  width: 0.8rem;\\n  height: 0.8rem;\\n  border-radius: 0.6rem;\\n  margin: 0 0.6rem 0 0;\\n}\\n.GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh .GalleryStack_description__19npX .GalleryStack_text__1_Iu- {\\n  padding: 0 0 1rem 0;\\n  border-bottom: 0.5rem solid var(--primary);\\n}\\n\\n@media screen and (max-width: 720px) {\\n  .GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh {\\n    display: flex;\\n  }\\n  .GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh .GalleryStack_description__19npX {\\n    width: auto;\\n    position: absolute;\\n  }\\n  .GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh .GalleryStack_image__2Vpgm {\\n    width: auto;\\n  }\\n  .GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh .GalleryStack_image__2Vpgm img {\\n    max-width: 100vw;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://GalleryStack.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;AACF;AAAE;EACE,aAAA;EACA,qCAAA;AAEJ;AADI;EACE,oBAAA;EACA,WAAA;EACA,YAAA;AAGN;AADI;EACE,aAAA;EACA,8BAAA;EACA,qBAAA;EACA,oBAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,kBAAA;AAGN;AAFM;EAUE,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,YAAA;AALR;AAPQ;EACE,YAAA;EACA,kCAAA;EACA,qBAAA;EACA,aAAA;EACA,cAAA;EACA,qBAAA;EACA,oBAAA;AASV;AAFM;EACE,mBAAA;EACA,0CAAA;AAIR;;AAEA;EAEE;IACE,aAAA;EAAF;EACE;IACE,WAAA;IACA,kBAAA;EACJ;EACE;IACE,WAAA;EACJ;EAAI;IACE,gBAAA;EAEN;AACF\",\"sourcesContent\":[\".root {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  .entry{\\n    display: grid;\\n    grid-template-columns: repeat(5, 1fr);\\n    .image{\\n      grid-column-start:2;\\n      width: 100%;\\n      height: 100%;\\n    }\\n    .description {\\n      padding: 1rem;\\n      background-color: var(--white);\\n      color: var(--primary);\\n      grid-column-start:3;\\n      grid-column-end:5;\\n      width: 100%;\\n      display: flex;\\n      flex-direction: column;\\n      align-content: flex-end;\\n      justify-content: center;\\n      position: relative;\\n      .title {\\n        &::before{\\n          content: ' ';\\n          background-color: var(--secondary);\\n          display: inline-block;\\n          width: 0.8rem;\\n          height: 0.8rem;\\n          border-radius: 0.6rem;\\n          margin: 0 0.6rem 0 0;\\n        }\\n        font-size: 1.2rem;\\n        font-weight: bold;\\n        text-indent: 1rem;\\n        margin: 1rem;\\n      }\\n      .text {\\n        padding: 0 0 1rem 0;\\n        border-bottom: 0.5rem solid var(--primary);\\n      }\\n    }\\n  }\\n}\\n\\n@media screen and (max-width: 720px){\\n  .root{\\n  .entry{\\n    display: flex;\\n    .description{\\n      width: auto;\\n      position: absolute;\\n    }\\n    .image{\\n      width: auto;\\n      img{\\n        max-width:100vw; \\n      }\\n    }\\n  }}\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"root\": \"GalleryStack_root__1ITA2\",\n\t\"entry\": \"GalleryStack_entry__2XBrh\",\n\t\"image\": \"GalleryStack_image__2Vpgm\",\n\t\"description\": \"GalleryStack_description__19npX\",\n\t\"title\": \"GalleryStack_title__2RhCh\",\n\t\"text\": \"GalleryStack_text__1_Iu-\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeVN0YWNrL0dhbGxlcnlTdGFjay5tb2R1bGUuc2Nzcz9mYzRhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw4QkFBOEIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsR0FBRyx3REFBd0Qsa0JBQWtCLDBDQUEwQyxHQUFHLG1GQUFtRix5QkFBeUIsZ0JBQWdCLGlCQUFpQixHQUFHLHlGQUF5RixrQkFBa0IsbUNBQW1DLDBCQUEwQix5QkFBeUIsdUJBQXVCLGdCQUFnQixrQkFBa0IsMkJBQTJCLDRCQUE0Qiw0QkFBNEIsdUJBQXVCLEdBQUcsb0hBQW9ILHNCQUFzQixzQkFBc0Isc0JBQXNCLGlCQUFpQixHQUFHLDRIQUE0SCxtQkFBbUIsdUNBQXVDLDBCQUEwQixrQkFBa0IsbUJBQW1CLDBCQUEwQix5QkFBeUIsR0FBRyxtSEFBbUgsd0JBQXdCLCtDQUErQyxHQUFHLDBDQUEwQywwREFBMEQsb0JBQW9CLEtBQUssMkZBQTJGLGtCQUFrQix5QkFBeUIsS0FBSyxxRkFBcUYsa0JBQWtCLEtBQUsseUZBQXlGLHVCQUF1QixLQUFLLEdBQUcsT0FBTyx5RkFBeUYsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLGdDQUFnQyxnQkFBZ0Isa0JBQWtCLDJCQUEyQixXQUFXLG9CQUFvQiw0Q0FBNEMsYUFBYSw0QkFBNEIsb0JBQW9CLHFCQUFxQixPQUFPLG9CQUFvQixzQkFBc0IsdUNBQXVDLDhCQUE4Qiw0QkFBNEIsMEJBQTBCLG9CQUFvQixzQkFBc0IsK0JBQStCLGdDQUFnQyxnQ0FBZ0MsMkJBQTJCLGdCQUFnQixvQkFBb0IseUJBQXlCLCtDQUErQyxrQ0FBa0MsMEJBQTBCLDJCQUEyQixrQ0FBa0MsaUNBQWlDLFdBQVcsNEJBQTRCLDRCQUE0Qiw0QkFBNEIsdUJBQXVCLFNBQVMsZUFBZSw4QkFBOEIscURBQXFELFNBQVMsT0FBTyxLQUFLLEdBQUcseUNBQXlDLFVBQVUsV0FBVyxvQkFBb0IsbUJBQW1CLG9CQUFvQiwyQkFBMkIsT0FBTyxhQUFhLG9CQUFvQixZQUFZLDBCQUEwQixVQUFVLE9BQU8sTUFBTSxHQUFHLG1CQUFtQjtBQUNoMEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3NyYy9jb21wb25lbnRzL0dhbGxlcnlTdGFjay9HYWxsZXJ5U3RhY2subW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuR2FsbGVyeVN0YWNrX3Jvb3RfXzFJVEEyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5HYWxsZXJ5U3RhY2tfcm9vdF9fMUlUQTIgLkdhbGxlcnlTdGFja19lbnRyeV9fMlhCcmgge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxufVxcbi5HYWxsZXJ5U3RhY2tfcm9vdF9fMUlUQTIgLkdhbGxlcnlTdGFja19lbnRyeV9fMlhCcmggLkdhbGxlcnlTdGFja19pbWFnZV9fMlZwZ20ge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLkdhbGxlcnlTdGFja19yb290X18xSVRBMiAuR2FsbGVyeVN0YWNrX2VudHJ5X18yWEJyaCAuR2FsbGVyeVN0YWNrX2Rlc2NyaXB0aW9uX18xOW5wWCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLkdhbGxlcnlTdGFja19yb290X18xSVRBMiAuR2FsbGVyeVN0YWNrX2VudHJ5X18yWEJyaCAuR2FsbGVyeVN0YWNrX2Rlc2NyaXB0aW9uX18xOW5wWCAuR2FsbGVyeVN0YWNrX3RpdGxlX18yUmhDaCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1pbmRlbnQ6IDFyZW07XFxuICBtYXJnaW46IDFyZW07XFxufVxcbi5HYWxsZXJ5U3RhY2tfcm9vdF9fMUlUQTIgLkdhbGxlcnlTdGFja19lbnRyeV9fMlhCcmggLkdhbGxlcnlTdGFja19kZXNjcmlwdGlvbl9fMTlucFggLkdhbGxlcnlTdGFja190aXRsZV9fMlJoQ2g6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDAuOHJlbTtcXG4gIGhlaWdodDogMC44cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xcbiAgbWFyZ2luOiAwIDAuNnJlbSAwIDA7XFxufVxcbi5HYWxsZXJ5U3RhY2tfcm9vdF9fMUlUQTIgLkdhbGxlcnlTdGFja19lbnRyeV9fMlhCcmggLkdhbGxlcnlTdGFja19kZXNjcmlwdGlvbl9fMTlucFggLkdhbGxlcnlTdGFja190ZXh0X18xX0l1LSB7XFxuICBwYWRkaW5nOiAwIDAgMXJlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cmVtIHNvbGlkIHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xcbiAgLkdhbGxlcnlTdGFja19yb290X18xSVRBMiAuR2FsbGVyeVN0YWNrX2VudHJ5X18yWEJyaCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAuR2FsbGVyeVN0YWNrX3Jvb3RfXzFJVEEyIC5HYWxsZXJ5U3RhY2tfZW50cnlfXzJYQnJoIC5HYWxsZXJ5U3RhY2tfZGVzY3JpcHRpb25fXzE5bnBYIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIH1cXG4gIC5HYWxsZXJ5U3RhY2tfcm9vdF9fMUlUQTIgLkdhbGxlcnlTdGFja19lbnRyeV9fMlhCcmggLkdhbGxlcnlTdGFja19pbWFnZV9fMlZwZ20ge1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG4gIC5HYWxsZXJ5U3RhY2tfcm9vdF9fMUlUQTIgLkdhbGxlcnlTdGFja19lbnRyeV9fMlhCcmggLkdhbGxlcnlTdGFja19pbWFnZV9fMlZwZ20gaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0dhbGxlcnlTdGFjay5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FBRUo7QUFESTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHTjtBQURJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUdOO0FBRk07RUFVRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBTFI7QUFQUTtFQUNFLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBU1Y7QUFGTTtFQUNFLG1CQUFBO0VBQ0EsMENBQUE7QUFJUjs7QUFFQTtFQUVFO0lBQ0UsYUFBQTtFQUFGO0VBQ0U7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7RUFDSjtFQUNFO0lBQ0UsV0FBQTtFQUNKO0VBQUk7SUFDRSxnQkFBQTtFQUVOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC5lbnRyeXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgLmltYWdle1xcbiAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OjI7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgIC5kZXNjcmlwdGlvbiB7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OjM7XFxuICAgICAgZ3JpZC1jb2x1bW4tZW5kOjU7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAudGl0bGUge1xcbiAgICAgICAgJjo6YmVmb3Jle1xcbiAgICAgICAgICBjb250ZW50OiAnICc7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgd2lkdGg6IDAuOHJlbTtcXG4gICAgICAgICAgaGVpZ2h0OiAwLjhyZW07XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcXG4gICAgICAgICAgbWFyZ2luOiAwIDAuNnJlbSAwIDA7XFxuICAgICAgICB9XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDFyZW07XFxuICAgICAgICBtYXJnaW46IDFyZW07XFxuICAgICAgfVxcbiAgICAgIC50ZXh0IHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMCAxcmVtIDA7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjVyZW0gc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KXtcXG4gIC5yb290e1xcbiAgLmVudHJ5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAuZGVzY3JpcHRpb257XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB9XFxuICAgIC5pbWFnZXtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgICBpbWd7XFxuICAgICAgICBtYXgtd2lkdGg6MTAwdnc7IFxcbiAgICAgIH1cXG4gICAgfVxcbiAgfX1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkdhbGxlcnlTdGFja19yb290X18xSVRBMlwiLFxuXHRcImVudHJ5XCI6IFwiR2FsbGVyeVN0YWNrX2VudHJ5X18yWEJyaFwiLFxuXHRcImltYWdlXCI6IFwiR2FsbGVyeVN0YWNrX2ltYWdlX18yVnBnbVwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiR2FsbGVyeVN0YWNrX2Rlc2NyaXB0aW9uX18xOW5wWFwiLFxuXHRcInRpdGxlXCI6IFwiR2FsbGVyeVN0YWNrX3RpdGxlX18yUmhDaFwiLFxuXHRcInRleHRcIjogXCJHYWxsZXJ5U3RhY2tfdGV4dF9fMV9JdS1cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/GalleryStack/GalleryStack.module.scss\n");

/***/ })

})