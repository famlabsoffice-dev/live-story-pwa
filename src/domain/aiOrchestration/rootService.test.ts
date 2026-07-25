import { describe, expect, it } from "vitest";
import { AIOrchestrationRootService } from "./rootService";

describe("AIOrchestrationRootService", () => {
  it("adds completion event after orchestration", async () => {
    const service = new AIOrchestrationRootService({
      execute: async (request) => ({
        requestId: request.id,
        events: [],
      }),
    });

    const result = await service.orchestrate({
      id: "request-1",
    });

    expect(result.events).toHaveLength(1);
  });
});
