
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavigationLink from './NavigationLink';
import MenuDropdownItem from './MenuDropdownItem';

const DesktopNav = () => {
  return (
    <div className="hidden lg:flex items-center space-x-6">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationLink to="/">
              Home
            </NavigationLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-bakery-brown focus:bg-transparent text-bakery-text">
              Menu
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[250px] gap-3 p-4">
                <MenuDropdownItem 
                  to="/menu" 
                  title="Our Menu" 
                  description="Browse our full menu options" 
                />
                <MenuDropdownItem 
                  to="/pi-day" 
                  title="PI(E) DAY ORDERS" 
                  description="Special Pi Day treats" 
                />
                <MenuDropdownItem 
                  to="/st-patricks-day" 
                  title="ST. PATRICK'S DAY ORDERS" 
                  description="Celebrate with festive treats" 
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-bakery-brown focus:bg-transparent text-bakery-text">
              Order
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[250px] gap-3 p-4">
                <MenuDropdownItem 
                  to="/pickup-delivery" 
                  title="PICKUP/DELIVERY" 
                  description="Order for local pickup or delivery" 
                />
                <MenuDropdownItem 
                  to="/catering" 
                  title="CATERING & EVENTS" 
                  description="For your special occasions" 
                />
                <MenuDropdownItem 
                  to="/shipping" 
                  title="SHIPPING" 
                  description="Ship our treats nationwide" 
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationLink to="/about">
              About
            </NavigationLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/order" className="btn-primary ml-2">
              Order Now
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;
