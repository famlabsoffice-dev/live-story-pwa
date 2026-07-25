export type MemoryNodeType =
  | "person"
  | "event"
  | "place"
  | "relationship"
  | "memory"
  | "chapter";

export interface MemoryGraphNode {
  id: string;
  type: MemoryNodeType;
  label: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export type MemoryEdgeType =
  | "related_to"
  | "occurred_at"
  | "involves"
  | "belongs_to"
  | "derived_from";

export interface MemoryGraphEdge {
  id: string;
  sourceId: string;
  targetId: string;
  type: MemoryEdgeType;
  weight?: number;
  metadata?: Record<string, unknown>;
}

export interface MemoryGraphQuery {
  nodeTypes?: MemoryNodeType[];
  text?: string;
  relatedNodeId?: string;
  limit?: number;
}

export interface MemoryGraphSearchResult {
  nodes: MemoryGraphNode[];
  edges: MemoryGraphEdge[];
}

/**
 * Contract for memory graph persistence and retrieval.
 * Implementations may use local storage, IndexedDB, remote services,
 * or AI-backed graph databases without affecting the domain layer.
 */
export interface MemoryGraphAdapter {
  createNode(node: MemoryGraphNode): Promise<MemoryGraphNode>;

  getNode(id: string): Promise<MemoryGraphNode | null>;

  updateNode(node: MemoryGraphNode): Promise<MemoryGraphNode>;

  deleteNode(id: string): Promise<void>;

  createEdge(edge: MemoryGraphEdge): Promise<MemoryGraphEdge>;

  deleteEdge(id: string): Promise<void>;

  queryGraph(query: MemoryGraphQuery): Promise<MemoryGraphSearchResult>;

  getRelatedNodes(nodeId: string): Promise<MemoryGraphSearchResult>;
}
