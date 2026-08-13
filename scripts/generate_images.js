import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images/products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Function to generate customized vector studio graphics for construction equipment
function createEquipmentSvg(title, category, slug, accentColor = '#B72527') {
  // Determine icon/graphic based on slug keyword
  let innerGraphic = '';

  if (slug.includes('serra-de-videa') || slug.includes('discos')) {
    innerGraphic = `
      <!-- Saw blade / Diamond Disc -->
      <circle cx="200" cy="140" r="75" fill="#CBD5E1" stroke="#475569" stroke-width="4" />
      <circle cx="200" cy="140" r="65" fill="none" stroke="#64748B" stroke-width="2" stroke-dasharray="12 6" />
      <circle cx="200" cy="140" r="22" fill="#1E293B" />
      <circle cx="200" cy="140" r="12" fill="#E2E8F0" />
      <path d="M190 65 L200 50 L210 65 Z M265 130 L280 140 L265 150 Z M190 215 L200 230 L210 215 Z M135 130 L120 140 L135 150 Z" fill="#94A3B8" />
    `;
  } else if (slug.includes('brocas')) {
    innerGraphic = `
      <!-- SDS Drill Bits -->
      <rect x="185" y="45" width="12" height="170" rx="3" fill="#64748B" />
      <rect x="203" y="60" width="12" height="150" rx="3" fill="#94A3B8" />
      <path d="M185 45 L191 30 L197 45 Z M203 60 L209 45 L215 60 Z" fill="#DC2626" />
      <rect x="182" y="195" width="36" height="25" rx="4" fill="#334155" />
    `;
  } else if (slug.includes('guincho')) {
    innerGraphic = `
      <!-- Column Winch / Hoist -->
      <rect x="120" y="50" width="160" height="16" rx="4" fill="#334155" />
      <rect x="135" y="66" width="20" height="120" fill="#475569" />
      <rect x="160" y="70" width="80" height="60" rx="6" fill="${accentColor}" />
      <circle cx="200" cy="100" r="22" fill="#1E293B" />
      <line x1="200" y1="122" x2="200" y2="200" stroke="#94A3B8" stroke-width="4" stroke-dasharray="4 2" />
      <path d="M190 200 C190 220 210 220 210 205 C210 195 200 195 200 195" fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round" />
    `;
  } else if (slug.includes('escada')) {
    innerGraphic = `
      <!-- Ladder -->
      <rect x="140" y="40" width="14" height="190" rx="3" fill="#94A3B8" />
      <rect x="240" y="40" width="14" height="190" rx="3" fill="#94A3B8" />
      <line x1="147" y1="70" x2="247" y2="70" stroke="#334155" stroke-width="8" stroke-linecap="round" />
      <line x1="147" y1="110" x2="247" y2="110" stroke="#334155" stroke-width="8" stroke-linecap="round" />
      <line x1="147" y1="150" x2="247" y2="150" stroke="#334155" stroke-width="8" stroke-linecap="round" />
      <line x1="147" y1="190" x2="247" y2="190" stroke="#334155" stroke-width="8" stroke-linecap="round" />
    `;
  } else if (slug.includes('talha')) {
    innerGraphic = `
      <!-- Chain Hoist -->
      <path d="M200 40 L200 65" stroke="#475569" stroke-width="8" />
      <path d="M190 40 C190 25 210 25 210 40" fill="none" stroke="#F59E0B" stroke-width="6" />
      <rect x="160" y="65" width="80" height="70" rx="12" fill="#1E293B" />
      <circle cx="200" cy="100" r="20" fill="${accentColor}" />
      <line x1="180" y1="135" x2="180" y2="210" stroke="#CBD5E1" stroke-width="5" stroke-dasharray="6 4" />
      <line x1="220" y1="135" x2="220" y2="210" stroke="#CBD5E1" stroke-width="5" stroke-dasharray="6 4" />
      <path d="M170 210 C170 225 190 225 190 210" fill="none" stroke="#F59E0B" stroke-width="6" />
    `;
  } else if (slug.includes('piso-metalico')) {
    innerGraphic = `
      <!-- Metallic Scaffold Floor -->
      <rect x="60" y="100" width="280" height="50" rx="6" fill="#94A3B8" stroke="#475569" stroke-width="3" />
      <circle cx="100" cy="125" r="5" fill="#334155" />
      <circle cx="140" cy="125" r="5" fill="#334155" />
      <circle cx="180" cy="125" r="5" fill="#334155" />
      <circle cx="220" cy="125" r="5" fill="#334155" />
      <circle cx="260" cy="125" r="5" fill="#334155" />
      <circle cx="300" cy="125" r="5" fill="#334155" />
      <path d="M60 100 L50 150 M340 100 L350 150" stroke="#475569" stroke-width="6" stroke-linecap="round" />
    `;
  } else if (slug.includes('guarda-corpo') || slug.includes('diagonal')) {
    innerGraphic = `
      <!-- Scaffold Rail / Diagonal -->
      <rect x="80" y="70" width="240" height="12" rx="4" fill="${accentColor}" />
      <rect x="80" y="130" width="240" height="12" rx="4" fill="${accentColor}" />
      <line x1="80" y1="70" x2="320" y2="130" stroke="#334155" stroke-width="8" />
      <rect x="74" y="60" width="12" height="90" rx="3" fill="#475569" />
      <rect x="314" y="60" width="12" height="90" rx="3" fill="#475569" />
    `;
  } else if (slug.includes('sapata') || slug.includes('rodizio')) {
    innerGraphic = `
      <!-- Jack Base / Wheel Caster -->
      <rect x="188" y="40" width="24" height="130" rx="4" fill="#64748B" />
      <line x1="184" y1="50" x2="216" y2="50" stroke="#334155" stroke-width="4" />
      <line x1="184" y1="70" x2="216" y2="70" stroke="#334155" stroke-width="4" />
      <line x1="184" y1="90" x2="216" y2="90" stroke="#334155" stroke-width="4" />
      <line x1="184" y1="110" x2="216" y2="110" stroke="#334155" stroke-width="4" />
      <line x1="184" y1="130" x2="216" y2="130" stroke="#334155" stroke-width="4" />
      <rect x="140" y="170" width="120" height="20" rx="4" fill="#1E293B" />
      <circle cx="200" cy="180" r="30" fill="${slug.includes('rodizio') ? '#0F172A' : 'none'}" />
    `;
  } else if (slug.includes('andaime-tubular')) {
    innerGraphic = `
      <!-- Scaffold Frame Structure -->
      <rect x="100" y="40" width="16" height="180" fill="${accentColor}" />
      <rect x="284" y="40" width="16" height="180" fill="${accentColor}" />
      <rect x="100" y="50" width="200" height="14" fill="${accentColor}" />
      <rect x="100" y="200" width="200" height="14" fill="${accentColor}" />
      <line x1="108" y1="57" x2="292" y2="207" stroke="#334155" stroke-width="8" />
      <line x1="108" y1="207" x2="292" y2="57" stroke="#334155" stroke-width="8" />
    `;
  } else if (slug.includes('regua') || slug.includes('acabadora')) {
    innerGraphic = `
      <!-- Screed Rule / Power Trowel -->
      <rect x="50" y="140" width="300" height="16" rx="3" fill="#94A3B8" stroke="#475569" stroke-width="2" />
      <rect x="160" y="90" width="80" height="50" rx="8" fill="#F59E0B" />
      <circle cx="200" cy="115" r="16" fill="#1E293B" />
      <line x1="160" y1="70" x2="200" y2="90" stroke="#334155" stroke-width="6" />
      <line x1="240" y1="70" x2="200" y2="90" stroke="#334155" stroke-width="6" />
    `;
  } else if (slug.includes('placa') || slug.includes('compactador')) {
    innerGraphic = `
      <!-- Plate Compactor / Rammer -->
      <rect x="120" y="160" width="160" height="30" rx="6" fill="#1E293B" />
      <rect x="140" y="90" width="120" height="70" rx="10" fill="${accentColor}" />
      <circle cx="200" cy="125" r="22" fill="#F59E0B" />
      <path d="M140" y1="80" x1="110" y2="50" stroke="#475569" stroke-width="8" stroke-linecap="round" />
      <path d="M260" y1="80" x1="290" y2="50" stroke="#475569" stroke-width="8" stroke-linecap="round" />
    `;
  } else if (slug.includes('betoneira')) {
    innerGraphic = `
      <!-- Concrete Mixer -->
      <ellipse cx="200" cy="120" rx="65" ry="55" fill="${slug.includes('diesel') ? '#D97706' : accentColor}" />
      <ellipse cx="200" cy="90" rx="35" ry="18" fill="#1E293B" />
      <rect x="120" y="165" width="160" height="20" rx="4" fill="#334155" />
      <circle cx="140" cy="195" r="25" fill="#0F172A" stroke="#CBD5E1" stroke-width="6" />
      <circle cx="260" cy="195" r="25" fill="#0F172A" stroke="#CBD5E1" stroke-width="6" />
      <path d="M265 120 L310 120" stroke="#F59E0B" stroke-width="12" stroke-linecap="round" />
    `;
  } else if (slug.includes('solda') || slug.includes('transformador')) {
    innerGraphic = `
      <!-- Inverter Welder / Transformer -->
      <rect x="120" y="70" width="160" height="110" rx="12" fill="#1E293B" stroke="${accentColor}" stroke-width="4" />
      <rect x="140" y="90" width="50" height="25" rx="4" fill="#0284C7" />
      <circle cx="220" cy="102" r="10" fill="#EF4444" />
      <circle cx="250" cy="102" r="10" fill="#10B981" />
      <rect x="140" y="135" width="30" height="30" rx="6" fill="#F59E0B" />
      <rect x="230" y="135" width="30" height="30" rx="6" fill="#475569" />
      <path d="M170 50 H230 V70 H170 Z" fill="#475569" />
    `;
  } else if (slug.includes('martelo') || slug.includes('martelete')) {
    innerGraphic = `
      <!-- Demolition Breaker / Rotary Hammer -->
      <rect x="180" y="45" width="40" height="110" rx="8" fill="#1E293B" />
      <rect x="190" y="155" width="20" height="75" rx="3" fill="#94A3B8" />
      <path d="M190 230 L200 245 L210 230 Z" fill="#64748B" />
      <rect x="130" y="55" width="140" height="20" rx="6" fill="${accentColor}" />
      <rect x="130" y="55" width="20" height="60" rx="4" fill="#334155" />
    `;
  } else if (slug.includes('esmerilhadeira') || slug.includes('lixadeira') || slug.includes('retificadeira') || slug.includes('plaina')) {
    innerGraphic = `
      <!-- Angle Grinder / Sander / Planer -->
      <rect x="110" y="115" width="140" height="35" rx="10" fill="#1E293B" />
      <rect x="230" y="105" width="50" height="55" rx="8" fill="${accentColor}" />
      <ellipse cx="270" cy="165" rx="35" ry="12" fill="#64748B" />
      <ellipse cx="270" cy="165" rx="20" ry="6" fill="#0F172A" />
      <rect x="80" y="125" width="30" height="15" rx="4" fill="#F59E0B" />
    `;
  } else if (slug.includes('compressor') || slug.includes('gerador') || slug.includes('motobomba') || slug.includes('bomba') || slug.includes('lavadora')) {
    innerGraphic = `
      <!-- Compressor / Generator / Pump -->
      <rect x="100" y="70" width="200" height="110" rx="14" fill="#1E293B" stroke="#0EA5E9" stroke-width="3" />
      <rect x="120" y="90" width="160" height="50" rx="8" fill="${accentColor}" />
      <circle cx="150" cy="115" r="14" fill="#F59E0B" />
      <circle cx="250" cy="115" r="14" fill="#10B981" />
      <circle cx="140" cy="195" r="22" fill="#0F172A" stroke="#94A3B8" stroke-width="4" />
      <circle cx="260" cy="195" r="22" fill="#0F172A" stroke="#94A3B8" stroke-width="4" />
    `;
  } else {
    innerGraphic = `
      <!-- Generic Professional Tool Graphic -->
      <rect x="130" y="80" width="140" height="90" rx="12" fill="${accentColor}" />
      <circle cx="200" cy="125" r="30" fill="#1E293B" />
      <path d="M185 125 L215 125 M200 110 L200 140" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" />
    `;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC" />
      <stop offset="100%" stop-color="#E2E8F0" />
    </linearGradient>
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#B72527" />
      <stop offset="100%" stop-color="#8C1D1F" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#0F172A" flood-opacity="0.15" />
    </filter>
  </defs>

  <!-- Studio Neutral Background -->
  <rect width="400" height="300" fill="url(#bgGrad)" />
  
  <!-- Subtle Floor Reflection Line -->
  <ellipse cx="200" cy="245" rx="140" ry="18" fill="#CBD5E1" opacity="0.6" />

  <!-- Equipment Graphic Group with Shadow -->
  <g filter="url(#shadow)">
    ${innerGraphic}
  </g>

  <!-- Top Brand Header Bar -->
  <rect x="0" y="0" width="400" height="32" fill="url(#brandGrad)" />
  <text x="16" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="900" fill="#FFFFFF" letter-spacing="1">PILAR EQUIPAMENTOS</text>
  <text x="384" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="700" fill="#FCA5A5" text-anchor="end">${category.toUpperCase()}</text>

  <!-- Bottom Equipment Title Overlay -->
  <rect x="0" y="260" width="400" height="40" fill="#332929" />
  <text x="200" y="285" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" fill="#FFFFFF" text-anchor="middle">${title.toUpperCase()}</text>
</svg>`;
}

// Generate files for all 56 products
const productsData = [
  // Acessórios
  { title: 'Serra de Vídea para Madeira', cat: 'Acessórios', slug: 'serra-de-videa-para-madeira' },
  { title: 'Discos para Serra Mármore e Makitão', cat: 'Acessórios', slug: 'discos-para-serra-marmore-e-makitao' },
  { title: 'Discos para Serra Cliper', cat: 'Acessórios', slug: 'discos-para-serra-cliper' },
  { title: 'Brocas SDS Plus', cat: 'Acessórios', slug: 'brocas-sds-plus' },

  // Andaimes / Elevação
  { title: 'Guincho de Coluna', cat: 'Andaimes / Elevação', slug: 'guincho-de-coluna' },
  { title: 'Escada Extensiva e Tipo Pintor', cat: 'Andaimes / Elevação', slug: 'escada-extensiva-e-tipo-pintor' },
  { title: 'Talha Manual de Corrente de 0,5 a 3 t', cat: 'Andaimes / Elevação', slug: 'talha-manual-de-corrente-de-0-5-a-3-t' },
  { title: 'Piso Metálico', cat: 'Andaimes / Elevação', slug: 'piso-metalico' },
  { title: 'Guarda Corpo', cat: 'Andaimes / Elevação', slug: 'guarda-corpo' },
  { title: 'Sapata Ajustável', cat: 'Andaimes / Elevação', slug: 'sapata-ajustavel' },
  { title: 'Rodízio de Borracha', cat: 'Andaimes / Elevação', slug: 'rodizio-de-borracha' },
  { title: 'Diagonal para Andaime', cat: 'Andaimes / Elevação', slug: 'diagonal-para-andaime' },
  { title: 'Escada para Andaime', cat: 'Andaimes / Elevação', slug: 'escada-para-andaime' },
  { title: 'Andaime Tubular', cat: 'Andaimes / Elevação', slug: 'andaime-tubular' },

  // Concretagem e Compactação
  { title: 'Régua Vibratória', cat: 'Concretagem e Compactação', slug: 'regua-vibratoria' },
  { title: 'Acabadora de Superfície', cat: 'Concretagem e Compactação', slug: 'acabadora-de-superficie' },
  { title: 'Placa Reversível CR5', cat: 'Concretagem e Compactação', slug: 'placa-reversivel-cr5' },
  { title: 'Placa Vibratória PV 95', cat: 'Concretagem e Compactação', slug: 'placa-vibratoria-pv-95' },
  { title: 'Compactador de Percussão', cat: 'Concretagem e Compactação', slug: 'compactador-de-percussao' },
  { title: 'Vibrador de Imersão de Alta Frequência', cat: 'Concretagem e Compactação', slug: 'vibrador-de-imersao-de-alta-frequencia' },
  { title: 'Mangote Vibrador de Imersão', cat: 'Concretagem e Compactação', slug: 'mangote-vibrador-de-imersao' },
  { title: 'Motor de Acionamento Gasolina/Diesel', cat: 'Concretagem e Compactação', slug: 'motor-de-acionamento-gasolina-diesel' },
  { title: 'Motor de Acionamento Elétrico', cat: 'Concretagem e Compactação', slug: 'motor-de-acionamento-eletrico' },
  { title: 'Betoneira 400L Diesel', cat: 'Concretagem e Compactação', slug: 'betoneira-400l-diesel' },
  { title: 'Betoneira 400L Elétrica', cat: 'Concretagem e Compactação', slug: 'betoneira-400l-eletrica' },

  // Ferramentas Elétricas
  { title: 'Máquina de Solda de 250 amp', cat: 'Ferramentas Elétricas', slug: 'maquina-de-solda-de-250-amp' },
  { title: 'Transformador de Energia 110/220V', cat: 'Ferramentas Elétricas', slug: 'transformador-de-energia-110-220v' },
  { title: 'Plaina', cat: 'Ferramentas Elétricas', slug: 'plaina' },
  { title: 'Retificadeira', cat: 'Ferramentas Elétricas', slug: 'retificadeira' },
  { title: 'Lixadeira Angular de 7"', cat: 'Ferramentas Elétricas', slug: 'lixadeira-angular-de-7' },
  { title: 'Esmerilhadeira Angular de 7"', cat: 'Ferramentas Elétricas', slug: 'esmerilhadeira-angular-de-7' },
  { title: 'Esmerilhadeira Angular de 4"½', cat: 'Ferramentas Elétricas', slug: 'esmerilhadeira-angular-de-4-1-2' },

  // Furação / Corte / Demolição
  { title: 'Martelo Demolidor de 30 kg', cat: 'Furação / Corte / Demolição', slug: 'martelo-demolidor-de-30-kg' },
  { title: 'Martelo Demolidor de 19 kg', cat: 'Furação / Corte / Demolição', slug: 'martelo-demolidor-de-19-kg' },
  { title: 'Martelo Demolidor de 15 kg', cat: 'Furação / Corte / Demolição', slug: 'martelo-demolidor-de-15-kg' },
  { title: 'Martelo Rompedor de 10 kg', cat: 'Furação / Corte / Demolição', slug: 'martelo-rompedor-de-10-kg' },
  { title: 'Martelo Rompedor de 5 kg', cat: 'Furação / Corte / Demolição', slug: 'martelo-rompedor-de-5-kg' },
  { title: 'Serra p/ Piso', cat: 'Furação / Corte / Demolição', slug: 'serra-p-piso' },
  { title: 'Policorte', cat: 'Furação / Corte / Demolição', slug: 'policorte' },
  { title: 'Cortadora de Metais', cat: 'Furação / Corte / Demolição', slug: 'cortadora-de-metais' },
  { title: 'Serra Circular Manual de 9"', cat: 'Furação / Corte / Demolição', slug: 'serra-circular-manual-de-9' },
  { title: 'Serra Circular Manual de 7"', cat: 'Furação / Corte / Demolição', slug: 'serra-circular-manual-de-7' },
  { title: 'Serra Mármore "Makitão"', cat: 'Furação / Corte / Demolição', slug: 'serra-marmore-makitao' },
  { title: 'Serra Mármore', cat: 'Furação / Corte / Demolição', slug: 'serra-marmore' },
  { title: 'Finca Pinos', cat: 'Furação / Corte / Demolição', slug: 'finca-pinos' },
  { title: 'Martelete Perfurador SDS Plus', cat: 'Furação / Corte / Demolição', slug: 'martelete-perfurador-sds-plus' },
  { title: 'Furadeira de Impacto 5/8"', cat: 'Furação / Corte / Demolição', slug: 'furadeira-de-impacto-5-8' },
  { title: 'Furadeira de Impacto ½"', cat: 'Furação / Corte / Demolição', slug: 'furadeira-de-impacto-1-2' },

  // Geradores / Bombas / Compressores
  { title: 'Compressor de Ar (Pequeno e Médio Porte)', cat: 'Geradores / Bombas / Compressores', slug: 'compressor-de-ar-pequeno-e-medio-porte' },
  { title: 'Lavadora de Alta Pressão', cat: 'Geradores / Bombas / Compressores', slug: 'lavadora-de-alta-pressao' },
  { title: 'Motobomba', cat: 'Geradores / Bombas / Compressores', slug: 'motobomba' },
  { title: 'Bomba Submersível de 2" (esgotamento)', cat: 'Geradores / Bombas / Compressores', slug: 'bomba-submersivel-de-2-esgotamento' },
  { title: 'Bomba Submersível de 2" (drenagem)', cat: 'Geradores / Bombas / Compressores', slug: 'bomba-submersivel-de-2-drenagem' },
  { title: 'Bomba Submersível de Mangote', cat: 'Geradores / Bombas / Compressores', slug: 'bomba-submersivel-de-mangote' },
  { title: 'Gerador de Energia a Diesel', cat: 'Geradores / Bombas / Compressores', slug: 'gerador-de-energia-a-diesel' },
  { title: 'Gerador de Energia a Gasolina', cat: 'Geradores / Bombas / Compressores', slug: 'gerador-de-energia-a-gasolina' }
];

let created = 0;
for (const p of productsData) {
  const filePath = path.join(outDir, `${p.slug}.svg`);
  const svgContent = createEquipmentSvg(p.title, p.cat, p.slug);
  fs.writeFileSync(filePath, svgContent, 'utf-8');
  created++;
}

console.log(`Generated ${created} SVG product images in public/images/products/`);
