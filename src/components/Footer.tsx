import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, CarFront } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111213] text-white pt-16 md:pt-24 pb-12 relative z-10 border-t border-gray-800">
      <div className="w-full px-4 lg:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Your Next Car<br />Starts Here.
            </h2>
            <p className="text-gray-400 text-sm max-w-sm mb-8 leading-relaxed">
              We provide a seamless, transparent, and efficient way to buy, sell, or lease your perfect vehicle. Experience the future of car ownership today.
            </p>
            <a 
              href="https://wa.me/8295637004"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-[#E28802] to-[#E20000] hover:from-[#c27502] hover:to-[#c20000] text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 text-sm shadow-xl"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              +91 8295637004
            </a>
          </div>
          
          <div className="flex flex-col gap-5 text-gray-400 text-sm font-semibold">
            <h3 className="text-white text-lg font-bold mb-2">Vehicles</h3>
            <a href="#" className="hover:text-[#E28802] transition-colors">Buy a car</a>
            <a href="#" className="hover:text-[#E28802] transition-colors">Sell a car</a>
            <a href="#" className="hover:text-[#E28802] transition-colors">Lease a car</a>
            <a href="#" className="hover:text-[#E28802] transition-colors">New Arrivals</a>
            <a href="#" className="hover:text-[#E28802] transition-colors">Special Offers</a>
          </div>

          <div className="flex flex-col gap-5 text-gray-400 text-sm font-semibold">
            <h3 className="text-white text-lg font-bold mb-2">Company</h3>
            <a href="#" className="hover:text-[#E28802] transition-colors">About Us</a>
            <a href="#" className="hover:text-[#E28802] transition-colors">How it works</a>
            <a href="#" className="hover:text-[#E28802] transition-colors">Our Team</a>
            <a href="#" className="hover:text-[#E28802] transition-colors">Careers</a>
            <a href="#" className="hover:text-[#E28802] transition-colors">Contact</a>
          </div>
          
          <div className="flex flex-col gap-5 text-gray-400 text-sm font-semibold">
            <h3 className="text-white text-lg font-bold mb-2">Contact Info</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#E28802] shrink-0" />
              <span>123 Auto Avenue,<br />Automotive District, 110001</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#E28802] shrink-0" />
              <span>hello@yournextcar.com</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-\[#E20000\] transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-\[#E20000\] transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-\[#E20000\] transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-\[#E20000\] transition-colors text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 gap-4">
          <p className="text-gray-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Your Next Car. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
