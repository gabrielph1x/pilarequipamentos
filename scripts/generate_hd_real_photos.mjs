import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images/products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Helper to generate hyper-realistic, spec-accurate vector studio equipment photography renders
function buildExactProductPhotoSvg(p) {
  const { name: title, categoryName, slug, specs, tag } = p;
  
  let equipmentGraphic = '';

  // 1. Acessórios
  if (slug === 'serra-de-videa-para-madeira') {
    equipmentGraphic = `
      <!-- Serra de Vídea para Madeira (Blade 235mm with carbide teeth) -->
      <circle cx="200" cy="140" r="85" fill="url(#metalSteel)" stroke="#334155" stroke-width="3" />
      <circle cx="200" cy="140" r="72" fill="none" stroke="#64748B" stroke-width="2" stroke-dasharray="14 6" />
      <circle cx="200" cy="140" r="28" fill="#1E293B" />
      <circle cx="200" cy="140" r="16" fill="#CBD5E1" stroke="#475569" stroke-width="2" />
      <!-- Expansion slots -->
      <path d="M200 68 L200 80 M272 140 L260 140 M200 212 L200 200 M128 140 L140 140" stroke="#0F172A" stroke-width="3" stroke-linecap="round" />
      <!-- Carbide Vídea Tips (Gold/Silver welded tips) -->
      ${Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const rad = (angle * Math.PI) / 180;
        const x = 200 + 85 * Math.cos(rad);
        const y = 140 + 85 * Math.sin(rad);
        return `<rect x="${x - 4}" y="${y - 4}" width="8" height="8" rx="1.5" fill="#F59E0B" stroke="#B45309" stroke-width="1" transform="rotate(${angle} ${x} ${y})" />`;
      }).join('')}
      <text x="200" y="144" font-family="sans-serif" font-size="10" font-weight="900" fill="#94A3B8" text-anchor="middle">WOOD TCT</text>
    `;
  } else if (slug === 'discos-para-serra-marmore-e-makitao') {
    equipmentGraphic = `
      <!-- Discos Diamantados Mármore 110mm / 180mm (Turbo Continuous Rim) -->
      <circle cx="200" cy="140" r="80" fill="url(#metalSteel)" stroke="#475569" stroke-width="2" />
      <circle cx="200" cy="140" r="70" fill="#DC2626" />
      <!-- Diamond Turbo Segments -->
      <circle cx="200" cy="140" r="80" fill="none" stroke="#F59E0B" stroke-width="8" stroke-dasharray="10 4" />
      <circle cx="200" cy="140" r="25" fill="#1E293B" />
      <circle cx="200" cy="140" r="14" fill="#E2E8F0" />
      <text x="200" y="132" font-family="sans-serif" font-size="9" font-weight="800" fill="#FFFFFF" text-anchor="middle">DIAMOND</text>
      <text x="200" y="145" font-family="sans-serif" font-size="8" font-weight="700" fill="#FCA5A5" text-anchor="middle">TURBO 110/180mm</text>
    `;
  } else if (slug === 'discos-para-serra-cliper') {
    equipmentGraphic = `
      <!-- Discos para Serra Cliper 350mm (Heavy Segmented Asphalt/Concrete Disc) -->
      <circle cx="200" cy="140" r="95" fill="url(#metalDark)" stroke="#1E293B" stroke-width="3" />
      <circle cx="200" cy="140" r="75" fill="#0284C7" />
      <!-- Deep Gullet Diamond Segments -->
      ${Array.from({ length: 18 }).map((_, i) => {
        const angle = (i * 360) / 18;
        const rad = (angle * Math.PI) / 180;
        const x = 200 + 92 * Math.cos(rad);
        const y = 140 + 92 * Math.sin(rad);
        return `<rect x="${x - 6}" y="${y - 8}" width="12" height="16" rx="2" fill="#D97706" stroke="#78350F" stroke-width="1.5" transform="rotate(${angle} ${x} ${y})" />`;
      }).join('')}
      <circle cx="200" cy="140" r="25" fill="#0F172A" />
      <circle cx="200" cy="140" r="14" fill="#94A3B8" />
      <text x="200" y="144" font-family="sans-serif" font-size="10" font-weight="900" fill="#FFFFFF" text-anchor="middle">CLIPPER 350mm</text>
    `;
  } else if (slug === 'brocas-sds-plus') {
    equipmentGraphic = `
      <!-- Brocas SDS Plus (Grooved Shank + Double Flute + Cross Tip) -->
      <g transform="translate(140, 40)">
        <rect x="18" y="0" width="14" height="180" rx="3" fill="url(#metalSteel)" />
        <rect x="18" y="140" width="14" height="40" rx="2" fill="#334155" />
        <!-- SDS Grooves -->
        <rect x="22" y="145" width="6" height="15" rx="2" fill="#0F172A" />
        <rect x="22" y="165" width="6" height="10" rx="2" fill="#0F172A" />
        <!-- Spiral Flutes -->
        <path d="M18 10 Q25 20 32 30 T18 50 T32 70 T18 90 T32 110 T18 130" fill="none" stroke="#475569" stroke-width="5" />
        <!-- Carbide Cross Tip -->
        <path d="M15 -5 L25 -12 L35 -5 L25 2 Z" fill="#DC2626" stroke="#991B1B" stroke-width="1.5" />
      </g>
      <g transform="translate(210, 60)">
        <rect x="18" y="0" width="12" height="160" rx="3" fill="url(#metalSteel)" />
        <rect x="18" y="120" width="12" height="40" rx="2" fill="#334155" />
        <rect x="21" y="125" width="6" height="12" rx="2" fill="#0F172A" />
        <path d="M18 10 Q24 20 30 30 T18 50 T30 70 T18 90 T30 110" fill="none" stroke="#475569" stroke-width="4" />
        <path d="M15 -5 L24 -12 L33 -5 L24 2 Z" fill="#DC2626" stroke="#991B1B" stroke-width="1.5" />
      </g>
    `;

  // 2. Andaimes / Elevação
  } else if (slug === 'guincho-de-coluna') {
    equipmentGraphic = `
      <!-- Guincho de Coluna (Column Winch with wire rope spool and mounting bracket) -->
      <!-- Vertical Mounting Bracket / Column -->
      <rect x="110" y="30" width="20" height="200" rx="4" fill="#334155" stroke="#1E293B" stroke-width="2" />
      <!-- Upper Swivel Arm -->
      <rect x="110" y="45" width="140" height="22" rx="4" fill="#475569" />
      <!-- Motor & Gearbox Chassis (Yellow/Red CSM Menegotti type) -->
      <rect x="160" y="67" width="90" height="75" rx="8" fill="#F59E0B" stroke="#D97706" stroke-width="2" />
      <rect x="170" y="75" width="70" height="30" rx="4" fill="#1E293B" />
      <!-- Cable Drum Spool -->
      <ellipse cx="205" cy="115" rx="28" ry="14" fill="#94A3B8" stroke="#475569" stroke-width="2" />
      <!-- Wire Rope Cable (30m/60m) -->
      <line x1="205" y1="120" x2="205" y2="210" stroke="#E2E8F0" stroke-width="4" stroke-dasharray="3 2" />
      <!-- Heavy Lifting Hook -->
      <path d="M195 210 C195 230 215 230 215 215 C215 205 205 205 205 205" fill="none" stroke="#DC2626" stroke-width="6" stroke-linecap="round" />
      <text x="205" y="94" font-family="sans-serif" font-size="9" font-weight="900" fill="#FFFFFF" text-anchor="middle">350kg / 220V</text>
    `;
  } else if (slug === 'escada-extensiva-e-tipo-pintor') {
    equipmentGraphic = `
      <!-- Escada Extensiva e Tipo Pintor (A-frame dual aluminum extension ladder) -->
      <!-- Left Stretcher Leg -->
      <line x1="140" y1="40" x2="90" y2="230" stroke="#94A3B8" stroke-width="12" stroke-linecap="round" />
      <!-- Right Stretcher Leg -->
      <line x1="140" y1="40" x2="190" y2="230" stroke="#94A3B8" stroke-width="12" stroke-linecap="round" />
      <!-- Extension Section (Sliding up) -->
      <line x1="140" y1="40" x2="220" y2="230" stroke="#CBD5E1" stroke-width="10" stroke-linecap="round" />
      <!-- Hinge Joint Top -->
      <circle cx="140" cy="40" r="14" fill="#334155" stroke="#F59E0B" stroke-width="3" />
      <!-- Rungs -->
      <line x1="128" y1="80" x2="152" y2="80" stroke="#334155" stroke-width="6" />
      <line x1="116" y1="120" x2="164" y2="120" stroke="#334155" stroke-width="6" />
      <line x1="104" y1="160" x2="176" y2="160" stroke="#334155" stroke-width="6" />
      <line x1="92" y1="200" x2="188" y2="200" stroke="#334155" stroke-width="6" />
    `;
  } else if (slug === 'talha-manual-de-corrente-de-0-5-a-3-t') {
    equipmentGraphic = `
      <!-- Talha Manual de Corrente (Teardrop chain hoist with hand & load chains) -->
      <!-- Top Swivel Hook -->
      <path d="M200 20 L200 45" stroke="#334155" stroke-width="8" />
      <path d="M190 20 C190 5 210 5 210 20" fill="none" stroke="#F59E0B" stroke-width="6" />
      <!-- Hoist Teardrop Body (Red/Black heavy steel) -->
      <path d="M160 50 Q200 40 240 50 L250 120 Q200 145 150 120 Z" fill="#DC2626" stroke="#991B1B" stroke-width="3" />
      <circle cx="200" cy="85" r="22" fill="#1E293B" stroke="#475569" stroke-width="2" />
      <text x="200" y="89" font-family="sans-serif" font-size="10" font-weight="900" fill="#FFFFFF" text-anchor="middle">3 TON</text>
      <!-- Hand Chain (Zinc plated, left) -->
      <line x1="175" y1="130" x2="175" y2="220" stroke="#CBD5E1" stroke-width="4" stroke-dasharray="6 4" />
      <!-- Heavy Load Chain (Black alloy steel, right) -->
      <line x1="225" y1="130" x2="225" y2="210" stroke="#475569" stroke-width="7" stroke-dasharray="8 4" />
      <!-- Bottom Latching Hook -->
      <path d="M215 210 C215 230 235 230 235 215 C235 205 225 205 225 205" fill="none" stroke="#F59E0B" stroke-width="6" />
    `;
  } else if (slug === 'piso-metalico') {
    equipmentGraphic = `
      <!-- Piso Metálico (Galvanized perforated anti-slip scaffold plank) -->
      <rect x="50" y="100" width="300" height="55" rx="6" fill="url(#metalSteel)" stroke="#334155" stroke-width="3" />
      <!-- Stiffening Ribs -->
      <line x1="50" y1="115" x2="350" y2="115" stroke="#64748B" stroke-width="2" />
      <line x1="50" y1="140" x2="350" y2="140" stroke="#64748B" stroke-width="2" />
      <!-- Anti-slip Perforations -->
      ${Array.from({ length: 8 }).map((_, i) => `
        <circle cx="${80 + i * 34}" cy="127" r="5" fill="#1E293B" />
        <circle cx="${80 + i * 34}" cy="127" r="3" fill="#94A3B8" />
      `).join('')}
      <!-- End Locking Hooks for Scaffold Ledger -->
      <path d="M50 100 L35 110 L35 145 L50 155 M350 100 L365 110 L365 145 L350 155" fill="none" stroke="#334155" stroke-width="6" stroke-linecap="round" />
    `;
  } else if (slug === 'guarda-corpo') {
    equipmentGraphic = `
      <!-- Guarda Corpo (Scaffold top perimeter safety guardrail frame) -->
      <!-- Top Rail -->
      <rect x="70" y="60" width="260" height="14" rx="4" fill="#DC2626" />
      <!-- Mid Rail -->
      <rect x="70" y="115" width="260" height="12" rx="3" fill="#DC2626" />
      <!-- Toe Board (Rodapé Metálico) -->
      <rect x="70" y="165" width="260" height="30" rx="3" fill="#F59E0B" stroke="#B45309" stroke-width="2" />
      <!-- Vertical Upright Posts -->
      <rect x="70" y="50" width="16" height="150" fill="#334155" />
      <rect x="314" y="50" width="16" height="150" fill="#334155" />
    `;
  } else if (slug === 'sapata-ajustavel') {
    equipmentGraphic = `
      <!-- Sapata Ajustável (Threaded leveling jack base plate + wing nut) -->
      <!-- Flat Base Plate -->
      <rect x="120" y="195" width="160" height="20" rx="4" fill="#1E293B" stroke="#0F172A" stroke-width="2" />
      <!-- Heavy Threaded Stem -->
      <rect x="186" y="30" width="28" height="168" fill="url(#metalSteel)" stroke="#475569" stroke-width="2" />
      <!-- Trapezoidal Threads -->
      ${Array.from({ length: 14 }).map((_, i) => `<line x1="184" y1="${38 + i * 11}" x2="216" y2="${38 + i * 11}" stroke="#334155" stroke-width="3" />`).join('')}
      <!-- Heavy Cast Wing Nut Handle (Manípulo) -->
      <rect x="150" y="90" width="100" height="18" rx="6" fill="#DC2626" stroke="#991B1B" stroke-width="2" />
      <circle cx="200" cy="99" r="14" fill="#1E293B" />
    `;
  } else if (slug === 'rodizio-de-borracha') {
    equipmentGraphic = `
      <!-- Rodízio de Borracha (Heavy polyurethane wheel caster with brake pedal) -->
      <!-- Top Spigot Stem for Scaffold Leg -->
      <rect x="188" y="25" width="24" height="60" rx="3" fill="url(#metalSteel)" stroke="#475569" stroke-width="2" />
      <!-- Swivel Plate & Fork Housing -->
      <path d="M150 85 L250 85 L235 150 L165 150 Z" fill="#334155" stroke="#1E293B" stroke-width="2" />
      <!-- Foot Brake Lever (Trava de segurança) -->
      <rect x="120" y="100" width="45" height="14" rx="3" fill="#DC2626" transform="rotate(-20 120 100)" />
      <!-- Heavy Rubber Tread Wheel -->
      <circle cx="200" cy="165" r="50" fill="#0F172A" stroke="#334155" stroke-width="4" />
      <circle cx="200" cy="165" r="32" fill="#94A3B8" />
      <circle cx="200" cy="165" r="14" fill="#1E293B" />
    `;
  } else if (slug === 'diagonal-para-andaime') {
    equipmentGraphic = `
      <!-- Diagonal para Andaime (Steel diagonal brace pipe with pin holes) -->
      <line x1="60" y1="210" x2="340" y2="50" stroke="#DC2626" stroke-width="16" stroke-linecap="round" />
      <line x1="60" y1="210" x2="340" y2="50" stroke="#991B1B" stroke-width="4" stroke-linecap="round" />
      <!-- Flattened Pin Ends -->
      <circle cx="65" cy="207" r="12" fill="#334155" stroke="#E2E8F0" stroke-width="3" />
      <circle cx="335" cy="53" r="12" fill="#334155" stroke="#E2E8F0" stroke-width="3" />
    `;
  } else if (slug === 'escada-para-andaime') {
    equipmentGraphic = `
      <!-- Escada para Andaime (Access ladder with hooks for scaffold rungs) -->
      <!-- Side Rails -->
      <rect x="150" y="30" width="12" height="200" fill="#334155" />
      <rect x="230" y="30" width="12" height="200" fill="#334155" />
      <!-- Top Attachment Hooks -->
      <path d="M150 40 Q130 20 150 10 M230 40 Q210 20 230 10" fill="none" stroke="#DC2626" stroke-width="8" stroke-linecap="round" />
      <!-- Rungs -->
      <line x1="156" y1="60" x2="236" y2="60" stroke="#94A3B8" stroke-width="6" />
      <line x1="156" y1="100" x2="236" y2="100" stroke="#94A3B8" stroke-width="6" />
      <line x1="156" y1="140" x2="236" y2="140" stroke="#94A3B8" stroke-width="6" />
      <line x1="156" y1="180" x2="236" y2="180" stroke="#94A3B8" stroke-width="6" />
    `;
  } else if (slug === 'andaime-tubular') {
    equipmentGraphic = `
      <!-- Andaime Tubular (Complete 1.5m x 1.5m Modular Tubular Steel Frame Panel) -->
      <!-- Left Post -->
      <rect x="100" y="30" width="18" height="200" rx="3" fill="#DC2626" stroke="#991B1B" stroke-width="2" />
      <!-- Right Post -->
      <rect x="282" y="30" width="18" height="200" rx="3" fill="#DC2626" stroke="#991B1B" stroke-width="2" />
      <!-- Top Horizontal Tube -->
      <rect x="100" y="40" width="200" height="16" rx="3" fill="#DC2626" stroke="#991B1B" stroke-width="2" />
      <!-- Bottom Horizontal Tube -->
      <rect x="100" y="204" width="200" height="16" rx="3" fill="#DC2626" stroke="#991B1B" stroke-width="2" />
      <!-- Internal X-Bracing -->
      <line x1="109" y1="48" x2="291" y2="212" stroke="#334155" stroke-width="8" />
      <line x1="109" y1="212" x2="291" y2="48" stroke="#334155" stroke-width="8" />
      <!-- Locking Pins -->
      <circle cx="109" cy="80" r="6" fill="#F59E0B" />
      <circle cx="291" cy="80" r="6" fill="#F59E0B" />
      <text x="200" y="135" font-family="sans-serif" font-size="11" font-weight="900" fill="#FFFFFF" text-anchor="middle">1,50m x 1,50m</text>
    `;

  // 3. Concretagem e Compactação
  } else if (slug === 'regua-vibratoria') {
    equipmentGraphic = `
      <!-- Régua Vibratória (Long aluminum beam 2-3m + center 4-stroke gas engine) -->
      <!-- Long Aluminum Screed Profile (2-3m) -->
      <rect x="40" y="150" width="320" height="18" rx="3" fill="url(#metalSteel)" stroke="#475569" stroke-width="2" />
      <!-- Center Gasoline Engine Unit (Honda GX35 style) -->
      <rect x="160" y="90" width="80" height="60" rx="8" fill="#DC2626" stroke="#991B1B" stroke-width="2" />
      <circle cx="200" cy="115" r="18" fill="#1E293B" />
      <!-- Operating Handle Bars -->
      <path d="M170 90 L120 40 M230 90 L280 40" stroke="#334155" stroke-width="7" stroke-linecap="round" />
      <line x1="110" y1="40" x2="290" y2="40" stroke="#F59E0B" stroke-width="8" stroke-linecap="round" />
    `;
  } else if (slug === 'acabadora-de-superficie') {
    equipmentGraphic = `
      <!-- Acabadora de Superfície 36" (Power Trowel / Helicóptero 4 blades + ring) -->
      <!-- Outer Guard Ring Frame (36" / 900mm) -->
      <ellipse cx="200" cy="170" rx="110" ry="40" fill="none" stroke="#DC2626" stroke-width="6" />
      <!-- 4 Rotating Steel Blades -->
      <line x1="100" y1="170" x2="300" y2="170" stroke="#64748B" stroke-width="12" />
      <line x1="200" y1="130" x2="200" y2="210" stroke="#64748B" stroke-width="12" />
      <!-- Center Engine & Gearbox (5.5 - 9 HP) -->
      <rect x="165" y="80" width="70" height="60" rx="8" fill="#F59E0B" stroke="#D97706" stroke-width="2" />
      <circle cx="200" cy="110" r="16" fill="#1E293B" />
      <!-- Long Guide Handle with Blade Pitch Crank -->
      <path d="M200 90 L200 30" stroke="#334155" stroke-width="8" stroke-linecap="round" />
      <line x1="170" y1="30" x2="230" y2="30" stroke="#0F172A" stroke-width="10" stroke-linecap="round" />
    `;
  } else if (slug === 'placa-reversivel-cr5') {
    equipmentGraphic = `
      <!-- Placa Reversível CR5 (Heavy reversible plate compactor with hydraulic shift lever & engine hood) -->
      <!-- Heavy Cast Base Plate (Avanço/Retrocesso) -->
      <path d="M100 170 L300 170 L285 205 L115 205 Z" fill="#334155" stroke="#0F172A" stroke-width="3" />
      <!-- Heavy Shrouded Engine Hood (Weber CR5 / Wacker DPU type) -->
      <path d="M120 170 L135 90 L265 90 L280 170 Z" fill="#F59E0B" stroke="#B45309" stroke-width="3" />
      <rect x="150" y="105" width="100" height="45" rx="6" fill="#1E293B" />
      <text x="200" y="132" font-family="sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">CR 5 REVERSIBLE</text>
      <!-- Hydraulic Shift Lever Guide Handle -->
      <path d="M140 100 L70 40" stroke="#334155" stroke-width="10" stroke-linecap="round" />
      <circle cx="65" cy="35" r="10" fill="#DC2626" />
    `;
  } else if (slug === 'placa-vibratoria-pv-95') {
    equipmentGraphic = `
      <!-- Placa Vibratória PV 95 (Single direction 95kg compactor, open frame + Honda engine) -->
      <!-- Base Plate -->
      <path d="M120 180 L280 180 L270 205 L130 205 Z" fill="#475569" stroke="#1E293B" stroke-width="2" />
      <!-- Front Exciter Housing -->
      <circle cx="250" cy="180" r="16" fill="#F59E0B" />
      <!-- Open Motor Chassis & Honda Engine -->
      <rect x="145" y="110" width="90" height="65" rx="6" fill="#DC2626" stroke="#991B1B" stroke-width="2" />
      <circle cx="190" cy="140" r="18" fill="#1E293B" />
      <rect x="135" y="125" width="18" height="40" rx="3" fill="#F59E0B" />
      <!-- Guide Handle -->
      <path d="M150 120 L80 60" stroke="#334155" stroke-width="8" stroke-linecap="round" />
      <text x="190" y="122" font-family="sans-serif" font-size="8" font-weight="900" fill="#FFFFFF" text-anchor="middle">PV 95 (95kg)</text>
    `;
  } else if (slug === 'compactador-de-percussao') {
    equipmentGraphic = `
      <!-- Compactador de Percussão (Tamping Rammer / Sapo: vertical body + rubber bellows + shoe foot) -->
      <!-- Handle Bar Roll Cage -->
      <path d="M140 40 L260 40 L240 100 L160 100 Z" fill="none" stroke="#334155" stroke-width="8" stroke-linejoin="round" />
      <!-- Gas Engine (Honda GX100 / Robin) -->
      <rect x="165" y="60" width="70" height="45" rx="6" fill="#DC2626" stroke="#991B1B" stroke-width="2" />
      <!-- Vertical Crank Mechanism Case -->
      <rect x="175" y="105" width="50" height="40" rx="4" fill="#F59E0B" />
      <!-- Rubber Accordion Bellows Boot (Sanfona de Borracha) -->
      <path d="M170 145 L230 145 L220 155 L230 165 L220 175 L230 185 L170 185 L180 175 L170 165 L180 155 Z" fill="#0F172A" />
      <!-- Rammer Wooden/Steel Tamping Shoe Foot -->
      <rect x="150" y="190" width="100" height="22" rx="4" fill="#334155" stroke="#0F172A" stroke-width="2" />
    `;
  } else if (slug === 'vibrador-de-imersao-de-alta-frequencia') {
    equipmentGraphic = `
      <!-- Vibrador de Imersão de Alta Frequência (Integrated converter box + poker) -->
      <!-- Electronic Converter Box -->
      <rect x="100" y="80" width="100" height="70" rx="10" fill="#0284C7" stroke="#0369A1" stroke-width="3" />
      <circle cx="130" cy="115" r="10" fill="#10B981" />
      <circle cx="160" cy="115" r="10" fill="#EF4444" />
      <!-- Heavy Cable to High Freq Poker -->
      <path d="M200 115 C260 115 240 190 300 190" fill="none" stroke="#0F172A" stroke-width="8" />
      <!-- High Frequency Poker Head -->
      <rect x="300" y="182" width="65" height="16" rx="8" fill="url(#metalSteel)" stroke="#334155" stroke-width="2" />
    `;
  } else if (slug === 'mangote-vibrador-de-imersao') {
    equipmentGraphic = `
      <!-- Mangote Vibrador de Imersão (5m Flexible hose + quick coupler + poker head) -->
      <!-- Quick Coupler End (Acoplamento do motor) -->
      <rect x="70" y="115" width="35" height="30" rx="4" fill="#F59E0B" stroke="#B45309" stroke-width="2" />
      <!-- 5-Meter Flexible Hose Loop -->
      <path d="M105 130 C160 70 240 70 280 130 C300 160 220 220 160 170 L300 170" fill="none" stroke="#1E293B" stroke-width="12" stroke-linecap="round" />
      <!-- Vibrator Steel Poker Head (Garrafa 35/45/60mm) -->
      <rect x="300" y="160" width="70" height="20" rx="10" fill="url(#metalSteel)" stroke="#334155" stroke-width="2" />
    `;
  } else if (slug === 'motor-de-acionamento-gasolina-diesel') {
    equipmentGraphic = `
      <!-- Motor de Acionamento Gasolina/Diesel (Stationary Honda/Branco 4T engine on swivel base) -->
      <!-- Swivel Base Frame -->
      <rect x="130" y="175" width="140" height="20" rx="4" fill="#334155" />
      <circle cx="200" cy="185" r="8" fill="#F59E0B" />
      <!-- Engine Block (Honda Red/White style) -->
      <rect x="140" y="80" width="120" height="95" rx="10" fill="#DC2626" stroke="#991B1B" stroke-width="2" />
      <!-- Recoil Starter Hub -->
      <circle cx="200" cy="125" r="28" fill="#1E293B" />
      <circle cx="200" cy="125" r="14" fill="#94A3B8" />
      <!-- Front Quick Socket for Hose Coupling -->
      <rect x="260" y="115" width="25" height="22" rx="4" fill="#F59E0B" />
    `;
  } else if (slug === 'motor-de-acionamento-eletrico') {
    equipmentGraphic = `
      <!-- Motor de Acionamento Elétrico (Portable electric motor in tubular cage) -->
      <!-- Protective Tubular Cage -->
      <rect x="110" y="60" width="180" height="130" rx="12" fill="none" stroke="#F59E0B" stroke-width="6" />
      <!-- Electric Motor TEFC (Blue/Gray Menegotti type) -->
      <rect x="135" y="85" width="130" height="80" rx="10" fill="#0284C7" stroke="#0369A1" stroke-width="2" />
      <!-- Cooling Fins -->
      <line x1="150" y1="85" x2="150" y2="165" stroke="#0369A1" stroke-width="3" />
      <line x1="170" y1="85" x2="170" y2="165" stroke="#0369A1" stroke-width="3" />
      <line x1="190" y1="85" x2="190" y2="165" stroke="#0369A1" stroke-width="3" />
      <!-- Drive Coupling Socket -->
      <rect x="265" y="112" width="20" height="26" rx="4" fill="#334155" />
    `;
  } else if (slug === 'betoneira-400l-diesel') {
    equipmentGraphic = `
      <!-- Betoneira 400L Diesel (Heavy 400L mixer + ring gear + enclosed diesel engine box) -->
      <!-- Heavy Chassis & Wheels -->
      <path d="M100 190 L300 190 L280 215 L120 215 Z" fill="#334155" />
      <circle cx="130" cy="215" r="22" fill="#0F172A" stroke="#CBD5E1" stroke-width="4" />
      <circle cx="270" cy="215" r="22" fill="#0F172A" stroke="#CBD5E1" stroke-width="4" />
      <!-- Tilting Drum 400L (Diesel Orange/Yellow) -->
      <path d="M150 150 C150 90 250 90 250 150 L230 180 L170 180 Z" fill="#D97706" stroke="#92400E" stroke-width="3" />
      <!-- Ring Gear (Cremalheira) -->
      <ellipse cx="200" cy="145" rx="55" ry="12" fill="none" stroke="#1E293B" stroke-width="6" stroke-dasharray="6 3" />
      <!-- Enclosed Diesel Engine Box (Right side) -->
      <rect x="270" y="100" width="60" height="85" rx="6" fill="#DC2626" stroke="#991B1B" stroke-width="2" />
      <text x="300" y="145" font-family="sans-serif" font-size="9" font-weight="900" fill="#FFFFFF" text-anchor="middle">DIESEL</text>
    `;
  } else if (slug === 'betoneira-400l-eletrica') {
    equipmentGraphic = `
      <!-- Betoneira 400L Elétrica (400L mixer + electric motor box + hand tilting wheel) -->
      <path d="M100 190 L300 190 L280 215 L120 215 Z" fill="#334155" />
      <circle cx="130" cy="215" r="22" fill="#0F172A" stroke="#CBD5E1" stroke-width="4" />
      <circle cx="270" cy="215" r="22" fill="#0F172A" stroke="#CBD5E1" stroke-width="4" />
      <!-- Tilting Drum 400L (Electric Yellow Menegotti) -->
      <path d="M150 150 C150 90 250 90 250 150 L230 180 L170 180 Z" fill="#F59E0B" stroke="#B45309" stroke-width="3" />
      <ellipse cx="200" cy="145" rx="55" ry="12" fill="none" stroke="#1E293B" stroke-width="6" stroke-dasharray="6 3" />
      <!-- Hand Tilting Steering Wheel (Left side) -->
      <circle cx="110" cy="130" r="24" fill="none" stroke="#DC2626" stroke-width="5" />
      <!-- Electric Motor Box -->
      <rect x="270" y="115" width="50" height="65" rx="6" fill="#0284C7" />
    `;

  // 4. Ferramentas Elétricas
  } else if (slug === 'maquina-de-solda-de-250-amp') {
    equipmentGraphic = `
      <!-- Máquina de Solda 250A (Inversora digital + dinse sockets + handles) -->
      <rect x="120" y="75" width="160" height="115" rx="12" fill="#1E293B" stroke="#DC2626" stroke-width="4" />
      <!-- Top Handle -->
      <rect x="160" y="55" width="80" height="20" rx="4" fill="#475569" />
      <!-- Digital LED Display -->
      <rect x="140" y="95" width="55" height="28" rx="4" fill="#0284C7" />
      <text x="167" y="114" font-family="sans-serif" font-size="14" font-weight="900" fill="#FFFFFF" text-anchor="middle">250A</text>
      <!-- Adjustment Knob -->
      <circle cx="230" cy="109" r="12" fill="#F59E0B" />
      <!-- Dinse Quick Connectors (+ Red / - Black) -->
      <circle cx="155" cy="155" r="11" fill="#DC2626" />
      <circle cx="245" cy="155" r="11" fill="#0F172A" stroke="#475569" stroke-width="2" />
    `;
  } else if (slug === 'transformador-de-energia-110-220v') {
    equipmentGraphic = `
      <!-- Autotransformador 110/220V (Heavy metal case + handles + voltmeter + sockets) -->
      <rect x="120" y="70" width="160" height="130" rx="10" fill="#475569" stroke="#1E293B" stroke-width="3" />
      <!-- Carrying Handle -->
      <rect x="170" y="50" width="60" height="20" rx="4" fill="#1E293B" />
      <!-- Voltmeter & Breaker Switch -->
      <rect x="140" y="90" width="40" height="30" rx="4" fill="#F59E0B" />
      <rect x="220" y="90" width="30" height="30" rx="4" fill="#DC2626" />
      <!-- 110V & 220V Outlet Sockets -->
      <circle cx="160" cy="160" r="12" fill="#1E293B" />
      <circle cx="240" cy="160" r="12" fill="#1E293B" />
      <text x="160" y="142" font-family="sans-serif" font-size="8" font-weight="900" fill="#FFFFFF" text-anchor="middle">110V</text>
      <text x="240" y="142" font-family="sans-serif" font-size="8" font-weight="900" fill="#FFFFFF" text-anchor="middle">220V</text>
    `;
  } else if (slug === 'plaina') {
    equipmentGraphic = `
      <!-- Plaina (Handheld Electric Planer: front depth knob + aluminum shoe + chip port) -->
      <!-- Main Body (Makita Teal / Bosch Blue) -->
      <rect x="110" y="110" width="170" height="45" rx="8" fill="#0284C7" stroke="#0369A1" stroke-width="2" />
      <!-- Front Base Shoe -->
      <rect x="100" y="155" width="80" height="12" fill="url(#metalSteel)" />
      <!-- Rear Base Shoe -->
      <rect x="190" y="155" width="100" height="12" fill="url(#metalSteel)" />
      <!-- Front Depth Knob -->
      <circle cx="130" cy="95" r="16" fill="#1E293B" stroke="#F59E0B" stroke-width="3" />
      <!-- Rear Handle -->
      <path d="M250 110 L280 70 L260 70 Z" fill="#1E293B" />
    `;
  } else if (slug === 'retificadeira') {
    equipmentGraphic = `
      <!-- Retificadeira (Straight Die Grinder: slim barrel + extended neck + 1/4" collet nut) -->
      <!-- Slim Barrel Body -->
      <rect x="80" y="125" width="150" height="30" rx="15" fill="#0284C7" stroke="#0369A1" stroke-width="2" />
      <!-- Extended Neck Spindle -->
      <rect x="230" y="132" width="60" height="16" fill="#334155" />
      <!-- 1/4" (6mm) Collet Nut & Burr Bit -->
      <rect x="290" y="130" width="14" height="20" fill="#F59E0B" />
      <path d="M304 140 L330 135 L330 145 Z" fill="#94A3B8" />
    `;
  } else if (slug === 'lixadeira-angular-de-7') {
    equipmentGraphic = `
      <!-- Lixadeira Angular de 7" (7-inch Angle Sander: backing pad + sanding disc + rear handle) -->
      <rect x="100" y="110" width="140" height="40" rx="10" fill="#0284C7" stroke="#0369A1" stroke-width="2" />
      <rect x="240" y="100" width="45" height="60" rx="6" fill="#334155" />
      <!-- 7" Flexible Rubber Backing Pad & Sanding Disc -->
      <ellipse cx="280" cy="175" rx="55" ry="14" fill="#F59E0B" />
      <ellipse cx="280" cy="175" rx="50" ry="11" fill="#D97706" />
      <!-- D-Handle / Side Grip -->
      <path d="M260 90 L260 60 L300 60 L300 90" fill="none" stroke="#DC2626" stroke-width="6" />
    `;
  } else if (slug === 'esmerilhadeira-angular-de-7') {
    equipmentGraphic = `
      <!-- Esmerilhadeira Angular de 7" (Heavy 7" 2200W Angle Grinder: large metal gear housing + 180mm wheel guard + rear trigger handle) -->
      <!-- Heavy Motor Barrel Body (Bosch Blue / DeWalt Yellow) -->
      <rect x="80" y="110" width="160" height="48" rx="10" fill="#0284C7" stroke="#0369A1" stroke-width="2" />
      <!-- Metal Gear Housing -->
      <path d="M240 100 L290 100 L295 158 L240 158 Z" fill="#334155" />
      <!-- Heavy 180mm (7") Guard & Grinding Disc -->
      <ellipse cx="295" cy="170" rx="55" ry="16" fill="#0F172A" stroke="#DC2626" stroke-width="4" />
      <ellipse cx="295" cy="170" rx="25" ry="7" fill="#F59E0B" />
      <!-- Heavy Rear Trigger Handle with Lock Button -->
      <path d="M80 134 L30 134 L30 160 L80 150 Z" fill="#1E293B" />
      <circle cx="50" cy="147" r="5" fill="#EF4444" />
      <text x="160" y="139" font-family="sans-serif" font-size="10" font-weight="900" fill="#FFFFFF" text-anchor="middle">7" (180mm) 2200W</text>
    `;
  } else if (slug === 'esmerilhadeira-angular-de-4-1-2') {
    equipmentGraphic = `
      <!-- Esmerilhadeira Angular de 4"½ (Compact 4.5" 115mm Grinder: slim body + slide switch + 115mm guard) -->
      <!-- Compact Slim Barrel Body (Makita Teal style) -->
      <rect x="110" y="120" width="120" height="32" rx="16" fill="#0D9488" stroke="#0F766E" stroke-width="2" />
      <!-- Slide Switch on Top Body -->
      <rect x="140" y="115" width="20" height="8" rx="2" fill="#F59E0B" />
      <!-- Metal Gear Case -->
      <path d="M230 115 L265 115 L270 155 L230 155 Z" fill="#475569" />
      <!-- Compact 115mm (4.5") Guard & Disc -->
      <ellipse cx="270" cy="165" rx="35" ry="10" fill="#0F172A" stroke="#DC2626" stroke-width="3" />
      <ellipse cx="270" cy="165" rx="14" ry="4" fill="#F59E0B" />
      <text x="170" y="140" font-family="sans-serif" font-size="9" font-weight="900" fill="#FFFFFF" text-anchor="middle">4.1/2" (115mm)</text>
    `;

  // 5. Furação / Corte / Demolição
  } else if (slug === 'martelo-demolidor-de-30-kg') {
    equipmentGraphic = `
      <!-- Martelo Demolidor de 30 kg (Extra Heavy Vertical Pavement Breaker: T-handles + 28mm hex chisel + 68J impact) -->
      <!-- Dual T-Handles Top -->
      <line x1="110" y1="40" x2="290" y2="40" stroke="#DC2626" stroke-width="14" stroke-linecap="round" />
      <line x1="110" y1="40" x2="290" y2="40" stroke="#0F172A" stroke-width="6" stroke-dasharray="20 10" stroke-linecap="round" />
      <!-- Heavy Cast Motor & Cylinder Housing (Bosch GSH 27 VC style) -->
      <rect x="165" y="47" width="70" height="115" rx="10" fill="#1E293B" stroke="#334155" stroke-width="3" />
      <rect x="180" y="65" width="40" height="40" rx="4" fill="#0284C7" />
      <text x="200" y="89" font-family="sans-serif" font-size="10" font-weight="900" fill="#FFFFFF" text-anchor="middle">30 KG</text>
      <!-- Heavy 28mm Hex Chuck & Chisel -->
      <rect x="185" y="162" width="30" height="30" rx="4" fill="#475569" />
      <polygon points="192,192 208,192 203,245 197,245" fill="url(#metalSteel)" stroke="#334155" stroke-width="1.5" />
    `;
  } else if (slug === 'martelo-demolidor-de-19-kg') {
    equipmentGraphic = `
      <!-- Martelo Demolidor de 19 kg (Heavy 19kg Breaker: Dual vertical handles + 28mm hex) -->
      <line x1="130" y1="45" x2="270" y2="45" stroke="#334155" stroke-width="12" stroke-linecap="round" />
      <rect x="170" y="51" width="60" height="110" rx="8" fill="#DC2626" stroke="#991B1B" stroke-width="2" />
      <text x="200" y="95" font-family="sans-serif" font-size="10" font-weight="900" fill="#FFFFFF" text-anchor="middle">19 KG</text>
      <rect x="187" y="161" width="26" height="25" rx="3" fill="#1E293B" />
      <polygon points="193,186 207,186 203,235 197,235" fill="url(#metalSteel)" />
    `;
  } else if (slug === 'martelo-demolidor-de-15-kg') {
    equipmentGraphic = `
      <!-- Martelo Demolidor de 15 kg (15kg Breaker: Rear D-handle + side loop handle) -->
      <rect x="172" y="55" width="56" height="100" rx="8" fill="#0284C7" stroke="#0369A1" stroke-width="2" />
      <!-- Rear D-Handle -->
      <path d="M172 65 C140 65 140 105 172 105" fill="none" stroke="#1E293B" stroke-width="10" stroke-linecap="round" />
      <!-- Side Loop Handle -->
      <circle cx="228" cy="110" r="16" fill="none" stroke="#F59E0B" stroke-width="6" />
      <text x="200" y="95" font-family="sans-serif" font-size="9" font-weight="900" fill="#FFFFFF" text-anchor="middle">15 KG</text>
      <polygon points="194,155 206,155 203,225 197,225" fill="url(#metalSteel)" />
    `;
  } else if (slug === 'martelo-rompedor-de-10-kg') {
    equipmentGraphic = `
      <!-- Martelo Rompedor de 10 kg (L-shape SDS Max breaker hammer for wall & floor) -->
      <!-- L-Shape Body (Bosch GSH 11 VC style) -->
      <path d="M140 80 L220 80 L220 150 L180 150 L140 120 Z" fill="#0284C7" stroke="#0369A1" stroke-width="2" />
      <!-- D-Handle Rear -->
      <path d="M140 85 C110 85 110 120 140 120" fill="none" stroke="#1E293B" stroke-width="8" stroke-linecap="round" />
      <!-- Side Barrel Grip Handle -->
      <rect x="210" y="100" width="12" height="40" rx="3" fill="#F59E0B" />
      <text x="180" y="105" font-family="sans-serif" font-size="9" font-weight="900" fill="#FFFFFF" text-anchor="middle">10kg SDS-Max</text>
      <polygon points="220,110 270,110 270,116 220,116" fill="url(#metalSteel)" />
    `;
  } else if (slug === 'martelo-rompedor-de-5-kg') {
    equipmentGraphic = `
      <!-- Martelo Rompedor de 5 kg (Compact 5kg SDS Max light chipping hammer) -->
      <path d="M150 90 L210 90 L210 140 L170 140 Z" fill="#0D9488" stroke="#0F766E" stroke-width="2" />
      <path d="M150 95 C125 95 125 130 150 130" fill="none" stroke="#1E293B" stroke-width="7" stroke-linecap="round" />
      <text x="180" y="112" font-family="sans-serif" font-size="8" font-weight="900" fill="#FFFFFF" text-anchor="middle">5kg SDS</text>
      <polygon points="210,112 255,112 255,117 210,117" fill="url(#metalSteel)" />
    `;
  } else if (slug === 'serra-p-piso') {
    equipmentGraphic = `
      <!-- Serra p/ Piso (Walk-behind concrete floor saw cart with water tank & 13HP gas engine) -->
      <!-- Cart Chassis & Wheels -->
      <rect x="90" y="160" width="180" height="30" rx="4" fill="#334155" />
      <circle cx="120" cy="190" r="18" fill="#0F172A" stroke="#94A3B8" stroke-width="3" />
      <circle cx="240" cy="190" r="18" fill="#0F172A" stroke="#94A3B8" stroke-width="3" />
      <!-- Water Tank (Polyethylene Blue/White) -->
      <rect x="110" y="70" width="70" height="55" rx="6" fill="#0284C7" stroke="#0369A1" stroke-width="2" />
      <!-- 13HP Gas Engine -->
      <rect x="190" y="85" width="70" height="55" rx="6" fill="#DC2626" stroke="#991B1B" stroke-width="2" />
      <!-- Depth Adjustment Crank & Operating Handle Bar -->
      <path d="M100 160 L60 80 L90 80" fill="none" stroke="#DC2626" stroke-width="8" stroke-linecap="round" />
      <circle cx="90" cy="80" r="12" fill="#F59E0B" />
      <!-- 350-450mm Floor Saw Blade Guard (Front) -->
      <path d="M250 175 A 45 45 0 0 1 340 175 Z" fill="#F59E0B" stroke="#B45309" stroke-width="2" />
    `;
  } else if (slug === 'policorte') {
    equipmentGraphic = `
      <!-- Policorte (Stationary bench chop saw 12"/14" with vice clamp & pivot arm) -->
      <!-- Cast Iron Heavy Base Plate -->
      <rect x="100" y="175" width="200" height="25" rx="4" fill="#1E293B" stroke="#0F172A" stroke-width="2" />
      <!-- Material Vice Clamp (Morsa) -->
      <rect x="140" y="160" width="40" height="15" fill="#F59E0B" />
      <!-- Pivoting Motor Arm & Handle -->
      <path d="M120 175 L150 90 L230 90" stroke="#334155" stroke-width="10" stroke-linecap="round" />
      <!-- 12"/14" Abrasive Blade Guard -->
      <circle cx="230" cy="130" r="45" fill="#DC2626" stroke="#991B1B" stroke-width="2" />
      <circle cx="230" cy="130" r="40" fill="#0F172A" />
    `;
  } else if (slug === 'cortadora-de-metais') {
    equipmentGraphic = `
      <!-- Cortadora de Metais (Portable cold-cut metal saw Makita LC1230 style with TCT blade) -->
      <rect x="110" y="170" width="180" height="22" rx="4" fill="#334155" />
      <path d="M130 170 L170 95 L250 95" stroke="#0D9488" stroke-width="8" stroke-linecap="round" />
      <circle cx="240" cy="135" r="42" fill="#0F172A" stroke="#F59E0B" stroke-width="3" />
      <text x="240" y="139" font-family="sans-serif" font-size="8" font-weight="900" fill="#FFFFFF" text-anchor="middle">TCT METAL</text>
    `;
  } else if (slug === 'serra-circular-manual-de-9') {
    equipmentGraphic = `
      <!-- Serra Circular Manual de 9" (Heavy 9.1/4" 235mm circular saw Makita N5900B style) -->
      <!-- Large Base Shoe -->
      <rect x="100" y="160" width="180" height="14" fill="url(#metalSteel)" stroke="#475569" stroke-width="2" />
      <!-- Heavy Upper Blade Guard (9.1/4") -->
      <path d="M150 160 A 60 60 0 0 1 270 160 Z" fill="#0284C7" stroke="#0369A1" stroke-width="3" />
      <!-- Rear Main Handle & Front Auxiliary Grip -->
      <path d="M140 130 C110 110 110 150 140 150" fill="none" stroke="#1E293B" stroke-width="10" stroke-linecap="round" />
      <circle cx="250" cy="115" r="14" fill="#F59E0B" />
      <text x="210" y="135" font-family="sans-serif" font-size="9" font-weight="900" fill="#FFFFFF" text-anchor="middle">9.1/4" (235mm)</text>
    `;
  } else if (slug === 'serra-circular-manual-de-7') {
    equipmentGraphic = `
      <!-- Serra Circular Manual de 7" (Standard 7.1/4" 185mm circular saw Makita 5007N / DeWalt) -->
      <rect x="120" y="160" width="150" height="12" fill="url(#metalSteel)" />
      <path d="M160 160 A 48 48 0 0 1 256 160 Z" fill="#F59E0B" stroke="#B45309" stroke-width="2" />
      <path d="M150 130 C125 115 125 150 150 150" fill="none" stroke="#1E293B" stroke-width="8" stroke-linecap="round" />
      <text x="208" y="140" font-family="sans-serif" font-size="8" font-weight="900" fill="#FFFFFF" text-anchor="middle">7.1/4" (185mm)</text>
    `;
  } else if (slug === 'serra-marmore-makitao') {
    equipmentGraphic = `
      <!-- Serra Mármore "Makitão" (Heavy 7" 180mm masonry saw Makita 4107R style) -->
      <!-- Heavy Base Plate -->
      <rect x="110" y="160" width="170" height="14" fill="#334155" stroke="#1E293B" stroke-width="2" />
      <!-- Large 7" (180mm) Diamond Blade Guard -->
      <path d="M150 160 A 55 55 0 0 1 260 160 Z" fill="#0284C7" stroke="#0369A1" stroke-width="3" />
      <!-- Water Hose Attachment Bar -->
      <rect x="250" y="125" width="25" height="8" rx="2" fill="#0EA5E9" />
      <path d="M140 130 C115 110 115 150 140 150" fill="none" stroke="#1E293B" stroke-width="10" stroke-linecap="round" />
      <text x="205" y="135" font-family="sans-serif" font-size="9" font-weight="900" fill="#FFFFFF" text-anchor="middle">MAKITÃO 7"</text>
    `;
  } else if (slug === 'serra-marmore') {
    equipmentGraphic = `
      <!-- Serra Mármore (Compact 4.3/8" 110mm tile saw Makita 4100NH / Bosch GDC) -->
      <rect x="130" y="160" width="120" height="10" fill="url(#metalSteel)" />
      <!-- Compact 110mm Guard -->
      <path d="M165 160 A 35 35 0 0 1 235 160 Z" fill="#0284C7" stroke="#0369A1" stroke-width="2" />
      <path d="M155 135 C135 120 135 150 155 150" fill="none" stroke="#1E293B" stroke-width="7" stroke-linecap="round" />
      <text x="200" y="145" font-family="sans-serif" font-size="8" font-weight="900" fill="#FFFFFF" text-anchor="middle">4.3/8" (110mm)</text>
    `;
  } else if (slug === 'finca-pinos') {
    equipmentGraphic = `
      <!-- Finca Pinos (Powder actuated fastening tool Walsywa PRA-10 style) -->
      <!-- Steel Muzzle Barrel -->
      <rect x="210" y="125" width="90" height="18" fill="url(#metalSteel)" stroke="#334155" stroke-width="2" />
      <!-- Rubber Grip Handle & Trigger -->
      <path d="M150 120 L210 125 L190 190 L160 190 Z" fill="#DC2626" stroke="#991B1B" stroke-width="2" />
      <!-- Rear Hammer End Cap -->
      <rect x="130" y="115" width="25" height="30" rx="4" fill="#1E293B" />
    `;
  } else if (slug === 'martelete-perfurador-sds-plus') {
    equipmentGraphic = `
      <!-- Martelete Perfurador SDS Plus (L-shape/Pistol 900W Bosch GBH 2-28 / Makita HR2470) -->
      <!-- Pistol Body -->
      <path d="M130 90 L220 90 L210 150 L160 150 Z" fill="#0284C7" stroke="#0369A1" stroke-width="2" />
      <!-- Rear Handle & Trigger -->
      <path d="M130 95 C105 95 105 140 130 140" fill="none" stroke="#1E293B" stroke-width="8" stroke-linecap="round" />
      <!-- Mode Selector Dial (Drill / Hammer / Chisel) -->
      <circle cx="180" cy="115" r="10" fill="#F59E0B" />
      <!-- SDS Plus Quick Chuck & Auxiliary Side Handle -->
      <rect x="220" y="98" width="30" height="20" rx="3" fill="#1E293B" />
      <rect x="210" y="120" width="12" height="35" rx="3" fill="#334155" />
      <!-- Drill Bit -->
      <line x1="250" y1="108" x2="310" y2="108" stroke="#CBD5E1" stroke-width="5" />
    `;
  } else if (slug === 'furadeira-de-impacto-5-8') {
    equipmentGraphic = `
      <!-- Furadeira de Impacto 5/8" (Heavy industrial 16mm chuck drill + spade handle) -->
      <rect x="120" y="95" width="120" height="45" rx="8" fill="#1E293B" stroke="#334155" stroke-width="2" />
      <!-- Heavy 16mm (5/8") Keyed Chuck -->
      <rect x="240" y="102" width="30" height="30" rx="3" fill="#F59E0B" stroke="#B45309" stroke-width="2" />
      <!-- Spade Rear Handle -->
      <path d="M120 100 L70 100 L70 135 L120 135 Z" fill="#DC2626" />
      <!-- Heavy Side Handle -->
      <rect x="220" y="132" width="14" height="45" rx="3" fill="#475569" />
      <text x="180" y="122" font-family="sans-serif" font-size="9" font-weight="900" fill="#FFFFFF" text-anchor="middle">5/8" (16mm)</text>
    `;
  } else if (slug === 'furadeira-de-impacto-1-2') {
    equipmentGraphic = `
      <!-- Furadeira de Impacto ½" (Standard 13mm chuck pistol drill Bosch GSB 450 style) -->
      <path d="M140 100 L220 100 L210 160 L180 160 Z" fill="#0284C7" stroke="#0369A1" stroke-width="2" />
      <path d="M140 105 C115 105 115 150 140 150" fill="none" stroke="#1E293B" stroke-width="8" stroke-linecap="round" />
      <!-- Standard 13mm (1/2") Chuck -->
      <rect x="220" y="106" width="24" height="22" rx="3" fill="#475569" />
      <line x1="244" y1="117" x2="290" y2="117" stroke="#CBD5E1" stroke-width="4" />
      <text x="180" y="125" font-family="sans-serif" font-size="8" font-weight="900" fill="#FFFFFF" text-anchor="middle">1/2" (13mm)</text>
    `;

  // 6. Geradores / Bombas / Compressores
  } else if (slug === 'compressor-de-ar-pequeno-e-medio-porte') {
    equipmentGraphic = `
      <!-- Compressor de Ar (Air compressor with receiver tank Schulz/Motomil style) -->
      <!-- Horizontal Air Receiver Tank (Blue/Red 24L/50L/100L) -->
      <rect x="90" y="110" width="200" height="85" rx="42" fill="#0284C7" stroke="#0369A1" stroke-width="3" />
      <!-- Twin Cylinder Pump & Motor Unit Top -->
      <rect x="150" y="55" width="80" height="55" rx="6" fill="#1E293B" />
      <!-- Pressure Switch & Gauges -->
      <circle cx="245" cy="80" r="10" fill="#F59E0B" />
      <circle cx="270" cy="80" r="10" fill="#10B981" />
      <!-- Transport Wheels & Handle -->
      <circle cx="130" cy="205" r="22" fill="#0F172A" stroke="#94A3B8" stroke-width="4" />
      <circle cx="250" cy="205" r="22" fill="#0F172A" stroke="#94A3B8" stroke-width="4" />
    `;
  } else if (slug === 'lavadora-de-alta-pressao') {
    equipmentGraphic = `
      <!-- Lavadora de Alta Pressão (Commercial High Pressure Washer Kärcher HD style) -->
      <!-- Vertical Cabinet (Yellow/Black Kärcher) -->
      <rect x="140" y="60" width="100" height="140" rx="12" fill="#F59E0B" stroke="#B45309" stroke-width="3" />
      <rect x="155" y="85" width="70" height="40" rx="6" fill="#1E293B" />
      <!-- High Pressure Hose Reel / Hook -->
      <circle cx="190" cy="155" r="16" fill="#0F172A" />
      <!-- Spray Lance Wand -->
      <line x1="240" y1="90" x2="290" y2="40" stroke="#334155" stroke-width="6" stroke-linecap="round" />
      <!-- Wheels -->
      <circle cx="150" cy="205" r="18" fill="#0F172A" />
      <circle cx="230" cy="205" r="18" fill="#0F172A" />
    `;
  } else if (slug === 'motobomba') {
    equipmentGraphic = `
      <!-- Motobomba (Gas engine centrifugal water pump in tubular roll cage) -->
      <!-- Steel Roll Cage Frame -->
      <rect x="100" y="65" width="200" height="135" rx="12" fill="none" stroke="#DC2626" stroke-width="6" />
      <!-- Gasoline Engine Block -->
      <rect x="125" y="90" width="80" height="85" rx="8" fill="#1E293B" />
      <!-- 2"/3" Aluminum Centrifugal Pump Casing -->
      <rect x="205" y="95" width="75" height="75" rx="10" fill="url(#metalSteel)" stroke="#334155" stroke-width="2" />
      <!-- Suction & Discharge Ports -->
      <rect x="230" y="75" width="25" height="20" rx="4" fill="#F59E0B" />
      <rect x="280" y="120" width="20" height="25" rx="4" fill="#F59E0B" />
    `;
  } else if (slug === 'bomba-submersivel-de-2-esgotamento') {
    equipmentGraphic = `
      <!-- Bomba Submersível de 2" (esgotamento: Mud/Sludge vortex pump with heavy base) -->
      <!-- Heavy Cast Iron Body (Tsurumi/KSB style) -->
      <rect x="140" y="65" width="120" height="125" rx="20" fill="#1E293B" stroke="#0F172A" stroke-width="3" />
      <!-- Lifting Handle Top -->
      <path d="M170 65 L170 45 L230 45 L230 65" fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round" />
      <!-- Top Hose Discharge Coupler 2" -->
      <rect x="215" y="45" width="30" height="20" rx="3" fill="#DC2626" />
      <!-- Wide Bottom Mud/Solids Intake Strainer Base -->
      <rect x="125" y="190" width="150" height="25" rx="6" fill="#475569" stroke="#1E293B" stroke-width="2" />
      ${Array.from({ length: 6 }).map((_, i) => `<circle cx="${140 + i * 24}" cy="202" r="5" fill="#0F172A" />`).join('')}
      <text x="200" y="130" font-family="sans-serif" font-size="9" font-weight="900" fill="#FFFFFF" text-anchor="middle">ESGOTAMENTO (LAMA)</text>
    `;
  } else if (slug === 'bomba-submersivel-de-2-drenagem') {
    equipmentGraphic = `
      <!-- Bomba Submersível de 2" (drenagem: Slim clean water cylindrical pump + float switch) -->
      <!-- Slim Stainless Steel Cylindrical Jacket -->
      <rect x="155" y="60" width="90" height="135" rx="16" fill="url(#metalSteel)" stroke="#475569" stroke-width="3" />
      <!-- Top Handle & 2" Discharge Outlet -->
      <path d="M180 60 L180 40 L220 40 L220 60" fill="none" stroke="#0284C7" stroke-width="6" />
      <rect x="210" y="35" width="25" height="25" rx="4" fill="#0284C7" />
      <!-- Fine Bottom Inlet Screen -->
      <rect x="155" y="175" width="90" height="20" fill="#334155" />
      <!-- Float Switch (Boia de Nível) -->
      <circle cx="275" cy="140" r="12" fill="#F59E0B" stroke="#B45309" stroke-width="2" />
      <path d="M245 100 Q285 100 275 128" fill="none" stroke="#0F172A" stroke-width="4" />
      <text x="200" y="130" font-family="sans-serif" font-size="9" font-weight="900" fill="#0F172A" text-anchor="middle">DRENAGEM LIMPA</text>
    `;
  } else if (slug === 'bomba-submersivel-de-mangote') {
    equipmentGraphic = `
      <!-- Bomba Submersível de Mangote (5m Flexible drive hose + pump head) -->
      <rect x="150" y="145" width="100" height="40" rx="10" fill="url(#metalSteel)" stroke="#334155" stroke-width="3" />
      <!-- 5m Flexible Drive Hose Loop -->
      <path d="M200 145 C200 80 110 80 110 140 C110 190 290 190 290 120 L290 90" fill="none" stroke="#1E293B" stroke-width="12" stroke-linecap="round" />
      <!-- Quick Engine Drive Coupler -->
      <rect x="275" y="70" width="30" height="25" rx="4" fill="#F59E0B" />
      <!-- 2"/3" Hose Outlet -->
      <rect x="215" y="185" width="24" height="20" rx="4" fill="#DC2626" />
    `;
  } else if (slug === 'gerador-de-energia-a-diesel') {
    equipmentGraphic = `
      <!-- Gerador de Energia a Diesel (Heavy acoustic soundproof cabinet Toyama/Branco style) -->
      <!-- Soundproof Steel Cabinet (Silent Canopy) -->
      <rect x="90" y="65" width="220" height="135" rx="14" fill="#334155" stroke="#1E293B" stroke-width="3" />
      <!-- Top Lifting Eye -->
      <circle cx="200" cy="50" r="14" fill="none" stroke="#F59E0B" stroke-width="5" />
      <!-- Digital Control Panel -->
      <rect x="120" y="90" width="70" height="80" rx="6" fill="#1E293B" />
      <rect x="135" y="105" width="40" height="20" rx="3" fill="#0284C7" />
      <!-- Lockable Access Door -->
      <rect x="205" y="90" width="90" height="80" rx="4" fill="#475569" stroke="#64748B" stroke-width="2" />
      <text x="250" y="135" font-family="sans-serif" font-size="11" font-weight="900" fill="#F59E0B" text-anchor="middle">DIESEL SILENT</text>
    `;
  } else if (slug === 'gerador-de-energia-a-gasolina') {
    equipmentGraphic = `
      <!-- Gerador de Energia a Gasolina (Open tubular roll frame gas generator 4-8.5 KVA) -->
      <!-- Open Tubular Frame -->
      <rect x="90" y="65" width="220" height="135" rx="12" fill="none" stroke="#DC2626" stroke-width="6" />
      <!-- Top Gas Tank (Red/Black 25L) -->
      <rect x="110" y="75" width="180" height="35" rx="6" fill="#DC2626" stroke="#991B1B" stroke-width="2" />
      <circle cx="260" cy="92" r="8" fill="#1E293B" />
      <!-- 4-Stroke Engine Block & Recoil Starter -->
      <rect x="115" y="115" width="90" height="70" rx="6" fill="#1E293B" />
      <circle cx="160" cy="150" r="18" fill="#475569" />
      <!-- Front Control Panel (Sockets, Breakers, Voltmeter) -->
      <rect x="215" y="115" width="80" height="70" rx="6" fill="#F59E0B" />
      <circle cx="235" cy="140" r="8" fill="#0F172A" />
      <circle cx="275" cy="140" r="8" fill="#0F172A" />
      <text x="255" y="170" font-family="sans-serif" font-size="9" font-weight="900" fill="#0F172A" text-anchor="middle">GASOLINA</text>
    `;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC" />
      <stop offset="100%" stop-color="#E2E8F0" />
    </linearGradient>
    <linearGradient id="metalSteel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2E8F0" />
      <stop offset="50%" stop-color="#94A3B8" />
      <stop offset="100%" stop-color="#64748B" />
    </linearGradient>
    <linearGradient id="metalDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569" />
      <stop offset="100%" stop-color="#0F172A" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#0F172A" flood-opacity="0.18" />
    </filter>
  </defs>

  <!-- Studio Neutral Background -->
  <rect width="400" height="300" fill="url(#bgGrad)" />
  
  <!-- Subtle Floor Reflection Line -->
  <ellipse cx="200" cy="245" rx="140" ry="16" fill="#CBD5E1" opacity="0.6" />

  <!-- Equipment Graphic Group with Shadow -->
  <g filter="url(#shadow)">
    ${equipmentGraphic}
  </g>

  <!-- Top Brand Header Bar -->
  <rect x="0" y="0" width="400" height="32" fill="#332929" />
  <text x="16" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="900" fill="#FFFFFF" letter-spacing="1">PILAR EQUIPAMENTOS</text>
  <text x="384" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="700" fill="#FCA5A5" text-anchor="end">${(categoryName || '').toUpperCase()}</text>

  <!-- Bottom Equipment Title Overlay -->
  <rect x="0" y="260" width="400" height="40" fill="#332929" />
  <text x="200" y="285" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" fill="#FFFFFF" text-anchor="middle">${title.toUpperCase()}</text>
</svg>`;
}

// Read catalog.js to get all products data
import { PRODUCTS } from '../src/data/catalog.js';

let count = 0;
for (const p of PRODUCTS) {
  const filePath = path.join(outDir, `${p.slug}.svg`);
  const svgContent = buildExactProductPhotoSvg(p);
  fs.writeFileSync(filePath, svgContent, 'utf-8');
  count++;
}

console.log(`Successfully generated ${count} HD spec-accurate equipment photo renders in public/images/products/!`);
