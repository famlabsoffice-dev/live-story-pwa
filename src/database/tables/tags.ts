import type { Table } from "dexie";

import type { Tag } from "../schema";

export type TagsTable = Table<Tag, string>;

export const tagsIndexes = {
  primary: "id",
  indexes: ["name", "createdAt"],
} as const;
