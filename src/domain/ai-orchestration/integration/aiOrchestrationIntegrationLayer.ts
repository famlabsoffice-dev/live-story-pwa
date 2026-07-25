import type { StoryIntelligenceEvent } from "../../story-intelligence/events/storyIntelligenceEvents";
import type { InterviewIntelligenceExport } from "../../interview-intelligence/export/interviewIntelligenceExportApi";

export interface AIOrchestrationContext {
  storyId: string;
  userId?: string;
  sessionId?: string;
}

export interface AIOrchestrationInput {
  context: AIOrchestrationContext;
  events: StoryIntelligenceEvent[];
  interviewExport?: InterviewIntelligenceExport;
}

export interface AIOrchestrationResult {
  storyId: string;
  processedEvents: number;
  generatedInsights: string[];
  createdAt: string;
}

export interface AIOrchestrationIntegrationLayer {
  process(input: AIOrchestrationInput): Promise<AIOrchestrationResult>;
}

export function createAIOrchestrationInput(
  context: AIOrchestrationContext,
  events: StoryIntelligenceEvent[],
  interviewExport?: InterviewIntelligenceExport,
): AIOrchestrationInput {
  return {
    context,
    events,
    interviewExport,
  };
}
