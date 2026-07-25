const encoder = new TextEncoder();
const decoder = new TextDecoder();

export async function createEncryptionKey(password: string): Promise<CryptoKey> {
  const material = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password) as BufferSource,
    'PBKDF2',
    false,
    ['deriveKey'],
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: encoder.encode('live-story-local') as BufferSource,
      iterations: 100000,
      hash: 'SHA-256',
    },
    material,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt'],
  );
}

export async function encryptData(value: string, key: CryptoKey): Promise<ArrayBuffer> {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv as BufferSource },
    key,
    encoder.encode(value) as BufferSource,
  );

  return encrypted;
}

export function decodeData(buffer: ArrayBuffer): string {
  return decoder.decode(buffer);
}
