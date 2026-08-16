const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://app.clusterix.io/login');

  console.log('Login and complete MFA.');
  console.log('When homepage is loaded, press ENTER here.');

  process.stdin.once('data', async () => {
    await context.storageState({ path: 'auth.json' });
    console.log('Session saved!');
    await browser.close();
  });
})();
