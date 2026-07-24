import type { EncryptionPayload } from '../crypto/cryptoTypes';
import { encryptedRecordSchema, type EncryptedRecord } from './storageSchemas';
import { createStorageCryptoAdapter } from './storageCryptoAdapter';

export class EncryptedRepository<T extends object> {
  private records = new Map<string, EncryptedRecord>();
  private crypto: ReturnType<typeof createStorageCryptoAdapter>;

  constructor(key: CryptoKey, private collection: string) {
    this.crypto = createStorageCryptoAdapter(key);
  }

  async save(id: string, value: T): Promise<void> {
    const now = Date.now();
    const payload = await this.crypto.encrypt(value);
    this.records.set(id, encryptedRecordSchema.parse({
      id,
      collection: this.collection,
      payload,
      createdAt: now,
      updatedAt: now,
    }));
  }

  async get(id: string): Promise<T | null> {
    const record = this.records.get(id);
    if (!record) return null;

    return this.crypto.decrypt<T>(record.payload as EncryptionPayload);
  }

  delete(id: string): boolean {
    return this.records.delete(id);
  }
}
