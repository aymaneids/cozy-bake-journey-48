
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Button } from '@/components/ui/button';

const StPatricksDay = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-[#005c2f] text-white py-12 md:py-16">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-4">ST. PATRICK'S DAY ORDERS</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Celebrate with our festive Irish-inspired treats!
            </p>
          </div>
        </div>
        
        {/* Content */}
        <section className="section-padding bg-bakery-cream">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="heading-lg mb-6">St. Patrick's Day Specials</h2>
              <p className="text-lg mb-8">
                Get into the Irish spirit with our limited-time St. Patrick's Day menu. 
                Available for pre-order now through March 15th!
              </p>
              
              <div className="bg-white rounded-lg p-8 shadow-md border-2 border-[#005c2f]">
                <h3 className="heading-md mb-4">2024 St. Patrick's Day Menu</h3>
                <p className="mb-6">Pre-orders available now through March 15th</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-[#e8f5e9] p-4 rounded-md">
                    <h4 className="font-bold text-lg mb-2">Festive Pies</h4>
                    <ul className="text-left space-y-2">
                      <li>• Bailey's Irish Cream Pie - $36</li>
                      <li>• Mint Chocolate Whiskey Pie - $36</li>
                      <li>• Irish Apple Pie with Jameson Caramel - $34</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#e8f5e9] p-4 rounded-md">
                    <h4 className="font-bold text-lg mb-2">Irish-Inspired Biscuits</h4>
                    <ul className="text-left space-y-2">
                      <li>• Irish Cheddar & Chive Biscuits - $24/half dozen</li>
                      <li>• Guinness Chocolate Biscuits - $24/half dozen</li>
                      <li>• Irish Breakfast Biscuit Sandwich - $12 each</li>
                    </ul>
                  </div>
                </div>
                
                <Button className="bg-[#005c2f] hover:bg-[#004023] text-white">Pre-Order for St. Patrick's Day</Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="heading-sm mb-4">In-Store Celebration</h3>
                <p className="mb-4">
                  Join us on March 17th for a festive St. Patrick's Day celebration!
                </p>
                <ul className="space-y-2 mb-6">
                  <li>• Traditional Irish music from 10am-2pm</li>
                  <li>• Green coffee specials all day</li>
                  <li>• Complimentary Irish cream with any pie purchase</li>
                  <li>• Special Irish-inspired breakfast items</li>
                </ul>
                <p className="italic">
                  Wear green on St. Patrick's Day and receive 10% off your purchase!
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="heading-sm mb-4">St. Patrick's Day Ordering Information</h3>
                <p className="mb-4">
                  To ensure you get your St. Patrick's Day treats, we recommend pre-ordering:
                </p>
                <ul className="space-y-2 mb-6">
                  <li>• Pre-orders close March 15th at 5pm</li>
                  <li>• Pickup available March 16-17th from 8am-7pm</li>
                  <li>• Limited delivery available within Chicago</li>
                  <li>• Catering options available for your St. Patrick's Day party</li>
                </ul>
                <p className="font-medium text-[#005c2f]">
                  Questions? Call us at (773) 555-1234 or email info@bangbangpie.com
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

export default StPatricksDay;
