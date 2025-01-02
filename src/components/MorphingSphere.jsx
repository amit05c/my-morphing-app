import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import DotPattern from './DotPattern';

const MorphingSphere = () => {
  const sphereVariants = {
    animate: {
      scale: [3, 4, 3],
      rotate: [0, 180, 360],
      borderRadius: ["50%", "40%", "50%"],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative p-4 overflow-hidden">
      {/* Main Content */}
      <div className="relative flex items-center justify-center">
        <motion.div
          variants={sphereVariants}
          animate="animate"
          className="absolute z-0 w-64 h-64 bg-transparent border border-white/20 rounded-full"
          style={{
            backgroundImage: `radial-gradient(circle at center, transparent 0%, transparent 100%)`,
            boxShadow: '0 0 40px rgba(255,255,255,0.1)'
          }}
        >
          <DotPattern />
        </motion.div>
        <div className="relative z-10">
          <AnimatedText />
        </div>
      </div>

      {/* Footer Icon */}
      <div className="absolute bottom-4 right-4">
        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
          <span className="text-white/50 text-xs">✏️</span>
        </div>
      </div>
    </div>
  );
};

export default MorphingSphere;