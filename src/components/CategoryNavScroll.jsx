import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Wrench, 
  Zap, 
  Hammer, 
  Cpu, 
  Maximize2,
  Search,
  ChevronRight
} from 'lucide-react';
import { CATEGORIES } from '../data/catalog';

const iconMap = {
  Wrench: Wrench,
  Layers: Layers,
  Maximize2: Maximize2,
  Zap: Zap,
  Hammer: Hammer,
  Cpu: Cpu
};

export default function CategoryNavScroll({ activeSlug, onSearchChange, searchValue }) {
  return (
    <section id="categorias-quick-access" className="bg-[#332929] border-y border-pilar-wine py-3 px-3 sm:px-4 relative z-30 shadow-pilar-md w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 w-full">
        
        {/* Horizontal Category Chips Container com Fade Mask à direita */}
        <div className="relative w-full md:w-auto flex-1 min-w-0 overflow-hidden">
          <div className="flex items-center gap-2 overflow-x-auto w-full pb-1 pt-0.5 scrollbar-none scroll-smooth">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 hidden lg:inline-block">
              Navegar por Categoria:
            </span>

            {CATEGORIES.map((cat) => {
              const IconComp = iconMap[cat.iconName] || Layers;
              const isSelected = activeSlug === cat.slug;
              return (
                <Link
                  key={cat.id}
                  to={`/categoria/${cat.slug}`}
                  className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 border ${
                    isSelected
                      ? 'bg-pilar-red text-white border-pilar-red shadow-glow-red'
                      : 'bg-[#523132] text-slate-200 border-pilar-terracotta/40 hover:bg-pilar-wine hover:text-white'
                  }`}
                >
                  <IconComp className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-pilar-red'}`} />
                  <span>{cat.shortTitle}</span>
                </Link>
              );
            })}
          </div>

          {/* Fade Gradient Indicator à direita em mobile para indicar que a barra rola pro lado */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#332929] to-transparent pointer-events-none md:hidden flex items-center justify-end pr-0.5">
            <ChevronRight className="w-3.5 h-3.5 text-pilar-red opacity-80" />
          </div>
        </div>

        {/* Quick Search Input se ativado */}
        {onSearchChange && (
          <div className="w-full md:w-64 shrink-0 pt-1 md:pt-0">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar equipamento..."
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-[#523132] text-white placeholder-slate-400 pl-8 pr-3 py-1.5 rounded-lg text-xs border border-pilar-terracotta/40 focus:outline-none focus:border-pilar-red truncate"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2 pointer-events-none" />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
