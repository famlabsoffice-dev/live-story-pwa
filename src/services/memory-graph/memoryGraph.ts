import type { MemoryEdge } from "./graphEdge";
import type { MemoryNode } from "./graphNode";

export class MemoryGraph {
  private nodes = new Map<string, MemoryNode>();
  private edges = new Map<string, MemoryEdge>();

  addNode(node: MemoryNode): void {
    this.nodes.set(node.id, node);
  }

  addEdge(edge: MemoryEdge): void {
    this.edges.set(edge.id, edge);
  }

  getNode(id: string): MemoryNode | undefined {
    return this.nodes.get(id);
  }

  getConnections(nodeId: string): MemoryEdge[] {
    return [...this.edges.values()].filter(
      (edge) => edge.sourceId === nodeId || edge.targetId === nodeId,
    );
  }

  getNodes(): MemoryNode[] {
    return [...this.nodes.values()];
  }

  get size(): number {
    return this.nodes.size;
  }
}
