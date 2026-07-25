import type { InterviewRepository } from "./interviewRepository";
import type { InterviewAnswer, InterviewSession } from "./interviewTypes";

export class InMemoryInterviewRepository implements InterviewRepository {
  private sessions = new Map<string, InterviewSession>();
  private answers = new Map<string, InterviewAnswer[]>();

  async saveSession(session: InterviewSession): Promise<void> {
    this.sessions.set(session.id, session);
  }

  async getSession(id: string): Promise<InterviewSession | undefined> {
    return this.sessions.get(id);
  }

  async saveAnswer(answer: InterviewAnswer): Promise<void> {
    const list = this.answers.get(answer.questionId) ?? [];
    this.answers.set(answer.questionId, [...list, answer]);
  }

  async getAnswers(sessionId: string): Promise<InterviewAnswer[]> {
    return this.answers.get(sessionId) ?? [];
  }
}
