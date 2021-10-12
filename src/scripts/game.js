function Game () {
    this.letters = [];
    this.pianoKeys = [];

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
        let y = 0;
        let id = setInterval(down, 20);

        function down() {
            for (let i = 0; i < words.childElementCount; i++) {
                if (words.children[i].style.top === "600px") {
                    words.children[i].remove();
                }
            }
        
            y++;
            lastEle.style.top = (200 + y) + "px";
        }
    // }
        if (this.letters.length === 0) {
            clearInterval(id);
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
        "f", "g", "h", "j", "k"];
    this.pianoKeys = ["E", "E", "E", "C", "E", "G", "G", "C", "G", "E", "A", "B", "A#",
        "A", "G", "E", "G", "A", "F", "G", "E", "C", "D", "B", "C", "G",
        "E", "A", "B", "A#", "A", "G", "E", "G", "A", "F", "G", "E", "C", "D",
        "B", "G", "F#", "F", "D#", "E", "G#", "A", "C", "A", "C", "D", "G",
        "F#", "F", "D#", "E", "C", "C", "C", "G", "F#", "F", "D#", "E", "G#",
        "A", "C", "A", "C", "D", "D#", "D", "C"];
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
        subEle.style.left = (Math.random() * (950 - 100 + 1) + 100) + "px";
        let element = document.getElementById("words");
        element.appendChild(subEle);
    }
    // }
}

Game.prototype.gameStart = function () {

    this.fillLetters();
    // debugger
    let assign = setInterval(() => {
        this.assignColumn();
    }, 700);
    let dropLetter = setInterval(() => {
        this.drop();
    }, 700);
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
