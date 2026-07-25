import type { StorageRecord } from './storageTypes';

export function validateStorageRecord(value: unknown): value is StorageRecord {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const record = value as Partial<StorageRecord>;

  return (
    typeof record.id === 'string' &&
    typeof record.createdAt === 'string' &&
    typeof record.updatedAt === 'string'
  );
}
