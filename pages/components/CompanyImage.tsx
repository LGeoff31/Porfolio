import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import BackButton from "../subcomponents/BackButton";
const CompanyImage = () => {
  return (
    <Grid
      container
      sx={{
        background: "rgb(36,36,36)",
      }}
    >
      <BackButton />
      <Grid
        item
        xs={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Typography
          variant="h4"
          color="#fcb232"
          fontWeight="bold"
          fontSize={{ md: "3.5rem", xs: "2rem" }}
          sx={{
            letterSpacing: "0.1rem",
            textShadow: "1px 1px 5px rgba(0,0,0,0.5)",
          }}
        >
          RideCo
        </Typography>
        <Typography
          variant="subtitle1"
          color="rgba(255, 255, 255, 0.75)"
          sx={{ marginTop: "0.5rem", fontSize: "1.2rem" }}
        >
          Waterloo, ON
        </Typography>
        <Typography
          variant="subtitle2"
          color="rgba(255, 255, 255, 0.5)"
          sx={{
            marginTop: "0.3rem",
            fontSize: "1rem",
            fontStyle: "italic",
          }}
        >
          May - Aug 2024
        </Typography>
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={12}>
        <img
          src={"../images/rideco-marker.png"}
          alt="rideco logo"
          style={{ display: "block", margin: "2rem auto", width: "70rem" }}
        />
      </Grid>
    </Grid>
  );
};

export default CompanyImage;
