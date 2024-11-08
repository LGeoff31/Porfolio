import { Box, Button, Stack, Typography } from "@mui/material";
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
    },
    {
      src: "/images/shopify.png",
      name: "Shopify",
      heading: "Software Engineer",
      date: "2025 - 2025",
      description: "Upcoming SWE Intern.",
    },
    {
      src: "/images/rideco.png",
      name: "RideCo",
      heading: "Software Engineer",
      date: "2024 - 2024",
      description: "SWE Intern @ RideCo.",
      url: "/rideco",
    },
    {
      src: "/images/Reacter (1).png",
      name: "Contest Tutor",
      heading: "Tutorax | Play Forever | Academy for Math and English",
      date: "2019 - 2024",
      description:
        "Competitive math and computing tutor for 100+ high school students.",
    },
    {
      src: "/images/marathon.png",
      name: "Competitive Runner",
      heading: "Marathon | Cross Country",
      date: "2017 - 2023",
      description:
        "My PB's: 800m: 2:09, 1000m: 2:51, 5km: 18:06, 10km: 41: 56, Half-Marathon: 1:29:58, Marathon: 3:17:02.",
    },
    {
      src: "/images/magic.png",
      name: "Magic and Cardistry",
      heading: "Magician",
      date: "2019 - 2023",
      description: "President of the magic and cardistry club.",
    },
    {
      src: "/images/yt.png",
      name: "Youtuber",
      heading: "Electricochy",
      date: "2023 - Present",
      description:
        "Channel focused on internships, skits, and reactions. Looking forward to pump out more upcoming videos!",
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
            url={experience.url}
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
  url,
}: {
  name: string;
  description: string;
  heading: string;
  src: string;
  date: string;
  url: string | undefined;
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
              fontStyle: "italic",
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
        {url && (
          <Button
            href="/rideco"
            sx={{
              background: "rgba(251, 194, 135, 0.16)",
              color: "#fcb232",
              border: "1px solid black",
              borderRadius: "10rem",
              transition: "transform 0.3s",
              marginTop: "1rem",
              width: "12rem",
              "&:hover": {
                background: "rgba(251, 194, 135, 0.16)",
                transform: "scale(1.1)",
              },
            }}
          >
            My Experience <ArrowForwardIcon />
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default AboutBox;
