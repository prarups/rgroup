import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  Send, 
  MessageCircle, 
  Clock, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export const ContactPage: React.FC = () => {
  useScrollReveal();

  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('₹30,000 - ₹50,000');
  const [service, setService] = useState('Daily WhatsApp Leads');
  const [notes, setNotes] = useState('');

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `🚀 *CONSULTATION REQUEST - PILLOW DIGITAL*\n\n` +
      `*Client Name:* ${name}\n` +
      `*Business Name:* ${businessName}\n` +
      `*Phone:* ${phone}\n` +
      `*Service Required:* ${service}\n` +
      `*Monthly Ad Budget:* ${budget}\n` +
      `*Notes:* ${notes || 'None'}\n\n` +
      `_Hi A. Raghul, I would like to discuss my lead generation campaign._`;

    const whatsappUrl = CONTACT_CONFIG.getWhatsAppUrl(formattedMessage);
    window.open(whatsappUrl, '_blank');
  };

  const faqs = [
    {
      q: "How soon do leads start arriving on our WhatsApp?",
      a: "Once the ad shoot/creatives and campaign targeting are finalized and approved, campaigns typically go live within 48 to 72 hours. Customer enquiries begin delivering directly to your WhatsApp shortly after ad activation."
    },
    {
      q: "What is the minimum recommended advertising budget?",
      a: "For predictable results and algorithmic testing on Meta platforms (Facebook & Instagram), we recommend a minimum monthly ad spend starting at ₹25,000 to ₹30,000, in addition to agency management fees."
    },
    {
      q: "How does the 'NO LEADS? MONEY-BACK GUARANTEE*' work?",
      a: "On qualified campaign packages where agreed requirements (ad creatives, recommended minimum budget, approved landing/chat flow, and designated campaign duration) are adhered to, if zero qualified leads are generated, we offer a money-back refund on agency fees as per agreed terms."
    },
    {
      q: "Do you provide promotional video ad shoots and poster designs?",
      a: "Yes! Professional Ad Shoots (4K camera gear, scripts, lighting, audio) and Premium Poster Designs are core services of Pillow Digital. We handle everything from concept to final cut."
    },
    {
      q: "Can we consult directly with Founder A. Raghul?",
      a: "Yes. A. Raghul personally oversees campaign strategy and conducts business growth consulting sessions to review lead quality, response times, and sales conversion tactics."
    }
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="scroll-reveal text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
        <span className="text-xs font-black uppercase tracking-widest text-[#0090FF]">
          CONNECT WITH A. RAGHUL
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Let’s Grow Your <span className="text-gradient-rainbow">Business</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Fill out the lead enquiry form below or message directly on WhatsApp to start generating consistent customer inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto mb-12 sm:mb-16">
        
        {/* Left Form */}
        <div className="scroll-reveal-left lg:col-span-7 bg-white p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 space-y-5 sm:space-y-6 shadow-xl">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900">Book Growth Consultation</h2>
            <p className="text-xs text-slate-600">
              Submit your inquiry to automatically route details to Founder A. Raghul via WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#00D4FF] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                  Business Name *
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Company / Brand"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#00D4FF] text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#00D4FF] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                  Primary Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:bg-white focus:border-[#00D4FF] text-sm"
                >
                  <option value="Daily WhatsApp Leads">Daily WhatsApp Leads</option>
                  <option value="Targeted Lead Generation">Targeted Lead Generation</option>
                  <option value="Social Media Paid Advertising">Social Media Paid Advertising</option>
                  <option value="Professional Ad Shoot">Professional Ad Shoot</option>
                  <option value="Premium Poster Design">Premium Poster Design</option>
                  <option value="Business Growth Consulting">Business Growth Consulting</option>
                  <option value="Business Strategy Consulting">Business Strategy Consulting</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                Monthly Advertising Budget Range
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:bg-white focus:border-[#00D4FF] text-sm"
              >
                <option value="₹20,000 - ₹30,000">₹20,000 - ₹30,000</option>
                <option value="₹30,000 - ₹50,000">₹30,000 - ₹50,000</option>
                <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 - ₹3,00,000</option>
                <option value="₹3,00,000+">₹3,00,000+ (Aggressive Scale)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                Business Goals / Target Audience (Optional)
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tell us what you sell, your target cities/customers, or your current ad challenges..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#00D4FF] text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#00D4FF] via-[#6366F1] to-[#A855F7] text-white font-black text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4 text-white" />
              <span>Launch Campaign Consultation via WhatsApp</span>
            </button>
          </form>
        </div>

        {/* Right Info Card */}
        <div className="scroll-reveal-right lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl rainbow-card space-y-6 shadow-xl border border-slate-200">
            <div className="flex items-center space-x-3.5 pb-4 border-b border-slate-200/90">
              <div className="relative flex-shrink-0">
                <img 
                  src="/ragual.png" 
                  alt="A. Raghul" 
                  className="w-14 h-16 rounded-xl object-cover object-top border-2 border-[#00B4D8] shadow-md shadow-cyan-500/20"
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#00E575] border-2 border-white" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">A. RAGHUL</h3>
                <p className="text-xs text-[#00B4D8] font-bold">Founder & Growth Consultant</p>
                <p className="text-[11px] text-slate-500 font-medium">Pillow Digital • R GROUP</p>
              </div>
            </div>

            <h4 className="text-base font-black text-slate-900">Direct Agency Contact</h4>

            <div className="space-y-4">
              <div className="flex items-start space-x-3.5 text-sm p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 transition-all hover:bg-emerald-50">
                <div className="p-2.5 rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20 mt-0.5">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-wider text-emerald-800">WhatsApp Lead Direct Line</p>
                  <a 
                    href={CONTACT_CONFIG.getWhatsAppUrl("Hi A. Raghul, I am contacting you from Pillow Digital website.")}
                    target="_blank"
                    rel="noreferrer"
                    className="font-black text-slate-900 hover:text-emerald-600 transition-colors text-sm"
                  >
                    {CONTACT_CONFIG.whatsappDisplay} (Click to Chat)
                  </a>
                  <p className="text-[11px] text-emerald-700/80 mt-0.5 font-medium">Instant response during business hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 text-sm p-3.5 rounded-2xl bg-pink-50/70 border border-pink-200/80 transition-all hover:bg-pink-50">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 flex items-center justify-center text-white text-xs font-black shadow-md shadow-pink-500/20 mt-0.5">
                  IG
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-wider text-pink-800">Official Instagram</p>
                  <a 
                    href="https://www.instagram.com/pillow_digital" 
                    target="_blank" 
                    rel="noreferrer"
                    className="font-black text-pink-600 hover:text-pink-700 transition-colors text-sm"
                  >
                    @pillow_digital (DM or Follow)
                  </a>
                  <p className="text-[11px] text-pink-700/80 mt-0.5 font-medium">Daily reels, ad shoots & client results</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm">
                <div className="p-3 rounded-xl bg-purple-50 text-[#845EC2] border border-purple-200 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Operating Hours</p>
                  <p className="font-bold text-slate-800">Monday – Saturday: 9:30 AM – 7:30 PM</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Campaign monitoring active 24/7</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-black text-emerald-600">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Wasted Ad Spend</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every campaign is personally audited by A. Raghul (4+ Years Experience, 100+ Clients Handled) before launching.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Frequently Asked Questions with Scroll Reveal */}
      <div className="scroll-reveal max-w-4xl mx-auto pt-8">
        <div className="text-center space-y-2 mb-10">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Frequently Asked Questions
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Everything you need to know before onboarding with Pillow Digital
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 transition-all cursor-pointer tilt-card shadow-sm"
              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
            >
              <div className="flex items-center justify-between">
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  {faq.q}
                </h4>
                {activeFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
                )}
              </div>
              {activeFaq === idx && (
                <p className="text-xs sm:text-sm text-slate-600 mt-3 pt-3 border-t border-slate-200 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
