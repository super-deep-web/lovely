import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const heartVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <footer className="bg-white py-12 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-3 mb-2">
            <motion.div variants={heartVariants} animate="animate">
              <Heart className="h-6 w-6 text-blue-400" fill="currentColor" />
            </motion.div>
            <motion.span
              className="text-xl font-semibold text-blue-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Creando muy lindos recuerdos juntos
            </motion.span>
            <motion.div variants={heartVariants} animate="animate">
              <Heart className="h-6 w-6 text-blue-400" fill="currentColor" />
            </motion.div>
          </div>

          <motion.div
            className="text-blue-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Desde el 2023.
          </motion.div>
        </motion.div>
      </div>

      {/* Corazones flotantes decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Heart
              className="text-blue-200 animate-float"
              style={{
                animationDelay: `${i * 0.5}s`,
                width: "20px",
                height: "20px",
              }}
            />
          </motion.div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
