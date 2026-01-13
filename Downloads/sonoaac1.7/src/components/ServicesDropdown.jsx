import React, { useState } from "react";
import WebDevQuoteModal from "./WebDevQuoteModal";

const serviceDetails = {
  "Web Development": [
    "Custom websites & apps",
    "E-commerce solutions",
    "SEO & analytics",
    "Branding & design"
  ],
  "Build a PC": [
    "Personalized PC builds",
    "We handle purchasing & assembly",
    "Transparent pricing & consultation",
    "Ongoing support after your build"
  ],
  "Setup Support": [
    "OS installation",
    "Driver setup",
    "Basic configuration",
    "Save money on setup"
  ],
  "Tech Support Membership": [
    "24/7 tech support",
    "Remote troubleshooting",
    "Priority service",
    "Annual membership"
  ]
};

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState("");
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [buildPCOpen, setBuildPCOpen] = useState(false);
  const [setupOpen, setSetupOpen] = useState(false);
  const [membershipOpen, setMembershipOpen] = useState(false);
  const serviceLabels = Object.keys(serviceDetails);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-pink-500 transition"
      >
        Services
      </button>
      <div
        className={`absolute left-0 mt-2 w-64 bg-white border border-green-500 rounded-lg shadow-lg z-10 transition-all duration-500 ${open ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}`}
        style={{
          willChange: 'transform, opacity',
          overflow: 'hidden',
        }}
      >
        <ul className="py-2">
          {serviceLabels.map((label, idx) => (
            <li key={label} className="relative">
              <button
                className={`w-full text-left px-4 py-2 hover:bg-green-50 cursor-pointer transition-all duration-500 ease-out font-semibold ${expanded === label ? 'bg-pink-50' : ''}`}
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: open ? `${idx * 100 + 100}ms` : '0ms',
                }}
                onClick={() => setExpanded(expanded === label ? "" : label)}
              >
                  {label}
              </button>
              {/* Sub-dropdown for details */}
              <div
                className={`transition-all duration-500 overflow-hidden ${expanded === label ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{background: '#fff'}}
              >
                <ul className="pl-6 pr-4 py-2 text-sm text-gray-700">
                  {serviceDetails[label].map((detail, i) => (
                    <li key={detail + i} className="py-1">
                      {detail}
                    </li>
                  ))}
                  {/* Action buttons for modals */}
                  {label === "Web Development" && (
                    <li className="pt-2"><button className="text-pink-500 underline" onClick={() => { setQuoteOpen(true); setOpen(false); }}>Get a Quote</button></li>
                  )}
                  {label === "Build a PC" && (
                    <li className="pt-2"><a href="/build-pc" className="text-pink-500 underline">Click here to know more</a></li>
                  )}
                  {label === "Setup Support ($50)" && (
                    <li className="pt-2"><button className="text-green-600 underline" onClick={() => { setSetupOpen(true); setOpen(false); }}>Book Setup</button></li>
                  )}
                  {label === "Tech Support Membership ($150/yr)" && (
                    <li className="pt-2"><button className="text-green-600 underline" onClick={() => { setMembershipOpen(true); setOpen(false); }}>Become a Member</button></li>
                  )}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <WebDevQuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      {/* Build a PC Modal */}
      {buildPCOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg border-4 border-green-500 relative">
            <button
              onClick={() => setBuildPCOpen(false)}
              className="absolute top-2 right-2 text-green-500 hover:text-pink-500 text-2xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-pink-500 text-center">Ready to get your new PC?</h2>
            <p className="mb-4 text-gray-700 text-center">
              Tired of prebuilt PCs that don’t fit your standards? Let’s get you started with building one with SonoAAC’s Build a PC team.<br />
              We do everything from purchasing your specs to assembly and setup. <br />
              <span className="font-semibold text-green-600">Custom builds, expert advice, and full support.</span>
            </p>
            <ul className="mb-4 text-left list-disc pl-6 text-gray-700">
              <li>Personalized PC builds for gaming, work, or creative needs</li>
              <li>We handle all purchasing and assembly</li>
              <li>Transparent pricing and consultation</li>
              <li>Ongoing support after your build</li>
            </ul>
            <div className="text-center">
              <a href="/build-pc" className="text-pink-500 font-bold underline hover:text-green-600 transition">
                Click here to know more
              </a>
            </div>
          </div>
        </div>
      )}
      {/* Setup Support Modal */}
      {setupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg border-4 border-green-500 relative">
            <button
              onClick={() => setSetupOpen(false)}
              className="absolute top-2 right-2 text-green-500 hover:text-pink-500 text-2xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-green-600 text-center">Setup Support</h2>
            <p className="mb-4 text-gray-700 text-center">
              Just purchased a new PC and want to save money? Pay a starting fee of <span className="font-bold text-pink-500">$50</span> and we’ll set up your PC for you.<br />
              Includes OS installation, driver setup, and basic configuration.
            </p>
            <div className="text-center">
              <span className="text-green-600 font-bold">Book your setup now!</span>
            </div>
          </div>
        </div>
      )}
      {/* Membership Modal */}
      {membershipOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg border-4 border-pink-500 relative">
            <button
              onClick={() => setMembershipOpen(false)}
              className="absolute top-2 right-2 text-green-500 hover:text-pink-500 text-2xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-green-600 text-center">Tech Support Membership</h2>
            <p className="mb-4 text-gray-700 text-center">
              Sign up for our <span className="font-bold text-pink-500">$150/year</span> membership and get 24/7 tech support for your PC.<br />
              Fast help, remote troubleshooting, and priority service.
            </p>
            <div className="text-center">
              <span className="text-green-600 font-bold">Become a member today!</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
