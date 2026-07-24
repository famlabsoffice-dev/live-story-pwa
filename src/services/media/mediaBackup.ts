export interface MediaBackupEntry {
  id: string;
  checksum: string;
  createdAt: Date;
}

export class MediaBackupService {
  export(entries: MediaBackupEntry[]) {
    return JSON.stringify(entries);
  }

  restore(payload: string) {
    return JSON.parse(payload) as MediaBackupEntry[];
  }
}
