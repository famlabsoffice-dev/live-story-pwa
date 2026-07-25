import type { InterviewAnswer } from "./interviewTypes";
import type { InterviewQuestion as Question } from "./questionTypes";

export interface FollowUpSuggestion {
  question: Question;
  reason: string;
  score: number;
}

export function suggestFollowUpQuestions(
  answer: InterviewAnswer,
  questions: Question[]
): FollowUpSuggestion[] {
  const text = answer.text.toLowerCase();

  return questions
    .filter((question) => question.type === "follow_up")
    .map((question) => ({
      question,
      reason: text.length > 80 ? "detailed_answer" : "expand_memory",
      score: text.length > 80 ? 0.9 : 0.6,
    }))
    .sort((a, b) => b.score - a.score);
}
