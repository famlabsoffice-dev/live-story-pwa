export type InterviewIntent =
  | "memory_recall"
  | "clarification"
  | "emotional_depth"
  | "timeline_reconstruction";

export interface InterviewContext {
  currentTopic: string;
  previousAnswers: string[];
  confidence: number;
}

export interface InterviewQuestion {
  id: string;
  question: string;
  intent: InterviewIntent;
  priority: number;
}

export interface InterviewSignal {
  sentiment?: "positive" | "neutral" | "difficult";
  missingDetails: string[];
  detectedEntities: string[];
}
