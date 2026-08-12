import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex items-center text-sm text-slate-600 my-4 overflow-x-auto py-1" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 whitespace-nowrap">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-slate-600 hover:text-pilar-red font-medium transition-colors gap-1.5"
          >
            <Home className="w-4 h-4 text-pilar-terracotta" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center">
              <ChevronRight className="w-4 h-4 text-slate-400 mx-1 shrink-0" />
              {isLast || !item.url ? (
                <span className="font-semibold text-pilar-charcoal max-w-[200px] md:max-w-xs truncate" title={item.label}>
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.url}
                  className="font-medium text-slate-600 hover:text-pilar-red transition-colors"
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
