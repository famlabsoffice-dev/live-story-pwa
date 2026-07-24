import { db } from "../database";
import type { Story } from "../database/schema";
import { BaseRepository } from "./baseRepository";

export class StoryRepository extends BaseRepository<Story> {
  constructor() {
    super(db.stories);
  }
}

export const storyRepository = new StoryRepository();
