import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import ProjectBox from "../subcomponents/ProjectBox";

const Project = () => {
  return (
    <Box
      sx={{
        paddingTop: "5rem",
        background: "rgb(36,36,36)",
        paddingBottom: "10rem",
        paddingLeft: { md: "11rem", sm: "4rem", xs: "2rem" },
        paddingRight: { md: "11rem", sm: "4rem", xs: "2rem" },
      }}
    >
      <Typography
        variant="h4"
        color="rgb(107 114 128/var(--tw-text-opacity))"
        letterSpacing={"10px"}
        fontWeight="100"
        textAlign={"center"}
        fontSize="2.5rem"
        textTransform={"uppercase"}
      >
        Projects
      </Typography>
      {/* <Typography color="white">
        Here are some notable projects I&apos;ve created but more are available
        at my Github!
      </Typography> */}
      <ProjectBox />
    </Box>
  );
};

export default Project;
