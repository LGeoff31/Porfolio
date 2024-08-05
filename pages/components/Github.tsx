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
            // background: "#1d1d1f",
            paddingTop: "2rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            width: { md: "60%", xs: "80%" },
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h4"
            color="rgb(107 114 128/var(--tw-text-opacity))"
            letterSpacing={"10px"}
            fontWeight="100"
            textAlign={"center"}
            fontSize={{ md: "2.5rem", xs: "1.8rem" }}
            textTransform={"uppercase"}
          >
            Github History
          </Typography>
          <Box
            sx={{
              margin: "0 auto",
              transition: "transform 0.4s ease-in-out", // Animation transition
              ":hover": {
                transform: "scale(1.03)", // Scale to 1.2 times on hover
              },
            }}
          >
            <Button
              onClick={() =>
                window.open("https://github.com/lgeoff31", "_blank")
              }
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
              <GitHubIcon style={{ color: "white", fontSize: "2rem" }} />
            </Button>
          </Box>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: 0, opacity: 2 }}
            transition={{ duration: 3 }}
            className=" object-cover md:rounded-lg  overflow-hidden"
          >
            <GitHubCalendar
              username="lgeoff31"
              style={{
                margin: "0 auto",
                color: "white",
                paddingBottom: "3rem",
              }}
            />
          </motion.div>
        </Stack>
      </Grid>
    </>
  );
};

export default Github;
