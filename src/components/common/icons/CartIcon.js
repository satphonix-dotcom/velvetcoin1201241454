import React from 'react';

const CartIcon = ({ className = '' }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
    />
  </svg>
);

export default CartIcon;