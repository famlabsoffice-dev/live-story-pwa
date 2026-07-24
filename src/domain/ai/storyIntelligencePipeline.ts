import type { MemoryGraph, MemoryNode } from "../memoryGraph/types";
import type { AgentContext, AgentResponse, AIStoryAgent } from "./agentArchitecture";

export interface StoryIntelligenceInput {
  prompt: string;
  graph: MemoryGraph;
  userId: string;
  consentGranted: boolean;
}

export interface StoryIntelligenceResult {
  memories: MemoryNode[];
  response: AgentResponse;
}

export class StoryIntelligencePipeline {
  constructor(private readonly agent: AIStoryAgent) {}

  async process(input: StoryIntelligenceInput): Promise<StoryIntelligenceResult> {
    const context: AgentContext = {
      userId: input.userId,
      memoryIds: input.graph.nodes.map((node) => node.id),
      consentGranted: input.consentGranted,
    };

    const response = await this.agent.execute(input.prompt, context);

    return {
      memories: input.graph.nodes,
      response,
    };
  }
}
