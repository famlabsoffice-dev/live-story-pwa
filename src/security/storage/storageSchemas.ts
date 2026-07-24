import { z } from 'zod';

export const secureStorageRecordSchema = z.object({
  id: z.string().uuid(),
  encrypted: z.boolean(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
