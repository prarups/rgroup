import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { LeadModal } from './components/common/LeadModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { GrowthSystemPage } from './pages/GrowthSystemPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { GuaranteeTermsPage } from './pages/GuaranteeTermsPage';
import { MessageCircle, ArrowUp } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Synchronize hash in URL for back/forward browser support and direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'services', 'growth-system', 'about', 'guarantee', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Track scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = (pageId: string) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage openLeadModal={() => setIsModalOpen(true)} />;
      case 'growth-system':
        return <GrowthSystemPage openLeadModal={() => setIsModalOpen(true)} />;
      case 'about':
        return <AboutPage openLeadModal={() => setIsModalOpen(true)} />;
      case 'guarantee':
        return <GuaranteeTermsPage openLeadModal={() => setIsModalOpen(true)} />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage setCurrentPage={navigateToPage} openLeadModal={() => setIsModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#08080C] text-slate-100 flex flex-col justify-between selection:bg-[#00F0FF] selection:text-black">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={navigateToPage}
        openLeadModal={() => setIsModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer
        setCurrentPage={navigateToPage}
        openLeadModal={() => setIsModalOpen(true)}
      />

      {/* Global Lead Inquiry Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Floating Bottom Quick Actions */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glass-panel hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-[#00F0FF]" />
          </button>
        )}

        {/* Floating WhatsApp Live Button */}
        <a
          href="https://wa.me/919999999999?text=Hi%20A.%20Raghul,%20I%20am%20interested%20in%20generating%20leads%20with%20Pillow%20Digital."
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
          <MessageCircle className="w-6 h-6 text-black fill-black" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-14 px-3 py-1.5 rounded-lg bg-[#0C0C14] text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Chat with A. Raghul
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;
