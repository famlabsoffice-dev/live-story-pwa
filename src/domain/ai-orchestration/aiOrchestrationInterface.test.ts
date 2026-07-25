import { describe, expect, it } from "vitest";
import {
  createAIOrchestrationRequest,
} from "./aiOrchestrationInterface";

const input = {
  context: {
    storyId: "story-1",
  },
  events: [],
};

describe("AI orchestration interface", () => {
  it("creates a valid orchestration request", () => {
    const request = createAIOrchestrationRequest(
      "memory_analysis",
      input,
    );

    expect(request.task).toBe("memory_analysis");
    expect(request.priority).toBe("normal");
    expect(request.input.context.storyId).toBe("story-1");
  });

  it("supports story reconstruction tasks", () => {
    const request = createAIOrchestrationRequest(
      "story_reconstruction",
      input,
    );

    expect(request.task).toBe("story_reconstruction");
  });
});
