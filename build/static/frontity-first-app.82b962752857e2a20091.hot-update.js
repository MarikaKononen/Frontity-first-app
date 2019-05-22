webpackHotUpdate("frontity-first-app",{

/***/ "./packages/mars-theme/src/html/components/theme.js":
/*!**********************************************************!*\
  !*** ./packages/mars-theme/src/html/components/theme.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./packages/mars-theme/src/html/components/header.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ \"./packages/mars-theme/src/html/components/list/index.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post */ \"./packages/mars-theme/src/html/components/post.js\");\n/* harmony import */ var _page404_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page404.js */ \"./packages/mars-theme/src/html/components/page404.js\");\n/* harmony import */ var _introduction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./introduction */ \"./packages/mars-theme/src/html/components/introduction.js\");\n/* harmony import */ var _headerImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./headerImage */ \"./packages/mars-theme/src/html/components/headerImage.js\");\nfunction _templateObject5(){const data=_taggedTemplateLiteral([\"\\n    display: grid;\\n    grid-template-columns: auto auto;\\n\"]);_templateObject5=function _templateObject5(){return data;};return data;}function _templateObject4(){const data=_taggedTemplateLiteral([\"\\n  display: flex;\\n  justify-content: center;\\n  width: 30%;\\n  margin: 1.66%;\\n\\n\"]);_templateObject4=function _templateObject4(){return data;};return data;}function _templateObject3(){const data=_taggedTemplateLiteral([\"\\n  display: flex;\\n  justify-content: center;\\n  width: 70%;\\n  margin-left: 50px;\\n  background-image: linear-gradient(\\n    180deg,\\n    rgba(66, 174, 228, 0.1),\\n    rgba(66, 174, 228, 0)\\n  );\\n\"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){const data=_taggedTemplateLiteral([\"\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  background-color: #ff9900;\\n  padding-bottom: 1rem;\\n\"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){const data=_taggedTemplateLiteral([\"\\n  body {\\n    margin: 0;\\n    font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto,\\n      \\\"Droid Sans\\\", \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n  }\\n  a,\\n  a:visited {\\n    color: inherit;\\n    text-decoration: none;\\n  }\\n\"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}const globalStyles=Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject());const Theme=(_ref)=>{let state=_ref.state;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_headerImage__WEBPACK_IMPORTED_MODULE_8__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_2__[\"Head\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"title\",null,state.frontity.title),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"html\",{lang:\"en\"})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_2__[\"Global\"],{styles:globalStyles}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(HeadContainer,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"],null)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(BodyContainer,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Body,null,state.source.data(state.router.path).isArchive&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null),state.source.data(state.router.path).isPostType&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_post__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null),state.source.data(state.router.path).is404&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_page404_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"],null)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(IntroductionContainer,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_introduction__WEBPACK_IMPORTED_MODULE_7__[\"default\"],null))));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Theme));const HeadContainer=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject2());const Body=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject3());const IntroductionContainer=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject4());const BodyContainer=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject5());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9odG1sL2NvbXBvbmVudHMvdGhlbWUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9odG1sL2NvbXBvbmVudHMvdGhlbWUuanM/MmQ2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHbG9iYWwsIGNzcywgY29ubmVjdCwgc3R5bGVkLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IFBhZ2U0MDQgZnJvbSBcIi4vcGFnZTQwNC5qc1wiO1xuaW1wb3J0IEludHJvZHVjdGlvbiBmcm9tIFwiLi9pbnRyb2R1Y3Rpb25cIjtcbmltcG9ydCBIZWFkZXJJbWFnZSBmcm9tIFwiLi9oZWFkZXJJbWFnZVwiO1xuXG5jb25zdCBnbG9iYWxTdHlsZXMgPSBjc3NgXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90byxcbiAgICAgIFwiRHJvaWQgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgYSxcbiAgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IFRoZW1lID0gKHsgc3RhdGUgfSkgPT4gKFxuICA8PlxuICAgIDxIZWFkZXJJbWFnZSAvPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPntzdGF0ZS5mcm9udGl0eS50aXRsZX08L3RpdGxlPlxuICAgICAgPGh0bWwgbGFuZz1cImVuXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbFN0eWxlc30gLz5cbiAgICA8SGVhZENvbnRhaW5lcj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICA8L0hlYWRDb250YWluZXI+XG4gICAgPEJvZHlDb250YWluZXI+XG4gICAgICA8Qm9keT5cbiAgICAgICAge3N0YXRlLnNvdXJjZS5kYXRhKHN0YXRlLnJvdXRlci5wYXRoKS5pc0FyY2hpdmUgJiYgPExpc3QgLz59XG4gICAgICAgIHtzdGF0ZS5zb3VyY2UuZGF0YShzdGF0ZS5yb3V0ZXIucGF0aCkuaXNQb3N0VHlwZSAmJiA8UG9zdCAvPn1cbiAgICAgICAge3N0YXRlLnNvdXJjZS5kYXRhKHN0YXRlLnJvdXRlci5wYXRoKS5pczQwNCAmJiA8UGFnZTQwNCAvPn1cbiAgICAgIDwvQm9keT5cbiAgICAgIDxJbnRyb2R1Y3Rpb25Db250YWluZXI+XG4gICAgICAgIDxJbnRyb2R1Y3Rpb24gLz5cbiAgICAgIDwvSW50cm9kdWN0aW9uQ29udGFpbmVyPlxuICAgIDwvQm9keUNvbnRhaW5lcj5cbiAgICBcbiAgICAgIFxuICBcbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFRoZW1lKTtcblxuXG5jb25zdCBIZWFkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTkwMDtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG5gO1xuXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTgwZGVnLFxuICAgIHJnYmEoNjYsIDE3NCwgMjI4LCAwLjEpLFxuICAgIHJnYmEoNjYsIDE3NCwgMjI4LCAwKVxuICApO1xuYDtcblxuY29uc3QgSW50cm9kdWN0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbjogMS42NiU7XG5cbmA7XG5cbiAgY29uc3QgQm9keUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbmA7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/html/components/theme.js\n");

/***/ })

})