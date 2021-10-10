/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n\n/*document.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"canvas\");\n    canvas.width = 1500;\n    canvas.height = 1500;\n    const ctx = canvas.getContext(\"2d\");\n    ctx.strokeStyle = \"red\";\n    ctx.lineWidth = 5;\n    ctx.strokeRect(200, 100, 1020, 500);\n    \n    ctx.strokeStyle = \"black\";\n    ctx.strokeRect(200, 650, 1020, 100);\n    \n    // let tiles = setInterval(init, 1000);\n    init();\n    // let input = document.getElementById(\"pressed-key\");\n    // input.oninput = function () {\n    //     if (input.value === \"k\") {\n    //         alert(\"hi!\");\n    //     }\n    //     if (input.value === \"l\") {\n    //         alert(\"wrong!\");\n    //     }\n    // };\n\n\n\n})\n\nfunction init() {\n    window.requestAnimationFrame(draw);\n}\n\n\nlet x = 200;\nlet y = 100;\n// let dx = 200;\nlet dy = 1;\nlet words = [];\n\n\nfunction draw() {\n    const canvas = document.getElementById(\"canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    \n    // Tiles\n    if (y <= 570) { // need to use collision detection\n        ctx.clearRect(0, 0, 30, 30);\n        ctx.beginPath();\n        ctx.fillStyle = \"black\";\n        ctx.fillRect(200, 100, 1020, 500);\n        ctx.fillStyle = \"white\";\n        ctx.fillRect(300, y, 30, 30);\n        ctx.font = \"20px serif\";\n        ctx.fillStyle = \"red\";\n        ctx.fillText(\"K\", 308, y + 22);\n        \n        // ctx.fillRect(400, y, 30, 30);\n        // ctx.fillRect(500, y, 30, 30);\n        // ctx.fillRect(600, y, 30, 30);\n        // ctx.fillRect(700, y, 30, 30);\n        // ctx.fillRect(800, y, 30, 30);\n        // ctx.fillRect(900, y, 30, 30);\n        // ctx.fillRect(1000, y, 30, 30);\n        // ctx.fillRect(1100, y, 30, 30);\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    // if (y === 571) {\n    //     ctx.clearRect(300, 570, 30, 30);\n    // }\n\n    y += dy;\n\n\n\n    window.requestAnimationFrame(draw);\n}\n\n// document.getElementById(\"pressed-key\").addEventListener(\"keydown\", function (e) {\n//     let input = document.getElementById(\"pressed-key\");\n//     let inputVal = document.getElementById(input);\n//     if (e.key === \"k\") {\n//         alert(\"hi!\");\n//     }\n// })\n*/\n// const { isInteger } = require(\"core-js/core/number\");\n// document.addEventListener(\"DOMContentLoader\", function () {\n// })\n// function init() {\n// }\n// function drop() {\n// }\n\ndocument.addEventListener(\"keydown\", function (e) {\n  var words = document.getElementById(\"words\"); // let arr = [\"h\", \"j\", \"k\"]\n\n  for (var i = 0; i < words.childElementCount; i++) {\n    if (e.key === words.children[i].id) {\n      alert(\"hi!\");\n      words.firstElementChild.remove();\n    } // if (e.key === \"l\") {\n    //     alert(\"wrong!\");\n    // }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBOztBQUVBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQVVDLENBQVYsRUFBYTtBQUM5QyxNQUFJQyxLQUFLLEdBQUdILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixPQUF4QixDQUFaLENBRDhDLENBRzlDOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsS0FBSyxDQUFDRyxpQkFBMUIsRUFBNkNELENBQUMsRUFBOUMsRUFBa0Q7QUFDOUMsUUFBSUgsQ0FBQyxDQUFDSyxHQUFGLEtBQVVKLEtBQUssQ0FBQ0ssUUFBTixDQUFlSCxDQUFmLEVBQWtCSSxFQUFoQyxFQUFvQztBQUNoQ0MsTUFBQUEsS0FBSyxDQUFDLEtBQUQsQ0FBTDtBQUNBUCxNQUFBQSxLQUFLLENBQUNRLGlCQUFOLENBQXdCQyxNQUF4QjtBQUNILEtBSjZDLENBSzlDO0FBQ0E7QUFDQTs7QUFDSDtBQUNKLENBYkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU1Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbi8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IDE1MDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDE1MDA7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgIGN0eC5saW5lV2lkdGggPSA1O1xuICAgIGN0eC5zdHJva2VSZWN0KDIwMCwgMTAwLCAxMDIwLCA1MDApO1xuICAgIFxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHguc3Ryb2tlUmVjdCgyMDAsIDY1MCwgMTAyMCwgMTAwKTtcbiAgICBcbiAgICAvLyBsZXQgdGlsZXMgPSBzZXRJbnRlcnZhbChpbml0LCAxMDAwKTtcbiAgICBpbml0KCk7XG4gICAgLy8gbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVzc2VkLWtleVwiKTtcbiAgICAvLyBpbnB1dC5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBpZiAoaW5wdXQudmFsdWUgPT09IFwia1wiKSB7XG4gICAgLy8gICAgICAgICBhbGVydChcImhpIVwiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAoaW5wdXQudmFsdWUgPT09IFwibFwiKSB7XG4gICAgLy8gICAgICAgICBhbGVydChcIndyb25nIVwiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH07XG5cblxuXG59KVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG59XG5cblxubGV0IHggPSAyMDA7XG5sZXQgeSA9IDEwMDtcbi8vIGxldCBkeCA9IDIwMDtcbmxldCBkeSA9IDE7XG5sZXQgd29yZHMgPSBbXTtcblxuXG5mdW5jdGlvbiBkcmF3KCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgXG4gICAgLy8gVGlsZXNcbiAgICBpZiAoeSA8PSA1NzApIHsgLy8gbmVlZCB0byB1c2UgY29sbGlzaW9uIGRldGVjdGlvblxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDMwLCAzMCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDIwMCwgMTAwLCAxMDIwLCA1MDApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMzAwLCB5LCAzMCwgMzApO1xuICAgICAgICBjdHguZm9udCA9IFwiMjBweCBzZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KFwiS1wiLCAzMDgsIHkgKyAyMik7XG4gICAgICAgIFxuICAgICAgICAvLyBjdHguZmlsbFJlY3QoNDAwLCB5LCAzMCwgMzApO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QoNTAwLCB5LCAzMCwgMzApO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QoNjAwLCB5LCAzMCwgMzApO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QoNzAwLCB5LCAzMCwgMzApO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QoODAwLCB5LCAzMCwgMzApO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QoOTAwLCB5LCAzMCwgMzApO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QoMTAwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KDExMDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICAvLyBpZiAoeSA9PT0gNTcxKSB7XG4gICAgLy8gICAgIGN0eC5jbGVhclJlY3QoMzAwLCA1NzAsIDMwLCAzMCk7XG4gICAgLy8gfVxuXG4gICAgeSArPSBkeTtcblxuXG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xufVxuXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXNzZWQta2V5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVzc2VkLWtleVwiKTtcbi8vICAgICBsZXQgaW5wdXRWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dCk7XG4vLyAgICAgaWYgKGUua2V5ID09PSBcImtcIikge1xuLy8gICAgICAgICBhbGVydChcImhpIVwiKTtcbi8vICAgICB9XG4vLyB9KVxuKi9cblxuLy8gY29uc3QgeyBpc0ludGVnZXIgfSA9IHJlcXVpcmUoXCJjb3JlLWpzL2NvcmUvbnVtYmVyXCIpO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlclwiLCBmdW5jdGlvbiAoKSB7XG5cbi8vIH0pXG5cbi8vIGZ1bmN0aW9uIGluaXQoKSB7XG5cbi8vIH1cblxuLy8gZnVuY3Rpb24gZHJvcCgpIHtcblxuLy8gfVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGxldCB3b3JkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZHNcIik7XG5cbiAgICAvLyBsZXQgYXJyID0gW1wiaFwiLCBcImpcIiwgXCJrXCJdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5jaGlsZEVsZW1lbnRDb3VudDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gd29yZHMuY2hpbGRyZW5baV0uaWQpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiaGkhXCIpO1xuICAgICAgICAgICAgd29yZHMuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKGUua2V5ID09PSBcImxcIikge1xuICAgICAgICAvLyAgICAgYWxlcnQoXCJ3cm9uZyFcIik7XG4gICAgICAgIC8vIH1cbiAgICB9XG59KVxuXG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIndvcmRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwiY2hpbGRFbGVtZW50Q291bnQiLCJrZXkiLCJjaGlsZHJlbiIsImlkIiwiYWxlcnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU1Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSlNQcm9qZWN0Ly4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2FlOWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;