import { motion } from "framer-motion";
import { Music, Music2, Play } from "lucide-react";

export const MusicPage = () => {
  // Animación para el contenedor principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Animación para elementos individuales
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Animación para notas musicales flotantes
  const floatingNotes = [...Array(6)].map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <section className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />

      {/* Notas musicales flotantes */}
      {floatingNotes.map((note, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-200"
          style={{ left: `${note.x}%`, top: `${note.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: note.duration,
            delay: note.delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Music size={24} />
        </motion.div>
      ))}

      {/* Contenido principal */}
      <motion.div
        className="max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Título y subtítulo */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6 flex items-center justify-center gap-4">
            <Music2 className="w-8 h-8 md:w-12 md:h-12" />
            Tú Canción
            <Music2 className="w-8 h-8 md:w-12 md:h-12" />
          </h1>
        </motion.div>

        {/* Imagen de portada */}
        <motion.div className="mb-16 relative" variants={itemVariants}>
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="/images/music.jpg"
              alt="Portada musical"
              className="w-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Descripción */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          <p className="text-blue-400 text-lg leading-relaxed">
            Y en este día tambien tengo para ti una canción por dedicar, para
            que sepas en cada verso las palabras y los sentimientos que provocas
            en mi, el amor inmenso que tengo por ti.
          </p>
        </motion.div>

        {/* Botón para el video */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://www.youtube.com/watch?v=YrkelyU41hc"
            target="/blank"
            className="inline-flex items-center gap-3 bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <Play className="w-6 h-6" />
            <span className="font-medium">Ver Video</span>
          </a>
        </motion.div>

        {/* Elementos decorativos */}
        <div className="absolute -bottom-10 -right-10 text-blue-100 opacity-20 transform rotate-12">
          <Music size={120} />
        </div>
        <div className="absolute -top-10 -left-10 text-blue-100 opacity-20 transform -rotate-12">
          <Music size={120} />
        </div>
      </motion.div>
    </section>
  );
};

export default MusicPage;
