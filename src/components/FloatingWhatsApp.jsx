import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export default function FloatingWhatsApp() {
  const { getWhatsAppGeneralUrl, totalItemsCount } = useQuote();

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3">
      <a
        href={getWhatsAppGeneralUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full shadow-pilar-lg shadow-glow-green transition-all transform hover:scale-110 active:scale-95 animate-pulse-subtle min-w-[44px] min-h-[44px]"
        aria-label="Falar pelo WhatsApp com a Pilar Equipamentos"
        title="Falar no WhatsApp"
      >
        <MessageSquare className="w-7 h-7 text-white fill-white" />

        {/* Badge se houver itens no orçamento */}
        {totalItemsCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-pilar-red text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white animate-badge-pop">
            {totalItemsCount}
          </span>
        )}

        {/* Tooltip Hover visible on desktop */}
        <span className="absolute right-16 bg-[#332929] text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-pilar-md border border-pilar-terracotta pointer-events-none hidden sm:inline-block">
          Falar no WhatsApp
        </span>
      </a>
    </div>
  );
}
