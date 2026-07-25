import { describe, expect, it } from "vitest";
import { createAIOrchestrationRuntimeService } from "./aiOrchestrationRuntimeService";

describe("AI orchestration runtime service", () => {
  it("executes memory analysis tasks", async () => {
    const service = createAIOrchestrationRuntimeService();

    const response = await service.execute({
      task: "memory_analysis",
      input: {
        context: {
          storyId: "story-1",
        },
        events: [],
      },
    });

    expect(response.task).toBe("memory_analysis");
    expect(response.result.storyId).toBe("story-1");
    expect(response.result.processedEvents).toBe(0);
    expect(response.result.generatedInsights.length).toBeGreaterThan(0);
  });

  it("processes story reconstruction tasks", async () => {
    const service = createAIOrchestrationRuntimeService();

    const response = await service.execute({
      task: "story_reconstruction",
      input: {
        context: {
          storyId: "story-2",
        },
        events: [
          {
            id: "event-1",
            type: "memory_created",
            storyId: "story-2",
            payload: {},
            metadata: {
              createdAt: new Date().toISOString(),
              source: "interview",
            },
          },
        ],
      },
    });

    expect(response.result.processedEvents).toBe(1);
    expect(response.task).toBe("story_reconstruction");
  });
});
