import React from 'react';

export default function HowItWorks() {
  return (
    <section className="w-full relative z-10">
      
      {/* Top Section: How it works */}
      <div className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden">
        
        {/* Decorative beige blob (top right) */}
        <div className="absolute top-[-20%] right-[-10%] w-100 h-100 bg-[#FDF5E6] rounded-full mix-blend-multiply filter blur-3xl opacity-80 pointer-events-none -z-10"></div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif italic text-gray-900">
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Step 1 */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 mb-4 font-medium">01</span>
            <div className="w-12 h-12 bg-[#E6F4EA] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              {/* Camera Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Record</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Shoot a 30-second video of your item with the rear camera.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 mb-4 font-medium">02</span>
            <div className="w-12 h-12 bg-[#E6F4EA] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              {/* Tag/Price Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">List</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Set a price. Post in seconds.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 mb-4 font-medium">03</span>
            <div className="w-12 h-12 bg-[#E6F4EA] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              {/* Chat Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Deal</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Buyer chats, you negotiate, done.
            </p>
          </div>

        </div>
      </div>

      {/* Middle Section: Split Panels */}
      <div className="w-full flex flex-col md:flex-row">
        
        {/* Buyers Panel (Left) */}
        <div className="w-full md:w-1/2 bg-[#E8F5ED] px-6 py-20 md:px-16 lg:px-24">
          <div className="max-w-md">
            <span className="text-xs font-bold tracking-widest text-[#0FA958] uppercase mb-4 block">
              For Buyers
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Scroll. Save. <span className="font-serif italic text-[#0FA958] font-normal">Chat.</span>
            </h2>
            <ul className="space-y-5">
              <li className="text-gray-700 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                Scroll a feed of real items near you.
              </li>
              <li className="text-gray-700 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                Save what you like with a tap.
              </li>
              <li className="text-gray-700 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                Chat directly with sellers — no bots, no forms.
              </li>
            </ul>
          </div>
        </div>

        {/* Sellers Panel (Right) */}
        <div className="w-full md:w-1/2 bg-[#FDF5E6] px-6 py-20 md:px-16 lg:px-24">
          <div className="max-w-md">
            <span className="text-xs font-bold tracking-widest text-[#D98E41] uppercase mb-4 block">
              For Sellers
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Record once. <span className="font-serif italic text-[#0FA958] font-normal">Reach</span> thousands.
            </h2>
            <ul className="space-y-5">
              <li className="text-gray-700 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                Record once, reach thousands of buyers.
              </li>
              <li className="text-gray-700 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                No listing fees, ever.
              </li>
              <li className="text-gray-700 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                No middlemen — deal directly.
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Section: Stats */}
      <div className="w-full bg-[#1A1C19] px-6 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-5xl font-serif italic text-[#0FA958] mb-4">30 sec</h3>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              To post a listing
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-5xl font-serif italic text-[#0FA958] mb-4">0 fees</h3>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              No listing or transaction fees
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-5xl font-serif italic text-[#0FA958] mb-4">100%</h3>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              Direct seller-to-buyer chat
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}