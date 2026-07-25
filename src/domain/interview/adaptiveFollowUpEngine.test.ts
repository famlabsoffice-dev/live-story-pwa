import { describe, expect, it } from "vitest";
import { suggestFollowUpQuestions } from "./adaptiveFollowUpEngine";

describe("adaptive follow up engine", () => {
  it("suggests follow up questions from answer context", () => {
    const result = suggestFollowUpQuestions(
      { id: "a1", questionId: "q1", text: "A detailed memory from childhood", capturedAt: "2026-01-01" },
      [
        { id: "q2", category: "childhood", type: "follow_up", prompt: "More details?", order: 2, required: false },
      ]
    );

    expect(result).toHaveLength(1);
    expect(result[0].question.id).toBe("q2");
  });
});
