export interface StorageRecord {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface StorageAdapter {
  get<T extends StorageRecord>(store: string, id: string): Promise<T | null>;
  put<T extends StorageRecord>(store: string, value: T): Promise<void>;
  delete(store: string, id: string): Promise<void>;
  getAll<T extends StorageRecord>(store: string): Promise<T[]>;
}

export interface StorageMigration {
  version: number;
  migrate(): Promise<void>;
}
