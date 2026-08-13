import fs from 'fs';
import path from 'path';
import { PRODUCTS, CATEGORIES } from '../src/data/catalog.js';

console.log(`Checking catalog.js: ${CATEGORIES.length} categories, ${PRODUCTS.length} products.\n`);

let missingFiles = 0;
let validFiles = 0;

for (const p of PRODUCTS) {
  const relPath = 'public' + p.imageUrl;
  const absPath = path.resolve(relPath);
  const exists = fs.existsSync(absPath);
  if (!exists) {
    console.error(`[MISSING] Product ${p.name} (${p.slug}): File not found at ${absPath}`);
    missingFiles++;
  } else {
    const size = fs.statSync(absPath).size;
    console.log(`[VALID] ${p.name} -> ${p.imageUrl} (${(size / 1024).toFixed(1)} KB)`);
    validFiles++;
  }
}

console.log(`\nCatalog verification result: ${validFiles} valid images, ${missingFiles} missing files.`);
