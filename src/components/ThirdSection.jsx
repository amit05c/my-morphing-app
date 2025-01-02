import React from "react";
import { motion } from "framer-motion";

const ThirdSection = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const wordHoverVariant = {
    hover: { scale: 1.2, color: "#FFD700", textShadow: "0px 0px 8px rgba(255, 215, 0, 0.7)", transition: { duration: 0.3 }, color:"pink" },
  };

  const iconVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
    hover: { scale: 1.1, rotate: 5, transition: { duration: 0.4 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    hover: { scale: 1.2, transition: { duration: 0.4 } },
  };

  const words = [
    "Everything",
    "is",
    "fine.",
    "Work",
    "represents",
    "our",
    "greatest",
    "challenge."
  ];

  return (
    <div
      id="third-component"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-gray-800 to-black text-white px-6"
    >
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-400 to-purple-500 animate-text p-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordHoverVariant}
            whileHover="hover"
            className="inline-block mx-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>

      <div className="flex space-x-12 justify-center items-center mt-8">
        {["Awwwards", "CSSDA", "CSS Winner"].map((award, index) => (
          <motion.div
            className="group relative text-center cursor-pointer"
            key={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={iconVariant}
          >
            <div
              className={`absolute -inset-0.5 ${
                index === 0
                  ? "bg-gradient-to-r from-yellow-400 to-red-500"
                  : index === 1
                  ? "bg-gradient-to-r from-yellow-400 to-pink-500"
                  : "bg-gradient-to-r from-yellow-400 to-purple-500"
              } rounded-full blur-lg opacity-50 group-hover:opacity-80 transition`}
            ></div>
            <div className="relative z-10">
              <span className="text-6xl font-extrabold group-hover:text-yellow-400 transition">{index + 1}</span>
              <p className="text-sm mt-2 text-gray-400 group-hover:text-yellow-400 transition">{award}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center text-gray-400 text-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={buttonVariant}
      >
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition duration-300"></div>
          <div className="relative bg-black rounded-full w-28 h-28 flex items-center justify-center border border-gray-700 cursor-pointer hover:scale-105 transition">
            <motion.p
              className="text-white font-semibold group-hover:text-yellow-400"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              Contact Us
            </motion.p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-12 w-full flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.5 }}
      >
        {["Quick", "Responsive", "Unique"].map((text, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg mx-4"
            whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
          >
            <p className="text-lg font-bold text-yellow-400">{text}</p>
            <p className="text-sm text-gray-400 mt-2">Description for {text.toLowerCase()} feature.</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ThirdSection;