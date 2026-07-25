import type { StorageRecord } from './storageTypes';

export class IndexedDbStorage {
  constructor(private readonly databaseName = 'live-story') {}

  async save<T>(store: string, record: StorageRecord<T>): Promise<void> {
    const db = await this.open(store);
    db.set(record.id, record);
  }

  async get<T>(store: string, id: string): Promise<StorageRecord<T> | undefined> {
    const db = await this.open(store);
    return db.get(id) as StorageRecord<T> | undefined;
  }

  private stores = new Map<string, Map<string, unknown>>();

  private async open(store: string): Promise<Map<string, unknown>> {
    if (!this.stores.has(store)) this.stores.set(store, new Map());
    return this.stores.get(store)!;
  }
}
