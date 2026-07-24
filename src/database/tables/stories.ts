import type { Table } from "dexie";

import type { Story } from "../schema";

export type StoriesTable = Table<Story, string>;

export const storiesIndexes = {
  primary: "id",
  indexes: ["createdAt", "updatedAt", "title"],
} as const;
