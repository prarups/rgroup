import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { CONTACT_CONFIG } from '../../config/contact';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  servicePreSelect?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({ 
  isOpen, 
  onClose, 
  servicePreSelect 
}) => {
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedService, setSelectedService] = useState(servicePreSelect || 'Targeted Lead Generation');
  const [monthlyBudget, setMonthlyBudget] = useState('₹30,000 - ₹50,000');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = `🚀 *NEW INQUIRY FROM PILLOW DIGITAL WEBSITE*\n\n` +
      `*Name:* ${fullName}\n` +
      `*Business Name:* ${businessName}\n` +
      `*Phone Number:* ${phoneNumber}\n` +
      `*Interested Service:* ${selectedService}\n` +
      `*Estimated Monthly Budget:* ${monthlyBudget}\n\n` +
      `_Hi A. Raghul, I would like to schedule a growth consultation for my business._`;

    const whatsappUrl = CONTACT_CONFIG.getWhatsAppUrl(msg);
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-2xl border border-slate-200 text-slate-900"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-3 sm:mb-5 pr-8">
          <div className="flex items-center space-x-2.5 mb-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white p-0.5 border border-slate-200 shadow-md overflow-hidden flex-shrink-0">
              <img src="/logo.jpg" alt="Pillow Digital Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-black text-slate-900 text-sm sm:text-base tracking-wider flex items-center">
                PILLOW <span className="text-[#00B4D8] ml-1">DIGITAL</span>
              </span>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-extrabold uppercase">BY R GROUP</p>
            </div>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#00D4FF]/10 text-[#0090FF] border border-[#00D4FF]/30 text-[10px] sm:text-xs font-black uppercase tracking-wider mb-1.5">
            <Sparkles className="w-3 h-3 text-[#D97706]" />
            <span>Instant Growth Consultation</span>
          </div>

          <h3 className="text-base sm:text-xl font-black text-slate-900 tracking-tight leading-tight">
            Solve Your Lead Generation Problem
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
            Connect with Founder A. Raghul on WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3.5">
          <div>
            <label className="block text-[11px] sm:text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Ramesh Kumar"
              className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#00D4FF] text-xs sm:text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
            <div>
              <label className="block text-[11px] sm:text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                Business / Brand Name *
              </label>
              <input
                type="text"
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="e.g. Acme Tech Solutions"
                className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#00D4FF] text-xs sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                WhatsApp Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#00D4FF] text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
            <div>
              <label className="block text-[11px] sm:text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                Primary Goal / Service
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:bg-white focus:border-[#00D4FF] text-xs sm:text-sm"
              >
                <option value="Targeted Lead Generation">Targeted Lead Generation</option>
                <option value="Daily WhatsApp Leads">Daily WhatsApp Leads</option>
                <option value="Social Media Paid Advertising">Social Media Paid Advertising</option>
                <option value="Professional Ad Shoot">Professional Ad Shoot</option>
                <option value="Premium Poster Design">Premium Poster Design</option>
                <option value="Business Growth Consulting">Business Growth Consulting</option>
                <option value="Business Strategy Consulting">Business Strategy Consulting</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                Target Monthly Budget
              </label>
              <select
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(e.target.value)}
                className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:bg-white focus:border-[#00D4FF] text-xs sm:text-sm"
              >
                <option value="₹20,000 - ₹30,000">₹20,000 - ₹30,000</option>
                <option value="₹30,000 - ₹50,000">₹30,000 - ₹50,000</option>
                <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                <option value="₹1,00,000+ (Scale)">₹1,00,000+ (Scale)</option>
              </select>
            </div>
          </div>

          <div className="pt-1.5 sm:pt-2">
            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r from-[#00D4FF] via-[#6366F1] to-[#A855F7] text-white font-black text-xs sm:text-sm tracking-wide shadow-xl shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              <span>Connect on WhatsApp with A. Raghul</span>
            </button>
          </div>

          {/* Guarantee disclaimer */}
          <div className="flex items-center space-x-1.5 text-[10px] sm:text-[11px] text-slate-500 justify-center pt-0.5 font-medium">
            <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
            <span>Eligible for Money-Back Guarantee* on qualifying packages.</span>
          </div>
        </form>
      </div>
    </div>
  );
};
