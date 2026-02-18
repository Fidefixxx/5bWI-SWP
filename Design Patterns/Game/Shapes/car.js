import { abstractShape } from "./abstractshape.js";
export class Car extends abstractShape {
    constructor(movement) {
        super(movement);
        this.movement = movement;
        this.image = new Image();
        this.loaded = false;
        this.image.onload = () => (this.loaded = true);
        this.image.onerror = (e) => console.error("Car image failed to load:", this.image.src, e);
        this.image.src = "./Shapes/car-image.png";
    }
    render(ctx) {
        if (!this.loaded)
            return;
        ctx.drawImage(this.image, this.movement.getX(), this.movement.getY(), 50, 30);
    }
}
