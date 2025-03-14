
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Button } from '@/components/ui/button';

const PiDay = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-bakery-brown text-white py-12 md:py-16">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-4">PI(E) DAY ORDERS</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Celebrate 3.14 with our special Pi Day offerings!
            </p>
          </div>
        </div>
        
        {/* Content */}
        <section className="section-padding bg-bakery-cream">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="heading-lg mb-6">Our Pi Day Specials</h2>
              <p className="text-lg mb-8">
                Every year on March 14th (3.14), we celebrate the mathematical constant Pi with special 
                pie offerings. Order now for pickup on Pi Day!
              </p>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="heading-md mb-4">2024 Pi Day Special Menu</h3>
                <p className="mb-6">Pre-orders available now through March 12th</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-bakery-beige/50 p-4 rounded-md">
                    <h4 className="font-bold text-lg mb-2">Signature Pi Day Pies</h4>
                    <ul className="text-left space-y-2">
                      <li>• Classic Apple Pi(e) - $31.40</li>
                      <li>• Chocolate Chess Pi(e) - $31.40</li>
                      <li>• Key Lime Pi(e) - $31.40</li>
                      <li>• Banana Cream Pi(e) - $31.40</li>
                    </ul>
                  </div>
                  
                  <div className="bg-bakery-beige/50 p-4 rounded-md">
                    <h4 className="font-bold text-lg mb-2">Pi Day Packages</h4>
                    <ul className="text-left space-y-2">
                      <li>• Mini Pi(e) Sampler (4 flavors) - $31.40</li>
                      <li>• Pi(e) & Coffee Bundle - $41.50</li>
                      <li>• Ultimate Pi(e) Day Party Pack - $99.00</li>
                    </ul>
                  </div>
                </div>
                
                <Button className="btn-primary">Pre-Order for Pi Day</Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="heading-sm mb-4">Pi Day Event Details</h3>
                <p className="mb-4">
                  Join us in store on March 14th for Pi Day celebrations! We'll be offering:
                </p>
                <ul className="space-y-2 mb-6">
                  <li>• $3.14 slice specials from 3:14pm - 5:14pm</li>
                  <li>• Pi-themed trivia with prizes</li>
                  <li>• Limited edition Pi Day merchandise</li>
                </ul>
                <p>
                  Don't miss this once-a-year celebration of our favorite mathematical constant 
                  and our favorite dessert!
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="heading-sm mb-4">Pi Day Ordering Information</h3>
                <p className="mb-4">
                  To ensure you get your Pi Day treats, we strongly recommend pre-ordering:
                </p>
                <ul className="space-y-2 mb-6">
                  <li>• Pre-orders close March 12th at 5pm</li>
                  <li>• Pickup available March 14th from 8am-7pm</li>
                  <li>• Limited delivery available within Chicago</li>
                  <li>• Special shipping options available for out-of-town Pi enthusiasts</li>
                </ul>
                <p className="font-medium text-bakery-brown">
                  Questions? Call us at (773) 555-3141 or email info@bangbangpie.com
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default PiDay;
