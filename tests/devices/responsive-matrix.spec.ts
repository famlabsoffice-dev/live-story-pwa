import { test } from '@playwright/test';
import { deviceMatrix } from '../fixtures/deviceMatrix';
import { assertNoHorizontalOverflow, assertPageLoaded } from '../helpers/viewport';

test.describe('Responsive device matrix', () => {
  for (const device of Object.values(deviceMatrix)) {
    test(`${device.name} renders correctly`, async ({ browser }) => {
      const context = await browser.newContext(device);
      const page = await context.newPage();

      await page.goto('/');
      await assertPageLoaded(page);
      await assertNoHorizontalOverflow(page);

      await context.close();
    });
  }
});
