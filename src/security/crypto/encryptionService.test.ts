import { describe, expect, it } from 'vitest';
import { deriveKey } from './keyManager';
import { decryptData, encryptData } from './encryptionService';

describe('local encryption core', () => {
  it('encrypts and decrypts data roundtrip', async () => {
    const { key } = await deriveKey('test-password');
    const encrypted = await encryptData('private story data', key);
    const result = await decryptData(encrypted, key);

    expect(result).toBe('private story data');
  });

  it('rejects wrong keys', async () => {
    const first = await deriveKey('correct-password');
    const second = await deriveKey('wrong-password');
    const encrypted = await encryptData('secret', first.key);

    await expect(decryptData(encrypted, second.key)).rejects.toThrow();
  });
});
