import { Shape } from "./shape.js";
import { MoveStrategy } from "./../Movements/MoveStrategy.js";
import { XMovement } from "./../Movements/XMovement.js";
import { YMovement } from "./../Movements/YMovement.js";
import { Circle } from "./circle.js";
import { Rectangle } from "./rectangle.js";
import { Car } from "./car.js";

export class shapeFactory {
  private canvasHeight: number;
  private canvasWidth: number;

  constructor(canvasHeight: number = 600, canvasWidth: number = 800) {
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
  }
  public createMovement(): MoveStrategy {
    const rndm = Math.floor(Math.random() * 2);
    const movement: MoveStrategy =
      rndm == 0
        ? new XMovement(
            Math.floor(Math.random() * this.canvasWidth),
            Math.floor(Math.random() * this.canvasHeight),
            Math.floor(Math.random() * 100),
          )
        : new YMovement(
            Math.floor(Math.random() * this.canvasWidth),
            Math.floor(Math.random() * this.canvasHeight),
            Math.floor(Math.random() * 100),
          );
    return movement;
  }
  private createCircle(): Shape {
    const circle: Circle = new Circle(
      this.createMovement(),
      Math.random() * 30,
    );
    return circle;
  }
  private createRectangle(): Shape {
    const rect: Rectangle = new Rectangle(
      this.createMovement(),
      Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 50),
    );
    return rect;
  }
  private createCar(): Shape {
    const car: Car = new Car(this.createMovement());
    return car;
  }

  public createRandomShape(): Shape {
    const rndm = Math.floor(Math.random() * 3);
    const shapeList = ["Circle", "Rectangle", "Car"];
    switch (shapeList[rndm]) {
      case "Circle":
        return this.createCircle();
      case "Rectangle":
        return this.createRectangle();
      case "Car":
        return this.createCar();
      default:
        console.log("Error");
        throw Error;
    }
  }
  public createRandomShapes(count: number): Shape[] {
    const shapeList: Shape[] = [];
    while (shapeList.length <= count) {
      const rndm = Math.floor(Math.random() * 3);
      const list = ["Circle", "Rectangle", "Car"];
      switch (list[rndm]) {
        case "Circle":
          shapeList.push(this.createCircle());
        case "Rectangle":
          shapeList.push(this.createRectangle());
        case "Car":
          shapeList.push(this.createCar());
        default:
          console.log("Error");
      }
    }
    return shapeList;
  }
}
