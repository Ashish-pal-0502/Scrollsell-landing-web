


export default function HeroHome() {
  return (
    <main className="flex-1 w-full relative z-10 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col lg:flex-row items-center justify-between py-16 lg:min-h-[calc(100vh-80px)] gap-12 lg:gap-8">

        {/* Left Column (Text) */}
        <div className="w-full lg:w-1/2 flex flex-col items-start lg:pr-8">
          <span className="text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-4">
            Bharat's Video Marketplace
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Record, <span className="text-[#0FA958] font-serif italic font-normal">list</span>, sell.
          </h1>

          <p className="text-lg text-gray-600 max-w-md mb-10 leading-relaxed">
            One reel. One listing. Sell in 30 seconds. Shoot your item, set a price, and reach buyers scrolling near you — no forms, no fuss.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#111111] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition cursor-pointer">
              Download on iOS
            </button>
            <button className="bg-transparent border border-gray-900 text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition cursor-pointer">
              Get it on Android
            </button>
          </div>
        </div>

    {/* Right Column (Phone Image) — with phone frame border */}
<div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
  <div className="w-45 md:w-55 h-90 md:h-115 bg-[#1C1C1C] rounded-[2.2rem] border-[6px] border-[#2A2A2A] shadow-2xl overflow-hidden">
    <img
      src="/image5.jpeg"
      alt="ScrollSell App Interface"
      className="w-full h-full object-cover"
    />
  </div>
</div>
      </div>
    </main>
  );
}