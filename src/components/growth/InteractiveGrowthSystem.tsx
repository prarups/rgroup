import React, { useState, useEffect } from 'react';
import { 
  Target, 
  Megaphone, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Pause,
  ChevronRight
} from 'lucide-react';
import { CONTACT_CONFIG } from '../../config/contact';

interface GrowthStage {
  step: string;
  name: string;
  tagline: string;
  color: string;
  glowColor: string;
  icon: React.ElementType;
  metric: string;
  metricLabel: string;
  desc: string;
  deliverables: string[];
}

export const InteractiveGrowthSystem: React.FC<{ openLeadModal: () => void }> = ({ openLeadModal }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const stages: GrowthStage[] = [
    {
      step: "01",
      name: "AUDIENCE TARGETING",
      tagline: "Audience Profiling & Market Intelligence",
      color: "#FF2E93",
      glowColor: "rgba(255, 46, 147, 0.35)",
      icon: Target,
      metric: "98.4%",
      metricLabel: "Audience Accuracy",
      desc: "We research buyer personas, high-income zip codes, and pain points to target solely people with immediate buying intent.",
      deliverables: ["Demographic & Interest Analysis", "Micro-location Radius Targeting", "Competitor Ad Reverse-Engineering"]
    },
    {
      step: "02",
      name: "CREATIVE ADVERTISING",
      tagline: "High-Converting Paid Social Campaigns",
      color: "#FF8A00",
      glowColor: "rgba(255, 138, 0, 0.35)",
      icon: Megaphone,
      metric: "4.8X",
      metricLabel: "Average CTR Lift",
      desc: "We deploy custom Facebook & Instagram video ads and high-converting posters designed to stop viewers mid-scroll.",
      deliverables: ["4K Commercial Ad Shoot", "High-CTR Graphic Posters", "Direct-Response Ad Copywriting"]
    },
    {
      step: "03",
      name: "LEAD QUALIFICATION",
      tagline: "Lead Qualification & Spam Filtering",
      color: "#FFDE00",
      glowColor: "rgba(255, 222, 0, 0.35)",
      icon: Zap,
      metric: "100%",
      metricLabel: "Pre-Qualified Leads",
      desc: "Smart intake forms filter out casual window-shoppers, ensuring you only receive high-intent potential customers.",
      deliverables: ["Custom Lead Qualification Form", "Phone & WhatsApp Verification", "Zero-Waste Ad Budget Optimization"]
    },
    {
      step: "04",
      name: "INSTANT WHATSAPP",
      tagline: "Real-Time Direct WhatsApp Delivery",
      color: "#00E575",
      glowColor: "rgba(0, 229, 117, 0.35)",
      icon: MessageSquare,
      metric: "< 60 Sec",
      metricLabel: "Delivery Speed",
      desc: "Enquiries are pushed directly into your WhatsApp in seconds so your sales team can call or chat and close deals immediately.",
      deliverables: ["Click-to-WhatsApp Instant Flow", "Pre-Filled Customer Context Starter", "Sales Closing Script Guidance"]
    },
    {
      step: "05",
      name: "REVENUE SCALING",
      tagline: "Data Optimization & Revenue Scaling",
      color: "#00D4FF",
      glowColor: "rgba(0, 212, 255, 0.35)",
      icon: TrendingUp,
      metric: "3.5X - 10X",
      metricLabel: "Revenue Multiplier",
      desc: "We continuously analyze conversion analytics and scale the most profitable campaigns to generate predictable revenue.",
      deliverables: ["Weekly ROI Performance Reports", "Aggressive Winner Scaling", "1-on-1 Growth Consulting with A. Raghul"]
    }
  ];

  // Auto-cycle through the 5 stages with smooth timer
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, stages.length]);

  const current = stages[activeStep];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full space-y-5 sm:space-y-6">
      
      {/* Step Navigation Bar: 5 Stages (Mobile friendly & clean) */}
      <div className="bg-white/90 backdrop-blur-md p-2 sm:p-2.5 rounded-2xl border border-slate-200/90 shadow-md">
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
          {stages.map((st, idx) => {
            const Icon = st.icon;
            const isActive = activeStep === idx;

            return (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveStep(idx);
                }}
                className={`relative px-2 py-2 sm:py-3 rounded-xl transition-all duration-300 flex flex-col items-center text-center group ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {/* Active Indicator Bar on top */}
                {isActive && (
                  <span 
                    className="absolute -top-1 inset-x-3 h-1 rounded-full shadow-sm"
                    style={{ backgroundColor: st.color }}
                  />
                )}

                <div className="flex items-center space-x-1 sm:space-x-1.5">
                  <span 
                    className="text-[10px] sm:text-xs font-mono font-black"
                    style={{ color: isActive ? st.color : undefined }}
                  >
                    {st.step}
                  </span>
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-800'}`} />
                </div>

                <span className={`text-[10px] sm:text-xs font-extrabold truncate max-w-full mt-0.5 ${isActive ? 'text-white' : 'text-slate-700'}`}>
                  {st.name.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Simple Auto-Play Progress Track */}
        <div className="mt-2 h-1 bg-slate-100 rounded-full overflow-hidden relative">
          <div 
            className="h-full transition-all duration-500 ease-out rounded-full"
            style={{ 
              width: `${((activeStep + 1) / stages.length) * 100}%`,
              backgroundColor: current.color 
            }}
          />
        </div>
      </div>

      {/* Dynamic Detail Card for Active Stage: Clean & Sleek */}
      <div 
        className="p-5 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-md border transition-all duration-300 relative overflow-hidden shadow-lg"
        style={{ borderColor: `${current.color}80` }}
      >
        {/* Soft Background Tint */}
        <div 
          className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-[80px] pointer-events-none opacity-15"
          style={{ backgroundColor: current.color }}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center relative z-10">
          
          {/* Left Side: Stage Info & Deliverables */}
          <div className="md:col-span-8 space-y-3">
            <div className="flex items-center space-x-2.5">
              <span 
                className="text-[11px] font-mono font-black px-2.5 py-0.5 rounded-full border"
                style={{ 
                  color: current.color, 
                  borderColor: `${current.color}60`,
                  backgroundColor: `${current.color}15`
                }}
              >
                STAGE {current.step} OF 05
              </span>
              <span className="text-xs text-slate-500 font-semibold">•</span>
              <span className="text-xs text-slate-700 font-bold truncate">{current.tagline}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {current.name}: <span style={{ color: current.color }}>How It Works</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl font-normal">
              {current.desc}
            </p>

            {/* Deliverables Checklist (Compact) */}
            <div className="pt-1 grid grid-cols-1 sm:grid-cols-3 gap-2">
              {current.deliverables.map((item, dIdx) => (
                <div 
                  key={dIdx} 
                  className="flex items-center space-x-2 p-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] sm:text-xs font-semibold text-slate-800"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: current.color }} />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>

            {/* Actions Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={openLeadModal}
                className="px-5 py-2.5 rounded-xl text-black font-black text-xs hover:brightness-110 shadow-sm transition-all flex items-center space-x-1.5"
                style={{ backgroundColor: current.color }}
              >
                <span>Deploy {current.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center space-x-1.5"
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-slate-600" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-slate-600" />
                    <span>Auto-Play</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Side: Compact Metric Card */}
          <div className="md:col-span-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-center space-y-2 shadow-sm">
            <div 
              className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center shadow-sm"
              style={{ backgroundColor: `${current.color}20`, border: `1px solid ${current.color}50` }}
            >
              <CurrentIcon className="w-6 h-6" style={{ color: current.color }} />
            </div>

            <div>
              <p className="text-3xl sm:text-4xl font-black tracking-tight" style={{ color: current.color }}>
                {current.metric}
              </p>
              <p className="text-[11px] uppercase font-black tracking-wider text-slate-500 mt-0.5">
                {current.metricLabel}
              </p>
            </div>

            <div className="pt-1.5 border-t border-slate-200 text-[10px] text-slate-500 font-medium">
              Pillow Digital System Benchmark
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
