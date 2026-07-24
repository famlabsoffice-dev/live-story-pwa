import type { TimelineEvent } from "./timelineBuilder";

export interface StoryChapter {
  id: string;
  title: string;
  events: TimelineEvent[];
}

export function buildChapters(events: TimelineEvent[]): StoryChapter[] {
  return events.map((event) => ({
    id: event.id,
    title: event.text.slice(0, 60),
    events: [event],
  }));
}
