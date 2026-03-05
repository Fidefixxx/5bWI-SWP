// tests/encryption.test.ts

import { describe, it, expect } from "vitest";

import { EncryptionContext } from "../src/encryption/EncryptionContext";
import { CaesarStrategy } from "../src/encryption/CaesarStrategy";
import { ReverseStrategy } from "../src/encryption/ReverseStrategy";
import { XorStrategy } from "../src/encryption/XorStrategy";

describe("Encryption Strategies", () => {
  const text = "hello";

  it("CaesarStrategy encrypt/decrypt", () => {
    const context = new EncryptionContext(new CaesarStrategy(3));

    const encrypted = context.encrypt(text);
    const decrypted = context.decrypt(encrypted);

    expect(decrypted).toBe(text);
  });

  it("ReverseStrategy encrypt/decrypt", () => {
    const context = new EncryptionContext(new ReverseStrategy());

    const encrypted = context.encrypt(text);
    const decrypted = context.decrypt(encrypted);

    expect(decrypted).toBe(text);
  });

  it("XorStrategy encrypt/decrypt", () => {
    const context = new EncryptionContext(new XorStrategy(5));

    const encrypted = context.encrypt(text);
    const decrypted = context.decrypt(encrypted);

    expect(decrypted).toBe(text);
  });
});
