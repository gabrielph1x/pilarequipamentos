import React from 'react';
import { CheckCircle, Info, X } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export default function Toast() {
  const { toast } = useQuote();

  if (!toast.visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-pilar-charcoal text-white px-5 py-4 rounded-xl shadow-pilar-lg border border-pilar-terracotta/40 animate-badge-pop max-w-md">
      {toast.type === 'success' ? (
        <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0" />
      ) : (
        <Info className="w-6 h-6 text-pilar-red shrink-0" />
      )}
      <p className="text-sm font-medium text-slate-100 flex-1">{toast.message}</p>
    </div>
  );
}
