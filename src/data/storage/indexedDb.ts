import type { StorageAdapter, StorageRecord } from './storageTypes';

const DATABASE_NAME = 'live-story';
const DATABASE_VERSION = 1;

export class IndexedDbAdapter implements StorageAdapter {
  private async open(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);

      request.onupgradeneeded = () => {
        const database = request.result;
        if (!database.objectStoreNames.contains('stories')) {
          database.createObjectStore('stories', { keyPath: 'id' });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async get<T extends StorageRecord>(store: string, id: string): Promise<T | null> {
    const database = await this.open();
    return new Promise((resolve, reject) => {
      const request = database.transaction(store).objectStore(store).get(id);
      request.onsuccess = () => resolve((request.result as T) ?? null);
      request.onerror = () => reject(request.error);
    });
  }

  async put<T extends StorageRecord>(store: string, value: T): Promise<void> {
    const database = await this.open();
    return new Promise((resolve, reject) => {
      const request = database.transaction(store, 'readwrite').objectStore(store).put(value);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async delete(store: string, id: string): Promise<void> {
    const database = await this.open();
    return new Promise((resolve, reject) => {
      const request = database.transaction(store, 'readwrite').objectStore(store).delete(id);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async getAll<T extends StorageRecord>(store: string): Promise<T[]> {
    const database = await this.open();
    return new Promise((resolve, reject) => {
      const request = database.transaction(store).objectStore(store).getAll();
      request.onsuccess = () => resolve(request.result as T[]);
      request.onerror = () => reject(request.error);
    });
  }
}
