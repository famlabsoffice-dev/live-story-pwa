import { describe, expect, it } from "vitest";
import { reconstructStory } from "./storyReconstruction";

describe("story reconstruction", () => {
  it("creates story fragments from answers", () => {
    const result = reconstructStory([
      {
        id: "a1",
        questionId: "q1",
        text: "My first memory was a garden.",
        capturedAt: new Date().toISOString(),
      },
    ]);

    expect(result.fragments).toHaveLength(1);
    expect(result.fragments[0].content).toContain("garden");
  });
});
