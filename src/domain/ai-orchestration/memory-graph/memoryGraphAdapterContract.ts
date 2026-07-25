export type MemoryNodeType =
  | "person"
  | "event"
  | "place"
  | "relationship"
  | "memory";

export type MemoryRelationshipType =
  | "connected_to"
  | "caused_by"
  | "occurred_with"
  | "belongs_to";

export interface MemoryGraphNode<TMetadata = unknown> {
  id: string;
  type: MemoryNodeType;
  label: string;
  metadata?: TMetadata;
  createdAt: string;
}

export interface MemoryGraphEdge {
  id: string;
  sourceId: string;
  targetId: string;
  relationship: MemoryRelationshipType;
  weight?: number;
}

export interface MemoryGraphQuery {
  storyId: string;
  nodeTypes?: MemoryNodeType[];
  relationshipTypes?: MemoryRelationshipType[];
}

export interface MemoryGraphAdapterContract {
  createNode<TMetadata>(
    node: MemoryGraphNode<TMetadata>,
  ): Promise<MemoryGraphNode<TMetadata>>;

  connectNodes(edge: MemoryGraphEdge): Promise<MemoryGraphEdge>;

  queryGraph(
    query: MemoryGraphQuery,
  ): Promise<MemoryGraphNode[]>;

  getRelatedMemories(
    memoryId: string,
  ): Promise<MemoryGraphNode[]>;
}
