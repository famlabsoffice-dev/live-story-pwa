export type StoryProcessingStage =
  | "memory_extraction"
  | "timeline_mapping"
  | "chapter_generation"
  | "reflection";

export interface StoryMemoryInput {
  id: string;
  text: string;
  timestamp?: string;
  entities: string[];
}

export interface StoryChapter {
  id: string;
  title: string;
  summary: string;
  memories: string[];
}

export interface StoryIntelligenceResult {
  stage: StoryProcessingStage;
  chapters: StoryChapter[];
  confidence: number;
}
