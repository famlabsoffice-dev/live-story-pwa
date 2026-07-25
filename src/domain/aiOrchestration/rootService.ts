import type { AIOrchestrationRequest, AIOrchestrationResult } from "./types";
import { createAIOrchestrationEvent } from "./events";

export interface AIOrchestrationDependencies {
  execute(request: AIOrchestrationRequest): Promise<AIOrchestrationResult>;
}

export class AIOrchestrationRootService {
  constructor(private readonly dependencies: AIOrchestrationDependencies) {}

  async orchestrate(request: AIOrchestrationRequest): Promise<AIOrchestrationResult> {
    const result = await this.dependencies.execute(request);

    return {
      ...result,
      events: [
        ...(result.events ?? []),
        createAIOrchestrationEvent({
          requestId: request.id,
          status: "completed",
        }),
      ],
    };
  }
}
