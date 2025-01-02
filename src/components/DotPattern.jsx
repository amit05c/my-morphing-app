import React from 'react';
import { motion } from 'framer-motion';

const DotPattern = () => {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFC300', '#33FFF2', '#FF33A1'];

  return (
    <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
      {[...Array(300)].map((_, i) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 8 + 4}px`, 
              height: `${Math.random() * 8 + 4}px`,
              backgroundColor: randomColor,
              top: `${Math.random() * 100}vh`, 
              left: `${Math.random() * 100}vw`, 
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 0.8, 1], // Pulsating effect
              opacity: [0, 1, 0.5, 1], // Fade in and out
              y: [0, Math.random() * 20 - 10, 0], // Slight vertical movement
            }}
            transition={{
              duration: Math.random() * 2 + 2, // Random duration between 2s and 4s
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2, // Random delay for staggering
            }}
          />
        );
      })}
    </div>
  );
};

export default DotPattern;