export type SyncOperation =
  | "create"
  | "update"
  | "delete";

export type SyncStatus =
  | "pending"
  | "processing"
  | "completed"
  | "failed";

export interface SyncItem<T = unknown> {
  id: string;
  operation: SyncOperation;
  payload: T;
  createdAt: string;
  status: SyncStatus;
}
