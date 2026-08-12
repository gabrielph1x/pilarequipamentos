import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Check, Eye, MessageSquare } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { DEFAULT_WHATSAPP_NUMBER } from '../data/config';

export default function ProductCard({ product }) {
  const { addToQuote, isInQuote, getWhatsAppGeneralUrl } = useQuote();
  const [imgError, setImgError] = useState(false);
  const [recentlyAdded, setRecentlyAdded] = useState(false);
  const navigate = useNavigate();

  const isAlreadyInQuote = isInQuote(product.id);

  const handleAddQuote = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToQuote(product, 1);
    setRecentlyAdded(true);
    setTimeout(() => {
      setRecentlyAdded(false);
    }, 2500);
  };

  const handleCardClick = () => {
    navigate(`/produto/${product.slug}`);
  };

  const whatsappUrl = getWhatsAppGeneralUrl(
    DEFAULT_WHATSAPP_NUMBER,
    `Olá! Gostaria de solicitar um orçamento para o equipamento: ${product.name}.`
  );

  const fallbackSrc = `/images/products/${product.slug}.svg`;

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-2xl border border-pilar-border shadow-pilar-sm hover:shadow-pilar-lg transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer transform hover:-translate-y-1"
    >
      {/* Container da Imagem com Overflow Hidden e Hover Zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img
          src={imgError ? fallbackSrc : product.imageUrl}
          alt={product.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
          loading="lazy"
        />

        {/* Badge Vermelha de Destaque no Canto Superior Esquerdo */}
        {product.tag && (
          <span className="absolute top-3 left-3 z-10 bg-pilar-red text-white text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-md tracking-wider leading-tight max-w-[80%] pointer-events-none">
            {product.tag}
          </span>
        )}

        {/* Badge Cinza da Categoria no Canto Inferior Direito */}
        <span 
          className="absolute bottom-3 right-3 z-10 bg-pilar-charcoal/80 backdrop-blur-sm text-slate-200 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-600 max-w-[85%] truncate pointer-events-none shadow-sm"
          title={product.categoryName}
        >
          {product.categoryName}
        </span>
      </div>

      {/* Conteúdo do Card com Flex-1 para altura uniforme */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-2">
          <h3 className="font-extrabold text-base md:text-lg text-pilar-charcoal group-hover:text-pilar-red transition-colors leading-snug font-display">
            {product.name}
          </h3>

          <p className="text-xs text-slate-600 leading-relaxed">
            {product.shortDescription || product.description}
          </p>

          {/* Specs Preview */}
          {product.specs && Object.keys(product.specs).length > 0 && (
            <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5 text-[11px] text-slate-500">
              {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
                <span key={key} className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-medium">
                  <strong>{key}:</strong> {val}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Botões de Ação: WhatsApp Solicitar Orçamento + Detalhes */}
        <div className="space-y-2 pt-2 border-t border-slate-100 mt-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full py-2.5 px-3 rounded-xl font-extrabold text-xs bg-whatsapp hover:bg-whatsapp-hover text-white flex items-center justify-center gap-1.5 transition-all shadow-sm min-h-[42px]"
            title="Solicitar Orçamento direto via WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Solicitar Orçamento</span>
          </a>

          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/produto/${product.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-1 bg-slate-100 hover:bg-slate-200 text-pilar-charcoal px-3 py-2 rounded-xl font-bold text-xs transition-colors min-h-[38px]"
              title="Ver ficha técnica completa"
            >
              <Eye className="w-3.5 h-3.5 text-pilar-terracotta" />
              <span>Detalhes</span>
            </Link>

            <button
              onClick={handleAddQuote}
              className={`flex items-center justify-center gap-1 px-3 py-2 rounded-xl font-extrabold text-xs transition-all min-h-[38px] ${
                recentlyAdded || isAlreadyInQuote
                  ? 'bg-emerald-600 text-white'
                  : 'bg-pilar-red hover:bg-pilar-terracotta text-white'
              }`}
              title="Adicionar à lista de orçamento"
            >
              {recentlyAdded || isAlreadyInQuote ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>✓ Adicionado</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>+ Lista</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
