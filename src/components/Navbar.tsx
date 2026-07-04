import { Phone } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full px-4 lg:px-[80px] py-4 md:py-6 flex items-center justify-between transition-colors duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
      <div className="flex items-center gap-2">
        <img src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1783160336/f949e91a-dca4-49b0-a5a4-a786523d526d-removebg-preview_x2mxyy.png" alt="MotorLia Logo" className="h-10 md:h-[60px] w-auto" />
      </div>
      
      <div className="hidden lg:flex items-center gap-10 text-sm font-semibold text-gray-300">
        <a href="#" className="hover:text-white transition-colors">Buy a car</a>
        <a href="#" className="hover:text-white transition-colors">Sell a car</a>
        <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
          About
        </a>
        <LanguageSelector />
      </div>

      <a href="https://wa.me/8295637004" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#E28802] to-[#E20000] hover:from-[#c27502] hover:to-[#c20000] text-white font-bold py-2 md:py-2.5 px-4 md:px-6 rounded-full flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 text-xs md:text-sm">
        <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" strokeWidth={2.5} />
        <span className="hidden sm:inline">+91 8295637004</span>
        <span className="sm:hidden">Contact</span>
      </a>
    </nav>
  );
}
