// src/encryption/XorStrategy.ts

import { EncryptionStrategy } from "./EncryptionStrategy";

export class XorStrategy implements EncryptionStrategy {
  constructor(private key: number = 7) {}

  encrypt(text: string): string {
    return [...text]
      .map((c) => String.fromCharCode(c.charCodeAt(0) ^ this.key))
      .join("");
  }

  decrypt(text: string): string {
    return this.encrypt(text);
  }
}
