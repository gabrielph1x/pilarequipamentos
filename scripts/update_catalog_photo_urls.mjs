import fs from 'fs';

let content = fs.readFileSync('src/data/catalog.js', 'utf-8');

// Ensure product imageUrl points to /images/products/<slug>.jpg with .svg fallback support
content = content.replace(/imageUrl:\s*"\/images\/products\/([a-z0-9-]+)\.(svg|jpg)"/g, 'imageUrl: "/images/products/$1.jpg"');

fs.writeFileSync('src/data/catalog.js', content, 'utf-8');
console.log('Successfully updated all product imageUrl fields in catalog.js!');
