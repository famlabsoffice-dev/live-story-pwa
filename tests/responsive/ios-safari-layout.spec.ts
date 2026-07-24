import { expect, test } from '@playwright/test';

test.describe('iOS Safari responsive layout', () => {
  test.use({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });

  test('renders correctly without viewport overflow', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('body')).toBeVisible();

    const layout = await page.evaluate(() => ({
      width: window.innerWidth,
      height: window.innerHeight,
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      safeAreaSupported: CSS.supports('padding-bottom: env(safe-area-inset-bottom)'),
    }));

    expect(layout.width).toBe(390);
    expect(layout.scrollWidth).toBeLessThanOrEqual(layout.width);
    expect(layout.scrollHeight).toBeGreaterThan(0);
    expect(layout.safeAreaSupported).toBeTruthy();
  });
});
