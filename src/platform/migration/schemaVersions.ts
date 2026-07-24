export interface SchemaVersion {
  version: number;
  description: string;
  releasedAt: string;
}

export const schemaVersions: SchemaVersion[] = [
  {
    version: 1,
    description: "Initial Live Story data schema",
    releasedAt: new Date().toISOString(),
  },
];

export const currentSchemaVersion =
  schemaVersions[schemaVersions.length - 1].version;
