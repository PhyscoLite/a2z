import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NewOffers } from './components/NewOffers';
import { ActionBanners } from './components/ActionBanners';
import { LeaseEstimator } from './components/LeaseEstimator';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#111213] text-white font-sans overflow-x-hidden selection:bg-\[#E28802\] selection:text-white">
      {/* Hero Section with Video Background */}
      <div className="relative w-full flex flex-col">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video 
            src="https://www.pexels.com/download/video/13358188/" 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="pb-16 pt-8 md:pb-32 md:pt-16 bg-[#111213] relative z-10">
          <NewOffers />
        </div>

        {/* White Section with overlapping top radius */}
        <div className="bg-white text-black rounded-t-[2rem] md:rounded-t-[3rem] pt-16 md:pt-24 relative z-20 shadow-2xl">
           <div className="w-full flex flex-col gap-12 md:gap-24 px-4 lg:px-[80px]">
              <ActionBanners />
              <LeaseEstimator />
           </div>
           
           <Testimonials />
           <Contact />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
