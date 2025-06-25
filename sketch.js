let movingRight = false;
let movingLeft = false;

let xpos = 350;
let ypos = 770;
let speed = 5;

let player;
let bg;

// Load assets
function preload(){
    player = loadImage("images/NewCart.png");
    bg = loadImage("images/Background.png"); 
}

function centerCanvas(){
    var x = (windowWidth - width)/2;
    var y = (windowHeight - height)/2;
    y+=100;
    centered.position(x,y);
}
function setup() {
    
    centered = createCanvas(800, 800);
    centerCanvas();
}

function draw() {
    background(bg);
  
  // draw character
    fill(0, 0, 255);
    image(player, xpos, ypos, 120, 85);

    for(let i = 0; i < 10; i++){
        image(rock[0], Math.random, Math.random);
    }
    // Player movement
    if (movingRight) {
        xpos += speed;
    }
    if (movingLeft) {
        xpos -= speed;
    }

}
//Player input
function keyPressed() {
    if (key == 'a') {
        movingLeft = true;
    }
    if (key == 'd') {
        movingRight = true;
    }
}

function keyReleased() {
    if (key == 'a') {
        movingLeft = false;
    }
    if (key == 'd') {
        movingRight = false;
    }
}