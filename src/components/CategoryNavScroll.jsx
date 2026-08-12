import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Wrench, 
  Zap, 
  Hammer, 
  Cpu, 
  Maximize2,
  ChevronLeft,
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

export default function CategoryNavScroll({ activeSlug }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();

    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    const handleWheelNative = (e) => {
      // Executar scroll apenas em telas onde houver transbordamento real (mobile/tablet < lg)
      if (window.innerWidth < 1024 && el.scrollWidth > el.clientWidth) {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      }
    };

    el.addEventListener('wheel', handleWheelNative, { passive: false });

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
      el.removeEventListener('wheel', handleWheelNative);
    };
  }, [checkScroll]);

  // Drag com o mouse no mobile/tablet
  const handleMouseDown = (e) => {
    if (window.innerWidth >= 1024) return;
    const el = scrollRef.current;
    if (!el) return;
    setIsMouseDown(true);
    setHasMoved(false);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftPos(el.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown || window.innerWidth >= 1024) return;
    const el = scrollRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setHasMoved(true);
    }
    el.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleLinkClick = (e) => {
    if (hasMoved) {
      e.preventDefault();
    }
  };

  const scrollByAmount = (amount) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section id="categorias-quick-access" className="bg-[#332929] border-b border-white/10 py-2.5 sm:py-3.5 px-3 sm:px-4 relative z-30 shadow-pilar-md w-full select-none">
      <div className="max-w-7xl mx-auto relative flex items-center">
        
        {/* Botão de Navegação Esquerda (Mobile/Tablet apenas - OCULTO no Desktop lg:) */}
        <button
          type="button"
          onClick={() => scrollByAmount(-240)}
          disabled={!canScrollLeft}
          aria-label="Rolar categorias para a esquerda"
          className={`lg:hidden absolute left-0 z-20 w-8 h-8 rounded-full bg-[#523132] border border-pilar-terracotta/60 text-white flex items-center justify-center shadow-lg transition-all duration-200 ${
            canScrollLeft 
              ? 'opacity-100 hover:bg-pilar-red hover:border-pilar-red cursor-pointer scale-100' 
              : 'opacity-0 pointer-events-none scale-90'
          }`}
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>

        {/* Container dos Chips de Categoria:
            - Mobile/Tablet (< lg): Scroll horizontal fluido com snap
            - Desktop (>= lg): Flexbox proporcional ocupando 100% da largura, sem rolagem, sem setas e sem quebra/corte de texto
        */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex items-center gap-2.5 overflow-x-auto w-full py-1 px-1 scrollbar-none scroll-smooth snap-x snap-mandatory touch-pan-x cursor-grab active:cursor-grabbing justify-start lg:flex lg:items-center lg:justify-between lg:w-full lg:gap-1.5 xl:gap-2.5 lg:overflow-visible lg:touch-auto lg:cursor-default lg:px-0 lg:py-0"
          style={{
            touchAction: 'pan-x',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {CATEGORIES.map((cat) => {
            const IconComp = iconMap[cat.iconName] || Layers;
            const isSelected = activeSlug === cat.slug;
            return (
              <Link
                key={cat.id}
                to={`/categoria/${cat.slug}`}
                onClick={handleLinkClick}
                className={`flex items-center gap-2 px-3 py-2.5 sm:px-3.5 sm:py-2.5 lg:px-2.5 lg:py-2 xl:px-3.5 xl:py-2.5 rounded-xl text-xs lg:text-xs xl:text-xs 2xl:text-sm font-bold transition-all duration-200 shrink-0 lg:shrink-0 snap-start border whitespace-nowrap min-h-[42px] sm:min-h-[44px] ${
                  isSelected
                    ? 'bg-pilar-red text-white border-pilar-red shadow-glow-red scale-[1.02]'
                    : 'bg-[#523132] text-slate-100 border-pilar-terracotta/40 hover:bg-pilar-wine hover:border-pilar-red/60 hover:text-white hover:shadow-md'
                }`}
              >
                <IconComp className={`w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 ${isSelected ? 'text-white' : 'text-pilar-red'}`} />
                <span className="whitespace-nowrap">{cat.shortTitle}</span>
              </Link>
            );
          })}
          
          {/* Espaçador final (Mobile apenas) */}
          <div className="w-6 shrink-0 lg:hidden" />
        </div>

        {/* Botão de Navegação Direita (Mobile/Tablet apenas - OCULTO no Desktop lg:) */}
        <button
          type="button"
          onClick={() => scrollByAmount(240)}
          disabled={!canScrollRight}
          aria-label="Rolar categorias para a direita"
          className={`lg:hidden absolute right-0 z-20 w-8 h-8 rounded-full bg-[#523132] border border-pilar-terracotta/60 text-white flex items-center justify-center shadow-lg transition-all duration-200 ${
            canScrollRight 
              ? 'opacity-100 hover:bg-pilar-red hover:border-pilar-red cursor-pointer scale-100' 
              : 'opacity-0 pointer-events-none scale-90'
          }`}
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>

        {/* Máscaras de Gradiente (Mobile/Tablet apenas - OCULTAS no Desktop lg:) */}
        <div className={`lg:hidden absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#332929] to-transparent pointer-events-none z-10 transition-opacity duration-200 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`lg:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#332929] to-transparent pointer-events-none z-10 transition-opacity duration-200 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />

      </div>
    </section>
  );
}



