import type { MemoryViewModel } from '@/domain/media/mediaPresentation';

export function sortMemories(memories: MemoryViewModel[]) {
  return [...memories].sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
}
