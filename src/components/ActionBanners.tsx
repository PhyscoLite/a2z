import { ArrowRight } from 'lucide-react';

export function ActionBanners() {
  return (
    <div className="grid md:grid-cols-2 gap-6 w-full">
      {/* Banner 1 */}
      <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden h-64 md:h-72 group cursor-pointer shadow-xl">
        <img 
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop" 
          alt="Discover Next Car" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111213]/90 via-[#111213]/60 to-transparent"></div>
        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between text-white">
          <div>
            <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 tracking-tight">Discover Your Next Car</h3>
            <p className="text-sm md:text-base text-gray-300 max-w-xs font-medium leading-relaxed">
              Find The Perfect Car Without The Hassle Of Visiting Multiple Dealerships.
            </p>
          </div>
          <button className="bg-gradient-to-r from-[#E28802] to-[#E20000] hover:from-[#c27502] hover:to-[#c20000] text-white text-sm font-bold py-2.5 pl-6 pr-2.5 rounded-full flex items-center gap-3 transition-colors w-max shadow-lg mt-4">
            Buy my next car 
            <span className="bg-white rounded-full p-1.5 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-[#E20000]" strokeWidth={3} />
            </span>
          </button>
        </div>
      </div>

      {/* Banner 2 */}
      <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden h-64 md:h-72 group cursor-pointer shadow-xl">
        <img 
          src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000&auto=format&fit=crop" 
          alt="Sell Your Car" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111213]/90 via-[#111213]/60 to-transparent"></div>
        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between text-white">
          <div>
            <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 tracking-tight">Ready To Sell Your Car?</h3>
            <p className="text-sm md:text-base text-gray-300 max-w-xs font-medium leading-relaxed">
              Sell Your Car Quickly With A Seamless Online Experience.
            </p>
          </div>
          <button className="bg-gradient-to-r from-[#E28802] to-[#E20000] hover:from-[#c27502] hover:to-[#c20000] text-white text-sm font-bold py-2.5 pl-6 pr-2.5 rounded-full flex items-center gap-3 transition-colors w-max shadow-lg mt-4">
            Sell my car 
            <span className="bg-white rounded-full p-1.5 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-[#E20000]" strokeWidth={3} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
