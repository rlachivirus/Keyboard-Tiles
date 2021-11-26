// import * as Tone from "tone";
// import "./styles/index";
// import "./scripts/keys.js";
// import "./scripts/letters.js";
const Game = require("./scripts/game");

document.addEventListener("DOMContentLoaded", function () {
                
    let game = new Game();
    
    document.getElementById("play").addEventListener("click", () => {
        let tutorial = document.getElementById("tutorial")
        let pressedKey = document.getElementById("pressed-key");
        pressedKey.style.display = "";
        tutorial.style.display = "none";
    })

    document.getElementById("pressed-key").addEventListener("click", () => {
        if (game.status !== "play") {
            game.gameStart()
        }
    });

    let pauseEle = document.getElementById("pause");
    pauseEle.addEventListener("click", () => {
        if (game.pause === "pause") {
            game.pause = "resume";
        } else if (game.pause === "resume") {
            game.pause = "pause";
        }
    });

    /* RESTARTING THE GAME */
    // document.getElementById("restart").addEventListener("click", () => {
    //     game.gameRestart();
    //     document.getElementById("pressed-key").addEventListener("click", () => { game.gameStart() });
    // });


    document.addEventListener("keydown", function (e) {
        let words = document.getElementById("words");
        let synth = new Tone.Synth()//.toDestination();
        synth.oscillator.type = "sine";
        synth.toMaster();

            if (e.key === words.children[0].id) {
                
                synth.triggerAttackRelease(words.children[0].className + "5", "6n");
                words.firstElementChild.remove();

                let score = document.getElementById("score");
                console.log(game.score);
                game.score += 10;
                score.innerText = game.score;
            }
    });

});

// /* Given the coordinates, creates a ball element */
// const createBall = (top, left) => {
//     const $ball = document.createElement("div");
//     $ball.classList.add("ball");
//     let node = document.createTextNode("FALLING");
//     $ball.appendChild(node);
//     $ball.style.top = top + "px";
//     $ball.style.left = left - 25 + "px";
//     document.body.appendChild($ball);
//     return $ball;
// };

// const initFalling = ball => {
//     /* Constants */
//     const ballHeight = 50
//     const acceleration = 9.8 / 60;
//     const { innerHeight } = window;

//     /* Variable to denote the speed of the ball */
//     let fallingSpeed = 0;
//     const animateFall = () => {
//         const top = parseInt(ball.style.top);
//         const newTop = `${top + fallingSpeed}px`;

//         /* To break the fall, when the ball is near the surface */
//         if (parseInt(newTop) >= innerHeight - ballHeight) {
//             ball.style.top = this.innerHeight - ballHeight + "px";
//             ball.style.background = "red";
//             return null;
//         }

//         /* Else set the top to the new value */
//         ball.style.top = newTop;
//         fallingSpeed = fallingSpeed + acceleration;
//         requestAnimationFrame(animateFall);
//     };

//     /* Fire the first animation */
//     requestAnimationFrame(animateFall);
// };

// /* Event handler */
// const onClickListener = event => {
//     const { x, y } = event;
//     /*
//     The event coordinates and the positioning coordinates 
//      are inverted. That is 'x' here refers to the left in positioning.
//      */
//     setInterval(() => {
//     const ball = createBall(y, x);
//     initFalling(ball)
//     }, 2000)
// };

// /* Attach on-click listener to document */
// document.addEventListener("click", onClickListener, false);