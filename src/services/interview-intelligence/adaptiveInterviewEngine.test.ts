import { describe, expect, it } from "vitest";
import { AdaptiveInterviewEngine } from "./adaptiveInterviewEngine";

describe("AdaptiveInterviewEngine", () => {
  it("selects highest priority unanswered question", () => {
    const engine = new AdaptiveInterviewEngine();

    const result = engine.selectNextQuestion(
      [
        { id: "1", text: "Low", category: "family", priority: 1 },
        { id: "2", text: "High", category: "family", priority: 10 },
      ],
      { answeredQuestionIds: [], discoveredTopics: [] },
    );

    expect(result?.id).toBe("2");
  });
});
