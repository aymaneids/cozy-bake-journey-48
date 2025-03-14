
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-bakery-brown text-white py-12 md:py-16">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-4">NATIONWIDE SHIPPING</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Send a taste of Chicago to friends and family across the country!
            </p>
          </div>
        </div>
        
        {/* Content */}
        <section className="section-padding bg-bakery-cream">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="heading-lg text-center mb-8">Ship Our Pies Nationwide</h2>
                
                <p className="text-lg mb-6 text-center">
                  Missing Bang Bang but not in Chicago? We've got you covered! We now ship our 
                  signature pies nationwide so you can enjoy a taste of Chicago wherever you are.
                </p>
                
                <Tabs defaultValue="pies" className="w-full">
                  <div className="flex justify-center mb-8">
                    <TabsList className="bg-bakery-beige">
                      <TabsTrigger value="pies" className="px-8 py-3 data-[state=active]:bg-bakery-brown data-[state=active]:text-white">
                        Pies
                      </TabsTrigger>
                      <TabsTrigger value="gifting" className="px-8 py-3 data-[state=active]:bg-bakery-brown data-[state=active]:text-white">
                        Gift Options
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="pies" className="mt-0">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-bakery-beige/30 p-6 rounded-md">
                        <h3 className="heading-sm mb-4">Shippable Pie Options</h3>
                        <p className="mb-4">
                          The following pies are available for nationwide shipping:
                        </p>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <div>
                              <span className="font-medium">Key Lime Pie</span> - Our classic key lime with graham cracker crust
                              <div className="text-sm text-muted-foreground">$45 + shipping</div>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <div>
                              <span className="font-medium">Chocolate Chess Pie</span> - Rich chocolate custard in buttery crust
                              <div className="text-sm text-muted-foreground">$45 + shipping</div>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <div>
                              <span className="font-medium">Apple Crumble Pie</span> - Cinnamon-spiced apples with oat topping
                              <div className="text-sm text-muted-foreground">$48 + shipping</div>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <div>
                              <span className="font-medium">Bourbon Pecan Pie</span> - Southern classic with a Chicago twist
                              <div className="text-sm text-muted-foreground">$48 + shipping</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-bakery-beige/30 p-6 rounded-md">
                        <h3 className="heading-sm mb-4">Shipping Information</h3>
                        <p className="mb-4">
                          Our pies are carefully packaged to ensure they arrive safely:
                        </p>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <div>
                              <span className="font-medium">Packaging</span> - Each pie is flash-frozen and packed with dry ice in insulated containers
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <div>
                              <span className="font-medium">Shipping Options</span> - 2-Day and Overnight shipping available
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <div>
                              <span className="font-medium">Delivery Area</span> - We ship to all 50 states (additional charges may apply for Hawaii and Alaska)
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <div>
                              <span className="font-medium">Minimum Order</span> - 2 pie minimum for nationwide shipping
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="text-center mt-8">
                      <Button className="btn-primary">Shop Shipping Pies</Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="gifting" className="mt-0">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-bakery-peach/30 p-6 rounded-md">
                        <h3 className="heading-sm mb-4">Gift Packages</h3>
                        <p className="mb-4">
                          Send a special sweet treat to friends, family, or clients:
                        </p>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <div>
                              <span className="font-medium">The Essentials</span> - Two classic pies of your choice
                              <div className="text-sm text-muted-foreground">$90 + shipping</div>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <div>
                              <span className="font-medium">Pie Lover's Package</span> - Four pies (one of each flavor)
                              <div className="text-sm text-muted-foreground">$175 + shipping</div>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <div>
                              <span className="font-medium">Corporate Gift Box</span> - Six pies with custom branding options
                              <div className="text-sm text-muted-foreground">$265 + shipping</div>
                            </div>
                          </li>
                        </ul>
                        <p className="text-sm italic">
                          All gift packages include a handwritten note and special Bang Bang packaging.
                        </p>
                      </div>
                      
                      <div className="bg-bakery-peach/30 p-6 rounded-md">
                        <h3 className="heading-sm mb-4">Gifting Details</h3>
                        <p className="mb-4">
                          Make your gift extra special:
                        </p>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <div>
                              <span className="font-medium">Gift Cards</span> - Digital or physical gift cards available in any amount
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <div>
                              <span className="font-medium">Custom Notes</span> - Include a personalized message with your gift
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <div>
                              <span className="font-medium">Add-ons</span> - Enhance your gift with Bang Bang merchandise, coffee, or jams
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <div>
                              <span className="font-medium">Corporate Orders</span> - Bulk gifting options available with volume discounts
                            </div>
                          </li>
                        </ul>
                        <p className="text-sm italic">
                          For corporate gifting or bulk orders, please contact our team directly at orders@bangbangpie.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center mt-8">
                      <Button className="btn-primary">Shop Gift Packages</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="heading-md text-center mb-6">Shipping FAQs</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2">How are the pies packaged for shipping?</h4>
                    <p>
                      Our pies are flash-frozen at the peak of freshness, then carefully packaged with dry ice in 
                      insulated containers. This ensures they remain perfectly preserved during transit. Each package 
                      includes detailed reheating instructions.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-2">How long do shipped pies stay fresh?</h4>
                    <p>
                      Upon arrival, pies can be kept frozen for up to 1 month or refrigerated for 3-5 days. For the 
                      best experience, we recommend thawing in the refrigerator overnight before serving.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-2">When will my pies arrive?</h4>
                    <p>
                      Shipping times depend on your location and selected shipping method. Most orders arrive within 
                      2-3 business days from shipment. You'll receive tracking information via email when your order ships.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-2">Do you ship internationally?</h4>
                    <p>
                      Currently, we only ship within the United States. We hope to expand to international shipping in the future.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-2">What if my pie arrives damaged?</h4>
                    <p>
                      We take great care to ensure your pies arrive in perfect condition. If there's any issue with your 
                      order, please contact our customer service team within 24 hours of delivery with photos, and we'll 
                      make it right.
                    </p>
                  </div>
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

export default Shipping;
