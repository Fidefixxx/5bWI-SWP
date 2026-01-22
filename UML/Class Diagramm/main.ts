import { Car } from './Car';
import { House } from './House';
import { SecurityService } from './SecurityService';

/**
 * Main test scenarios for the security system
 */
function main() {
  console.log('=== Security Check Report ===');

  // Create a car with 4 doors
  const car = new Car(4);

  // Create a house with 2 doors and 5 windows
  const house = new House(2, 5);

  // Create security service
  const securityService = new SecurityService();

  // Lock some but not all doors/windows
  // Lock 3 out of 4 car doors
  const carDoors = car.getDoors();
  carDoors[0].lock();
  carDoors[1].lock();
  carDoors[2].lock();
  // Door 3 remains unlocked

  // Lock all house doors but only 2 out of 5 windows
  const houseDoors = house.getDoors();
  const houseWindows = house.getWindows();
  houseDoors[0].lock();
  houseDoors[1].lock();
  houseWindows[0].lock();
  houseWindows[1].lock();
  // Windows 2, 3, 4 remain unlocked

  // Check security status
  console.log(securityService.checkSecurity(car));
  console.log(securityService.checkSecurity(house));

  // Lock all remaining doors/windows
  console.log('\nAfter locking all...');
  carDoors[3].lock(); // Lock the last car door
  houseWindows[2].lock();
  houseWindows[3].lock();
  houseWindows[4].lock(); // Lock remaining windows

  // Check security status again
  console.log(securityService.checkSecurity(car));
  console.log(securityService.checkSecurity(house));
}

// Run the tests
main();

