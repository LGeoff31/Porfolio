import React from "react";
import { motion } from "framer-motion";
import Skill from "../subcomponents/Language";

const Languages = () => {
  const skills = [
    {
      url: "/images/typescript.png",
      name: "TypeScript",
      color: "from-blue-400 to-blue-700",
    },
    {
      url: "/images/JavaScript.png",
      name: "JavaScript",
      color: "from-yellow-500 to-orange-500",
    },

    {
      url: "/images/React.png",
      name: "React",
      color: "from-cyan-500 to-blue-500",
    },
    {
      url: "/images/next.png",
      name: "Next.js",
      color: "from-gray-600 to-gray-800",
    },
    {
      url: "/images/NodeJS (1).png",
      name: "Node.js",
      color: "from-green-500 to-emerald-500",
    },
    {
      url: "/images/graphql.png",
      name: "GraphQL",
      color: "from-cyan-400 to-blue-500",
    },
    {
      url: "/images/c++.png",
      name: "C++",
      color: "from-blue-600 to-purple-600",
    },
    {
      url: "/images/GitHub.webp",
      name: "GitHub",
      color: "from-gray-700 to-gray-900",
    },
    {
      url: "/images/python.png",
      name: "Python",
      color: "from-blue-500 to-yellow-500",
    },
    {
      url: "/images/sql.png",
      name: "SQL",
      color: "from-green-500 to-emerald-500",
    },
    {
      url: "/images/postgres.png",
      name: "PostgreSQL",
      color: "from-blue-500 to-indigo-500",
    },
    {
      url: "/images/rails.png",
      name: "Rails",
      color: "from-red-500 to-pink-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
              Skills
            </span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Skill
                  url={skill.url}
                  name={skill.name}
                  color={skill.color}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-0 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-0 w-40 h-40 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 0.6, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default Languages;
