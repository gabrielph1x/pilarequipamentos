import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { QuoteProvider } from './context/QuoteContext';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Toast from './components/Toast';

import Home from './pages/Home';
import Empresa from './pages/Empresa';
import CategoryListing from './pages/CategoryListing';
import ProductDetail from './pages/ProductDetail';
import Orcamento from './pages/Orcamento';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';

// Helper component para resetar scroll ao trocar de página
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <QuoteProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-pilar-bg font-sans text-pilar-charcoal antialiased">
          <Header />
          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/empresa" element={<Empresa />} />
              <Route path="/categoria/:slug" element={<CategoryListing />} />
              <Route path="/produto/:slug" element={<ProductDetail />} />
              <Route path="/orcamento" element={<Orcamento />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
          <Toast />
        </div>
      </BrowserRouter>
    </QuoteProvider>
  );
}
