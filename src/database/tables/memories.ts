import type { Table } from "dexie";

import type { Memory } from "../schema";

export type MemoriesTable = Table<Memory, string>;

export const memoriesIndexes = {
  primary: "id",
  indexes: ["storyId", "date", "createdAt", "updatedAt"],
} as const;
