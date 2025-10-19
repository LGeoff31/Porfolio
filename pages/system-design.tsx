import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import BackButton from "./subcomponents/BackButton";
import Head from "next/head";

const SystemDesign = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pb-20 relative overflow-x-hidden">
      <Head>
        <title>System Design - Coming Soon</title>
        <meta name="description" content="System Design content coming soon" />
      </Head>
      
      <Navbar useScrollLinks={false} />
      <div className="max-w-4xl mx-auto pt-24 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="relative mb-16 flex justify-center items-center">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <BackButton />
          </div>
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg mb-4"
            >
              System Design
            </motion.h1>
          </div>
        </div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-md border border-gray-600/30 rounded-3xl p-8 md:p-10 shadow-xl transition-all duration-300 hover:border-green-400/40 hover:shadow-2xl group"
        >
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <motion.p
              className="text-gray-300 text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              System Design content is currently under development. Check back soon for in-depth articles and examples about designing scalable systems.
            </motion.p>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default SystemDesign;