import type { Story } from '@/types/storyTypes';
import type { StorageAdapter } from '../storage/storageTypes';

export class StoryRepository {
  constructor(private readonly storage: StorageAdapter) {}

  async save(story: Story): Promise<void> {
    await this.storage.put('stories', story);
  }

  async findById(id: string): Promise<Story | null> {
    return this.storage.get<Story>('stories', id);
  }

  async list(): Promise<Story[]> {
    return this.storage.getAll<Story>('stories');
  }

  async remove(id: string): Promise<void> {
    await this.storage.delete('stories', id);
  }
}
