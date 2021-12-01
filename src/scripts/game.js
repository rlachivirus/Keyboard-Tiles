const Keys = require("./keys");

function Game () {
    this.letters = [];
    this.pianoKeys = [];
    this.status = "";
    this.pause = "";
    this.misses = 0;
    this.score = 0;
    this.speed = 0.03;
    this.level = 1;

}

Game.prototype.drop = function (letter) {
    let acceleration = this.speed;
    let y = 0;

    const fall = () => {
        let currentLetter = document.getElementById(letter.textContent);
        let top = parseInt(currentLetter.style.top);
        let newTop = `${top + y}%`;
        let missed = document.getElementById("misses");

        if (currentLetter.style.top >= "81%") {
            this.misses += 1;
            missed.innerText = this.misses;
            currentLetter.remove();
        }

        if (this.pause === "resume") {
            currentLetter.style.top = newTop;
            y = y + acceleration;
        }

        requestAnimationFrame(fall);
    }

    requestAnimationFrame(fall);
}

Game.prototype.fillLetters = function () {
    let keys = new Keys();

    this.letters = keys.letters[this.level - 1];
    this.pianoKeys = keys.pianoKeys[this.level - 1];
}

Game.prototype.assignColumn = function () {
    let letter = this.letters.shift();
    let pianoKey = this.pianoKeys.shift();

    if (letter) {
        let subEle = document.createElement("span");
        subEle.setAttribute("id", letter);
        subEle.setAttribute("class", pianoKey);
        let node = document.createTextNode(letter);
        subEle.appendChild(node);
        subEle.style.left = (Math.floor(Math.random() * (72 - 27) + 27)) + "%";
        subEle.style.top = "26%";
        let element = document.getElementById("words");
        
        element.appendChild(subEle);
    };
}

Game.prototype.gameStart = function () {
    let words = document.getElementById("words");
    this.status = "play";
    this.pause = "resume";
    this.fillLetters();

    let assign = setInterval(() => {
        if (this.misses === 5) {
            let gameOver = document.getElementById("gameOver");
            let body = document.getElementById("body");
            let inputArea = document.getElementById("inputArea");

            this.pause = "pause"
            gameOver.style.display = "";
            body.style.display = "none";
            inputArea.style.display = "none";

            clearInterval(assign);

        } else if (this.letters.length === 0 && words.children.length === 0) {
            let body = document.getElementById("body");
            let inputArea = document.getElementById("inputArea");
            let stageClear = document.getElementById("stageClear");
            let gameClear = document.getElementById("gameClear");
            let level = document.getElementById("level");
            let cleared = document.getElementById("cleared");
            let stageScore = document.getElementById("stageScore");
            let clearedScore = document.getElementById("clearedScore");

            clearInterval(assign);

            if (this.level === 3) {
                body.style.display = "none";
                inputArea.style.display = "none";
                gameClear.style.display = "";
                cleared.innerText = `Game Cleared!`;
                clearedScore.innerText = `Score: ${this.score}`;
            } else {
                body.style.display = "none";
                inputArea.style.display = "none";
                stageClear.style.display = "";
                level.innerText = `Level ${this.level}/3 Cleared!`;
                stageScore.innerText = `Score: ${this.score}`;
            };
        }
            
        if (this.pause === "resume") {
            let words = document.getElementById("words");
            let lastEle = words.children[words.childElementCount - 1];
            
            this.assignColumn();
            this.drop(lastEle);
        }

    }, 700);
}

Game.prototype.gameRestart = function () {
    let gameOver = document.getElementById("gameOver");
    let body = document.getElementById("body");
    let words = document.getElementById("words");
    let inputArea = document.getElementById("inputArea");
    let input = document.getElementById("pressed-key");
    let missed = document.getElementById("misses");
    let score = document.getElementById("score");

    while (words.firstChild) {
        words.removeChild(words.firstChild);
    }

    gameOver.style.display = "none";
    body.style.display = "";
    words.style.display = "";
    inputArea.style.display = "";
    input.value = "";
    missed.innerText = 0;
    score.innerText = 0;

    this.letters = [];
    this.pianoKeys = [];
    this.status = "";
    this.pause = "";
    this.misses = 0;
    this.score = 0;
}

module.exports = Game;