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
