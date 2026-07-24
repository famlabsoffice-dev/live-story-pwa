import { z } from 'zod';

export const encryptedRecordSchema = z.object({
  id: z.string().uuid(),
  collection: z.string().min(1),
  payload: z.object({
    cipherText: z.string().min(1),
    iv: z.string().min(1),
    salt: z.string(),
    algorithm: z.literal('AES-GCM'),
    version: z.number().int().positive(),
  }),
  createdAt: z.number(),
  updatedAt: z.number(),
});

export type EncryptedRecord = z.infer<typeof encryptedRecordSchema>;
