import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Check, Eye, ChevronRight, Tag } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export default function ProductCard({ product }) {
  const { addToQuote, isInQuote } = useQuote();
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

  // Fallback image generator (SVG with brand logo)
  const fallbackSrc = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%3C332929'/%3E%3Cpath d='M160 100 H240 V130 H210 V200 H190 V130 H160 Z' fill='%23B72527'/%3E%3Ctext x='200' y='240' font-family='sans-serif' font-size='16' fill='%23FFFFFF' text-anchor='middle'%3EPILAR EQUIPAMENTOS%3C/text%3E%3C/svg%3E";

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-2xl border border-pilar-border shadow-pilar-sm hover:shadow-pilar-lg transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer transform hover:-translate-y-1"
    >
      {/* Container da Imagem com Overflow Hidden e Hover Zoom (Seção 6) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-pilar-wine/10">
        <img
          src={imgError ? fallbackSrc : product.imageUrl}
          alt={product.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
          loading="lazy"
        />

        {/* Tag / Badge no topo do card */}
        {product.tag && (
          <span className="absolute top-3 left-3 bg-pilar-red text-white text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-md tracking-wider">
            {product.tag}
          </span>
        )}

        <span className="absolute top-3 right-3 bg-pilar-charcoal/80 backdrop-blur-sm text-slate-200 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-600">
          {product.categoryName}
        </span>
      </div>

      {/* Conteúdo do Card com Flex-1 para altura uniforme */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-2">
          <h3 className="font-extrabold text-base md:text-lg text-pilar-charcoal group-hover:text-pilar-red transition-colors line-clamp-2 leading-snug font-display">
            {product.name}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Mini Specs Preview (Gestalt Proximity) */}
          {product.specs && (
            <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5 text-[11px] text-slate-500">
              {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
                <span key={key} className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-medium">
                  <strong>{key}:</strong> {val}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Botões de Ação Lado a Lado (Lei de Fitts & Feedback Visível) */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 mt-auto">
          <Link
            to={`/produto/${product.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-1 bg-slate-100 hover:bg-slate-200 text-pilar-charcoal px-3 py-2.5 rounded-xl font-bold text-xs transition-colors min-h-[44px]"
            title="Ver ficha técnica completa do produto"
          >
            <Eye className="w-3.5 h-3.5 text-pilar-terracotta" />
            <span>Detalhes</span>
          </Link>

          <button
            onClick={handleAddQuote}
            className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl font-extrabold text-xs transition-all shadow-sm min-h-[44px] ${
              recentlyAdded || isAlreadyInQuote
                ? 'bg-emerald-600 text-white'
                : 'bg-pilar-red hover:bg-pilar-terracotta text-white shadow-glow-red'
            }`}
            title="Adicionar ao orçamento sem sair da página"
          >
            {recentlyAdded || isAlreadyInQuote ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>✓ Adicionado</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>+ Orçamento</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
