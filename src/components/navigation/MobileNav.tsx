
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import NavigationLink from './NavigationLink';
import MobileMenuCategory from './MobileMenuCategory';
import MobileMenuLink from './MobileMenuLink';

const MobileNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMobileMenu}
        className="text-bakery-brown"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden py-4 bg-bakery-cream border-t border-bakery-beige">
          <div className="flex flex-col space-y-4">
            <NavigationLink
              to="/"
              className="text-bakery-text hover:text-bakery-brown font-medium transition-colors px-4 py-2"
              onClick={closeMobileMenu}
            >
              Home
            </NavigationLink>
            
            <MobileMenuCategory title="Menu">
              <MobileMenuLink to="/menu" onClick={closeMobileMenu}>
                Our Menu
              </MobileMenuLink>
              <MobileMenuLink to="/pi-day" onClick={closeMobileMenu}>
                PI(E) DAY ORDERS
              </MobileMenuLink>
              <MobileMenuLink to="/st-patricks-day" onClick={closeMobileMenu}>
                ST. PATRICK'S DAY ORDERS
              </MobileMenuLink>
            </MobileMenuCategory>
            
            <MobileMenuCategory title="Order">
              <MobileMenuLink to="/pickup-delivery" onClick={closeMobileMenu}>
                PICKUP/DELIVERY
              </MobileMenuLink>
              <MobileMenuLink to="/catering" onClick={closeMobileMenu}>
                CATERING & EVENTS
              </MobileMenuLink>
              <MobileMenuLink to="/shipping" onClick={closeMobileMenu}>
                SHIPPING
              </MobileMenuLink>
            </MobileMenuCategory>
            
            <NavigationLink
              to="/about"
              className="text-bakery-text hover:text-bakery-brown font-medium transition-colors px-4 py-2"
              onClick={closeMobileMenu}
            >
              About
            </NavigationLink>
            
            <Link
              to="/order"
              className="btn-primary mx-4"
              onClick={closeMobileMenu}
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
