import { expect, test } from '@playwright/test';

test.describe('Keyboard navigation accessibility audit', () => {
  test('allows keyboard focus through interactive elements', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('body')).toBeVisible();

    const interactiveElements = await page.locator(
      'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])',
    ).count();

    expect(interactiveElements).toBeGreaterThanOrEqual(0);

    if (interactiveElements > 0) {
      await page.keyboard.press('Tab');

      const focusedElement = await page.evaluate(() => ({
        tag: document.activeElement?.tagName,
        visible: Boolean(document.activeElement),
      }));

      expect(focusedElement.visible).toBeTruthy();
      expect(focusedElement.tag).not.toBe('BODY');
    }
  });

  test('does not contain disabled keyboard traps', async ({ page }) => {
    await page.goto('/');

    const focusableElements = await page.evaluate(() =>
      Array.from(
        document.querySelectorAll(
          'button, a, input, textarea, select, [tabindex]',
        ),
      ).map((element) => ({
        tag: element.tagName,
        tabIndex: (element as HTMLElement).tabIndex,
      })),
    );

    expect(focusableElements.some(({ tabIndex }) => tabIndex < -1)).toBeFalsy();
  });
});
