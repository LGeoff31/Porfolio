import {
  AppBar,
  Avatar,
  Box,
  Grid,
  Link,
  Toolbar,
  Typography,
  Hidden,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
// import {
//   Link as ScrollLink, // Alias Link as ScrollLink to avoid conflicts with your other Link imports
// } from "react-scroll";
import dynamic from "next/dynamic";
import { SocialIcon } from "react-social-icons";
const navigationLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Awards", href: "/awards" },
  { name: "Contact", href: "/contact" },
];

const ScrollLink = dynamic(
  () => import("react-scroll").then((module) => module.Link),
  { ssr: false }
);
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white">
      <Stack
        direction="row"
        justifyContent={"space-between"}
        sx={{
          background: "rgb(36,36,36)",
          padding: "2rem",
          alignItems: "center",
        }}
      >
        <Stack direction="row">
          <Box
            sx={{
              transition: "transform 0.3s ease-in-out", // Animation transition
              ":hover": {
                transform: "scale(1.2)", // Scale to 1.2 times on hover
              },
            }}
          >
            <SocialIcon
              url="https://www.linkedin.com/in/lgeoff31/"
              fgColor="gray"
              bgColor="transparent"
              title="LinkedIn"
              target="_blank"
            />
          </Box>
          <Box
            sx={{
              transition: "transform 0.3s ease-in-out", // Animation transition
              ":hover": {
                transform: "scale(1.2)", // Scale to 1.2 times on hover
              },
            }}
          >
            <SocialIcon
              url="https://github.com/lgeoff31"
              fgColor="gray"
              bgColor="transparent"
              title="GitHub"
              target="_blank"
            />
          </Box>
        </Stack>
        <Stack direction="row" alignItems={"center"}>
          {/* <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            // offset={-100}
            duration={2000}
            style={{
              padding: "0.5rem 0rem",
              border: "2px solid transparent",
              textDecoration: "none",
              color: "grey",
              borderRadius: "10rem",
            }}
          > */}
          <Box
            sx={{
              transition: "transform 0.3s ease-in-out", // Animation transition
              ":hover": {
                transform: "scale(1.2)", // Scale to 1.2 times on hover
              },
            }}
          >
            <SocialIcon
              type="facebook"
              url="mailto:geoffrey31415@gmail.com?subject=Interest From Your Portfolio Website&body=Hi Geoffrey,"
              fgColor="gray"
              bgColor="transparent"
              title="GitHub"
              target="_blank"
            />
          </Box>
          {/* </ScrollLink> */}

          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            // offset={-100}
            duration={2000}
            style={{
              padding: "0.5rem 0rem",
              border: "2px solid transparent",
              textDecoration: "none",
              color: "grey",
              borderRadius: "10rem",
            }}
          >
            <Box
              sx={{
                transition: "transform 0.3s ease-in-out", // Animation transition
                ":hover": {
                  transform: "scale(1.2)", // Scale to 1.2 times on hover
                },
              }}
            >
              <Typography
                sx={{
                  color: "grey",
                  padding: "1rem",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Contact
              </Typography>
            </Box>
          </ScrollLink>
        </Stack>
      </Stack>
    </div>
  );
};

export default Navbar;
