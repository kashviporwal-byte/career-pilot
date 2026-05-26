import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export const ScatterItem = ({ children, delay = 0, className = '' }) => {
  const motionSeed = useRef({
    x: (Math.random() - 0.5) * 100,
    y: (Math.random() - 0.5) * 100,
    rotate: (Math.random() - 0.5) * 10,
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: motionSeed.current.x, y: motionSeed.current.y, rotate: motionSeed.current.rotate }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
