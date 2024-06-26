import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const AboutBox = () => {
  const aboutData = [
    {
      src: "/images/waterlooLogo.png",
      name: "University of Waterloo",
      heading: "Software Engineering",
      date: "2023 - 2028",
      description:
        "I'm taking Sequential Programming, Logic and Computation, Statistics, and Psychology. I'm into Full-Stack development, competitive programming, and math.",
    },
    {
      src: "/images/rideco.png",
      name: "RideCo",
      heading: "Software Engineer",
      date: "2024 - 2024",
      description: "SWE Intern @ RideCo. Working on RideCo Replay",
    },

    {
      src: "/images/Reacter (1).png",
      name: "Competitive STEM Tutor",
      heading: "Tutorax | Play Forever | Academy for Math and English",
      date: "2019 - 2024",
      description:
        "I've taught competitive math and computing for 4+ years to hundreds of high school students at over 3 tutoring organizations.  ",
    },
    {
      src: "/images/marathon.png",
      name: "Competitive Runner",
      heading: "Cross Country & Track and Field",
      date: "2017 - 2023",
      description:
        "I'm a marathoner with a range of personal bests. My PB's: 800m: 2:09, 1000m: 2:51, 5km: 18:06, 10km: 41: 56, Half-Marathon: 1:29:58, Marathon: 3:17:02.",
    },
    {
      src: "/images/magic.png",
      name: "Magic and Cardistry",
      heading: "Magician",
      date: "2019 - 2023",
      description:
        "Love everything to do with cardistry, magic, and Penn and Teller. Hosted a school-wide magic talent show competition with numerous participants and prizes. ",
    },
    {
      src: "/images/yt.png",
      name: "Youtuber",
      heading: "Electricochy & Daily Leetcode",
      date: "2023 - Present",
      description:
        "Channels focused on lifestyle and algorithmic programming. Looking to pump out more videos on both channels.",
    },
  ];
  return (
    <Stack>
      {aboutData?.map((experience, idx) => (
        <motion.div
          key={idx}
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className=" object-cover md:rounded-lg  overflow-hidden"
        >
          <AboutMeSection
            key={idx}
            name={experience.name}
            description={experience.description}
            heading={experience.heading}
            src={experience.src}
            date={experience.date}
          />
        </motion.div>
      ))}
    </Stack>
  );
};

const AboutMeSection = ({
  name,
  description,
  heading,
  src,
  date,
}: {
  name: string;
  description: string;
  heading: string;
  src: string;
  date: string;
}) => {
  return (
    <Stack
      direction={{ md: "row", xs: "column" }}
      sx={{
        background: "#1d1d1f",
        // borderRadius: "1rem",
        marginTop: "2rem",
        padding: "2rem",
      }}
    >
      <img
        src={src}
        alt="logo"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          width: "100px",
          height: "10%",
        }}
      />
      <Stack paddingLeft={{ md: "2rem" }} paddingTop="1rem" width="100%">
        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent={"space-between"}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            paddingBottom="0rem"
            marginBottom="0rem"
            sx={{ color: "white" }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              display: { xs: "none", md: "block" },
              visibility: { xs: "hidden", md: "visible" },
              color: "white",
            }}
          >
            {date}
          </Typography>
        </Stack>
        <Typography variant="body1" sx={{ color: "white" }}>
          {heading}
        </Typography>
        <Typography
          sx={{
            display: { xs: "block", md: "none" },
            color: "white",
            padding: { md: "0.5rem" },
          }}
        >
          {date}
        </Typography>

        <Typography sx={{ color: "white", paddingTop: "0.5rem" }}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AboutBox;
