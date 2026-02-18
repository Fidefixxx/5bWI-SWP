import { XMovement } from "./../Movements/XMovement.js";
import { YMovement } from "./../Movements/YMovement.js";
import { Circle } from "./circle.js";
import { Rectangle } from "./rectangle.js";
import { Car } from "./car.js";
export class shapeFactory {
    constructor(canvasHeight = 600, canvasWidth = 800) {
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
    }
    createMovement() {
        const rndm = Math.floor(Math.random() * 2);
        const movement = rndm == 0
            ? new XMovement(Math.floor(Math.random() * this.canvasWidth), Math.floor(Math.random() * this.canvasHeight), Math.floor(Math.random() * 100))
            : new YMovement(Math.floor(Math.random() * this.canvasWidth), Math.floor(Math.random() * this.canvasHeight), Math.floor(Math.random() * 100));
        return movement;
    }
    createCircle() {
        const circle = new Circle(this.createMovement(), Math.random() * 30);
        return circle;
    }
    createRectangle() {
        const rect = new Rectangle(this.createMovement(), Math.floor(Math.random() * 50), Math.floor(Math.random() * 50));
        return rect;
    }
    createCar() {
        const car = new Car(this.createMovement());
        return car;
    }
    createRandomShape() {
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
    createRandomShapes(count) {
        const shapeList = [];
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
