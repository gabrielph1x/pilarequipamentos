import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  Menu, 
  X, 
  Phone, 
  ChevronDown, 
  Layers,
  Wrench,
  Zap,
  Hammer,
  Cpu,
  Maximize2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/config';
import { CATEGORIES, PRODUCTS } from '../data/catalog';
import { useQuote } from '../context/QuoteContext';

const categoryIconMap = {
  Wrench: Wrench,
  Layers: Layers,
  Maximize2: Maximize2,
  Zap: Zap,
  Hammer: Hammer,
  Cpu: Cpu
};

export default function Header() {
  const { totalItemsCount } = useQuote();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [categoriesDropdownMounted, setCategoriesDropdownMounted] = useState(false);
  const closeTimeoutRef = useRef(null);
  const unmountTimeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      if (unmountTimeoutRef.current) clearTimeout(unmountTimeoutRef.current);
    };
  }, []);

  const handleMouseEnterCategories = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    if (unmountTimeoutRef.current) clearTimeout(unmountTimeoutRef.current);
    
    setCategoriesDropdownMounted(true);
    requestAnimationFrame(() => {
      setCategoriesDropdownOpen(true);
    });
  };

  const handleMouseLeaveCategories = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    if (unmountTimeoutRef.current) clearTimeout(unmountTimeoutRef.current);

    // 130ms de tolerância para iniciar o fechamento ao sair com o mouse
    closeTimeoutRef.current = setTimeout(() => {
      setCategoriesDropdownOpen(false);
      // Aguardar 150ms da animação de saída (fade + translateY + scale) antes de remover do DOM
      unmountTimeoutRef.current = setTimeout(() => {
        setCategoriesDropdownMounted(false);
      }, 150);
    }, 130);
  };

  const closeDropdownImmediately = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    if (unmountTimeoutRef.current) clearTimeout(unmountTimeoutRef.current);
    setCategoriesDropdownOpen(false);
    setCategoriesDropdownMounted(false);
  };

  const handleCategoriesClick = (e) => {
    e.preventDefault();
    closeDropdownImmediately();
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      const el = document.getElementById('secao-categorias');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: 'secao-categorias' } });
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim().length >= 2) {
      const filtered = PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.categoryName.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
      setSearchResults(filtered);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearchResults(false);
      setMobileMenuOpen(false);
      const targetCat = searchResults.length > 0 ? searchResults[0].categorySlug : 'acessorios';
      navigate(`/categoria/${targetCat}?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const selectSearchResult = (product) => {
    setShowSearchResults(false);
    setSearchQuery('');
    setMobileMenuOpen(false);
    navigate(`/produto/${product.slug}`);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-[#332929] text-white shadow-pilar-md border-b border-pilar-wine w-full">
      {/* Top Notification Bar - Solid Opaque Background (#523132) */}
      <div className="bg-[#523132] py-1.5 px-4 text-xs font-medium border-b border-pilar-terracotta/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-200">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block">📍 Atendimento BH & Grande BH + Conceição do Mato Dentro</span>
            <span className="inline-block sm:hidden text-[11px]">📍 Atendimento BH e CMD</span>
            <span className="hidden md:inline-block text-slate-400">|</span>
            <span className="hidden md:inline-block">{COMPANY_INFO.businessHours}</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.units[0].phones[0].replace(/\D/g, '')}`}
              className="flex items-center gap-1.5 hover:text-pilar-red transition-colors text-slate-100 font-semibold"
              title="Ligar para a unidade BH"
            >
              <Phone className="w-3.5 h-3.5 text-pilar-red" />
              <span className="text-xs">{COMPANY_INFO.units[0].phones[0]}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar - Solid Opaque Background (#332929) */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Logo (Lei de Jakob) */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-pilar-red text-white rounded-lg flex items-center justify-center font-black text-lg shadow-glow-red group-hover:scale-105 transition-transform border border-pilar-terracotta">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base md:text-xl tracking-tight text-white group-hover:text-slate-100 transition-colors leading-tight font-display">
              PILAR <span className="text-pilar-red">EQUIPAMENTOS</span>
            </span>
            <span className="text-[9px] md:text-[10px] text-slate-400 uppercase tracking-widest font-semibold hidden sm:inline-block">
              Locação para Construção Civil
            </span>
          </div>
        </Link>

        {/* Desktop Global Search Bar - Solid Opaque Background (#523132) */}
        <div className="relative flex-1 max-w-md hidden lg:block">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Buscar equipamento..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => searchQuery.length >= 2 && setShowSearchResults(true)}
              className="w-full bg-[#523132] text-white placeholder-slate-400 pl-10 pr-10 py-2 rounded-xl text-sm border border-pilar-terracotta/50 focus:outline-none focus:border-pilar-red focus:ring-1 focus:ring-pilar-red transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-2.5 pointer-events-none" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setShowSearchResults(false); }}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </form>

          {/* Autocomplete Search Dropdown */}
          {showSearchResults && searchResults.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-[#332929] border border-pilar-terracotta rounded-xl shadow-pilar-lg overflow-hidden z-50">
              <div className="p-2 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-[#523132]">
                Resultados encontrados
              </div>
              <div className="divide-y divide-[#523132] max-h-72 overflow-y-auto">
                {searchResults.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => selectSearchResult(product)}
                    className="w-full text-left p-3 hover:bg-[#523132] flex items-center gap-3 transition-colors group"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-10 h-10 object-cover rounded bg-[#523132] shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white group-hover:text-pilar-red transition-colors truncate">
                        {product.name}
                      </p>
                      <p className="text-xs text-slate-400 truncate">{product.categoryName}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium">
          <Link
            to="/"
            className={`px-3 py-2 rounded-lg transition-colors ${
              isActive('/') ? 'bg-pilar-red text-white font-semibold' : 'text-slate-200 hover:text-white hover:bg-[#523132]'
            }`}
          >
            Home
          </Link>

          {/* Categorias Dropdown */}
          <div 
            className="relative" 
            onMouseEnter={handleMouseEnterCategories}
            onMouseLeave={handleMouseLeaveCategories}
          >
            <button
              type="button"
              onClick={handleCategoriesClick}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                location.pathname.startsWith('/categoria')
                  ? 'bg-pilar-red text-white font-semibold'
                  : 'text-slate-200 hover:text-white hover:bg-[#523132]'
              }`}
            >
              <span>Categorias</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {categoriesDropdownMounted && (
              <div className="absolute left-0 top-full pt-1 w-64 z-50">
                <div 
                  className={`bg-[#332929] border border-pilar-terracotta rounded-xl shadow-pilar-lg overflow-hidden transition-all duration-150 transform ${
                    categoriesDropdownOpen 
                      ? 'opacity-100 translate-y-0 scale-100 ease-out' 
                      : 'opacity-0 -translate-y-2 scale-95 ease-in pointer-events-none'
                  }`}
                >
                  <div className="py-2">
                    {CATEGORIES.map((cat) => {
                      const IconComp = categoryIconMap[cat.iconName] || Layers;
                      return (
                        <Link
                          key={cat.id}
                          to={`/categoria/${cat.slug}`}
                          onClick={closeDropdownImmediately}
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#523132] text-slate-200 hover:text-white text-sm transition-colors"
                        >
                          <IconComp className="w-4 h-4 text-pilar-red shrink-0" />
                          <span>{cat.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/empresa"
            className={`px-3 py-2 rounded-lg transition-colors ${
              isActive('/empresa') ? 'bg-pilar-red text-white font-semibold' : 'text-slate-200 hover:text-white hover:bg-[#523132]'
            }`}
          >
            Empresa
          </Link>

          <Link
            to="/contato"
            className={`px-3 py-2 rounded-lg transition-colors ${
              isActive('/contato') ? 'bg-pilar-red text-white font-semibold' : 'text-slate-200 hover:text-white hover:bg-[#523132]'
            }`}
          >
            Contato
          </Link>
        </nav>

        {/* Orçamento Cart Counter Badge (Lei de Jakob & Fitts) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/orcamento"
            className="relative flex items-center gap-2 bg-pilar-red hover:bg-pilar-terracotta text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-glow-red transition-all transform active:scale-95 min-h-[44px]"
            title="Ver orçamento de equipamentos"
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline-block">Orçamento:</span>
            <span className="bg-white text-pilar-red px-2 py-0.5 rounded-full text-xs font-black">
              {totalItemsCount}
            </span>
          </Link>

          {/* Mobile Hamburger Toggle Button (Fitts's Law min 44x44 Touch Target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-slate-200 hover:text-white hover:bg-[#523132] rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Abrir menu principal"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu - Solid Opaque Background (#332929) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#332929] border-t border-pilar-wine px-4 pt-3 pb-6 space-y-4 animate-badge-pop w-full">
          {/* Mobile Search Input */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Buscar equipamento..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-[#523132] text-white placeholder-slate-400 pl-10 pr-4 py-2.5 rounded-xl text-sm border border-pilar-terracotta/50 focus:outline-none focus:border-pilar-red"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
          </form>

          {/* Nav Links */}
          <div className="flex flex-col space-y-1.5 text-base font-medium">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl transition-colors ${
                isActive('/') ? 'bg-pilar-red text-white font-bold' : 'text-slate-200 hover:bg-[#523132]'
              }`}
            >
              Home
            </Link>

            <Link
              to="/empresa"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl transition-colors ${
                isActive('/empresa') ? 'bg-pilar-red text-white font-bold' : 'text-slate-200 hover:bg-[#523132]'
              }`}
            >
              Empresa (Sobre a Pilar)
            </Link>

            <button
              type="button"
              onClick={handleCategoriesClick}
              className="pt-2 pb-1 text-xs font-bold text-pilar-terracotta hover:text-white uppercase tracking-wider px-4 text-left flex items-center justify-between transition-colors cursor-pointer"
            >
              <span>Categorias do Catálogo</span>
              <span className="text-[10px] text-pilar-red font-semibold lowercase underline">ver todas</span>
            </button>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/categoria/${cat.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-[#523132] text-sm flex items-center gap-2 pl-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-pilar-red"></span>
                <span>{cat.title}</span>
              </Link>
            ))}

            <Link
              to="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl transition-colors ${
                isActive('/contato') ? 'bg-pilar-red text-white font-bold' : 'text-slate-200 hover:bg-[#523132]'
              }`}
            >
              Contato & Unidades
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
