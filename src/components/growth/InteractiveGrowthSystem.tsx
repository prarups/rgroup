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
  RotateCcw,
  Sparkles,
  PhoneCall,
  Flame,
  Send
} from 'lucide-react';

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
  const [simulating, setSimulating] = useState<boolean>(false);
  const [leadDelivered, setLeadDelivered] = useState<boolean>(false);

  const stages: GrowthStage[] = [
    {
      step: "01",
      name: "TARGET",
      tagline: "Audience Profiling & Market Intelligence",
      color: "#FF2E93",
      glowColor: "rgba(255, 46, 147, 0.4)",
      icon: Target,
      metric: "98.4%",
      metricLabel: "Audience Accuracy",
      desc: "We research buyer personas, high-income zip codes, and pain points to target solely people with immediate buying intent.",
      deliverables: ["Demographic & Interest Analysis", "Micro-location Radius Targeting", "Competitor Ad Reverse-Engineering"]
    },
    {
      step: "02",
      name: "ADVERTISE",
      tagline: "High-Converting Paid Social Campaigns",
      color: "#FF8A00",
      glowColor: "rgba(255, 138, 0, 0.4)",
      icon: Megaphone,
      metric: "4.8X",
      metricLabel: "Average CTR Lift",
      desc: "We deploy custom Facebook & Instagram video ads and high-converting posters designed to stop viewers mid-scroll.",
      deliverables: ["4K Professional Promotional Ad Shoot", "High CTR Premium Graphic Posters", "Direct-Response Ad Copywriting"]
    },
    {
      step: "03",
      name: "GENERATE",
      tagline: "Lead Qualification & Spam Filtering",
      color: "#FFDE00",
      glowColor: "rgba(255, 222, 0, 0.4)",
      icon: Zap,
      metric: "100%",
      metricLabel: "Pre-Qualified Leads",
      desc: "Smart intake forms filter out casual window-shoppers, ensuring you only receive high-intent potential customers.",
      deliverables: ["Custom Lead Qualifying Form", "Automated Phone & WhatsApp Verification", "Zero-Waste Ad Budget Optimization"]
    },
    {
      step: "04",
      name: "FOLLOW UP",
      tagline: "Real-Time Direct WhatsApp Delivery",
      color: "#00E575",
      glowColor: "rgba(0, 229, 117, 0.4)",
      icon: MessageSquare,
      metric: "< 60 Sec",
      metricLabel: "Delivery Speed",
      desc: "Enquiries are pushed directly into your WhatsApp in seconds so your sales team can call or chat and close deals immediately.",
      deliverables: ["Click-to-WhatsApp Instant Flow", "Pre-Filled Customer Context Starter", "Sales Conversion Script Guidance"]
    },
    {
      step: "05",
      name: "GROW",
      tagline: "Data Optimization & Revenue Scaling",
      color: "#00D4FF",
      glowColor: "rgba(0, 212, 255, 0.4)",
      icon: TrendingUp,
      metric: "3.5X - 10X",
      metricLabel: "Revenue Multiplier",
      desc: "We continuously analyze conversion analytics and scale the most profitable campaigns to generate predictable revenue.",
      deliverables: ["Weekly ROI & CPL Performance Reports", "Aggressive Winner Scaling", "1-on-1 Growth Consulting with A. Raghul"]
    }
  ];

  // Auto-cycle through the 5 stages
  useEffect(() => {
    if (!isAutoPlaying || simulating) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stages.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [isAutoPlaying, simulating]);

  // Simulate Lead Journey Animation
  const startSimulation = () => {
    setIsAutoPlaying(false);
    setSimulating(true);
    setLeadDelivered(false);
    setActiveStep(0);

    const stepInterval = 650;

    setTimeout(() => setActiveStep(1), stepInterval * 1);
    setTimeout(() => setActiveStep(2), stepInterval * 2);
    setTimeout(() => setActiveStep(3), stepInterval * 3);
    setTimeout(() => setActiveStep(4), stepInterval * 4);
    setTimeout(() => {
      setSimulating(false);
      setLeadDelivered(true);
      setIsAutoPlaying(true);
    }, stepInterval * 5);
  };

  const current = stages[activeStep];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full space-y-10">
      
      {/* Simulation Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl glass-sapphire border border-white/10 shadow-lg">
        <div className="flex items-center space-x-3">
          <span className="w-3 h-3 rounded-full animate-ping" style={{ backgroundColor: current.color }} />
          <p className="text-xs sm:text-sm font-bold text-white">
            Current Stage: <span className="font-black" style={{ color: current.color }}>{current.step} — {current.name}</span>
          </p>
        </div>

        <div className="flex items-center space-x-2.5">
          <button
            onClick={startSimulation}
            disabled={simulating}
            className={`px-4 py-2 rounded-xl text-xs font-black flex items-center space-x-2 transition-all shadow-lg ${
              simulating 
                ? 'bg-white/20 text-slate-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-[#FF2E93] via-[#00D4FF] to-[#00E575] text-black hover:scale-105 active:scale-95'
            }`}
          >
            <Play className={`w-3.5 h-3.5 fill-black ${simulating ? 'animate-spin' : ''}`} />
            <span>{simulating ? 'Simulating Lead Journey...' : '▶ Simulate Live Lead Flow'}</span>
          </button>

          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-3 py-2 rounded-xl glass-sapphire hover:bg-white/10 text-xs font-bold text-slate-300 border border-white/10 transition-colors"
          >
            {isAutoPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
          </button>
        </div>
      </div>

      {/* 5 Stages Interactive Step Bar with Moving Laser Line */}
      <div className="relative">
        
        {/* Animated Connecting Laser Line (Background Track) */}
        <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1 bg-white/10 -translate-y-1/2 z-0 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#FF2E93] via-[#FF8A00] via-[#FFDE00] via-[#00E575] to-[#00D4FF] transition-all duration-700 ease-out shadow-[0_0_12px_#00D4FF]"
            style={{ width: `${((activeStep + 1) / stages.length) * 100}%` }}
          />
        </div>

        {/* 5 Stage Node Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 relative z-10">
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
                className={`relative p-5 rounded-2xl transition-all duration-400 text-left flex flex-col justify-between group ${
                  isActive
                    ? 'glass-sapphire-glow -translate-y-2 scale-105 shadow-2xl border-2'
                    : 'glass-sapphire border border-white/10 hover:border-white/30 hover:-translate-y-1'
                }`}
                style={{
                  borderColor: isActive ? st.color : undefined,
                  boxShadow: isActive ? `0 15px 35px -10px ${st.glowColor}` : undefined
                }}
              >
                {/* Active Ripple Ring */}
                {isActive && (
                  <span 
                    className="absolute -inset-1 rounded-2xl opacity-40 animate-ping pointer-events-none"
                    style={{ backgroundColor: st.color }}
                  />
                )}

                <div className="flex items-center justify-between w-full mb-3">
                  <span 
                    className="text-xs font-mono font-black px-2 py-0.5 rounded-lg border"
                    style={{ 
                      color: st.color, 
                      borderColor: `${st.color}40`,
                      backgroundColor: `${st.color}15`
                    }}
                  >
                    {st.step}
                  </span>
                  <div 
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                      isActive ? 'scale-110 shadow-lg' : 'bg-white/5'
                    }`}
                    style={{ backgroundColor: isActive ? st.color : undefined }}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-black font-black' : 'text-slate-400'}`} />
                  </div>
                </div>

                <div>
                  <h4 
                    className={`text-base font-black transition-colors ${
                      isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}
                  >
                    {st.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {st.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Detail Card for Active Stage */}
      <div 
        className="p-8 sm:p-10 rounded-3xl glass-sapphire-glow border-2 transition-all duration-500 relative overflow-hidden shadow-2xl"
        style={{ borderColor: current.color }}
      >
        {/* Ambient Corner Flare */}
        <div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[100px] pointer-events-none opacity-30 transition-all duration-700"
          style={{ backgroundColor: current.color }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left: Stage Information */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center space-x-3">
              <span 
                className="text-xs font-mono font-black px-3 py-1 rounded-full uppercase tracking-wider border"
                style={{ 
                  color: current.color, 
                  borderColor: current.color,
                  backgroundColor: `${current.color}15`
                }}
              >
                STAGE {current.step} OF 05
              </span>
              <span className="text-xs text-slate-400 font-semibold">•</span>
              <span className="text-xs text-slate-300 font-bold">{current.tagline}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-white">
              {current.name}: <span style={{ color: current.color }}>How It Works</span>
            </h3>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              {current.desc}
            </p>

            {/* Deliverables Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {current.deliverables.map((item, dIdx) => (
                <div 
                  key={dIdx} 
                  className="flex items-start space-x-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: current.color }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={openLeadModal}
                className="px-6 py-3 rounded-xl text-black font-black text-xs hover:brightness-110 shadow-xl transition-all flex items-center space-x-2"
                style={{ backgroundColor: current.color }}
              >
                <span>Deploy {current.name} for Your Business</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Live Stage Metric Box */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#080B22]/90 border border-white/10 text-center space-y-4 shadow-inner">
            <div 
              className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center shadow-lg transition-transform hover:rotate-6"
              style={{ backgroundColor: `${current.color}20`, border: `1px solid ${current.color}50` }}
            >
              <CurrentIcon className="w-8 h-8" style={{ color: current.color }} />
            </div>

            <div>
              <p className="text-4xl sm:text-5xl font-black tracking-tight" style={{ color: current.color }}>
                {current.metric}
              </p>
              <p className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mt-1">
                {current.metricLabel}
              </p>
            </div>

            <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400">
              Pillow Digital System Standard
            </div>
          </div>

        </div>
      </div>

      {/* Simulated Live Lead Alert Popup (When user clicks Simulate) */}
      {leadDelivered && (
        <div className="p-5 rounded-2xl bg-emerald-950/60 border-2 border-emerald-400 text-white flex flex-col sm:flex-row items-center justify-between gap-4 animate-bounce shadow-2xl">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-emerald-500 text-black flex items-center justify-center font-black">
              ✓
            </div>
            <div>
              <p className="text-sm font-black text-emerald-300">
                ⚡ SIMULATION SUCCESS: High-Intent Lead Delivered Directly to WhatsApp!
              </p>
              <p className="text-xs text-slate-300">
                Customer Name: Rahul Sharma • Location: Hyderabad • Budget: ₹50,000/mo • Status: Ready to Buy
              </p>
            </div>
          </div>

          <button
            onClick={openLeadModal}
            className="px-5 py-2.5 rounded-xl bg-emerald-400 text-black font-black text-xs hover:bg-emerald-300 whitespace-nowrap shadow-lg"
          >
            Get Real WhatsApp Leads Now
          </button>
        </div>
      )}

    </div>
  );
};
