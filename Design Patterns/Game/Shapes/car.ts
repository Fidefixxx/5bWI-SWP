import { MoveStrategy } from "../Movements/MoveStrategy.js";
import { abstractShape } from "./abstractshape.js";
export class Car extends abstractShape {
  private image: HTMLImageElement = new Image();
  private loaded = false;
  constructor(protected movement: MoveStrategy) {
    super(movement);
    this.image.onload = () => (this.loaded = true);
    this.image.onerror = (e) =>
      console.error("Car image failed to load:", this.image.src, e);
    this.image.src = "./Shapes/car-image.png";
  }
  render(ctx: CanvasRenderingContext2D): void {
    if (!this.loaded) return;
    ctx.drawImage(
      this.image,
      this.movement.getX(),
      this.movement.getY(),
      50,
      30,
    );
  }
}
