"use strict";
exports.id = 324;
exports.ids = [324];
exports.modules = {

/***/ 9324:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need


const firebaseConfig = {
    apiKey: "AIzaSyAzxqbJC2a0QaRqOfHx5_bT4CwDJs4y5HY",
    authDomain: "blogs-5e979.firebaseapp.com",
    projectId: "blogs-5e979",
    storageBucket: "blogs-5e979.appspot.com",
    messagingSenderId: "464066675542",
    appId: "1:464066675542:web:e13510d337bafa2a034cf7"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getStorage)(app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;