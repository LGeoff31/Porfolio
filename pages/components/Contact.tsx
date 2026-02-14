import React from "react";
import { motion } from "framer-motion";
import ContactInfo from "../subcomponents/ContactInfo";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
    <section className="relative min-h-screen">
      {/* Background blobs removed */}

      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto flex flex-col items-center justify-center">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h2>

          <motion.div
            className=""
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-xl text-gray-400 mt-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Open to new opportunities.
          </motion.p>
        </motion.div>

        {/* Contact Info Card Only */}
        <motion.div
          className="relative group w-full max-w-xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 hover:border-green-500/50 rounded-3xl p-8 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
            <motion.h3
              className="text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Let&apos;s Connect
              </span>
            </motion.h3>
            <ContactInfo />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
