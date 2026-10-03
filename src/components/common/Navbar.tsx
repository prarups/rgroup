import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Menu, 
  X, 
  ArrowUpRight, 
  Sparkles 
} from 'lucide-react';
import { CONTACT_CONFIG } from '../../config/contact';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  openLeadModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  setCurrentPage, 
  openLeadModal 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'growth-system', label: 'Growth System' },
    { id: 'about', label: 'About & Founder' },
    { id: 'guarantee', label: 'Guarantee' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Dynamic 7-Color Rainbow Top Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-[#FF2E93] via-[#FF8A00] via-[#FFDE00] via-[#00E575] via-[#00D4FF] via-[#845EC2] to-[#FF2E93] z-50 transition-all duration-100 ease-out shadow-[0_0_16px_rgba(255,46,147,0.7)]"
        style={{ width: `${scrollProgress}%` }}
      />

      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#080E24]/95 backdrop-blur-2xl border-b border-[#00D4FF]/35 shadow-[0_10px_35px_rgba(8,14,36,0.35)] py-2.5' 
            : 'bg-[#0A122E]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_25px_rgba(8,14,36,0.2)] py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with Rainbow Badge */}
            <div 
              onClick={() => handleNavClick('home')} 
              className="cursor-pointer group flex items-center space-x-2.5"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#FF2E93] via-[#FFDE00] to-[#00D4FF] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-sm overflow-hidden flex-shrink-0">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center overflow-hidden p-0.5">
                  <img 
                    src="/logo.jpg" 
                    alt="Pillow Digital Logo" 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black tracking-wide text-white text-sm sm:text-base group-hover:text-gradient-rainbow transition-colors flex items-center leading-tight">
                  PILLOW <span className="text-[#00D4FF] ml-1">DIGITAL</span>
                </span>
                <span className="text-[9px] tracking-wider text-slate-300 font-extrabold uppercase leading-tight">
                  BY <span className="text-white font-extrabold">R GROUP</span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links - Compact Sleek Pill */}
            <nav className="hidden md:flex items-center space-x-0.5 bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/15 shadow-inner">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-slate-950 font-black shadow-md'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons - Simple, Clean & Awesome */}
            <div className="hidden md:flex items-center space-x-2">
              <a 
                href={CONTACT_CONFIG.getWhatsAppUrl("Hi A. Raghul, I want to get quality leads for my business through Pillow Digital.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-300 border border-emerald-500/40 bg-emerald-500/15 hover:bg-emerald-500/25 transition-all shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>WhatsApp Live</span>
              </a>

              <button
                onClick={openLeadModal}
                className="px-4 py-1.5 rounded-full text-xs font-black bg-gradient-to-r from-[#FF2E93] via-[#FF8A00] to-[#00D4FF] text-black shadow-sm shadow-pink-500/20 hover:scale-105 active:scale-95 transition-all flex items-center space-x-1"
              >
                <span>Get Daily Leads</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-black" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={openLeadModal}
                className="px-3 py-1 bg-gradient-to-r from-[#FF2E93] to-[#00D4FF] text-black font-black text-xs rounded-full shadow-sm"
              >
                Leads
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-white hover:text-[#00D4FF] rounded-lg bg-white/10 border border-white/15 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#080E24]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-5 mt-2 space-y-1.5 shadow-2xl">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  currentPage === link.id
                    ? 'bg-white/15 text-white font-extrabold border-l-4 border-[#00D4FF]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-white/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLeadModal();
                }}
                className="w-full py-2 px-4 bg-gradient-to-r from-[#FF2E93] via-[#FFDE00] to-[#00D4FF] text-black font-black text-xs rounded-full flex items-center justify-center space-x-1.5 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Launch Campaign (Get Daily Leads)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
