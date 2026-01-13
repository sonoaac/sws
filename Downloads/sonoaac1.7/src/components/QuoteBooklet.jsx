import React, { useState } from "react";

/* ----------- TOOLTIP EXPLANATIONS ----------- */

const tooltips = {
  pages: {
    0: "Single landing page with core information. Perfect for small businesses or portfolios.",
    1: "Home + About + Services. Ideal for local businesses and service providers.",
    2: "Standard business site: Home, About, Services, Contact. Great for most companies.",
    3: "Enhanced site with dedicated pages for Products/Portfolio + 2 more custom pages.",
    4: "Complete business presence with all core + Blog + Gallery + Team pages.",
    5: "Custom page count - we'll quote based on your unique needs and scope."
  },
  complexity: {
    0: "Static HTML, CSS & JavaScript. Perfect for landing pages and portfolios. No dynamic content.",
    1: "React frontend with interactive components. Great for modern, responsive user experiences. No backend.",
    2: "Full-stack solution: React + TypeScript + Node.js / Next.js + Database. For complex apps, ecommerce, dashboards."
  },
  features: {
    0: "Mobile, tablet & desktop optimization built-in. All devices covered.",
    1: "Menu system with dropdowns & mobile hamburger. Helps users navigate easily.",
    2: "Custom form with email notifications. For inquiries, bookings, or registrations.",
    3: "Standard sections for business info. Tells your story and builds credibility.",
    4: "Google Maps embed + directions. Great for local businesses and storefronts.",
    5: "Image grid or carousel showcase. Perfect for portfolios, products & visuals.",
    6: "Regularly updated content hub. Boosts SEO and keeps visitors engaged.",
    7: "Client reviews & social proof. Builds trust and increases conversions.",
    8: "Facebook, Instagram, LinkedIn, Twitter links. Drives traffic to your profiles.",
    9: "Email subscription form. Build your mailing list for marketing."
  },
  addons: {
    0: "Keyword optimization, meta tags, structured data. Improves search engine rankings.",
    1: "Professional logo design, color scheme, typography. Makes your brand cohesive.",
    2: "Shopping cart, payment processing (Stripe/PayPal), inventory. Sell products online.",
    3: "Monthly updates, bug fixes, feature requests. Keeps your site running smoothly.",
    4: "Hosting setup, SSL certificates, domain config. Gets your site live on the web.",
    5: "Point your existing domain to the new site. Keeps your online presence intact.",
    6: "Detect visitor language & serve content in their language. Reach global customers.",
    7: "Connect external APIs (weather, social feeds, etc.) or custom AI chatbots. Advanced automation."
  }
};

/* ---------------- PRICING LOGIC ---------------- */

// Pages: 1 page = 100, 5 pages = 500
const PAGE_PRICES = [100, 200, 300, 400, 500, 0]; // Custom = 0

// Complexity tiers
const COMPLEXITY_PRICES = [
  100,  // Basic (HTML, CSS, JS)
  200,  // React (Frontend Only)
  900   // Full Logic (React + TS + Node / Next.js)
];

// Core features (small enhancements)
const FEATURE_PRICES = [
  0,   // Responsive (included)
  0,   // Navigation (included)
  50,  // Contact / Booking form
  0,   // About & Services (included)
  40,  // Location / Map
  60,  // Gallery
  80,  // Blog / News
  40,  // Testimonials
  30,  // Social media links
  20   // Newsletter signup
];

// Advanced add-ons
const ADDON_PRICES = [
  100,  // SEO
  150,  // Branding & UI
  300,  // E-commerce
  80,   // Maintenance
  60,   // Hosting & Deployment
  40,   // Domain connection
  200,  // Multi-language
  1700  // API / AI / Chatbot (FULL LOGIC)
];

/* ---------------- OPTIONS ---------------- */

const pageOptions = [
  "1 Page ($100)",
  "2 Pages ($200)",
  "3 Pages ($300)",
  "4 Pages ($400)",
  "5 Pages ($500)",
  "Custom (Quote Required)"
];

const complexityOptions = [
  "Basic (HTML, CSS, JavaScript)",
  "React (Frontend Only)",
  "Full Logic (React + TypeScript + Node / Next.js)"
];

const featureOptions = [
  "Responsive design (included)",
  "Navigation menu (included)",
  "Contact / Booking form",
  "About & Services section (included)",
  "Location / Map integration",
  "Gallery / Showcase",
  "Blog / News section",
  "Client testimonials",
  "Social media integration",
  "Newsletter signup"
];

