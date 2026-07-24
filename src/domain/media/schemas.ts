import { z } from "zod";

export const MediaTypeSchema = z.enum([
  "image",
  "video",
  "audio",
  "document",
]);

export const MediaStatusSchema = z.enum([
  "local",
  "pending-sync",
  "synced",
  "archived",
  "deleted",
]);

export const MediaMetadataSchema = z.object({
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
  durationSeconds: z.number().nonnegative().optional(),
  mimeType: z.string().optional(),
  fileSizeBytes: z.number().int().nonnegative().optional(),
  capturedAt: z.coerce.date().optional(),
  device: z.string().optional(),
  locationId: z.string().uuid().optional(),
});

export const MediaAssetSchema = z.object({
  id: z.string().uuid(),
  storyId: z.string().uuid().optional(),
  chapterId: z.string().uuid().optional(),
  personId: z.string().uuid().optional(),
  type: MediaTypeSchema,
  status: MediaStatusSchema,
  filename: z.string().min(1),
  localPath: z.string().optional(),
  hash: z.string().optional(),
  metadata: MediaMetadataSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  version: z.number().int().nonnegative(),
});

export type MediaAssetInput = z.infer<typeof MediaAssetSchema>;
export type MediaMetadataInput = z.infer<typeof MediaMetadataSchema>;
