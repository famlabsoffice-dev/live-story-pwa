import { describe, expect, it } from "vitest";
import { calculateQuestionWeight } from "./questionWeighting";

describe("question weighting", () => {
  it("increases weight for missing categories", () => {
    const score = calculateQuestionWeight(
      { id: "q1", category: "family", type: "open", prompt: "Family", order: 1, required: false },
      { answeredQuestionIds: [], missingCategories: ["family"], emotionalKeywords: [] }
    );

    expect(score).toBeGreaterThan(0.5);
  });
});
