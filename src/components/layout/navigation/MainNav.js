import React from 'react';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { name: 'NEW', path: '/new' },
  { name: 'Stores', path: '/stores' },
  { name: 'Designer', path: '/designer' },
  { name: 'Clothing', path: '/clothing' },
  { name: 'Shoes', path: '/shoes' },
  { name: 'Bags', path: '/bags' },
  { name: 'Jewelry', path: '/jewelry' },
  { name: 'Accessories', path: '/accessories' }
];

const MainNav = () => {
  return (
    <nav className="bg-luxury-black border-t border-luxury-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-12">
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className="text-luxury-cream hover:text-luxury-gold transition-colors text-sm font-medium py-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;