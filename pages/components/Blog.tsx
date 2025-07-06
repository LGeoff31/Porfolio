import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Brain Teasers",
    date: "October 22, 2024",
    description:
      "My favourite riddles and puzzles that challenge the mind and spark creativity.",
    href: "brainteasers",
    color: "from-purple-500 to-pink-500",
    icon: "🧩",
  },
  {
    title: "Zetamac",
    date: "October 22, 2024",
    description:
      "Zetamac progression strategies and mathematical insights for competitive programming.",
    href: "zetamac",
    color: "from-blue-500 to-cyan-500",
    icon: "⚡",
  },
];

const Blog: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
              Blog
            </span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Blog Posts */}
        <motion.div
          className="relative space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              {/* Background Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${post.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />
              <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 hover:border-purple-500/50 rounded-3xl p-8 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{post.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {post.title}
                    </h3>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{post.description}</p>
                <a
                  href={post.href}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:from-pink-500 hover:to-purple-500 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                  <span className="ml-2">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
