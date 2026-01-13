import React, { useState } from "react";

export default function BuildPCModal({ open, onClose }) {
  const [form, setForm] = useState({
    budget: "",
    cpu: "",
    gpu: "",
    ram: "",
    use: "",
    name: "",
    email: "",
    phone: ""
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send to backend or email
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-lg border-4 border-pink-500 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-green-500 hover:text-pink-500 text-2xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-6 text-pink-400 text-center">Build Your PC</h2>
        {submitted ? (
          <div className="bg-green-900 text-green-200 p-6 rounded-xl text-center text-xl font-semibold shadow-lg">
            Thank you! Your request has been received.<br />We'll contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 text-green-300 font-semibold">Budget Range</label>
              <input name="budget" value={form.budget} onChange={handleChange} required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="$1000 - $3000" />
            </div>
            <div>
              <label className="block mb-1 text-green-300 font-semibold">CPU Preference</label>
              <select name="cpu" value={form.cpu} onChange={handleChange} required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500">
                <option value="">Select</option>
                <option>Intel</option>
                <option>AMD</option>
                <option>Any</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-green-300 font-semibold">GPU Preference</label>
              <input name="gpu" value={form.gpu} onChange={handleChange} required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" placeholder="NVIDIA / AMD / Any" />
            </div>
            <div>
              <label className="block mb-1 text-green-300 font-semibold">RAM & Storage</label>
              <input name="ram" value={form.ram} onChange={handleChange} required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500" placeholder="e.g. 32GB RAM, 1TB SSD" />
            </div>
            <div>
              <label className="block mb-1 text-green-300 font-semibold">Use Case</label>
              <select name="use" value={form.use} onChange={handleChange} required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-green-500">
                <option value="">Select</option>
                <option>Gaming</option>
                <option>Streaming</option>
                <option>Editing</option>
                <option>Mixed</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-green-300 font-semibold">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-pink-500" />
            </div>
            <div>
              <label className="block mb-1 text-green-300 font-semibold">Email</label>
              <input name="email" value={form.email} onChange={handleChange} required type="email" className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-pink-500" />
            </div>
            <div>
              <label className="block mb-1 text-green-300 font-semibold">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-pink-500" />
            </div>
            <button type="submit" className="w-full py-3 mt-4 bg-gradient-to-r from-pink-500 to-green-500 text-white font-bold rounded-xl text-xl shadow-lg hover:from-green-500 hover:to-pink-500 transition">Submit Request</button>
          </form>
        )}
      </div>
    </div>
  );
}

