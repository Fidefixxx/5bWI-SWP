import { abstractShape } from "./abstractshape.js";
export class Circle extends abstractShape {
    constructor(movement, radius, score) {
        super(movement);
        this.movement = movement;
        this.radius = radius;
        this.score = score;
        this.color = "#0000FF";
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    update(deltatime) {
        super.update(deltatime);
        if (this.movement.getX() >= 400) {
            this.score?.increaseScore(1);
        }
    }
    inform(event, data) {
        console.log("Circle Event:" + event + "\nData:" + "\nX:", data.x + "\nY:", data.y);
        if (event == "ClickEvent") {
            this.color = this.color === "#0000FF" ? "#FF0000" : "#00FF00";
        }
    }
}
