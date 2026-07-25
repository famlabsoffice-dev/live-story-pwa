export interface DeviceSecurityStatus {
  secureContext: boolean;
  cryptoAvailable: boolean;
  indexedDbAvailable: boolean;
}

export function getDeviceSecurityStatus(): DeviceSecurityStatus {
  return {
    secureContext:
      typeof window === 'undefined' || window.isSecureContext,
    cryptoAvailable: typeof crypto !== 'undefined',
    indexedDbAvailable: typeof indexedDB !== 'undefined',
  };
}

export function isDeviceStorageSecure(): boolean {
  const status = getDeviceSecurityStatus();

  return (
    status.secureContext &&
    status.cryptoAvailable &&
    status.indexedDbAvailable
  );
}
