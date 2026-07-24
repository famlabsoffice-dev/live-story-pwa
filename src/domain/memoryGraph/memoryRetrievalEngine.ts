import type { MemoryGraph, MemoryNode } from "./types";

export interface MemorySearchResult {
  node: MemoryNode;
  score: number;
}

export interface MemoryRetrievalQuery {
  text: string;
  nodeTypes?: MemoryNode["type"][];
}

export class MemoryRetrievalEngine {
  constructor(private readonly graph: MemoryGraph) {}

  search(query: MemoryRetrievalQuery): MemorySearchResult[] {
    const normalized = query.text.toLowerCase().trim();

    return this.graph.nodes
      .filter((node) => {
        if (!query.nodeTypes) return true;
        return query.nodeTypes.includes(node.type);
      })
      .map((node) => ({
        node,
        score: this.calculateScore(node, normalized),
      }))
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score);
  }

  private calculateScore(node: MemoryNode, query: string): number {
    const label = node.label.toLowerCase();
    const description = node.description?.toLowerCase() ?? "";

    let score = 0;

    if (label.includes(query)) score += 1;
    if (description.includes(query)) score += 0.5;

    return score;
  }
}
