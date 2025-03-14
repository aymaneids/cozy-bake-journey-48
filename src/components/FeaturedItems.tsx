
import { Link } from 'react-router-dom';

const FEATURED_ITEMS = [
  {
    id: 1,
    name: "Key Lime Pie",
    description: "Tart and sweet with a buttery graham cracker crust.",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "pie"
  },
  {
    id: 2,
    name: "Buttermilk Biscuits",
    description: "Flaky, buttery biscuits served with house-made jam.",
    image: "https://images.unsplash.com/photo-1585735119309-1a3e30cec765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "biscuit"
  },
  {
    id: 3,
    name: "Chocolate Chess Pie",
    description: "Rich chocolate custard in a flaky all-butter crust.",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d5b1ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "pie"
  }
];

const FeaturedItems = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our Signature Items</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted with love using locally-sourced ingredients and family recipes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURED_ITEMS.map((item) => (
            <div 
              key={item.id}
              className="bg-bakery-cream rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-bakery-peach text-bakery-brown rounded-full text-sm font-medium mb-4">
                  {item.category === 'pie' ? 'Pie' : 'Biscuit'}
                </span>
                <h3 className="heading-sm mb-2">{item.name}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <Link to="/menu" className="text-bakery-brown font-medium hover:underline">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/menu" className="btn-primary">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
