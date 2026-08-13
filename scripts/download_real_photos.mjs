import fs from 'fs';
import path from 'path';
import http from 'http';
import https from 'https';

const outDir = path.resolve('public/images/products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Map of real photographic images for all 56 products
const realPhotos = [
  // Acessórios
  { slug: 'serra-de-videa-para-madeira', url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80' },
  { slug: 'discos-para-serra-marmore-e-makitao', url: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80' },
  { slug: 'discos-para-serra-cliper', url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80' },
  { slug: 'brocas-sds-plus', url: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80' },

  // Andaimes / Elevação
  { slug: 'guincho-de-coluna', url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80' },
  { slug: 'escada-extensiva-e-tipo-pintor', url: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80' },
  { slug: 'talha-manual-de-corrente-de-0-5-a-3-t', url: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=800&q=80' },
  { slug: 'piso-metalico', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' },
  { slug: 'guarda-corpo', url: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80' },
  { slug: 'sapata-ajustavel', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80' },
  { slug: 'rodizio-de-borracha', url: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80' },
  { slug: 'diagonal-para-andaime', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80' },
  { slug: 'escada-para-andaime', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Steel_ladder_construction.jpg/800px-Steel_ladder_construction.jpg' },
  { slug: 'andaime-tubular', url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80' },

  // Concretagem e Compactação
  { slug: 'regua-vibratoria', url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80' },
  { slug: 'acabadora-de-superficie', url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80' },
  { slug: 'placa-reversivel-cr5', url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80' },
  { slug: 'placa-vibratoria-pv-95', url: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80' },
  { slug: 'compactador-de-percussao', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Tamping_rammer.jpg/800px-Tamping_rammer.jpg' },
  { slug: 'vibrador-de-imersao-de-alta-frequencia', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Concrete_poker_vibrator.jpg/800px-Concrete_poker_vibrator.jpg' },
  { slug: 'mangote-vibrador-de-imersao', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80' },
  { slug: 'motor-de-acionamento-gasolina-diesel', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Honda_GX160_engine.jpg/800px-Honda_GX160_engine.jpg' },
  { slug: 'motor-de-acionamento-eletrico', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electric_motor.jpg/800px-Electric_motor.jpg' },
  { slug: 'betoneira-400l-diesel', url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80' },
  { slug: 'betoneira-400l-eletrica', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' },

  // Ferramentas Elétricas
  { slug: 'maquina-de-solda-de-250-amp', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Inverter_welder.jpg/800px-Inverter_welder.jpg' },
  { slug: 'transformador-de-energia-110-220v', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Transformer3f.jpg/800px-Transformer3f.jpg' },
  { slug: 'plaina', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Hand_planer.jpg/800px-Hand_planer.jpg' },
  { slug: 'retificadeira', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Die_grinder.jpg/800px-Die_grinder.jpg' },
  { slug: 'lixadeira-angular-de-7', url: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80' },
  { slug: 'esmerilhadeira-angular-de-7', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Angle_grinder_Bosch.jpg/800px-Angle_grinder_Bosch.jpg' },
  { slug: 'esmerilhadeira-angular-de-4-1-2', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Angle_grinder.jpg/800px-Angle_grinder.jpg' },

  // Furação / Corte / Demolição
  { slug: 'martelo-demolidor-de-30-kg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Jackhammer_demolition.jpg/800px-Jackhammer_demolition.jpg' },
  { slug: 'martelo-demolidor-de-19-kg', url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80' },
  { slug: 'martelo-demolidor-de-15-kg', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' },
  { slug: 'martelo-rompedor-de-10-kg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Hammer_drill.jpg/800px-Hammer_drill.jpg' },
  { slug: 'martelo-rompedor-de-5-kg', url: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80' },
  { slug: 'serra-p-piso', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Concrete_saw.jpg/800px-Concrete_saw.jpg' },
  { slug: 'policorte', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cut-off_saw.jpg/800px-Cut-off_saw.jpg' },
  { slug: 'cortadora-de-metais', url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80' },
  { slug: 'serra-circular-manual-de-9', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Circular_saw.jpg/800px-Circular_saw.jpg' },
  { slug: 'serra-circular-manual-de-7', url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80' },
  { slug: 'serra-marmore-makitao', url: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80' },
  { slug: 'serra-marmore', url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80' },
  { slug: 'finca-pinos', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Powder-actuated_tool.jpg/800px-Powder-actuated_tool.jpg' },
  { slug: 'martelete-perfurador-sds-plus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Rotary_hammer.jpg/800px-Rotary_hammer.jpg' },
  { slug: 'furadeira-de-impacto-5-8', url: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80' },
  { slug: 'furadeira-de-impacto-1-2', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Hand-held_drill.jpg/800px-Hand-held_drill.jpg' },

  // Geradores / Bombas / Compressores
  { slug: 'compressor-de-ar-pequeno-e-medio-porte', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Air_compressor.jpg/800px-Air_compressor.jpg' },
  { slug: 'lavadora-de-alta-pressao', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Pressure_washer.jpg/800px-Pressure_washer.jpg' },
  { slug: 'motobomba', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Gasoline_water_pump.jpg/800px-Gasoline_water_pump.jpg' },
  { slug: 'bomba-submersivel-de-2-esgotamento', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Submersible_pump.jpg/800px-Submersible_pump.jpg' },
  { slug: 'bomba-submersivel-de-2-drenagem', url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80' },
  { slug: 'bomba-submersivel-de-mangote', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' },
  { slug: 'gerador-de-energia-a-diesel', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Diesel_generator.jpg/800px-Diesel_generator.jpg' },
  { slug: 'gerador-de-energia-a-gasolina', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Gasoline_generator.jpg/800px-Gasoline_generator.jpg' }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to get ${url}, status: ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(dest);
      });
    });
    req.on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  let successCount = 0;
  let failCount = 0;
  for (const p of realPhotos) {
    const dest = path.join(outDir, `${p.slug}.jpg`);
    try {
      await downloadFile(p.url, dest);
      console.log(`[OK] Downloaded real photo for: ${p.slug}`);
      successCount++;
    } catch (err) {
      console.error(`[ERR] Failed for ${p.slug}: ${err.message}`);
      failCount++;
    }
  }
  console.log(`\nSummary: ${successCount} downloaded, ${failCount} failed.`);
}

run();
