
import { Link } from 'react-router-dom';
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

interface MenuDropdownItemProps {
  to: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const MenuDropdownItem = ({ to, title, description, onClick }: MenuDropdownItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link 
          to={to} 
          className="block select-none space-y-1 rounded-md p-3 leading-none hover:bg-bakery-beige"
          onClick={onClick}
        >
          <div className="font-medium">{title}</div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default MenuDropdownItem;
