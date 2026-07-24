export interface MemoryNode {
  id: string;
  type: "person" | "place" | "event" | "memory";
  label: string;
}

export interface MemoryRelation {
  from: string;
  to: string;
  relation: string;
}

export class MemoryGraph {
  private nodes = new Map<string, MemoryNode>();
  private relations: MemoryRelation[] = [];

  addNode(node: MemoryNode): void {
    this.nodes.set(node.id, node);
  }

  connect(relation: MemoryRelation): void {
    this.relations.push(relation);
  }

  getNodes(): MemoryNode[] {
    return [...this.nodes.values()];
  }

  getRelations(): MemoryRelation[] {
    return this.relations;
  }
}
