import { Lockable } from './interfaces';

/**
 * Represents a window that can be locked and unlocked
 */
export class Window implements Lockable {
  private locked: boolean = false;

  /**
   * Locks the window
   */
  lock(): void {
    this.locked = true;
  }

  /**
   * Unlocks the window
   */
  unlock(): void {
    this.locked = false;
  }

  /**
   * Checks if the window is currently locked
   * @returns true if locked, false otherwise
   */
  isLocked(): boolean {
    return this.locked;
  }
}

