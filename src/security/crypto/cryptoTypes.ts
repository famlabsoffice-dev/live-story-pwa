export type EncryptionAlgorithm = 'AES-GCM';

export interface EncryptionKeyMetadata {
  id: string;
  algorithm: EncryptionAlgorithm;
  createdAt: string;
}

export interface EncryptionPayload {
  ciphertext: ArrayBuffer;
  iv: Uint8Array;
  algorithm: EncryptionAlgorithm;
}

export interface DecryptionInput {
  ciphertext: ArrayBuffer;
  iv: Uint8Array;
  algorithm: EncryptionAlgorithm;
}
