import { expect, test } from '@playwright/test';

const BREAKPOINTS = [
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 720 },
];

for (const breakpoint of BREAKPOINTS) {
  test.describe(`${breakpoint.name} breakpoint`, () => {
    test.use({ viewport: { width: breakpoint.width, height: breakpoint.height } });

    test('maintains responsive layout boundaries', async ({ page }) => {
      await page.goto('/');

      await expect(page.locator('body')).toBeVisible();

      const layout = await page.evaluate(() => ({
        width: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
      }));

      expect(layout.width).toBe(breakpoint.width);
      expect(layout.scrollWidth).toBeLessThanOrEqual(layout.width);
    });
  });
}
