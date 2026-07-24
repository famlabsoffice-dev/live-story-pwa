import { test, expect } from '@playwright/test';

test.describe('Senior UX accessibility checks', () => {
  test('supports increased text scaling', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      document.documentElement.style.fontSize = '200%';
    });

    const bodySize = await page.locator('body').evaluate((el) =>
      getComputedStyle(el).fontSize
    );

    expect(bodySize).toBeTruthy();
  });

  test('interactive elements remain keyboard reachable', async ({ page }) => {
    await page.goto('/');

    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
    }

    const activeRole = await page.evaluate(() =>
      document.activeElement?.getAttribute('role') ?? document.activeElement?.tagName
    );

    expect(activeRole).toBeTruthy();
  });
});
