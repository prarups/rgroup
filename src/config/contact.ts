/**
 * Centralized Contact Configuration
 * Update the phone number and links here to reflect across the entire application instantly.
 */
export const CONTACT_CONFIG = {
  // Real client WhatsApp phone number (Digits only: country code + 10-digit number)
  whatsappNumber: "918778802481", 
  
  // Formatted display number shown to users
  whatsappDisplay: "+91 87788 02481",

  // Founder & Agency details
  founderName: "A. Raghul",
  brandName: "Pillow Digital",
  parentCompany: "R GROUP",

  // Socials
  instagramHandle: "@pillow_digital",
  instagramUrl: "https://www.instagram.com/pillow_digital",

  // Operating schedule
  operatingHours: "Monday – Saturday: 9:30 AM – 7:30 PM",

  // Helper method to construct wa.me links with custom pre-filled message
  getWhatsAppUrl: (customMessage?: string) => {
    const text = customMessage || "Hi A. Raghul, I am contacting you from Pillow Digital website to discuss lead generation for my business.";
    return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  }
};
