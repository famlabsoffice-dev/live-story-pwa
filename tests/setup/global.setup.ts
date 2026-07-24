import type { FullConfig } from '@playwright/test';

export default async function globalSetup() {
  process.env.NODE_ENV = 'test';
}
