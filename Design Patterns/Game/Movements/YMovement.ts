import { MoveStrategy } from "./MoveStrategy.js";
export class YMovement implements MoveStrategy {
  constructor(
    private x: number,
    private y: number,
    private speed: number,
  ) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  update(deltaTime: number): void {
    this.y += this.speed * deltaTime;
    if (this.y > 600 && this.speed > 0) {
      this.y = 0;
    }
    if (this.y < 0 && this.speed < 0) {
      this.y = 600;
    }
  }
  getX(): number {
    return this.x;
  }
  getY(): number {
    return this.y;
  }
  getSpeed(): number {
    return this.speed;
  }
}
