import { describe, expect, it } from "vitest";
import { aiOrchestrator } from "../ai-orchestration";

describe("AI orchestration", () => {
  it("blocks processing without privacy approval", () => {
    const result = aiOrchestrator.execute({
      memoryId: "memory-1",
      content: "childhood memory",
      topics: ["family"],
      consentGranted: false,
      encryptedStorage: true,
    });

    expect(result.blockedByPrivacy).toBe(true);
  });

  it("executes approved story processing flow", () => {
    const result = aiOrchestrator.execute({
      memoryId: "memory-1",
      content: "life event",
      topics: ["family", "career"],
      consentGranted: true,
      encryptedStorage: true,
    });

    expect(result.success).toBe(true);
    expect(result.stages.length).toBe(5);
  });
});