const addonOptions = [
  "SEO optimization",
  "Branding & UI Design",
  "E-commerce setup",
  "Maintenance & Support",
  "Hosting & Deployment",
  "Custom domain connection",
  "Multi-language support",
  "API / Chatbot / AI Assistant (Advanced Logic)"
];

/* ---------------- COMPONENT ---------------- */

export default function QuoteBooklet({ open, onClose }) {
  const [pages, setPages] = useState(0);
  const [complexity, setComplexity] = useState(0);
  const [features, setFeatures] = useState([]);
  const [addons, setAddons] = useState([]);

  const total =
    (PAGE_PRICES[pages] || 0) +
    (COMPLEXITY_PRICES[complexity] || 0) +
    features.reduce((sum, i) => sum + (FEATURE_PRICES[i] || 0), 0) +
    addons.reduce((sum, i) => sum + (ADDON_PRICES[i] || 0), 0);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl w-full overflow-y-auto relative" style={{ maxHeight: "90vh" }}>
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold text-pink-500">×</button>

        <h2 className="text-2xl font-bold mb-6 text-pink-500">
          Website Build Quote
        </h2>

        {/* Pages */}
        <Section title="Number of Pages">
          {pageOptions.map((opt, i) => (
            <Radio key={i} checked={pages === i} onChange={() => setPages(i)} label={opt} tooltip={tooltips.pages[i]} />
          ))}
        </Section>

        {/* Complexity */}
        <Section title="Website Type / Complexity">
          {complexityOptions.map((opt, i) => (
            <Radio key={i} checked={complexity === i} onChange={() => setComplexity(i)} label={opt} tooltip={tooltips.complexity[i]} />
          ))}
        </Section>

        {/* Features */}
        <Section title="Core Features">
          {featureOptions.map((opt, i) => (
            <Checkbox
              key={i}
              checked={features.includes(i)}
              onChange={() =>
                setFeatures(features.includes(i)
                  ? features.filter(f => f !== i)
                  : [...features, i])
              }
              label={opt}
              tooltip={tooltips.features[i]}
            />
          ))}
        </Section>

        {/* Add-ons */}
        <Section title="Advanced Add-Ons">
          {addonOptions.map((opt, i) => (
            <Checkbox
              key={i}
              checked={addons.includes(i)}
              onChange={() =>
                setAddons(addons.includes(i)
                  ? addons.filter(a => a !== i)
                  : [...addons, i])
              }
              label={opt}
              tooltip={tooltips.addons[i]}
            />
          ))}
        </Section>

        <div className="mt-8 text-2xl font-bold text-green-600">
          Estimated Total: ${total}
        </div>
      </div>
    </div>
  );
}

/* ---------------- REUSABLE UI ---------------- */

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="font-semibold mb-2">{title}</h3>
    <ul className="list-disc ml-6 space-y-1">{children}</ul>
  </div>
);

const Radio = ({ checked, onChange, label, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <li className="relative">
      <div className="flex items-center gap-2">
        <label className="cursor-pointer flex items-center gap-2">
          <input type="radio" checked={checked} onChange={onChange} className="mr-2 accent-pink-500" />
          {label}
        </label>
        {tooltip && (
          <button
            type="button"
            onClick={() => setShowTooltip(!showTooltip)}
            className="text-pink-500 font-bold hover:text-pink-700 text-lg leading-none"
            title="Click for details"
          >
            ⓘ
          </button>
        )}
      </div>
      {showTooltip && tooltip && (
        <div className="mt-2 ml-6 p-3 bg-pink-50 border-l-4 border-pink-500 text-sm text-gray-700 rounded text-left">
          {tooltip}
        </div>
      )}
    </li>
  );
};

const Checkbox = ({ checked, onChange, label, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <li className="relative">
      <div className="flex items-center gap-2">
        <label className="cursor-pointer flex items-center gap-2">
          <input type="checkbox" checked={checked} onChange={onChange} className="mr-2 accent-green-500" />
          {label}
        </label>
        {tooltip && (
          <button
            type="button"
            onClick={() => setShowTooltip(!showTooltip)}
            className="text-green-600 font-bold hover:text-green-700 text-lg leading-none"
            title="Click for details"
          >
            ⓘ
          </button>
        )}
      </div>
      {showTooltip && tooltip && (
        <div className="mt-2 ml-6 p-3 bg-green-50 border-l-4 border-green-500 text-sm text-gray-700 rounded text-left">
          {tooltip}
        </div>
      )}
    </li>
  );
};
