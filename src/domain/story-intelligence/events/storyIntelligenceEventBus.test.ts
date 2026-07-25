import { describe, expect, it } from "vitest";
import { StoryIntelligenceEventBus } from "./storyIntelligenceEventBus";

describe("Story intelligence event bus", () => {
  it("dispatches events to subscribed handlers", async () => {
    const bus = new StoryIntelligenceEventBus();
    const received: string[] = [];

    bus.subscribe("memory_created", (event) => {
      received.push(event.type);
    });

    await bus.dispatch({
      id: "event-1",
      type: "memory_created",
      storyId: "story-1",
      payload: {
        memoryId: "memory-1",
      },
      metadata: {
        createdAt: new Date().toISOString(),
        source: "interview",
      },
    });

    expect(received).toEqual(["memory_created"]);
  });

  it("removes handlers through unsubscribe", async () => {
    const bus = new StoryIntelligenceEventBus();
    let count = 0;

    const unsubscribe = bus.subscribe("story_pattern_detected", () => {
      count += 1;
    });

    unsubscribe();

    await bus.dispatch({
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
    });

    expect(count).toBe(0);
  });
});
