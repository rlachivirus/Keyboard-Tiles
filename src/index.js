// import * as Tone from "tone";
// import "./styles/index.scss";
// import "./scripts/keys.js";
// import "./scripts/letters.js";
const Game = require("./scripts/game");


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
        
        ctx.fillRect(400, y, 30, 30);
        ctx.fillRect(500, y, 30, 30);
        ctx.fillRect(600, y, 30, 30);
        ctx.fillRect(700, y, 30, 30);
        ctx.fillRect(800, y, 30, 30);
        ctx.fillRect(900, y, 30, 30);
        ctx.fillRect(1000, y, 30, 30);
        ctx.fillRect(1100, y, 30, 30);
        ctx.fill();
        ctx.closePath();
    }

    // if (y === 571) {
    //     ctx.clearRect(300, 570, 30, 30);
    // }

    y += dy;



    window.requestAnimationFrame(draw);
}
*/
// document.getElementById("pressed-key").addEventListener("keydown", function (e) {
//     let input = document.getElementById("pressed-key");
//     let inputVal = document.getElementById(input);
//     if (e.key === "k") {
//         alert("hi!");
//     }
// })


// const { isInteger } = require("core-js/core/number");

// document.addEventListener("DOMContentLoader", function () {
    
    // })
    
    // function init() {
        
        // }
        
        // function drop() {
            
            // }
            

document.addEventListener("DOMContentLoaded", function () {
                
    let game = new Game();      
    // move();
    game.fillLetters();
    game.assignColumns();
    game.move();
    
})




document.addEventListener("keydown", function (e) {
    let words = document.getElementById("words");
    // let music = ["A", "B", "C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B", "C"];
    let synth = new Tone.Synth()//.toDestination();
    synth.oscillator.type = "sine";
    synth.toMaster();

    // let arr = ["h", "j", "k"]
    // for (let i = 0; i < words.childElementCount; i++) {
        if (e.key === words.children[0].id) {
            // alert("hi!");
            
            synth.triggerAttackRelease(words.children[0].className + "4", "16n");
            words.firstElementChild.remove();
            
            // music.shift();
        // }
        // if (e.key === "l") {
        //     alert("wrong!");
        }
    // }
})

// function move() {
//     let k = document.getElementById("k");
//     let y = 0;
//     let id = setInterval(down, 30);
//     function down() {
//         if (y >= 400) {
//             k.remove();
//         } else {
//             y++;
//             k.style.top = y + "px";
//         }
//     }
// }

// document.addEventListener("keydown", function (e) {
    // let music = ["A", "B", "C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B", "C"];
    // let synth = new Tone.Synth()//.toDestination();
    // synth.oscillator.type = "sine";
    // synth.toDestination();

    // let words = document.getElementById("words");

    // let input = document.getElementById("pressed-key");

    // synth.triggerAttackRelease(music[0] + "4", "16n");
    // music.shift();

    // input.oninput = function () {
    //     if (input.value[input.value.length - 1] === e.key) {
    //         let key = music.shift();
    //         return synth.triggerAttackRelease(key + "4", "16n");
    //     }
    // }

    // if (e.key === input.value[input.value.length - 1]) {
    //     let key = music.shift();
    //     return synth.triggerAttackRelease(key + "4", "16n");
    // }
    // let music = ["A", "B", "C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B", "C"];


    // while (music.length >= 0) {
    // switch (e.key === input.value) {
        
    //     case words.children[0].id:
    //         debugger
    //         synth.triggerAttackRelease(music[0] + "4", "16n"); 
    //         music.shift()
    //         debugger
    //         break;

    //     case false:
    //         debugger
    //         return;
        // case "j":
        //     debugger
        //     return synth.triggerAttackRelease(music[1] + "4", "16n");
        // case "h":
        //     return synth.triggerAttackRelease(music[2] + "4", "16n");
        // case "l":
        //     return synth.triggerAttackRelease(music[3] + "4", "16n");
        // case "g":
        //     return synth.triggerAttackRelease(music[4] + "4", "16n");
    //     default:
    //         return;
    // }
// }
    
// })



// Index.js > newGame.start() > game_view.js > start() > step > game.js > moveObjects() + checkCollisons()

