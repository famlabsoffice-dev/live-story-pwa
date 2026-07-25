import type { StorageMigration } from './storageTypes';

export class MigrationRegistry {
  private migrations: StorageMigration[] = [];

  register(migration: StorageMigration): void {
    this.migrations.push(migration);
  }

  migrate(value: unknown, fromVersion: number, targetVersion: number): unknown {
    return this.migrations
      .filter((item) => item.fromVersion >= fromVersion && item.toVersion <= targetVersion)
      .reduce((current, item) => item.migrate(current), value);
  }
}
