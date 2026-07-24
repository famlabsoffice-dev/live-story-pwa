import { createMediaHash, verifyMediaIntegrity } from '@/services/media-security/mediaIntegrity';

describe('Media Security', () => {
  it('validates media integrity', async () => {
    const data = new TextEncoder().encode('image').buffer;
    const hash = await createMediaHash(data);

    expect(await verifyMediaIntegrity(data, hash)).toBe(true);
  });
});
