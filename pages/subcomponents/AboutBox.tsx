import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const AboutBox = () => {
  const aboutData = [
    {
      src: "/images/waterlooLogo.png",
      name: "University of Waterloo",
      heading: "Computer Engineering",
      date: "Sep 2023 - Apr 2028",
      description:
        "I'm currently in my 1A term in Computer Engineering. Courses: Classical Mechanics, Fundamentals of Programming, Linear Algebra, Calculus 1, Project Studio.",
    },
    {
      src: "/images/IB-logo.png",
      name: "St. Robert CHS",
      heading: "IB Graduate",
      date: "Sep 2023 - Apr 2028",
      description:
        "St. Robert CHS. IB Graduate. Took Grade 11 & 12 Computer Science in Python and Java. Higher Level (Universiy Leveled) Courses:  Math, Physics and Economics. Standard Level courses: Chemistry, English, French. Clubs: President of Magic and Cardistry Club, Varsity Cross Country & Track and Field, Deca, Orchestra band,   ",
    },
    {
      src: "/images/Reacter (1).png",
      name: "STEM & Contest Tutor",
      heading: "Companies: Tutorax & Academy for Math and English",
      date: "Sep 2019 - Present",
      description:
        "I Tutor Waterloo's infamous math contests (Euclid, CSMC, Fermet, Hypatia, CCC), along with Higher leveled calculus and advanced functions. I teach 12th grade physics topics (Kinematics, Forces, Energy, Electricity & Magnetism) and the fundementals of programming (loops, recursion, arrays, optimizations). Feel free to reach out: geoffrey31415@gmail.com ",
    },
    {
      src: "/images/marathon.png",
      name: "Competitive Runner",
      heading: "Cross Country & Track and Field",
      date: "2017-2023",
      description:
        "I mainly specizlize in long distance events from 5km and above. My PB's ~ 800m: 2:09, 1000m: 2:51, 5km: 18:06, 10km: 41: 56, Half-Marathon: 1:29:58, Marathon: 3:17:02 ",
    },
    {
      src: "/images/magic.png",
      name: "Magic and Cardistry",
      heading: "Magician",
      date: "2019-2023",
      description:
        "Passionate magician who loves the crafts of Deception and Psychology. Promoted through creating a Card Magic and Cardistry club at my school forming weekly iternary, numerous video demonstrations, and concluding with a school-wide magician talent show!   ",
    },
  ];
  return (
    <Stack>
      {aboutData.map((experience, idx) => (
        <AboutMeSection
          key={idx}
          name={experience.name}
          description={experience.description}
          heading={experience.heading}
          src={experience.src}
          date={experience.date}
        />
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
        borderRadius: "1rem",
        marginTop: "2%",
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
