import { Shape } from "./shape.js";
export class GameSave implements Shape {
  private static instance: GameSave | null = null;
  private constructor(
    private x: number,
    private y: number,
    private score: number,
  ) {}
  public static createInstance(): GameSave {
    if (this.instance !== null) {
      return this.instance;
    }
    this.instance = new GameSave(10, 30, 0);
    return this.instance;
  }
  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${this.score}`, this.x, this.y);
  }
  update(deltaTime: number): void {}
  increaseScore(amount: number): void {
    this.score += amount;
  }
}
