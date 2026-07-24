export type MemoryRelation =
  | "knows"
  | "experienced"
  | "belongs_to"
  | "remembers"
  | "connected_to";

export interface MemoryEdge {
  id: string;
  sourceId: string;
  targetId: string;
  relation: MemoryRelation;
  confidence: number;
  createdAt: Date;
}
