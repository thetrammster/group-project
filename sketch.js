let movingRight = false;
let movingLeft = false;

let xpos = 350;
let ypos = 600;
let speed = 5;

let rockspd = 5;
let rockSpawnInterval = 60; 

let player;
let bg;
let rock;

let rocks = [];

let playerHitBox;

let score = 0;
let scoreDisplay = document.getElementById("scoreDisplay");


function preload() {
    player = loadImage("images/NewCart.png");
    bg = loadImage("images/Background.png");
    rock = loadImage("images/Rock1.png");
}

function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    y += 100;
    centered.position(x, y);
}

function setup() {
    centered = createCanvas(800, 800);
    centerCanvas();
}

function draw() {
    background(bg);

    // Draw player
    image(player, xpos, ypos, 120, 85);

    // Update player hitbox
    playerHitBox = createHitbox(xpos, ypos, 120, 85);

    // Player movement
    if (movingRight) {
        xpos += speed;
    }
    if (movingLeft) {
        xpos -= speed;
    }

    // Spawn a rock at intervals
    if (frameCount % rockSpawnInterval === 0) {
        rocks.push({ x: random(0, width - 50), y: 0 });
    }
    for (let i = 0; i < rocks.length; i++) {
        let currentRock = rocks[i];
        currentRock.y += rockspd;
        image(rock, currentRock.x, currentRock.y, 50, 50);

        // Create rock hitbox
        let rockHitBox = createHitbox(currentRock.x, currentRock.y, 50, 50);

        // Collision detection
        if (checkCollision(rockHitBox, playerHitBox)) {
            console.log("yo mama");
            rocks.splice(i, 1); // Remove rock on collision
            score += 1; // Increment score
            scoreDisplay.innerText = `Score: ${score}`; // Update score display


        } else if (currentRock.y > height + 50) {
            rocks.splice(i, 1); 
        }
    }

}

// Create a hitbox
function createHitbox(x, y, w, h) {
    return {
        x: x,
        y: y,
        w: w,
        h: h
    };
}

// Collision
function checkCollision(a, b) {
    return (
        a.x < b.x + b.w &&
        a.x + a.w > b.x &&
        a.y < b.y + b.h &&
        a.y + a.h > b.y
    );
}

// Player input
function keyPressed() {
    if (key === 'a' || key === 'A') {
        movingLeft = true;
    }
    if (key === 'd' || key === 'D') {
        movingRight = true;
    }
}

function keyReleased() {
    if (key === 'a' || key === 'A') {
        movingLeft = false;
    }
    if (key === 'd' || key === 'D') {
        movingRight = false;
    }
}

