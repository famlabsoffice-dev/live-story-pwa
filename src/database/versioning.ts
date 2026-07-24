export interface DatabaseVersion {
  schemaVersion: number;
  migratedAt: number;
}

export const CURRENT_SCHEMA_VERSION = 1;

export function createDatabaseVersion(): DatabaseVersion {
  return {
    schemaVersion: CURRENT_SCHEMA_VERSION,
    migratedAt: Date.now(),
  };
}
