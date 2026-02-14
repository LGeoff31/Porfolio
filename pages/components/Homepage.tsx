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
            <p className="text-lg md:text-xl text-gray-300 font-light tracking-widest uppercase">
              Product × Fintech
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-500/50" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-5 mb-8">
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
              <span className="relative z-10 flex items-center gap-2">
                Projects
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
              </span>
            </button>
          </ScrollLink>
          <ScrollLink
            to="blog"
            smooth={true}
            duration={800}
            containerId="container"
            className="cursor-pointer"
          >
            <button
              className="group relative px-10 py-3 rounded-lg font-semibold text-white border border-green-500/40 backdrop-blur-sm hover:border-green-400 hover:bg-green-500/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:scale-[1.03] active:scale-[0.97]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Blog
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
              </span>
            </button>
          </ScrollLink>
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
