export interface MemoryNodeInput {
  id: string;
  type: string;
  content: unknown;
}

export interface MemoryNode {
  id: string;
  type: string;
  content: unknown;
}

export interface MemoryConnection {
  sourceId: string;
  targetId: string;
  relation: string;
}

export interface MemoryGraphAdapter {
  createMemoryNode(
    node: MemoryNodeInput
  ): Promise<MemoryNode>;

  connectMemories(
    connection: MemoryConnection
  ): Promise<void>;

  queryRelatedMemories(
    memoryId: string
  ): Promise<MemoryNode[]>;
}
