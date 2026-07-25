import { describe, expect, it } from 'vitest';
import { IndexedDbStorage } from './indexedDbStorage';

describe('IndexedDbStorage', () => {
  it('persists and reads records', async () => {
    const storage = new IndexedDbStorage();
    const record = { id: 'story-1', version: 1, createdAt: 'now', updatedAt: 'now', data: { title: 'Life' } };

    await storage.save('stories', record);

    expect(await storage.get('stories', 'story-1')).toEqual(record);
  });
});
