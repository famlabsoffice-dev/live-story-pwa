import type { MediaMetadata } from "@/domain/media";

export async function extractMediaMetadata(file: Blob): Promise<MediaMetadata> {
  return {
    mimeType: file.type,
    fileSizeBytes: file.size,
  };
}
