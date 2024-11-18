import { motion } from 'framer-motion';

export const Features = () => {
  const features = [
    {
      title: "1",
      description: "???",
      icon: "✨"
    },
    {
      title: "2",
      description: "???",
      icon: "📱"
    },
    {
      title: "3",
      description: "???",
      icon: "🎯"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-16 bg-white/50" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-white hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {feature.title}
              </h3>
              <p className="text-blue-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};