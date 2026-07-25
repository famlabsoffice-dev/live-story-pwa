export type QuestionCategory =
  | "childhood"
  | "family"
  | "education"
  | "career"
  | "relationships"
  | "life_events"
  | "reflection";

export type QuestionType = "open" | "follow_up" | "timeline";

export interface InterviewQuestion {
  id: string;
  category: QuestionCategory;
  type: QuestionType;
  prompt: string;
  order: number;
  required: boolean;
  followUpQuestionIds?: string[];
}

export interface QuestionResponseLink {
  questionId: string;
  answerId: string;
}
