import type { SyncQueueEntry } from '@/services/syncService';

export class SyncQueue {
  private queue: SyncQueueEntry[] = [];

  add(entry: SyncQueueEntry): void {
    this.queue.push(entry);
  }

  getPending(): SyncQueueEntry[] {
    return this.queue.filter((entry) => entry.status === 'pending');
  }

  remove(id: string): void {
    this.queue = this.queue.filter((entry) => entry.id !== id);
  }
}

export const syncQueue = new SyncQueue();
