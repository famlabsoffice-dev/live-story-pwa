import { db } from '../database';
import type { InterviewSession } from '../domain/interview/interview.types';

export const sessionRepository = {
  create: (session: InterviewSession) => db.interviews.add(session as never),
  getById: (id: string) => db.interviews.get(id),
  update: (id: string, data: Partial<InterviewSession>) => db.interviews.update(id, data as never)
};
