let movingRight = false;
let movingLeft = false;
let movingUp = false;
let movingDown = false;

let xpos = 300;
let ypos = 300;
let speed = 5;


let player;
let rock =[];
let rockYPos = 2;
let bg;

let centered;

// Load assets
function preload(){
    player = loadImage("images/NewCart.png");
    rock[0] = loadImage("images/Rock1.png");
    //rocks[1] = loadImage("image/Rock2");
    //rocks[2] = loadImage("image/Rock3");
    //rocks[3] = loadImage("image/Rock4");
    bg = loadImage("images/Background.png"); 

}

function centerCanvas(){
    //sets the variables that get the midpoint of the page and set it to the coordinates of the canvas
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    centered.position(x,y);
}

function setup() {
//Assigns the creation of the cavas to a variable that can be used later for positioning
centered = createCanvas(850,775);
//positions the canvas in the center
centerCanvas();



}

function draw() {
    background(bg);
  
  // draw character
    fill(0, 0, 255);
    image(player, xpos, ypos, 100, 75);

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