webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/GalleryStack/GalleryStack.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/GalleryStack/GalleryStack.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".GalleryStack_root__1ITA2 {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh {\\n  display: grid;\\n  grid-template-columns: repeat(5, 1fr);\\n}\\n.GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh .GalleryStack_image__2Vpgm {\\n  grid-column-start: 2;\\n  width: 100%;\\n  height: 100%;\\n}\\n.GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh .GalleryStack_description__19npX {\\n  padding: 1rem;\\n  background-color: var(--white);\\n  color: var(--primary);\\n  grid-column-start: 3;\\n  grid-column-end: 5;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-content: flex-end;\\n  justify-content: center;\\n  position: relative;\\n}\\n.GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh .GalleryStack_description__19npX .GalleryStack_title__2RhCh {\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n  text-indent: 1rem;\\n  margin: 1rem;\\n}\\n.GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh .GalleryStack_description__19npX .GalleryStack_title__2RhCh::before {\\n  content: \\\" \\\";\\n  background-color: var(--secondary);\\n  display: inline-block;\\n  width: 0.8rem;\\n  height: 0.8rem;\\n  border-radius: 0.6rem;\\n  margin: 0 0.6rem 0 0;\\n}\\n.GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh .GalleryStack_description__19npX .GalleryStack_text__1_Iu- {\\n  padding: 0 0 1rem 0;\\n  border-bottom: 0.5rem solid var(--primary);\\n}\\n\\n@media screen and (max-width: 720px) {\\n  .GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh {\\n    display: flex;\\n  }\\n  .GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh .GalleryStack_description__19npX {\\n    width: auto;\\n    position: absolute;\\n  }\\n  .GalleryStack_root__1ITA2 .GalleryStack_entry__2XBrh .GalleryStack_image__2Vpgm {\\n    width: auto;\\n    position: absolute;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://GalleryStack.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;AACF;AAAE;EACE,aAAA;EACA,qCAAA;AAEJ;AADI;EACE,oBAAA;EACA,WAAA;EACA,YAAA;AAGN;AADI;EACE,aAAA;EACA,8BAAA;EACA,qBAAA;EACA,oBAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,kBAAA;AAGN;AAFM;EAUE,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,YAAA;AALR;AAPQ;EACE,YAAA;EACA,kCAAA;EACA,qBAAA;EACA,aAAA;EACA,cAAA;EACA,qBAAA;EACA,oBAAA;AASV;AAFM;EACE,mBAAA;EACA,0CAAA;AAIR;;AAEA;EAEE;IACE,aAAA;EAAF;EACE;IACE,WAAA;IACA,kBAAA;EACJ;EACE;IACE,WAAA;IACA,kBAAA;EACJ;AACF\",\"sourcesContent\":[\".root {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  .entry{\\n    display: grid;\\n    grid-template-columns: repeat(5, 1fr);\\n    .image{\\n      grid-column-start:2;\\n      width: 100%;\\n      height: 100%;\\n    }\\n    .description {\\n      padding: 1rem;\\n      background-color: var(--white);\\n      color: var(--primary);\\n      grid-column-start:3;\\n      grid-column-end:5;\\n      width: 100%;\\n      display: flex;\\n      flex-direction: column;\\n      align-content: flex-end;\\n      justify-content: center;\\n      position: relative;\\n      .title {\\n        &::before{\\n          content: ' ';\\n          background-color: var(--secondary);\\n          display: inline-block;\\n          width: 0.8rem;\\n          height: 0.8rem;\\n          border-radius: 0.6rem;\\n          margin: 0 0.6rem 0 0;\\n        }\\n        font-size: 1.2rem;\\n        font-weight: bold;\\n        text-indent: 1rem;\\n        margin: 1rem;\\n      }\\n      .text {\\n        padding: 0 0 1rem 0;\\n        border-bottom: 0.5rem solid var(--primary);\\n      }\\n    }\\n  }\\n}\\n\\n@media screen and (max-width: 720px){\\n  .root{\\n  .entry{\\n    display: flex;\\n    .description{\\n      width: auto;\\n      position: absolute;\\n    }\\n    .image{\\n      width: auto;\\n      position:absolute\\n    }\\n  }}\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"root\": \"GalleryStack_root__1ITA2\",\n\t\"entry\": \"GalleryStack_entry__2XBrh\",\n\t\"image\": \"GalleryStack_image__2Vpgm\",\n\t\"description\": \"GalleryStack_description__19npX\",\n\t\"title\": \"GalleryStack_title__2RhCh\",\n\t\"text\": \"GalleryStack_text__1_Iu-\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeVN0YWNrL0dhbGxlcnlTdGFjay5tb2R1bGUuc2Nzcz9mYzRhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw4QkFBOEIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsR0FBRyx3REFBd0Qsa0JBQWtCLDBDQUEwQyxHQUFHLG1GQUFtRix5QkFBeUIsZ0JBQWdCLGlCQUFpQixHQUFHLHlGQUF5RixrQkFBa0IsbUNBQW1DLDBCQUEwQix5QkFBeUIsdUJBQXVCLGdCQUFnQixrQkFBa0IsMkJBQTJCLDRCQUE0Qiw0QkFBNEIsdUJBQXVCLEdBQUcsb0hBQW9ILHNCQUFzQixzQkFBc0Isc0JBQXNCLGlCQUFpQixHQUFHLDRIQUE0SCxtQkFBbUIsdUNBQXVDLDBCQUEwQixrQkFBa0IsbUJBQW1CLDBCQUEwQix5QkFBeUIsR0FBRyxtSEFBbUgsd0JBQXdCLCtDQUErQyxHQUFHLDBDQUEwQywwREFBMEQsb0JBQW9CLEtBQUssMkZBQTJGLGtCQUFrQix5QkFBeUIsS0FBSyxxRkFBcUYsa0JBQWtCLHlCQUF5QixLQUFLLEdBQUcsT0FBTyx5RkFBeUYsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssZ0NBQWdDLGdCQUFnQixrQkFBa0IsMkJBQTJCLFdBQVcsb0JBQW9CLDRDQUE0QyxhQUFhLDRCQUE0QixvQkFBb0IscUJBQXFCLE9BQU8sb0JBQW9CLHNCQUFzQix1Q0FBdUMsOEJBQThCLDRCQUE0QiwwQkFBMEIsb0JBQW9CLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLGdDQUFnQywyQkFBMkIsZ0JBQWdCLG9CQUFvQix5QkFBeUIsK0NBQStDLGtDQUFrQywwQkFBMEIsMkJBQTJCLGtDQUFrQyxpQ0FBaUMsV0FBVyw0QkFBNEIsNEJBQTRCLDRCQUE0Qix1QkFBdUIsU0FBUyxlQUFlLDhCQUE4QixxREFBcUQsU0FBUyxPQUFPLEtBQUssR0FBRyx5Q0FBeUMsVUFBVSxXQUFXLG9CQUFvQixtQkFBbUIsb0JBQW9CLDJCQUEyQixPQUFPLGFBQWEsb0JBQW9CLGdDQUFnQyxNQUFNLEdBQUcsbUJBQW1CO0FBQ25zSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeVN0YWNrL0dhbGxlcnlTdGFjay5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5HYWxsZXJ5U3RhY2tfcm9vdF9fMUlUQTIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLkdhbGxlcnlTdGFja19yb290X18xSVRBMiAuR2FsbGVyeVN0YWNrX2VudHJ5X18yWEJyaCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG59XFxuLkdhbGxlcnlTdGFja19yb290X18xSVRBMiAuR2FsbGVyeVN0YWNrX2VudHJ5X18yWEJyaCAuR2FsbGVyeVN0YWNrX2ltYWdlX18yVnBnbSB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uR2FsbGVyeVN0YWNrX3Jvb3RfXzFJVEEyIC5HYWxsZXJ5U3RhY2tfZW50cnlfXzJYQnJoIC5HYWxsZXJ5U3RhY2tfZGVzY3JpcHRpb25fXzE5bnBYIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMztcXG4gIGdyaWQtY29sdW1uLWVuZDogNTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uR2FsbGVyeVN0YWNrX3Jvb3RfXzFJVEEyIC5HYWxsZXJ5U3RhY2tfZW50cnlfXzJYQnJoIC5HYWxsZXJ5U3RhY2tfZGVzY3JpcHRpb25fXzE5bnBYIC5HYWxsZXJ5U3RhY2tfdGl0bGVfXzJSaENoIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWluZGVudDogMXJlbTtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuLkdhbGxlcnlTdGFja19yb290X18xSVRBMiAuR2FsbGVyeVN0YWNrX2VudHJ5X18yWEJyaCAuR2FsbGVyeVN0YWNrX2Rlc2NyaXB0aW9uX18xOW5wWCAuR2FsbGVyeVN0YWNrX3RpdGxlX18yUmhDaDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMC44cmVtO1xcbiAgaGVpZ2h0OiAwLjhyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XFxuICBtYXJnaW46IDAgMC42cmVtIDAgMDtcXG59XFxuLkdhbGxlcnlTdGFja19yb290X18xSVRBMiAuR2FsbGVyeVN0YWNrX2VudHJ5X18yWEJyaCAuR2FsbGVyeVN0YWNrX2Rlc2NyaXB0aW9uX18xOW5wWCAuR2FsbGVyeVN0YWNrX3RleHRfXzFfSXUtIHtcXG4gIHBhZGRpbmc6IDAgMCAxcmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAwLjVyZW0gc29saWQgdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XFxuICAuR2FsbGVyeVN0YWNrX3Jvb3RfXzFJVEEyIC5HYWxsZXJ5U3RhY2tfZW50cnlfXzJYQnJoIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC5HYWxsZXJ5U3RhY2tfcm9vdF9fMUlUQTIgLkdhbGxlcnlTdGFja19lbnRyeV9fMlhCcmggLkdhbGxlcnlTdGFja19kZXNjcmlwdGlvbl9fMTlucFgge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgfVxcbiAgLkdhbGxlcnlTdGFja19yb290X18xSVRBMiAuR2FsbGVyeVN0YWNrX2VudHJ5X18yWEJyaCAuR2FsbGVyeVN0YWNrX2ltYWdlX18yVnBnbSB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9HYWxsZXJ5U3RhY2subW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBQUVKO0FBREk7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR047QUFESTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFHTjtBQUZNO0VBVUUsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUxSO0FBUFE7RUFDRSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQVNWO0FBRk07RUFDRSxtQkFBQTtFQUNBLDBDQUFBO0FBSVI7O0FBRUE7RUFFRTtJQUNFLGFBQUE7RUFBRjtFQUNFO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0VBQ0o7RUFDRTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtFQUNKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC5lbnRyeXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgLmltYWdle1xcbiAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OjI7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgIC5kZXNjcmlwdGlvbiB7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OjM7XFxuICAgICAgZ3JpZC1jb2x1bW4tZW5kOjU7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAudGl0bGUge1xcbiAgICAgICAgJjo6YmVmb3Jle1xcbiAgICAgICAgICBjb250ZW50OiAnICc7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgd2lkdGg6IDAuOHJlbTtcXG4gICAgICAgICAgaGVpZ2h0OiAwLjhyZW07XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcXG4gICAgICAgICAgbWFyZ2luOiAwIDAuNnJlbSAwIDA7XFxuICAgICAgICB9XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDFyZW07XFxuICAgICAgICBtYXJnaW46IDFyZW07XFxuICAgICAgfVxcbiAgICAgIC50ZXh0IHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMCAxcmVtIDA7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjVyZW0gc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KXtcXG4gIC5yb290e1xcbiAgLmVudHJ5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAuZGVzY3JpcHRpb257XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB9XFxuICAgIC5pbWFnZXtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZVxcbiAgICB9XFxuICB9fVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiR2FsbGVyeVN0YWNrX3Jvb3RfXzFJVEEyXCIsXG5cdFwiZW50cnlcIjogXCJHYWxsZXJ5U3RhY2tfZW50cnlfXzJYQnJoXCIsXG5cdFwiaW1hZ2VcIjogXCJHYWxsZXJ5U3RhY2tfaW1hZ2VfXzJWcGdtXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJHYWxsZXJ5U3RhY2tfZGVzY3JpcHRpb25fXzE5bnBYXCIsXG5cdFwidGl0bGVcIjogXCJHYWxsZXJ5U3RhY2tfdGl0bGVfXzJSaENoXCIsXG5cdFwidGV4dFwiOiBcIkdhbGxlcnlTdGFja190ZXh0X18xX0l1LVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/GalleryStack/GalleryStack.module.scss\n");

/***/ })

})