import { Securable } from './interfaces';
import { Car } from './Car';
import { House } from './House';

/**
 * Service for checking security status of securable objects
 */
export class SecurityService {
  /**
   * Checks the security status of a securable object and returns a report
   * @param securable The object to check (Car or House)
   * @returns A string report describing the security status
   */
  checkSecurity(securable: Securable): string {
    if (securable instanceof Car) {
      return this.checkCarSecurity(securable);
    } else if (securable instanceof House) {
      return this.checkHouseSecurity(securable);
    } else {
      return 'Unknown security object type';
    }
  }

  /**
   * Checks the security status of a car
   * @param car The car to check
   * @returns Security report for the car
   */
  private checkCarSecurity(car: Car): string {
    const doors = car.getDoors();
    const lockedDoors = doors.filter(door => door.isLocked()).length;
    const totalDoors = doors.length;

    if (car.isFullySecured()) {
      return `Car Security: SECURED (All doors locked)`;
    } else {
      const unlockedDoors = totalDoors - lockedDoors;
      return `Car Security: UNSECURED (${unlockedDoors} of ${totalDoors} doors unlocked)`;
    }
  }

  /**
   * Checks the security status of a house
   * @param house The house to check
   * @returns Security report for the house
   */
  private checkHouseSecurity(house: House): string {
    const doors = house.getDoors();
    const windows = house.getWindows();
    const lockedDoors = doors.filter(door => door.isLocked()).length;
    const lockedWindows = windows.filter(window => window.isLocked()).length;
    const totalDoors = doors.length;
    const totalWindows = windows.length;

    if (house.isFullySecured()) {
      return `House Security: SECURED (All doors and windows locked)`;
    } else {
      const unlockedDoors = totalDoors - lockedDoors;
      const unlockedWindows = totalWindows - lockedWindows;
      return `House Security: UNSECURED (${lockedDoors} of ${totalDoors} doors locked, ${unlockedWindows} of ${totalWindows} windows unlocked)`;
    }
  }
}

