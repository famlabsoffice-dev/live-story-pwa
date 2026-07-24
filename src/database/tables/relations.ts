import type { Table } from "dexie";

import type { Relation } from "../schema";

export type RelationsTable = Table<Relation, string>;

export const relationsIndexes = {
  primary: "id",
  indexes: ["fromId", "toId", "type", "createdAt"],
} as const;
