import { z } from 'zod';

export const encryptionAlgorithmSchema = z.literal('AES-GCM');

export const encryptionKeyMetadataSchema = z.object({
  id: z.string().uuid(),
  algorithm: encryptionAlgorithmSchema,
  createdAt: z.string().datetime(),
});
