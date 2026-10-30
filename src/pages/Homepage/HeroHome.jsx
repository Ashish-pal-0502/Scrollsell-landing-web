
import React from "react";

export default function HeroHome() {
  return (
    <main className="relative z-10 flex w-full flex-1 items-center bg-[#FBF9F6]">
      {/* Reduced padding on mobile: px-4 sm:px-6 */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-4 py-16 sm:px-6 md:px-12 lg:min-h-[calc(100vh-80px)] lg:flex-row lg:gap-8 lg:px-16 xl:px-20">

        {/* Left — Text */}
        <div className="flex w-full flex-col items-start lg:w-1/2 lg:pr-8">
          
          {/* Tagline */}
          <span className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-[#9B51E0]">
            Bharat's Video Marketplace
          </span>

          {/* Main Headline - changed to text-4xl for mobile */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl md:text-6xl lg:text-7xl">
            Record,{" "}
            <span className="bg-linear-to-r from-[#9B51E0] to-[#D25BFA] bg-clip-text font-serif font-normal italic text-transparent">
              list
            </span>
            , sell.
          </h1>

          {/* Description */}
          <p className="mb-10 max-w-md text-lg leading-relaxed text-[#666666]">
            One reel. One listing. Sell in 30 seconds. Shoot your item, set a
            price, and reach buyers scrolling near you — no forms, no fuss.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Primary Button (Uses the Logo linear) */}
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#9B51E0] to-[#D25BFA] px-6 py-3 text-base font-semibold text-white shadow-[0_4px_14px_rgba(155,81,224,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(155,81,224,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B51E0]/50 active:translate-y-0"
            >
              Download on iOS
            </button>

            {/* Secondary Button (Outline) */}
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#E5E5E5] bg-white px-6 py-3 text-base font-semibold text-[#111111] transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B51E0]/30"
            >
              Get it on Android
            </button>
          </div>
        </div>

        {/* Right — Phone Frame */}
        <div className="flex w-full items-center justify-center lg:w-1/2 lg:justify-end">
          {/* Changed to w-[85%] max-w-[220px] for very small screens */}
          <div className="h-auto w-[85%] max-w-55 overflow-hidden rounded-[2.5rem] border-8 border-white bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] sm:h-90 sm:w-45 md:h-115 md:w-55">
            <img
              src="/image5.jpeg"
              alt="ScrollSell App Interface"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        
      </div>
    </main>
  );
}