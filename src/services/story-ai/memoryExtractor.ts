import { z } from "zod";

export const memoryFragmentSchema = z.object({
  id: z.string(),
  content: z.string(),
  confidence: z.number().min(0).max(1),
  tags: z.array(z.string()).default([]),
});

export type MemoryFragment = z.infer<typeof memoryFragmentSchema>;

export function extractMemories(input: string): MemoryFragment[] {
  return input
    .split(/[.!?]/)
    .map((part, index) => part.trim())
    .filter(Boolean)
    .map((content, index) => ({
      id: crypto.randomUUID(),
      content,
      confidence: 0.5,
      tags: [],
    }));
}
