import type { StorageRecord } from '@/data/storage/storageTypes';

export interface Story extends StorageRecord {
  title: string;
  ownerId: string;
  description?: string;
  chapterIds: string[];
}

export interface StoryChapter extends StorageRecord {
  storyId: string;
  title: string;
  order: number;
  summary?: string;
  timelineEventIds: string[];
}

export interface TimelineEvent extends StorageRecord {
  chapterId: string;
  date?: string;
  title: string;
  description: string;
  mediaIds: string[];
}

export interface MediaReference extends StorageRecord {
  storyId: string;
  mediaType: 'image' | 'audio' | 'video';
  fileId: string;
  checksum?: string;
}
