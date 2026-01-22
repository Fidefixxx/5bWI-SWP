import { Securable } from './interfaces';
import { Door } from './Door';
import { Window } from './Window';

/**
 * Represents a house with doors and windows
 */
export class House implements Securable {
  private doors: Door[];
  private windows: Window[];

  /**
   * Creates a new house with the specified number of doors and windows
   * @param numberOfDoors Number of doors the house should have
   * @param numberOfWindows Number of windows the house should have
   */
  constructor(numberOfDoors: number = 2, numberOfWindows: number = 5) {
    this.doors = [];
    this.windows = [];

    for (let i = 0; i < numberOfDoors; i++) {
      this.doors.push(new Door());
    }

    for (let i = 0; i < numberOfWindows; i++) {
      this.windows.push(new Window());
    }
  }

  /**
   * Gets all doors of the house
   * @returns Array of Door objects
   */
  getDoors(): Door[] {
    return this.doors;
  }

  /**
   * Gets all windows of the house
   * @returns Array of Window objects
   */
  getWindows(): Window[] {
    return this.windows;
  }

  /**
   * Checks if the house is fully secured (all doors and windows locked)
   * @returns true if all doors and windows are locked, false otherwise
   */
  isFullySecured(): boolean {
    const allDoorsLocked = this.doors.every(door => door.isLocked());
    const allWindowsLocked = this.windows.every(window => window.isLocked());
    return allDoorsLocked && allWindowsLocked;
  }
}

