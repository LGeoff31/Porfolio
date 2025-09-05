import React from "react";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import { CodeBlock, dracula } from "react-code-blocks";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Project = ({
  title,
  link,
  src,
  description,
  hosted,
  code,
  skills,
}: {
  title: string;
  link: string;
  src: string;
  description: string;
  hosted: string;
  code: string;
  skills: Array<string>;
}) => {
  const cardVariants = {
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

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
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
    <motion.div
      className="group relative"
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 hover:border-green-500/50 rounded-3xl p-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-green-500/20 overflow-hidden">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>

        <motion.div
          className="relative mb-6 overflow-hidden rounded-2xl"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={src}
                alt={title}
                width={1000}
                height={550}
                className="w-full h-auto object-cover"
                layout="responsive"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </a>
        </motion.div>

        <motion.p
          className="text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={hosted}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 group/btn relative z-20"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <span>Hosted</span>
            <motion.div
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowForwardIcon className="w-5 h-5" />
            </motion.div>
          </motion.a>

          <motion.a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-gray-600 to-gray-700 hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 group/btn relative z-20"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <span>View Code</span>
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

        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(45deg, transparent, rgba(34, 197, 94, 0.1), transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
};

const PyScriptProjectCard = () => {
  const cardVariants = {
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
    <motion.div
      className="group relative"
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 hover:border-purple-500/50 rounded-3xl p-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/20 overflow-hidden">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          MetaScript
        </motion.h3>

        <motion.div
          className="relative mb-4 overflow-hidden rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-[160px] md:h-[200px]">
            <pre className="rounded-2xl overflow-hidden text-xs h-full">
              <CodeBlock
                text={`fn fibonacci (n) {
  if |n <= 2| { return 1 }
  let prev = 1; let curr = 1;
  from 2 to n with i {
    let next_value = prev + curr
    prev = curr 
    curr = next_value
  }
  return curr
 }`}
                language="javascript"
                showLineNumbers={true}
                theme={dracula}
                customStyle={{
                  fontSize: "10px",
                  lineHeight: "1.25",
                  padding: "8px",
                  height: "100%",
                  overflow: "auto",
                }}
              />
            </pre>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        <motion.p
          className="text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          MetaScript is an interpreter with support for user defined functions,
          I/O, loops, conditionals, and environment scopes.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/LGeoff31/MetaScript" // TODO: replace with hosted URL if available
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 group/btn relative z-20"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <span>Hosted</span>
            <motion.div
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowForwardIcon className="w-5 h-5" />
            </motion.div>
          </motion.a>

          <motion.a
            href="https://github.com/LGeoff31/MetaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-gray-600 to-gray-700 hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 group/btn relative z-20"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <span>View Code</span>
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

        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.1), transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
};

const ProjectBox = () => {
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

  const projects = [
    {
      title: "Sync AI",
      link: "https://synqai.vercel.app/",
      src: "/images/sync.png",
      description:
        "Know when friends are free and what activity to plan. AI schedules the activity right into everyone's calender.",
      hosted: "https://synqai.vercel.app/",
      code: "https://github.com/LGeoff31/Sync-AI",
      skills: ["react", "graphql", "Firebase"],
    },
    {
      title: "ReturnPal",
      link: "https://return-pal-preview.vercel.app/return",
      src: "/images/returnpal.png",
      description:
        "Return packages by the door. We take care of printing return labels, packaging, and driving to the not-so-near post office.",
      hosted: "https://return-pal-preview.vercel.app/return",
      code: "https://github.com/LGeoff31/returnPal",
      skills: ["react", "graphql", "Firebase"],
    },
    {
      title: "UwRez",
      link: "https://uwdorm-lgeoff31s-projects.vercel.app/",
      src: "/images/uwrez.png",
      description:
        "Helping freshmens decide where to live. Features an AI algorithm suited to your preferences + map visualization.",
      hosted: "https://uwdorm-lgeoff31s-projects.vercel.app/",
      code: "https://github.com/LGeoff31/uwdorm",
      skills: ["sql", "Firebase", "Mapbox", "React"],
    },
    {
      title: "VisuGraph",
      link: "https://visugraph.vercel.app/",
      src: "/images/graph.png",
      description:
        "Learn different graph searching algorithms visually. Understand the tradeoffs and which traversal to use when.",
      hosted: "https://visugraph.vercel.app/",
      code: "https://github.com/LGeoff31/Graphs",
      skills: ["javascript", "tailwind", "html"],
    },
    {
      title: "AlgoFlow",
      link: "https://algo-flow.vercel.app/",
      src: "/images/algoflow.png",
      description:
        "Visualize the most popular sorting algorithms with real-time animations, playback speed, sound, and embedded code all by me.",
      hosted: "https://algo-flow.vercel.app/",
      code: "https://github.com/LGeoff31/AlgoFlow",
      skills: ["javascript", "Material UI", "Next.js"],
    },
    {
      title: "Datamac",
      link: "https://datamac.vercel.app/",
      src: "/images/datamac.png",
      description:
        "Zetamac but with progress tracking + leaderboard competition. Compete each day to improve and get the highest score.",
      hosted: "https://datamac.vercel.app/",
      code: "https://github.com/LGeoff31/DataMac",
      skills: ["javascript", "Material UI", "Next.js"],
    },
    {
      title: "Insomnia",
      link: "https://insomniahub.vercel.app/",
      src: "/images/line_chart.png",
      description:
        "Algorithm to correlate sleep quality, duration, stress levels, exercise. Visualize your data and start change early.",
      hosted: "https://insomniahub.vercel.app/",
      code: "https://github.com/LGeoff31/Insomnia",
      skills: ["MongoDB", "Express", "Node.JS"],
    },
    {
      title: "RPS Automation",
      link: "https://github.com/LGeoff31/rock-paper-scissors-automater",
      src: "/images/rps.jpeg",
      description:
        "Win unlimited gas station prizes by running this daily script with a list of phone numbers. Eligible for Circle K.",
      hosted: "https://github.com/LGeoff31/rock-paper-scissors-automater",
      code: "https://github.com/LGeoff31/rock-paper-scissors-automater",
      skills: ["Seleinium", "python", "excel"],
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {projects.map((project, idx) => (
        <Project
          key={idx}
          title={project.title}
          link={project.link}
          src={project.src}
          description={project.description}
          hosted={project.hosted}
          code={project.code}
          skills={project.skills}
        />
      ))}
      <PyScriptProjectCard />
    </motion.div>
  );
};

export default ProjectBox;
