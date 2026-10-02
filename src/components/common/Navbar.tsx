import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Menu, 
  X, 
  ArrowUpRight, 
  Sparkles 
} from 'lucide-react';

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
            ? 'bg-[#090C22]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-indigo-950/40 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with Rainbow Badge */}
            <div 
              onClick={() => handleNavClick('home')} 
              className="cursor-pointer group flex items-center space-x-3"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FF2E93] via-[#FFDE00] via-[#00E575] to-[#00D4FF] p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-pink-500/20 overflow-hidden">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center overflow-hidden p-0.5">
                  <img 
                    src="/logo.jpg" 
                    alt="Pillow Digital Logo" 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black tracking-wider text-white text-lg group-hover:text-gradient-rainbow transition-colors flex items-center">
                  PILLOW <span className="text-[#00D4FF] ml-1">DIGITAL</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-300 font-extrabold uppercase flex items-center">
                  BY <span className="text-white ml-1 font-extrabold">R GROUP</span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 glass-sapphire rounded-full px-4 py-1.5 border border-white/15 shadow-inner">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-bold transition-all duration-200 ${
                    currentPage === link.id
                      ? 'bg-gradient-to-r from-[#FF2E93]/20 via-[#00D4FF]/20 to-[#00E575]/20 text-[#00D4FF] border border-[#00D4FF]/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">


              <a 
                href="https://wa.me/919999999999?text=Hi%20A.%20Raghul,%20I%20want%20to%20get%20quality%20leads%20for%20my%20business%20through%20Pillow%20Digital."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-300 border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/50 shadow-sm transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block mr-1" />
                <span>WhatsApp Live</span>
              </a>

              <button
                onClick={openLeadModal}
                className="relative inline-flex items-center justify-center p-[2px] overflow-hidden rounded-xl font-bold group transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-pink-500/20"
              >
                <span className="w-full h-full bg-gradient-to-r from-[#FF2E93] via-[#FF8A00] via-[#FFDE00] via-[#00E575] via-[#00D4FF] to-[#845EC2] absolute"></span>
                <span className="relative px-4 py-2 transition-all ease-out bg-[#07091B] rounded-[10px] group-hover:bg-opacity-0 text-white group-hover:text-black font-extrabold text-xs lg:text-sm flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-[#FFDE00] group-hover:text-black" />
                  <span>Get Daily Leads</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={openLeadModal}
                className="px-3 py-1.5 bg-gradient-to-r from-[#FF2E93] to-[#00D4FF] text-black font-extrabold text-xs rounded-lg"
              >
                Enquire
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white rounded-lg glass-sapphire focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-sapphire border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  currentPage === link.id
                    ? 'bg-gradient-to-r from-[#FF2E93]/20 to-[#00D4FF]/20 text-[#00D4FF] border-l-4 border-[#00D4FF]'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLeadModal();
                }}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-[#FF2E93] via-[#FFDE00] to-[#00D4FF] text-black font-black text-sm rounded-lg flex items-center justify-center space-x-2 shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Campaign (Get Daily Leads)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
