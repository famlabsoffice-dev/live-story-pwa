export interface InferencePolicy {
  allowCloudProcessing: boolean;
  requireConsent: boolean;
}

export const defaultInferencePolicy: InferencePolicy = {
  allowCloudProcessing: false,
  requireConsent: true,
};

export function canRunInference(
  policy: InferencePolicy,
  consentGranted: boolean
): boolean {
  return policy.requireConsent ? consentGranted : true;
}
