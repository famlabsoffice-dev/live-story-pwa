export interface MigrationSnapshot {
  version: number;
  data: unknown;
  createdAt: string;
}

export function createMigrationSnapshot(
  version: number,
  data: unknown,
): MigrationSnapshot {
  return {
    version,
    data,
    createdAt: new Date().toISOString(),
  };
}

export function rollbackMigration(
  snapshot: MigrationSnapshot,
): unknown {
  return snapshot.data;
}
