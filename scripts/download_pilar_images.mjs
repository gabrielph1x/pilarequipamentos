import fs from 'fs';
import path from 'path';
import https from 'https';

const outDir = path.resolve('public/images/products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// User-provided list of 56 products and their exact live website image URLs
const pilarCatalogInput = [
  // Andaimes / Elevação
  { name: 'Guincho de Coluna', slug: 'guincho-de-coluna', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/7188d5b20f71d68b7837c91adacfed1f.jpg' },
  { name: 'Escada Extensiva e Tipo Pintor', slug: 'escada-extensiva-e-tipo-pintor', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/cd17a0a02e40571620adee1ce62b4c5d.jpg' },
  { name: 'Talha Manual de Corrente de 0,5 a 3 t', slug: 'talha-manual-de-corrente-de-0-5-a-3-t', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/c37acb225337b7d93371b97b6d3b82e1.jpg' },
  { name: 'Piso Metálico', slug: 'piso-metalico', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/01bcd0cff805d14f043925544a424ed4.jpg' },
  { name: 'Guarda Corpo', slug: 'guarda-corpo', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/126754a544547fee6efda810f1a309ae.jpg' },
  { name: 'Sapata Ajustável', slug: 'sapata-ajustavel', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/49d680907e61a4f74f5235c71ca2b120.jpg' },
  { name: 'Rodízio de Borracha', slug: 'rodizio-de-borracha', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/5f1716b4ef0913cf8896840358fb8508.jpg' },
  { name: 'Diagonal para Andaime', slug: 'diagonal-para-andaime', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/c3829c1ed63e6c538dab4b427b2b49db.jpg' },
  { name: 'Escada para Andaime', slug: 'escada-para-andaime', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/d92632909c0c9e31f592899e33ea2ac9.jpg' },
  { name: 'Andaime Tubular', slug: 'andaime-tubular', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/79a49e4a6fe729437703cdb57d3e24be.jpg' },

  // Concretagem e Compactação
  { name: 'Régua Vibratória', slug: 'regua-vibratoria', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/f7ee4cd12aa7c2e5369aa1710784f705.jpg' },
  { name: 'Acabadora de Superfície', slug: 'acabadora-de-superficie', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/f732e7d2c288ee10b34e46cd6fb1e287.jpg' },
  { name: 'Placa Reversível CR5', slug: 'placa-reversivel-cr5', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/4975fd33f207a39fa3816126f8662b0f.jpg' },
  { name: 'Placa Vibratória PV 95', slug: 'placa-vibratoria-pv-95', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/11bbd9de7432d6fbbb1011f46b82e3aa.jpg' },
  { name: 'Compactador de Percussão', slug: 'compactador-de-percussao', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/936923e90d40aaf20a6f4deed588ef8b.jpg' },
  { name: 'Vibrador de Imersão de Alta Frequência', slug: 'vibrador-de-imersao-de-alta-frequencia', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/41582a5428827627776b4a6cf9a75758.jpg' },
  { name: 'Mangote Vibrador de Imersão', slug: 'mangote-vibrador-de-imersao', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/53a2c16b6a910ae0fc6daa0a415ce8e6.jpg' },
  { name: 'Motor de Acionamento Gasolina/Diesel', slug: 'motor-de-acionamento-gasolina-diesel', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/425c95eae1c78a8ba7db0cc91335cbb8.jpg' },
  { name: 'Motor de Acionamento Elétrico', slug: 'motor-de-acionamento-eletrico', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/f711b5dfbfdf8a7706d2f3d368c8cf34.jpg' },
  { name: 'Betoneira 400L Diesel', slug: 'betoneira-400l-diesel', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/49c6036b1cf5a2ebd3fb71d8edf50bee.jpg' },
  { name: 'Betoneira 400L Elétrica', slug: 'betoneira-400l-eletrica', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/d2d6fd12de8bcfae6bea960ea2b67130.jpg' },

  // Geradores / Bombas / Compressores
  { name: 'Compressor de Ar (Pequeno e Médio Porte)', slug: 'compressor-de-ar-pequeno-e-medio-porte', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/3d12a9ed120f8e18200cf566e99af980.jpg' },
  { name: 'Lavadora de Alta Pressão', slug: 'lavadora-de-alta-pressao', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/c02b15eb4d646e5401cc6292db88dff4.jpg' },
  { name: 'Motobomba', slug: 'motobomba', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/e27545aa6569ce4b93487af5cf31f9c0.jpg' },
  { name: 'Bomba Submersível de 2" (esgotamento)', slug: 'bomba-submersivel-de-2-esgotamento', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/dd0629b10c9cdd61980fc395d318f52e.jpg' },
  { name: 'Bomba Submersível de 2" (drenagem)', slug: 'bomba-submersivel-de-2-drenagem', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/e4e1393eead0443cdda2d4f077f5519b.jpg' },
  { name: 'Bomba Submersível de Mangote', slug: 'bomba-submersivel-de-mangote', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/1f2c6ed3375f752eb118938a5a0aff0a.jpg' },
  { name: 'Gerador de Energia a Diesel', slug: 'gerador-de-energia-a-diesel', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/81ba540b3e311860b0ecbf68b5c9e8a9.jpg' },
  { name: 'Gerador de Energia a Gasolina', slug: 'gerador-de-energia-a-gasolina', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/834c76463737091ed918af0a8c093ffd.jpg' },

  // Furação / Corte / Demolição
  { name: 'Martelo Demolidor de 30 kg', slug: 'martelo-demolidor-de-30-kg', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/6fcf94852c96b6a5a3a463ccd891f4ac.jpg' },
  { name: 'Martelo Demolidor de 19 kg', slug: 'martelo-demolidor-de-19-kg', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/d9b3b7c985407f2526ba6dbde5357d1c.jpg' },
  { name: 'Martelo Demolidor de 15 kg', slug: 'martelo-demolidor-de-15-kg', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/4e5f0d2b79a0383ae6f2d9c97e1f9d45.jpg' },
  { name: 'Martelo Rompedor de 10 kg', slug: 'martelo-rompedor-de-10-kg', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/8bd8060c51f3b3399103ab71b31d144d.jpg' },
  { name: 'Martelo Rompedor de 5 kg', slug: 'martelo-rompedor-de-5-kg', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/36596cccd9cb88e8c68fa4abf42471f0.jpg' },
  { name: 'Serra p/ Piso', slug: 'serra-p-piso', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/17079719a99f865718367ea8965b3899.jpg' },
  { name: 'Policorte', slug: 'policorte', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/38721f17a83cab8f1ef276afe87f3711.jpg' },
  { name: 'Cortadora de Metais', slug: 'cortadora-de-metais', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/99ca0e4def0e823ecd40926922ba2d45.jpg' },
  { name: 'Serra Circular Manual de 9"', slug: 'serra-circular-manual-de-9', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/287701e77efe84b9f8ccda970e86e542.jpg' },
  { name: 'Serra Circular Manual de 7"', slug: 'serra-circular-manual-de-7', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/44d4db587f425461f43ab5d8559f49c4.jpg' },
  { name: 'Serra Mármore "Makitão"', slug: 'serra-marmore-makitao', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/aad5bbc65988329ed46a9548bdcdef56.jpg' },
  { name: 'Serra Mármore', slug: 'serra-marmore', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/df9782830dadcf6e02cde7a344100fb7.jpg' },
  { name: 'Finca Pinos', slug: 'finca-pinos', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/0db8619f1351e0b0f9a3dc8f9d5f9cec.jpg' },
  { name: 'Martelete Perfurador SDS Plus', slug: 'martelete-perfurador-sds-plus', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/e1ffd12e0a0164a67ad46dfcfa946340.jpg' },
  { name: 'Furadeira de Impacto 5/8"', slug: 'furadeira-de-impacto-5-8', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/03c46de44790f47693bac868db0faa6a.jpg' },
  { name: 'Furadeira de Impacto ½"', slug: 'furadeira-de-impacto-1-2', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/3bbac248f34cef775506146b77690dd5.jpg' },

  // Ferramentas Elétricas
  { name: 'Máquina de Solda de 250 amp', slug: 'maquina-de-solda-de-250-amp', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/12f3f8702ed52d2df3d75c1912c5a540.jpg' },
  { name: 'Transformador de Energia 110/220V', slug: 'transformador-de-energia-110-220v', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/f78d62cc0c1d6003b0d627b30420c9b5.jpg' },
  { name: 'Plaina', slug: 'plaina', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/b51b3d2d44513d90da301de5c20f032e.jpg' },
  { name: 'Retificadeira', slug: 'retificadeira', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/867fea10a042b0cc30ef9db837f8f811.jpg' },
  { name: 'Lixadeira Angular de 7"', slug: 'lixadeira-angular-de-7', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/f43bd5e6479354a1967248b9182b0593.jpg' },
  { name: 'Esmerilhadeira Angular de 7"', slug: 'esmerilhadeira-angular-de-7', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/1c2bcc35f3f0c28beb4257d6550c8de4.jpg' },
  { name: 'Esmerilhadeira Angular de 4"½', slug: 'esmerilhadeira-angular-de-4-1-2', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/6cb83eafccec74c4e3ffab1cf1a32d42.jpg' },

  // Acessórios
  { name: 'Serra de Vídea para Madeira', slug: 'serra-de-videa-para-madeira', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/529f6c943be2a5d3a83509305f85542b.jpg' },
  { name: 'Discos para Serra Mármore e Makitão', slug: 'discos-para-serra-marmore-e-makitao', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/69ebd738907a007748a4cac7c0398f8a.jpg' },
  { name: 'Discos para Serra Cliper', slug: 'discos-para-serra-cliper', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/fa2011600cffce87106a80fb61672ad7.jpg' },
  { name: 'Brocas SDS Plus', slug: 'brocas-sds-plus', url: 'https://pilarequipamentos.com.br/imagens/equipamentos/f9075ea571d5974b14cb6dfe7ae73f2d.jpg' }
];

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Referer': 'https://pilarequipamentos.com.br/'
      }
    };
    https.get(url, options, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        const stat = fs.statSync(destPath);
        if (stat.size < 500) {
          fs.unlink(destPath, () => {});
          return reject(new Error(`Downloaded file too small (${stat.size} bytes)`));
        }
        resolve(stat.size);
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Starting download of official images from https://pilarequipamentos.com.br ...\n');

  let downloadedCount = 0;
  let failedCount = 0;
  let replacedCount = 0;
  let createdCount = 0;
  const failedDetails = [];
  const updatedFiles = [];

  for (const item of pilarCatalogInput) {
    const targetFile = path.join(outDir, `${item.slug}.jpg`);
    const fileExistsBefore = fs.existsSync(targetFile);

    try {
      const bytes = await downloadImage(item.url, targetFile);
      downloadedCount++;
      if (fileExistsBefore) {
        replacedCount++;
      } else {
        createdCount++;
      }
      updatedFiles.push({
        name: item.name,
        slug: item.slug,
        path: `public/images/products/${item.slug}.jpg`,
        size: `${(bytes / 1024).toFixed(1)} KB`,
        url: item.url
      });
      console.log(`[SUCCESS] Downloaded ${item.name} (${item.slug}.jpg) - ${(bytes / 1024).toFixed(1)} KB`);
    } catch (err) {
      failedCount++;
      failedDetails.push({ name: item.name, url: item.url, reason: err.message });
      console.error(`[FAIL] ${item.name} (${item.url}): ${err.message}`);
    }
  }

  console.log('\n================ SUMMARY ================');
  console.log(`Total Images Downloaded Successfully: ${downloadedCount}`);
  console.log(`Total Images Failed: ${failedCount}`);
  console.log(`Total Products Image Replaced: ${replacedCount}`);
  console.log(`Total Products Created from Scratch: ${createdCount}`);
  console.log('=========================================\n');

  // Save report to JSON for audit
  fs.writeFileSync(
    'scripts/download_pilar_report.json',
    JSON.stringify({ downloadedCount, failedCount, replacedCount, createdCount, failedDetails, updatedFiles }, null, 2),
    'utf-8'
  );
}

run();
