import { describe, expect, it } from "vitest";
import { PipelineCoordinator } from "./pipelineCoordinator";

describe("PipelineCoordinator", () => {
  it("executes pipeline stages in order", async () => {
    const coordinator = new PipelineCoordinator<number, number>([
      {
        execute: async (value: unknown) => (value as number) + 1,
      },
      {
        execute: async (value: unknown) => (value as number) * 2,
      },
    ]);

    const result = await coordinator.execute(3, {
      sessionId: "session-1",
      storyId: "story-1",
    });

    expect(result.success).toBe(true);
    expect(result.output).toBe(8);
  });

  it("returns failed result when a stage throws", async () => {
    const coordinator = new PipelineCoordinator<string, string>([
      {
        execute: async () => {
          throw new Error("stage failed");
        },
      },
    ]);

    const result = await coordinator.execute("input", {
      sessionId: "session-1",
      storyId: "story-1",
    });

    expect(result.success).toBe(false);
    expect(result.error?.message).toBe("stage failed");
  });
});
