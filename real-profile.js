const { chromium } = require('playwright');

(async () => {
  const context = await chromium.launchPersistentContext(
    '/tmp/playwright-profile',
    {
      channel: 'chrome',
      headless: false
    }
  );

  const page = await context.newPage();

  await page.goto('https://app.clusterix.io');

  await page.pause();
})();
