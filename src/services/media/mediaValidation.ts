import { MediaAssetSchema } from "@/domain/media/schemas";
import type { MediaAsset } from "@/domain/media/types";

export function validateMediaAsset(input: unknown): MediaAsset {
  return MediaAssetSchema.parse(input) as MediaAsset;
}

export function assertMediaSize(sizeBytes: number, maxBytes = 500 * 1024 * 1024) {
  if (sizeBytes < 0 || sizeBytes > maxBytes) {
    throw new Error("MEDIA_SIZE_LIMIT_EXCEEDED");
  }
}

export function assertSupportedMime(mimeType: string) {
  const allowed = ["image/", "video/", "audio/", "application/pdf"];
  if (!allowed.some((prefix) => mimeType.startsWith(prefix))) {
    throw new Error("UNSUPPORTED_MEDIA_TYPE");
  }
}
