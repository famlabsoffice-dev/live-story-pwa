import type { InterviewAnswer } from "./interviewTypes";

export interface InterviewQualityScore {
  completeness: number;
  detailDepth: number;
  narrativeDensity: number;
  total: number;
}

export function calculateInterviewQualityScore(
  answers: InterviewAnswer[]
): InterviewQualityScore {
  const completeness = answers.length > 0 ? Math.min(answers.length / 10, 1) : 0;
  const detailDepth = answers.length
    ? Math.min(answers.reduce((sum, answer) => sum + answer.text.length, 0) / 1000, 1)
    : 0;

  const narrativeDensity = Math.min(
    answers.filter((answer) => answer.text.length > 100).length / Math.max(answers.length, 1),
    1
  );

  return {
    completeness,
    detailDepth,
    narrativeDensity,
    total: (completeness + detailDepth + narrativeDensity) / 3,
  };
}
