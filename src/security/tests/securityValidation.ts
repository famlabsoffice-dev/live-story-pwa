export interface SecurityCheckResult {
  passed: boolean;
  reason?: string;
}

export function validateSecureContext(): SecurityCheckResult {
  if (typeof window === 'undefined') {
    return { passed: true };
  }

  if (window.isSecureContext) {
    return { passed: true };
  }

  return {
    passed: false,
    reason: 'Application requires secure browser context',
  };
}

export function validateEncryptionFlag(encrypted: boolean): SecurityCheckResult {
  return encrypted
    ? { passed: true }
    : { passed: false, reason: 'Media payload is not encrypted' };
}
