import type { InterviewQuestion } from "./questionTypes";

export interface QuestionWeightContext {
  answeredQuestionIds: string[];
  missingCategories: string[];
  emotionalKeywords: string[];
}

export function calculateQuestionWeight(
  question: InterviewQuestion,
  context: QuestionWeightContext
): number {
  let weight = question.required ? 1 : 0.5;

  if (!context.answeredQuestionIds.includes(question.id)) {
    weight += 0.2;
  }

  if (context.missingCategories.includes(question.category)) {
    weight += 0.3;
  }

  return Math.min(weight, 1);
}
