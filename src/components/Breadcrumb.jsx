import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items = [], isDark = true }) {
  return (
    <nav
      className="flex items-center text-sm my-4 overflow-x-auto py-1"
      style={isDark ? { textShadow: '0 1px 3px rgba(0, 0, 0, 0.6)' } : undefined}
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2 whitespace-nowrap">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className={`inline-flex items-center font-medium transition-colors gap-1.5 ${
              isDark ? 'text-white/75 hover:text-white' : 'text-slate-600 hover:text-pilar-red'
            }`}
          >
            <Home className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-pilar-terracotta'}`} />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center">
              <ChevronRight className={`w-4 h-4 mx-1 shrink-0 ${isDark ? 'text-white/60' : 'text-slate-400'}`} />
              {isLast || !item.url ? (
                <span
                  className={`font-semibold max-w-[200px] md:max-w-xs truncate ${
                    isDark ? 'text-white' : 'text-pilar-charcoal'
                  }`}
                  title={item.label}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.url}
                  className={`font-medium transition-colors ${
                    isDark ? 'text-white/75 hover:text-white' : 'text-slate-600 hover:text-pilar-red'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
