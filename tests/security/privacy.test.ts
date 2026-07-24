import { sanitizePrompt } from '@/services/local-ai/promptSanitizer';
import { canRunInference, defaultInferencePolicy } from '@/services/local-ai/inferencePolicy';

describe('Privacy Layer', () => {
  it('removes sensitive prompt fields', () => {
    expect(sanitizePrompt('my password is test')).toContain('[REDACTED]');
  });

  it('requires consent for inference', () => {
    expect(canRunInference(defaultInferencePolicy, false)).toBe(false);
  });
});
