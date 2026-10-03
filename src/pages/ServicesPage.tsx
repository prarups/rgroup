import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  Megaphone, 
  Target, 
  MessageCircle, 
  Camera, 
  Palette, 
  TrendingUp, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

interface ServicesPageProps {
  openLeadModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ openLeadModal }) => {
  useScrollReveal();

  const serviceDetails = [
    {
      id: "paid-ads",
      icon: Megaphone,
      title: "Social Media Paid Advertising",
      subtitle: "Strategic Facebook & Instagram Advertising Campaigns",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
      description: "We design, deploy, and continuously optimize high-converting Meta advertising campaigns. Every ad dollar is backed by thorough audience research and rapid creative testing to ensure maximum ROAS.",
      deliverables: [
        "Complete Meta Business Manager & Pixel integration",
        "Custom & Lookalike audience architecture",
        "A/B split testing on hooks, creatives, and ad copy",
        "Bid management, budget pacing, and retargeting funnels",
        "Transparent weekly ROI and metric performance reports"
      ],
      idealFor: "E-commerce, Local Businesses, Real Estate, Clinics & Service Providers"
    },
    {
      id: "targeted-leads",
      icon: Target,
      title: "Targeted Lead Generation",
      subtitle: "High-Intent Audience Profiling & Conversion Funnels",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "We don't collect useless contact numbers. We build laser-focused lead generation funnels that qualify potential clients based on income, interest, geographic location, and actual buying intent.",
      deliverables: [
        "In-depth customer avatar & competitor research",
        "Custom high-converting instant forms & landing pages",
        "Pre-qualifying survey questions to weed out time-wasters",
        "Automated CRM sync and real-time notifications",
        "Zero-waste targeting parameters to prevent ad exhaustion"
      ],
      idealFor: "B2B, High-Ticket Services, Education, Healthcare, Franchise Networks"
    },
    {
      id: "whatsapp-leads",
      icon: MessageCircle,
      title: "Daily WhatsApp Leads",
      subtitle: "Instant Customer Enquiries Straight to Your Phone",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80",
      description: "Why wait for emails to be answered? We build direct-to-WhatsApp ad campaigns where interested customers initiate a chat with your sales team in real-time, closing deals 5x faster.",
      deliverables: [
        "Click-to-WhatsApp Meta campaign configuration",
        "Pre-filled starter message scripts for instant context",
        "WhatsApp Business automation & instant greeting setup",
        "Lead tracking and cost-per-chat optimization",
        "Sales objection handling and closing scripts guidance"
      ],
      idealFor: "Retailers, Automobile Dealerships, Doctors, Coaches, Local Salons & Boutiques"
    },
    {
      id: "ad-shoot",
      icon: Camera,
      title: "Professional Ad Shoot",
      subtitle: "Promotional Video Production & High-Impact Ad Creatives",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
      description: "Content is king in modern social advertising. Our professional production team handles concept ideation, scripting, lighting, 4K shooting, and dynamic editing specifically formatted for Reels, Stories, and Feeds.",
      deliverables: [
        "Hook-driven scriptwriting crafted for 3-second attention retention",
        "On-location or studio 4K video shoot with professional lighting & audio",
        "Dynamic pacing, trendy sound design, and animated captions",
        "Multiple creative variations for ad split-testing",
        "Direct-response visual hooks that drive clicks"
      ],
      idealFor: "Brands seeking premium market positioning, Restaurants, Real Estate, Fashion & Lifestyle"
    },
    {
      id: "poster-design",
      icon: Palette,
      title: "Premium Poster Design",
      subtitle: "High-Converting Creatives & Brand Promotional Assets",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80",
      description: "Stop visitors mid-scroll with visually arresting, conversion-focused poster and banner designs. We combine psychology-backed color theory with clear value propositions and strong CTAs.",
      deliverables: [
        "Custom high-resolution promotional graphics & banners",
        "Multi-aspect ratio outputs (1:1 Feed, 9:16 Story/Reel, 16:9 Landscape)",
        "Compelling promotional headlines & discount offer layouts",
        "Brand style guide adherence and typography hierarchy",
        "Ad compliance review to prevent Meta image text penalties"
      ],
      idealFor: "Event Organizers, Seasonal Offers, Product Launches & Daily Social Media Presence"
    },
    {
      id: "growth-consulting",
      icon: TrendingUp,
      title: "Business Growth Consulting",
      subtitle: "Actionable Guidance from Founder A. Raghul",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      description: "Marketing is only half the battle; lead conversion and sales systems dictate profitability. Founder A. Raghul offers 1-on-1 practical consulting on customer acquisition economics, follow-up cadence, and team alignment.",
      deliverables: [
        "Audit of current sales pipelines & lead leakages",
        "Customer lifetime value (LTV) and CAC optimization roadmap",
        "Sales team follow-up protocols & response time reduction",
        "Offer positioning and pricing restructuring strategies",
        "Bi-weekly strategic review calls and execution KPIs"
      ],
      idealFor: "Growing SMEs, Startup Founders, Family Businesses scaling past ₹50L+ revenue"
    },
    {
      id: "strategy-consulting",
      icon: Compass,
      title: "Business Strategy Consulting",
      subtitle: "Holistic Systems for Predictable Scalability",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      description: "Transform your business from ad-dependent chaos into a predictable revenue generation machine. We review your market moat, operational efficiency, and long-term brand equity under the strategic umbrella of R GROUP.",
      deliverables: [
        "Competitive advantage & market differentiation analysis",
        "Long-term channel diversification (Organic, Paid, Referral)",
        "Quarterly growth milestones and revenue projections",
        "Executive decision-making frameworks and risk mitigation",
        "Comprehensive growth blueprint for the entire organization"
      ],
      idealFor: "Enterprises, Group Companies, Multi-Location Brands and Ambitious Entrepreneurs"
    }
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="scroll-reveal text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-gradient-rainbow border border-slate-200 text-xs font-black uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
          <span>7 Specialized Core Offerings</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Comprehensive Growth & <br />
          <span className="text-gradient-rainbow">Lead Generation Services</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Explore our complete service catalog with real-world deliverables, media production, and conversion systems.
        </p>
      </div>

      {/* Services List with Images */}
      <div className="space-y-8 sm:space-y-10">
        {serviceDetails.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="scroll-reveal rainbow-card p-6 sm:p-10 shadow-lg border border-slate-200 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual Image & Details */}
                <div className="lg:col-span-6 space-y-5">
                  
                  {/* Photo Banner */}
                  <div className="relative h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex items-center space-x-2">
                      <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[#00D4FF] font-black text-xs border border-white/20">
                        SERVICE #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#FFDE00]" />
                      </div>
                      <span className="text-xs font-bold text-white drop-shadow">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-bold text-[#00B4D8] mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div>
                    <p className="text-xs font-semibold text-slate-600">
                      <span className="text-slate-900 font-extrabold">Ideal For:</span> {service.idealFor}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={openLeadModal}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF2E93] to-[#FF8A00] text-black font-black text-xs hover:brightness-110 shadow-md transition-all flex items-center space-x-2"
                    >
                      <span>Get Started with this Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={CONTACT_CONFIG.getWhatsAppUrl(`Hi A. Raghul, I am interested in your ${service.title} service.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-emerald-700 border border-emerald-300 text-xs font-extrabold transition-all flex items-center space-x-1.5 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>
                </div>

                {/* Right Deliverables Card */}
                <div className="lg:col-span-6 stat-card-lux p-6 sm:p-8 space-y-4 relative group">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF8A00] via-[#00D4FF] to-[#00E575]" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-amber-600 flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>Included Deliverables & Strategy</span>
                  </h3>

                  <ul className="space-y-3.5">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start space-x-3 text-sm text-slate-800 font-medium">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-slate-200/90 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Performance Focused System</span>
                    <span className="text-[#00B4D8] font-black">100+ Campaigns Handled</span>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Guarantee Prompt Banner */}
      <div className="scroll-reveal mt-20 p-8 sm:p-12 rounded-3xl rainbow-card border border-slate-200 text-center space-y-4 shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
          Not Sure Which Service Your Business Needs?
        </h3>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          Schedule a direct 15-minute diagnostic session with Founder A. Raghul. We will audit your current marketing and recommend the exact high-converting package.
        </p>
        <button
          onClick={openLeadModal}
          className="px-8 py-3.5 bg-gradient-to-r from-[#FF2E93] via-[#00D4FF] to-[#00E575] text-black font-black text-sm rounded-xl hover:brightness-110 transition-all shadow-md"
        >
          Book Free 15-Min Growth Diagnostic
        </button>
      </div>
    </div>
  );
};
