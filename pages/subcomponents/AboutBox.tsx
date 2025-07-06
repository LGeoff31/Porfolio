import React from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AboutBox = () => {
  const aboutData = [
    {
      src: "/images/waterlooLogo.png",
      name: "University of Waterloo",
      heading: "Software Engineering",
      date: "Present",
      description:
        "I'm taking Sequential Programming, Discrete Math, Statistics, and Psychology. I'm into full-stack development, competitive programming, and math.",
      color: "from-blue-500 to-cyan-500",
      iconBg: "from-blue-500/20 to-cyan-500/20",
    },
    {
      src: "/images/shopify.png",
      name: "Shopify",
      heading: "Software Engineer",
      date: "2025 - 2025",
      description: "SWE Intern on Monetization.",
      color: "from-green-500 to-emerald-500",
      iconBg: "from-green-500/20 to-emerald-500/20",
    },
    {
      src: "/images/rideco.png",
      name: "RideCo",
      heading: "Software Engineer",
      date: "2024 - 2024",
      description: "SWE Intern on Platforms.",

      color: "from-purple-500 to-pink-500",
      iconBg: "from-purple-500/20 to-pink-500/20",
    },
    {
      src: "/images/Reacter (1).png",
      name: "Contest Tutor",
      heading: "Academy for Math",
      date: "2019 - 2024",
      description:
        "Competitive math and computing tutor for 100+ high school students.",
      color: "from-orange-500 to-red-500",
      iconBg: "from-orange-500/20 to-red-500/20",
    },
    {
      src: "/images/marathon.png",
      name: "Competitive Runner",
      heading: "Marathon | Cross Country",
      date: "2017 - 2023",
      description:
        "My PB's: 800m: 2:09, 1000m: 2:51, 5km: 18:06, 10km: 41: 56, Half-Marathon: 1:29:58, Marathon: 3:17:02.",
      color: "from-indigo-500 to-purple-500",
      iconBg: "from-indigo-500/20 to-purple-500/20",
    },
    {
      src: "/images/magic.png",
      name: "Magic and Cardistry",
      heading: "Magician",
      date: "2019 - 2023",
      description: "President of the magic and cardistry club.",
      color: "from-pink-500 to-rose-500",
      iconBg: "from-pink-500/20 to-rose-500/20",
    },
    {
      src: "/images/yt.png",
      name: "Youtuber",
      heading: "Electricochy",
      date: "2023 - Present",
      description:
        "Channel focused on internships, skits, and reactions. Looking forward to pump out more upcoming videos!",
      color: "from-red-500 to-pink-500",
      iconBg: "from-red-500/20 to-pink-500/20",
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
            color={experience.color}
            iconBg={experience.iconBg}
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

  color,
  iconBg,
}: {
  name: string;
  description: string;
  heading: string;
  src: string;
  date: string;

  color: string;
  iconBg: string;
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
      <div
        className={`absolute inset-0 bg-gradient-to-r ${iconBg} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <motion.div
            className="relative flex-shrink-0"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div
              className={`relative w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-r ${iconBg} p-4 flex items-center justify-center backdrop-blur-sm border border-white/10`}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <img
                src={src}
                alt={name}
                className="relative z-10 w-full h-full object-contain filter brightness-0 invert"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 space-y-3">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <motion.h3
                className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}
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

            {/* Role */}
            <motion.h4
              className="text-lg font-semibold text-white/90"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {heading}
            </motion.h4>

            {/* Description */}
            <motion.p
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>

            {/* Action Button */}
            {/* {url && (
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="pt-2"
              >
                <motion.a
                  href={url}
                  className={`inline-flex items-center px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r ${color} hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group/btn`}
                  whileHover={{
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <span>My Experience</span>
                  <motion.div
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowForwardIcon className="w-5 h-5" />
                  </motion.div>
                </motion.a>
              </motion.div>
            )} */}
          </div>
        </div>

        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.1), transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default AboutBox;
