
import React from 'react';

export default function BuiltForIndia() {
  return (
    <section className="w-full relative z-10 flex flex-col font-sans">

      {/* Top Section: Phone Mockups */}
      <div className="w-full bg-[#F9F9F9] py-24 flex flex-col items-center">

        <h2 className="text-3xl md:text-4xl font-serif italic text-gray-900 mb-16 text-center px-6">
          Built for the way India shops.
        </h2>

        {/* Phone Stack Container — taller so phones have room */}
        <div className="relative flex justify-center items-end h-100 md:h-120 w-full max-w-150 mx-auto px-4">

          {/* Left Phone (Feed Screen) */}
          <div className="absolute left-1/2 bottom-0 translate-x-[-85%] md:translate-x-[-90%] w-40 md:w-50 h-85 md:h-105 bg-[#1C1C1C] rounded-4xl border-[6px] border-[#2A2A2A] shadow-xl overflow-hidden -rotate-12 origin-bottom-right z-10">
            <img
              src="/image1.jpeg"
              alt="Feed Screen"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Phone (Chat Screen) */}
          <div className="absolute left-1/2 bottom-0 translate-x-[-15%] md:translate-x-[-10%] w-40 md:w-50 h-85 md:h-105 bg-[#1C1C1C] rounded-4xl border-[6px] border-[#2A2A2A] shadow-xl overflow-hidden rotate-12 origin-bottom-left z-10">
            <img
              src="/image2.jpeg"
              alt="Chat Screen"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Phone (Record Screen) — tallest, in front */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-45 md:w-55 h-90 md:h-115 bg-[#1C1C1C] rounded-[2.2rem] border-[6px] border-[#2A2A2A] shadow-2xl overflow-hidden z-20">
            <img
              src="/image3.jpeg"
              alt="Record Screen"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

      {/* Bottom Section: CTA */}
      <div className="w-full bg-[#0D8C46] py-24 flex flex-col items-center text-center px-6">

        <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-10">
          Start selling today.
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="bg-white text-[#0D8C46] px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-100 transition cursor-pointer">
            Download on iOS
          </button>
          <button className="bg-transparent border border-white text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-white/10 transition cursor-pointer">
            Get it on Android
          </button>
        </div>

        <p className="text-white/80 text-[11px] tracking-wide font-medium">
          Free to download. No listing fees. Made in India.
        </p>

      </div>
    </section>
  );
}