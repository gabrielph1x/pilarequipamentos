/**
 * CONFIGURAÇÃO GLOBAL DA PILAR EQUIPAMENTOS
 * 
 * Para alterar o número de WhatsApp principal ou das unidades,
 * edite as constantes abaixo. Todas as URLs wa.me serão atualizadas automaticamente.
 */

// Número de WhatsApp principal de conversão (formato internacional: DDI + DDD + Número)
export const DEFAULT_WHATSAPP_NUMBER = "5531987910025"; 
export const DISPLAY_WHATSAPP_NUMBER = "+55 31 98791-0025"; 

export const COMPANY_INFO = {
  name: "Pilar Equipamentos",
  slogan: "Locação de Equipamentos para Construção Civil",
  foundationYear: 1985,
  yearsInMarket: "35+",
  email: "contato@pilarequipamentos.com.br", // Exibido apenas de forma discreta no rodapé
  defaultWhatsApp: DEFAULT_WHATSAPP_NUMBER,
  businessHours: "Segunda a Sexta, das 07:30 às 17:30",
  
  mission: "Proporcionar aumento de produtividade e redução de custos, alugando equipamentos diversificados para construção civil, com qualidade e cordialidade.",
  vision: "Tornar-se referência na locação de equipamentos leves em Belo Horizonte e Grande BH, oferecendo uma linha diversificada e uma série de diferenciais no mercado.",
  
  values: [
    "Satisfação dos clientes, colaboradores, fornecedores e sócios",
    "Comportamento ético e transparente",
    "Espírito de equipe e cooperação",
    "Compromisso e pontualidade com a obra",
    "Credibilidade construída há mais de 35 anos",
    "Lucratividade com sustentabilidade",
    "Melhoria contínua dos nossos processos e frota"
  ],

  differentiators: [
    {
      title: "Atendimento Personalizado",
      desc: "Consultores técnicos prontos para indicar a melhor solução técnica para sua obra."
    },
    {
      title: "Equipamentos de Ponta",
      desc: "Frota constantemente atualizada com as melhores marcas do mercado mundial."
    },
    {
      title: "Assistência Rápida",
      desc: "Manutenção in loco e substituição ágil em caso de necessidade técnica."
    },
    {
      title: "Profissionais Treinados",
      desc: "Equipe técnica capacitada para orientação correta e segura de operação."
    },
    {
      title: "Logística Própria",
      desc: "Serviço de entrega e coleta eficiente diretamente no canteiro de obras."
    }
  ],

  // 11 Motivos para Alugar agrupados em 4 blocos visuais (Lei de Miller: chunks de 3-4 itens)
  motivosParaAlugarGrouped: [
    {
      category: "Economia & Gestão Financeira",
      iconName: "DollarSign",
      items: [
        {
          num: 1,
          title: "Eliminação de Imobilização",
          desc: "Elimina-se custos associados à imobilização do capital em equipamentos que se depreciam."
        },
        {
          num: 2,
          title: "Dedução no Imposto de Renda",
          desc: "Possibilidade de dedução integral da despesa de locação no Imposto de Renda (IRPJ)."
        },
        {
          num: 3,
          title: "Pagamento Proporcional",
          desc: "Despesa igual ao tempo de locação — paga-se estritamente quanto se usa o equipamento."
        }
      ]
    },
    {
      category: "Produtividade & Eficiência",
      iconName: "TrendingUp",
      items: [
        {
          num: 4,
          title: "Equipamentos Novos e Modernos",
          desc: "Utilização de equipamentos atualizados e revisados que aumentam diretamente a produtividade."
        },
        {
          num: 5,
          title: "Minimização de Equipamentos Parados",
          desc: "Diferentes fases da obra requerem diferentes itens; a locação evita custos com maquinário ocioso."
        },
        {
          num: 6,
          title: "Fornecedor Único e Agilidade",
          desc: "Vasta gama de produtos em um único fornecedor, reduzindo o tempo de demanda e suprimento."
        }
      ]
    },
    {
      category: "Suporte Técnico & Manutenção In Loco",
      iconName: "Wrench",
      items: [
        {
          num: 7,
          title: "Acompanhamento Técnico Especializado",
          desc: "Suporte contínuo de uma equipe experiente para tirar dúvidas e otimizar o uso."
        },
        {
          num: 8,
          title: "Manutenção Preventiva e Corretiva",
          desc: "Manutenção feita diretamente no canteiro de obras (in loco) para não pausar seu projeto."
        },
        {
          num: 9,
          title: "Gerenciamento sem Custo Adicional",
          desc: "Avaliação, limpeza, regulagem e trocas necessárias do item alugado sem custos extras."
        }
      ]
    },
    {
      category: "Logística & Garantia Operacional",
      iconName: "Truck",
      items: [
        {
          num: 10,
          title: "Entrega e Coleta sem Custo Extra",
          desc: "Logística ágil e pontual de entrega e recolhimento diretamente no local da obra."
        },
        {
          num: 11,
          title: "Substituição Imediata em Caso de Defeito",
          desc: "Troca rápida e simplificada do equipamento caso apresente qualquer falha de funcionamento."
        }
      ]
    }
  ],

  // Unidades físicas da Pilar Equipamentos
  units: [
    {
      id: "unidade-bh",
      name: "Pilar Equipamentos I — Belo Horizonte",
      shortName: "Belo Horizonte / MG",
      address: "Rua Moema, 370, Bairro Padre Eustáquio, Belo Horizonte/MG",
      cep: "30730-580",
      phones: ["(31) 3462-6541", "(31) 3464-5595"],
      whatsapp: DEFAULT_WHATSAPP_NUMBER, // +55 31 98791-0025
      hours: "Segunda a Sexta, 07:30 às 17:30",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.2721867160756!2d-43.97235142386866!3d-19.912952838321035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69719ebcb0131%3A0xa618991b1aa888c0!2sR.%20Moema%2C%20370%20-%20Padre%20Eust%C3%A1quio%2C%20Belo%20Horizonte%20-%20MG%2C%2030730-580!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
    },
    {
      id: "unidade-cmd",
      name: "Pilar Equipamentos II — Conceição do Mato Dentro",
      shortName: "Conceição do Mato Dentro / MG",
      address: "Rua Farmacêutico Orlando Guerra, 60, Bairro Bandeirinhas, Conceição do Mato Dentro/MG",
      cep: "35860-000",
      phones: ["(31) 3868-1939"],
      whatsapp: DEFAULT_WHATSAPP_NUMBER, // +55 31 98791-0025
      hours: "Segunda a Sexta, 07:30 às 17:30",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.423987123987!2d-43.432100!3d-19.034500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAyJzA0LjIiUyA0M8KwMjUnNTUuNiJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
    }
  ]
};
