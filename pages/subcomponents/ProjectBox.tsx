import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Skills from "./Skills";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import HostedLinks from "./HostedLinks";

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
      {/* <Skills skills={skills} /> */}
      <Typography color="white" marginTop="1rem" paddingBottom="1rem">
        {description}
      </Typography>

      <HostedLinks hosted={hosted} code={code} />
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
        description="Return packages by the door, think of it as Uber for returns. We take care of printing return labels, packaging, and driving to the not so close post office."
        hosted="https://return-pal-preview.vercel.app/return"
        code="https://github.com/LGeoff31/return-pal"
        skills={["react", "typescript", "Tailwind", "graphql", "Firebase"]}
      />
      <Project
        title="UwRez"
        link="https://uwrez.com/"
        src="/images/uwrez.png"
        description="Aid Incoming Waterloo Students to decide which residence to choose. Share and add your experiences on all the residences near the Waterloo Region."
        hosted="https://return-pal-preview.vercel.app/return"
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

      <Project
        title="Where2Visit"
        link="https://where2visit.com/"
        src="/images/where2visit.png"
        description="A easily accessible web application to allow your friends to decide where to eat built with multiplayer feature and is very mobile friendly. "
        hosted="https://where2visit.netlify.app/"
        code="https://github.com/LGeoff31/where2visittest"
        skills={["react", "Google Places", "Yelp", "MongoDB", "Socket.io"]}
      />
      <Project
        title="Insomnia"
        link="https://insomniahub.vercel.app/"
        src="/images/line_chart.png"
        description="Gain insights into your sleep quality, duration, stress levels, exercise and correlations. Visualize your data and start change early! "
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
      {/* <Project
        title="Fitness API"
        link="https://fitness-workouts.vercel.app/"
        src="/images/fitnessApp.png"
        description="Any workout can be searched and auto-populated in milliseconds with hundreds of pages organized with pagination."
        hosted="https://fitness-workouts.vercel.app/"
        code="https://github.com/LGeoff31/workout_app"
        skills={["RapidAPI", "Pagination", "Javascript", "HTML", "Material-UI"]}
      />
      <Project
        title="Streaming Platform"
        link="https://visionarium.netlify.app/"
        src="/images/youtubeClone.png"
        description="Generate relevant videos targeted towards your preference! It includes features such as likes, views, and channel icons for you to enjoy your favourite videos online!"
        hosted="https://visionarium.netlify.app/"
        code="https://github.com/LGeoff31/youtubeWebsite"
        skills={["react", "javascript", "CSS", "HTML", "Material-ui"]}
      /> */}
      {/* <Project
        title="Memories"
        link="https://electricochy-memories.netlify.app/"
        src="/images/memories.png"
        description="Memories are what make life special so savor each moment! Record all your special moments so they'll never be lost!"
        hosted="https://electricochy-memories.netlify.app/"
        code="https://github.com/LGeoff31/memories"
        skills={[
          "Mongodb",
          "typescript",
          "CSS",
          "HTML",
          "material-ui",
          "express",
        ]}
      /> */}

      <Project
        title="RPS Contest Automation"
        link="https://github.com/LGeoff31/rock-paper-scissors-automater"
        src="/images/rps.jpeg"
        description="Online submission automator to enter Contests held seasonally by CirclekGames. Win unlimited prizes by running this program daily with a list of phone numbers."
        hosted="https://github.com/LGeoff31/rock-paper-scissors-automater"
        code="https://github.com/LGeoff31/rock-paper-scissors-automater"
        skills={["Seleinium", "python", "excel", "chromedrivers"]}
      />
      <Project
        title="Parkway Kitchen"
        link="https://parkway-kitchen.vercel.app/"
        src="/images/kitchen.png"
        description="This is an informative website for this local Chinese Restaurant named: Parway Kitchen. On this website, you can see view the menu, location, contact page, and more! Give this restaurant a try!"
        hosted="https://parkway-kitchen.vercel.app/"
        code="https://github.com/LGeoff31/parkway-kitchen"
        skills={["html", "css", "javascript"]}
      />
    </Grid>
  );
};

export default ProjectBox;
