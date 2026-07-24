import type { MemoryEdge } from "./graphEdge";

export class RelationshipResolver {
  resolve(edges: MemoryEdge[], sourceId: string): MemoryEdge[] {
    return edges
      .filter((edge) => edge.sourceId === sourceId || edge.targetId === sourceId)
      .sort((a, b) => b.confidence - a.confidence);
  }
}
