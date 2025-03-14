
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-bakery-brown text-white py-12 md:py-16">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-4">Our Story</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              From a small pie stand to Chicago's favorite bakery.
            </p>
          </div>
        </div>
        
        {/* Story */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-lg mb-6">How It All Started</h2>
                <p className="text-lg mb-4">
                  Bang Bang Pie & Biscuits began in 2012 as a food truck serving homemade pies 
                  around Chicago. The response was overwhelming, and soon we opened our first 
                  brick-and-mortar location in Logan Square.
                </p>
                <p className="text-lg mb-4">
                  Our philosophy is simple: use the best ingredients, take no shortcuts, and 
                  treat everyone like family. We make everything from scratch, including our 
                  butter crusts, fillings, and those famous buttermilk biscuits.
                </p>
                <p className="text-lg">
                  Over the years, we've grown to multiple locations, but our commitment to 
                  quality and community remains the same. We're proud to be a place where 
                  neighbors gather, friends meet, and everyone leaves a little happier 
                  (and fuller) than when they arrived.
                </p>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1556711905-b3284e97f855?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Baker making pie"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="section-padding bg-bakery-cream">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">Our Values</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="heading-sm mb-4">Quality Ingredients</h3>
                <p>
                  We source the finest ingredients, partnering with local farmers and 
                  producers whenever possible. From organic flour to seasonal fruits, 
                  quality is never compromised.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="heading-sm mb-4">Handcrafted with Love</h3>
                <p>
                  Every pie and biscuit is made by hand, using time-honored techniques 
                  passed down through generations. We take pride in our craftsmanship 
                  and attention to detail.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="heading-sm mb-4">Community First</h3>
                <p>
                  We believe in creating spaces where community can thrive. Our shops 
                  are designed to be welcoming gathering places, and we actively support 
                  local organizations and events.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">Meet Our Team</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Head Baker"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="heading-sm mb-1">Michael Johnson</h3>
                <p className="text-bakery-brown font-medium mb-3">Head Baker</p>
                <p className="text-muted-foreground">
                  With over 20 years of experience, Michael leads our baking team with 
                  passion and creativity.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Owner & Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="heading-sm mb-1">Sarah Williams</h3>
                <p className="text-bakery-brown font-medium mb-3">Owner & Founder</p>
                <p className="text-muted-foreground">
                  Sarah founded Bang Bang with a simple mission: to create food that brings 
                  people together.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1484684096794-03e03b5e713e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Community Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="heading-sm mb-1">David Chen</h3>
                <p className="text-bakery-brown font-medium mb-3">Community Manager</p>
                <p className="text-muted-foreground">
                  David ensures that every customer feels welcome and that our shops remain 
                  integral parts of the neighborhood.
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

export default About;
