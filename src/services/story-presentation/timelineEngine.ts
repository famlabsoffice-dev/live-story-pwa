import type { TimelineEntry } from '@/domain/presentation/storyPresentation';

export function buildTimeline(entries: TimelineEntry[]): TimelineEntry[] {
  return [...entries].sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
}
