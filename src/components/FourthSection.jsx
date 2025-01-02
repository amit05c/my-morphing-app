import { motion } from "framer-motion";
const FourthSection = () => {
    const featureVariant = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-slate-900 text-white px-8 py-16 flex flex-col items-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-yellow-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Why Choose Us?
        </motion.h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Innovative Solutions", "Expert Team", "24/7 Support"].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={featureVariant}
              whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
            >
              <div className="text-5xl text-yellow-400 mb-4">🔥</div>
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, facilis.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  export default FourthSection;