class Rock{
    constructor(speed, x, y) {
        this.speed = speed;
        this.x = x;
        this.y = y;
        

        let rockSprite = loadImage("images/Rock1.png");
        image(rockSprite);
        
    }
    
    
}