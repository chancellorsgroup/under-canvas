import puppeteer from 'puppeteer';

import preview from '../src';

let page;
let browser;

describe('preview-image', () => {
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
    });
    page = await browser.newPage();
    await page.goto('http://localhost:8080');
  });

  afterEach(async () => {
    // browser.close();
  });

  it('errors if the image file does not exist', async () => {
    await page.addScriptTag({ path: './lib/index.js' });
    const image = await page.evaluate(async () => {
      return imagePreview();
    });
    console.log(image);
  });
});
