import React from 'react';
import { Link } from 'react-router-dom';

const LogoBar = () => {
  return (
    <div className="bg-luxury-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="block text-center">
          <img
            src="/images/logo/velvetcoin-text.svg"
            alt="VELVET COIN"
            className="h-12 mx-auto"
          />
        </Link>
      </div>
    </div>
  );
};

export default LogoBar;