export type ReasoningMode =
  | 'context_analysis'
  | 'memory_connection'
  | 'reflection';

export interface ReasoningContext {
  memories: string[];
  mode: ReasoningMode;
}

export interface StoryInsight {
  text: string;
  confidence: number;
}
