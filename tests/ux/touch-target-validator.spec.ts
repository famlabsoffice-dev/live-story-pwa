import { expect, test } from '@playwright/test';

const MIN_TOUCH_TARGET = 44;

test.describe('Touch target accessibility validation', () => {
  test.use({
    viewport: { width: 393, height: 851 },
    isMobile: true,
    hasTouch: true,
  });

  test('interactive elements meet minimum touch size', async ({ page }) => {
    await page.goto('/');

    const invalidTargets = await page.evaluate((minimum) => {
      return Array.from(document.querySelectorAll('button, a, input, textarea, select'))
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return {
            tag: element.tagName,
            width: rect.width,
            height: rect.height,
          };
        })
        .filter(({ width, height }) => width < minimum || height < minimum);
    }, MIN_TOUCH_TARGET);

    expect(invalidTargets).toEqual([]);
  });
});
