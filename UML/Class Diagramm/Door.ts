import { Lockable } from './interfaces';

/**
 * Represents a door that can be locked and unlocked
 */
export class Door implements Lockable {
  private locked: boolean = false;

  /**
   * Locks the door
   */
  lock(): void {
    this.locked = true;
  }

  /**
   * Unlocks the door
   */
  unlock(): void {
    this.locked = false;
  }

  /**
   * Checks if the door is currently locked
   * @returns true if locked, false otherwise
   */
  isLocked(): boolean {
    return this.locked;
  }
}

