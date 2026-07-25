import type { InterviewAnswer } from "./interviewTypes";
import type { InterviewSessionContext } from "./sessionContext";

export interface InterviewValidationResult {
  valid: boolean;
  issues: string[];
}

export function validateInterviewContext(
  context: InterviewSessionContext
): InterviewValidationResult {
  const issues: string[] = [];

  if (!context.session.id) {
    issues.push("missing_session_id");
  }

  if (context.answers.some((answer: InterviewAnswer) => !answer.text.trim())) {
    issues.push("empty_answer");
  }

  if (context.questions.length === 0) {
    issues.push("missing_questions");
  }

  return {
    valid: issues.length === 0,
    issues,
  };
}
