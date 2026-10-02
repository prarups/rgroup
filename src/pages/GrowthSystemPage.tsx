import React from 'react';
import { Pipeline3DCanvas } from '../components/canvas/Pipeline3DCanvas';
import { InteractiveGrowthSystem } from '../components/growth/InteractiveGrowthSystem';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  Target, 
  Megaphone, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface GrowthSystemPageProps {
  openLeadModal: () => void;
}

export const GrowthSystemPage: React.FC<GrowthSystemPageProps> = ({ openLeadModal }) => {
  useScrollReveal();

  const steps = [
    {
      step: "01",
      name: "TARGET",
      tagline: "Audience Profiling & Market Intelligence",
      icon: Target,
      color: "#FF2E93",
      description: "We don't guess who your customer is. We study demographics, purchase behaviors, pain points, and geographic sweet spots to define high-intent customer segments.",
      actions: [
        "Buyer persona mapping and purchasing power identification",
        "Competitor ad reverse-engineering and gap analysis",
        "Micro-geographic radius targeting for local businesses"
      ]
    },
    {
      step: "02",
      name: "ADVERTISE",
      tagline: "Conversion-Centric Creative & Strategic Paid Ads",
      icon: Megaphone,
      color: "#FF8A00",
      description: "We launch custom Meta Ads (Facebook & Instagram) engineered with high-impact visual hooks, psychological copy, and dynamic testing variations.",
      actions: [
        "Dynamic video reels, promotional ad shoots, and premium posters",
        "High-converting direct response copywriting",
        "Meta pixel optimization, event tracking, and retargeting loops"
      ]
    },
    {
      step: "03",
      name: "GENERATE",
      tagline: "High-Intent Enquiries & Lead Filtering",
      icon: Zap,
      color: "#FFDE00",
      description: "Quality beats quantity. We implement smart qualification questions to filter out casual window-shoppers, leaving only serious buyers who are ready to purchase.",
      actions: [
        "Instant lead generation forms with pre-qualification questions",
        "Automated phone number & location verification",
        "Spam lead prevention filters"
      ]
    },
    {
      step: "04",
      name: "FOLLOW UP",
      tagline: "Direct WhatsApp Delivery & Rapid Response",
      icon: MessageSquare,
      color: "#00E575",
      description: "Leads turn cold in minutes. Our system pushes customer inquiries directly into your WhatsApp in real-time, giving your sales team an immediate competitive edge.",
      actions: [
        "Instant Click-to-WhatsApp routing with pre-filled customer details",
        "WhatsApp Business auto-responders & conversational starters",
        "Sales objection handling guidelines for higher closing rates"
      ]
    },
    {
      step: "05",
      name: "GROW",
      tagline: "Data Analysis, ROI Optimization & Business Scaling",
      icon: TrendingUp,
      color: "#00D4FF",
      description: "We continuously monitor Cost-per-Lead (CPL) and Return-on-Ad-Spend (ROAS). Winning campaigns are scaled systematically to multiply your revenue.",
      actions: [
        "Weekly performance breakdown and revenue attribution",
        "Aggressive scaling of winning creatives and audiences",
        "Consulting with Founder A. Raghul on long-term client retention"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="scroll-reveal text-center max-w-3xl mx-auto space-y-4 mb-12">
        <span className="text-xs font-black uppercase tracking-widest text-gradient-rainbow">
          OUR PROPRIETARY FRAMEWORK
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          The 5-Stage <span className="text-gradient-rainbow">Growth System</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg">
          We don't simply run advertisements. We build an automated, dependable lead-generation infrastructure designed around your specific business model.
        </p>
      </div>

      {/* 3D Pipeline Canvas with Glass Container */}
      <div className="scroll-reveal max-w-4xl mx-auto">
        <div className="text-center mb-2">
          <p className="text-xs font-black text-[#00D4FF] uppercase tracking-wider">
            Interactive 3D Geometric Growth Pipeline
          </p>
        </div>
        <Pipeline3DCanvas />
      </div>

      {/* Live Interactive Simulator & Step Navigator */}
      <div className="scroll-reveal mt-16 max-w-5xl mx-auto">
        <InteractiveGrowthSystem openLeadModal={openLeadModal} />
      </div>

      {/* Deep-Dive Process Flow Cards with On-Scroll Reveal */}
      <div className="mt-20 space-y-8 max-w-5xl mx-auto">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Detailed Stage Specifications
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            A comprehensive look at what happens behind the scenes in each phase
          </p>
        </div>

        {steps.map((item, idx) => {
          const Icon = item.icon;

          return (
            <div
              key={idx}
              className="scroll-reveal tilt-card p-8 rounded-3xl glass-sapphire border border-white/10 hover:border-[#00D4FF]/50 relative overflow-hidden shadow-2xl group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Step Indicator & Icon */}
                <div className="md:col-span-3 flex md:flex-col items-center md:items-start justify-between md:justify-center space-y-2">
                  <span className="text-3xl sm:text-4xl font-black font-mono" style={{ color: item.color }}>
                    {item.step}
                  </span>
                  <div 
                    className="w-16 h-16 rounded-2xl border flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg"
                    style={{ backgroundColor: `${item.color}15`, borderColor: `${item.color}40` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                </div>

                {/* Details */}
                <div className="md:col-span-9 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {item.name}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: item.color }}>
                      {item.tagline}
                    </span>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    {item.actions.map((act, aIdx) => (
                      <div key={aIdx} className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Philosophy Callout */}
      <div className="scroll-reveal mt-20 p-8 sm:p-12 rounded-3xl rainbow-card border border-white/20 text-center max-w-4xl mx-auto space-y-6 shadow-2xl">
        <h3 className="text-2xl sm:text-4xl font-black text-white">
          Right Audience → Right Advertising → Quality Leads → Business Growth
        </h3>
        <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto">
          When all 5 stages of our growth system work in synergy, customer enquiries flow consistently into your business without wasting marketing budgets.
        </p>
        <button
          onClick={openLeadModal}
          className="px-8 py-4 bg-gradient-to-r from-[#FF2E93] via-[#00D4FF] to-[#00E575] text-black font-black text-sm rounded-xl hover:brightness-110 shadow-xl shadow-cyan-500/30 transition-all"
        >
          Implement This System in Your Business
        </button>
      </div>
    </div>
  );
};
