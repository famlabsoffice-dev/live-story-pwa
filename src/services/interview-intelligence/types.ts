export interface InterviewQuestion {
  id: string;
  text: string;
  category: string;
  priority: number;
}

export interface InterviewContext {
  answeredQuestionIds: string[];
  currentChapter?: string;
  discoveredTopics: string[];
}
