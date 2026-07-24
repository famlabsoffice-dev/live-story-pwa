export type InterviewStatus = 'draft' | 'active' | 'paused' | 'completed';

export type QuestionCategory =
  | 'childhood'
  | 'family'
  | 'school'
  | 'work'
  | 'relationships'
  | 'life_events'
  | 'legacy';

export interface Interview {
  id: string;
  storyId: string;
  personId: string;
  title: string;
  status: InterviewStatus;
  createdAt: string;
  updatedAt: string;
}

export interface InterviewSession {
  id: string;
  interviewId: string;
  startedAt: string;
  endedAt?: string;
  status: InterviewStatus;
}

export interface InterviewQuestion {
  id: string;
  category: QuestionCategory;
  text: string;
  order: number;
  emotionalWeight: number;
  followUps: string[];
}

export interface InterviewAnswer {
  id: string;
  sessionId: string;
  questionId: string;
  text?: string;
  audioId?: string;
  transcriptId?: string;
  createdAt: string;
}
