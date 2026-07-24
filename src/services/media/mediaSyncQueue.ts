export interface MediaSyncTask {
  id: string;
  mediaId: string;
  action: "upload" | "delete";
  createdAt: Date;
}

export class MediaSyncQueue {
  private queue: MediaSyncTask[] = [];

  add(task: MediaSyncTask): void {
    this.queue.push(task);
  }

  getPending(): MediaSyncTask[] {
    return [...this.queue];
  }

  remove(id: string): void {
    this.queue = this.queue.filter((task) => task.id !== id);
  }
}
