import { db } from "../database";
import type { InterviewAnswer } from "../domain/interview/interview.types";

export const answerRepository = {
  create: (answer: InterviewAnswer) => db.memories.add(answer as never),
  getById: (id: string) => db.memories.get(id),
  update: (id: string, data: Partial<InterviewAnswer>) => db.memories.update(id, data as never),
};
