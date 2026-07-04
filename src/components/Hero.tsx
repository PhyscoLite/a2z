export function Hero() {
  return (
    <div className="w-full px-4 lg:px-[80px] pt-28 pb-8 md:pt-32 md:pb-12 min-h-[500px] md:h-[650px] flex flex-col justify-end mt-12 md:mt-0">
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white mb-6 md:mb-8">
          <div className="flex items-center gap-2 font-bold text-[12px]">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#E28802] to-[#E20000]"></span>
            Verified Dealers
          </div>
          <div className="flex items-center gap-2 text-[12px]">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#E28802] to-[#E20000]"></span>
            Low Mileage
          </div>
          <div className="flex items-center gap-2 text-[12px]">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#E28802] to-[#E20000]"></span>
            Competitive Prices
          </div>
        </div>
        
        <h1 className="text-[28px] font-bold leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 tracking-tight">
          Find Exceptional Cars, Perfectly Priced.
        </h1>
        
        <p className="text-white max-w-xl leading-relaxed font-normal text-[14px]">
          Discover Carefully Selected Vehicles From Trusted Dealers. Transparent Pricing, Verified Quality, And A Seamless Experience To Help You Find The Right Car With Confidence.
        </p>
      </div>
    </div>
  );
}
