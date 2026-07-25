import type { InterviewQuestion } from "./questionTypes";

export function selectQuestion(
  questions: InterviewQuestion[],
  completedQuestionIds: string[]
): InterviewQuestion | undefined {
  const completed = new Set(completedQuestionIds);

  return questions
    .filter((question) => !completed.has(question.id))
    .sort((a, b) => a.order - b.order)[0];
}
