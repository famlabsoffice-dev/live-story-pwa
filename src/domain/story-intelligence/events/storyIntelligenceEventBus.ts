import type { StoryIntelligenceEvent } from "./storyIntelligenceEvents";

type EventHandler<T = StoryIntelligenceEvent> = (event: T) => void | Promise<void>;

export class StoryIntelligenceEventBus {
  private readonly handlers = new Map<string, Set<EventHandler>>();

  subscribe<T extends StoryIntelligenceEvent>(
    eventType: T["type"],
    handler: EventHandler<T>,
  ): () => void {
    const handlers = this.handlers.get(eventType) ?? new Set<EventHandler>();
    handlers.add(handler as EventHandler);
    this.handlers.set(eventType, handlers);

    return () => {
      handlers.delete(handler as EventHandler);
      if (handlers.size === 0) {
        this.handlers.delete(eventType);
      }
    };
  }

  async dispatch<T extends StoryIntelligenceEvent>(event: T): Promise<void> {
    const handlers = this.handlers.get(event.type) ?? new Set<EventHandler>();

    await Promise.all(
      [...handlers].map((handler) => handler(event)),
    );
  }

  clear(): void {
    this.handlers.clear();
  }
}
