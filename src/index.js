document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    canvas.width = 1500;
    canvas.height = 1500;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.fillRect(200, 100, 1020, 500);
    ctx.strokeRect(200, 100, 1020, 500);
    
    ctx.strokeStyle = "black";
    ctx.strokeRect(200, 650, 1020, 100);
    
    let tiles = setInterval(init, 1000);
})

function init() {
    window.requestAnimationFrame(draw);
}


let x = 200;
let y = 100;
// let dx = 200;
let dy = 1;


function draw() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    // Tiles
    if (y <= 570) { // need to use collision detection
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillRect(300, y, 30, 30);
        ctx.font = "20px serif";
        ctx.fillStyle = "red";
        ctx.fillText("K", 300, y + 20);

        ctx.fillRect(400, y, 30, 30);
        ctx.fillRect(500, y, 30, 30);
        ctx.fillRect(600, y, 30, 30);
        ctx.fillRect(700, y, 30, 30);
        ctx.fillRect(800, y, 30, 30);
        ctx.fillRect(900, y, 30, 30);
        ctx.fillRect(1000, y, 30, 30);
        ctx.fillRect(1100, y, 30, 30);
        ctx.fill();
        ctx.closePath();
    }

    y += dy;



    window.requestAnimationFrame(draw);
}



