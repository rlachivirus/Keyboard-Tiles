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

eval("// import * as Tone from \"tone\";\n// import \"./styles/index\";\n// import \"./scripts/keys.js\";\n// import \"./scripts/letters.js\";\nvar Game = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/*document.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"canvas\");\n    canvas.width = 1500;\n    canvas.height = 1500;\n    const ctx = canvas.getContext(\"2d\");\n    ctx.strokeStyle = \"red\";\n    ctx.lineWidth = 5;\n    ctx.strokeRect(200, 100, 1020, 500);\n    \n    ctx.strokeStyle = \"black\";\n    ctx.strokeRect(200, 650, 1020, 100);\n    \n    // let tiles = setInterval(init, 1000);\n    init();\n    // let input = document.getElementById(\"pressed-key\");\n    // input.oninput = function () {\n    //     if (input.value === \"k\") {\n    //         alert(\"hi!\");\n    //     }\n    //     if (input.value === \"l\") {\n    //         alert(\"wrong!\");\n    //     }\n    // };\n\n\n\n})\n\nfunction init() {\n    window.requestAnimationFrame(draw);\n}\n\n\nlet x = 200;\nlet y = 100;\n// let dx = 200;\nlet dy = 1;\nlet words = [];\n\n\nfunction draw() {\n    const canvas = document.getElementById(\"canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    \n    // Tiles\n    if (y <= 570) { // need to use collision detection\n        ctx.clearRect(0, 0, 30, 30);\n        ctx.beginPath();\n        ctx.fillStyle = \"black\";\n        ctx.fillRect(200, 100, 1020, 500);\n        ctx.fillStyle = \"white\";\n        ctx.fillRect(300, y, 30, 30);\n        ctx.font = \"20px serif\";\n        ctx.fillStyle = \"red\";\n        ctx.fillText(\"K\", 308, y + 22);\n        \n        ctx.fillRect(400, y, 30, 30);\n        ctx.fillRect(500, y, 30, 30);\n        ctx.fillRect(600, y, 30, 30);\n        ctx.fillRect(700, y, 30, 30);\n        ctx.fillRect(800, y, 30, 30);\n        ctx.fillRect(900, y, 30, 30);\n        ctx.fillRect(1000, y, 30, 30);\n        ctx.fillRect(1100, y, 30, 30);\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    // if (y === 571) {\n    //     ctx.clearRect(300, 570, 30, 30);\n    // }\n\n    y += dy;\n\n\n\n    window.requestAnimationFrame(draw);\n}\n*/\n// document.getElementById(\"pressed-key\").addEventListener(\"keydown\", function (e) {\n//     let input = document.getElementById(\"pressed-key\");\n//     let inputVal = document.getElementById(input);\n//     if (e.key === \"k\") {\n//         alert(\"hi!\");\n//     }\n// })\n// const { isInteger } = require(\"core-js/core/number\");\n// document.addEventListener(\"DOMContentLoader\", function () {\n// })\n// function init() {\n// }\n// function drop() {\n// }\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var game = new Game();\n  document.getElementById(\"pressed-key\").addEventListener(\"click\", function () {\n    game.gameStart();\n  }); // game.fillLetters();\n  // debugger\n  // let assign = setInterval(function () {\n  //     game.assignColumn();\n  // }, 1000);\n  // let drop = setInterval(game.drop, 1000);\n  // game.gameClear(assign, drop);\n  // move();\n  // debugger\n  // clearInterval(game.drop, 2000);\n  // setInterval(function () {\n  //     game.drop();\n  // }, 1000);\n  // debugger\n  // game.drop();\n});\ndocument.addEventListener(\"keydown\", function (e) {\n  var words = document.getElementById(\"words\"); // let music = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\"];\n\n  var synth = new Tone.Synth(); //.toDestination();\n\n  synth.oscillator.type = \"sine\";\n  synth.toMaster(); // let arr = [\"h\", \"j\", \"k\"]\n  // for (let i = 0; i < words.childElementCount; i++) {\n\n  if (e.key === words.children[0].id) {\n    // alert(\"hi!\");\n    synth.triggerAttackRelease(words.children[0].className + \"5\", \"6n\");\n    words.firstElementChild.remove(); // music.shift();\n    // }\n    // if (e.key === \"l\") {\n    //     alert(\"wrong!\");\n  } // }\n\n}); // function move() {\n//     let k = document.getElementById(\"k\");\n//     let y = 0;\n//     let id = setInterval(down, 30);\n//     function down() {\n//         if (y >= 400) {\n//             k.remove();\n//         } else {\n//             y++;\n//             k.style.top = y + \"px\";\n//         }\n//     }\n// }\n// document.addEventListener(\"keydown\", function (e) {\n// let music = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\"];\n// let synth = new Tone.Synth()//.toDestination();\n// synth.oscillator.type = \"sine\";\n// synth.toDestination();\n// let words = document.getElementById(\"words\");\n// let input = document.getElementById(\"pressed-key\");\n// synth.triggerAttackRelease(music[0] + \"4\", \"16n\");\n// music.shift();\n// input.oninput = function () {\n//     if (input.value[input.value.length - 1] === e.key) {\n//         let key = music.shift();\n//         return synth.triggerAttackRelease(key + \"4\", \"16n\");\n//     }\n// }\n// if (e.key === input.value[input.value.length - 1]) {\n//     let key = music.shift();\n//     return synth.triggerAttackRelease(key + \"4\", \"16n\");\n// }\n// let music = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\"];\n// while (music.length >= 0) {\n// switch (e.key === input.value) {\n//     case words.children[0].id:\n//         debugger\n//         synth.triggerAttackRelease(music[0] + \"4\", \"16n\"); \n//         music.shift()\n//         debugger\n//         break;\n//     case false:\n//         debugger\n//         return;\n// case \"j\":\n//     debugger\n//     return synth.triggerAttackRelease(music[1] + \"4\", \"16n\");\n// case \"h\":\n//     return synth.triggerAttackRelease(music[2] + \"4\", \"16n\");\n// case \"l\":\n//     return synth.triggerAttackRelease(music[3] + \"4\", \"16n\");\n// case \"g\":\n//     return synth.triggerAttackRelease(music[4] + \"4\", \"16n\");\n//     default:\n//         return;\n// }\n// }\n// })\n// Index.js > newGame.start() > game_view.js > start() > step > game.js > moveObjects() + checkCollisons()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAqIGFzIFRvbmUgZnJvbSBcInRvbmVcIjtcbi8vIGltcG9ydCBcIi4vc3R5bGVzL2luZGV4XCI7XG4vLyBpbXBvcnQgXCIuL3NjcmlwdHMva2V5cy5qc1wiO1xuLy8gaW1wb3J0IFwiLi9zY3JpcHRzL2xldHRlcnMuanNcIjtcbmNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2dhbWVcIik7XG5cblxuLypkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLndpZHRoID0gMTUwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gMTUwMDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgY3R4LnN0cm9rZVJlY3QoMjAwLCAxMDAsIDEwMjAsIDUwMCk7XG4gICAgXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5zdHJva2VSZWN0KDIwMCwgNjUwLCAxMDIwLCAxMDApO1xuICAgIFxuICAgIC8vIGxldCB0aWxlcyA9IHNldEludGVydmFsKGluaXQsIDEwMDApO1xuICAgIGluaXQoKTtcbiAgICAvLyBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXNzZWQta2V5XCIpO1xuICAgIC8vIGlucHV0Lm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gXCJrXCIpIHtcbiAgICAvLyAgICAgICAgIGFsZXJ0KFwiaGkhXCIpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gXCJsXCIpIHtcbiAgICAvLyAgICAgICAgIGFsZXJ0KFwid3JvbmchXCIpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfTtcblxuXG5cbn0pXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcbn1cblxuXG5sZXQgeCA9IDIwMDtcbmxldCB5ID0gMTAwO1xuLy8gbGV0IGR4ID0gMjAwO1xubGV0IGR5ID0gMTtcbmxldCB3b3JkcyA9IFtdO1xuXG5cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICAvLyBUaWxlc1xuICAgIGlmICh5IDw9IDU3MCkgeyAvLyBuZWVkIHRvIHVzZSBjb2xsaXNpb24gZGV0ZWN0aW9uXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMjAwLCAxMDAsIDEwMjAsIDUwMCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgzMDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5mb250ID0gXCIyMHB4IHNlcmlmXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguZmlsbFRleHQoXCJLXCIsIDMwOCwgeSArIDIyKTtcbiAgICAgICAgXG4gICAgICAgIGN0eC5maWxsUmVjdCg0MDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCg1MDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCg2MDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCg3MDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCg4MDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCg5MDAsIHksIDMwLCAzMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCgxMDAwLCB5LCAzMCwgMzApO1xuICAgICAgICBjdHguZmlsbFJlY3QoMTEwMCwgeSwgMzAsIDMwKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIC8vIGlmICh5ID09PSA1NzEpIHtcbiAgICAvLyAgICAgY3R4LmNsZWFyUmVjdCgzMDAsIDU3MCwgMzAsIDMwKTtcbiAgICAvLyB9XG5cbiAgICB5ICs9IGR5O1xuXG5cblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG59XG4qL1xuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVzc2VkLWtleVwiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuLy8gICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlc3NlZC1rZXlcIik7XG4vLyAgICAgbGV0IGlucHV0VmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXQpO1xuLy8gICAgIGlmIChlLmtleSA9PT0gXCJrXCIpIHtcbi8vICAgICAgICAgYWxlcnQoXCJoaSFcIik7XG4vLyAgICAgfVxuLy8gfSlcblxuXG4vLyBjb25zdCB7IGlzSW50ZWdlciB9ID0gcmVxdWlyZShcImNvcmUtanMvY29yZS9udW1iZXJcIik7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBcbiAgICAvLyB9KVxuICAgIFxuICAgIC8vIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIFxuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgICAgICAvLyBmdW5jdGlvbiBkcm9wKCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIFxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoKTsgICAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXNzZWQta2V5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7Z2FtZS5nYW1lU3RhcnQoKX0pO1xuICAgIC8vIGdhbWUuZmlsbExldHRlcnMoKTtcbiAgICAvLyBkZWJ1Z2dlclxuICAgIC8vIGxldCBhc3NpZ24gPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIGdhbWUuYXNzaWduQ29sdW1uKCk7XG4gICAgLy8gfSwgMTAwMCk7XG4gICAgLy8gbGV0IGRyb3AgPSBzZXRJbnRlcnZhbChnYW1lLmRyb3AsIDEwMDApO1xuICAgIC8vIGdhbWUuZ2FtZUNsZWFyKGFzc2lnbiwgZHJvcCk7XG5cbiAgICAvLyBtb3ZlKCk7XG4gICAgLy8gZGVidWdnZXJcbiAgICAvLyBjbGVhckludGVydmFsKGdhbWUuZHJvcCwgMjAwMCk7XG4gICAgLy8gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBnYW1lLmRyb3AoKTtcbiAgICAvLyB9LCAxMDAwKTtcbiAgICAvLyBkZWJ1Z2dlclxuICAgIC8vIGdhbWUuZHJvcCgpO1xuICAgIFxufSlcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGxldCB3b3JkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZHNcIik7XG4gICAgLy8gbGV0IG11c2ljID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIl07XG4gICAgbGV0IHN5bnRoID0gbmV3IFRvbmUuU3ludGgoKS8vLnRvRGVzdGluYXRpb24oKTtcbiAgICBzeW50aC5vc2NpbGxhdG9yLnR5cGUgPSBcInNpbmVcIjtcbiAgICBzeW50aC50b01hc3RlcigpO1xuXG4gICAgLy8gbGV0IGFyciA9IFtcImhcIiwgXCJqXCIsIFwia1wiXVxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMuY2hpbGRFbGVtZW50Q291bnQ7IGkrKykge1xuICAgICAgICBpZiAoZS5rZXkgPT09IHdvcmRzLmNoaWxkcmVuWzBdLmlkKSB7XG4gICAgICAgICAgICAvLyBhbGVydChcImhpIVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3ludGgudHJpZ2dlckF0dGFja1JlbGVhc2Uod29yZHMuY2hpbGRyZW5bMF0uY2xhc3NOYW1lICsgXCI1XCIsIFwiNm5cIik7XG4gICAgICAgICAgICB3b3Jkcy5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcblxuICAgICAgICAgICAgLy8gbXVzaWMuc2hpZnQoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAoZS5rZXkgPT09IFwibFwiKSB7XG4gICAgICAgIC8vICAgICBhbGVydChcIndyb25nIVwiKTtcbiAgICAgICAgfVxuICAgIC8vIH1cbn0pXG5cbi8vIGZ1bmN0aW9uIG1vdmUoKSB7XG4vLyAgICAgbGV0IGsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImtcIik7XG4vLyAgICAgbGV0IHkgPSAwO1xuLy8gICAgIGxldCBpZCA9IHNldEludGVydmFsKGRvd24sIDMwKTtcbi8vICAgICBmdW5jdGlvbiBkb3duKCkge1xuLy8gICAgICAgICBpZiAoeSA+PSA0MDApIHtcbi8vICAgICAgICAgICAgIGsucmVtb3ZlKCk7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICB5Kys7XG4vLyAgICAgICAgICAgICBrLnN0eWxlLnRvcCA9IHkgKyBcInB4XCI7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gbGV0IG11c2ljID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIl07XG4gICAgLy8gbGV0IHN5bnRoID0gbmV3IFRvbmUuU3ludGgoKS8vLnRvRGVzdGluYXRpb24oKTtcbiAgICAvLyBzeW50aC5vc2NpbGxhdG9yLnR5cGUgPSBcInNpbmVcIjtcbiAgICAvLyBzeW50aC50b0Rlc3RpbmF0aW9uKCk7XG5cbiAgICAvLyBsZXQgd29yZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmRzXCIpO1xuXG4gICAgLy8gbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVzc2VkLWtleVwiKTtcblxuICAgIC8vIHN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKG11c2ljWzBdICsgXCI0XCIsIFwiMTZuXCIpO1xuICAgIC8vIG11c2ljLnNoaWZ0KCk7XG5cbiAgICAvLyBpbnB1dC5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBpZiAoaW5wdXQudmFsdWVbaW5wdXQudmFsdWUubGVuZ3RoIC0gMV0gPT09IGUua2V5KSB7XG4gICAgLy8gICAgICAgICBsZXQga2V5ID0gbXVzaWMuc2hpZnQoKTtcbiAgICAvLyAgICAgICAgIHJldHVybiBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShrZXkgKyBcIjRcIiwgXCIxNm5cIik7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyBpZiAoZS5rZXkgPT09IGlucHV0LnZhbHVlW2lucHV0LnZhbHVlLmxlbmd0aCAtIDFdKSB7XG4gICAgLy8gICAgIGxldCBrZXkgPSBtdXNpYy5zaGlmdCgpO1xuICAgIC8vICAgICByZXR1cm4gc3ludGgudHJpZ2dlckF0dGFja1JlbGVhc2Uoa2V5ICsgXCI0XCIsIFwiMTZuXCIpO1xuICAgIC8vIH1cbiAgICAvLyBsZXQgbXVzaWMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkFcIiwgXCJCXCIsIFwiQ1wiXTtcblxuXG4gICAgLy8gd2hpbGUgKG11c2ljLmxlbmd0aCA+PSAwKSB7XG4gICAgLy8gc3dpdGNoIChlLmtleSA9PT0gaW5wdXQudmFsdWUpIHtcbiAgICAgICAgXG4gICAgLy8gICAgIGNhc2Ugd29yZHMuY2hpbGRyZW5bMF0uaWQ6XG4gICAgLy8gICAgICAgICBkZWJ1Z2dlclxuICAgIC8vICAgICAgICAgc3ludGgudHJpZ2dlckF0dGFja1JlbGVhc2UobXVzaWNbMF0gKyBcIjRcIiwgXCIxNm5cIik7IFxuICAgIC8vICAgICAgICAgbXVzaWMuc2hpZnQoKVxuICAgIC8vICAgICAgICAgZGVidWdnZXJcbiAgICAvLyAgICAgICAgIGJyZWFrO1xuXG4gICAgLy8gICAgIGNhc2UgZmFsc2U6XG4gICAgLy8gICAgICAgICBkZWJ1Z2dlclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBjYXNlIFwialwiOlxuICAgICAgICAvLyAgICAgZGVidWdnZXJcbiAgICAgICAgLy8gICAgIHJldHVybiBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShtdXNpY1sxXSArIFwiNFwiLCBcIjE2blwiKTtcbiAgICAgICAgLy8gY2FzZSBcImhcIjpcbiAgICAgICAgLy8gICAgIHJldHVybiBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShtdXNpY1syXSArIFwiNFwiLCBcIjE2blwiKTtcbiAgICAgICAgLy8gY2FzZSBcImxcIjpcbiAgICAgICAgLy8gICAgIHJldHVybiBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShtdXNpY1szXSArIFwiNFwiLCBcIjE2blwiKTtcbiAgICAgICAgLy8gY2FzZSBcImdcIjpcbiAgICAgICAgLy8gICAgIHJldHVybiBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShtdXNpY1s0XSArIFwiNFwiLCBcIjE2blwiKTtcbiAgICAvLyAgICAgZGVmYXVsdDpcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyB9XG4vLyB9XG4gICAgXG4vLyB9KVxuXG5cblxuLy8gSW5kZXguanMgPiBuZXdHYW1lLnN0YXJ0KCkgPiBnYW1lX3ZpZXcuanMgPiBzdGFydCgpID4gc3RlcCA+IGdhbWUuanMgPiBtb3ZlT2JqZWN0cygpICsgY2hlY2tDb2xsaXNvbnMoKVxuXG4iXSwibmFtZXMiOlsiR2FtZSIsInJlcXVpcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJnYW1lU3RhcnQiLCJlIiwid29yZHMiLCJzeW50aCIsIlRvbmUiLCJTeW50aCIsIm9zY2lsbGF0b3IiLCJ0eXBlIiwidG9NYXN0ZXIiLCJrZXkiLCJjaGlsZHJlbiIsImlkIiwidHJpZ2dlckF0dGFja1JlbGVhc2UiLCJjbGFzc05hbWUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module) {

eval("function Game() {\n  this.letters = [];\n  this.pianoKeys = [];\n} // Game.prototype.dropAll = function () {\n//     let words = document.getElementById(\"words\");\n//     for (let i = 0; i < words.childElementCount; i++) {\n//         words.children[i].drop();\n//     }\n// }\n\n\nGame.prototype.drop = function () {\n  // console.log(\"hello\")\n  var words = document.getElementById(\"words\");\n  var lastEle = words.children[words.childElementCount - 1]; // let firstEle = words.children[0]\n  // for (let i = 0; i < words.childElementCount; i++) {\n\n  var y = 2;\n  var id = setInterval(down, 10);\n\n  function down() {\n    for (var i = 0; i < words.childElementCount; i++) {\n      if (words.children[i].style.top === \"850px\") {\n        words.children[i].remove();\n      }\n    }\n\n    y = y + 2;\n    lastEle.style.top = 250 + y + \"px\";\n  } // }\n\n\n  if (this.letters.length === 0) {\n    clearInterval(id);\n    y = 2;\n  }\n};\n\nGame.prototype.fillLetters = function () {\n  // this.letters = [\"a\", \"s\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\"];\n  // this.pianoKeys = [\"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\", \"D\"];\n  // this.letters = [\"♥\", \"♥\", \"\", \"♥\", \"♥\", \"♥\", \"♥\", \"♥\", \"♥\", \"\", \"♥\", \"♥\", \"♥\", \"♥\", \"♥\", \"♥\", \"\", \"♥\", \"♥\", \"♥\", \"♥\", \"♥\",\n  //     \"♥\", \"\", \"♥\", \"♥\", \"♥\", \"♥\", \"♥\", \"♥\", \"\", \"♥\", \"♥\", \"♥\", \"♥\", \"♥\"];\n  // this.pianoKeys = [\"D\", \"E\", \"F\", \"G\", \"A\", \"B\", \"C\", \"D\"];\n  this.letters = [\"a\", \"s\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\", \"a\", \"s\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\", \"f\", \"g\", \"h\", \"j\", \"k\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\", \"f\", \"g\", \"h\", \"j\", \"k\", \"k\"];\n  this.pianoKeys = [\"E\", \"E\", \"E\", \"C\", \"E\", \"G\", \"G\", \"C\", \"G\", \"E\", \"A\", \"B\", \"A#\", \"A\", \"G\", \"E\", \"G\", \"A\", \"F\", \"G\", \"E\", \"C\", \"D\", \"B\", \"C\", \"G\", \"E\", \"A\", \"B\", \"A#\", \"A\", \"G\", \"E\", \"G\", \"A\", \"F\", \"G\", \"E\", \"C\", \"D\", \"B\", \"G\", \"F#\", \"F\", \"D#\", \"E\", \"G#\", \"A\", \"C\", \"A\", \"C\", \"D\", \"G\", \"F#\", \"F\", \"D#\", \"E\", \"C\", \"C\", \"C\", \"G\", \"F#\", \"F\", \"D#\", \"E\", \"G#\", \"A\", \"C\", \"A\", \"C\", \"D\", \"D#\", \"D\", \"C\", \"C\"];\n};\n\nGame.prototype.assignColumn = function () {\n  // this.letters = [\"a\", \"s\", \"d\", \"f\"];\n  // this.pianoKeys = [\"A\", \"B\", \"C\", \"D\"];\n  // let that = Game.letters.bind(this);\n  // let that = ;\n  // debugger\n  var letter = this.letters.shift(); // debugger\n\n  var pianoKey = this.pianoKeys.shift(); // let id = setInterval(assign, 5000);\n  // for (let i = 0; i < this.letters.length; i++) {\n\n  if (this.letters.length > 0) {\n    var subEle = document.createElement(\"span\");\n    subEle.setAttribute(\"id\", letter);\n    subEle.setAttribute(\"class\", pianoKey);\n    var node = document.createTextNode(letter);\n    subEle.appendChild(node);\n    subEle.style.left = Math.random() * (1050 - 100 + 1) + 590 + \"px\";\n    var element = document.getElementById(\"words\");\n    element.appendChild(subEle);\n  } // }\n\n};\n\nGame.prototype.gameStart = function () {\n  var _this = this;\n\n  this.fillLetters(); // debugger\n\n  var assign = setInterval(function () {\n    _this.assignColumn();\n  }, 700);\n  var dropLetter = setInterval(function () {\n    _this.drop();\n  }, 700); // let dropLetter = setInterval(this.drop, 1000);\n  // this.gameClear(assign, dropLetter);\n};\n\nGame.prototype.gameClear = function (assign, drop) {\n  if (this.letters.length === 0) {\n    clearInterval(assign);\n    clearInterval(drop);\n  }\n};\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU1Byb2plY3QvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwibmFtZXMiOlsiR2FtZSIsImxldHRlcnMiLCJwaWFub0tleXMiLCJwcm90b3R5cGUiLCJkcm9wIiwid29yZHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibGFzdEVsZSIsImNoaWxkcmVuIiwiY2hpbGRFbGVtZW50Q291bnQiLCJ5IiwiaWQiLCJzZXRJbnRlcnZhbCIsImRvd24iLCJpIiwic3R5bGUiLCJ0b3AiLCJyZW1vdmUiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiZmlsbExldHRlcnMiLCJhc3NpZ25Db2x1bW4iLCJsZXR0ZXIiLCJzaGlmdCIsInBpYW5vS2V5Iiwic3ViRWxlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwibGVmdCIsIk1hdGgiLCJyYW5kb20iLCJlbGVtZW50IiwiZ2FtZVN0YXJ0IiwiYXNzaWduIiwiZHJvcExldHRlciIsImdhbWVDbGVhciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLElBQVQsR0FBaUI7QUFDYixPQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFFSCxDLENBRUQ7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBOzs7QUFFQUYsSUFBSSxDQUFDRyxTQUFMLENBQWVDLElBQWYsR0FBc0IsWUFBWTtBQUM5QjtBQUNBLE1BQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxNQUFJQyxPQUFPLEdBQUdILEtBQUssQ0FBQ0ksUUFBTixDQUFlSixLQUFLLENBQUNLLGlCQUFOLEdBQTBCLENBQXpDLENBQWQsQ0FIOEIsQ0FLOUI7QUFDQTs7QUFDSSxNQUFJQyxDQUFDLEdBQUcsQ0FBUjtBQUNBLE1BQUlDLEVBQUUsR0FBR0Ms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QUNIO0FBQ0osQ0FMRDs7QUFRQW9DLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpDLElBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gR2FtZSAoKSB7XG4gICAgdGhpcy5sZXR0ZXJzID0gW107XG4gICAgdGhpcy5waWFub0tleXMgPSBbXTtcblxufVxuXG4vLyBHYW1lLnByb3RvdHlwZS5kcm9wQWxsID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIGxldCB3b3JkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZHNcIik7XG5cbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmNoaWxkRWxlbWVudENvdW50OyBpKyspIHtcbi8vICAgICAgICAgd29yZHMuY2hpbGRyZW5baV0uZHJvcCgpO1xuLy8gICAgIH1cblxuICAgIFxuLy8gfVxuXG5HYW1lLnByb3RvdHlwZS5kcm9wID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiaGVsbG9cIilcbiAgICBsZXQgd29yZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmRzXCIpO1xuICAgIGxldCBsYXN0RWxlID0gd29yZHMuY2hpbGRyZW5bd29yZHMuY2hpbGRFbGVtZW50Q291bnQgLSAxXTtcblxuICAgIC8vIGxldCBmaXJzdEVsZSA9IHdvcmRzLmNoaWxkcmVuWzBdXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5jaGlsZEVsZW1lbnRDb3VudDsgaSsrKSB7XG4gICAgICAgIGxldCB5ID0gMjtcbiAgICAgICAgbGV0IGlkID0gc2V0SW50ZXJ2YWwoZG93biwgMTApO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRvd24oKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmNoaWxkRWxlbWVudENvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAod29yZHMuY2hpbGRyZW5baV0uc3R5bGUudG9wID09PSBcIjg1MHB4XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgd29yZHMuY2hpbGRyZW5baV0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeSA9IHkgKyAyO1xuICAgICAgICAgICAgbGFzdEVsZS5zdHlsZS50b3AgPSAoMjUwICsgeSkgKyBcInB4XCI7XG4gICAgICAgIFxuICAgICAgICB9XG4gICAgLy8gfVxuICAgICAgICBpZiAodGhpcy5sZXR0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgICAgICB5ID0gMjtcbiAgICAgICAgfVxuXG59XG5cbkdhbWUucHJvdG90eXBlLmZpbGxMZXR0ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIHRoaXMubGV0dGVycyA9IFtcImFcIiwgXCJzXCIsIFwiZFwiLCBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImpcIiwgXCJrXCJdO1xuICAgIC8vIHRoaXMucGlhbm9LZXlzID0gW1wiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIl07XG5cbiAgICAvLyB0aGlzLmxldHRlcnMgPSBbXCLimaVcIiwgXCLimaVcIiwgXCJcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIiwgXCJcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIiwgXCJcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIixcbiAgICAvLyAgICAgXCLimaVcIiwgXCJcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIiwgXCJcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIiwgXCLimaVcIl07XG5cbiAgICAvLyB0aGlzLnBpYW5vS2V5cyA9IFtcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCJdO1xuXG4gICAgdGhpcy5sZXR0ZXJzID0gW1wiYVwiLCBcInNcIiwgXCJkXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwialwiLCBcImtcIiwgXCJhXCIsXG4gICAgICAgIFwic1wiLCBcImRcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJqXCIsIFwia1wiLCBcImRcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJqXCIsXG4gICAgICAgIFwia1wiLCBcImRcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJqXCIsIFwia1wiLCBcImRcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJqXCIsIFwia1wiLFxuICAgICAgICBcImRcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJqXCIsIFwia1wiLCBcImRcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJqXCIsIFwia1wiLFxuICAgICAgICBcImRcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJqXCIsIFwia1wiLCBcImRcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJqXCIsIFwia1wiLFxuICAgICAgICBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImpcIiwgXCJrXCIsIFwiZFwiLCBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImpcIiwgXCJrXCIsXG4gICAgICAgIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwialwiLCBcImtcIiwgXCJrXCJdO1xuICAgIHRoaXMucGlhbm9LZXlzID0gW1wiRVwiLCBcIkVcIiwgXCJFXCIsIFwiQ1wiLCBcIkVcIiwgXCJHXCIsIFwiR1wiLCBcIkNcIiwgXCJHXCIsIFwiRVwiLCBcIkFcIiwgXCJCXCIsIFwiQSNcIixcbiAgICAgICAgXCJBXCIsIFwiR1wiLCBcIkVcIiwgXCJHXCIsIFwiQVwiLCBcIkZcIiwgXCJHXCIsIFwiRVwiLCBcIkNcIiwgXCJEXCIsIFwiQlwiLCBcIkNcIiwgXCJHXCIsXG4gICAgICAgIFwiRVwiLCBcIkFcIiwgXCJCXCIsIFwiQSNcIiwgXCJBXCIsIFwiR1wiLCBcIkVcIiwgXCJHXCIsIFwiQVwiLCBcIkZcIiwgXCJHXCIsIFwiRVwiLCBcIkNcIiwgXCJEXCIsXG4gICAgICAgIFwiQlwiLCBcIkdcIiwgXCJGI1wiLCBcIkZcIiwgXCJEI1wiLCBcIkVcIiwgXCJHI1wiLCBcIkFcIiwgXCJDXCIsIFwiQVwiLCBcIkNcIiwgXCJEXCIsIFwiR1wiLFxuICAgICAgICBcIkYjXCIsIFwiRlwiLCBcIkQjXCIsIFwiRVwiLCBcIkNcIiwgXCJDXCIsIFwiQ1wiLCBcIkdcIiwgXCJGI1wiLCBcIkZcIiwgXCJEI1wiLCBcIkVcIiwgXCJHI1wiLFxuICAgICAgICBcIkFcIiwgXCJDXCIsIFwiQVwiLCBcIkNcIiwgXCJEXCIsIFwiRCNcIiwgXCJEXCIsIFwiQ1wiLCBcIkNcIl07XG59XG5cbkdhbWUucHJvdG90eXBlLmFzc2lnbkNvbHVtbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyB0aGlzLmxldHRlcnMgPSBbXCJhXCIsIFwic1wiLCBcImRcIiwgXCJmXCJdO1xuICAgIC8vIHRoaXMucGlhbm9LZXlzID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiXTtcbiAgICAvLyBsZXQgdGhhdCA9IEdhbWUubGV0dGVycy5iaW5kKHRoaXMpO1xuICAgIC8vIGxldCB0aGF0ID0gO1xuXG4gICAgLy8gZGVidWdnZXJcbiAgICBsZXQgbGV0dGVyID0gdGhpcy5sZXR0ZXJzLnNoaWZ0KCk7XG4gICAgLy8gZGVidWdnZXJcbiAgICBsZXQgcGlhbm9LZXkgPSB0aGlzLnBpYW5vS2V5cy5zaGlmdCgpO1xuICAgIC8vIGxldCBpZCA9IHNldEludGVydmFsKGFzc2lnbiwgNTAwMCk7XG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGV0dGVycy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0aGlzLmxldHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgc3ViRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHN1YkVsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBsZXR0ZXIpO1xuICAgICAgICBzdWJFbGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgcGlhbm9LZXkpO1xuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxldHRlcik7XG4gICAgICAgIHN1YkVsZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgc3ViRWxlLnN0eWxlLmxlZnQgPSAoTWF0aC5yYW5kb20oKSAqICgxMDUwIC0gMTAwICsgMSkgKyA1OTApICsgXCJweFwiO1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZHNcIik7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3ViRWxlKTtcbiAgICB9XG4gICAgLy8gfVxufVxuXG5HYW1lLnByb3RvdHlwZS5nYW1lU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB0aGlzLmZpbGxMZXR0ZXJzKCk7XG4gICAgLy8gZGVidWdnZXJcbiAgICBsZXQgYXNzaWduID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLmFzc2lnbkNvbHVtbigpO1xuICAgIH0sIDcwMCk7XG4gICAgbGV0IGRyb3BMZXR0ZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZHJvcCgpO1xuICAgIH0sIDcwMCk7XG4gICAgLy8gbGV0IGRyb3BMZXR0ZXIgPSBzZXRJbnRlcnZhbCh0aGlzLmRyb3AsIDEwMDApO1xuICAgIC8vIHRoaXMuZ2FtZUNsZWFyKGFzc2lnbiwgZHJvcExldHRlcik7XG59XG5cbkdhbWUucHJvdG90eXBlLmdhbWVDbGVhciA9IGZ1bmN0aW9uIChhc3NpZ24sIGRyb3ApIHtcbiAgICBpZiAodGhpcy5sZXR0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjbGVhckludGVydmFsKGFzc2lnbik7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZHJvcCk7XG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTtcbiJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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