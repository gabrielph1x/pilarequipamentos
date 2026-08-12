import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Target, 
  Eye, 
  Heart, 
  CheckCircle, 
  DollarSign, 
  TrendingUp, 
  Wrench, 
  Truck, 
  MessageSquare, 
  Award, 
  ShieldCheck, 
  Clock, 
  MapPin 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/config';
import Breadcrumb from '../components/Breadcrumb';
import ScrollReveal from '../components/ScrollReveal';
import { useQuote } from '../context/QuoteContext';

const categoryIconMap = {
  DollarSign: DollarSign,
  TrendingUp: TrendingUp,
  Wrench: Wrench,
  Truck: Truck
};

export default function Empresa() {
  const { getWhatsAppGeneralUrl } = useQuote();

  return (
    <div className="bg-pilar-bg space-y-12 pb-12">
      {/* 1. HERO / TOPO DA PÁGINA INSTITUCIONAL */}
      <section className="bg-pilar-charcoal text-white relative py-16 px-4 overflow-hidden border-b-4 border-pilar-red">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto space-y-4 text-center md:text-left">
          <Breadcrumb items={[{ label: 'Empresa (Sobre Nós)' }]} />
          <ScrollReveal direction="up" duration={600}>
            <div className="inline-block bg-pilar-red text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded">
              Tradição Desde 1985
            </div>
            <h1 className="text-3xl md:text-5xl font-black font-display text-white tracking-tight mt-2">
              Sobre a <span className="text-pilar-red">Pilar Equipamentos</span>
            </h1>
            <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed mt-2">
              Mais de 35 anos de compromisso, ética e excelência na locação de equipamentos e ferramentas leves para a construção civil em Belo Horizonte e região.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* 2. BLOCO "NOSSA HISTÓRIA" */}
        <ScrollReveal direction="up" duration={650}>
          <section className="bg-white rounded-2xl p-8 md:p-12 border border-pilar-border shadow-pilar-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-pilar-red font-bold text-sm uppercase tracking-wider">
                <Award className="w-5 h-5" />
                <span>Nossa Trajetória</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-pilar-charcoal font-display">
                Construindo Parcerias Sólidas desde 1985
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                A <strong className="text-pilar-charcoal font-semibold">Pilar Equipamentos</strong> nasceu com o objetivo claro de transformar o mercado de locação de maquinários leves para a construção civil na capital mineira e municípios vizinhos. Ao longo de mais de três décadas de atuação contínua, acompanhamos o crescimento de grandes obras residenciais, comerciais e industriais.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Com investimentos permanentes em renovação de frota, manutenção preventiva rigorosa e capacitação da nossa equipe, nos tornamos sinônimo de segurança, agilidade técnica e excelente custo-benefício para construtoras, empreiteiras e mestres de obra.
              </p>
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-100 text-center">
                <div className="p-3 bg-pilar-bg rounded-xl">
                  <span className="block text-2xl font-black text-pilar-red font-display">35+</span>
                  <span className="text-xs text-slate-600 font-medium">Anos de Mercado</span>
                </div>
                <div className="p-3 bg-pilar-bg rounded-xl">
                  <span className="block text-2xl font-black text-pilar-red font-display">2</span>
                  <span className="text-xs text-slate-600 font-medium">Unidades Físicas (BH e CMD)</span>
                </div>
                <div className="p-3 bg-pilar-bg rounded-xl col-span-2 sm:col-span-1">
                  <span className="block text-2xl font-black text-pilar-red font-display">100%</span>
                  <span className="text-xs text-slate-600 font-medium">Equipamentos Testados</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-pilar-lg border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80"
                  alt="Canteiro de obras Pilar Equipamentos"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-pilar-charcoal text-white p-5 rounded-2xl shadow-pilar-lg hidden sm:block max-w-xs border border-pilar-terracotta">
                <p className="text-xs font-bold text-pilar-red">Garantia Operacional</p>
                <p className="text-xs text-slate-200 mt-1">Manutenção e trocas in loco para sua obra não parar jamais.</p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 3. BLOCO "MISSÃO, VISÃO E VALORES" (3 Cards Estruturados) */}
        <section className="space-y-6">
          <ScrollReveal direction="up">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-bold text-pilar-red uppercase tracking-wider">
                Diretrizes Estratégicas
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-pilar-charcoal font-display">
                Missão, Visão e Princípios
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card Missão */}
            <ScrollReveal direction="up" delay={0} duration={600}>
              <div className="bg-white rounded-2xl p-8 border border-pilar-border shadow-pilar-sm space-y-4 hover:border-pilar-red transition-colors flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-pilar-red/10 text-pilar-red rounded-xl flex items-center justify-center font-bold">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-pilar-charcoal font-display">Nossa Missão</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {COMPANY_INFO.mission}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-pilar-terracotta">
                  ✓ Produtividade & Cordialidade
                </div>
              </div>
            </ScrollReveal>

            {/* Card Visão */}
            <ScrollReveal direction="up" delay={120} duration={600}>
              <div className="bg-white rounded-2xl p-8 border border-pilar-border shadow-pilar-sm space-y-4 hover:border-pilar-red transition-colors flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-pilar-red/10 text-pilar-red rounded-xl flex items-center justify-center font-bold">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-pilar-charcoal font-display">Nossa Visão</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {COMPANY_INFO.vision}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-pilar-terracotta">
                  ✓ Referência em BH e Grande BH
                </div>
              </div>
            </ScrollReveal>

            {/* Card Valores */}
            <ScrollReveal direction="up" delay={240} duration={600}>
              <div className="bg-white rounded-2xl p-8 border border-pilar-border shadow-pilar-sm space-y-4 hover:border-pilar-red transition-colors flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-pilar-red/10 text-pilar-red rounded-xl flex items-center justify-center font-bold">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-pilar-charcoal font-display">Nossos Valores</h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {COMPANY_INFO.values.map((val, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-pilar-red mt-1.5 shrink-0" />
                        <span>{val}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-pilar-terracotta">
                  ✓ Ética & Compromisso
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 4. BLOCO "11 MOTIVOS PARA ALUGAR COM A PILAR" (LEI DE MILLER: 4 BLOCS TEMÁTICOS) */}
        <section className="space-y-8 bg-pilar-charcoal text-white rounded-3xl p-8 md:p-12 border border-pilar-terracotta/40 shadow-pilar-lg">
          <ScrollReveal direction="up">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="bg-pilar-red text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded">
                Vantagens Estratégicas
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white font-display">
                11 Motivos para Alugar Equipamentos com a Pilar
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Confira por que milhares de construtores optam pela locação em vez da compra de ferramentas.
              </p>
            </div>
          </ScrollReveal>

          {/* Grid dos 4 Grupos Temáticos (Lei de Miller) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY_INFO.motivosParaAlugarGrouped.map((group, gIdx) => {
              const IconComp = categoryIconMap[group.iconName] || DollarSign;
              return (
                <ScrollReveal key={gIdx} direction="up" delay={gIdx * 100} duration={600}>
                  <div
                    className="bg-pilar-wine/50 border border-pilar-terracotta/40 rounded-2xl p-6 md:p-8 space-y-6 h-full"
                  >
                    <div className="flex items-center gap-3 border-b border-pilar-wine pb-4">
                      <div className="w-10 h-10 bg-pilar-red text-white rounded-xl flex items-center justify-center font-bold">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-extrabold text-white font-display">
                        {group.category}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {group.items.map((item) => (
                        <div key={item.num} className="flex items-start gap-3">
                          <div className="w-7 h-7 bg-pilar-red text-white rounded-lg flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-sm">
                            {item.num}
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-sm font-bold text-slate-100 font-display">
                              {item.title}
                            </h4>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* 5. BLOCO DE UNIDADES FÍSICAS */}
        <section className="bg-white rounded-2xl p-8 md:p-12 border border-pilar-border space-y-8">
          <ScrollReveal direction="up">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-bold text-pilar-red uppercase tracking-wider">
                Nossa Estrutura
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-pilar-charcoal font-display">
                Nossas 2 Unidades em Minas Gerais
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {COMPANY_INFO.units.map((unit, idx) => (
              <ScrollReveal key={unit.id} direction="up" delay={idx * 120} duration={600} className="h-full">
                <div
                  className="bg-pilar-bg rounded-2xl p-6 border border-pilar-border space-y-4 flex flex-col justify-between h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-pilar-red font-bold text-sm">
                      <MapPin className="w-5 h-5" />
                      <span>{unit.shortName}</span>
                    </div>
                    <h3 className="text-lg font-extrabold text-pilar-charcoal font-display">
                      {unit.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {unit.address} — CEP {unit.cep}
                    </p>
                    <div className="text-xs text-slate-700 space-y-1">
                      <p className="font-bold text-pilar-charcoal">Telefones:</p>
                      {unit.phones.map((p, i) => (
                        <span key={i} className="block text-pilar-red font-semibold">📞 {p}</span>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500">
                      Horário: {unit.hours}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 mt-auto">
                    <a
                      href={getWhatsAppGeneralUrl(unit.whatsapp, `Olá! Gostaria de falar com o atendimento da unidade ${unit.shortName}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-whatsapp hover:bg-whatsapp-hover text-white px-4 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-glow-green min-h-[44px]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Falar com esta Unidade no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 6. CTA FINAL */}
        <ScrollReveal direction="zoom" duration={650}>
          <section className="bg-red-gradient text-white rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-glow-red">
            <h2 className="text-2xl md:text-4xl font-black font-display tracking-tight text-white">
              Pronto para impulsionar a sua obra com a Pilar?
            </h2>
            <p className="text-sm md:text-base text-slate-100 max-w-2xl mx-auto">
              Fale agora com nosso time de atendimento técnico e solicite uma cotação sem compromisso.
            </p>
            <div>
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-xl font-extrabold text-base shadow-pilar-lg transition-all transform hover:scale-105 min-h-[44px]"
              >
                <MessageSquare className="w-6 h-6" />
                <span>Fale com um Consultor no WhatsApp</span>
              </a>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
