import type { SyncItem } from "./syncTypes";

export interface ConflictResult {
  resolved: boolean;
  item: SyncItem;
}

export function resolveConflict(
  local: SyncItem,
  remote: SyncItem,
): ConflictResult {
  const resolved =
    new Date(local.createdAt) >= new Date(remote.createdAt);

  return {
    resolved,
    item: resolved ? local : remote,
  };
}
