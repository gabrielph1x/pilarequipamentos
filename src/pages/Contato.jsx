import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageSquare, 
  Building2, 
  CheckCircle, 
  Mail,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/config';
import Breadcrumb from '../components/Breadcrumb';
import { useQuote } from '../context/QuoteContext';

export default function Contato() {
  const { getWhatsAppQuoteUrl } = useQuote();

  return (
    <div className="bg-pilar-bg space-y-12 pb-12">
      {/* Top Banner */}
      <section className="bg-pilar-charcoal text-white py-12 px-4 border-b-4 border-pilar-red">
        <div className="max-w-7xl mx-auto space-y-3">
          <Breadcrumb items={[{ label: 'Contato & Unidades' }]} />
          <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight text-white flex items-center gap-3">
            <Building2 className="w-8 h-8 text-pilar-red" />
            <span>Fale com a <span className="text-pilar-red">Pilar Equipamentos</span></span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
            Atendimento direto e sem burocracia. Entre em contato pelo WhatsApp com a unidade mais próxima do seu projeto.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Banner Informativo (Sem Formulário de Contato - Requirement #9) */}
        <div className="bg-white rounded-2xl p-6 border border-pilar-border shadow-pilar-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-whatsapp/10 text-whatsapp rounded-xl flex items-center justify-center font-bold">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-pilar-charcoal font-display">
                Atendimento Rápido via WhatsApp
              </h3>
              <p className="text-xs text-slate-500">
                Eliminamos formulários demorados. Escolha sua unidade abaixo e fale direto com um consultor.
              </p>
            </div>
          </div>
          <div className="text-xs font-semibold text-slate-600 bg-pilar-bg px-4 py-2 rounded-xl border border-pilar-border">
            Horário: {COMPANY_INFO.businessHours}
          </div>
        </div>

        {/* Grid das 2 Unidades Físicas (Requirement #9) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COMPANY_INFO.units.map((unit) => (
            <div
              key={unit.id}
              className="bg-white rounded-3xl border border-pilar-border shadow-pilar-md overflow-hidden flex flex-col justify-between"
            >
              {/* Topo do Card da Unidade */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-bold text-pilar-red uppercase tracking-wider">
                      {unit.shortName}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-pilar-charcoal font-display mt-1">
                      {unit.name}
                    </h2>
                  </div>
                  <div className="w-10 h-10 bg-pilar-red/10 text-pilar-red rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                {/* Dados de Endereço & Horário */}
                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-pilar-terracotta shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-pilar-charcoal">Endereço:</p>
                      <p>{unit.address}</p>
                      <p className="text-slate-400">CEP {unit.cep}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-pilar-terracotta shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-pilar-charcoal">Horário de Funcionamento:</p>
                      <p>{unit.hours}</p>
                    </div>
                  </div>

                  {/* Telefones Clicáveis via tel: (Informação complementar - Requirement #9) */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-pilar-terracotta shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-pilar-charcoal">Telefones Fixos:</p>
                      <div className="flex flex-wrap gap-3 mt-1">
                        {unit.phones.map((phone, i) => (
                          <a
                            key={i}
                            href={`tel:${phone.replace(/\D/g, '')}`}
                            className="bg-slate-100 hover:bg-pilar-red hover:text-white text-pilar-charcoal px-3 py-1.5 rounded-lg font-bold text-xs transition-colors"
                          >
                            📞 {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botão de WhatsApp por Unidade (CTA Principal - Requirement #9) */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppQuoteUrl(unit.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-whatsapp hover:bg-whatsapp-hover text-white py-4 px-6 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2.5 transition-all shadow-glow-green min-h-[44px]"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Falar com a {unit.shortName} pelo WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Embed Google Maps da Unidade (Requirement #9) */}
              <div className="w-full h-64 bg-slate-200 border-t border-slate-200">
                <iframe
                  title={`Mapa ${unit.name}`}
                  src={unit.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
