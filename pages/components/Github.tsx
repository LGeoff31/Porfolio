import React from "react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Github = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden flex flex-col items-center justify-center">
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl w-full mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            GitHub
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-xl text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Explore my open-source contributions, project activity, and coding
            journey on GitHub.
          </motion.p>
        </motion.div>

        {/* GitHub Content */}
        <motion.div
          className="relative flex flex-col items-center justify-center w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="group relative flex flex-col items-center justify-center w-full"
            variants={itemVariants}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex items-center justify-center mb-4">
              <GitHubIcon className="text-4xl mr-4 text-green-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                GitHub Contributions
              </h3>
            </div>
            <div className="flex justify-center w-full mb-6">
              <GitHubCalendar username="lgeoff31" colorScheme="dark" />
            </div>
            <a
              href="https://github.com/lgeoff31"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 group/btn mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
              <ArrowForwardIcon className="ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Github;
