import { expect, test } from '@playwright/test';

test.describe('Screenshot regression', () => {
  test('homepage visual baseline remains stable', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });
});
