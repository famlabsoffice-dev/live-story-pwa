import type { AIOrchestrationInput, AIOrchestrationResult } from "./integration/aiOrchestrationIntegrationLayer";

export type AIReasoningTask =
  | "memory_analysis"
  | "story_reconstruction"
  | "chapter_generation"
  | "reflection"
  | "interview_adaptation";

export interface AIOrchestrationRequest {
  task: AIReasoningTask;
  input: AIOrchestrationInput;
  priority?: "low" | "normal" | "high";
}

export interface AIOrchestrationResponse {
  result: AIOrchestrationResult;
  task: AIReasoningTask;
  completedAt: string;
}

export interface AIOrchestrationInterface {
  execute(
    request: AIOrchestrationRequest,
  ): Promise<AIOrchestrationResponse>;
}

export function createAIOrchestrationRequest(
  task: AIReasoningTask,
  input: AIOrchestrationInput,
): AIOrchestrationRequest {
  return {
    task,
    input,
    priority: "normal",
  };
}
