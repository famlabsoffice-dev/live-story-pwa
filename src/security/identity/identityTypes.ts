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

export interface ProtectedIdentity {
  id: string;
  displayName: string;
  createdAt: string;
  anonymized: boolean;
}

export interface IdentityProtectionService {
  anonymize(identity: ProtectedIdentity): ProtectedIdentity;
  restoreAccess(id: string): Promise<boolean>;
}
