import { describe, expect, it } from "vitest";
import { MemoryGraph } from "./memoryGraph";

describe("MemoryGraph", () => {
  it("stores memory nodes", () => {
    const graph = new MemoryGraph();

    graph.addNode({
      id: "123e4567-e89b-12d3-a456-426614174000",
      type: "person",
      label: "Anna",
      createdAt: new Date(),
      metadata: {},
    });

    expect(graph.size).toBe(1);
  });
});
