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
}: {
  title: string;
  link: string;
  src: string;
  description: string;
  hosted: string;
  code: string;
}) => {
  return (
    <Box
      width="550px"
      borderRadius="1rem"
      paddingLeft="2rem"
      paddingRight="2rem"
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
          transition={{ duration: 0.8 }}
          className=" rounded-full object-cover md:rounded-lg  overflow-hidden"
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
      <Skills
        skills={["react", "typescript", "css", "html", "hygraphql", "firebase"]}
      />
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
        title="ReturnPal (E-Commerce)"
        link="https://return-pal.vercel.app/"
        src="/images/returnpal.png"
        description="Start up company designed to make returns seamless! Have an item to return (Ex. Amazon) easy! Simply schedule a date and fill in some information and get couriers driven to your door within 48 hours to deliver your item to the post office. We take care of printing return labels, packaging, and driving the not so close post office."
        hosted="https://return-pal.vercel.app/"
        code="https://return-pal.vercel.app/"
      />
      <Project
        title="Fitness API"
        link="https://return-pal.vercel.app/"
        src="/images/fitnessApp.png"
        description="Want a website to provide hundreds of distinct workouts targeting all muscle groups! With Rapid API, any workout can be searched and auto-populated in milliseconds with hundreds of pages organized with pagination."
        hosted="https://return-pal.vercel.app/"
        code="https://return-pal.vercel.app/"
      />
      <Project
        title="Streaming Platform"
        link="https://return-pal.vercel.app/"
        src="/images/youtubeClone.png"
        description="This is a streaming platform utilizing rapid API to generate relevant videos targeted towards your preference! It includes features such as likes, views, and channel icons for you to enjoy your favourite videos online!"
        hosted="https://return-pal.vercel.app/"
        code="https://return-pal.vercel.app/"
      />
      <Project
        title="Memories"
        link="https://return-pal.vercel.app/"
        src="/images/memories.png"
        description="Memories are what make life special so savor each moment! With this website, you can record all your special moments with dates so they'll never be lost!"
        hosted="https://return-pal.vercel.app/"
        code="https://return-pal.vercel.app/"
      />

      <Project
        title="RPS Contest Automation"
        link="https://return-pal.vercel.app/"
        src="/images/rps.jpeg"
        description="This Python program built using Selenium is a online submission automator to enter the Rock Paper Scissors Contest held seasonally by CirclekGames. The Game requires you to enter a phone number, play a simple game of rock paper scissors, then winning will give you a barcode to win a prize at your local CirclekGames to claim."
        hosted="https://return-pal.vercel.app/"
        code="https://return-pal.vercel.app/"
      />
      <Project
        title="Parkway Kitchen"
        link="https://return-pal.vercel.app/"
        src="/images/kitchen.png"
        description="This is an informative website for this local Chinese Restaurant named: Parway Kitchen. On this website, you can see view the menu, location, contact page, and more! Give this restaurant a try!"
        hosted="https://return-pal.vercel.app/"
        code="https://return-pal.vercel.app/"
      />
    </Grid>
  );
};

export default ProjectBox;