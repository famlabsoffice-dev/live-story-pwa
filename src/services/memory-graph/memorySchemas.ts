import { z } from "zod";

export const memoryNodeSchema = z.object({
  id: z.string().uuid(),
  type: z.enum([
    "person",
    "event",
    "place",
    "period",
    "emotion",
    "media",
    "chapter",
  ]),
  label: z.string().min(1),
  description: z.string().optional(),
  createdAt: z.date(),
  metadata: z.record(z.string(), z.unknown()),
});

export const memoryEdgeSchema = z.object({
  id: z.string().uuid(),
  sourceId: z.string().uuid(),
  targetId: z.string().uuid(),
  relation: z.enum([
    "knows",
    "experienced",
    "belongs_to",
    "remembers",
    "connected_to",
  ]),
  confidence: z.number().min(0).max(1),
  createdAt: z.date(),
});
