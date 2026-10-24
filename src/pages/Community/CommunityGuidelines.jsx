import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CommunityGuidelines() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const notAllowedTags = [
    "Weapons & ammunition", "Drugs & tobacco", "Alcohol", "Medicines", "Counterfeit goods",
    "Stolen property", "Wildlife & animal parts", "Adult content", "Government IDs & documents",
    "Financial products", "Live animals", "Services & jobs"
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 font-sans text-gray-900">
      
      {/* Header Section */}
      <div className="mb-16">
        <span className="text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase block mb-4">
          Community
        </span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Buy and sell <span className="font-serif italic text-[#0FA958] font-normal">safely.</span>
        </h1>
        <p className="text-lg text-gray-600">
          A few rules that keep ScrollSell honest for everyone.
        </p>
      </div>

      {/* Good Listings Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Good listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2 text-sm">Show the real item</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Film the actual thing you're selling, not stock footage or someone else's video.
            </p>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2 text-sm">Show any flaws</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Point the camera at scratches, dents or missing parts. Buyers trust honest sellers.
            </p>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2 text-sm">Price it fairly</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Set the price you'll actually accept, in ₹. No bait prices.
            </p>
          </div>
        </div>
      </div>

      {/* Not Allowed Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Not allowed on ScrollSell</h2>
        <div className="flex flex-wrap gap-3">
          {notAllowedTags.map((tag, index) => (
            <span 
              key={index} 
              className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Safety Tips Section */}
      <div className="bg-[#FFF7EA] rounded-3xl p-8 md:p-10 mb-16">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Safety tips for deals</h2>
        <ul className="space-y-4 text-[15px] text-gray-800">
          <li className="flex gap-4">
            <span className="text-[#D98E41] font-semibold">01</span>
            <span>Keep chats on ScrollSell until you meet.</span>
          </li>
          <li className="flex gap-4">
            <span className="text-[#D98E41] font-semibold">02</span>
            <span>Meet in a busy public place during the day.</span>
          </li>
          <li className="flex gap-4">
            <span className="text-[#D98E41] font-semibold">03</span>
            <span>Check the item works before you pay.</span>
          </li>
          <li className="flex gap-4">
            <span className="text-[#D98E41] font-semibold">04</span>
            <span>Never pay in advance or share an OTP or UPI PIN.</span>
          </li>
          <li className="flex gap-4">
            <span className="text-[#D98E41] font-semibold">05</span>
            <span>Look for the saffron verified tick on seller profiles.</span>
          </li>
        </ul>
      </div>

      {/* Reporting Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Reporting</h2>
        <p className="text-[15px] text-gray-700 leading-relaxed">
          Tap <strong className="font-bold">···</strong> on any listing or chat and choose Report. We review reports within <strong className="text-gray-900 font-bold">24 hours</strong>. Repeated violations lead to permanent removal. See also our <Link to="/terms" className="text-[#0FA958] underline decoration-1 underline-offset-4 hover:text-green-700 transition-colors">terms</Link>.
        </p>
      </div>

    </div>
  );
}