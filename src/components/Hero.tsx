
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-bakery-brown text-white py-16 md:py-24 relative overflow-hidden">
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/parchment.jpg')] bg-repeat"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="heading-xl">
              Handcrafted Pies & Biscuits
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Serving Chicago's best homemade pies and buttermilk biscuits since 2012.
              Made from scratch daily with locally-sourced ingredients.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/menu" className="btn-secondary">
                View Our Menu
              </Link>
              <Link to="/order" className="bg-white text-bakery-brown px-6 py-3 rounded-md hover:bg-opacity-90 transition-all font-medium">
                Order Now
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Freshly baked pie" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
