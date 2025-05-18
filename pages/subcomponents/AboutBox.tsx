import { Box, Button, Stack, Typography, Divider } from "@mui/material";
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
      description: "SWE Intern on Monetization.",
    },
    {
      src: "/images/rideco.png",
      name: "RideCo",
      heading: "Software Engineer",
      date: "2024 - 2024",
      description: "SWE Intern on Platforms.",
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
    <Stack spacing={3}>
      {aboutData?.map((experience, idx) => (
        <motion.div
          key={idx}
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="object-cover md:rounded-lg overflow-hidden"
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
        background: "rgba(26, 26, 26, 0.8)",
        marginTop: "2rem",
        padding: "2rem",
        borderRadius: "16px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(252, 178, 50, 0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 20px rgba(252, 178, 50, 0.15)",
          border: "1px solid rgba(252, 178, 50, 0.3)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: { md: "120px", xs: "100px" },
          height: { md: "120px", xs: "100px" },
          margin: { xs: "0 auto", md: "0" },
          padding: "1rem",
          borderRadius: "12px",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <img
          src={src}
          alt="logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Stack
        paddingLeft={{ md: "2rem" }}
        paddingTop={{ xs: "1.5rem", md: "0" }}
        width="100%"
        spacing={1}
      >
        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent={"space-between"}
          alignItems={{ md: "center", xs: "flex-start" }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#fcb232",
              fontSize: { md: "1.5rem", xs: "1.3rem" },
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              display: { xs: "none", md: "block" },
              color: "rgba(255, 255, 255, 0.7)",
              fontStyle: "italic",
              fontSize: "0.9rem",
            }}
          >
            {date}
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontSize: "1.1rem",
            fontWeight: "500",
            opacity: 0.9,
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            display: { xs: "block", md: "none" },
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "0.9rem",
            fontStyle: "italic",
          }}
        >
          {date}
        </Typography>

        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            paddingTop: "0.5rem",
            lineHeight: 1.6,
            fontSize: "1rem",
          }}
        >
          {description}
        </Typography>
        {url && (
          <Button
            href="/rideco"
            sx={{
              background: "rgba(252, 178, 50, 0.1)",
              color: "#fcb232",
              border: "1px solid rgba(252, 178, 50, 0.3)",
              borderRadius: "10rem",
              transition: "all 0.3s ease",
              marginTop: "1rem",
              width: "12rem",
              padding: "0.5rem 0rem",
              "&:hover": {
                background: "rgba(252, 178, 50, 0.2)",
                transform: "scale(1.05)",
                boxShadow: "0 4px 12px rgba(252, 178, 50, 0.2)",
              },
            }}
          >
            My Experience <ArrowForwardIcon sx={{ marginLeft: "0.5rem" }} />
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default AboutBox;
