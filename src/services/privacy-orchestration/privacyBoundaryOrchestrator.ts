import type {
  AIExecutionRequest,
  AIExecutionResult,
} from "./privacyBoundaryTypes";

export class PrivacyBoundaryOrchestrator {
  execute(
    request: AIExecutionRequest,
  ): AIExecutionResult {
    const allowed =
      request.privacyContext.userConsent &&
      request.privacyContext.encryptedStorage;

    return {
      allowed,
      processedLocally:
        request.privacyContext.boundary === "local_only" ||
        request.privacyContext.boundary === "protected_processing",
      reason: allowed
        ? "Privacy boundary passed"
        : "Consent or encryption requirement missing",
    };
  }

  canUseAgent(request: AIExecutionRequest): boolean {
    return this.execute(request).allowed;
  }
}
