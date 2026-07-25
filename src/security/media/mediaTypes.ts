export type MediaKind = 'image' | 'video' | 'audio';

export interface SecureMediaRecord {
  id: string;
  kind: MediaKind;
  name: string;
  mimeType: string;
  size: number;
  createdAt: string;
  encrypted: boolean;
  blob: Blob;
}

export interface MediaStorageAdapter {
  save(record: SecureMediaRecord): Promise<string>;
  get(id: string): Promise<SecureMediaRecord | null>;
  remove(id: string): Promise<void>;
export enum MediaCategory {
  IMAGE = 'IMAGE',
  AUDIO = 'AUDIO',
  VIDEO = 'VIDEO',
  DOCUMENT = 'DOCUMENT'
}

export interface MediaIntegrity {
  hash: string;
  algorithm: 'SHA-256';
  verifiedAt: Date;
}

export interface MediaMetadata {
  id: string;
  fileName: string;
  mimeType: string;
  size: number;
  category: MediaCategory;
  integrity: MediaIntegrity;
  createdAt: Date;
  updatedAt: Date;
  dimensions?: {
    width: number;
    height: number;
  };
  duration?: number;
  thumbnailId?: string;
  version: number;
}

export interface EncryptedMedia {
  metadata: MediaMetadata;
  encryptedData: ArrayBuffer | Blob;
  iv: Uint8Array;
  keyId: string;
}

export interface MediaReference {
  mediaId: string;
  category: MediaCategory;
  thumbnailUrl?: string;
}
