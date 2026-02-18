import { MoveStrategy } from "./MoveStrategy.js";
export class XMovement implements MoveStrategy {
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
    this.x += this.speed * deltaTime;
    if (this.x > 800 && this.speed > 0) {
      this.x = 0;
    }
    if (this.x < 0 && this.speed < 0) {
      this.x = 800;
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
