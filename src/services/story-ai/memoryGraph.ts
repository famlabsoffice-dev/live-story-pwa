export interface MemoryNode { id: string; label: string; links: string[]; }

export function createMemoryNode(label: string): MemoryNode {
 return { id: crypto.randomUUID(), label, links: [] };
}
