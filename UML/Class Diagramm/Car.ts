import { Securable } from './interfaces';
import { Door } from './Door';

/**
 * Represents a car with multiple doors
 */
export class Car implements Securable {
  private doors: Door[];

  /**
   * Creates a new car with the specified number of doors
   * @param numberOfDoors Number of doors the car should have
   */
  constructor(numberOfDoors: number = 4) {
    this.doors = [];
    for (let i = 0; i < numberOfDoors; i++) {
      this.doors.push(new Door());
    }
  }

  /**
   * Gets all doors of the car
   * @returns Array of Door objects
   */
  getDoors(): Door[] {
    return this.doors;
  }

  /**
   * Checks if all doors are locked
   * @returns true if all doors are locked, false otherwise
   */
  areAllDoorsLocked(): boolean {
    return this.doors.every(door => door.isLocked());
  }

  /**
   * Checks if the car is fully secured (all doors locked)
   * @returns true if all doors are locked, false otherwise
   */
  isFullySecured(): boolean {
    return this.areAllDoorsLocked();
  }
}

