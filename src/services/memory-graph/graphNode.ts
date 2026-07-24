export type MemoryNodeType =
  | "person"
  | "event"
  | "place"
  | "period"
  | "emotion"
  | "media"
  | "chapter";

export interface MemoryNode {
  id: string;
  type: MemoryNodeType;
  label: string;
  description?: string;
  createdAt: Date;
  metadata: Record<string, unknown>;
}
