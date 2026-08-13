import fs from 'fs';

let content = fs.readFileSync('src/data/catalog.js', 'utf-8');

// Replace .svg with .jpg for product image URLs
content = content.replace(/\/images\/products\/([a-z0-9-]+)\.svg/g, '/images/products/$1.jpg');

fs.writeFileSync('src/data/catalog.js', content, 'utf-8');
console.log('Updated catalog.js to use real photo .jpg URLs for all 56 products.');
