import { describe, expect, it } from "vitest";
import type {
  MemoryGraphEdge,
  MemoryGraphNode,
  MemoryGraphQuery,
} from "./memoryGraphAdapterContract";

describe("Memory graph adapter contract", () => {
  it("defines valid memory graph nodes", () => {
    const node: MemoryGraphNode = {
      id: "memory-1",
      type: "memory",
      label: "Childhood memory",
      createdAt: new Date().toISOString(),
    };

    expect(node.type).toBe("memory");
    expect(node.id).toBe("memory-1");
  });

  it("defines connections between memory nodes", () => {
    const edge: MemoryGraphEdge = {
      id: "edge-1",
      sourceId: "memory-1",
      targetId: "memory-2",
      relationship: "connected_to",
      weight: 0.8,
    };

    expect(edge.relationship).toBe("connected_to");
  });

  it("supports graph queries", () => {
    const query: MemoryGraphQuery = {
      storyId: "story-1",
      nodeTypes: ["memory"],
    };

    expect(query.storyId).toBe("story-1");
    expect(query.nodeTypes).toContain("memory");
  });
});
