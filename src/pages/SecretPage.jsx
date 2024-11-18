import { motion } from "framer-motion";
import { Heart, Stars, Sparkles, Download } from "lucide-react";
import PropTypes from "prop-types";

export const SecretPage = () => {
  const floatingElements = [...Array(12)].map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    icon: Math.random() > 0.5 ? Heart : Stars,
  }));

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

  const handleDownload = (imageUrl, imageName) => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = imageName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      });
  };

  const DownloadButton = ({ imageUrl, imageName }) => (
    <motion.button
      onClick={() => handleDownload(imageUrl, imageName)}
      className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg z-10 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Download size={16} />
      <span className="text-sm font-medium">Descargar</span>
    </motion.button>
  );

  DownloadButton.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageName: PropTypes.string.isRequired,
  };

  return (
    <section className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-pink-50 to-white -z-10" />

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

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
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
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <DownloadButton
                  imageUrl="/images/xmas-stitch-v1.jpg"
                  imageName="regalo-especial-1.jpg"
                />
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
                <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <DownloadButton
                  imageUrl="/images/xmas-stitch-v2.jpg"
                  imageName="regalo-especial-2.jpg"
                />
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
