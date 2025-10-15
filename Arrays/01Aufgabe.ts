interface Car {
  brand: string;
  model: string;
  price: number;
  year: number;
}

const cars: Car[] = [
  { brand: "Tesla", model: "Model 3", price: 42000, year: 2023 },
  { brand: "BMW", model: "i4", price: 56000, year: 2022 },
  { brand: "Mercedes-Benz", model: "C-Class", price: 48000, year: 2021 },
  { brand: "Volkswagen", model: "Golf", price: 25000, year: 2020 },
  { brand: "Audi", model: "A6", price: 52000, year: 2023 },
  { brand: "Toyota", model: "Corolla", price: 21000, year: 2019 },
  { brand: "Ford", model: "Mustang", price: 37000, year: 2022 },
  { brand: "Hyundai", model: "Ioniq 5", price: 45000, year: 2023 },
  { brand: "Kia", model: "Sportage", price: 31000, year: 2021 },
  { brand: "Porsche", model: "Taycan", price: 90000, year: 2024 },
];

// • Calculate total price
// Write a function getTotalPrice(cars: Car[]): number that adds up the price of all cars.
function getTotalPrice(cars: Car[]) {
  let sum = 0;
  cars.forEach((car) => {
    sum += car.price;
  });
  return sum;
}

function getTotalPricev2(cars: Car[]) {
  const sum = cars.reduce((a, car) => a + car.price, 0);
  return sum;
}

// 	• Print list of cars
// Write a function printCars(cars: Car[]): void that logs all cars nicely formatted to the console.
function printCars(cars: Car[]) {
  cars.forEach((car) => {
    console.log(car.brand, car.model);
  });
}

// 	• Filter expensive cars
// Write a function getExpensiveCars(cars: Car[], minPrice: number): Car[] that returns only the cars that are more expensive than a given value.
function getExpensiveCars(cars: Car[], minPrice: number) {
  let expensiveCars: Car[] = [];
  cars.forEach((car) => {
    if (car.price >= minPrice) {
      expensiveCars.push(car);
    }
  });
  return expensiveCars;
}

// 	1) Programmiere alle Funktionen mit for-each schleifen
// 	2) Programmiere die Funktionen ein 2tes mal (mit anderem Namen) mit den Array-Funktionen
// 		a. Filter
// 		b. Reduce
console.log(getTotalPrice(cars));
console.log(getTotalPricev2(cars));
printCars(cars);
console.log(getExpensiveCars(cars, 50000));
