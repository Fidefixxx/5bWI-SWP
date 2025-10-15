export class Car {
  private color: string = "red";
  private model: string = "i3";

  constructor(model: string, public make: string) {
    this.model = model;
  }

  getColor(): string {
    return this.color;
  }
}
