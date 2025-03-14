
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-bakery-cream shadow-sm">
      <div className="container-custom py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/51a3b636e4b012a705dd47a4/a36872e5-8a5a-49c8-ad72-8e68c38a0fb4/BB-Full-Logo-Fresno-RGB.png?format=1500w" 
              alt="Bang Bang Pie & Biscuits"
              className="h-16 mr-2"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-bakery-text hover:text-bakery-brown font-medium transition-colors px-2 py-1.5">
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-bakery-brown focus:bg-transparent text-bakery-text">
                    Menu
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/menu" className="block select-none space-y-1 rounded-md p-3 leading-none hover:bg-bakery-beige">
                            <div className="font-medium">Our Menu</div>
                            <p className="text-sm text-muted-foreground">Browse our full menu options</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/pi-day" className="block select-none space-y-1 rounded-md p-3 leading-none hover:bg-bakery-beige">
                            <div className="font-medium">PI(E) DAY ORDERS</div>
                            <p className="text-sm text-muted-foreground">Special Pi Day treats</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/st-patricks-day" className="block select-none space-y-1 rounded-md p-3 leading-none hover:bg-bakery-beige">
                            <div className="font-medium">ST. PATRICK'S DAY ORDERS</div>
                            <p className="text-sm text-muted-foreground">Celebrate with festive treats</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-bakery-brown focus:bg-transparent text-bakery-text">
                    Order
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/pickup-delivery" className="block select-none space-y-1 rounded-md p-3 leading-none hover:bg-bakery-beige">
                            <div className="font-medium">PICKUP/DELIVERY</div>
                            <p className="text-sm text-muted-foreground">Order for local pickup or delivery</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/catering" className="block select-none space-y-1 rounded-md p-3 leading-none hover:bg-bakery-beige">
                            <div className="font-medium">CATERING & EVENTS</div>
                            <p className="text-sm text-muted-foreground">For your special occasions</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/shipping" className="block select-none space-y-1 rounded-md p-3 leading-none hover:bg-bakery-beige">
                            <div className="font-medium">SHIPPING</div>
                            <p className="text-sm text-muted-foreground">Ship our treats nationwide</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about" className="text-bakery-text hover:text-bakery-brown font-medium transition-colors px-2 py-1.5">
                    About
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/order" className="btn-primary ml-2">
                    Order Now
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-bakery-brown"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 bg-bakery-cream border-t border-bakery-beige">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-bakery-text hover:text-bakery-brown font-medium transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-4 py-2">
                <div className="font-medium text-bakery-brown mb-2">Menu</div>
                <div className="pl-4 flex flex-col space-y-3">
                  <Link
                    to="/menu"
                    className="text-bakery-text hover:text-bakery-brown font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Menu
                  </Link>
                  <Link
                    to="/pi-day"
                    className="text-bakery-text hover:text-bakery-brown font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    PI(E) DAY ORDERS
                  </Link>
                  <Link
                    to="/st-patricks-day"
                    className="text-bakery-text hover:text-bakery-brown font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ST. PATRICK'S DAY ORDERS
                  </Link>
                </div>
              </div>
              
              <div className="px-4 py-2">
                <div className="font-medium text-bakery-brown mb-2">Order</div>
                <div className="pl-4 flex flex-col space-y-3">
                  <Link
                    to="/pickup-delivery"
                    className="text-bakery-text hover:text-bakery-brown font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    PICKUP/DELIVERY
                  </Link>
                  <Link
                    to="/catering"
                    className="text-bakery-text hover:text-bakery-brown font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CATERING & EVENTS
                  </Link>
                  <Link
                    to="/shipping"
                    className="text-bakery-text hover:text-bakery-brown font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    SHIPPING
                  </Link>
                </div>
              </div>
              
              <Link
                to="/about"
                className="text-bakery-text hover:text-bakery-brown font-medium transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              
              <Link
                to="/order"
                className="btn-primary mx-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
