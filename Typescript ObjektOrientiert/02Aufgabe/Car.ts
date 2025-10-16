import { Engine } from "./Engine.ts";
import { Owner } from "./Owner.ts";

export class Car {
  private color: string = "red";
  private model: string = "i3";
  private owner: Owner;
  private engine: Engine;

  constructor(color: string, model: string, owner: Owner, engine: Engine) {
    this.color = color;
    this.model = model;
    this.owner = owner;
    this.engine = engine;
  }

  getColor(): string {
    return this.color;
  }
  setColor(color: string): void {
    this.color = color;
  }

  getModel(): string {
    return this.model;
  }
  setModel(model: string): void {
    this.model = model;
  }

  getOwner(): Owner {
    return this.owner;
  }

  getEngine(): Engine {
    return this.engine;
  }
}
