// import React from "react";
// import { motion } from "framer-motion";
// import './ThirdSection.css'; // Import the CSS file for the animation

// const ThirdSection = () => {
//   const textVariant = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
//   };

//   const wordHoverVariant = {
//     hover: { scale: 1.2, color: "#FFD700", textShadow: "0px 0px 8px rgba(255, 215, 0, 0.7)", transition: { duration: 0.3 } },
//   };

//   const iconVariant = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
//     hover: { scale: 1.1, rotate: 5, transition: { duration: 0.4 } },
//   };

//   const buttonVariant = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
//     hover: { scale: 1.2, transition: { duration: 0.4 } },
//   };

//   const words = [
//     "Everything",
//     "is",
//     "fine.",
//     "Work",
//     "represents",
//     "our",
//     "greatest",
//     "challenge."
//   ];

//   return (
//     <div
//       id="third-component"
//       className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-800 to-black animate-gradient"></div>
//       <motion.h2
//         className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-400 to-purple-500 animate-text p-5 relative z-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={textVariant}
//       >
//         {words.map((word, index) => (
//           <motion.span
//             key={index}
//             variants={wordHoverVariant}
//             whileHover="hover"
//             className="inline-block mx-1"
//           >
//             {word}
//           </motion.span>
//         ))}
//       </motion.h2>

//       <div className="flex flex-wrap justify-center items-center mt-4 space-x-4 relative z-10">
//         {["Awwwards", "CSSDA", "CSS Winner"].map((award, index) => (
//           <motion.div
//             className="group relative text-center cursor-pointer mb-4"
//             key={index}
//             initial="hidden"
//             whileInView="visible"
//             whileHover="hover"
//             viewport={{ once: true }}
//             variants={iconVariant}
//           >
//             <div
//               className={`absolute -inset-0.5 ${
//                 index === 0
//                   ? "bg-gradient-to-r from-yellow-400 to-red-500"
//                   : index === 1
//                   ? "bg-gradient-to-r from-yellow-400 to-pink-500"
//                   : "bg-gradient-to-r from-yellow-400 to-purple-500"
//               } rounded-full blur-lg opacity-50 group-hover:opacity-80 transition`}
//             ></div>
//             <div className="relative z-10">
//               <span className="text-4xl md:text-5xl font-extrabold group-hover:text-yellow-400 transition">{index + 1}</span>
//               <p className="text-sm mt-2 text-gray-400 group-hover:text-yellow-400 transition">{award}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <motion.div
//         className=" mt-8 md:mt-16 text-center text-gray-400 text-sm relative z-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={buttonVariant}
//       >
//         <div className="relative group">
//           <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition duration-300"></div>
//           <div className="relative bg-black rounded-full w-28 h-28 flex items-center justify-center border border-gray-700 cursor-pointer hover:scale-105 transition">
//             <motion.p
//               className="text-white font-semibold group-hover:text-yellow-400"
//               whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
//             >
//               Contact Us
//             </motion.p>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div
//         className="mt-8 md:mt-12 w-full flex flex-wrap justify-center relative z-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         transition={{ staggerChildren: 0.5 }}
//       >
//         {["Quick", "Responsive", "Unique"].map((text, index) => (
//           <motion.div
//             key={index}
//             className="p-4 md:p-6 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg mx-2 my-4 w-full sm:w-1/2 md:w-1/3"
//             whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
//           >
//             <p className="text-lg font-bold text-yellow-400">{text}</p>
//             <p className="text-sm text-gray-400 mt-2">Description for {text.toLowerCase()} feature.</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default ThirdSection;










import React from "react";
import { motion } from "framer-motion";
import './ThirdSection.css'; // Import the CSS file for the animation

const ThirdSection = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const wordHoverVariant = {
    hover: { scale: 1.2, color: "#FFD700", textShadow: "0px 0px 8px rgba(255, 215, 0, 0.7)", transition: { duration: 0.3 } },
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
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Smoke animation background */}
      <div className="smoke-bg absolute inset-0 z-0"></div>

      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-400 to-purple-500 animate-text p-5 relative z-10"
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

      {/* Content sections */}
      <div className="flex flex-wrap justify-center items-center mt-4 space-x-4 relative z-10">
        {["Awwwards", "CSSDA", "CSS Winner"].map((award, index) => (
          <motion.div
            className="group relative text-center cursor-pointer mb-4"
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
              <span className="text-4xl md:text-5xl font-extrabold group-hover:text-yellow-400 transition">{index + 1}</span>
              <p className="text-sm mt-2 text-gray-400 group-hover:text-yellow-400 transition">{award}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThirdSection;
