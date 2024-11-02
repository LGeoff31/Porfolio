import { Button, Grid } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
  return (
    <Grid
      item
      xs={4}
      display="flex"
      alignItems="center"
      sx={{ background: "rgb(36,36,36)" }}
    >
      <Button
        href="/"
        sx={{
          background: "rgba(251, 194, 135, 0.16)",
          color: "#fcb232",
          border: "1px solid black",
          borderRadius: "10rem",
          transition: "transform 0.3s",
          marginLeft: "2rem",
          width: { md: "8rem", xs: "6rem" },
          "&:hover": {
            background: "rgba(251, 194, 135, 0.16)",
            transform: "scale(1.1)",
          },
        }}
      >
        <ArrowBackIcon /> Back
      </Button>
    </Grid>
  );
};

export default BackButton;
