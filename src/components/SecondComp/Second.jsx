import React from 'react';
import { motion } from 'framer-motion';

const words1 = [
  "From", "the", "2009,", "ILAB", "And", "a", "digital", "creative", "study", "Of", "Origins", "Neapolitan", "specialized", "in", "branding,", "web", "design", "And", "advertising."
];

const words2 = [
  "A", "laboratory", "That", "Yes", "dedication", "to", "the", "own", "clients", "with", "style", "Italian,", "Attention", "to", "the", "details", "And", "treatment", "sartorial."
];

const Word = ({ word, index }) => {
  return (
    <motion.span
      key={index}
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }} 
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        delay: index * 0.2 
      }}
      className="inline-block"
    >
      {word}{" "}
    </motion.span>
  );
};

const Second = () => {
  return (
    <div id="second-component" className='w-full p-5 text-center h-[80vh] flex justify-center items-center'>
      <motion.div 
        className='w-4/5'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p className="mb-3 text-2xl md:text-4xl from-neutral-300">
          {words1.map((word, index) => (
            <Word word={word} index={index} />
          ))}
        </motion.p>
        <motion.p className="text-2xl md:text-4xl from-neutral-300">
          {words2.map((word, index) => (
            <Word word={word} index={index} />
          ))}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Second;