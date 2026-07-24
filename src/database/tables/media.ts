import type { Table } from "dexie";

import type { Media } from "../schema";

export type MediaTable = Table<Media, string>;

export const mediaIndexes = {
  primary: "id",
  indexes: ["storyId", "type", "createdAt", "updatedAt"],
} as const;
