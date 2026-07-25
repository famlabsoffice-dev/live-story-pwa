export type ConsentScope =
  | 'story-data'
  | 'media-storage'
  | 'ai-processing'
  | 'analytics';

export interface ConsentRecord {
  id: string;
  scope: ConsentScope;
  granted: boolean;
  grantedAt?: string;
  revokedAt?: string;
  version: string;
}

export interface ConsentManager {
  grant(scope: ConsentScope): Promise<void>;
  revoke(scope: ConsentScope): Promise<void>;
  hasConsent(scope: ConsentScope): Promise<boolean>;
}
