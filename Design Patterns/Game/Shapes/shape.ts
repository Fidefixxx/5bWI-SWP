export interface Shape {
  render(ctx: CanvasRenderingContext2D): void;
  update(deltaTime: number): void;
}
