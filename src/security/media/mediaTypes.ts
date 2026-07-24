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
