import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import dynamic from "next/dynamic";

const ScrollLink = dynamic(
  () => import("react-scroll").then((module) => module.Link),
  { ssr: false }
);

// Add prop type
interface NavbarProps {
  useScrollLinks?: boolean;
}

// Update Navbar to accept props
const Navbar: React.FC<NavbarProps> = ({ useScrollLinks = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();

  const navbarOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const navbarBlur = useTransform(scrollY, [0, 100], [10, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      url: "https://www.linkedin.com/in/lgeoff31/",
      network: "linkedin",
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-400 to-blue-500",
    },
    {
      url: "https://github.com/lgeoff31",
      network: "github",
      color: "from-gray-600 to-gray-700",
      hoverColor: "from-gray-500 to-gray-600",
    },
    {
      url: "mailto:geoffrey31415@gmail.com?subject=Interest From Your Portfolio Website&body=Hi Geoffrey,",
      network: "email",
      color: "from-red-500 to-red-600",
      hoverColor: "from-red-400 to-red-500",
    },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{
        backdropFilter: `blur(${navbarBlur.get()}px)`,
        backgroundColor: `rgba(17, 24, 39, ${navbarOpacity.get()})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <motion.div
            className="flex items-center space-x-4"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-10 h-10 rounded-full overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-pulse" />
              <div className="absolute inset-1 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  GL
                </span>
              </div>
            </motion.div>
            <motion.div
              className="hidden sm:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Geoffrey Lee
              </h1>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center space-x-2"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.network}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="relative p-2 rounded-full bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <SocialIcon
                    url={social.url}
                    network={social.network}
                    fgColor="white"
                    bgColor="transparent"
                    style={{ width: 20, height: 20 }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>
              </motion.div>
            ))}

            {useScrollLinks ? (
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-80}
                containerId="container"
                className="block"
              >
                <motion.button
                  className="relative px-6 py-2 rounded-full font-medium text-white overflow-hidden group transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                  }}
                  whileHover={{
                    boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
                  }}
                >
                  <span className="relative z-10">Contact</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </ScrollLink>
            ) : (
              <a href="#contact" className="block">
                <motion.button
                  className="relative px-6 py-2 rounded-full font-medium text-white overflow-hidden group transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                  }}
                  whileHover={{
                    boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
                  }}
                >
                  <span className="relative z-10">Contact</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </a>
            )}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: "50%",
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
