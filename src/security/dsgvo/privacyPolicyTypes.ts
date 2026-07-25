export type DataCategory =
  | 'personal-data'
  | 'biographical-data'
  | 'media-data'
  | 'ai-context-data';

export interface DataProcessingRecord {
  id: string;
  category: DataCategory;
  purpose: string;
  storageLocation: 'local-device' | 'remote-service';
  encrypted: boolean;
  consentRequired: boolean;
}

export interface PrivacyConfiguration {
  dataMinimization: boolean;
  localProcessingPreferred: boolean;
  exportEnabled: boolean;
  deletionEnabled: boolean;
}
