import type { Table } from "dexie";

import type { Place } from "../schema";

export type PlacesTable = Table<Place, string>;

export const placesIndexes = {
  primary: "id",
  indexes: ["name", "createdAt", "updatedAt"],
} as const;
