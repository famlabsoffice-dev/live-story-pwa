import type { MediaKind } from './mediaTypes';

const ALLOWED_TYPES: Record<MediaKind, string[]> = {
  image: ['image/jpeg', 'image/png', 'image/webp'],
  video: ['video/mp4', 'video/webm'],
  audio: ['audio/mpeg', 'audio/wav', 'audio/webm'],
};

export function validateMediaType(kind: MediaKind, mimeType: string): boolean {
  return ALLOWED_TYPES[kind].includes(mimeType);
}

export function validateMediaSize(size: number, maxBytes = 250 * 1024 * 1024): boolean {
  return size > 0 && size <= maxBytes;
}
