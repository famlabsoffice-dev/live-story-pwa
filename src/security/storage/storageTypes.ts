export interface SecureStorageRecord<T> {
  id: string;
  encrypted: boolean;
  payload: T;
  createdAt: string;
  updatedAt: string;
}

export interface StorageAdapter {
  set<T>(id: string, value: T): Promise<void>;
  get<T>(id: string): Promise<T | null>;
  remove(id: string): Promise<void>;
}
