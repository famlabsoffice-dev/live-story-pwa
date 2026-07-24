export const securityTestRequirements = {
  encryption: true,
  privacyBoundary: true,
  consentValidation: true,
  localProcessing: true,
  tamperDetection: true,
} as const;

export type SecurityTestRequirement = keyof typeof securityTestRequirements;
