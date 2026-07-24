import type { InterviewQuestion } from "./types";

export class QuestionRanking {
  rank(questions: InterviewQuestion[]): InterviewQuestion[] {
    return [...questions].sort((a, b) => b.priority - a.priority);
  }
}
