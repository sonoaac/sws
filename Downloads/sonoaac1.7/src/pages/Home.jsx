import AnimatedHeader from '../components/AnimatedHeader';
import React, { useState } from 'react';
import ContactModal from '../components/ContactModal';
import QuoteBooklet from '../components/QuoteBooklet';
import DemoShowcase from '../components/DemoShowcase';
// Removed BuildPCModal import

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
    // Removed buildPCOpen state
  return (
    <>
      <AnimatedHeader />
      <div className="flex pl-14" style={{ fontSize: '13pt', background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.03) 0%, rgba(244, 114, 182, 0.03) 100%)' }}>
        {/* Left/Center Content */}
        <div className="w-1/2 flex items-start justify-start pl-10 pr-6 py-20" style={{ fontSize: '13pt', paddingTop: '80px' }}>
          <div className="max-w-lg w-full">
            <img src="/sonoaaclogo.PNG" alt="sonoaac logo" className="mb-4 w-24 h-24 object-contain" />
            <h1 className="text-5xl font-extrabold mb-4 text-left" style={{ fontSize: '2.5rem' }}>
              <div className="bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-transparent">
                SWS
              </div>
              <div className="text-gray-900">sonoaac web services</div>
            </h1>

            <div className="flex gap-3 flex-wrap justify-start" style={{ fontSize: '13pt' }}>
              <button
                onClick={() => setContactOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-green-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-pink-600 transition"
              >
                Contact
              </button>
              <button
                onClick={() => setQuoteOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-pink-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-green-600 transition"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - PC Build Promo: 5 images in grid, larger */}
        <div className="w-1/2 flex flex-col items-start justify-start p-4" style={{ fontSize: '13pt', paddingTop: '80px' }}>
          <div className="flex flex-col w-full max-w-2xl items-center">
            <div className="mb-2 flex justify-center items-center w-full" style={{ fontSize: '13pt' }}>
              <span className="text-2xl font-bold text-white italic drop-shadow-lg transform -rotate-6 bg-gradient-to-r from-pink-500 to-green-500 px-4 py-1.5 rounded-2xl shadow-lg" style={{ fontSize: '13pt' }}>
                Build PC with us for <span className="text-pink-200">half the price</span>
              </span>
            </div>
            <div className="flex gap-3 w-full justify-center" style={{ fontSize: '13pt' }}>
              <img src="/gempages.webp" srcSet="/gempages.webp 1x" sizes="(min-width: 1024px) 50vw, 100vw" alt="Gem Pages" className="object-cover h-56 w-full" style={{imageRendering: 'auto', border: 'none', boxShadow: 'none', borderRadius: 0}} />
              <img src="/gempages1.webp" srcSet="/gempages1.webp 1x" sizes="(min-width: 1024px) 50vw, 100vw" alt="Gem Pages 1" className="object-cover h-56 w-full" style={{imageRendering: 'auto', border: 'none', boxShadow: 'none', borderRadius: 0}} />
            </div>
          </div>
        </div>

        {/* Right Side - Booklet for Quote */}
        <QuoteBooklet open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      </div>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      {/* Small business info as plain text below main content */}
      <div className="w-full pl-16 pr-6 py-4" style={{ fontSize: '13pt', background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.03) 0%, rgba(244, 114, 182, 0.03) 100%)' }}>
        <h2 className="text-2xl font-bold text-green-700 mb-1 text-left" style={{ fontSize: '13pt' }}>Small business</h2>
        <p className="text-gray-700 leading-relaxed text-left" style={{ fontSize: '13pt' }}>
          Most people forget that to start a business you need reach you have to spend, but not continuously. Having to pay one time vs paying over time to keep your site active can cause unexpected issues. Hosting your website on a third party: what if they shut down? What now? You look for another with an even higher monthly price?<br /><br />
          We let you customize your website and you get to choose exactly how you want it to look not pre formatted, not dragging and dropping. It will look unique to your standard and there are no restrictions. After all, you fully own it.
        </p>
      </div>

      <DemoShowcase />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <QuoteBooklet open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
