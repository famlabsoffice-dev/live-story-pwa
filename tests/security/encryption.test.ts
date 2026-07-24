import { createEncryptionKey, encryptData } from '@/security/crypto/encryption';

describe('Encryption', () => {
  it('creates encrypted payloads', async () => {
    const key = await createEncryptionKey();
    const encrypted = await encryptData('story-memory', key);

    expect(encrypted).toBeInstanceOf(ArrayBuffer);
  });
});
