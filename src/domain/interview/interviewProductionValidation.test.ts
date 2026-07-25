import { describe, expect, it } from "vitest";
import { validateInterviewContext } from "./interviewProductionValidation";

describe("interview production validation", () => {
  it("detects invalid interview contexts", () => {
    const result = validateInterviewContext({
      session: {
        id: "",
        participant: { id: "p1", displayName: "Test" },
        status: "draft",
        mode: "guided",
        createdAt: "2026-01-01",
        updatedAt: "2026-01-01",
      },
      questions: [],
      answers: [],
      metadata: {},
    });

    expect(result.valid).toBe(false);
    expect(result.issues.length).toBeGreaterThan(0);
  });
});
