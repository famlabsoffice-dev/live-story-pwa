export interface DataUpgradeResult<T> {
  data: T;
  upgraded: boolean;
  version: number;
}

export function upgradeData<T>(
  data: T,
  version: number,
  targetVersion: number,
): DataUpgradeResult<T> {
  return {
    data,
    upgraded: version !== targetVersion,
    version: targetVersion,
  };
}
