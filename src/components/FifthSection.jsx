import { motion } from "framer-motion";

const FifthSection = () => {
  const testimonialAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const starAnimation = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-slate-800 via-gray-900 to-black text-white px-8 py-16">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {[1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm text-center overflow-hidden"
            variants={testimonialAnimation}
            animate="animate"
          >
            {/* Glow Effect */}
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-lg blur-md opacity-20"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            ></motion.div>

            <div className="relative z-10">
              {/* Animated Stars */}
              <motion.div
                className="text-4xl text-yellow-400 mb-4"
                variants={starAnimation}
                animate="animate"
              >
                ⭐ {index}.0
              </motion.div>

              <p className="text-gray-400 italic">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptate quos animi exercitationem."
              </p>
              <h4 className="text-yellow-400 font-semibold mt-4">- Client {index}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FifthSection;
