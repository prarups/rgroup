import React from 'react';
import { 
  Zap, 
  ArrowUpRight, 
  Globe, 
  ShieldCheck, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
  openLeadModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, openLeadModal }) => {
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05081C] border-t border-indigo-500/20 pt-16 pb-12 overflow-hidden z-20">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-[#00F0FF]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-indigo-500/20">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#00F0FF] via-[#6366F1] to-[#A855F7] p-[2px] shadow-lg overflow-hidden">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center overflow-hidden p-0.5">
                  <img 
                    src="/logo.jpg" 
                    alt="Pillow Digital Logo" 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
              <div>
                <span className="font-black tracking-wider text-white text-xl">
                  PILLOW <span className="text-[#00F0FF]">DIGITAL</span>
                </span>
                <p className="text-[10px] tracking-widest text-indigo-300 font-extrabold uppercase">
                  BY <span className="text-white">R GROUP</span>
                </p>
              </div>
            </div>

            <p className="text-sm text-indigo-200/90 max-w-sm leading-relaxed">
              We Solve Your Lead Generation Problem. Data-driven paid advertising systems, professional ad shoots, and business growth consulting delivering customer enquiries directly to WhatsApp.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <div className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs text-indigo-100 font-bold">
                <span className="text-[#00F0FF]">4+ Years</span> Exp
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs text-indigo-100 font-bold">
                <span className="text-[#A855F7]">100+</span> Clients Handled
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-indigo-200">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-[#00F0FF] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-[#00F0FF] transition-colors">
                  7 Core Services
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('growth-system')} className="hover:text-[#00F0FF] transition-colors">
                  Growth System
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-[#00F0FF] transition-colors">
                  About A. Raghul
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('guarantee')} className="hover:text-[#00F0FF] transition-colors">
                  Guarantee Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-[#00F0FF] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Growth Services
            </h4>
            <ul className="space-y-2 text-sm text-indigo-200">
              <li>Social Media Paid Advertising</li>
              <li>Targeted Lead Generation</li>
              <li>Daily WhatsApp Leads</li>
              <li>Professional Ad Shoot</li>
              <li>Premium Poster Design</li>
              <li>Business Growth Consulting</li>
            </ul>
          </div>

          {/* Founder Profile */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Founder & Consultant
            </h4>
            <div className="p-4 rounded-2xl glass-sapphire border border-indigo-400/30 space-y-2 shadow-lg">
              <p className="text-sm font-black text-white">A. RAGHUL</p>
              <p className="text-xs text-[#00F0FF] font-bold">Founder & Growth Consultant</p>
              <p className="text-[11px] text-indigo-200">
                Pillow Digital • By R GROUP
              </p>

              <button
                onClick={openLeadModal}
                className="w-full mt-2 py-2 px-3 rounded-xl bg-gradient-to-r from-[#00F0FF]/25 to-[#6366F1]/25 hover:brightness-125 border border-[#00F0FF]/40 text-xs font-black text-[#00F0FF] flex items-center justify-center space-x-1.5 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat with A. Raghul</span>
              </button>
            </div>

            <div className="pt-2 flex flex-col space-y-1.5 text-xs text-indigo-300">
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 inline-block" />
                <a 
                  href="https://www.instagram.com/pillow_digital" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="font-bold text-pink-300 hover:text-pink-200 transition-colors"
                >
                  Instagram: @pillow_digital
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-indigo-300/80 gap-4">
          <p>© {new Date().getFullYear()} PILLOW DIGITAL. Operated under R GROUP. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => navigateTo('guarantee')} className="hover:text-white transition-colors">
              Guarantee Terms & Eligibility
            </button>
            <button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">
              Direct Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
