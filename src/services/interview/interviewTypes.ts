export type InterviewStatus = 'planned' | 'active' | 'completed';

export interface InterviewSession {
  id: string;
  storyId: string;
  status: InterviewStatus;
  startedAt?: string;
  completedAt?: string;
}

export interface InterviewContext {
  sessionId: string;
  participantName?: string;
  currentChapter?: string;
  collectedFacts: string[];
}
