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
        let id = setInterval(down, 30);

        function down() {
            if (y >= 400) {
                // .remove();
            } 
            y++;
            lastEle.style.top = y + "px";

        }
    // }


}

Game.prototype.fillLetters = function () {
    this.letters = ["a", "s", "d", "f", "g", "h", "j", "k"];
    this.pianoKeys = ["D", "E", "F", "G", "A", "B", "C", "D"];
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
        let subEle = document.createElement("span");
        subEle.setAttribute("id", letter);
        subEle.setAttribute("class", pianoKey);
        let node = document.createTextNode(letter);
        subEle.appendChild(node);
        subEle.style.left = (Math.random() * (950 - 100 + 1) + 100) + "px";
        let element = document.getElementById("words");
        element.appendChild(subEle);
    // }
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