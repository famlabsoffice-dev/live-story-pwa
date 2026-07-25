import type { MemoryGraph } from "./types";

export interface MemoryGraphStorage {
  save(graph: MemoryGraph): Promise<void>;
  load(): Promise<MemoryGraph | null>;
  clear(): Promise<void>;
}

export class LocalMemoryGraphStorage implements MemoryGraphStorage {
  private readonly key: string;

  constructor(key = "live-story-memory-graph") {
    this.key = key;
  }

  async save(graph: MemoryGraph): Promise<void> {
    if (typeof localStorage === "undefined") return;

    localStorage.setItem(this.key, JSON.stringify(graph));
  }

  async load(): Promise<MemoryGraph | null> {
    if (typeof localStorage === "undefined") return null;

    const data = localStorage.getItem(this.key);

    if (!data) return null;

    return JSON.parse(data) as MemoryGraph;
  }

  async clear(): Promise<void> {
    if (typeof localStorage === "undefined") return;

    localStorage.removeItem(this.key);
  }
}
