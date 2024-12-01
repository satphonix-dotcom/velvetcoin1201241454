import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './navigation/Header';
import LuxuryFooter from './LuxuryFooter';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

const LuxuryLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-luxury-black">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main {...pageTransition} className="pt-32">
          {children}
        </motion.main>
      </AnimatePresence>
      <LuxuryFooter />
    </div>
  );
};

export default LuxuryLayout;