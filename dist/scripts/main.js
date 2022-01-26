/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width\">\r\n  <title>test</title>\r\n</head>\r\n\r\n<body>\r\n  <section class=\"bonus\">\r\n\r\n    <button>\r\n      <img src=\"\" alt=\"bonus__button\">\r\n      <span>best bonus</span>\r\n    </button>\r\n    <div class=\"benefits\">\r\n      <div class=\"benifits__item\">\r\n        <img src=\"\" alt=\"benefits-img\" class=\"benefits-img\">\r\n        <span class=\"benefits-title\"></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"payment\">\r\n      <div class=\"payment__item\">\r\n        <img src=\"\" alt=\"\" class=\"payment-img\">\r\n      </div>\r\n      <div class=\"payment__item\">\r\n        <img src=\"\" alt=\"\" class=\"payment-img\">\r\n      </div>\r\n      <div class=\"payment__item\">\r\n        <img src=\"\" alt=\"\" class=\"payment-img\">\r\n      </div>\r\n      <div class=\"payment__item\">\r\n        <img src=\"\" alt=\"\" class=\"payment-img\">\r\n      </div>\r\n      <div class=\"payment__item\">\r\n        <img src=\"\" alt=\"\" class=\"payment-img\">\r\n      </div>\r\n    </div>\r\n    <div class=\"controls\">\r\n      <button class=\"controls__button\"></button>\r\n      <button class=\"controls__button\"></button>\r\n    </div>\r\n    <div class=\"product\">\r\n      <img src=\"\" alt=\"product__img\" class=\"product__img\">\r\n      <div class=\"product-wrapper\">\r\n        <div class=\"product__title\">\r\n          <h2 class=\"product__title-text\">Welcome bonus</h2>\r\n          <img src=\"\" alt=\"product__title-img\" class=\"product-title__img\">\r\n        </div>\r\n        <span class=\"product__cost\">100% Up to 500 $</span>\r\n        <p class=\"product__description\">\r\n          Lorem ipsum dolor sit amet consectetur adipiscing elit lacus tempor,\r\n          vulputate id fames pulvinar curabitur faucibus.\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"hidden-info\">\r\n      <button class=\"hidden-info__button\">Hide info</button>\r\n    </div>\r\n\r\n    <div class=\"bonus-info\">\r\n      <p class=\"bonus-info__description\">\r\n        Potenti placerat in tempor aliquet ut porta fringilla inceptos, massa senectus lacus volutpat morbi felis\r\n        ultrices, cras nullam commodo nulla litora phasellus ornare. Lorem ipsum dolor proin id fames pulvinar curabitur\r\n        faucibus. Potenti placerat in tempor aliquet ut porta fringilla inceptos, massa senectus lacus volutpat morbi\r\n        felis ultrices, cras nullam commodo nulla litora phasellus ornare. Lorem ipsum dolor proin id fames pulvinar\r\n        curabitur faucibus.\r\n      </p>\r\n      <div class=\"wrapper\"> <!-- TO DO-->\r\n          <div class=\"wrapper__item\">\r\n            <img src=\"\" alt=\"\" class=\"item-img\">\r\n            <p class=\"item-text\">Lorem ipsum dolor sit amet consectetur adipiscing</p>\r\n            <img src=\"\" alt=\"\" class=\"item-img\">\r\n            <p class=\"item-text\">Lorem ipsum adipiscing</p>\r\n            <img src=\"\" alt=\"\" class=\"item-img\">\r\n            <p class=\"item-text\">Lorem ipsum dolor sit amet adipiscing.</p>\r\n            <img src=\"\" alt=\"\" class=\"item-img\">\r\n            <p class=\"item-text\">Lorem ipsum dolor sit amet consectetur adipiscing</p>\r\n          </div>\r\n          <div class=\"wrapper__item\">\r\n            <img src=\"\" alt=\"\" class=\"item-img\">\r\n            <p class=\"item-text\">Lorem ipsum dolor sit amet consectetur adipiscing</p>\r\n            <img src=\"\" alt=\"\" class=\"item-img\">\r\n            <p class=\"item-text\">Lorem ipsum adipiscing</p>\r\n            <img src=\"\" alt=\"\" class=\"item-img\">\r\n            <p class=\"item-text\">Lorem ipsum dolor sit amet adipiscing.</p>\r\n            <img src=\"\" alt=\"\" class=\"item-img\">\r\n            <p class=\"item-text\">Lorem ipsum dolor sit amet consectetur adipiscing</p>\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n  </section>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./styles/app.scss":
/*!*************************!*\
  !*** ./styles/app.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/app.scss */ "./styles/app.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./index.html");


})();

/******/ })()
;
//# sourceMappingURL=main.js.map