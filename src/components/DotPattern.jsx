import React from 'react';
import { motion } from 'framer-motion';

const DotPattern = () => {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFC300', '#33FFF2', '#FF33A1'];

  return (
    <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
      {[...Array(500)].map((_, i) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const angle = Math.random() * 360; // Random angle for spiral
        const radius = Math.random() * 100; // Random radius for spiral

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
              x: [0, radius * Math.cos(angle), radius * Math.cos(angle + Math.PI)], // Spiral effect
              y: [0, radius * Math.sin(angle), radius * Math.sin(angle + Math.PI)], // Spiral effect
              rotate: [0, 360], // Continuous rotation
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