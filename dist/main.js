/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// import * as Tone from \"tone\";\n// import \"./styles/index\";\n// import \"./scripts/keys.js\";\n// import \"./scripts/letters.js\";\nvar Game = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/*document.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"canvas\");\n    canvas.width = 1500;\n    canvas.height = 1500;\n    const ctx = canvas.getContext(\"2d\");\n    ctx.strokeStyle = \"red\";\n    ctx.lineWidth = 5;\n    ctx.strokeRect(200, 100, 1020, 500);\n    \n    ctx.strokeStyle = \"black\";\n    ctx.strokeRect(200, 650, 1020, 100);\n    \n    // let tiles = setInterval(init, 1000);\n    init();\n    // let input = document.getElementById(\"pressed-key\");\n    // input.oninput = function () {\n    //     if (input.value === \"k\") {\n    //         alert(\"hi!\");\n    //     }\n    //     if (input.value === \"l\") {\n    //         alert(\"wrong!\");\n    //     }\n    // };\n\n\n\n})\n\nfunction init() {\n    window.requestAnimationFrame(draw);\n}\n\n\nlet x = 200;\nlet y = 100;\n// let dx = 200;\nlet dy = 1;\nlet words = [];\n\n\nfunction draw() {\n    const canvas = document.getElementById(\"canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    \n    // Tiles\n    if (y <= 570) { // need to use collision detection\n        ctx.clearRect(0, 0, 30, 30);\n        ctx.beginPath();\n        ctx.fillStyle = \"black\";\n        ctx.fillRect(200, 100, 1020, 500);\n        ctx.fillStyle = \"white\";\n        ctx.fillRect(300, y, 30, 30);\n        ctx.font = \"20px serif\";\n        ctx.fillStyle = \"red\";\n        ctx.fillText(\"K\", 308, y + 22);\n        \n        ctx.fillRect(400, y, 30, 30);\n        ctx.fillRect(500, y, 30, 30);\n        ctx.fillRect(600, y, 30, 30);\n        ctx.fillRect(700, y, 30, 30);\n        ctx.fillRect(800, y, 30, 30);\n        ctx.fillRect(900, y, 30, 30);\n        ctx.fillRect(1000, y, 30, 30);\n        ctx.fillRect(1100, y, 30, 30);\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    // if (y === 571) {\n    //     ctx.clearRect(300, 570, 30, 30);\n    // }\n\n    y += dy;\n\n\n\n    window.requestAnimationFrame(draw);\n}\n*/\n// document.getElementById(\"pressed-key\").addEventListener(\"keydown\", function (e) {\n//     let input = document.getElementById(\"pressed-key\");\n//     let inputVal = document.getElementById(input);\n//     if (e.key === \"k\") {\n//         alert(\"hi!\");\n//     }\n// })\n// const { isInteger } = require(\"core-js/core/number\");\n// document.addEventListener(\"DOMContentLoader\", function () {\n// })\n// function init() {\n// }\n// function drop() {\n// }\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var game = new Game(); // move();\n\n  game.fillLetters();\n  debugger;\n  setInterval(function () {\n    game.assignColumn();\n  }, 1000); // debugger\n  // clearInterval(game.drop, 2000);\n\n  setInterval(game.drop, 1000); // setInterval(function () {\n  //     game.drop();\n  // }, 1000);\n  // debugger\n  // game.drop();\n});\ndocument.addEventListener(\"keydown\", function (e) {\n  var words = document.getElementById(\"words\"); // let music = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\"];\n\n  var synth = new Tone.Synth(); //.toDestination();\n\n  synth.oscillator.type = \"sine\";\n  synth.toMaster(); // let arr = [\"h\", \"j\", \"k\"]\n  // for (let i = 0; i < words.childElementCount; i++) {\n\n  if (e.key === words.children[0].id) {\n    // alert(\"hi!\");\n    synth.triggerAttackRelease(words.children[0].className + \"4\", \"16n\");\n    words.firstElementChild.remove(); // music.shift();\n    // }\n    // if (e.key === \"l\") {\n    //     alert(\"wrong!\");\n  } // }\n\n}); // function move() {\n//     let k = document.getElementById(\"k\");\n//     let y = 0;\n//     let id = setInterval(down, 30);\n//     function down() {\n//         if (y >= 400) {\n//             k.remove();\n//         } else {\n//             y++;\n//             k.style.top = y + \"px\";\n//         }\n//     }\n// }\n// document.addEventListener(\"keydown\", function (e) {\n// let music = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\"];\n// let synth = new Tone.Synth()//.toDestination();\n// synth.oscillator.type = \"sine\";\n// synth.toDestination();\n// let words = document.getElementById(\"words\");\n// let input = document.getElementById(\"pressed-key\");\n// synth.triggerAttackRelease(music[0] + \"4\", \"16n\");\n// music.shift();\n// input.oninput = function () {\n//     if (input.value[input.value.length - 1] === e.key) {\n//         let key = music.shift();\n//         return synth.triggerAttackRelease(key + \"4\", \"16n\");\n//     }\n// }\n// if (e.key === input.value[input.value.length - 1]) {\n//     let key = music.shift();\n//     return synth.triggerAttackRelease(key + \"4\", \"16n\");\n// }\n// let music = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\"];\n// while (music.length >= 0) {\n// switch (e.key === input.value) {\n//     case words.children[0].id:\n//         debugger\n//         synth.triggerAttackRelease(music[0] + \"4\", \"16n\"); \n//         music.shift()\n//         debugger\n//         break;\n//     case false:\n//         debugger\n//         return;\n// case \"j\":\n//     debugger\n//     return synth.triggerAttackRelease(music[1] + \"4\", \"16n\");\n// case \"h\":\n//     return synth.triggerAttackRelease(music[2] + \"4\", \"16n\");\n// case \"l\":\n//     return synth.triggerAttackRelease(music[3] + \"4\", \"16n\");\n// case \"g\":\n//     return synth.triggerAttackRelease(music[4] + \"4\", \"16n\");\n//     default:\n//         return;\n// }\n// }\n// })\n// Index.js > newGame.start() > game_view.js > start() > step > game.js > moveObjects() + checkCollisons()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vSlNQcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICogYXMgVG9uZSBmcm9tIFwidG9uZVwiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXhcIjtcbi8vIGltcG9ydCBcIi4vc2NyaXB0cy9rZXlzLmpzXCI7XG4vLyBpbXBvcnQgXCIuL3NjcmlwdHMvbGV0dGVycy5qc1wiO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZVwiKTtcblxuXG4vKmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMud2lkdGggPSAxNTAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSAxNTAwO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcbiAgICBjdHgubGluZVdpZHRoID0gNTtcbiAgICBjdHguc3Ryb2tlUmVjdCgyMDAsIDEwMCwgMTAyMCwgNTAwKTtcbiAgICBcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LnN0cm9rZVJlY3QoMjAwLCA2NTAsIDEwMjAsIDEwMCk7XG4gICAgXG4gICAgLy8gbGV0IHRpbGVzID0gc2V0SW50ZXJ2YWwoaW5pdCwgMTAwMCk7XG4gICAgaW5pdCgpO1xuICAgIC8vIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlc3NlZC1rZXlcIik7XG4gICAgLy8gaW5wdXQub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgaWYgKGlucHV0LnZhbHVlID09PSBcImtcIikge1xuICAgIC8vICAgICAgICAgYWxlcnQoXCJoaSFcIik7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKGlucHV0LnZhbHVlID09PSBcImxcIikge1xuICAgIC8vICAgICAgICAgYWxlcnQoXCJ3cm9uZyFcIik7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9O1xuXG5cblxufSlcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xufVxuXG5cbmxldCB4ID0gMjAwO1xubGV0IHkgPSAxMDA7XG4vLyBsZXQgZHggPSAyMDA7XG5sZXQgZHkgPSAxO1xubGV0IHdvcmRzID0gW107XG5cblxuZnVuY3Rpb24gZHJhdygpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIC8vIFRpbGVzXG4gICAgaWYgKHkgPD0gNTcwKSB7IC8vIG5lZWQgdG8gdXNlIGNvbGxpc2lvbiBkZXRlY3Rpb25cbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCAzMCwgMzApO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgyMDAsIDEwMCwgMTAyMCwgNTAwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDMwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmZvbnQgPSBcIjIwcHggc2VyaWZcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dChcIktcIiwgMzA4LCB5ICsgMjIpO1xuICAgICAgICBcbiAgICAgICAgY3R4LmZpbGxSZWN0KDQwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDUwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDYwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDcwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDgwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDkwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDEwMDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCgxMTAwLCB5LCAzMCwgMzApO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgLy8gaWYgKHkgPT09IDU3MSkge1xuICAgIC8vICAgICBjdHguY2xlYXJSZWN0KDMwMCwgNTcwLCAzMCwgMzApO1xuICAgIC8vIH1cblxuICAgIHkgKz0gZHk7XG5cblxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcbn1cbiovXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXNzZWQta2V5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVzc2VkLWtleVwiKTtcbi8vICAgICBsZXQgaW5wdXRWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dCk7XG4vLyAgICAgaWYgKGUua2V5ID09PSBcImtcIikge1xuLy8gICAgICAgICBhbGVydChcImhpIVwiKTtcbi8vICAgICB9XG4vLyB9KVxuXG5cbi8vIGNvbnN0IHsgaXNJbnRlZ2VyIH0gPSByZXF1aXJlKFwiY29yZS1qcy9jb3JlL251bWJlclwiKTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgIFxuICAgIC8vIH0pXG4gICAgXG4gICAgLy8gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGZ1bmN0aW9uIGRyb3AoKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIFxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZSgpOyAgICAgIFxuICAgIC8vIG1vdmUoKTtcbiAgICBnYW1lLmZpbGxMZXR0ZXJzKCk7XG4gICAgZGVidWdnZXJcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdhbWUuYXNzaWduQ29sdW1uKCk7XG4gICAgfSwgMTAwMCk7XG4gICAgLy8gZGVidWdnZXJcbiAgICAvLyBjbGVhckludGVydmFsKGdhbWUuZHJvcCwgMjAwMCk7XG4gICAgc2V0SW50ZXJ2YWwoZ2FtZS5kcm9wLCAxMDAwKTtcbiAgICAvLyBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIGdhbWUuZHJvcCgpO1xuICAgIC8vIH0sIDEwMDApO1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgLy8gZ2FtZS5kcm9wKCk7XG4gICAgXG59KVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgbGV0IHdvcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3Jkc1wiKTtcbiAgICAvLyBsZXQgbXVzaWMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkFcIiwgXCJCXCIsIFwiQ1wiXTtcbiAgICBsZXQgc3ludGggPSBuZXcgVG9uZS5TeW50aCgpLy8udG9EZXN0aW5hdGlvbigpO1xuICAgIHN5bnRoLm9zY2lsbGF0b3IudHlwZSA9IFwic2luZVwiO1xuICAgIHN5bnRoLnRvTWFzdGVyKCk7XG5cbiAgICAvLyBsZXQgYXJyID0gW1wiaFwiLCBcImpcIiwgXCJrXCJdXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5jaGlsZEVsZW1lbnRDb3VudDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gd29yZHMuY2hpbGRyZW5bMF0uaWQpIHtcbiAgICAgICAgICAgIC8vIGFsZXJ0KFwiaGkhXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZSh3b3Jkcy5jaGlsZHJlblswXS5jbGFzc05hbWUgKyBcIjRcIiwgXCIxNm5cIik7XG4gICAgICAgICAgICB3b3Jkcy5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcblxuICAgICAgICAgICAgLy8gbXVzaWMuc2hpZnQoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAoZS5rZXkgPT09IFwibFwiKSB7XG4gICAgICAgIC8vICAgICBhbGVydChcIndyb25nIVwiKTtcbiAgICAgICAgfVxuICAgIC8vIH1cbn0pXG5cbi8vIGZ1bmN0aW9uIG1vdmUoKSB7XG4vLyAgICAgbGV0IGsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImtcIik7XG4vLyAgICAgbGV0IHkgPSAwO1xuLy8gICAgIGxldCBpZCA9IHNldEludGVydmFsKGRvd24sIDMwKTtcbi8vICAgICBmdW5jdGlvbiBkb3duKCkge1xuLy8gICAgICAgICBpZiAoeSA+PSA0MDApIHtcbi8vICAgICAgICAgICAgIGsucmVtb3ZlKCk7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICB5Kys7XG4vLyAgICAgICAgICAgICBrLnN0eWxlLnRvcCA9IHkgKyBcInB4XCI7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gbGV0IG11c2ljID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIl07XG4gICAgLy8gbGV0IHN5bnRoID0gbmV3IFRvbmUuU3ludGgoKS8vLnRvRGVzdGluYXRpb24oKTtcbiAgICAvLyBzeW50aC5vc2NpbGxhdG9yLnR5cGUgPSBcInNpbmVcIjtcbiAgICAvLyBzeW50aC50b0Rlc3RpbmF0aW9uKCk7XG5cbiAgICAvLyBsZXQgd29yZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmRzXCIpO1xuXG4gICAgLy8gbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVzc2VkLWtleVwiKTtcblxuICAgIC8vIHN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKG11c2ljWzBdICsgXCI0XCIsIFwiMTZuXCIpO1xuICAgIC8vIG11c2ljLnNoaWZ0KCk7XG5cbiAgICAvLyBpbnB1dC5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBpZiAoaW5wdXQudmFsdWVbaW5wdXQudmFsdWUubGVuZ3RoIC0gMV0gPT09IGUua2V5KSB7XG4gICAgLy8gICAgICAgICBsZXQga2V5ID0gbXVzaWMuc2hpZnQoKTtcbiAgICAvLyAgICAgICAgIHJldHVybiBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShrZXkgKyBcIjRcIiwgXCIxNm5cIik7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyBpZiAoZS5rZXkgPT09IGlucHV0LnZhbHVlW2lucHV0LnZhbHVlLmxlbmd0aCAtIDFdKSB7XG4gICAgLy8gICAgIGxldCBrZXkgPSBtdXNpYy5zaGlmdCgpO1xuICAgIC8vICAgICByZXR1cm4gc3ludGgudHJpZ2dlckF0dGFja1JlbGVhc2Uoa2V5ICsgXCI0XCIsIFwiMTZuXCIpO1xuICAgIC8vIH1cbiAgICAvLyBsZXQgbXVzaWMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkFcIiwgXCJCXCIsIFwiQ1wiXTtcblxuXG4gICAgLy8gd2hpbGUgKG11c2ljLmxlbmd0aCA+PSAwKSB7XG4gICAgLy8gc3dpdGNoIChlLmtleSA9PT0gaW5wdXQudmFsdWUpIHtcbiAgICAgICAgXG4gICAgLy8gICAgIGNhc2Ugd29yZHMuY2hpbGRyZW5bMF0uaWQ6XG4gICAgLy8gICAgICAgICBkZWJ1Z2dlclxuICAgIC8vICAgICAgICAgc3ludGgudHJpZ2dlckF0dGFja1JlbGVhc2UobXVzaWNbMF0gKyBcIjRcIiwgXCIxNm5cIik7IFxuICAgIC8vICAgICAgICAgbXVzaWMuc2hpZnQoKVxuICAgIC8vICAgICAgICAgZGVidWdnZXJcbiAgICAvLyAgICAgICAgIGJyZWFrO1xuXG4gICAgLy8gICAgIGNhc2UgZmFsc2U6XG4gICAgLy8gICAgICAgICBkZWJ1Z2dlclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBjYXNlIFwialwiOlxuICAgICAgICAvLyAgICAgZGVidWdnZXJcbiAgICAgICAgLy8gICAgIHJldHVybiBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShtdXNpY1sxXSArIFwiNFwiLCBcIjE2blwiKTtcbiAgICAgICAgLy8gY2FzZSBcImhcIjpcbiAgICAgICAgLy8gICAgIHJldHVybiBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShtdXNpY1syXSArIFwiNFwiLCBcIjE2blwiKTtcbiAgICAgICAgLy8gY2FzZSBcImxcIjpcbiAgICAgICAgLy8gICAgIHJldHVybiBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShtdXNpY1szXSArIFwiNFwiLCBcIjE2blwiKTtcbiAgICAgICAgLy8gY2FzZSBcImdcIjpcbiAgICAgICAgLy8gICAgIHJldHVybiBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShtdXNpY1s0XSArIFwiNFwiLCBcIjE2blwiKTtcbiAgICAvLyAgICAgZGVmYXVsdDpcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyB9XG4vLyB9XG4gICAgXG4vLyB9KVxuXG5cblxuLy8gSW5kZXguanMgPiBuZXdHYW1lLnN0YXJ0KCkgPiBnYW1lX3ZpZXcuanMgPiBzdGFydCgpID4gc3RlcCA+IGdhbWUuanMgPiBtb3ZlT2JqZWN0cygpICsgY2hlY2tDb2xsaXNvbnMoKVxuXG4iXSwibmFtZXMiOlsiR2FtZSIsInJlcXVpcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnYW1lIiwiZmlsbExldHRlcnMiLCJzZXRJbnRlcnZhbCIsImFzc2lnbkNvbHVtbiIsImRyb3AiLCJlIiwid29yZHMiLCJnZXRFbGVtZW50QnlJZCIsInN5bnRoIiwiVG9uZSIsIlN5bnRoIiwib3NjaWxsYXRvciIsInR5cGUiLCJ0b01hc3RlciIsImtleSIsImNoaWxkcmVuIiwiaWQiLCJ0cmlnZ2VyQXR0YWNrUmVsZWFzZSIsImNsYXNzTmFtZSIsImZpcnN0RWxlbWVudENoaWxkIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module) {

