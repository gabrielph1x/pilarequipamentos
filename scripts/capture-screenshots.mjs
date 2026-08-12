import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const outputDir = path.join(rootDir, 'docs', 'readme-assets');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Simple static server for SPA dist
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  let filePath = path.join(distDir, reqPath);

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    if (path.extname(reqPath)) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }
    filePath = path.join(distDir, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Error reading file');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

const PORT = 4173;

server.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`);

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

    // 1. Home
    console.log('Capturing 01-home.png...');
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => window.scrollBy(0, 200));
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outputDir, '01-home.png') });

    // 2. Empresa
    console.log('Capturing 02-empresa.png...');
    await page.goto(`http://localhost:${PORT}/empresa`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => window.scrollBy(0, 180));
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outputDir, '02-empresa.png') });

    // 3. Categoria Ferramentas Elétricas
    console.log('Capturing 03-categoria-ferramentas-eletricas.png...');
    await page.goto(`http://localhost:${PORT}/categoria/ferramentas-eletricas`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => window.scrollBy(0, 180));
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outputDir, '03-categoria-ferramentas-eletricas.png') });

    // Add 1 item from category to cart
    try {
      const addBtn = await page.$('button');
      // find buttons with "Adicionar"
      const buttons = await page.$$('button');
      for (const btn of buttons) {
        const text = await page.evaluate(el => el.textContent, btn);
        if (text && text.includes('Adicionar')) {
          await btn.click();
          break;
        }
      }
    } catch (e) {}

    // 4. Detalhe do Produto: Martelo Demolidor de 30 kg
    console.log('Capturing 04-produto-detalhe.png...');
    await page.goto(`http://localhost:${PORT}/produto/martelo-demolidor-de-30-kg`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => window.scrollBy(0, 100));
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outputDir, '04-produto-detalhe.png') });

    // Add Martelo Demolidor to quote
    try {
      const buttons = await page.$$('button');
      for (const btn of buttons) {
        const text = await page.evaluate(el => el.textContent, btn);
        if (text && text.includes('Adicionar ao Orçamento')) {
          await btn.click();
          break;
        }
      }
    } catch (e) {}

    // 5. Meu Orçamento
    console.log('Capturing 05-meu-orcamento.png...');
    await page.goto(`http://localhost:${PORT}/orcamento`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => window.scrollBy(0, 100));
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outputDir, '05-meu-orcamento.png') });

    // 6. Contato
    console.log('Capturing 06-contato.png...');
    await page.goto(`http://localhost:${PORT}/contato`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => window.scrollBy(0, 180));
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outputDir, '06-contato.png') });

    console.log('All screenshots captured successfully!');
    await browser.close();
  } catch (err) {
    console.error('Error generating screenshots:', err);
  } finally {
    server.close();
    process.exit(0);
  }
});
