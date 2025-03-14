
import { ReactNode } from 'react';

interface MobileMenuCategoryProps {
  title: string;
  children: ReactNode;
}

const MobileMenuCategory = ({ title, children }: MobileMenuCategoryProps) => {
  return (
    <div className="px-4 py-2">
      <div className="font-medium text-bakery-brown mb-2">{title}</div>
      <div className="pl-4 flex flex-col space-y-3">
        {children}
      </div>
    </div>
  );
};

export default MobileMenuCategory;
