export type MemoryNodeType =
  | 'person'
  | 'event'
  | 'place'
  | 'object'
  | 'emotion';

export interface MemoryNode {
  id: string;
  type: MemoryNodeType;
  label: string;
  metadata?: Record<string, unknown>;
}

export interface MemoryRelation {
  id: string;
  fromId: string;
  toId: string;
  relation: string;
}

export interface MemoryGraph {
  nodes: MemoryNode[];
  relations: MemoryRelation[];
}
