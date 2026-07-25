import type { AIOrchestrationEvent } from "./types";

export function createAIOrchestrationEvent(input: {
  requestId: string;
  status: string;
}): AIOrchestrationEvent {
  return {
    id: crypto.randomUUID(),
    type: "ai_orchestration_status",
    timestamp: new Date().toISOString(),
    payload: {
      requestId: input.requestId,
      status: input.status,
    },
  };
}
