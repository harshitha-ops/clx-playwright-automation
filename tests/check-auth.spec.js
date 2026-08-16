const { test, chromium } = require('@playwright/test');

test('Check saved auth', async () => {
  const browser = await chromium.launch({
    headless: false
  });

  const context = await browser.newContext({
    storageState: 'auth.json'
  });

  const page = await context.newPage();

  await page.goto('https://app.clusterix.io');

  console.log('URL:', page.url());

  await page.waitForTimeout(15000);
});
