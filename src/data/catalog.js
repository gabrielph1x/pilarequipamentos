/**
 * CATÁLOGO DE PRODUTOS E CATEGORIAS DA PILAR EQUIPAMENTOS
 * Mapeamento 100% atualizado com 6 categorias oficiais e 56 produtos técnicos.
 */

export const categoriaBackgrounds = {
  "ferramentas-eletricas": "/images/categorias/ferramentaeletricapilar.webp",
  "andaimes-elevacao": "/images/categorias/andaimepilar.webp",
  "concretagem-compactacao": "/images/categorias/concretagempilar.webp",
  "corte-demolicao": "/images/categorias/cortedemolicaopilar.webp",
  "furacao-corte-demolicao": "/images/categorias/cortedemolicaopilar.webp",
  "geradores-bombas": "/images/categorias/geradorespilar.webp",
  "geradores-bombas-compressores": "/images/categorias/geradorespilar.webp",
  "acessorios": "/images/categorias/acessoriospilar.webp",
};

export const categoriaHomeBackgrounds = {
  "ferramentas-eletricas": "/images/categorias/ferramentaeletricapilarh.webp",
  "andaimes-elevacao": "/images/categorias/andaimepilarh.webp",
  "concretagem-compactacao": "/images/categorias/concretagempilarh.webp",
  "corte-demolicao": "/images/categorias/cortedemolicaopilarh.webp",
  "furacao-corte-demolicao": "/images/categorias/cortedemolicaopilarh.webp",
  "geradores-bombas": "/images/categorias/geradorespilarh.webp",
  "geradores-bombas-compressores": "/images/categorias/geradorespilarh.webp",
  "acessorios": "/images/categorias/acessoriospilarh.webp",
};

export const CATEGORIES = [
  {
    id: "acessorios",
    slug: "acessorios",
    title: "Acessórios",
    shortTitle: "Acessórios",
    iconName: "Wrench",
    description: "Lâminas, discos diamantados, brocas de alto rendimento e complementos de segurança para a sua obra.",
    bannerImage: categoriaBackgrounds["acessorios"]
  },
  {
    id: "andaimes-elevacao",
    slug: "andaimes-elevacao",
    title: "Andaimes / Elevação",
    shortTitle: "Andaimes & Elevação",
    iconName: "Layers",
    description: "Guinchos de coluna, escadas extensivas e tipo pintor, talhas manuais de corrente, pisos metálicos, guarda-corpos, sapatas ajustáveis, rodízios, diagonais e andaimes tubulares.",
    bannerImage: categoriaBackgrounds["andaimes-elevacao"]
  },
  {
    id: "concretagem-compactacao",
    slug: "concretagem-compactacao",
    title: "Concretagem e Compactação",
    shortTitle: "Concretagem & Compactação",
    iconName: "Maximize2",
    description: "Réguas vibratórias, acabadoras de superfície, placas reversíveis e vibratórias, compactadores de percussão, vibradores de imersão, mangotes, motores de acionamento e betoneiras 400L.",
    bannerImage: categoriaBackgrounds["concretagem-compactacao"]
  },
  {
    id: "ferramentas-eletricas",
    slug: "ferramentas-eletricas",
    title: "Ferramentas Elétricas",
    shortTitle: "Ferramentas Elétricas",
    iconName: "Zap",
    description: "Máquinas de solda inversora 250A, autotransformadores de energia 110/220V, plainas elétricas, retificadeiras, lixadeiras angulares e esmerilhadeiras de 7\" e 4.1/2\".",
    bannerImage: categoriaBackgrounds["ferramentas-eletricas"]
  },
  {
    id: "furacao-corte-demolicao",
    slug: "furacao-corte-demolicao",
    title: "Furação / Corte / Demolição",
    shortTitle: "Corte & Demolição",
    iconName: "Hammer",
    description: "Martelos demolidores de 30kg, 19kg e 15kg, martelos rompedores de 10kg e 5kg, serras para piso, policortes, cortadoras de metais, serras circulares, serras mármore, finca pinos, marteletes SDS e furadeiras de impacto.",
    bannerImage: categoriaBackgrounds["furacao-corte-demolicao"]
  },
  {
    id: "geradores-bombas-compressores",
    slug: "geradores-bombas-compressores",
    title: "Geradores / Bombas / Compressores",
    shortTitle: "Geradores & Bombas",
    iconName: "Cpu",
    description: "Compressores de ar, lavadoras de alta pressão, motobombas a combustão, bombas submersíveis de 2\" para esgotamento e drenagem, bombas de mangote e geradores a diesel e gasolina.",
    bannerImage: categoriaBackgrounds["geradores-bombas-compressores"]
  }
];

