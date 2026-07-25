import type {
  StoryIntelligenceEvent,
  StoryIntelligenceEventBus,
  StoryIntelligenceEventHandler,
} from "./storyIntelligenceEvents";

export interface PersonalStoryInsight {
  id: string;
  summary: string;
  confidence: number;
  sourceEventId: string;
  createdAt: string;
}

export interface PersonalStoryIntelligenceResult {
  insights: PersonalStoryInsight[];
}

export interface PersonalStoryReasoningEngine {
  analyze(event: StoryIntelligenceEvent): Promise<PersonalStoryInsight[]>;
}

/**
 * Personal Story Intelligence service.
 * Consumes Story Intelligence events and transforms
 * memories into higher-level personal insights.
 */
export class PersonalStoryIntelligenceService
  implements StoryIntelligenceEventHandler
{
  private insights: PersonalStoryInsight[] = [];

  constructor(
    private readonly reasoningEngine: PersonalStoryReasoningEngine,
    private readonly eventBus: StoryIntelligenceEventBus
  ) {}

  register(): void {
    this.eventBus.subscribe("memory_created", this);
    this.eventBus.subscribe("memory_updated", this);
    this.eventBus.subscribe("relationship_detected", this);
    this.eventBus.subscribe("timeline_generated", this);
  }

  async handle(event: StoryIntelligenceEvent): Promise<void> {
    const generatedInsights = await this.reasoningEngine.analyze(event);
    this.insights.push(...generatedInsights);
  }

  getResult(): PersonalStoryIntelligenceResult {
    return {
      insights: [...this.insights],
    };
  }
}
