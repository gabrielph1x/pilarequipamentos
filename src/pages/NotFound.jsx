import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-pilar-bg min-h-[70vh] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-pilar-border shadow-pilar-md text-center space-y-6 max-w-md">
        <div className="w-20 h-20 bg-pilar-red/10 text-pilar-red font-black text-3xl rounded-full flex items-center justify-center mx-auto">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-black text-pilar-charcoal font-display">
            Página não encontrada
          </h1>
          <p className="text-xs text-slate-500">
            A página ou equipamento que você procurou não existe ou foi movido.
          </p>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="bg-pilar-red text-white px-5 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-glow-red"
          >
            <Home className="w-4 h-4" />
            <span>Voltar para a Home</span>
          </Link>
          <Link
            to="/categoria/andaimes-elevacao"
            className="bg-slate-100 text-pilar-charcoal px-5 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4 text-pilar-terracotta" />
            <span>Ver Catálogo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
