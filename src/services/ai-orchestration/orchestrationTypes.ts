export type AIProcessingStage =
  | "memory_graph"
  | "adaptive_interview"
  | "story_intelligence"
  | "reasoning"
  | "agent_execution";

export interface AIOrchestrationInput {
  memoryId: string;
  content: string;
  topics: string[];
  consentGranted: boolean;
  encryptedStorage: boolean;
}

export interface AIOrchestrationResult {
  success: boolean;
  stages: AIProcessingStage[];
  insights: string[];
  blockedByPrivacy: boolean;
  confidence: number;
}
