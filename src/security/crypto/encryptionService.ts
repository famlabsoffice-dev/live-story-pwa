import type { EncryptionPayload } from './cryptoTypes';

export async function encryptData(
  data: Uint8Array,
  key: CryptoKey,
): Promise<EncryptionPayload> {
  const iv = crypto.getRandomValues(new Uint8Array(12));

  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    data,
  );

  return {
    ciphertext,
    iv,
    algorithm: 'AES-GCM',
  };
}

export async function decryptData(
  payload: EncryptionPayload,
  key: CryptoKey,
): Promise<Uint8Array> {
  const plaintext = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: payload.iv },
    key,
    payload.ciphertext,
  );

  return new Uint8Array(plaintext);
}
