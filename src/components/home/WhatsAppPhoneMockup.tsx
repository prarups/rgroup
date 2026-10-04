import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, 
  CheckCheck, 
  Send, 
  Phone, 
  Video, 
  MoreVertical, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface WhatsAppPhoneMockupProps {
  openLeadModal: () => void;
}

interface LeadMessage {
  id: number;
  leadNumber: number;
  clientType: string;
  senderName: string;
  location: string;
  text: string;
  time: string;
  budget?: string;
  badgeColor: string;
}

const mockLeads: LeadMessage[] = [
  {
    id: 1,
    leadNumber: 142,
    clientType: "REAL ESTATE",
    senderName: "Suresh Kumar",
    location: "Hyderabad",
    text: "Hi A. Raghul! Saw your Instagram Ad. I want details for 3BHK luxury flat near Gachibowli. Budget: ₹1.4 Cr. Please share brochure & schedule site visit.",
    time: "Just now",
    budget: "₹1.4 Cr",
    badgeColor: "bg-emerald-500"
  },
  {
    id: 2,
    leadNumber: 143,
    clientType: "DENTAL CLINIC",
    senderName: "Dr. Kavitha Rao",
    location: "Vijayawada",
    text: "Hello! Saw your 5-stage marketing system. Need 40+ implant patient enquiries this month for our clinic. Please call me at 98480xxxxx.",
    time: "Just now",
    budget: "High-Intent",
    badgeColor: "bg-cyan-500"
  },
  {
    id: 3,
    leadNumber: 144,
    clientType: "CAR SHOWROOM",
    senderName: "Rajesh Varma",
    location: "Visakhapatnam",
    text: "Customer wants test drive for SUV tomorrow morning. Contact: 99631xxxxx. Location: MVP Colony. Please route to sales team.",
    time: "Just now",
    budget: "Immediate Buyer",
    badgeColor: "bg-amber-500"
  },
  {
    id: 4,
    leadNumber: 145,
    clientType: "BOUTIQUE & SALON",
    senderName: "Pooja Sharma",
    location: "Hyderabad",
    text: "Hi! Inquiring for complete bridal makeup package for wedding next month. Ready to pay advance token now. Phone: 97004xxxxx.",
    time: "Just now",
    budget: "₹85,000",
    badgeColor: "bg-pink-500"
  },
  {
    id: 5,
    leadNumber: 146,
    clientType: "INTERIOR STUDIO",
    senderName: "Vikram Naidu",
    location: "Bengaluru",
    text: "Saw your ad reel! Need turnkey interior execution for 2800 sqft villa. Ready to meet this weekend.",
    time: "Just now",
    budget: "₹18 Lakhs",
    badgeColor: "bg-purple-500"
  }
];

