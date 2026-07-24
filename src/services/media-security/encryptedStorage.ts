export interface EncryptedMediaRecord {
  id: string;
  encryptedData: ArrayBuffer;
  hash: string;
  createdAt: string;
}

export function createMediaRecord(
  id: string,
  encryptedData: ArrayBuffer,
  hash: string
): EncryptedMediaRecord {
  return {
    id,
    encryptedData,
    hash,
    createdAt: new Date().toISOString(),
  };
}
