export interface AgentContext {
  userId: string;
  memoryIds: string[];
  consentGranted: boolean;
}

export interface AgentResponse {
  content: string;
  confidence: number;
}

export interface AIStoryAgent {
  execute(input: string, context: AgentContext): Promise<AgentResponse>;
}

export class StoryMemoryAgent implements AIStoryAgent {
  async execute(input: string, context: AgentContext): Promise<AgentResponse> {
    if (!context.consentGranted) {
      return {
        content: "AI processing requires user consent.",
        confidence: 0,
      };
    }

    return {
      content: input,
      confidence: context.memoryIds.length > 0 ? 0.7 : 0.3,
    };
  }
}
