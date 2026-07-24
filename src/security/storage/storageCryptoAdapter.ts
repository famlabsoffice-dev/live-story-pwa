import { decryptData, encryptData } from '../crypto/encryptionService';

export function createStorageCryptoAdapter(key: CryptoKey) {
  return {
    encrypt: (value: unknown) =>
      encryptData(JSON.stringify(value), key),
    decrypt: async <T>(payload: Parameters<typeof decryptData>[0]) =>
      JSON.parse(await decryptData(payload, key)) as T,
  };
}
