
import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Menu data
const MENU_ITEMS = {
  pies: [
    {
      id: 'p1',
      name: 'Key Lime Pie',
      description: 'Tart and sweet with a homemade graham cracker crust.',
      price: '$6 / slice, $32 / whole',
      image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'p2',
      name: 'Chocolate Chess Pie',
      description: 'Rich chocolate custard in a flaky all-butter crust.',
      price: '$6 / slice, $32 / whole',
      image: 'https://images.unsplash.com/photo-1519915028121-7d3463d5b1ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'p3',
      name: 'Apple Crumble Pie',
      description: 'Cinnamon-spiced apples with a buttery oat crumble topping.',
      price: '$6 / slice, $32 / whole',
      image: 'https://images.unsplash.com/photo-1621372304187-804c9918c8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'p4',
      name: 'Banana Cream Pie',
      description: 'Creamy banana custard topped with fresh whipped cream.',
      price: '$6 / slice, $32 / whole',
      image: 'https://images.unsplash.com/photo-1562007908-17c67e878c6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ],
  biscuits: [
    {
      id: 'b1',
      name: 'Classic Buttermilk Biscuit',
      description: 'Light and flaky buttermilk biscuit with honey butter.',
      price: '$4 each, $22 / half dozen',
      image: 'https://images.unsplash.com/photo-1585735119309-1a3e30cec765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'b2',
      name: 'Biscuits & Gravy',
      description: 'Two biscuits smothered in our house-made sausage gravy.',
      price: '$9',
      image: 'https://images.unsplash.com/photo-1590674486521-0dee598f2f42?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'b3',
      name: 'Biscuit Sandwich',
      description: 'Bacon, egg, and cheddar cheese on a buttermilk biscuit.',
      price: '$8',
      image: 'https://images.unsplash.com/photo-1614961233913-a5113a4df86a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ],
  drinks: [
    {
      id: 'd1',
      name: 'Drip Coffee',
      description: 'Locally roasted coffee, available hot or iced.',
      price: '$3 small, $4 large',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'd2',
      name: 'Cold Brew Coffee',
      description: 'Smooth, less acidic cold brew steeped for 12 hours.',
      price: '$4',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'd3',
      name: 'House-Made Lemonade',
      description: 'Fresh-squeezed lemonade, available sweet or tart.',
      price: '$3',
      image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ]
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('pies');

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-bakery-brown text-white py-12 md:py-16">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-4">Our Menu</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Everything made from scratch daily with locally-sourced ingredients.
            </p>
          </div>
        </div>
        
        {/* Menu Tabs */}
        <section className="section-padding bg-bakery-cream">
          <div className="container-custom">
            <Tabs defaultValue="pies" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8">
                <TabsList className="bg-bakery-beige">
                  <TabsTrigger value="pies" className="px-8 py-3 data-[state=active]:bg-bakery-brown data-[state=active]:text-white">
                    Pies
                  </TabsTrigger>
                  <TabsTrigger value="biscuits" className="px-8 py-3 data-[state=active]:bg-bakery-brown data-[state=active]:text-white">
                    Biscuits
                  </TabsTrigger>
                  <TabsTrigger value="drinks" className="px-8 py-3 data-[state=active]:bg-bakery-brown data-[state=active]:text-white">
                    Drinks
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="pies" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {MENU_ITEMS.pies.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h3 className="heading-sm mb-2">{item.name}</h3>
                        <p className="text-muted-foreground mb-2">{item.description}</p>
                        <p className="font-medium">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="biscuits" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {MENU_ITEMS.biscuits.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h3 className="heading-sm mb-2">{item.name}</h3>
                        <p className="text-muted-foreground mb-2">{item.description}</p>
                        <p className="font-medium">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="drinks" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {MENU_ITEMS.drinks.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h3 className="heading-sm mb-2">{item.name}</h3>
                        <p className="text-muted-foreground mb-2">{item.description}</p>
                        <p className="font-medium">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center mt-12">
              <Button asChild className="btn-primary">
                <a href="/order">Order Now</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
