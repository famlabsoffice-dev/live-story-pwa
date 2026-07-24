import { z } from 'zod';

export const encryptionPayloadSchema = z.object({
  cipherText: z.string().min(1),
  iv: z.string().min(1),
  salt: z.string().min(1),
  algorithm: z.literal('AES-GCM'),
  version: z.number().int().positive(),
});

export type ValidatedEncryptionPayload = z.infer<typeof encryptionPayloadSchema>;
