import { motion } from "framer-motion";
const FifthSection = () => {
    const testimonialVariant = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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
              className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={testimonialVariant}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
            >
              <div className="text-3xl text-yellow-400 mb-4">⭐ {index}.0</div>
              <p className="text-gray-400 italic">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptate quos animi exercitationem."
              </p>
              <h4 className="text-yellow-400 font-semibold mt-4">- Client {index}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  export default FifthSection;