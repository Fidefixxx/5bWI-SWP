interface Vehicle {
  drive(): void;
}

class Car implements Vehicle {
  drive() {
    console.log("Driving a car");
  }

  getMake() {
    return "Toyota";
  }
}

class RaceCar extends Car {
  setPowerMode() {
    console.log("Power mode activated!");
  }

  drive() {
    console.log("Driving a race car fast!");
  }
}

class Van extends Car {
  private nrofseats: number = 5;
  setNumberofSeats(nrofseats: number) {
    this.nrofseats = nrofseats;
  }
}

class Garage {
  private Vehicles: Vehicle[] = [];
  addVehicle(newVehicle: Vehicle) {
    this.Vehicles.push(newVehicle);
  }

  printAllVehicles() {
    this.Vehicles.map((v) => {
      
      console.log(type of v);
    });
  }
}

const garage = new Garage();
const racecar = new RaceCar();
const van = new Van();
garage.addVehicle(racecar);
garage.addVehicle(racecar);
garage.addVehicle(van);
garage.printAllVehicles();
