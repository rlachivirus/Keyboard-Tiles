function Game () {
    this.letters = [];
    this.pianoKeys = [];

}

Game.prototype.move = function () {
    // console.log("hello")
    let k = document.getElementById("a");
    let y = 0;
    let id = setInterval(down, 30);
    function down() {
        if (y >= 400) {
            k.remove();
        } else {
            y++;
            k.style.top = y + "px";
        }
    }

}

Game.prototype.fillLetters = function () {
    this.letters = ["a", "s", "d", "f"];
    this.pianoKeys = ["A", "B", "C", "D"];
}

Game.prototype.assignColumns = function () {
    this.letters = ["a", "s", "d", "f"];
    this.pianoKeys = ["A", "B", "C", "D"];

    for (let i = 0; i < this.letters.length; i++) {
        let subEle = document.createElement("span");
        subEle.setAttribute("id", this.letters[i]);
        subEle.setAttribute("class", this.pianoKeys[i]);
        let node = document.createTextNode(this.letters[i]);
        subEle.appendChild(node);
        let element = document.getElementById("words");
        element.appendChild(subEle);
    }
}

module.exports = Game;

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