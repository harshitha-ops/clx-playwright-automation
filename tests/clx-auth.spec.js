const { test } = require('@playwright/test');

test.use({
  storageState: 'auth.json'
});

test('Open CLX with saved session', async ({ page }) => {
  await page.goto('https://app.clusterix.io');

  await page.waitForTimeout(10000);
});
