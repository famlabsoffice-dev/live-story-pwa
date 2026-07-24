export interface ErrorReport {
  error: string;
  context?: string;
  createdAt: string;
}

export function createErrorReport(
  error: string,
  context?: string,
): ErrorReport {
  return {
    error,
    context,
    createdAt: new Date().toISOString(),
  };
}
