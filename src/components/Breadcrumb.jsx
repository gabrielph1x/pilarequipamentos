import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items = [], variant = 'dark', isDark: isDarkProp, className = '' }) {
  const isDark = isDarkProp !== undefined ? isDarkProp : variant === 'dark';
  const textShadowStyle = isDark ? { textShadow: '0 1px 3px rgba(0, 0, 0, 0.7)' } : {};

  return (
    <nav className={`flex items-center text-sm my-3 overflow-x-auto py-1 ${isDark ? 'text-white' : 'text-slate-600'} ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 whitespace-nowrap">
        <li className="inline-flex items-center">
          <Link
            to="/"
            style={textShadowStyle}
            className={`inline-flex items-center font-medium transition-colors gap-1.5 ${
              isDark 
                ? 'text-white/85 hover:text-white' 
                : 'text-slate-600 hover:text-pilar-red'
            }`}
          >
            <Home className={`w-4 h-4 ${isDark ? 'text-white' : 'text-pilar-terracotta'}`} />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center">
              <ChevronRight className={`w-4 h-4 mx-1 shrink-0 ${isDark ? 'text-white/70' : 'text-slate-400'}`} style={textShadowStyle} />
              {isLast || !item.url ? (
                <span
                  style={textShadowStyle}
                  className={`font-semibold max-w-[200px] md:max-w-xs truncate ${
                    isDark ? 'text-white font-bold' : 'text-pilar-charcoal'
                  }`}
                  title={item.label}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.url}
                  style={textShadowStyle}
                  className={`font-medium transition-colors ${
                    isDark 
                      ? 'text-white/85 hover:text-white' 
                      : 'text-slate-600 hover:text-pilar-red'
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
