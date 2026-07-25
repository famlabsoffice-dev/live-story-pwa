import type {
  StoryReasoningContext,
  StoryReasoningResult,
} from "./storyReasoningTypes";

export class PersonalStoryReasoningLayer {
  analyze(
    context: StoryReasoningContext,
  ): StoryReasoningResult {
    const insights = context.themes.map((theme) => ({
      id: crypto.randomUUID(),
      type: "life_pattern_detection" as const,
      description: `Lebensmuster erkannt: ${theme}`,
      confidence: context.memories.length > 0 ? 0.75 : 0.2,
    }));

    return {
      insights,
      confidence: insights.length > 0 ? 0.75 : 0,
    };
  }

  connectMemories(
    memories: string[],
  ): string[] {
    return memories.filter(Boolean);
  }
}
