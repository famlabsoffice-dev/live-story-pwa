const blockedPatterns = [
  /password/gi,
  /token/gi,
  /secret/gi,
];

export function sanitizePrompt(input: string): string {
  return blockedPatterns.reduce(
    (result, pattern) => result.replace(pattern, '[REDACTED]'),
    input
  );
}
