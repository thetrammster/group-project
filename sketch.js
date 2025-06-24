let movingRight = false;
let movingLeft = false;
let movingUp = false;
let movingDown = false;

let xpos = 300;
let ypos = 300;
let speed = 5;


let player;
function preload(){
    player = loadImage("images/NewCart.png");

}

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(220);
  
  // draw moving character
    fill(0, 0, 255);
    image(player, xpos, ypos, 100, 75);
  
    if (movingRight) {
        xpos += speed;
    }
    if (movingLeft) {
        xpos -= speed;
    }
    if (movingUp) {
        ypos -= speed;
    }
    if (movingDown) {
        ypos += speed;
    }
}
  
  


function keyPressed() {
    if (key == 'w') {
        movingUp = true;
    }
    if (key == 'a') {
        movingLeft = true;
    }
    if (key == 's') {
        movingDown = true;
    }
    if (key == 'd') {
        movingRight = true;
    }
}

function keyReleased() {
    if (key == 'w') {
        movingUp = false;
    }
    if (key == 'a') {
        movingLeft = false;
    }
    if (key == 's') {
        movingDown = false;
    }
    if (key == 'd') {
        movingRight = false;
    }
}