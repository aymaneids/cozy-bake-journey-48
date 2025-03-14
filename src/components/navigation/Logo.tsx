
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="https://images.squarespace-cdn.com/content/v1/51a3b636e4b012a705dd47a4/a36872e5-8a5a-49c8-ad72-8e68c38a0fb4/BB-Full-Logo-Fresno-RGB.png?format=1500w" 
        alt="Bang Bang Pie & Biscuits"
        className="h-16 mr-2"
      />
    </Link>
  );
};

export default Logo;
