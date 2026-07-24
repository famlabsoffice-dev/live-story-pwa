export interface MediaSecurityAdapter {
  encrypt(data: Blob): Promise<Blob>;
  decrypt(data: Blob): Promise<Blob>;
  checksum(data: Blob): Promise<string>;
}

export async function sha256(blob: Blob): Promise<string> {
  const buffer = await blob.arrayBuffer();
  const hash = await crypto.subtle.digest("SHA-256", buffer);
  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}
