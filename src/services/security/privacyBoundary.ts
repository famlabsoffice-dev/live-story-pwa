export type DataAccessScope =
  | "story"
  | "person"
  | "media"
  | "interview"
  | "memory";

export interface PrivacyContext {
  consentGranted: boolean;
  scope: DataAccessScope[];
  localOnly: boolean;
}

export function canAccess(
  context: PrivacyContext,
  scope: DataAccessScope,
): boolean {
  return (
    context.consentGranted &&
    context.localOnly &&
    context.scope.includes(scope)
  );
}

export function createLocalPrivacyContext(
  scopes: DataAccessScope[],
): PrivacyContext {
  return {
    consentGranted: false,
    scope: scopes,
    localOnly: true,
  };
}
