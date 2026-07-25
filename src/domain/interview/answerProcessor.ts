import type { InterviewAnswer } from "./interviewTypes";

export interface ProcessedAnswer {
  answer: InterviewAnswer;
  keywords: string[];
  wordCount: number;
}

export function processAnswer(
  answer: InterviewAnswer
): ProcessedAnswer {
  const words = answer.text
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  return {
    answer,
    keywords: words.slice(0, 5),
    wordCount: words.length,
  };
}
