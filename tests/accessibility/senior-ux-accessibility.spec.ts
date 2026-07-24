import { expect, test } from '@playwright/test';

test.describe('Senior UX accessibility rules', () => {
  test('keeps touch targets senior friendly', async ({ page }) => {
    await page.goto('/');

    const invalidTargets = await page.evaluate(() => {
      const minimum = 44;

      return Array.from(
        document.querySelectorAll('button, a, input, textarea, select'),
      )
        .map((element) => {
          const rect = element.getBoundingClientRect();

          return {
            tag: element.tagName,
            width: rect.width,
            height: rect.height,
          };
        })
        .filter(({ width, height }) => width < minimum || height < minimum);
    });

    expect(invalidTargets).toEqual([]);
  });

  test('avoids unreadable text sizes', async ({ page }) => {
    await page.goto('/');

    const smallTextElements = await page.evaluate(() =>
      Array.from(document.querySelectorAll('p, span, button, a, label'))
        .map((element) => {
          const size = Number.parseFloat(
            window.getComputedStyle(element).fontSize,
          );

          return size;
        })
        .filter((size) => size > 0 && size < 14).length,
    );

    expect(smallTextElements).toBe(0);
  });

  test('provides understandable controls', async ({ page }) => {
    await page.goto('/');

    const ambiguousControls = await page.evaluate(() =>
      Array.from(document.querySelectorAll('button, a')).filter((element) => {
        const name = element.textContent?.trim() || element.getAttribute('aria-label');
        return !name;
      }).length,
    );

    expect(ambiguousControls).toBe(0);
  });
});
