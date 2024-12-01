import React from 'react';
import CryptoIcon from './CryptoIcon';

const CryptoIconGroup = ({ className = '' }) => {
  const cryptos = ['btc', 'eth', 'ltc', 'xrp', 'usdt'];
  
  return (
    <div className={`flex space-x-2 ${className}`}>
      {cryptos.map(crypto => (
        <CryptoIcon key={crypto} symbol={crypto} />
      ))}
    </div>
  );
};

export default CryptoIconGroup;