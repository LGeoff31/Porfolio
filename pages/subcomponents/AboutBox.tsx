import React from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AboutBox = () => {
  const aboutData = [
    {
      src: "/images/waterlooLogo.png",
      name: "University of Waterloo",
      heading: "Software Engineering Student",
      date: "Present",
      description:
        "**CS:** Advanced Algorithms, Operating Systems, Database Systems, Compilers, Software Design & Testing, User Interfaces \n **Math:** Combinatorics & Optimization, Numerical Computation, Signals & Systems, Statistics, Linear Algebra, Calculus ",
    },
    {
      src: "/images/biztrip.png",
      name: "BizTrip AI",
      heading: "Software Engineer",
      date: "2025 - 2025",
      description: "SWE intern working on AI travel",
    },
    {
      src: "/images/shopify.png",
      name: "Shopify",
      heading: "Software Engineer",
      date: "2025 - 2025",
      description: "SWE Intern on the Monetization team.",
    },
    {
      src: "/images/rideco.png",
      name: "RideCo",
      heading: "Software Engineer",
      date: "2024 - 2024",
      description: "SWE Intern on high performacne Vehicle Tracking.",
    },
    {
      src: "/images/returnpal.ico",
      name: "Returnpal",
      heading: "Software Engineer",
      date: "2024 - 2024",
      description: "SWE Lead on building a uberized package return service (GTA).",
      imgFilter: "brightness(0) saturate(100%) invert(50%) sepia(90%) saturate(500%) hue-rotate(190deg) brightness(100%)",
    },
    {
      src: "/images/brain.png",
      name: "Contest Tutor",
      heading: "Waterloo Contests",
      date: "2019 - 2024",
      description:
        "Competitive math/programming for 100+ high school students.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {aboutData?.map((experience, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 },
          }}
        >
          <AboutMeSection
            key={idx}
            name={experience.name}
            description={experience.description}
            heading={experience.heading}
            src={experience.src}
            date={experience.date}
            imgFilter={experience.imgFilter}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

const AboutMeSection = ({
  name,
  description,
  heading,
  src,
  date,
  imgFilter,
}: {
  name: string;
  description: string;
  heading: string;
  src: string;
  date: string;
  imgFilter?: string;
}) => {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="group relative"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 hover:border-green-500/50 rounded-2xl p-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-green-500/20">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="relative flex-shrink-0">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl p-4 flex items-center justify-center">
              <img
                src={src}
                alt={name}
                className="relative z-10 w-full h-full object-contain"
                style={imgFilter ? { filter: imgFilter } : undefined}
              />
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <motion.h3
                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {name}
              </motion.h3>
              <motion.span
                className="text-sm text-gray-400 font-medium px-3 py-1 rounded-full bg-gray-700/50 backdrop-blur-sm border border-gray-600/30"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {date}
              </motion.span>
            </div>

            <motion.h4
              className="text-lg font-semibold text-white/90"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {heading}
            </motion.h4>

            <motion.p
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {description.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line.split(/(\*\*.*?\*\*)/).map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>
                    ) : (
                      <span key={j}>{part}</span>
                    )
                  )}
                </span>
              ))}
            </motion.p>

            {/* Link button intentionally removed */}
          </div>
        </div>

        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(45deg, transparent, rgba(34, 197, 94, 0.1), transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default AboutBox;
