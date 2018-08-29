import path from 'path';
import puppeteer from 'puppeteer';

let page;
let browser;

describe('preview-image', () => {
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
    });
    page = await browser.newPage();
    await page.goto('http://localhost:8080');
    await page.addScriptTag({ path: './dist/index.js' });
    await page.addScriptTag({ path: './test/preview.js' });
  });

  afterEach(async () => {
    browser.close();
  });

  it('errors if the image file does not exist', async () => {
    const image = await page.evaluate(() => window.UnderCanvas('http://localhost:8080/test.png'));
    await expect(image).toEqual();
  });

  it.skip('handles a file upload', async () => {
    const filePath = path.relative(process.cwd(), path.resolve(__dirname, 'test.png'));
    const input = await page.$('input');
    await input.uploadFile(filePath);
  });
});
