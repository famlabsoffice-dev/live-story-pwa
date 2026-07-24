export interface BackupPackage<T = unknown> {
  createdAt: number;
  schemaVersion: number;
  data: T;
}

export function createBackup<T>(data: T, schemaVersion = 1): BackupPackage<T> {
  return {
    createdAt: Date.now(),
    schemaVersion,
    data,
  };
}

export function restoreBackup<T>(backup: BackupPackage<T>): T {
  return backup.data;
}
