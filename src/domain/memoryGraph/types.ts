export type MemoryNodeType =
  | "person"
  | "place"
  | "event"
  | "relationship"
  | "object"
  | "chapter";

export interface MemoryNode {
  id: string;
  type: MemoryNodeType;
  label: string;
  description?: string;
  createdAt: string;
  metadata?: Record<string, unknown>;
}

export type MemoryEdgeType =
  | "related_to"
  | "occurred_at"
  | "belongs_to"
  | "knows"
  | "influenced_by";

export interface MemoryEdge {
  id: string;
  from: string;
  to: string;
  type: MemoryEdgeType;
  weight?: number;
}

export interface MemoryGraph {
  nodes: MemoryNode[];
  edges: MemoryEdge[];
}
