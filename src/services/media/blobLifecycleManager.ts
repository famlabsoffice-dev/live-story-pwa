export class BlobLifecycleManager {
  shouldRemove(updatedAt: Date, maxAgeDays = 365) {
    const age = Date.now() - updatedAt.getTime();
    return age > maxAgeDays * 24 * 60 * 60 * 1000;
  }

  cleanup<T extends { updatedAt: Date }>(items: T[]) {
    return items.filter((item) => !this.shouldRemove(item.updatedAt));
  }
}
