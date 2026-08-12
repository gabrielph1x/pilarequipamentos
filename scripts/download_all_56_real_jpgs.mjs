import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const outDir = path.resolve('public/images/products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 56 products with primary and secondary real photo URLs from Unsplash / Wikimedia / Open equipment repos
const productsPhotoMap = [
  // Acessórios
  {
    slug: 'serra-de-videa-para-madeira',
    name: 'Serra de Vídea para Madeira',
    urls: [
      'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/e/e4/Circular_saw_blade.jpg'
    ]
  },
  {
    slug: 'discos-para-serra-marmore-e-makitao',
    name: 'Discos para Serra Mármore e Makitão',
    urls: [
      'https://images.pexels.com/photos/8961404/pexels-photo-8961404.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/3/30/Diamond_blade.jpg'
    ]
  },
  {
    slug: 'discos-para-serra-cliper',
    name: 'Discos para Serra Cliper',
    urls: [
      'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/7/7b/Asphalt_saw_blade.jpg'
    ]
  },
  {
    slug: 'brocas-sds-plus',
    name: 'Brocas SDS Plus',
    urls: [
      'https://images.pexels.com/photos/5691544/pexels-photo-5691544.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/a/a6/Drill_bits.jpg'
    ]
  },

  // Andaimes / Elevação
  {
    slug: 'guincho-de-coluna',
    name: 'Guincho de Coluna',
    urls: [
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/3/3d/Building_hoist.jpg'
    ]
  },
  {
    slug: 'escada-extensiva-e-tipo-pintor',
    name: 'Escada Extensiva e Tipo Pintor',
    urls: [
      'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/6/67/Aluminum_step_ladder.jpg'
    ]
  },
  {
    slug: 'talha-manual-de-corrente-de-0-5-a-3-t',
    name: 'Talha Manual de Corrente de 0,5 a 3 t',
    urls: [
      'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/4/4e/Chain_hoist_manual.jpg'
    ]
  },
  {
    slug: 'piso-metalico',
    name: 'Piso Metálico',
    urls: [
      'https://images.pexels.com/photos/159358/construction-site-build-construction-structure-159358.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/a/a2/Scaffolding_plank.jpg'
    ]
  },
  {
    slug: 'guarda-corpo',
    name: 'Guarda Corpo',
    urls: [
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/b/b5/Scaffolding_guardrail.jpg'
    ]
  },
  {
    slug: 'sapata-ajustavel',
    name: 'Sapata Ajustável',
    urls: [
      'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/d/d2/Scaffolding_base_jack.jpg'
    ]
  },
  {
    slug: 'rodizio-de-borracha',
    name: 'Rodízio de Borracha',
    urls: [
      'https://images.pexels.com/photos/5691630/pexels-photo-5691630.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/c/c5/Caster_wheel.jpg'
    ]
  },
  {
    slug: 'diagonal-para-andaime',
    name: 'Diagonal para Andaime',
    urls: [
      'https://images.pexels.com/photos/159358/construction-site-build-construction-structure-159358.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/e/e6/Scaffolding_diagonal_brace.jpg'
    ]
  },
  {
    slug: 'escada-para-andaime',
    name: 'Escada para Andaime',
    urls: [
      'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/e/e0/Steel_ladder_construction.jpg'
    ]
  },
  {
    slug: 'andaime-tubular',
    name: 'Andaime Tubular',
    urls: [
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/Scaffolding_frame.jpg'
    ]
  },

  // Concretagem e Compactação
  {
    slug: 'regua-vibratoria',
    name: 'Régua Vibratória',
    urls: [
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/7/70/Concrete_screed.jpg'
    ]
  },
  {
    slug: 'acabadora-de-superficie',
    name: 'Acabadora de Superfície',
    urls: [
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/a/a5/Power_trowel.jpg'
    ]
  },
  {
    slug: 'placa-reversivel-cr5',
    name: 'Placa Reversível CR5',
    urls: [
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/9/90/Plate_compactor_heavy.jpg'
    ]
  },
  {
    slug: 'placa-vibratoria-pv-95',
    name: 'Placa Vibratória PV 95',
    urls: [
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/e/e9/Plate_compactor.jpg'
    ]
  },
  {
    slug: 'compactador-de-percussao',
    name: 'Compactador de Percussão',
    urls: [
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/d/d4/Tamping_rammer.jpg'
    ]
  },
  {
    slug: 'vibrador-de-imersao-de-alta-frequencia',
    name: 'Vibrador de Imersão de Alta Frequência',
    urls: [
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/a/a2/Concrete_poker_vibrator.jpg'
    ]
  },
  {
    slug: 'mangote-vibrador-de-imersao',
    name: 'Mangote Vibrador de Imersão',
    urls: [
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/b/b2/Vibrator_hose.jpg'
    ]
  },
  {
    slug: 'motor-de-acionamento-gasolina-diesel',
    name: 'Motor de Acionamento Gasolina/Diesel',
    urls: [
      'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/2/23/Honda_GX160_engine.jpg'
    ]
  },
  {
    slug: 'motor-de-acionamento-eletrico',
    name: 'Motor de Acionamento Elétrico',
    urls: [
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Electric_motor.jpg'
    ]
  },
  {
    slug: 'betoneira-400l-diesel',
    name: 'Betoneira 400L Diesel',
    urls: [
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/Concrete_mixer_drum.jpg'
    ]
  },
  {
    slug: 'betoneira-400l-eletrica',
    name: 'Betoneira 400L Elétrica',
    urls: [
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/3/36/Concrete_mixer.jpg'
    ]
  },

  // Ferramentas Elétricas
  {
    slug: 'maquina-de-solda-de-250-amp',
    name: 'Máquina de Solda de 250 amp',
    urls: [
      'https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/a/a2/Inverter_welder.jpg'
    ]
  },
  {
    slug: 'transformador-de-energia-110-220v',
    name: 'Transformador de Energia 110/220V',
    urls: [
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/0/00/Transformer3f.jpg'
    ]
  },
  {
    slug: 'plaina',
    name: 'Plaina',
    urls: [
      'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/b/b5/Hand_planer.jpg'
    ]
  },
  {
    slug: 'retificadeira',
    name: 'Retificadeira',
    urls: [
      'https://images.pexels.com/photos/5691544/pexels-photo-5691544.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/1/1a/Die_grinder.jpg'
    ]
  },
  {
    slug: 'lixadeira-angular-de-7',
    name: 'Lixadeira Angular de 7"',
    urls: [
      'https://images.pexels.com/photos/8961404/pexels-photo-8961404.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/d/d4/Angle_grinder_Bosch.jpg'
    ]
  },
  {
    slug: 'esmerilhadeira-angular-de-7',
    name: 'Esmerilhadeira Angular de 7"',
    urls: [
      'https://images.pexels.com/photos/8961404/pexels-photo-8961404.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/d/d4/Angle_grinder_Bosch.jpg'
    ]
  },
  {
    slug: 'esmerilhadeira-angular-de-4-1-2',
    name: 'Esmerilhadeira Angular de 4"½',
    urls: [
      'https://images.pexels.com/photos/8961404/pexels-photo-8961404.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/3/3b/Angle_grinder.jpg'
    ]
  },

  // Furação / Corte / Demolição
  {
    slug: 'martelo-demolidor-de-30-kg',
    name: 'Martelo Demolidor de 30 kg',
    urls: [
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/1/1f/Jackhammer_demolition.jpg'
    ]
  },
  {
    slug: 'martelo-demolidor-de-19-kg',
    name: 'Martelo Demolidor de 19 kg',
    urls: [
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/1/1f/Jackhammer_demolition.jpg'
    ]
  },
  {
    slug: 'martelo-demolidor-de-15-kg',
    name: 'Martelo Demolidor de 15 kg',
    urls: [
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/Hammer_drill.jpg'
    ]
  },
  {
    slug: 'martelo-rompedor-de-10-kg',
    name: 'Martelo Rompedor de 10 kg',
    urls: [
      'https://images.pexels.com/photos/5691544/pexels-photo-5691544.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/Hammer_drill.jpg'
    ]
  },
  {
    slug: 'martelo-rompedor-de-5-kg',
    name: 'Martelo Rompedor de 5 kg',
    urls: [
      'https://images.pexels.com/photos/5691544/pexels-photo-5691544.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/Hammer_drill.jpg'
    ]
  },
  {
    slug: 'serra-p-piso',
    name: 'Serra p/ Piso',
    urls: [
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/6/67/Concrete_saw.jpg'
    ]
  },
  {
    slug: 'policorte',
    name: 'Policorte',
    urls: [
      'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/8/87/Cut-off_saw.jpg'
    ]
  },
  {
    slug: 'cortadora-de-metais',
    name: 'Cortadora de Metais',
    urls: [
      'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/8/87/Cut-off_saw.jpg'
    ]
  },
  {
    slug: 'serra-circular-manual-de-9',
    name: 'Serra Circular Manual de 9"',
    urls: [
      'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/6/6b/Circular_saw.jpg'
    ]
  },
  {
    slug: 'serra-circular-manual-de-7',
    name: 'Serra Circular Manual de 7"',
    urls: [
      'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/6/6b/Circular_saw.jpg'
    ]
  },
  {
    slug: 'serra-marmore-makitao',
    name: 'Serra Mármore "Makitão"',
    urls: [
      'https://images.pexels.com/photos/8961404/pexels-photo-8961404.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/3/30/Diamond_blade.jpg'
    ]
  },
  {
    slug: 'serra-marmore',
    name: 'Serra Mármore',
    urls: [
      'https://images.pexels.com/photos/8961404/pexels-photo-8961404.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/3/30/Diamond_blade.jpg'
    ]
  },
  {
    slug: 'finca-pinos',
    name: 'Finca Pinos',
    urls: [
      'https://images.pexels.com/photos/5691544/pexels-photo-5691544.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/5/52/Powder-actuated_tool.jpg'
    ]
  },
  {
    slug: 'martelete-perfurador-sds-plus',
    name: 'Martelete Perfurador SDS Plus',
    urls: [
      'https://images.pexels.com/photos/5691544/pexels-photo-5691544.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/a/ab/Rotary_hammer.jpg'
    ]
  },
  {
    slug: 'furadeira-de-impacto-5-8',
    name: 'Furadeira de Impacto 5/8"',
    urls: [
      'https://images.pexels.com/photos/5691544/pexels-photo-5691544.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/c/c2/Hand-held_drill.jpg'
    ]
  },
  {
    slug: 'furadeira-de-impacto-1-2',
    name: 'Furadeira de Impacto ½"',
    urls: [
      'https://images.pexels.com/photos/5691544/pexels-photo-5691544.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/c/c2/Hand-held_drill.jpg'
    ]
  },

  // Geradores / Bombas / Compressores
  {
    slug: 'compressor-de-ar-pequeno-e-medio-porte',
    name: 'Compressor de Ar (Pequeno e Médio Porte)',
    urls: [
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/b/b3/Air_compressor.jpg'
    ]
  },
  {
    slug: 'lavadora-de-alta-pressao',
    name: 'Lavadora de Alta Pressão',
    urls: [
      'https://images.pexels.com/photos/6872567/pexels-photo-6872567.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/3/30/Pressure_washer.jpg'
    ]
  },
  {
    slug: 'motobomba',
    name: 'Motobomba',
    urls: [
      'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/6/69/Gasoline_water_pump.jpg'
    ]
  },
  {
    slug: 'bomba-submersivel-de-2-esgotamento',
    name: 'Bomba Submersível de 2" (esgotamento)',
    urls: [
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/1/14/Submersible_pump.jpg'
    ]
  },
  {
    slug: 'bomba-submersivel-de-2-drenagem',
    name: 'Bomba Submersível de 2" (drenagem)',
    urls: [
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/1/14/Submersible_pump.jpg'
    ]
  },
  {
    slug: 'bomba-submersivel-de-mangote',
    name: 'Bomba Submersível de Mangote',
    urls: [
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/b/b2/Vibrator_hose.jpg'
    ]
  },
  {
    slug: 'gerador-de-energia-a-diesel',
    name: 'Gerador de Energia a Diesel',
    urls: [
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/1/1d/Diesel_generator.jpg'
    ]
  },
  {
    slug: 'gerador-de-energia-a-gasolina',
    name: 'Gerador de Energia a Gasolina',
    urls: [
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://upload.wikimedia.org/wikipedia/commons/5/5f/Gasoline_generator.jpg'
    ]
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    };
    const req = client.get(url, options, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        const stat = fs.statSync(dest);
        if (stat.size < 3000) {
          fs.unlink(dest, () => {});
          return reject(new Error(`File too small (${stat.size} bytes)`));
        }
        resolve(dest);
      });
    });
    req.on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  let successCount = 0;
  for (const item of productsPhotoMap) {
    const dest = path.join(outDir, `${item.slug}.jpg`);
    let downloaded = false;
    for (const url of item.urls) {
      try {
        await downloadFile(url, dest);
        console.log(`[OK 200] Downloaded real photo for: ${item.slug}`);
        downloaded = true;
        successCount++;
        break;
      } catch (err) {
        // try next url
      }
    }
    if (!downloaded) {
      console.error(`[FAIL] Could not download photo for: ${item.slug}`);
    }
  }
  console.log(`\nTotal real photo .jpg files successfully downloaded: ${successCount} / ${productsPhotoMap.length}`);
}

main();
