import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="w-full pt-16 md:pt-24 pb-8 md:pb-12 px-4 lg:px-[80px] bg-[#111213] text-white rounded-t-[2rem] md:rounded-t-[3rem] relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Contact Info */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">Get in Touch</h2>
          <p className="text-gray-400 mb-10 font-medium leading-relaxed">
            Have questions about a specific car or our services? Our team is ready to help you find your next vehicle.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#E28802]" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Our Location</h4>
                <p className="text-sm text-gray-400 leading-relaxed">123 Auto Avenue, Automotive District<br />New Delhi, 110001, India</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#E28802]" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Call Us</h4>
                <p className="text-sm text-gray-400">+91 8295637004<br />Mon-Sat: 9AM - 8PM</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#E28802]" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Email Us</h4>
                <p className="text-sm text-gray-400">hello@motorlia.com<br />support@motorlia.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="lg:w-2/3 bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold mb-8 text-black">Send us a Message</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#E28802]/50 text-gray-900" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#E28802]/50 text-gray-900" placeholder="Doe" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#E28802]/50 text-gray-900" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#E28802]/50 text-gray-900" placeholder="+91 xxxxx xxxxx" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#E28802]/50 text-gray-900 resize-none" placeholder="How can we help you?"></textarea>
            </div>
            
            <button type="button" className="bg-gradient-to-r from-[#E28802] to-[#E20000] hover:from-[#c27502] hover:to-[#c20000] text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-95 w-full shadow-lg">
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
