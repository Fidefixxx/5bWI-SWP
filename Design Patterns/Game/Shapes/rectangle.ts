import { MoveStrategy } from "../Movements/MoveStrategy.js";
import { Observer } from "../Observer/Observer.js";
import { abstractShape } from "./abstractshape.js";

export class Rectangle extends abstractShape implements Observer {
  private width: number = 0;
  private height: number = 0;
  constructor(movement: MoveStrategy, width: number, height: number) {
    super(movement);
    this.width = width;
    this.height = height;
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(
      this.movement.getX(),
      this.movement.getY(),
      this.width,
      this.height,
    );
  }
  inform(event: string, data?: any): void {
    if (event == "ClickEvent") {
      this.height += 5;
    }
  }
}
