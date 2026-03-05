// src/encryption/EncryptionContext.ts

import { EncryptionStrategy } from "./EncryptionStrategy";

export class EncryptionContext {
  constructor(private strategy: EncryptionStrategy) {}

  setStrategy(strategy: EncryptionStrategy) {
    this.strategy = strategy;
  }

  encrypt(text: string): string {
    return this.strategy.encrypt(text);
  }

  decrypt(text: string): string {
    return this.strategy.decrypt(text);
  }
}
