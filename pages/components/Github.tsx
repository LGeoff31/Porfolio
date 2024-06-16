import { Box, Button, Grid, Stack, Typography, Card } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import Skill from "../subcomponents/Language";
import GitHubCalendar from "react-github-calendar";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Group } from "@mui/icons-material";

const Github = () => {
  return (
    <>
      <Grid sx={{ background: "rgb(36,36,36)", paddingTop: "7rem" }}>
        <Stack
          sx={{
            background: "#1d1d1f",
            paddingTop: "2rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            width: "60%",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h4"
            color="rgb(107 114 128/var(--tw-text-opacity))"
            letterSpacing={"10px"}
            fontWeight="100"
            textAlign={"center"}
            fontSize={{ md: "2.5rem", xs: "1.5rem" }}
            textTransform={"uppercase"}
          >
            Github History
          </Typography>
          <Button
            onClick={() => window.open("https://github.com/lgeoff31", "_blank")}
            sx={{
              color: "white",
              textTransform: "none",
              fontSize: "1rem",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <GitHubIcon style={{ color: "white" }} />
            &nbsp; Github
          </Button>

          <GitHubCalendar
            username="lgeoff31"
            style={{
              margin: "0 auto",
              color: "white",
              paddingBottom: "3rem",
            }}
          />
          {/* <Button>Github</Button> */}
        </Stack>
      </Grid>
    </>
  );
};

export default Github;
