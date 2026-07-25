import type { StorageMigration } from './storageTypes';

export const migrations: StorageMigration[] = [];

export async function runMigrations(): Promise<void> {
  for (const migration of migrations.sort((a, b) => a.version - b.version)) {
    await migration.migrate();
  }
}
