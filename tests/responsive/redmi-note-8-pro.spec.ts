import { expect, test } from '@playwright/test';

const REDMI_NOTE_8_PRO = {
  width: 393,
  height: 851,
};

test.describe('Redmi Note 8 Pro responsive layout', () => {
  test.use({
    viewport: REDMI_NOTE_8_PRO,
    isMobile: true,
    hasTouch: true,
  });

  test('renders mobile application shell without overflow', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('body')).toBeVisible();

    const dimensions = await page.evaluate(() => ({
      viewport: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));

    expect(dimensions.viewport).toBe(REDMI_NOTE_8_PRO.width);
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.viewport);
  });
});
