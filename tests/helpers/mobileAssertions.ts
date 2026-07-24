import { expect, type Page } from '@playwright/test';

export async function assertMobileViewport(page: Page) {
  const viewport = page.viewportSize();
  expect(viewport?.width).toBeLessThanOrEqual(393);
}

export async function assertNoConsoleErrors(errors: string[]) {
  expect(errors).toEqual([]);
}
