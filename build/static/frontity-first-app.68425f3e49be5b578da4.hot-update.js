webpackHotUpdate("frontity-first-app",{

/***/ "./packages/mars-theme/src/html/components/post.js":
/*!*********************************************************!*\
  !*** ./packages/mars-theme/src/html/components/post.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list */ \"./packages/mars-theme/src/html/components/list/index.js\");\n/* harmony import */ var _featured_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./featured-media */ \"./packages/mars-theme/src/html/components/featured-media.js\");\nfunction _templateObject6(){const data=_taggedTemplateLiteral([\"\\n  line-height: 1.6em;\\n  color: rgba(12, 17, 43, 0.8);\\n\\n  * {\\n    max-width: 100%;\\n  }\\n\\n  img {\\n    width: 100%;\\n    object-fit: cover;\\n    object-position: center;\\n  }\\n\\n  figure {\\n    margin: 24px 0;\\n    /* next line overrides an inline style of the figure element. */\\n    width: 100% !important;\\n\\n    figcaption {\\n      font-size: 0.7em;\\n    }\\n  }\\n\\n  iframe {\\n    display: block;\\n    margin: auto;\\n  }\\n\\n  blockquote {\\n    margin: 16px 0;\\n    background-color: rgba(0, 0, 0, 0.1);\\n    border-left: 4px solid rgba(12, 17, 43);\\n    padding: 4px 16px;\\n  }\\n\\n  a {\\n    color: rgb(31, 56, 197);\\n    text-decoration: underline;\\n  }\\n\"]);_templateObject6=function _templateObject6(){return data;};return data;}function _templateObject5(){const data=_taggedTemplateLiteral([\"\\n  color: rgba(12, 17, 43, 0.9);\\n  font-size: 0.9em;\\n  display: inline;\\n\"]);_templateObject5=function _templateObject5(){return data;};return data;}function _templateObject4(){const data=_taggedTemplateLiteral([\"\\n  color: rgba(12, 17, 43, 0.9);\\n  font-size: 0.9em;\\n  display: inline;\\n\"]);_templateObject4=function _templateObject4(){return data;};return data;}function _templateObject3(){const data=_taggedTemplateLiteral([\"\\n  margin: 0;\\n  margin-top: 24px;\\n  margin-bottom: 8px;\\n  color: rgba(12, 17, 43);\\n\"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){const data=_taggedTemplateLiteral([\"\"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){const data=_taggedTemplateLiteral([\"\\n  width: 800px;\\n  margin: 0;\\n  padding: 24px;\\n\"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}const Post=(_ref)=>{let state=_ref.state,actions=_ref.actions;// Get info of current post.\nconst data=state.source.data(state.router.path);// Get the the post.\nconst post=state.source[data.type][data.id];console.log(\"post\",post);// Get the author.\nconst author=state.source.author[post.author];const date=new Date(post.date);// Get the featured image. \n//frontity.state.source.attachment[2493].source_url\nconst postId=post.id;console.log(\"postid\",postId);const fmedia=state.source.attachment[postId];console.log(\"fmedia\",fmedia);// Prefetch home posts and the list component.\nactions.source.fetch(\"/\");_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"].preload();return data.isReady?Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Head,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Title,null,post.title.rendered),data.isPost&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Author,null,\"By \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"b\",null,author.name)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Fecha,null,\" \",\"on \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"b\",null,date.toDateString())))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Body,{dangerouslySetInnerHTML:{__html:post.content.rendered}})):null;};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Post));const Container=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject());const Head=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject2());const Title=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].h1(_templateObject3());const Author=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].p(_templateObject4());const Fecha=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].p(_templateObject5());const Body=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject6());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9odG1sL2NvbXBvbmVudHMvcG9zdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2h0bWwvY29tcG9uZW50cy9wb3N0LmpzPzg0YWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgRmVhdHVyZWRNZWRpYSBmcm9tIFwiLi9mZWF0dXJlZC1tZWRpYVwiO1xuXG5jb25zdCBQb3N0ID0gKHsgc3RhdGUsIGFjdGlvbnMgfSkgPT4ge1xuICAvLyBHZXQgaW5mbyBvZiBjdXJyZW50IHBvc3QuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZGF0YShzdGF0ZS5yb3V0ZXIucGF0aCk7XG4gIC8vIEdldCB0aGUgdGhlIHBvc3QuXG4gIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXTtcbiAgY29uc29sZS5sb2coXCJwb3N0XCIsIHBvc3QpO1xuICAvLyBHZXQgdGhlIGF1dGhvci5cbiAgY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwb3N0LmRhdGUpO1xuICAvLyBHZXQgdGhlIGZlYXR1cmVkIGltYWdlLiBcbiAgLy9mcm9udGl0eS5zdGF0ZS5zb3VyY2UuYXR0YWNobWVudFsyNDkzXS5zb3VyY2VfdXJsXG4gIGNvbnN0IHBvc3RJZCA9IHBvc3QuaWQ7XG4gIGNvbnNvbGUubG9nKFwicG9zdGlkXCIsIHBvc3RJZCk7XG4gIGNvbnN0IGZtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W3Bvc3RJZF07XG4gIGNvbnNvbGUubG9nKFwiZm1lZGlhXCIsIGZtZWRpYSk7XG5cblxuICAvLyBQcmVmZXRjaCBob21lIHBvc3RzIGFuZCB0aGUgbGlzdCBjb21wb25lbnQuXG4gIGFjdGlvbnMuc291cmNlLmZldGNoKFwiL1wiKTtcbiAgTGlzdC5wcmVsb2FkKCk7XG5cbiAgcmV0dXJuIGRhdGEuaXNSZWFkeSA/IChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIFxuICAgICAgICA8VGl0bGU+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9UaXRsZT5cbiAgICAgICAge2RhdGEuaXNQb3N0ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEF1dGhvcj5cbiAgICAgICAgICAgICAgQnkgPGI+e2F1dGhvci5uYW1lfTwvYj5cbiAgICAgICAgICAgIDwvQXV0aG9yPlxuICAgICAgICAgICAgPEZlY2hhPlxuICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgIG9uIDxiPntkYXRlLnRvRGF0ZVN0cmluZygpfTwvYj5cbiAgICAgICAgICAgIDwvRmVjaGE+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Qm9keVxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogcG9zdC5jb250ZW50LnJlbmRlcmVkXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApIDogbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUG9zdCk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyNHB4O1xuYDtcblxuY29uc3QgSGVhZCA9IHN0eWxlZC5kaXZgYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBjb2xvcjogcmdiYSgxMiwgMTcsIDQzKTtcbmA7XG5cbmNvbnN0IEF1dGhvciA9IHN0eWxlZC5wYFxuICBjb2xvcjogcmdiYSgxMiwgMTcsIDQzLCAwLjkpO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBkaXNwbGF5OiBpbmxpbmU7XG5gO1xuXG5jb25zdCBGZWNoYSA9IHN0eWxlZC5wYFxuICBjb2xvcjogcmdiYSgxMiwgMTcsIDQzLCAwLjkpO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBkaXNwbGF5OiBpbmxpbmU7XG5gO1xuXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcbiAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICBjb2xvcjogcmdiYSgxMiwgMTcsIDQzLCAwLjgpO1xuXG4gICoge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIH1cblxuICBmaWd1cmUge1xuICAgIG1hcmdpbjogMjRweCAwO1xuICAgIC8qIG5leHQgbGluZSBvdmVycmlkZXMgYW4gaW5saW5lIHN0eWxlIG9mIHRoZSBmaWd1cmUgZWxlbWVudC4gKi9cbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXG4gICAgZmlnY2FwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIH1cbiAgfVxuXG4gIGlmcmFtZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgYmxvY2txdW90ZSB7XG4gICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmdiYSgxMiwgMTcsIDQzKTtcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiByZ2IoMzEsIDU2LCAxOTcpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5gO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBR0E7QUFHQTtBQUNBO0FBT0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/html/components/post.js\n");

/***/ })

})