import { encryptionPayloadSchema } from './cryptoSchemas';
import type { EncryptionPayload } from './cryptoTypes';

function toBase64(value: Uint8Array): string {
  return btoa(String.fromCharCode(...value));
}

function fromBase64(value: string): Uint8Array {
  return Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
}

export async function encryptData(
  data: string,
  key: CryptoKey,
): Promise<EncryptionPayload> {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encoded = new TextEncoder().encode(data);
  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encoded,
  );

  return {
    cipherText: toBase64(new Uint8Array(encrypted)),
    iv: toBase64(iv),
    salt: '',
    algorithm: 'AES-GCM',
    version: 1,
  };
}

export async function decryptData(
  payload: EncryptionPayload,
  key: CryptoKey,
): Promise<string> {
  const validPayload = encryptionPayloadSchema.parse(payload);
  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: fromBase64(validPayload.iv) },
    key,
    fromBase64(validPayload.cipherText),
  );

  return new TextDecoder().decode(decrypted);
}
