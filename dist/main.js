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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n// import * as Tone from \"tone\";\n\n/*document.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"canvas\");\n    canvas.width = 1500;\n    canvas.height = 1500;\n    const ctx = canvas.getContext(\"2d\");\n    ctx.strokeStyle = \"red\";\n    ctx.lineWidth = 5;\n    ctx.strokeRect(200, 100, 1020, 500);\n    \n    ctx.strokeStyle = \"black\";\n    ctx.strokeRect(200, 650, 1020, 100);\n    \n    // let tiles = setInterval(init, 1000);\n    init();\n    // let input = document.getElementById(\"pressed-key\");\n    // input.oninput = function () {\n    //     if (input.value === \"k\") {\n    //         alert(\"hi!\");\n    //     }\n    //     if (input.value === \"l\") {\n    //         alert(\"wrong!\");\n    //     }\n    // };\n\n\n\n})\n\nfunction init() {\n    window.requestAnimationFrame(draw);\n}\n\n\nlet x = 200;\nlet y = 100;\n// let dx = 200;\nlet dy = 1;\nlet words = [];\n\n\nfunction draw() {\n    const canvas = document.getElementById(\"canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    \n    // Tiles\n    if (y <= 570) { // need to use collision detection\n        ctx.clearRect(0, 0, 30, 30);\n        ctx.beginPath();\n        ctx.fillStyle = \"black\";\n        ctx.fillRect(200, 100, 1020, 500);\n        ctx.fillStyle = \"white\";\n        ctx.fillRect(300, y, 30, 30);\n        ctx.font = \"20px serif\";\n        ctx.fillStyle = \"red\";\n        ctx.fillText(\"K\", 308, y + 22);\n        \n        ctx.fillRect(400, y, 30, 30);\n        ctx.fillRect(500, y, 30, 30);\n        ctx.fillRect(600, y, 30, 30);\n        ctx.fillRect(700, y, 30, 30);\n        ctx.fillRect(800, y, 30, 30);\n        ctx.fillRect(900, y, 30, 30);\n        ctx.fillRect(1000, y, 30, 30);\n        ctx.fillRect(1100, y, 30, 30);\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    // if (y === 571) {\n    //     ctx.clearRect(300, 570, 30, 30);\n    // }\n\n    y += dy;\n\n\n\n    window.requestAnimationFrame(draw);\n}\n*/\n// document.getElementById(\"pressed-key\").addEventListener(\"keydown\", function (e) {\n//     let input = document.getElementById(\"pressed-key\");\n//     let inputVal = document.getElementById(input);\n//     if (e.key === \"k\") {\n//         alert(\"hi!\");\n//     }\n// })\n// const { isInteger } = require(\"core-js/core/number\");\n// document.addEventListener(\"DOMContentLoader\", function () {\n// })\n// function init() {\n// }\n// function drop() {\n// }\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  move();\n});\n\nfunction move() {\n  var k = document.getElementById(\"k\");\n  var y = 0;\n  var id = setInterval(down, 30);\n\n  function down() {\n    if (y >= 400) {\n      k.remove();\n    } else {\n      y++;\n      k.style.top = y + \"px\";\n    }\n  } // while (k.style.top <= 100) {\n  // }\n  // setInterval(move, 1000);\n\n}\n\ndocument.addEventListener(\"keydown\", function (e) {\n  var words = document.getElementById(\"words\"); // let arr = [\"h\", \"j\", \"k\"]\n\n  for (var i = 0; i < words.childElementCount; i++) {\n    if (e.key === words.children[i].id) {\n      // alert(\"hi!\");\n      var synth = new Tone.Synth().toDestination();\n      synth.triggerAttackRelease(\"C4\", \"32n\");\n      words.firstElementChild.remove();\n    } // if (e.key === \"l\") {\n    //     alert(\"wrong!\");\n    // }\n\n  }\n}); // Index.js > newGame.start() > game_view.js > start() > step > game.js > moveObjects() + checkCollisons()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFSTtBQUVBO0FBRUk7QUFFQTtBQUVJOztBQUdaQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBR3REQyxFQUFBQSxJQUFJO0FBRVAsQ0FMRDs7QUFNQSxTQUFTQSxJQUFULEdBQWdCO0FBQ1osTUFBSUMsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLGNBQVQsQ0FBd0IsR0FBeEIsQ0FBUjtBQUNBLE1BQUlDLENBQUMsR0FBRyxDQUFSO0FBQ0EsTUFBSUMsRUFBRSxHQUFHQyxXQUFXLENBQUNDLElBQUQsRUFBTyxFQUFQLENBQXBCOztBQUNBLFdBQVNBLElBQVQsR0FBZ0I7QUFDWixRQUFJSCxDQUFDLElBQUksR0FBVCxFQUFjO0FBQ1ZGLE1BQUFBLENBQUMsQ0FBQ00sTUFBRjtBQUNILEtBRkQsTUFFTztBQUNISixNQUFBQSxDQUFDO0FBQ0RGLE1BQUFBLENBQUMsQ0FBQ08sS0FBRixDQUFRQyxHQUFSLEdBQWNOLENBQUMsR0FBRyxJQUFsQjtBQUNIO0FBQ0osR0FYVyxDQVlaO0FBQ0E7QUFDQTs7QUFDSDs7QUFHREwsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFVVyxDQUFWLEVBQWE7QUFDOUMsTUFBSUMsS0FBSyxHQUFHYixRQUFRLENBQUNJLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBWixDQUQ4QyxDQUc5Qzs7QUFDQSxPQUFLLElBQUlVLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELEtBQUssQ0FBQ0UsaUJBQTFCLEVBQTZDRCxDQUFDLEVBQTlDLEVBQWtEO0FBQzlDLFFBQUlGLENBQUMsQ0FBQ0ksR0FBRixLQUFVSCxLQUFLLENBQUNJLFFBQU4sQ0FBZUgsQ0FBZixFQUFrQlIsRUFBaEMsRUFBb0M7QUFDaEM7QUFDQSxVQUFJWSxLQUFLLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxLQUFULEdBQWlCQyxhQUFqQixFQUFaO0FBQ0FILE1BQUFBLEtBQUssQ0FBQ0ksb0JBQU4sQ0FBMkIsSUFBM0IsRUFBaUMsS0FBakM7QUFDQVQsTUFBQUEsS0FBSyxDQUFDVSxpQkFBTixDQUF3QmQsTUFBeEI7QUFDSCxLQU42QyxDQU85QztBQUNBO0FBQ0E7O0FBQ0g7QUFDSixDQWZELEdBa0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSlNQcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICogYXMgVG9uZSBmcm9tIFwidG9uZVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG4vKmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMud2lkdGggPSAxNTAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSAxNTAwO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcbiAgICBjdHgubGluZVdpZHRoID0gNTtcbiAgICBjdHguc3Ryb2tlUmVjdCgyMDAsIDEwMCwgMTAyMCwgNTAwKTtcbiAgICBcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LnN0cm9rZVJlY3QoMjAwLCA2NTAsIDEwMjAsIDEwMCk7XG4gICAgXG4gICAgLy8gbGV0IHRpbGVzID0gc2V0SW50ZXJ2YWwoaW5pdCwgMTAwMCk7XG4gICAgaW5pdCgpO1xuICAgIC8vIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlc3NlZC1rZXlcIik7XG4gICAgLy8gaW5wdXQub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgaWYgKGlucHV0LnZhbHVlID09PSBcImtcIikge1xuICAgIC8vICAgICAgICAgYWxlcnQoXCJoaSFcIik7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKGlucHV0LnZhbHVlID09PSBcImxcIikge1xuICAgIC8vICAgICAgICAgYWxlcnQoXCJ3cm9uZyFcIik7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9O1xuXG5cblxufSlcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xufVxuXG5cbmxldCB4ID0gMjAwO1xubGV0IHkgPSAxMDA7XG4vLyBsZXQgZHggPSAyMDA7XG5sZXQgZHkgPSAxO1xubGV0IHdvcmRzID0gW107XG5cblxuZnVuY3Rpb24gZHJhdygpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIC8vIFRpbGVzXG4gICAgaWYgKHkgPD0gNTcwKSB7IC8vIG5lZWQgdG8gdXNlIGNvbGxpc2lvbiBkZXRlY3Rpb25cbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCAzMCwgMzApO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgyMDAsIDEwMCwgMTAyMCwgNTAwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDMwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmZvbnQgPSBcIjIwcHggc2VyaWZcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dChcIktcIiwgMzA4LCB5ICsgMjIpO1xuICAgICAgICBcbiAgICAgICAgY3R4LmZpbGxSZWN0KDQwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDUwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDYwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDcwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDgwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDkwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDEwMDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCgxMTAwLCB5LCAzMCwgMzApO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgLy8gaWYgKHkgPT09IDU3MSkge1xuICAgIC8vICAgICBjdHguY2xlYXJSZWN0KDMwMCwgNTcwLCAzMCwgMzApO1xuICAgIC8vIH1cblxuICAgIHkgKz0gZHk7XG5cblxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcbn1cbiovXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXNzZWQta2V5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVzc2VkLWtleVwiKTtcbi8vICAgICBsZXQgaW5wdXRWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dCk7XG4vLyAgICAgaWYgKGUua2V5ID09PSBcImtcIikge1xuLy8gICAgICAgICBhbGVydChcImhpIVwiKTtcbi8vICAgICB9XG4vLyB9KVxuXG5cbi8vIGNvbnN0IHsgaXNJbnRlZ2VyIH0gPSByZXF1aXJlKFwiY29yZS1qcy9jb3JlL251bWJlclwiKTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgIFxuICAgIC8vIH0pXG4gICAgXG4gICAgLy8gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGZ1bmN0aW9uIGRyb3AoKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIFxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgbW92ZSgpO1xuICAgIFxufSlcbmZ1bmN0aW9uIG1vdmUoKSB7XG4gICAgbGV0IGsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImtcIik7XG4gICAgbGV0IHkgPSAwO1xuICAgIGxldCBpZCA9IHNldEludGVydmFsKGRvd24sIDMwKTtcbiAgICBmdW5jdGlvbiBkb3duKCkge1xuICAgICAgICBpZiAoeSA+PSA0MDApIHtcbiAgICAgICAgICAgIGsucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICBrLnN0eWxlLnRvcCA9IHkgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2hpbGUgKGsuc3R5bGUudG9wIDw9IDEwMCkge1xuICAgIC8vIH1cbiAgICAvLyBzZXRJbnRlcnZhbChtb3ZlLCAxMDAwKTtcbn1cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGxldCB3b3JkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZHNcIik7XG5cbiAgICAvLyBsZXQgYXJyID0gW1wiaFwiLCBcImpcIiwgXCJrXCJdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5jaGlsZEVsZW1lbnRDb3VudDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gd29yZHMuY2hpbGRyZW5baV0uaWQpIHtcbiAgICAgICAgICAgIC8vIGFsZXJ0KFwiaGkhXCIpO1xuICAgICAgICAgICAgbGV0IHN5bnRoID0gbmV3IFRvbmUuU3ludGgoKS50b0Rlc3RpbmF0aW9uKCk7XG4gICAgICAgICAgICBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShcIkM0XCIsIFwiMzJuXCIpO1xuICAgICAgICAgICAgd29yZHMuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKGUua2V5ID09PSBcImxcIikge1xuICAgICAgICAvLyAgICAgYWxlcnQoXCJ3cm9uZyFcIik7XG4gICAgICAgIC8vIH1cbiAgICB9XG59KVxuXG5cbi8vIEluZGV4LmpzID4gbmV3R2FtZS5zdGFydCgpID4gZ2FtZV92aWV3LmpzID4gc3RhcnQoKSA+IHN0ZXAgPiBnYW1lLmpzID4gbW92ZU9iamVjdHMoKSArIGNoZWNrQ29sbGlzb25zKClcblxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdmUiLCJrIiwiZ2V0RWxlbWVudEJ5SWQiLCJ5IiwiaWQiLCJzZXRJbnRlcnZhbCIsImRvd24iLCJyZW1vdmUiLCJzdHlsZSIsInRvcCIsImUiLCJ3b3JkcyIsImkiLCJjaGlsZEVsZW1lbnRDb3VudCIsImtleSIsImNoaWxkcmVuIiwic3ludGgiLCJUb25lIiwiU3ludGgiLCJ0b0Rlc3RpbmF0aW9uIiwidHJpZ2dlckF0dGFja1JlbGVhc2UiLCJmaXJzdEVsZW1lbnRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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