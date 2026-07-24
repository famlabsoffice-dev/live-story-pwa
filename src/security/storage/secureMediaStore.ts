import { EncryptedRepository } from './encryptedRepository';

export interface SecureMediaMetadata {
  fileId: string;
  mimeType: string;
  size: number;
  createdAt: number;
}

export class SecureMediaStore extends EncryptedRepository<SecureMediaMetadata> {
  constructor(key: CryptoKey) {
    super(key, 'media-metadata');
  }
}
