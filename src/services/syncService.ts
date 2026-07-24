export type SyncAction = 'CREATE' | 'UPDATE' | 'DELETE';

export interface SyncQueueEntry<T = unknown> {
  id: string;
  entity: string;
  entityId: string;
  action: SyncAction;
  payload: T;
  createdAt: number;
  retryCount: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
}

class SyncService {
  createQueueEntry<T>(entry: Omit<SyncQueueEntry<T>, 'retryCount' | 'status'>): SyncQueueEntry<T> {
    return {
      ...entry,
      retryCount: 0,
      status: 'pending',
    };
  }

  async processQueue(entries: SyncQueueEntry[]): Promise<SyncQueueEntry[]> {
    return entries.map((entry) => ({
      ...entry,
      status: 'completed',
    }));
  }
}

export const syncService = new SyncService();
