export interface InstallStrategy {
  canInstall: boolean;
  offlineReady: boolean;
}

export function evaluateInstallStrategy(
  offlineReady: boolean,
): InstallStrategy {
  return {
    canInstall: typeof window !== "undefined",
    offlineReady,
  };
}
