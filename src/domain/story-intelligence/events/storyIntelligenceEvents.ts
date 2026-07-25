export type StoryIntelligenceEventType =
  | "memory_created"
  | "memory_updated"
  | "memory_connected"
  | "story_pattern_detected"
  | "chapter_generated"
  | "interview_insight_created"
  | "reflection_generated";

export type StoryIntelligenceSource =
  | "interview"
  | "media"
  | "memory_graph"
  | "reasoning_layer"
  | "user_input";

export interface StoryIntelligenceEventMetadata {
  createdAt: string;
  source: StoryIntelligenceSource;
  confidence?: number;
  tags?: string[];
}

export interface StoryIntelligenceEvent<TPayload = unknown> {
  id: string;
  type: StoryIntelligenceEventType;
  storyId: string;
  payload: TPayload;
  metadata: StoryIntelligenceEventMetadata;
}

export interface MemoryCreatedEventPayload {
  memoryId: string;
  title?: string;
  content: string;
  occurredAt?: string;
}

export interface MemoryConnectedEventPayload {
  sourceMemoryId: string;
  targetMemoryId: string;
  relationship: string;
}

export interface StoryPatternDetectedEventPayload {
  patternId: string;
  description: string;
  relatedMemoryIds: string[];
}

export type StoryIntelligenceEventMap = {
  memory_created: StoryIntelligenceEvent<MemoryCreatedEventPayload>;
  memory_connected: StoryIntelligenceEvent<MemoryConnectedEventPayload>;
  story_pattern_detected: StoryIntelligenceEvent<StoryPatternDetectedEventPayload>;
  memory_updated: StoryIntelligenceEvent;
  chapter_generated: StoryIntelligenceEvent;
  interview_insight_created: StoryIntelligenceEvent;
  reflection_generated: StoryIntelligenceEvent;
};
