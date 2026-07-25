import type {
  InterviewIntelligenceExportAPI,
  InterviewSessionExport,
  StoryIntelligencePayload,
} from "../interview-intelligence/interviewIntelligenceExport";

import type { MemoryGraphAdapter, MemoryGraphNode } from "../memory-graph/memoryGraphAdapter";

export interface AIOrchestrationBridge {
  processInterviewSession(
    session: InterviewSessionExport
  ): Promise<StoryIntelligencePayload>;
}

/**
 * Integration layer connecting Module 03 Interview Engine
 * with Module 07 AI Orchestration and Memory Graph services.
 */
export class InterviewIntelligenceBridge implements AIOrchestrationBridge {
  constructor(
    private readonly exporter: InterviewIntelligenceExportAPI,
    private readonly memoryGraph: MemoryGraphAdapter
  ) {}

  async processInterviewSession(
    session: InterviewSessionExport
  ): Promise<StoryIntelligencePayload> {
    const payload = await this.exporter.exportSession(session);

    await Promise.all(
      payload.memories.map((memory) =>
        this.memoryGraph.createNode(this.toMemoryNode(memory))
      )
    );

    return payload;
  }

  private toMemoryNode(memory: StoryIntelligencePayload["memories"][number]): MemoryGraphNode {
    const now = new Date().toISOString();

    return {
      id: memory.id,
      type: "memory",
      label: memory.content,
      metadata: {
        insightType: memory.type,
        confidence: memory.confidence,
        sourceQuestionId: memory.sourceQuestionId,
      },
      createdAt: memory.createdAt || now,
      updatedAt: now,
    };
  }
}
