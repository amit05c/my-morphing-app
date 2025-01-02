import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedText = () => {
  const phrases = [
    "Embrace the Creative Chaos",
    "Unlock Your Potential",
    "Dream Big, Achieve More",
    "Innovate and Inspire",
    "Stay Curious, Stay Ahead",
  ];

  const [currentText, setCurrentText] = useState(phrases[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setCurrentText(randomPhrase);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
        staggerChildren: 0.25,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariants}
      className="text-center"
    >
      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-widest leading-snug">
        {currentText.split(" ").map((word, index) => (
          <motion.span key={index} className="block" variants={wordVariants}>
            {word}
          </motion.span>
        ))}
      </h1>
    </motion.div>
  );
};

export default AnimatedText;
