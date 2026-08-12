import fs from 'fs';
import path from 'path';

const products = [
  // Acessórios
  { slug: 'serra-de-videa-para-madeira', name: 'Serra de Vídea para Madeira', query: 'circular saw blade white background' },
  { slug: 'discos-para-serra-marmore-e-makitao', name: 'Discos para Serra Mármore e Makitão', query: 'diamond saw blade white background' },
  { slug: 'discos-para-serra-cliper', name: 'Discos para Serra Cliper', query: 'asphalt diamond cutting blade' },
  { slug: 'brocas-sds-plus', name: 'Brocas SDS Plus', query: 'sds plus drill bit set' },

  // Andaimes / Elevação
  { slug: 'guincho-de-coluna', name: 'Guincho de Coluna', query: 'electric winch hoist construction' },
  { slug: 'escada-extensiva-e-tipo-pintor', name: 'Escada Extensiva e Tipo Pintor', query: 'aluminum extension ladder white background' },
  { slug: 'talha-manual-de-corrente-de-0-5-a-3-t', name: 'Talha Manual de Corrente de 0,5 a 3 t', query: 'chain block hoist white background' },
  { slug: 'piso-metalico', name: 'Piso Metálico', query: 'steel scaffolding plank platform' },
  { slug: 'guarda-corpo', name: 'Guarda Corpo', query: 'scaffolding guard rail safety' },
  { slug: 'sapata-ajustavel', name: 'Sapata Ajustável', query: 'scaffolding screw jack base' },
  { slug: 'rodizio-de-borracha', name: 'Rodízio de Borracha', query: 'scaffolding caster wheel brake' },
  { slug: 'diagonal-para-andaime', name: 'Diagonal para Andaime', query: 'scaffolding diagonal brace steel' },
  { slug: 'escada-para-andaime', name: 'Escada para Andaime', query: 'scaffolding access ladder steel' },
  { slug: 'andaime-tubular', name: 'Andaime Tubular', query: 'steel frame scaffolding tower' },

  // Concretagem e Compactação
  { slug: 'regua-vibratoria', name: 'Régua Vibratória', query: 'vibratory concrete screed' },
  { slug: 'acabadora-de-superficie', name: 'Acabadora de Superfície', query: 'concrete power trowel finisher' },
  { slug: 'placa-reversivel-cr5', name: 'Placa Reversível CR5', query: 'reversible plate compactor heavy' },
  { slug: 'placa-vibratoria-pv-95', name: 'Placa Vibratória PV 95', query: 'vibratory plate compactor 90kg' },
  { slug: 'compactador-de-percussao', name: 'Compactador de Percussão', query: 'tamping rammer jumping jack' },
  { slug: 'vibrador-de-imersao-de-alta-frequencia', name: 'Vibrador de Imersão de Alta Frequência', query: 'concrete poker vibrator' },
  { slug: 'mangote-vibrador-de-imersao', name: 'Mangote Vibrador de Imersão', query: 'concrete vibrator flexible shaft hose' },
  { slug: 'motor-de-acionamento-gasolina-diesel', name: 'Motor de Acionamento Gasolina/Diesel', query: 'small gasoline engine honda' },
  { slug: 'motor-de-acionamento-eletrico', name: 'Motor de Acionamento Elétrico', query: 'electric motor drive unit' },
  { slug: 'betoneira-400l-diesel', name: 'Betoneira 400L Diesel', query: 'diesel concrete mixer heavy' },
  { slug: 'betoneira-400l-eletrica', name: 'Betoneira 400L Elétrica', query: 'electric concrete mixer yellow' },

  // Ferramentas Elétricas
  { slug: 'maquina-de-solda-de-250-amp', name: 'Máquina de Solda de 250 amp', query: 'inverter arc welder 250a' },
  { slug: 'transformador-de-energia-110-220v', name: 'Transformador de Energia 110/220V', query: 'auto transformer power unit' },
  { slug: 'plaina', name: 'Plaina', query: 'electric wood planer tool' },
  { slug: 'retificadeira', name: 'Retificadeira', query: 'straight die grinder tool' },
  { slug: 'lixadeira-angular-de-7', name: 'Lixadeira Angular de 7"', query: 'angle sander power tool' },
  { slug: 'esmerilhadeira-angular-de-7', name: 'Esmerilhadeira Angular de 7"', query: '7 inch angle grinder bosch' },
  { slug: 'esmerilhadeira-angular-de-4-1-2', name: 'Esmerilhadeira Angular de 4"½', query: 'compact angle grinder makita' },

  // Furação / Corte / Demolição
  { slug: 'martelo-demolidor-de-30-kg', name: 'Martelo Demolidor de 30 kg', query: '30kg jackhammer demolition breaker' },
  { slug: 'martelo-demolidor-de-19-kg', name: 'Martelo Demolidor de 19 kg', query: 'demolition hammer breaker bosch' },
  { slug: 'martelo-demolidor-de-15-kg', name: 'Martelo Demolidor de 15 kg', query: 'concrete demolition breaker hammer' },
  { slug: 'martelo-rompedor-de-10-kg', name: 'Martelo Rompedor de 10 kg', query: 'sds max breaker hammer 10kg' },
  { slug: 'martelo-rompedor-de-5-kg', name: 'Martelo Rompedor de 5 kg', query: 'sds max chipping hammer 5kg' },
  { slug: 'serra-p-piso', name: 'Serra p/ Piso', query: 'walk behind concrete floor saw' },
  { slug: 'policorte', name: 'Policorte', query: 'metal cut off chop saw bench' },
  { slug: 'cortadora-de-metais', name: 'Cortadora de Metais', query: 'metal cut off saw tool' },
  { slug: 'serra-circular-manual-de-9', name: 'Serra Circular Manual de 9"', query: 'circular saw 9 inch makita' },
  { slug: 'serra-circular-manual-de-7', name: 'Serra Circular Manual de 7"', query: 'circular saw 7 inch dewalt' },
  { slug: 'serra-marmore-makitao', name: 'Serra Mármore "Makitão"', query: '7 inch masonry marble saw' },
  { slug: 'serra-marmore', name: 'Serra Mármore', query: 'compact marble tile saw makita' },
  { slug: 'finca-pinos', name: 'Finca Pinos', query: 'powder actuated fastening tool' },
  { slug: 'martelete-perfurador-sds-plus', name: 'Martelete Perfurador SDS Plus', query: 'sds plus rotary hammer drill bosch' },
  { slug: 'furadeira-de-impacto-5-8', name: 'Furadeira de Impacto 5/8"', query: 'heavy impact drill 5/8 inch' },
  { slug: 'furadeira-de-impacto-1-2', name: 'Furadeira de Impacto ½"', query: 'impact drill 1/2 inch' },

  // Geradores / Bombas / Compressores
  { slug: 'compressor-de-ar-pequeno-e-medio-porte', name: 'Compressor de Ar (Pequeno e Médio Porte)', query: 'air compressor tank blue' },
  { slug: 'lavadora-de-alta-pressao', name: 'Lavadora de Alta Pressão', query: 'commercial high pressure washer karcher' },
  { slug: 'motobomba', name: 'Motobomba', query: 'gasoline engine trash water pump' },
  { slug: 'bomba-submersivel-de-2-esgotamento', name: 'Bomba Submersível de 2" (esgotamento)', query: 'heavy submersible sludge trash pump' },
  { slug: 'bomba-submersivel-de-2-drenagem', name: 'Bomba Submersível de 2" (drenagem)', query: 'submersible clean water drainage pump' },
  { slug: 'bomba-submersivel-de-mangote', name: 'Bomba Submersível de Mangote', query: 'flexible shaft submersible pump' },
  { slug: 'gerador-de-energia-a-diesel', name: 'Gerador de Energia a Diesel', query: 'diesel power generator silent' },
  { slug: 'gerador-de-energia-a-gasolina', name: 'Gerador de Energia a Gasolina', query: 'portable gasoline generator' }
];

console.log(`Total products to fetch: ${products.length}`);
