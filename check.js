import puppeteer from 'puppeteer-core';

(async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: "new"
    });
    const page = await browser.newPage();

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

    console.log("Navigating...");
    await page.goto('http://localhost:4173', { waitUntil: 'networkidle0', timeout: 5000 });

    await browser.close();
    console.log("Done.");
  } catch(e) {
    console.log("Failed:", e.message);
  }
})();
