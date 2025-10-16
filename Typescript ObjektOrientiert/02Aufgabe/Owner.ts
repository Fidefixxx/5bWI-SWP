export class Owner {
  private firstname: string;
  private lastname: string;
  private age: number;

  constructor(firstname: string, lastname: string, age: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  getName(): string {
    return this.firstname + " " + this.lastname;
  }
  setName(name: string): void {
    let names = name.split(" ");
    this.firstname = names[0];
    this.lastname = names[1];
  }

  getAge(): number {
    return this.age;
  }
  setAge(age: number): void {
    this.age = age;
  }
}
