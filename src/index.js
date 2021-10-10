import "./styles/index.scss";

/*document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    canvas.width = 1500;
    canvas.height = 1500;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.strokeRect(200, 100, 1020, 500);
    
    ctx.strokeStyle = "black";
    ctx.strokeRect(200, 650, 1020, 100);
    
    // let tiles = setInterval(init, 1000);
    init();
    // let input = document.getElementById("pressed-key");
    // input.oninput = function () {
    //     if (input.value === "k") {
    //         alert("hi!");
    //     }
    //     if (input.value === "l") {
    //         alert("wrong!");
    //     }
    // };



})

function init() {
    window.requestAnimationFrame(draw);
}


let x = 200;
let y = 100;
// let dx = 200;
let dy = 1;
let words = [];


function draw() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    // Tiles
    if (y <= 570) { // need to use collision detection
        ctx.clearRect(0, 0, 30, 30);
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillRect(200, 100, 1020, 500);
        ctx.fillStyle = "white";
        ctx.fillRect(300, y, 30, 30);
        ctx.font = "20px serif";
        ctx.fillStyle = "red";
        ctx.fillText("K", 308, y + 22);
        
        // ctx.fillRect(400, y, 30, 30);
        // ctx.fillRect(500, y, 30, 30);
        // ctx.fillRect(600, y, 30, 30);
        // ctx.fillRect(700, y, 30, 30);
        // ctx.fillRect(800, y, 30, 30);
        // ctx.fillRect(900, y, 30, 30);
        // ctx.fillRect(1000, y, 30, 30);
        // ctx.fillRect(1100, y, 30, 30);
        ctx.fill();
        ctx.closePath();
    }

    // if (y === 571) {
    //     ctx.clearRect(300, 570, 30, 30);
    // }

    y += dy;



    window.requestAnimationFrame(draw);
}

// document.getElementById("pressed-key").addEventListener("keydown", function (e) {
//     let input = document.getElementById("pressed-key");
//     let inputVal = document.getElementById(input);
//     if (e.key === "k") {
//         alert("hi!");
//     }
// })
*/

// const { isInteger } = require("core-js/core/number");

// document.addEventListener("DOMContentLoader", function () {

// })

// function init() {

// }

// function drop() {

// }

document.addEventListener("keydown", function (e) {
    let words = document.getElementById("words");

    // let arr = ["h", "j", "k"]
    for (let i = 0; i < words.childElementCount; i++) {
        if (e.key === words.children[i].id) {
            alert("hi!");
            words.firstElementChild.remove();
        }
        // if (e.key === "l") {
        //     alert("wrong!");
        // }
    }
})

