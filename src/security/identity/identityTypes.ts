export interface LocalIdentity {
  id: string;
  createdAt: string;
  anonymous: boolean;
}

export interface PrivacyConsent {
  purpose: string;
  granted: boolean;
  updatedAt: string;
}
