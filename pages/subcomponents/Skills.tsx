import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Skills = ({ skills }: { skills: Array<string> }) => {
  // const skillDup = [
  //   ["react", "typescript", "Tailwind", "Typescript", "graphql", "Firebase"],
  //   ["RapidAPI", "Pagination", "Javascript", "HTML", "Material-UI"],
  //   ["react", "javascript", "CSS", "HTML", "Material-ui"],
  //   ["Mongodb", "typescript", "CSS", "HTML", "material-ui", "express"],
  //   ["Seleinium", "python", "terminal", "excel"],
  //   ["html", "css", "javascript"],
  // ];
  if (!skills || skills.length === 0) {
    return <Typography>No Skills displayed</Typography>;
  }
  return (
    <Grid
      container
      display="flex"
      direction="row"
      width="400px"
      sx={{ background: "rgb(36,36,36)" }}
      // sx={{ background: "rgb(36,36,36)" }}
    >
      {skills.map((skill, idx) => (
        <Box
          key={idx}
          sx={{
            marginTop: "1rem",
            background: "rgba(251, 194, 135, 0.16)",
            color: "#fcb232",
            textTransform: "uppercase",
            borderRadius: "10rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            marginRight: "0.8rem",
            textAlign: "center",
          }}
        >
          <Typography fontSize={{ md: "1rem" }}>{skill}</Typography>
        </Box>
      ))}
    </Grid>
  );
};

export default Skills;
