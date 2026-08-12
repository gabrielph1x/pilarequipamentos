import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, 
  Check, 
  MessageSquare, 
  ShieldCheck, 
  Truck, 
  Wrench, 
  ArrowLeft, 
  Maximize2, 
  X,
  Share2
} from 'lucide-react';
import { PRODUCTS } from '../data/catalog';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import { useQuote } from '../context/QuoteContext';
import { DEFAULT_WHATSAPP_NUMBER } from '../data/config';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToQuote, isInQuote, getWhatsAppQuoteUrl } = useQuote();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [recentlyAdded, setRecentlyAdded] = useState(false);

  // Encontra o produto correspondente pelo slug
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const isAlreadyInQuote = isInQuote(product.id);

  // Encontra produtos relacionados da mesma categoria (excluindo o atual)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4);

  const handleAddQuote = () => {
    addToQuote(product, 1);
    setRecentlyAdded(true);
    setTimeout(() => {
      setRecentlyAdded(false);
    }, 3000);
  };

  // URL do WhatsApp com mensagem pré-preenchida específica (parâmetro ?text= da URL, mantendo label do botão fixo)
  const whatsappUrl = getWhatsAppQuoteUrl(
    DEFAULT_WHATSAPP_NUMBER,
    `Olá! Gostaria de solicitar um orçamento para o equipamento: ${product.name} (Categoria: ${product.categoryName}).`
  );

  const fallbackSrc = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='450' viewBox='0 0 600 450'%3E%3Crect width='600' height='450' fill='%3C332929'/%3E%3Cpath d='M250 150 H350 V190 H310 V290 H290 V190 H250 Z' fill='%23B72527'/%3E%3Ctext x='300' y='340' font-family='sans-serif' font-size='20' fill='%23FFFFFF' text-anchor='middle'%3EPILAR EQUIPAMENTOS%3C/text%3E%3C/svg%3E";

  return (
    <div className="bg-pilar-bg space-y-12 pb-12">
      {/* Container Principal */}
      <div className="max-w-7xl mx-auto px-4 pt-6 space-y-8">
        <Breadcrumb
          items={[
            { label: product.categoryName, url: `/categoria/${product.categorySlug}` },
            { label: product.name }
          ]}
        />

        {/* Card Principal de Detalhes (Grid 2 colunas) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-pilar-border shadow-pilar-md grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Coluna da Imagem Grande com Lightbox Trigger */}
          <div className="lg:col-span-6 space-y-4">
            <div
              onClick={() => setLightboxOpen(true)}
              className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer shadow-inner"
            >
              <img
                src={imgError ? fallbackSrc : product.imageUrl}
                alt={product.name}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-pilar-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-pilar-charcoal/90 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                  <Maximize2 className="w-4 h-4 text-pilar-red" />
                  <span>Ampliar Imagem</span>
                </span>
              </div>

              {product.tag && (
                <span className="absolute top-4 left-4 bg-pilar-red text-white text-xs font-extrabold uppercase px-3 py-1 rounded-md shadow-md tracking-wider">
                  {product.tag}
                </span>
              )}
            </div>

            <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
              <Maximize2 className="w-3 h-3" />
              <span>Clique na imagem para ampliar em tela cheia</span>
            </p>
          </div>

          {/* Coluna de Informações e Ações */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="inline-block bg-pilar-bg text-pilar-red text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded">
                {product.categoryName}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-pilar-charcoal font-display leading-tight">
                {product.name}
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Ficha Técnica Detalhada (Tabela/Grid de Especificações - Requirement #7) */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h3 className="text-xs font-extrabold text-pilar-charcoal uppercase tracking-wider">
                Especificações Técnicas
              </h3>
              <div className="bg-pilar-bg rounded-2xl p-4 border border-pilar-border divide-y divide-slate-200 text-xs">
                {product.specs &&
                  Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="py-2.5 flex justify-between items-center gap-4">
                      <span className="font-semibold text-slate-600 shrink-0">{key}</span>
                      <span className="font-bold text-pilar-charcoal text-right">{val}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Botões de Ação Principais (Requirement #7) */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              {/* Botão Principal "+ Adicionar ao Orçamento" */}
              <button
                onClick={handleAddQuote}
                className={`w-full py-4 px-6 rounded-2xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-pilar-md min-h-[44px] ${
                  recentlyAdded || isAlreadyInQuote
                    ? 'bg-emerald-600 text-white'
                    : 'bg-pilar-red hover:bg-pilar-terracotta text-white shadow-glow-red'
                }`}
              >
                {recentlyAdded || isAlreadyInQuote ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>✓ Adicionado ao Orçamento</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    <span>+ Adicionar ao Orçamento</span>
                  </>
                )}
              </button>

              {/* Botão Secundário "Solicitar via WhatsApp" */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl font-extrabold text-sm sm:text-base bg-whatsapp hover:bg-whatsapp-hover text-white flex items-center justify-center gap-2.5 transition-all shadow-glow-green min-h-[44px]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Solicitar via WhatsApp Agora</span>
              </a>
            </div>

            {/* Garantias e Logística */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-500">
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <Truck className="w-4 h-4 text-pilar-red shrink-0" />
                <span>Entrega rápida na sua obra</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <Wrench className="w-4 h-4 text-pilar-red shrink-0" />
                <span>Troca imediata se necessário</span>
              </div>
            </div>
          </div>
        </section>

        {/* Seção "Produtos Relacionados" (Requirement #7) */}
        {relatedProducts.length > 0 && (
          <section className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="text-xl font-extrabold text-pilar-charcoal font-display">
                Produtos Relacionados em {product.categoryName}
              </h2>
              <Link
                to={`/categoria/${product.categorySlug}`}
                className="text-xs font-bold text-pilar-red hover:underline"
              >
                Ver todos
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Lightbox Modal para Zoom da Imagem */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-pilar-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 animate-badge-pop"
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white p-3 bg-pilar-wine rounded-full hover:bg-pilar-red transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={imgError ? fallbackSrc : product.imageUrl}
            alt={product.name}
            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-pilar-lg border-2 border-pilar-terracotta"
          />
        </div>
      )}
    </div>
  );
}
