
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Button } from '@/components/ui/button';

const Catering = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-bakery-brown text-white py-12 md:py-16">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-4">CATERING & EVENTS</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Make your event memorable with our handcrafted pies and biscuits.
            </p>
          </div>
        </div>
        
        {/* Content */}
        <section className="section-padding bg-bakery-cream">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto mb-16">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="heading-lg text-center mb-8">Our Catering Services</h2>
                
                <p className="text-lg mb-8">
                  Whether you're planning a corporate event, wedding, birthday celebration, or holiday 
                  gathering, Bang Bang Pie & Biscuits offers delicious catering options to make your 
                  event special. All of our catering items are made from scratch with the same quality 
                  ingredients and care as our in-store offerings.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-bakery-peach/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bakery-brown">
                        <path d="M8 3v3a2 2 0 0 1-2 2H3"/>
                        <path d="M16 3v3a2 2 0 0 0 2 2h3"/>
                        <path d="M8 21v-3a2 2 0 0 0-2-2H3"/>
                        <path d="M16 21v-3a2 2 0 0 1 2-2h3"/>
                        <rect x="9" y="9" width="6" height="6"/>
                      </svg>
                    </div>
                    <h3 className="heading-sm mb-2">Corporate Events</h3>
                    <p>Impress your clients and team with our custom catering packages.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-bakery-peach/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bakery-brown">
                        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
                      </svg>
                    </div>
                    <h3 className="heading-sm mb-2">Weddings</h3>
                    <p>Alternative dessert options featuring our famous pies and biscuits.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-bakery-peach/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bakery-brown">
                        <path d="M7 8h10"/>
                        <path d="M7 12h5"/>
                        <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z"/>
                      </svg>
                    </div>
                    <h3 className="heading-sm mb-2">Private Parties</h3>
                    <p>Celebrate special occasions with our custom event packages.</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button className="btn-primary">Request Catering Quote</Button>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="heading-md mb-6">Catering Menu Highlights</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-bakery-brown">Pie Packages</h4>
                    <ul className="space-y-2">
                      <li>• Mini Pie Assortment (2" pies, 24 count) - $120</li>
                      <li>• Slice Platter (24 slices, up to 4 flavors) - $96</li>
                      <li>• Full-Size Pie Bundle (4 pies) - $120</li>
                      <li>• Custom Pie Bar (priced per guest)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-bakery-brown">Biscuit Packages</h4>
                    <ul className="space-y-2">
                      <li>• Mini Biscuit Platter (24 count) - $48</li>
                      <li>• Biscuit & Jam Bar (priced per guest)</li>
                      <li>• Biscuit Sandwich Platter (12 count) - $96</li>
                      <li>• Biscuits & Gravy Package (serves 12) - $120</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-bakery-brown">Beverage Options</h4>
                    <ul className="space-y-2">
                      <li>• Coffee Service (serves 10) - $40</li>
                      <li>• House-Made Lemonade (gallon) - $24</li>
                      <li>• Iced Tea (gallon) - $24</li>
                    </ul>
                  </div>
                </div>
                
                <p className="mt-6 text-sm">
                  Custom packages available upon request. Download our full catering menu for additional options.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="heading-md mb-6">Private Events</h3>
                
                <p className="mb-6">
                  Looking for a unique venue for your next event? Our Logan Square location is 
                  available for private events during select hours.
                </p>
                
                <div className="bg-bakery-beige/50 p-4 rounded-md mb-6">
                  <h4 className="font-bold text-lg mb-2">Private Event Details</h4>
                  <ul className="space-y-2">
                    <li>• Capacity: Up to 30 guests</li>
                    <li>• Available: Sunday-Thursday evenings (7pm-10pm)</li>
                    <li>• Minimum spend: $1,000</li>
                    <li>• Custom menu options available</li>
                    <li>• Optional bakery demonstration add-on</li>
                  </ul>
                </div>
                
                <p className="mb-6">
                  Our events team will work with you to create a custom experience for your guests. 
                  From pie-making demonstrations to biscuit-focused brunches, we can tailor our 
                  offerings to suit your event needs.
                </p>
                
                <Button className="w-full">Inquire About Private Events</Button>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-bakery-peach/30 p-8 rounded-lg">
                <h3 className="heading-md text-center mb-6">How to Order Catering</h3>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-bakery-brown text-xl">1</div>
                    <h4 className="font-bold mb-2">Submit Inquiry</h4>
                    <p className="text-sm">
                      Fill out our catering request form with your event details, guest count, and preferences.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-bakery-brown text-xl">2</div>
                    <h4 className="font-bold mb-2">Get Quote</h4>
                    <p className="text-sm">
                      Our catering team will contact you within 24 hours with a custom quote.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-bakery-brown text-xl">3</div>
                    <h4 className="font-bold mb-2">Confirm Order</h4>
                    <p className="text-sm">
                      Once you approve the menu and details, we'll secure your date with a deposit.
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="mb-4">
                    For catering inquiries, please email <span className="font-medium">catering@bangbangpie.com</span> or
                    call <span className="font-medium">(773) 555-9876</span>.
                  </p>
                  <p className="text-sm">
                    Please note: 48-hour advance notice is required for all catering orders.
                  </p>
                </div>
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

export default Catering;
