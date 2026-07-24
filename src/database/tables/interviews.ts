import type { Table } from "dexie";

import type { Interview } from "../schema";

export type InterviewsTable = Table<Interview, string>;

export const interviewsIndexes = {
  primary: "id",
  indexes: ["storyId", "createdAt"],
} as const;
