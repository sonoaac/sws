
import React from "react";

export default function AnimatedHeader({ onContact, onQuote }) {
  return (
    <header className="w-full flex flex-col items-start justify-start px-14 pt-10 pb-2 bg-white" style={{ minHeight: 0 }}>
      <div className="flex items-center gap-6">
        <img src="/sonoaaclogo.PNG" alt="sonoaac logo" className="w-24 h-24 object-contain mb-2" />
        <div>
          <div className="bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-transparent text-5xl font-extrabold leading-tight">SWS</div>
          <div className="text-gray-900 text-3xl font-extrabold leading-tight">sonoaac web services</div>
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <button
          onClick={onContact}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-green-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-pink-600 transition"
        >
          Contact
        </button>
        <button
          onClick={onQuote}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-pink-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-green-600 transition"
        >
          Get Quote
        </button>
      </div>
    </header>
  );
}
