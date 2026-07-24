export type ConsentType =
  | 'recording'
  | 'media'
  | 'aiProcessing'
  | 'export';

export interface ConsentRecord {
  type: ConsentType;
  granted: boolean;
  timestamp: string;
}

export class ConsentManager {
  private records: ConsentRecord[] = [];

  grant(type: ConsentType): void {
    this.records.push({ type, granted: true, timestamp: new Date().toISOString() });
  }

  hasConsent(type: ConsentType): boolean {
    return this.records.some((record) => record.type === type && record.granted);
  }
}
