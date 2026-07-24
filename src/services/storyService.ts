export interface StoryRecord {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  version: number;
}

export type StoryRepository = {
  create(story: StoryRecord): Promise<StoryRecord>;
  get(id: string): Promise<StoryRecord | undefined>;
  update(story: StoryRecord): Promise<StoryRecord>;
  delete(id: string): Promise<void>;
  list(): Promise<StoryRecord[]>;
};

class StoryService {
  constructor(private repository?: StoryRepository) {}

  setRepository(repository: StoryRepository): void {
    this.repository = repository;
  }

  async createStory(story: StoryRecord): Promise<StoryRecord> {
    if (!this.repository) throw new Error('Story repository not configured');
    return this.repository.create({ ...story, version: 1 });
  }

  async getStory(id: string): Promise<StoryRecord | undefined> {
    if (!this.repository) throw new Error('Story repository not configured');
    return this.repository.get(id);
  }

  async updateStory(story: StoryRecord): Promise<StoryRecord> {
    if (!this.repository) throw new Error('Story repository not configured');
    return this.repository.update({
      ...story,
      updatedAt: Date.now(),
      version: story.version + 1,
    });
  }

  async deleteStory(id: string): Promise<void> {
    if (!this.repository) throw new Error('Story repository not configured');
    return this.repository.delete(id);
  }

  async listStories(): Promise<StoryRecord[]> {
    if (!this.repository) throw new Error('Story repository not configured');
    return this.repository.list();
  }
}

export const storyService = new StoryService();
