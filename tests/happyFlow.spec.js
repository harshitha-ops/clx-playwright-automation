const { test } = require('@playwright/test');

test('Login > Create File > Edit > Edit > Logout', async ({ page }) => {

  await page.goto('https://app.clusterix.io/login');

  // Manual MFA login
  await page.pause();

  // TODO:
  // Create File
  // Edit File
  // Edit File Again
  // Logout

});
