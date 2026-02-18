export class XMovement {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    update(deltaTime) {
        this.x += this.speed * deltaTime;
        if (this.x > 800 && this.speed > 0) {
            this.x = 0;
        }
        if (this.x < 0 && this.speed < 0) {
            this.x = 800;
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
