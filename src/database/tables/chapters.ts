import type { Table } from "dexie";

import type { Chapter } from "../schema";

export type ChaptersTable = Table<Chapter, string>;

export const chaptersIndexes = {
  primary: "id",
  indexes: ["storyId", "order", "createdAt", "updatedAt"],
} as const;
