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

const Form = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3o5mcdb",
        "template_xwxfc8f",
        form.current,
        "moDPWbTnW1z7oYc1i"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      style={{ justifyContent: "center", paddingTop: "2rem" }}
    >
      <Grid container spacing={1} sx={{ width: { md: "30rem", xs: "26rem" } }}>
        <Grid xs={12} sm={6} item>
          <TextField
            type="text"
            name="first_name"
            label="First Name"
            InputLabelProps={{ sx: { color: "grey" } }}
            placeholder="First Name"
            variant="outlined"
            fullWidth
            required
            style={{
              background: "rgba(148,163,184,.1)",
            }}
          />
        </Grid>
        <Grid xs={12} sm={6} item>
          <TextField
            name="last_name"
            label="Last Name"
            InputLabelProps={{ sx: { color: "grey" } }}
            placeholder="Last Name"
            variant="outlined"
            fullWidth
            required
            style={{
              background: "rgba(148,163,184,.1)",
            }}
          />
        </Grid>
        <Grid xs={12} item>
          <TextField
            name="user_email"
            type="email"
            label="Email"
            InputLabelProps={{ sx: { color: "grey" } }}
            placeholder="Email"
            variant="outlined"
            fullWidth
            required
            style={{
              background: "rgba(148,163,184,.1)",
            }}
          />
        </Grid>
        <Grid xs={12} item>
          <TextField
            name="message"
            label="Message"
            InputLabelProps={{ sx: { color: "grey" } }}
            multiline
            rows={4}
            placeholder="Type Your Message"
            variant="outlined"
            fullWidth
            required
            style={{
              background: "rgba(148,163,184,.1)",
            }}
          />
        </Grid>
        <Grid xs={12} item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{
              background: "rgb(247 171 10)",
            }}
          >
            <span
              style={{
                color: "rgb(0 0 0)",
                fontWeight: "bold",
                fontSize: "1.25rem",
                textTransform: "none",
              }}
            >
              Submit
            </span>
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
