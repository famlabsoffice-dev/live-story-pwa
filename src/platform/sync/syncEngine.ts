import { SyncQueue } from "./syncQueue";
import type { SyncItem } from "./syncTypes";

export class SyncEngine {
  private queue = new SyncQueue();

  enqueue(item: SyncItem): void {
    this.queue.add(item);
  }

  getPendingItems(): SyncItem[] {
    return this.queue.getPending();
  }

  complete(itemId: string): void {
    this.queue.remove(itemId);
  }
}
