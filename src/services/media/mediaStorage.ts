export interface MediaStorage {
  save(file: Blob, id: string): Promise<string>;
  load(path: string): Promise<Blob | null>;
  remove(path: string): Promise<void>;
}

export class LocalMediaStorage implements MediaStorage {
  private store = new Map<string, Blob>();

  async save(file: Blob, id: string): Promise<string> {
    this.store.set(id, file);
    return id;
  }

  async load(path: string): Promise<Blob | null> {
    return this.store.get(path) ?? null;
  }

  async remove(path: string): Promise<void> {
    this.store.delete(path);
  }
}
