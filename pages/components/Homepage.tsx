import { Box, Button, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

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
          src={"/images/face5.jpg"}
          alt="face"
          width={100}
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
        <Stack direction="row" paddingTop="1rem" gap="2rem" margin="0 auto">
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
            <span style={{ fontWeight: "100" }}> about</span>
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
            <span style={{ fontWeight: "100" }}> projects</span>
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
