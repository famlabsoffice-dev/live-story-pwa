import { describe, it, expect } from 'vitest';
import { MediaRepository } from '../../../security/media/mediaRepository';

describe('MediaRepository', () => {
  const mockFile = new File(['test data'], 'image.png', { type: 'image/png' });

  it('should save media and return metadata', async () => {
    const metadata = await MediaRepository.save(mockFile);
    expect(metadata.fileName).toBe('image.png');
    expect(metadata.category).toBe('IMAGE');
  });

  it('should list media (currently returns empty)', async () => {
    const list = await MediaRepository.list();
    expect(Array.isArray(list)).toBe(true);
  });
});
