import React, { useState, useEffect } from 'react';
import { MessageCircle, CheckCircle2, X, Sparkles, TrendingUp } from 'lucide-react';

interface LiveLeadNotificationProps {
  onOpenModal: () => void;
}

interface LeadAlert {
  id: number;
  name: string;
  city: string;
  business: string;
  message: string;
  timeAgo: string;
  avatarBg: string;
}

const recentLeads: LeadAlert[] = [
  {
    id: 1,
    name: "Suresh Reddy",
    city: "Hyderabad",
    business: "Real Estate Developer",
    message: "Booked Daily WhatsApp Leads Campaign (30+ leads/wk)",
    timeAgo: "2 mins ago",
    avatarBg: "bg-gradient-to-tr from-emerald-500 to-teal-400"
  },
  {
    id: 2,
    name: "Dr. Kavitha M.",
    city: "Vijayawada",
    business: "Cosmetic Dental Clinic",
    message: "Scheduled 1-on-1 Growth Strategy with A. Raghul",
    timeAgo: "5 mins ago",
    avatarBg: "bg-gradient-to-tr from-cyan-500 to-blue-500"
  },
  {
    id: 3,
    name: "Rajesh Varma",
    city: "Visakhapatnam",
    business: "Automobile Dealership",
    message: "Started Targeted Meta Ads & Instant Lead Flow",
    timeAgo: "8 mins ago",
    avatarBg: "bg-gradient-to-tr from-pink-500 to-rose-400"
  },
  {
    id: 4,
    name: "Pooja Sharma",
    city: "Hyderabad",
    business: "Luxury Boutique & Salon",
    message: "Generated 24 Direct WhatsApp Enquiries this week",
    timeAgo: "12 mins ago",
    avatarBg: "bg-gradient-to-tr from-purple-500 to-indigo-400"
  },
  {
    id: 5,
    name: "Vikram Naidu",
    city: "Bengaluru",
    business: "Construction & Interiors",
    message: "Verified Guarantee Package & Started Ad Shoot",
    timeAgo: "Just now",
    avatarBg: "bg-gradient-to-tr from-amber-500 to-orange-400"
  }
];

export const LiveLeadNotification: React.FC<LiveLeadNotificationProps> = ({ onOpenModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Initial show after 4 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed || !isVisible) return;

    // Keep visible for 6.5 seconds, then hide
    const hideTimer = setTimeout(() => {
      setIsVisible(false);

      // Wait 8 seconds before showing next lead
      const nextTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % recentLeads.length);
        setIsVisible(true);
      }, 8000);

      return () => clearTimeout(nextTimer);
    }, 6500);

    return () => clearTimeout(hideTimer);
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  const current = recentLeads[currentIndex];

  return (
    <div
      className={`fixed bottom-5 left-4 sm:left-6 z-40 max-w-[360px] sm:max-w-sm transition-all duration-500 ease-out transform ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
          : 'translate-y-8 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div 
        onClick={onOpenModal}
        className="relative bg-white/95 backdrop-blur-xl p-3.5 sm:p-4 rounded-2xl border-2 border-emerald-400/80 shadow-2xl shadow-emerald-500/20 text-slate-900 cursor-pointer group hover:scale-[1.02] hover:border-emerald-500 transition-all duration-300 overflow-hidden"
      >
        {/* Animated Top Border Line */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-[#FF2E93] animate-pulse" />

        {/* Close dismiss button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsVisible(false);
            setIsDismissed(true);
          }}
          className="absolute top-2.5 right-2.5 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Dismiss alert"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-start space-x-3 pr-5">
          {/* Avatar with Live Indicator */}
          <div className="relative flex-shrink-0">
            <div className={`w-10 h-10 rounded-xl ${current.avatarBg} text-white flex items-center justify-center font-black text-sm shadow-md`}>
              {current.name.charAt(0)}
            </div>
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            </span>
          </div>

          {/* Details */}
          <div className="flex-grow min-w-0 space-y-1">
            <div className="flex items-center space-x-1.5 flex-wrap">
              <span className="text-xs sm:text-sm font-black text-slate-900">
                {current.name}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500">
                ({current.city})
              </span>
            </div>

            <p className="text-[11px] sm:text-xs font-bold text-emerald-700 leading-snug">
              {current.message}
            </p>

            <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[10px] text-slate-500 font-medium">
              <span className="flex items-center text-slate-600 font-semibold">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 mr-1" />
                {current.business}
              </span>
              <span className="text-slate-400 font-medium">{current.timeAgo}</span>
            </div>

            {/* Click CTA Prompt */}
            <div className="pt-1 flex items-center space-x-1 text-[11px] text-[#0090FF] font-black group-hover:underline">
              <Sparkles className="w-3 h-3 text-amber-500 flex-shrink-0" />
              <span>Tap to get daily leads for your business →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
