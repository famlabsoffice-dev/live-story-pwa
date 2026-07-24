import { db } from "../database";
import type { Interview } from "../database/schema";
import { BaseRepository } from "./baseRepository";

export class InterviewRepository extends BaseRepository<Interview> {
  constructor() {
    super(db.interviews);
  }
}

export const interviewRepository = new InterviewRepository();
