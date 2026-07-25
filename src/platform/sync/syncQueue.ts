import type { SyncItem } from "./syncTypes";

export class SyncQueue {
  private queue: SyncItem[] = [];

  add(item: SyncItem): void {
    this.queue.push(item);
  }

  getPending(): SyncItem[] {
    return this.queue.filter(
      (item) => item.status === "pending",
    );
  }

  remove(id: string): void {
    this.queue = this.queue.filter(
      (item) => item.id !== id,
    );
  }
}
