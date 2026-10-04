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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-3xl p-5 sm:p-8 shadow-2xl border-2 border-cyan-400/40 text-slate-900"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Rainbow Accent Strip */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FF2E93] via-[#FFDE00] via-[#00E575] to-[#00D4FF]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 text-slate-400 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-4 sm:mb-6 pr-6">
          <div className="flex items-center space-x-2.5 mb-2.5">
            <div className="w-10 h-10 rounded-xl bg-white p-0.5 border border-slate-200 shadow-md overflow-hidden flex-shrink-0">
              <img src="/logo.jpg" alt="Pillow Digital Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-black text-slate-900 text-base tracking-wider flex items-center">
                PILLOW <span className="text-[#00B4D8] ml-1">DIGITAL</span>
              </span>
              <p className="text-[10px] text-slate-500 font-extrabold uppercase">BY R GROUP</p>
            </div>
          </div>

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>FREE 15-MIN GROWTH AUDIT • LIMITED SLOTS</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-tight">
            Ready to Get 30-50+ Quality Leads Every Month?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
            Fill in your details below to connect directly with Founder A. Raghul on WhatsApp and get your customized marketing blueprint.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
          <div>
            <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Ramesh Kumar"
              className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 text-sm font-medium"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            <div>
              <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1">
                Business / Brand Name *
              </label>
              <input
                type="text"
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="e.g. Acme Tech Solutions"
                className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 text-sm font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1">
                WhatsApp Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 text-sm font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            <div>
              <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1">
                Primary Goal / Service
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:bg-white focus:border-[#00D4FF] text-sm font-semibold"
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
              <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1">
                Target Monthly Budget
              </label>
              <select
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(e.target.value)}
                className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:bg-white focus:border-[#00D4FF] text-sm font-semibold"
              >
                <option value="₹20,000 - ₹30,000">₹20,000 - ₹30,000</option>
                <option value="₹30,000 - ₹50,000">₹30,000 - ₹50,000</option>
                <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                <option value="₹1,00,000+ (Scale)">₹1,00,000+ (Scale)</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-black text-sm tracking-wide shadow-xl shadow-emerald-500/25 active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4 text-white" />
              <span>Send Request Directly to A. Raghul on WhatsApp</span>
            </button>
          </div>

          {/* Guarantee disclaimer */}
          <div className="flex items-center space-x-1.5 text-xs text-slate-600 justify-center pt-1 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Eligible for Money-Back Guarantee* • 100% Privacy Guaranteed</span>
          </div>
        </form>
      </div>
    </div>
  );
};
