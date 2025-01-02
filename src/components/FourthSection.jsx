import { motion } from "framer-motion";

const FourthSection = () => {
  const featureContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const featureVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const backgroundVariant = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%"],
      transition: { duration: 8, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <motion.div
      className="min-h-screen px-8 py-16 flex flex-col items-center relative overflow-hidden"
      variants={backgroundVariant}
      animate="animate"
      style={{
        backgroundImage: "linear-gradient(to right, black, #1c1c1c, #2b2b2b, #1c1c1c, black)",
        backgroundSize: "200% 200%",
      }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-yellow-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Why Choose Us?
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={featureContainerVariant}
      >
        {[
          { icon: "🚀", title: "Innovative Solutions", description: "Cutting-edge solutions for every challenge." },
          { icon: "👩‍💻", title: "Expert Team", description: "Highly skilled professionals at your service." },
          { icon: "⏰", title: "24/7 Support", description: "Always here to help, anytime you need." },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg text-center relative group"
            variants={featureVariant}
            whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
          >
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur-lg opacity-30 group-hover:opacity-80 transition"
            ></motion.div>
            <div className="relative z-10">
              <motion.div
                className="text-6xl mb-4"
                whileHover={{ rotate: [0, 10, -10, 0], transition: { duration: 0.6, repeat: Infinity } }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FourthSection;
