
import Logo from './navigation/Logo';
import DesktopNav from './navigation/DesktopNav';
import MobileNav from './navigation/MobileNav';

const Nav = () => {
  return (
    <header className="bg-bakery-cream shadow-sm">
      <div className="container-custom py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Mobile Menu Button */}
          <MobileNav />
        </nav>
      </div>
    </header>
  );
};

export default Nav;
