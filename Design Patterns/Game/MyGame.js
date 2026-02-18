// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Circle } from "./Shapes/circle.js";
import { XMovement } from "./Movements/XMovement.js";
import { shapeFactory } from "./Shapes/shapeFactory.js";
import { GameSave } from "./Shapes/GameSave.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.shapeList = [];
        this.observerList = [];
    }
    init() {
        console.log("Game started!");
        // const r1: Rectangle = new Rectangle(new XMovement(100, 200, 20), 50, 50);
        // const c1: Circle = new Circle(new XMovement(300, 300, -20), 20);
        // const c2: Circle = new Circle(new YMovement(200, 100, 30), 20);
        // this.addObserver(c1);
        // this.addObserver(c2);
        // this.addObserver(r1);
        // this.shapeList.push(c1);
        // this.shapeList.push(c2);
        // this.shapeList.push(r1);
        // this.shapeList.push(new Rectangle(new YMovement(200, 200, 30), 30, 30));
        // this.shapeList.push(new Car(new XMovement(500, 220, 20)));
        const SF = new shapeFactory();
        //this.shapeList.push(SF.createRandomShape());
        const shapes = SF.createRandomShapes(10);
        this.shapeList.push(...shapes);
        const s1 = GameSave.createInstance();
        this.shapeList.push(s1);
        const c1 = new Circle(new XMovement(300, 300, 60), 20, s1);
        const c2 = new Circle(new XMovement(200, 200, 100), 10, s1);
        this.shapeList.push(c1);
        this.shapeList.push(c2);
    }
    update(deltaTime) {
        for (let shape of this.shapeList) {
            shape.update(deltaTime);
        }
        //console.log("update:", deltaTime);
    }
    render(ctx) {
        // Draw shapeList
        for (let shape of this.shapeList) {
            shape.render(ctx);
        }
    }
    addObserver(observer) {
        this.observerList.push(observer);
    }
    informObservers(event, data) {
        for (let observer of this.observerList) {
            observer.inform(event, data);
        }
    }
    onMouseClick(x, y) {
        console.log("Clicked at:", x, y);
        this.informObservers("ClickEvent", { x, y });
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
