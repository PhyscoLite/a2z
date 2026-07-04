import { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';

export function LeaseEstimator() {
  const [carPrice, setCarPrice] = useState(840000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(50);
  const [termMonths, setTermMonths] = useState(42);

  const downPaymentValue = Math.round(carPrice * (downPaymentPercent / 100));
  // Simple calculation for monthly payment, optionally adding a generic 5% interest rate.
  // Using simple division without interest for now, as it's an estimator.
  const monthlyPayment = Math.round((carPrice - downPaymentValue) / termMonths);

  return (
    <div className="bg-[#1C1D1F] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row text-white shadow-2xl w-full">
      {/* Left Form */}
      <div className="p-6 md:p-12 lg:w-[45%] flex flex-col justify-between gap-12 relative z-10">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 tracking-tight">Estimate Your Lease</h2>
          
          <div className="space-y-10">
            {/* Slider 1 */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <span className="text-gray-400 text-sm font-medium">Car Price (₹)</span>
                <span className="text-sm font-bold">{carPrice.toLocaleString('en-IN')} ₹</span>
              </div>
              <input 
                type="range" 
                min="100000" 
                max="5000000" 
                step="10000"
                value={carPrice}
                onChange={(e) => setCarPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-800 rounded-full appearance-none cursor-pointer accent-\[#E28802\]"
              />
            </div>
            
            {/* Slider 2 */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <span className="text-gray-400 text-sm font-medium">Down Payment (%)</span>
                <span className="text-sm font-bold">{downPaymentPercent}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="80" 
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-800 rounded-full appearance-none cursor-pointer accent-\[#E28802\]"
              />
            </div>

            {/* Slider 3 */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <span className="text-gray-400 text-sm font-medium">Term (Months)</span>
                <span className="text-sm font-bold">{termMonths} Months</span>
              </div>
              <input 
                type="range" 
                min="12" 
                max="84" 
                step="6"
                value={termMonths}
                onChange={(e) => setTermMonths(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-800 rounded-full appearance-none cursor-pointer accent-\[#E28802\]"
              />
            </div>
          </div>
        </div>

        <button className="flex items-center justify-between pt-6 border-t border-gray-700/50 text-sm font-semibold hover:text-[#E28802] transition-colors w-full text-left">
          More informations
          <Plus className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Right Image area */}
      <div className="lg:w-[55%] relative min-h-[400px] lg:min-h-full">
        <img 
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop" 
          alt="Sports car on the road" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Floating cards */}
        <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 flex flex-col gap-4 md:gap-6 z-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[1.5rem] p-4 md:p-5 w-48 md:w-56 shadow-2xl">
            <p className="text-\[10px\] md:text-xs text-gray-200 font-semibold mb-1">Down payment</p>
            <p className="text-xl md:text-2xl font-bold tracking-tight">{downPaymentValue.toLocaleString('en-IN')} ₹</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[1.5rem] p-4 md:p-5 w-48 md:w-56 shadow-2xl ml-6 md:ml-8">
             <p className="text-\[10px\] md:text-xs text-gray-200 font-semibold mb-1">Monthly payment</p>
             <p className="text-xl md:text-2xl font-bold tracking-tight">{monthlyPayment.toLocaleString('en-IN')} ₹</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-10">
           <a 
             href="https://wa.me/8295637004"
             target="_blank"
             rel="noopener noreferrer"
             className="bg-gradient-to-r from-[#E28802] to-[#E20000] hover:from-[#c27502] hover:to-[#c20000] text-white text-sm font-bold py-2.5 pl-6 pr-2.5 rounded-full flex items-center gap-3 shadow-2xl transition-transform hover:scale-105 active:scale-95"
           >
            Ask for a quote 
            <span className="bg-white rounded-full p-1.5 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-[#E20000]" strokeWidth={3} />
            </span>
          </a>
        </div>
        
        {/* Gradient overlay for text readability on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1D1F]/50 to-transparent lg:hidden"></div>
      </div>
    </div>
  );
}
