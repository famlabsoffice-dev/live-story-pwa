import { expect, test } from '@playwright/test';

test.describe('Focus management accessibility audit', () => {
  test('moves focus to meaningful interactive targets', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('body')).toBeVisible();

    const focusable = page.locator(
      'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])',
    );

    const count = await focusable.count();

    if (count > 0) {
      await focusable.first().focus();

      const activeTag = await page.evaluate(
        () => document.activeElement?.tagName,
      );

      expect(activeTag).not.toBe('BODY');
    }
  });

  test('does not hide focused elements', async ({ page }) => {
    await page.goto('/');

    const result = await page.evaluate(() => {
      const element = document.querySelector(
        'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])',
      ) as HTMLElement | null;

      if (!element) return true;

      element.focus();

      const rect = element.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });

    expect(result).toBeTruthy();
  });

  test('supports visible focus indicators', async ({ page }) => {
    await page.goto('/');

    const hasFocusStyle = await page.evaluate(() => {
      const element = document.querySelector(
        'button, a, input, textarea, select',
      ) as HTMLElement | null;

      if (!element) return true;

      element.focus();
      const style = window.getComputedStyle(element);

      return (
        style.outlineStyle !== 'none' ||
        style.boxShadow !== 'none' ||
        style.borderStyle !== 'none'
      );
    });

    expect(hasFocusStyle).toBeTruthy();
  });
});
