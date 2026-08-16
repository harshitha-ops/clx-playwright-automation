const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');

  console.log('Connected to Chrome');

  const context = browser.contexts()[0];

  console.log('Contexts:', browser.contexts().length);

  const page = context.pages()[0];

  console.log('Current URL:', page.url());

  await page.pause();
})();
