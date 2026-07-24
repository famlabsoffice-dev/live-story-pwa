import { z } from 'zod';
import { MediaCategory } from './mediaTypes';

export const ALLOWED_MIME_TYPES = {
  [MediaCategory.IMAGE]: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  [MediaCategory.AUDIO]: ['audio/mpeg', 'audio/wav', 'audio/webm', 'audio/ogg'],
  [MediaCategory.VIDEO]: ['video/mp4', 'video/webm', 'video/ogg'],
  [MediaCategory.DOCUMENT]: ['application/pdf']
};

export const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB default limit

export const MediaIntegritySchema = z.object({
  hash: z.string().length(64), // SHA-256 hex string
  algorithm: z.literal('SHA-256'),
  verifiedAt: z.date()
});

export const MediaMetadataSchema = z.object({
  id: z.string().uuid(),
  fileName: z.string().min(1),
  mimeType: z.string().refine(
    (mime) => Object.values(ALLOWED_MIME_TYPES).flat().includes(mime),
    { message: "Unsupported MIME type" }
  ),
  size: z.number().max(MAX_FILE_SIZE),
  category: z.nativeEnum(MediaCategory),
  integrity: MediaIntegritySchema,
  createdAt: z.date(),
  updatedAt: z.date(),
  dimensions: z.object({
    width: z.number(),
    height: z.number()
  }).optional(),
  duration: z.number().optional(),
  thumbnailId: z.string().uuid().optional(),
  version: z.number().int().nonnegative()
});