export const WhatsAppPhoneMockup: React.FC<WhatsAppPhoneMockupProps> = ({ openLeadModal }) => {
  const [activeLeadIndex, setActiveLeadIndex] = useState(0);
  const [leadCounter, setLeadCounter] = useState(48);
  const [visibleMessages, setVisibleMessages] = useState<LeadMessage[]>([mockLeads[0]]);
  const [isNotifying, setIsNotifying] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Soft Web Audio notification chime
  const playNotificationChime = () => {
    if (!isSoundEnabled) return;
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.28);
    } catch (e) {
      // Audio not supported / blocked
    }
  };

  // Auto-push incoming lead messages continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLeadIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % mockLeads.length;
        const newLead = {
          ...mockLeads[nextIndex],
          leadNumber: leadCounter + 1,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setLeadCounter((prev) => prev + 1);
        setIsNotifying(true);
        playNotificationChime();

        setVisibleMessages((prev) => {
          const updated = [...prev, newLead];
          // Keep max 4 visible to fit inside smartphone screen
          if (updated.length > 4) {
            return updated.slice(updated.length - 4);
          }
          return updated;
        });

        // Hide notification push alert after 2.5s
        setTimeout(() => {
          setIsNotifying(false);
        }, 2200);

        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [leadCounter, isSoundEnabled]);

  // Auto scroll chat to bottom when new lead arrives
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  const currentPushLead = mockLeads[activeLeadIndex];

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
      
      {/* Dynamic Ambient Glow Behind Smartphone */}
      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/25 via-[#00D4FF]/25 to-[#FF2E93]/20 rounded-[50px] blur-2xl opacity-75 pointer-events-none animate-pulse" />

      {/* Floating Live Badge Top Left */}
      <div className="absolute -top-3.5 left-4 z-30 flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-950/90 text-white border border-emerald-400/50 shadow-xl backdrop-blur-md">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-[11px] sm:text-xs font-black text-emerald-400 uppercase tracking-wider">
          LIVE WHATSAPP STREAM
        </span>
      </div>

      {/* Sound Toggle Button Top Right */}
      <div className="absolute -top-3.5 right-4 z-30">
        <button
          onClick={() => setIsSoundEnabled(!isSoundEnabled)}
          className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-950/90 text-slate-300 hover:text-white border border-white/20 shadow-xl backdrop-blur-md text-[11px] font-bold transition-all"
          title={isSoundEnabled ? "Mute notification sound" : "Enable notification sound"}
        >
          {isSoundEnabled ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Audio ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-slate-400" />
              <span>Audio OFF</span>
            </>
          )}
        </button>
      </div>

      {/* ================= ULTRA-REALISTIC SMARTPHONE HARDWARE CHASSIS ================= */}
      <div className="relative rounded-[46px] p-3 sm:p-3.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-2xl ring-1 ring-white/20 border-4 border-slate-900 overflow-hidden">
        
        {/* Inner Phone Bezel Screen */}
        <div className="relative rounded-[36px] overflow-hidden bg-[#0B141B] border border-slate-700/60 shadow-inner flex flex-col h-[560px]">
          
          {/* Top Status Bar & Dynamic Island */}
          <div className="relative pt-2.5 px-6 pb-2 bg-[#121B22] border-b border-slate-800/80 flex items-center justify-between text-[11px] text-slate-300 font-bold select-none z-20">
            <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            
            {/* Dynamic Island Pill */}
            <div className="w-20 h-4.5 rounded-full bg-black flex items-center justify-center space-x-1.5 px-2 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1A2730] border border-slate-700" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="flex items-center space-x-1.5 text-[10px]">
              <span className="font-mono text-emerald-400">5G</span>
              <span className="text-xs">⚡</span>
              <span>98%</span>
            </div>
          </div>

          {/* ================= POPPING PUSH NOTIFICATION BANNER (Drops from Island) ================= */}
          <div 
            className={`absolute top-11 inset-x-3 z-30 transition-all duration-400 ease-out transform ${
              isNotifying 
                ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto' 
                : '-translate-y-10 opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <div className="p-3 rounded-2xl bg-slate-900/95 border-2 border-emerald-400 text-white shadow-2xl backdrop-blur-xl flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <MessageCircle className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-emerald-400 flex items-center">
                    WhatsApp • Just Now
                  </span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-amber-400 text-black">
                    HOT LEAD 🔥
                  </span>
                </div>
                <p className="text-[11px] font-bold text-slate-100 truncate mt-0.5">
                  {currentPushLead.senderName} ({currentPushLead.location}): "{currentPushLead.text}"
                </p>
              </div>
            </div>
          </div>

          {/* ================= WHATSAPP HEADER ================= */}
          <div className="px-3.5 py-2.5 bg-[#121B22] border-b border-slate-800/80 flex items-center justify-between z-10 shadow-md">
            <div className="flex items-center space-x-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white p-0.5 overflow-hidden border border-emerald-400 shadow-sm flex items-center justify-center">
                  <img src="/logo.jpg" alt="Pillow Digital" className="w-full h-full object-contain" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#121B22]" />
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <h4 className="text-xs sm:text-sm font-black text-white tracking-wide">
                    Pillow Digital Leads
                  </h4>
                  <span className="text-emerald-400 text-xs">✓</span>
                </div>
                <p className="text-[10px] text-emerald-400 font-semibold flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1" />
                  <span>online • {leadCounter} Leads Delivered</span>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-slate-300">
              <Video className="w-4 h-4 cursor-pointer hover:text-white" />
              <Phone className="w-4 h-4 cursor-pointer hover:text-white" />
              <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white" />
            </div>
          </div>

          {/* ================= LIVE CHAT SCROLL STREAM ================= */}
          <div 
            ref={chatScrollRef}
            className="flex-grow overflow-y-auto p-3 space-y-3 relative bg-[#0B141B]"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 80%)`
            }}
          >
            {/* Timestamp Badge */}
            <div className="text-center">
              <span className="px-2.5 py-0.5 rounded-md bg-[#182229] text-[10px] font-bold text-slate-400 shadow-sm">
                TODAY • LIVE INCOMING LEADS
              </span>
            </div>

            {/* System Info Bubble */}
            <div className="p-2 rounded-xl bg-[#182229]/90 border border-slate-700/50 text-center space-y-0.5 max-w-[90%] mx-auto">
              <p className="text-[10px] text-emerald-300 font-bold flex items-center justify-center space-x-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400 mr-1" />
                <span>Zero-Delay Instant WhatsApp Lead Pipeline Active</span>
              </p>
            </div>

            {/* Real-time Popping Lead Chat Messages */}
            {visibleMessages.map((msg, index) => {
              const isLast = index === visibleMessages.length - 1;

              return (
                <div 
                  key={`${msg.id}-${index}`}
                  className={`flex flex-col items-start transition-all duration-400 ${
                    isLast ? 'animate-slideUp' : ''
                  }`}
                >
                  {/* Lead Message Bubble */}
                  <div className="relative max-w-[94%] bg-[#1F2C34] text-slate-100 rounded-2xl rounded-tl-sm p-3 shadow-md border border-slate-700/60 space-y-1.5 group hover:border-emerald-500/50 transition-colors">
                    
                    {/* Header with Lead Number & Niche Tag */}
                    <div className="flex items-center justify-between border-b border-slate-700/60 pb-1 gap-2">
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        ⚡ LEAD #{msg.leadNumber} • {msg.clientType}
                      </span>
                      {msg.budget && (
                        <span className="text-[10px] font-extrabold text-amber-300">
                          {msg.budget}
                        </span>
                      )}
                    </div>

                    {/* Sender Name & City */}
                    <p className="text-xs font-black text-cyan-300">
                      👤 {msg.senderName} <span className="text-slate-400 font-medium">({msg.location})</span>
                    </p>

                    {/* Actual Lead Inquiry Text */}
                    <p className="text-xs text-slate-200 leading-relaxed font-normal">
                      "{msg.text}"
                    </p>

                    {/* Message Footer: Time + WhatsApp Double Blue Ticks */}
                    <div className="flex items-center justify-end space-x-1 pt-0.5 text-[10px] text-slate-400">
                      <span>{msg.time}</span>
                      <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" />
                    </div>
                  </div>

                  {/* Automated Auto-Routing Confirmation (Instant System Dispatch) */}
                  {isLast && (
                    <div className="mt-1 ml-2 text-[10px] font-bold text-emerald-400 flex items-center space-x-1 animate-fadeIn">
                      <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                      <span>Instant Alert Pushed to Client Mobile in 2.1s</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ================= WHATSAPP CHAT INPUT BAR ================= */}
          <div className="p-2.5 bg-[#121B22] border-t border-slate-800/80 flex items-center space-x-2">
            <div className="flex-grow bg-[#1F2C34] rounded-full px-3.5 py-1.5 text-xs text-slate-400 flex items-center justify-between">
              <span>Leads flowing directly to phone...</span>
              <span className="text-slate-500">📎</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#00A884] flex items-center justify-center text-white shadow-md">
              <Send className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

      </div>

      {/* ================= INTERACTIVE CTA UNDER PHONE ================= */}
      <div className="mt-4 text-center space-y-2">
        <button
          onClick={openLeadModal}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-black text-sm tracking-wide shadow-xl shadow-emerald-500/25 active:scale-95 transition-all flex items-center justify-center space-x-2"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span>I Want Leads Coming To My WhatsApp Like This!</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <p className="text-[11px] sm:text-xs text-slate-600 font-semibold">
          ⚡ Turnkey Campaign Setup • Qualified Inquiries Only • Money-Back Guarantee*
        </p>
      </div>

    </div>
  );
};
