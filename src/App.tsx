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
import { PhoneCall, ArrowUp } from 'lucide-react';
import { CONTACT_CONFIG } from './config/contact';

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.07c-.24.68-1.39 1.3-1.92 1.38-.49.07-.98.11-3.23-.78-2.26-.9-3.71-3.19-3.82-3.34-.11-.15-.91-1.21-.91-2.31 0-1.1.57-1.64.78-1.87.21-.23.46-.29.62-.29.15 0 .31 0 .44.01.14.01.32-.05.5.39.19.45.64 1.57.7 1.69.06.12.1.26.02.41-.08.16-.12.26-.24.4-.12.14-.25.32-.36.43-.12.12-.24.25-.1.5.14.24.63 1.04 1.35 1.68.93.83 1.71 1.09 1.95 1.21.24.12.39.1.53-.06.14-.17.62-.72.78-.97.16-.25.33-.21.55-.13.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.59-.18 1.27z"/>
  </svg>
);

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
    <div className="min-h-screen text-slate-900 flex flex-col justify-between selection:bg-[#00D4FF] selection:text-white relative">
      {/* Fixed Fullscreen Background Image for Entire Application */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-top bg-no-repeat bg-fixed opacity-95"
        style={{ backgroundImage: "url('/backgroud.png')" }}
      />

      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={navigateToPage}
        openLeadModal={() => setIsModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-grow relative z-10">
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

      {/* Floating Phone Call Button (Left Side) */}
      <div className="fixed bottom-6 left-6 z-40">
        <a
          href={`tel:${CONTACT_CONFIG.whatsappNumber}`}
          className="relative p-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/35 transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center"
          aria-label="Call A. Raghul"
        >
          <span className="absolute -inset-1 rounded-full bg-blue-400 opacity-40 animate-ping pointer-events-none" />
          <PhoneCall className="w-6 h-6 text-white" />
          
          {/* Tooltip on hover */}
          <span className="absolute left-14 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Call: {CONTACT_CONFIG.whatsappDisplay}
          </span>
        </a>
      </div>

      {/* Floating Bottom Quick Actions (Right Side) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-[#00B4D8]" />
          </button>
        )}

        {/* Floating Official WhatsApp Live Button */}
        <a
          href={CONTACT_CONFIG.getWhatsAppUrl("Hi A. Raghul, I am interested in generating leads with Pillow Digital.")}
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-emerald-500/35 transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
          <WhatsAppIcon className="w-6 h-6 text-white" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-14 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            WhatsApp A. Raghul
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;
