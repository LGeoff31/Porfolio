import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import dynamic from "next/dynamic";

const ScrollLink = dynamic(
  () => import("react-scroll").then((module) => module.Link),
  { ssr: false }
);

interface NavbarProps {
  useScrollLinks?: boolean;
}

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

  const navLinks = [
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "blog", label: "Blog" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{
        backgroundColor: "transparent",
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-xl font-bold bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Geoffrey Lee
            </motion.h1>
          </motion.div>

          {useScrollLinks ? (
            <motion.div
              className="flex items-center gap-6 md:gap-8"
              variants={itemVariants}
            >
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  containerId="container"
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </ScrollLink>
              ))}
              <motion.a
                href="/images/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="px-4 py-1.5 rounded-full text-sm font-medium text-white"
                style={{ background: "linear-gradient(135deg, #22c55e, #10b981)" }}
              >
                Resume
              </motion.a>
            </motion.div>
          ) : (
            <motion.div
              className="flex items-center space-x-2"
              variants={itemVariants}
            >
              {socialLinks.map((social) => (
                <motion.div
                  key={social.network}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className="relative p-2 rounded-full bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 hover:border-green-500/50 transition-all duration-300"
                    whileHover={{
                      boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                    }}
                  >
                    <SocialIcon
                      url={social.url}
                      network={social.network}
                      fgColor="white"
                      bgColor="transparent"
                      style={{ width: 32, height: 32 }}
                      className="transition-transform duration-300 group-hover:scale-110"
                      target="_blank"
                    />
                  </motion.div>
                </motion.div>
              ))}

              <motion.a
                href="https://se-webring.xyz/"
                target="_blank"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="relative group hidden sm:block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="relative p-2 rounded-full bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 hover:border-green-500/50 transition-all duration-300"
                  whileHover={{ boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)" }}
                >
                  <img
                    alt="SE Webring"
                    src="/images/webring.png"
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    style={{
                      width: 32,
                      height: 32,
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                </motion.div>
              </motion.a>
            </motion.div>
          )}
        </div>
      </div>

    </motion.nav>
  );
};

export default Navbar;
