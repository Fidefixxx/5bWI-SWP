// src/encryption/EncryptionStrategy.ts

export interface EncryptionStrategy {
  encrypt(text: string): string;
  decrypt(text: string): string;
}
