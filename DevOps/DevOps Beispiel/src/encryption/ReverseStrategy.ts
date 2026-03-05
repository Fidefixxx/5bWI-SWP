// src/encryption/ReverseStrategy.ts

import { EncryptionStrategy } from "./EncryptionStrategy";

export class ReverseStrategy implements EncryptionStrategy {
  encrypt(text: string): string {
    return text.split("").reverse().join("");
  }

  decrypt(text: string): string {
    return text.split("").reverse().join("");
  }
}
