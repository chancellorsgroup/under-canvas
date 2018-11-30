import path from 'path';

import puppeteer from 'puppeteer';

let page;
let browser;

jest.setTimeout(30000);

describe('preview-image', () => {
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
    });
    page = await browser.newPage();
    await page.goto('http://localhost:8080');
    await page.addScriptTag({ path: './dist/index.js' });
    // await page.addScriptTag({ path: './test/preview.js' });
    await page.waitForSelector('.file', { visible: true });
  });

  afterEach(async () => {
    browser.close();
  });

  it('errors if the image file does not exist', async () => {
    const image = await page.evaluate(() => window.UnderCanvas('http://localhost:8080/1x1-ff0800ff.png'));
    expect(image).toEqual('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2P4z8HwHwAFGAIH4IhA5gAAAABJRU5ErkJggg==');
  });

  it.skip('handles a file upload', async () => {
    const filePath = path.relative(process.cwd(), path.resolve(__dirname, 'test.png'));
    const input = await page.$('input');
    await input.uploadFile(filePath);
  });
});
