import React, { useState, useEffect } from 'react';
import { Hero3DCanvas } from '../components/canvas/Hero3DCanvas';
import { HeroVideoPlayer } from '../components/video/HeroVideoPlayer';
import { InteractiveGrowthSystem } from '../components/growth/InteractiveGrowthSystem';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Target, 
  Megaphone, 
  MessageCircle, 
  Camera, 
  Palette, 
  Compass, 
  ShieldCheck, 
  Zap, 
  Award,
  ChevronRight,
  Flame,
  PhoneCall
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
  openLeadModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, openLeadModal }) => {
  useScrollReveal();

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Powerful continuous motion typewriter loop
  const powerfulMessages = [
    "WE SOLVE YOUR LEAD GENERATION PROBLEM.",
    "HIGH-INTENT CUSTOMERS DELIVERED DIRECTLY TO YOUR WHATSAPP.",
    "STOP WASTING AD BUDGET. START CLOSING PROFITABLE DEALS.",
    "PREDICTABLE 10X BUSINESS GROWTH ENGINEERED BY R GROUP."
  ];

  const [msgIndex, setMsgIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = powerfulMessages[msgIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentMessage.length) {
      timer = setTimeout(() => {
        setDisplayText(currentMessage.slice(0, displayText.length + 1));
      }, 55);
    } else if (!isDeleting && displayText.length === currentMessage.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentMessage.slice(0, displayText.length - 1));
      }, 30);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setMsgIndex((prev) => (prev + 1) % powerfulMessages.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, msgIndex]);

  const services = [
    {
      icon: Megaphone,
      title: "Social Media Paid Advertising",
      desc: "Strategic Facebook & Instagram advertising campaigns designed to reach your potential customers.",
      badge: "Meta Verified",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=700&q=80",
      tag: "Facebook & Instagram Ads"
    },
    {
      icon: Target,
      title: "Targeted Lead Generation",
      desc: "We target the right audience based on your business, location, customer profile and campaign objectives.",
      badge: "High Intent",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
      tag: "Audience Profiling"
    },
    {
      icon: MessageCircle,
      title: "Daily WhatsApp Leads",
      desc: "We build lead-generation campaigns designed to deliver customer enquiries directly to your WhatsApp.",
      badge: "Direct Delivery",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=700&q=80",
      tag: "Instant Chat Enquiries"
    },
    {
      icon: Camera,
      title: "Professional Ad Shoot",
      desc: "Professional promotional video and advertisement content for your business campaigns.",
      badge: "4K Cinema",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=700&q=80",
      tag: "Commercial Video Production"
    },
    {
      icon: Palette,
      title: "Premium Poster Design",
      desc: "High-quality, premium and conversion-focused promotional creatives for your brand.",
      badge: "High CTR",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=700&q=80",
      tag: "Conversion Graphic Design"
    },
    {
      icon: TrendingUp,
      title: "Business Growth Consulting",
      desc: "Practical guidance on marketing, customer acquisition, lead conversion and business growth.",
      badge: "Scale 10X",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
      tag: "1-on-1 Growth Consulting"
    },
    {
      icon: Compass,
      title: "Business Strategy Consulting",
      desc: "Business-focused advice to improve your marketing system, customer acquisition and overall growth strategy.",
      badge: "End-to-End",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80",
      tag: "Turnkey Growth Systems"
    },
  ];

  const whyChoosePoints = [
    "4+ Years of Digital Marketing Experience",
    "100+ Clients Handled Across India & Overseas",
    "Targeted Advertising Strategy & Micro-Segmentation",
    "Lead Generation Campaigns Built Specifically for High ROI",
    "Premium Creative Design & High-Converting Video Shoots",
    "Direct WhatsApp Lead Routing for Instant Deals",
    "Personal Business Growth Consulting by Founder A. Raghul",
    "Performance-Driven Marketing with Transparent Reports",
    "Zero-Risk Money-Back Guarantee* on Eligible Packages"
  ];

  return (
    <div className="relative min-h-screen pt-20">
      
      {/* Dynamic Chromatic Rainbow Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[8%] left-[2%] w-[520px] h-[520px] bg-[#FF2E93]/15 rounded-full blur-[160px] animate-pulse-glow" />
        <div className="absolute top-[35%] right-[2%] w-[580px] h-[580px] bg-[#00D4FF]/16 rounded-full blur-[170px] animate-aurora-flow" />
        <div className="absolute top-[60%] left-[10%] w-[500px] h-[500px] bg-[#00E575]/12 rounded-full blur-[150px]" />
        <div className="absolute top-[85%] right-[15%] w-[560px] h-[560px] bg-[#FFDE00]/12 rounded-full blur-[160px]" />
      </div>

      {/* ================= FULLSCREEN LIVE VIDEO WALLPAPER HERO ================= */}
      <section className="relative w-full h-screen min-h-[680px] max-h-[950px] flex flex-col justify-between pt-3 sm:pt-5 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        
        {/* Fullscreen Video Wallpaper (Edge-to-Edge, 100% Original Brightness, No Darkening) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            src="/Professional_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center scale-100"
          />
          {/* Subtle bottom transition gradient into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07091B] via-[#07091B]/50 to-transparent pointer-events-none" />
        </div>

        {/* TOP: Continuous Motion Typewriter Message Directly Below Navbar */}
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center pt-1 sm:pt-3">
          <div className="inline-flex items-center justify-center max-w-full px-4 py-2.5 sm:px-8 sm:py-3.5 rounded-2xl bg-black/75 backdrop-blur-2xl border border-white/25 shadow-[0_15px_45px_rgba(0,0,0,0.85)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00E575] animate-ping mr-2.5 flex-shrink-0" />
            <div className="text-xs sm:text-base md:text-xl font-black tracking-wide text-white drop-shadow min-h-[24px] sm:min-h-[30px] flex items-center justify-center">
              <span className="text-gradient-rainbow">
                {displayText}
              </span>
              <span className="inline-block w-[3px] h-3.5 sm:h-5 bg-[#00D4FF] ml-1.5 animate-pulse rounded-full shadow-[0_0_8px_#00D4FF]" />
            </div>
          </div>
        </div>

        {/* BOTTOM: Floating Actions & Stats Lifted Up to Eliminate Gap */}
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-4 sm:space-y-5 -translate-y-3 sm:-translate-y-8">
          
          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openLeadModal}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#FF2E93] via-[#FF8A00] via-[#FFDE00] via-[#00E575] via-[#00D4FF] to-[#845EC2] text-black font-black text-base tracking-wide shadow-[0_10px_35px_rgba(255,46,147,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <span>Get Daily Leads On WhatsApp</span>
              <ArrowRight className="w-5 h-5 text-black" />
            </button>
            <button
              onClick={() => navigateTo('growth-system')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-black/60 backdrop-blur-xl hover:bg-black/80 text-white font-bold text-base border border-white/30 transition-all flex items-center justify-center space-x-2 shadow-2xl"
            >
              <span>Explore Growth System</span>
              <ChevronRight className="w-4 h-4 text-[#00D4FF]" />
            </button>
          </div>

          {/* Floating Stats Bar on Wallpaper */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto pt-2">
            <div className="p-3.5 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/20 shadow-xl tilt-card">
              <p className="text-2xl sm:text-3xl font-black text-[#FF2E93]">4+ Years</p>
              <p className="text-[10px] sm:text-xs text-slate-200 mt-0.5 uppercase font-bold tracking-wider">Marketing Exp</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/20 shadow-xl tilt-card">
              <p className="text-2xl sm:text-3xl font-black text-[#FF8A00]">100+</p>
              <p className="text-[10px] sm:text-xs text-slate-200 mt-0.5 uppercase font-bold tracking-wider">Clients Handled</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/20 shadow-xl tilt-card">
              <p className="text-2xl sm:text-3xl font-black text-[#00E575]">Daily</p>
              <p className="text-[10px] sm:text-xs text-slate-200 mt-0.5 uppercase font-bold tracking-wider">WhatsApp Leads</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/20 shadow-xl tilt-card">
              <p className="text-2xl sm:text-3xl font-black text-[#00D4FF]">100%</p>
              <p className="text-[10px] sm:text-xs text-slate-200 mt-0.5 uppercase font-bold tracking-wider">Guarantee*</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= VISUAL COMPARISON: PAIN POINT VS PILLOW DIGITAL ================= */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left: Pain Point with Image */}
          <div className="scroll-reveal-left space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-black uppercase tracking-wider">
              <span>Why Traditional Marketing Fails</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Tired of Irrelevant Enquiries & Wasted Ad Budgets?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Most business owners lose money boosting random posts that bring vanity likes, bot accounts, or people asking for freebies.
            </p>

            {/* Visual Callout Image */}
            <div className="relative rounded-2xl overflow-hidden border border-rose-500/30 shadow-2xl h-52 group">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                alt="Wasted Marketing Budgets" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F22] via-[#0B0F22]/70 to-transparent flex items-end p-5">
                <p className="text-xs text-rose-300 font-extrabold flex items-center space-x-2">
                  <span className="text-rose-400 text-sm">⚠️</span>
                  <span>Unqualified ad boosting leads to high ad spend with zero paying clients</span>
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-rose-950/30 border border-rose-500/30 text-sm text-slate-200">
                <span className="text-rose-400 font-extrabold">✕</span>
                <span>Boosting posts blindly without customer purchase intent segmentation</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-rose-950/30 border border-rose-500/30 text-sm text-slate-200">
                <span className="text-rose-400 font-extrabold">✕</span>
                <span>No instant WhatsApp routing leading to cold, lost leads</span>
              </div>
            </div>
          </div>

          {/* Right: The Solution with High-Impact Image & Live WhatsApp Chat Mockup */}
          <div className="scroll-reveal-right rainbow-card p-6 sm:p-8 space-y-6 shadow-2xl">
            {/* Visual Image with WhatsApp Chat Overlay */}
            <div className="relative rounded-2xl overflow-hidden border border-[#00E575]/40 h-64 group bg-[#07131B]">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
                alt="High-Intent WhatsApp Customer Deals" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E] via-[#060D1E]/40 to-transparent" />
              
              {/* Floating Real-Time WhatsApp Lead Notification */}
              <div className="absolute inset-x-4 bottom-4 p-3.5 rounded-2xl bg-[#0B141B]/95 border border-emerald-500/50 backdrop-blur-md shadow-2xl space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-extrabold text-emerald-400 flex items-center">
                      <MessageCircle className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                      WhatsApp Business Live
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400">Just now</span>
                </div>
                <p className="text-xs font-bold text-white leading-snug">
                  "Hi A. Raghul! Saw your ad. We want 50+ quality leads for our clinic this week."
                </p>
                <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[10px] text-slate-300">
                  <span className="text-emerald-300 font-extrabold">✓✓ Delivered to Your Phone</span>
                  <span className="text-[#FFDE00] font-black">Pre-Qualified Buyer</span>
                </div>
              </div>

              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-lg bg-emerald-500 text-black font-black text-xs shadow-xl">
                  ✓ High-Intent Deals Closing Daily on WhatsApp
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Data-Driven Paid Social & Instant WhatsApp Pipeline
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We build a turnkey lead-generation system designed around your business goals and target buyers under the trusted banner of R GROUP.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-start space-x-3 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Laser-targeted Meta Ads aimed at paying customers in your location.</span>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Enquiries delivered straight to WhatsApp so you can close deals instantly.</span>
              </div>
            </div>

            <button
              onClick={openLeadModal}
              className="w-full py-3.5 bg-gradient-to-r from-[#FF2E93] via-[#00D4FF] to-[#00E575] text-black font-black text-sm rounded-xl hover:brightness-110 transition-all shadow-xl shadow-cyan-500/25"
            >
              Start Getting Daily Leads Now
            </button>
          </div>

        </div>
      </section>

      {/* ================= SCROLL REVEAL: 7 CORE SERVICES WITH REAL IMAGERY ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
        <div className="scroll-reveal text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-gradient-rainbow border border-white/15 text-xs font-black uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-[#FFDE00]" />
            <span>Comprehensive Marketing Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our 7 High-Impact Services
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Everything your business needs to attract buyers, establish authority, and maximize return on ad spend.
          </p>
        </div>

        {/* 7 Services Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            const delayClass = `delay-${(idx % 4 + 1) * 100}`;

            return (
              <div
                key={idx}
                className={`scroll-reveal ${delayClass} rainbow-card tilt-card overflow-hidden flex flex-col justify-between group shadow-xl`}
              >
                {/* Visual Service Image */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img 
                    src={srv.image} 
                    alt={srv.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D112B] via-[#0D112B]/40 to-transparent" />
                  
                  {/* Badge & Icon on Image */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="text-[11px] font-black px-3 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                      {srv.badge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#00D4FF]" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-4">
                    <span className="text-[11px] font-extrabold text-[#FFDE00] uppercase tracking-wider">
                      {srv.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-white group-hover:text-gradient-rainbow transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => navigateTo('services')}
                      className="text-xs font-bold text-slate-300 group-hover:text-white flex items-center space-x-1"
                    >
                      <span>Deliverables</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={openLeadModal}
                      className="text-xs font-black text-[#FFDE00] hover:underline"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="scroll-reveal text-center pt-12">
          <button
            onClick={() => navigateTo('services')}
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl glass-sapphire hover:bg-white/15 border border-white/20 text-sm font-extrabold text-white transition-all shadow-lg"
          >
            <span>Explore All 7 Services in Detail</span>
            <ChevronRight className="w-4 h-4 text-[#00D4FF]" />
          </button>
        </div>
      </section>

      {/* ================= DYNAMIC ANIMATED 5-STEP GROWTH SYSTEM ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="scroll-reveal text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-gradient-rainbow border border-white/15 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#00E575]" />
              <span>LIVE INTERACTIVE PIPELINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Our 5-Stage Growth System
            </h2>
            <p className="text-slate-300 text-base max-w-2xl mx-auto">
              We don't simply run ads. We build an automated lead generation machine. Watch the live interactive animation below or test the live lead flow simulation!
            </p>
          </div>

          {/* Interactive Animated Growth System */}
          <div className="scroll-reveal max-w-5xl mx-auto">
            <InteractiveGrowthSystem openLeadModal={openLeadModal} />
          </div>

          <div className="scroll-reveal mt-12 text-center">
            <button
              onClick={() => navigateTo('growth-system')}
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF2E93]/20 via-[#00D4FF]/20 to-[#00E575]/20 text-[#00D4FF] border border-[#00D4FF]/40 font-black text-sm hover:brightness-125 transition-all shadow-lg"
            >
              <span>View Full 3D Growth Funnel Specification</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= SCROLL REVEAL: MONEY BACK GUARANTEE ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 relative">
        <div className="scroll-reveal relative p-8 sm:p-14 rounded-3xl rainbow-card border border-white/20 shadow-2xl text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase tracking-wider border border-emerald-500/40">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero-Risk Guarantee</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            NO LEADS? <span className="text-gradient-rainbow">MONEY-BACK GUARANTEE*</span>
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-200 leading-relaxed">
            We provide a Money-Back Guarantee on eligible packages where the agreed campaign requirements and Terms & Conditions are fully satisfied. We stand 100% behind our performance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300 font-semibold">
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Agreed Campaign Duration</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Target Lead Criteria Met</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Transparent Eligibility Terms*</span>
            </span>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openLeadModal}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF2E93] to-[#FFDE00] text-black font-black text-sm hover:brightness-110 shadow-xl shadow-pink-500/30 transition-all"
            >
              Verify Package Eligibility
            </button>
            <button
              onClick={() => navigateTo('guarantee')}
              className="px-6 py-3.5 rounded-xl text-slate-300 hover:text-white text-xs underline underline-offset-4"
            >
              Read Full Guarantee Policy
            </button>
          </div>
        </div>
      </section>

      {/* ================= SCROLL REVEAL: FOUNDER & WHY PILLOW DIGITAL ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="scroll-reveal-left space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-black uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Why Partner With Pillow Digital?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Our focus is not just running advertisements — it is sustainable business growth. We combine creative firepower with rigorous analytics to maximize your return on ad spend.
            </p>

            {/* Founder Profile Card with Image */}
            <div className="p-6 rounded-3xl rainbow-card space-y-4">
              <div className="flex items-center space-x-4">
                <div className="relative flex-shrink-0">
                  <img 
                    src="/ragual.jpeg" 
                    alt="A. Raghul - Founder" 
                    className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl object-cover object-top border-2 border-[#00D4FF] shadow-xl"
                  />
                  <span className="absolute -bottom-2 -right-1 px-2 py-0.5 rounded-md bg-[#FFDE00] text-black font-black text-[10px]">
                    4+ Yrs
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-black text-white">A. RAGHUL</h4>
                  <p className="text-xs text-[#00D4FF] font-bold">Founder & Business Growth Consultant</p>
                  <p className="text-xs text-slate-300">Pillow Digital • Operated under R GROUP</p>
                </div>
              </div>
              <p className="text-xs text-slate-200 italic pt-2 border-t border-white/10">
                "Our philosophy is simple: Deliver measurable sales inquiries and high-intent customers so your business scales with predictability."
              </p>
            </div>
          </div>

          {/* Checklist */}
          <div className="scroll-reveal-right grid grid-cols-1 gap-3.5">
            {whyChoosePoints.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3.5 p-4 rounded-xl glass-sapphire border border-white/15 hover:border-[#00D4FF]/40 transition-all tilt-card"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-sm font-bold text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SCROLL REVEAL: FINAL HIGH-CONVERSION CTA ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center z-10 relative">
        <div className="scroll-reveal rainbow-card p-10 sm:p-16 space-y-8 relative overflow-hidden shadow-2xl">
          <span className="text-xs font-black tracking-widest text-[#FFDE00] uppercase">
            LET'S GROW YOUR BUSINESS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Your Business Needs Customers. <br />
            <span className="text-gradient-rainbow">We Build The Marketing System To Reach Them.</span>
          </h2>

          <p className="max-w-xl mx-auto text-slate-200 text-sm sm:text-base font-medium">
            Take the guesswork out of lead generation. Book a growth strategy session with A. Raghul today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={openLeadModal}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-[#FF2E93] via-[#FF8A00] via-[#FFDE00] via-[#00E575] via-[#00D4FF] to-[#845EC2] text-black font-black text-base shadow-2xl shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <span>Schedule WhatsApp Consultation</span>
              <ArrowRight className="w-5 h-5 text-black" />
            </button>
            <a
              href="https://wa.me/919999999999?text=Hi%20A.%20Raghul,%20I%20want%20to%20grow%20my%20business%20with%20Pillow%20Digital."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl glass-sapphire hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
