import type { EncryptionAlgorithm } from './cryptoTypes';

const algorithm: EncryptionAlgorithm = 'AES-GCM';

export async function generateEncryptionKey(): Promise<CryptoKey> {
  return crypto.subtle.generateKey(
    {
      name: algorithm,
      length: 256,
    },
    true,
    ['encrypt', 'decrypt'],
  );
}

export async function exportKey(key: CryptoKey): Promise<ArrayBuffer> {
  return crypto.subtle.exportKey('raw', key);
}

export async function importKey(rawKey: ArrayBuffer): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    rawKey,
    { name: algorithm },
    true,
    ['encrypt', 'decrypt'],
  );
}
