import type { InterviewSessionContext } from "./sessionContext";

export function getNextQuestion(
  context: InterviewSessionContext
) {
  const answeredIds = new Set(
    context.answers.map((answer) => answer.questionId)
  );

  return context.questions.find(
    (question) => !answeredIds.has(question.id)
  );
}

export function isInterviewComplete(
  context: InterviewSessionContext
): boolean {
  return context.questions.every((question) =>
    context.answers.some((answer) => answer.questionId === question.id)
  );
}
