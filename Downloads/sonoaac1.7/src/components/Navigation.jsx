import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
import ServicesDropdown from "./ServicesDropdown";

export default function Navigation() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            <span className="text-gray-900">sonoaac</span>
            <span className="text-pink-500">services</span>
          </Link>

          {/* Links */}
          <ul className="flex gap-8 items-center">
            <li>
              <Link to="/" className="text-gray-700 hover:text-pink-500 font-medium transition">
                Home
              </Link>
            </li>
            <li>
              <ServicesDropdown />
            </li>
            <li>
              <button
                onClick={() => setContactOpen(true)}
                className="text-gray-700 hover:text-green-500 font-medium transition focus:outline-none"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
