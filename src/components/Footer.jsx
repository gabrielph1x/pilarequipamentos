import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/config';
import { CATEGORIES } from '../data/catalog';
import { useQuote } from '../context/QuoteContext';

export default function Footer() {
  const { getWhatsAppQuoteUrl } = useQuote();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#332929] text-slate-300 border-t-4 border-pilar-red mt-auto w-full overflow-x-hidden">
      {/* Upper Footer CTA Strip */}
      <div className="bg-[#523132] py-8 px-4 border-b border-pilar-terracotta/30 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-xl md:text-2xl font-extrabold text-white font-display">
              Precisa de equipamentos com entrega ágil na sua obra?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Fale agora com a nossa equipe de consultores técnicos pelo WhatsApp.
            </p>
          </div>
          <a
            href={getWhatsAppQuoteUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-glow-green transition-all transform hover:-translate-y-0.5 min-h-[44px] shrink-0"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Falar com Consultor no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1: About */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-pilar-red text-white rounded-lg flex items-center justify-center font-black text-lg shadow-glow-red">
              P
            </div>
            <span className="font-extrabold text-lg tracking-tight text-white font-display">
              PILAR <span className="text-pilar-red">EQUIPAMENTOS</span>
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Desde 1985 oferecendo soluções completas em locação de equipamentos leves e ferramentas para a construção civil em Belo Horizonte e Conceição do Mato Dentro.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
            <Clock className="w-4 h-4 text-pilar-red shrink-0" />
            <span>{COMPANY_INFO.businessHours}</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-pilar-terracotta/40 pb-2">
            Navegação Rápida
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link to="/" className="hover:text-pilar-red transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-pilar-terracotta" />
                <span>Home / Início</span>
              </Link>
            </li>
            <li>
              <Link to="/empresa" className="hover:text-pilar-red transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-pilar-terracotta" />
                <span>Empresa (Sobre Nós & 11 Motivos)</span>
              </Link>
            </li>
            <li>
              <Link to="/orcamento" className="hover:text-pilar-red transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-pilar-terracotta" />
                <span>Meu Orçamento</span>
              </Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-pilar-red transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-pilar-terracotta" />
                <span>Contato & Localização</span>
              </Link>
            </li>
          </ul>

          <h5 className="text-xs font-bold text-white uppercase tracking-wider pt-2">
            Categorias em Destaque
          </h5>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {CATEGORIES.slice(0, 4).map((c) => (
              <Link
                key={c.id}
                to={`/categoria/${c.slug}`}
                className="text-[11px] bg-[#523132] hover:bg-pilar-red text-slate-200 hover:text-white px-2.5 py-1 rounded transition-colors"
              >
                {c.shortTitle}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3: Unidade Belo Horizonte */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-pilar-terracotta/40 pb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-pilar-red shrink-0" />
            <span>Unidade I — BH</span>
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            {COMPANY_INFO.units[0].address}
            <br />
            CEP {COMPANY_INFO.units[0].cep}
          </p>
          <div className="space-y-1 text-xs">
            {COMPANY_INFO.units[0].phones.map((phone, i) => (
              <a
                key={i}
                href={`tel:${phone.replace(/\D/g, '')}`}
                className="block hover:text-pilar-red text-slate-200 font-semibold transition-colors"
              >
                📞 {phone}
              </a>
            ))}
          </div>
          <a
            href={getWhatsAppQuoteUrl(COMPANY_INFO.units[0].whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-whatsapp hover:underline font-bold pt-1"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Unidade BH</span>
          </a>
        </div>

        {/* Col 4: Unidade Conceição do Mato Dentro */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-pilar-terracotta/40 pb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-pilar-red shrink-0" />
            <span>Unidade II — CMD</span>
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            {COMPANY_INFO.units[1].address}
            <br />
            CEP {COMPANY_INFO.units[1].cep}
          </p>
          <div className="space-y-1 text-xs">
            {COMPANY_INFO.units[1].phones.map((phone, i) => (
              <a
                key={i}
                href={`tel:${phone.replace(/\D/g, '')}`}
                className="block hover:text-pilar-red text-slate-200 font-semibold transition-colors"
              >
                📞 {phone}
              </a>
            ))}
          </div>
          <a
            href={getWhatsAppQuoteUrl(COMPANY_INFO.units[1].whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-whatsapp hover:underline font-bold pt-1"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Unidade CMD</span>
          </a>
        </div>
      </div>

      {/* Bottom Copyright & Discreet Email */}
      <div className="bg-[#523132]/60 py-4 px-4 border-t border-pilar-terracotta/20 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p>
            © {currentYear} {COMPANY_INFO.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-pilar-red" />
              <span>{COMPANY_INFO.email}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
