import type { MemoryGraph } from '../memory-graph/memoryGraphTypes';
import type { StoryInsight } from '../story-reasoning/reasoningTypes';

export class PersonalStoryIntelligence {
  analyze(graph: MemoryGraph): StoryInsight[] {
    return graph.nodes.map((node) => ({
      text: `Memory connection: ${node.label}`,
      confidence: 0.5,
    }));
  }
}
