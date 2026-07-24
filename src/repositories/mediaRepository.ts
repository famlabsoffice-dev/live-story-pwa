import { db } from "../database";
import type { Media } from "../database/schema";
import { BaseRepository } from "./baseRepository";

export class MediaRepository extends BaseRepository<Media> {
  constructor() {
    super(db.media);
  }
}

export const mediaRepository = new MediaRepository();
