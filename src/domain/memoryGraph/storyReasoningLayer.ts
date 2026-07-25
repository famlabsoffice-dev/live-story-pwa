import type { MemoryGraph, MemoryNode } from "./types";

export interface StoryChapterSuggestion {
  title: string;
  memories: MemoryNode[];
  confidence: number;
}

export class PersonalStoryReasoningLayer {
  constructor(private readonly graph: MemoryGraph) {}

  buildChapterSuggestions(): StoryChapterSuggestion[] {
    const chapters = new Map<string, MemoryNode[]>();

    for (const node of this.graph.nodes) {
      const key = this.resolveChapter(node);

      const memories = chapters.get(key) ?? [];
      memories.push(node);
      chapters.set(key, memories);
    }

    return [...chapters.entries()].map(([title, memories]) => ({
      title,
      memories,
      confidence: this.calculateConfidence(memories),
    }));
  }

  createTimeline(): MemoryNode[] {
    return [...this.graph.nodes].sort((a, b) =>
      a.createdAt.localeCompare(b.createdAt),
    );
  }

  private resolveChapter(node: MemoryNode): string {
    if (node.type === "person") return "Menschen & Beziehungen";
    if (node.type === "place") return "Orte & Zuhause";
    if (node.type === "event") return "Lebensereignisse";
    if (node.type === "chapter") return node.label;

    return "Weitere Erinnerungen";
  }

  private calculateConfidence(memories: MemoryNode[]): number {
    return Number(Math.min(memories.length / 10, 1).toFixed(2));
  }
}
