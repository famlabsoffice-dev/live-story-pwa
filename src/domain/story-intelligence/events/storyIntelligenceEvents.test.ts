import { describe, expect, it } from "vitest";
import type {
  StoryIntelligenceEvent,
  MemoryCreatedEventPayload,
} from "./storyIntelligenceEvents";

describe("Story intelligence event model", () => {
  it("supports typed memory creation events", () => {
    const payload: MemoryCreatedEventPayload = {
      memoryId: "memory-1",
      content: "First childhood memory",
      title: "Childhood",
    };

    const event: StoryIntelligenceEvent<MemoryCreatedEventPayload> = {
      id: "event-1",
      type: "memory_created",
      storyId: "story-1",
      payload,
      metadata: {
        createdAt: new Date().toISOString(),
        source: "interview",
        confidence: 0.9,
      },
    };

    expect(event.type).toBe("memory_created");
    expect(event.payload.memoryId).toBe("memory-1");
    expect(event.metadata.source).toBe("interview");
  });

  it("allows story pattern events", () => {
    const event: StoryIntelligenceEvent = {
      id: "event-2",
      type: "story_pattern_detected",
      storyId: "story-1",
      payload: {
        patternId: "pattern-1",
      },
      metadata: {
        createdAt: new Date().toISOString(),
        source: "reasoning_layer",
      },
    };

    expect(event.type).toBe("story_pattern_detected");
  });
});
