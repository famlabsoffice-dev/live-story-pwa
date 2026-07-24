export type AgentRole =
  | "memory_agent"
  | "interview_agent"
  | "story_agent"
  | "privacy_agent";

export interface AgentContext {
  sessionId: string;
  userIntent: string;
  memoryIds: string[];
}

export interface AgentTask {
  id: string;
  role: AgentRole;
  action: string;
  priority: number;
}

export interface AgentResult {
  taskId: string;
  success: boolean;
  output: string;
}
