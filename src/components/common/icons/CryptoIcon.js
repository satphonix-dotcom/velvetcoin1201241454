import React from 'react';
import { CRYPTO_ICONS } from '../../../constants/images';

const CryptoIcon = ({ symbol, className = '' }) => {
  const iconPath = CRYPTO_ICONS[symbol.toLowerCase()];
  
  if (!iconPath) {
    return null;
  }

  return (
    <img
      src={iconPath}
      alt={symbol.toUpperCase()}
      className={`h-8 w-8 ${className}`}
    />
  );
};

export default CryptoIcon;