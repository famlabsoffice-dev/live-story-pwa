import type { MediaAsset } from "@/domain/media";
import { extractMediaMetadata } from "./metadataExtractor";
import type { MediaStorage } from "./mediaStorage";

export class MediaService {
  constructor(private readonly storage: MediaStorage) {}

  async createAsset(file: Blob, asset: MediaAsset): Promise<MediaAsset> {
    const path = await this.storage.save(file, asset.id);
    const metadata = await extractMediaMetadata(file);

    return {
      ...asset,
      localPath: path,
      metadata: {
        ...asset.metadata,
        ...metadata,
      },
    };
  }
}
