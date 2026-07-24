import type { StoryTimelineItem } from '@/domain/presentation/storyView';

export function buildTimeline(items: StoryTimelineItem[]): StoryTimelineItem[] {
  return [...items].sort((a, b) => {
    if (!a.year) return 1;
    if (!b.year) return -1;
    return a.year - b.year;
  });
}
