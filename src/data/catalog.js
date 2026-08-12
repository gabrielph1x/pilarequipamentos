/**
 * CATÁLOGO DE PRODUTOS E CATEGORIAS DA PILAR EQUIPAMENTOS
 * Garantindo UTF-8 perfeito em todos os nomes e descrições técnicas.
 */

export const CATEGORIES = [
  {
    id: "acessorios",
    slug: "acessorios",
    title: "Acessórios",
    shortTitle: "Acessórios",
    iconName: "Wrench",
    description: "Lâminas, discos diamantados, brocas de alto rendimento e complementos de segurança para a sua obra.",
    bannerImage: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "andaimes-elevacao",
    slug: "andaimes-elevacao",
    title: "Andaimes / Elevação",
    shortTitle: "Andaimes & Elevação",
    iconName: "Layers",
    description: "Estruturas modulares, guinchos de coluna, escadas de alumínio, sapatas ajustáveis e acessórios de segurança para trabalho em altura.",
    bannerImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "concretagem-compactacao",
    slug: "concretagem-compactacao",
    title: "Concretagem e Compactação",
    shortTitle: "Concretagem & Compactação",
    iconName: "Maximize2",
    description: "Betoneiras profissionais, vibradores de imersão, compactadores de solo (sapo) e placas vibratórias para adensamento de solo e concreto.",
    bannerImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "ferramentas-eletricas",
    slug: "ferramentas-eletricas",
    title: "Ferramentas Elétricas",
    shortTitle: "Ferramentas Elétricas",
    iconName: "Zap",
    description: "Máquinas de solda, transformadores de voltagem, plainas, retificadeiras, politrizes e serras de alta performance.",
    bannerImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "furacao-corte-demolicao",
    slug: "furacao-corte-demolicao",
    title: "Furação / Corte / Demolição",
    shortTitle: "Corte & Demolição",
    iconName: "Hammer",
    description: "Martelos rompedores e demolidores de 5kg a 30kg, cortadoras de piso de concreto e perfuratrizes de alta precisão.",
    bannerImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "geradores-bombas-compressores",
    slug: "geradores-bombas-compressores",
    title: "Geradores / Bombas / Compressores",
    shortTitle: "Geradores & Bombas",
    iconName: "Cpu",
    description: "Grupo geradores de energia a gasolina/diesel, motobombas submersíveis de drenagem e compressores industriais.",
    bannerImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
  }
];

