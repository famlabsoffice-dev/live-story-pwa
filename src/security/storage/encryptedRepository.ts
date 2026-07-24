import { getSecureItem, removeSecureItem, setSecureItem } from './secureStorage';

export class EncryptedRepository {
  constructor(private readonly key: CryptoKey) {}

  async save(id: string, data: Uint8Array): Promise<void> {
    await setSecureItem(id, data, this.key);
  }

  async find(id: string): Promise<Uint8Array | null> {
    return getSecureItem(id, this.key);
  }

  async delete(id: string): Promise<void> {
    await removeSecureItem(id);
  }
}
