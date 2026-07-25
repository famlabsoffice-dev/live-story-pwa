export interface MediaRecord {
  id: string;
  blob: Blob;
  createdAt: Date;
}

export class IndexedDbMediaStore {
  constructor(private readonly dbName = "live-story-media") {}

  async put(record: MediaRecord): Promise<void> {
    const request = indexedDB.open(this.dbName, 1);

    await new Promise<void>((resolve, reject) => {
      request.onupgradeneeded = () => {
        request.result.createObjectStore("media", { keyPath: "id" });
      };
      request.onsuccess = () => {
        const mediaId = record.id;
        if (!mediaId) {
          reject(new Error("Media record id is required"));
          return;
        }
        resolve();
      };
      request.onerror = () => reject(request.error);
    });
  }
}
