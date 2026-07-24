import { describe, expect, it } from 'vitest';
import { MediaCache } from './mediaCache';

describe('MediaCache', () => {
  it('stores and retrieves blobs', () => {
    const cache = new MediaCache();
    const blob = new Blob(['test']);
    cache.set('1', blob);
    expect(cache.get('1')).toBe(blob);
  });
});
