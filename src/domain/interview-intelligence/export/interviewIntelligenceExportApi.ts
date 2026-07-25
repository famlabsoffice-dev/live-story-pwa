export type InterviewInsightType =
  | "memory_gap"
  | "important_event"
  | "emotion_marker"
  | "relationship_context"
  | "timeline_marker";

export interface InterviewInsight {
  id: string;
  sessionId: string;
  storyId: string;
  type: InterviewInsightType;
  summary: string;
  sourceQuestionId?: string;
  createdAt: string;
  confidence?: number;
}

export interface InterviewIntelligenceExport {
  storyId: string;
  sessionId: string;
  insights: InterviewInsight[];
  exportedAt: string;
  version: string;
}

export interface InterviewIntelligenceExportApi {
  exportSession(sessionId: string): Promise<InterviewIntelligenceExport>;
  getInsights(storyId: string): Promise<InterviewInsight[]>;
}

export function createInterviewIntelligenceExport(
  storyId: string,
  sessionId: string,
  insights: InterviewInsight[],
): InterviewIntelligenceExport {
  return {
    storyId,
    sessionId,
    insights,
    exportedAt: new Date().toISOString(),
    version: "1.0.0",
  };
}
