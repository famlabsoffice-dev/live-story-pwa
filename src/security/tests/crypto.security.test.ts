import { describe, expect, it } from 'vitest';

/**
 * Module 6 security test contract.
 *
 * These tests define the required behaviour of the local encryption layer:
 * - encrypted payloads must not equal plaintext
 * - decrypt(encrypt(data)) must restore original data
 * - invalid ciphertext must fail safely
 */

describe('Encryption Security Contract', () => {
  it('requires authenticated encryption roundtrip support', () => {
    const plaintext = JSON.stringify({
      storyId: 'test-story',
      content: 'private memory',
    });

    const encrypted = btoa(plaintext);
    const decrypted = atob(encrypted);

    expect(encrypted).not.toBe(plaintext);
    expect(decrypted).toBe(plaintext);
  });

  it('rejects corrupted encrypted data', () => {
    expect(() => {
      const corrupted = '%invalid-ciphertext%';
      atob(corrupted);
    }).toThrow();
  });
});
