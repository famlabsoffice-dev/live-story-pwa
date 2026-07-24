export interface MediaDbRecord {
  id: string;
  blob: Blob;
  createdAt: Date;
}

export class DexieMediaDatabase {
  private records = new Map<string, MediaDbRecord>();

  async put(record: MediaDbRecord) {
    this.records.set(record.id, record);
  }

  async get(id: string) {
    return this.records.get(id) ?? null;
  }

  async delete(id: string) {
    this.records.delete(id);
  }
}
