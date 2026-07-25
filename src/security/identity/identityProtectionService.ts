import type { IdentityProtectionService, ProtectedIdentity } from './identityTypes';

export class DefaultIdentityProtectionService implements IdentityProtectionService {
  private readonly accessTokens = new Map<string, string>();

  anonymize(identity: ProtectedIdentity): ProtectedIdentity {
    this.accessTokens.set(identity.id, crypto.randomUUID());

    return {
      ...identity,
      displayName: `Person-${identity.id.slice(0, 8)}`,
      anonymized: true,
    };
  }

  async restoreAccess(id: string): Promise<boolean> {
    return this.accessTokens.has(id);
  }
}
