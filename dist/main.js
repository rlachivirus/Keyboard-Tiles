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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n\n/*document.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"canvas\");\n    canvas.width = 1500;\n    canvas.height = 1500;\n    const ctx = canvas.getContext(\"2d\");\n    ctx.strokeStyle = \"red\";\n    ctx.lineWidth = 5;\n    ctx.strokeRect(200, 100, 1020, 500);\n    \n    ctx.strokeStyle = \"black\";\n    ctx.strokeRect(200, 650, 1020, 100);\n    \n    // let tiles = setInterval(init, 1000);\n    init();\n    // let input = document.getElementById(\"pressed-key\");\n    // input.oninput = function () {\n    //     if (input.value === \"k\") {\n    //         alert(\"hi!\");\n    //     }\n    //     if (input.value === \"l\") {\n    //         alert(\"wrong!\");\n    //     }\n    // };\n\n\n\n})\n\nfunction init() {\n    window.requestAnimationFrame(draw);\n}\n\n\nlet x = 200;\nlet y = 100;\n// let dx = 200;\nlet dy = 1;\nlet words = [];\n\n\nfunction draw() {\n    const canvas = document.getElementById(\"canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    \n    // Tiles\n    if (y <= 570) { // need to use collision detection\n        ctx.clearRect(0, 0, 30, 30);\n        ctx.beginPath();\n        ctx.fillStyle = \"black\";\n        ctx.fillRect(200, 100, 1020, 500);\n        ctx.fillStyle = \"white\";\n        ctx.fillRect(300, y, 30, 30);\n        ctx.font = \"20px serif\";\n        ctx.fillStyle = \"red\";\n        ctx.fillText(\"K\", 308, y + 22);\n        \n        ctx.fillRect(400, y, 30, 30);\n        ctx.fillRect(500, y, 30, 30);\n        ctx.fillRect(600, y, 30, 30);\n        ctx.fillRect(700, y, 30, 30);\n        ctx.fillRect(800, y, 30, 30);\n        ctx.fillRect(900, y, 30, 30);\n        ctx.fillRect(1000, y, 30, 30);\n        ctx.fillRect(1100, y, 30, 30);\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    // if (y === 571) {\n    //     ctx.clearRect(300, 570, 30, 30);\n    // }\n\n    y += dy;\n\n\n\n    window.requestAnimationFrame(draw);\n}\n*/\n// document.getElementById(\"pressed-key\").addEventListener(\"keydown\", function (e) {\n//     let input = document.getElementById(\"pressed-key\");\n//     let inputVal = document.getElementById(input);\n//     if (e.key === \"k\") {\n//         alert(\"hi!\");\n//     }\n// })\n// const { isInteger } = require(\"core-js/core/number\");\n// document.addEventListener(\"DOMContentLoader\", function () {\n// })\n// function init() {\n// }\n// function drop() {\n// }\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  move();\n});\n\nfunction move() {\n  var k = document.getElementById(\"k\");\n  var y = 0;\n  var id = setInterval(down, 30);\n\n  function down() {\n    if (y >= 400) {\n      k.remove();\n    } else {\n      y++;\n      k.style.top = y + \"px\";\n    }\n  } // while (k.style.top <= 100) {\n  // }\n  // setInterval(move, 1000);\n\n}\n\ndocument.addEventListener(\"keydown\", function (e) {\n  var words = document.getElementById(\"words\"); // let arr = [\"h\", \"j\", \"k\"]\n\n  for (var i = 0; i < words.childElementCount; i++) {\n    if (e.key === words.children[i].id) {\n      alert(\"hi!\");\n      words.firstElementChild.remove();\n    } // if (e.key === \"l\") {\n    //     alert(\"wrong!\");\n    // }\n\n  }\n}); // Index.js > newGame.start() > game_view.js > start() > step > game.js > moveObjects() + checkCollisons()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTs7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUd0REMsRUFBQUEsSUFBSTtBQUVQLENBTEQ7O0FBTUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNaLE1BQUlDLENBQUMsR0FBR0gsUUFBUSxDQUFDSSxjQUFULENBQXdCLEdBQXhCLENBQVI7QUFDQSxNQUFJQyxDQUFDLEdBQUcsQ0FBUjtBQUNBLE1BQUlDLEVBQUUsR0FBR0MsV0FBVyxDQUFDQyxJQUFELEVBQU8sRUFBUCxDQUFwQjs7QUFDQSxXQUFTQSxJQUFULEdBQWdCO0FBQ1osUUFBSUgsQ0FBQyxJQUFJLEdBQVQsRUFBYztBQUNWRixNQUFBQSxDQUFDLENBQUNNLE1BQUY7QUFDSCxLQUZELE1BRU87QUFDSEosTUFBQUEsQ0FBQztBQUNERixNQUFBQSxDQUFDLENBQUNPLEtBQUYsQ0FBUUMsR0FBUixHQUFjTixDQUFDLEdBQUcsSUFBbEI7QUFDSDtBQUNKLEdBWFcsQ0FZWjtBQUNBO0FBQ0E7O0FBQ0g7O0FBR0RMLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBVVcsQ0FBVixFQUFhO0FBQzlDLE1BQUlDLEtBQUssR0FBR2IsUUFBUSxDQUFDSSxjQUFULENBQXdCLE9BQXhCLENBQVosQ0FEOEMsQ0FHOUM7O0FBQ0EsT0FBSyxJQUFJVSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxLQUFLLENBQUNFLGlCQUExQixFQUE2Q0QsQ0FBQyxFQUE5QyxFQUFrRDtBQUM5QyxRQUFJRixDQUFDLENBQUNJLEdBQUYsS0FBVUgsS0FBSyxDQUFDSSxRQUFOLENBQWVILENBQWYsRUFBa0JSLEVBQWhDLEVBQW9DO0FBQ2hDWSxNQUFBQSxLQUFLLENBQUMsS0FBRCxDQUFMO0FBQ0FMLE1BQUFBLEtBQUssQ0FBQ00saUJBQU4sQ0FBd0JWLE1BQXhCO0FBQ0gsS0FKNkMsQ0FLOUM7QUFDQTtBQUNBOztBQUNIO0FBQ0osQ0FiRCxHQWdCQSIsInNvdXJjZXMiOlsid2VicGFjazovL0pTUHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuLypkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLndpZHRoID0gMTUwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gMTUwMDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgY3R4LnN0cm9rZVJlY3QoMjAwLCAxMDAsIDEwMjAsIDUwMCk7XG4gICAgXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5zdHJva2VSZWN0KDIwMCwgNjUwLCAxMDIwLCAxMDApO1xuICAgIFxuICAgIC8vIGxldCB0aWxlcyA9IHNldEludGVydmFsKGluaXQsIDEwMDApO1xuICAgIGluaXQoKTtcbiAgICAvLyBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXNzZWQta2V5XCIpO1xuICAgIC8vIGlucHV0Lm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gXCJrXCIpIHtcbiAgICAvLyAgICAgICAgIGFsZXJ0KFwiaGkhXCIpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gXCJsXCIpIHtcbiAgICAvLyAgICAgICAgIGFsZXJ0KFwid3JvbmchXCIpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfTtcblxuXG5cbn0pXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcbn1cblxuXG5sZXQgeCA9IDIwMDtcbmxldCB5ID0gMTAwO1xuLy8gbGV0IGR4ID0gMjAwO1xubGV0IGR5ID0gMTtcbmxldCB3b3JkcyA9IFtdO1xuXG5cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICAvLyBUaWxlc1xuICAgIGlmICh5IDw9IDU3MCkgeyAvLyBuZWVkIHRvIHVzZSBjb2xsaXNpb24gZGV0ZWN0aW9uXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMjAwLCAxMDAsIDEwMjAsIDUwMCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgzMDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5mb250ID0gXCIyMHB4IHNlcmlmXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguZmlsbFRleHQoXCJLXCIsIDMwOCwgeSArIDIyKTtcbiAgICAgICAgXG4gICAgICAgIGN0eC5maWxsUmVjdCg0MDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCg1MDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCg2MDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCg3MDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCg4MDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCg5MDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCgxMDAwLCB5LCAzMCwgMzApO1xuICAgICAgICBjdHguZmlsbFJlY3QoMTEwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIC8vIGlmICh5ID09PSA1NzEpIHtcbiAgICAvLyAgICAgY3R4LmNsZWFyUmVjdCgzMDAsIDU3MCwgMzAsIDMwKTtcbiAgICAvLyB9XG5cbiAgICB5ICs9IGR5O1xuXG5cblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG59XG4qL1xuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVzc2VkLWtleVwiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuLy8gICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlc3NlZC1rZXlcIik7XG4vLyAgICAgbGV0IGlucHV0VmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXQpO1xuLy8gICAgIGlmIChlLmtleSA9PT0gXCJrXCIpIHtcbi8vICAgICAgICAgYWxlcnQoXCJoaSFcIik7XG4vLyAgICAgfVxuLy8gfSlcblxuXG4vLyBjb25zdCB7IGlzSW50ZWdlciB9ID0gcmVxdWlyZShcImNvcmUtanMvY29yZS9udW1iZXJcIik7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVyXCIsIGZ1bmN0aW9uICgpIHtcblxuLy8gfSlcblxuLy8gZnVuY3Rpb24gaW5pdCgpIHtcblxuLy8gfVxuXG4vLyBmdW5jdGlvbiBkcm9wKCkge1xuXG4vLyB9XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcblxuXG4gICAgbW92ZSgpO1xuICAgIFxufSlcbmZ1bmN0aW9uIG1vdmUoKSB7XG4gICAgbGV0IGsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImtcIik7XG4gICAgbGV0IHkgPSAwO1xuICAgIGxldCBpZCA9IHNldEludGVydmFsKGRvd24sIDMwKTtcbiAgICBmdW5jdGlvbiBkb3duKCkge1xuICAgICAgICBpZiAoeSA+PSA0MDApIHtcbiAgICAgICAgICAgIGsucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICBrLnN0eWxlLnRvcCA9IHkgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2hpbGUgKGsuc3R5bGUudG9wIDw9IDEwMCkge1xuICAgIC8vIH1cbiAgICAvLyBzZXRJbnRlcnZhbChtb3ZlLCAxMDAwKTtcbn1cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGxldCB3b3JkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZHNcIik7XG5cbiAgICAvLyBsZXQgYXJyID0gW1wiaFwiLCBcImpcIiwgXCJrXCJdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5jaGlsZEVsZW1lbnRDb3VudDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gd29yZHMuY2hpbGRyZW5baV0uaWQpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiaGkhXCIpO1xuICAgICAgICAgICAgd29yZHMuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKGUua2V5ID09PSBcImxcIikge1xuICAgICAgICAvLyAgICAgYWxlcnQoXCJ3cm9uZyFcIik7XG4gICAgICAgIC8vIH1cbiAgICB9XG59KVxuXG5cbi8vIEluZGV4LmpzID4gbmV3R2FtZS5zdGFydCgpID4gZ2FtZV92aWV3LmpzID4gc3RhcnQoKSA+IHN0ZXAgPiBnYW1lLmpzID4gbW92ZU9iamVjdHMoKSArIGNoZWNrQ29sbGlzb25zKCkiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibW92ZSIsImsiLCJnZXRFbGVtZW50QnlJZCIsInkiLCJpZCIsInNldEludGVydmFsIiwiZG93biIsInJlbW92ZSIsInN0eWxlIiwidG9wIiwiZSIsIndvcmRzIiwiaSIsImNoaWxkRWxlbWVudENvdW50Iiwia2V5IiwiY2hpbGRyZW4iLCJhbGVydCIsImZpcnN0RWxlbWVudENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;