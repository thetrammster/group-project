class Rock {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 50;
    }

    update() {
        this.y += rockspd;
    }

    display() {
        image(rock, this.x, this.y, this.w, this.h);
    }
}