import type { ConsentManager, ConsentRecord, ConsentScope } from './consentTypes';

const STORAGE_KEY = 'live-story-consent-v1';

export class LocalConsentManager implements ConsentManager {
  private read(): ConsentRecord[] {
    if (typeof localStorage === 'undefined') return [];

    const value = localStorage.getItem(STORAGE_KEY);
    return value ? JSON.parse(value) : [];
  }

  private write(records: ConsentRecord[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }

  async grant(scope: ConsentScope): Promise<void> {
    const records = this.read().filter((item) => item.scope !== scope);

    records.push({
      id: crypto.randomUUID(),
      scope,
      granted: true,
      grantedAt: new Date().toISOString(),
      version: '1.0',
    });

    this.write(records);
  }

  async revoke(scope: ConsentScope): Promise<void> {
    const records = this.read().filter((item) => item.scope !== scope);

    records.push({
      id: crypto.randomUUID(),
      scope,
      granted: false,
      revokedAt: new Date().toISOString(),
      version: '1.0',
    });

    this.write(records);
  }

  async hasConsent(scope: ConsentScope): Promise<boolean> {
    return this.read().some(
      (item) => item.scope === scope && item.granted === true,
    );
  }
}
