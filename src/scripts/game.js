function Game () {
    this.letters = [];
    this.pianoKeys = [];
    this.pause = "";
    this.misses = 0;
    this.score = 0;

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
    let acceleration = 0.1;

    let y = 0;
    // let id = setInterval(fall.bind(this), 10);
    const fall = () => {
        let currentLetter = document.getElementById(letter.textContent);
        let top = parseInt(currentLetter.style.top);
        let newTop = `${top + y}px`;
        let missed = document.getElementById("misses");

        if (currentLetter.style.top >= "500px") {
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
    this.letters = ["a", "s", "d", "f", "g", "h", "j", "k", "a",
        "s", "d", "f", "g", "h", "j", "k", "d", "f", "g", "h", "j",
        "k", "d", "f", "g", "h", "j", "k", "d", "f", "g", "h", "j", "k",
        "d", "f", "g", "h", "j", "k", "d", "f", "g", "h", "j", "k",
        "d", "f", "g", "h", "j", "k", "d", "f", "g", "h", "j", "k",
        "f", "g", "h", "j", "k", "d", "f", "g", "h", "j", "k",
        "f", "g", "h", "j", "k", "k"];
    this.pianoKeys = ["E", "E", "E", "C", "E", "G", "G", "C", "G", "E", "A", "B", "A#",
        "A", "G", "E", "G", "A", "F", "G", "E", "C", "D", "B", "C", "G",
        "E", "A", "B", "A#", "A", "G", "E", "G", "A", "F", "G", "E", "C", "D",
        "B", "G", "F#", "F", "D#", "E", "G#", "A", "C", "A", "C", "D", "G",
        "F#", "F", "D#", "E", "C", "C", "C", "G", "F#", "F", "D#", "E", "G#",
        "A", "C", "A", "C", "D", "D#", "D", "C", "C"];
}

Game.prototype.assignColumn = function () {
    let letter = this.letters.shift();
    let pianoKey = this.pianoKeys.shift();
    // let element = document.getElementById("words");
    // let wordDiv = document.createElement("div");
    // wordDiv.setAttribute("id", "word");
    // element.appendChild(wordDiv);


    if (this.letters.length > 0) {
        let subEle = document.createElement("span");
        subEle.setAttribute("id", letter);
        subEle.setAttribute("class", pianoKey);
        let node = document.createTextNode(letter);
        subEle.appendChild(node);
        subEle.style.left = (Math.floor(Math.random() * (1050 - 370) + 370)) + "px";
        subEle.style.top = "145px";
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
    this.pause = "resume";
    let assign = setInterval(() => {
        if (this.misses === 5) {
            this.pause = "pause"
            let gameOver = document.getElementById("gameOver");
            gameOver.style.display = "";
            // clearInterval(assign);
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
    }, 1000);
}

Game.prototype.gameClear = function (assign, drop) {
    if (this.letters.length === 0) {
        clearInterval(assign);
        clearInterval(drop);
    }
}

Game.prototype.gameRestart = function () {
    debugger
        let gameOver = document.getElementById("gameOver");
        let words = document.querySelector("#words span");
        words.remove();
        // for (let i = 0; i < count; i++) {
        //     words.children[i].remove();
        // }
        debugger
        this.misses = 0;
        this.score = 0;
        this.pause = "resume"
        gameOver.style.display = "none";
}

module.exports = Game;
