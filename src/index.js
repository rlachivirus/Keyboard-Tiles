// import * as Tone from "tone";
// import "./styles/index";
// import "./scripts/keys.js";
// import "./scripts/letters.js";
const Game = require("./scripts/game");

document.addEventListener("DOMContentLoaded", function () {
                
    let game = new Game();
    
    document.getElementById("play").addEventListener("click", () => {
        let tutorial = document.getElementById("tutorial")
        let pressedKey = document.getElementById("pressed-key");
        pressedKey.style.display = "";
        tutorial.style.display = "none";
    })

    document.getElementById("pressed-key").addEventListener("click", () => {game.gameStart()});

    let pauseEle = document.getElementById("pause");
    pauseEle.addEventListener("click", () => {
        if (game.pause === "pause") {
            game.pause = "resume";
        } else {
            game.pause = "pause";
        }
    });

    /* RESTARTING THE GAME */
    // document.getElementById("restart").addEventListener("click", () => {
    //     let newGame = new Game()
    //     let gameOver = document.getElementById("gameOver");
    //     let words = document.getElementById("words");
    //     for (let i = 0; i < words.childElementCount; i++) {
    //         words.children[i].remove();
    //     }
    //     game.misses = 0;
    //     gameOver.style.display = "none";
    //     newGame.gameStart();
    // });


    document.addEventListener("keydown", function (e) {
        let words = document.getElementById("words");
        let synth = new Tone.Synth()//.toDestination();
        synth.oscillator.type = "sine";
        synth.toMaster();

            if (e.key === words.children[0].id) {
                
                synth.triggerAttackRelease(words.children[0].className + "5", "6n");
                words.firstElementChild.remove();

                let score = document.getElementById("score");
                console.log(game.score);
                game.score += 10;
                score.innerText = game.score;
            }
    });

});
