import { ConsentManager } from '@/security/consent/consentManager';

describe('Consent Manager', () => {
  it('stores granted consent', () => {
    const manager = new ConsentManager();

    manager.grant('aiProcessing');

    expect(manager.hasConsent('aiProcessing')).toBe(true);
  });
});
