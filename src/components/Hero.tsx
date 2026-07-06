export function Hero() {
  return (
    <div className="w-full px-4 lg:px-[80px] pt-28 pb-12 md:pt-32 md:pb-24 min-h-[100dvh] flex flex-col justify-end">
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white mb-6 md:mb-8">
          <div className="flex items-center gap-2 font-bold text-[12px] md:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#E28802] to-[#E20000]"></span>
            Verified Dealers
          </div>
          <div className="flex items-center gap-2 text-[12px] md:text-base md:font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#E28802] to-[#E20000]"></span>
            Low Mileage
          </div>
          <div className="flex items-center gap-2 text-[12px] md:text-base md:font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#E28802] to-[#E20000]"></span>
            Competitive Prices
          </div>
        </div>
        
        <h1 className="text-[28px] md:text-5xl lg:text-7xl font-bold leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 tracking-tight">
          Find Exceptional Cars, Perfectly Priced.
        </h1>
        
        <p className="text-white max-w-xl leading-relaxed font-normal text-[14px] md:text-lg md:font-medium">
          Discover Carefully Selected Vehicles From Trusted Dealers. Transparent Pricing, Verified Quality, And A Seamless Experience To Help You Find The Right Car With Confidence.
        </p>
      </div>
    </div>
  );
}
