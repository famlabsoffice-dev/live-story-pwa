export type QuestionType = 'open' | 'follow_up' | 'reflection';

export interface InterviewQuestion {
  id: string;
  text: string;
  type: QuestionType;
  chapter: string;
  order: number;
}
