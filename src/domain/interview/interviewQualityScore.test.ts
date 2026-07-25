import { describe, expect, it } from "vitest";
import { calculateInterviewQualityScore } from "./interviewQualityScore";

describe("interview quality score", () => {
  it("calculates quality metrics from answers", () => {
    const result = calculateInterviewQualityScore([
      { id: "a1", questionId: "q1", text: "A detailed answer with many memories and context.", capturedAt: "2026-01-01" },
    ]);

    expect(result.total).toBeGreaterThan(0);
    expect(result.completeness).toBeGreaterThan(0);
  });
});
