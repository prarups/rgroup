import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';

interface GuaranteeTermsPageProps {
  openLeadModal: () => void;
}

export const GuaranteeTermsPage: React.FC<GuaranteeTermsPageProps> = ({ openLeadModal }) => {
  useScrollReveal();

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="scroll-reveal text-center space-y-4 mb-16">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase tracking-wider border border-emerald-500/40">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Transparent Accountability</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          No Leads? <span className="text-gradient-aurora">Money-Back Guarantee*</span> Policy
        </h1>
        <p className="text-indigo-200 text-sm sm:text-base max-w-2xl mx-auto">
          We stand firmly behind our data-driven growth strategies. Below are the official terms, conditions, and qualifying guidelines governing eligible campaign packages.
        </p>
      </div>

      {/* Main Terms Container with Scroll Reveal */}
      <div className="scroll-reveal space-y-8 glass-sapphire p-8 sm:p-12 rounded-3xl border border-indigo-400/25 leading-relaxed text-sm text-indigo-100 shadow-2xl">
        
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-black text-white flex items-center space-x-2">
            <span className="text-[#00F0FF]">1.</span>
            <span>Guarantee Scope & Purpose</span>
          </h2>
          <p>
            At <strong>Pillow Digital (Operated under R GROUP)</strong>, our core promise is to solve the lead-generation problem for business owners. On eligible packages explicitly agreed upon in writing prior to campaign initiation, Pillow Digital guarantees the delivery of qualified inquiries as defined by the mutual Campaign Service Level Agreement (SLA). If zero qualified inquiries are delivered within the designated campaign testing duration despite satisfying all conditions below, eligible agency retainers are refundable.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-black text-white flex items-center space-x-2">
            <span className="text-[#00F0FF]">2.</span>
            <span>Eligibility Requirements</span>
          </h2>
          <p>The Money-Back Guarantee applies strictly to campaigns meeting the following criteria:</p>
          <ul className="space-y-2 list-none pl-2">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
              <span><strong>Approved Ad Budget:</strong> The client maintains the minimum agreed daily/monthly ad spend required for machine-learning algorithmic optimization (minimum ₹25,000/month on Meta platforms).</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
              <span><strong>Designated Campaign Duration:</strong> Paid advertising campaigns must run continuously for the full agreed evaluation cycle (minimum 30 consecutive days without mid-campaign budget freezing or pauses).</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
              <span><strong>Pillow Digital Creative Freedom:</strong> Campaigns must utilize ad creatives (promotional videos or poster designs) and audience targeting parameters produced or approved by Pillow Digital.</span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-black text-white flex items-center space-x-2">
            <span className="text-[#00F0FF]">3.</span>
            <span>Definition of a Qualified Lead</span>
          </h2>
          <p>
            A "Lead" or "Customer Enquiry" is defined as an individual who submits their authentic contact details (Name, Phone/WhatsApp, or Email) via an approved lead form or initiates a direct inquiry through the designated WhatsApp Business channel expressing intent regarding the client's products or services. Pillow Digital is not liable for customer purchase decisions made post-inquiry, as final sales conversion depends on the client’s internal sales team, pricing, and product fulfillment.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-black text-white flex items-center space-x-2">
            <span className="text-[#00F0FF]">4.</span>
            <span>Client Responsibilities</span>
          </h2>
          <ul className="space-y-2 list-none pl-2">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
              <span>Maintaining an active, unbanned Meta Business Manager and ad account payment method.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
              <span>Promptly granting requisite admin or partner permissions to Pillow Digital media buyers.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
              <span>Responding to incoming WhatsApp customer inquiries within a reasonable timeframe (within 2 hours recommended).</span>
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-black text-white flex items-center space-x-2">
            <span className="text-[#00F0FF]">5.</span>
            <span>Refund Process & Terms</span>
          </h2>
          <p>
            In the rare event that an eligible campaign completes its full agreed term under all stated guidelines without producing any qualified inquiries, the client may submit a formal review request. Upon verification of campaign logs, eligible agency management fees will be refunded within 14 business days. Note: Third-party ad platform payments disbursed directly to Meta/Google for ad impressions are non-refundable as they represent media consumed on third-party networks.
          </p>
        </section>

      </div>

      {/* CTA Box */}
      <div className="scroll-reveal mt-12 p-8 sm:p-10 rounded-3xl glass-sapphire-glow border border-[#00F0FF]/40 text-center space-y-4 shadow-2xl">
        <h3 className="text-2xl font-black text-white">
          Ready to Start a Zero-Risk Growth Campaign?
        </h3>
        <p className="text-xs sm:text-sm text-indigo-200 max-w-lg mx-auto">
          Contact Founder A. Raghul to verify if your business qualifies for our Money-Back Guarantee package.
        </p>
        <button
          onClick={openLeadModal}
          className="px-8 py-3.5 bg-gradient-to-r from-[#00F0FF] via-[#6366F1] to-[#A855F7] text-black font-black text-sm rounded-xl hover:brightness-110 shadow-xl shadow-cyan-500/25 transition-all"
        >
          Check Campaign Eligibility on WhatsApp
        </button>
      </div>
    </div>
  );
};
