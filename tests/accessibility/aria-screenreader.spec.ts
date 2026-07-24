import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';


test.describe('ARIA and screenreader accessibility audit', () => {
  test('has valid ARIA structure on application shell', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('body')).toBeVisible();

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules([
        'aria-allowed-attr',
        'aria-required-attr',
        'aria-roles',
        'aria-valid-attr-value',
        'button-name',
        'link-name',
        'image-alt',
        'label',
      ])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('provides screenreader landmarks', async ({ page }) => {
    await page.goto('/');

    const landmarks = await page.locator(
      'main, nav, header, footer, [role="main"], [role="navigation"]',
    ).count();

    expect(landmarks).toBeGreaterThan(0);
  });

  test('interactive controls expose accessible names', async ({ page }) => {
    await page.goto('/');

    const unnamedControls = await page.evaluate(() =>
      Array.from(document.querySelectorAll('button, a, input, textarea, select'))
        .filter((element) => {
          const ariaLabel = element.getAttribute('aria-label');
          const text = element.textContent?.trim();
          const label = element.getAttribute('id')
            ? document.querySelector(`label[for="${element.id}"]`)?.textContent
            : null;

          return !ariaLabel && !text && !label;
        })
        .map((element) => element.tagName),
    );

    expect(unnamedControls).toEqual([]);
  });
});
