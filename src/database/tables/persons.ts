import type { Table } from "dexie";

import type { Person } from "../schema";

export type PersonsTable = Table<Person, string>;

export const personsIndexes = {
  primary: "id",
  indexes: ["storyId", "lastName", "firstName", "birthDate"],
} as const;
