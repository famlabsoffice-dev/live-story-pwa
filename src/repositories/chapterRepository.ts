import { db } from "../database";
import type { Chapter } from "../database/schema";
import { BaseRepository } from "./baseRepository";

export class ChapterRepository extends BaseRepository<Chapter> {
  constructor() {
    super(db.chapters);
  }
}

export const chapterRepository = new ChapterRepository();
