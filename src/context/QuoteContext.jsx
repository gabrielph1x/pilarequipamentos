import React, { createContext, useContext, useState, useEffect } from 'react';
import { DEFAULT_WHATSAPP_NUMBER } from '../data/config';

const QuoteContext = createContext();

export function QuoteProvider({ children }) {
  const [quoteItems, setQuoteItems] = useState(() => {
    try {
      const saved = localStorage.getItem('pilar_quote_items');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Erro ao ler orçamentos salvos:', e);
      return [];
    }
  });

  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });

  useEffect(() => {
    try {
      localStorage.setItem('pilar_quote_items', JSON.stringify(quoteItems));
    } catch (e) {
      console.error('Erro ao salvar orçamento:', e);
    }
  }, [quoteItems]);

  const showToastNotification = (message, type = 'success') => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3500);
  };

  const addToQuote = (product, quantity = 1) => {
    setQuoteItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, quantity }];
      }
    });

    showToastNotification(`"${product.name}" foi adicionado ao seu orçamento!`);
  };

  const removeFromQuote = (productId) => {
    const itemToRemove = quoteItems.find((i) => i.product.id === productId);
    setQuoteItems((prev) => prev.filter((item) => item.product.id !== productId));
    if (itemToRemove) {
      showToastNotification(`Item removido do orçamento.`, 'info');
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromQuote(productId);
      return;
    }
    setQuoteItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearQuote = () => {
    setQuoteItems([]);
    showToastNotification('Lista de orçamento limpa.', 'info');
  };

  const isInQuote = (productId) => {
    return quoteItems.some((item) => item.product.id === productId);
  };

  const totalItemsCount = quoteItems.reduce((acc, item) => acc + item.quantity, 0);

  /**
   * Gera o link do WhatsApp formatado dinamicamente com a lista de itens
   * do carrinho de orçamento para conversão sem fricção.
   */
  const getWhatsAppQuoteUrl = (whatsappNumber = DEFAULT_WHATSAPP_NUMBER) => {
    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    if (quoteItems.length === 0) {
      const defaultText = encodeURIComponent(
        "Olá! Gostaria de falar com um consultor da Pilar Equipamentos sobre locação de equipamentos."
      );
      return `https://wa.me/${cleanNumber}?text=${defaultText}`;
    }

    let messageText = "*SOLICITAÇÃO DE ORÇAMENTO - PILAR EQUIPAMENTOS*\n\n";
    messageText += "Olá! Gostaria de solicitar a cotação dos seguintes equipamentos para minha obra:\n\n";

    quoteItems.forEach((item, index) => {
      messageText += `${index + 1}. *${item.product.name}* (Qtd: ${item.quantity})\n   - Categoria: ${item.product.categoryName}\n`;
    });

    messageText += `\n*Total de Itens:* ${totalItemsCount}\n`;
    messageText += "\nPor favor, me informe sobre valores, prazos de entrega e disponibilidade. Obrigado!";

    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(messageText)}`;
  };

  return (
    <QuoteContext.Provider
      value={{
        quoteItems,
        addToQuote,
        removeFromQuote,
        updateQuantity,
        clearQuote,
        isInQuote,
        totalItemsCount,
        getWhatsAppQuoteUrl,
        toast,
        showToastNotification
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote deve ser usado dentro de um QuoteProvider');
  }
  return context;
}
