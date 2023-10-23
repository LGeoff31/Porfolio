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
import { SocialIcon } from "react-social-icons";
const navigationLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Awards", href: "/awards" },
  { name: "Contact", href: "/contact" },
];

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
        <Box>
          <SocialIcon
            url="https://www.linkedin.com/in/lgeoff31/"
            fgColor="gray"
            bgColor="transparent"
            title="LinkedIn"
            target="_blank"
          />
          <SocialIcon
            url="https://github.com/lgeoff31"
            fgColor="gray"
            bgColor="transparent"
            title="GitHub"
            target="_blank"
          />
          <SocialIcon
            type="facebook"
            url="https://www.instagram.com/electricochy/"
            fgColor="gray"
            bgColor="transparent"
            title="GitHub"
            target="_blank"
          />
        </Box>
        <Stack direction="row" alignItems={"center"}>
          <SocialIcon
            type="facebook"
            url="https://email.com"
            fgColor="gray"
            bgColor="transparent"
            title="GitHub"
            target="_blank"
          />
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
        </Stack>
      </Stack>
    </div>
  );
};

export default Navbar;
