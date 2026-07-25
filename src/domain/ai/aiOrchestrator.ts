import type { AIStoryAgent, AgentContext, AgentResponse } from "./agentArchitecture";

export class AIOrchestrator {
  constructor(private readonly agents: AIStoryAgent[]) {}

  async process(input: string, context: AgentContext): Promise<AgentResponse> {
    const agent = this.agents[0];

    if (!agent) {
      return {
        content: "No AI agent available.",
        confidence: 0,
      };
    }

    return agent.execute(input, context);
  }
}
