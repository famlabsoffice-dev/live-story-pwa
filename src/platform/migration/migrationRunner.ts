export interface MigrationStep {
  fromVersion: number;
  toVersion: number;
  migrate(data: unknown): unknown;
}

export class MigrationRunner {
  constructor(private readonly migrations: MigrationStep[]) {}

  migrate(
    data: unknown,
    fromVersion: number,
    targetVersion: number,
  ): unknown {
    return this.migrations
      .filter(
        (migration) =>
          migration.fromVersion >= fromVersion &&
          migration.toVersion <= targetVersion,
      )
      .reduce(
        (current, migration) => migration.migrate(current),
        data,
      );
  }
}
