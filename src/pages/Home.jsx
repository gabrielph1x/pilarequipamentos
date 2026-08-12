import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShieldCheck, 
  Truck, 
  Wrench, 
  Award, 
  MessageSquare, 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/config';
import { CATEGORIES, PRODUCTS } from '../data/catalog';
import ProductCard from '../components/ProductCard';
import CategoryNavScroll from '../components/CategoryNavScroll';
import ScrollReveal from '../components/ScrollReveal';
import { useQuote } from '../context/QuoteContext';

export default function Home() {
  const { getWhatsAppGeneralUrl } = useQuote();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'secao-categorias' || location.hash === '#secao-categorias') {
      const el = document.getElementById('secao-categorias');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location]);

  // Equipamentos em Destaque
  const featuredProducts = PRODUCTS;

  const differentials = [
    {
      icon: ShieldCheck,
      title: 'Atendimento Técnico',
      desc: 'Consultores qualificados para orientar a escolha perfeita para cada fase da sua obra.'
    },
    {
      icon: Award,
      title: 'Frota Atualizada',
      desc: 'Equipamentos novos dos melhores fabricantes, testados e higienizados.'
    },
    {
      icon: Wrench,
      title: 'Manutenção In Loco',
      desc: 'Assistência técnica ágil na obra e substituição imediata sem custo em caso de defeito.'
    },
    {
      icon: Truck,
      title: 'Entrega e Coleta',
      desc: 'Logística rápida de entrega e recolhimento diretamente no local do seu projeto.'
    }
  ];

  return (
    <div className="space-y-0 w-full overflow-x-hidden">
      {/* 1. HERO SECTION (Above the fold) - Requirement #4 */}
      <section className="relative bg-[#332929] text-white min-h-[480px] sm:min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden w-full">
        {/* Background Image com Overlay Escuro High-Res Contrast */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 transform animate-pulse-subtle"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-hero-overlay z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
            <ScrollReveal direction="up" duration={650}>
              <div className="inline-flex items-center gap-2 bg-pilar-red/90 text-white px-3 py-1 rounded-full text-[11px] sm:text-xs font-extrabold tracking-wider uppercase shadow-glow-red">
                <Sparkles className="w-3.5 h-3.5" />
                <span>35+ Anos de Excelência em BH e Grande BH</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100} duration={650}>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-display text-white">
                Locação de Equipamentos para <span className="text-pilar-red">Construção Civil</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={180} duration={650}>
              <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Aumente a produtividade e reduza custos da sua obra com nossa frota atualizada de betoneiras, andaimes, marteletes e geradores. Entrega rápida no canteiro e suporte técnico in loco.
              </p>
            </ScrollReveal>

            {/* CTAs do Hero (Efeito Von Restorff & Fitts) */}
            <ScrollReveal direction="up" delay={250} duration={650}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2 w-full">
                <a
                  href="#equipamentos-destaque"
                  className="w-full sm:w-auto bg-pilar-red hover:bg-pilar-terracotta text-white px-6 py-3.5 sm:py-4 rounded-xl font-extrabold text-sm sm:text-base shadow-glow-red transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <span>Ver Equipamentos</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp-hover text-white px-6 py-3.5 sm:py-4 rounded-xl font-extrabold text-sm sm:text-base shadow-glow-green transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Micro Garantias */}
            <ScrollReveal direction="up" delay={320} duration={650}>
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-300 max-w-xl mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pilar-red shrink-0" />
                  <span>Sem custo de manutenção</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pilar-red shrink-0" />
                  <span>Entrega e coleta agilizadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pilar-red shrink-0" />
                  <span>Dedução no IRPJ</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Card Flutuante de Destaque no Hero (Desktop) */}
          <div className="hidden lg:block lg:col-span-4">
            <ScrollReveal direction="zoom" delay={200} duration={700}>
              <div className="bg-[#332929]/95 border border-pilar-terracotta/60 rounded-2xl p-6 shadow-pilar-lg space-y-4 backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-pilar-wine pb-3">
                  <span className="text-xs font-extrabold uppercase text-pilar-red tracking-wider">
                    Unidades Físicas
                  </span>
                  <span className="text-[11px] text-slate-400">Atendimento Imediato</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-[#523132] rounded-xl border border-pilar-terracotta/30">
                    <p className="font-bold text-white text-sm">Pilar I — Belo Horizonte</p>
                    <p className="text-slate-300 mt-1">Rua Moema, 370 - Padre Eustáquio</p>
                    <p className="text-pilar-red font-semibold mt-1">Tel: (31) 3462-6541</p>
                  </div>
                  <div className="p-3 bg-[#523132] rounded-xl border border-pilar-terracotta/30">
                    <p className="font-bold text-white text-sm">Pilar II — Conceição do Mato Dentro</p>
                    <p className="text-slate-300 mt-1">R. Farmacêutico Orlando Guerra, 60</p>
                    <p className="text-pilar-red font-semibold mt-1">Tel: (31) 3868-1939</p>
                  </div>
                </div>
                <div className="pt-2 text-center">
                  <Link
                    to="/contato"
                    className="text-xs font-bold text-slate-300 hover:text-white underline flex items-center justify-center gap-1"
                  >
                    <MapPin className="w-3.5 h-3.5 text-pilar-red" />
                    <span>Ver mapas e como chegar</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. NAVBAR SECUNDÁRIA DE CATEGORIAS AO SCROLL */}
      <CategoryNavScroll />

      {/* 3. SEÇÃO "CONHEÇA A PILAR" (RESUMO INSTITUCIONAL - Requirement #4) */}
      <section className="py-12 sm:py-16 px-4 bg-white border-b border-pilar-border w-full">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <ScrollReveal direction="left" duration={600}>
                <div className="inline-block bg-pilar-bg text-pilar-red px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                  Tradição & Credibilidade
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-pilar-charcoal leading-tight font-display mt-2">
                  Conheça a Pilar Equipamentos
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mt-2">
                  Fundada em 1985, a <strong className="text-pilar-charcoal font-semibold">Pilar Equipamentos</strong> conta com mais de 35 anos de atuação dedicada ao mercado de locação de ferramentas e máquinas leves para a construção civil em Belo Horizonte, Grande BH e região.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Nossa missão é proporcionar aumento de produtividade e redução direta de custos no seu canteiro de obras, através de equipamentos revisados dos melhores fabricantes mundiais e atendimento especializado.
                </p>
                <div className="pt-2">
                  <Link
                    to="/empresa"
                    className="inline-flex items-center gap-2 bg-[#332929] hover:bg-[#523132] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-pilar-md transition-all group min-h-[44px] w-full sm:w-auto justify-center"
                  >
                    <span>Saiba mais sobre a nossa história</span>
                    <ArrowRight className="w-4 h-4 text-pilar-red group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* 4 Mini-Cards com Diferenciais */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentials.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <ScrollReveal key={idx} direction="up" delay={idx * 90} duration={550}>
                    <div className="p-4 sm:p-5 bg-pilar-bg rounded-2xl border border-pilar-border space-y-2 hover:border-pilar-terracotta transition-colors h-full">
                      <div className="w-9 h-9 bg-pilar-red text-white rounded-xl flex items-center justify-center font-bold">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-extrabold text-sm text-pilar-charcoal font-display">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO CATEGORIAS DE PRODUTOS */}
      <section id="secao-categorias" className="py-12 sm:py-16 px-4 bg-pilar-bg w-full">
        <div className="max-w-7xl mx-auto space-y-8">
          <ScrollReveal direction="up">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-bold text-pilar-red uppercase tracking-wider">
                Catálogo de Equipamentos
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-pilar-charcoal font-display">
                Nossas Categorias de Locação
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Selecione a categoria desejada para navegar pelos equipamentos disponíveis.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CATEGORIES.map((category, idx) => (
              <ScrollReveal key={category.id} direction="up" delay={idx * 80} duration={600}>
                <Link
                  to={`/categoria/${category.slug}`}
                  className="group relative bg-white rounded-2xl border border-pilar-border overflow-hidden shadow-pilar-sm hover:shadow-pilar-lg transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div className="aspect-[16/9] w-full overflow-hidden bg-[#523132]/20">
                    <img
                      src={category.bannerImage}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#332929]/90 via-[#332929]/40 to-transparent" />
                  </div>
                  <div className="p-5 relative z-10 space-y-2 -mt-10 bg-white rounded-t-2xl flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-extrabold text-pilar-charcoal group-hover:text-pilar-red transition-colors font-display">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <div className="pt-2 flex items-center text-xs font-bold text-pilar-red group-hover:underline gap-1 mt-auto">
                      <span>Explorar equipamentos</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO "EQUIPAMENTOS EM DESTAQUE" */}
      <section id="equipamentos-destaque" className="py-12 sm:py-16 px-4 bg-white border-y border-pilar-border w-full">
        <div className="max-w-7xl mx-auto space-y-8">
          <ScrollReveal direction="up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-pilar-red uppercase tracking-wider">
                  Mais Solicitados pelas Obras
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-pilar-charcoal font-display">
                  Equipamentos em Destaque
                </h2>
              </div>
              <p className="text-xs text-slate-500">
                Mostrando {featuredProducts.length} de {PRODUCTS.length} itens do catálogo
              </p>
            </div>
          </ScrollReveal>

          {/* Grid de Produtos com Efeito Cascata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 items-stretch">
            {featuredProducts.map((product, idx) => (
              <ScrollReveal key={product.id} direction="up" delay={(idx % 4) * 80} duration={550}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={150}>
            <div className="text-center pt-4">
              <Link
                to="/categoria/andaimes-elevacao"
                className="inline-flex items-center justify-center gap-2 bg-pilar-red hover:bg-pilar-terracotta text-white px-6 sm:px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-glow-red transition-all min-h-[44px] w-full sm:w-auto"
              >
                <span>Ver todo o catálogo ({PRODUCTS.length} itens)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. SEÇÃO UNIDADES & CONTATO */}
      <section className="py-12 sm:py-16 px-4 bg-[#332929] text-white w-full">
        <div className="max-w-7xl mx-auto space-y-10">
          <ScrollReveal direction="up">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-bold text-pilar-red uppercase tracking-wider">
                Atendimento Regional
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                Onde Encontrar a Pilar Equipamentos
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Duas unidades estrategicamente localizadas para atender BH e Conceição do Mato Dentro.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {COMPANY_INFO.units.map((unit, idx) => (
              <ScrollReveal key={unit.id} direction="up" delay={idx * 120} duration={650} className="h-full">
                <div
                  className="bg-[#523132]/60 border border-pilar-terracotta/40 rounded-2xl p-5 sm:p-8 space-y-5 flex flex-col justify-between h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-xs font-bold text-pilar-red uppercase tracking-wider">
                          {unit.shortName}
                        </span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-white font-display mt-0.5">
                          {unit.name}
                        </h3>
                      </div>
                      <MapPin className="w-6 h-6 text-pilar-red shrink-0" />
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {unit.address} — CEP {unit.cep}
                    </p>

                    <div className="space-y-1 text-xs sm:text-sm text-slate-200">
                      <p className="font-semibold text-slate-400">Telefones Fixos:</p>
                      {unit.phones.map((phone, pIdx) => (
                        <a
                          key={pIdx}
                          href={`tel:${phone.replace(/\D/g, '')}`}
                          className="block hover:text-pilar-red font-bold text-white transition-colors"
                        >
                          📞 {phone}
                        </a>
                      ))}
                    </div>

                    <p className="text-xs text-slate-400">
                      Horário: {unit.hours}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-pilar-terracotta/30 flex flex-col sm:flex-row gap-3 mt-auto">
                    <a
                      href={getWhatsAppGeneralUrl(unit.whatsapp, `Olá! Gostaria de falar com o atendimento da unidade ${unit.shortName}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-whatsapp hover:bg-whatsapp-hover text-white px-4 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-glow-green min-h-[44px]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Unidade</span>
                    </a>

                    <Link
                      to="/contato"
                      className="bg-[#523132] hover:bg-pilar-terracotta text-white px-4 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors min-h-[44px]"
                    >
                      <MapPin className="w-4 h-4 text-pilar-red" />
                      <span>Ver no Mapa</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
