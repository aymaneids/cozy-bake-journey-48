
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PickupDelivery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-bakery-brown text-white py-12 md:py-16">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-4">PICKUP & DELIVERY</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Enjoy our freshly baked pies and biscuits at home!
            </p>
          </div>
        </div>
        
        {/* Content */}
        <section className="section-padding bg-bakery-cream">
          <div className="container-custom">
            <Tabs defaultValue="pickup" className="w-full max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-bakery-beige">
                  <TabsTrigger value="pickup" className="px-8 py-3 data-[state=active]:bg-bakery-brown data-[state=active]:text-white">
                    Pickup
                  </TabsTrigger>
                  <TabsTrigger value="delivery" className="px-8 py-3 data-[state=active]:bg-bakery-brown data-[state=active]:text-white">
                    Delivery
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="pickup" className="mt-0">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="heading-md mb-6">Pickup Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="heading-sm mb-4">Logan Square Location</h3>
                      <p className="mb-2">2051 N California Ave, Chicago, IL 60647</p>
                      <p className="mb-4">Phone: (773) 276-8888</p>
                      
                      <h4 className="font-bold mb-2">Hours:</h4>
                      <ul className="space-y-1 mb-6">
                        <li>Monday - Friday: 7am - 7pm</li>
                        <li>Saturday - Sunday: 8am - 7pm</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="heading-sm mb-4">Ravenswood Location</h3>
                      <p className="mb-2">4947 N Damen Ave, Chicago, IL 60625</p>
                      <p className="mb-4">Phone: (773) 530-1257</p>
                      
                      <h4 className="font-bold mb-2">Hours:</h4>
                      <ul className="space-y-1 mb-6">
                        <li>Monday - Friday: 7am - 7pm</li>
                        <li>Saturday - Sunday: 8am - 7pm</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-bakery-beige/50 p-6 rounded-md mb-8">
                    <h3 className="heading-sm mb-4">Pickup Instructions</h3>
                    <ul className="space-y-3">
                      <li>1. Place your order online or by phone at least 2 hours in advance</li>
                      <li>2. Choose your preferred pickup time during operating hours</li>
                      <li>3. Provide your name and contact information</li>
                      <li>4. Receive confirmation of your order</li>
                      <li>5. Arrive at the selected location at your pickup time</li>
                      <li>6. Notify the staff of your arrival and provide your name</li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <Button className="btn-primary mb-4">Place Pickup Order</Button>
                    <p className="text-sm text-muted-foreground">
                      For same-day whole pie orders, please call the location directly.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="delivery" className="mt-0">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="heading-md mb-6">Delivery Information</h2>
                  
                  <div className="mb-8">
                    <h3 className="heading-sm mb-4">Delivery Options</h3>
                    <p className="mb-6">
                      We offer delivery within Chicago city limits. All deliveries are made through our 
                      trusted delivery partners to ensure your pies and biscuits arrive fresh and ready to enjoy!
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-bakery-beige/50 p-4 rounded-md">
                        <h4 className="font-bold text-lg mb-2">Standard Delivery</h4>
                        <ul className="space-y-2">
                          <li>• Delivered within 2-3 hour window</li>
                          <li>• $7.99 delivery fee</li>
                          <li>• $25 minimum order</li>
                          <li>• Available 7 days a week, 9am-6pm</li>
                        </ul>
                      </div>
                      
                      <div className="bg-bakery-beige/50 p-4 rounded-md">
                        <h4 className="font-bold text-lg mb-2">Express Delivery</h4>
                        <ul className="space-y-2">
                          <li>• Delivered within 60-90 minutes</li>
                          <li>• $12.99 delivery fee</li>
                          <li>• $40 minimum order</li>
                          <li>• Available 7 days a week, 9am-5pm</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-bakery-peach/30 p-6 rounded-md mb-8">
                    <h3 className="heading-sm mb-4">Delivery Area</h3>
                    <p className="mb-4">
                      We currently deliver to the following Chicago neighborhoods:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      <div>Logan Square</div>
                      <div>Wicker Park</div>
                      <div>Bucktown</div>
                      <div>Ravenswood</div>
                      <div>Lincoln Park</div>
                      <div>Lakeview</div>
                      <div>West Town</div>
                      <div>Ukrainian Village</div>
                      <div>Lincoln Square</div>
                      <div>River North</div>
                      <div>Gold Coast</div>
                      <div>Old Town</div>
                    </div>
                    <p className="mt-4 text-sm">
                      Not sure if we deliver to your area? Enter your address during checkout to confirm!
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <Button className="btn-primary mb-4">Place Delivery Order</Button>
                    <p className="text-sm text-muted-foreground">
                      For special delivery requests, please call us at (773) 276-8888.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default PickupDelivery;
