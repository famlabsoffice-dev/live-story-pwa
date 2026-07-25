export type AIOrchestrationStatus = "pending" | "running" | "completed" | "failed";

export interface AIOrchestrationRequest {
  id: string;
  storyId?: string;
  prompt?: string;
  context?: Record<string, unknown>;
}

export interface AIOrchestrationEvent {
  id: string;
  type: string;
  timestamp: string;
  payload: Record<string, unknown>;
}

export interface AIOrchestrationResult {
  status: AIOrchestrationStatus;
  output?: unknown;
  events?: AIOrchestrationEvent[];
}
