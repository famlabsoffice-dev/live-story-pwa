import type { MemoryFragment } from "./memoryExtractor";

export interface TimelineEvent {
  id: string;
  text: string;
  order: number;
  confidence: number;
}

export function buildTimeline(memories: MemoryFragment[]): TimelineEvent[] {
  return memories
    .map((memory, index) => ({
      id: memory.id,
      text: memory.content,
      order: index,
      confidence: memory.confidence,
    }))
    .sort((a, b) => a.order - b.order);
}
