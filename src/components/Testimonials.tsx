
import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah M.",
    text: "The key lime pie is absolutely to die for! I've been coming here every weekend for the past year and it never disappoints.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael T.",
    text: "Best biscuits in Chicago, hands down. The atmosphere is cozy and the staff is always friendly. My Saturday morning tradition!",
    rating: 5
  },
  {
    id: 3,
    name: "Jessica L.",
    text: "I ordered a chocolate chess pie for my husband's birthday and he said it was the best pie he's ever had. We'll definitely be back!",
    rating: 5
  },
  {
    id: 4,
    name: "David R.",
    text: "The biscuits and gravy are incredible. Perfect balance of flavors and the biscuits are so flaky and buttery. Highly recommend!",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="section-padding bg-bakery-beige">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg">What Our Customers Say</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-opacity duration-1000 flex flex-col justify-center items-center p-8 text-center ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={24} fill="#8B5A2B" color="#8B5A2B" />
                  ))}
                </div>
                <p className="text-lg md:text-xl italic mb-6">"{testimonial.text}"</p>
                <p className="font-medium">— {testimonial.name}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-bakery-brown' : 'bg-bakery-brown/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
