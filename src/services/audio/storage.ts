const audioStore = new Map<string, Blob>();

export const audioStorage = {
  save: (id: string, blob: Blob) => audioStore.set(id, blob),
  get: (id: string) => audioStore.get(id),
  remove: (id: string) => audioStore.delete(id),
};
