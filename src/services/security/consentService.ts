export interface ConsentRecord {
  id: string;
  granted: boolean;
  createdAt: string;
  categories: string[];
}

export function createConsentRecord(
  categories: string[],
  granted = false,
): ConsentRecord {
  return {
    id: crypto.randomUUID(),
    granted,
    createdAt: new Date().toISOString(),
    categories,
  };
}

export function hasConsent(
  record: ConsentRecord | undefined,
): boolean {
  return Boolean(record?.granted);
}
