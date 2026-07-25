export interface StorageRecord<T> {
  id: string;
  version: number;
  createdAt: string;
  updatedAt: string;
  data: T;
}

export interface StorageMigration {
  fromVersion: number;
  toVersion: number;
  migrate: (value: unknown) => unknown;
}
