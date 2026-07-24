import type { InterviewContext, InterviewQuestion } from "./types";

export class AdaptiveInterviewEngine {
  selectNextQuestion(
    questions: InterviewQuestion[],
    context: InterviewContext,
  ): InterviewQuestion | undefined {
    return [...questions]
      .filter((question) => !context.answeredQuestionIds.includes(question.id))
      .sort((a, b) => b.priority - a.priority)[0];
  }
}
