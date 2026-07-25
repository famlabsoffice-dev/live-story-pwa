import { describe, expect, it } from "vitest";
import { detectMemoryTriggers } from "./memoryTriggerDetection";

describe("memory trigger detection", () => {
  it("detects year triggers", () => {
    const result = detectMemoryTriggers("Im Jahr 1985 begann ein neuer Abschnitt.");

    expect(result.some((trigger) => trigger.type === "time")).toBe(true);
  });
});
