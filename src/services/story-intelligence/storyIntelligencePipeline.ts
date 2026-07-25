import type {
  StoryChapter,
  StoryIntelligenceResult,
  StoryMemoryInput,
} from "./storyIntelligenceTypes";

export class StoryIntelligencePipeline {
  extractMemories(input: StoryMemoryInput[]): StoryMemoryInput[] {
    return input.filter((memory) => memory.text.trim().length > 0);
  }

  generateChapters(memories: StoryMemoryInput[]): StoryChapter[] {
    return memories.map((memory) => ({
      id: memory.id,
      title: memory.entities[0] ?? "Lebensmoment",
      summary: memory.text,
      memories: [memory.id],
    }));
  }

  process(memories: StoryMemoryInput[]): StoryIntelligenceResult {
    const extracted = this.extractMemories(memories);

    return {
      stage: "chapter_generation",
      chapters: this.generateChapters(extracted),
      confidence: extracted.length > 0 ? 0.8 : 0,
    };
  }
}
