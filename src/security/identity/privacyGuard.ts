import type { PrivacyConsent } from './identityTypes';

export function canProcessData(consent: PrivacyConsent): boolean {
  return consent.granted === true;
}

export function requireConsent(consent: PrivacyConsent): void {
  if (!canProcessData(consent)) {
    throw new Error('Privacy consent required');
  }
}
