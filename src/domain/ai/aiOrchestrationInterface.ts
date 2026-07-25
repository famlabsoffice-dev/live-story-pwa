export interface InterviewAIContext {
  sessionId: string;
  content: unknown;
}

export interface StoryAnalysisInput {
  storyId: string;
  fragments: unknown[];
}

export interface AIProcessingResult {
  success: boolean;
  output?: unknown;
}

export interface StoryAnalysisResult {
  insights: unknown[];
}

export interface AIOrchestrationInterface {
  processInterviewContext(
    context: InterviewAIContext
  ): Promise<AIProcessingResult>;

  requestStoryAnalysis(
    storyInput: StoryAnalysisInput
  ): Promise<StoryAnalysisResult>;
}
