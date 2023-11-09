import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import {
  Link as ScrollLink, // Alias Link as ScrollLink to avoid conflicts with your other Link imports
} from "react-scroll";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
const Homepage = () => {
  const [text, count] = useTypewriter({
    words: ["Geoffrey Lee", "Computer Engineer", "<LovesToCode />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <Box sx={{ background: "rgb(36,36,36)" }}>
      <div className="h-screen  flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />

        <Image
          src={"/images/cool_logo.png"}
          alt="face"
          width={300}
          height={100}
          style={{
            borderRadius: "50%",
            margin: "0 auto",
            marginBottom: "1rem",
          }}
        />

        <Typography
          sx={{
            textAlign: "center",
            color: "grey",
            textTransform: "uppercase",
            letterSpacing: "0.8rem",
            zIndex: 0,
          }}
        >
          full-stack developer
        </Typography>

        <Typography
          fontWeight="100px"
          // fontSize="2.5rem"
          color="white"
          textAlign={"center"}
          variant="h3"
          zIndex={0}
        >
          {text}
          <Cursor cursorColor="#F7AB0A" />
        </Typography>
        <Stack
          direction="row"
          paddingTop="1rem"
          gap={{ md: "2rem", xs: "0.5rem" }}
          margin="0 auto"
        >
          <Button
            sx={{
              textTransform: "uppercase",
              textDecoration: "none",
              color: "grey",
              fontWeight: "50",
              borderRadius: "10rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              "&:hover": {
                border: "2px solid #F7AB0A",
              },
            }}
          >
            <ScrollLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100} // Adjust the offset as needed
              duration={500}
              style={{
                textDecoration: "none",
                color: "grey",
                fontWeight: "50",
                borderRadius: "10rem",
                padding: "0.5rem 0rem",
                border: "2px solid transparent",
                // "&:hover": {
                //   border: "2px solid #F7AB0A",
                // },
              }}
            >
              <span style={{ fontWeight: "100" }}> About</span>
            </ScrollLink>
            {/* <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <span style={{ fontWeight: "100" }}> about</span>
            </Link> */}
          </Button>
          <Button
            sx={{
              textTransform: "uppercase",
              textDecoration: "none",
              color: "grey",
              fontWeight: "50",
              borderRadius: "10rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",

              "&:hover": {
                border: "2px solid #F7AB0A",
              },
            }}
          >
            <ScrollLink to="projects">
              <span style={{ fontWeight: "100" }}> projects</span>
            </ScrollLink>
          </Button>
          <Button
            sx={{
              textTransform: "uppercase",
              textDecoration: "none",
              color: "grey",
              fontWeight: "50",
              borderRadius: "10rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              "&:hover": {
                border: "2px solid #F7AB0A",
              },
            }}
          >
            <span style={{ fontWeight: "100" }}> skills</span>
          </Button>
        </Stack>
      </div>
    </Box>
  );
};

export default Homepage;
