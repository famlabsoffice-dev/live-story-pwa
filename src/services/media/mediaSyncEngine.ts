export type SyncState = 'pending' | 'processing' | 'completed' | 'failed';

export interface MediaSyncItem {
  id: string;
  state: SyncState;
  retries: number;
}

export class MediaSyncEngine {
  private queue: MediaSyncItem[] = [];

  enqueue(item: MediaSyncItem) {
    this.queue.push(item);
  }

  getQueue() {
    return [...this.queue];
  }

  async process() {
    this.queue = this.queue.map((item) => ({ ...item, state: 'completed' }));
  }
}
