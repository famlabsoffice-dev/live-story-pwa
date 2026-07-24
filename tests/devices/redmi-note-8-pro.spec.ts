import { test } from '@playwright/test';
import { redmiNote8Pro } from '../fixtures/redmi';
import { assertMobileViewport, assertNoConsoleErrors } from '../helpers/mobileAssertions';
import { assertNoHorizontalOverflow, assertPageLoaded } from '../helpers/viewport';

test.describe('Redmi Note 8 Pro mobile experience', () => {
  test('renders correctly on Redmi Note 8 Pro', async ({ browser }) => {
    const context = await browser.newContext(redmiNote8Pro);
    const page = await context.newPage();
    const errors: string[] = [];

    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });

    await page.goto('/');

    await assertPageLoaded(page);
    await assertMobileViewport(page);
    await assertNoHorizontalOverflow(page);
    await assertNoConsoleErrors(errors);

    await context.close();
  });
});
