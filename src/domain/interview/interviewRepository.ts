import type { InterviewAnswer, InterviewSession } from "./interviewTypes";

export interface InterviewRepository {
  saveSession(session: InterviewSession): Promise<void>;
  getSession(id: string): Promise<InterviewSession | undefined>;
  saveAnswer(answer: InterviewAnswer): Promise<void>;
  getAnswers(sessionId: string): Promise<InterviewAnswer[]>;
}
