export type ReasoningMode =
  | "context_analysis"
  | "memory_connection"
  | "life_pattern_detection"
  | "reflection";

export interface StoryReasoningContext {
  memories: string[];
  themes: string[];
  chapterIds: string[];
}

export interface StoryInsight {
  id: string;
  type: ReasoningMode;
  description: string;
  confidence: number;
}

export interface StoryReasoningResult {
  insights: StoryInsight[];
  confidence: number;
}
