import { z } from 'zod';

export const localIdentitySchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime(),
  anonymous: z.boolean(),
});

export const privacyConsentSchema = z.object({
  purpose: z.string().min(1),
  granted: z.boolean(),
  updatedAt: z.string().datetime(),
});
