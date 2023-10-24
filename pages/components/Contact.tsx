import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import React, { useRef } from "react";

//   import EmailIcon from "@mui/icons-material/Email";

import emailjs from "@emailjs/browser";
import ContactInfo from "../subcomponents/ContactInfo";
import Form from "../subcomponents/Form";

const Contact = () => {
  return (
    <Box sx={{ background: "rgb(36,36,36)" }}>
      <Typography
        variant="h4"
        color="rgb(107 114 128/var(--tw-text-opacity))"
        letterSpacing={"10px"}
        fontWeight="100"
        textAlign={"center"}
        fontSize="2.5rem"
        textTransform={"uppercase"}
        paddingBottom="2rem"
        paddingTop="10rem"
      >
        Contact
      </Typography>

      <Stack
        direction={{ md: "row", sm: "column" }}
        sx={{ background: "rgb(36,36,36)" }}
        alignItems={"center"}
        display="flex"
        justifyContent={"center"}
        paddingLeft="4rem"
        paddingRight="4rem"
        paddingBottom="5rem"
      >
        <ContactInfo />
        <Form />
      </Stack>
    </Box>
  );
};
export default Contact;
