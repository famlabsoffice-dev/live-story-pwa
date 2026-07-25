import type { MemoryEdge, MemoryGraph, MemoryNode } from "./types";

export class MemoryGraphCore {
  private readonly graph: MemoryGraph;

  constructor(initialGraph: MemoryGraph = { nodes: [], edges: [] }) {
    this.graph = {
      nodes: [...initialGraph.nodes],
      edges: [...initialGraph.edges],
    };
  }

  addNode(node: MemoryNode): void {
    if (!this.graph.nodes.some((item) => item.id === node.id)) {
      this.graph.nodes.push(node);
    }
  }

  addEdge(edge: MemoryEdge): void {
    const exists = this.graph.edges.some((item) => item.id === edge.id);

    if (!exists) {
      this.graph.edges.push(edge);
    }
  }

  getNode(id: string): MemoryNode | undefined {
    return this.graph.nodes.find((node) => node.id === id);
  }

  getRelatedNodes(id: string): MemoryNode[] {
    const connectedIds = this.graph.edges
      .filter((edge) => edge.from === id || edge.to === id)
      .map((edge) => (edge.from === id ? edge.to : edge.from));

    return this.graph.nodes.filter((node) => connectedIds.includes(node.id));
  }

  snapshot(): MemoryGraph {
    return {
      nodes: [...this.graph.nodes],
      edges: [...this.graph.edges],
    };
  }
}
