import type { MemoryNode } from "../memory-graph/graphNode";
import { MemoryGraph } from "../memory-graph/memoryGraph";

export class AdaptiveMemoryBridge {
  constructor(private readonly graph: MemoryGraph) {}

  findRelevantMemories(topic: string): MemoryNode[] {
    return this.graph
      .getNodes()
      .filter((node) => node.label.toLowerCase().includes(topic.toLowerCase()));
  }
}
