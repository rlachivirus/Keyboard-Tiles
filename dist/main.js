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

eval("// import * as Tone from \"tone\";\n// import \"./styles/index\";\n// import \"./scripts/keys.js\";\n// import \"./scripts/letters.js\";\nvar Game = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/*document.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"canvas\");\n    canvas.width = 1500;\n    canvas.height = 1500;\n    const ctx = canvas.getContext(\"2d\");\n    ctx.strokeStyle = \"red\";\n    ctx.lineWidth = 5;\n    ctx.strokeRect(200, 100, 1020, 500);\n    \n    ctx.strokeStyle = \"black\";\n    ctx.strokeRect(200, 650, 1020, 100);\n    \n    // let tiles = setInterval(init, 1000);\n    init();\n    // let input = document.getElementById(\"pressed-key\");\n    // input.oninput = function () {\n    //     if (input.value === \"k\") {\n    //         alert(\"hi!\");\n    //     }\n    //     if (input.value === \"l\") {\n    //         alert(\"wrong!\");\n    //     }\n    // };\n\n\n\n})\n\nfunction init() {\n    window.requestAnimationFrame(draw);\n}\n\n\nlet x = 200;\nlet y = 100;\n// let dx = 200;\nlet dy = 1;\nlet words = [];\n\n\nfunction draw() {\n    const canvas = document.getElementById(\"canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    \n    // Tiles\n    if (y <= 570) { // need to use collision detection\n        ctx.clearRect(0, 0, 30, 30);\n        ctx.beginPath();\n        ctx.fillStyle = \"black\";\n        ctx.fillRect(200, 100, 1020, 500);\n        ctx.fillStyle = \"white\";\n        ctx.fillRect(300, y, 30, 30);\n        ctx.font = \"20px serif\";\n        ctx.fillStyle = \"red\";\n        ctx.fillText(\"K\", 308, y + 22);\n        \n        ctx.fillRect(400, y, 30, 30);\n        ctx.fillRect(500, y, 30, 30);\n        ctx.fillRect(600, y, 30, 30);\n        ctx.fillRect(700, y, 30, 30);\n        ctx.fillRect(800, y, 30, 30);\n        ctx.fillRect(900, y, 30, 30);\n        ctx.fillRect(1000, y, 30, 30);\n        ctx.fillRect(1100, y, 30, 30);\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    // if (y === 571) {\n    //     ctx.clearRect(300, 570, 30, 30);\n    // }\n\n    y += dy;\n\n\n\n    window.requestAnimationFrame(draw);\n}\n*/\n// document.getElementById(\"pressed-key\").addEventListener(\"keydown\", function (e) {\n//     let input = document.getElementById(\"pressed-key\");\n//     let inputVal = document.getElementById(input);\n//     if (e.key === \"k\") {\n//         alert(\"hi!\");\n//     }\n// })\n// const { isInteger } = require(\"core-js/core/number\");\n// document.addEventListener(\"DOMContentLoader\", function () {\n// })\n// function init() {\n// }\n// function drop() {\n// }\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var game = new Game();\n  game.gameStart(); // game.fillLetters();\n  // debugger\n  // let assign = setInterval(function () {\n  //     game.assignColumn();\n  // }, 1000);\n  // let drop = setInterval(game.drop, 1000);\n  // game.gameClear(assign, drop);\n  // move();\n  // debugger\n  // clearInterval(game.drop, 2000);\n  // setInterval(function () {\n  //     game.drop();\n  // }, 1000);\n  // debugger\n  // game.drop();\n});\ndocument.addEventListener(\"keydown\", function (e) {\n  var words = document.getElementById(\"words\"); // let music = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\"];\n\n  var synth = new Tone.Synth(); //.toDestination();\n\n  synth.oscillator.type = \"sine\";\n  synth.toMaster(); // let arr = [\"h\", \"j\", \"k\"]\n  // for (let i = 0; i < words.childElementCount; i++) {\n\n  if (e.key === words.children[0].id) {\n    // alert(\"hi!\");\n    synth.triggerAttackRelease(words.children[0].className + \"4\", \"16n\");\n    words.firstElementChild.remove(); // music.shift();\n    // }\n    // if (e.key === \"l\") {\n    //     alert(\"wrong!\");\n  } // }\n\n}); // function move() {\n//     let k = document.getElementById(\"k\");\n//     let y = 0;\n//     let id = setInterval(down, 30);\n//     function down() {\n//         if (y >= 400) {\n//             k.remove();\n//         } else {\n//             y++;\n//             k.style.top = y + \"px\";\n//         }\n//     }\n// }\n// document.addEventListener(\"keydown\", function (e) {\n// let music = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\"];\n// let synth = new Tone.Synth()//.toDestination();\n// synth.oscillator.type = \"sine\";\n// synth.toDestination();\n// let words = document.getElementById(\"words\");\n// let input = document.getElementById(\"pressed-key\");\n// synth.triggerAttackRelease(music[0] + \"4\", \"16n\");\n// music.shift();\n// input.oninput = function () {\n//     if (input.value[input.value.length - 1] === e.key) {\n//         let key = music.shift();\n//         return synth.triggerAttackRelease(key + \"4\", \"16n\");\n//     }\n// }\n// if (e.key === input.value[input.value.length - 1]) {\n//     let key = music.shift();\n//     return synth.triggerAttackRelease(key + \"4\", \"16n\");\n// }\n// let music = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\"];\n// while (music.length >= 0) {\n// switch (e.key === input.value) {\n//     case words.children[0].id:\n//         debugger\n//         synth.triggerAttackRelease(music[0] + \"4\", \"16n\"); \n//         music.shift()\n//         debugger\n//         break;\n//     case false:\n//         debugger\n//         return;\n// case \"j\":\n//     debugger\n//     return synth.triggerAttackRelease(music[1] + \"4\", \"16n\");\n// case \"h\":\n//     return synth.triggerAttackRelease(music[2] + \"4\", \"16n\");\n// case \"l\":\n//     return synth.triggerAttackRelease(music[3] + \"4\", \"16n\");\n// case \"g\":\n//     return synth.triggerAttackRelease(music[4] + \"4\", \"16n\");\n//     default:\n//         return;\n// }\n// }\n// })\n// Index.js > newGame.start() > game_view.js > start() > step > game.js > moveObjects() + checkCollisons()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsNkNBQUQsQ0FBcEI7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVJO0FBRUE7QUFFSTtBQUVBO0FBRUk7OztBQUdaQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBRXRELE1BQUlDLElBQUksR0FBRyxJQUFJSixJQUFKLEVBQVg7QUFDQUksRUFBQUEsSUFBSSxDQUFDQyxTQUFMLEdBSHNELENBSXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVILENBckJEO0FBd0JBSCxRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQVVHLENBQVYsRUFBYTtBQUM5QyxNQUFJQyxLQUFLLEdBQUdMLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixPQUF4QixDQUFaLENBRDhDLENBRTlDOztBQUNBLE1BQUlDLEtBQUssR0FBRyxJQUFJQyxJQUFJLENBQUNDLEtBQVQsRUFBWixDQUg4QyxDQUdsQjs7QUFDNUJGLEVBQUFBLEtBQUssQ0FBQ0csVUFBTixDQUFpQkMsSUFBakIsR0FBd0IsTUFBeEI7QUFDQUosRUFBQUEsS0FBSyxDQUFDSyxRQUFOLEdBTDhDLENBTzlDO0FBQ0E7O0FBQ0ksTUFBSVIsQ0FBQyxDQUFDUyxHQUFGLEtBQVVSLEtBQUssQ0FBQ1MsUUFBTixDQUFlLENBQWYsRUFBa0JDLEVBQWhDLEVBQW9DO0FBQ2hDO0FBRUFSLElBQUFBLEtBQUssQ0FBQ1Msb0JBQU4sQ0FBMkJYLEtBQUssQ0FBQ1MsUUFBTixDQUFlLENBQWYsRUFBa0JHLFNBQWxCLEdBQThCLEdBQXpELEVBQThELEtBQTlEO0FBQ0FaLElBQUFBLEtBQUssQ0FBQ2EsaUJBQU4sQ0FBd0JDLE1BQXhCLEdBSmdDLENBTWhDO0FBQ0o7QUFDQTtBQUNBO0FBQ0MsR0FuQnlDLENBb0I5Qzs7QUFDSCxDQXJCRCxFLENBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSjtBQUNBO0FBQ0E7QUFDSjtBQUVBO0FBSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU1Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgKiBhcyBUb25lIGZyb20gXCJ0b25lXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlcy9pbmRleFwiO1xuLy8gaW1wb3J0IFwiLi9zY3JpcHRzL2tleXMuanNcIjtcbi8vIGltcG9ydCBcIi4vc2NyaXB0cy9sZXR0ZXJzLmpzXCI7XG5jb25zdCBHYW1lID0gcmVxdWlyZShcIi4vc2NyaXB0cy9nYW1lXCIpO1xuXG5cbi8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IDE1MDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDE1MDA7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgIGN0eC5saW5lV2lkdGggPSA1O1xuICAgIGN0eC5zdHJva2VSZWN0KDIwMCwgMTAwLCAxMDIwLCA1MDApO1xuICAgIFxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHguc3Ryb2tlUmVjdCgyMDAsIDY1MCwgMTAyMCwgMTAwKTtcbiAgICBcbiAgICAvLyBsZXQgdGlsZXMgPSBzZXRJbnRlcnZhbChpbml0LCAxMDAwKTtcbiAgICBpbml0KCk7XG4gICAgLy8gbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVzc2VkLWtleVwiKTtcbiAgICAvLyBpbnB1dC5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBpZiAoaW5wdXQudmFsdWUgPT09IFwia1wiKSB7XG4gICAgLy8gICAgICAgICBhbGVydChcImhpIVwiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAoaW5wdXQudmFsdWUgPT09IFwibFwiKSB7XG4gICAgLy8gICAgICAgICBhbGVydChcIndyb25nIVwiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH07XG5cblxuXG59KVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG59XG5cblxubGV0IHggPSAyMDA7XG5sZXQgeSA9IDEwMDtcbi8vIGxldCBkeCA9IDIwMDtcbmxldCBkeSA9IDE7XG5sZXQgd29yZHMgPSBbXTtcblxuXG5mdW5jdGlvbiBkcmF3KCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgXG4gICAgLy8gVGlsZXNcbiAgICBpZiAoeSA8PSA1NzApIHsgLy8gbmVlZCB0byB1c2UgY29sbGlzaW9uIGRldGVjdGlvblxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDMwLCAzMCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDIwMCwgMTAwLCAxMDIwLCA1MDApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMzAwLCB5LCAzMCwgMzApO1xuICAgICAgICBjdHguZm9udCA9IFwiMjBweCBzZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KFwiS1wiLCAzMDgsIHkgKyAyMik7XG4gICAgICAgIFxuICAgICAgICBjdHguZmlsbFJlY3QoNDAwLCB5LCAzMCwgMzApO1xuICAgICAgICBjdHguZmlsbFJlY3QoNTAwLCB5LCAzMCwgMzApO1xuICAgICAgICBjdHguZmlsbFJlY3QoNjAwLCB5LCAzMCwgMzApO1xuICAgICAgICBjdHguZmlsbFJlY3QoNzAwLCB5LCAzMCwgMzApO1xuICAgICAgICBjdHguZmlsbFJlY3QoODAwLCB5LCAzMCwgMzApO1xuICAgICAgICBjdHguZmlsbFJlY3QoOTAwLCB5LCAzMCwgMzApO1xuICAgICAgICBjdHguZmlsbFJlY3QoMTAwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDExMDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICAvLyBpZiAoeSA9PT0gNTcxKSB7XG4gICAgLy8gICAgIGN0eC5jbGVhclJlY3QoMzAwLCA1NzAsIDMwLCAzMCk7XG4gICAgLy8gfVxuXG4gICAgeSArPSBkeTtcblxuXG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xufVxuKi9cbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlc3NlZC1rZXlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbi8vICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXNzZWQta2V5XCIpO1xuLy8gICAgIGxldCBpbnB1dFZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0KTtcbi8vICAgICBpZiAoZS5rZXkgPT09IFwia1wiKSB7XG4vLyAgICAgICAgIGFsZXJ0KFwiaGkhXCIpO1xuLy8gICAgIH1cbi8vIH0pXG5cblxuLy8gY29uc3QgeyBpc0ludGVnZXIgfSA9IHJlcXVpcmUoXCJjb3JlLWpzL2NvcmUvbnVtYmVyXCIpO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgXG4gICAgLy8gfSlcbiAgICBcbiAgICAvLyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBcbiAgICAgICAgLy8gfVxuICAgICAgICBcbiAgICAgICAgLy8gZnVuY3Rpb24gZHJvcCgpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBcbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKCk7ICAgICAgXG4gICAgZ2FtZS5nYW1lU3RhcnQoKTtcbiAgICAvLyBnYW1lLmZpbGxMZXR0ZXJzKCk7XG4gICAgLy8gZGVidWdnZXJcbiAgICAvLyBsZXQgYXNzaWduID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBnYW1lLmFzc2lnbkNvbHVtbigpO1xuICAgIC8vIH0sIDEwMDApO1xuICAgIC8vIGxldCBkcm9wID0gc2V0SW50ZXJ2YWwoZ2FtZS5kcm9wLCAxMDAwKTtcbiAgICAvLyBnYW1lLmdhbWVDbGVhcihhc3NpZ24sIGRyb3ApO1xuXG4gICAgLy8gbW92ZSgpO1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgLy8gY2xlYXJJbnRlcnZhbChnYW1lLmRyb3AsIDIwMDApO1xuICAgIC8vIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgZ2FtZS5kcm9wKCk7XG4gICAgLy8gfSwgMTAwMCk7XG4gICAgLy8gZGVidWdnZXJcbiAgICAvLyBnYW1lLmRyb3AoKTtcbiAgICBcbn0pXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBsZXQgd29yZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmRzXCIpO1xuICAgIC8vIGxldCBtdXNpYyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiQVwiLCBcIkJcIiwgXCJDXCJdO1xuICAgIGxldCBzeW50aCA9IG5ldyBUb25lLlN5bnRoKCkvLy50b0Rlc3RpbmF0aW9uKCk7XG4gICAgc3ludGgub3NjaWxsYXRvci50eXBlID0gXCJzaW5lXCI7XG4gICAgc3ludGgudG9NYXN0ZXIoKTtcblxuICAgIC8vIGxldCBhcnIgPSBbXCJoXCIsIFwialwiLCBcImtcIl1cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmNoaWxkRWxlbWVudENvdW50OyBpKyspIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSB3b3Jkcy5jaGlsZHJlblswXS5pZCkge1xuICAgICAgICAgICAgLy8gYWxlcnQoXCJoaSFcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKHdvcmRzLmNoaWxkcmVuWzBdLmNsYXNzTmFtZSArIFwiNFwiLCBcIjE2blwiKTtcbiAgICAgICAgICAgIHdvcmRzLmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAvLyBtdXNpYy5zaGlmdCgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChlLmtleSA9PT0gXCJsXCIpIHtcbiAgICAgICAgLy8gICAgIGFsZXJ0KFwid3JvbmchXCIpO1xuICAgICAgICB9XG4gICAgLy8gfVxufSlcblxuLy8gZnVuY3Rpb24gbW92ZSgpIHtcbi8vICAgICBsZXQgayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia1wiKTtcbi8vICAgICBsZXQgeSA9IDA7XG4vLyAgICAgbGV0IGlkID0gc2V0SW50ZXJ2YWwoZG93biwgMzApO1xuLy8gICAgIGZ1bmN0aW9uIGRvd24oKSB7XG4vLyAgICAgICAgIGlmICh5ID49IDQwMCkge1xuLy8gICAgICAgICAgICAgay5yZW1vdmUoKTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIHkrKztcbi8vICAgICAgICAgICAgIGsuc3R5bGUudG9wID0geSArIFwicHhcIjtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAvLyBsZXQgbXVzaWMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkFcIiwgXCJCXCIsIFwiQ1wiXTtcbiAgICAvLyBsZXQgc3ludGggPSBuZXcgVG9uZS5TeW50aCgpLy8udG9EZXN0aW5hdGlvbigpO1xuICAgIC8vIHN5bnRoLm9zY2lsbGF0b3IudHlwZSA9IFwic2luZVwiO1xuICAgIC8vIHN5bnRoLnRvRGVzdGluYXRpb24oKTtcblxuICAgIC8vIGxldCB3b3JkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZHNcIik7XG5cbiAgICAvLyBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXNzZWQta2V5XCIpO1xuXG4gICAgLy8gc3ludGgudHJpZ2dlckF0dGFja1JlbGVhc2UobXVzaWNbMF0gKyBcIjRcIiwgXCIxNm5cIik7XG4gICAgLy8gbXVzaWMuc2hpZnQoKTtcblxuICAgIC8vIGlucHV0Lm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIGlmIChpbnB1dC52YWx1ZVtpbnB1dC52YWx1ZS5sZW5ndGggLSAxXSA9PT0gZS5rZXkpIHtcbiAgICAvLyAgICAgICAgIGxldCBrZXkgPSBtdXNpYy5zaGlmdCgpO1xuICAgIC8vICAgICAgICAgcmV0dXJuIHN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKGtleSArIFwiNFwiLCBcIjE2blwiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vIGlmIChlLmtleSA9PT0gaW5wdXQudmFsdWVbaW5wdXQudmFsdWUubGVuZ3RoIC0gMV0pIHtcbiAgICAvLyAgICAgbGV0IGtleSA9IG11c2ljLnNoaWZ0KCk7XG4gICAgLy8gICAgIHJldHVybiBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShrZXkgKyBcIjRcIiwgXCIxNm5cIik7XG4gICAgLy8gfVxuICAgIC8vIGxldCBtdXNpYyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiQVwiLCBcIkJcIiwgXCJDXCJdO1xuXG5cbiAgICAvLyB3aGlsZSAobXVzaWMubGVuZ3RoID49IDApIHtcbiAgICAvLyBzd2l0Y2ggKGUua2V5ID09PSBpbnB1dC52YWx1ZSkge1xuICAgICAgICBcbiAgICAvLyAgICAgY2FzZSB3b3Jkcy5jaGlsZHJlblswXS5pZDpcbiAgICAvLyAgICAgICAgIGRlYnVnZ2VyXG4gICAgLy8gICAgICAgICBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShtdXNpY1swXSArIFwiNFwiLCBcIjE2blwiKTsgXG4gICAgLy8gICAgICAgICBtdXNpYy5zaGlmdCgpXG4gICAgLy8gICAgICAgICBkZWJ1Z2dlclxuICAgIC8vICAgICAgICAgYnJlYWs7XG5cbiAgICAvLyAgICAgY2FzZSBmYWxzZTpcbiAgICAvLyAgICAgICAgIGRlYnVnZ2VyXG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIGNhc2UgXCJqXCI6XG4gICAgICAgIC8vICAgICBkZWJ1Z2dlclxuICAgICAgICAvLyAgICAgcmV0dXJuIHN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKG11c2ljWzFdICsgXCI0XCIsIFwiMTZuXCIpO1xuICAgICAgICAvLyBjYXNlIFwiaFwiOlxuICAgICAgICAvLyAgICAgcmV0dXJuIHN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKG11c2ljWzJdICsgXCI0XCIsIFwiMTZuXCIpO1xuICAgICAgICAvLyBjYXNlIFwibFwiOlxuICAgICAgICAvLyAgICAgcmV0dXJuIHN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKG11c2ljWzNdICsgXCI0XCIsIFwiMTZuXCIpO1xuICAgICAgICAvLyBjYXNlIFwiZ1wiOlxuICAgICAgICAvLyAgICAgcmV0dXJuIHN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKG11c2ljWzRdICsgXCI0XCIsIFwiMTZuXCIpO1xuICAgIC8vICAgICBkZWZhdWx0OlxuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vIH1cbi8vIH1cbiAgICBcbi8vIH0pXG5cblxuXG4vLyBJbmRleC5qcyA+IG5ld0dhbWUuc3RhcnQoKSA+IGdhbWVfdmlldy5qcyA+IHN0YXJ0KCkgPiBzdGVwID4gZ2FtZS5qcyA+IG1vdmVPYmplY3RzKCkgKyBjaGVja0NvbGxpc29ucygpXG5cbiJdLCJuYW1lcyI6WyJHYW1lIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdhbWUiLCJnYW1lU3RhcnQiLCJlIiwid29yZHMiLCJnZXRFbGVtZW50QnlJZCIsInN5bnRoIiwiVG9uZSIsIlN5bnRoIiwib3NjaWxsYXRvciIsInR5cGUiLCJ0b01hc3RlciIsImtleSIsImNoaWxkcmVuIiwiaWQiLCJ0cmlnZ2VyQXR0YWNrUmVsZWFzZSIsImNsYXNzTmFtZSIsImZpcnN0RWxlbWVudENoaWxkIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module) {

eval("function Game() {\n  this.letters = [];\n  this.pianoKeys = [];\n} // Game.prototype.dropAll = function () {\n//     let words = document.getElementById(\"words\");\n//     for (let i = 0; i < words.childElementCount; i++) {\n//         words.children[i].drop();\n//     }\n// }\n\n\nGame.prototype.drop = function () {\n  // console.log(\"hello\")\n  var words = document.getElementById(\"words\");\n  var lastEle = words.children[words.childElementCount - 1]; // let firstEle = words.children[0]\n  // for (let i = 0; i < words.childElementCount; i++) {\n\n  var y = 0;\n  var id = setInterval(down, 30);\n\n  function down() {\n    for (var i = 0; i < words.childElementCount; i++) {\n      if (words.children[i].style.top === \"400px\") {\n        words.children[i].remove();\n      }\n    }\n\n    y++;\n    lastEle.style.top = y + \"px\";\n  } // }\n\n\n  if (this.letters.length === 0) {\n    clearInterval(id);\n  }\n};\n\nGame.prototype.fillLetters = function () {\n  this.letters = [\"a\", \"s\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\"];\n  this.pianoKeys = [\"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\", \"D\"]; // this.letters = [\"♥\", \"♥\", \"\", \"♥\", \"♥\", \"♥\", \"♥\", \"♥\", \"♥\", \"\", \"♥\", \"♥\", \"♥\", \"♥\", \"♥\", \"♥\", \"\", \"♥\", \"♥\", \"♥\", \"♥\", \"♥\",\n  //     \"♥\", \"\", \"♥\", \"♥\", \"♥\", \"♥\", \"♥\", \"♥\", \"\", \"♥\", \"♥\", \"♥\", \"♥\", \"♥\"];\n  // this.pianoKeys = [\"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\", \"D\"];\n};\n\nGame.prototype.assignColumn = function () {\n  // this.letters = [\"a\", \"s\", \"d\", \"f\"];\n  // this.pianoKeys = [\"A\", \"B\", \"C\", \"D\"];\n  // let that = Game.letters.bind(this);\n  // let that = ;\n  // debugger\n  var letter = this.letters.shift(); // debugger\n\n  var pianoKey = this.pianoKeys.shift(); // let id = setInterval(assign, 5000);\n  // for (let i = 0; i < this.letters.length; i++) {\n\n  if (this.letters.length > 0) {\n    var subEle = document.createElement(\"span\");\n    subEle.setAttribute(\"id\", letter);\n    subEle.setAttribute(\"class\", pianoKey);\n    var node = document.createTextNode(letter);\n    subEle.appendChild(node);\n    subEle.style.left = Math.random() * (950 - 100 + 1) + 100 + \"px\";\n    var element = document.getElementById(\"words\");\n    element.appendChild(subEle);\n  } // }\n\n};\n\nGame.prototype.gameStart = function () {\n  var _this = this;\n\n  this.fillLetters(); // debugger\n\n  var assign = setInterval(function () {\n    _this.assignColumn();\n  }, 1000);\n  var dropLetter = setInterval(function () {\n    _this.drop();\n  }, 1000); // let dropLetter = setInterval(this.drop, 1000);\n\n  this.gameClear(assign, dropLetter);\n};\n\nGame.prototype.gameClear = function (assign, drop) {\n  if (this.letters.length === 0) {\n    clearInterval(assign);\n    clearInterval(drop);\n  }\n};\n\nmodule.exports = Game; // function move() {\n//     let k = document.getElementById(\"k\");\n//     let y = 0;\n//     let id = setInterval(down, 30);\n//     function down() {\n//         if (y >= 400) {\n//             k.remove();\n//         } else {\n//             y++;\n//             k.style.top = y + \"px\";\n//         }\n//     }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU1Byb2plY3QvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwibmFtZXMiOlsiR2FtZSIsImxldHRlcnMiLCJwaWFub0tleXMiLCJwcm90b3R5cGUiLCJkcm9wIiwid29yZHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibGFzdEVsZSIsImNoaWxkcmVuIiwiY2hpbGRFbGVtZW50Q291bnQiLCJ5IiwiaWQiLCJzZXRJbnRlcnZhbCIsImRvd24iLCJpIiwic3R5bGUiLCJ0b3AiLCJyZW1vdmUiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiZmlsbExldHRlcnMiLCJhc3NpZ25Db2x1bW4iLCJsZXR0ZXIiLCJzaGlmdCIsInBpYW5vS2V5Iiwic3ViRWxlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwibGVmdCIsIk1hdGgiLCJyYW5kb20iLCJlbGVtZW50IiwiZ2FtZVN0YXJ0IiwiYXNzaWduIiwiZHJvcExldHRlciIsImdhbWVDbGVhciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLElBQVQsR0FBaUI7QUFDYixPQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFFSCxDLENBRUQ7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBOzs7QUFFQUYsSUFBSSxDQUFDRyxTQUFMLENBQWVDLElBQWYsR0FBc0IsWUFBWTtBQUM5QjtBQUNBLE1BQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxNQUFJQyxPQUFPLEdBQUdILEtBQUssQ0FBQ0ksUUFBTixDQUFlSixLQUFLLENBQUNLLGlCQUFOLEdBQTBCLENBQXpDLENBQWQsQ0FIOEIsQ0FLOUI7QUFDQTs7QUFDSSxNQUFJQyxDQUFDLEdBQUcsQ0FBUjtBQUNBLE1BQUlDLEVBQUUsR0FBR0Ms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QUFJLENBQUNULElBQUw7QUFDSCxHQUYyQixFQUV6QixJQUZ5QixDQUE1QixDQVBtQyxDQVVuQzs7QUFDQSxPQUFLbUMsU0FBTCxDQUFlRixNQUFmLEVBQXVCQyxVQUF2QjtBQUNILENBWkQ7O0FBY0F0QyxJQUFJLENBQUNHLFNBQUwsQ0FBZW9DLFNBQWYsR0FBMkIsVUFBVUYsTUFBVixFQUFrQmpDLElBQWxCLEVBQXdCO0FBQy9DLE1BQUksS0FBS0gsT0FBTCxDQUFha0IsTUFBYixLQUF3QixDQUE1QixFQUErQjtBQUMzQkMsSUFBQUEsYUFBYSxDQUFDaUIsTUFBRCxDQUFiO0FBQ0FqQixJQUFBQSxhQUFhLENBQUNoQixJQUFELENBQWI7QUFDSDtBQUNKLENBTEQ7O0FBUUFvQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ6QyxJQUFqQixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBHYW1lICgpIHtcbiAgICB0aGlzLmxldHRlcnMgPSBbXTtcbiAgICB0aGlzLnBpYW5vS2V5cyA9IFtdO1xuXG59XG5cbi8vIEdhbWUucHJvdG90eXBlLmRyb3BBbGwgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgbGV0IHdvcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3Jkc1wiKTtcblxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMuY2hpbGRFbGVtZW50Q291bnQ7IGkrKykge1xuLy8gICAgICAgICB3b3Jkcy5jaGlsZHJlbltpXS5kcm9wKCk7XG4vLyAgICAgfVxuXG4gICAgXG4vLyB9XG5cbkdhbWUucHJvdG90eXBlLmRyb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgIGxldCB3b3JkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZHNcIik7XG4gICAgbGV0IGxhc3RFbGUgPSB3b3Jkcy5jaGlsZHJlblt3b3Jkcy5jaGlsZEVsZW1lbnRDb3VudCAtIDFdO1xuXG4gICAgLy8gbGV0IGZpcnN0RWxlID0gd29yZHMuY2hpbGRyZW5bMF1cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmNoaWxkRWxlbWVudENvdW50OyBpKyspIHtcbiAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICBsZXQgaWQgPSBzZXRJbnRlcnZhbChkb3duLCAzMCk7XG5cbiAgICAgICAgZnVuY3Rpb24gZG93bigpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMuY2hpbGRFbGVtZW50Q291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh3b3Jkcy5jaGlsZHJlbltpXS5zdHlsZS50b3AgPT09IFwiNDAwcHhcIikge1xuICAgICAgICAgICAgICAgICAgICB3b3Jkcy5jaGlsZHJlbltpXS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgbGFzdEVsZS5zdHlsZS50b3AgPSB5ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgLy8gfVxuICAgICAgICBpZiAodGhpcy5sZXR0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgIH1cblxufVxuXG5HYW1lLnByb3RvdHlwZS5maWxsTGV0dGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmxldHRlcnMgPSBbXCJhXCIsIFwic1wiLCBcImRcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJqXCIsIFwia1wiXTtcbiAgICB0aGlzLnBpYW5vS2V5cyA9IFtcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCJdO1xuICAgIC8vIHRoaXMubGV0dGVycyA9IFtcIuKZpVwiLCBcIuKZpVwiLCBcIlwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIlwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIlwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiLFxuICAgIC8vICAgICBcIuKZpVwiLCBcIlwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIlwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiLCBcIuKZpVwiXTtcblxuICAgIC8vIHRoaXMucGlhbm9LZXlzID0gW1wiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIl07XG59XG5cbkdhbWUucHJvdG90eXBlLmFzc2lnbkNvbHVtbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyB0aGlzLmxldHRlcnMgPSBbXCJhXCIsIFwic1wiLCBcImRcIiwgXCJmXCJdO1xuICAgIC8vIHRoaXMucGlhbm9LZXlzID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiXTtcbiAgICAvLyBsZXQgdGhhdCA9IEdhbWUubGV0dGVycy5iaW5kKHRoaXMpO1xuICAgIC8vIGxldCB0aGF0ID0gO1xuXG4gICAgLy8gZGVidWdnZXJcbiAgICBsZXQgbGV0dGVyID0gdGhpcy5sZXR0ZXJzLnNoaWZ0KCk7XG4gICAgLy8gZGVidWdnZXJcbiAgICBsZXQgcGlhbm9LZXkgPSB0aGlzLnBpYW5vS2V5cy5zaGlmdCgpO1xuICAgIC8vIGxldCBpZCA9IHNldEludGVydmFsKGFzc2lnbiwgNTAwMCk7XG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGV0dGVycy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0aGlzLmxldHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgc3ViRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHN1YkVsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBsZXR0ZXIpO1xuICAgICAgICBzdWJFbGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgcGlhbm9LZXkpO1xuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxldHRlcik7XG4gICAgICAgIHN1YkVsZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgc3ViRWxlLnN0eWxlLmxlZnQgPSAoTWF0aC5yYW5kb20oKSAqICg5NTAgLSAxMDAgKyAxKSArIDEwMCkgKyBcInB4XCI7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3Jkc1wiKTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzdWJFbGUpO1xuICAgIH1cbiAgICAvLyB9XG59XG5cbkdhbWUucHJvdG90eXBlLmdhbWVTdGFydCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHRoaXMuZmlsbExldHRlcnMoKTtcbiAgICAvLyBkZWJ1Z2dlclxuICAgIGxldCBhc3NpZ24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXNzaWduQ29sdW1uKCk7XG4gICAgfSwgMTAwMCk7XG4gICAgbGV0IGRyb3BMZXR0ZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZHJvcCgpO1xuICAgIH0sIDEwMDApO1xuICAgIC8vIGxldCBkcm9wTGV0dGVyID0gc2V0SW50ZXJ2YWwodGhpcy5kcm9wLCAxMDAwKTtcbiAgICB0aGlzLmdhbWVDbGVhcihhc3NpZ24sIGRyb3BMZXR0ZXIpO1xufVxuXG5HYW1lLnByb3RvdHlwZS5nYW1lQ2xlYXIgPSBmdW5jdGlvbiAoYXNzaWduLCBkcm9wKSB7XG4gICAgaWYgKHRoaXMubGV0dGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChhc3NpZ24pO1xuICAgICAgICBjbGVhckludGVydmFsKGRyb3ApO1xuICAgIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG5cbi8vIGZ1bmN0aW9uIG1vdmUoKSB7XG4vLyAgICAgbGV0IGsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImtcIik7XG4vLyAgICAgbGV0IHkgPSAwO1xuLy8gICAgIGxldCBpZCA9IHNldEludGVydmFsKGRvd24sIDMwKTtcbi8vICAgICBmdW5jdGlvbiBkb3duKCkge1xuLy8gICAgICAgICBpZiAoeSA+PSA0MDApIHtcbi8vICAgICAgICAgICAgIGsucmVtb3ZlKCk7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICB5Kys7XG4vLyAgICAgICAgICAgICBrLnN0eWxlLnRvcCA9IHkgKyBcInB4XCI7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9Il0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL2dhbWUuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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