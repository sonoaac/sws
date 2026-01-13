
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
import ServicesDropdown from "./ServicesDropdown";

export default function Navigation() {
  const [contactOpen, setContactOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <>
      <nav className="bg-white border-b border-gray-200 shadow-sm w-full">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Branding and Logo */}
          <div className="flex items-center gap-4">
            <img src="/sonoaaclogo.PNG" alt="sonoaac logo" className="w-16 h-16 object-contain" />
            <div>
              <div className="bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-transparent text-3xl md:text-5xl font-extrabold leading-tight">SWS</div>
              <div className="text-gray-900 text-lg md:text-2xl font-extrabold leading-tight">sonoaac web services</div>
            </div>
          </div>
          {/* Navigation and Actions */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full md:w-auto justify-end">
            <ul className="flex gap-4 md:gap-8 items-center justify-center">
              <li>
                <Link to="/" className="text-gray-700 hover:text-pink-500 font-medium transition">
                  Home
                </Link>
              </li>
              <li>
                <ServicesDropdown />
              </li>
            </ul>
            <div className="flex gap-2 md:gap-3 mt-2 md:mt-0">
              <button
                onClick={() => setContactOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-green-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-pink-600 transition"
              >
                Contact
              </button>
              <button
                onClick={() => setQuoteOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-pink-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-green-600 transition"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      {/* You can add a QuoteBooklet modal here if needed */}
    </>
  );
}
