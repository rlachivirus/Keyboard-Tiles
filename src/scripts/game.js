function Game () {
    this.letters = [];
    this.pianoKeys = [];
    this.pause = "resume";
    this.misses = 0;
    this.score = 0;

}

Game.prototype.drop = function () {
    let words = document.getElementById("words");
    let lastEle = words.children[words.childElementCount - 1];

            let y = 0;
            let id = setInterval(down.bind(this), 10);
            function down() {
                if (this.pause === "resume") {

                for (let i = 0; i < words.childElementCount; i++) {
                    if (words.children[i].style.top === "500px") {
                        let missed = document.getElementById("misses");
                        this.misses += 1;
                        missed.innerText = this.misses;
                        words.children[i].remove();
                    }
                }
                y = y + 1;
                    lastEle.style.top = (145 + y) + "px";
                } 
            }

        if (this.letters.length === 0) {
            clearInterval(id);
            y = 0;
        }

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

    if (this.letters.length > 0) {
        let subEle = document.createElement("span");
        subEle.setAttribute("id", letter);
        subEle.setAttribute("class", pianoKey);
        let node = document.createTextNode(letter);
        subEle.appendChild(node);
        subEle.style.left = (Math.floor(Math.random() * (1050 - 370) + 370)) + "px";
        let element = document.getElementById("words");
        element.appendChild(subEle);
    }
}

Game.prototype.gameStart = function () {
    this.fillLetters();
    let assign = setInterval(() => {
        if (this.misses === 5) {
            this.pause = "pause"
            let gameOver = document.getElementById("gameOver");
            gameOver.style.display = "";
        }
        
        if (this.pause === "resume") {
            this.assignColumn();
            this.drop();
        }
    }, 800);
}

Game.prototype.gameClear = function (assign, drop) {
    if (this.letters.length === 0) {
        clearInterval(assign);
        clearInterval(drop);
    }
}


module.exports = Game;
