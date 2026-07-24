import type { MediaPresentationItem } from '@/domain/media/mediaPresentation';

export function groupMediaByType(items: MediaPresentationItem[]) {
  return {
    images: items.filter((item) => item.type === 'image'),
    videos: items.filter((item) => item.type === 'video'),
    audio: items.filter((item) => item.type === 'audio'),
  };
}

export function getChapterMedia(items: MediaPresentationItem[], chapterId: string) {
  return items.filter((item) => item.chapterId === chapterId);
}
