function Game () {
    this.letters = [];
    this.pianoKeys = [];
    this.status = "";
    this.pause = "";
    this.misses = 0;
    this.score = 0;
    this.speed = 0.04;
    this.level = 1;

}

// Game.prototype.drop = function () {
//     let words = document.getElementById("words");
//     let lastEle = words.children[words.childElementCount - 1];

//             let y = 0;
//             let id = setInterval(down.bind(this), 10);
//             function down() {
//                 if (this.pause === "resume") {

//                 for (let i = 0; i < words.childElementCount; i++) {
//                     if (words.children[i].style.top === "500px") {
//                         let missed = document.getElementById("misses");
//                         this.misses += 1;
//                         missed.innerText = this.misses;
//                         words.children[i].remove();
//                     }
//                 }
//                 y = y + 1;
//                     lastEle.style.top = (145 + y) + "px";
//                 } 
//             }

//         if (this.letters.length === 0) {
//             clearInterval(id);
//             y = 0;
//         }
// }

Game.prototype.drop = function (letter) {
    // let letterHeight = 145;
    let acceleration = this.speed;

    let y = 0;
    // let id = setInterval(fall.bind(this), 10);
    const fall = () => {
        let currentLetter = document.getElementById(letter.textContent);
        let top = parseInt(currentLetter.style.top);
        let newTop = `${top + y}%`;
        let missed = document.getElementById("misses");

        if (currentLetter.style.top >= "61%") {
        // if (currentLetter.style.top >= "33vw") {
            this.misses += 1;
            missed.innerText = this.misses;

            currentLetter.remove();
            // letter.remove();
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
    // this.letters = ["a", "s", "d", "f", "g", "h", "j", "k", "a",
    //     "s", "d", "f", "g", "h", "j", "k", "d", "f", "g", "h", "j",
    //     "k", "d", "f", "g", "h", "j", "k", "d", "f", "g", "h", "j", "k",
    //     "d", "f", "g", "h", "j", "k", "d", "f", "g", "h", "j", "k",
    //     "d", "f", "g", "h", "j", "k", "d", "f", "g", "h", "j", "k",
    //     "f", "g", "h", "j", "k", "d", "f", "g", "h", "j", "k",
    //     "f", "g", "h", "j", "k", "k"];
    // this.pianoKeys = ["E", "E", "E", "C", "E", "G", "G", "C", "G", "E", "A", "B", "A#",
    //     "A", "G", "E", "G", "A", "F", "G", "E", "C", "D", "B", "C", "G",
    //     "E", "A", "B", "A#", "A", "G", "E", "G", "A", "F", "G", "E", "C", "D",
    //     "B", "G", "F#", "F", "D#", "E", "G#", "A", "C", "A", "C", "D", "G",
    //     "F#", "F", "D#", "E", "C", "C", "C", "G", "F#", "F", "D#", "E", "G#",
    //     "A", "C", "A", "C", "D", "D#", "D", "C", "C"];

    this.letters = ["a", "s", "d"];
    this.pianoKeys = ["E", "E", "E"];
}

Game.prototype.assignColumn = function () {
    let letter = this.letters.shift();
    let pianoKey = this.pianoKeys.shift();
    // let element = document.getElementById("words");
    // let wordDiv = document.createElement("div");
    // wordDiv.setAttribute("id", "word");
    // element.appendChild(wordDiv);
    // debugger

    // if (this.letters.length > 0) {
    if (letter) {
        let subEle = document.createElement("span");
        subEle.setAttribute("id", letter);
        subEle.setAttribute("class", pianoKey);
        let node = document.createTextNode(letter);
        subEle.appendChild(node);
        subEle.style.left = (Math.floor(Math.random() * (72 - 27) + 27)) + "%";
        subEle.style.top = "17%";
        // subEle.style.top = "10vw";
        let element = document.getElementById("words");
        
        element.appendChild(subEle);
    }
}

// Game.prototype.gameStart = function () {
//     this.fillLetters();
//     let assign = setInterval(() => {
//         if (this.misses === 5) {
//             this.pause = "pause"
//             let gameOver = document.getElementById("gameOver");
//             gameOver.style.display = "";
//         }
        
//         if (this.pause === "resume") {
//             this.assignColumn();
//             this.drop();
//         }
//     }, 800);
// }

Game.prototype.gameStart = function () {
    this.fillLetters();
    this.status = "play";
    this.pause = "resume";
    let words = document.getElementById("words");

    let assign = setInterval(() => {
        if (this.misses >= 5) {
            this.pause = "pause"
            let gameOver = document.getElementById("gameOver");
            let pressedKey = document.getElementById("pressed-key");
            gameOver.style.display = "";
            // clearInterval(assign);
            // let words = document.getElementById("words");
            // words.style.display = "none";
            // for (let i = 0; i < words.childElementCount; i++) {
            //     words.children[i].remove();
            // }
            // words.innerHTML = "";
            while (words.firstChild) {
                words.removeChild(words.firstChild);
            }

            pressedKey.style.display = "none";

            // debugger
            clearInterval(assign);
            // debugger
        }

        if (this.letters.length === 0 && words.children.length === 0) {
            let stageClear = document.getElementById("stageClear");
            let cleared = document.getElementById("cleared");
            let gameClear = document.getElementById("gameClear");
            let level = document.getElementById("level");

            clearInterval(assign);
            // this.gameRestart();

            if (this.level === 3) {
                gameClear.style.display = "";
                cleared.innerText = `Game Cleared!`;
            } else {
                stageClear.style.display = "";
                level.innerText = `Level ${this.level}/3 Cleared!`;
            }

        }

        if (this.pause === "resume") {
            this.assignColumn();
            let words = document.getElementById("words");
            let lastEle = words.children[words.childElementCount - 1];
            this.drop(lastEle);
            // for (let i = 0; i < words.childElementCount; i++) {
            //     if (words.children[i].style.top === "500px") {
            //         let missed = document.getElementById("misses");
            //         this.misses += 1;
            //         missed.innerText = this.misses;
            //         words.children[i].remove();
            //     }
            // }
        }
    }, 500);

}

Game.prototype.gameClear = function (assign, drop) {
    if (this.letters.length === 0) {
        clearInterval(assign);
        clearInterval(drop);
    }
}

Game.prototype.gameRestart = function () {
    let gameOver = document.getElementById("gameOver");
    let words = document.getElementById("words");
    let missed = document.getElementById("misses");
    let score = document.getElementById("score");
    let input = document.getElementById("pressed-key");

    // if (words.children) {
    //     for (let i = 0; i < words.childElementCount; i++) {
    //         words.children[i].remove();
    //     }
    // }
    // words.innerHTML = "";

    while (words.firstChild) {
        words.removeChild(words.firstChild);
    }

    input.value = "";
    input.style.display = "";
    missed.innerText = 0;
    score.innerText = 0;
    gameOver.style.display = "none";
    words.style.display = "";
    this.letters = [];
    this.pianoKeys = [];
    this.status = "";
    this.pause = "";
    this.misses = 0;
    this.score = 0;

    // location.reload()
}

module.exports = Game;
