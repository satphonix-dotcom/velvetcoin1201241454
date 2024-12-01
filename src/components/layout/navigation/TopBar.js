import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../../common/icons/SearchIcon';
import UserIcon from '../../common/icons/UserIcon';
import CartIcon from '../../common/icons/CartIcon';

const TopBar = () => {
  return (
    <div className="bg-luxury-black border-b border-luxury-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-10">
          <div className="flex items-center space-x-8">
            <button className="text-luxury-cream hover:text-luxury-gold">
              <SearchIcon className="h-5 w-5" />
            </button>
            <Link to="/account" className="text-luxury-cream hover:text-luxury-gold">
              <UserIcon className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="text-luxury-cream hover:text-luxury-gold">
              <CartIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;