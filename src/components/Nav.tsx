
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-playfair font-bold text-bakery-brown">
              Bang Bang
              <span className="block text-base md:text-lg text-bakery-text">Pie & Biscuits</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-bakery-text hover:text-bakery-brown font-medium transition-colors">
              Home
            </Link>
            <Link to="/menu" className="text-bakery-text hover:text-bakery-brown font-medium transition-colors">
              Menu
            </Link>
            <Link to="/about" className="text-bakery-text hover:text-bakery-brown font-medium transition-colors">
              About
            </Link>
            <Link to="/order" className="btn-primary">
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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
          <div className="md:hidden py-4 bg-bakery-cream border-t border-bakery-beige">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-bakery-text hover:text-bakery-brown font-medium transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="text-bakery-text hover:text-bakery-brown font-medium transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menu
              </Link>
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
