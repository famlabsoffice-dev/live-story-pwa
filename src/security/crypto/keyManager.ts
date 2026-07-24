import type { DerivedKeyConfig, KeyMaterial } from './cryptoTypes';

const DEFAULT_CONFIG: DerivedKeyConfig = {
  iterations: 310000,
  hash: 'SHA-256',
};

export async function deriveKey(
  password: string,
  salt?: Uint8Array,
  config: DerivedKeyConfig = DEFAULT_CONFIG,
): Promise<KeyMaterial> {
  const actualSalt = salt ?? crypto.getRandomValues(new Uint8Array(16));
  const encoder = new TextEncoder();
  const material = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveKey'],
  );

  const key = await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: actualSalt,
      iterations: config.iterations,
      hash: config.hash,
    },
    material,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt'],
  );

  return { key, salt: actualSalt };
}
