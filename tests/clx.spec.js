const { test, expect } = require('@playwright/test');

test('CLX flow', async ({ page }) => {
  await page.goto('https://app.clusterix.io/login');
});
