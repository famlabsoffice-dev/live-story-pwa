import { z } from "zod";

export const memoryFragmentSchema = z.object({
  id: z.string(),
  content: z.string(),
  confidence: z.number().min(0).max(1),
  tags: z.array(z.string()).default([]),
  entities: z.array(z.string()).default([]),
});

export type MemoryFragment = z.infer<typeof memoryFragmentSchema>;

export function extractMemories(input: string): MemoryFragment[] {
  return input
    .split(/[.!?]/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((content) => ({
      id: crypto.randomUUID(),
      content,
      confidence: 0.5,
      tags: extractTags(content),
      entities: extractEntities(content),
    }));
}

function extractTags(text: string): string[] {
  const tags = ["family", "place", "work", "childhood", "memory"];
  return tags.filter((tag) => text.toLowerCase().includes(tag));
}

function extractEntities(text: string): string[] {
  return text.match(/\b[A-ZÄÖÜ][a-zäöüß]+\b/g) ?? [];
}
