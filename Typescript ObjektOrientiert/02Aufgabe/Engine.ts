export class Engine {
  private manufacturer: string;
  private hp: number;
  private fuel: string;

  constructor(manufacturer: string, hp: number, fuel: string) {
    this.manufacturer = manufacturer;
    this.hp = hp;
    this.fuel = fuel;
  }
  getManufacturer(): string {
    return this.manufacturer;
  }
  setManufacturer(manufacturer: string): void {
    this.manufacturer = manufacturer;
  }

  getHp(): number {
    return this.hp;
  }
  setHp(hp: number): void {
    this.hp = hp;
  }

  getFuel(): string {
    return this.fuel;
  }
  setFuel(fuel: string): void {
    this.fuel = fuel;
  }
}
