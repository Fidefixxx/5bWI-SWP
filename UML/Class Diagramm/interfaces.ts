/**
 * Interface for objects that can be locked and unlocked
 */
export interface Lockable {
  lock(): void;
  unlock(): void;
  isLocked(): boolean;
}

/**
 * Interface for objects that can be checked for security status
 */
export interface Securable {
  isFullySecured(): boolean;
}

