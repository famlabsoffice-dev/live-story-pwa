import type { InterviewQuestion } from '@/domain/interview/interview.types';

export function selectNextQuestion(
  questions: InterviewQuestion[],
  answeredIds: string[]
): InterviewQuestion | undefined {
  return questions
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.emotionalWeight - a.emotionalWeight)[0];
}
