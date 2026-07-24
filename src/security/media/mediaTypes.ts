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
}
