export type MediaType = 'image' | 'video' | 'audio';

export interface MediaPresentationItem {
  id: string;
  type: MediaType;
  title: string;
  description?: string;
  url?: string;
  thumbnailUrl?: string;
  createdAt?: string;
  chapterId?: string;
  memoryId?: string;
}

export interface MemoryViewModel {
  id: string;
  title: string;
  text: string;
  audioMediaId?: string;
  imageMediaIds: string[];
  peopleIds: string[];
  locationId?: string;
  date?: string;
}
