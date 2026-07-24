export interface MediaStorageAdapter {
  save(id: string, blob: Blob): Promise<string>;
  load(id: string): Promise<Blob | null>;
  remove(id: string): Promise<void>;
  exists(id: string): Promise<boolean>;
}

export class MemoryMediaStorage implements MediaStorageAdapter {
  private store = new Map<string, Blob>();

  async save(id: string, blob: Blob) {
    this.store.set(id, blob);
    return id;
  }

  async load(id: string) {
    return this.store.get(id) ?? null;
  }

  async remove(id: string) {
    this.store.delete(id);
  }

  async exists(id: string) {
    return this.store.has(id);
  }
}
