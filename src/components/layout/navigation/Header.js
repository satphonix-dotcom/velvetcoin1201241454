import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_IMAGES } from '../../../constants/images';
import SearchIcon from '../../common/icons/SearchIcon';
import UserIcon from '../../common/icons/UserIcon';
import CartIcon from '../../common/icons/CartIcon';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-black">
      {/* Logo and Icons Bar */}
      <div className="border-b border-luxury-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left section - empty for balance */}
            <div className="w-32"></div>
            
            {/* Center section - logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={LOGO_IMAGES.text}
                alt="VELVET COIN"
                className="h-8"
                style={{ filter: 'brightness(1)' }}
              />
            </Link>
            
            {/* Right section - icons */}
            <div className="flex items-center space-x-8 w-32 justify-end">
              <button className="text-luxury-cream hover:text-luxury-gold transition-colors">
                <SearchIcon className="h-5 w-5" />
              </button>
              <Link to="/account" className="text-luxury-cream hover:text-luxury-gold transition-colors">
                <UserIcon className="h-5 w-5" />
              </Link>
              <Link to="/cart" className="text-luxury-cream hover:text-luxury-gold transition-colors">
                <CartIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-b border-luxury-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex justify-center space-x-8 h-12">
            <li>
              <Link to="/new" className="text-luxury-cream hover:text-luxury-gold transition-colors text-sm font-medium h-full flex items-center">
                NEW
              </Link>
            </li>
            <li>
              <Link to="/stores" className="text-luxury-cream hover:text-luxury-gold transition-colors text-sm font-medium h-full flex items-center">
                Stores
              </Link>
            </li>
            <li>
              <Link to="/designer" className="text-luxury-cream hover:text-luxury-gold transition-colors text-sm font-medium h-full flex items-center">
                Designer
              </Link>
            </li>
            <li>
              <Link to="/clothing" className="text-luxury-cream hover:text-luxury-gold transition-colors text-sm font-medium h-full flex items-center">
                Clothing
              </Link>
            </li>
            <li>
              <Link to="/shoes" className="text-luxury-cream hover:text-luxury-gold transition-colors text-sm font-medium h-full flex items-center">
                Shoes
              </Link>
            </li>
            <li>
              <Link to="/bags" className="text-luxury-cream hover:text-luxury-gold transition-colors text-sm font-medium h-full flex items-center">
                Bags
              </Link>
            </li>
            <li>
              <Link to="/jewelry" className="text-luxury-cream hover:text-luxury-gold transition-colors text-sm font-medium h-full flex items-center">
                Jewelry
              </Link>
            </li>
            <li>
              <Link to="/accessories" className="text-luxury-cream hover:text-luxury-gold transition-colors text-sm font-medium h-full flex items-center">
                Accessories
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;