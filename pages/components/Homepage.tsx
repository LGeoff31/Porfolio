import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import GitHubCalendar from "react-github-calendar";

const Homepage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative h-screen overflow-hidden overflow-x-hidden">
      {/* <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute bg-white/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 1 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div> */}

      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y, opacity }}
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-3">
            <span className="text-white">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              Geoffrey
            </span>
          </h1>
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-500/50" />
            <p className="text-lg md:text-xl text-gray-300 font-light">
              <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                Software Engineer
              </span>
              {" "}Interested in Algorithms & Performance
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-500/50" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-5 mb-5">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={800}
            containerId="container"
            className="cursor-pointer"
          >
            <button
              className="group relative px-10 py-3 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-[1.03] active:scale-[0.97]"
              style={{ background: "linear-gradient(135deg, #22c55e, #10b981)" }}
            >
              <span className="relative z-10">View My Projects</span>
            </button>
          </ScrollLink>
          <a
            href="/images/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <button
              className="group relative px-10 py-3 rounded-lg font-semibold text-white border border-green-500/40 backdrop-blur-sm hover:border-green-400 hover:bg-green-500/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:scale-[1.03] active:scale-[0.97]"
            >
              <span className="relative z-10">Resume</span>
            </button>
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 mt-2"
        >
          <a
            href="https://github.com/lgeoff31"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/lgeoff31/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:geoffrey31415@gmail.com?subject=Interest From Your Portfolio Website&body=Hi Geoffrey,"
            className="text-white/80 hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
        </motion.div>

        <div className="flex justify-center mt-10 w-full">
          <div className="w-full overflow-x-auto touch-pan-x -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-600/50 scrollbar-track-transparent">
            <div className="inline-block">
              <GitHubCalendar
                username="LGeoff31"
                blockSize={14}
                blockMargin={4}
                fontSize={16}
                colorScheme="dark"
                hideTotalCount={true}
              />
            </div>
          </div>
        </div>
        {/* <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {[
            { to: "about", label: "About", color: "from-blue-500 to-cyan-500" },
            {
              to: "projects",
              label: "Projects",
              color: "from-purple-500 to-pink-500",
            },
            {
              to: "skills",
              label: "Skills",
              color: "from-green-500 to-emerald-500",
            },
            { to: "blog", label: "Blog", color: "from-orange-500 to-red-500" },
            {
              to: "contact",
              label: "Contact",
              color: "from-indigo-500 to-purple-500",
            },
          ].map((button, index) => (
            <ScrollLink
              key={button.to}
              to={button.to}
              spy={true}
              smooth={true}
              duration={1000}
              offset={-80}
              containerId="container"
            >
              <motion.button
                className={`relative px-8 py-3 rounded-full font-medium text-white overflow-hidden group transition-all duration-300`}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                style={{
                  background: `linear-gradient(135deg, ${button.color
                    .split(" ")[0]
                    .replace("from-", "")}, ${button.color
                    .split(" ")[1]
                    .replace("to-", "")})`,
                }}
              >
                <span className="relative z-10">{button.label}</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </ScrollLink>
          ))}
        </motion.div> */}

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Mouse Follower Effect */}
      <motion.div
        className="fixed w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovered ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </div>
  );
};

export default Homepage;
