import type { MemoryFragment } from "./memoryExtractor";

export interface TimelineEvent {
  id: string;
  text: string;
  order: number;
}

export function buildTimeline(memories: MemoryFragment[]): TimelineEvent[] {
  return memories.map((memory, index) => ({
    id: memory.id,
    text: memory.content,
    order: index,
  }));
}
