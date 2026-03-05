// src/encryption/CaesarStrategy.ts

import { EncryptionStrategy } from "./EncryptionStrategy";

export class CaesarStrategy implements EncryptionStrategy {
  constructor(private shift: number = 3) {}

  encrypt(text: string): string {
    return [...text]
      .map((c) => String.fromCharCode(c.charCodeAt(0) + this.shift))
      .join("");
  }

  decrypt(text: string): string {
    return [...text]
      .map((c) => String.fromCharCode(c.charCodeAt(0) - this.shift))
      .join("");
  }
}
