
import { Link } from 'react-router-dom';

interface MobileMenuLinkProps {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileMenuLink = ({ to, onClick, children }: MobileMenuLinkProps) => {
  return (
    <Link
      to={to}
      className="text-bakery-text hover:text-bakery-brown font-medium transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default MobileMenuLink;
