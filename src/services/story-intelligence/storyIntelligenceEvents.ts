export type StoryIntelligenceEventType =
  | "memory_created"
  | "memory_updated"
  | "relationship_detected"
  | "timeline_generated"
  | "insight_created"
  | "reflection_generated";

export interface StoryIntelligenceEvent {
  id: string;
  type: StoryIntelligenceEventType;
  timestamp: string;
  sourceId: string;
  payload: Record<string, unknown>;
}

export interface StoryIntelligenceEventHandler {
  handle(event: StoryIntelligenceEvent): Promise<void>;
}

export interface StoryIntelligenceEventBus {
  publish(event: StoryIntelligenceEvent): Promise<void>;
  subscribe(
    type: StoryIntelligenceEventType,
    handler: StoryIntelligenceEventHandler
  ): void;
}

/**
 * Event contract for communication between
 * Memory Graph, Reasoning Layer and AI Orchestration.
 */
export class InMemoryStoryIntelligenceEventBus
  implements StoryIntelligenceEventBus
{
  private handlers = new Map<
    StoryIntelligenceEventType,
    StoryIntelligenceEventHandler[]
  >();

  async publish(event: StoryIntelligenceEvent): Promise<void> {
    const subscribers = this.handlers.get(event.type) ?? [];

    await Promise.all(
      subscribers.map((handler) => handler.handle(event))
    );
  }

  subscribe(
    type: StoryIntelligenceEventType,
    handler: StoryIntelligenceEventHandler
  ): void {
    const existing = this.handlers.get(type) ?? [];
    this.handlers.set(type, [...existing, handler]);
  }
}
