import { motion } from "framer-motion";
import { Heart, Sparkles, Crown, Search, Sun, HandHeart } from "lucide-react";
import PropTypes from "prop-types";

const LetterCard = ({ content, delay, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
      }}
      className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group"
    >
      <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        <Icon className="w-24 h-24 text-blue-500" />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.4 }}
        className="text-blue-400 leading-relaxed relative z-10"
      >
        {content}
      </motion.p>

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.1 }}
      />
    </motion.div>
  );
};

LetterCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  icon: PropTypes.elementType.isRequired,
};

const FloatingHeart = ({ index }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -30, 0],
        x: [0, 15, 0],
      }}
      transition={{
        duration: 4,
        delay: index * 0.2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={{
        position: "absolute",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    >
      <Heart
        className="text-blue-200"
        style={{
          width: `${Math.random() * 16 + 8}px`,
          height: `${Math.random() * 16 + 8}px`,
        }}
      />
    </motion.div>
  );
};

FloatingHeart.propTypes = {
  index: PropTypes.number.isRequired,
};

export const LetterPage = () => {
  const letters = [
    {
      title: "Primer Encuentro",
      content:
        "Eres esa persona tan especial que sabe sacar lo mejor de mi, que sabe cómo me siento, en la que puedo confiar y a veces solo ser un niño que solo sabe ser feliz.",
      icon: Sparkles,
      delay: 0.2,
    },
    {
      title: "Momentos Mágicos",
      content:
        "Tú eres mi hermosa princesa la que ha venido a rescatarme a mi y ha hecho todo lo posible para que yo sepa lo que es el verdadero amor, para que saber lo que se siente ser verdaderamente amado, para hacer de nuestra vida un hermoso cuento.",
      icon: Crown,
      delay: 0.4,
    },
    {
      title: "Promesas Eternas",
      content:
        "A veces me pregunto, ¿cómo en este mundo que es tan grande pude haber encontrado a una mujer maravillosa como tú? Y aunque no lo pueda saber con exactitud estoy seguro que ha sido el destino el que nos ha logrado unir y poder encontrar a alguien tan increíble como lo eres tú.",
      icon: Search,
      delay: 0.6,
    },
    {
      title: "Palabras del Corazón",
      content:
        "Iluminas mis días siempre con la luz de tus ojos, haces siempre que un día malo se convierta en bueno con solo hablarme, con solo tu sonrisa sabes cómo hacerme muy feliz.",
      icon: Sun,
      delay: 0.8,
    },
    {
      title: "Palabras del Corazón",
      content:
        "Gracias por aparecer de repente un día y cambiar mi mundo y mi vida para siempre.",
      icon: HandHeart,
      delay: 0.8,
    },
    {
      title: "Palabras del Corazón",
      content:
        "Y te digo que cada día me seguiré enamorando más de ti, porque no puedo evitar sonreír cuando pienso en ti, porque al mirarte confirmo que eres todo lo que quiero en mi vida.",
      icon: Heart,
      delay: 0.8,
    },
  ];

  return (
    <section className="pt-32 pb-24 min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6">
            Mensajitos de Amor
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {letters.map((letter, index) => (
            <LetterCard key={index} {...letter} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-blue-600 mt-8 mb-0">
            Te amo muchísimo mi amor, felices 1.4
          </h1>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <FloatingHeart key={i} index={i} />
        ))}
      </div>
    </section>
  );
};

// No necesita PropTypes ya que no recibe props
export default LetterPage;
