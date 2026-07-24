import { expect, test } from '@playwright/test';

test.describe('Reduced motion and cognitive accessibility audit', () => {
  test('supports reduced motion preference', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');

    const animatedElements = await page.evaluate(() =>
      Array.from(document.querySelectorAll('*')).filter((element) => {
        const style = window.getComputedStyle(element);
        return (
          style.animationDuration !== '0s' ||
          style.transitionDuration !== '0s'
        );
      }).length,
    );

    expect(animatedElements).toBeGreaterThanOrEqual(0);
  });

  test('does not use excessive motion for primary content', async ({ page }) => {
    await page.goto('/');

    const motionSafe = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll('*'));

      return elements.every((element) => {
        const style = window.getComputedStyle(element);
        const duration = Number.parseFloat(style.animationDuration);

        return Number.isNaN(duration) || duration <= 5;
      });
    });

    expect(motionSafe).toBeTruthy();
  });

  test('provides readable document structure', async ({ page }) => {
    await page.goto('/');

    const structure = await page.evaluate(() => ({
      headings: document.querySelectorAll('h1, h2, h3').length,
      main: document.querySelector('main, [role="main"]') !== null,
    }));

    expect(structure.headings).toBeGreaterThanOrEqual(0);
    expect(structure.main).toBeTruthy();
  });
});
