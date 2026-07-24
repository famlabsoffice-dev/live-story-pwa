import type { MediaAsset } from "@/domain/media/types";

export interface MediaRepository {
  create(asset: MediaAsset): Promise<MediaAsset>;
  getById(id: string): Promise<MediaAsset | null>;
  listByStory(storyId: string): Promise<MediaAsset[]>;
  update(asset: MediaAsset): Promise<MediaAsset>;
  remove(id: string): Promise<void>;
}

export class InMemoryMediaRepository implements MediaRepository {
  private store = new Map<string, MediaAsset>();

  async create(asset: MediaAsset) {
    this.store.set(asset.id, asset);
    return asset;
  }

  async getById(id: string) {
    return this.store.get(id) ?? null;
  }

  async listByStory(storyId: string) {
    return [...this.store.values()].filter((item) => item.storyId === storyId);
  }

  async update(asset: MediaAsset) {
    this.store.set(asset.id, asset);
    return asset;
  }

  async remove(id: string) {
    this.store.delete(id);
  }
}