eval("function Game() {\n  this.letters = [];\n  this.pianoKeys = [];\n} // Game.prototype.dropAll = function () {\n//     let words = document.getElementById(\"words\");\n//     for (let i = 0; i < words.childElementCount; i++) {\n//         words.children[i].drop();\n//     }\n// }\n\n\nGame.prototype.drop = function () {\n  // console.log(\"hello\")\n  var words = document.getElementById(\"words\");\n  var lastEle = words.children[words.childElementCount - 1]; // let firstEle = words.children[0]\n  // for (let i = 0; i < words.childElementCount; i++) {\n\n  var y = 0;\n  var id = setInterval(down, 30);\n\n  function down() {\n    if (y >= 400) {// .remove();\n    }\n\n    y++;\n    lastEle.style.top = y + \"px\";\n  } // }\n\n};\n\nGame.prototype.fillLetters = function () {\n  this.letters = [\"a\", \"s\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\"];\n  this.pianoKeys = [\"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\", \"D\"];\n};\n\nGame.prototype.assignColumn = function () {\n  // this.letters = [\"a\", \"s\", \"d\", \"f\"];\n  // this.pianoKeys = [\"A\", \"B\", \"C\", \"D\"];\n  // let that = Game.letters.bind(this);\n  // let that = ;\n  // debugger\n  var letter = this.letters.shift(); // debugger\n\n  var pianoKey = this.pianoKeys.shift(); // let id = setInterval(assign, 5000);\n  // for (let i = 0; i < this.letters.length; i++) {\n\n  var subEle = document.createElement(\"span\");\n  subEle.setAttribute(\"id\", letter);\n  subEle.setAttribute(\"class\", pianoKey);\n  var node = document.createTextNode(letter);\n  subEle.appendChild(node);\n  subEle.style.left = Math.random() * (950 - 100 + 1) + 100 + \"px\";\n  var element = document.getElementById(\"words\");\n  element.appendChild(subEle); // }\n};\n\nmodule.exports = Game; // function move() {\n//     let k = document.getElementById(\"k\");\n//     let y = 0;\n//     let id = setInterval(down, 30);\n//     function down() {\n//         if (y >= 400) {\n//             k.remove();\n//         } else {\n//             y++;\n//             k.style.top = y + \"px\";\n//         }\n//     }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU1Byb2plY3QvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwibmFtZXMiOlsiR2FtZSIsImxldHRlcnMiLCJwaWFub0tleXMiLCJwcm90b3R5cGUiLCJkcm9wIiwid29yZHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibGFzdEVsZSIsImNoaWxkcmVuIiwiY2hpbGRFbGVtZW50Q291bnQiLCJ5IiwiaWQiLCJzZXRJbnRlcnZhbCIsImRvd24iLCJzdHlsZSIsInRvcCIsImZpbGxMZXR0ZXJzIiwiYXNzaWduQ29sdW1uIiwibGV0dGVyIiwic2hpZnQiLCJwaWFub0tleSIsInN1YkVsZSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJub2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImxlZnQiLCJNYXRoIiwicmFuZG9tIiwiZWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLElBQVQsR0FBaUI7QUFDYixPQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFFSCxDLENBRUQ7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBOzs7QUFFQUYsSUFBSSxDQUFDRyxTQUFMLENBQWVDLElBQWYsR0FBc0IsWUFBWTtBQUM5QjtBQUNBLE1BQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxNQUFJQyxPQUFPLEdBQUdILEtBQUssQ0FBQ0ksUUFBTixDQUFlSixLQUFLLENBQUNLLGlCQUFOLEdBQTBCLENBQXpDLENBQWQsQ0FIOEIsQ0FLOUI7QUFDQTs7QUFDSSxNQUFJQyxDQUFDLEdBQUcsQ0FBUjtBQUNBLE1BQUlDLEVBQUUsR0FBR0MsV0FBVyxDQUFDQyxJQUFELEVBQU8sRUFBUCxDQUFwQjs7QUFFQSxXQUFTQSxJQUFULEdBQWdCO0FBQ1osUUFBSUgsQ0FBQyxJQUFJLEdBQVQsRUFBYyxDQUNWO0FBQ0g7O0FBQ0RBLElBQUFBLENBQUM7QUFDREgsSUFBQUEsT0FBTyxDQUFDTyxLQUFSLENBQWNDLEdBQWQsR0FBb0JMLENBQUMsR0FBRyxJQUF4QjtBQUVILEdBakJ5QixDQWtCOUI7O0FBR0gsQ0FyQkQ7O0FBdUJBWCxJQUFJLENBQUNHLFNBQUwsQ0FBZWMsV0FBZixHQUE2QixZQUFZO0FBQ3JDLE9BQUtoQixPQUFMLEdBQWUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsQ0FBZjtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsQ0FBakI7QUFDSCxDQUhEOztBQUtBRixJQUFJLENBQUNHLFNBQUwsQ0FBZWUsWUFBZixHQUE4QixZQUFZO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxNQUFJQyxNQUFNLEdBQUcsS0FBS2xCLE9BQUwsQ0FBYW1CLEtBQWIsRUFBYixDQVBzQyxDQVF0Qzs7QUFDQSxNQUFJQyxRQUFRLEdBQUcsS0FBS25CLFNBQUwsQ0FBZWtCLEtBQWYsRUFBZixDQVRzQyxDQVV0QztBQUVBOztBQUNJLE1BQUlFLE1BQU0sR0FBR2hCLFFBQVEsQ0FBQ2lCLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLFlBQVAsQ0FBb0IsSUFBcEIsRUFBMEJMLE1BQTFCO0FBQ0FHLEVBQUFBLE1BQU0sQ0FBQ0UsWUFBUCxDQUFvQixPQUFwQixFQUE2QkgsUUFBN0I7QUFDQSxNQUFJSSxJQUFJLEdBQUduQixRQUFRLENBQUNvQixjQUFULENBQXdCUCxNQUF4QixDQUFYO0FBQ0FHLEVBQUFBLE1BQU0sQ0FBQ0ssV0FBUCxDQUFtQkYsSUFBbkI7QUFDQUgsRUFBQUEsTUFBTSxDQUFDUCxLQUFQLENBQWFhLElBQWIsR0FBcUJDLElBQUksQ0FBQ0MsTUFBTCxNQUFpQixNQUFNLEdBQU4sR0FBWSxDQUE3QixJQUFrQyxHQUFuQyxHQUEwQyxJQUE5RDtBQUNBLE1BQUlDLE9BQU8sR0FBR3pCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFkO0FBQ0F3QixFQUFBQSxPQUFPLENBQUNKLFdBQVIsQ0FBb0JMLE1BQXBCLEVBcEJrQyxDQXFCdEM7QUFDSCxDQXRCRDs7QUEwQkFVLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpDLElBQWpCLEMsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEdhbWUgKCkge1xuICAgIHRoaXMubGV0dGVycyA9IFtdO1xuICAgIHRoaXMucGlhbm9LZXlzID0gW107XG5cbn1cblxuLy8gR2FtZS5wcm90b3R5cGUuZHJvcEFsbCA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICBsZXQgd29yZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmRzXCIpO1xuXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5jaGlsZEVsZW1lbnRDb3VudDsgaSsrKSB7XG4vLyAgICAgICAgIHdvcmRzLmNoaWxkcmVuW2ldLmRyb3AoKTtcbi8vICAgICB9XG5cbiAgICBcbi8vIH1cblxuR2FtZS5wcm90b3R5cGUuZHJvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImhlbGxvXCIpXG4gICAgbGV0IHdvcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3Jkc1wiKTtcbiAgICBsZXQgbGFzdEVsZSA9IHdvcmRzLmNoaWxkcmVuW3dvcmRzLmNoaWxkRWxlbWVudENvdW50IC0gMV07XG5cbiAgICAvLyBsZXQgZmlyc3RFbGUgPSB3b3Jkcy5jaGlsZHJlblswXVxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMuY2hpbGRFbGVtZW50Q291bnQ7IGkrKykge1xuICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgIGxldCBpZCA9IHNldEludGVydmFsKGRvd24sIDMwKTtcblxuICAgICAgICBmdW5jdGlvbiBkb3duKCkge1xuICAgICAgICAgICAgaWYgKHkgPj0gNDAwKSB7XG4gICAgICAgICAgICAgICAgLy8gLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgIGxhc3RFbGUuc3R5bGUudG9wID0geSArIFwicHhcIjtcblxuICAgICAgICB9XG4gICAgLy8gfVxuXG5cbn1cblxuR2FtZS5wcm90b3R5cGUuZmlsbExldHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5sZXR0ZXJzID0gW1wiYVwiLCBcInNcIiwgXCJkXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwialwiLCBcImtcIl07XG4gICAgdGhpcy5waWFub0tleXMgPSBbXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiXTtcbn1cblxuR2FtZS5wcm90b3R5cGUuYXNzaWduQ29sdW1uID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIHRoaXMubGV0dGVycyA9IFtcImFcIiwgXCJzXCIsIFwiZFwiLCBcImZcIl07XG4gICAgLy8gdGhpcy5waWFub0tleXMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCJdO1xuICAgIC8vIGxldCB0aGF0ID0gR2FtZS5sZXR0ZXJzLmJpbmQodGhpcyk7XG4gICAgLy8gbGV0IHRoYXQgPSA7XG5cbiAgICAvLyBkZWJ1Z2dlclxuICAgIGxldCBsZXR0ZXIgPSB0aGlzLmxldHRlcnMuc2hpZnQoKTtcbiAgICAvLyBkZWJ1Z2dlclxuICAgIGxldCBwaWFub0tleSA9IHRoaXMucGlhbm9LZXlzLnNoaWZ0KCk7XG4gICAgLy8gbGV0IGlkID0gc2V0SW50ZXJ2YWwoYXNzaWduLCA1MDAwKTtcblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzdWJFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3ViRWxlLnNldEF0dHJpYnV0ZShcImlkXCIsIGxldHRlcik7XG4gICAgICAgIHN1YkVsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBwaWFub0tleSk7XG4gICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGV0dGVyKTtcbiAgICAgICAgc3ViRWxlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICBzdWJFbGUuc3R5bGUubGVmdCA9IChNYXRoLnJhbmRvbSgpICogKDk1MCAtIDEwMCArIDEpICsgMTAwKSArIFwicHhcIjtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmRzXCIpO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHN1YkVsZSk7XG4gICAgLy8gfVxufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lO1xuXG4vLyBmdW5jdGlvbiBtb3ZlKCkge1xuLy8gICAgIGxldCBrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrXCIpO1xuLy8gICAgIGxldCB5ID0gMDtcbi8vICAgICBsZXQgaWQgPSBzZXRJbnRlcnZhbChkb3duLCAzMCk7XG4vLyAgICAgZnVuY3Rpb24gZG93bigpIHtcbi8vICAgICAgICAgaWYgKHkgPj0gNDAwKSB7XG4vLyAgICAgICAgICAgICBrLnJlbW92ZSgpO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgeSsrO1xuLy8gICAgICAgICAgICAgay5zdHlsZS50b3AgPSB5ICsgXCJweFwiO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfSJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU1Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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