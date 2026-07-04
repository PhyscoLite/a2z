import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    date: '2 weeks ago',
    review: 'Excellent experience buying my first car here. The process was smooth and the staff was very helpful. Highly recommended!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop'
  },
  {
    name: 'Priya Desai',
    date: '1 month ago',
    review: 'Sold my old car at a great price. Transparent process and instant payment. Great customer service throughout.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    name: 'Amit Patel',
    date: '3 months ago',
    review: 'Found exactly the car I was looking for. The condition was pristine, just as described online. Great inventory!',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  }
];

export function Testimonials() {
  return (
    <div className="w-full mt-12 md:mt-24 py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="text-center mb-16 px-4 lg:px-[80px]">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-black">What Our Customers Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-medium">Real reviews from our satisfied customers who found their perfect ride with us.</p>
      </div>

      <div className="relative w-full flex">
        <div className="flex gap-8 px-4 animate-marquee w-max">
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-[1.5rem] p-8 shadow-lg border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 w-[300px] md:w-[350px] shrink-0">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500 font-medium">{testimonial.date}</p>
                  </div>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png" alt="Google Logo" className="w-6 h-6" />
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
