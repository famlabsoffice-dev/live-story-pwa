import type { MemoryNode } from "./graphNode";
import { MemoryGraph } from "./memoryGraph";

export class MemoryQueryEngine {
  constructor(private readonly graph: MemoryGraph) {}

  findByType(type: MemoryNode["type"]): MemoryNode[] {
    return this.graph.getNodes().filter((node) => node.type === type);
  }

  findByLabel(label: string): MemoryNode[] {
    return this.graph
      .getNodes()
      .filter((node) => node.label.toLowerCase().includes(label.toLowerCase()));
  }
}
