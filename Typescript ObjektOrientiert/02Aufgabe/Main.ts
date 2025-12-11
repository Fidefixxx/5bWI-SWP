import { Car } from "./Car.ts";
import { Engine } from "./Engine.ts";
import { Owner } from "./Owner.ts";

let owner: Owner = new Owner("Peter", "Gsteu", 18);
let engine: Engine = new Engine("Motorola", 753, "Diesel");
let car: Car = new Car("darkdreen", "mx3", owner, engine);

console.log(car);
car.getEngine().setHp(13254);
console.log(car);
car.getOwner().setName("Matteo Kleber");
console.log(car);
car.setColor("blue");
console.log(car.getOwner().getName() + " | " + car.getColor());
