import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  MessageSquare, 
  ArrowLeft, 
  CheckCircle, 
  Sparkles,
  ArrowRight,
  Info
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import Breadcrumb from '../components/Breadcrumb';

export default function Orcamento() {
  const { 
    quoteItems, 
    removeFromQuote, 
    updateQuantity, 
    clearQuote, 
    totalItemsCount, 
    getWhatsAppQuoteUrl 
  } = useQuote();

  return (
    <div className="bg-pilar-bg min-h-screen space-y-8 pb-16">
      {/* Header Banner */}
      <section className="bg-pilar-charcoal text-white py-12 px-4 border-b-4 border-pilar-red">
        <div className="max-w-7xl mx-auto space-y-3">
          <Breadcrumb items={[{ label: 'Meu Orçamento' }]} />
          <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight text-white flex items-center gap-3">
            <ShoppingCart className="w-8 h-8 text-pilar-red" />
            <span>Lista de <span className="text-pilar-red">Orçamento</span></span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            Revise os equipamentos selecionados e envie seu pedido de cotação diretamente para nossos consultores pelo WhatsApp com apenas um clique.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        {quoteItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Coluna Esquerda: Lista de Produtos Adicionados */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between bg-white rounded-2xl p-4 border border-pilar-border shadow-pilar-sm">
                <span className="text-sm font-extrabold text-pilar-charcoal font-display">
                  Itens Selecionados ({quoteItems.length} modelos / {totalItemsCount} unidades)
                </span>
                <button
                  onClick={clearQuote}
                  className="text-xs font-semibold text-rose-600 hover:text-rose-800 hover:underline flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Limpar lista</span>
                </button>
              </div>

              {/* Cards dos Itens no Carrinho */}
              <div className="space-y-3">
                {quoteItems.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-pilar-border shadow-pilar-sm flex flex-col sm:flex-row items-center justify-between gap-4 transition-all hover:border-pilar-terracotta"
                  >
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl bg-slate-100 shrink-0 border border-slate-200"
                      />
                      <div className="space-y-1 min-w-0 flex-1">
                        <span className="text-[10px] font-bold uppercase text-pilar-red bg-pilar-bg px-2 py-0.5 rounded">
                          {product.categoryName}
                        </span>
                        <h3 className="font-extrabold text-sm sm:text-base text-pilar-charcoal line-clamp-1 font-display">
                          {product.name}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {product.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Ajuste de Quantidade & Botão de Excluir */}
                    <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0">
                      <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="w-8 h-8 rounded-lg bg-white text-pilar-charcoal hover:bg-pilar-red hover:text-white flex items-center justify-center transition-colors font-bold"
                          title="Diminuir quantidade"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center font-extrabold text-sm text-pilar-charcoal">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-white text-pilar-charcoal hover:bg-pilar-red hover:text-white flex items-center justify-center transition-colors font-bold"
                          title="Aumentar quantidade"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromQuote(product.id)}
                        className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                        title="Remover produto do orçamento"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botão Adicionar Mais Produtos (Requirement #8) */}
              <div className="pt-2">
                <Link
                  to="/categoria/andaimes-elevacao"
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-pilar-charcoal px-5 py-3 rounded-xl font-bold text-xs transition-colors min-h-[44px]"
                >
                  <Plus className="w-4 h-4 text-pilar-red" />
                  <span>Adicionar mais produtos ao orçamento</span>
                </Link>
              </div>
            </div>

            {/* Coluna Direita: Resumo & Botão Grande WhatsApp (Sem Formulário! Requirement #8) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pilar-border shadow-pilar-md space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-extrabold text-pilar-charcoal font-display">
                    Resumo da Cotação
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Sem necessidade de preencher formulários extensos.
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Equipamentos diferentes:</span>
                    <strong className="text-pilar-charcoal">{quoteItems.length}</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Quantidade total de itens:</span>
                    <strong className="text-pilar-charcoal">{totalItemsCount} unidade(s)</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Suporte de entrega:</span>
                    <strong className="text-emerald-600">Incluso na cotação</strong>
                  </div>
                </div>

                {/* Caixa Informativa */}
                <div className="bg-pilar-bg rounded-2xl p-4 border border-pilar-border space-y-2">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-pilar-charcoal">
                    <Sparkles className="w-4 h-4 text-pilar-red" />
                    <span>Como funciona o envio?</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ao clicar no botão abaixo, a sua lista será formatada automaticamente no seu WhatsApp para que o consultor responda com preços e prazos imediatamente.
                  </p>
                </div>

                {/* Botão Grande de WhatsApp (Requirement #8) */}
                <a
                  href={getWhatsAppQuoteUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl font-black text-sm sm:text-base bg-whatsapp hover:bg-whatsapp-hover text-white flex items-center justify-center gap-3 transition-all shadow-glow-green min-h-[44px] transform hover:scale-[1.02]"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>Finalizar orçamento pelo WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        ) : (
          /* Estado Vazio do Carrinho */
          <div className="bg-white rounded-3xl p-12 text-center border border-pilar-border space-y-6 max-w-lg mx-auto shadow-pilar-sm">
            <div className="w-20 h-20 bg-pilar-bg text-pilar-terracotta rounded-full flex items-center justify-center mx-auto border border-pilar-border">
              <ShoppingCart className="w-10 h-10 opacity-60" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-pilar-charcoal font-display">
                Seu orçamento está vazio
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Você ainda não adicionou nenhum equipamento. Explore o nosso catálogo e clique no botão "+ Orçamento" nos produtos desejados.
              </p>
            </div>
            <div>
              <Link
                to="/categoria/andaimes-elevacao"
                className="inline-flex items-center gap-2 bg-pilar-red hover:bg-pilar-terracotta text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-glow-red transition-all min-h-[44px]"
              >
                <span>Explorar Catálogo de Equipamentos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
