import type { PrivacyConfiguration } from './privacyPolicyTypes';

export class PrivacyGuard {
  constructor(private readonly config: PrivacyConfiguration) {}

  canProcessLocally(): boolean {
    return this.config.localProcessingPreferred;
  }

  requiresConsent(): boolean {
    return this.config.dataMinimization;
  }

  canDeleteData(): boolean {
    return this.config.deletionEnabled;
  }

  canExportData(): boolean {
    return this.config.exportEnabled;
  }
}
