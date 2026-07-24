import { MediaCategory, MediaMetadata, MediaIntegrity } from './mediaTypes';
import { ALLOWED_MIME_TYPES } from './mediaSchemas';
import { v4 as uuidv4 } from 'uuid';

export class MediaMetadataService {
  /**
   * Generates metadata for a given file.
   */
  static async generateMetadata(file: File | Blob, fileName?: string): Promise<MediaMetadata> {
    const name = fileName || (file instanceof File ? file.name : 'unnamed-media');
    const mimeType = file.type;
    const size = file.size;
    const category = this.determineCategory(mimeType);
    const hash = await this.calculateHash(file);

    const now = new Date();

    return {
      id: uuidv4(),
      fileName: name,
      mimeType,
      size,
      category,
      integrity: {
        hash,
        algorithm: 'SHA-256',
        verifiedAt: now
      },
      createdAt: now,
      updatedAt: now,
      version: 1
    };
  }

  /**
   * Calculates SHA-256 hash of a file.
   */
  static async calculateHash(file: File | Blob): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  /**
   * Determines the media category based on MIME type.
   */
  private static determineCategory(mimeType: string): MediaCategory {
    for (const [category, mimes] of Object.entries(ALLOWED_MIME_TYPES)) {
      if (mimes.includes(mimeType)) {
        return category as MediaCategory;
      }
    }
    throw new Error(`Unsupported MIME type: ${mimeType}`);
  }

  /**
   * Verifies the integrity of a file against its metadata.
   */
  static async verifyIntegrity(file: File | Blob, metadata: MediaMetadata): Promise<boolean> {
    const currentHash = await this.calculateHash(file);
    return currentHash === metadata.integrity.hash;
  }
}
