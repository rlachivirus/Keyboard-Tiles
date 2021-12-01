const Game = require("./scripts/game");

document.addEventListener("DOMContentLoaded", function () {

    let game = new Game();
    
    document.getElementById("play").addEventListener("click", () => {
        let tutorial = document.getElementById("tutorial")
        let body = document.getElementById("body");
        let inputArea = document.getElementById("inputArea");

        tutorial.style.display = "none";
        body.style.display = "";
        inputArea.style.display = "";
    })

    document.getElementById("pressed-key").addEventListener("click", () => {
        if (game.status !== "play") {
            game.gameStart()
        }

        if (game.pause === "pause") {
            game.pause = "resume"
        }
    });

    document.getElementById("pause").addEventListener("click", () => {
        if (game.pause === "pause") {
            game.pause = "resume";
        } else if (game.pause === "resume") {
            game.pause = "pause";
        }
    });

    document.getElementById("retry").addEventListener("click", () => {
        game.gameRestart()
    })

    document.getElementById("next").addEventListener("click", () => {
        let stageClear = document.getElementById("stageClear")
        let body = document.getElementById("body");
        let inputArea = document.getElementById("inputArea");

        stageClear.style.display = "none";
        body.style.display = "";
        inputArea.style.display = "";

        game.speed = game.speed + 0.015;
        game.level++;
        game.gameRestart();
    });

    document.getElementById("exit").addEventListener("click", () => location.reload());
    document.getElementById("playAgain").addEventListener("click", () => location.reload());

    document.addEventListener("keydown", function (e) {
        let words = document.getElementById("words");
        let input = document.getElementById("pressed-key");
        let synth = new Tone.Synth();
        synth.oscillator.type = "sine";
        synth.volume.value = -15;
        synth.toMaster();
        
        if (game.pause === "resume" && e.key === words.children[0].id) {
            synth.triggerAttackRelease(words.children[0].className, "4n");
            words.firstElementChild.remove();

            let gameScore = document.getElementById("score");
            game.score += 10;
            gameScore.innerText = game.score;
        }
        input.value = "";
    });

});