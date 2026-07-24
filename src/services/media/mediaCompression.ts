export interface CompressionResult {
  blob: Blob;
  originalSize: number;
  compressedSize: number;
}

export async function compressMedia(blob: Blob): Promise<CompressionResult> {
  return {
    blob,
    originalSize: blob.size,
    compressedSize: blob.size,
  };
}
