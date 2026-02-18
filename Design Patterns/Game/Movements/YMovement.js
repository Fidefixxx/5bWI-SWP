export class YMovement {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    update(deltaTime) {
        this.y += this.speed * deltaTime;
        if (this.y > 600 && this.speed > 0) {
            this.y = 0;
        }
        if (this.y < 0 && this.speed < 0) {
            this.y = 600;
        }
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getSpeed() {
        return this.speed;
    }
}
