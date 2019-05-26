webpackHotUpdate("frontity-first-app",{

/***/ "./packages/mars-theme/src/html/components/post.js":
/*!*********************************************************!*\
  !*** ./packages/mars-theme/src/html/components/post.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list */ \"./packages/mars-theme/src/html/components/list/index.js\");\n/* harmony import */ var _featured_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./featured-media */ \"./packages/mars-theme/src/html/components/featured-media.js\");\nfunction _templateObject6(){const data=_taggedTemplateLiteral([\"\\n  line-height: 1.6em;\\n  color: rgba(12, 17, 43, 0.8);\\n\\n  * {\\n    max-width: 100%;\\n  }\\n\\n  img {\\n    width: 100%;\\n    object-fit: cover;\\n    object-position: center;\\n  }\\n\\n  figure {\\n    margin: 24px 0;\\n    /* next line overrides an inline style of the figure element. */\\n    width: 100% !important;\\n\\n    figcaption {\\n      font-size: 0.7em;\\n    }\\n  }\\n\\n  iframe {\\n    display: block;\\n    margin: auto;\\n  }\\n\\n  blockquote {\\n    margin: 16px 0;\\n    background-color: rgba(0, 0, 0, 0.1);\\n    border-left: 4px solid rgba(12, 17, 43);\\n    padding: 4px 16px;\\n  }\\n\\n  a {\\n    color: rgb(31, 56, 197);\\n    text-decoration: underline;\\n  }\\n\"]);_templateObject6=function _templateObject6(){return data;};return data;}function _templateObject5(){const data=_taggedTemplateLiteral([\"\\n  color: rgba(12, 17, 43, 0.9);\\n  font-size: 0.9em;\\n  display: inline;\\n\"]);_templateObject5=function _templateObject5(){return data;};return data;}function _templateObject4(){const data=_taggedTemplateLiteral([\"\\n  color: rgba(12, 17, 43, 0.9);\\n  font-size: 0.9em;\\n  display: inline;\\n\"]);_templateObject4=function _templateObject4(){return data;};return data;}function _templateObject3(){const data=_taggedTemplateLiteral([\"\\n  margin: 0;\\n  margin-top: 24px;\\n  margin-bottom: 8px;\\n  color: rgba(12, 17, 43);\\n\"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){const data=_taggedTemplateLiteral([\"\"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){const data=_taggedTemplateLiteral([\"\\n  width: 800px;\\n  margin: 0;\\n  padding: 24px;\\n\"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}const Post=(_ref)=>{let state=_ref.state,actions=_ref.actions;// Get info of current post.\nconst data=state.source.data(state.router.path);// Get the the post.\nconst post=state.source[data.type][data.id];console.log(\"post\",post);// Get the author.\nconst author=state.source.author[post.author];const date=new Date(post.date);// Get the featured image. \n//frontity.state.source.attachment[2493].source_url\nconst fmediaId=post.featured_media;console.log(\"fmediaId\",postId);const fmedia=state.source.attachment[fmediaId].source_url;console.log(\"fmedia\",fmedia);// Prefetch home posts and the list component.\nactions.source.fetch(\"/\");_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"].preload();return data.isReady?Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Head,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\",{src:fmedia}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Title,null,post.title.rendered),data.isPost&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Author,null,\"By \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"b\",null,author.name)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Fecha,null,\" \",\"on \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"b\",null,date.toDateString())))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Body,{dangerouslySetInnerHTML:{__html:post.content.rendered}})):null;};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Post));const Container=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject());const Head=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject2());const Title=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].h1(_templateObject3());const Author=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].p(_templateObject4());const Fecha=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].p(_templateObject5());const Body=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject6());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9odG1sL2NvbXBvbmVudHMvcG9zdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2h0bWwvY29tcG9uZW50cy9wb3N0LmpzPzg0YWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgRmVhdHVyZWRNZWRpYSBmcm9tIFwiLi9mZWF0dXJlZC1tZWRpYVwiO1xuXG5jb25zdCBQb3N0ID0gKHsgc3RhdGUsIGFjdGlvbnMgfSkgPT4ge1xuICAvLyBHZXQgaW5mbyBvZiBjdXJyZW50IHBvc3QuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZGF0YShzdGF0ZS5yb3V0ZXIucGF0aCk7XG4gIC8vIEdldCB0aGUgdGhlIHBvc3QuXG4gIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXTtcbiAgY29uc29sZS5sb2coXCJwb3N0XCIsIHBvc3QpO1xuICAvLyBHZXQgdGhlIGF1dGhvci5cbiAgY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwb3N0LmRhdGUpO1xuICAvLyBHZXQgdGhlIGZlYXR1cmVkIGltYWdlLiBcbiAgLy9mcm9udGl0eS5zdGF0ZS5zb3VyY2UuYXR0YWNobWVudFsyNDkzXS5zb3VyY2VfdXJsXG4gIGNvbnN0IGZtZWRpYUlkID0gcG9zdC5mZWF0dXJlZF9tZWRpYTtcbiAgY29uc29sZS5sb2coXCJmbWVkaWFJZFwiLCBwb3N0SWQpO1xuICBjb25zdCBmbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtmbWVkaWFJZF0uc291cmNlX3VybDtcbiAgY29uc29sZS5sb2coXCJmbWVkaWFcIiwgZm1lZGlhKTtcblxuXG4gIC8vIFByZWZldGNoIGhvbWUgcG9zdHMgYW5kIHRoZSBsaXN0IGNvbXBvbmVudC5cbiAgYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvXCIpO1xuICBMaXN0LnByZWxvYWQoKTtcblxuICByZXR1cm4gZGF0YS5pc1JlYWR5ID8gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGltZyBzcmM9e2ZtZWRpYX0gLz5cbiAgICAgICAgPFRpdGxlPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvVGl0bGU+XG4gICAgICAgIHtkYXRhLmlzUG9zdCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxBdXRob3I+XG4gICAgICAgICAgICAgIEJ5IDxiPnthdXRob3IubmFtZX08L2I+XG4gICAgICAgICAgICA8L0F1dGhvcj5cbiAgICAgICAgICAgIDxGZWNoYT5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICBvbiA8Yj57ZGF0ZS50b0RhdGVTdHJpbmcoKX08L2I+XG4gICAgICAgICAgICA8L0ZlY2hhPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9IZWFkPlxuICAgICAgPEJvZHlcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IHBvc3QuY29udGVudC5yZW5kZXJlZFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKSA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3QpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjRweDtcbmA7XG5cbmNvbnN0IEhlYWQgPSBzdHlsZWQuZGl2YGA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgY29sb3I6IHJnYmEoMTIsIDE3LCA0Myk7XG5gO1xuXG5jb25zdCBBdXRob3IgPSBzdHlsZWQucGBcbiAgY29sb3I6IHJnYmEoMTIsIDE3LCA0MywgMC45KTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZGlzcGxheTogaW5saW5lO1xuYDtcblxuY29uc3QgRmVjaGEgPSBzdHlsZWQucGBcbiAgY29sb3I6IHJnYmEoMTIsIDE3LCA0MywgMC45KTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZGlzcGxheTogaW5saW5lO1xuYDtcblxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgY29sb3I6IHJnYmEoMTIsIDE3LCA0MywgMC44KTtcblxuICAqIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICB9XG5cbiAgZmlndXJlIHtcbiAgICBtYXJnaW46IDI0cHggMDtcbiAgICAvKiBuZXh0IGxpbmUgb3ZlcnJpZGVzIGFuIGlubGluZSBzdHlsZSBvZiB0aGUgZmlndXJlIGVsZW1lbnQuICovXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblxuICAgIGZpZ2NhcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICB9XG4gIH1cblxuICBpZnJhbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIGJsb2NrcXVvdGUge1xuICAgIG1hcmdpbjogMTZweCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJnYmEoMTIsIDE3LCA0Myk7XG4gICAgcGFkZGluZzogNHB4IDE2cHg7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogcmdiKDMxLCA1NiwgMTk3KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuYDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFFQTtBQUdBO0FBR0E7QUFDQTtBQU9BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/html/components/post.js\n");

/***/ })

})