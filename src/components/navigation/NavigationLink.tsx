
import { Link } from 'react-router-dom';

interface NavigationLinkProps {
  to: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const NavigationLink = ({ to, className, onClick, children }: NavigationLinkProps) => {
  return (
    <Link
      to={to}
      className={className || "text-bakery-text hover:text-bakery-brown font-medium transition-colors px-2 py-1.5"}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
