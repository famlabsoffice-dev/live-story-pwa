export type InterviewInsightType =
  | "fact"
  | "memory"
  | "emotion"
  | "relationship"
  | "timeline_event";

export interface InterviewMemoryItem {
  id: string;
  type: InterviewInsightType;
  content: string;
  confidence?: number;
  sourceQuestionId?: string;
  createdAt: string;
}

export interface InterviewSessionExport {
  sessionId: string;
  personId: string;
  memories: InterviewMemoryItem[];
  completedAt?: string;
  metadata?: Record<string, unknown>;
}

export interface StoryIntelligencePayload {
  sessionId: string;
  memories: InterviewMemoryItem[];
  timelineCandidates: InterviewMemoryItem[];
}

/**
 * Export contract between Interview Engine (Module 03)
 * and AI Orchestration Layer (Module 07).
 */
export interface InterviewIntelligenceExportAPI {
  exportSession(
    session: InterviewSessionExport
  ): Promise<StoryIntelligencePayload>;

  extractTimeline(
    session: InterviewSessionExport
  ): Promise<InterviewMemoryItem[]>;

  extractMemories(
    session: InterviewSessionExport
  ): Promise<InterviewMemoryItem[]>;
}
