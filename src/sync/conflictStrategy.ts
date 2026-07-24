export interface VersionedEntity {
  version: number;
  updatedAt: number;
}

export type ConflictResult<T> = {
  strategy: 'LOCAL' | 'REMOTE' | 'CONFLICT';
  value: T;
};

export function resolveConflict<T extends VersionedEntity>(
  local: T,
  remote: T,
): ConflictResult<T> {
  if (local.version > remote.version) {
    return { strategy: 'LOCAL', value: local };
  }

  if (remote.version > local.version) {
    return { strategy: 'REMOTE', value: remote };
  }

  if (local.updatedAt > remote.updatedAt) {
    return { strategy: 'LOCAL', value: local };
  }

  if (remote.updatedAt > local.updatedAt) {
    return { strategy: 'REMOTE', value: remote };
  }

  return { strategy: 'CONFLICT', value: local };
}