export const PRODUCTS = [
  // --- ANDAIMES / ELEVAÇÃO ---
  {
    id: "guincho-de-coluna-350kg",
    slug: "guincho-de-coluna-350kg",
    name: "Guincho de Coluna 350kg",
    categorySlug: "andaimes-elevacao",
    categoryName: "Andaimes / Elevação",
    featured: true,
    tag: "Mais Alugado",
    shortDescription: "Ideal para elevação vertical rápida e segura de suprimentos, argamassa e materiais na obra.",
    description: "O Guincho de Coluna de 350kg é indispensável para elevar materiais de construção civil com segurança e agilidade em edificações de múltiplos pavimentos. Equipado com freio eletromagnético de segurança e cabo de aço galvanizado de alta resistência.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Capacidade de Carga": "350 kg",
      "Velocidade de Elevação": "25 metros por minuto",
      "Comprimento do Cabo": "30 metros (aço especial)",
      "Motor Elétrico": "1.25 CV / Monofásico ou Trifásico",
      "Tensão de Alimentação": "220V ou 380V",
      "Sistema de Segurança": "Freio automático de emergência e fim de curso"
    }
  },
  {
    id: "andaime-tubular-1m-x-1-5m",
    slug: "andaime-tubular-1m-x-1-5m",
    name: "Andaime Tubular Modulado 1,0m x 1,5m",
    categorySlug: "andaimes-elevacao",
    categoryName: "Andaimes / Elevação",
    featured: true,
    tag: "Destaque Obra",
    shortDescription: "Painéis de andaime em aço galvanizado ultra resistente, fáceis de montar e extremamente estáveis.",
    description: "Painel de andaime tubular fabricado sob as diretrizes da norma NR-18. Sistema de encaixe preciso sem necessidade de ferramentas especiais, garantindo rápida montagem de torres de trabalho para fachadas, reformas e instalações.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Dimensão do Painel": "1,00m (altura) x 1,50m (largura)",
      "Diâmetro do Tubo": "42,20 mm x 2,65 mm de espessura",
      "Material": "Aço carbono galvanizado de alta resistência",
      "Capacidade de Carga Certa": "até 2.000 kg por torre",
      "Norma Técnica": "Atende NR-18 / ABNT NBR 6494"
    }
  },
  {
    id: "escada-extensiva-aluminio",
    slug: "escada-extensiva-aluminio",
    name: "Escada Extensiva e Tipo Pintor em Alumínio",
    categorySlug: "andaimes-elevacao",
    categoryName: "Andaimes / Elevação",
    featured: false,
    tag: "Versátil",
    shortDescription: "Escada em liga de alumínio leve e robusta com travamento de segurança e degraus antiderrapantes.",
    description: "Escada multifuncional extensível e duplo acesso tipo pintor. Oferece extrema estabilidade em trabalhos de acabamento, pintura, instalações elétricas e manutenção predial.",
    imageUrl: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Alcance Máximo": "Até 7,80 metros (extensível)",
      "Capacidade de Carga": "150 kg",
      "Material": "Liga de Alumínio Estrutural anticorrosivo",
      "Degraus": "Estriados e antiderrapantes com sapatas de borracha"
    }
  },
  {
    id: "talha-manual-corrente-2t",
    slug: "talha-manual-corrente-2t",
    name: "Talha Manual de Corrente 0,5t a 3t",
    categorySlug: "andaimes-elevacao",
    categoryName: "Andaimes / Elevação",
    featured: false,
    tag: "Alta Carga",
    shortDescription: "Equipamento compacto para içamento de estruturas pesadas, pilares e vigas com esforço reduzido.",
    description: "Talha manual com corrente em aço de alta durabilidade e engrenagens usinadas de precisão. Ideal para oficinas, montagens industriais e elevação de estruturas metálicas.",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Capacidade Nominal": "2.000 kg (modelos de 0,5t a 3t)",
      "Elevação Padrão": "3 metros de altura",
      "Material da Corrente": "Aço de liga grau 80 reforçado",
      "Ganchos": "Ganchos forjados com trava de segurança 360°"
    }
  },
  {
    id: "piso-metalico-andaime",
    slug: "piso-metalico-andaime",
    name: "Piso Metálico Antiderrapante para Andaime",
    categorySlug: "andaimes-elevacao",
    categoryName: "Andaimes / Elevação",
    featured: false,
    tag: "Segurança NR-18",
    shortDescription: "Plataforma de aço antiderrapante com travas de segurança para fechamento de torres de andaime.",
    description: "Prancha de trabalho metálica perfurada com textura antiderrapante e travas de encaixe automático. Garante superfície de trabalho firme e segura para operadores em altura.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Dimensões": "1,50m x 0,38m",
      "Material": "Aço estrutural galvanizado a fogo",
      "Capacidade": "200 kg por piso",
      "Sistema de Fixação": "Ganchos de encaixe com trava de segurança"
    }
  },
  {
    id: "sapata-ajustavel-rodizio",
    slug: "sapata-ajustavel-rodizio",
    name: "Sapata Ajustável / Rodízio de Borracha e Guarda-Corpo",
    categorySlug: "andaimes-elevacao",
    categoryName: "Andaimes / Elevação",
    featured: false,
    tag: "Acessórios Andaime",
    shortDescription: "Elementos para nivelamento de terreno, movimentação de torres e proteção periférica segundo a NR-18.",
    description: "Sapatas reguláveis por rosca trapezoidal para compensar desníveis do solo, associadas a rodízios giratórios com trava de freio e guardas-corpo de proteção.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Curso da Sapata": "Ajuste milimétrico de até 40 cm",
      "Diâmetro do Rodízio": "6 polegadas em poliuretano/borracha pesada com freio",
      "Guarda-Corpo": "Sistema duplo com rodapé metálico integrado"
    }
  },

  // --- CONCRETAGEM E COMPACTAÇÃO ---
  {
    id: "betoneira-400-litros",
    slug: "betoneira-400-litros",
    name: "Betoneira Profissional 400 Litros",
    categorySlug: "concretagem-compactacao",
    categoryName: "Concretagem e Compactação",
    featured: true,
    tag: "Mais Alugado",
    shortDescription: "Alta capacidade de mistura com tambor reforçado e basculamento suave para argamassa e concreto.",
    description: "A Betoneira 400 Litros é o equipamento padrão ouro em canteiros de obra. Projetada para alto rendimento com estrutura metálica reforçada, cremalheira fundida e volante ergonômico.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Capacidade do Tambor": "400 Litros",
      "Capacidade de Mistura": "310 Litros",
      "Rendimento Final": "270 Litros por ciclo",
      "Motor Elétrico": "2.0 CV Monofásico / Trifásico",
      "Tensão": "220V / 380V",
      "Peso Total": "180 kg"
    }
  },
  {
    id: "compactador-de-solo-sapo",
    slug: "compactador-de-solo-sapo",
    name: "Compactador de Solo (Sapo de Percussão)",
    categorySlug: "concretagem-compactacao",
    categoryName: "Concretagem e Compactação",
    featured: true,
    tag: "Alta Potência",
    shortDescription: "Ideal para compactação de valas, fundações, solos coesivos, argilosos e preparação de aterros.",
    description: "Compactador tipo sapo equipado com motor a gasolina 4 tempos de alto desempenho. Proporciona alto impacto de percussão para densificação profunda do solo.",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Força de Impacto": "14 a 16 kN",
      "Golpes por Minuto": "640 a 680 bpm",
      "Motor": "Gasolina 4 Tempos Honda / Robin (4,0 HP)",
      "Sapata de Impacto": "280 mm x 330 mm em liga especial",
      "Peso Operacional": "75 kg"
    }
  },
  {
    id: "vibrador-de-imersao-concreto",
    slug: "vibrador-de-imersao-concreto",
    name: "Vibrador de Imersão para Concreto com Mangote",
    categorySlug: "concretagem-compactacao",
    categoryName: "Concretagem e Compactação",
    featured: false,
    tag: "Essencial",
    shortDescription: "Elimina bolhas de ar e vazios no concreto armado, garantindo maior resistência estrutural.",
    description: "Motor vibrador elétrico com mangote flexível de alta frequência. Essencial no adensamento de pilares, vigas, lajes e fundações de concreto.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Diâmetro da Agulha": "35mm / 45mm / 60mm",
      "Comprimento do Mangote": "5,0 metros",
      "Frequência de Vibração": "12.000 vpm",
      "Motor": "Elétrico 2.0 CV Monofásico 220V"
    }
  },

  // --- FURAÇÃO / CORTE / DEMOLIÇÃO ---
  {
    id: "martelo-demolidor-30kg",
    slug: "martelo-demolidor-30kg",
    name: "Martelo Demolidor Hexagonal 30kg",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: true,
    tag: "Extrema Força",
    shortDescription: "Desenvolvido para demolição pesada de pisos de concreto, sapatas, calçadas e estruturas espessas.",
    description: "Martelo elétrico demolidor de 30kg com impressionante energia de impacto de 68 Joules. Sistema antivibração patenteado que reduz a fadiga do operador.",
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Energia de Impacto": "68 Joules",
      "Impactos por Minuto": "900 bpm",
      "Potência Nominal": "2.000W",
      "Encaixe da Ferramenta": "Hexagonal 28mm",
      "Tensão": "220V Monofásico"
    }
  },
  {
    id: "martelo-rompedor-sds-max-10kg",
    slug: "martelo-rompedor-sds-max-10kg",
    name: "Martelo Rompedor e Perfurador SDS Max 10kg",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: false,
    tag: "Mais Vendido",
    shortDescription: "Excelente equilíbrio para abertura de roços em alvenaria, remoção de revestimentos e furações largas.",
    description: "Rompedor intermediário de 10kg com regulagem de velocidade e encaixe SDS Max. Indicado para reformas residenciais e comerciais.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Energia de Impacto": "19 Joules",
      "Impactos por Minuto": "1.890 bpm",
      "Potência": "1.500W",
      "Encaixe": "SDS Max",
      "Tensão": "220V"
    }
  },
  {
    id: "serra-cortadora-de-piso-cliper",
    slug: "serra-cortadora-de-piso-cliper",
    name: "Serra Cortadora de Piso e Asfalto (Cliper)",
    categorySlug: "furacao-corte-demolicao",
    categoryName: "Furação / Corte / Demolição",
    featured: false,
    tag: "Corte Preciso",
    shortDescription: "Corte limpo e reto em pavimentos de concreto, junta de dilatação e asfalto com refrigeração a água.",
    description: "Cortadora de piso à gasolina equipada com reservatório de água integrado e regulagem de profundidade de corte milimétrica.",
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Diâmetro do Disco": "350mm a 450mm (14\" a 18\")",
      "Profundidade Máxima de Corte": "150 mm",
      "Motor": "Gasolina 4 Tempos 13.0 HP",
      "Tanque de Água": "30 Litros em polietileno"
    }
  },

  // --- FERRAMENTAS ELÉTRICAS ---
  {
    id: "maquina-de-solda-inversora-250a",
    slug: "maquina-de-solda-inversora-250a",
    name: "Máquina de Solda Inversora 250 amperes",
    categorySlug: "ferramentas-eletricas",
    categoryName: "Ferramentas Elétricas",
    featured: true,
    tag: "Profissional",
    shortDescription: "Inversora de solda portátil de alta eficiência para eletrodo revestido e processo TIG.",
    description: "Máquina de solda compacta e bivolt automática. Garante arco estável, baixo consumo de energia e soldagem perfeita em estruturas metálicas e serralheria.",
    imageUrl: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Faixa de Corrente": "20A a 250A",
      "Fator de Trabalho": "60% a 250A / 100% a 193A",
      "Tensão de Entrada": "220V Monofásico",
      "Tipos de Eletrodo": "E6013, E7018, Inox e Cast Iron até 5,0mm",
      "Acompanha": "Cabo com garra negativa e alicate porta-eletrodo"
    }
  },
  {
    id: "transformador-de-energia-110-220v",
    slug: "transformador-de-energia-110-220v",
    name: "Autotransformador de Energia 110V / 220V",
    categorySlug: "ferramentas-eletricas",
    categoryName: "Ferramentas Elétricas",
    featured: false,
    tag: "Segurança Elétrica",
    shortDescription: "Permite ligar equipamentos 220V em tomadas 110V e vice-versa com total proteção térmica.",
    description: "Transformador robusto com núcleo de aço silício e carcaça metálica com pintura eletrostática. Protege as ferramentas contra oscilações de voltagem.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Potência Nominal": "5.000 VA / 7.500 VA / 10.000 VA",
      "Tensão": "Entrada/Saída 110V ↔ 220V",
      "Proteção": "Disjuntor térmico de sobrecarga embutido",
      "Conexão": "Tomadas norma NBR 14136 e bornes reforçados"
    }
  },

  // --- GERADORES / BOMBAS / COMPRESSORES ---
  {
    id: "gerador-de-energia-8-5kva",
    slug: "gerador-de-energia-8-5kva",
    name: "Grupo Gerador de Energia 8,5 kVA a Gasolina",
    categorySlug: "geradores-bombas-compressores",
    categoryName: "Geradores / Bombas / Compressores",
    featured: true,
    tag: "Autonomia",
    shortDescription: "Fonte contínua de energia elétrica para canteiros sem energia da concessionária ou emergências.",
    description: "Gerador a gasolina com partida elétrica e regulador automático de voltagem (AVR). Alimenta simultaneamente betoneiras, marteletes e iluminação de obra.",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Potência Máxima": "8,5 kVA (8.500 Watts)",
      "Potência Contínua": "7,5 kVA",
      "Tensão de Saída": "110V / 220V Monofásico com chave seletora",
      "Sistema de Partida": "Elétrica (chave) e manual retrátil",
      "Capacidade do Tanque": "25 Litros (autonomia de até 9 horas)"
    }
  },
  {
    id: "bomba-submersivel-lama-agua-suja",
    slug: "bomba-submersivel-lama-agua-suja",
    name: "Bomba Submersível para Lama e Água Suja 2\"",
    categorySlug: "geradores-bombas-compressores",
    categoryName: "Geradores / Bombas / Compressores",
    featured: false,
    tag: "Drenagem",
    shortDescription: "Projetada para esgotamento rápido de valas, poços de fundação e águas com resíduos sólidos.",
    description: "Motobomba submersa com rotor aberto em ferro fundido resistente à abrasão. Ideal para drenagem de água com lama, areia e detritos em canteiros de obra.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Vazão Máxima": "24.000 Litros por hora (400 L/min)",
      "Altura Manométrica": "15 metros",
      "Diâmetro de Saída": "2 polegadas",
      "Passagem de Sólidos": "até 15 mm de diâmetro",
      "Motor": "1.5 CV Submerso Monofásico 220V"
    }
  },

  // --- ACESSÓRIOS ---
  {
    id: "serra-de-videa-madeira",
    slug: "serra-de-videa-madeira",
    name: "Disco de Serra de Vídea para Madeira",
    categorySlug: "acessorios",
    categoryName: "Acessórios",
    featured: false,
    tag: "Acessório",
    shortDescription: "Lâmina com dentes de metal duro (vídea) para corte rápido de fôrmas de madeira e tábuas.",
    description: "Disco circular de aço temperado com pastilhas de vídea soldadas a alta temperatura. Oferece cortes macios, sem lascar a madeira.",
    imageUrl: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Diâmetro Externo": "7.1/4\" (185mm) / 9.1/4\" (235mm)",
      "Quantidade de Dentes": "24 / 36 / 48 dentes alternados ATB",
      "Furo Central": "20mm com bucha de redução para 16mm",
      "Aplicação": "Madeiras de obra, compensados, tábuas de pinus"
    }
  },
  {
    id: "disco-diamantado-serra-marmore-makita",
    slug: "disco-diamantado-serra-marmore-makita",
    name: "Discos Diamantados para Serra Mármore e Makita",
    categorySlug: "acessorios",
    categoryName: "Acessórios",
    featured: false,
    tag: "Alta Durabilidade",
    shortDescription: "Discos liso (porcelanato), segmentado (concreto/tijolo) e turbo (mármore/granito).",
    description: "Linha completa de discos diamantados para corte a seco ou refrigerado. Alta concentração de diamantes sintéticos no segmento para maior rendimento.",
    imageUrl: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Diâmetro": "110mm (4.3/8\")",
      "Modelos": "Segmentado, Turbo e Contínuo",
      "Furo": "20mm",
      "Rotação Máxima": "13.800 RPM"
    }
  },
  {
    id: "brocas-sds-plus-e-sds-max",
    slug: "brocas-sds-plus-e-sds-max",
    name: "Brocas de Wídia SDS Plus e SDS Max",
    categorySlug: "acessorios",
    categoryName: "Acessórios",
    featured: false,
    tag: "Resistente",
    shortDescription: "Brocas para perfuração de concreto armado, alvenaria, granito e pedras naturais.",
    description: "Brocas com ponta de metal duro maciço em cruz ou dupla hélice para rápido escoamento do pó. Disponíveis em diversos comprimentos e diâmetros.",
    imageUrl: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Diâmetros Disponíveis": "6mm a 32mm",
      "Comprimentos de Trabalho": "110mm a 600mm",
      "Encaixe": "SDS Plus / SDS Max",
      "Ponta": "Carbeto de Tungstênio de altíssima dureza"
    }
  }
];
