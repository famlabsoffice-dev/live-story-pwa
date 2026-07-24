import type { LocalIdentity } from './identityTypes';

export function createLocalIdentity(): LocalIdentity {
  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    anonymous: true,
  };
}

export function anonymizeIdentity(): LocalIdentity {
  return createLocalIdentity();
}
