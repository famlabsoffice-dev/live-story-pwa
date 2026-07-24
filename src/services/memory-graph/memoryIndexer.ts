import type { MemoryNode } from "./graphNode";

export class MemoryIndexer {
  private index = new Map<string, Set<string>>();

  indexNode(node: MemoryNode): void {
    const terms = `${node.label} ${node.description ?? ""}`
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);

    for (const term of terms) {
      const ids = this.index.get(term) ?? new Set<string>();
      ids.add(node.id);
      this.index.set(term, ids);
    }
  }

  search(term: string): string[] {
    return [...(this.index.get(term.toLowerCase()) ?? [])];
  }
}
