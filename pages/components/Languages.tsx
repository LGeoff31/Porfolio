import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import Skill from "../subcomponents/Language";

const Languages = () => {
  const skills = [
    { url: "/images/JavaScript.png", name: "JavaScript" },
    { url: "/images/HTML (1).png", name: "HTML 5" },
    { url: "/images/CSS3.png", name: "CSS 3" },
    { url: "/images/React (1).jpeg", name: "React.js" },
    { url: "/images/NextJS (1).jpeg", name: "Next.js" },
    { url: "/images/NodeJS (1).png", name: "Node.js" },
    { url: "/images/Tailwind.png", name: "Tailwind" },
    { url: "/images/c++.png", name: "C++" },
    { url: "/images/GitHub.webp", name: "GitHub" },
    { url: "/images/python.png", name: "Python" },
    { url: "/images/mongodb.png", name: "MongoDB" },
    { url: "/images/material.png", name: "Material UI" },
  ];

  return (
    <>
      <Box sx={{ background: "rgb(36,36,36)" }}>
        <Typography
          variant="h4"
          color="rgb(107 114 128/var(--tw-text-opacity))"
          letterSpacing={"10px"}
          fontWeight="100"
          textAlign={"center"}
          fontSize="2.5rem"
          textTransform={"uppercase"}
          paddingTop="5rem"
          paddingBottom="5rem"
        >
          Skills
        </Typography>

        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          className="  flex flex-col justify-center text-center md:text-left xl:flex-row max-w-[2000] xl:px-10 xl:space-y-0 items-center"
        >
          <div className="grid grid-cols-3 gap-5">
            {/* split skills into two groups for entrance direction */}
            {skills?.slice(0, skills.length / 2).map((skill) => (
              <Skill key={skill.name} url={skill.url} name={skill.name} />
            ))}
            {skills?.slice(skills.length / 2, skills.length).map((skill) => (
              <Skill
                key={skill.name}
                url={skill.url}
                name={skill.name}
                directionLeft
              />
            ))}
          </div>
        </motion.div>
      </Box>
    </>
  );
};

export default Languages;
