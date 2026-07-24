import type { Table } from "dexie";

import type { SyncQueueItem } from "../schema";

export type SyncQueueTable = Table<SyncQueueItem, string>;

export const syncQueueIndexes = {
  primary: "id",
  indexes: ["status", "createdAt", "entityType", "entityId"],
} as const;
