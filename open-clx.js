const { chromium } = require('playwright');

(async () => {
  const context = await chromium.launchPersistentContext(
    '/Users/mihir/playwright-profile',
    {
      headless: false,
      channel: 'chrome'
    }
  );

  const page = await context.newPage();
  await page.goto('https://app.clusterix.io');

  await page.pause();
})();
