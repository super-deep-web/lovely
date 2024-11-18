import { Heart } from "lucide-react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";
import { useSecretPage } from "../context/useSecretPage";

export const Hero = () => {
  const x = useMotionValue(0);
  const controls = useAnimation();
  const { setIsSecretUnlocked } = useSecretPage();

  // Transformar el movimiento en opacidad para el texto de instrucción
  const opacity = useTransform(x, [0, 200], [0.6, 0]);

  // Transformar el movimiento en color
  const color = useTransform(
    x,
    [0, 200],
    ["rgb(59, 130, 246)", "rgb(236, 72, 153)"]
  );

  const handleDragEnd = async (event, info) => {
    const distance = info.offset.x;

    if (distance >= 250) {
      // Slider completado exitosamente
      await controls.start({
        x: 325,
        transition: { duration: 0.2 },
      });
      setIsSecretUnlocked(true);

      // Animación de éxito
      controls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.5 },
      });
    } else {
      // Regresar al inicio
      controls.start({
        x: 0,
        transition: { duration: 0.5 },
      });
    }
  };

  return (
    <section className="pt-32 pb-24 relative" id="home">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-blue-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Felices 1.4
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-blue-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Donde sea, como sea, cuando sea, pero siempre que sea contigo mi
            amor.
          </motion.p>

          {/* Slider Secreto */}
          <div className="relative max-w-xs mx-auto mb-8">
            <div className="h-14 bg-blue-100 rounded-full relative overflow-hidden">
              {/* Texto de instrucción */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-blue-500 font-medium"
                style={{ opacity }}
              ></motion.div>

              {/* Barra de progreso */}
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-200 to-pink-200"
                style={{ width: x }}
              />

              {/* Corazón deslizable */}
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 250 }}
                dragElastic={0}
                dragMomentum={false}
                onDragEnd={handleDragEnd}
                animate={controls}
                style={{ x }}
                className="absolute top-0 left-0 h-14 w-14 flex items-center justify-center cursor-grab active:cursor-grabbing"
              >
                <div className="h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <motion.div style={{ color }}>
                    <Heart className="h-6 w-6" fill="currentColor" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Corazones flotantes de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
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
                width: "24px",
                height: "24px",
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
