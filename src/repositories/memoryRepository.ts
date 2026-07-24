import { db } from '../database';

export const memoryRepository = {
  addNode: (node: { id: string; type: string; label: string }) => db.memories.add(node as never),
  getNode: (id: string) => db.memories.get(id),
  list: (storyId: string) => db.memories.where('storyId').equals(storyId).toArray()
};
