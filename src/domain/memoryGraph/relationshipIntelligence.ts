import type { MemoryEdgeType, MemoryGraph } from "./types";

export interface RelationshipSuggestion {
  from: string;
  to: string;
  type: MemoryEdgeType;
  confidence: number;
}

export class RelationshipIntelligence {
  constructor(private readonly graph: MemoryGraph) {}

  suggestRelationships(): RelationshipSuggestion[] {
    const suggestions: RelationshipSuggestion[] = [];
    for (const first of this.graph.nodes) {
      for (const second of this.graph.nodes) {
        if (first.id === second.id) continue;
        const existing = this.graph.edges.some((edge) =>
          (edge.from === first.id && edge.to === second.id) ||
          (edge.from === second.id && edge.to === first.id),
        );
        if (existing) continue;
        if (first.type === "person" && second.type === "event") {
          suggestions.push({ from: first.id, to: second.id, type: "influenced_by", confidence: 0.4 });
        }
        if (first.type === "person" && second.type === "person") {
          suggestions.push({ from: first.id, to: second.id, type: "related_to", confidence: this.calculateSimilarity(first.label, second.label) });
        }
      }
    }
    return suggestions.sort((a, b) => b.confidence - a.confidence);
  }

  private calculateSimilarity(first: string, second: string): number {
    const a = new Set(first.toLowerCase().split(""));
    const b = new Set(second.toLowerCase().split(""));
    const intersection = [...a].filter((item) => b.has(item)).length;
    return Number((intersection / Math.max(a.size, b.size)).toFixed(2));
  }
}
