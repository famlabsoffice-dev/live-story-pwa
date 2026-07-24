import Dexie, { type Table } from "dexie";

import type {
  Chapter,
  Interview,
  Media,
  Memory,
  Person,
  Place,
  Relation,
  Story,
  SyncQueueItem,
  Tag,
} from "./schema";

export class LiveStoryDatabase extends Dexie {
  stories!: Table<Story, string>;
  persons!: Table<Person, string>;
  chapters!: Table<Chapter, string>;
  interviews!: Table<Interview, string>;
  memories!: Table<Memory, string>;
  media!: Table<Media, string>;
  places!: Table<Place, string>;
  tags!: Table<Tag, string>;
  relations!: Table<Relation, string>;
  syncQueue!: Table<SyncQueueItem, string>;

  constructor() {
    super("LiveStoryDB");

    this.version(1).stores({
      stories: "id, createdAt, updatedAt, title",
      persons: "id, storyId, lastName",
      chapters: "id, storyId, order",
      interviews: "id, storyId, createdAt",
      memories: "id, storyId, date",
      media: "id, storyId, type",
      places: "id, name",
      tags: "id, name",
      relations: "id, fromId, toId, type",
      syncQueue: "id, status, createdAt",
    });
  }
}

export const db = new LiveStoryDatabase();
