import { encryptData, decryptData } from '../crypto/encryptionService';

const storage = new Map<string, { ciphertext: ArrayBuffer; iv: Uint8Array }>();

export async function setSecureItem(
  id: string,
  value: Uint8Array,
  key: CryptoKey,
): Promise<void> {
  const encrypted = await encryptData(value, key);

  storage.set(id, {
    ciphertext: encrypted.ciphertext,
    iv: encrypted.iv,
  });
}

export async function getSecureItem(
  id: string,
  key: CryptoKey,
): Promise<Uint8Array | null> {
  const record = storage.get(id);

  if (!record) {
    return null;
  }

  return decryptData(
    {
      ciphertext: record.ciphertext,
      iv: record.iv,
      algorithm: 'AES-GCM',
    },
    key,
  );
}

export async function removeSecureItem(id: string): Promise<void> {
  storage.delete(id);
}
