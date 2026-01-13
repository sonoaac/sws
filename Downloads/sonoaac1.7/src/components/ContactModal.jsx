import React from "react";

export default function ContactModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-2xl p-8 min-w-[320px] border-4 border-pink-500 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-green-500 hover:text-pink-500 text-2xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-pink-500">Contact Mark</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border rounded px-4 py-2 focus:border-green-500" />
          <input type="email" placeholder="Your Email" className="border rounded px-4 py-2 focus:border-pink-500" />
          <textarea placeholder="Message" className="border rounded px-4 py-2 focus:border-green-500" rows={4} />
          <button type="submit" className="bg-gradient-to-r from-pink-500 to-green-500 text-white font-semibold py-2 rounded-lg hover:from-green-500 hover:to-pink-500 transition">Send</button>
        </form>
      </div>
    </div>
  );
}
