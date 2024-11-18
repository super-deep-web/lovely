import { motion } from "framer-motion";
import { Heart, Stars, Sparkles } from "lucide-react";

export const SecretPage = () => {
  // Animaciones para elementos flotantes
  const floatingElements = [...Array(12)].map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    icon: Math.random() > 0.5 ? Heart : Stars,
  }));

  // Variantes de animación para los marcos
  const frameVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      rotate: [0, -1, 1, 0],
      transition: {
        rotate: {
          repeat: Infinity,
          duration: 2,
        },
      },
    },
  };

  return (
    <section className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-pink-50 to-white -z-10" />

      {/* Elementos flotantes decorativos */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon;
        return (
          <motion.div
            key={index}
            className="absolute text-blue-200"
            style={{ left: `${element.x}%`, top: `${element.y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
              y: [-10, 10, -10],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Icon size={24} />
          </motion.div>
        );
      })}

      <div className="max-w-6xl mx-auto px-4">
        {/* Título con animación */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-blue-500" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600">
              Un regalito más
            </h1>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-blue-500" />
            </motion.div>
          </div>
          <p className="text-lg md:text-xl text-blue-400 max-w-2xl mx-auto">
            Para tí tengo este regalo especial que has logrado encontrar, espero
            que lo disfrutes muchísimo mi princesita hermosa. Te amo muchísimo.
          </p>
        </motion.div>

        {/* Contenedor de imágenes */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
          {/* Marco 1 */}
          <motion.div
            variants={frameVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-pink-200 rounded-2xl transform rotate-3 blur-lg opacity-50" />
            <div className="relative bg-white p-4 rounded-2xl shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-pink-50 opacity-50" />
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/images/xmas-stitch-v1.jpg"
                  alt="Imagen secreta 1"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay con brillos */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <motion.div
                className="absolute top-2 right-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Heart className="w-6 h-6 text-pink-400" fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>

          {/* Marco 2 */}
          <motion.div
            variants={frameVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-l from-blue-200 to-pink-200 rounded-2xl transform -rotate-3 blur-lg opacity-50" />
            <div className="relative bg-white p-4 rounded-2xl shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-l from-blue-50 to-pink-50 opacity-50" />
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/images/xmas-stitch-v2.jpg"
                  alt="Imagen secreta 2"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay con brillos */}
                <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <motion.div
                className="absolute top-2 left-2"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Heart className="w-6 h-6 text-pink-400" fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecretPage;
