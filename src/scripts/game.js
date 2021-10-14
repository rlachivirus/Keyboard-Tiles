function Game () {
    this.letters = [];
    this.pianoKeys = [];
    this.pause = "resume";
    this.misses = 0;
    this.score = 0;

}

// Game.prototype.dropAll = function () {
//     let words = document.getElementById("words");

//     for (let i = 0; i < words.childElementCount; i++) {
//         words.children[i].drop();
//     }

    
// }

Game.prototype.drop = function () {
    // console.log("hello")
    let words = document.getElementById("words");
    let lastEle = words.children[words.childElementCount - 1];

    // let firstEle = words.children[0]
    // for (let i = 0; i < words.childElementCount; i++) {
            let y = 2;
            // debugger
            let id = setInterval(down.bind(this), 10);
            // debugger
            function down() {
                // debugger
                if (this.pause === "resume") {

                for (let i = 0; i < words.childElementCount; i++) {
                    if (words.children[i].style.top === "550px") {
                        let missed = document.getElementById("misses");
                        this.misses += 1;
                        missed.innerText = this.misses;
                        words.children[i].remove();
                    }
                }
                y = y + 2;
                    lastEle.style.top = (200 + y) + "px";
                } 
            }

    // }
        if (this.letters.length === 0) {
            clearInterval(id);
            y = 2;
        }

}

Game.prototype.fillLetters = function () {
    // this.letters = ["a", "s", "d", "f", "g", "h", "j", "k"];
    // this.pianoKeys = ["D", "E", "F", "G", "A", "B", "C", "D"];

    // this.letters = ["♥", "♥", "", "♥", "♥", "♥", "♥", "♥", "♥", "", "♥", "♥", "♥", "♥", "♥", "♥", "", "♥", "♥", "♥", "♥", "♥",
    //     "♥", "", "♥", "♥", "♥", "♥", "♥", "♥", "", "♥", "♥", "♥", "♥", "♥"];

    // this.pianoKeys = ["D", "E", "F", "G", "A", "B", "C", "D"];

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
    // this.letters = ["a", "s", "d", "f"];
    // this.pianoKeys = ["A", "B", "C", "D"];
    // let that = Game.letters.bind(this);
    // let that = ;

    // debugger
    let letter = this.letters.shift();
    // debugger
    let pianoKey = this.pianoKeys.shift();
    // let id = setInterval(assign, 5000);

    // for (let i = 0; i < this.letters.length; i++) {
    if (this.letters.length > 0) {
        let subEle = document.createElement("span");
        subEle.setAttribute("id", letter);
        subEle.setAttribute("class", pianoKey);
        let node = document.createTextNode(letter);
        subEle.appendChild(node);
        subEle.style.left = (Math.floor(Math.random() * (1050 - 590) + 590)) + "px";
        let element = document.getElementById("words");
        element.appendChild(subEle);
    }
    // }
}

Game.prototype.gameStart = function () {

    this.fillLetters();
    // debugger
    // debugger;
    let assign = setInterval(() => {
        if (this.pause === "resume") {
            this.assignColumn();
            this.drop();
        }
    }, 800);
    // let dropLetter = setInterval(() => {
    //     this.drop();
    // }, 700);

    // while (true) {
    //     // debugger;
    //     if (this.pause === "resume") {
    //         this.assignColumn();
    //         this.drop();

    //     } else if (this.pause === "pause") {
    //         // clearInterval(assign);
    //         // clearInterval(dropLetter);
    //     }
    // }


    // }
    // let dropLetter = setInterval(this.drop, 1000);
    // this.gameClear(assign, dropLetter);
}

Game.prototype.gameClear = function (assign, drop) {
    if (this.letters.length === 0) {
        clearInterval(assign);
        clearInterval(drop);
    }
}


module.exports = Game;
