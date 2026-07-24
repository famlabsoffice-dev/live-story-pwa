export async function createMediaHash(data: ArrayBuffer): Promise<string> {
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

export async function verifyMediaIntegrity(
  data: ArrayBuffer,
  expectedHash: string
): Promise<boolean> {
  return (await createMediaHash(data)) === expectedHash;
}
