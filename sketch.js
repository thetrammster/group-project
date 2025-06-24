let movingRight = false;
let movingLeft = false;
let movingUp = false;
let movingDown = false;

let xpos = 300;
let ypos = 300;
let speed = 5;


let player;
let rock1;
let rock2;
let rock3;
let rock4;


// Load assets
function preload(){
    player = loadImage("images/NewCart.png");
    rock1 = loadImage("image/Rock1.png");
    //rocks[1] = loadImage("image/Rock2");
    //rocks[2] = loadImage("image/Rock3");
    //rocks[3] = loadImage("image/Rock4");

}

function setup() {
    createCanvas(600, 600);
    image(rock1, 100, 100, 100, 100);
}

function draw() {
    background(220);
  
  // draw character
    fill(0, 0, 255);
    image(player, xpos, ypos, 100, 75);
    

    // Player movement
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

    //Makign the rocks fall
    


}
//Player input
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