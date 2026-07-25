export interface MemoryNode {
  id: string;
  type: 'person' | 'event' | 'place' | 'fact';
  label: string;
  connections: string[];
}

export interface MemoryGraph {
  nodes: MemoryNode[];
}
