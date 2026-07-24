export async function generateThumbnail(file: Blob): Promise<Blob | null> {
  if (!file.type.startsWith("image/")) return null;
  return file;
}
