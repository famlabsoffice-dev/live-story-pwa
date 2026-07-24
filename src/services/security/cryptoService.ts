import { webcrypto } from "crypto";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export async function deriveKey(secret: string): Promise<CryptoKey> {
  const material = await webcrypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    "PBKDF2",
    false,
    ["deriveKey"],
  );

  return webcrypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: encoder.encode("live-story-local-v1"),
      iterations: 120000,
      hash: "SHA-256",
    },
    material,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"],
  );
}

export async function encryptText(value: string, key: CryptoKey) {
  const iv = webcrypto.getRandomValues(new Uint8Array(12));
  const data = await webcrypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encoder.encode(value),
  );

  return {
    iv: Array.from(iv),
    payload: Array.from(new Uint8Array(data)),
  };
}

export async function decryptText(
  encrypted: { iv: number[]; payload: number[] },
  key: CryptoKey,
) {
  const result = await webcrypto.subtle.decrypt(
    { name: "AES-GCM", iv: new Uint8Array(encrypted.iv) },
    key,
    new Uint8Array(encrypted.payload),
  );

  return decoder.decode(result);
}
