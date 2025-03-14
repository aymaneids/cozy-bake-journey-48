
import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

// Menu data (simplified version)
const ORDER_ITEMS = {
  pies: [
    { id: 'p1', name: 'Key Lime Pie', price: 32 },
    { id: 'p2', name: 'Chocolate Chess Pie', price: 32 },
    { id: 'p3', name: 'Apple Crumble Pie', price: 32 },
    { id: 'p4', name: 'Banana Cream Pie', price: 32 },
  ],
  biscuits: [
    { id: 'b1', name: 'Buttermilk Biscuits (Half Dozen)', price: 22 },
    { id: 'b2', name: 'Biscuits & Gravy (2 Biscuits)', price: 9 },
    { id: 'b3', name: 'Biscuit Sandwich', price: 8 },
  ],
};

const Order = () => {
  const [orderType, setOrderType] = useState('pickup');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cart, setCart] = useState<{ id: string; name: string; price: number; quantity: number }[]>([]);
  
  const { toast } = useToast();

  const addToCart = (item: { id: string; name: string; price: number }) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    
    toast({
      title: "Added to order",
      description: `${item.name} has been added to your order.`,
    });
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  const tax = subtotal * 0.0825;
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      toast({
        title: "Empty order",
        description: "Please add items to your order.",
        variant: "destructive",
      });
      return;
    }
    
    if (!name || !phone || !email || !selectedLocation || !pickupDate || !pickupTime) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate order submission
    toast({
      title: "Order placed!",
      description: "Your order has been received. We'll send a confirmation email shortly.",
    });
    
    // Clear form and cart
    setOrderType('pickup');
    setSelectedLocation('');
    setPickupDate('');
    setPickupTime('');
    setName('');
    setPhone('');
    setEmail('');
    setCart([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-bakery-brown text-white py-12 md:py-16">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-4">Order Online</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Order ahead for pickup at one of our locations.
            </p>
          </div>
        </div>
        
        {/* Order Form */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Menu Selection */}
              <div className="md:col-span-2 space-y-8">
                <div className="bg-bakery-cream p-6 rounded-lg shadow-md">
                  <h2 className="heading-md mb-6">Menu</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="heading-sm mb-4">Pies (Whole)</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {ORDER_ITEMS.pies.map((item) => (
                          <div key={item.id} className="bg-white p-4 rounded-md shadow-sm flex justify-between items-center">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">${item.price}</p>
                            </div>
                            <Button
                              onClick={() => addToCart(item)}
                              variant="outline"
                              className="text-bakery-brown border-bakery-brown hover:bg-bakery-brown hover:text-white"
                            >
                              Add
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="heading-sm mb-4">Biscuits</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {ORDER_ITEMS.biscuits.map((item) => (
                          <div key={item.id} className="bg-white p-4 rounded-md shadow-sm flex justify-between items-center">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">${item.price}</p>
                            </div>
                            <Button
                              onClick={() => addToCart(item)}
                              variant="outline"
                              className="text-bakery-brown border-bakery-brown hover:bg-bakery-brown hover:text-white"
                            >
                              Add
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-bakery-cream p-6 rounded-lg shadow-md">
                  <h2 className="heading-md mb-6">Order Details</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="pickup-location">Pickup Location</Label>
                          <Select
                            value={selectedLocation}
                            onValueChange={setSelectedLocation}
                          >
                            <SelectTrigger id="pickup-location">
                              <SelectValue placeholder="Select location" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="logan">Logan Square</SelectItem>
                              <SelectItem value="ravenswood">Ravenswood</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="pickup-date">Pickup Date</Label>
                          <Input
                            id="pickup-date"
                            type="date"
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="pickup-time">Pickup Time</Label>
                          <Select
                            value={pickupTime}
                            onValueChange={setPickupTime}
                          >
                            <SelectTrigger id="pickup-time">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="8:00">8:00 AM</SelectItem>
                              <SelectItem value="9:00">9:00 AM</SelectItem>
                              <SelectItem value="10:00">10:00 AM</SelectItem>
                              <SelectItem value="11:00">11:00 AM</SelectItem>
                              <SelectItem value="12:00">12:00 PM</SelectItem>
                              <SelectItem value="13:00">1:00 PM</SelectItem>
                              <SelectItem value="14:00">2:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-bakery-beige">
                        <h3 className="heading-sm mb-4">Contact Information</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Your Name</Label>
                            <Input
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="John Doe"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="(555) 123-4567"
                            />
                          </div>
                          
                          <div className="space-y-2 sm:col-span-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="bg-bakery-cream p-6 rounded-lg shadow-md sticky top-4">
                  <h2 className="heading-md mb-6">Your Order</h2>
                  
                  {cart.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">
                      Your cart is empty. Please add items to your order.
                    </p>
                  ) : (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        {cart.map((item) => (
                          <div key={item.id} className="flex justify-between items-center py-2 border-b border-bakery-beige">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </Button>
                              <span className="w-6 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="space-y-2 pt-4">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax</span>
                          <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-medium text-lg pt-2 border-t border-bakery-beige">
                          <span>Total</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <Button
                        className="w-full bg-bakery-brown text-white hover:bg-bakery-brown/90"
                        size="lg"
                        onClick={handleSubmit}
                      >
                        Place Order
                      </Button>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        By placing your order, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Order;
