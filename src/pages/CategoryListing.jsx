import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { Search, Layers, SlidersHorizontal } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/catalog';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import CategoryNavScroll from '../components/CategoryNavScroll';
import ScrollReveal from '../components/ScrollReveal';

export default function CategoryListing() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'name-asc', 'name-desc'

  // Encontra a categoria correspondente ou fallback
  const currentCategory = useMemo(() => {
    return CATEGORIES.find((c) => c.slug === slug) || CATEGORIES[1];
  }, [slug]);

  // Filtra produtos pertencentes a esta categoria + busca interna por nome
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory = p.categorySlug === currentCategory.slug;
      const matchSearch = searchQuery
        ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return matchCategory && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [currentCategory, searchQuery, sortBy]);

  return (
    <div className="bg-pilar-bg pb-12 w-full overflow-x-hidden">
      {/* Category Banner Header */}
      <section className="bg-[#332929] text-white relative py-8 sm:py-12 px-4 border-b border-pilar-wine overflow-hidden w-full">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('${currentCategory.bannerImage}')` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto space-y-2.5">
          <Breadcrumb items={[{ label: currentCategory.title }]} />
          <ScrollReveal direction="up" duration={600}>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
              {currentCategory.title}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed mt-1">
              {currentCategory.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories Scroll Quick Access - Direct seamless transition */}
      <CategoryNavScroll activeSlug={currentCategory.slug} />

      <div className="max-w-7xl mx-auto px-4 pt-6 space-y-6 w-full">
        {/* Barra de Busca e Ordenação Otimizada para Mobile */}
        <div className="bg-white rounded-2xl p-4 border border-pilar-border shadow-pilar-sm space-y-3 md:space-y-0 md:flex md:items-center md:justify-between gap-4">
          
          {/* Campo de Busca com Placeholder Otimizado */}
          <div className="relative w-full md:w-80 lg:w-96">
            <input
              type="text"
              placeholder="Buscar equipamento nesta categoria..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 text-pilar-charcoal placeholder-slate-400 pl-9 pr-3 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-200 focus:outline-none focus:border-pilar-red focus:bg-white truncate"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
          </div>

          {/* Linha de Ordenação & Contador */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between md:justify-end gap-2.5 w-full md:w-auto pt-1 md:pt-0 border-t md:border-t-0 border-slate-100">
            {/* Badge de Contador de Resultados */}
            <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-2 rounded-xl text-center shrink-0 border border-slate-200">
              {filteredProducts.length} equipamento(s) encontrado(s)
            </span>

            {/* Controle de Ordenação */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200 justify-between sm:justify-start shrink-0">
              <span className="flex items-center gap-1.5 text-slate-500 shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5 text-pilar-terracotta" />
                <span>Ordenar:</span>
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none text-pilar-charcoal font-bold text-xs focus:outline-none cursor-pointer pr-1 truncate"
              >
                <option value="featured">Destaques Primeiro</option>
                <option value="name-asc">Nome (A - Z)</option>
                <option value="name-desc">Nome (Z - A)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid Responsivo de Cards de Produto */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 items-stretch">
            {filteredProducts.map((product, idx) => (
              <ScrollReveal key={product.id} direction="up" delay={(idx % 4) * 75} duration={500}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-pilar-border space-y-4 max-w-md mx-auto">
            <Layers className="w-12 h-12 text-pilar-terracotta mx-auto opacity-50" />
            <h3 className="text-base sm:text-lg font-bold text-pilar-charcoal font-display">
              Nenhum equipamento encontrado
            </h3>
            <p className="text-xs text-slate-500">
              Não encontramos resultados para "{searchQuery}" nesta categoria. Tente limpar os filtros.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="bg-pilar-red text-white text-xs font-bold px-4 py-2.5 rounded-xl min-h-[44px]"
            >
              Limpar busca
            </button>
          </div>
        )}

        {/* Resumo de Paginação */}
        <div className="bg-white rounded-xl p-3.5 text-center border border-pilar-border text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>
            Exibindo todos os {filteredProducts.length} itens desta lista
          </span>
          <div className="flex gap-2">
            <button disabled className="px-3 py-1 bg-slate-100 text-slate-400 rounded cursor-not-allowed text-[11px]">Anterior</button>
            <button disabled className="px-3 py-1 bg-slate-100 text-slate-400 rounded cursor-not-allowed text-[11px]">Próxima</button>
          </div>
        </div>
      </div>
    </div>
  );
}
