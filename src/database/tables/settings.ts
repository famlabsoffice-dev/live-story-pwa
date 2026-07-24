import type { Table } from "dexie";

export interface Setting {
  key: string;
  value: string;
  updatedAt: Date;
}

export type SettingsTable = Table<Setting, string>;

export const settingsIndexes = {
  primary: "key",
  indexes: ["updatedAt"],
} as const;
