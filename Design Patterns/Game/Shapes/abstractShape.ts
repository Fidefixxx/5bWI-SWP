import { Shape } from "./shape.js";
import { MoveStrategy } from "./../Movements/MoveStrategy.js";
export abstract class abstractShape implements Shape {
  abstract render(ctx: CanvasRenderingContext2D): void;

  constructor(protected movement: MoveStrategy) {}
  update(deltatime: number): void {
    this.movement.update(deltatime);
  }
}
