export interface PrivacyBoundary {
  canStore(): boolean;
  canProcessAI(): boolean;
}

export class LocalPrivacyBoundary implements PrivacyBoundary {
  constructor(private readonly consentGranted: boolean) {}

  canStore(): boolean {
    return this.consentGranted;
  }

  canProcessAI(): boolean {
    return this.consentGranted;
  }
}
