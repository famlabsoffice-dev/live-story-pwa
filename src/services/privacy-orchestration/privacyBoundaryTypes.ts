export type PrivacyBoundaryLevel =
  | "local_only"
  | "consent_required"
  | "protected_processing";

export interface PrivacyContext {
  userConsent: boolean;
  encryptedStorage: boolean;
  boundary: PrivacyBoundaryLevel;
}

export interface AIExecutionRequest {
  agent: string;
  payload: unknown;
  privacyContext: PrivacyContext;
}

export interface AIExecutionResult {
  allowed: boolean;
  processedLocally: boolean;
  reason: string;
}
