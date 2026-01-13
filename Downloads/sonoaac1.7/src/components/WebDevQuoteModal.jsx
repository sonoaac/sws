import React from "react";

export default function WebDevQuoteModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-2xl p-8 min-w-[340px] border-4 border-green-500 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-pink-500 hover:text-green-500 text-2xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-green-500">Web Development Quote</h2>
        <div className="mb-4">
          <div className="font-semibold text-lg mb-2">Frontend Website (React – 5 Pages)</div>
          <div className="text-pink-500 font-bold text-xl mb-2">$600</div>
        </div>
        <div className="mb-4">
          <div className="font-semibold mb-1">Optional Add-Ons:</div>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Social media integration: <span className="text-green-500 font-semibold">$150</span></li>
            <li>UI enhancements: <span className="text-green-500 font-semibold">$200</span></li>
            <li>Hosting & deployment: <span className="text-green-500 font-semibold">$100</span></li>
            <li>Security consultation: <span className="text-green-500 font-semibold">$150</span></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-1">Backend Development (Optional):</div>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Basic backend (forms & data storage): <span className="text-pink-500 font-semibold">$900</span></li>
            <li>Authentication: <span className="text-pink-500 font-semibold">$400</span></li>
            <li>Payments (Stripe): <span className="text-pink-500 font-semibold">$700</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
