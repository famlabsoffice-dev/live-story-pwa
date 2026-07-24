export const MEDIA_TYPES = [
  "image",
  "video",
  "audio",
  "document",
] as const;

export type MediaType = (typeof MEDIA_TYPES)[number];

export const MEDIA_STATUS = [
  "local",
  "pending-sync",
  "synced",
  "archived",
  "deleted",
] as const;

export type MediaStatus = (typeof MEDIA_STATUS)[number];

export interface MediaMetadata {
  width?: number;
  height?: number;
  durationSeconds?: number;
  mimeType?: string;
  fileSizeBytes?: number;
  capturedAt?: Date;
  device?: string;
  locationId?: string;
}

export interface MediaAsset {
  id: string;
  storyId?: string;
  chapterId?: string;
  personId?: string;
  type: MediaType;
  status: MediaStatus;
  filename: string;
  localPath?: string;
  hash?: string;
  metadata: MediaMetadata;
  createdAt: Date;
  updatedAt: Date;
  version: number;
}
