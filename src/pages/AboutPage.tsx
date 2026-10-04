import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  Award, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Building, 
  Target 
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

interface AboutPageProps {
  openLeadModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ openLeadModal }) => {
  useScrollReveal();

  const milestones = [
    { number: "4+", label: "Years of Experience", desc: "Specializing in Paid Social Media & Performance Lead Generation" },
    { number: "100+", label: "Clients Handled", desc: "Across Retail, Real Estate, Education, B2B, and Service Sectors" },
    { number: "100%", label: "Conversion Focus", desc: "Targeting high-intent buyers rather than vanity impression metrics" },
    { number: "R GROUP", label: "Corporate Backing", desc: "Backed by R GROUP's ecosystem of business growth and integrity" },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="scroll-reveal text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
        <span className="text-xs font-black uppercase tracking-widest text-gradient-rainbow">
          FOUNDER & AGENCY MISSION
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          About <span className="text-gradient-rainbow">Pillow Digital</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          An elite performance marketing and growth consulting firm operating under the prestigious umbrella of R GROUP.
        </p>
      </div>

      {/* Founder Spotlight Card with Real Images */}
      <div className="scroll-reveal p-6 sm:p-10 rounded-3xl rainbow-card border border-slate-200 max-w-5xl mx-auto mb-12 sm:mb-16 relative overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Avatar/Badge Image */}
          <div className="lg:col-span-5 flex flex-col items-center text-center space-y-4">
            <div className="relative group">
              <div className="w-56 h-72 sm:w-64 sm:h-80 rounded-3xl overflow-hidden border-2 border-[#00B4D8] shadow-xl shadow-cyan-500/15 bg-slate-100">
                <img 
                  src="/ragual.png" 
                  alt="A. Raghul - Founder & Growth Consultant" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF2E93] to-[#FFDE00] text-black font-black text-xs shadow-md whitespace-nowrap">
                4+ Years Exp • 100+ Clients
              </div>
            </div>

            <div className="pt-2">
              <h2 className="text-2xl font-black text-slate-900">A. RAGHUL</h2>
              <p className="text-xs text-[#00B4D8] font-bold">Founder & Business Growth Consultant</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">Pillow Digital • Under R GROUP</p>
            </div>
          </div>

          {/* Bio & Story */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-700 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Vision Behind Pillow Digital</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
              "We Don't Just Run Ads — We Engineer Predictable Customer Acquisition Systems."
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Having managed digital marketing campaigns for over <strong>100+ businesses</strong> across multiple industries over the past <strong>4+ years</strong>, A. Raghul realized that traditional agencies deliver vanity metrics like likes and impressions, while business owners starve for actual phone calls and customer enquiries.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Pillow Digital</strong> was founded to bridge this exact gap. By coupling rigorous audience targeting with high-converting video shoots and instant WhatsApp lead delivery, we ensure that every rupee spent on paid advertising works towards measurable top-line business growth.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={openLeadModal}
                className="px-6 py-3 bg-[#00D4FF] text-black font-black text-xs rounded-xl hover:brightness-110 shadow-md transition-all flex items-center space-x-2"
              >
                <span>Consult with A. Raghul</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
              <a
                href={CONTACT_CONFIG.getWhatsAppUrl("Hi A. Raghul, I would like to know more about Pillow Digital.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs rounded-xl transition-all shadow-sm"
              >
                Direct WhatsApp Message
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Visual Agency Work Environment Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
        <div className="rounded-2xl overflow-hidden border border-slate-200 h-48 relative group shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80" 
            alt="Agency Strategy Session" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
            <p className="text-xs font-bold text-white">Campaign Strategy & Optimization</p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 h-48 relative group shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80" 
            alt="Ad Shoot Gear" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
            <p className="text-xs font-bold text-white">4K Commercial Ad Shoots</p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 h-48 relative group shadow-md sm:col-span-2 lg:col-span-1">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
            alt="Data Analytics" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
            <p className="text-xs font-bold text-white">Continuous ROAS Tracking</p>
          </div>
        </div>
      </div>

      {/* Key Numbers Grid with Staggered Scroll Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
        {milestones.map((m, idx) => (
          <div 
            key={idx}
            className="scroll-reveal stat-card-lux p-6 text-center space-y-2 relative group"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF2E93] via-[#00D4FF] to-[#00E575]" />
            <p className="text-4xl font-black text-gradient-rainbow drop-shadow-sm">{m.number}</p>
            <p className="text-sm font-black text-slate-900">{m.label}</p>
            <p className="text-xs text-slate-600 font-medium">{m.desc}</p>
          </div>
        ))}
      </div>

      {/* Agency Core Values */}
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="scroll-reveal text-center space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Our 4 Core Operating Principles</h3>
          <p className="text-sm text-slate-500 font-medium">How we operate every single client campaign</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="scroll-reveal feature-card-lux p-7 space-y-3.5 group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 text-[#00B4D8]" />
            </div>
            <h4 className="text-xl font-black text-slate-900 group-hover:text-[#00B4D8] transition-colors">Precision Targeting</h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              We never blast ads to generalized audiences. We dissect demographics, locations, and buyer triggers to make sure only high-intent leads see your brand.
            </p>
          </div>

          <div className="scroll-reveal feature-card-lux p-7 space-y-3.5 group">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-[#845EC2]" />
            </div>
            <h4 className="text-xl font-black text-slate-900 group-hover:text-[#845EC2] transition-colors">Growth-First Mindset</h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Impressions don't pay business salaries. We measure our success purely on qualified leads delivered and the resulting business growth.
            </p>
          </div>

          <div className="scroll-reveal feature-card-lux p-7 space-y-3.5 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <h4 className="text-xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">Ethical Accountability</h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              We offer our Money-Back Guarantee on eligible packages because we believe in genuine accountability and respect our clients' investment.
            </p>
          </div>

          <div className="scroll-reveal feature-card-lux p-7 space-y-3.5 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <Building className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">Backed by R GROUP</h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Operating with the trust, discipline, and standards of R GROUP, building long-term business partnerships that last for years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