export const PRODUCTS = [
  // ==========================================
  // CATEGORIA 1 — ACESSÓRIOS
  // ==========================================
  {
    id: "serra-de-videa-para-madeira",
    slug: "serra-de-videa-para-madeira",
    name: "Serra de Vídea para Madeira",
    categorySlug: "acessorios",
    categoryName: "Acessórios",
    featured: false,
    tag: "Corte de Madeira",
    shortDescription: "Serra de Vídea para Madeira.",
    description: "Serra de Vídea para Madeira.",
    imageUrl: "/images/products/serra-de-videa-para-madeira.jpg",
    specs: {}
  },
  {
    id: "discos-para-serra-marmore-e-makitao",
    slug: "discos-para-serra-marmore-e-makitao",
    name: "Discos para Serra Mármore e Makitão",
    categorySlug: "acessorios",
    categoryName: "Acessórios",
    featured: false,
    tag: "Diamantado",
    shortDescription: "Discos para Serra Mármore e Makitão.",
    description: "Discos para Serra Mármore e Makitão.",
    imageUrl: "/images/products/discos-para-serra-marmore-e-makitao.jpg",
    specs: {}
  },
  {
    id: "discos-para-serra-cliper",
    slug: "discos-para-serra-cliper",
    name: "Discos para Serra Cliper",
    categorySlug: "acessorios",
    categoryName: "Acessórios",
    featured: false,
    tag: "Corte Pesado",
    shortDescription: "Discos para Serra Cliper.",
    description: "Discos para Serra Cliper.",
    imageUrl: "/images/products/discos-para-serra-cliper.jpg",
    specs: {}
  },
  {
    id: "brocas-sds-plus",
    slug: "brocas-sds-plus",
    name: "Brocas SDS Plus",
    categorySlug: "acessorios",
    categoryName: "Acessórios",
    featured: false,
    tag: "Perfuração",
    shortDescription: "Brocas SDS Plus.",
    description: "Brocas SDS Plus.",
    imageUrl: "/images/products/brocas-sds-plus.jpg",
    specs: {}
  },

  // ==========================================
  // CATEGORIA 2 — ANDAIMES / ELEVAÇÃO
  // ==========================================
  {
    id: "guincho-de-coluna",
    slug: "guincho-de-coluna",
    name: "Guincho de Coluna",
    categorySlug: "andaimes-elevacao",
    categoryName: "Andaimes / Elevação",
    featured: true,
    tag: "Mais Alugado",
    shortDescription: "Indicado para elevação de materiais em obras, com velocidade de elevação ideal para agilizar o trabalho.",
    description: "Indicado para elevação de materiais em obras, com velocidade de elevação ideal para agilizar o trabalho.",
    imageUrl: "/images/products/guincho-de-coluna.jpg",
    specs: {
      "Capacidade de carga": "200 kg a 400 kg",
      "Comprimento do cabo de aço": "30m / 60m",
      "Voltagem": "220V / 380V Trifásico ou Monofásico"
    }
  },
  {
    id: "escada-extensiva-e-tipo-pintor",
    slug: "escada-extensiva-e-tipo-pintor",
    name: "Escada Extensiva e Tipo Pintor",
    categorySlug: "andaimes-elevacao",
    categoryName: "Andaimes / Elevação",
    featured: false,
    tag: "Trabalho em Altura",
    shortDescription: "Indicadas para trabalhos em altura, reformas, pinturas e manutenções gerais.",
    description: "Indicadas para trabalhos em altura, reformas, pinturas e manutenções gerais.",
    imageUrl: "/images/products/escada-extensiva-e-tipo-pintor.jpg",
    specs: {
      "Modelos": "Extensiva de fibra/alumínio e tipo pintor (A)",
      "Tamanhos disponíveis": "de 2,00m até 8,00m de alcance"
    }
  },
  {
    id: "talha-manual-de-corrente-de-0-5-a-3-t",
    slug: "talha-manual-de-corrente-de-0-5-a-3-t",
    name: "Talha Manual de Corrente de 0,5 a 3 t",
    categorySlug: "andaimes-elevacao",
    categoryName: "Andaimes / Elevação",
    featured: false,
    tag: "Içamento de Cargas",
    shortDescription: "Indicadas para içamento de cargas em obras, oficinas, frigoríficos, sítios — qualquer lugar onde seja necessária a elevação de objetos ou máquinas com segurança.",
    description: "Indicadas para içamento de cargas em obras, oficinas, frigoríficos, sítios — qualquer lugar onde seja necessária a elevação de objetos ou máquinas com segurança.",
    imageUrl: "/images/products/talha-manual-de-corrente-de-0-5-a-3-t.jpg",
    specs: {
      "Capacidade": "500 kg a 3000 kg",
      "Elevação máxima": "5m"
    }
  },
  {
    id: "piso-metalico",
    slug: "piso-metalico",
    name: "Piso Metálico",
    categorySlug: "andaimes-elevacao",
    categoryName: "Andaimes / Elevação",
    featured: false,
    tag: "Segurança NR-18",
    shortDescription: "Plataforma antiderrapante para estrutura de andaimes, garantindo segurança ao operador.",
    description: "Plataforma antiderrapante para estrutura de andaimes, garantindo segurança ao operador.",
    imageUrl: "/images/products/piso-metalico.jpg",
    specs: {
      "Dimensões": "1,00m, 1,50m e 2,00m",
      "Acabamento": "Galvanizado/Pintado"
    }
  },
  {
    id: "guarda-corpo",
    slug: "guarda-corpo",
    name: "Guarda Corpo",
    categorySlug: "andaimes-elevacao",
    categoryName: "Andaimes / Elevação",
    featured: false,
    tag: "Proteção Periférica",
    shortDescription: "Item indispensável de segurança para montagem da última torre de andaime tubular.",
    description: "Item indispensável de segurança para montagem da última torre de andaime tubular.",
    imageUrl: "/images/products/guarda-corpo.jpg",
    specs: {
      "Encaixe": "Encaixe padrão para andaimes de 1,00m e 1,50m"
    }
  },
  {
    id: "sapata-ajustavel",
    slug: "sapata-ajustavel",
    name: "Sapata Ajustável",
    categorySlug: "andaimes-elevacao",
    categoryName: "Andaimes / Elevação",
    featured: false,
    tag: "Nivelamento",
    shortDescription: "Utilizada na base do andaime para nivelamento em terrenos irregulares.",
    description: "Utilizada na base do andaime para nivelamento em terrenos irregulares.",
    imageUrl: "/images/products/sapata-ajustavel.jpg",
    specs: {
      "Regulagem": "Regulagem de altura com rosca e manípulo reforçado"
    }
  },
  {
    id: "rodizio-de-borracha",
    slug: "rodizio-de-borracha",
    name: "Rodízio de Borracha",
    categorySlug: "andaimes-elevacao",
    categoryName: "Andaimes / Elevação",
    featured: false,
    tag: "Mobilidade",
    shortDescription: "Rodas com trava e revestimento em borracha/poliuretano para movimentação ágil e segura da torre de andaime.",
    description: "Rodas com trava e revestimento em borracha/poliuretano para movimentação ágil e segura da torre de andaime.",
    imageUrl: "/images/products/rodizio-de-borracha.jpg",
    specs: {}
  },
  {
    id: "diagonal-para-andaime",
    slug: "diagonal-para-andaime",
    name: "Diagonal para Andaime",
    categorySlug: "andaimes-elevacao",
    categoryName: "Andaimes / Elevação",
    featured: false,
    tag: "Travamento Structural",
    shortDescription: "Elemento estrutural indispensável para o travamento e estabilidade do painel de andaime tubular.",
    description: "Elemento estrutural indispensável para o travamento e estabilidade do painel de andaime tubular.",
    imageUrl: "/images/products/diagonal-para-andaime.jpg",
    specs: {}
  },
  {
    id: "escada-para-andaime",
    slug: "escada-para-andaime",
    name: "Escada para Andaime",
    categorySlug: "andaimes-elevacao",
    categoryName: "Andaimes / Elevação",
    featured: false,
    tag: "Acesso Interno",
    shortDescription: "Acessório de acesso seguro para os níveis superiores das torres de andaimes.",
    description: "Acessório de acesso seguro para os níveis superiores das torres de andaimes.",
    imageUrl: "/images/products/escada-para-andaime.jpg",
    specs: {}
  },
  {
    id: "andaime-tubular",
    slug: "andaime-tubular",
    name: "Andaime Tubular",
    categorySlug: "andaimes-elevacao",
    categoryName: "Andaimes / Elevação",
    featured: true,
    tag: "Destaque Obra",
    shortDescription: "Indicado para trabalhos em altura em edifícios, indústrias, reformas e manutenções gerais.",
    description: "Indicado para trabalhos em altura em edifícios, indústrias, reformas e manutenções gerais.",
    imageUrl: "/images/products/andaime-tubular.jpg",
    specs: {
      "Dimensões": "1,00m x 1,00m / 1,50m x 1,50m",
      "Estrutura": "Estrutura de aço tubular reforçado"
    }
  },

  // ==========================================
  // CATEGORIA 3 — CONCRETAGEM E COMPACTAÇÃO
  // ==========================================
  {
    id: "regua-vibratoria",
    slug: "regua-vibratoria",
    name: "Régua Vibratória",
    categorySlug: "concretagem-compactacao",
    categoryName: "Concretagem e Compactação",
    featured: false,
    tag: "Nivelamento de Concreto",
    shortDescription: "Indicada para adensamento e nivelamento de pisos de concreto.",
    description: "Indicada para adensamento e nivelamento de pisos de concreto.",
    imageUrl: "/images/products/regua-vibratoria.jpg",
    specs: {
      "Perfil": "Perfil de alumínio de 2,00m a 3,00m",
      "Motorização": "Motorização a gasolina 4 tempos"
    }
  },
  {
    id: "acabadora-de-superficie",
    slug: "acabadora-de-superficie",
    name: "Acabadora de Superfície",
    categorySlug: "concretagem-compactacao",
    categoryName: "Concretagem e Compactação",
    featured: false,
    tag: "Polimento de Pisos",
    shortDescription: "Indicada para acabamento e polimento em lajes e pisos de concreto.",
    description: "Indicada para acabamento e polimento em lajes e pisos de concreto.",
    imageUrl: "/images/products/acabadora-de-superficie.jpg",
    specs: {
      "Diâmetro de trabalho": "36\" (900 mm)",
      "Motorização": "gasolina 5,5 HP a 9,0 HP"
    }
  },
  {
    id: "placa-reversivel-cr5",
    slug: "placa-reversivel-cr5",
    name: "Placa Reversível CR5",
    categorySlug: "concretagem-compactacao",
    categoryName: "Concretagem e Compactação",
    featured: true,
    tag: "Compactação Pesada",
    shortDescription: "Indicada para compactação pesada de solos, valas, asfalto e pavimentos.",
    description: "Indicada para compactação pesada de solos, valas, asfalto e pavimentos.",
    imageUrl: "/images/products/placa-reversivel-cr5.jpg",
    specs: {
      "Força centrífuga": "Força centrífuga elevada com avanço e retrocesso hidráulico",
      "Motorização": "Motor Diesel / Gasolina"
    }
  },
  {
    id: "placa-vibratoria-pv-95",
    slug: "placa-vibratoria-pv-95",
    name: "Placa Vibratória PV 95",
    categorySlug: "concretagem-compactacao",
    categoryName: "Concretagem e Compactação",
    featured: false,
    tag: "Compactação",
    shortDescription: "Indicada para compactação de solos granulares, pavers, asfalto e pequenas áreas.",
    description: "Indicada para compactação de solos granulares, pavers, asfalto e pequenas áreas.",
    imageUrl: "/images/products/placa-vibratoria-pv-95.jpg",
    specs: {
      "Peso operacional": "90 kg a 95 kg",
      "Força centrífuga": "15 kN"
    }
  },
  {
    id: "compactador-de-percussao",
    slug: "compactador-de-percussao",
    name: "Compactador de Percussão",
    categorySlug: "concretagem-compactacao",
    categoryName: "Concretagem e Compactação",
    featured: true,
    tag: "Sapo de Percussão",
    shortDescription: "Indicado para compactação de solos coesivos (argila/terra) em valas de tubulação e fundações.",
    description: "Indicado para compactação de solos coesivos (argila/terra) em valas de tubulação e fundações.",
    imageUrl: "/images/products/compactador-de-percussao.jpg",
    specs: {
      "Força de impacto": "13 a 14 kN",
      "Motorização": "Motor a gasolina 4 tempos"
    }
  },
  {
    id: "vibrador-de-imersao-de-alta-frequencia",
    slug: "vibrador-de-imersao-de-alta-frequencia",
    name: "Vibrador de Imersão de Alta Frequência",
    categorySlug: "concretagem-compactacao",
    categoryName: "Concretagem e Compactação",
    featured: false,
    tag: "Adensamento",
    shortDescription: "Indicado para eliminação de bolhas de ar e perfeito adensamento do concreto em colunas e vigas.",
    description: "Indicado para eliminação de bolhas de ar e perfeito adensamento do concreto em colunas e vigas.",
    imageUrl: "/images/products/vibrador-de-imersao-de-alta-frequencia.jpg",
    specs: {
      "Conversor": "Conversor eletrônico integrado"
    }
  },
  {
    id: "mangote-vibrador-de-imersao",
    slug: "mangote-vibrador-de-imersao",
    name: "Mangote Vibrador de Imersão",
    categorySlug: "concretagem-compactacao",
    categoryName: "Concretagem e Compactação",
    featured: false,
    tag: "Acessório Vibrador",
    shortDescription: "Acessório acoplado aos motores elétricos/combustão para adensamento de concreto.",
    description: "Acessório acoplado aos motores elétricos/combustão para adensamento de concreto.",
    imageUrl: "/images/products/mangote-vibrador-de-imersao.jpg",
    specs: {
      "Diâmetros da garrafa": "25mm, 35mm, 45mm e 60mm",
      "Comprimento": "5 metros"
    }
  },
  {
    id: "motor-de-acionamento-gasolina-diesel",
    slug: "motor-de-acionamento-gasolina-diesel",
    name: "Motor de Acionamento Gasolina/Diesel",
    categorySlug: "concretagem-compactacao",
    categoryName: "Concretagem e Compactação",
    featured: false,
    tag: "Unidade Motriz",
    shortDescription: "Unidade motriz estacionária a combustão para acionamento de bombas e mangotes vibradores.",
    description: "Unidade motriz estacionária a combustão para acionamento de bombas e mangotes vibradores.",
    imageUrl: "/images/products/motor-de-acionamento-gasolina-diesel.jpg",
    specs: {
      "Potência": "5,5 HP a 6,5 HP"
    }
  },
  {
    id: "motor-de-acionamento-eletrico",
    slug: "motor-de-acionamento-eletrico",
    name: "Motor de Acionamento Elétrico",
    categorySlug: "concretagem-compactacao",
    categoryName: "Concretagem e Compactação",
    featured: false,
    tag: "Unidade Elétrica",
    shortDescription: "Motor portátil monofásico/trifásico com carcaça de proteção para mangotes vibradores.",
    description: "Motor portátil monofásico/trifásico com carcaça de proteção para mangotes vibradores.",
    imageUrl: "/images/products/motor-de-acionamento-eletrico.jpg",
    specs: {
      "Potência": "1,5 a 2,0 CV"
    }
  },
  {
    id: "betoneira-400l-diesel",
    slug: "betoneira-400l-diesel",
    name: "Betoneira 400L Diesel",
    categorySlug: "concretagem-compactacao",
    categoryName: "Concretagem e Compactação",
    featured: true,
    tag: "Alta Capacidade",
    shortDescription: "Misturador de concreto de alta capacidade para obras sem ponto de energia elétrica.",
    description: "Misturador de concreto de alta capacidade para obras sem ponto de energia elétrica.",
    imageUrl: "/images/products/betoneira-400l-diesel.jpg",
    specs: {
      "Capacidade do tambor": "400L",
      "Capacidade de mistura": "310L",
      "Motorização": "Motor Diesel reforçado"
    }
  },
  {
    id: "betoneira-400l-eletrica",
    slug: "betoneira-400l-eletrica",
    name: "Betoneira 400L Elétrica",
    categorySlug: "concretagem-compactacao",
    categoryName: "Concretagem e Compactação",
    featured: true,
    tag: "Mais Alugado",
    shortDescription: "Indicada para preparo de concreto e argamassa em obras de grande e médio porte.",
    description: "Indicada para preparo de concreto e argamassa em obras de grande e médio porte.",
    imageUrl: "/images/products/betoneira-400l-eletrica.jpg",
    specs: {
      "Capacidade do tambor": "400L",
      "Capacidade de mistura": "310L",
      "Motorização": "Motor elétrico monofásico/trifásico"
    }
  },

  // ==========================================
  // CATEGORIA 4 — FERRAMENTAS ELÉTRICAS
  // ==========================================
  {
    id: "maquina-de-solda-de-250-amp",
    slug: "maquina-de-solda-de-250-amp",
    name: "Máquina de Solda de 250 amp",
    categorySlug: "ferramentas-eletricas",
    categoryName: "Ferramentas Elétricas",
    featured: true,
    tag: "Inversora Portátil",
    shortDescription: "Inversora de solda portátil de alta eficiência para eletrodo revestido.",
    description: "Inversora de solda portátil de alta eficiência para eletrodo revestido.",
    imageUrl: "/images/products/maquina-de-solda-de-250-amp.jpg",
    specs: {
      "Corrente de saída": "até 250A",
      "Tensão": "220V Monofásico/Bifásico"
    }
  },
  {
    id: "transformador-de-energia-110-220v",
    slug: "transformador-de-energia-110-220v",
    name: "Transformador de Energia 110/220V",
    categorySlug: "ferramentas-eletricas",
    categoryName: "Ferramentas Elétricas",
    featured: false,
    tag: "Autotransformador",
    shortDescription: "Autotransformador para conversão de voltagem no canteiro de obras.",
    description: "Autotransformador para conversão de voltagem no canteiro de obras.",
    imageUrl: "/images/products/transformador-de-energia-110-220v.jpg",
    specs: {
      "Potências": "3000 a 10000 VA"
    }
  },
  {
    id: "plaina",
    slug: "plaina",
    name: "Plaina",
    categorySlug: "ferramentas-eletricas",
    categoryName: "Ferramentas Elétricas",
    featured: false,
    tag: "Desbaste em Madeira",
    shortDescription: "Indicada para rebaixos, alisamento e desbaste em superfícies de madeira.",
    description: "Indicada para rebaixos, alisamento e desbaste em superfícies de madeira.",
    imageUrl: "/images/products/plaina.jpg",
    specs: {
      "Largura do corte": "82 mm",
      "Potência": "600W a 850W"
    }
  },
  {
    id: "retificadeira",
    slug: "retificadeira",
    name: "Retificadeira",
    categorySlug: "ferramentas-eletricas",
    categoryName: "Ferramentas Elétricas",
    featured: false,
    tag: "Usinagem Leve",
    shortDescription: "Indicada para acabamento interno de tubos, desbaste de solda e usinagem leve.",
    description: "Indicada para acabamento interno de tubos, desbaste de solda e usinagem leve.",
    imageUrl: "/images/products/retificadeira.jpg",
    specs: {
      "Pinça": "1/4\" (6 mm)",
      "Rotação": "Alta rotação"
    }
  },
  {
    id: "lixadeira-angular-de-7",
    slug: "lixadeira-angular-de-7",
    name: "Lixadeira Angular de 7\"",
    categorySlug: "ferramentas-eletricas",
    categoryName: "Ferramentas Elétricas",
    featured: false,
    tag: "Tratamento de Superfície",
    shortDescription: "Lixadeira industrial para tratamento de superfícies metálicas e remoção de tintas/ferrugem.",
    description: "Lixadeira industrial para tratamento de superfícies metálicas e remoção de tintas/ferrugem.",
    imageUrl: "/images/products/lixadeira-angular-de-7.jpg",
    specs: {
      "Disco": "7\" (180 mm)",
      "Potência": "2200W"
    }
  },
  {
    id: "esmerilhadeira-angular-de-7",
    slug: "esmerilhadeira-angular-de-7",
    name: "Esmerilhadeira Angular de 7\"",
    categorySlug: "ferramentas-eletricas",
    categoryName: "Ferramentas Elétricas",
    featured: true,
    tag: "Corte e Desbaste",
    shortDescription: "Ferramenta robusta para corte e desbaste de metais, concreto e pedras.",
    description: "Ferramenta robusta para corte e desbaste de metais, concreto e pedras.",
    imageUrl: "/images/products/esmerilhadeira-angular-de-7.jpg",
    specs: {
      "Diâmetro do disco": "7\" (180 mm)",
      "Potência": "2200W a 2600W"
    }
  },
  {
    id: "esmerilhadeira-angular-de-4-1-2",
    slug: "esmerilhadeira-angular-de-4-1-2",
    name: "Esmerilhadeira Angular de 4\"½",
    categorySlug: "ferramentas-eletricas",
    categoryName: "Ferramentas Elétricas",
    featured: false,
    tag: "Compacta e Leve",
    shortDescription: "Compacta e leve, ideal para cortes e acabamentos em locais de difícil acesso.",
    description: "Compacta e leve, ideal para cortes e acabamentos em locais de difícil acesso.",
    imageUrl: "/images/products/esmerilhadeira-angular-de-4-1-2.jpg",
    specs: {
      "Diâmetro do disco": "4.1/2\" (115 mm)",
      "Potência": "700W a 1000W"
    }
  },

  // ==========================================
  // CATEGORIA 5 — FURAÇÃO / CORTE / DEMOLIÇÃO
  // ==========================================
  {
    id: "martelo-demolidor-de-30-kg",
    slug: "martelo-demolidor-de-30-kg",
    name: "Martelo Demolidor de 30 kg",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: true,
    tag: "Extra Pesado",
    shortDescription: "Demolidor extra pesado para pisos de concreto espessos, fundações e pavimento asfáltico.",
    description: "Demolidor extra pesado para pisos de concreto espessos, fundações e pavimento asfáltico.",
    imageUrl: "/images/products/martelo-demolidor-de-30-kg.jpg",
    specs: {
      "Encaixe": "Encaixe hexagonal 28mm",
      "Energia de impacto": "60 a 70 Joules"
    }
  },
  {
    id: "martelo-demolidor-de-19-kg",
    slug: "martelo-demolidor-de-19-kg",
    name: "Martelo Demolidor de 19 kg",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: false,
    tag: "Demolição Estrutural",
    shortDescription: "Excelente relação peso/potência para demolição de sapatas, lajes e vigas de concreto.",
    description: "Excelente relação peso/potência para demolição de sapatas, lajes e vigas de concreto.",
    imageUrl: "/images/products/martelo-demolidor-de-19-kg.jpg",
    specs: {
      "Energia de impacto": "40 Joules"
    }
  },
  {
    id: "martelo-demolidor-de-15-kg",
    slug: "martelo-demolidor-de-15-kg",
    name: "Martelo Demolidor de 15 kg",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: false,
    tag: "Ruptura de Concreto",
    shortDescription: "Indicado para ruptura em estruturas de concreto, pilares e calçadas.",
    description: "Indicado para ruptura em estruturas de concreto, pilares e calçadas.",
    imageUrl: "/images/products/martelo-demolidor-de-15-kg.jpg",
    specs: {
      "Energia de impacto": "25 a 30 Joules"
    }
  },
  {
    id: "martelo-rompedor-de-10-kg",
    slug: "martelo-rompedor-de-10-kg",
    name: "Martelo Rompedor de 10 kg",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: false,
    tag: "SDS Max Versátil",
    shortDescription: "Rompedor versátil para trabalhos na vertical e na horizontal (paredes e pisos).",
    description: "Rompedor versátil para trabalhos na vertical e na horizontal (paredes e pisos).",
    imageUrl: "/images/products/martelo-rompedor-de-10-kg.jpg",
    specs: {
      "Encaixe": "Encaixe SDS Max"
    }
  },
  {
    id: "martelo-rompedor-de-5-kg",
    slug: "martelo-rompedor-de-5-kg",
    name: "Martelo Rompedor de 5 kg",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: false,
    tag: "Remoção e Aberturas",
    shortDescription: "Ideal para remoção de reboco, azulejos, canaletas em paredes de alvenaria e aberturas em geral.",
    description: "Ideal para remoção de reboco, azulejos, canaletas em paredes de alvenaria e aberturas em geral.",
    imageUrl: "/images/products/martelo-rompedor-de-5-kg.jpg",
    specs: {
      "Encaixe": "Encaixe SDS Max"
    }
  },
  {
    id: "serra-p-piso",
    slug: "serra-p-piso",
    name: "Serra p/ Piso",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: true,
    tag: "Cortadora de Piso",
    shortDescription: "Cortadora de piso e asfalto com reservatório de água acoplado.",
    description: "Cortadora de piso e asfalto com reservatório de água acoplado.",
    imageUrl: "/images/products/serra-p-piso.jpg",
    specs: {
      "Profundidade de corte": "até 15 cm",
      "Motorização": "Motor a gasolina 13 HP"
    }
  },
  {
    id: "policorte",
    slug: "policorte",
    name: "Policorte",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: false,
    tag: "Serra de Bancada",
    shortDescription: "Serra de bancada para corte reto e angular de perfis metálicos, vergalhões e tubos.",
    description: "Serra de bancada para corte reto e angular de perfis metálicos, vergalhões e tubos.",
    imageUrl: "/images/products/policorte.jpg",
    specs: {
      "Disco de corte": "12\" ou 14\""
    }
  },
  {
    id: "cortadora-de-metais",
    slug: "cortadora-de-metais",
    name: "Cortadora de Metais",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: false,
    tag: "Corte de Barras",
    shortDescription: "Cortadora portátil tipo morsa para rápido corte de barras metálicas no canteiro de obras.",
    description: "Cortadora portátil tipo morsa para rápido corte de barras metálicas no canteiro de obras.",
    imageUrl: "/images/products/cortadora-de-metais.jpg",
    specs: {}
  },
  {
    id: "serra-circular-manual-de-9",
    slug: "serra-circular-manual-de-9",
    name: "Serra Circular Manual de 9\"",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: false,
    tag: "Madeira Pesada",
    shortDescription: "Serra de alta capacidade para corte de caixarias, tábuas e vigas pesadas de madeira.",
    description: "Serra de alta capacidade para corte de caixarias, tábuas e vigas pesadas de madeira.",
    imageUrl: "/images/products/serra-circular-manual-de-9.jpg",
    specs: {
      "Disco": "Disco de 235 mm (9.1/4\")"
    }
  },
  {
    id: "serra-circular-manual-de-7",
    slug: "serra-circular-manual-de-7",
    name: "Serra Circular Manual de 7\"",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: false,
    tag: "Corte Preciso",
    shortDescription: "Serra portátil para cortes precisos em compensados, tábuas de caixaria e fôrmas de madeira.",
    description: "Serra portátil para cortes precisos em compensados, tábuas de caixaria e fôrmas de madeira.",
    imageUrl: "/images/products/serra-circular-manual-de-7.jpg",
    specs: {
      "Disco": "Disco de 185 mm (7.1/4\")"
    }
  },
  {
    id: "serra-marmore-makitao",
    slug: "serra-marmore-makitao",
    name: "Serra Mármore \"Makitão\"",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: false,
    tag: "Grande Porte",
    shortDescription: "Serra de maior porte para cortes profundos em alvenaria, tijolos e pedras.",
    description: "Serra de maior porte para cortes profundos em alvenaria, tijolos e pedras.",
    imageUrl: "/images/products/serra-marmore-makitao.jpg",
    specs: {
      "Disco": "Disco de 7\" (180 mm)"
    }
  },
  {
    id: "serra-marmore",
    slug: "serra-marmore",
    name: "Serra Mármore",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: false,
    tag: "Cerâmica e Mármore",
    shortDescription: "Ferramenta compacta para corte de cerâmicas, azulejos, mármores e telhas.",
    description: "Ferramenta compacta para corte de cerâmicas, azulejos, mármores e telhas.",
    imageUrl: "/images/products/serra-marmore.jpg",
    specs: {
      "Disco": "Disco de 110 mm (4.3/8\")"
    }
  },
  {
    id: "finca-pinos",
    slug: "finca-pinos",
    name: "Finca Pinos",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: false,
    tag: "Fixação a Pólvora",
    shortDescription: "Ferramenta acionada a pólvora para fixação rápida de pinos em aço e concreto.",
    description: "Ferramenta acionada a pólvora para fixação rápida de pinos em aço e concreto.",
    imageUrl: "/images/products/finca-pinos.jpg",
    specs: {}
  },
  {
    id: "martelete-perfurador-sds-plus",
    slug: "martelete-perfurador-sds-plus",
    name: "Martelete Perfurador SDS Plus",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: true,
    tag: "Perfurador Multiuso",
    shortDescription: "Indicado para perfuração de vários tipos de materiais como concreto, cerâmica, madeira, plástico etc.",
    description: "Indicado para perfuração de vários tipos de materiais como concreto, cerâmica, madeira, plástico etc.",
    imageUrl: "/images/products/martelete-perfurador-sds-plus.jpg",
    specs: {
      "Potência": "900 W",
      "Rotações": "645 a 1400 RPM",
      "Peso": "4,1 kg",
      "Máx. Ø de perfuração em concreto": "30/20 mm",
      "Máx. Ø de perfuração em madeira": "50/30 mm",
      "Máx. Ø de perfuração em aço": "16/10 mm"
    }
  },
  {
    id: "furadeira-de-impacto-5-8",
    slug: "furadeira-de-impacto-5-8",
    name: "Furadeira de Impacto 5/8\"",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: false,
    tag: "Trabalhos Pesados",
    shortDescription: "Furadeira para trabalhos pesados de furação em alvenaria, metal e madeira.",
    description: "Furadeira para trabalhos pesados de furação em alvenaria, metal e madeira.",
    imageUrl: "/images/products/furadeira-de-impacto-5-8.jpg",
    specs: {
      "Mandril": "Mandril de 16 mm (5/8\")"
    }
  },
  {
    id: "furadeira-de-impacto-1-2",
    slug: "furadeira-de-impacto-1-2",
    name: "Furadeira de Impacto ½\"",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: false,
    tag: "Intermediária",
    shortDescription: "Ferramenta elétrica indispensável para furações de diâmetro intermediário no canteiro.",
    description: "Ferramenta elétrica indispensável para furações de diâmetro intermediário no canteiro.",
    imageUrl: "/images/products/furadeira-de-impacto-1-2.jpg",
    specs: {
      "Mandril": "Mandril de 13 mm (1/2\")"
    }
  },

  // ==========================================
  // CATEGORIA 6 — GERADORES / BOMBAS / COMPRESSORES
  // ==========================================
  {
    id: "compressor-de-ar-pequeno-e-medio-porte",
    slug: "compressor-de-ar-pequeno-e-medio-porte",
    name: "Compressor de Ar (Pequeno e Médio Porte)",
    categorySlug: "geradores-bombas-compressores",
    categoryName: "Geradores / Bombas / Compressores",
    featured: false,
    tag: "Ar Comprimido",
    shortDescription: "Fornecimento de ar comprimido para pintura, limpeza de fôrmas, acionamento de ferramentas pneumáticas.",
    description: "Fornecimento de ar comprimido para pintura, limpeza de fôrmas, acionamento de ferramentas pneumáticas.",
    imageUrl: "/images/products/compressor-de-ar-pequeno-e-medio-porte.jpg",
    specs: {
      "Reservatório": "24L, 50L e 100L"
    }
  },
  {
    id: "lavadora-de-alta-pressao",
    slug: "lavadora-de-alta-pressao",
    name: "Lavadora de Alta Pressão",
    categorySlug: "geradores-bombas-compressores",
    categoryName: "Geradores / Bombas / Compressores",
    featured: false,
    tag: "Lavagem Industrial",
    shortDescription: "Indicada para lavagem industrial de veículos, fachada, máquinas de obra e pisos.",
    description: "Indicada para lavagem industrial de veículos, fachada, máquinas de obra e pisos.",
    imageUrl: "/images/products/lavadora-de-alta-pressao.jpg",
    specs: {
      "Pressão": "1600 a 2400 PSI"
    }
  },
  {
    id: "motobomba",
    slug: "motobomba",
    name: "Motobomba",
    categorySlug: "geradores-bombas-compressores",
    categoryName: "Geradores / Bombas / Compressores",
    featured: false,
    tag: "Autoescorvante",
    shortDescription: "Bomba autoescorvante acionada por motor a combustão para transferência de água limpa ou turva.",
    description: "Bomba autoescorvante acionada por motor a combustão para transferência de água limpa ou turva.",
    imageUrl: "/images/products/motobomba.jpg",
    specs: {
      "Diâmetro de sucção/recalque": "2\" ou 3\""
    }
  },
  {
    id: "bomba-submersivel-de-2-esgotamento",
    slug: "bomba-submersivel-de-2-esgotamento",
    name: "Bomba Submersível de 2\" (esgotamento)",
    categorySlug: "geradores-bombas-compressores",
    categoryName: "Geradores / Bombas / Compressores",
    featured: true,
    tag: "Com Resíduos",
    shortDescription: "Bomba para esgotamento de valas, poços e águas pluviais com resíduos em suspensão.",
    description: "Bomba para esgotamento de valas, poços e águas pluviais com resíduos em suspensão.",
    imageUrl: "/images/products/bomba-submersivel-de-2-esgotamento.jpg",
    specs: {
      "Saída": "2\"",
      "Alimentação elétrica": "Monofásica/Trifásica"
    }
  },
  {
    id: "bomba-submersivel-de-2-drenagem",
    slug: "bomba-submersivel-de-2-drenagem",
    name: "Bomba Submersível de 2\" (drenagem)",
    categorySlug: "geradores-bombas-compressores",
    categoryName: "Geradores / Bombas / Compressores",
    featured: false,
    tag: "Água Limpa/Turva",
    shortDescription: "Bomba para drenagem de água limpa e turva em escavações e subsolos.",
    description: "Bomba para drenagem de água limpa e turva em escavações e subsolos.",
    imageUrl: "/images/products/bomba-submersivel-de-2-drenagem.jpg",
    specs: {
      "Saída": "2\""
    }
  },
  {
    id: "bomba-submersivel-de-mangote",
    slug: "bomba-submersivel-de-mangote",
    name: "Bomba Submersível de Mangote",
    categorySlug: "geradores-bombas-compressores",
    categoryName: "Geradores / Bombas / Compressores",
    featured: false,
    tag: "Mangote Flexível",
    shortDescription: "Acoplada ao motor a combustão/elétrico por mangote flexível para drenagens em locais sem energia.",
    description: "Acoplada ao motor a combustão/elétrico por mangote flexível para drenagens em locais sem energia.",
    imageUrl: "/images/products/bomba-submersivel-de-mangote.jpg",
    specs: {
      "Saída": "2\" ou 3\""
    }
  },
  {
    id: "gerador-de-energia-a-diesel",
    slug: "gerador-de-energia-a-diesel",
    name: "Gerador de Energia a Diesel",
    categorySlug: "geradores-bombas-compressores",
    categoryName: "Geradores / Bombas / Compressores",
    featured: true,
    tag: "Alta Durabilidade",
    shortDescription: "Gerador de alta durabilidade e economia para alimentação contínua de canteiros de obra.",
    description: "Gerador de alta durabilidade e economia para alimentação contínua de canteiros de obra.",
    imageUrl: "/images/products/gerador-de-energia-a-diesel.jpg",
    specs: {
      "Potência": "5 a 15 KVA"
    }
  },
  {
    id: "gerador-de-energia-a-gasolina",
    slug: "gerador-de-energia-a-gasolina",
    name: "Gerador de Energia a Gasolina",
    categorySlug: "geradores-bombas-compressores",
    categoryName: "Geradores / Bombas / Compressores",
    featured: true,
    tag: "Autonomia Operacional",
    shortDescription: "Indicado para fornecimento de energia para equipamentos e ferramentas elétricas de pequeno porte.",
    description: "Indicado para fornecimento de energia para equipamentos e ferramentas elétricas de pequeno porte.",
    imageUrl: "/images/products/gerador-de-energia-a-gasolina.jpg",
    specs: {
      "Tensão": "Monofásico",
      "Voltagem de saída": "110/220 V",
      "Potência": "4 a 8,5 KVA / 3000 a 6500 W",
      "Potência do motor": "6,5 a 15 cv",
      "Partida": "Manual e Elétrica",
      "Consumo aprox.": "2 l/h"
    }
  }
];
