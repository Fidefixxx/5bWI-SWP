import { abstractShape } from "./abstractshape.js";
import { MoveStrategy } from "../Movements/MoveStrategy.js";
import { Observer } from "../Observer/Observer.js";
import { GameSave } from "./GameSave.js";
export class Circle extends abstractShape implements Observer {
  private color: string = "#0000FF";
  constructor(
    protected movement: MoveStrategy,
    protected radius: number,
    private score?: GameSave,
  ) {
    super(movement);
  }
  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.movement.getX(),
      this.movement.getY(),
      this.radius,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  }
  update(deltatime: number): void {
    super.update(deltatime);
    if (this.movement.getX() >= 400) {
      this.score?.increaseScore(1);
    }
  }
  inform(event: string, data?: any): void {
    console.log(
      "Circle Event:" + event + "\nData:" + "\nX:",
      data.x + "\nY:",
      data.y,
    );
    if (event == "ClickEvent") {
      this.color = this.color === "#0000FF" ? "#FF0000" : "#00FF00";
    }
  }
}
