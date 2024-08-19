import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Skills from "./Skills";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import HostedLinks from "./HostedLinks";
import { CodeBlock, dracula } from "react-code-blocks";

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
  return (
    <Box
      width="500px"
      paddingLeft={{ md: "2rem", xs: "0.1rem" }}
      paddingRight={{ md: "2rem", xs: "0.1rem" }}
      sx={{ background: "#1d1d1f" }}
    >
      <Typography
        color="white"
        variant="h4"
        padding="1rem"
        textAlign={"center"}
      >
        {title}
      </Typography>
      <Link
        href={link}
        target="_blank"
        sx={{
          cursor: "pointer",
        }}
      >
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className=" object-cover md:rounded-lg  overflow-hidden"
        >
          <Image
            src={src}
            alt="project"
            width={850}
            height={550}
            style={{ borderRadius: "2rem" }}
            layout="responsive"
          />
        </motion.div>
      </Link>
      <Skills skills={skills} />
      <Typography color="white" marginTop="1rem" paddingBottom="1rem">
        {description}
      </Typography>

      <HostedLinks hosted={hosted} code={code} />
    </Box>
  );
};

const PyScriptProjectCard = () => {
  return (
    <Box
      width="500px"
      paddingLeft={{ md: "2rem", xs: "0.1rem" }}
      paddingRight={{ md: "2rem", xs: "0.1rem" }}
      sx={{ background: "#1d1d1f" }}
    >
      <Typography
        color="white"
        variant="h4"
        padding="1rem"
        textAlign={"center"}
      >
        MetaScript
      </Typography>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" object-cover md:rounded-lg  overflow-hidden"
      >
        <pre>
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
          />
        </pre>
      </motion.div>
      <Skills skills={["Typescript"]} />
      <Typography color="white" marginTop="1rem" paddingBottom="1rem">
        Meta script is an interpreter with support for user defined functions,
        I/O, loops, conditionals, assignment operators and declarations.
      </Typography>

      <HostedLinks
        hosted={"https://github.com/LGeoff31/MetaScript"}
        code={"https://github.com/LGeoff31/MetaScript"}
      />
    </Box>
  );
};

const ProjectBox = () => {
  return (
    <Grid
      container
      direction="row"
      marginTop="2rem"
      gap="3rem"
      display="flex"
      justifyContent={"center"}
    >
      <Project
        title="ReturnPal"
        link="https://return-pal-preview.vercel.app/return"
        src="/images/returnpal.png"
        description="Return packages by the door. We take care of printing return labels, packaging, and driving to the post office."
        hosted="https://return-pal-preview.vercel.app/return"
        code="https://github.com/LGeoff31/returnPal"
        skills={["react", "typescript", "Tailwind", "graphql", "Firebase"]}
      />
      <Project
        title="AlgoFlow"
        link="https://algoflow.ca"
        src="/images/algoflow.png"
        description="AlgoFlow is a visualizer for the most popular sorting algorithms with animations, playback speed, and sound."
        hosted="https://algoflow.ca"
        code="https://github.com/LGeoff31/AlgoFlow"
        skills={["react", "javascript", "Audio API", "Material UI", "Next.js"]}
      />
      <Project
        title="UwRez"
        link="https://uwrez.com/"
        src="/images/rez.png"
        description="Help freshmens decide where to live by sharing your experiences. AI algorithm to provide the best choice for you."
        hosted="https://uwrez.com/"
        code="https://github.com/LGeoff31/return-pal"
        skills={[
          "postgresql",
          "sql",
          "react",
          "typescript",
          "Tailwind",
          "Firebase",
        ]}
      />
      <PyScriptProjectCard />
      <Project
        title="Where2Visit"
        link="https://where2visit.com/"
        src="/images/where2visit.png"
        description="Mobile application to allow your friends to decide where to eat. Features live voting with enabled filtering."
        hosted="https://where2visit.com/"
        code="https://github.com/LGeoff31/where2visit"
        skills={["react", "Google Places", "Yelp", "MongoDB", "Socket.io"]}
      />
      <Project
        title="Insomnia"
        link="https://insomniahub.vercel.app/"
        src="/images/line_chart.png"
        description="Algorithm to correlate sleep quality, duration, stress levels, exercise. Visualize your data and start change early! "
        hosted="https://insomniahub.vercel.app/"
        code="https://github.com/LGeoff31/Insomnia"
        skills={[
          "MongoDB",
          "Express",
          "React",
          "Node.JS",
          "Material UI",
          "Firebase",
        ]}
      />
      <Project
        title="RPS Contest Automation"
        link="https://github.com/LGeoff31/rock-paper-scissors-automater"
        src="/images/rps.jpeg"
        description="Win unlimited gas station prizes by running this program daily with a list of phone numbers."
        hosted="https://github.com/LGeoff31/rock-paper-scissors-automater"
        code="https://github.com/LGeoff31/rock-paper-scissors-automater"
        skills={["Seleinium", "python", "excel", "chromedrivers"]}
      />
    </Grid>
  );
};

export default ProjectBox;
