const { test, chromium } = require('@playwright/test');

test('Open Clusterix using real Chrome profile', async () => {
  const context = await chromium.launchPersistentContext(
    '/Users/mihir/Library/Application Support/Google/Chrome',
    {
      channel: 'chrome',
      headless: false
    }
  );

  const page = context.pages()[0] || await context.newPage();

  await page.goto('https://app.clusterix.io');

  await page.waitForTimeout(30000);
});
