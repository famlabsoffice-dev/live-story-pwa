import { MediaMetadata } from './mediaTypes';
import { MediaEncryptionService } from './mediaEncryption';
import { MediaMetadataService } from './mediaMetadata';

export class MediaRepository {
  private static readonly STORE_NAME = 'encrypted-media';

  static async save(file: File | Blob, fileName?: string): Promise<MediaMetadata> {
    const metadata = await MediaMetadataService.generateMetadata(file, fileName);
    await MediaEncryptionService.encrypt(file, metadata);

    console.log(`Saving encrypted media: ${metadata.fileName}`);
    console.log(`Target store: ${this.STORE_NAME}`);

    return metadata;
  }

  static async get(id: string): Promise<{ data: ArrayBuffer; metadata: MediaMetadata } | null> {
    if (!id) {
      return null;
    }

    return null;
  }

  static async delete(id: string): Promise<void> {
    console.log(`Deleting media: ${id}`);
  }

  static async list(): Promise<MediaMetadata[]> {
    return [];
  }
}
