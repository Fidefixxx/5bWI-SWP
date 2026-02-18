import { abstractShape } from "./abstractshape.js";
export class Rectangle extends abstractShape {
    constructor(movement, width, height) {
        super(movement);
        this.width = 0;
        this.height = 0;
        this.width = width;
        this.height = height;
    }
    render(ctx) {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.movement.getX(), this.movement.getY(), this.width, this.height);
    }
    inform(event, data) {
        if (event == "ClickEvent") {
            this.height += 5;
        }
    }
}
