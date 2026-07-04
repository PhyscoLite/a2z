import { ArrowRight } from 'lucide-react';

const cars = [
  {
    year: '2025',
    name: 'Volkswagen Tiguan',
    spec: '1.5 eTSI 150ch DSG7 - VW Edition',
    stats: '16.897km • Diesel • Automatic',
    price: '35,99,000 ₹',
    image: 'https://images.unsplash.com/photo-1632245889029-e406faaa34cd?q=80&w=500&auto=format&fit=crop',
  },
  {
    year: '2023',
    name: 'Audi A1 Sportback',
    spec: '30 TFSI 110 S tronic',
    stats: '82.330km • Petrol • Manual',
    price: '15,99,900 ₹',
    image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=500&auto=format&fit=crop',
  },
  {
    year: '2024',
    name: 'Tesla MODEL Y',
    spec: '60 kWh - RWD - Standard',
    stats: '16.583km • Electric • Automatic',
    price: '32,49,000 ₹',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=500&auto=format&fit=crop',
  },
  {
    year: '2025',
    name: 'Peugeot 3008',
    spec: 'Hybrid 145 e-DCS6 - GT',
    stats: '1.517km • Diesel • Automatic',
    price: '31,29,900 ₹',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=500&auto=format&fit=crop',
  },
  {
    year: '2022',
    name: 'BMW 3 Series',
    spec: '320d M Sport',
    stats: '45.000km • Diesel • Automatic',
    price: '45,50,000 ₹',
    image: 'https://images.pexels.com/photos/18542812/pexels-photo-18542812.jpeg',
  },
  {
    year: '2024',
    name: 'Mercedes-Benz C-Class',
    spec: 'C 200 Avantgarde',
    stats: '12.000km • Petrol • Automatic',
    price: '55,00,000 ₹',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=500&auto=format&fit=crop',
  },
  {
    year: '2023',
    name: 'Hyundai Tucson',
    spec: 'Signature 2.0 AT',
    stats: '22.500km • Petrol • Automatic',
    price: '28,90,000 ₹',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=500&auto=format&fit=crop',
  },
  {
    year: '2024',
    name: 'Kia Seltos',
    spec: 'GTX Plus 1.5 Diesel AT',
    stats: '8.000km • Diesel • Automatic',
    price: '19,50,000 ₹',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=500&auto=format&fit=crop',
  }
];

export function NewOffers() {
  return (
    <div className="w-full relative">
      <div className="flex justify-between items-end mb-6 md:mb-8 px-4 lg:px-[80px]">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">New Offers</h2>
        <a href="#" className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-semibold hover:text-[#E28802] transition-colors">
          See all <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" strokeWidth={2.5} />
        </a>
      </div>
      
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 md:gap-6 pb-8 px-4 lg:px-[80px]">
        {cars.map((car, i) => (
          <div key={i} className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-3 text-black flex flex-col group cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 min-w-[260px] md:min-w-[320px] w-[260px] md:w-[320px] snap-start shrink-0">
            <div className="relative h-48 rounded-[1.5rem] overflow-hidden mb-4 bg-gray-100">
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
                {car.year}
              </span>
              <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="px-2 pb-2 flex-grow flex flex-col">
              <h3 className="text-lg font-bold mb-1 leading-tight">{car.name}</h3>
              <p className="text-gray-500 text-xs font-medium mb-3 truncate">{car.spec}</p>
              
              <div className="text-gray-400 text-[11px] font-semibold mb-6 mt-auto">
                 {car.stats}
              </div>
              
              <div className="mt-auto flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-xl font-extrabold tracking-tight">{car.price}</span>
                <button className="bg-gradient-to-r from-[#E28802] to-[#E20000] group-hover:from-[#c27502] group-hover:to-[#c20000] text-white text-sm font-bold py-1.5 pl-4 pr-1.5 rounded-full flex items-center gap-2 transition-colors">
                  See more 
                  <span className="bg-white rounded-full p-1 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-[#E20000]" strokeWidth={3} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Right Arrow floating */}
        <button className="absolute right-4 lg:right-[60px] top-1/2 mt-4 -translate-y-1/2 bg-white text-black p-3.5 rounded-full shadow-xl hover:scale-105 transition-transform z-10 hidden md:block border border-gray-100 pointer-events-none">
           <ArrowRight className="w-5 h-5 text-[#E20000]" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
