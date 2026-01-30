import puppeteer from 'puppeteer';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { writeFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

async function generateImages() {
  console.log('Generating SEO images...');

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // Generate OG Image (1200x630)
  console.log('Creating og-image.png...');
  const ogPage = await browser.newPage();
  await ogPage.setViewport({ width: 1200, height: 630 });
  await ogPage.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          width: 1200px;
          height: 630px;
          background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0ea5e9 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: system-ui, -apple-system, sans-serif;
          color: white;
          padding: 60px;
        }
        .domain {
          font-size: 32px;
          font-weight: 300;
          letter-spacing: 4px;
          opacity: 0.9;
          margin-bottom: 20px;
        }
        .title {
          font-size: 72px;
          font-weight: 700;
          text-align: center;
          line-height: 1.1;
          margin-bottom: 30px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        .tagline {
          font-size: 36px;
          font-weight: 500;
          opacity: 0.95;
          letter-spacing: 2px;
        }
        .saltire {
          position: absolute;
          top: 40px;
          right: 50px;
          width: 80px;
          height: 53px;
          background: #005EB8;
          overflow: hidden;
        }
        .saltire::before, .saltire::after {
          content: '';
          position: absolute;
          background: white;
        }
        .saltire::before {
          width: 113px;
          height: 10px;
          top: 21px;
          left: -17px;
          transform: rotate(33.5deg);
        }
        .saltire::after {
          width: 113px;
          height: 10px;
          top: 21px;
          left: -17px;
          transform: rotate(-33.5deg);
        }
      </style>
    </head>
    <body>
      <div class="saltire"></div>
      <div class="domain">vision.scot</div>
      <div class="title">A Vision for a<br/>Better Scotland</div>
      <div class="tagline">Less Tax. Less Work. More Life.</div>
    </body>
    </html>
  `);
  await ogPage.screenshot({ path: join(publicDir, 'og-image.png'), type: 'png' });
  await ogPage.close();

  // Generate Apple Touch Icon (180x180)
  console.log('Creating apple-touch-icon.png...');
  const iconPage = await browser.newPage();
  await iconPage.setViewport({ width: 180, height: 180 });
  await iconPage.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          width: 180px;
          height: 180px;
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .text {
          font-size: 80px;
          font-weight: 700;
          color: white;
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
      </style>
    </head>
    <body>
      <div class="text">VS</div>
    </body>
    </html>
  `);
  await iconPage.screenshot({ path: join(publicDir, 'apple-touch-icon.png'), type: 'png' });
  await iconPage.close();

  // Generate favicon.ico (32x32)
  console.log('Creating favicon.ico...');
  const faviconPage = await browser.newPage();
  await faviconPage.setViewport({ width: 32, height: 32 });
  await faviconPage.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          border-radius: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .text {
          font-size: 14px;
          font-weight: 700;
          color: white;
        }
      </style>
    </head>
    <body>
      <div class="text">VS</div>
    </body>
    </html>
  `);
  await faviconPage.screenshot({ path: join(publicDir, 'favicon.ico'), type: 'png' });
  await faviconPage.close();

  await browser.close();
  console.log('All images generated successfully!');
}

generateImages().catch(err => {
  console.error('Error generating images:', err);
  process.exit(1);
});
