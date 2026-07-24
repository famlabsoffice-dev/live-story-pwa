export type EncryptionAlgorithm = 'AES-GCM';

export interface EncryptionPayload {
  cipherText: string;
  iv: string;
  salt: string;
  algorithm: EncryptionAlgorithm;
  version: number;
}

export interface DerivedKeyConfig {
  iterations: number;
  hash: 'SHA-256' | 'SHA-512';
}

export interface KeyMaterial {
  key: CryptoKey;
  salt: Uint8Array;
}
