function Keys() {
    // this.letters = [["a", "s", "d", "f", "g", "h"], ["j", "k", "a", "s", "d", "f"], ["g", "h", "j", "k", "d", "f"]];
    // this.pianoKeys = [["E", "E", "E", "C", "E", "G"], ["G", "C", "G", "E", "A", "B"], ["A#", "A", "G", "E", "G", "A"]];

    this.letters = [];

    this.pianoKeys = [
        // ["E", "E", "E", "C", "E", "G", "G", "C", "G", "E",
        // "A", "B", "A#", "A", "G", "E", "G", "A", "F", "G",
        // "E", "C", "D", "B", "C", "G", "E", "A", "B", "A#",
        // "A", "G", "E", "G", "A", "F", "G", "E", "C", "D",
        // "B", "G", "F#", "F", "D#", "E", "G#", "A", "C", "A",
        // "C", "D", "G", "F#", "F", "D#", "E", "C", "C", "C",
        // "G", "F#", "F", "D#", "E", "G#", "A", "C", "A", "C",
        // "D", "D#", "D", "C", "C"
        // ],
        ["D", "E", "E", "E", "E", "E", "E", "D", "C", "C",
        "C", "C", "D", "D", "C", "B", "A", "A", "E", "E",
        "E", "E", "G", "G", "E", "C", "C", "D", "E", "D",
        "C", "D", "", "B", "A", "E", "F", "", "D", "E",
        "D", "E", "F", "G", "A", "B", "C", "B", "E", "D",
        "E", "F", "G", "C", "D", "E", "F", "G", "D", "E",
        "F", "G", "A", "B", "C", "B", "E", "F", "E", "A",
        "G", "B", "A", "A", "B"
        ]
    ];

    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let i = 1;

    while (i <= 75) {
        let randomLetter = alphabet[Math.floor(Math.random()*26)]

        if (this.letters[this.letters.length - 1] !== randomLetter) {
            this.letters.push(randomLetter);
            i++;
        }
    }
}

module.exports = Keys;