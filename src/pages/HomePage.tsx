import React, { useState, useEffect } from 'react';
import { InteractiveGrowthSystem } from '../components/growth/InteractiveGrowthSystem';
import { WhatsAppPhoneMockup } from '../components/home/WhatsAppPhoneMockup';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CONTACT_CONFIG } from '../config/contact';
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
      image: "/meta-ads.jpg",
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
      
      {/* Dynamic Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[8%] left-[5%] w-[500px] h-[500px] bg-[#00D4FF]/6 rounded-full blur-[160px]" />
        <div className="absolute top-[35%] right-[5%] w-[550px] h-[550px] bg-[#0066FF]/6 rounded-full blur-[170px]" />
        <div className="absolute top-[65%] left-[10%] w-[480px] h-[480px] bg-[#10B981]/5 rounded-full blur-[150px]" />
      </div>

      {/* ================= HERO: FOUNDER SPOTLIGHT & DIRECT VALUE PROPOSITION ================= */}
      <section className="relative pt-3 sm:pt-6 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        
        {/* Continuous Motion Typewriter Message Directly Below Navbar */}
        <div className="w-full max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center max-w-full px-4 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#0A122E]/85 backdrop-blur-xl border border-cyan-400/30 shadow-lg shadow-cyan-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-2.5 flex-shrink-0" />
            <div className="text-xs sm:text-sm md:text-base font-extrabold tracking-wide text-white drop-shadow-sm flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-300">
                {displayText}
              </span>
              <span className="inline-block w-[2.5px] h-3.5 sm:h-4 bg-[#00D4FF] ml-1.5 animate-pulse rounded-full" />
            </div>
          </div>
        </div>

        {/* HERO GRID: LEFT = Raghul Photo with Cyber Cyan & Sapphire Frame, RIGHT = Luxury Message Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT SIDE: A. Raghul Photo & Profile */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm mx-auto">
              {/* Precision Dual-Tone Edge Glow */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-b from-cyan-400 via-blue-500/70 to-[#0A122E] shadow-2xl shadow-cyan-500/25 ring-1 ring-cyan-400/30">
                <div className="relative rounded-[22px] overflow-hidden bg-slate-950 aspect-[4/5] w-full">
                  <img 
                    src="/ragual.png" 
                    alt="A. Raghul - Founder & Growth Consultant" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                  
                  {/* Subtle dark gradient overlay on bottom of image for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />

                  {/* Top Left Live Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md text-emerald-400 font-black text-xs border border-emerald-500/40 shadow-lg flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>DIRECT LEADS ARCHITECT</span>
                    </span>
                  </div>

                  {/* Bottom Info Card over Photo */}
                  <div className="absolute bottom-3.5 inset-x-3.5 p-3.5 rounded-2xl bg-[#080E24]/95 backdrop-blur-md border border-white/15 text-center shadow-xl">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">A. RAGHUL</h3>
                    <p className="text-xs sm:text-sm text-[#00D4FF] font-bold">Founder & Marketing Director</p>
                    <p className="text-xs text-slate-300 font-medium">Pillow Digital • Backed by R GROUP</p>
                  </div>
                </div>
              </div>

              {/* Experience Floating Badge */}
              <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[#0A122E] text-white font-extrabold text-xs sm:text-sm shadow-xl whitespace-nowrap border border-cyan-400/50 flex items-center space-x-2 z-20">
                <span className="text-[#00D4FF]">★</span>
                <span>4+ Years Exp</span>
                <span className="text-slate-400">•</span>
                <span className="text-emerald-400">100+ Clients Handled</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Elevated Luxury Message Showcase Card */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-900/10 space-y-4 text-left relative overflow-hidden">
            {/* Subtle Top Accent Line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00D4FF] via-[#0066FF] to-[#10B981]" />

            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-black uppercase tracking-wider text-[#0284C7]">
              <Sparkles className="w-3.5 h-3.5 text-[#0090FF]" />
              <span>DIRECT MESSAGE FROM FOUNDER A. RAGHUL</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-snug tracking-tight">
              "We Don't Just Run Ads — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055D4] via-[#0084FF] to-[#00D4FF]">
                We Engineer Predictable Customer Acquisition Systems."
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Most business owners waste lakhs on generic agency ads that bring vanity likes, bot accounts, or people asking for freebies. At <strong className="text-slate-950 font-bold">Pillow Digital</strong> under <strong className="text-slate-950 font-bold">R GROUP</strong>, we build turnkey campaigns that deliver pre-qualified buyers <strong className="text-emerald-700 font-bold">directly to your WhatsApp</strong> every single day.
            </p>

            {/* Quick Stats Grid with Cohesive Color System */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-200 text-center relative overflow-hidden shadow-xs">
                <div className="absolute top-0 inset-x-0 h-1 bg-[#0066FF]" />
                <p className="text-xl sm:text-2xl font-black text-[#0066FF]">4+ Years</p>
                <p className="text-xs text-slate-700 font-bold uppercase mt-0.5">Marketing Exp</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-cyan-50/80 border border-cyan-200 text-center relative overflow-hidden shadow-xs">
                <div className="absolute top-0 inset-x-0 h-1 bg-[#00B4D8]" />
                <p className="text-xl sm:text-2xl font-black text-[#0090FF]">100+</p>
                <p className="text-xs text-slate-700 font-bold uppercase mt-0.5">Clients Handled</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-center relative overflow-hidden shadow-xs">
                <div className="absolute top-0 inset-x-0 h-1 bg-[#10B981]" />
                <p className="text-xl sm:text-2xl font-black text-[#059669]">Daily</p>
                <p className="text-xs text-slate-700 font-bold uppercase mt-0.5">WhatsApp Leads</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-200 text-center relative overflow-hidden shadow-xs">
                <div className="absolute top-0 inset-x-0 h-1 bg-[#6366F1]" />
                <p className="text-xl sm:text-2xl font-black text-[#4F46E5]">100%</p>
                <p className="text-xs text-slate-700 font-bold uppercase mt-0.5">Guarantee*</p>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={openLeadModal}
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-500/25 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Get Daily Leads On WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={() => navigateTo('growth-system')}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 transition-all flex items-center justify-center space-x-1.5 shadow-sm"
              >
                <span>Explore Growth System</span>
                <ChevronRight className="w-4 h-4 text-[#00B4D8]" />
              </button>
            </div>

          </div>

        </div>

      </section>



      {/* ================= VISUAL COMPARISON: PAIN POINT VS PILLOW DIGITAL ================= */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Left: Pain Point with Image */}
          <div className="scroll-reveal-left space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-black uppercase tracking-wider">
              <span>Why Traditional Marketing Fails</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
              Tired of Irrelevant Enquiries & Wasted Ad Budgets?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Most business owners lose money boosting random posts that bring vanity likes, bot accounts, or people asking for freebies.
            </p>

            {/* Visual Callout Image */}
            <div className="relative rounded-2xl overflow-hidden border border-rose-200 shadow-lg h-52 group">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                alt="Wasted Marketing Budgets" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent flex items-end p-5">
                <p className="text-xs sm:text-sm text-rose-200 font-extrabold flex items-center space-x-2">
                  <span className="text-rose-400 text-base">⚠️</span>
                  <span>Unqualified ad boosting leads to high ad spend with zero paying clients</span>
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3.5 rounded-2xl bg-rose-50/90 border border-rose-200 text-sm sm:text-base font-semibold text-slate-800 shadow-xs">
                <span className="text-rose-600 font-black text-base">✕</span>
                <span>Boosting posts blindly without customer purchase intent segmentation</span>
              </div>
              <div className="flex items-center space-x-3 p-3.5 rounded-2xl bg-rose-50/90 border border-rose-200 text-sm sm:text-base font-semibold text-slate-800 shadow-xs">
                <span className="text-rose-600 font-black text-base">✕</span>
                <span>No instant WhatsApp routing leading to cold, lost leads</span>
              </div>
            </div>
          </div>

          {/* Right: The Solution with Live Animated WhatsApp Mobile Simulator */}
          <div className="scroll-reveal-right flex flex-col items-center justify-center">
            <WhatsAppPhoneMockup openLeadModal={openLeadModal} />
          </div>

        </div>
      </section>

      {/* ================= SCROLL REVEAL: 7 CORE SERVICES WITH REAL IMAGERY ================= */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
        <div className="scroll-reveal text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-gradient-rainbow border border-slate-200 text-xs font-black uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Comprehensive Marketing Arsenal</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our 7 High-Impact Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything your business needs to attract buyers, establish authority, and maximize return on ad spend.
          </p>
        </div>

        {/* 7 Services Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            const delayClass = `delay-${(idx % 4 + 1) * 100}`;
            
            const accentColors = [
              { tagBg: "bg-pink-50 text-[#FF2E93] border-pink-200", iconColor: "text-[#FF2E93]" },
              { tagBg: "bg-cyan-50 text-[#0090FF] border-cyan-200", iconColor: "text-[#00B4D8]" },
              { tagBg: "bg-emerald-50 text-emerald-700 border-emerald-200", iconColor: "text-emerald-500" },
              { tagBg: "bg-amber-50 text-amber-700 border-amber-200", iconColor: "text-[#FF8A00]" },
              { tagBg: "bg-purple-50 text-[#845EC2] border-purple-200", iconColor: "text-[#845EC2]" },
              { tagBg: "bg-sky-50 text-sky-700 border-sky-200", iconColor: "text-[#00D4FF]" },
              { tagBg: "bg-yellow-50 text-yellow-800 border-yellow-300", iconColor: "text-amber-500" },
            ];
            const currentAccent = accentColors[idx % accentColors.length];

            return (
              <div
                key={idx}
                className={`scroll-reveal ${delayClass} rainbow-card tilt-card overflow-hidden flex flex-col justify-between group shadow-xl hover:shadow-2xl transition-all duration-300 bg-white border border-slate-200/90 rounded-3xl ${idx === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
              >
                {/* Visual Service Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img 
                    src={srv.image} 
                    alt={srv.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
                  
                  {/* Badge & Icon on Image */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-slate-950/85 text-white backdrop-blur-md border border-white/20 shadow-md">
                      {srv.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                      <Icon className={`w-5 h-5 ${currentAccent.iconColor}`} />
                    </div>
                  </div>

                  <div className="absolute bottom-3.5 left-4">
                    <span className="text-xs font-black text-amber-300 px-3 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-amber-400/25 uppercase tracking-wider shadow-sm">
                      {srv.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between bg-white">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs font-extrabold px-3 py-1 rounded-full border shadow-xs ${currentAccent.tagBg}`}>
                        Service 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-gradient-rainbow transition-colors tracking-tight leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-medium">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => navigateTo('services')}
                      className="text-sm font-extrabold text-slate-700 hover:text-cyan-600 flex items-center space-x-1.5 transition-colors"
                    >
                      <span>Deliverables</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                    <button
                      onClick={openLeadModal}
                      className="text-xs sm:text-sm font-black px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-gradient-to-r hover:from-[#FF2E93] hover:to-[#00D4FF] hover:text-black transition-all shadow-md active:scale-95"
                    >
                      Book Service
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="scroll-reveal text-center pt-6 sm:pt-8">
          <button
            onClick={() => navigateTo('services')}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-xs sm:text-sm font-extrabold text-slate-900 transition-all shadow-md"
          >
            <span>Explore All 7 Services in Detail</span>
            <ChevronRight className="w-4 h-4 text-[#00B4D8]" />
          </button>
        </div>
      </section>

      {/* ================= DYNAMIC ANIMATED 5-STEP GROWTH SYSTEM ================= */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="scroll-reveal text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-gradient-rainbow border border-slate-200 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>5-STAGE GROWTH SYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our 5-Stage Growth System
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
              We don't simply run ads. We build an automated lead generation machine. Explore our 5-stage conversion pipeline below.
            </p>
          </div>

          {/* Interactive Animated Growth System */}
          <div className="scroll-reveal max-w-5xl mx-auto">
            <InteractiveGrowthSystem openLeadModal={openLeadModal} />
          </div>

          <div className="scroll-reveal mt-6 sm:mt-8 text-center">
            <button
              onClick={() => navigateTo('growth-system')}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-black text-xs sm:text-sm shadow-md transition-all"
            >
              <span>View Full Growth Funnel Specification</span>
              <ArrowRight className="w-4 h-4 text-[#00B4D8]" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= SCROLL REVEAL: MONEY BACK GUARANTEE ================= */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 relative">
        <div className="scroll-reveal relative p-6 sm:p-10 rounded-3xl rainbow-card border border-slate-200/90 shadow-2xl text-center space-y-5 bg-white">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-wider border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero-Risk Guarantee</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            NO LEADS? <span className="text-gradient-rainbow">MONEY-BACK GUARANTEE*</span>
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            We provide a Money-Back Guarantee on eligible packages where the agreed campaign requirements and Terms & Conditions are fully satisfied. We stand 100% behind our performance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-slate-800 font-bold">
            <span className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Agreed Campaign Duration</span>
            </span>
            <span className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Target Lead Criteria Met</span>
            </span>
            <span className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Transparent Eligibility Terms*</span>
            </span>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openLeadModal}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF2E93] to-[#FFDE00] text-black font-black text-sm hover:brightness-110 shadow-md shadow-pink-500/20 transition-all"
            >
              Verify Package Eligibility
            </button>
            <button
              onClick={() => navigateTo('guarantee')}
              className="px-6 py-3.5 rounded-xl text-slate-600 hover:text-slate-900 text-xs sm:text-sm underline underline-offset-4 font-semibold"
            >
              Read Full Guarantee Policy
            </button>
          </div>
        </div>
      </section>

      {/* ================= SCROLL REVEAL: WHY PARTNER WITH PILLOW DIGITAL (9 PILLARS) ================= */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
        <div className="scroll-reveal text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-xs font-black uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-purple-600" />
            <span>PROVEN TRACK RECORD</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Partner With <span className="text-gradient-rainbow">Pillow Digital?</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Our focus is not just running advertisements — it is sustainable, high-ROI business growth backed by R GROUP.
          </p>
        </div>

        {/* 9 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {whyChoosePoints.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-[#00D4FF]/60 hover:shadow-xl transition-all duration-300 tilt-card group"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-slate-950 transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SCROLL REVEAL: FINAL HIGH-CONVERSION CTA ================= */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center z-10 relative">
        <div className="scroll-reveal dark-luxe-card p-6 sm:p-10 space-y-5 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#FF2E93]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#00D4FF]/20 rounded-full blur-3xl pointer-events-none" />
          
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-black tracking-widest text-[#FFDE00] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#FFDE00]" />
            <span>LET'S GROW YOUR BUSINESS</span>
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            Your Business Needs Customers. <br />
            <span className="text-gradient-rainbow">We Build The Marketing System To Reach Them.</span>
          </h2>

          <p className="max-w-xl mx-auto text-slate-200 text-sm sm:text-base font-medium leading-relaxed">
            Take the guesswork out of lead generation. Book a growth strategy session with A. Raghul today and get daily WhatsApp leads.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={openLeadModal}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#FF2E93] via-[#FF8A00] via-[#FFDE00] via-[#00E575] via-[#00D4FF] to-[#845EC2] text-black font-black text-sm sm:text-base shadow-xl shadow-pink-500/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <span>Schedule WhatsApp Consultation</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
            <a
              href={CONTACT_CONFIG.getWhatsAppUrl("Hi A. Raghul, I want to grow my business with Pillow Digital.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all flex items-center justify-center space-x-2 shadow-sm"
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
