import type { InterviewAnswer, InterviewSession } from "./interviewTypes";
import type { InterviewQuestion } from "./questionTypes";

export interface InterviewSessionContext {
  session: InterviewSession;
  currentQuestion?: InterviewQuestion;
  questions: InterviewQuestion[];
  answers: InterviewAnswer[];
  metadata: Record<string, string>;
}

export function createSessionContext(
  session: InterviewSession,
  questions: InterviewQuestion[] = []
): InterviewSessionContext {
  return {
    session,
    questions,
    answers: [],
    metadata: {},
  };
}
