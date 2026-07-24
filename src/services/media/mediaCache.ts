export class MediaCache {
  private cache = new Map<string, Blob>();

  set(id: string, blob: Blob) {
    this.cache.set(id, blob);
  }

  get(id: string) {
    return this.cache.get(id) ?? null;
  }

  clear() {
    this.cache.clear();
  }
}
