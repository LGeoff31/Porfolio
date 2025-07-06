import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  url: string;
  name: string;
  color: string;
  index: number;
};

const Language = ({ directionLeft, url, name, color, index }: Props) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="group relative flex flex-col items-center cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover="hover"
    >
      {/* Background Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
      />

      <motion.div
        className="relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 hover:border-blue-500/50 rounded-2xl p-4 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20"
        variants={hoverVariants}
        initial="initial"
        whileHover="hover"
      >
        {/* Skill Icon */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-3">
          <motion.img
            src={url}
            alt={name}
            className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
            whileHover={{ rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Skill Name */}
        <motion.h3
          className="text-center text-sm md:text-base font-medium text-white/90 group-hover:text-white transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
        >
          {name}
        </motion.h3>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.2), transparent)`,
          }}
        />
      </motion.div>

      {/* Floating Animation */}
      <motion.div
        className="absolute -top-2 -right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.2,
        }}
      />
    </motion.div>
  );
};

export default Language;
